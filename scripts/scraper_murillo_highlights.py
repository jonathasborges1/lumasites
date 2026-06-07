#!/usr/bin/env python3
"""
Scraper de Highlights/Stories — Dr. Murillo Martins
Faz login no Instagram, percorre todos os highlights do perfil,
intercepta os assets de mídia (imagens e vídeos) e os salva em:
  public/images/murillomartins/highlights/
  public/images/murillomartins/highlights/screenshots/

Credenciais (em ordem de prioridade):
  1. .env.local na raiz do projeto  →  INSTAGRAM_USER / INSTAGRAM_PASS
  2. .env na raiz do projeto        →  INSTAGRAM_USER / INSTAGRAM_PASS
  3. Flag de linha de comando       →  --login USUARIO SENHA

Uso:
  python scripts/scraper_murillo_highlights.py
  python scripts/scraper_murillo_highlights.py --highlight 18165293617420453
  python scripts/scraper_murillo_highlights.py --login USUARIO SENHA
"""

import os
import re
import sys
import json
import time
import hashlib
import requests
import argparse
from pathlib import Path
from datetime import datetime
from urllib.parse import urlparse

from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

# Carrega .env.local (prioridade) e depois .env — sem sobrescrever vars já definidas
try:
    from dotenv import load_dotenv
    _root = Path(__file__).parent.parent
    load_dotenv(_root / ".env.local", override=True)   # .env.local tem precedência
    load_dotenv(_root / ".env", override=False)         # .env só preenche o que falta
    HAS_DOTENV = True
except ImportError:
    HAS_DOTENV = False

try:
    from playwright_stealth import stealth_sync
    HAS_STEALTH = True
except ImportError:
    HAS_STEALTH = False

# ── Configuração ───────────────────────────────────────────────────────────────

PROFILE          = "drmurillomartins"
PROFILE_URL      = f"https://www.instagram.com/{PROFILE}/"
HIGHLIGHTS_BASE  = "https://www.instagram.com/stories/highlights/"

SCRIPT_DIR  = Path(__file__).parent
PUBLIC_DIR  = SCRIPT_DIR.parent / "public" / "images" / "murillomartins" / "highlights"
SHOTS_DIR   = PUBLIC_DIR / "screenshots"
JSON_PATH   = SCRIPT_DIR / "output_murillo" / "highlights_data.json"

for d in (PUBLIC_DIR, SHOTS_DIR):
    d.mkdir(parents=True, exist_ok=True)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
}

# CDN domains que hospedam assets reais de stories
CDN_DOMAINS = ("scontent", "cdninstagram.com", "fbcdn.net")
MEDIA_EXTS  = (".jpg", ".jpeg", ".png", ".webp", ".mp4", ".mov")
IMAGE_EXTS  = (".jpg", ".jpeg", ".png", ".webp")

# ── Utilitários ───────────────────────────────────────────────────────────────

def is_video(url: str) -> bool:
    path = urlparse(url).path.lower()
    return path.endswith(".mp4") or path.endswith(".mov") or "/video/" in url


def mp4_box_type(data: bytes) -> str:
    """Retorna o tipo do primeiro box MP4 (bytes 4-7)."""
    if len(data) < 8:
        return "unknown"
    try:
        return data[4:8].decode("ascii", errors="replace")
    except Exception:
        return "unknown"


def is_init_segment(data: bytes) -> bool:
    """Init segment começa com 'ftyp' ou 'moov' ou 'styp'."""
    return mp4_box_type(data) in ("ftyp", "moov", "styp")


def is_media_segment(data: bytes) -> bool:
    """Media segment começa com 'moof' ou 'emsg'."""
    return mp4_box_type(data) in ("moof", "emsg")


def assemble_dash(segments: list[dict]) -> list[bytes]:
    """
    Recebe lista de {'url', 'data': bytes, 'is_init': bool} em ordem de chegada.
    Agrupa por stream (cada init inicia um novo stream) e concatena.
    Retorna lista de MP4 completos (um por stream/frame de vídeo).
    """
    groups: list[list[dict]] = []
    current: list[dict] = []

    for seg in segments:
        if seg["is_init"]:
            if current:
                groups.append(current)
            current = [seg]
        else:
            if not current:
                # Segmento de dados sem init — criar grupo sozinho
                current = [seg]
            else:
                current.append(seg)

    if current:
        groups.append(current)

    results = []
    for group in groups:
        combined = b"".join(s["data"] for s in group)
        if len(combined) > 10_000:  # ignorar grupos menores que 10KB
            results.append(combined)
    return results


def is_story_asset(url: str, images_only: bool = False) -> bool:
    """Retorna True se a URL for um asset de mídia real (não JS/CSS)."""
    if not any(d in url for d in CDN_DOMAINS):
        return False
    parsed = urlparse(url)
    path = parsed.path.lower()
    if "/rsrc.php" in path or "/static/" in path:
        return False
    if images_only and is_video(url):
        return False
    if any(path.endswith(e) for e in MEDIA_EXTS):
        return True
    if re.search(r"/v/t\d+\.\d+", url) or re.search(r"/e\d+/", url):
        return True
    return False


def parse_highlight_arg(val: str) -> tuple[str, str]:
    """Extrai (id, label) de uma URL ou ID puro."""
    m = re.search(r"highlights/(\d+)", val)
    if m:
        hid = m.group(1)
    elif val.isdigit():
        hid = val
    else:
        hid = val.strip("/").split("/")[-1]
    return hid, f"highlight_{hid}"


def url_to_filename(url: str, idx: int, prefix: str = "") -> str:
    """Gera nome de arquivo único a partir da URL."""
    parsed = urlparse(url)
    ext = Path(parsed.path).suffix or ".jpg"
    short_hash = hashlib.md5(url.encode()).hexdigest()[:8]
    name = f"{prefix}{idx:03d}_{short_hash}{ext}"
    return name


def download(url: str, dest: Path, cookies: dict = None) -> bool:
    """Baixa um arquivo completo com streaming. Aceita cookies da sessão do browser."""
    if dest.exists() and dest.stat().st_size > 1024:
        return True
    headers = {**HEADERS}
    if cookies:
        # Formata cookies como string de header
        headers["Cookie"] = "; ".join(f"{k}={v}" for k, v in cookies.items())
        headers["Referer"] = "https://www.instagram.com/"
        headers["Origin"]  = "https://www.instagram.com"
    try:
        r = requests.get(url, headers=headers, timeout=60, stream=True)
        r.raise_for_status()
        tmp = dest.with_suffix(".tmp")
        with open(tmp, "wb") as f:
            for chunk in r.iter_content(65536):
                f.write(chunk)
        tmp.rename(dest)
        size_kb = dest.stat().st_size // 1024
        if size_kb < 1:
            dest.unlink()
            return False
        return True
    except Exception as e:
        print(f"    [ERRO download] {e}")
        if dest.exists():
            dest.unlink()
        return False


def get_browser_cookies(page) -> dict:
    """Extrai cookies da sessão do browser como dict simples."""
    try:
        raw = page.context.cookies()
        return {c["name"]: c["value"] for c in raw if "instagram" in c.get("domain", "")}
    except Exception:
        return {}


def download_video_ytdlp(highlight_url: str, dest_dir: Path, prefix: str = "") -> list[Path]:
    """Usa yt-dlp com cookies do Brave para baixar vídeos completos do highlight."""
    import subprocess
    import glob

    out_tmpl = str(dest_dir / f"{prefix}%(autonumber)03d.%(ext)s")
    cmd = [
        sys.executable, "-m", "yt-dlp",
        "--cookies-from-browser", "brave",
        "--output", out_tmpl,
        "--format", "mp4/bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best",
        "--no-playlist",
        "--quiet",
        "--no-warnings",
        highlight_url,
    ]
    print(f"    [yt-dlp] Baixando vídeos de {highlight_url[-40:]}")
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
        if result.returncode != 0:
            print(f"    [yt-dlp ERRO] {result.stderr.strip()[:200]}")
            return []
        # Listar arquivos baixados
        downloaded = sorted(dest_dir.glob(f"{prefix}*.mp4"))
        return downloaded
    except subprocess.TimeoutExpired:
        print("    [yt-dlp] Timeout após 120s")
        return []
    except Exception as e:
        print(f"    [yt-dlp ERRO] {e}")
        return []


def extract_urls_from_graphql(body: str) -> list:
    """Extrai URLs de mídia de respostas GraphQL/JSON do Instagram."""
    urls = []
    try:
        data = json.loads(body)
    except Exception:
        return urls

    raw = json.dumps(data)
    # Padrões de URL de story/reel no JSON
    patterns = [
        r"https://scontent[^\"'\\]+\.(?:jpg|jpeg|mp4|png)(?:[^\"'\\]*)?",
        r"https://[a-z0-9-]+\.fbcdn\.net[^\"'\\]+\.(?:jpg|jpeg|mp4|png)(?:[^\"'\\]*)?",
    ]
    for pattern in patterns:
        found = re.findall(pattern, raw)
        for u in found:
            clean = u.replace("\\u0026", "&").replace("\\/", "/")
            if clean not in urls:
                urls.append(clean)
    return urls

# ── Browser ────────────────────────────────────────────────────────────────────

BRAVE_EXE     = r"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"
BRAVE_PROFILE = os.path.join(os.environ.get("LOCALAPPDATA", ""), r"BraveSoftware\Brave-Browser\User Data")


def kill_brave():
    """Fecha todos os processos do Brave para liberar o perfil."""
    import subprocess
    result = subprocess.run(
        ["taskkill", "/F", "/IM", "brave.exe"],
        capture_output=True, text=True
    )
    if "brave.exe" in result.stdout or "brave.exe" in result.stderr:
        print("  [BRAVE] Processos encerrados. Aguardando liberação do perfil...")
        time.sleep(3)
    else:
        print("  [BRAVE] Nenhum processo encontrado — perfil livre.")


def make_browser(pw, headless: bool = False, use_brave: bool = False, video_dir: Path = None):
    if use_brave and os.path.exists(BRAVE_EXE):
        kill_brave()
        opts = dict(
            user_data_dir=BRAVE_PROFILE,
            executable_path=BRAVE_EXE,
            headless=False,
            viewport={"width": 390, "height": 844},
            locale="pt-BR",
            args=[
                "--no-sandbox",
                "--disable-blink-features=AutomationControlled",
                "--profile-directory=Default",
            ],
        )
        if video_dir:
            opts["record_video_dir"]  = str(video_dir)
            opts["record_video_size"] = {"width": 390, "height": 844}
        context = pw.chromium.launch_persistent_context(**opts)
        page = context.new_page()
        return context, page
    else:
        browser = pw.chromium.launch(
            headless=headless,
            args=[
                "--no-sandbox",
                "--disable-blink-features=AutomationControlled",
                "--lang=pt-BR",
            ],
        )
        context = browser.new_context(
            viewport={"width": 390, "height": 844},
            user_agent=HEADERS["User-Agent"],
            locale="pt-BR",
        )
        page = context.new_page()
        if HAS_STEALTH:
            stealth_sync(page)
        page.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', { get: () => false });
            Object.defineProperty(navigator, 'plugins', { get: () => [1,2,3] });
            window.chrome = { runtime: {} };
        """)
        return browser, page


def dismiss(page):
    for sel in [
        "button:has-text('Aceitar')",
        "button:has-text('Accept')",
        "button:has-text('Agora não')",
        "button:has-text('Not Now')",
        "button:has-text('Não agora')",
        "button[aria-label='Fechar']",
        "button[aria-label='Close']",
    ]:
        try:
            btn = page.locator(sel).first
            if btn.is_visible(timeout=800):
                btn.click()
                time.sleep(0.5)
        except Exception:
            pass


def do_login_manual(page) -> bool:
    """Abre a página de login, aguarda o usuário completar login+MFA manualmente
    e navegar até o perfil. Só continua quando o usuário pressionar Enter."""
    print("\n  [LOGIN MANUAL] Abrindo Instagram no browser...")
    page.goto("https://www.instagram.com/accounts/login/", wait_until="domcontentloaded", timeout=20000)
    time.sleep(2)

    print("\n" + "=" * 60)
    print("  AÇÃO NECESSÁRIA:")
    print(f"  1. Faça login no browser (usuário + senha + MFA se houver)")
    print(f"  2. Navegue até: {PROFILE_URL}")
    print(f"  3. Volte aqui e pressione ENTER para continuar.")
    print("=" * 60)
    input("\n  >> Pressione ENTER quando estiver no perfil do Instagram: ")

    url_atual = page.url
    print(f"\n  URL atual: {url_atual}")

    if "instagram.com" not in url_atual:
        print("  [ERRO] Não parece estar no Instagram. Abortando.")
        return False

    print("  [OK] Sinal recebido. Continuando o scraper...")
    time.sleep(1)
    return True


def do_login(page, username: str, password: str) -> bool:
    print("\n  [LOGIN] Autenticando no Instagram...")

    # Seletores alternativos para o campo de usuário (Instagram muda com frequência)
    USER_SELECTORS = [
        "input[name='username']",
        "input[aria-label='Número de telefone, nome de usuário ou email']",
        "input[aria-label='Phone number, username, or email']",
        "input[autocomplete='username']",
        "form input[type='text']",
    ]
    PASS_SELECTORS = [
        "input[name='password']",
        "input[aria-label='Senha']",
        "input[aria-label='Password']",
        "input[autocomplete='current-password']",
        "form input[type='password']",
    ]

    try:
        page.goto("https://www.instagram.com/accounts/login/", wait_until="domcontentloaded", timeout=25000)
        time.sleep(3)

        # Tirar screenshot diagnóstico antes de qualquer ação
        debug_shot = Path(__file__).parent / "output_murillo" / "debug_login_01_antes.png"
        debug_shot.parent.mkdir(exist_ok=True)
        page.screenshot(path=str(debug_shot))
        print(f"  [DEBUG] Screenshot salva: {debug_shot.name}")

        # Dispensar todos os modais/banners de cookie
        dismiss(page)
        time.sleep(1)

        # Encontrar campo de usuário (tenta todos os seletores)
        user_field = None
        for sel in USER_SELECTORS:
            try:
                f = page.locator(sel).first
                if f.is_visible(timeout=3000):
                    user_field = f
                    print(f"  [OK] Campo de usuário encontrado: {sel}")
                    break
            except Exception:
                continue

        if user_field is None:
            debug_shot2 = Path(__file__).parent / "output_murillo" / "debug_login_02_sem_form.png"
            page.screenshot(path=str(debug_shot2))
            print(f"  [ERRO] Formulário de login não encontrado. Screenshot: {debug_shot2.name}")
            print(f"  URL atual: {page.url}")
            return False

        # Preencher usuário com digitação simulada (menos suspeito que fill direto)
        user_field.click()
        time.sleep(0.3)
        page.keyboard.type(username, delay=80)
        time.sleep(0.5)

        # Encontrar campo de senha
        pass_field = None
        for sel in PASS_SELECTORS:
            try:
                f = page.locator(sel).first
                if f.is_visible(timeout=3000):
                    pass_field = f
                    break
            except Exception:
                continue

        if pass_field is None:
            print("  [ERRO] Campo de senha não encontrado.")
            return False

        pass_field.click()
        time.sleep(0.3)
        page.keyboard.type(password, delay=80)
        time.sleep(0.5)

        # Screenshot antes de submeter
        debug_shot3 = Path(__file__).parent / "output_murillo" / "debug_login_03_preenchido.png"
        page.screenshot(path=str(debug_shot3))
        print(f"  [DEBUG] Screenshot salva: {debug_shot3.name}")

        # Submeter
        page.keyboard.press("Enter")
        time.sleep(5)

        # Dispensar "Salvar login?" ou outros modais pós-login
        dismiss(page)
        time.sleep(2)

        # Screenshot pós-login
        debug_shot4 = Path(__file__).parent / "output_murillo" / "debug_login_04_pos.png"
        page.screenshot(path=str(debug_shot4))
        print(f"  [DEBUG] Screenshot salva: {debug_shot4.name}")
        print(f"  URL pós-login: {page.url}")

        # Verificar sucesso
        if "login" in page.url or "challenge" in page.url or "checkpoint" in page.url:
            print("  [ERRO] Login falhou ou requer verificação adicional.")
            print("         Verifique as screenshots de debug em scripts/output_murillo/")
            return False

        print("  [OK] Login realizado com sucesso.")
        return True

    except Exception as e:
        print(f"  [ERRO] Exceção durante login: {e}")
        try:
            dbg = Path(__file__).parent / "output_murillo" / "debug_login_exception.png"
            page.screenshot(path=str(dbg))
            print(f"  [DEBUG] Screenshot de exceção: {dbg.name}")
        except Exception:
            pass
        return False

# ── Coleta de highlight IDs ────────────────────────────────────────────────────

def get_highlight_ids(page) -> list[dict]:
    """Navega ao perfil e coleta IDs e nomes dos highlights."""
    print(f"\n  [PERFIL] Carregando {PROFILE_URL}")
    page.goto(PROFILE_URL, wait_until="domcontentloaded", timeout=20000)
    time.sleep(3)
    dismiss(page)

    highlights = []

    # Interceptar API responses que contêm dados de highlights
    collected_ids = set()

    def on_response(response):
        if "highlights" in response.url or "reel_ids" in response.url:
            try:
                body = response.text()
                data = json.loads(body)
                raw = json.dumps(data)
                ids = re.findall(r'"id"\s*:\s*"(\d{10,})"', raw)
                for hid in ids:
                    collected_ids.add(hid)
            except Exception:
                pass

    page.on("response", on_response)
    time.sleep(3)

    # Tentar coletar via DOM — highlight bubbles
    try:
        bubbles = page.locator("div[role='button'] a[href*='/highlights/']").all()
        for b in bubbles:
            href = b.get_attribute("href") or ""
            m = re.search(r"/highlights/(\d+)/", href)
            if m:
                hid = m.group(1)
                collected_ids.add(hid)
                try:
                    label = b.get_attribute("aria-label") or b.inner_text()
                except Exception:
                    label = hid
                highlights.append({"id": hid, "label": label.strip()})
    except Exception:
        pass

    # Combinar com IDs coletados via API
    existing_ids = {h["id"] for h in highlights}
    for hid in collected_ids:
        if hid not in existing_ids:
            highlights.append({"id": hid, "label": f"highlight_{hid}"})

    print(f"  Highlights encontrados: {len(highlights)}")
    for h in highlights:
        print(f"    - {h['id']} | {h['label']}")

    return highlights

# ── Scraping de um highlight ───────────────────────────────────────────────────

def scrape_highlight(context, highlight_id: str, label: str, global_assets: list, images_only: bool = False) -> dict:
    import shutil

    url = f"{HIGHLIGHTS_BASE}{highlight_id}/"
    print(f"\n  [HIGHLIGHT] {label} ({highlight_id})")
    print(f"  URL: {url}")

    hl_dir = PUBLIC_DIR / re.sub(r"[^\w-]", "_", label.lower())
    hl_dir.mkdir(exist_ok=True)

    page = context.new_page()

    # Imagens: URLs interceptadas para fetch posterior via browser
    image_urls: list[str] = []
    seen_urls:  set[str]  = set()

    # DASH segments interceptados para montagem de MP4
    dash_segs: list[dict] = []

    def on_response(response):
        if highlight_id not in page.url:
            return
        rurl = response.url
        if not is_story_asset(rurl):
            return

        if is_video(rurl):
            # Capturar segmentos DASH imediatamente (response.body() só funciona aqui)
            try:
                body = response.body()
                if len(body) < 100:
                    return
                box = mp4_box_type(body)
                seg = {
                    "url":     rurl,
                    "data":    body,
                    "is_init": is_init_segment(body),
                    "box":     box,
                    "size":    len(body),
                }
                dash_segs.append(seg)
                print(f"    [DASH] {box} {len(body)//1024}KB  {rurl[-60:]}")
            except Exception as e:
                print(f"    [DASH-ERR] {e}")
            return

        # Imagens: guardar URL para fetch posterior via browser
        if rurl in seen_urls:
            return
        seen_urls.add(rurl)
        image_urls.append(rurl)

    page.on("response", on_response)

    try:
        page.goto(url, wait_until="domcontentloaded", timeout=25000)
    except PWTimeout:
        print("    [AVISO] Timeout no carregamento — continuando...")

    time.sleep(3)
    dismiss(page)

    def on_this_highlight() -> bool:
        return highlight_id in page.url

    # Navegar pelos frames — única passagem
    frame_count = 0
    for frame_idx in range(0, 40):
        time.sleep(2)

        if not on_this_highlight():
            print(f"    Saiu do highlight após {frame_count} frames.")
            break

        # Screenshot de referência
        shot_path = SHOTS_DIR / f"{highlight_id}_frame_{frame_idx:02d}.png"
        try:
            page.screenshot(path=str(shot_path))
        except Exception:
            pass

        page.keyboard.press("ArrowRight")
        time.sleep(0.5)

        if not on_this_highlight():
            print(f"    Fim do highlight após {frame_idx + 1} frames.")
            break

        frame_count += 1

    page.remove_listener("response", on_response)

    print(f"    Imagens interceptadas:     {len(image_urls)}")
    print(f"    Segmentos DASH capturados: {len(dash_segs)}")

    downloaded = []

    # ── Imagens: Playwright APIRequest (mantém cookies, sem CORS) ────────────
    api = context.request
    for i, rurl in enumerate(image_urls):
        ext = Path(urlparse(rurl).path).suffix or ".jpg"
        short_hash = hashlib.md5(rurl.encode()).hexdigest()[:8]
        fname = f"{highlight_id}_img_{i:03d}_{short_hash}{ext}"
        dest  = hl_dir / fname
        try:
            resp = api.get(rurl, headers={
                "Referer": "https://www.instagram.com/",
                "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            })
            if resp.status != 200:
                continue
            data = resp.body()
            if len(data) < 10_000:
                continue
            dest.write_bytes(data)
            size_kb = len(data) // 1024
            rel = str(dest.relative_to(SCRIPT_DIR.parent / "public")).replace("\\", "/")
            downloaded.append({"url": rurl, "local": f"/{rel}", "file": fname, "type": "image"})
            print(f"    [IMG] {fname} ({size_kb} KB)")
        except Exception as e:
            print(f"    [IMG-ERR] {e}")

    try:
        page.close()
    except Exception:
        pass

    # ── Vídeos: montar MP4 a partir dos segmentos DASH ────────────────────────
    if not images_only and dash_segs:
        mp4_blobs = assemble_dash(dash_segs)
        print(f"    MP4s montados via DASH: {len(mp4_blobs)}")
        for vi, blob in enumerate(mp4_blobs):
            vfname = f"{highlight_id}_video_{vi:02d}.mp4"
            vdest  = hl_dir / vfname
            vdest.write_bytes(blob)
            size_kb = len(blob) // 1024
            rel = str(vdest.relative_to(SCRIPT_DIR.parent / "public")).replace("\\", "/")
            downloaded.append({"url": "", "local": f"/{rel}", "file": vfname, "type": "video"})
            print(f"    [VIDEO] {vfname} ({size_kb} KB)")
    elif not images_only and not dash_segs:
        print("    Nenhum segmento DASH capturado — sem videos para este highlight.")

    print(f"    Total salvo: {len(downloaded)} arquivo(s)")

    result = {
        "id":         highlight_id,
        "label":      label,
        "url":        url,
        "frames":     frame_count,
        "assets":     downloaded,
        "screenshots": [str(p) for p in sorted(SHOTS_DIR.glob(f"{highlight_id}_frame_*.png"))],
    }
    global_assets.extend(downloaded)
    return result

# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Scraper de Highlights — Dr. Murillo Martins")
    parser.add_argument("--login",        nargs=2, metavar=("USUARIO", "SENHA"), help="Credenciais do Instagram (alternativa ao .env.local)")
    parser.add_argument("--manual-login", action="store_true", help="Abre o browser e aguarda você fazer login manualmente")
    parser.add_argument("--brave",        action="store_true", help="Usa o Brave com perfil existente (já logado no Instagram)")
    parser.add_argument("--highlights",   nargs="+", metavar="URL_ou_ID", help="Lista de URLs ou IDs de highlights para baixar")
    parser.add_argument("--highlight",    metavar="ID", help="ID único de highlight (alternativa a --highlights)")
    parser.add_argument("--images-only",  action="store_true", default=False, help="Baixar apenas imagens, ignorar vídeos")
    parser.add_argument("--headless",     action="store_true", default=False, help="Rodar sem abrir o browser")
    args = parser.parse_args()

    # Resolver credenciais: 1) --brave  2) --manual-login  3) .env.local/.env  4) --login
    username, password = "", ""
    if not args.manual_login and not args.brave:
        if args.login:
            username, password = args.login
        else:
            username = os.environ.get("INSTAGRAM_USER", "")
            password = os.environ.get("INSTAGRAM_PASS", "")

        if not username or not password:
            print("[ERRO] Credenciais não encontradas.")
            print("  Opção 1 — login manual no browser:")
            print("    --manual-login")
            print("  Opção 2 — adicione ao .env.local:")
            print("    INSTAGRAM_USER=seu_usuario")
            print("    INSTAGRAM_PASS=sua_senha")
            print("  Opção 3 — passe via flag:")
            print("    --login seu_usuario sua_senha")
            sys.exit(1)

        if not HAS_DOTENV:
            print("[AVISO] python-dotenv não instalado — suporte a .env desabilitado.")
            print("  Instale com: pip install python-dotenv")

    print("=" * 60)
    print("  HIGHLIGHTS SCRAPER — DR. MURILLO MARTINS")
    print(f"  {datetime.now().strftime('%d/%m/%Y %H:%M')}")
    print("=" * 60)

    all_results  = []
    global_assets = []

    with sync_playwright() as pw:
        rec_root = PUBLIC_DIR / "_recordings"
        rec_root.mkdir(exist_ok=True)
        browser, page = make_browser(pw, headless=args.headless, use_brave=args.brave,
                                     video_dir=rec_root if args.brave else None)

        # Login
        if args.brave:
            print("\n  [BRAVE] Usando perfil existente do Brave — verificando sessão...")
            page.goto(PROFILE_URL, wait_until="domcontentloaded", timeout=20000)
            time.sleep(3)
            if "login" in page.url or "accounts" in page.url:
                print("  [ERRO] Instagram não está logado no Brave. Faça login manualmente no Brave primeiro.")
                browser.close()
                sys.exit(1)
            print(f"  [OK] Sessão ativa. URL: {page.url}")
            logged_in = True
        elif args.manual_login:
            logged_in = do_login_manual(page)
        else:
            logged_in = do_login(page, username, password)
        if not logged_in:
            print("\n[ERRO FATAL] Login falhou. Não é possível acessar highlights sem autenticação.")
            print("  Verifique as screenshots de debug em: scripts/output_murillo/debug_login_*.png")
            print("  Causas comuns:")
            print("    - Credenciais incorretas no .env.local")
            print("    - Instagram pedindo verificação em 2 etapas")
            print("    - Conta bloqueada temporariamente por acesso automatizado")
            browser.close()
            sys.exit(1)

        # Definir highlights a percorrer
        images_only = args.images_only

        if args.highlights:
            highlights = []
            for val in args.highlights:
                hid, hlabel = parse_highlight_arg(val)
                highlights.append({"id": hid, "label": hlabel})
        elif args.highlight:
            hid, hlabel = parse_highlight_arg(args.highlight)
            highlights = [{"id": hid, "label": hlabel}]
        else:
            highlights = get_highlight_ids(page)

        if not highlights:
            print("  [ERRO] Nenhum highlight encontrado. Use --highlights URL1 URL2 ...")
            browser.close()
            sys.exit(1)

        print(f"\n  Highlights a processar: {len(highlights)}")
        for h in highlights:
            print(f"    - {h['id']} | {h['label']}")

        # Scraping de cada highlight — passa context para abrir página gravada
        for hl in highlights:
            result = scrape_highlight(browser, hl["id"], hl["label"], global_assets, images_only=images_only)
            all_results.append(result)
            time.sleep(2)

        browser.close()

    # Salvar JSON com todos os dados
    report = {
        "generated_at": datetime.now().isoformat(),
        "profile":       PROFILE,
        "highlights":    all_results,
        "total_assets":  len(global_assets),
        "assets":        global_assets,
    }
    JSON_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=False, indent=2)

    print("\n" + "=" * 60)
    print("  CONCLUIDO")
    print(f"  Highlights processados: {len(all_results)}")
    print(f"  Assets baixados:        {len(global_assets)}")
    print(f"  Pasta pública:          {PUBLIC_DIR}")
    print(f"  Screenshots:            {SHOTS_DIR}")
    print(f"  JSON:                   {JSON_PATH}")
    print("=" * 60)

    # Listar assets baixados para uso na proposta
    if global_assets:
        print("\n  ASSETS DISPONÍVEIS PARA A PROPOSTA:")
        for a in global_assets[:20]:
            print(f"    {a['local']}")

if __name__ == "__main__":
    main()
