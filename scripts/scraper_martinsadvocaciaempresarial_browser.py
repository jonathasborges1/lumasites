#!/usr/bin/env python3
"""
Scraper com browser real (Playwright) — Martins Advocacia Empresarial
Abre Chromium (perfil Brave), navega no Instagram e extrai identidade visual completa.
Uso: python scripts/scraper_martinsadvocaciaempresarial_browser.py
     python scripts/scraper_martinsadvocaciaempresarial_browser.py --login USUARIO SENHA
"""

import os
import re
import sys
import json
import time
import requests
from io import BytesIO
from pathlib import Path
from datetime import datetime
from collections import Counter
from urllib.parse import urlparse

from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

try:
    from playwright_stealth import stealth_sync
    HAS_STEALTH = True
except ImportError:
    HAS_STEALTH = False

try:
    from colorthief import ColorThief
    HAS_COLORTHIEF = True
except ImportError:
    HAS_COLORTHIEF = False

try:
    from PIL import Image
    HAS_PIL = True
except ImportError:
    HAS_PIL = False

# ── Configuração ──────────────────────────────────────────────────────────────

INSTAGRAM_USERNAME  = "martins.advocaciaempresarial"
INSTAGRAM_URL       = f"https://www.instagram.com/{INSTAGRAM_USERNAME}/"

SCRIPT_DIR   = Path(__file__).parent
OUTPUT_DIR   = SCRIPT_DIR / "output_martinsadvocaciaempresarial"
IMAGES_DIR   = OUTPUT_DIR / "images"
SHOTS_DIR    = OUTPUT_DIR / "screenshots"
MD_PATH      = SCRIPT_DIR.parent / "app" / "proposta-comercial" / "martinsadvocaciaempresarial" / "martinsadvocaciaempresarial-proposta-discovery.md"

for d in (OUTPUT_DIR, IMAGES_DIR, SHOTS_DIR):
    d.mkdir(parents=True, exist_ok=True)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
}

# ── Helpers ───────────────────────────────────────────────────────────────────

def dominant_colors(img_bytes: bytes, n: int = 5) -> list[str]:
    if not HAS_COLORTHIEF:
        return []
    try:
        ct = ColorThief(BytesIO(img_bytes))
        palette = ct.get_palette(color_count=n, quality=1)
        return [f"#{r:02X}{g:02X}{b:02X}" for r, g, b in palette]
    except Exception:
        return []

def download_image(url: str, dest: Path) -> bytes | None:
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        r.raise_for_status()
        dest.write_bytes(r.content)
        return r.content
    except Exception as e:
        print(f"  [WARN] download falhou {url[:60]}…: {e}")
        return None

def parse_count(text: str) -> str:
    text = text.strip().replace("\xa0", "").replace(",", ".")
    m = re.search(r"[\d.,]+[KkMm]?", text)
    return m.group() if m else text

# ── Scraping principal ────────────────────────────────────────────────────────

def run(login_user: str = "", login_pass: str = "") -> dict:
    data: dict = {
        "scraped_at": datetime.now().isoformat(),
        "profile": {},
        "posts": [],
        "colors": {"profile_pic": [], "posts": []},
        "screenshots": [],
    }

    import shutil, subprocess, tempfile
    BRAVE_PATH      = r"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"
    BRAVE_USER_DATA = Path(r"C:\Users\jonathas.000\AppData\Local\BraveSoftware\Brave-Browser\User Data")

    print("[INFO] Encerrando processos Brave existentes…")
    subprocess.run(["taskkill", "/F", "/IM", "brave.exe"], capture_output=True)
    time.sleep(2)

    tmp_dir = Path(tempfile.mkdtemp(prefix="brave_martinsadv_"))
    print(f"[INFO] Copiando perfil Brave para diretório temporário: {tmp_dir}")
    src_profile = BRAVE_USER_DATA / "Default"
    dst_profile = tmp_dir / "Default"

    essential = ["Cookies", "Local State"]
    dst_profile.mkdir(parents=True, exist_ok=True)
    for item in essential:
        src = BRAVE_USER_DATA / item if item == "Local State" else src_profile / item
        dst = tmp_dir / item if item == "Local State" else dst_profile / item
        if src.exists():
            shutil.copy2(src, dst)

    for folder in ["Local Storage", "Session Storage", "IndexedDB"]:
        src = src_profile / folder
        dst = dst_profile / folder
        if src.exists():
            shutil.copytree(src, dst, dirs_exist_ok=True)

    print("[INFO] Perfil copiado. Iniciando Playwright…")

    with sync_playwright() as p:
        ctx = p.chromium.launch_persistent_context(
            user_data_dir=str(tmp_dir),
            executable_path=BRAVE_PATH,
            headless=False,
            slow_mo=80,
            viewport={"width": 1280, "height": 900},
            locale="pt-BR",
            args=["--profile-directory=Default"],
        )
        page = ctx.new_page()

        if HAS_STEALTH:
            stealth_sync(page)

        if login_user and login_pass:
            print("[INFO] Fazendo login no Instagram…")
            page.goto("https://www.instagram.com/accounts/login/", wait_until="networkidle")
            page.fill('input[name="username"]', login_user)
            page.fill('input[name="password"]', login_pass)
            page.click('button[type="submit"]')
            try:
                page.wait_for_url("https://www.instagram.com/", timeout=15000)
                print("[INFO] Login OK")
            except PWTimeout:
                print("[WARN] Timeout após login — continuando mesmo assim")

        print(f"[INFO] Acessando {INSTAGRAM_URL}")
        page.goto(INSTAGRAM_URL, wait_until="domcontentloaded", timeout=30000)
        time.sleep(3)

        for selector in ['[role="dialog"] button', 'button:has-text("Agora não")', 'button:has-text("Not Now")']:
            try:
                btn = page.locator(selector).first
                if btn.is_visible(timeout=2000):
                    btn.click()
                    time.sleep(1)
                    break
            except Exception:
                pass

        shot_top = SHOTS_DIR / "profile_top.png"
        page.screenshot(path=str(shot_top))
        data["screenshots"].append(str(shot_top))
        print(f"[OK] Screenshot: {shot_top.name}")

        profile: dict = {}

        for sel in ['h2', 'header section h1', 'header h1', 'header h2']:
            try:
                el = page.locator(sel).first
                if el.is_visible(timeout=2000):
                    profile["display_name"] = el.inner_text().strip()
                    break
            except Exception:
                pass

        for sel in ['div.-vDIg', 'header section > div > span', '._aa_c', 'header span']:
            try:
                els = page.locator(sel).all()
                texts = [e.inner_text().strip() for e in els if e.inner_text().strip()]
                if texts:
                    profile["bio"] = " | ".join(texts[:3])
                    break
            except Exception:
                pass

        try:
            stats = page.locator("header ul li").all()
            labels = ["posts", "seguidores", "seguindo"]
            for i, stat in enumerate(stats[:3]):
                txt = stat.inner_text().strip()
                profile[labels[i]] = parse_count(txt)
        except Exception:
            pass

        try:
            highlights = page.locator('div[class*="highlight"] button, div[role="button"] canvas').count()
            profile["destaques"] = highlights
        except Exception:
            pass

        try:
            img_el = page.locator("header img").first
            pic_url = img_el.get_attribute("src")
            if pic_url:
                profile["profile_pic_url"] = pic_url
                pic_path = OUTPUT_DIR / "profile_pic.jpg"
                pic_bytes = download_image(pic_url, pic_path)
                if pic_bytes:
                    data["colors"]["profile_pic"] = dominant_colors(pic_bytes)
        except Exception:
            pass

        data["profile"] = profile
        print(f"[INFO] Perfil extraído: {profile}")

        time.sleep(2)
        shot_grid = SHOTS_DIR / "profile_grid.png"
        page.screenshot(path=str(shot_grid), full_page=True)
        data["screenshots"].append(str(shot_grid))
        print(f"[OK] Screenshot grid: {shot_grid.name}")

        post_links = []
        try:
            anchors = page.locator(f'a[href*="/{INSTAGRAM_USERNAME}/p/"], a[href*="/{INSTAGRAM_USERNAME}/reel/"]').all()
            for a in anchors:
                href = a.get_attribute("href")
                if href and href not in post_links:
                    post_links.append(href)
        except Exception:
            pass

        if not post_links:
            try:
                all_a = page.locator('a[href*="/p/"], a[href*="/reel/"]').all()
                for a in all_a:
                    href = a.get_attribute("href") or ""
                    if f"/{INSTAGRAM_USERNAME}/" in href and href not in post_links:
                        post_links.append(href)
            except Exception:
                pass

        print(f"[INFO] {len(post_links)} posts do perfil encontrados")

        all_post_colors: list[str] = []

        for i, href in enumerate(post_links[:12], 1):
            post_url  = f"https://www.instagram.com{href}"
            post_data: dict = {"url": post_url, "index": i}

            try:
                page.goto(post_url, wait_until="domcontentloaded", timeout=25000)
                time.sleep(2.5)

                for selector in [
                    '[role="dialog"] button', 'button:has-text("Agora não")',
                    'button:has-text("Not Now")', '[aria-label="Fechar"]',
                ]:
                    try:
                        btn = page.locator(selector).first
                        if btn.is_visible(timeout=1500):
                            btn.click()
                            time.sleep(0.8)
                    except Exception:
                        pass

                shot_post = SHOTS_DIR / f"post_{i:02d}.png"
                page.screenshot(path=str(shot_post))
                post_data["screenshot"] = str(shot_post)
                data["screenshots"].append(str(shot_post))

                for sel in [
                    'div._a9zs span', 'div[class*="Caption"] span',
                    'article h1', 'article div[class*="_a9zs"]',
                ]:
                    try:
                        el = page.locator(sel).first
                        if el.is_visible(timeout=1500):
                            txt = el.inner_text().strip()
                            if len(txt) > 5:
                                post_data["caption"] = txt[:500]
                                break
                    except Exception:
                        pass

                try:
                    img_el = page.locator('article img[src*="fbcdn"], article img[src*="instagram"]').first
                    img_url = img_el.get_attribute("src", timeout=2000)
                    if img_url:
                        post_data["img_url"] = img_url
                        cookies_dict = {c["name"]: c["value"] for c in ctx.cookies(["https://www.instagram.com"])}
                        r = requests.get(img_url, headers={**HEADERS, "Referer": "https://www.instagram.com/"}, cookies=cookies_dict, timeout=15)
                        if r.status_code == 200:
                            img_path = IMAGES_DIR / f"post_{i:02d}.jpg"
                            img_path.write_bytes(r.content)
                            colors = dominant_colors(r.content, 3)
                            post_data["colors"] = colors
                            all_post_colors.extend(colors)
                            print(f"    [OK] Imagem baixada: {img_path.name}")
                except Exception:
                    pass

            except Exception as e:
                post_data["error"] = str(e)
                print(f"  [WARN] Erro no post {i}: {e}")

            data["posts"].append(post_data)
            print(f"  [OK] Post {i}/{len(post_links)}: {href}")

        if all_post_colors:
            color_count = Counter(all_post_colors)
            data["colors"]["posts"] = [{"hex": h, "count": c} for h, c in color_count.most_common(10)]

        ctx.close()

    return data

# ── Saída ─────────────────────────────────────────────────────────────────────

def build_report(data: dict) -> str:
    p = data.get("profile", {})
    posts = data.get("posts", [])
    colors_profile = data.get("colors", {}).get("profile_pic", [])
    colors_posts = data.get("colors", {}).get("posts", [])

    lines = [
        f"\n# DADOS EXTRAÍDOS — ANÁLISE VISUAL E DE PERFIL (BROWSER)\n",
        f"> Gerado em {data['scraped_at']} via Playwright (Chromium)",
        f"> Fonte: Instagram `@{INSTAGRAM_USERNAME}`\n",
        "## PERFIL INSTAGRAM\n",
        f"- **Username:** @{INSTAGRAM_USERNAME}",
        f"- **Nome completo:** {p.get('display_name', 'n/d')}",
        f"- **Bio:** {p.get('bio', 'n/d')}",
        f"- **Seguidores:** {p.get('seguidores', 'n/d')}",
        f"- **Seguindo:** {p.get('seguindo', 'n/d')}",
        f"- **Total de posts:** {p.get('posts', 'n/d')}",
        f"- **Destaques:** {p.get('destaques', 'n/d')}",
        f"- **Foto de perfil:** {p.get('profile_pic_url', 'n/d')[:80]}…\n",
        "## SCREENSHOTS CAPTURADOS\n",
    ]
    for s in data.get("screenshots", []):
        lines.append(f"- `{s}`")

    lines += [
        "\n## CORES — FOTO DE PERFIL\n",
        *[f"- `{c}`" for c in colors_profile],
        "\n## PALETA EXTRAÍDA DOS POSTS\n",
        "| Hex | Frequência | Categoria |",
        "|---|---|---|",
    ]
    for entry in colors_posts:
        h = entry["hex"]
        c = entry["count"]
        lines.append(f"| `{h}` | {c}x | — |")

    lines += [
        "\n## POSTS COLETADOS\n",
        "| # | URL | Caption (trecho) | Imagem |",
        "|---|---|---|---|",
    ]
    for post in posts:
        idx = post.get("index", "?")
        url = post.get("url", "—")
        cap = post.get("caption", "—")[:80].replace("\n", " ")
        img = "✓" if post.get("img_url") else "✗"
        lines.append(f"| {idx} | {url} | {cap} | {img} |")

    return "\n".join(lines)

def append_to_md(report: str) -> None:
    if not MD_PATH.exists():
        print(f"[WARN] MD não encontrado em {MD_PATH} — criando arquivo separado")
        out = OUTPUT_DIR / "scraper_output.md"
        out.write_text(report, encoding="utf-8")
        print(f"[OK] Relatório salvo em {out}")
        return

    current = MD_PATH.read_text(encoding="utf-8")
    marker = "# DADOS EXTRAÍDOS — ANÁLISE VISUAL E DE PERFIL (BROWSER)"
    if marker in current:
        current = current[:current.index(marker)]
    MD_PATH.write_text(current.rstrip() + "\n\n---\n" + report, encoding="utf-8")
    print(f"[OK] Discovery .md atualizado: {MD_PATH}")

# ── Entrypoint ────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    login_user = ""
    login_pass = ""

    if "--login" in sys.argv:
        idx = sys.argv.index("--login")
        try:
            login_user = sys.argv[idx + 1]
            login_pass = sys.argv[idx + 2]
        except IndexError:
            print("[ERR] Use: --login USUARIO SENHA")
            sys.exit(1)

    print(f"[START] Scraper Martins Advocacia Empresarial — {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    result = run(login_user, login_pass)

    json_path = OUTPUT_DIR / "martinsadvocaciaempresarial_browser_data.json"
    json_path.write_text(json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"[OK] JSON salvo: {json_path}")

    report = build_report(result)
    append_to_md(report)

    print("\n[DONE] Extração concluída.")
    print(f"       Output: {OUTPUT_DIR}")
    print(f"       Discovery: {MD_PATH}")
