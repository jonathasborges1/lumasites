"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ChevronRight,
  Instagram,
  Menu,
  X,
  Briefcase,
  FileText,
  Heart,
  Shield,
  Lock,
  FileCheck,
  MapPin,
  Globe,
  Plus,
  Minus,
} from "lucide-react";

/* ─── CONSTANTES ──────────────────────────────────────────── */
const WA = `https://wa.me/5532984954734?text=${encodeURIComponent(
  "Olá, Eduardo! Gostaria de agendar uma consulta.",
)}`;
const IG = "https://www.instagram.com/limaeduardo.adv/";

const IMG = {
  hero: "/images/eduardolima/eduardo-lima-advogado-juiz-de-fora-hero.jpeg",
  sobre: "/images/eduardolima/eduardo-lima-advogado-consultoria-juridica.jpeg",
  logo: "/images/eduardolima/eduardo-lima-consultoria-juridica-advocacia-logo.png",
};

/* ─── DADOS ───────────────────────────────────────────────── */
const navItems = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const WA_BASE = "https://wa.me/5532984954734?text=";

const especialidades = [
  {
    Icon: Briefcase,
    titulo: "Trabalhista",
    desc: "Rescisão, horas extras, verbas trabalhistas e proteção dos seus direitos como trabalhador.",
    cta: "Tenho uma dúvida trabalhista",
    msg: "Olá, Eduardo! Tenho uma dúvida trabalhista e gostaria de agendar uma consulta.",
  },
  {
    Icon: FileText,
    titulo: "Cível",
    desc: "Cobranças, contratos, reparação de danos e disputas entre particulares.",
    cta: "Tenho uma questão cível",
    msg: "Olá, Eduardo! Tenho uma questão cível e gostaria de agendar uma consulta.",
  },
  {
    Icon: Heart,
    titulo: "Família",
    desc: "Divórcio, guarda, alimentos e questões que afetam quem você mais ama.",
    cta: "Preciso falar sobre família",
    msg: "Olá, Eduardo! Preciso falar sobre uma questão de família e gostaria de agendar uma consulta.",
  },
  {
    Icon: Shield,
    titulo: "Previdenciário",
    desc: "BPC, auxílio-acidente, salário-maternidade e outros benefícios do INSS.",
    cta: "Meu benefício foi negado",
    msg: "Olá, Eduardo! Meu benefício previdenciário foi negado e gostaria de saber se tenho direito de recorrer. Preciso de uma consulta.",
  },
  {
    Icon: Lock,
    titulo: "Penal",
    desc: "Defesa em crimes de tráfico, Lei Maria da Penha e infrações de menor potencial ofensivo.",
    cta: "Preciso de defesa criminal",
    msg: "Olá, Eduardo! Tenho uma questão penal e preciso de orientação jurídica urgente.",
  },
  {
    Icon: FileCheck,
    titulo: "Extrajudicial",
    desc: "Contratos, notificações e acordos resolvidos sem necessidade de processo judicial.",
    cta: "Quero resolver sem processo",
    msg: "Olá, Eduardo! Preciso de assessoria jurídica extrajudicial e gostaria de conversar sobre minha situação.",
  },
];

const faqs = [
  {
    q: "Você atende em Juiz de Fora, Lima Duarte e no Brasil todo?",
    a: "Sim. O escritório Eduardo Lima está localizado na Rua Humberto Valério, 188, Bairro Progresso, em Juiz de Fora/MG. Eduardo também realiza atendimento presencial em Lima Duarte/MG e atendimento remoto para o Brasil todo por videochamada ou WhatsApp.",
  },
  {
    q: "Tenho uma dúvida trabalhista. Como sei se tenho um processo válido?",
    a: "O primeiro passo é relatar sua situação: demissão, horas não pagas, verbas não recebidas, assédio ou qualquer outra questão. Eduardo avalia os fatos e informa se há fundamento para ação e qual o caminho mais adequado. Entre em contato pelo WhatsApp para uma consulta inicial.",
  },
  {
    q: "Meu benefício do INSS foi negado. Ainda tenho chance?",
    a: "Sim. A negativa do INSS não é definitiva. Em muitos casos é possível recorrer administrativamente ou ingressar com ação judicial para garantir o benefício. Eduardo atua com BPC, auxílio-acidente, salário-maternidade e outros benefícios previdenciários. Conte sua situação e receba uma avaliação.",
  },
  {
    q: "O que é advocacia extrajudicial e quando ela se aplica?",
    a: "É a atuação jurídica que resolve conflitos, elabora contratos, envia notificações e formaliza acordos sem a necessidade de um processo judicial. É mais rápida, menos custosa e suficiente em muitas situações. Eduardo avalia se o seu caso pode ser resolvido por essa via antes de recomendar uma ação judicial.",
  },
  {
    q: "Atende casos de família como divórcio e guarda?",
    a: "Sim. Eduardo atua em questões de Direito de Família, incluindo divórcio consensual e litigioso, definição e revisão de guarda, fixação e revisão de alimentos, além de outras situações que envolvem relações familiares. O atendimento é presencial em Juiz de Fora e Lima Duarte, ou remoto para o Brasil todo por videochamada.",
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "Basta enviar uma mensagem pelo WhatsApp descrevendo sua situação. Eduardo responde, esclarece as dúvidas iniciais e, se necessário, agenda uma consulta para aprofundar a análise do caso, presencial em Juiz de Fora ou Lima Duarte, ou remoto para o Brasil todo por videochamada.",
  },
];

const steps = [
  {
    n: "01",
    title: "Primeiro contato",
    text: "Entre em contato pelo WhatsApp, conte sua situação e tire suas dúvidas iniciais sem compromisso.",
  },
  {
    n: "02",
    title: "Análise do caso",
    text: "Eduardo avalia a sua situação, esclarece seus direitos e apresenta a estratégia jurídica mais adequada.",
  },
  {
    n: "03",
    title: "Representação",
    text: "Com tudo definido, Eduardo conduz o processo enquanto você foca no que realmente importa.",
  },
];

/* ─── SVG WHATSAPP ───────────────────────────────────────── */
const WaIcon = ({ size = 17, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
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
    --bar:       52px;
    --nav:       72px;

    /* Paleta Eduardo Lima, extraída do logotipo */
    --navy:      #0D1C33;
    --navy-alt:  #162540;
    --navy-dk:   #080F1C;
    --ivory:     #F8F6F0;
    --ivory-dk:  #EDE8DE;
    --gold:      #AA8136;
    --gold-cta:  #C9A84C;
    --gold-dk:   #8A6628;
    --gold-lt:   #D4B06A;
    --white:     #FFFFFF;
    --text-on-dark:  rgba(248,246,240,.88);
    --muted-dark:    rgba(248,246,240,.52);
    --text-on-light: #0D1C33;
    --muted-light:   #4A5568;
    --line-dark:     rgba(248,246,240,.10);
    --line-light:    rgba(13,28,51,.10);
    --wa:        #25D366;
  }

  section[id] { scroll-margin-top: calc(var(--bar) + var(--nav) + 16px); }

  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
  }
  .skip-link {
    position: fixed; z-index: 1100; top: 8px; left: 8px;
    padding: 10px 14px; border-radius: 6px;
    background: var(--navy); color: var(--gold-lt); font-size: 14px; font-weight: 700;
    transform: translateY(-160%); transition: transform .15s;
  }
  .skip-link:focus { transform: translateY(0); }

  .el {
    overflow-x: clip;
    font-family: var(--el-body), 'Montserrat', system-ui, sans-serif;
    background: var(--ivory);
    color: var(--text-on-light);
  }

  /* ══ PREVIEW BAR ══════════════════════════════════════════ */
  .pre-bar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1001;
    min-height: var(--bar);
    padding: 7px 20px;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
    background: var(--navy-dk); text-align: center;
    border-bottom: 1px solid rgba(170,129,54,.2);
  }
  .pre-back {
    position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
    min-width: 36px; min-height: 36px; padding: 0 10px;
    display: inline-flex; align-items: center; gap: 6px;
    border-radius: 6px; color: var(--muted-dark);
    font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    transition: color .15s, background .15s;
  }
  .pre-back:hover { color: var(--gold-lt); background: rgba(255,255,255,.06); }
  .pre-line {
    display: flex; align-items: center; gap: 8px;
    color: var(--ivory); font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase;
  }
  .pre-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--gold); flex: none;
    animation: dot-pulse 1.8s ease-out infinite;
  }
  @keyframes dot-pulse {
    0%  { box-shadow: 0 0 0 0 rgba(170,129,54,.9); }
    70% { box-shadow: 0 0 0 9px rgba(170,129,54,0); }
    100%{ box-shadow: 0 0 0 0 rgba(170,129,54,0); }
  }
  .pre-sub { font-size: 11px; color: var(--muted-dark); font-family: var(--el-body), 'Montserrat', sans-serif; }
  .pre-sub a { color: var(--gold-lt); text-decoration: underline; text-underline-offset: 2px; }
  .pre-sub a:hover { color: #fff; }

  /* ══ NAV ══════════════════════════════════════════════════ */
  .nav {
    position: fixed; z-index: 1000;
    inset: var(--bar) 0 auto 0;
    height: var(--nav);
    transition: background .3s, box-shadow .3s;
  }
  .nav.scrolled {
    background: rgba(13,28,51,.97);
    box-shadow: 0 1px 0 var(--line-dark);
    backdrop-filter: blur(16px);
  }
  .nav-inner {
    width: min(1200px, calc(100% - 40px));
    margin: 0 auto; height: 100%;
    display: flex; align-items: center; justify-content: space-between; gap: 20px;
  }
  .brand {
    display: flex; align-items: center;
    width: 200px; height: 62px;
    flex: 0 0 auto;
  }
  .brand-logo {
    width: 100%; height: 100%;
    object-fit: contain; object-position: left center;
    filter: drop-shadow(0 5px 14px rgba(0,0,0,.18));
  }
  .nav-links { display: none; align-items: center; gap: 28px; }
  .nav-links a {
    font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
    color: var(--muted-dark);
    position: relative; padding: 8px 0;
    transition: color .2s;
  }
  .nav-links a::after {
    content: ""; position: absolute; bottom: -2px; left: 0; right: 0;
    height: 1px; background: var(--gold);
    transform: scaleX(0); transform-origin: left;
    transition: transform .25s ease;
  }
  .nav-links a:hover { color: var(--ivory); }
  .nav-links a:hover::after { transform: scaleX(1); }
  .nav-links .nav-cta-btn {
    min-height: 40px; padding: 0 20px;
    display: inline-flex; align-items: center; gap: 7px;
    border-radius: 6px;
    background: var(--gold); color: var(--navy);
    font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    transition: background .2s, transform .15s;
  }
  .nav-links .nav-cta-btn::after { display: none; }
  .nav-links .nav-cta-btn:hover { background: var(--gold-cta); transform: translateY(-1px); }
  .menu-btn {
    min-height: 44px; min-width: 44px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 6px;
    background: rgba(255,255,255,.08); color: var(--ivory);
    transition: background .2s;
  }
  .menu-btn:hover { background: rgba(255,255,255,.14); }

  /* ══ MOBILE MENU ══════════════════════════════════════════ */
  .mob-menu {
    position: fixed; z-index: 999;
    inset: calc(var(--bar) + var(--nav)) 0 auto 0;
    background: var(--navy);
    padding: 12px 20px 20px;
    display: flex; flex-direction: column;
    border-bottom: 1px solid var(--line-dark);
    box-shadow: 0 24px 48px rgba(0,0,0,.3);
    animation: mob-slide-in .2s ease;
  }
  @keyframes mob-slide-in {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: none; }
  }
  .mob-menu a {
    padding: 14px 0;
    border-bottom: 1px solid var(--line-dark);
    font-size: 13px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase;
    color: var(--muted-dark);
    transition: color .15s, padding-left .15s;
  }
  .mob-menu a:hover { color: var(--gold-lt); padding-left: 6px; }
  .mob-menu a:last-child { border-bottom: none; color: var(--gold-cta); font-weight: 700; }

  /* ══ WRAP ═════════════════════════════════════════════════ */
  .wrap { width: min(1200px, calc(100% - 40px)); margin: 0 auto; }

  /* ══ HERO ════════════════════════════════════════════════ */
  .hero {
    display: grid;
    grid-template-columns: 1fr 0.85fr;
    min-height: 100svh;
    padding-top: calc(var(--bar) + var(--nav));
    background: var(--navy);
  }
  .hero-left {
    display: flex; flex-direction: column; justify-content: center;
    padding: 56px 64px 72px max(40px, calc((100vw - 1200px) / 2 + 20px));
    position: relative; z-index: 1;
  }
  .hero-right {
    position: relative;
    overflow: hidden;
    min-height: 560px;
  }
  .hero-right::after {
    content: "";
    position: absolute; inset: 0;
    background:
      linear-gradient(to right, var(--navy) 0%, transparent 28%),
      linear-gradient(to top, var(--navy) 0%, transparent 30%);
    pointer-events: none;
    z-index: 1;
  }
  .hero-photo {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center top;
    opacity: 0;
    transition: opacity .9s ease;
  }
  .hero-ready .hero-photo { opacity: 1; }

  .hero-kicker {
    display: inline-flex; align-items: center; gap: 12px;
    margin-bottom: 24px;
    font-size: 10px; font-weight: 700; letter-spacing: .28em; text-transform: uppercase;
    color: var(--gold);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .6s ease .15s, transform .6s ease .15s;
  }
  .hero-kicker::before {
    content: ""; width: 24px; height: 1px; background: var(--gold); flex: none;
  }
  .hero-ready .hero-kicker { opacity: 1; transform: none; }

  .hero h1 {
    margin: 0;
    font-family: var(--el-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(44px, 5vw, 76px);
    font-weight: 600; line-height: 1.0; letter-spacing: -.01em;
    color: var(--ivory);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .65s ease .28s, transform .65s ease .28s;
  }
  .hero h1 em { font-style: italic; color: var(--gold-cta); }
  .hero.hero-ready h1 { opacity: 1; transform: none; }

  .hero-sub {
    margin: 24px 0 0; max-width: 480px;
    font-size: 15px; line-height: 1.85; color: var(--muted-dark);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .65s ease .42s, transform .65s ease .42s;
  }
  .hero-ready .hero-sub { opacity: 1; transform: none; }

  .hero-actions {
    display: flex; flex-wrap: wrap; gap: 12px;
    margin-top: 40px;
    opacity: 0; transform: translateY(14px);
    transition: opacity .6s ease .56s, transform .6s ease .56s;
  }
  .hero-ready .hero-actions { opacity: 1; transform: none; }

  .hero-trust {
    display: flex; gap: 24px; flex-wrap: wrap;
    margin-top: 48px; padding-top: 32px;
    border-top: 1px solid var(--line-dark);
    opacity: 0;
    transition: opacity .6s ease .72s;
  }
  .hero-ready .hero-trust { opacity: 1; }
  .trust-item { display: flex; flex-direction: column; gap: 3px; }
  .trust-item strong { font-size: 12px; font-weight: 700; color: var(--ivory); letter-spacing: .04em; }
  .trust-item span { font-size: 11px; color: var(--muted-dark); }

  /* ══ BUTTONS ══════════════════════════════════════════════ */
  .btn-gold {
    min-height: 52px; padding: 0 30px;
    display: inline-flex; align-items: center; gap: 10px;
    border-radius: 6px;
    background: var(--gold-cta); color: var(--navy);
    font-family: var(--el-body), 'Montserrat', sans-serif;
    font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
    box-shadow: 0 8px 24px rgba(201,168,76,.28);
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .btn-gold:hover { background: var(--gold); box-shadow: 0 12px 32px rgba(170,129,54,.36); transform: translateY(-1px); }
  .btn-gold:active { transform: translateY(1px); }

  .btn-outline-light {
    min-height: 52px; padding: 0 26px;
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 6px;
    border: 1.5px solid rgba(248,246,240,.22); background: transparent;
    color: var(--ivory);
    font-family: var(--el-body), 'Montserrat', sans-serif;
    font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
    transition: border-color .2s, background .2s, transform .15s;
  }
  .btn-outline-light:hover { border-color: var(--gold); background: rgba(170,129,54,.08); transform: translateY(-1px); }

  .btn-gold-lg {
    min-height: 58px; padding: 0 36px;
    display: inline-flex; align-items: center; gap: 12px;
    border-radius: 6px;
    background: var(--gold-cta); color: var(--navy);
    font-family: var(--el-body), 'Montserrat', sans-serif;
    font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
    box-shadow: 0 10px 32px rgba(201,168,76,.32);
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .btn-gold-lg:hover { background: var(--gold); box-shadow: 0 14px 40px rgba(170,129,54,.38); transform: translateY(-1px); }

  .btn-ghost-gold {
    min-height: 58px; padding: 0 30px;
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 6px;
    border: 1.5px solid rgba(170,129,54,.4); background: transparent;
    color: var(--gold-lt);
    font-family: var(--el-body), 'Montserrat', sans-serif;
    font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
    transition: border-color .2s, background .2s, color .2s, transform .15s;
  }
  .btn-ghost-gold:hover { border-color: var(--gold-cta); background: rgba(170,129,54,.08); color: var(--gold-cta); transform: translateY(-1px); }

  /* ══ CREDENTIALS STRIP ════════════════════════════════════ */
  .creds-strip {
    background: var(--navy-dk);
    border-top: 1px solid rgba(170,129,54,.2);
    border-bottom: 1px solid rgba(170,129,54,.2);
  }
  .creds-inner {
    width: min(1200px, calc(100% - 40px)); margin: 0 auto;
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: rgba(170,129,54,.12);
    list-style: none; padding: 0;
  }
  .cred-cell {
    background: var(--navy-dk); padding: 24px 28px;
    display: flex; flex-direction: column; gap: 4px;
    transition: background .2s;
  }
  .cred-cell:hover { background: var(--navy); }
  .cred-cell strong {
    font-family: var(--el-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 20px; font-weight: 600; color: var(--gold-cta); line-height: 1;
  }
  .cred-cell span {
    font-size: 10px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase;
    color: var(--muted-dark);
  }

  /* ══ SECTION BASE ═════════════════════════════════════════ */
  .section { padding: 100px 0; }
  .section.bg-ivory  { background: var(--ivory); }
  .section.bg-ivory-dk { background: var(--ivory-dk); }
  .section.bg-navy   { background: var(--navy); }
  .section.bg-navy-dk { background: var(--navy-dk); }

  .sec-label {
    display: inline-block; margin-bottom: 14px;
    font-size: 10px; font-weight: 700; letter-spacing: .28em; text-transform: uppercase;
    color: var(--gold);
  }
  .sec-label.on-light { color: var(--gold-dk); }

  .sec-h2 {
    margin: 0;
    font-family: var(--el-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(32px, 4vw, 54px); font-weight: 600; line-height: 1.06;
  }
  .sec-h2.on-dark { color: var(--ivory); }
  .sec-h2.on-light { color: var(--navy); }

  .sec-lead {
    margin: 18px 0 0; max-width: 600px;
    font-size: 16px; line-height: 1.85;
  }
  .sec-lead.on-dark { color: var(--muted-dark); }
  .sec-lead.on-light { color: var(--muted-light); }

  /* ══ MANIFESTO ════════════════════════════════════════════ */
  .manifesto-inner {
    max-width: 760px;
  }
  .manifesto-quote {
    font-family: var(--el-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(26px, 3.4vw, 46px); font-weight: 500; font-style: italic;
    line-height: 1.38; color: var(--navy);
    margin: 0 0 32px;
    padding-left: 32px;
    border-left: 3px solid var(--gold);
  }
  .manifesto-text {
    font-size: 16px; line-height: 1.9; color: var(--muted-light);
    max-width: 640px;
  }

  /* ══ ESPECIALIDADES ═══════════════════════════════════════ */
  .spec-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 2px; margin-top: 56px;
    background: rgba(170,129,54,.12);
    border: 2px solid rgba(170,129,54,.12);
    border-radius: 10px; overflow: hidden;
  }
  .spec-card {
    background: var(--navy-alt);
    padding: 36px 32px;
    display: flex; flex-direction: column; gap: 16px;
    transition: background .25s;
    position: relative;
  }
  .spec-card::after {
    content: "";
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px; background: var(--gold);
    transform: scaleX(0); transform-origin: left;
    transition: transform .3s ease;
  }
  .spec-card:hover { background: #1A2E4A; }
  .spec-card:hover::after { transform: scaleX(1); }
  .spec-icon {
    width: 48px; height: 48px; border-radius: 8px;
    background: rgba(170,129,54,.12);
    display: flex; align-items: center; justify-content: center;
    color: var(--gold-cta);
    transition: background .25s;
  }
  .spec-card:hover .spec-icon { background: rgba(170,129,54,.22); }
  .spec-title {
    font-family: var(--el-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 22px; font-weight: 600; color: var(--ivory);
    margin: 0;
  }
  .spec-desc { font-size: 14px; line-height: 1.75; color: var(--muted-dark); margin: 0; }
  .spec-cta {
    margin-top: auto; padding-top: 20px;
    border-top: 1px solid rgba(170,129,54,.14);
    display: flex;
  }
  .spec-cta a {
    display: inline-flex; align-items: center; gap: 7px;
    font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
    color: var(--gold-lt);
    padding: 8px 0;
    transition: color .2s, gap .2s;
  }
  .spec-cta a:hover { color: var(--gold-cta); gap: 10px; }

  /* ══ FAQ ═══════════════════════════════════════════════════ */
  .faq-list { margin-top: 52px; display: flex; flex-direction: column; gap: 8px; max-width: 860px; }
  .faq-item {
    border-radius: 8px;
    border: 1px solid var(--line-light);
    overflow: hidden;
    transition: border-color .2s, box-shadow .2s;
    background: #fff;
  }
  .faq-item.open {
    border-color: var(--gold);
    box-shadow: 0 4px 20px rgba(170,129,54,.10);
  }
  .faq-btn {
    width: 100%; padding: 20px 24px;
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
    text-align: left;
    font-size: 15px; font-weight: 600; color: var(--navy);
    transition: color .2s;
  }
  .faq-item.open .faq-btn { color: var(--gold-dk); }
  .faq-icon { flex: none; color: var(--gold); }
  .faq-answer {
    display: grid; grid-template-rows: 0fr;
    transition: grid-template-rows .32s ease;
  }
  .faq-item.open .faq-answer { grid-template-rows: 1fr; }
  .faq-answer-inner { overflow: hidden; }
  .faq-answer p {
    margin: 0; padding: 0 24px 20px;
    font-size: 14px; line-height: 1.9; color: var(--muted-light);
  }

  /* ══ COMO FUNCIONA ════════════════════════════════════════ */
  .steps-wrap { margin-top: 64px; position: relative; }
  .steps-line-track {
    position: absolute;
    top: 34px; left: calc(100% / 6); right: calc(100% / 6);
    height: 1px; background: var(--line-light);
    overflow: hidden;
  }
  .steps-line-fill {
    position: absolute; inset: 0;
    background: linear-gradient(to right, var(--gold), var(--gold-cta));
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
    text-align: center; padding: 0 32px;
  }
  .step-circle {
    width: 68px; height: 68px; border-radius: 50%;
    background: var(--navy);
    border: 2px solid var(--gold);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--el-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 24px; font-weight: 600; color: var(--gold-cta);
    flex: none; position: relative; z-index: 1;
    margin-bottom: 28px;
    transition: background .3s, border-color .3s, transform .3s;
  }
  .step-col:hover .step-circle {
    background: var(--gold); border-color: var(--gold);
    color: var(--navy); transform: scale(1.08);
  }
  .step-title {
    font-family: var(--el-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 22px; font-weight: 600; color: var(--navy);
    margin: 0 0 12px;
  }
  .step-text { font-size: 14px; line-height: 1.85; color: var(--muted-light); }

  /* ══ SOBRE ════════════════════════════════════════════════ */
  .sobre-grid {
    display: grid; grid-template-columns: 0.9fr 1fr;
    gap: 0; border-radius: 12px; overflow: hidden;
    box-shadow: 0 24px 64px rgba(0,0,0,.2);
    margin-top: 64px;
  }
  .sobre-photo-col {
    position: relative;
    background: var(--navy-alt);
    min-height: 560px; overflow: hidden;
  }
  .sobre-photo {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center top;
    transition: transform .5s ease;
  }
  .sobre-photo-col:hover .sobre-photo { transform: scale(1.03); }
  .sobre-photo-col::after {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(to right, transparent 70%, var(--ivory) 100%);
    pointer-events: none;
    z-index: 1;
  }
  .sobre-text-col {
    padding: 64px 56px;
    background: var(--ivory);
    display: flex; flex-direction: column; justify-content: center;
  }
  .sobre-name {
    font-family: var(--el-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 38px; font-weight: 600; color: var(--navy);
    margin: 0 0 4px;
  }
  .sobre-role {
    display: block; margin-bottom: 4px;
    font-size: 10px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
    color: var(--gold-dk);
  }
  .sobre-oab {
    display: block; margin-bottom: 32px;
    font-size: 12px; font-weight: 500; color: var(--muted-light);
  }
  .sobre-text-col p { margin: 0 0 16px; font-size: 15px; line-height: 1.9; color: var(--muted-light); }
  .sobre-text-col p:last-of-type { margin-bottom: 0; }
  .sobre-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
  .sobre-tag {
    padding: 6px 14px; border-radius: 4px;
    border: 1.5px solid var(--line-light);
    font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
    color: var(--muted-light);
    transition: border-color .2s, background .2s, color .2s, transform .2s;
  }
  .sobre-tag:hover { border-color: var(--gold); background: rgba(170,129,54,.06); color: var(--gold-dk); transform: translateY(-2px); }

  /* ══ QUOTE BANNER ════════════════════════════════════════ */
  .quote-banner {
    padding: 88px 0;
    background: var(--navy);
    position: relative; overflow: hidden;
  }
  .quote-banner::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 80% at 15% 50%, rgba(170,129,54,.10) 0%, transparent 60%),
      radial-gradient(ellipse 40% 60% at 85% 50%, rgba(201,168,76,.06) 0%, transparent 55%);
    pointer-events: none;
  }
  .quote-inner {
    position: relative; z-index: 1;
    max-width: 760px; margin: 0 auto; text-align: center;
  }
  .quote-line {
    width: 40px; height: 1.5px; background: var(--gold);
    margin: 0 auto 28px;
  }
  .quote-text {
    font-family: var(--el-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(24px, 3.2vw, 42px); font-style: italic; font-weight: 500;
    color: var(--ivory); line-height: 1.48;
    margin: 0 0 28px;
  }
  .quote-author {
    font-size: 10px; font-weight: 700; letter-spacing: .24em; text-transform: uppercase;
    color: var(--gold);
  }

  /* ══ CTA FINAL ════════════════════════════════════════════ */
  .cta-final {
    padding: 104px 0;
    background: var(--navy-dk);
    position: relative; overflow: hidden;
    border-top: 1px solid rgba(170,129,54,.2);
  }
  .cta-final::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 70% 80% at 50% 100%, rgba(170,129,54,.07) 0%, transparent 60%);
    pointer-events: none;
  }
  .cta-content {
    position: relative; z-index: 1;
    max-width: 700px; margin: 0 auto; text-align: center;
  }
  .cta-actions {
    display: flex; flex-wrap: wrap; gap: 14px; justify-content: center;
    margin-top: 40px;
  }

  /* ══ FOOTER ══════════════════════════════════════════════ */
  .footer {
    background: var(--navy-dk);
    color: var(--muted-dark);
    font-size: 13px; line-height: 1.7;
    border-top: 1px solid rgba(170,129,54,.14);
  }
  .footer-body {
    padding: 72px 0 52px;
    display: grid; grid-template-columns: 1.8fr 1fr 1fr;
    gap: 56px;
  }
  .footer-logo {
    width: 286px; height: auto; max-width: 100%;
    margin: -14px 0 18px;
    filter: drop-shadow(0 12px 28px rgba(0,0,0,.22));
  }
  .footer-brand .footer-role {
    display: block; margin-bottom: 4px;
    font-size: 9px; font-weight: 700; letter-spacing: .24em; text-transform: uppercase;
    color: var(--gold);
  }
  .footer-brand .footer-oab {
    display: block; margin-bottom: 20px;
    font-size: 12px; color: rgba(248,246,240,.45);
  }
  .footer-brand p { margin: 0 0 8px; max-width: 300px; font-size: 13px; }
  .footer-addr {
    font-size: 12px; color: rgba(248,246,240,.4); line-height: 1.6; margin-top: 4px;
  }
  .footer-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 20px; }
  .footer-tag {
    padding: 4px 10px; border-radius: 4px;
    border: 1px solid rgba(248,246,240,.10);
    font-size: 10px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
    color: rgba(248,246,240,.4);
    transition: border-color .2s, color .2s;
  }
  .footer-tag:hover { border-color: var(--gold); color: var(--gold-lt); }
  .footer-col h4 {
    margin: 0 0 18px;
    font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--ivory);
  }
  .footer-col a {
    display: flex; align-items: center; gap: 8px;
    color: rgba(248,246,240,.5); padding: 5px 0; font-size: 13px;
    transition: color .15s, gap .15s;
  }
  .footer-col a:hover { color: var(--gold-lt); gap: 12px; }
  .footer-line { border: none; border-top: 1px solid rgba(248,246,240,.06); margin: 0; }
  .footer-bottom {
    padding: 20px 0;
    display: flex; flex-wrap: wrap; gap: 10px;
    align-items: center; justify-content: space-between;
    font-size: 12px; color: rgba(248,246,240,.4);
  }
  .footer-bottom a { color: var(--gold-lt); font-weight: 600; transition: color .15s; }
  .footer-bottom a:hover { color: var(--ivory); }

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

  /* ══ FOCUS VISIBLE ════════════════════════════════════════ */
  a:focus-visible, button:focus-visible {
    outline: none; border-radius: 4px;
    box-shadow: 0 0 0 3px var(--navy), 0 0 0 6px var(--gold-cta);
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

  /* ══ ATENDIMENTO ══════════════════════════════════════════ */
  .atend-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 24px; margin-top: 56px;
  }
  .atend-card {
    padding: 44px 40px;
    border-radius: 10px;
    display: flex; flex-direction: column; gap: 20px;
    position: relative; overflow: hidden;
  }
  .atend-card.presencial {
    background: var(--navy);
    border: 1px solid rgba(170,129,54,.2);
  }
  .atend-card.online {
    background: var(--ivory-dk);
    border: 1px solid var(--line-light);
  }
  .atend-icon {
    width: 52px; height: 52px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    flex: none;
  }
  .atend-card.presencial .atend-icon { background: rgba(170,129,54,.14); color: var(--gold-cta); }
  .atend-card.online .atend-icon { background: rgba(13,28,51,.08); color: var(--navy); }
  .atend-mode {
    font-size: 10px; font-weight: 700; letter-spacing: .26em; text-transform: uppercase;
  }
  .atend-card.presencial .atend-mode { color: var(--gold); }
  .atend-card.online .atend-mode { color: var(--gold-dk); }
  .atend-title {
    font-family: var(--el-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 30px; font-weight: 600; line-height: 1.1; margin: 0;
  }
  .atend-card.presencial .atend-title { color: var(--ivory); }
  .atend-card.online .atend-title { color: var(--navy); }
  .atend-body { display: flex; flex-direction: column; gap: 12px; }
  .atend-row {
    display: flex; align-items: flex-start; gap: 12px;
    padding: 14px 16px; border-radius: 8px;
  }
  .atend-card.presencial .atend-row { background: rgba(248,246,240,.05); }
  .atend-card.online .atend-row { background: rgba(13,28,51,.05); }
  .atend-row-icon { flex: none; margin-top: 2px; }
  .atend-card.presencial .atend-row-icon { color: var(--gold); }
  .atend-card.online .atend-row-icon { color: var(--navy-alt); }
  .atend-row-text { display: flex; flex-direction: column; gap: 2px; }
  .atend-row-text strong {
    font-size: 13px; font-weight: 700;
  }
  .atend-card.presencial .atend-row-text strong { color: var(--ivory); }
  .atend-card.online .atend-row-text strong { color: var(--navy); }
  .atend-row-text span {
    font-size: 12px; line-height: 1.6;
  }
  .atend-card.presencial .atend-row-text span { color: var(--muted-dark); }
  .atend-card.online .atend-row-text span { color: var(--muted-light); }
  .atend-divider {
    width: 32px; height: 1.5px; margin: 4px 0;
  }
  .atend-card.presencial .atend-divider { background: rgba(170,129,54,.3); }
  .atend-card.online .atend-divider { background: rgba(13,28,51,.15); }

  /* ══ MAP ══════════════════════════════════════════════════ */
  .map-wrap {
    margin-top: 24px;
    border-radius: 10px; overflow: hidden;
    border: 1px solid var(--line-light);
    box-shadow: 0 8px 32px rgba(13,28,51,.10);
    height: 380px;
    position: relative;
  }
  .map-wrap iframe {
    width: 100%; height: 100%;
    border: none; display: block;
  }
  .map-label {
    position: absolute; bottom: 16px; left: 16px;
    background: var(--navy);
    color: var(--ivory);
    padding: 10px 16px; border-radius: 8px;
    font-size: 12px; font-weight: 600;
    display: flex; align-items: center; gap: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,.3);
    pointer-events: none;
    border: 1px solid rgba(170,129,54,.3);
  }
  .map-label svg { color: var(--gold-cta); flex: none; }

  /* ══ RESPONSIVE ═══════════════════════════════════════════ */
  @media (min-width: 1025px) {
    .nav-links { display: flex; }
    .menu-btn { display: none; }
  }

  @media (max-width: 1024px) {
    .spec-grid { grid-template-columns: repeat(2, 1fr); }
    .creds-inner { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .sobre-grid { grid-template-columns: 1fr; }
    .sobre-photo-col { min-height: 300px; }
    .sobre-photo-col::after { background: linear-gradient(to top, var(--ivory) 0%, transparent 40%); }
    .sobre-text-col { padding: 40px 28px; }
    .footer-body { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 900px) {
    .atend-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 767px) {
    :root { --nav: 62px; }
    .wrap, .nav-inner { width: min(100% - 32px, 1200px); }
    .brand { width: 148px; height: 48px; }
    .hero {
      grid-template-columns: 1fr;
      grid-template-areas: "photo" "text";
      min-height: auto;
    }
    .hero-left {
      grid-area: text;
      padding: 40px 20px 56px;
    }
    .hero-right {
      grid-area: photo;
      height: 70vw;
      min-height: 260px;
      max-height: 360px;
    }
    .hero-right::after {
      background:
        linear-gradient(to top, var(--navy) 0%, transparent 35%);
    }
    .hero h1 { font-size: clamp(36px, 10vw, 52px); }
    .hero-sub { font-size: 14px; }
    .hero-actions a { width: 100%; justify-content: center; }
    .spec-grid { grid-template-columns: 1fr; }
    .steps-timeline { grid-template-columns: 1fr; }
    .steps-timeline .step-col { padding: 0 16px 32px; }
    .steps-line-track { display: none; }
    .cta-actions a { width: 100%; justify-content: center; }
    .footer-body { grid-template-columns: 1fr; gap: 32px; padding: 48px 0 36px; }
    .footer-col a { min-height: 44px; padding: 10px 0; }
    .section { padding: 72px 0; }
    .creds-inner { width: min(100% - 32px, 1200px); grid-template-columns: repeat(2, 1fr); }
    .cred-cell { padding: 18px; }
    .pre-back span { display: none; }
    .sobre-text-col { padding: 36px 20px; }
    .manifesto-quote { font-size: clamp(20px, 5.5vw, 32px); padding-left: 20px; }
  }

  /* ══ REDUCED MOTION ═══════════════════════════════════════ */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    html { scroll-behavior: auto; }
    .hero-photo, .hero-kicker, .hero h1,
    .hero-sub, .hero-actions, .hero-trust { opacity: 1; transform: none; transition: none; }
    [data-anim] { opacity: 1; transform: none; transition: none; }
  }
`;

/* ─── COMPONENT ───────────────────────────────────────────── */
export default function EduardoLimaPropPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lineRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.08 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { el.classList.add("drawn"); obs.disconnect(); }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      {/* PREVIEW BAR */}
      <div className="pre-bar" role="note" aria-label="Aviso de proposta">
        <a className="pre-back" href="/proposta-comercial/" aria-label="Voltar para propostas comerciais">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </a>
        <div className="pre-line">
          <span className="pre-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="pre-sub">
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br<span className="sr-only"> (abre em nova aba)</span>
          </a>
        </span>
      </div>

      {/* NAV */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Navegação principal">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <Image
              className="brand-logo"
              src={IMG.logo}
              alt="Eduardo Lima Consultoria Jurídica e Advocacia"
              width={945}
              height={425}
              priority
            />
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <a className="nav-cta-btn" href={WA} target="_blank" rel="noreferrer">
              <WaIcon size={13} /> Agendar consulta
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

      {menuOpen && (
        <nav id="mob-menu" className="mob-menu" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            Agendar consulta<span className="sr-only"> (abre em nova aba)</span>
          </a>
        </nav>
      )}

      <main id="conteudo" className="el">

        {/* ── HERO ── */}
        <section
          id="top"
          className={`hero${heroReady ? " hero-ready" : ""}`}
          aria-label="Eduardo Lima, Advogado"
        >
          <div className="hero-left">
            <span className="hero-kicker">Advogado · Juiz de Fora, Lima Duarte e Brasil todo</span>
            <h1>
              Seu direito tem<br />
              nome e <em>endereço.</em>
            </h1>
            <p className="hero-sub">
              Atendimento em Direito Trabalhista, Cível, Família, Previdenciário,
              Penal e Advocacia Extrajudicial, com clareza, compromisso e foco
              na resolução do seu caso.
            </p>
            <div className="hero-actions">
              <a className="btn-gold" href={WA} target="_blank" rel="noreferrer">
                <WaIcon size={16} /> Agendar consulta
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
              <a className="btn-outline-light" href="#especialidades">
                Ver especialidades <ChevronRight size={15} />
              </a>
            </div>
            <div className="hero-trust">
              {[
                { v: "OAB/MG 246.863", l: "Registro profissional" },
                { v: "Juiz de Fora", l: "Lima Duarte e Brasil" },
                { v: "6 áreas", l: "Direito completo" },
                { v: "Extrajudicial", l: "Sem processo judicial" },
              ].map((t) => (
                <div className="trust-item" key={t.l}>
                  <strong>{t.v}</strong>
                  <span>{t.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right" aria-hidden="true">
            <Image
              className="hero-photo"
              src={IMG.hero}
              alt=""
              role="presentation"
              fill
              sizes="(max-width: 767px) 100vw, 46vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
        </section>

        {/* ── CREDENTIALS STRIP ── */}
        <section className="creds-strip" aria-label="Credenciais">
          <ul className="creds-inner">
            {[
              { v: "OAB/MG 246.863", l: "Registro profissional" },
              { v: "Presencial", l: "Juiz de Fora e Lima Duarte" },
              { v: "6 Especialidades", l: "Cobertura jurídica ampla" },
              { v: "Extrajudicial", l: "Soluções sem processo" },
            ].map((c) => (
              <li className="cred-cell" key={c.l}>
                <strong>{c.v}</strong>
                <span>{c.l}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── MANIFESTO ── */}
        <section className="section bg-ivory" aria-label="Manifesto">
          <div className="wrap">
            <div className="manifesto-inner" data-anim="up">
              <span className="sec-label on-light">Consultoria Jurídica</span>
              <p className="manifesto-quote">
                Você não precisa entender de lei para conhecer os seus direitos.
                Para isso existe um advogado.
              </p>
              <p className="manifesto-text">
                Muitas pessoas chegam sem saber exatamente o que pode ser feito
                pela situação delas. O trabalho começa exatamente aí, ouvir,
                entender o problema e apresentar um caminho claro e resolutivo.
                Trabalhista, cível, família, previdenciário, penal ou extrajudicial:
                cada caso recebe atenção e dedicação desde o primeiro contato.
              </p>
            </div>
          </div>
        </section>

        {/* ── ESPECIALIDADES ── */}
        <section
          id="especialidades"
          className="section bg-navy"
          aria-label="Especialidades"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Especialidades</span>
              <h2 className="sec-h2 on-dark">Direito completo.<br />Para situações reais.</h2>
              <p className="sec-lead on-dark">
                Cada área de atuação cobre situações concretas que afetam
                a vida das pessoas. Aqui você encontra orientação jurídica
                em todas elas.
              </p>
            </div>
            <div className="spec-grid">
              {especialidades.map(({ Icon, titulo, desc, cta, msg }, i) => (
                <div
                  className="spec-card"
                  key={titulo}
                  data-anim="up"
                  data-delay={String((i % 3) + 1)}
                >
                  <div className="spec-icon" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <h3 className="spec-title">{titulo}</h3>
                  <p className="spec-desc">{desc}</p>
                  <div className="spec-cta">
                    <a
                      href={`${WA_BASE}${encodeURIComponent(msg)}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${cta}, falar com Eduardo pelo WhatsApp (abre em nova aba)`}
                    >
                      <WaIcon size={13} /> {cta}
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ATENDIMENTO ── */}
        <section className="section bg-ivory-dk" aria-label="Modalidades de atendimento">
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label on-light">Atendimento</span>
              <h2 className="sec-h2 on-light">Presencial ou online.<br />Você escolhe.</h2>
              <p className="sec-lead on-light">
                Eduardo Lima atende de forma presencial em Juiz de Fora e Lima Duarte/MG
                e também realiza consultas remotas para o Brasil todo.
              </p>
            </div>
            <div className="atend-grid">

              {/* Card Presencial */}
              <div className="atend-card presencial" data-anim="left">
                <div className="atend-icon" aria-hidden="true">
                  <MapPin size={26} />
                </div>
                <span className="atend-mode">Presencial</span>
                <h3 className="atend-title">Escritório em<br />Juiz de Fora/MG</h3>
                <div className="atend-divider" aria-hidden="true" />
                <div className="atend-body">
                  <div className="atend-row">
                    <MapPin size={16} className="atend-row-icon" aria-hidden="true" />
                    <div className="atend-row-text">
                      <strong>Juiz de Fora, MG</strong>
                      <span>
                        Rua Humberto Valério, 188<br />
                        Bairro Progresso · CEP 36050-280
                      </span>
                    </div>
                  </div>
                  <div className="atend-row">
                    <MapPin size={16} className="atend-row-icon" aria-hidden="true" />
                    <div className="atend-row-text">
                      <strong>Lima Duarte, MG</strong>
                      <span>Atendimento presencial também disponível na cidade.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Online */}
              <div className="atend-card online" data-anim="right">
                <div className="atend-icon" aria-hidden="true">
                  <Globe size={26} />
                </div>
                <span className="atend-mode">Online</span>
                <h3 className="atend-title">Consulta remota<br />para todo o Brasil</h3>
                <div className="atend-divider" aria-hidden="true" />
                <div className="atend-body">
                  <div className="atend-row">
                    <Globe size={16} className="atend-row-icon" aria-hidden="true" />
                    <div className="atend-row-text">
                      <strong>Videochamada ou WhatsApp</strong>
                      <span>Consulta jurídica sem sair de casa, com a mesma qualidade do atendimento presencial.</span>
                    </div>
                  </div>
                  <div className="atend-row">
                    <Globe size={16} className="atend-row-icon" aria-hidden="true" />
                    <div className="atend-row-text">
                      <strong>Advocacia Extrajudicial remota</strong>
                      <span>Contratos, notificações e acordos conduzidos inteiramente à distância.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Mapa */}
            <div className="map-wrap" data-anim="up" data-delay="2">
              <iframe
                src="https://maps.google.com/maps?q=Rua+Humberto+Val%C3%A9rio,+188,+Bairro+Progresso,+Juiz+de+Fora,+MG,+36050-280,+Brazil&output=embed&z=17&hl=pt-BR"
                title="Localização do escritório Eduardo Lima, Rua Humberto Valério, 188, Bairro Progresso, Juiz de Fora/MG"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-label" aria-hidden="true">
                <MapPin size={14} />
                Rua Humberto Valério, 188 · Progresso · Juiz de Fora/MG
              </div>
            </div>

          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section
          id="como-funciona"
          className="section bg-ivory-dk"
          aria-label="Como funciona"
        >
          <div className="wrap">
            <div data-anim="up" style={{ textAlign: "center" }}>
              <span className="sec-label on-light">Processo</span>
              <h2 className="sec-h2 on-light">Como funciona o atendimento.</h2>
              <p className="sec-lead on-light" style={{ margin: "18px auto 0" }}>
                Um caminho simples, do primeiro contato até a representação completa.
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
                    <div className="step-circle" aria-hidden="true">{s.n}</div>
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-text">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section
          id="sobre"
          className="section bg-ivory"
          aria-label="Sobre Eduardo Lima"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label on-light">Sobre</span>
              <h2 className="sec-h2 on-light">Eduardo Lima</h2>
            </div>
            <div className="sobre-grid">
              <div className="sobre-photo-col" data-anim="left">
                <Image
                  className="sobre-photo"
                  src={IMG.sobre}
                  alt=""
                  role="presentation"
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                />
              </div>
              <div className="sobre-text-col" data-anim="right">
                <h3 className="sobre-name">Eduardo Lima</h3>
                <span className="sobre-role">Advogado</span>
                <span className="sobre-oab">
                  OAB/MG 246.863 · Faculdade Doctum, Juiz de Fora/MG
                </span>
                <p>
                  Formado em Direito pela Faculdade Doctum de Juiz de Fora,
                  Eduardo Lima atua com foco e comprometimento no atendimento
                  jurídico presencial em Juiz de Fora e Lima Duarte/MG.
                </p>
                <p>
                  Acredita que cada pessoa que chega com uma dúvida jurídica
                  merece uma resposta clara, honesta e acessível, sem jargão,
                  sem enrolação. O objetivo é sempre o mesmo: entender a
                  situação real e encontrar o caminho mais eficiente para
                  resolver.
                </p>
                <p>
                  Atua nas áreas de Direito Trabalhista, Cível, Família,
                  Previdenciário, Penal e Advocacia Extrajudicial, cobrindo
                  as demandas jurídicas mais comuns na vida das pessoas.
                </p>
                <div className="sobre-tags">
                  {["Trabalhista", "Cível", "Família", "Previdenciário", "Penal", "Extrajudicial"].map((t) => (
                    <span className="sobre-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="section bg-ivory" aria-label="Perguntas frequentes">
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label on-light">Dúvidas</span>
              <h2 className="sec-h2 on-light">Perguntas frequentes.</h2>
              <p className="sec-lead on-light">
                Respostas diretas sobre como funciona o atendimento em Juiz de Fora,
                Lima Duarte e no Brasil todo.
              </p>
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

        {/* ── QUOTE BANNER ── */}
        <section className="quote-banner" aria-label="Mensagem">
          <div className="wrap">
            <div className="quote-inner" data-anim="up">
              <div className="quote-line" aria-hidden="true" />
              <p className="quote-text">
                Cada processo começa com uma pessoa que precisa de uma resposta.
                Esse é o ponto de partida.
              </p>
              <span className="quote-author">Eduardo Lima · Advogado</span>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contato" className="cta-final" aria-label="Agendamento">
          <div className="wrap">
            <div className="cta-content" data-anim="up">
              <span className="sec-label">Primeiro passo</span>
              <h2 className="sec-h2 on-dark">
                Sua situação tem solução.<br />Vamos conversar.
              </h2>
              <p className="sec-lead on-dark" style={{ margin: "20px auto 0" }}>
                Entre em contato pelo WhatsApp, conte o que está acontecendo
                e Eduardo apresenta o caminho jurídico mais adequado para o seu caso.
              </p>
              <div className="cta-actions">
                <a className="btn-gold-lg" href={WA} target="_blank" rel="noreferrer">
                  <WaIcon size={20} /> Agendar consulta
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a className="btn-ghost-gold" href={IG} target="_blank" rel="noreferrer">
                  <Instagram size={17} /> @limaeduardo.adv
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
                <Image
                  className="footer-logo"
                  src={IMG.logo}
                  alt="Eduardo Lima Consultoria Jurídica e Advocacia"
                  width={945}
                  height={425}
                />
                <span className="footer-role">Consultoria Jurídica e Advocacia</span>
                <span className="footer-oab">OAB/MG 246.863</span>
                <p>
                  Atendimento presencial em Juiz de Fora e Lima Duarte/MG, e remoto para o Brasil todo, nas
                  áreas de Trabalhista, Cível, Família, Previdenciário, Penal
                  e Advocacia Extrajudicial.
                </p>
                <p className="footer-addr">
                  Rua Humberto Valério, 188<br />
                  Bairro Progresso · Juiz de Fora/MG<br />
                  CEP 36050-280
                </p>
                <div className="footer-tags">
                  {["Trabalhista", "Cível", "Família", "Previdenciário", "Penal", "Extrajudicial"].map((t) => (
                    <span className="footer-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <nav className="footer-col" aria-label="Navegação no rodapé">
                <h4>Navegação</h4>
                <a href="#especialidades">Especialidades</a>
                <a href="#como-funciona">Como Funciona</a>
                <a href="#sobre">Sobre</a>
                <a href={WA} target="_blank" rel="noreferrer">
                  Agendar consulta
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
                  <Instagram size={14} /> @limaeduardo.adv
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </div>
            <hr className="footer-line" />
            <div className="footer-bottom">
              <span>© 2026 Eduardo Lima · Consultoria Jurídica e Advocacia · OAB/MG 246.863</span>
              <span>
                Site por{" "}
                <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                  LumaSites<span className="sr-only"> (abre em nova aba)</span>
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
        aria-label="Falar com Eduardo Lima pelo WhatsApp (abre em nova aba)"
      >
        <WaIcon size={27} color="white" />
      </a>
    </>
  );
}
