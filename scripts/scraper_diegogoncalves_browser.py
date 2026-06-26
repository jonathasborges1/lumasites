#!/usr/bin/env python3
"""
Scraper com browser real (Playwright) — Diego Gonçalves
Abre Brave, navega em causacriminal.com.br e extrai assets/identidade visual.
Uso: python scripts/scraper_diegogoncalves_browser.py
"""

import re
import json
import time
import shutil
import subprocess
import tempfile
import requests
from io import BytesIO
from pathlib import Path
from datetime import datetime
from collections import Counter
from urllib.parse import urljoin, urlparse

from playwright.sync_api import sync_playwright

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

# ── Configuração ──────────────────────────────────────────────────────────────

SITE_URL   = "https://causacriminal.com.br/"

SCRIPT_DIR = Path(__file__).parent
OUTPUT_DIR = SCRIPT_DIR / "output_diegogoncalves"
IMAGES_DIR = OUTPUT_DIR / "images"
SHOTS_DIR  = OUTPUT_DIR / "screenshots"
MD_PATH    = OUTPUT_DIR / "diegogoncalves-discovery.md"

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

def dominant_colors(img_bytes: bytes, n: int = 5) -> list:
    if not HAS_COLORTHIEF:
        return []
    try:
        ct = ColorThief(BytesIO(img_bytes))
        palette = ct.get_palette(color_count=n, quality=1)
        return [f"#{r:02X}{g:02X}{b:02X}" for r, g, b in palette]
    except Exception:
        return []

def download_image(url: str, dest: Path) -> bytes:
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        r.raise_for_status()
        dest.write_bytes(r.content)
        return r.content
    except Exception as e:
        print(f"  [WARN] download falhou {url[:80]}: {e}")
        return None

def is_useful_image(src: str) -> bool:
    if not src or src.startswith("data:"):
        return False
    skip = ["logo", "icon", "favicon", "sprite", "pixel", "tracking",
            "1x1", "blank", "spacer", ".gif", "whatsapp", "facebook",
            "instagram", "twitter", "youtube", "linkedin"]
    low = src.lower()
    for pat in skip:
        if pat in low:
            return False
    ext = urlparse(src).path.split(".")[-1].lower()
    return ext in ("jpg", "jpeg", "png", "webp", "avif") or "?" in src

# ── Scraping do site ──────────────────────────────────────────────────────────

def scrape_site(page, data: dict) -> None:
    print(f"[INFO] Acessando: {SITE_URL}")
    page.goto(SITE_URL, wait_until="networkidle", timeout=40000)
    time.sleep(3)

    # Screenshots
    shot_hero = SHOTS_DIR / "site_hero.png"
    page.screenshot(path=str(shot_hero))
    data["screenshots"].append(str(shot_hero))
    print(f"[OK] Screenshot hero: {shot_hero.name}")

    shot_full = SHOTS_DIR / "site_full.png"
    page.screenshot(path=str(shot_full), full_page=True)
    data["screenshots"].append(str(shot_full))
    print(f"[OK] Screenshot full: {shot_full.name}")

    site = {}

    site["page_title"] = page.title()

    try:
        site["h1"] = page.locator("h1").first.inner_text().strip()
    except Exception:
        pass

    headings = []
    for tag in ["h1", "h2", "h3"]:
        try:
            for el in page.locator(tag).all():
                txt = el.inner_text().strip()
                if txt and len(txt) > 2:
                    headings.append({"tag": tag, "text": txt})
        except Exception:
            pass
    site["headings"] = headings

    paragraphs = []
    try:
        for el in page.locator("p").all():
            txt = el.inner_text().strip()
            if len(txt) > 30:
                paragraphs.append(txt)
    except Exception:
        pass
    site["paragraphs"] = paragraphs[:25]

    ctas = []
    try:
        for el in page.locator("a, button").all():
            txt = el.inner_text().strip()
            href = el.get_attribute("href") or ""
            if txt and 3 < len(txt) < 120:
                ctas.append({"text": txt, "href": href[:120]})
    except Exception:
        pass
    site["ctas"] = ctas[:40]

    # Variáveis CSS
    try:
        css_vars = page.evaluate("""() => {
            const vars = {};
            for (const sheet of document.styleSheets) {
                try {
                    for (const rule of sheet.cssRules) {
                        if (rule.selectorText === ':root' || rule.selectorText === 'body') {
                            const matches = rule.cssText.matchAll(/--([\w-]+)\s*:\s*([^;]+)/g);
                            for (const m of matches) vars[m[1]] = m[2].trim();
                        }
                    }
                } catch(e) {}
            }
            return vars;
        }""")
    except Exception:
        css_vars = {}
    site["css_variables"] = css_vars

    # Fontes
    try:
        fonts = page.evaluate("""() => {
            const found = new Set();
            for (const el of document.querySelectorAll('*')) {
                const f = getComputedStyle(el).fontFamily;
                if (f) found.add(f.split(',')[0].trim().replace(/['"]/g, ''));
            }
            return [...found].slice(0, 12);
        }""")
    except Exception:
        fonts = []
    site["fonts"] = fonts

    # Imagens <img>
    all_colors = []
    img_records = []
    try:
        idx = 0
        for img in page.locator("img").all():
            src = img.get_attribute("src") or ""
            alt = img.get_attribute("alt") or ""
            if not is_useful_image(src):
                continue
            abs_src = urljoin(SITE_URL, src)
            dest = IMAGES_DIR / f"site_img_{idx:02d}.jpg"
            img_bytes = download_image(abs_src, dest)
            rec = {"src": abs_src, "alt": alt}
            if img_bytes:
                colors = dominant_colors(img_bytes, 5)
                rec["colors"] = colors
                rec["saved"] = dest.name
                all_colors.extend(colors)
                print(f"    [OK] img {idx:02d}: {dest.name}")
            img_records.append(rec)
            idx += 1
    except Exception as e:
        print(f"  [WARN] imagens: {e}")
    site["images"] = img_records

    # Background images CSS
    bg_saved = []
    try:
        bg_urls = page.evaluate("""() => {
            const found = [];
            for (const el of document.querySelectorAll('*')) {
                const bg = getComputedStyle(el).backgroundImage;
                if (bg && bg !== 'none') {
                    const m = bg.match(/url\(["']?([^"')]+)["']?\)/);
                    if (m) found.push(m[1]);
                }
            }
            return [...new Set(found)].slice(0, 20);
        }""")
        for i, bg_url in enumerate(bg_urls):
            abs_bg = urljoin(SITE_URL, bg_url)
            if is_useful_image(abs_bg):
                dest = IMAGES_DIR / f"bg_img_{i:02d}.jpg"
                img_bytes = download_image(abs_bg, dest)
                if img_bytes:
                    colors = dominant_colors(img_bytes, 5)
                    bg_saved.append({"url": abs_bg, "saved": dest.name, "colors": colors})
                    all_colors.extend(colors)
                    print(f"    [OK] bg {i:02d}: {dest.name}")
    except Exception as e:
        print(f"  [WARN] bg images: {e}")
    site["bg_images"] = bg_saved

    data["site"] = site
    data["all_colors"] = all_colors
    print(f"[INFO] Extraído: {len(headings)} headings | {len(paragraphs)} parágrafos | {len(img_records)} imgs | {len(bg_saved)} bg imgs")

    # Subpáginas do nav
    nav_links = []
    try:
        for el in page.locator("nav a, header a").all():
            href = el.get_attribute("href") or ""
            if href.startswith("/") and len(href) > 1 and href not in nav_links:
                nav_links.append(href)
    except Exception:
        pass

    for i, href in enumerate(nav_links[:5], 1):
        try:
            sub_url = urljoin(SITE_URL, href)
            page.goto(sub_url, wait_until="domcontentloaded", timeout=20000)
            time.sleep(2)
            slug = href.strip("/").replace("/", "_") or "home"
            shot = SHOTS_DIR / f"subpage_{i:02d}_{slug}.png"
            page.screenshot(path=str(shot), full_page=True)
            data["screenshots"].append(str(shot))
            print(f"    [OK] subpage {href}: {shot.name}")
        except Exception as e:
            print(f"  [WARN] subpage {href}: {e}")

# ── Main ──────────────────────────────────────────────────────────────────────

def run() -> dict:
    data = {
        "scraped_at": datetime.now().isoformat(),
        "site": {},
        "all_colors": [],
        "screenshots": [],
    }

    BRAVE_PATH      = r"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"
    BRAVE_USER_DATA = Path(r"C:\Users\jonathas.000\AppData\Local\BraveSoftware\Brave-Browser\User Data")

    print("[INFO] Encerrando Brave existente…")
    subprocess.run(["taskkill", "/F", "/IM", "brave.exe"], capture_output=True)
    time.sleep(2)

    tmp_dir = Path(tempfile.mkdtemp(prefix="brave_diego_"))
    src_profile = BRAVE_USER_DATA / "Default"
    dst_profile = tmp_dir / "Default"
    dst_profile.mkdir(parents=True, exist_ok=True)

    local_state = BRAVE_USER_DATA / "Local State"
    if local_state.exists():
        shutil.copy2(local_state, tmp_dir / "Local State")

    for folder in ["Local Storage", "Session Storage"]:
        src = src_profile / folder
        if src.exists():
            shutil.copytree(src, dst_profile / folder, dirs_exist_ok=True)

    print("[INFO] Iniciando Playwright…")

    with sync_playwright() as p:
        ctx = p.chromium.launch_persistent_context(
            user_data_dir=str(tmp_dir),
            executable_path=BRAVE_PATH,
            headless=False,
            slow_mo=60,
            viewport={"width": 1440, "height": 900},
            locale="pt-BR",
            args=["--profile-directory=Default"],
        )
        page = ctx.new_page()

        if HAS_STEALTH:
            stealth_sync(page)

        scrape_site(page, data)
        ctx.close()

    return data

# ── Relatório ─────────────────────────────────────────────────────────────────

def build_report(data: dict) -> str:
    s = data.get("site", {})
    color_freq = Counter(data.get("all_colors", [])).most_common(12)

    lines = [
        "# DISCOVERY — Diego Gonçalves | causacriminal.com.br\n",
        f"> Gerado em {data['scraped_at']} via Playwright (Brave)",
        f"> Fonte: `{SITE_URL}`\n",
        "---\n",
        "## CONTEÚDO DO SITE\n",
        f"- **Título da página:** {s.get('page_title', 'n/d')}",
        f"- **H1:** {s.get('h1', 'n/d')}",
        "\n### Headings\n",
    ]
    for h in s.get("headings", []):
        lines.append(f"- `{h['tag']}`: {h['text']}")

    lines += ["\n### Parágrafos\n"]
    for para in s.get("paragraphs", [])[:15]:
        lines.append(f"> {para[:220]}")

    lines += ["\n### CTAs / Links de destaque\n"]
    for cta in s.get("ctas", [])[:20]:
        lines.append(f"- **{cta['text']}** → `{cta['href']}`")

    lines += [
        "\n---\n",
        "## IDENTIDADE VISUAL\n",
        "### Variáveis CSS (:root / body)\n",
    ]
    css = s.get("css_variables", {})
    if css:
        for k, v in list(css.items())[:30]:
            lines.append(f"- `--{k}`: `{v}`")
    else:
        lines.append("- n/d")

    lines += ["\n### Fontes detectadas\n"]
    for font in s.get("fonts", []):
        lines.append(f"- `{font}`")

    lines += [
        "\n### Paleta extraída das imagens\n",
        "| Hex | Frequência |",
        "|---|---|",
    ]
    if color_freq:
        for hex_color, count in color_freq:
            lines.append(f"| `{hex_color}` | {count}x |")
    else:
        lines.append("| n/d | — |")

    lines += [
        "\n---\n",
        "## IMAGENS COLETADAS\n",
        "| # | Arquivo | Alt | Cores dominantes |",
        "|---|---|---|---|",
    ]
    for i, img in enumerate(s.get("images", []), 1):
        fname = img.get("saved", "n/d")
        alt = img.get("alt", "")[:50]
        colors = ", ".join(img.get("colors", [])[:3]) or "n/d"
        lines.append(f"| {i} | `{fname}` | {alt} | {colors} |")

    if s.get("bg_images"):
        lines += ["\n### Background Images\n"]
        for bg in s["bg_images"]:
            colors = ", ".join(bg.get("colors", [])[:3]) or "n/d"
            lines.append(f"- `{bg.get('saved', 'n/d')}` — cores: {colors}")

    lines += [
        "\n---\n",
        "## SCREENSHOTS CAPTURADOS\n",
    ]
    for shot in data.get("screenshots", []):
        lines.append(f"- `{shot}`")

    lines += [
        "\n---\n",
        "## ANÁLISE EDITORIAL (preencher após revisão)\n",
        "### Identidade Visual\n",
        "- **Tom de comunicação:** ",
        "- **Paleta predominante:** ",
        "- **Tipografia percebida:** ",
        "- **Estilo fotográfico:** ",
        "\n### Proposta de valor percebida\n",
        "- ",
        "\n### Oportunidades para o novo site\n",
        "- ",
    ]

    return "\n".join(lines)

def save_report(report: str) -> None:
    MD_PATH.write_text(report, encoding="utf-8")
    print(f"[OK] Relatório salvo: {MD_PATH}")

# ── Entrypoint ────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print(f"[START] Scraper Diego Gonçalves (site) — {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    result = run()

    json_path = OUTPUT_DIR / "diegogoncalves_data.json"
    json_path.write_text(json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"[OK] JSON: {json_path}")

    report = build_report(result)
    save_report(report)

    print("\n[DONE] Extração concluída.")
    print(f"       Output: {OUTPUT_DIR}")
    print(f"       Discovery: {MD_PATH}")
