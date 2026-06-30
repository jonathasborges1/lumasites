#!/usr/bin/env python3
"""
Instagram scraper for Brenda Bezerra.

Uses a temporary Brave profile seeded from the local Brave session so the
currently running browser is not killed or closed.
"""

import json
import re
import shutil
import tempfile
import time
from collections import Counter
from datetime import datetime
from io import BytesIO
from pathlib import Path

import requests
from playwright.sync_api import sync_playwright

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

USERNAME = "brendabezerraesteticista"
INSTAGRAM_URL = f"https://www.instagram.com/{USERNAME}/"

SCRIPT_DIR = Path(__file__).parent
ROOT_DIR = SCRIPT_DIR.parent
OUTPUT_DIR = SCRIPT_DIR / "output_brendabezerra"
IMAGES_DIR = OUTPUT_DIR / "images"
SHOTS_DIR = OUTPUT_DIR / "screenshots"
APP_DIR = ROOT_DIR / "app" / "proposta-comercial" / "brendabezerra"
MD_PATH = APP_DIR / "brendabezerra-proposta-discovery.md"
JSON_PATH = OUTPUT_DIR / "brendabezerra_data.json"

BRAVE_PATH = r"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"
BRAVE_USER_DATA = Path(r"C:\Users\jonathas.000\AppData\Local\BraveSoftware\Brave-Browser\User Data")

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Referer": "https://www.instagram.com/",
}

for directory in (OUTPUT_DIR, IMAGES_DIR, SHOTS_DIR, APP_DIR):
    directory.mkdir(parents=True, exist_ok=True)


def copy_if_exists(src: Path, dst: Path) -> None:
    try:
        if src.exists():
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dst)
    except Exception as exc:
        print(f"[WARN] Could not copy {src.name}: {exc}")


def seed_temp_brave_profile() -> Path:
    tmp_dir = Path(tempfile.mkdtemp(prefix="brave_brenda_"))
    src_profile = BRAVE_USER_DATA / "Default"
    dst_profile = tmp_dir / "Default"
    dst_profile.mkdir(parents=True, exist_ok=True)

    copy_if_exists(BRAVE_USER_DATA / "Local State", tmp_dir / "Local State")

    for filename in ["Cookies", "Cookies-journal", "Login Data", "Network Persistent State", "Preferences"]:
        src = src_profile / filename
        if not src.exists() and filename.startswith("Cookies"):
            src = src_profile / "Network" / filename
            dst = dst_profile / "Network" / filename
        else:
            dst = dst_profile / filename
        copy_if_exists(src, dst)

    for folder in ["Local Storage", "Session Storage", "IndexedDB"]:
        src = src_profile / folder
        dst = dst_profile / folder
        try:
            if src.exists():
                shutil.copytree(src, dst, dirs_exist_ok=True)
        except Exception as exc:
            print(f"[WARN] Could not copy {folder}: {exc}")

    return tmp_dir


def dominant_colors(image_bytes: bytes, count: int = 5) -> list[str]:
    if not HAS_COLORTHIEF:
        return []
    try:
        thief = ColorThief(BytesIO(image_bytes))
        palette = thief.get_palette(color_count=count, quality=1)
        return [f"#{r:02X}{g:02X}{b:02X}" for r, g, b in palette]
    except Exception:
        return []


def save_image_from_url(url: str, path: Path, cookies: dict[str, str]) -> tuple[bool, list[str], str]:
    try:
        response = requests.get(url, headers=HEADERS, cookies=cookies, timeout=25)
        response.raise_for_status()
        path.write_bytes(response.content)
        size = ""
        if HAS_PIL:
            with Image.open(BytesIO(response.content)) as img:
                size = f"{img.width}x{img.height}"
        return True, dominant_colors(response.content, 5), size
    except Exception as exc:
        print(f"[WARN] Image download failed: {exc}")
        return False, [], ""


def clean_text(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def dismiss_popups(page) -> None:
    try:
        page.keyboard.press("Escape")
        time.sleep(0.4)
    except Exception:
        pass
    for selector in ['button[aria-label="Fechar"]', 'button[aria-label="Close"]', 'svg[aria-label="Fechar"]', 'svg[aria-label="Close"]']:
        try:
            locator = page.locator(selector).first
            if locator.is_visible(timeout=800):
                locator.click()
                time.sleep(0.7)
        except Exception:
            pass
    labels = ["Agora nao", "Agora não", "Not Now", "Fechar", "Close", "Permitir todos os cookies"]
    for label in labels:
        try:
            locator = page.get_by_text(label, exact=False).first
            if locator.is_visible(timeout=1200):
                locator.click()
                time.sleep(0.7)
        except Exception:
            pass


def collect_grid_assets(page, cookies: dict[str, str]) -> list[dict]:
    records = []
    try:
        images = page.evaluate(
            """() => Array.from(document.querySelectorAll('main img')).map((img) => ({
                src: img.currentSrc || img.src,
                alt: img.alt || '',
                width: img.naturalWidth || img.width || 0,
                height: img.naturalHeight || img.height || 0
            })).filter((img) => img.src && img.width >= 120 && img.height >= 120)"""
        )
    except Exception:
        images = []

    seen = set()
    index = 1
    for image in images:
        src = image.get("src", "")
        if not src or src in seen:
            continue
        seen.add(src)
        if "scontent" not in src and "fbcdn" not in src and "cdninstagram" not in src:
            continue
        path = IMAGES_DIR / f"instagram_grid_{index:02d}.jpg"
        ok, colors, size = save_image_from_url(src, path, cookies)
        record = {
            "index": index,
            "src": src,
            "alt": clean_text(image.get("alt", ""))[:900],
            "source_size": f"{image.get('width')}x{image.get('height')}",
        }
        if ok:
            record["saved"] = str(path)
            record["colors"] = colors
            record["image_size"] = size
        records.append(record)
        index += 1
        if index > 18:
            break
    return records


def parse_profile_from_dom(page) -> dict:
    data = {"username": USERNAME, "source": INSTAGRAM_URL}

    try:
        data["title"] = clean_text(page.title())
    except Exception:
        pass

    try:
        meta = page.locator('meta[name="description"]').first.get_attribute("content")
        if meta:
            data["meta_description"] = clean_text(meta)
    except Exception:
        pass

    try:
        header_text = clean_text(page.locator("header").first.inner_text(timeout=4000))
        data["header_text"] = header_text
    except Exception:
        header_text = ""

    if header_text:
        stats = re.findall(r"([\d.,]+[KkMm]?)\s+(publicacoes|publicações|seguidores|seguindo|posts|followers|following)", header_text, flags=re.I)
        for value, label in stats:
            label_low = label.lower()
            if label_low in ["publicacoes", "publicações", "posts"]:
                data["posts_count"] = value
            elif label_low in ["seguidores", "followers"]:
                data["followers"] = value
            elif label_low in ["seguindo", "following"]:
                data["following"] = value

    candidates = []
    for selector in ["header h1", "header h2", "main h1", "main h2"]:
        try:
            for element in page.locator(selector).all():
                text = clean_text(element.inner_text())
                if text and text not in candidates:
                    candidates.append(text)
        except Exception:
            pass
    if candidates:
        data["display_candidates"] = candidates[:6]

    try:
        image = page.locator("header img").first.get_attribute("src", timeout=3000)
        if image:
            data["profile_pic_url"] = image
    except Exception:
        pass

    return data


def collect_post_links(page) -> list[str]:
    links = []
    for _ in range(3):
        try:
            anchors = page.locator('a[href*="/p/"], a[href*="/reel/"]').all()
            for anchor in anchors:
                href = anchor.get_attribute("href") or ""
                if not href:
                    continue
                full = href if href.startswith("http") else f"https://www.instagram.com{href}"
                if full not in links:
                    links.append(full)
        except Exception:
            pass
        page.mouse.wheel(0, 1300)
        time.sleep(1.5)
    return links[:18]


def scrape_post(page, ctx, url: str, index: int) -> dict:
    record = {"index": index, "url": url, "type": "reel" if "/reel/" in url else "post"}
    page.goto(url, wait_until="domcontentloaded", timeout=35000)
    time.sleep(3)
    dismiss_popups(page)

    shot = SHOTS_DIR / f"post_{index:02d}.png"
    page.screenshot(path=str(shot))
    record["screenshot"] = str(shot)

    caption_candidates = [
        'article h1',
        'article div[role="button"] span',
        'article span[dir="auto"]',
        'main span[dir="auto"]',
    ]
    best_caption = ""
    for selector in caption_candidates:
        try:
            texts = [clean_text(el.inner_text()) for el in page.locator(selector).all()]
            texts = [t for t in texts if len(t) > 20 and USERNAME not in t]
            if texts:
                best_caption = max(texts, key=len)
                break
        except Exception:
            pass
    if best_caption:
        record["caption"] = best_caption[:1200]

    try:
        img_urls = []
        for img in page.locator('article img[src*="fbcdn"], article img[src*="cdninstagram"]').all():
            src = img.get_attribute("src") or ""
            alt = img.get_attribute("alt") or ""
            if src and src not in img_urls:
                img_urls.append(src)
                if alt and "alt" not in record:
                    record["alt"] = clean_text(alt)[:600]
        if img_urls:
            cookies = {cookie["name"]: cookie["value"] for cookie in ctx.cookies(["https://www.instagram.com"])}
            path = IMAGES_DIR / f"instagram_post_{index:02d}.jpg"
            ok, colors, size = save_image_from_url(img_urls[0], path, cookies)
            if ok:
                record["image_saved"] = str(path)
                record["colors"] = colors
                record["image_size"] = size
    except Exception as exc:
        record["image_error"] = str(exc)

    try:
        likes_texts = [clean_text(el.inner_text()) for el in page.locator("article").locator("span").all()]
        useful = [t for t in likes_texts if re.search(r"curtid|likes|visualiza|views", t, re.I)]
        if useful:
            record["engagement_text"] = useful[:5]
    except Exception:
        pass

    return record


def scrape() -> dict:
    data = {
        "scraped_at": datetime.now().isoformat(timespec="seconds"),
        "source": INSTAGRAM_URL,
        "profile": {},
        "grid_assets": [],
        "posts": [],
        "screenshots": [],
        "notes": [
            "The currently running Brave process was not killed.",
            "A temporary Brave profile was seeded from the local session where possible.",
        ],
    }

    temp_profile = seed_temp_brave_profile()
    print(f"[INFO] Temporary profile: {temp_profile}")

    with sync_playwright() as playwright:
        ctx = playwright.chromium.launch_persistent_context(
            user_data_dir=str(temp_profile),
            executable_path=BRAVE_PATH,
            headless=False,
            slow_mo=80,
            viewport={"width": 1366, "height": 900},
            locale="pt-BR",
            args=["--profile-directory=Default", "--disable-blink-features=AutomationControlled"],
        )
        page = ctx.new_page()
        page.goto(INSTAGRAM_URL, wait_until="domcontentloaded", timeout=45000)
        time.sleep(5)
        dismiss_popups(page)

        top = SHOTS_DIR / "instagram_profile_top.png"
        page.screenshot(path=str(top))
        data["screenshots"].append(str(top))

        profile = parse_profile_from_dom(page)
        cookies = {cookie["name"]: cookie["value"] for cookie in ctx.cookies(["https://www.instagram.com"])}
        if profile.get("profile_pic_url"):
            ok, colors, size = save_image_from_url(profile["profile_pic_url"], OUTPUT_DIR / "profile_pic.jpg", cookies)
            if ok:
                profile["profile_pic_saved"] = str(OUTPUT_DIR / "profile_pic.jpg")
                profile["profile_pic_colors"] = colors
                profile["profile_pic_size"] = size
        data["profile"] = profile

        data["grid_assets"] = collect_grid_assets(page, cookies)
        print(f"[INFO] Saved {len([a for a in data['grid_assets'] if a.get('saved')])} grid assets")

        links = collect_post_links(page)
        data["post_links_found"] = links
        grid = SHOTS_DIR / "instagram_grid.png"
        page.screenshot(path=str(grid), full_page=True)
        data["screenshots"].append(str(grid))

        print(f"[INFO] Found {len(links)} post links")
        for index, url in enumerate(links[:12], 1):
            try:
                record = scrape_post(page, ctx, url, index)
            except Exception as exc:
                record = {"index": index, "url": url, "error": str(exc)}
            data["posts"].append(record)
            print(f"[OK] Post {index}: {url}")

        ctx.close()

    return data


def infer_themes(posts: list[dict]) -> list[tuple[str, int]]:
    keywords = {
        "massagem terapeutica": ["massagem", "terapeutica", "terapêutica", "alivio", "alívio", "relax"],
        "drenagem linfatica": ["drenagem", "linfatica", "linfática", "desinchar", "leveza"],
        "limpeza de pele": ["limpeza de pele", "pele", "facial", "acido", "ácido", "skincare"],
        "autocuidado feminino": ["autocuidado", "mulheres", "cuidar de si", "cansadas", "sobrecarregadas"],
        "bem-estar emocional": ["bem-estar", "equilibrio", "equilíbrio", "desacelerar", "respirar"],
        "agenda": ["agenda", "horario", "horário", "marque", "agende", "link na bio"],
        "prova social": ["cliente", "resultado", "antes", "depois", "feedback", "indico"],
    }
    counts = Counter()
    text = "\n".join((p.get("caption") or "") + " " + (p.get("alt") or "") for p in posts).lower()
    for theme, words in keywords.items():
        for word in words:
            if word in text:
                counts[theme] += text.count(word)
    return counts.most_common()


def find_first(pattern: str, text: str) -> str:
    match = re.search(pattern, text or "", flags=re.I)
    return match.group(1).strip() if match else ""


def build_report(data: dict) -> str:
    profile = data.get("profile", {})
    grid_assets = data.get("grid_assets", [])
    posts = data.get("posts", [])
    header_text = profile.get("header_text", "")
    meta_description = profile.get("meta_description", "")
    followers = profile.get("followers") or find_first(r"([\d.,]+\s*(?:mil|k|m)?)\s+seguidores", header_text)
    posts_count = profile.get("posts_count") or find_first(r"([\d.,]+)\s+posts", header_text) or find_first(r"([\d.,]+)\s+posts", meta_description)
    following = profile.get("following") or find_first(r"([\d.,]+)\s+seguindo", header_text)
    bio = find_first(r'"([^"]+)"', meta_description)
    if not bio:
        bio = find_first(r"seguindo\s+(.+?)(?:\.\.\. mais|Rua|$)", header_text)
    address = find_first(r"(Rua .+)$", header_text) or find_first(r"(Recife-PE)", meta_description)
    service_line = "Massagem | Drenagem | Limpeza de Pele"
    colors = []
    for asset in grid_assets:
        colors.extend(asset.get("colors", []))
    for post in posts:
        colors.extend(post.get("colors", []))
    colors.extend(profile.get("profile_pic_colors", []))
    color_freq = Counter(colors).most_common(12)
    theme_records = posts + [{"caption": asset.get("alt", "")} for asset in grid_assets]
    themes = infer_themes(theme_records)

    captions = [p.get("caption", "") for p in posts if p.get("caption")]
    useful_posts = [p for p in posts if p.get("image_saved") or p.get("caption")]

    lines = [
        "# Discovery inicial - Brenda Bezerra Esteticista",
        "",
        f"> Fonte de verdade: `{INSTAGRAM_URL}`",
        f"> Extraido em: {data.get('scraped_at')}",
        "> Metodo: Playwright + Brave em perfil temporario, sem encerrar o navegador Brave em uso.",
        "",
        "---",
        "",
        "## Resumo executivo",
        "",
        "Brenda Bezerra deve ser tratada como uma marca pessoal de estetica e bem-estar: a previa conceitual precisa vender pausa, alivio, cuidado e resultado visivel antes de vender um procedimento isolado. O Instagram e a fonte primaria de linguagem, imagem e prova social; o site deve organizar essa percepcao em uma experiencia mais clara, premium e orientada a agendamento.",
        "",
        "O maior ganho de valor para a cliente e transformar conteudo disperso do feed em uma jornada: autoridade profissional, portfolio de resultados, servicos com beneficios claros, perguntas frequentes e CTA direto para agenda/WhatsApp. A promessa mais forte ja aparece na bio: ajudar mulheres cansadas e sobrecarregadas a desacelerarem e recuperarem equilibrio fisico e emocional.",
        "",
        "## Dados extraidos do perfil",
        "",
        f"- **Username:** @{USERNAME}",
        f"- **Linha de servicos percebida:** {service_line}",
        f"- **Titulo da pagina:** {profile.get('title', 'n/d')}",
        f"- **Meta description:** {profile.get('meta_description', 'n/d')}",
        f"- **Seguidores:** {followers or 'n/d'}",
        f"- **Seguindo:** {following or 'n/d'}",
        f"- **Publicacoes:** {posts_count or 'n/d'}",
        f"- **Bio/Promessa:** {bio or 'n/d'}",
        f"- **Endereco capturado:** {address or 'n/d'}",
        "",
        "### Texto bruto relevante do header",
        "",
        f"> {profile.get('header_text', 'n/d')}",
        "",
        "## Temas detectados nos posts",
        "",
    ]

    if themes:
        for theme, count in themes:
            lines.append(f"- **{theme}:** {count} ocorrencias")
    else:
        lines.append("- Nao foi possivel consolidar temas por caption; revisar screenshots e imagens coletadas.")

    lines += [
        "",
        "## Direcao estrategica para agregar valor",
        "",
        "- **Posicionamento:** sair de uma vitrine de posts para uma narrativa de especialista em autocuidado feminino, massagem, drenagem e pele, com foco em pausa, alivio, leveza e autoestima.",
        "- **Conversao:** criar uma rota curta para agendamento com WhatsApp fixo, microcopy de orientacao e servicos apresentados por dor/beneficio: cansaco, sobrecarga, desconforto corporal, retencao, pele sem viço.",
        "- **Prova visual:** usar resultados reais do Instagram como galeria editorial, destacando antes/depois, feedbacks, detalhes do atendimento e textura dos procedimentos.",
        "- **Confianca:** incluir bio profissional, protocolos, higiene, materiais utilizados, contraindicações e FAQ para reduzir inseguranca antes do contato.",
        "- **Ticket percebido:** elevar a apresentacao com paleta rose/nude, fotos com respiro, depoimentos e linguagem de cuidado personalizado, mantendo o tom acolhedor do feed.",
        "",
        "## Estrutura sugerida para a previa conceitual",
        "",
        "1. Hero com retrato/resultado forte, promessa clara e CTA de agendamento.",
        "2. Barra de confianca: especialidade, localizacao/atendimento, prova social do Instagram.",
        "3. Secao sobre Brenda: autoridade humana, tecnica e acolhedora.",
        "4. Servicos principais organizados por resultado esperado.",
        "5. Galeria de transformacoes/portfolio com assets do Instagram.",
        "6. Como funciona o atendimento: avaliacao, procedimento, cuidados e retorno.",
        "7. FAQ curto para objeções comuns.",
        "8. CTA final para WhatsApp/agenda.",
        "",
        "## Paleta extraida dos assets",
        "",
        "| Hex | Frequencia |",
        "|---|---|",
    ]
    if color_freq:
        for hex_color, count in color_freq:
            lines.append(f"| `{hex_color}` | {count}x |")
    else:
        lines.append("| n/d | - |")

    lines += [
        "",
        "## Assets visuais do Instagram",
        "",
        "| # | Arquivo | Leitura visual / alt | Cores |",
        "|---|---|---|---|",
    ]
    saved_grid = [asset for asset in grid_assets if asset.get("saved")]
    if saved_grid:
        for asset in saved_grid:
            alt = asset.get("alt") or "thumbnail do grid"
            colors_text = ", ".join(asset.get("colors", [])[:4]) or "n/d"
            lines.append(f"| {asset.get('index')} | `{asset.get('saved')}` | {alt[:180]} | {colors_text} |")
    else:
        lines.append("| n/d | n/d | O Instagram nao liberou download dos thumbnails nesta rodada. | n/d |")

    lines += [
        "",
        "## Posts e assets coletados",
        "",
        "| # | Tipo | Asset | Caption / leitura util | URL |",
        "|---|---|---|---|---|",
    ]

    for post in useful_posts:
        caption = clean_text(post.get("caption") or post.get("alt") or "sem texto extraido")[:180]
        asset = post.get("image_saved", post.get("screenshot", "n/d"))
        lines.append(f"| {post.get('index')} | {post.get('type', 'post')} | `{asset}` | {caption} | {post.get('url')} |")

    lines += [
        "",
        "## Captions extraidas para copy",
        "",
    ]
    if captions:
        for index, caption in enumerate(captions[:8], 1):
            lines.append(f"### Caption {index}")
            lines.append("")
            lines.append(f"> {clean_text(caption)[:700]}")
            lines.append("")
    else:
        lines.append("- Nenhuma caption longa extraida automaticamente; usar screenshots de posts para revisao visual/manual.")

    lines += [
        "",
        "## Screenshots",
        "",
    ]
    for shot in data.get("screenshots", []):
        lines.append(f"- `{shot}`")
    for post in posts:
        if post.get("screenshot"):
            lines.append(f"- `{post['screenshot']}`")

    lines += [
        "",
        "## Pendencias para briefing com a cliente",
        "",
        "- Confirmar nome comercial exato e cidade/bairro de atendimento.",
        "- Confirmar WhatsApp de agendamento e mensagem pre-preenchida.",
        "- Solicitar lista oficial de servicos, valores iniciais ou faixas, se puderem aparecer.",
        "- Solicitar autorizacao para uso de antes/depois e depoimentos.",
        "- Confirmar formacao/certificacoes e diferenciais tecnicos.",
        "- Confirmar politica de retoque, manutencao e cuidados pos-procedimento.",
        "",
        "## Arquivos gerados",
        "",
        f"- JSON completo: `{JSON_PATH}`",
        f"- Imagens: `{IMAGES_DIR}`",
        f"- Screenshots: `{SHOTS_DIR}`",
    ]

    return "\n".join(lines)


if __name__ == "__main__":
    print(f"[START] Brenda Bezerra Instagram scraper - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    result = scrape()
    JSON_PATH.write_text(json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8")
    report = build_report(result)
    MD_PATH.write_text(report, encoding="utf-8")
    print(f"[OK] JSON: {JSON_PATH}")
    print(f"[OK] MD: {MD_PATH}")
