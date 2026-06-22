#!/usr/bin/env python3
"""
Scraper Instagram — Dr. Juraci Nunes
Extrai cookies do perfil Brave já logado (sem matar o browser),
injeta em sessão Playwright limpa e coleta dados completos.
Uso: python scripts/scraper_juracinunes_cookies.py
"""

import os
import re
import sys
import json
import time
import base64
import shutil
import sqlite3
import tempfile
import requests
from io import BytesIO
from pathlib import Path
from datetime import datetime
from collections import Counter

import browser_cookie3
import win32crypt
from Cryptodome.Cipher import AES
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

# ── Configuração ───────────────────────────────────────────────────────────────

INSTAGRAM_USERNAME = "advogadojuraci"
INSTAGRAM_URL      = f"https://www.instagram.com/{INSTAGRAM_USERNAME}/"

BRAVE_USER_DATA = Path(r"C:\Users\jonathas.000\AppData\Local\BraveSoftware\Brave-Browser\User Data")
BRAVE_LOCAL_STATE = BRAVE_USER_DATA / "Local State"
BRAVE_COOKIES     = BRAVE_USER_DATA / "Default" / "Network" / "Cookies"

SCRIPT_DIR  = Path(__file__).parent
OUTPUT_DIR  = SCRIPT_DIR / "output_juracinunes"
IMAGES_DIR  = OUTPUT_DIR / "images"
SHOTS_DIR   = OUTPUT_DIR / "screenshots"
MD_PATH     = SCRIPT_DIR.parent / "app" / "proposta-comercial" / "juracinunes" / "juracinunes-proposta-discovery.md"

for d in (OUTPUT_DIR, IMAGES_DIR, SHOTS_DIR):
    d.mkdir(parents=True, exist_ok=True)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    )
}

# ── Extração de cookies do Brave via browser_cookie3 ──────────────────────────

def get_instagram_cookies() -> list[dict]:
    print("[INFO] Extraindo cookies do Brave via browser_cookie3…")

    # browser_cookie3 lida internamente com o lock e descriptografia DPAPI
    jar = browser_cookie3.brave(domain_name=".instagram.com")

    cookies = []
    for c in jar:
        cookies.append({
            "name":     c.name,
            "value":    c.value,
            "domain":   c.domain,
            "path":     c.path,
            "secure":   bool(c.secure),
            "httpOnly": False,
            "sameSite": "None",
        })

    print(f"[INFO] {len(cookies)} cookies Instagram extraídos do Brave")
    return cookies

# ── Helpers ────────────────────────────────────────────────────────────────────

def dominant_colors(img_bytes: bytes, n: int = 5) -> list[str]:
    if not HAS_COLORTHIEF:
        return []
    try:
        ct = ColorThief(BytesIO(img_bytes))
        return [f"#{r:02X}{g:02X}{b:02X}" for r, g, b in ct.get_palette(color_count=n, quality=1)]
    except Exception:
        return []

def download_image(url: str, dest: Path) -> bytes | None:
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        r.raise_for_status()
        dest.write_bytes(r.content)
        return r.content
    except Exception as e:
        print(f"  [WARN] download falhou: {e}")
        return None

def parse_count(text: str) -> str:
    return text.strip().replace("\xa0", "").replace(" ", "")

def dismiss_modals(page):
    for sel in [
        'button:has-text("Agora não")', 'button:has-text("Not Now")',
        'button:has-text("Permitir")', '[aria-label="Fechar"]',
    ]:
        try:
            btn = page.locator(sel).first
            if btn.is_visible(timeout=1500):
                btn.click()
                time.sleep(0.8)
        except Exception:
            pass

# ── Scraping principal ─────────────────────────────────────────────────────────

def run() -> dict:
    cookies = get_instagram_cookies()

    data: dict = {
        "scraped_at": datetime.now().isoformat(),
        "profile":    {},
        "posts":      [],
        "colors":     {"profile_pic": [], "posts": []},
        "screenshots": [],
    }

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False, slow_mo=60)
        ctx = browser.new_context(
            viewport={"width": 1280, "height": 900},
            locale="pt-BR",
            user_agent=HEADERS["User-Agent"],
        )

        if HAS_STEALTH:
            page = ctx.new_page()
            stealth_sync(page)
        else:
            page = ctx.new_page()

        # Injeta cookies antes de navegar
        print("[INFO] Injetando cookies do Instagram…")
        ctx.add_cookies(cookies)

        # Navega ao perfil
        print(f"[INFO] Acessando {INSTAGRAM_URL}")
        page.goto(INSTAGRAM_URL, wait_until="domcontentloaded", timeout=30000)
        time.sleep(3)
        dismiss_modals(page)

        # Screenshot do topo
        shot_top = SHOTS_DIR / "profile_top_cookies.png"
        page.screenshot(path=str(shot_top))
        data["screenshots"].append(str(shot_top))
        print(f"[OK] Screenshot: {shot_top.name}")

        # ── Dados do perfil ──
        profile: dict = {}

        # Bio
        try:
            bio_el = page.locator('header section span[class*="_ap3a"]').first
            if not bio_el.is_visible(timeout=2000):
                bio_el = page.locator('header section div > span').first
            profile["bio"] = bio_el.inner_text(timeout=2000).strip()
        except Exception:
            pass

        # Contadores
        try:
            stats = page.locator("header section ul li").all()
            labels = ["posts", "seguidores", "seguindo"]
            for i, stat in enumerate(stats[:3]):
                txt = stat.inner_text().strip()
                profile[labels[i]] = parse_count(txt)
        except Exception:
            pass

        # Destaques
        try:
            hl = page.locator('ul[class*="ySN3H"] li, div[class*="_acnb"]').count()
            profile["destaques"] = hl
        except Exception:
            pass

        # Foto de perfil
        try:
            pic_url = page.locator("header img").first.get_attribute("src")
            if pic_url:
                profile["profile_pic_url"] = pic_url
                pic_path = OUTPUT_DIR / "profile_pic.jpg"
                pic_bytes = download_image(pic_url, pic_path)
                if pic_bytes:
                    data["colors"]["profile_pic"] = dominant_colors(pic_bytes)
        except Exception:
            pass

        data["profile"] = profile
        print(f"[INFO] Perfil: {profile}")

        # Screenshot do grid
        time.sleep(2)
        shot_grid = SHOTS_DIR / "profile_grid_cookies.png"
        page.screenshot(path=str(shot_grid), full_page=True)
        data["screenshots"].append(str(shot_grid))
        print(f"[OK] Screenshot grid: {shot_grid.name}")

        # ── Posts do feed ──
        post_links = []
        try:
            anchors = page.locator('article a[href*="/p/"], article a[href*="/reel/"]').all()
            for a in anchors:
                href = a.get_attribute("href")
                if href and href not in post_links and f"/{INSTAGRAM_USERNAME}/" in href:
                    post_links.append(href)
        except Exception:
            pass

        # Fallback: qualquer link de post/reel na página
        if not post_links:
            try:
                all_links = page.locator('a[href*="/p/"], a[href*="/reel/"]').all()
                for a in all_links:
                    href = a.get_attribute("href")
                    if href and href not in post_links and f"/{INSTAGRAM_USERNAME}/" in href:
                        post_links.append(href)
            except Exception:
                pass

        print(f"[INFO] {len(post_links)} posts do perfil encontrados")

        all_post_colors: list[str] = []

        for i, href in enumerate(post_links[:12], 1):
            post_url  = f"https://www.instagram.com{href}"
            post_data = {"url": post_url, "index": i}

            try:
                page.goto(post_url, wait_until="domcontentloaded", timeout=20000)
                time.sleep(2)
                dismiss_modals(page)

                # Caption
                for sel in [
                    'div._a9zs span', 'article div[class*="Caption"] span',
                    'div[class*="_a9zs"] span', 'article h1',
                ]:
                    try:
                        el = page.locator(sel).first
                        if el.is_visible(timeout=1500):
                            post_data["caption"] = el.inner_text().strip()[:500]
                            break
                    except Exception:
                        pass

                # Screenshot do post
                shot_post = SHOTS_DIR / f"post_{i:02d}.png"
                page.screenshot(path=str(shot_post))
                data["screenshots"].append(str(shot_post))

                # Imagem principal
                try:
                    img_url = page.locator('article img[src*="instagram"], article img[src*="fbcdn"]').first.get_attribute("src")
                    if img_url:
                        post_data["img_url"] = img_url
                        img_path = IMAGES_DIR / f"post_{i:02d}.jpg"
                        img_bytes = download_image(img_url, img_path)
                        if img_bytes:
                            colors = dominant_colors(img_bytes, 3)
                            post_data["colors"] = colors
                            all_post_colors.extend(colors)
                except Exception:
                    pass

            except Exception as e:
                post_data["error"] = str(e)
                print(f"  [WARN] Erro no post {i}: {e}")

            data["posts"].append(post_data)
            print(f"  [OK] Post {i}/{len(post_links)}: {href}")

        if all_post_colors:
            data["colors"]["posts"] = [
                {"hex": h, "count": c}
                for h, c in Counter(all_post_colors).most_common(10)
            ]

        browser.close()

    return data

# ── Relatório ──────────────────────────────────────────────────────────────────

def build_report(data: dict) -> str:
    p     = data.get("profile", {})
    posts = data.get("posts", [])
    cp    = data.get("colors", {}).get("profile_pic", [])
    cpp   = data.get("colors", {}).get("posts", [])

    lines = [
        f"\n# DADOS EXTRAÍDOS — SESSÃO BRAVE (COOKIES) — {data['scraped_at'][:10]}\n",
        f"> Gerado em {data['scraped_at']} via Playwright + cookies do Brave",
        f"> Fonte: Instagram `@{INSTAGRAM_USERNAME}` (sessão autenticada)\n",
        "## PERFIL\n",
        f"- **Username:** @{INSTAGRAM_USERNAME}",
        f"- **Bio:** {p.get('bio', 'n/d')}",
        f"- **Posts:** {p.get('posts', 'n/d')}",
        f"- **Seguidores:** {p.get('seguidores', 'n/d')}",
        f"- **Seguindo:** {p.get('seguindo', 'n/d')}",
        f"- **Destaques:** {p.get('destaques', 'n/d')}\n",
        "## PALETA — FOTO DE PERFIL\n",
        *[f"- `{c}`" for c in cp],
        "\n## PALETA — POSTS\n",
        "| Hex | Freq. |", "|---|---|",
        *[f"| `{e['hex']}` | {e['count']}x |" for e in cpp],
        "\n## POSTS COLETADOS\n",
        "| # | URL | Caption | Imagem |", "|---|---|---|---|",
        *[
            f"| {post.get('index','?')} | {post.get('url','—')} | {post.get('caption','—')[:80].replace(chr(10),' ')} | {'✓' if post.get('img_url') else '✗'} |"
            for post in posts
        ],
        "\n## SCREENSHOTS\n",
        *[f"- `{s}`" for s in data.get("screenshots", [])],
    ]
    return "\n".join(lines)

def append_to_md(report: str) -> None:
    if not MD_PATH.exists():
        out = OUTPUT_DIR / "scraper_cookies_output.md"
        out.write_text(report, encoding="utf-8")
        print(f"[OK] Relatório salvo em {out}")
        return
    current = MD_PATH.read_text(encoding="utf-8")
    marker  = "# DADOS EXTRAÍDOS — SESSÃO BRAVE (COOKIES)"
    if marker in current:
        current = current[:current.index(marker)]
    MD_PATH.write_text(current.rstrip() + "\n\n---\n" + report, encoding="utf-8")
    print(f"[OK] Discovery .md atualizado: {MD_PATH}")

# ── Entrypoint ─────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print(f"[START] Scraper cookies Juraci Nunes — {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    result = run()

    json_path = OUTPUT_DIR / "juracinunes_cookies_data.json"
    json_path.write_text(json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"[OK] JSON salvo: {json_path}")

    report = build_report(result)
    append_to_md(report)

    imgs = list(IMAGES_DIR.glob("post_*.jpg"))
    print(f"\n[DONE] Imagens baixadas: {len(imgs)}")
    print(f"       Output: {OUTPUT_DIR}")
