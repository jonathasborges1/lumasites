#!/usr/bin/env python3
"""
Scraper com browser real (Playwright) — Antonio Aguiar Advogado
Abre Chromium, navega no Instagram e extrai identidade visual completa.
Uso: python scripts/scraper_antonioaguiar_browser.py
     python scripts/scraper_antonioaguiar_browser.py --login USUARIO SENHA
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

INSTAGRAM_USERNAME  = "antonioaguiar.adv"
INSTAGRAM_URL       = f"https://www.instagram.com/{INSTAGRAM_USERNAME}/"

SCRIPT_DIR   = Path(__file__).parent
OUTPUT_DIR   = SCRIPT_DIR / "output_antonioaguiar"
IMAGES_DIR   = OUTPUT_DIR / "images"
SHOTS_DIR    = OUTPUT_DIR / "screenshots"
MD_PATH      = SCRIPT_DIR.parent / "app" / "proposta-comercial" / "antonioaguiar" / "antonioaguiar-proposta-discovery.md"

for d in (OUTPUT_DIR, IMAGES_DIR, SHOTS_DIR):
    d.mkdir(parents=True, exist_ok=True)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
}

# ── Cores ─────────────────────────────────────────────────────────────────────

def rgb_to_hex(r, g, b):
    return f"#{r:02X}{g:02X}{b:02X}"


def color_name(hex_color):
    h = hex_color.lstrip("#")
    if len(h) < 6:
        return "indefinida"
    r, g, b = int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
    bri = (r * 299 + g * 587 + b * 114) / 1000
    if bri > 220:
        return "branco/claro"
    if bri < 35:
        return "preto/escuro"
    if r > g + 30 and r > b + 30:
        return "vermelho/rosa"
    if g > r + 30 and g > b + 30:
        return "verde"
    if b > r + 30 and b > g + 30:
        return "azul"
    if r > 170 and g > 140 and b < 70:
        return "dourado/amarelo"
    if r > 150 and g > 80 and b < 50:
        return "laranja/bronze"
    if abs(r - g) < 25 and abs(g - b) < 25:
        return "cinza neutro"
    if r > 100 and b > 100 and g < 80:
        return "roxo/lilas"
    return "cor mista"


def extract_colors(image_path_or_url, n=6, label=""):
    if not HAS_COLORTHIEF:
        return []
    try:
        if isinstance(image_path_or_url, str) and image_path_or_url.startswith("http"):
            r = requests.get(image_path_or_url, headers=HEADERS, timeout=12)
            r.raise_for_status()
            f = BytesIO(r.content)
        else:
            f = open(image_path_or_url, "rb")
        ct = ColorThief(f)
        palette = ct.get_palette(color_count=n, quality=1)
        hexes = [rgb_to_hex(*c) for c in palette]
        if label:
            print(f"    Cores [{label}]: {', '.join(hexes)}")
        return hexes
    except Exception as e:
        print(f"    [AVISO] Cores nao extraidas de {label}: {e}")
        return []


def download_image(url, dest_path):
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        r.raise_for_status()
        with open(dest_path, "wb") as f:
            f.write(r.content)
        return True
    except Exception:
        return False

# ── Browser helpers ───────────────────────────────────────────────────────────

def dismiss_popups(page):
    """Fecha modais de cookie, login e notificacao do Instagram."""
    popup_selectors = [
        "button:has-text('Aceitar')",
        "button:has-text('Accept')",
        "button:has-text('Agora nao')",
        "button:has-text('Not Now')",
        "button:has-text('Nao agora')",
        "button[aria-label='Fechar']",
        "button[aria-label='Close']",
        "div[role='dialog'] button:last-child",
    ]
    for sel in popup_selectors:
        try:
            btn = page.locator(sel).first
            if btn.is_visible(timeout=1500):
                btn.click()
                time.sleep(0.8)
        except Exception:
            pass


def safe_text(page, selector, timeout=3000):
    try:
        el = page.locator(selector).first
        el.wait_for(timeout=timeout)
        return el.inner_text().strip()
    except Exception:
        return None


def collect_image_urls(page):
    """Coleta URLs de imagens dos posts no grid do perfil."""
    urls = set()
    intercepted = []

    def on_response(response):
        url = response.url
        if (
            "cdninstagram.com" in url
            or "fbcdn.net" in url
        ) and any(ext in url for ext in [".jpg", ".jpeg", ".png", ".webp"]):
            if "150x150" not in url and "s150x150" not in url:
                intercepted.append(url)

    page.on("response", lambda r: on_response(r))

    for _ in range(4):
        page.keyboard.press("End")
        time.sleep(1.5)

    img_els = page.locator("article img, div[role='button'] img, img[style]").all()
    for img in img_els[:30]:
        try:
            src = img.get_attribute("src") or ""
            if "cdninstagram.com" in src or "fbcdn.net" in src:
                if "150x150" not in src and "s150x150" not in src:
                    urls.add(src)
        except Exception:
            pass

    urls.update(intercepted[:20])
    return list(urls)


def do_login(page, username, password):
    """Faz login no Instagram com as credenciais fornecidas."""
    print("  Fazendo login...")
    try:
        page.goto("https://www.instagram.com/accounts/login/", wait_until="domcontentloaded")
        time.sleep(2)
        dismiss_popups(page)

        page.fill("input[name='username']", username)
        time.sleep(0.5)
        page.fill("input[name='password']", password)
        time.sleep(0.5)
        page.click("button[type='submit']")
        page.wait_for_load_state("networkidle", timeout=15000)
        time.sleep(3)
        dismiss_popups(page)
        print("  [OK] Login realizado.")
    except Exception as e:
        print(f"  [AVISO] Problema no login: {e}")

# ── Scraper principal ─────────────────────────────────────────────────────────

def scrape_with_browser(ig_login=None, ig_pass=None):
    print("\n" + "=" * 60)
    print(f"  BROWSER SCRAPER - @{INSTAGRAM_USERNAME}")
    print("=" * 60)

    result = {
        "accessible": False,
        "username": INSTAGRAM_USERNAME,
        "full_name": None,
        "bio": None,
        "followers": None,
        "following": None,
        "posts_count": None,
        "external_url": None,
        "profile_pic_url": None,
        "profile_pic_colors": [],
        "post_image_urls": [],
        "post_colors": [],
        "all_colors": [],
        "captions_sample": [],
        "hashtags": [],
        "highlight_count": 0,
        "screenshots": [],
    }

    with sync_playwright() as pw:
        browser = pw.chromium.launch(
            headless=False,
            args=[
                "--no-sandbox",
                "--disable-blink-features=AutomationControlled",
                "--lang=pt-BR",
            ],
        )

        context = browser.new_context(
            viewport={"width": 1280, "height": 900},
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
            locale="pt-BR",
        )

        page = context.new_page()

        if HAS_STEALTH:
            stealth_sync(page)

        page.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', { get: () => false });
            Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3] });
            Object.defineProperty(navigator, 'languages', { get: () => ['pt-BR', 'pt', 'en'] });
            window.chrome = { runtime: {} };
        """)

        if ig_login and ig_pass:
            do_login(page, ig_login, ig_pass)

        print(f"\n  Navegando para: {INSTAGRAM_URL}")
        try:
            page.goto(INSTAGRAM_URL, wait_until="domcontentloaded", timeout=30000)
        except PWTimeout:
            print("  [AVISO] Timeout no carregamento — continuando mesmo assim.")

        time.sleep(3)
        dismiss_popups(page)
        time.sleep(2)
        dismiss_popups(page)

        shot1 = SHOTS_DIR / "profile_top.png"
        page.screenshot(path=str(shot1), full_page=False)
        result["screenshots"].append(str(shot1))
        print(f"  Screenshot salvo: {shot1.name}")

        login_wall = False
        try:
            if page.locator("input[name='username']").is_visible(timeout=2000):
                login_wall = True
                print("  [AVISO] Instagram exige login. Tentando fechar modal...")
                dismiss_popups(page)
                time.sleep(1)
        except Exception:
            pass

        print("  Extraindo dados do perfil...")

        for sel in [
            "h2", "h1",
            "header section h2",
            "span._ap3a",
            "div._aacl h2",
        ]:
            text = safe_text(page, sel)
            if text and 2 < len(text) < 80:
                result["full_name"] = text
                break

        for sel in [
            "div.-vDIg span",
            "div._aacl._aaco._aacu",
            "section main header section div span",
            "header section > div:last-child span",
            "h1 + * span",
        ]:
            text = safe_text(page, sel, timeout=2000)
            if text and len(text) > 5:
                result["bio"] = text
                break

        stat_pattern = re.compile(r"([\d.,km]+)\s*(seguidores?|followers?|publicac|posts?|seguindo|following)", re.I)
        page_text = page.inner_text("body")
        for match in stat_pattern.finditer(page_text):
            val = match.group(1)
            label = match.group(2).lower()
            if "seguidor" in label or "follow" in label and "ing" not in label:
                result["followers"] = val
            elif "seguindo" in label or "following" in label:
                result["following"] = val
            elif "publi" in label or "post" in label:
                result["posts_count"] = val

        for sel in ["img._aa8j", "header img", "canvas + img", "img[alt*='foto']"]:
            try:
                el = page.locator(sel).first
                if el.is_visible(timeout=1500):
                    src = el.get_attribute("src") or ""
                    if src and "http" in src:
                        result["profile_pic_url"] = src
                        break
            except Exception:
                pass

        for sel in ["a[href*='//']", "a[target='_blank']"]:
            try:
                el = page.locator(sel).first
                href = el.get_attribute("href") or ""
                if href and "instagram.com" not in href and "http" in href:
                    result["external_url"] = href
                    break
            except Exception:
                pass

        print(f"  Nome:       {result['full_name']}")
        print(f"  Bio:        {result['bio']}")
        print(f"  Seguidores: {result['followers']}")
        print(f"  Posts:      {result['posts_count']}")
        print(f"  Site:       {result['external_url']}")

        if result["profile_pic_url"]:
            pic_path = IMAGES_DIR / "profile_pic.jpg"
            if download_image(result["profile_pic_url"], pic_path):
                result["profile_pic_colors"] = extract_colors(pic_path, n=5, label="foto de perfil")

        print("  Coletando imagens dos posts...")
        post_urls = collect_image_urls(page)
        result["post_image_urls"] = post_urls[:20]
        print(f"  {len(result['post_image_urls'])} imagens de posts encontradas.")

        page.keyboard.press("Home")
        time.sleep(1)
        shot2 = SHOTS_DIR / "profile_grid.png"
        page.screenshot(path=str(shot2), full_page=True)
        result["screenshots"].append(str(shot2))
        print(f"  Screenshot salvo: {shot2.name}")

        try:
            highlights = page.locator("div[role='button'] canvas, ul li a").count()
            result["highlight_count"] = min(highlights, 20)
        except Exception:
            pass

        if not login_wall:
            print("  Coletando captions dos posts...")
            post_links = []
            try:
                links = page.locator("article a, a[href*='/p/']").all()
                for a in links[:8]:
                    href = a.get_attribute("href") or ""
                    if "/p/" in href and href not in post_links:
                        post_links.append("https://www.instagram.com" + href if href.startswith("/") else href)
            except Exception:
                pass

            for i, post_url in enumerate(post_links[:5]):
                try:
                    page.goto(post_url, wait_until="domcontentloaded", timeout=20000)
                    time.sleep(2)
                    dismiss_popups(page)

                    caption = None
                    for sel in ["div._a9zs span", "h1", "div[role='button'] span", "article span"]:
                        text = safe_text(page, sel, timeout=2000)
                        if text and len(text) > 10:
                            caption = text[:300]
                            break

                    if caption:
                        hashtags = re.findall(r"#\w+", caption)
                        result["captions_sample"].append({
                            "url": post_url,
                            "caption": caption,
                            "hashtags": hashtags,
                        })
                        result["hashtags"].extend(hashtags)

                    time.sleep(1)
                except Exception as e:
                    print(f"    [AVISO] Post {i+1}: {e}")

        browser.close()

    print("\n  Extraindo cores das imagens coletadas...")
    all_colors = list(result["profile_pic_colors"])

    for i, img_url in enumerate(result["post_image_urls"][:12]):
        dest = IMAGES_DIR / f"post_{i+1:02d}.jpg"
        if download_image(img_url, dest):
            colors = extract_colors(dest, n=4, label=f"post {i+1}")
            all_colors.extend(colors)
            result["post_colors"].append({"image": dest.name, "colors": colors})
        time.sleep(0.3)

    counts = Counter(all_colors)
    result["all_colors"] = [
        {"hex": c, "count": n, "name": color_name(c)}
        for c, n in counts.most_common(20)
        if color_name(c) not in ("branco/claro", "preto/escuro")
    ]

    htag_counts = Counter(result["hashtags"])
    result["hashtags"] = [
        {"tag": t, "count": n} for t, n in htag_counts.most_common(20)
    ]

    if any([result["full_name"], result["followers"], result["post_image_urls"]]):
        result["accessible"] = True

    return result

# ── Markdown ──────────────────────────────────────────────────────────────────

def generate_section(data):
    now = datetime.now().strftime("%d/%m/%Y %H:%M")
    lines = [
        "",
        "---",
        "",
        "# DADOS EXTRAÍDOS — ANÁLISE VISUAL E DE PERFIL (BROWSER)",
        "",
        f"> Gerado em {now} via Playwright (Chromium)",
        f"> Fonte: Instagram `@{INSTAGRAM_USERNAME}`",
        "",
    ]

    lines.append("## PERFIL INSTAGRAM\n")
    fields = [
        ("Username", f"@{data['username']}"),
        ("Nome completo", data["full_name"]),
        ("Bio", data["bio"]),
        ("Seguidores", data["followers"]),
        ("Seguindo", data["following"]),
        ("Total de posts", data["posts_count"]),
        ("Destaques", data["highlight_count"]),
        ("Link externo", data["external_url"]),
    ]
    for label, val in fields:
        if val:
            lines.append(f"- **{label}:** {val}")
    lines.append("")

    if data.get("screenshots"):
        lines.append("## SCREENSHOTS CAPTURADOS\n")
        for s in data["screenshots"]:
            name = Path(s).name
            lines.append(f"- `scripts/output_antonioaguiar/screenshots/{name}`")
        lines.append("")

    if data.get("profile_pic_colors"):
        lines.append("## CORES — FOTO DE PERFIL\n")
        for h in data["profile_pic_colors"]:
            lines.append(f"- `{h}` — {color_name(h)}")
        lines.append("")

    if data.get("all_colors"):
        lines += [
            "## PALETA EXTRAÍDA DOS POSTS\n",
            "| Hex | Frequência | Categoria |",
            "|---|---|---|",
        ]
        for e in data["all_colors"][:14]:
            lines.append(f"| `{e['hex']}` | {e['count']}x | {e['name']} |")
        lines.append("")

        by_cat = {}
        for e in data["all_colors"]:
            by_cat.setdefault(e["name"], []).append(e["hex"])

        lines.append("### Cores por Categoria\n")
        for cat, hexes in by_cat.items():
            lines.append(f"- **{cat.capitalize()}:** {', '.join([f'`{h}`' for h in hexes[:3]])}")
        lines.append("")

    if data.get("hashtags"):
        lines.append("## HASHTAGS MAIS USADAS\n")
        for e in data["hashtags"][:15]:
            lines.append(f"- `{e['tag']}` ({e['count']}x)")
        lines.append("")

    if data.get("captions_sample"):
        lines.append("## AMOSTRA DE CAPTIONS\n")
        for post in data["captions_sample"]:
            lines += [
                f"[Ver post]({post['url']})",
                f"> {post['caption'][:250]}",
                "",
            ]

    if data.get("all_colors"):
        dominant = [e for e in data["all_colors"]
                    if e["name"] not in ("branco/claro", "preto/escuro", "cinza neutro")][:5]
        if dominant:
            lines += [
                "## RECOMENDAÇÃO DE DESIGN\n",
                "Com base nas cores dominantes extraídas do perfil:\n",
            ]
            for e in dominant:
                lines.append(f"- `{e['hex']}` — {e['name']} (aparece {e['count']}x nos posts)")

            lines += [
                "",
                "> **Para o designer:** Compare esta paleta real com o design system proposto.",
                "> Ajuste ou valide as escolhas de cor com base no manual de marca ja existente.",
                "",
            ]

    if not data.get("accessible"):
        lines += [
            "## AVISO\n",
            "O scraper via browser nao conseguiu extrair dados suficientes deste perfil.",
            "Possveis causas: Instagram exigiu login, perfil com pouca atividade publica visivel,",
            "ou bloqueio temporario de acesso automatizado.",
            "",
        ]

    return "\n".join(lines)


def update_md(section_text):
    if not MD_PATH.exists():
        fallback = OUTPUT_DIR / "browser_section.md"
        fallback.write_text(section_text, encoding="utf-8")
        print(f"  [MD] antonioaguiar-proposta-discovery.md nao encontrado. Salvo em: {fallback}")
        return

    existing = MD_PATH.read_text(encoding="utf-8")

    for marker in [
        "\n---\n\n# DADOS EXTRAÍDOS — ANÁLISE VISUAL E DE PERFIL (BROWSER)",
        "\n---\n\n# DADOS EXTRAÍDOS — ANÁLISE VISUAL E DE PERFIL\n",
    ]:
        if marker in existing:
            existing = existing[:existing.index(marker)]

    MD_PATH.write_text(existing + section_text, encoding="utf-8")
    print(f"  [MD] Dados inseridos em: {MD_PATH}")

# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    ig_login = ig_pass = None
    if "--login" in sys.argv:
        idx = sys.argv.index("--login")
        try:
            ig_login = sys.argv[idx + 1]
            ig_pass  = sys.argv[idx + 2]
        except IndexError:
            print("[AVISO] --login requer: --login USUARIO SENHA")

    data = scrape_with_browser(ig_login, ig_pass)

    json_path = OUTPUT_DIR / "antonioaguiar_browser_data.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(
            {"generated_at": datetime.now().isoformat(), **data},
            f, ensure_ascii=False, indent=2
        )
    print(f"\n  [JSON] {json_path}")

    section = generate_section(data)
    update_md(section)

    print("\n" + "=" * 60)
    print("  CONCLUIDO")
    print(f"  Screenshots: {SHOTS_DIR}")
    print(f"  Imagens:     {IMAGES_DIR}")
    print(f"  JSON:        {json_path}")
    print(f"  MD:          {MD_PATH}")
    print("=" * 60)


if __name__ == "__main__":
    main()
