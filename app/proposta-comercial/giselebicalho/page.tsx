"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ChevronRight,
  Instagram,
  Menu,
  X,
  Plus,
  Minus,
} from "lucide-react";

/* ─── CONSTANTES ──────────────────────────────────────────── */
const WA = `https://wa.me/5537999986764?text=${encodeURIComponent(
  "Olá, Gisele! Gostaria de saber mais sobre a psicoterapia online.",
)}`;
const IG = "https://www.instagram.com/psigiselebicalho/";

const IMG = {
  profile: "/images/giselebicalho/gisele-hero-ai.png",
  postCover: "/images/giselebicalho/gisele-about-ai.png",
  card05: "/images/giselebicalho/post-cover-05.webp",
  slide10: "/images/giselebicalho/carousel-slide-10.webp",
  slide11: "/images/giselebicalho/carousel-slide-11.webp",
  slide12: "/images/giselebicalho/carousel-slide-12.webp",
  slide13: "/images/giselebicalho/carousel-slide-13.webp",
  slide14: "/images/giselebicalho/carousel-slide-14.webp",
};

// Todos os slides são do mesmo carrossel — href único é correto
const instagramCards = [
  {
    src: IMG.card05,
    label:
      "Capa do conteúdo: maturidade emocional também é saber reconhecer quando algo te ultrapassa",
  },
  { src: IMG.slide10, label: "Conteúdo sobre reconhecer limites emocionais" },
  { src: IMG.slide11, label: "Conteúdo sobre acolher emoções difíceis" },
  { src: IMG.slide12, label: "Conteúdo sobre pedir ajuda quando necessário" },
  {
    src: IMG.slide13,
    label: "Conteúdo sobre desenvolver maturidade emocional",
  },
  {
    src: IMG.slide14,
    label: "Encerramento do conteúdo sobre maturidade emocional",
  },
].map((card) => ({
  ...card,
  href: "https://www.instagram.com/p/DY4r_Sijkzo/",
}));

/* ─── DADOS ──────────────────────────────────────────────── */
const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#terapia", label: "Terapia" },
  { href: "#dores", label: "Demandas" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];

const dores = [
  {
    tema: "Ansiedade",
    itens: [
      "Preocupações persistentes",
      "Crises de ansiedade",
      "Tensão constante sem causa aparente",
    ],
  },
  {
    tema: "Vínculos",
    itens: [
      "Dificuldade de estabelecer limites",
      "Medo de rejeição",
      "Relacionamentos desgastantes",
    ],
  },
  {
    tema: "Autogestão emocional",
    itens: [
      "Sobrecarga e esgotamento",
      "Autocobrança excessiva",
      "Autocrítica e insegurança",
    ],
  },
  {
    tema: "Maturidade emocional",
    itens: [
      "Silenciamento de sentimentos",
      "Dificuldade de tomar decisões",
      "Mudanças de vida paralisantes",
    ],
  },
  {
    tema: "Comunicação",
    itens: [
      "Dificuldade de expressar sentimentos",
      "Comunicação passivo-agressiva",
      "Ressentimento acumulado",
    ],
  },
  {
    tema: "Identidade",
    itens: ["Baixa autoestima", "Autoconhecimento", "Desenvolvimento pessoal"],
  },
];

const steps = [
  {
    n: "01",
    title: "Primeiro contato",
    text: "Uma conversa pelo WhatsApp para tirar dúvidas e receber as orientações iniciais.",
  },
  {
    n: "02",
    title: "Sessão inicial",
    text: "Conversamos sobre o que você está vivendo. Sem pressa, sem julgamento. Você é ouvido com atenção desde o primeiro encontro.",
  },
  {
    n: "03",
    title: "Processo terapêutico",
    text: "Com a TCC, observamos padrões e construímos caminhos possíveis para os desafios que fazem parte da sua rotina.",
  },
];

const faqs = [
  {
    q: "A psicoterapia online funciona da mesma forma que o presencial?",
    a: "A psicoterapia online é uma modalidade reconhecida e permite realizar o acompanhamento com privacidade e comodidade. A adequação ao seu caso pode ser conversada no primeiro contato.",
  },
  {
    q: "O que é a Terapia Cognitivo-Comportamental (TCC)?",
    a: "A TCC é uma abordagem baseada em evidências científicas que ajuda a compreender a relação entre pensamentos, emoções e comportamentos. A partir dessa leitura, trabalhamos possibilidades mais saudáveis para lidar com desafios emocionais e relacionais.",
  },
  {
    q: "Como sei se preciso de psicoterapia?",
    a: "Se você sente que lida sozinho com preocupações que não passam, que está sobrecarregado, que tem dificuldade nos relacionamentos ou que se perdeu de si mesmo, a psicoterapia pode ajudar. Não é preciso estar em crise — muitas pessoas começam a terapia em busca de autoconhecimento e desenvolvimento pessoal.",
  },
  {
    q: "Qual a duração e a frequência das sessões?",
    a: "A duração e a frequência das sessões são alinhadas de acordo com o acompanhamento. Entre em contato para receber as orientações iniciais.",
  },
  {
    q: "As sessões são sigilosas?",
    a: "Sim. O sigilo é um dever ético fundamental da psicologia e será preservado conforme o Código de Ética Profissional do Psicólogo, observados os limites previstos para a atuação profissional.",
  },
  {
    q: "Como faço para agendar uma sessão?",
    a: "Clique em um dos botões desta página para conversar pelo WhatsApp e receber as orientações iniciais.",
  },
];

/* ─── SVG WhatsApp ───────────────────────────────────────── */
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
  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; cursor: pointer; border: none; background: none; padding: 0; }

  :root {
    --bar:        52px;
    --nav:        68px;
    /* paleta */
    --cream:      #FAF7F3;
    --fog:        #F2E4E1;
    --brown:      #60463F;
    --rose:       #B97976;
    --rose-dk:    #8A4A47; /* contraste >= 4.5:1 em fundos claros (WCAG AA) */
    --rose-cta:   #8A4A47; /* botão CTA: contraste 6.66:1 c/ branco - WCAG AA */
    --rose-lt:    #CE9B98;
    --ink:        #2D2422;
    --muted:      #756864;
    --line:       rgba(45,36,34,.10);
    --line-lt:    rgba(45,36,34,.06);
    --wa:         #25D366;
  }

  /* ── FIX 1: scroll-margin para seções âncora não ficarem atrás da nav fixa ── */
  section[id] {
    scroll-margin-top: calc(var(--bar) + var(--nav) + 16px);
  }
  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
  }
  .skip-link {
    position: fixed; z-index: 1100; top: 8px; left: 8px;
    padding: 10px 14px; border-radius: 6px;
    background: #fff; color: var(--ink); font-size: 14px; font-weight: 700;
    transform: translateY(-160%); transition: transform .15s;
  }
  .skip-link:focus { transform: translateY(0); }

  .gb {
    overflow-x: clip;
    font-family: var(--gb-body), 'DM Sans', system-ui, sans-serif;
    background: var(--cream);
    color: var(--ink);
  }

  /* ══ PREVIEW BAR ══════════════════════════════════════════ */
  .pre-bar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1001;
    min-height: var(--bar);
    padding: 7px 20px;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
    background: var(--ink); text-align: center;
  }
  .pre-back {
    position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
    min-width: 36px; min-height: 36px; padding: 0 10px;
    display: inline-flex; align-items: center; gap: 6px;
    border-radius: 6px; color: rgba(255,255,255,.72);
    font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    transition: color .15s, background .15s;
  }
  .pre-back:hover { color: #fff; background: rgba(255,255,255,.08); }
  .pre-line {
    display: flex; align-items: center; gap: 8px;
    color: #fff; font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase;
  }
  .pre-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--rose); flex: none;
    animation: dot-pulse 1.8s ease-out infinite;
  }
  @keyframes dot-pulse {
    0%  { box-shadow: 0 0 0 0 rgba(185,121,118,.9); }
    70% { box-shadow: 0 0 0 9px rgba(185,121,118,0); }
    100%{ box-shadow: 0 0 0 0 rgba(185,121,118,0); }
  }
  .pre-sub { font-size: 11px; color: rgba(255,255,255,.5); font-family: var(--gb-body), 'DM Sans', sans-serif; }
  .pre-sub a { color: rgba(255,255,255,.72); text-decoration: underline; text-underline-offset: 2px; }
  .pre-sub a:hover { color: #fff; }

  /* ══ NAV ══════════════════════════════════════════════════ */
  .nav {
    position: fixed; z-index: 1000;
    inset: var(--bar) 0 auto 0;
    height: var(--nav);
    transition: background .3s, box-shadow .3s;
  }
  .nav.scrolled {
    background: rgba(250,247,243,.95);
    box-shadow: 0 1px 0 var(--line);
    backdrop-filter: blur(16px);
  }
  .nav-inner {
    width: min(1200px, calc(100% - 40px));
    margin: 0 auto; height: 100%;
    display: flex; align-items: center; justify-content: space-between; gap: 20px;
  }
  .brand { display: flex; flex-direction: column; gap: 2px; line-height: 1; }
  .brand strong {
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 20px; font-weight: 600; color: var(--ink);
  }
  /* FIX 4: --rose-dk para texto pequeno em fundo claro (contraste AA) */
  .brand small {
    font-size: 10px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
    color: var(--rose-dk);
  }
  .nav-links { display: none; align-items: center; gap: 28px; }
  .nav-links a {
    font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
    color: var(--muted);
    position: relative; padding: 8px 0;
    transition: color .2s;
  }
  .nav-links a::after {
    content: ""; position: absolute; bottom: -2px; left: 0; right: 0;
    height: 1px; background: var(--rose);
    transform: scaleX(0); transform-origin: left;
    transition: transform .25s ease;
  }
  .nav-links a:hover { color: var(--brown); }
  .nav-links a:hover::after { transform: scaleX(1); }
  /* CTA isolado dos estilos dos links simples da navegação */
  .nav-links .nav-cta-btn {
    min-height: 42px; padding: 0 20px;
    display: inline-flex; align-items: center; gap: 7px;
    border-radius: 8px;
    background: var(--rose-cta); color: #fff;
    font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    box-shadow: 0 4px 16px rgba(138,74,71,.28);
    border: 1.5px solid rgba(255,255,255,.12);
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .nav-links .nav-cta-btn::after { display: none; }
  .nav-links .nav-cta-btn:hover {
    background: var(--brown);
    color: #fff;
    box-shadow: 0 6px 20px rgba(96,70,63,.32);
    transform: translateY(-1px);
  }
  .menu-btn {
    min-height: 44px; min-width: 44px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 8px;
    background: var(--fog); color: var(--ink);
    transition: background .2s;
  }
  .menu-btn:hover { background: #e8d8d5; }

  /* ══ MOBILE MENU ══════════════════════════════════════════ */
  .mob-menu {
    position: fixed; z-index: 999;
    inset: calc(var(--bar) + var(--nav)) 0 auto 0;
    background: var(--cream);
    padding: 12px 20px 20px;
    display: flex; flex-direction: column;
    border-bottom: 1px solid var(--line);
    box-shadow: 0 24px 48px rgba(0,0,0,.08);
    animation: mob-slide-in .2s ease;
  }
  @keyframes mob-slide-in {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: none; }
  }
  .mob-menu a {
    padding: 14px 0;
    border-bottom: 1px solid var(--line-lt);
    font-size: 13px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase;
    color: var(--muted);
    transition: color .15s, padding-left .15s;
  }
  .mob-menu a:hover { color: var(--brown); padding-left: 6px; }
  .mob-menu a:last-child { border-bottom: none; color: var(--brown); font-weight: 700; }

  /* ══ WRAP ═════════════════════════════════════════════════ */
  .wrap { width: min(1200px, calc(100% - 40px)); margin: 0 auto; }

  /* ══ HERO ════════════════════════════════════════════════ */
  .hero {
    display: grid;
    grid-template-columns: 1fr 0.9fr;
    min-height: 100svh;
    padding-top: calc(var(--bar) + var(--nav));
    background: var(--cream);
  }
  .hero-left {
    display: flex; flex-direction: column; justify-content: center;
    padding: 48px 64px 72px max(40px, calc((100vw - 1200px) / 2 + 20px));
  }
  .hero-right {
    position: relative;
    background: var(--fog);
    overflow: hidden;
    min-height: 540px;
  }
  .hero-right::before {
    content: "";
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 70% 70% at 50% 100%, rgba(185,121,118,.18) 0%, transparent 65%);
    pointer-events: none;
  }
  .hero-photo {
    position: absolute;
    bottom: 88px; left: 50%; transform: translateX(-50%) translateY(40px);
    width: min(58%, 320px); height: auto; aspect-ratio: 1;
    object-fit: cover; object-position: center top;
    border: 8px solid rgba(250,247,243,.82);
    border-radius: 50%;
    box-shadow: 0 20px 56px rgba(96,70,63,.2);
    opacity: 0;
    transition: transform 1s cubic-bezier(.22,.9,.36,1), opacity .8s ease;
  }
  .hero-ready .hero-photo {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  .hero-badge {
    position: absolute; bottom: 28px; right: 24px;
    padding: 14px 20px;
    background: rgba(250,247,243,.9);
    border: 1px solid var(--line);
    border-radius: 10px;
    backdrop-filter: blur(12px);
    display: flex; flex-direction: column; gap: 3px;
    opacity: 0; transform: translateY(12px);
    transition: opacity .6s ease .8s, transform .6s ease .8s;
    box-shadow: 0 8px 32px rgba(0,0,0,.08);
  }
  .hero-ready .hero-badge { opacity: 1; transform: none; }
  .hero-badge strong {
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 15px; font-weight: 600; color: var(--ink); line-height: 1.2;
  }
  /* FIX 4: rose-dk para texto 10px em fundo claro */
  .hero-badge span { font-size: 10px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--rose-dk); }

  /* FIX 4: rose-dk para kicker 11px em fundo claro */
  .hero-kicker {
    display: inline-flex; align-items: center; gap: 10px;
    margin-bottom: 20px;
    font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--rose-dk);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .6s ease .15s, transform .6s ease .15s;
  }
  .hero-kicker::before { content: ""; width: 20px; height: 1px; background: var(--rose); }
  .hero-ready .hero-kicker { opacity: 1; transform: none; }

  .hero h1 {
    margin: 0;
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(42px, 4.8vw, 70px);
    font-weight: 600; line-height: 1.02; letter-spacing: -.01em;
    color: var(--ink);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .65s ease .28s, transform .65s ease .28s;
  }
  .hero h1 em { font-style: italic; color: var(--rose); }
  .hero.hero-ready h1 { opacity: 1; transform: none; }

  .hero-sub {
    margin: 22px 0 0; max-width: 520px;
    font-size: 17px; line-height: 1.78; color: var(--muted);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .65s ease .42s, transform .65s ease .42s;
  }
  .hero-ready .hero-sub { opacity: 1; transform: none; }

  .hero-actions {
    display: flex; flex-wrap: wrap; gap: 12px;
    margin-top: 36px;
    opacity: 0; transform: translateY(14px);
    transition: opacity .6s ease .58s, transform .6s ease .58s;
  }
  .hero-ready .hero-actions { opacity: 1; transform: none; }

  .hero-trust {
    display: flex; gap: 20px; flex-wrap: wrap;
    margin-top: 40px; padding-top: 32px;
    border-top: 1px solid var(--line);
    opacity: 0;
    transition: opacity .6s ease .72s;
  }
  .hero-ready .hero-trust { opacity: 1; }
  .trust-item { display: flex; flex-direction: column; gap: 2px; }
  .trust-item strong { font-size: 12px; font-weight: 700; color: var(--ink); letter-spacing: .04em; }
  .trust-item span { font-size: 11px; color: var(--muted); }

  /* ══ BUTTONS ══════════════════════════════════════════════ */
  .btn-primary {
    min-height: 52px; padding: 0 28px;
    display: inline-flex; align-items: center; gap: 10px;
    border-radius: 10px;
    background: var(--brown); color: #fff;
    font-family: var(--gb-body), 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 600; letter-spacing: .04em;
    box-shadow: 0 8px 24px rgba(96,70,63,.25);
    position: relative; overflow: hidden;
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .btn-primary:hover { background: var(--ink); box-shadow: 0 12px 32px rgba(96,70,63,.32); transform: translateY(-1px); }
  .btn-primary:active { transform: translateY(1px); }

  .btn-outline {
    min-height: 52px; padding: 0 24px;
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 10px;
    border: 1.5px solid var(--line); background: transparent;
    color: var(--brown);
    font-family: var(--gb-body), 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 600; letter-spacing: .04em;
    transition: border-color .2s, background .2s, transform .15s;
  }
  .btn-outline:hover { border-color: var(--rose); background: var(--fog); transform: translateY(-1px); }

  .btn-rose {
    min-height: 56px; padding: 0 32px;
    display: inline-flex; align-items: center; gap: 10px;
    border-radius: 10px;
    background: var(--rose-cta); color: #fff;
    font-family: var(--gb-body), 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 600;
    box-shadow: 0 10px 28px rgba(185,121,118,.32);
    position: relative; overflow: hidden;
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .btn-rose:hover { background: var(--brown); box-shadow: 0 14px 36px rgba(96,70,63,.32); transform: translateY(-1px); }

  .btn-ghost {
    min-height: 56px; padding: 0 28px;
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 10px;
    border: 1.5px solid rgba(250,247,243,.35); background: transparent;
    color: rgba(250,247,243,.85);
    font-family: var(--gb-body), 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 600;
    transition: border-color .2s, background .2s, transform .15s;
  }
  .btn-ghost:hover { border-color: rgba(250,247,243,.6); background: rgba(250,247,243,.08); transform: translateY(-1px); }

  /* ══ STRIP DE CREDENCIAIS ════════════════════════════════ */
  .creds-strip { background: var(--fog); padding: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .creds-inner {
    width: min(1200px, calc(100% - 40px)); margin: 0 auto;
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: var(--line);
    padding: 0; list-style: none;
  }
  .cred-cell {
    background: var(--fog); padding: 22px 24px;
    display: flex; flex-direction: column; gap: 3px;
    transition: background .2s;
  }
  .cred-cell:hover { background: #eedbd8; }
  .cred-cell strong {
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 18px; font-weight: 600; color: var(--brown); line-height: 1;
  }
  .cred-cell span { font-size: 11px; font-weight: 500; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); }

  /* ══ SECTION BASE ═════════════════════════════════════════ */
  .section { padding: 96px 0; }
  .section.bg-cream { background: var(--cream); }
  .section.bg-fog   { background: var(--fog); }
  .section.bg-dark  { background: var(--ink); }

  /* FIX 4: rose-dk para labels de 10px em fundos claros */
  .sec-label {
    display: inline-block; margin-bottom: 12px;
    font-size: 10px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
    color: var(--rose-dk);
  }
  /* Fundo escuro: rose original é adequado */
  .cta-content .sec-label { color: var(--rose-lt); }

  .sec-h2 {
    margin: 0;
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(30px, 3.8vw, 50px); font-weight: 600; line-height: 1.08;
    color: var(--ink);
  }
  .sec-lead {
    margin: 16px 0 0; max-width: 640px;
    font-size: 16px; line-height: 1.85; color: var(--muted);
  }

  /* FIX 16: tamanho do h2 da seção Instagram via CSS, não inline */
  .ig-strip .sec-h2 { font-size: clamp(22px, 2.8vw, 36px); }

  /* ══ SECAO IDENTIFICACAO ════════════════════════════════ */
  .ident-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 48px; margin-top: 56px; align-items: start;
  }
  .ident-quote {
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(22px, 2.8vw, 36px); font-style: italic; font-weight: 500;
    color: var(--ink); line-height: 1.45; margin: 0;
    border-left: 3px solid var(--rose); padding-left: 28px;
  }
  .ident-list { display: flex; flex-direction: column; gap: 14px; margin: 0; padding: 0; list-style: none; }
  .ident-item {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 16px 20px;
    background: #fff; border-radius: 10px;
    border: 1px solid var(--line-lt);
    box-shadow: 0 2px 8px rgba(0,0,0,.04);
    font-size: 15px; line-height: 1.55; color: var(--muted);
    transition: border-color .2s, box-shadow .2s;
  }
  .ident-item:hover { border-color: var(--rose); box-shadow: 0 4px 16px rgba(185,121,118,.1); }
  .ident-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--rose); flex: none; margin-top: 6px;
  }

  /* ══ SOBRE ════════════════════════════════════════════════ */
  .sobre-grid {
    display: grid; grid-template-columns: 0.85fr 1fr;
    gap: 0; border-radius: 16px; overflow: hidden;
    box-shadow: 0 20px 56px rgba(0,0,0,.08);
    margin-top: 56px;
  }
  .sobre-photo-col {
    position: relative; background: var(--fog);
    min-height: 500px; overflow: hidden;
  }
  .sobre-photo {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center top;
    transition: transform .5s ease;
  }
  .sobre-photo-col:hover .sobre-photo { transform: scale(1.03); }
  .sobre-text-col {
    padding: 60px 52px;
    background: #fff;
    display: flex; flex-direction: column; justify-content: center;
  }
  /* FIX 2: sobre-name agora é h3 — estilo preservado */
  .sobre-name {
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 34px; font-weight: 600; color: var(--ink);
    margin: 0 0 4px;
  }
  /* FIX 4: rose-dk para texto 10px em fundo claro */
  .sobre-role {
    display: block; margin-bottom: 8px;
    font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
    color: var(--rose-dk);
  }
  .sobre-crp {
    display: block; margin-bottom: 28px;
    font-size: 12px; font-weight: 500; color: var(--muted);
  }
  .sobre-text-col p { margin: 0 0 16px; font-size: 15px; line-height: 1.9; color: var(--muted); }
  .sobre-text-col p:last-of-type { margin-bottom: 0; }
  .sobre-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
  .sobre-tag {
    padding: 6px 14px; border-radius: 20px;
    border: 1.5px solid var(--line);
    font-size: 11px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase;
    color: var(--muted);
    transition: border-color .2s, background .2s, color .2s, transform .2s;
  }
  .sobre-tag:hover { border-color: var(--rose); background: var(--fog); color: var(--brown); transform: translateY(-2px); }

  /* ══ TCC ════════════════════════════════════════════════ */
  .tcc-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 56px; align-items: center; margin-top: 56px;
  }
  .tcc-text p { margin: 0 0 18px; font-size: 15px; line-height: 1.9; color: var(--muted); }
  .tcc-pillars { display: flex; flex-direction: column; gap: 16px; }
  .tcc-pillar {
    padding: 20px 24px;
    background: var(--cream); border-radius: 12px;
    border: 1px solid var(--line-lt);
    transition: border-color .2s, box-shadow .2s;
  }
  .tcc-pillar:hover { border-color: var(--rose); box-shadow: 0 4px 18px rgba(185,121,118,.1); }
  .tcc-pillar-title {
    font-size: 13px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase;
    color: var(--brown); margin-bottom: 8px;
  }
  .tcc-pillar p { margin: 0; font-size: 14px; line-height: 1.7; color: var(--muted); }

  /* ══ DORES ════════════════════════════════════════════════ */
  /* FIX 6: lista semântica — reset de ul/li */
  .dores-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 20px; margin-top: 48px;
    list-style: none; padding: 0; margin-left: 0; margin-right: 0;
  }
  .dore-card {
    padding: 28px 24px;
    background: #fff; border-radius: 12px;
    border: 1px solid var(--line-lt);
    box-shadow: 0 2px 8px rgba(0,0,0,.04);
    transition: border-color .25s, box-shadow .25s, transform .25s;
  }
  .dore-card:hover {
    border-color: var(--rose);
    box-shadow: 0 12px 32px rgba(185,121,118,.12);
    transform: translateY(-3px);
  }
  /* FIX 3 + FIX 4: h3 semântico com rose-dk para 12px bold */
  .dore-tema {
    font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    color: var(--rose-dk); margin: 0 0 14px; padding-bottom: 12px;
    border-bottom: 1px solid var(--line-lt);
    font-family: var(--gb-body), 'DM Sans', sans-serif;
  }
  .dore-list { display: flex; flex-direction: column; gap: 8px; }
  .dore-item {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 13.5px; color: var(--muted); line-height: 1.45;
  }
  .dore-item::before {
    content: ""; width: 5px; height: 5px; border-radius: 50%;
    background: var(--rose-lt); flex: none; margin-top: 7px;
  }

  /* ══ BANNER QUOTE ════════════════════════════════════════ */
  /* FIX 11: agora é <section> no JSX */
  .quote-banner {
    padding: 80px 0;
    background: var(--brown);
    position: relative; overflow: hidden;
  }
  .quote-banner::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 80% at 15% 50%, rgba(185,121,118,.22) 0%, transparent 60%),
      radial-gradient(ellipse 40% 60% at 85% 50%, rgba(250,247,243,.08) 0%, transparent 55%);
    pointer-events: none;
  }
  .quote-inner {
    position: relative; z-index: 1;
    max-width: 800px; margin: 0 auto; text-align: center;
  }
  .quote-text {
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(22px, 3vw, 38px); font-style: italic; font-weight: 500;
    color: rgba(250,247,243,.94); line-height: 1.48;
    margin: 0 0 24px;
  }
  .quote-line {
    width: 48px; height: 1px; background: var(--rose-lt);
    margin: 0 auto 20px;
  }
  /* rose-lt sobre brown escuro tem contraste adequado */
  .quote-author {
    font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
    color: var(--rose-lt);
  }

  /* ══ INSTAGRAM STRIP ═════════════════════════════════════ */
  .ig-strip { padding: 72px 0; background: var(--cream); }
  .ig-header {
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 16px; margin-bottom: 32px;
  }
  .ig-grid {
    display: grid; grid-template-columns: repeat(6, 1fr);
    gap: 8px;
  }
  .ig-card {
    aspect-ratio: 1/1; overflow: hidden; border-radius: 8px;
    background: var(--fog);
    transition: transform .3s ease, box-shadow .3s ease;
  }
  .ig-card:hover { transform: scale(1.04); box-shadow: 0 8px 24px rgba(0,0,0,.12); }
  .ig-card img { width: 100%; height: 100%; object-fit: cover; }
  .ig-handle {
    display: flex; align-items: center; gap: 8px;
    font-size: 13px; font-weight: 600; color: var(--brown);
    text-decoration: none;
    transition: color .2s;
  }
  .ig-handle:hover { color: var(--rose); }
  .ig-meta { font-size: 12px; color: var(--muted); }

  /* ══ PROCESSO ════════════════════════════════════════════ */
  .steps-wrap { margin-top: 56px; position: relative; }
  .steps-line-track {
    position: absolute;
    top: 36px; left: calc(100% / 6); right: calc(100% / 6);
    height: 1px; background: var(--line);
    overflow: hidden;
  }
  .steps-line-fill {
    position: absolute; inset: 0;
    background: linear-gradient(to right, var(--rose), var(--brown));
    transform: scaleX(0); transform-origin: left;
    transition: transform 1.2s cubic-bezier(.4,0,.2,1);
  }
  .steps-line-fill.drawn { transform: scaleX(1); }
  .steps-timeline {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 0; margin: 0; padding: 0; list-style: none;
  }
  .step-col {
    display: flex; flex-direction: column; align-items: center;
    text-align: center; padding: 0 28px;
  }
  .step-circle {
    width: 68px; height: 68px; border-radius: 50%;
    background: var(--rose);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 26px; font-weight: 600; color: #fff;
    flex: none; position: relative; z-index: 1;
    box-shadow: 0 6px 20px rgba(185,121,118,.28);
    margin-bottom: 24px;
    transition: transform .3s ease, box-shadow .3s ease;
  }
  .step-col:hover .step-circle {
    transform: scale(1.1);
    box-shadow: 0 10px 28px rgba(185,121,118,.38);
  }
  /* FIX 3: h3 semântico — estilo preservado */
  .step-title {
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 22px; font-weight: 600; color: var(--ink);
    margin: 0 0 12px;
  }
  .step-text { font-size: 14px; line-height: 1.8; color: var(--muted); }

  /* ══ FAQ ════════════════════════════════════════════════ */
  .faq-list { margin-top: 48px; display: flex; flex-direction: column; gap: 8px; max-width: 800px; }
  .faq-item {
    background: #fff; border-radius: 10px;
    border: 1px solid var(--line-lt);
    overflow: hidden;
    transition: border-color .2s, box-shadow .2s;
  }
  .faq-item.open { border-color: var(--rose); box-shadow: 0 4px 18px rgba(185,121,118,.1); }
  .faq-btn {
    width: 100%; padding: 20px 22px;
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
    text-align: left;
    font-size: 15px; font-weight: 600; color: var(--ink);
    transition: color .2s;
  }
  .faq-item.open .faq-btn { color: var(--brown); }
  .faq-icon { flex: none; color: var(--rose); }
  /* FIX 14: grid-template-rows elimina necessidade de max-height fixo */
  .faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows .35s ease;
  }
  .faq-item.open .faq-answer { grid-template-rows: 1fr; }
  .faq-answer-inner { overflow: hidden; }
  .faq-answer p { margin: 0; padding: 0 22px 20px; font-size: 14px; line-height: 1.85; color: var(--muted); }

  /* ══ CTA FINAL ════════════════════════════════════════════ */
  .cta-final {
    padding: 96px 0;
    background: var(--ink);
    position: relative; overflow: hidden;
  }
  .cta-final::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 20% 50%, rgba(185,121,118,.12) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 80% 30%, rgba(185,121,118,.08) 0%, transparent 60%);
    pointer-events: none;
  }
  .cta-content {
    position: relative; z-index: 1;
    max-width: 680px; margin: 0 auto; text-align: center;
  }
  .cta-content .sec-h2 { color: #fff; }
  .cta-content .sec-lead { color: rgba(250,247,243,.62); margin: 16px auto 0; }
  .cta-actions {
    display: flex; flex-wrap: wrap; gap: 14px; justify-content: center;
    margin-top: 36px;
  }

  /* ══ FOOTER ══════════════════════════════════════════════ */
  .footer {
    background: var(--ink); color: rgba(250,247,243,.5);
    font-size: 13px; line-height: 1.7;
    border-top: 1px solid rgba(250,247,243,.08);
  }
  .footer-body {
    padding: 64px 0 48px;
    display: grid; grid-template-columns: 1.6fr 1fr 1fr;
    gap: 52px;
  }
  .footer-brand strong {
    display: block;
    font-family: var(--gb-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 26px; font-weight: 600; color: #fff; margin-bottom: 6px;
  }
  /* Rosa claro para textos pequenos sobre fundo escuro */
  .footer-brand small {
    display: block; margin-bottom: 4px;
    font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
    color: var(--rose-lt);
  }
  .footer-brand .footer-crp {
    display: block; margin-bottom: 16px;
    font-size: 12px; color: rgba(250,247,243,.5);
  }
  .footer-brand p { margin: 0 0 20px; max-width: 280px; font-size: 13px; }
  .footer-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .footer-tag {
    padding: 4px 10px; border-radius: 4px;
    border: 1px solid rgba(250,247,243,.12);
    font-size: 11px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
    color: rgba(250,247,243,.5);
    transition: border-color .2s, color .2s;
  }
  .footer-tag:hover { border-color: var(--rose); color: var(--rose-lt); }
  .footer-col h4 {
    margin: 0 0 16px;
    font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: #fff;
  }
  .footer-col a {
    display: flex; align-items: center; gap: 8px;
    color: rgba(250,247,243,.55); padding: 5px 0; font-size: 13px;
    transition: color .15s, gap .15s;
  }
  .footer-col a:hover { color: var(--rose-lt); gap: 12px; }
  .footer-col a svg { flex: none; }
  .footer-line { border: none; border-top: 1px solid rgba(250,247,243,.06); margin: 0; }
  /* FIX 10: contraste mínimo do rodapé elevado de .38 para .55 */
  .footer-bottom {
    padding: 18px 0;
    display: flex; flex-wrap: wrap; gap: 10px;
    align-items: center; justify-content: space-between;
    font-size: 12px; color: rgba(250,247,243,.55);
  }
  .footer-bottom a { color: var(--rose-lt); font-weight: 600; transition: color .15s; }
  .footer-bottom a:hover { color: #fff; }

  /* ══ WHATSAPP FLOAT ═══════════════════════════════════════ */
  .wa-float {
    position: fixed; z-index: 1002;
    right: max(20px, env(safe-area-inset-right));
    bottom: max(20px, env(safe-area-inset-bottom));
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--wa);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 20px rgba(37,211,102,.38);
    transform: scale(0) translateY(20px); opacity: 0;
    transition: transform .3s ease, box-shadow .2s;
    animation: wa-entrance .5s cubic-bezier(.22,.9,.36,1) 1.2s forwards,
               wa-pulse 2.2s ease-out 2s infinite;
  }
  .wa-float:hover { transform: scale(1.08) !important; }
  @keyframes wa-entrance {
    to { transform: scale(1) translateY(0); opacity: 1; }
  }
  @keyframes wa-pulse {
    0%  { box-shadow: 0 4px 20px rgba(37,211,102,.38), 0 0 0 0 rgba(37,211,102,.38); }
    70% { box-shadow: 0 4px 20px rgba(37,211,102,.38), 0 0 0 14px rgba(37,211,102,0); }
    100%{ box-shadow: 0 4px 20px rgba(37,211,102,.38), 0 0 0 0 rgba(37,211,102,0); }
  }

  /* ══ FOCUS VISIBLE ════════════════════════════════════════ */
  a:focus-visible, button:focus-visible {
    outline: none; border-radius: 4px;
    box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--rose-cta);
  }

  /* ══ SCROLL REVEAL ════════════════════════════════════════ */
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
  @media (min-width: 1025px) {
    .nav-links { display: flex; }
    .menu-btn { display: none; }
  }

  @media (max-width: 1024px) {
    .dores-grid { grid-template-columns: repeat(2, 1fr); }
    .ig-grid { grid-template-columns: repeat(4, 1fr); }
    .creds-inner { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .sobre-grid { grid-template-columns: 1fr; }
    .sobre-photo-col { min-height: 280px; }
    .sobre-photo { position: relative; height: 280px; }
    .sobre-text-col { padding: 36px 28px; }
    .tcc-grid { grid-template-columns: 1fr; gap: 32px; }
    .ident-grid { grid-template-columns: 1fr; gap: 32px; }
    .footer-body { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 767px) {
    :root { --nav: 60px; }
    .wrap, .nav-inner { width: min(100% - 32px, 1200px); }
    .hero {
      grid-template-columns: 1fr;
      grid-template-areas: "photo" "text";
      min-height: auto;
    }
    .hero-left {
      grid-area: text;
      padding: 40px 20px 52px;
    }
    /* container mais alto: foto no topo + badge na base sem sobreposição */
    .hero-right {
      grid-area: photo;
      height: 72vw;
      min-height: 280px;
      max-height: 340px;
    }
    /* foto ancorada no topo, centralizada — libera ~85px na base para o badge */
    .hero-photo {
      bottom: auto;
      top: 20px;
      left: 50%;
      transform: translateX(-50%) translateY(32px);
      width: min(44vw, 172px);
      height: auto;
      aspect-ratio: 1;
    }
    .hero-ready .hero-photo {
      transform: translateX(-50%) translateY(0);
    }
    /* badge esticado na base do container, abaixo da foto */
    .hero-badge {
      display: flex;
      left: 16px;
      right: 16px;
      bottom: 12px;
      justify-content: center;
      text-align: center;
      border-radius: 8px;
      transform: none;
      opacity: 0;
      transition: opacity .6s ease .9s;
    }
    .hero-ready .hero-badge {
      opacity: 1;
      transform: none;
    }
    .hero h1 { font-size: clamp(34px, 9vw, 46px); }
    .hero-sub { font-size: 15px; }
    .hero-actions a { width: 100%; justify-content: center; }
    .dores-grid { grid-template-columns: 1fr; }
    .ig-grid { grid-template-columns: repeat(3, 1fr); }
    .steps-timeline { grid-template-columns: 1fr; }
    .steps-timeline .step-col { padding: 0 16px 32px; }
    .steps-line-track { display: none; }
    .footer-body { grid-template-columns: 1fr; gap: 28px; padding: 44px 0 32px; }
    .section { padding: 64px 0; }
    .creds-inner { grid-template-columns: repeat(2, 1fr); }
    .pre-back { left: 6px; padding: 0 8px; }
    .pre-back span { display: none; }
  }

  /* ══ REDUCED MOTION ═══════════════════════════════════════ */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    html { scroll-behavior: auto; }
    .hero-photo, .hero-badge, .hero-kicker, .hero h1,
    .hero-sub, .hero-actions, .hero-trust { opacity: 1; transform: none; transition: none; }
    [data-anim] { opacity: 1; transform: none; transition: none; }
  }
`;

/* ─── COMPONENT ───────────────────────────────────────────── */
export default function GiseleBicalhoPropPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /* nav scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* hero entrance */
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* fechar menu no resize */
  useEffect(() => {
    if (!menuOpen) return;
    const fn = () => setMenuOpen(false);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [menuOpen]);

  /* FIX 7: fechar menu mobile com Escape + devolver foco ao botão */
  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [menuOpen]);

  /* scroll reveal */
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
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      {/* PREVIEW BAR */}
      <div className="pre-bar" role="note" aria-label="Aviso de proposta">
        <a
          className="pre-back"
          href="/proposta-comercial/"
          aria-label="Voltar para propostas comerciais"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </a>
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
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </span>
      </div>

      {/* NAV */}
      <nav
        className={`nav${scrolled ? " scrolled" : ""}`}
        aria-label="Navegação principal"
      >
        <div className="nav-inner">
          <a className="brand" href="#top">
            <strong>Gisele Bicalho</strong>
            <small>Psicóloga Clínica · CRP 04/31637</small>
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            {/* FIX 15: WaIcon adicionado ao botão da nav */}
            <a
              className="nav-cta-btn"
              href={WA}
              target="_blank"
              rel="noreferrer"
            >
              <WaIcon size={13} /> Agendar sessão
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
          <button
            className="menu-btn"
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mob-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* FIX 7: id para aria-controls + role navigation */}
      {menuOpen && (
        <nav id="mob-menu" className="mob-menu" aria-label="Menu mobile">
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
            Agendar sessão <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </nav>
      )}

      <main id="conteudo" className="gb">
        {/* ── HERO ── FIX 12: aria-label descritivo */}
        <section
          id="top"
          className={`hero${heroReady ? " hero-ready" : ""}`}
          aria-label="Gisele Bicalho — Psicóloga Clínica"
        >
          <div className="hero-left">
            <span className="hero-kicker">Psicoterapia Online · TCC</span>
            <h1>
              Para quem funciona por fora
              <br />e se esgota <em>por dentro.</em>
            </h1>
            <p className="hero-sub">
              Psicoterapia online para adultos que desejam compreender o que
              sentem, cuidar dos vínculos e construir uma relação mais saudável
              consigo.
            </p>
            <div className="hero-actions">
              <a
                className="btn-primary"
                href={WA}
                target="_blank"
                rel="noreferrer"
              >
                <WaIcon size={16} /> Agendar psicoterapia online
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
              <a className="btn-outline" href="#sobre">
                Conhecer a Gisele <ChevronRight size={15} />
              </a>
            </div>
            <div className="hero-trust">
              {[
                { v: "TCC", l: "Baseada em evidências" },
                { v: "100% Online", l: "De qualquer lugar" },
                { v: "CRP 04/31637", l: "Registro profissional" },
                { v: "Nova Serrana", l: "MG" },
              ].map((t) => (
                <div className="trust-item" key={t.l}>
                  <strong>{t.v}</strong>
                  <span>{t.l}</span>
                </div>
              ))}
            </div>
          </div>
          {/* aria-hidden: foto decorativa — informação coberta pelo texto e hero-badge */}
          <div className="hero-right" aria-hidden="true">
            <Image
              className="hero-photo"
              src={IMG.profile}
              alt=""
              role="presentation"
              width={1024}
              height={1536}
              sizes="(max-width: 767px) 48vw, 38vw"
              priority
            />
            <div className="hero-badge">
              <strong>Gisele Bicalho</strong>
              <span>Psicóloga Clínica · CRP 04/31637</span>
            </div>
          </div>
        </section>

        {/* ── STRIP DE CREDENCIAIS ── */}
        <section className="creds-strip" aria-label="Credenciais">
          <ul className="creds-inner">
            {[
              { v: "TCC", l: "Abordagem clínica" },
              { v: "Online", l: "Psicoterapia remota" },
              { v: "Instagram", l: "Conteúdo educativo" },
              { v: "Autoral", l: "Reflexões sobre saúde emocional" },
            ].map((c) => (
              <li className="cred-cell" key={c.l}>
                <strong>{c.v}</strong>
                <span>{c.l}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── IDENTIFICAÇÃO ── */}
        <section
          className="section bg-cream"
          aria-label="Identificação emocional"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Você se reconhece?</span>
              <h2 className="sec-h2">
                Ansiedade, vínculos
                <br />e maturidade emocional.
              </h2>
            </div>
            <div className="ident-grid" data-anim="up" data-delay="1">
              {/* FIX 9: <p> sem aspas — não é citação direta, é copy autoral */}
              <p className="ident-quote">
                Nem sempre o cansaço vem apenas da rotina. Ele também pode
                revelar o peso de silenciar sentimentos, ultrapassar limites e
                tentar corresponder a tudo.
              </p>
              <ul className="ident-list">
                {[
                  "Mesmo quando tudo parece sob controle, você termina os dias emocionalmente exausto.",
                  "Engole o que sente para manter a paz ao redor.",
                  "Tem dificuldade de colocar limites sem sentir culpa.",
                  "Sente ansiedade mesmo sem uma razão aparente.",
                  "Carrega expectativas e frustrações que não consegue elaborar.",
                  "Se perdeu um pouco de si mesmo tentando corresponder a tudo.",
                ].map((item) => (
                  <li className="ident-item" key={item}>
                    <span className="ident-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section
          id="sobre"
          className="section bg-fog"
          aria-label="Sobre Gisele Bicalho"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Sobre</span>
              <h2 className="sec-h2">Gisele Bicalho</h2>
            </div>
            <div className="sobre-grid">
              {/* FIX 8: removido aria-hidden do container; alt="" pois o texto já descreve */}
              <div className="sobre-photo-col" data-anim="left">
                <Image
                  className="sobre-photo"
                  src={IMG.postCover}
                  alt=""
                  role="presentation"
                  fill
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>
              <div className="sobre-text-col" data-anim="right">
                {/* FIX 2: h3 para evitar h2 duplicado na mesma página */}
                <h3 className="sobre-name">Gisele Bicalho</h3>
                <span className="sobre-role">Psicóloga Clínica</span>
                <span className="sobre-crp">
                  CRP 04/31637 · Nova Serrana, MG
                </span>
                <p>
                  Muitas pessoas passam anos tentando lidar sozinhas com
                  preocupações, inseguranças, conflitos internos e
                  relacionamentos desgastantes. Aos poucos, esse esforço pode se
                  transformar em ansiedade, exaustão e dificuldade de encontrar
                  equilíbrio.
                </p>
                <p>
                  Meu trabalho é oferecer um espaço seguro, acolhedor e baseado
                  em evidências científicas para que você compreenda seus
                  pensamentos, emoções e comportamentos e encontre formas mais
                  saudáveis de lidar com o que está vivendo.
                </p>
                <p>
                  Quando aprendemos a equilibrar emoção e razão, abrimos espaço
                  para escolhas mais alinhadas aos nossos valores, necessidades
                  e objetivos.
                </p>
                <div className="sobre-tags">
                  {[
                    "Ansiedade",
                    "Vínculos",
                    "Limites",
                    "Autoestima",
                    "Maturidade emocional",
                    "TCC",
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

        {/* ── TCC ── */}
        <section
          id="terapia"
          className="section bg-cream"
          aria-label="Sobre a TCC"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Abordagem</span>
              <h2 className="sec-h2">
                Terapia Cognitivo-
                <br />
                Comportamental (TCC)
              </h2>
            </div>
            <div className="tcc-grid">
              <div className="tcc-text" data-anim="left">
                <p>
                  A TCC é uma abordagem psicológica amplamente reconhecida e
                  baseada em evidências científicas. Ela parte do entendimento
                  de que nossos pensamentos, emoções e comportamentos estão
                  interligados — e que compreender essa relação é o ponto de
                  partida para ampliar possibilidades.
                </p>
                <p>
                  Não é uma terapia de conselhos nem de respostas prontas. É um
                  processo colaborativo em que você aprende a identificar
                  padrões e experimentar estratégias práticas para lidar melhor
                  com situações do cotidiano.
                </p>
                <p>
                  A abordagem pode contribuir para trabalhar ansiedade,
                  dificuldades relacionais, autoestima e desenvolvimento pessoal
                  de forma estruturada e atenta à realidade de cada pessoa.
                </p>
              </div>
              <div className="tcc-pillars" data-anim="right">
                {[
                  {
                    title: "Autoconhecimento",
                    desc: "Compreender como seus pensamentos influenciam emoções e comportamentos.",
                  },
                  {
                    title: "Regulação emocional",
                    desc: "Desenvolver recursos para lidar com ansiedade, sobrecarga e conflitos internos.",
                  },
                  {
                    title: "Mudanças práticas",
                    desc: "Construir padrões mais saudáveis nos relacionamentos, limites e comunicação.",
                  },
                  {
                    title: "Continuidade",
                    desc: "Levar os aprendizados para o cotidiano, respeitando seu ritmo.",
                  },
                ].map((p, i) => (
                  <div
                    className="tcc-pillar"
                    key={p.title}
                    data-anim="up"
                    data-delay={String(i + 1)}
                  >
                    <div className="tcc-pillar-title">{p.title}</div>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOTE BANNER ── FIX 11: section com aria-label */}
        <section className="quote-banner" aria-label="Mensagem">
          <div className="wrap">
            <div className="quote-inner" data-anim="up">
              <div className="quote-line" aria-hidden="true" />
              <p className="quote-text">
                Você não precisa continuar engolindo o que sente para manter a
                paz ao redor.
              </p>
              <span className="quote-author">Um convite ao cuidado</span>
            </div>
          </div>
        </section>

        {/* ── DORES ── FIX 6: ul/li semântico com h3 */}
        <section
          id="dores"
          className="section bg-cream"
          aria-label="Demandas atendidas"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Demandas atendidas</span>
              <h2 className="sec-h2">
                Questões que podem encontrar espaço na terapia.
              </h2>
              <p className="sec-lead">
                Você não precisa esperar uma crise para buscar cuidado. A
                psicoterapia também pode ser um espaço de clareza,
                autoconhecimento e desenvolvimento pessoal.
              </p>
            </div>
            <ul className="dores-grid">
              {dores.map((d, i) => (
                <li
                  className="dore-card"
                  data-anim="up"
                  data-delay={String((i % 3) + 1)}
                  key={d.tema}
                >
                  <h3 className="dore-tema">{d.tema}</h3>
                  <div className="dore-list">
                    {d.itens.map((item) => (
                      <div className="dore-item" key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── INSTAGRAM ── FIX 16: font-size via CSS, não inline */}
        <section className="ig-strip" aria-label="Conteúdos no Instagram">
          <div className="wrap">
            <div className="ig-header" data-anim="up">
              <div>
                <span className="sec-label">Instagram</span>
                <h2 className="sec-h2">Reflexões para além da sessão.</h2>
              </div>
              <a
                className="ig-handle"
                href={IG}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={18} />
                <div>
                  <div>@psigiselebicalho</div>
                  <div className="ig-meta">
                    Ansiedade, vínculos e maturidade emocional
                  </div>
                </div>
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </div>
            <div className="ig-grid" data-anim="up" data-delay="1">
              {instagramCards.map(({ src, href, label }) => (
                <a
                  key={src}
                  className="ig-card"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir no Instagram: ${label} (abre em nova aba)`}
                >
                  <img src={src} alt={label} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESSO ── FIX 3: h3 para step-title */}
        <section
          id="processo"
          className="section bg-fog"
          aria-label="Como funciona"
        >
          <div className="wrap">
            <div data-anim="up" style={{ textAlign: "center" }}>
              <span className="sec-label">Processo</span>
              <h2 className="sec-h2">Como começar a psicoterapia online.</h2>
              <p className="sec-lead" style={{ margin: "16px auto 0" }}>
                Um caminho simples, explicado passo a passo.
              </p>
            </div>
            <div className="steps-wrap">
              <div className="steps-line-track" aria-hidden="true">
                <div ref={lineRef} className="steps-line-fill" />
              </div>
              <ol className="steps-timeline">
                {steps.map((s, i) => (
                  <li
                    className="step-col"
                    data-anim="up"
                    data-delay={String(i + 1)}
                    key={s.n}
                  >
                    <div className="step-circle" aria-hidden="true">
                      {s.n}
                    </div>
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-text">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── FAQ ── FIX 5 + FIX 14: aria-controls, ids, grid animation */}
        <section className="section bg-cream" aria-label="Perguntas frequentes">
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Dúvidas</span>
              <h2 className="sec-h2">Perguntas frequentes.</h2>
            </div>
            <div className="faq-list" data-anim="up" data-delay="1">
              {faqs.map((faq, i) => (
                <div
                  className={`faq-item${openFaq === i ? " open" : ""}`}
                  key={faq.q}
                >
                  <button
                    className="faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    {faq.q}
                    <span className="faq-icon" aria-hidden="true">
                      {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    className="faq-answer"
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-label={faq.q}
                    hidden={openFaq !== i ? true : undefined}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contato" className="cta-final" aria-label="Agendamento">
          <div className="wrap">
            <div className="cta-content" data-anim="up">
              <span className="sec-label">Primeiro passo</span>
              <h2 className="sec-h2">O cuidado pode começar com uma conversa.</h2>
              <p className="sec-lead">
                Se algo em você pede atenção, entre em contato para tirar
                dúvidas e entender como funciona o acompanhamento.
              </p>
              <div className="cta-actions">
                <a
                  className="btn-rose"
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WaIcon size={18} /> Conversar pelo WhatsApp
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a
                  className="btn-ghost"
                  href={IG}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={16} /> @psigiselebicalho
                  <span className="sr-only"> (abre em nova aba)</span>
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
                <strong>Gisele Bicalho</strong>
                <small>Psicóloga Clínica</small>
                <span className="footer-crp">
                  CRP 04/31637 · Nova Serrana, MG
                </span>
                <p>
                  Atendimento online com TCC para ansiedade, vínculos e
                  maturidade emocional.
                </p>
                <div className="footer-tags">
                  {["TCC", "Ansiedade", "Vínculos", "Limites", "Online"].map(
                    (t) => (
                      <span className="footer-tag" key={t}>
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <nav className="footer-col" aria-label="Navegação no rodapé">
                <h4>Navegação</h4>
                <a href="#sobre">Sobre</a>
                <a href="#terapia">Abordagem TCC</a>
                <a href="#dores">Demandas</a>
                <a href="#processo">Como funciona</a>
                <a href={WA} target="_blank" rel="noreferrer">
                  Agendar sessão{" "}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </nav>
              <div className="footer-col">
                <h4>Contato</h4>
                <a href={WA} target="_blank" rel="noreferrer">
                  <WaIcon size={14} /> WhatsApp
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a href={IG} target="_blank" rel="noreferrer">
                  <Instagram size={14} /> @psigiselebicalho
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </div>
            <hr className="footer-line" />
            <div className="footer-bottom">
              <span>
                © 2026 Gisele Bicalho. Psicóloga Clínica — CRP 04/31637.
              </span>
              <span>
                Site por{" "}
                <a
                  href="https://lumasites.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  LumaSites
                  <span className="sr-only"> (abre em nova aba)</span>
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
        aria-label="Falar com Gisele Bicalho pelo WhatsApp (abre em nova aba)"
      >
        <WaIcon size={27} color="white" />
      </a>
    </>
  );
}
