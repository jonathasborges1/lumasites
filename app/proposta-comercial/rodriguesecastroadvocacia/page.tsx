"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Clock, ExternalLink, Instagram, Mail, MapPin, Minus, Plus } from "lucide-react";

/* ─── CONTATOS ─────────────────────────────────────────────── */
const WA_ANNE = `https://wa.me/5592982301415?text=${encodeURIComponent(
  "Olá! Gostaria de agendar uma consulta com a Rodrigues e Castro Advocacia.",
)}`;
const WA_JULIANA = `https://wa.me/5592981716233?text=${encodeURIComponent(
  "Olá! Gostaria de agendar uma consulta com a Rodrigues e Castro Advocacia.",
)}`;
const WA_PRIMARY = WA_JULIANA;
const EMAIL = "rodriguesecastroadvocacia@gmail.com";
const INSTAGRAM = "https://www.instagram.com/adv.rodriguesecastro";

/* ─── IMAGENS ──────────────────────────────────────────────── */
const IMG = {
  logo: "/images/rodriguesecastroadvocacia/logo-v3-light.svg",
  heroBg: "/images/rodriguesecastroadvocacia/hero-v2.png",
  aboutOffice: "/images/rodriguesecastroadvocacia/quem-somos-v2.png",
  anne: "/images/rodriguesecastroadvocacia/anne-castro-hd.png",
  juliana: "/images/rodriguesecastroadvocacia/juliana-rodrigues-hd.png",
  iconCivil: "/images/rodriguesecastroadvocacia/icon-civil.png",
  iconTrabalho: "/images/rodriguesecastroadvocacia/icon-trabalho.png",
  iconConsumidor: "/images/rodriguesecastroadvocacia/icon-consumidor.png",
};

/* ─── DADOS ─────────────────────────────────────────────────── */
const navItems = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

const areas = [
  {
    titulo: "Direito Civil",
    icon: IMG.iconCivil,
    itens: [
      "Indenização por dano moral e material",
      "Ações de cobrança",
      "Locação de imóveis",
      "Negativa de procedimentos por planos de saúde",
    ],
  },
  {
    titulo: "Direito do Trabalho",
    icon: IMG.iconTrabalho,
    itens: [
      "Verbas trabalhistas",
      "Reconhecimento de vínculo empregatício",
      "Verbas rescisórias indevidas",
      "Rescisão indireta",
      "Desvio e acúmulo de funções",
      "Acidente de trabalho",
      "Assédio moral e dispensa irregular",
      "Doença laboral",
      "Horas extras",
      "Reversão de justa causa",
    ],
  },
  {
    titulo: "Direito do Consumidor",
    icon: IMG.iconConsumidor,
    itens: [
      "Cobranças indevidas e negativação de crédito",
      "Cancelamento e suspensão indevida de serviços",
      "Vícios e defeitos em produtos e serviços",
      "Práticas abusivas por fornecedores",
      "Ressarcimento por danos ao consumidor",
      "Anulação de multa por irregularidades em energia e água",
      "Desvio de produto em entregas por aplicativo",
      "Venda casada",
      "Overbooking",
      "Atraso de voo",
    ],
  },
];

const equipe = [
  {
    nome: "Anne Castro",
    oab: "OAB/AM-11421",
    areas: "Cível · Trabalhista · Consumidor",
    missao:
      "Buscar a melhor solução jurídica para cada caso concreto, de maneira transparente, célere e eficaz.",
    foto: IMG.anne,
    wa: WA_ANNE,
    inicial: "A",
  },
  {
    nome: "Juliana Rodrigues",
    oab: "OAB/AM-10547",
    areas: "Trabalhista · Cível · Consumidor",
    missao:
      "Oferecer um serviço jurídico de excelência, pautado pela ética, eficiência e transparência.",
    foto: IMG.juliana,
    wa: WA_JULIANA,
    inicial: "J",
  },
];

const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A primeira consulta é realizada para que possamos entender o seu caso e apresentar as alternativas jurídicas disponíveis. Entre em contato pelo WhatsApp para agendar e receber todas as orientações necessárias.",
  },
  {
    q: "Vocês atendem em quais cidades?",
    a: "O escritório realiza atendimentos online e presenciais. O atendimento presencial ocorre em Manaus, na Rua Luis Lopes, 32 — Parque 10 de Novembro, somente após confirmação pelo WhatsApp. O horário de funcionamento é de segunda a sexta, das 08h às 17h.",
  },
  {
    q: "Quais documentos preciso levar para a consulta?",
    a: "Os documentos variam conforme o tipo de caso. No agendamento, nossa equipe orienta quais documentos apresentar para que a consulta seja a mais produtiva possível.",
  },
  {
    q: "Vocês cobram pela consulta inicial?",
    a: "Entre em contato pelo WhatsApp para obter informações sobre valores e condições de atendimento. Trabalhamos com transparência em todas as etapas.",
  },
  {
    q: "Quanto tempo dura um processo?",
    a: "O prazo varia de acordo com a natureza e a complexidade de cada caso. Nossa equipe fornece uma estimativa realista após a análise das particularidades da sua situação.",
  },
];

/* ─── SVG WHATSAPP ─────────────────────────────────────────── */
function WaIcon({ size = 17, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

/* ─── CSS ──────────────────────────────────────────────────── */
const css = `
  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; cursor: pointer; border: none; background: none; padding: 0; }

  :root {
    --bar:        52px;
    --nav:        70px;
    /* palette */
    --black:      #FFFFFF;
    --black-mid:  #F5F6F7;
    --black-lt:   #E9EDF1;
    --gold:       #132B45;
    --gold-dk:    #0D2034;
    --gold-lt:    #244E78;
    --gold-pale:  rgba(19,43,69,.08);
    --gold-line:  rgba(19,43,69,.2);
    --white:      #132B45;
    --off-white:  #FFFFFF;
    --muted:      #626262;
    --slate:      #626262;
    --line:       rgba(19,43,69,.1);
    --wa:         #25D366;
  }

  section[id] { scroll-margin-top: calc(var(--bar) + var(--nav) + 16px); }

  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
  }
  .skip-link {
    position: fixed; z-index: 1100; top: 8px; left: 8px;
    padding: 10px 14px; border-radius: 6px;
    background: var(--gold); color: var(--black);
    font-size: 14px; font-weight: 700;
    transform: translateY(-160%); transition: transform .15s;
  }
  .skip-link:focus { transform: translateY(0); }

  .rc {
    overflow-x: clip;
    font-family: var(--rc-body), 'Montserrat', system-ui, sans-serif;
    background: var(--black);
    color: var(--white);
  }

  /* ══ PREVIEW BAR ══════════════════════════════════════════ */
  .pre-bar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1001;
    min-height: var(--bar);
    padding: 7px 20px;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
    background: var(--black); text-align: center;
    border-bottom: 1px solid var(--gold-line);
  }
  .pre-back {
    position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
    min-width: 36px; min-height: 36px; padding: 0 10px;
    display: inline-flex; align-items: center; gap: 6px;
    border-radius: 6px; color: rgba(255,255,255,.55);
    font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    transition: color .15s, background .15s;
  }
  .pre-back:hover { color: #fff; background: rgba(255,255,255,.06); }
  .pre-line {
    display: flex; align-items: center; gap: 8px;
    color: #fff; font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase;
  }
  .pre-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--gold); flex: none;
    animation: dot-pulse 1.8s ease-out infinite;
  }
  @keyframes dot-pulse {
    0%  { box-shadow: 0 0 0 0 rgba(212,160,23,.9); }
    70% { box-shadow: 0 0 0 9px rgba(212,160,23,0); }
    100%{ box-shadow: 0 0 0 0 rgba(212,160,23,0); }
  }
  .pre-sub { font-size: 11px; color: rgba(255,255,255,.45); }
  .pre-sub a { color: rgba(212,160,23,.8); text-decoration: underline; text-underline-offset: 2px; }
  .pre-sub a:hover { color: var(--gold-lt); }

  /* ══ NAV ══════════════════════════════════════════════════ */
  .nav {
    position: fixed; z-index: 1000;
    inset: var(--bar) 0 auto 0;
    height: var(--nav);
    background: linear-gradient(
      90deg,
      rgba(10,10,10,.58),
      rgba(17,17,17,.48),
      rgba(10,10,10,.58)
    );
    -webkit-backdrop-filter: blur(20px) saturate(135%);
    backdrop-filter: blur(20px) saturate(135%);
    border-bottom: 1px solid rgba(212,160,23,.16);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.035);
    transition: background .3s, border-color .3s, box-shadow .3s;
  }
  .nav.scrolled {
    background: linear-gradient(
      90deg,
      rgba(10,10,10,.78),
      rgba(17,17,17,.68),
      rgba(10,10,10,.78)
    );
    border-bottom-color: rgba(212,160,23,.28);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.045),
      0 12px 36px rgba(0,0,0,.2);
  }
  .nav-inner {
    width: min(1200px, calc(100% - 40px));
    margin: 0 auto; height: 100%;
    display: flex; align-items: center; justify-content: space-between; gap: 20px;
  }
  .brand { display: flex; align-items: center; line-height: 1; }
  .brand-logo { width: 230px; height: auto; display: block; }
  .nav-links { display: none; align-items: center; gap: 28px; }
  .nav-links a {
    font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
    color: rgba(255,255,255,.6);
    position: relative; padding: 8px 0;
    transition: color .2s;
  }
  .nav-links a::after {
    content: ""; position: absolute; bottom: -2px; left: 0; right: 0;
    height: 1px; background: var(--gold);
    transform: scaleX(0); transform-origin: left;
    transition: transform .25s ease;
  }
  .nav-links a:hover { color: #fff; }
  .nav-links a:hover::after { transform: scaleX(1); }
  .nav-links .nav-cta:hover { color: var(--black); }
  .nav-links .nav-cta {
    min-height: 40px; padding: 0 18px;
    display: inline-flex; align-items: center; gap: 7px;
    border-radius: 6px;
    background: var(--gold); color: var(--black);
    font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
    position: static;
    transition: background .2s, transform .15s;
  }
  .nav-links .nav-cta::after { display: none; }
  .nav-links .nav-cta:hover { background: var(--gold-lt); color: var(--black); transform: translateY(-1px); }
  .menu-btn {
    position: relative;
    width: 48px; height: 48px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 12px;
    background:
      linear-gradient(145deg, rgba(212,160,23,.12), rgba(255,255,255,.025));
    border: 1px solid rgba(212,160,23,.28);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.05),
      0 8px 24px rgba(0,0,0,.18);
    transition: background .25s, border-color .25s, transform .2s;
  }
  .menu-btn:hover {
    background:
      linear-gradient(145deg, rgba(212,160,23,.2), rgba(255,255,255,.045));
    border-color: rgba(212,160,23,.48);
    transform: translateY(-1px);
  }
  .menu-btn.open {
    background: rgba(212,160,23,.13);
    border-color: rgba(212,160,23,.5);
  }
  .menu-icon {
    position: relative;
    width: 22px; height: 17px;
    display: block;
  }
  .menu-icon span {
    position: absolute; right: 0;
    height: 1.5px; border-radius: 999px;
    background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
    transform-origin: center;
    transition: top .25s ease, width .25s ease, transform .25s ease, opacity .18s ease;
  }
  .menu-icon span:nth-child(1) { top: 0; width: 16px; }
  .menu-icon span:nth-child(2) { top: 7.5px; width: 22px; }
  .menu-icon span:nth-child(3) { top: 15px; width: 12px; }
  .menu-btn:hover .menu-icon span { width: 22px; }
  .menu-btn.open .menu-icon span:nth-child(1) {
    top: 7.5px; width: 22px; transform: rotate(45deg);
  }
  .menu-btn.open .menu-icon span:nth-child(2) {
    opacity: 0; transform: scaleX(.4);
  }
  .menu-btn.open .menu-icon span:nth-child(3) {
    top: 7.5px; width: 22px; transform: rotate(-45deg);
  }

  /* ══ MOBILE MENU ══════════════════════════════════════════ */
  .mob-menu {
    position: fixed; z-index: 999;
    inset: calc(var(--bar) + var(--nav)) 0 auto 0;
    background: var(--black-mid);
    padding: 12px 20px 24px;
    display: flex; flex-direction: column;
    border-bottom: 1px solid var(--gold-line);
    animation: mob-slide-in .2s ease;
  }
  @keyframes mob-slide-in {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: none; }
  }
  .mob-menu a {
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
    font-size: 13px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase;
    color: rgba(255,255,255,.6);
    transition: color .15s, padding-left .15s;
  }
  .mob-menu a:hover { color: var(--gold-lt); padding-left: 6px; }
  .mob-menu a:last-child { border-bottom: none; color: var(--gold); font-weight: 700; }

  /* ══ WRAP ═════════════════════════════════════════════════ */
  .wrap { width: min(1200px, calc(100% - 40px)); margin: 0 auto; }

  /* ══ HERO ════════════════════════════════════════════════ */
  .hero {
    position: relative;
    min-height: 100svh;
    padding-top: calc(var(--bar) + var(--nav));
    display: flex; align-items: center;
    overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0;
    object-fit: cover; object-position: 64% center;
    opacity: .88;
    filter: saturate(.78) contrast(1.05);
  }
  .hero-overlay {
    position: absolute; inset: 0;
    background:
      linear-gradient(90deg, rgba(10,10,10,.98) 0%, rgba(10,10,10,.92) 34%, rgba(10,10,10,.48) 60%, rgba(10,10,10,.18) 100%),
      linear-gradient(0deg, rgba(10,10,10,.82) 0%, transparent 34%),
      linear-gradient(180deg, rgba(10,10,10,.25) 0%, transparent 28%);
  }
  .hero-inner {
    position: relative; z-index: 1;
    padding: 60px 0 80px;
    max-width: 640px;
  }
  .hero-kicker {
    display: inline-flex; align-items: center; gap: 10px;
    margin-bottom: 20px;
    font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
    color: var(--gold);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .6s ease .15s, transform .6s ease .15s;
  }
  .hero-kicker::before { content: ""; width: 28px; height: 1px; background: var(--gold); }
  .hero-ready .hero-kicker { opacity: 1; transform: none; }
  .hero h1 {
    margin: 0;
    font-family: var(--rc-heading), 'Playfair Display', Georgia, serif;
    font-size: clamp(38px, 5vw, 68px);
    font-weight: 700; line-height: 1.05; letter-spacing: -.01em;
    color: var(--white);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .65s ease .28s, transform .65s ease .28s;
  }
  .hero h1 em { font-style: italic; color: var(--gold); }
  .hero-ready h1 { opacity: 1; transform: none; }
  .hero-sub {
    margin: 22px 0 0; max-width: 500px;
    font-size: 16px; line-height: 1.8; color: rgba(255,255,255,.6);
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
    display: flex; gap: 24px; flex-wrap: wrap;
    margin-top: 40px; padding-top: 28px;
    border-top: 1px solid var(--line);
    opacity: 0;
    transition: opacity .6s ease .72s;
  }
  .hero-ready .hero-trust { opacity: 1; }
  .trust-item { display: flex; flex-direction: column; gap: 2px; }
  .trust-item strong { font-size: 12px; font-weight: 700; color: var(--gold); letter-spacing: .08em; text-transform: uppercase; }
  .trust-item span { font-size: 11px; color: rgba(255,255,255,.45); }

  /* ══ BUTTONS ══════════════════════════════════════════════ */
  .btn-gold {
    min-height: 52px; padding: 0 28px;
    display: inline-flex; align-items: center; gap: 10px;
    border-radius: 8px;
    background: var(--gold); color: var(--black);
    font-family: var(--rc-body), 'Montserrat', sans-serif;
    font-size: 13px; font-weight: 700; letter-spacing: .04em;
    box-shadow: 0 8px 24px rgba(212,160,23,.3);
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .btn-gold:hover { background: var(--gold-lt); box-shadow: 0 12px 32px rgba(212,160,23,.35); transform: translateY(-1px); }
  .btn-gold:active { transform: translateY(1px); }

  .btn-outline {
    min-height: 52px; padding: 0 24px;
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 8px;
    border: 1.5px solid var(--gold-line); background: transparent;
    color: rgba(255,255,255,.8);
    font-family: var(--rc-body), 'Montserrat', sans-serif;
    font-size: 13px; font-weight: 600; letter-spacing: .04em;
    transition: border-color .2s, background .2s, transform .15s;
  }
  .btn-outline:hover { border-color: var(--gold); background: var(--gold-pale); transform: translateY(-1px); }

  /* ══ GOLD STRIP ═══════════════════════════════════════════ */
  .gold-strip {
    background: var(--gold);
    padding: 14px 0;
  }
  .gold-strip-inner {
    width: min(1200px, calc(100% - 40px)); margin: 0 auto;
    display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 32px;
  }
  .gold-strip-item {
    display: flex; flex-direction: column; align-items: center; gap: 2px;
  }
  .gold-strip-item strong {
    font-family: var(--rc-heading), 'Playfair Display', serif;
    font-size: 20px; font-weight: 700; color: var(--black); line-height: 1;
  }
  .gold-strip-item span {
    font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: rgba(10,10,10,.65);
  }

  /* ══ SECTION BASE ═════════════════════════════════════════ */
  .section { padding: 96px 0; }
  .section.bg-dark  { background: var(--black); }
  .section.bg-mid   { background: var(--black-mid); }
  .section.bg-light { background: var(--black-lt); }

  .sec-label {
    display: inline-block; margin-bottom: 12px;
    font-size: 10px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
    color: var(--gold);
  }
  .sec-h2 {
    margin: 0;
    font-family: var(--rc-heading), 'Playfair Display', Georgia, serif;
    font-size: clamp(28px, 3.6vw, 46px); font-weight: 700; line-height: 1.1;
    color: var(--white);
  }
  .sec-lead {
    margin: 16px 0 0; max-width: 600px;
    font-size: 15px; line-height: 1.85; color: rgba(255,255,255,.55);
  }

  /* ══ QUEM SOMOS ═══════════════════════════════════════════ */
  .sobre-grid {
    display: grid; grid-template-columns: 1fr 1.1fr;
    gap: 64px; margin-top: 56px; align-items: center;
  }
  .sobre-img-col {
    position: relative; min-height: 420px;
    border-radius: 12px; overflow: hidden;
    border: 1px solid var(--gold-line);
    background: #111;
  }
  .sobre-img-col img {
    object-fit: cover; object-position: center;
    opacity: .82;
    filter: saturate(.72) contrast(1.04);
  }
  .sobre-img-col::after {
    content: "";
    position: absolute; inset: 0;
    background:
      linear-gradient(180deg, rgba(10,10,10,.08) 30%, rgba(10,10,10,.72) 100%),
      linear-gradient(90deg, rgba(10,10,10,.2), transparent 55%);
    pointer-events: none;
  }
  .sobre-img-overlay {
    position: absolute; inset: 0; z-index: 1;
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 16px;
    padding: 40px;
  }
  .sobre-monogram {
    font-family: var(--rc-heading), 'Playfair Display', serif;
    font-size: 96px; font-weight: 700; line-height: 1;
    color: var(--gold); opacity: .15;
    user-select: none;
    position: absolute; right: 20px; bottom: 10px;
  }
  .sobre-badge {
    position: absolute; top: 24px; left: 24px;
    padding: 12px 18px;
    background: rgba(10,10,10,.85);
    border: 1px solid var(--gold-line);
    border-radius: 8px; backdrop-filter: blur(12px);
    display: flex; flex-direction: column; gap: 3px;
  }
  .sobre-badge strong {
    font-family: var(--rc-heading), 'Playfair Display', serif;
    font-size: 14px; font-weight: 600; color: var(--white);
  }
  .sobre-badge span {
    font-size: 10px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--gold);
  }
  .sobre-text p {
    margin: 0 0 18px; font-size: 15px; line-height: 1.9; color: rgba(255,255,255,.6);
  }
  .sobre-text p:last-of-type { margin-bottom: 0; }
  .sobre-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
  .sobre-tag {
    padding: 6px 14px; border-radius: 20px;
    border: 1px solid var(--gold-line);
    font-size: 11px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase;
    color: rgba(255,255,255,.5);
    transition: border-color .2s, background .2s, color .2s, transform .2s;
  }
  .sobre-tag:hover { border-color: var(--gold); background: var(--gold-pale); color: var(--gold-lt); transform: translateY(-2px); }

  /* ══ ÁREAS ════════════════════════════════════════════════ */
  .areas-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 20px; margin-top: 52px;
  }
  .area-card {
    padding: 36px 28px;
    background: var(--black-mid);
    border-radius: 12px;
    border: 1px solid var(--line);
    position: relative; overflow: hidden;
    transition: border-color .25s, box-shadow .25s, transform .25s;
  }
  .area-card::before {
    content: "";
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(to right, var(--gold-dk), var(--gold-lt));
    transform: scaleX(0); transform-origin: left;
    transition: transform .3s ease;
  }
  .area-card:hover {
    border-color: var(--gold-line);
    box-shadow: 0 12px 40px rgba(212,160,23,.12);
    transform: translateY(-4px);
  }
  .area-card:hover::before { transform: scaleX(1); }
  .area-icon {
    width: 52px; height: 52px; margin-bottom: 20px;
    display: flex; align-items: center; justify-content: center;
    background: var(--gold-pale);
    border-radius: 10px;
    border: 1px solid var(--gold-line);
    padding: 10px;
  }
  .area-titulo {
    font-family: var(--rc-heading), 'Playfair Display', serif;
    font-size: 22px; font-weight: 700; color: var(--white);
    margin: 0 0 18px; line-height: 1.15;
  }
  .area-lista { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 9px; }
  .area-lista li {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 13.5px; line-height: 1.6; color: rgba(255,255,255,.55);
  }
  .area-lista li::before {
    content: ""; flex: none;
    width: 5px; height: 5px; border-radius: 50%;
    background: var(--gold); margin-top: 7px;
  }

  /* ══ EQUIPE ═══════════════════════════════════════════════ */
  .equipe-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 28px; margin-top: 52px;
  }
  .membro-card {
    background: var(--black-mid);
    border: 1px solid var(--line);
    border-radius: 14px; overflow: hidden;
    transition: border-color .25s, box-shadow .25s;
  }
  .membro-card:hover {
    border-color: var(--gold-line);
    box-shadow: 0 16px 48px rgba(212,160,23,.1);
  }
  .membro-foto-col {
    position: relative; height: 280px; overflow: hidden;
    background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
  }
  .membro-foto {
    object-fit: contain; object-position: center bottom;
    filter: grayscale(.2);
    z-index: 1;
    transition: transform .5s ease;
  }
  .membro-card:hover .membro-foto { transform: scale(1.03); }
  .membro-inicial {
    position: absolute; right: 24px; bottom: 18px; z-index: 0;
    font-family: var(--rc-heading), 'Playfair Display', serif;
    font-size: clamp(88px, 8vw, 116px); font-weight: 700; line-height: .8;
    color: var(--gold); opacity: .13;
    user-select: none; pointer-events: none;
  }
  .membro-inicial.is-j {
    bottom: 34px;
  }
  .membro-info { padding: 28px 28px 32px; }
  .membro-nome {
    font-family: var(--rc-heading), 'Playfair Display', serif;
    font-size: 26px; font-weight: 700; color: var(--white);
    margin: 0 0 4px; line-height: 1.1;
  }
  .membro-oab {
    display: inline-block; margin-bottom: 8px;
    padding: 3px 10px; border-radius: 4px;
    background: var(--gold-pale); border: 1px solid var(--gold-line);
    font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    color: var(--gold);
  }
  .membro-areas {
    display: block; margin-bottom: 20px;
    font-size: 12px; font-weight: 500; color: rgba(255,255,255,.4);
    letter-spacing: .04em;
  }
  .membro-missao {
    margin-top: 20px; padding-top: 20px;
    border-top: 1px solid var(--line);
  }
  .membro-missao-label {
    font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 8px; display: block;
  }
  .membro-missao p {
    margin: 0; font-size: 14px; line-height: 1.75;
    color: rgba(255,255,255,.5); font-style: italic;
  }
  .membro-wa {
    display: inline-flex; align-items: center; gap: 8px;
    margin-top: 20px;
    min-height: 44px; padding: 0 20px;
    border-radius: 8px;
    background: rgba(37,211,102,.1);
    border: 1px solid rgba(37,211,102,.25);
    color: #4ADE80;
    font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
    transition: background .2s, border-color .2s;
  }
  .membro-wa:hover { background: rgba(37,211,102,.18); border-color: rgba(37,211,102,.45); }

  /* ══ QUOTE BANNER ═════════════════════════════════════════ */
  .quote-banner {
    padding: 80px 0;
    background: var(--gold);
    position: relative; overflow: hidden;
  }
  .quote-banner::before {
    content: "";
    position: absolute; top: -40px; right: -40px;
    width: 300px; height: 300px; border-radius: 50%;
    background: rgba(255,255,255,.08);
    pointer-events: none;
  }
  .quote-inner {
    position: relative; z-index: 1;
    max-width: 760px; margin: 0 auto; text-align: center;
  }
  .quote-mark {
    font-family: var(--rc-heading), 'Playfair Display', serif;
    font-size: 80px; line-height: .8; color: rgba(10,10,10,.2);
    display: block; margin-bottom: 8px;
  }
  .quote-text {
    font-family: var(--rc-heading), 'Playfair Display', serif;
    font-size: clamp(20px, 2.8vw, 32px); font-style: italic; font-weight: 600;
    color: var(--black); line-height: 1.5;
    margin: 0 0 24px;
  }
  .quote-line { width: 48px; height: 2px; background: rgba(10,10,10,.25); margin: 0 auto 18px; }
  .quote-author {
    font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: rgba(10,10,10,.55);
  }

  /* ══ FAQ ════════════════════════════════════════════════ */
  .faq-list { margin-top: 48px; display: flex; flex-direction: column; gap: 8px; max-width: 800px; }
  .faq-item {
    background: var(--black-mid); border-radius: 10px;
    border: 1px solid var(--line);
    overflow: hidden;
    transition: border-color .2s, box-shadow .2s;
  }
  .faq-item.open { border-color: var(--gold-line); box-shadow: 0 4px 20px rgba(212,160,23,.1); }
  .faq-btn {
    width: 100%; padding: 20px 22px;
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
    text-align: left;
    font-size: 15px; font-weight: 600; color: rgba(255,255,255,.8);
    transition: color .2s;
  }
  .faq-item.open .faq-btn { color: var(--gold-lt); }
  .faq-icon { flex: none; color: var(--gold); }
  .faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows .35s ease;
  }
  .faq-item.open .faq-answer { grid-template-rows: 1fr; }
  .faq-answer-inner { overflow: hidden; }
  .faq-answer p { margin: 0; padding: 0 22px 20px; font-size: 14px; line-height: 1.85; color: rgba(255,255,255,.45); }

  /* ══ CONTATO ══════════════════════════════════════════════ */
  .contato-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 28px; margin-top: 52px;
  }
  .contato-card {
    padding: 36px 32px;
    background: var(--black-mid);
    border: 1px solid var(--line);
    border-radius: 12px;
    transition: border-color .25s;
  }
  .contato-card:hover { border-color: var(--gold-line); }
  .contato-card-title {
    font-family: var(--rc-heading), 'Playfair Display', serif;
    font-size: 20px; font-weight: 700; color: var(--white);
    margin: 0 0 6px;
  }
  .contato-card-sub {
    font-size: 12px; color: rgba(255,255,255,.4); margin-bottom: 24px; letter-spacing: .04em;
  }
  .contato-item {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 0; border-bottom: 1px solid var(--line);
  }
  .contato-item:last-of-type { border-bottom: none; }
  .contato-item-icon {
    width: 40px; height: 40px; border-radius: 8px;
    background: var(--gold-pale); border: 1px solid var(--gold-line);
    display: flex; align-items: center; justify-content: center;
    flex: none;
  }
  .contato-item-label { font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.35); margin-bottom: 2px; }
  .contato-item-value { font-size: 14px; font-weight: 600; color: rgba(255,255,255,.8); }
  .contato-item-value a { transition: color .15s; }
  .contato-item-value a:hover { color: var(--gold-lt); }
  .location-card {
    margin-top: 28px;
    display: grid; grid-template-columns: minmax(280px, .72fr) 1.28fr;
    min-height: 330px; overflow: hidden;
    background: var(--black-mid);
    border: 1px solid var(--line);
    border-radius: 12px;
    transition: border-color .25s;
  }
  .location-card:hover { border-color: var(--gold-line); }
  .location-copy {
    padding: 38px 34px;
    display: flex; flex-direction: column; justify-content: center;
  }
  .location-icon {
    width: 48px; height: 48px; margin-bottom: 20px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 10px;
    color: var(--gold);
    background: var(--gold-pale);
    border: 1px solid var(--gold-line);
  }
  .location-copy h3 {
    margin: 0;
    font-family: var(--rc-heading), 'Playfair Display', serif;
    font-size: clamp(27px, 3vw, 38px); line-height: 1.08;
    color: var(--white);
  }
  .location-copy h3 em { color: var(--gold); font-style: italic; }
  .location-copy p {
    margin: 16px 0 0;
    font-size: 14px; line-height: 1.8;
    color: rgba(255,255,255,.5);
  }
  .location-note {
    display: flex; gap: 9px; align-items: flex-start;
    margin-top: 22px; padding-top: 18px;
    border-top: 1px solid var(--line);
    font-size: 11px; line-height: 1.6;
    color: rgba(255,255,255,.38);
  }
  .location-note svg { flex: none; margin-top: 2px; color: var(--gold); }
  .location-actions {
    display: flex; flex-wrap: wrap; gap: 10px;
    margin-top: 22px;
  }
  .location-link {
    min-height: 42px; padding: 0 16px;
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 7px;
    border: 1px solid var(--gold-line);
    color: var(--gold-lt);
    font-size: 11px; font-weight: 700;
    letter-spacing: .06em; text-transform: uppercase;
    transition: background .2s, border-color .2s;
  }
  .location-link:hover {
    background: var(--gold-pale);
    border-color: var(--gold);
  }
  .location-map {
    position: relative; min-height: 330px;
    background: #171717;
  }
  .location-map iframe {
    width: 100%; height: 100%; min-height: 330px;
    display: block; border: 0;
    filter: grayscale(1) invert(.9) contrast(.82) brightness(.72) sepia(.18);
  }
  .location-map::after {
    content: ""; position: absolute; inset: 0;
    pointer-events: none;
    box-shadow: inset 30px 0 45px rgba(10,10,10,.42);
  }

  /* ══ CTA FINAL ════════════════════════════════════════════ */
  .cta-final {
    padding: 100px 0;
    background: var(--black-lt);
    position: relative; overflow: hidden;
  }
  .cta-final::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 20% 50%, rgba(212,160,23,.07) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 80% 30%, rgba(212,160,23,.05) 0%, transparent 60%);
    pointer-events: none;
  }
  .cta-content {
    position: relative; z-index: 1;
    max-width: 640px; margin: 0 auto; text-align: center;
  }
  .cta-content .sec-h2 { color: var(--white); }
  .cta-content .sec-lead { margin: 16px auto 0; }
  .cta-gold-line {
    width: 56px; height: 1px;
    background: linear-gradient(to right, transparent, var(--gold), transparent);
    margin: 0 auto 24px;
  }
  .cta-actions {
    display: flex; flex-wrap: wrap; gap: 14px; justify-content: center;
    margin-top: 36px;
  }

  /* ══ FOOTER ══════════════════════════════════════════════ */
  .footer {
    background: var(--black);
    border-top: 1px solid var(--gold-line);
    font-size: 13px;
  }
  .footer-body {
    padding: 56px 0 40px;
    display: grid; grid-template-columns: 1.6fr 1fr 1fr;
    gap: 48px;
  }
  .footer-brand p { margin: 16px 0 0; font-size: 13px; color: rgba(255,255,255,.35); max-width: 260px; line-height: 1.7; }
  .footer-col h4 {
    margin: 0 0 16px;
    font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--gold);
  }
  .footer-col a {
    display: flex; align-items: center; gap: 8px;
    color: rgba(255,255,255,.4); padding: 5px 0; font-size: 13px;
    transition: color .15s, gap .15s;
  }
  .footer-col a:hover { color: var(--gold-lt); gap: 12px; }
  .footer-line { border: none; border-top: 1px solid var(--line); margin: 0; }
  .footer-bottom {
    padding: 18px 0;
    display: flex; flex-wrap: wrap; gap: 10px;
    align-items: center; justify-content: space-between;
    font-size: 12px; color: rgba(255,255,255,.3);
  }
  .footer-bottom a { color: var(--gold); font-weight: 600; transition: color .15s; }
  .footer-bottom a:hover { color: var(--gold-lt); }

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
  @keyframes wa-entrance { to { transform: scale(1) translateY(0); opacity: 1; } }
  @keyframes wa-pulse {
    0%  { box-shadow: 0 4px 20px rgba(37,211,102,.38), 0 0 0 0 rgba(37,211,102,.38); }
    70% { box-shadow: 0 4px 20px rgba(37,211,102,.38), 0 0 0 14px rgba(37,211,102,0); }
    100%{ box-shadow: 0 4px 20px rgba(37,211,102,.38), 0 0 0 0 rgba(37,211,102,0); }
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
  [data-anim="fade"]  { opacity: 0; }
  [data-anim].anim-in { opacity: 1; transform: none; }
  [data-delay="1"] { transition-delay: .1s; }
  [data-delay="2"] { transition-delay: .2s; }
  [data-delay="3"] { transition-delay: .3s; }

  /* ══ FOCUS ════════════════════════════════════════════════ */
  a:focus-visible, button:focus-visible {
    outline: none; border-radius: 4px;
    box-shadow: 0 0 0 3px var(--black), 0 0 0 5px var(--gold);
  }

  /* ══ RESPONSIVE ═══════════════════════════════════════════ */
  @media (min-width: 1025px) {
    .nav-links { display: flex; }
    .menu-btn { display: none; }
  }
  @media (max-width: 1024px) {
    .areas-grid { grid-template-columns: 1fr 1fr; }
    .footer-body { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 900px) {
    .sobre-grid { grid-template-columns: 1fr; }
    .sobre-img-col { min-height: 260px; }
    .equipe-grid { grid-template-columns: 1fr; }
    .contato-grid { grid-template-columns: 1fr; }
    .location-card { grid-template-columns: 1fr; }
    .location-map, .location-map iframe { min-height: 280px; }
    .location-map::after { box-shadow: inset 0 25px 40px rgba(10,10,10,.35); }
  }
  @media (max-width: 767px) {
    :root { --nav: 60px; }
    .pre-bar { padding: 8px 56px; }
    .pre-back span { display: none; }
    .wrap, .nav-inner { width: min(100% - 32px, 1200px); }
    .brand-logo { width: 178px; }
    .areas-grid { grid-template-columns: 1fr; }
    .cta-actions a { width: 100%; justify-content: center; }
    .footer-body { grid-template-columns: 1fr; gap: 28px; padding: 40px 0 28px; }
    .section { padding: 64px 0; }
    .hero-bg { object-position: 68% center; opacity: .5; }
    .hero-overlay {
      background:
        linear-gradient(90deg, rgba(10,10,10,.96) 0%, rgba(10,10,10,.82) 68%, rgba(10,10,10,.58) 100%),
        linear-gradient(0deg, rgba(10,10,10,.9) 0%, rgba(10,10,10,.25) 50%, rgba(10,10,10,.35) 100%);
    }

    /* hero — mobile */
    .hero-inner { padding: 36px 0 52px; }
    .hero-kicker { font-size: 10px; letter-spacing: .14em; }
    .hero h1 { font-size: 30px; line-height: 1.1; }
    .hero-sub { font-size: 14px; line-height: 1.75; margin-top: 14px; }
    .hero-actions { flex-direction: column; gap: 10px; margin-top: 24px; }
    .hero-actions a { width: 100%; justify-content: center; }
    .hero-trust {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 14px 20px; margin-top: 28px; padding-top: 20px;
    }
    .trust-item strong { font-size: 11px; }
    .trust-item span { font-size: 10px; }

    /* gold strip — mobile: 2×2 grid com divisores */
    .gold-strip { padding: 0; }
    .gold-strip-inner {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 0; width: 100%;
    }
    .gold-strip-item {
      padding: 18px 12px;
      border-right: 1px solid rgba(10,10,10,.18);
      border-bottom: 1px solid rgba(10,10,10,.18);
    }
    .gold-strip-item:nth-child(2n) { border-right: none; }
    .gold-strip-item:nth-child(3),
    .gold-strip-item:nth-child(4) { border-bottom: none; }
    .gold-strip-item strong { font-size: 17px; }
    .gold-strip-item span { font-size: 9px; letter-spacing: .12em; }
  }

  /* ══ IDENTIDADE 2026 — AZUL, CINZAS E BRANCO ══════════════ */
  .rc {
    background: #fff;
    color: #626262;
    font-family: var(--rc-body), 'Geometria', 'Montserrat', system-ui, sans-serif;
  }
  .pre-bar {
    background: #132B45;
    border-bottom-color: rgba(210,210,210,.2);
  }
  .pre-back, .pre-sub { color: rgba(255,255,255,.62); }
  .pre-back:hover { color: #fff; background: rgba(255,255,255,.08); }
  .pre-dot { background: #D2D2D2; animation: none; }
  .pre-sub a { color: #fff; }
  .pre-sub a:hover { color: #D2D2D2; }

  .nav {
    background: rgba(19,43,69,.78);
    border-bottom-color: rgba(210,210,210,.18);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
  }
  .nav.scrolled {
    background: rgba(19,43,69,.92);
    border-bottom-color: rgba(210,210,210,.28);
    box-shadow: 0 12px 32px rgba(19,43,69,.16);
  }
  .nav-links a { color: rgba(255,255,255,.72); }
  .nav-links a:hover { color: #fff; }
  .nav-links a::after { background: #D2D2D2; }
  .nav-links .nav-cta {
    background: #fff;
    color: #132B45;
    box-shadow: none;
  }
  .nav-links .nav-cta:hover { background: #D2D2D2; color: #132B45; }
  .menu-btn {
    background: rgba(255,255,255,.08);
    border-color: rgba(255,255,255,.26);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
  }
  .menu-btn:hover, .menu-btn.open {
    background: rgba(255,255,255,.14);
    border-color: rgba(255,255,255,.46);
  }
  .menu-icon span { background: #fff; }
  .mob-menu {
    background: rgba(19,43,69,.98);
    border-bottom-color: rgba(210,210,210,.22);
  }
  .mob-menu a { color: rgba(255,255,255,.72); border-bottom-color: rgba(255,255,255,.1); }
  .mob-menu a:hover, .mob-menu a:last-child { color: #fff; }

  .hero-bg {
    opacity: .82;
    filter: grayscale(.22) saturate(.62) contrast(1.02);
  }
  .hero-overlay {
    background:
      linear-gradient(90deg, rgba(19,43,69,.98) 0%, rgba(19,43,69,.9) 35%, rgba(19,43,69,.48) 66%, rgba(19,43,69,.18) 100%),
      linear-gradient(0deg, rgba(19,43,69,.72) 0%, transparent 36%);
  }
  .hero-kicker { color: #D2D2D2; }
  .hero-kicker::before { background: #D2D2D2; }
  .hero h1 {
    color: #fff;
    font-family: var(--rc-heading), 'Argue', 'Cormorant Garamond', Georgia, serif;
  }
  .hero h1 em { color: #D2D2D2; }
  .hero-sub { color: rgba(255,255,255,.74); }
  .hero-trust { border-top-color: rgba(255,255,255,.16); }
  .trust-item strong { color: #fff; }
  .trust-item span { color: rgba(255,255,255,.58); }

  .btn-gold {
    background: #132B45;
    color: #fff;
    box-shadow: 0 10px 28px rgba(19,43,69,.2);
  }
  .btn-gold:hover {
    background: #244E78;
    box-shadow: 0 12px 30px rgba(19,43,69,.25);
  }
  .hero .btn-gold { background: #fff; color: #132B45; box-shadow: none; }
  .hero .btn-gold:hover { background: #D2D2D2; }
  .btn-outline { border-color: rgba(255,255,255,.42); color: #fff; }
  .btn-outline:hover { border-color: #fff; background: rgba(255,255,255,.1); }

  .gold-strip {
    background: #fff;
    border-bottom: 1px solid #D2D2D2;
  }
  .gold-strip-item strong { color: #132B45; }
  .gold-strip-item span { color: #626262; }

  .section.bg-dark { background: #fff; }
  .section.bg-mid { background: #F5F6F7; }
  .section.bg-light { background: #E9EDF1; }
  .sec-label { color: #132B45; }
  .sec-h2,
  .area-titulo,
  .membro-nome,
  .contato-card-title,
  .location-copy h3 {
    color: #132B45;
    font-family: var(--rc-heading), 'Argue', 'Cormorant Garamond', Georgia, serif;
  }
  .sec-lead,
  .sobre-text p,
  .area-lista li,
  .membro-areas,
  .membro-missao p,
  .faq-answer p,
  .contato-card-sub,
  .location-copy p,
  .location-note {
    color: #626262;
  }

  .sobre-img-col { border-color: #D2D2D2; background: #E9EDF1; }
  .sobre-img-col img { opacity: .9; filter: grayscale(.18) saturate(.7); }
  .sobre-img-col::after {
    background: linear-gradient(180deg, transparent 40%, rgba(19,43,69,.58) 100%);
  }
  .sobre-badge {
    background: rgba(255,255,255,.9);
    border-color: rgba(19,43,69,.18);
  }
  .sobre-badge strong { color: #132B45; }
  .sobre-badge span { color: #626262; }
  .sobre-monogram { color: #fff; opacity: .34; }
  .sobre-text strong { color: #132B45 !important; }
  .sobre-tag { color: #626262; border-color: #D2D2D2; }
  .sobre-tag:hover { color: #132B45; border-color: #132B45; background: rgba(19,43,69,.05); }

  .area-card,
  .membro-card,
  .faq-item,
  .contato-card,
  .location-card {
    background: #fff;
    border-color: #D2D2D2;
    box-shadow: 0 12px 36px rgba(19,43,69,.05);
  }
  .area-card:hover,
  .membro-card:hover,
  .faq-item.open,
  .contato-card:hover,
  .location-card:hover {
    border-color: rgba(19,43,69,.42);
    box-shadow: 0 16px 42px rgba(19,43,69,.09);
  }
  .area-card::before { background: #132B45; }
  .area-icon,
  .contato-item-icon,
  .location-icon {
    background: rgba(19,43,69,.07);
    border-color: rgba(19,43,69,.16);
  }
  .area-icon img {
    filter: brightness(0) saturate(100%) invert(16%) sepia(23%) saturate(1556%) hue-rotate(169deg) brightness(91%) contrast(92%);
  }
  .area-lista li::before { background: #132B45; }
  .membro-foto-col { background: #F5F6F7; }
  .membro-foto { filter: grayscale(.08) saturate(.82); }
  .membro-foto-col::after {
    content: "";
    position: absolute;
    z-index: 2;
    left: 50%; bottom: 0;
    width: min(280px, 78%);
    aspect-ratio: 1;
    border: 4px solid #132B45;
    border-radius: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }
  .membro-inicial { color: #132B45; opacity: .1; }
  .membro-oab { color: #132B45; background: rgba(19,43,69,.07); border-color: rgba(19,43,69,.18); }
  .membro-missao { border-top-color: #D2D2D2; }
  .membro-missao-label { color: #132B45; }

  .quote-banner { background: #132B45; }
  .quote-banner::before { background: rgba(255,255,255,.06); }
  .quote-mark { color: rgba(255,255,255,.16); }
  .quote-text { color: #fff; }
  .quote-line { background: rgba(255,255,255,.32); }
  .quote-author { color: rgba(255,255,255,.66); }

  .faq-btn { color: #132B45; }
  .faq-item.open .faq-btn, .faq-icon { color: #132B45; }
  .contato-item { border-bottom-color: #D2D2D2; }
  .contato-item-label { color: #626262; }
  .contato-item-value { color: #132B45; }
  .location-copy h3 em { color: #626262; }
  .location-link { color: #132B45; border-color: rgba(19,43,69,.24); }
  .location-link:hover { background: rgba(19,43,69,.06); border-color: #132B45; }
  .location-map iframe {
    filter: grayscale(1) contrast(.88) brightness(.96) sepia(.08) hue-rotate(165deg);
  }
  .location-map::after { box-shadow: inset 30px 0 45px rgba(19,43,69,.14); }

  .cta-final { background: #132B45; }
  .cta-final::before {
    background:
      radial-gradient(ellipse 60% 70% at 20% 50%, rgba(255,255,255,.07) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 80% 30%, rgba(210,210,210,.08) 0%, transparent 60%);
  }
  .cta-content .sec-h2 { color: #fff; }
  .cta-content .sec-lead { color: rgba(255,255,255,.7); }
  .cta-gold-line { background: linear-gradient(to right, transparent, #D2D2D2, transparent); }
  .cta-final .btn-gold { background: #fff; color: #132B45; box-shadow: none; }
  .cta-final .btn-gold:hover { background: #D2D2D2; }

  .footer { background: #132B45; border-top-color: rgba(255,255,255,.12); }
  .footer-brand p,
  .footer-col a,
  .footer-bottom { color: rgba(255,255,255,.62); }
  .footer-col h4 { color: #fff; }
  .footer-col a:hover, .footer-bottom a { color: #fff; }
  .footer-line { border-top-color: rgba(255,255,255,.12); }

  @media (max-width: 767px) {
    .hero-overlay {
      background:
        linear-gradient(90deg, rgba(19,43,69,.96) 0%, rgba(19,43,69,.82) 72%, rgba(19,43,69,.58) 100%),
        linear-gradient(0deg, rgba(19,43,69,.76), rgba(19,43,69,.18));
    }
    .gold-strip-item {
      border-right-color: #D2D2D2;
      border-bottom-color: #D2D2D2;
    }
    .location-map::after { box-shadow: inset 0 25px 40px rgba(19,43,69,.12); }
  }

  /* ══ REDUCED MOTION ═══════════════════════════════════════ */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    html { scroll-behavior: auto; }
    .hero-kicker, .hero h1, .hero-sub, .hero-actions, .hero-trust { opacity: 1; transform: none; transition: none; }
    [data-anim] { opacity: 1; transform: none; transition: none; }
  }
`;

/* ─── COMPONENT ────────────────────────────────────────────── */
export default function RodriguesCastroProposalPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const fn = () => setMenuOpen(false);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [menuOpen]);

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
      { threshold: 0.07 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      {/* ── PREVIEW BAR ── */}
      <div className="pre-bar" role="note" aria-label="Aviso de proposta">
        <Link
          className="pre-back"
          href="/proposta-comercial"
          aria-label="Voltar para propostas comerciais"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className="pre-line">
          <span className="pre-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="pre-sub">
          Prévia conceitual criada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            lumasites.com.br
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </span>
      </div>

      {/* ── NAV ── */}
      <nav
        className={`nav${scrolled ? " scrolled" : ""}`}
        aria-label="Navegação principal"
      >
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="Rodrigues e Castro Advocacia — início">
            <Image
              className="brand-logo"
              src={IMG.logo}
              alt="Rodrigues e Castro Advocacia"
              width={150}
              height={36}
            />
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href={WA_PRIMARY} target="_blank" rel="noreferrer">
              <WaIcon size={13} /> Agendar Consulta
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
          <button
            className={`menu-btn${menuOpen ? " open" : ""}`}
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mob-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav id="mob-menu" className="mob-menu" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={WA_PRIMARY} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            Agendar Consulta
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </nav>
      )}

      <main id="conteudo" className="rc">
        {/* ── HERO ── */}
        <section
          id="top"
          className={`hero${heroReady ? " hero-ready" : ""}`}
          aria-label="Rodrigues e Castro Advocacia"
        >
          <Image
            className="hero-bg"
            src={IMG.heroBg}
            alt=""
            role="presentation"
            fill
            sizes="100vw"
            quality={75}
            priority
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="wrap">
            <div className="hero-inner">
              <span className="hero-kicker">
                OAB/AM-11421 · OAB/AM-10547
              </span>
              <h1>
                Seus direitos
                <br />
                defendidos com
                <br />
                <em>ética e resultado.</em>
              </h1>
              <p className="hero-sub">
                Escritório com atuação em Direito Civil, Trabalhista e do
                Consumidor. Atendimento online e presencial, com transparência,
                celeridade e comprometimento com a melhor solução para o seu caso.
              </p>
              <div className="hero-actions">
                <a className="btn-gold" href={WA_PRIMARY} target="_blank" rel="noreferrer">
                  <WaIcon size={16} color="#132B45" /> Agendar consulta
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a className="btn-outline" href="#atuacao">
                  Ver áreas de atuação <ChevronRight size={15} />
                </a>
              </div>
              <div className="hero-trust">
                {[
                  { v: "Cível", l: "Área de atuação" },
                  { v: "Trabalhista", l: "Área de atuação" },
                  { v: "Consumidor", l: "Área de atuação" },
                  { v: "OAB/AM", l: "Registro na Ordem" },
                ].map((t) => (
                  <div className="trust-item" key={t.v}>
                    <strong>{t.v}</strong>
                    <span>{t.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── GOLD STRIP ── */}
        <section className="gold-strip" aria-label="Credenciais">
          <div className="gold-strip-inner">
              {[
                { v: "2", l: "Advogadas" },
                { v: "OAB/AM", l: "Registro profissional" },
                { v: "3", l: "Áreas de Atuação" },
                { v: "Manaus", l: "Sede de atendimento" },
            ].map((item) => (
              <div className="gold-strip-item" key={item.l}>
                <strong>{item.v}</strong>
                <span>{item.l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── QUEM SOMOS ── */}
        <section id="quem-somos" className="section bg-dark" aria-label="Quem Somos">
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Quem Somos</span>
              <h2 className="sec-h2">
                Advocacia com propósito,<br />
                transparência e dedicação.
              </h2>
            </div>
            <div className="sobre-grid">
              <div className="sobre-img-col" data-anim="left">
                <Image
                  src={IMG.aboutOffice}
                  alt="Escritório de advocacia com mesa de atendimento e duas cadeiras"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  quality={75}
                />
                <div className="sobre-img-overlay" aria-hidden="true">
                  <div className="sobre-monogram">RC</div>
                  <div className="sobre-badge">
                    <strong>Rodrigues e Castro</strong>
                    <span>Advocacia · OAB/AM</span>
                  </div>
                </div>
              </div>
              <div className="sobre-text" data-anim="right">
                <p>
                  O escritório <strong style={{ color: "#fff" }}>Rodrigues e Castro Advocacia</strong>{" "}
                  atua na prestação de serviços jurídicos voltados às
                  necessidades dos nossos clientes. Com uma equipe experiente e comprometida,
                  atuamos nas áreas do Direito Civil, Trabalhista e do Consumidor, sempre em
                  busca da melhor solução para cada caso.
                </p>
                <p>
                  Nossa prática é guiada por valores que não negociamos: ética, eficiência e
                  transparência em cada etapa do processo. Estamos aqui para assegurar a defesa
                  dos seus direitos com a seriedade e o cuidado que você merece.
                </p>
                <p>
                  Acreditamos que cada cliente carrega uma história única. Por isso, dedicamos
                  atenção individualizada a cada caso, oferecendo orientação clara e comunicação
                  aberta durante toda a jornada jurídica.
                </p>
                <div className="sobre-tags">
                  {[
                    { label: "Direito Civil", href: "#atuacao" },
                    { label: "Direito Trabalhista", href: "#atuacao" },
                    { label: "Direito do Consumidor", href: "#atuacao" },
                    { label: "OAB/AM", href: "#equipe" },
                    { label: "Ética", href: "#quem-somos" },
                    { label: "Transparência", href: "#quem-somos" },
                  ].map((t) => (
                    <a className="sobre-tag" key={t.label} href={t.href}>{t.label}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ÁREAS DE ATUAÇÃO ── */}
        <section id="atuacao" className="section bg-mid" aria-label="Áreas de Atuação">
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Áreas de atuação</span>
              <h2 className="sec-h2">
                Três áreas, uma só<br />missão: seus direitos.
              </h2>
              <p className="sec-lead">
                Atuamos nas principais demandas jurídicas do cidadão com
                profundidade técnica e atendimento personalizado.
              </p>
            </div>
            <div className="areas-grid">
              {areas.map((area, i) => (
                <article
                  className="area-card"
                  key={area.titulo}
                  data-anim="up"
                  data-delay={String(i + 1)}
                >
                  <div className="area-icon">
                    <Image src={area.icon} alt={area.titulo} width={32} height={32} />
                  </div>
                  <h3 className="area-titulo">{area.titulo}</h3>
                  {area.itens.length > 0 && (
                    <ul className="area-lista">
                      {area.itens.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE BANNER ── */}
        <div className="quote-banner" role="complementary" aria-label="Filosofia do escritório">
          <div className="wrap">
            <div className="quote-inner">
              <span className="quote-mark" aria-hidden="true">"</span>
              <p className="quote-text">
                Cada caso é único. Cada cliente merece atenção, clareza
                e a melhor estratégia jurídica possível.
              </p>
              <div className="quote-line" aria-hidden="true" />
              <span className="quote-author">Rodrigues e Castro Advocacia</span>
            </div>
          </div>
        </div>

        {/* ── EQUIPE ── */}
        <section id="equipe" className="section bg-dark" aria-label="Nossa Equipe">
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Equipe</span>
              <h2 className="sec-h2">
                Conheça as advogadas<br />que vão cuidar do seu caso.
              </h2>
              <p className="sec-lead">
                Profissionais inscritas na OAB/AM, com atuação nas áreas Civil,
                Trabalhista e do Consumidor.
              </p>
            </div>
            <div className="equipe-grid">
              {equipe.map((m, i) => (
                <article
                  className="membro-card"
                  key={m.nome}
                  data-anim={i === 0 ? "left" : "right"}
                >
                  <div className="membro-foto-col">
                    <Image
                      className="membro-foto"
                      src={m.foto}
                      alt={m.nome}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      quality={90}
                    />
                    <span
                      className={`membro-inicial${m.inicial === "J" ? " is-j" : ""}`}
                      aria-hidden="true"
                    >
                      {m.inicial}
                    </span>
                  </div>
                  <div className="membro-info">
                    <h3 className="membro-nome">{m.nome}</h3>
                    <span className="membro-oab">{m.oab}</span>
                    <span className="membro-areas">{m.areas}</span>
                    <div className="membro-missao">
                      <span className="membro-missao-label">Missão</span>
                      <p>"{m.missao}"</p>
                    </div>
                    <a className="membro-wa" href={m.wa} target="_blank" rel="noreferrer">
                      <WaIcon size={14} color="#4ADE80" /> Falar com {m.nome.split(" ")[0]}
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section bg-mid" aria-label="Perguntas frequentes">
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Dúvidas</span>
              <h2 className="sec-h2">Perguntas frequentes</h2>
              <p className="sec-lead">
                Respostas diretas para as dúvidas mais comuns antes de contratar um advogado.
              </p>
            </div>
            <div className="faq-list" role="list">
              {faqs.map((faq, i) => (
                <div
                  className={`faq-item${openFaq === i ? " open" : ""}`}
                  key={i}
                  role="listitem"
                >
                  <button
                    className="faq-btn"
                    aria-expanded={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div className="faq-answer" aria-hidden={openFaq !== i}>
                    <div className="faq-answer-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTATO ── */}
        <section id="contato" className="section bg-dark" aria-label="Contato">
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Contato</span>
              <h2 className="sec-h2">Entre em contato</h2>
              <p className="sec-lead">
                Atendimento online ou presencial, de segunda a sexta, das 08h às 17h.
                Em Manaus, o atendimento presencial ocorre somente após confirmação pelo WhatsApp.
              </p>
            </div>
            <div className="contato-grid">
              {/* WhatsApp */}
              <div className="contato-card" data-anim="left">
                <h3 className="contato-card-title">WhatsApp</h3>
                <p className="contato-card-sub">Atendimento direto com as advogadas</p>
                <div className="contato-item">
                  <div className="contato-item-icon">
                    <WaIcon size={18} color="#132B45" />
                  </div>
                  <div>
                    <p className="contato-item-label">Anne Castro</p>
                    <p className="contato-item-value">
                      <a href={WA_ANNE} target="_blank" rel="noreferrer">+55 92 98230-1415</a>
                    </p>
                  </div>
                </div>
                <div className="contato-item">
                  <div className="contato-item-icon">
                    <WaIcon size={18} color="#132B45" />
                  </div>
                  <div>
                    <p className="contato-item-label">Juliana Rodrigues</p>
                    <p className="contato-item-value">
                      <a href={WA_JULIANA} target="_blank" rel="noreferrer">+55 92 98171-6233</a>
                    </p>
                  </div>
                </div>
                <a className="btn-gold" href={WA_PRIMARY} target="_blank" rel="noreferrer" style={{ marginTop: 24 }}>
                  <WaIcon size={16} color="#FFFFFF" /> Iniciar conversa
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>

              {/* E-mail e Localização */}
              <div className="contato-card" data-anim="right">
                <h3 className="contato-card-title">Outras formas</h3>
                <p className="contato-card-sub">E-mail e localização</p>
                <div className="contato-item">
                  <div className="contato-item-icon">
                    <Mail size={16} color="#132B45" />
                  </div>
                  <div>
                    <p className="contato-item-label">E-mail</p>
                    <p className="contato-item-value">
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </p>
                  </div>
                </div>
                <div className="contato-item">
                  <div className="contato-item-icon">
                    <MapPin size={16} color="#132B45" />
                  </div>
                  <div>
                    <p className="contato-item-label">Localização</p>
                    <p className="contato-item-value">Parque 10 de Novembro, Manaus/AM</p>
                  </div>
                </div>
                <div className="contato-item">
                  <div className="contato-item-icon">
                    <Clock size={16} color="#132B45" />
                  </div>
                  <div>
                    <p className="contato-item-label">Horário</p>
                    <p className="contato-item-value">Seg–Sex: 08h–17h · Sáb e Dom: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="location-card" data-anim="up">
              <div className="location-copy">
                <div className="location-icon" aria-hidden="true">
                  <MapPin size={22} />
                </div>
                <span className="sec-label">Atendimento online e presencial</span>
                <h3>
                  Nosso endereço<br /><em>em Manaus.</em>
                </h3>
                <p>
                  <strong style={{ color: "#132B45", fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase" }}>Escritório</strong><br />
                  Rua Luis Lopes, 32 — Parque 10 de Novembro, Manaus/AM · CEP 69055-755
                </p>
                <div className="location-note">
                  <Clock size={14} aria-hidden="true" />
                  <span>
                    Seg–Sex: 08h–17h · Sáb e Dom: Fechado.
                    Atendimento presencial somente após confirmação pelo WhatsApp.
                  </span>
                </div>
                <div className="location-actions">
                  <a
                    className="location-link"
                    href="https://www.google.com/maps/search/?api=1&query=Rua%20Luis%20Lopes%2C%2032%2C%20Parque%2010%20de%20Novembro%2C%20Manaus%2C%20AM%2C%2069055-755"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={14} /> Ver no Google Maps
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </div>
              </div>
              <div className="location-map">
                <iframe
                  title="Mapa do escritório Rodrigues e Castro Advocacia em Manaus"
                  src="https://www.google.com/maps?q=Rua+Luis+Lopes,+32,+Parque+10+de+Novembro,+Manaus,+AM,+69055-755&z=16&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="cta-final" aria-label="Agende sua consulta">
          <div className="wrap">
            <div className="cta-content">
              <div className="cta-gold-line" aria-hidden="true" />
              <h2 className="sec-h2">Pronto para resolver<br />sua questão jurídica?</h2>
              <p className="sec-lead">
                Fale agora com as advogadas da Rodrigues e Castro e receba
                orientação jurídica para o seu caso.
              </p>
              <div className="cta-actions">
                <a className="btn-gold" href={WA_PRIMARY} target="_blank" rel="noreferrer">
                  <WaIcon size={16} color="#132B45" /> Agendar consulta pelo WhatsApp
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a className="btn-outline" href={`mailto:${EMAIL}`}>
                  Enviar e-mail <ChevronRight size={15} />
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
                <Image src={IMG.logo} alt="Rodrigues e Castro Advocacia" width={230} height={55} />
                <p>
                  Advocacia com atuação em Direito Civil, Trabalhista e do Consumidor no
                  Amazonas. Transparência, ética e resultado.
                </p>
              </div>
              <div className="footer-col">
                <h4>Áreas</h4>
                {["Direito Civil", "Direito do Trabalho", "Direito do Consumidor"].map((a) => (
                  <a href="#atuacao" key={a}>
                    <ChevronRight size={12} /> {a}
                  </a>
                ))}
              </div>
              <div className="footer-col">
                <h4>Contato</h4>
                <a href={WA_ANNE} target="_blank" rel="noreferrer">
                  <WaIcon size={12} /> +55 92 98230-1415
                </a>
                <a href={WA_JULIANA} target="_blank" rel="noreferrer">
                  <WaIcon size={12} /> +55 92 98171-6233
                </a>
                <a href={`mailto:${EMAIL}`}>
                  <Mail size={12} /> {EMAIL}
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                  <Instagram size={12} /> @adv.rodriguesecastro
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <Link href="/proposta-comercial/rodriguesecastroadvocacia/politica-de-privacidade">
                  <ChevronRight size={12} /> Política de Privacidade
                </Link>
              </div>
            </div>
            <hr className="footer-line" />
            <div className="footer-bottom">
              <span>© 2026 Rodrigues e Castro Advocacia · OAB/AM</span>
              <span>
                Prévia conceitual por{" "}
                <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                  lumasites.com.br
                </a>
              </span>
            </div>
          </div>
        </footer>
      </main>

      {/* ── WHATSAPP FLOAT ── */}
      <a
        className="wa-float"
        href={WA_PRIMARY}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp da Rodrigues e Castro Advocacia (abre em nova aba)"
      >
        <WaIcon size={24} color="#fff" />
      </a>
    </>
  );
}
