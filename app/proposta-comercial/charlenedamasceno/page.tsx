"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Instagram,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

const WA = "https://wa.link/n9h7n8";
const IG = "https://www.instagram.com/charlene.damasceno";

const IMG = {
  hero:   "/images/charlenedamasceno/i86.webp",
  sobre:  "/images/charlenedamasceno/sobre.webp",
  banner: "/images/charlenedamasceno/banner.webp",
  dep1:   "/images/charlenedamasceno/dep1.webp",
  dep2:   "/images/charlenedamasceno/dep2.webp",
  dep3:   "/images/charlenedamasceno/dep3.webp",
  dep4:   "/images/charlenedamasceno/dep4.webp",
};

const GIF = {
  walking:    "/images/charlenedamasceno/icon-walking.webp",
  stock:      "/images/charlenedamasceno/icon-stock.webp",
  fever:      "/images/charlenedamasceno/icon-fever.webp",
  morale:     "/images/charlenedamasceno/icon-morale.webp",
  document:   "/images/charlenedamasceno/icon-document.webp",
  wheelchair: "/images/charlenedamasceno/icon-wheelchair.webp",
};

const navItems = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const services = [
  {
    gif: GIF.walking,
    title: "Aposentadorias",
    items: [
      "Por idade",
      "Tempo de contribuição",
      "Especial / insalubre",
      "Rural",
      "Por invalidez",
      "Híbrida",
    ],
  },
  {
    gif: GIF.stock,
    title: "Revisão de Benefícios",
    items: [
      "Revisão da vida toda",
      "Erro de cálculo",
      "Aumento de valor",
      "Reindexação",
    ],
  },
  {
    gif: GIF.fever,
    title: "Benefícios por Incapacidade",
    items: [
      "Auxílio-doença",
      "Aposentadoria por invalidez",
      "Auxílio-acidente",
      "Perícia médica",
    ],
  },
  {
    gif: GIF.morale,
    title: "Pensão por Morte",
    items: [
      "Pensão por morte",
      "Auxílio-reclusão",
      "Dependentes econômicos",
      "Inventário previdenciário",
    ],
  },
  {
    gif: GIF.document,
    title: "Defesa em Negativas",
    items: [
      "Recursos administrativos",
      "Ações judiciais",
      "Reativação de benefícios",
      "Cassação indevida",
    ],
  },
  {
    gif: GIF.wheelchair,
    title: "BPC / LOAS",
    items: [
      "Idosos de baixa renda",
      "Pessoas com deficiência",
      "Autismo e TEA",
      "Recursos e revisões",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Contato",
    text: "Fale pelo WhatsApp. Relate seu caso sem formalismos. Você é ouvido com atenção desde o primeiro contato.",
  },
  {
    n: "02",
    title: "Análise",
    text: "Avaliamos seu histórico, documentação e viabilidade do benefício com técnica e estratégia.",
  },
  {
    n: "03",
    title: "Conquista",
    text: "Cuidamos de todo o processo administrativo ou judicial. Do protocolo ao deferimento, com você em cada etapa.",
  },
];

const WaIcon = ({
  size = 17,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

/* ─── CSS ─────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@400;500;600;700;800&display=swap');

  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; cursor: pointer; }

  :root {
    --bar:     52px;
    --nav:     68px;
    --gold:    #BBA75D;
    --gold-lt: #D4C07A;
    --gold-dk: #6B5504;
    --bg:      #000000;
    --cream:   #080808;
    --dark:    #000000;
    --ink:     #FFFFFF;
    --soft:    #F5EEDB;
    --muted:   rgba(255,255,255,.68);
    --line:    rgba(255,255,255,.14);
    --wa:      #25D366;
  }

  .cd { overflow-x: clip; font-family: Inter, system-ui, sans-serif; background: var(--bg); color: var(--ink); }

  /* ══ PREVIEW BAR ══════════════════════════════════════════ */
  .pre-bar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1001;
    min-height: var(--bar);
    padding: 7px 20px;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
    background: #08040A; text-align: center;
    font-family: Inter, sans-serif;
  }
  .pre-line {
    display: flex; align-items: center; gap: 8px;
    color: #fff; font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase;
  }
  .pre-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--gold); flex: none;
    animation: dot-pulse 1.6s ease-out infinite;
  }
  @keyframes dot-pulse {
    0%  { box-shadow: 0 0 0 0 rgba(187,167,93,.9); }
    70% { box-shadow: 0 0 0 10px rgba(187,167,93,0); }
    100%{ box-shadow: 0 0 0 0 rgba(187,167,93,0); }
  }
  .pre-sub { font-size: 11px; color: rgba(255,255,255,.55); }
  .pre-sub a { color: rgba(255,255,255,.75); text-decoration: underline; text-underline-offset: 2px; }
  .pre-sub a:hover { color: #fff; }

  /* ══ NAV ══════════════════════════════════════════════════ */
  .nav {
    position: fixed; z-index: 1000;
    inset: var(--bar) 0 auto 0;
    height: var(--nav);
    transition: background .3s, box-shadow .3s;
    font-family: Inter, sans-serif;
  }
  .nav.scrolled {
    background: rgba(0,0,0,.92);
    box-shadow: 0 1px 0 var(--line);
    backdrop-filter: blur(16px);
  }
  .nav-inner {
    width: min(1200px, calc(100% - 40px));
    margin: 0 auto; height: 100%;
    display: flex; align-items: center; justify-content: space-between; gap: 20px;
  }
  .brand { display: flex; flex-direction: column; gap: 3px; line-height: 1; }
  .brand strong {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 21px; font-weight: 700;
    color: #fff; transition: color .3s;
  }
  .nav.scrolled .brand strong { color: #fff; }
  .brand small {
    font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
    color: var(--gold);
  }
  .nav.scrolled .brand small { color: var(--gold); }
  .nav-links { display: none; align-items: center; gap: 28px; }
  .nav-links a {
    font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    color: rgba(255,255,255,.7);
    position: relative; padding-bottom: 2px;
    transition: color .2s;
  }
  .nav-links a::after {
    content: ""; position: absolute; bottom: -2px; left: 0; right: 0;
    height: 1px; background: var(--gold);
    transform: scaleX(0); transform-origin: left;
    transition: transform .25s ease;
  }
  .nav-links a:hover { color: var(--gold); }
  .nav-links a:hover::after { transform: scaleX(1); }
  .nav.scrolled .nav-links a { color: rgba(255,255,255,.72); }
  .nav.scrolled .nav-links a:hover { color: var(--gold); }
  .nav.scrolled .nav-links a::after { background: var(--gold); }
  .nav-cta {
    min-height: 44px; padding: 0 20px;
    display: inline-flex; align-items: center; gap: 8px;
    border: 1px solid rgba(187,167,93,.75); border-radius: 8px;
    background: rgba(0,0,0,.72);
    color: #F4E4A2;
    font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
    box-shadow: 0 0 0 1px rgba(187,167,93,.08) inset, 0 10px 24px rgba(0,0,0,.28);
    overflow: hidden; position: relative;
    transition: background .2s, color .2s, border-color .2s, box-shadow .2s, transform .15s;
  }
  .nav-cta::before {
    content: "";
    position: absolute; top: 0; left: -100%;
    width: 60%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.2), transparent);
    transition: left .5s ease;
    z-index: 0;
  }
  .nav-cta svg,
  .nav-cta {
    position: relative;
  }
  .nav-cta svg {
    z-index: 1;
    color: currentColor;
    fill: currentColor;
  }
  .nav-cta:hover {
    background: #ffffff;
    color: #000000;
    border-color: #000000;
    transform: translateY(-1px);
  }
  .nav-cta:hover::before { opacity: 0; }
  .nav-links a.nav-cta::after {
    display: none;
  }
  .nav-links a.nav-cta:hover {
    background: #ffffff;
    color: #000000;
    border-color: #000000;
  }
  .nav-links a.nav-cta:hover svg {
    color: #000000;
    fill: #000000;
  }
  .menu-btn {
    min-height: 44px; min-width: 44px;
    display: flex; align-items: center; justify-content: center;
    border: none; border-radius: 6px;
    background: rgba(255,255,255,.1); color: #fff;
    transition: background .2s;
  }
  .nav.scrolled .menu-btn { background: rgba(255,255,255,.1); color: #fff; }

  /* ══ MOBILE MENU ══════════════════════════════════════════ */
  .mob-menu {
    position: fixed; z-index: 999;
    inset: calc(var(--bar) + var(--nav)) 0 auto 0;
    background: #050505;
    padding: 12px 20px 20px;
    display: flex; flex-direction: column;
    border-bottom: 1px solid var(--line);
    box-shadow: 0 24px 48px rgba(0,0,0,.45);
    animation: mob-slide-in .22s ease;
  }
  @keyframes mob-slide-in {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: none; }
  }
  .mob-menu a {
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
    font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    color: rgba(255,255,255,.78);
    transition: color .15s, padding-left .15s;
  }
  .mob-menu a:hover { color: var(--gold); padding-left: 6px; }
  .mob-menu a:last-child { border-bottom: none; }

  /* ══ WRAP ═════════════════════════════════════════════════ */
  .wrap { width: min(1200px, calc(100% - 40px)); margin: 0 auto; }

  /* ══ HERO (split) ════════════════════════════════════════ */
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100svh;
    padding-top: calc(var(--bar) + var(--nav));
  }
  .hero-left {
    display: flex; flex-direction: column; justify-content: center;
    padding: 34px 64px 60px max(40px, calc((100vw - 1200px) / 2 + 20px));
    background:
      radial-gradient(ellipse 80% 70% at 15% 18%, rgba(187,167,93,.12) 0%, transparent 58%),
      var(--bg);
  }
  .hero-right {
    position: relative;
    background: #000;
    overflow: hidden;
    min-height: 540px;
  }
  .hero-right-deco {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 80% at 60% 100%, rgba(187,167,93,.18) 0%, transparent 60%),
      radial-gradient(ellipse 80% 40% at 10% 20%, rgba(187,167,93,.12) 0%, transparent 65%);
  }
  /* hero entrance: photo rises on load */
  .hero-photo {
    position: absolute;
    bottom: 0; left: 50%; transform: translateX(-50%) translateY(60px);
    width: auto; height: 92%;
    object-fit: contain; object-position: bottom center;
    filter: drop-shadow(0 0 40px rgba(0,0,0,.5));
    opacity: 0;
    transition: transform 1s cubic-bezier(.22,.9,.36,1), opacity .9s ease;
  }
  .hero-ready .hero-photo {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  .hero-badge {
    position: absolute; bottom: 32px; right: 24px;
    padding: 14px 20px;
    background: rgba(8,4,10,.82);
    border: 1px solid rgba(187,167,93,.35);
    border-radius: 8px;
    backdrop-filter: blur(12px);
    display: flex; flex-direction: column; gap: 3px;
    opacity: 0; transform: translateY(12px);
    transition: opacity .6s ease .9s, transform .6s ease .9s;
  }
  .hero-ready .hero-badge { opacity: 1; transform: none; }
  .hero-badge strong {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 15px; font-weight: 700; color: #fff; line-height: 1.2;
  }
  .hero-badge span { font-size: 11px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; color: var(--gold); }

  /* hero text entrance: elements slide in from left sequentially */
  .hero-kicker {
    display: inline-flex; align-items: center; gap: 10px;
    margin-bottom: 18px;
    font-size: 11px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
    color: var(--gold);
    opacity: 0; transform: translateX(-24px);
    transition: opacity .6s ease .15s, transform .6s ease .15s;
  }
  .hero-kicker::before { content: ""; width: 24px; height: 1px; background: var(--gold); }
  .hero-ready .hero-kicker { opacity: 1; transform: none; }

  .hero h1 {
    margin: 0;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(46px, 5.25vw, 76px);
    font-weight: 700; line-height: .98; letter-spacing: -.01em;
    color: var(--ink);
    opacity: 0; transform: translateX(-24px);
    transition: opacity .65s ease .3s, transform .65s ease .3s;
  }
  .hero h1 em { font-style: italic; color: var(--gold); }
  .hero.hero-ready h1 { opacity: 1; transform: none; }

  .hero-sub {
    margin: 22px 0 0; max-width: 540px;
    font-size: 17px; line-height: 1.75; color: var(--soft);
    opacity: 0; transform: translateX(-24px);
    transition: opacity .65s ease .45s, transform .65s ease .45s;
  }
  .hero-ready .hero-sub { opacity: 1; transform: none; }

  .hero-proof {
    margin-top: 16px; max-width: 540px;
    display: flex; align-items: center; gap: 8px;
    font-size: 13px; font-weight: 700; line-height: 1.5;
    color: var(--gold);
    opacity: 0; transform: translateX(-24px);
    transition: opacity .65s ease .52s, transform .65s ease .52s;
  }
  .hero-proof::before {
    content: "";
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px rgba(187,167,93,.16);
    flex: none;
  }
  .hero-ready .hero-proof { opacity: 1; transform: none; }

  .hero-actions {
    display: flex; flex-wrap: wrap; gap: 12px;
    margin-top: 32px;
    opacity: 0; transform: translateY(16px);
    transition: opacity .6s ease .6s, transform .6s ease .6s;
  }
  .hero-ready .hero-actions { opacity: 1; transform: none; }

  .hero-trust {
    display: flex; gap: 24px; flex-wrap: wrap;
    margin-top: 40px; padding-top: 32px;
    border-top: 1px solid var(--line);
    opacity: 0;
    transition: opacity .6s ease .75s;
  }
  .hero-ready .hero-trust { opacity: 1; }
  .trust-item { display: flex; flex-direction: column; gap: 2px; }
  .trust-item strong { font-size: 13px; font-weight: 800; color: var(--ink); }
  .trust-item span { font-size: 11px; color: var(--muted); }

  /* ══ BUTTONS ══════════════════════════════════════════════ */
  .btn-wine {
    min-height: 52px; padding: 0 28px;
    display: inline-flex; align-items: center; gap: 9px;
    border: none; border-radius: 14px 14px 0 14px;
    background: var(--gold);
    color: #0C0804;
    font-family: Inter, sans-serif;
    font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
    box-shadow: 0 0 0 1px rgba(255,255,255,.18) inset, 0 12px 28px rgba(187,167,93,.35);
    position: relative; overflow: hidden;
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .btn-wine::before {
    content: "";
    position: absolute; top: 0; left: -100%;
    width: 60%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.22), transparent);
    transition: left .5s ease;
  }
  .btn-wine:hover { background: var(--gold-lt); box-shadow: 0 0 0 1px rgba(255,255,255,.22) inset, 0 16px 36px rgba(187,167,93,.45); transform: translateY(-1px); }
  .btn-wine:hover::before { left: 150%; }
  .btn-wine:active { transform: translateY(1px); }

  .btn-outline {
    min-height: 52px; padding: 0 24px;
    display: inline-flex; align-items: center; gap: 8px;
    border: 1.5px solid var(--line); border-radius: 8px;
    background: transparent; color: var(--soft);
    font-family: Inter, sans-serif;
    font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
    transition: border-color .2s, background .2s, transform .15s;
  }
  .btn-outline:hover { border-color: rgba(187,167,93,.42); background: rgba(255,255,255,.06); transform: translateY(-1px); }

  .btn-gold {
    min-height: 56px; padding: 0 32px;
    display: inline-flex; align-items: center; gap: 10px;
    border: none; border-radius: 8px;
    background: var(--gold); color: var(--dark);
    font-family: Inter, sans-serif;
    font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
    box-shadow: 0 12px 32px rgba(187,167,93,.4);
    position: relative; overflow: hidden;
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .btn-gold::before {
    content: "";
    position: absolute; top: 0; left: -100%;
    width: 60%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.25), transparent);
    transition: left .5s ease;
  }
  .btn-gold:hover { background: var(--gold-lt); box-shadow: 0 16px 40px rgba(187,167,93,.5); transform: translateY(-1px); }
  .btn-gold:hover::before { left: 150%; }

  .btn-ghost {
    min-height: 56px; padding: 0 28px;
    display: inline-flex; align-items: center; gap: 8px;
    border: 1.5px solid rgba(255,255,255,.25); border-radius: 8px;
    background: transparent; color: rgba(255,255,255,.85);
    font-family: Inter, sans-serif;
    font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
    transition: border-color .2s, background .2s, transform .15s;
  }
  .btn-ghost:hover { border-color: rgba(255,255,255,.5); background: rgba(255,255,255,.07); transform: translateY(-1px); }

  /* ══ STATS STRIP ══════════════════════════════════════════ */
  .stats-strip { background: #000; padding: 28px 0; }
  .stats-inner {
    width: min(1200px, calc(100% - 40px)); margin: 0 auto;
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: rgba(187,167,93,.28);
    border: 1px solid rgba(187,167,93,.28); border-radius: 8px; overflow: hidden;
  }
  .stat-cell {
    background: #070707; padding: 20px 24px;
    display: flex; flex-direction: column; gap: 4px;
    transition: background .25s;
  }
  .stat-cell:hover { background: rgba(187,167,93,.12); }
  .stat-cell strong {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 28px; font-weight: 700; color: var(--gold); line-height: 1;
  }
  .stat-cell span { font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.7); }

  /* ══ SECTION BASE ═════════════════════════════════════════ */
  .section { padding: 96px 0; }
  .section.bg-white { background: #000; }
  .section.bg-cream { background: var(--cream); }

  .sec-label {
    display: inline-block; margin-bottom: 12px;
    font-size: 11px; font-weight: 800; letter-spacing: .22em; text-transform: uppercase;
    color: var(--gold);
  }

  .sec-h2 {
    margin: 0;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(28px, 3.6vw, 48px); font-weight: 700; line-height: 1.08;
    color: var(--ink);
  }

  .sec-lead {
    margin: 16px 0 0; max-width: 640px;
    font-size: 15px; line-height: 1.85; color: var(--muted);
  }

  /* ══ GOLD ORNAMENTS ══════════════════════════════════════ */
  .gold-divider {
    position: relative;
    height: 96px;
    background:
      linear-gradient(180deg, #000 0%, #030303 50%, #000 100%);
    overflow: hidden;
  }
  .gold-divider::before,
  .gold-divider::after {
    content: "";
    position: absolute;
    pointer-events: none;
  }
  .gold-divider::before {
    left: 0; right: 0; top: 50%;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(187,167,93,.18) 18%, rgba(187,167,93,.72) 50%, rgba(187,167,93,.18) 82%, transparent 100%);
  }
  .gold-divider::after {
    inset: 0;
    background:
      radial-gradient(ellipse 34% 70% at 50% 50%, rgba(187,167,93,.18) 0%, transparent 68%),
      radial-gradient(circle at 28% 52%, rgba(187,167,93,.28) 0 1px, transparent 2px),
      radial-gradient(circle at 72% 48%, rgba(187,167,93,.24) 0 1px, transparent 2px);
    opacity: .85;
  }
  .gold-divider.gold-divider-veins {
    height: 128px;
    background:
      linear-gradient(90deg, rgba(0,0,0,.98), rgba(0,0,0,.88)),
      #000;
  }
  .gold-divider.gold-divider-veins::after {
    inset: -30% -10%;
    background:
      linear-gradient(108deg, transparent 0 31%, rgba(187,167,93,.3) 31.2%, transparent 32.2% 100%),
      linear-gradient(151deg, transparent 0 57%, rgba(187,167,93,.2) 57.2%, transparent 58.4% 100%),
      radial-gradient(circle at 18% 68%, rgba(187,167,93,.22) 0 1px, transparent 2px),
      radial-gradient(circle at 83% 30%, rgba(187,167,93,.2) 0 1px, transparent 2px);
    opacity: .75;
  }
  .section-ornate {
    position: relative;
    overflow: hidden;
  }
  .section-ornate > .wrap {
    position: relative;
    z-index: 1;
  }
  .section-ornate::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(118deg, transparent 0 68%, rgba(187,167,93,.14) 68.2%, transparent 69.1% 100%),
      linear-gradient(24deg, transparent 0 20%, rgba(187,167,93,.1) 20.2%, transparent 21% 100%),
      radial-gradient(ellipse 48% 54% at 92% 8%, rgba(187,167,93,.1) 0%, transparent 66%);
    opacity: .9;
  }
  .section-ornate::after {
    content: "";
    position: absolute;
    width: 220px; height: 220px;
    right: max(24px, calc((100vw - 1200px) / 2));
    top: 54px;
    border: 1px solid rgba(187,167,93,.16);
    border-radius: 50%;
    box-shadow: inset 0 0 40px rgba(187,167,93,.05);
    pointer-events: none;
  }

  /* ══ SERVICOS ═════════════════════════════════════════════ */
  .services-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 20px; margin-top: 48px;
  }
  .svc-card {
    padding: 36px 28px 28px;
    background: rgba(255,255,255,.07);
    backdrop-filter: blur(5px);
    border: 1.5px solid rgba(255,255,255,.18); border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,.24);
    display: flex; flex-direction: column;
    transition: border-color .25s, box-shadow .25s, transform .25s;
  }
  .svc-card:hover {
    border-color: rgba(187,167,93,.42);
    box-shadow: 0 16px 40px rgba(0,0,0,.42);
    transform: translateY(-4px);
  }
  /* GIF icon: scale + glow on card hover */
  .svc-gif {
    width: 64px; height: 64px;
    object-fit: contain; margin-bottom: 20px;
    transition: transform .35s cubic-bezier(.22,.9,.36,1), filter .35s ease;
  }
  .svc-card:hover .svc-gif {
    transform: scale(1.15);
    filter: drop-shadow(0 0 10px rgba(187,167,93,.45));
  }
  .svc-title {
    font-size: 13px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 14px; padding-bottom: 14px;
    border-bottom: 1px solid var(--line);
  }
  .svc-list { display: flex; flex-direction: column; gap: 7px; flex: 1; }
  .svc-item {
    display: flex; align-items: center; gap: 8px;
    font-size: 13.5px; color: var(--soft); line-height: 1.4;
    transition: color .15s;
  }
  .svc-item svg { color: var(--gold); flex: none; transition: transform .2s; }
  .svc-card:hover .svc-item svg { transform: scale(1.1); }
  .svc-link {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 20px; padding: 12px 0 0;
    min-height: 44px;
    border-top: 1px solid var(--line);
    font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
    color: var(--gold); transition: gap .2s, color .15s;
  }
  .svc-link:hover { gap: 10px; color: var(--gold-lt); }

  /* ══ BANNER PARALLAX STRIP ════════════════════════════════ */
  .banner-strip {
    position: relative;
    height: clamp(520px, 36.5vw, 700px);
    overflow: hidden;
    background: #08040A;
  }
  .banner-img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center center;
  }
  .banner-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to right, rgba(8,4,10,.85) 0%, rgba(8,4,10,.55) 55%, rgba(8,4,10,.2) 100%);
    display: flex; align-items: center;
  }
  .banner-text {
    padding-left: max(40px, calc((100vw - 1200px) / 2 + 20px));
    max-width: 620px;
  }
  .banner-quote {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(22px, 3.2vw, 40px); font-style: italic; font-weight: 600;
    color: rgba(255,255,255,.92); line-height: 1.4;
    margin: 0 0 20px;
  }
  /* quote line draws in from left */
  .banner-quote-line {
    width: 0; height: 2px; background: var(--gold);
    margin-bottom: 20px;
    transition: width .8s ease;
  }
  .banner-text.in .banner-quote-line { width: 56px; }
  .banner-source {
    font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
    color: var(--gold);
    opacity: 0; transform: translateY(8px);
    transition: opacity .5s ease .4s, transform .5s ease .4s;
  }
  .banner-text.in .banner-source { opacity: 1; transform: none; }
  .banner-text.in .banner-quote {
    animation: quote-reveal .7s ease forwards;
  }
  @keyframes quote-reveal {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: none; }
  }

  /* ══ SOBRE ════════════════════════════════════════════════ */
  .sobre-grid {
    display: grid; grid-template-columns: 0.85fr 1fr;
    gap: 0; border-radius: 16px; overflow: hidden;
    box-shadow: 0 24px 64px rgba(0,0,0,.42);
  }
  .sobre-photo-col {
    position: relative; background: #050505;
    min-height: 540px; overflow: hidden;
  }
  .sobre-photo {
    position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
    height: 100%; width: auto;
    object-fit: contain; object-position: bottom;
    filter: drop-shadow(0 -8px 24px rgba(0,0,0,.2));
    transition: transform .5s ease;
  }
  .sobre-photo-col:hover .sobre-photo { transform: translateX(-50%) scale(1.03); }
  .sobre-text-col {
    padding: 64px 56px;
    background: #070707;
    display: flex; flex-direction: column; justify-content: center;
  }
  .sobre-name {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 32px; font-weight: 700; color: var(--ink);
    margin: 0 0 4px;
  }
  .sobre-role {
    display: block; margin-bottom: 28px;
    font-size: 11px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase;
    color: var(--gold);
  }
  .sobre-text-col p { margin: 0 0 16px; font-size: 15px; line-height: 1.9; color: var(--muted); }
  .sobre-text-col p:last-of-type { margin-bottom: 0; }
  .sobre-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
  .sobre-tag {
    padding: 6px 14px; border-radius: 20px;
    border: 1.5px solid var(--line);
    font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    color: var(--soft);
    transition: border-color .2s, background .2s, color .2s, transform .2s;
  }
  .sobre-tag:hover { border-color: var(--gold); background: rgba(187,167,93,.08); color: var(--gold); transform: translateY(-2px); }

  /* ══ DEPOIMENTOS (infinite scroll carousel) ══════════════ */
  .dep-track-wrap {
    overflow: hidden; margin-top: 48px;
    -webkit-mask: linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%);
    mask: linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%);
  }
  .dep-track {
    display: flex; gap: 20px;
    width: max-content;
    animation: infiniteSlide 15s linear infinite;
  }
  .dep-track:hover { animation-play-state: paused; }
  @keyframes infiniteSlide {
    from { transform: translateX(0%); }
    to   { transform: translateX(-50%); }
  }
  .dep-card {
    flex: none; width: clamp(220px, 28vw, 320px);
    border-radius: 16px; overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,.35);
    transition: transform .3s cubic-bezier(.22,.9,.36,1), box-shadow .3s ease;
  }
  .dep-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 16px 40px rgba(0,0,0,.5);
  }
  .dep-card img { width: 100%; height: auto; display: block; }

  /* ══ COMO FUNCIONA (timeline) ═════════════════════════════ */
  .steps-wrap { margin-top: 56px; position: relative; }

  /* animated line that draws left-to-right when in viewport */
  .steps-line-track {
    position: absolute;
    top: 36px; left: calc(100% / 6); right: calc(100% / 6);
    height: 1px; background: rgba(26,10,14,.1);
    overflow: hidden;
  }
  .steps-line-fill {
    position: absolute; inset: 0;
    background: linear-gradient(to right, var(--gold-dk), var(--gold));
    transform: scaleX(0); transform-origin: left;
    transition: transform 1.2s cubic-bezier(.4,0,.2,1);
  }
  .steps-line-fill.drawn { transform: scaleX(1); }

  .steps-timeline {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }
  .step-col {
    display: flex; flex-direction: column; align-items: center;
    text-align: center; padding: 0 28px;
  }
  .step-circle {
    width: 72px; height: 72px; border-radius: 50%;
    background: linear-gradient(180deg, var(--gold-dk) 0%, var(--gold) 100%);
    display: flex; align-items: center; justify-content: center;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 28px; font-weight: 700; color: #000;
    flex: none; position: relative; z-index: 1;
    box-shadow: 0 8px 24px rgba(187,167,93,.28);
    margin-bottom: 24px;
    transition: transform .3s cubic-bezier(.22,.9,.36,1), box-shadow .3s ease;
  }
  .step-col:hover .step-circle {
    transform: scale(1.1);
    box-shadow: 0 12px 32px rgba(187,167,93,.38);
  }
  .step-title {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 22px; font-weight: 700; color: var(--ink);
    margin-bottom: 12px;
  }
  .step-text { font-size: 14px; line-height: 1.8; color: var(--muted); }

  /* ══ CTA FINAL ════════════════════════════════════════════ */
  .cta-final {
    padding: 96px 0;
    background: #000;
    position: relative; overflow: hidden;
  }
  .cta-final::before {
    content: "";
    position: absolute; inset: 0;
    background:
      linear-gradient(112deg, transparent 0 18%, rgba(187,167,93,.12) 18.2%, transparent 19.2% 100%),
      linear-gradient(158deg, transparent 0 69%, rgba(187,167,93,.18) 69.2%, transparent 70.2% 100%),
      radial-gradient(ellipse 70% 60% at 50% 80%, rgba(187,167,93,.18) 0%, transparent 65%);
  }
  /* subtle floating particles */
  .cta-final::after {
    content: "";
    position: absolute; inset: 0;
    background-image:
      radial-gradient(circle 1px at 20% 30%, rgba(187,167,93,.4) 0%, transparent 100%),
      radial-gradient(circle 1px at 80% 20%, rgba(187,167,93,.3) 0%, transparent 100%),
      radial-gradient(circle 1px at 60% 70%, rgba(187,167,93,.35) 0%, transparent 100%),
      radial-gradient(circle 1px at 35% 80%, rgba(187,167,93,.25) 0%, transparent 100%);
    background-size: 400px 400px;
    animation: float-particles 8s linear infinite;
  }
  @keyframes float-particles {
    0%  { transform: translateY(0); }
    100%{ transform: translateY(-40px); }
  }
  .cta-content {
    position: relative; z-index: 1;
    max-width: 700px; margin: 0 auto; text-align: center;
  }
  .cta-content .sec-label { color: var(--gold); }
  .cta-content .sec-h2 { color: #fff; }
  .cta-content .sec-lead { color: rgba(255,255,255,.68); margin: 16px auto 0; }
  .cta-actions {
    display: flex; flex-wrap: wrap; gap: 14px; justify-content: center;
    margin-top: 36px;
  }

  /* ══ FOOTER ══════════════════════════════════════════════ */
  .footer {
    background: var(--dark);
    color: rgba(255,255,255,.48);
    font-family: Inter, sans-serif; font-size: 13px; line-height: 1.7;
    border-top: 1px solid rgba(187,167,93,.28);
  }
  .footer-body {
    padding: 64px 0 48px;
    display: grid; grid-template-columns: 1.5fr 1fr 1fr;
    gap: 52px;
  }
  .footer-brand strong {
    display: block;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 26px; font-weight: 700; color: #fff; margin-bottom: 8px;
  }
  .footer-brand p { margin: 0 0 20px; max-width: 280px; }
  .footer-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .footer-tag {
    padding: 4px 10px; border-radius: 4px;
    border: 1px solid rgba(255,255,255,.15);
    font-size: 11px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase;
    color: rgba(255,255,255,.55);
    transition: border-color .2s, color .2s;
  }
  .footer-tag:hover { border-color: var(--gold); color: var(--gold); }
  .footer-col h4 {
    margin: 0 0 16px;
    font-size: 11px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: #fff;
  }
  .footer-col a {
    display: flex; align-items: center; gap: 8px;
    color: rgba(255,255,255,.6); padding: 5px 0; font-size: 13px;
    transition: color .15s, gap .15s;
  }
  .footer-col a:hover { color: var(--gold); gap: 12px; }
  .footer-col a svg { flex: none; }
  .footer-line { border: none; border-top: 1px solid rgba(255,255,255,.07); margin: 0; }
  .footer-bottom {
    padding: 18px 0;
    display: flex; flex-wrap: wrap; gap: 10px;
    align-items: center; justify-content: space-between;
    font-size: 12px; color: rgba(255,255,255,.52);
  }
  .footer-bottom a { color: var(--gold); font-weight: 700; transition: color .15s; }
  .footer-bottom a:hover { color: #fff; }

  /* ══ WHATSAPP FLOAT ═══════════════════════════════════════ */
  .wa-float {
    position: fixed; z-index: 1002;
    right: max(20px, env(safe-area-inset-right));
    bottom: max(20px, env(safe-area-inset-bottom));
    width: 58px; height: 58px; border-radius: 50%;
    background: var(--wa);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 20px rgba(37,211,102,.4);
    transform: scale(0) translateY(20px); opacity: 0;
    transition: transform .3s ease, box-shadow .2s;
    animation: wa-entrance .5s cubic-bezier(.22,.9,.36,1) 1.2s forwards,
               wa-pulse 2s ease-out 2s infinite;
  }
  .wa-float:hover { transform: scale(1.07) !important; }
  @keyframes wa-entrance {
    to { transform: scale(1) translateY(0); opacity: 1; }
  }
  @keyframes wa-pulse {
    0%  { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,.4); }
    70% { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 16px rgba(37,211,102,0); }
    100%{ box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,0); }
  }

  /* ══ FOCUS VISIBLE (teclado / WCAG 2.4.7) ════════════════ */
  a:focus-visible,
  button:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 3px;
    border-radius: 4px;
  }
  .wa-float:focus-visible { outline-color: #fff; }

  /* ══ SCROLL REVEAL VARIANTS ═══════════════════════════════ */
  [data-anim] {
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(.22,.9,.36,1);
    transition-duration: .65s;
  }
  [data-anim="up"]    { opacity: 0; transform: translateY(24px); }
  [data-anim="left"]  { opacity: 0; transform: translateX(-32px); }
  [data-anim="right"] { opacity: 0; transform: translateX(32px); }
  [data-anim="scale"] { opacity: 0; transform: scale(.94); }
  [data-anim="fade"]  { opacity: 0; }
  [data-anim].anim-in { opacity: 1; transform: none; }
  [data-delay="1"] { transition-delay: .1s; }
  [data-delay="2"] { transition-delay: .2s; }
  [data-delay="3"] { transition-delay: .3s; }
  [data-delay="4"] { transition-delay: .4s; }
  [data-delay="5"] { transition-delay: .5s; }
  [data-delay="6"] { transition-delay: .6s; }

  /* ══ RESPONSIVE ═══════════════════════════════════════════ */
  @media (min-width: 768px) { .nav-links { display: flex; } .menu-btn { display: none; } }

  @media (max-width: 1024px) {
    .services-grid { grid-template-columns: repeat(2, 1fr); }
    .dep-card { width: clamp(200px, 42vw, 280px); }
    .stats-inner { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 900px) {
    .sobre-grid { grid-template-columns: 1fr; }
    .sobre-photo-col { min-height: 320px; }
    .sobre-photo { height: 110%; }
    .sobre-text-col { padding: 40px 32px; }
    .footer-body { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 767px) {
    :root { --nav: 60px; }
    .wrap, .nav-inner { width: min(100% - 36px, 1200px); }

    /* foto acima, texto abaixo */
    .hero {
      grid-template-columns: 1fr;
      grid-template-areas: "photo" "text";
      min-height: auto;
    }
    .hero-left {
      grid-area: text;
      padding: 36px 20px 44px;
    }
    .hero-right {
      grid-area: photo;
      display: block;
      min-height: 260px;
      max-height: 340px;
      height: 58vw;
      background:
        radial-gradient(ellipse 80% 60% at 50% 100%, rgba(187,167,93,.22), transparent 68%),
        #000;
    }
    .hero-photo {
      height: 100%;
      width: auto;
      max-width: none;
      bottom: 0;
      left: 50%;
      object-fit: contain;
      object-position: bottom center;
    }
    .hero-badge {
      right: 12px;
      bottom: 12px;
      max-width: calc(100% - 24px);
      padding: 9px 12px;
    }
    .hero-badge strong { font-size: 13px; }
    .hero-badge span { font-size: 10px; }
    .hero h1 { font-size: clamp(32px, 9vw, 48px); }
    .hero-sub { font-size: 15px; }
    .hero-actions a { width: 100%; justify-content: center; }
    .services-grid { grid-template-columns: 1fr; }
    .steps-timeline { grid-template-columns: 1fr; }
    .steps-timeline .step-col { padding: 0 16px 32px; }
    .steps-line-track { display: none; }
    .footer-body { grid-template-columns: 1fr; gap: 28px; padding: 44px 0 32px; }
    .dep-card { width: clamp(200px, 42vw, 280px); }
    .stats-inner { grid-template-columns: repeat(2, 1fr); }
    .banner-strip { height: 420px; }
    .section { padding: 64px 0; }
    .sobre-text-col { padding: 32px 24px; }
  }

  /* ══ PREFERS REDUCED MOTION (WCAG 2.3.3) ══════════════════ */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    html { scroll-behavior: auto; }
    .dep-track { animation: none; }
    .hero-photo,
    .hero-badge,
    .hero-kicker,
    .hero h1,
    .hero-sub,
    .hero-proof,
    .hero-actions,
    .hero-trust {
      opacity: 1;
      transform: none;
      transition: none;
    }
    [data-anim] { opacity: 1; transform: none; transition: none; }
  }
`;

/* ─── COMPONENT ───────────────────────────────────────────── */
export default function CharleneDamascenoPropPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const bannerTextRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  /* nav scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* hero entrance — trigger after first paint */
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* close mobile menu on resize */
  useEffect(() => {
    if (!menuOpen) return;
    const fn = () => setMenuOpen(false);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [menuOpen]);

  /* general scroll reveal (data-anim) */
  useEffect(() => {
    const els = document.querySelectorAll("[data-anim]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("anim-in");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* banner text reveal */
  useEffect(() => {
    const el = bannerTextRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* timeline line draw */
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("drawn");
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* PREVIEW BAR */}
      <div className="pre-bar" aria-label="Aviso de proposta">
        <div className="pre-line">
          <span className="pre-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="pre-sub">
          Proposta elaborada pela{" "}
          <a
            href="https://lumasites.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            LumaSites.com.br
          </a>
        </span>
      </div>

      {/* NAV */}
      <nav
        className={`nav${scrolled ? " scrolled" : ""}`}
        aria-label="Navegação"
      >
        <div className="nav-inner">
          <a className="brand" href="#top">
            <strong>Charlene Damasceno</strong>
            <small>Advogada Previdenciária</small>
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href={WA} target="_blank" rel="noreferrer">
              <WaIcon size={14} /> Falar Agora
            </a>
          </div>
          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mob-menu" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      )}

      <main className="cd">
        {/* ── HERO ── */}
        <section
          id="top"
          className={`hero${heroReady ? " hero-ready" : ""}`}
          aria-label="Hero"
        >
          <div className="hero-left">
            <span className="hero-kicker">
              Direito Previdenciário · INSS e Benefícios
            </span>
            <h1>
              Seu benefício no INSS com quem{" "}
              <em>conhece o caminho.</em>
            </h1>
            <p className="hero-sub">
              Teve benefício negado ou não sabe por onde começar? Receba
              orientação previdenciária com clareza, estratégia e uma
              especialista ao seu lado.
            </p>
            <div className="hero-proof">
              Atendimento online e presencial para aposentadorias, BPC/LOAS,
              auxílio-doença e revisões.
            </div>
            <div className="hero-actions">
              <a
                className="btn-wine"
                href={WA}
                target="_blank"
                rel="noreferrer"
              >
                <WaIcon size={17} /> Quero Meu Benefício Agora
              </a>
              <a className="btn-outline" href="#servicos">
                Ver Serviços <ChevronRight size={15} />
              </a>
            </div>
            <div className="hero-trust">
              {[
                { v: "INSS", l: "Especialista" },
                { v: "Online", l: "+ Presencial" },
                { v: "BPC/LOAS", l: "Aposentadoria" },
                { v: "Rápido", l: "Sem burocracia" },
              ].map((t) => (
                <div className="trust-item" key={t.l}>
                  <strong>{t.v}</strong>
                  <span>{t.l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-right" aria-hidden="true">
            <div className="hero-right-deco" />
            <img
              className="hero-photo"
              src={IMG.hero}
              alt="Dra. Charlene Damasceno"
            />
            <div className="hero-badge">
              <strong>Dra. Charlene Damasceno</strong>
              <span>Especialista em Dir. Previdenciário</span>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <div className="stats-strip" aria-label="Credenciais">
          <div className="stats-inner">
            {[
              { v: "Especialista", l: "Dir. Previdenciário" },
              { v: "Online", l: "+ Presencial" },
              { v: "6 Áreas", l: "de Atuação" },
              { v: "INSS", l: "BPC · Aposentadoria" },
            ].map((s) => (
              <div className="stat-cell" key={s.l}>
                <strong>{s.v}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider" aria-hidden="true" />

        {/* ── SERVICOS ── */}
        <section
          id="servicos"
          className="section bg-white section-ornate"
          aria-label="Serviços"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Áreas de Atuação</span>
              <h2 className="sec-h2">
                Cobertura completa em
                <br />
                Direito Previdenciário.
              </h2>
              <p className="sec-lead">
                Do primeiro pedido ao recurso judicial, atuamos em todas as
                frentes para que você conquiste o benefício que é seu por
                direito.
              </p>
            </div>
            <div className="services-grid">
              {services.map((svc, i) => (
                <article
                  className="svc-card"
                  data-anim="up"
                  data-delay={String((i % 3) + 1)}
                  key={svc.title}
                >
                  <img
                    className="svc-gif"
                    src={svc.gif}
                    alt={svc.title}
                    aria-hidden="true"
                  />
                  <div className="svc-title">{svc.title}</div>
                  <div className="svc-list">
                    {svc.items.map((item) => (
                      <div className="svc-item" key={item}>
                        <CheckCircle2 size={13} /> {item}
                      </div>
                    ))}
                  </div>
                  <a
                    className="svc-link"
                    href={WA}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WaIcon size={13} /> Consultar este caso
                    <ChevronRight size={13} style={{ marginLeft: "auto" }} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider gold-divider-veins" aria-hidden="true" />

        {/* ── BANNER PARALLAX ── */}
        <div className="banner-strip" aria-hidden="true">
          <img className="banner-img" src={IMG.banner} alt="" />
          <div className="banner-overlay">
            <div ref={bannerTextRef} className="banner-text">
              <div className="banner-quote-line" />
              <blockquote className="banner-quote">
                &ldquo;O indeferimento administrativo
                <br />
                não encerra o direito.&rdquo;
              </blockquote>
              <span className="banner-source">
                Dra. Charlene Damasceno · Advogada Previdenciária
              </span>
            </div>
          </div>
        </div>

        <div className="gold-divider" aria-hidden="true" />

        {/* ── SOBRE ── */}
        <section
          id="sobre"
          className="section bg-white"
          aria-label="Sobre a advogada"
        >
          <div className="wrap">
            <div className="sobre-grid">
              <div
                className="sobre-photo-col"
                data-anim="left"
                aria-hidden="true"
              >
                <img
                  className="sobre-photo"
                  src={IMG.sobre}
                  alt="Dra. Charlene Damasceno"
                />
              </div>
              <div className="sobre-text-col" data-anim="right">
                <span className="sec-label">Sobre</span>
                <h2 className="sobre-name">Dra. Charlene Damasceno</h2>
                <span className="sobre-role">
                  Advogada · Especialista Previdenciária
                </span>
                <p>
                  Sou advogada especialista em Direito Previdenciário, com
                  atuação dedicada a ajudar trabalhadores e famílias a
                  conquistar seus direitos junto ao INSS. Ao longo da minha
                  trajetória, aprendi que o maior obstáculo não é o direito em
                  si, mas a burocracia e a desinformação que impedem as pessoas
                  de acessá-lo.
                </p>
                <p>
                  Seja para aposentadorias, revisões de benefício, auxílio por
                  incapacidade ou BPC/LOAS, meu compromisso é claro: atender com
                  acolhimento, explicar com clareza e lutar com técnica pelo que
                  é seu por direito. Presencialmente ou online, estou aqui para
                  simplificar o que parece complicado.
                </p>
                <div className="sobre-tags">
                  {[
                    "Aposentadorias",
                    "BPC/LOAS",
                    "Auxílio-doença",
                    "Revisão INSS",
                    "Pensão por Morte",
                    "Recursos INSS",
                  ].map((t) => (
                    <span className="sobre-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gold-divider gold-divider-veins" aria-hidden="true" />

        {/* ── DEPOIMENTOS ── */}
        <section
          id="depoimentos"
          className="section bg-cream"
          aria-label="Depoimentos"
        >
          <div className="wrap">
            <div data-anim="up" style={{ textAlign: "center" }}>
              <span className="sec-label">Depoimentos</span>
              <h2 className="sec-h2">O que dizem os clientes.</h2>
              <p className="sec-lead" style={{ margin: "16px auto 0" }}>
                Resultados reais de pessoas que conquistaram seus direitos com
                dedicação e técnica.
              </p>
            </div>
            <div
              className="dep-track-wrap"
              aria-label="Carrossel de depoimentos"
            >
              <div className="dep-track">
                {/* original set */}
                {[
                  { src: IMG.dep1, alt: "Depoimento cliente Luzivania" },
                  { src: IMG.dep2, alt: "Depoimento cliente" },
                  { src: IMG.dep3, alt: "Depoimento cliente Adriele" },
                  { src: IMG.dep4, alt: "Depoimento cliente" },
                ].map((d) => (
                  <div className="dep-card" key={`testimonial-${d.src}`}>
                    <img src={d.src} alt={d.alt} loading="lazy" />
                  </div>
                ))}
                {/* duplicate for seamless loop */}
                {[
                  { src: IMG.dep1, alt: "Depoimento cliente Luzivania dup" },
                  { src: IMG.dep2, alt: "Depoimento cliente dup" },
                  { src: IMG.dep3, alt: "Depoimento cliente Adriele dup" },
                  { src: IMG.dep4, alt: "Depoimento cliente dup2" },
                ].map((d) => (
                  <div
                    className="dep-card"
                    key={`testimonial-loop-${d.src}`}
                    aria-hidden="true"
                  >
                    <img src={d.src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="gold-divider" aria-hidden="true" />

        {/* ── COMO FUNCIONA ── */}
        <section
          id="como-funciona"
          className="section bg-white section-ornate"
          aria-label="Como funciona"
        >
          <div className="wrap">
            <div data-anim="up" style={{ textAlign: "center" }}>
              <span className="sec-label">Processo</span>
              <h2 className="sec-h2">
                Do contato à conquista
                <br />
                em três etapas.
              </h2>
              <p className="sec-lead" style={{ margin: "16px auto 0" }}>
                Simples, transparente e sem complicação.
              </p>
            </div>
            <div className="steps-wrap">
              <div className="steps-line-track">
                <div ref={lineRef} className="steps-line-fill" />
              </div>
              <div className="steps-timeline">
                {steps.map((s, i) => (
                  <div
                    className="step-col"
                    data-anim="up"
                    data-delay={String(i + 1)}
                    key={s.n}
                  >
                    <div className="step-circle">{s.n}</div>
                    <div className="step-title">{s.title}</div>
                    <p className="step-text">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="gold-divider gold-divider-veins" aria-hidden="true" />

        {/* ── CTA FINAL ── */}
        <section id="contato" className="cta-final" aria-label="Contato">
          <div className="wrap">
            <div className="cta-content" data-anim="up">
              <span className="sec-label">Fale Agora</span>
              <h2 className="sec-h2">
                Seu benefício
                <br />
                não pode esperar.
              </h2>
              <p className="sec-lead">
                Negativa do INSS, aposentadoria pendente, auxílio negado ou BPC
                sem resposta: entre em contato agora. Analisamos seu caso com a
                atenção que ele merece.
              </p>
              <div className="cta-actions">
                <a
                  className="btn-gold"
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WaIcon size={18} color="#0E0608" /> Quero Meu Benefício Agora
                </a>
                <a
                  className="btn-ghost"
                  href={IG}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={16} /> @charlene.damasceno
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <div className="wrap">
            <div className="footer-body">
              <div className="footer-brand">
                <strong>Charlene Damasceno</strong>
                <p>
                  Advogada especialista em Direito Previdenciário. INSS,
                  aposentadorias e benefícios. Atendimento presencial e online.
                </p>
                <div className="footer-tags">
                  {[
                    "INSS",
                    "Aposentadoria",
                    "BPC/LOAS",
                    "Auxílio-doença",
                    "Previdência",
                  ].map((t) => (
                    <span className="footer-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="footer-col">
                <h4>Navegação</h4>
                <a href="#servicos">Serviços</a>
                <a href="#sobre">Sobre</a>
                <a href="#depoimentos">Depoimentos</a>
                <a href="#como-funciona">Como funciona</a>
                <a href={WA} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
              <div className="footer-col">
                <h4>Contato</h4>
                <a href={WA} target="_blank" rel="noreferrer">
                  <WaIcon size={14} /> WhatsApp
                </a>
                <a href={IG} target="_blank" rel="noreferrer">
                  <Instagram size={14} /> @charlene.damasceno
                </a>
                <a
                  href="https://charlenedamasceno.com.br/contato/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={14} /> Site atual
                </a>
              </div>
            </div>
            <hr className="footer-line" />
            <div className="footer-bottom">
              <span>
                © 2026 Charlene Damasceno Advogada. Todos os direitos
                reservados.
              </span>
              <span>
                Site por{" "}
                <a
                  href="https://lumasites.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  LumaSites
                </a>
              </span>
            </div>
          </div>
        </footer>
      </main>

      {/* WHATSAPP FLOAT */}
      <a
        className="wa-float"
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Dra. Charlene Damasceno pelo WhatsApp"
      >
        <WaIcon size={28} color="white" />
      </a>
    </>
  );
}
