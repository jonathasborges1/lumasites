#!/usr/bin/env python3
"""
Scraper de identidade visual — Dr. Murillo Martins
Fontes: Instagram (@drmurillomartins), site (drmurillomartins.com.br)
Output: seção inserida automaticamente em docs/proposals/murillomartins.md
"""

import os
import re
import sys
import json
import time
import random
import requests
from pathlib import Path
from io import BytesIO
from collections import Counter
from datetime import datetime
from urllib.parse import urljoin

# ── Dependências opcionais ────────────────────────────────────────────────────

try:
    from PIL import Image
    HAS_PIL = True
except ImportError:
    HAS_PIL = False

try:
    from colorthief import ColorThief
    HAS_COLORTHIEF = True
except ImportError:
    HAS_COLORTHIEF = False

try:
    from bs4 import BeautifulSoup
    HAS_BS4 = True
except ImportError:
    HAS_BS4 = False

try:
    import instaloader
    HAS_INSTALOADER = True
except ImportError:
    HAS_INSTALOADER = False

# ── Configuração ──────────────────────────────────────────────────────────────

INSTAGRAM_USERNAME = "drmurillomartins"
WEBSITE_URLS = [
    "https://drmurillomartins.com.br",
    "http://drmurillomartins.com.br",
    "https://www.drmurillomartins.com.br",
]

SCRIPT_DIR   = Path(__file__).parent
OUTPUT_DIR   = SCRIPT_DIR / "output_murillo"
IMAGES_DIR   = OUTPUT_DIR / "images"
MD_PATH      = SCRIPT_DIR.parent / "docs" / "proposals" / "murillomartins.md"

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
IMAGES_DIR.mkdir(exist_ok=True)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
}

# ── Utilitários ───────────────────────────────────────────────────────────────

def rgb_to_hex(r, g, b):
    return f"#{r:02X}{g:02X}{b:02X}"


def color_name_hint(hex_color):
    """Retorna uma dica de nome para a cor baseada nos valores RGB."""
    hex_color = hex_color.lstrip("#")
    r, g, b = int(hex_color[0:2], 16), int(hex_color[2:4], 16), int(hex_color[4:6], 16)
    brightness = (r * 299 + g * 587 + b * 114) / 1000

    if brightness > 220:
        return "branco/tom claro"
    if brightness < 40:
        return "preto/tom escuro"
    if r > g and r > b:
        return "vermelho/rosa"
    if g > r and g > b:
        return "verde"
    if b > r and b > g:
        if r > 80:
            return "roxo/lilás"
        return "azul"
    if r > 180 and g > 150 and b < 80:
        return "dourado/amarelo"
    if r > 160 and g > 100 and b < 60:
        return "laranja/bronze"
    if abs(r - g) < 20 and abs(g - b) < 20:
        return "cinza neutro"
    return "cor mista"


def extract_colors_from_image_url(url, n_colors=6, label=""):
    """Baixa uma imagem e extrai suas cores dominantes."""
    if not HAS_COLORTHIEF:
        return []
    try:
        resp = requests.get(url, headers=HEADERS, timeout=12)
        resp.raise_for_status()
        image_file = BytesIO(resp.content)
        ct = ColorThief(image_file)
        palette = ct.get_palette(color_count=n_colors, quality=1)
        hexes = [rgb_to_hex(*c) for c in palette]
        if label:
            print(f"    Cores extraídas de {label}: {', '.join(hexes)}")
        return hexes
    except Exception as e:
        print(f"    [AVISO] Não extraiu cores de {label}: {e}")
        return []


def save_image(url, filename):
    """Salva uma imagem no diretório de output."""
    if not HAS_PIL:
        return
    try:
        resp = requests.get(url, headers=HEADERS, timeout=12)
        resp.raise_for_status()
        img = Image.open(BytesIO(resp.content))
        img.save(IMAGES_DIR / filename)
        print(f"    Imagem salva: {filename}")
    except Exception as e:
        print(f"    [AVISO] Não salvou {filename}: {e}")

# ── Scraper: Site ─────────────────────────────────────────────────────────────

def scrape_website():
    print("\n" + "-" * 50)
    print("SITE - drmurillomartins.com.br")
    print("-" * 50)

    result = {
        "accessible": False,
        "final_url": None,
        "headline": None,
        "subheadlines": [],
        "ctas": [],
        "colors_css": [],
        "fonts": [],
        "images": [],
        "raw_texts": [],
        "meta_description": None,
        "meta_keywords": None,
    }

    response = None
    for url in WEBSITE_URLS:
        try:
            r = requests.get(url, headers=HEADERS, timeout=15, allow_redirects=True)
            if r.status_code == 200:
                response = r
                result["accessible"] = True
                result["final_url"] = r.url
                print(f"  [OK] Acessível: {r.url}")
                break
            else:
                print(f"  [HTTP {r.status_code}] {url}")
        except Exception as e:
            print(f"  [FALHA] {url} → {type(e).__name__}")

    if not result["accessible"]:
        print("  Site inacessível por todos os endpoints testados.")
        return result

    if not HAS_BS4:
        print("  [AVISO] beautifulsoup4 não instalado — parsing limitado.")
        return result

    soup = BeautifulSoup(response.text, "html.parser")

    # Meta tags
    meta_desc = soup.find("meta", attrs={"name": re.compile("description", re.I)})
    if meta_desc:
        result["meta_description"] = meta_desc.get("content", "")

    meta_kw = soup.find("meta", attrs={"name": re.compile("keywords", re.I)})
    if meta_kw:
        result["meta_keywords"] = meta_kw.get("content", "")

    # Headings
    h1 = soup.find("h1")
    result["headline"] = h1.get_text(strip=True) if h1 else None

    for h2 in soup.find_all("h2")[:5]:
        text = h2.get_text(strip=True)
        if text:
            result["subheadlines"].append(text)

    # CTAs (botões e links destacados)
    cta_patterns = re.compile(r"btn|cta|button|agendar|contato|whatsapp|consulta", re.I)
    for el in soup.find_all(["button", "a"], class_=cta_patterns):
        text = el.get_text(strip=True)
        if text and 2 < len(text) < 60 and text not in result["ctas"]:
            result["ctas"].append(text)

    # Cores CSS inline
    color_re = re.compile(r"#[0-9a-fA-F]{3,6}|rgba?\([^)]+\)")
    for style_tag in soup.find_all("style"):
        found = color_re.findall(style_tag.string or "")
        result["colors_css"].extend(found)

    for tag in soup.find_all(style=True):
        found = color_re.findall(tag.get("style", ""))
        result["colors_css"].extend(found)

    color_counts = Counter(result["colors_css"])
    result["colors_css"] = [
        {"color": c, "count": n, "hint": color_name_hint(c) if c.startswith("#") else "rgb"}
        for c, n in color_counts.most_common(20)
        if c not in ("#fff", "#FFF", "#ffffff", "#FFFFFF", "#000", "#000000")
    ]

    # Fontes (Google Fonts e link tags)
    gf_re = re.compile(r"family=([^&\"']+)", re.I)
    for link in soup.find_all("link", rel=True):
        href = link.get("href", "")
        if "font" in href.lower():
            match = gf_re.search(href)
            if match:
                font = match.group(1).replace("+", " ").split(":")[0]
                if font not in result["fonts"]:
                    result["fonts"].append(font)

    # Imagens com src e alt
    for img in soup.find_all("img")[:15]:
        src = img.get("src", "")
        alt = img.get("alt", "")
        if src and not src.startswith("data:"):
            full_url = urljoin(response.url, src)
            result["images"].append({"url": full_url, "alt": alt})

    # Textos relevantes
    for tag in soup.find_all(["p", "h1", "h2", "h3", "h4", "li", "span"]):
        text = tag.get_text(strip=True)
        if 25 < len(text) < 400 and text not in result["raw_texts"]:
            result["raw_texts"].append(text)

    result["raw_texts"] = result["raw_texts"][:30]

    print(f"  H1: {result['headline']}")
    print(f"  H2s: {result['subheadlines'][:3]}")
    print(f"  Fontes: {result['fonts']}")
    print(f"  Cores CSS: {len(result['colors_css'])} encontradas")
    print(f"  Imagens: {len(result['images'])} encontradas")

    return result

# ── Scraper: Instagram ────────────────────────────────────────────────────────

def scrape_instagram():
    print("\n" + "-" * 50)
    print(f"INSTAGRAM - @{INSTAGRAM_USERNAME}")
    print("-" * 50)

    result = {
        "accessible": False,
        "username": INSTAGRAM_USERNAME,
        "full_name": None,
        "bio": None,
        "bio_links": [],
        "followers": None,
        "following": None,
        "posts_count": None,
        "is_private": None,
        "profile_pic_url": None,
        "profile_pic_colors": [],
        "posts": [],
        "all_colors": [],
        "top_hashtags": [],
        "highlights_count": 0,
    }

    if not HAS_INSTALOADER:
        print("  [SKIP] instaloader não instalado. Execute: pip install instaloader")
        return result

    try:
        L = instaloader.Instaloader(
            download_pictures=False,
            download_videos=False,
            download_comments=False,
            save_metadata=False,
            quiet=True,
        )

        profile = instaloader.Profile.from_username(L.context, INSTAGRAM_USERNAME)

        result.update({
            "accessible": True,
            "full_name": profile.full_name,
            "bio": profile.biography,
            "followers": profile.followers,
            "following": profile.followees,
            "posts_count": profile.mediacount,
            "is_private": profile.is_private,
            "profile_pic_url": profile.profile_pic_url,
        })

        print(f"  Nome:       {profile.full_name}")
        print(f"  Bio:        {profile.biography}")
        print(f"  Seguidores: {profile.followers:,}")
        print(f"  Posts:      {profile.mediacount}")
        print(f"  Privado:    {profile.is_private}")

        # Highlights count
        try:
            result["highlights_count"] = sum(1 for _ in profile.get_highlights())
        except Exception:
            pass

        # Foto de perfil
        if profile.profile_pic_url:
            print("  Extraindo cores da foto de perfil...")
            result["profile_pic_colors"] = extract_colors_from_image_url(
                profile.profile_pic_url, n_colors=5, label="foto de perfil"
            )
            save_image(profile.profile_pic_url, "profile_pic.jpg")

        # Posts (máximo 25)
        if not profile.is_private:
            print("  Extraindo posts...")
            all_color_list = []
            hashtags_all = []
            max_posts = 25

            for i, post in enumerate(profile.get_posts()):
                if i >= max_posts:
                    break

                caption = post.caption or ""
                hashtags = re.findall(r"#\w+", caption)
                hashtags_all.extend(hashtags)

                post_entry = {
                    "shortcode": post.shortcode,
                    "url": f"https://www.instagram.com/p/{post.shortcode}/",
                    "date": post.date_utc.strftime("%Y-%m-%d"),
                    "likes": post.likes,
                    "caption": caption[:250],
                    "hashtags": hashtags,
                    "image_url": post.url if hasattr(post, "url") else None,
                    "colors": [],
                }

                # Extrair cores da imagem do post
                if post_entry["image_url"]:
                    colors = extract_colors_from_image_url(
                        post_entry["image_url"], n_colors=4, label=f"post {i+1}"
                    )
                    post_entry["colors"] = colors
                    all_color_list.extend(colors)

                    # Salvar imagem dos 5 primeiros posts
                    if i < 5:
                        save_image(post_entry["image_url"], f"post_{i+1:02d}.jpg")

                result["posts"].append(post_entry)
                time.sleep(random.uniform(1.2, 2.5))

            # Cores mais frequentes em todos os posts
            color_counts = Counter(all_color_list)
            result["all_colors"] = [
                {"hex": c, "count": n, "hint": color_name_hint(c)}
                for c, n in color_counts.most_common(15)
            ]

            # Top hashtags
            hashtag_counts = Counter(hashtags_all)
            result["top_hashtags"] = [
                {"tag": h, "count": n}
                for h, n in hashtag_counts.most_common(20)
            ]

        else:
            print("  [AVISO] Perfil privado — posts não acessíveis sem login.")

    except instaloader.exceptions.ProfileNotExistsException:
        print(f"  [ERRO] Perfil @{INSTAGRAM_USERNAME} não existe.")
    except instaloader.exceptions.LoginRequiredException:
        print("  [ERRO] Instagram exige login para este perfil.")
        print("         Execute com credenciais: python scraper_murillo.py --login SEU_USUARIO")
    except Exception as e:
        print(f"  [ERRO] {type(e).__name__}: {e}")

    return result


# ── Login opcional ────────────────────────────────────────────────────────────

def scrape_instagram_with_login(ig_user, ig_pass):
    """Versão autenticada — acessa perfis privados e mais dados."""
    print(f"\n  Autenticando como @{ig_user}...")
    result = scrape_instagram.__wrapped__ if hasattr(scrape_instagram, "__wrapped__") else {}

    L = instaloader.Instaloader(
        download_pictures=False,
        download_videos=False,
        download_comments=False,
        save_metadata=False,
        quiet=True,
    )
    try:
        L.login(ig_user, ig_pass)
        print("  [OK] Login realizado.")
    except Exception as e:
        print(f"  [ERRO] Login falhou: {e}")
        return scrape_instagram()

    return scrape_instagram()

# ── Gerador de Relatório ──────────────────────────────────────────────────────

def generate_markdown_section(site, ig):
    now = datetime.now().strftime("%d/%m/%Y %H:%M")
    lines = []

    lines += [
        "",
        "---",
        "",
        "# DADOS EXTRAÍDOS — ANÁLISE VISUAL E DE PERFIL",
        "",
        f"> Gerado automaticamente em {now}  ",
        f"> Scraper: `scripts/scraper_murillo.py`",
        "",
    ]

    # ── Instagram ──
    lines += ["## INSTAGRAM\n"]

    if ig.get("accessible"):
        lines += [
            f"- **Username:** @{ig['username']}",
            f"- **Nome completo:** {ig['full_name']}",
            f"- **Bio:** {ig['bio']}",
            f"- **Seguidores:** {ig['followers']:,}",
            f"- **Seguindo:** {ig['following']:,}",
            f"- **Total de posts:** {ig['posts_count']}",
            f"- **Destaques:** {ig['highlights_count']}",
            f"- **Perfil privado:** {'Sim' if ig['is_private'] else 'Não'}",
            "",
        ]

        if ig.get("profile_pic_colors"):
            lines.append("### Cores da Foto de Perfil\n")
            for h in ig["profile_pic_colors"]:
                lines.append(f"- `{h}` — {color_name_hint(h)}")
            lines.append("")

        if ig.get("all_colors"):
            lines += [
                "### Paleta Extraída dos Posts\n",
                "| Hex | Frequência | Categoria |",
                "|---|---|---|",
            ]
            for entry in ig["all_colors"][:12]:
                lines.append(f"| `{entry['hex']}` | {entry['count']}x | {entry['hint']} |")
            lines.append("")

        if ig.get("top_hashtags"):
            lines.append("### Hashtags Mais Usadas\n")
            for entry in ig["top_hashtags"][:15]:
                lines.append(f"- `{entry['tag']}` ({entry['count']}x)")
            lines.append("")

        if ig.get("posts"):
            lines += ["### Amostra de Posts Recentes\n"]
            for post in ig["posts"][:6]:
                lines += [
                    f"**{post['date']}** — {post['likes']} curtidas — [ver post]({post['url']})",
                    f"> {post['caption'][:200].strip()}",
                    "",
                ]
    else:
        lines += [
            "Perfil não acessível automaticamente.",
            "",
            "**Causa provável:** Instagram exige autenticação para leitura de posts.",
            "",
            "**Como resolver:** execute o scraper com credenciais:",
            "```bash",
            "python scripts/scraper_murillo.py --login SEU_USUARIO SEU_SENHA",
            "```",
            "",
        ]

    # ── Site ──
    lines += ["## SITE OFICIAL\n"]

    if site.get("accessible"):
        if site.get("meta_description"):
            lines.append(f"- **Meta description:** {site['meta_description']}")
        if site.get("headline"):
            lines.append(f"- **H1:** {site['headline']}")
        if site.get("subheadlines"):
            for h in site["subheadlines"]:
                lines.append(f"- **H2:** {h}")
        if site.get("ctas"):
            lines.append(f"- **CTAs:** {', '.join(site['ctas'][:6])}")
        if site.get("fonts"):
            lines.append(f"- **Fontes detectadas:** {', '.join(set(site['fonts']))}")
        lines.append("")

        if site.get("colors_css"):
            lines += [
                "### Cores Encontradas no CSS/Inline\n",
                "| Hex/RGB | Frequência | Categoria |",
                "|---|---|---|",
            ]
            for entry in site["colors_css"][:12]:
                lines.append(f"| `{entry['color']}` | {entry['count']}x | {entry['hint']} |")
            lines.append("")

        if site.get("raw_texts"):
            lines.append("### Textos Identificados no Site\n")
            for text in site["raw_texts"][:12]:
                lines.append(f"- {text}")
            lines.append("")
    else:
        lines += [
            "Site inacessível (`connection refused`).",
            "",
            "O domínio `drmurillomartins.com.br` retornou erro de conexão em todas as tentativas.",
            "Possível causa: servidor temporariamente fora do ar ou sem HTTPS ativo.",
            "",
        ]

    # ── Recomendação de design ──
    if ig.get("all_colors") or site.get("colors_css"):
        all_extracted = []

        if ig.get("all_colors"):
            all_extracted += [(e["hex"], e["count"], e["hint"]) for e in ig["all_colors"]]
        if site.get("colors_css"):
            all_extracted += [
                (e["color"], e["count"], e["hint"])
                for e in site["colors_css"]
                if e["color"].startswith("#")
            ]

        lines += [
            "## ANÁLISE DE IDENTIDADE VISUAL\n",
            "Com base nas cores extraídas automaticamente:\n",
        ]

        dominant = sorted(all_extracted, key=lambda x: x[1], reverse=True)[:5]
        for hex_val, count, hint in dominant:
            lines.append(f"- `{hex_val}` ({hint}) — aparece {count}x")

        lines += [
            "",
            "> **Nota para o designer:** compare esta paleta extraída com a proposta de design system",
            "> definida na seção anterior. Ajuste as cores da proposta para refletir a identidade",
            "> visual real do Dr. Murillo, mantendo o conceito premium.",
            "",
        ]

    return "\n".join(lines)


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("  SCRAPER - DR. MURILLO MARTINS")
    print("  Identidade Visual & Perfil Digital")
    print(f"  {datetime.now().strftime('%d/%m/%Y %H:%M')}")
    print("=" * 60)

    # Login opcional via argumento
    ig_login = None
    ig_pass = None
    if "--login" in sys.argv:
        idx = sys.argv.index("--login")
        try:
            ig_login = sys.argv[idx + 1]
            ig_pass = sys.argv[idx + 2]
        except IndexError:
            print("[AVISO] --login requer: --login USUARIO SENHA")

    # 1. Site
    site_data = scrape_website()

    # 2. Instagram
    instagram_data = scrape_instagram()

    # 3. Salvar JSON completo
    json_path = OUTPUT_DIR / "murillo_visual_data.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(
            {"generated_at": datetime.now().isoformat(), "site": site_data, "instagram": instagram_data},
            f, ensure_ascii=False, indent=2
        )
    print(f"\n  [JSON] Salvo em: {json_path}")

    # 4. Gerar seção markdown
    md_section = generate_markdown_section(site_data, instagram_data)

    # 5. Inserir no murillomartins.md
    if MD_PATH.exists():
        # Remover seção anterior se já existir
        existing = MD_PATH.read_text(encoding="utf-8")
        marker = "\n---\n\n# DADOS EXTRAÍDOS — ANÁLISE VISUAL E DE PERFIL"
        if marker in existing:
            existing = existing[:existing.index(marker)]
            MD_PATH.write_text(existing, encoding="utf-8")
            print("  [MD] Seção anterior removida (substituindo).")

        with open(MD_PATH, "a", encoding="utf-8") as f:
            f.write(md_section)
        print(f"  [MD] Dados inseridos em: {MD_PATH}")
    else:
        fallback = OUTPUT_DIR / "section_output.md"
        fallback.write_text(md_section, encoding="utf-8")
        print(f"  [MD] murillomartins.md não encontrado. Seção salva em: {fallback}")

    print("\n" + "=" * 60)
    print("  CONCLUÍDO")
    print(f"  Imagens: {IMAGES_DIR}")
    print(f"  JSON:    {json_path}")
    print(f"  MD:      {MD_PATH}")
    print("=" * 60)


if __name__ == "__main__":
    main()
