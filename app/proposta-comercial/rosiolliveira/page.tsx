"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart2,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Compass,
  Instagram,
  Lightbulb,
  MessageSquare,
  Shield,
  TrendingUp,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";

// ── Config ─────────────────────────────────────────────────────────────────────
const WA = (msg = "Olá, Rosi! Gostaria de solicitar um diagnóstico contábil para minha empresa.") =>
  `https://wa.me/5592982490717?text=${encodeURIComponent(msg)}`;

const IG_URL = "https://www.instagram.com/rosiolliveiracontadora/";

const imgs = {
  logoGold: "/images/rosiolliveira/logo-gold.webp",
  hero:     "/images/rosiolliveira/rosi-studio.jpg",
  palestra: "/images/rosiolliveira/rosi-palestra.jpg",
  revista:  "/images/rosiolliveira/rosi-revista.jpg",
  perfil:   "/images/rosiolliveira/rosi-perfil.jpg",
  ig:       [
    { src: "/images/rosiolliveira/rosi-palestrante-card.jpg", title: "Contabilidade na pratica" },
    { src: "/images/rosiolliveira/ig-strategy.jpg", title: "Contabilidade estrategica" },
    { src: "/images/rosiolliveira/ig-tax-case.jpg", title: "Planejamento tributario" },
    { src: "/images/rosiolliveira/ig-risk.jpg", title: "Protecao empresarial" },
    { src: "/images/rosiolliveira/ig-diagnosis.jpg", title: "Diagnostico fiscal" },
    { src: "/images/rosiolliveira/ig-desire.jpg", title: "Mentalidade de crescimento" },
  ],
};

// ── Data ───────────────────────────────────────────────────────────────────────
const navItems = [
  { href: "#sobre",       label: "Sobre" },
  { href: "#servicos",    label: "Serviços" },
  { href: "#diferenciais",label: "Diferenciais" },
  { href: "#processo",    label: "Processo" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato",     label: "Contato" },
];

const stats = [
  { value: 10,    suffix: "+", label: "Anos de Mercado" },
  { value: 200,   suffix: "+", label: "Empresas Atendidas" },
  { value: 5000,  suffix: "+", label: "Obrigações Entregues" },
  { value: 5,     prefix: "R$", suffix: "M+", label: "Economia Tributária" },
];

const services = [
  {
    Icon: BarChart2,
    title: "Assessoria Contábil",
    desc: "Estruturamos a contabilidade com rigor técnico e visão gerencial — relatórios precisos e suporte estratégico à sua gestão.",
  },
  {
    Icon: Shield,
    title: "Planejamento Tributário",
    desc: "Reduzimos sua carga tributária dentro da lei. Estratégia fiscal que transforma obrigação em vantagem competitiva.",
  },
  {
    Icon: Users,
    title: "Departamento Pessoal",
    desc: "Administramos sua folha com precisão, sigilo e total aderência à legislação trabalhista vigente.",
  },
  {
    Icon: Briefcase,
    title: "Consultoria Empresarial",
    desc: "Visão estratégica para decisões que impactam o crescimento — do planejamento à execução.",
  },
  {
    Icon: Wallet,
    title: "BPO Financeiro",
    desc: "Assumimos seus processos financeiros com governança, indicadores e controle estratégico do fluxo de caixa.",
  },
  {
    Icon: ClipboardCheck,
    title: "Regularização Empresarial",
    desc: "Cuidamos de todo o ciclo societário — da abertura à manutenção — com assessoria contínua.",
  },
];

const differentials = [
  {
    Icon: MessageSquare,
    title: "Atendimento próximo",
    desc: "Você não é só um CNPJ. Atendimento personalizado com escuta real e presença constante.",
  },
  {
    Icon: Compass,
    title: "Visão estratégica",
    desc: "Contabilidade orientada a metas — não apenas à entrega de obrigações fiscais.",
  },
  {
    Icon: Zap,
    title: "Tecnologia integrada",
    desc: "Processos digitais, acesso remoto e comunicação ágil em tempo real.",
  },
  {
    Icon: Lightbulb,
    title: "Suporte consultivo",
    desc: "Antecipamos problemas e propomos soluções antes que eles afetem seu negócio.",
  },
  {
    Icon: TrendingUp,
    title: "Foco em crescimento",
    desc: "Nosso olhar é voltado para o futuro da sua empresa — não só para o passado fiscal.",
  },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos a realidade atual da sua empresa: tributação, obrigações e oportunidades ainda não aproveitadas.",
  },
  {
    n: "02",
    title: "Planejamento",
    desc: "Estruturamos um plano contábil e tributário alinhado aos seus objetivos reais de crescimento.",
  },
  {
    n: "03",
    title: "Estruturação",
    desc: "Organizamos processos, documentos e obrigações para garantir uma base sólida e segura.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    desc: "Presença contínua no dia a dia — não apenas no fechamento mensal.",
  },
  {
    n: "05",
    title: "Crescimento",
    desc: "Com a casa em ordem e estratégia clara, sua empresa avança com segurança e previsibilidade.",
  },
];

const testimonials = [
  {
    initials: "M.F.",
    name: "M. F.",
    company: "Empresa de Serviços — Manaus",
    text: "Desde que a Rosi assumiu minha contabilidade, passei a entender o que acontece no meu negócio de verdade. Reduziu meus impostos e me deu clareza para crescer.",
  },
  {
    initials: "C.A.",
    name: "C. A.",
    company: "Comércio — Manaus",
    text: "Atendimento completamente diferente do que eu tinha antes. A Rosi não só entrega as obrigações — ela me orienta nas decisões que fazem diferença.",
  },
  {
    initials: "P.R.",
    name: "P. R.",
    company: "Prestadora de Serviços — AM",
    text: "Profissional incrível. Organização, agilidade e uma visão de negócio que a maioria dos contadores não tem. Recomendo sem hesitar.",
  },
];

const faqs = [
  {
    q: "Qual o diferencial da Olliveira em relação a outros escritórios?",
    a: "Enquanto a maioria dos escritórios se limita a cumprir obrigações, a Olliveira atua como parceira estratégica. Nosso foco é usar a contabilidade como instrumento de crescimento — não apenas de conformidade.",
  },
  {
    q: "Como funciona a migração do escritório atual?",
    a: "O processo é simples e sem burocracia para você. Cuidamos de toda a transição: captamos os documentos do escritório anterior, reorganizamos o histórico e assumimos sua contabilidade sem interrupções.",
  },
  {
    q: "Vocês atendem empresas de qual porte ou segmento?",
    a: "Atendemos micro, pequenas e médias empresas de diversos segmentos — comércio, serviços, saúde, tecnologia e profissionais liberais — em Manaus e em todo o Brasil.",
  },
  {
    q: "O que é BPO Financeiro e minha empresa precisa disso?",
    a: "BPO Financeiro é a terceirização da gestão financeira da sua empresa. Cuidamos de contas a pagar/receber, fluxo de caixa e relatórios gerenciais para que você foque no que importa: crescer.",
  },
  {
    q: "Como o planejamento tributário pode reduzir meus impostos?",
    a: "Através de uma análise detalhada do seu enquadramento tributário e operação, identificamos o regime mais vantajoso e oportunidades legais de redução — como aproveitamento de créditos e deduções permitidas por lei.",
  },
  {
    q: "Como é feita a comunicação com a equipe?",
    a: "Utilizamos canais digitais ágeis e nosso aplicativo exclusivo, que permite envio de documentos, acompanhamento de obrigações e comunicação direta — tudo centralizado e com resposta rápida.",
  },
];

// ── CSS ────────────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Montserrat:wght@400;500;600&display=swap');

  html { scroll-behavior: smooth; scroll-padding-top: 80px }
  *, *::before, *::after { box-sizing: border-box }
  body { margin: 0 }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important }
  }

  .ro { min-height: 100vh; background: linear-gradient(170deg, #1C2924 0%, #1A1A1A 100%); color: #E7DDCC; font-family: 'Montserrat', sans-serif }

  /* Proposal topbar */
  .ro-topbar {
    position: fixed; inset: 0 0 auto; z-index: 51;
    min-height: 38px; padding: 7px 16px;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: #111713; border-bottom: 1px solid rgba(200,166,86,0.16);
    color: rgba(231,221,204,0.62); font-size: 11px; text-align: center;
  }
  .ro-topbar strong {
    color: #C8A656; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
  }
  .ro-topbar-sep { color: rgba(231,221,204,0.26); padding: 0 2px }
  .ro-topbar-dot { width: 7px; height: 7px; border-radius: 50%; background: #C8A656; flex-shrink: 0 }

  /* Navbar */
  .ro-nav { position: fixed; top: 38px; left: 0; right: 0; z-index: 50; backdrop-filter: blur(14px); background: rgba(28,41,36,0.82); border-bottom: 1px solid rgba(200,166,86,0.18) }
  .ro-nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 24px }
  .ro-nav-logo { height: 46px; max-width: 190px; object-fit: contain }
  .ro-nav-links { display: flex; gap: 28px; list-style: none; margin: 0; padding: 0 }
  .ro-nav-links a { font-size: 13px; font-weight: 500; letter-spacing: 0.04em; color: rgba(231,221,204,0.75); text-decoration: none; transition: color 0.25s }
  .ro-nav-links a:hover { color: #C8A656 }
  .ro-nav-cta { background: #C8A656; color: #1C2924; font-size: 13px; font-weight: 600; letter-spacing: 0.06em; padding: 10px 22px; border: none; cursor: pointer; text-decoration: none; transition: opacity 0.2s, transform 0.2s; white-space: nowrap }
  .ro-nav-cta:hover { opacity: 0.88; transform: scale(1.02) }
  .ro-mob-btn {
    display: none; position: relative; width: 44px; height: 44px;
    border: 1px solid rgba(200,166,86,0.2); border-radius: 50%;
    background: rgba(200,166,86,0.04); color: #E7DDCC; cursor: pointer;
    padding: 0; line-height: 0; transition: border-color 0.2s, background 0.2s, transform 0.2s;
  }
  .ro-mob-btn:hover { border-color: rgba(200,166,86,0.46); background: rgba(200,166,86,0.09); transform: translateY(-1px) }
  .ro-menu-mark {
    position: absolute; inset: 0; margin: auto; width: 25px; height: 18px;
    display: block;
  }
  .ro-menu-mark::before {
    content: ''; position: absolute; right: 1px; top: 0;
    width: 5px; height: 5px; border-radius: 50%; background: #C8A656;
    box-shadow: 0 0 0 4px rgba(200,166,86,0.08);
  }
  .ro-menu-mark span {
    position: absolute; right: 0; height: 2px; border-radius: 999px;
    background: linear-gradient(90deg, rgba(231,221,204,0.72), #C8A656);
    box-shadow: 0 0 14px rgba(200,166,86,0.18);
    transition: width 0.22s ease, transform 0.22s ease;
  }
  .ro-menu-mark span:nth-child(1) { top: 5px; width: 23px }
  .ro-menu-mark span:nth-child(2) { top: 12px; width: 15px }
  .ro-mob-btn:hover .ro-menu-mark span:nth-child(1) { width: 17px }
  .ro-mob-btn:hover .ro-menu-mark span:nth-child(2) { width: 24px; transform: translateX(-1px) }
  @media(max-width:900px){ .ro-nav-links { display: none } .ro-nav-cta { display: none } .ro-mob-btn { display: block } }

  /* Mobile drawer */
  .ro-mob-overlay {
    display: none; position: fixed; inset: 0; z-index: 58;
    background: rgba(10,14,12,0.72); backdrop-filter: blur(4px);
    opacity: 0; transition: opacity 0.35s ease;
  }
  .ro-mob-overlay.open { display: block; opacity: 1 }

  .ro-mob-drawer {
    position: fixed; top: 0; right: 0; bottom: 0; z-index: 59;
    width: min(340px, 82vw);
    background: linear-gradient(160deg, #1C2924 0%, #141a12 100%);
    border-left: 1px solid rgba(200,166,86,0.18);
    display: flex; flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }
  .ro-mob-drawer.open { transform: translateX(0) }

  .ro-mob-drawer-head {
    display: flex; align-items: center; justify-content: space-between;
    gap: 18px;
    padding: 18px 24px; border-bottom: 1px solid rgba(200,166,86,0.12);
  }
  .ro-mob-brand {
    display: flex; align-items: center; gap: 12px; min-width: 0;
    color: #E7DDCC; text-decoration: none;
  }
  .ro-mob-brand-mark {
    position: relative; width: 46px; height: 46px; flex: 0 0 46px;
    display: grid; place-items: center; border-radius: 50%;
    background:
      radial-gradient(circle at 38% 34%, rgba(255,240,184,0.2), transparent 34%),
      linear-gradient(145deg, rgba(200,166,86,0.2), rgba(28,41,36,0.86));
    border: 1px solid rgba(200,166,86,0.42);
    box-shadow: 0 12px 28px rgba(0,0,0,0.24), inset 0 0 0 1px rgba(231,221,204,0.06);
  }
  .ro-mob-brand-mark::before,
  .ro-mob-brand-mark::after {
    content: ''; position: absolute; border-radius: 50%; pointer-events: none;
  }
  .ro-mob-brand-mark::before {
    inset: 9px; border: 2px solid #C8A656; border-right-color: rgba(200,166,86,0.28);
    transform: rotate(-22deg);
  }
  .ro-mob-brand-mark::after {
    inset: 15px; border: 1px solid rgba(231,221,204,0.68);
  }
  .ro-mob-brand-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: #E7DDCC; box-shadow: 10px -9px 0 -1px #C8A656;
  }
  .ro-mob-brand-copy { display: flex; flex-direction: column; min-width: 0; line-height: 1 }
  .ro-mob-brand-copy strong {
    font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700;
    color: #E7DDCC; letter-spacing: 0;
  }
  .ro-mob-brand-copy span {
    margin-top: 3px; font-size: 10px; font-weight: 600;
    color: #C8A656; letter-spacing: 0.14em; text-transform: uppercase;
  }
  .ro-mob-brand-copy small {
    margin-top: 6px; font-size: 8px; font-weight: 500;
    color: rgba(231,221,204,0.48); letter-spacing: 0.12em; text-transform: uppercase;
    white-space: nowrap;
  }
  .ro-mob-close {
    background: rgba(200,166,86,0.08); border: 1px solid rgba(200,166,86,0.2);
    color: #C8A656; cursor: pointer; width: 38px; height: 38px;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s; flex-shrink: 0;
  }
  .ro-mob-close:hover { background: rgba(200,166,86,0.18) }

  .ro-mob-nav {
    flex: 1; overflow-y: auto; padding: 12px 0;
    display: flex; flex-direction: column;
  }
  .ro-mob-link {
    display: flex; align-items: center; gap: 18px;
    padding: 17px 28px; text-decoration: none;
    border-bottom: 1px solid rgba(200,166,86,0.07);
    color: rgba(231,221,204,0.78); font-size: 15px; font-weight: 500;
    letter-spacing: 0.03em; transition: color 0.2s, background 0.2s;
    opacity: 0; transform: translateX(18px);
    transition: color 0.2s, background 0.2s, opacity 0.35s ease, transform 0.35s ease;
    transition-delay: calc(0.06s * var(--i, 0));
  }
  .ro-mob-drawer.open .ro-mob-link { opacity: 1; transform: translateX(0) }
  .ro-mob-link:hover { color: #E7DDCC; background: rgba(200,166,86,0.06) }
  .ro-mob-link-num {
    font-family: 'Playfair Display', serif; font-size: 11px;
    color: #C8A656; letter-spacing: 0.12em; width: 22px; flex-shrink: 0;
    opacity: 0.8;
  }

  .ro-mob-footer {
    padding: 24px 28px; border-top: 1px solid rgba(200,166,86,0.1);
    display: flex; flex-direction: column; gap: 14px;
  }
  .ro-mob-footer-cta {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: #C8A656; color: #1C2924; font-size: 13px; font-weight: 700;
    letter-spacing: 0.07em; padding: 14px 20px; text-decoration: none;
    transition: opacity 0.2s; text-align: center;
    opacity: 0; transform: translateY(8px);
    transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s;
    transition-delay: 0.36s;
  }
  .ro-mob-drawer.open .ro-mob-footer-cta { opacity: 1; transform: translateY(0) }
  .ro-mob-footer-cta:hover { opacity: 0.88 }
  .ro-mob-footer-ig {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    font-size: 12px; color: rgba(231,221,204,0.45); text-decoration: none;
    letter-spacing: 0.06em; transition: color 0.2s;
  }
  .ro-mob-footer-ig:hover { color: #C8A656 }

  /* WhatsApp floating button */
  .ro-wa {
    position: fixed; right: 20px; bottom: 20px; z-index: 950;
    width: 58px; height: 58px; border-radius: 50%;
    display: grid; place-items: center;
    background: #25D366; color: #fff; text-decoration: none;
    box-shadow: 0 14px 36px rgba(37,211,102,0.32);
    animation: ro-wa-pulse 2.2s ease-out infinite;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }
  .ro-wa:hover { transform: translateY(-2px) scale(1.04); animation-play-state: paused }
  @keyframes ro-wa-pulse {
    0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.58), 0 14px 36px rgba(37,211,102,0.32) }
    68% { box-shadow: 0 0 0 18px rgba(37,211,102,0), 0 14px 36px rgba(37,211,102,0.32) }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0), 0 14px 36px rgba(37,211,102,0.32) }
  }

  /* Hero */
  .ro-hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding: 158px 0 80px; overflow: hidden }
  .ro-hero-bg { position: absolute; inset: 0; overflow: hidden }
  .ro-hero-bg img { width: 100%; height: 100%; object-fit: cover; object-position: center; transform: scale(1.18); filter: blur(18px) saturate(0.72); opacity: 0.24 }
  .ro-hero-overlay { position: absolute; inset: 0; background:
    radial-gradient(circle at 72% 42%, rgba(200,166,86,0.16), transparent 30%),
    linear-gradient(90deg, rgba(26,26,26,0.92) 0%, rgba(28,41,36,0.86) 46%, rgba(26,26,26,0.82) 100%) }
  .ro-hero-content { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 0 24px; width: 100%; display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.75fr); gap: 64px; align-items: center }
  .ro-hero-copy { max-width: 720px }
  .ro-hero-visual { justify-self: end; width: min(420px, 100%); position: relative }
  .ro-hero-visual::before { content: ''; position: absolute; inset: -18px; border: 1px solid rgba(200,166,86,0.22); transform: translate(18px, 18px); pointer-events: none }
  .ro-hero-portrait { position: relative; overflow: hidden; aspect-ratio: 4/5; background: rgba(62,74,52,0.24); border: 1px solid rgba(200,166,86,0.28) }
  .ro-hero-portrait img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block }
  .ro-hero-seal { position: absolute; left: -28px; bottom: 34px; max-width: 220px; padding: 18px 20px; background: rgba(28,41,36,0.88); border: 1px solid rgba(200,166,86,0.28); backdrop-filter: blur(14px) }
  .ro-hero-seal strong { display: block; font-family: 'Playfair Display', serif; font-size: 22px; color: #C8A656; margin-bottom: 4px }
  .ro-hero-seal span { display: block; font-size: 11px; line-height: 1.55; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(231,221,204,0.72) }
  .ro-hero-tag { display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: #C8A656; border: 1px solid rgba(200,166,86,0.4); padding: 6px 16px; margin-bottom: 24px }
  .ro-hero-h1 { font-family: 'Playfair Display', serif; font-size: clamp(38px,6vw,72px); font-weight: 700; line-height: 1.1; color: #E7DDCC; margin: 0 0 24px; max-width: 800px }
  .ro-hero-h1 em { font-style: italic; color: #C8A656 }
  .ro-hero-sub { font-size: clamp(15px,1.6vw,18px); font-weight: 400; color: rgba(231,221,204,0.8); max-width: 560px; line-height: 1.7; margin: 0 0 40px }
  .ro-hero-btns { display: flex; gap: 16px; flex-wrap: wrap }
  .ro-btn-gold { background: #C8A656; color: #1C2924; font-size: 14px; font-weight: 600; letter-spacing: 0.06em; padding: 14px 32px; border: 2px solid #C8A656; cursor: pointer; text-decoration: none; transition: all 0.25s; display: inline-flex; align-items: center; gap: 8px }
  .ro-btn-gold:hover { background: transparent; color: #C8A656 }
  .ro-btn-ghost { background: transparent; color: #C8A656; font-size: 14px; font-weight: 600; letter-spacing: 0.06em; padding: 14px 32px; border: 2px solid rgba(200,166,86,0.5); cursor: pointer; text-decoration: none; transition: all 0.25s; display: inline-flex; align-items: center; gap: 8px }
  .ro-btn-ghost:hover { border-color: #C8A656; background: rgba(200,166,86,0.08) }
  .ro-scroll { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); animation: bounce 2s infinite; color: rgba(200,166,86,0.6) }
  @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
  @media(max-width:900px){ .ro-hero { min-height: auto; padding-top: 142px; padding-bottom: 64px } .ro-hero-content { grid-template-columns: 1fr; gap: 40px } .ro-hero-visual { justify-self: start; width: min(360px, 82vw) } .ro-hero-seal { left: 18px; right: 18px; bottom: 18px; max-width: none } }
  @media(max-width:560px){ .ro-hero-visual { display: none } .ro-hero { min-height: auto; align-items: center; padding: 142px 0 44px } }

  /* Sections */
  .ro-section { max-width: 1200px; margin: 0 auto; padding: 96px 24px }
  .ro-section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #C8A656; margin-bottom: 12px }
  .ro-section-title { font-family: 'Playfair Display', serif; font-size: clamp(28px,4vw,46px); font-weight: 700; color: #E7DDCC; margin: 0 0 16px; line-height: 1.2 }
  .ro-section-title em { font-style: italic; color: #C8A656 }
  .ro-section-sub { font-size: 16px; color: rgba(231,221,204,0.65); max-width: 560px; line-height: 1.75 }
  .ro-divider { width: 48px; height: 2px; background: #C8A656; margin: 20px 0 48px }

  /* Sobre */
  .ro-sobre-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center }
  .ro-sobre-imgs { position: relative; display: grid; grid-template-columns: minmax(0,1fr) 148px; gap: 16px; align-items: end }
  .ro-sobre-img-main { width: 100%; aspect-ratio: 1/1; object-fit: cover; object-position: top center; border: 1px solid rgba(200,166,86,0.18) }
  .ro-sobre-img-accent { width: 148px; aspect-ratio: 1; object-fit: cover; object-position: top; border: 3px solid rgba(200,166,86,0.3) }
  .ro-sobre-text p { font-size: 16px; color: rgba(231,221,204,0.8); line-height: 1.8; margin: 0 0 20px }
  .ro-sobre-text strong { color: #E7DDCC }
  .ro-sobre-badge { display: inline-flex; align-items: center; gap: 10px; background: rgba(200,166,86,0.1); border: 1px solid rgba(200,166,86,0.25); padding: 12px 20px; margin-top: 8px }
  .ro-sobre-badge span { font-size: 13px; font-weight: 600; color: #C8A656; letter-spacing: 0.05em }
  @media(max-width:768px){ .ro-sobre-grid { grid-template-columns: 1fr } }

  /* Reconhecimento */
  .ro-authority-band { background: rgba(62,74,52,0.16); border-top: 1px solid rgba(200,166,86,0.1); border-bottom: 1px solid rgba(200,166,86,0.1) }
  .ro-authority-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 56px; align-items: center }
  .ro-authority-cover { position: relative; max-width: 360px }
  .ro-authority-cover img { width: 100%; display: block; aspect-ratio: 4/5; object-fit: cover; object-position: top; border: 1px solid rgba(200,166,86,0.25) }
  .ro-authority-cover::after { content: ''; position: absolute; inset: 18px -18px -18px 18px; border: 1px solid rgba(200,166,86,0.18); z-index: -1 }
  .ro-authority-card { display: grid; grid-template-columns: 54px 1fr; gap: 22px; padding: 32px; border: 1px solid rgba(200,166,86,0.18); background: rgba(28,41,36,0.48); backdrop-filter: blur(12px) }
  .ro-authority-icon { width: 54px; height: 54px; display: grid; place-items: center; color: #C8A656; border: 1px solid rgba(200,166,86,0.26); background: rgba(200,166,86,0.08) }
  .ro-authority-card p { margin: 0; color: rgba(231,221,204,0.72); line-height: 1.75; font-size: 15px }
  .ro-authority-points { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-top: 24px }
  .ro-authority-point { padding: 18px; border-top: 1px solid rgba(200,166,86,0.22); color: rgba(231,221,204,0.72); font-size: 13px; line-height: 1.55 }
  .ro-authority-point strong { display: block; color: #E7DDCC; font-size: 15px; margin-bottom: 6px }
  @media(max-width:800px){ .ro-authority-grid { grid-template-columns: 1fr; gap: 40px } .ro-authority-points { grid-template-columns: 1fr } }

  /* Stats */
  .ro-stats-bg { background: rgba(62,74,52,0.25); border-top: 1px solid rgba(200,166,86,0.12); border-bottom: 1px solid rgba(200,166,86,0.12) }
  .ro-stats-grid { max-width: 1200px; margin: 0 auto; padding: 64px 24px; display: grid; grid-template-columns: repeat(4,1fr); gap: 2px }
  .ro-stat { text-align: center; padding: 32px 16px; border-right: 1px solid rgba(200,166,86,0.12) }
  .ro-stat:last-child { border-right: none }
  .ro-stat-val { font-family: 'Playfair Display', serif; font-size: clamp(36px,5vw,56px); font-weight: 700; color: #C8A656; line-height: 1 }
  .ro-stat-label { font-size: 13px; font-weight: 500; color: rgba(231,221,204,0.6); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 8px }
  @media(max-width:640px){ .ro-stats-grid { grid-template-columns: repeat(2,1fr) } .ro-stat { border-right: none; border-bottom: 1px solid rgba(200,166,86,0.12) } }

  /* Serviços */
  .ro-services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: rgba(200,166,86,0.08) }
  .ro-service-card { background: rgba(28,41,36,0.9); padding: 40px 32px; transition: all 0.3s; position: relative; overflow: hidden }
  .ro-service-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: #C8A656; transform: scaleX(0); transition: transform 0.35s }
  .ro-service-card:hover::before { transform: scaleX(1) }
  .ro-service-card:hover { background: rgba(62,74,52,0.6); transform: translateY(-4px) }
  .ro-service-icon { width: 44px; height: 44px; color: #C8A656; margin-bottom: 20px }
  .ro-service-title { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 600; color: #E7DDCC; margin: 0 0 12px }
  .ro-service-desc { font-size: 14px; color: rgba(231,221,204,0.65); line-height: 1.75; margin: 0 }
  @media(max-width:900px){ .ro-services-grid { grid-template-columns: repeat(2,1fr) } }
  @media(max-width:580px){ .ro-services-grid { grid-template-columns: 1fr } }

  /* Diferenciais */
  .ro-diff-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 24px }
  .ro-diff-card { padding: 32px 20px; border: 1px solid rgba(200,166,86,0.12); text-align: center; transition: all 0.3s }
  .ro-diff-card:hover { border-color: rgba(200,166,86,0.4); background: rgba(62,74,52,0.3) }
  .ro-diff-icon { width: 36px; height: 36px; color: #C8A656; margin: 0 auto 16px }
  .ro-diff-title { font-size: 15px; font-weight: 600; color: #E7DDCC; margin: 0 0 10px }
  .ro-diff-desc { font-size: 13px; color: rgba(231,221,204,0.6); line-height: 1.65 }
  @media(max-width:900px){ .ro-diff-grid { grid-template-columns: repeat(2,1fr) } }
  @media(max-width:480px){ .ro-diff-grid { grid-template-columns: 1fr } }

  /* Processo / Timeline */
  .ro-timeline { position: relative; padding-left: 48px }
  .ro-timeline::before { content: ''; position: absolute; left: 16px; top: 8px; bottom: 8px; width: 2px; background: linear-gradient(to bottom, #C8A656, rgba(200,166,86,0.1)) }
  .ro-step { position: relative; padding: 0 0 48px 32px }
  .ro-step::before { content: ''; position: absolute; left: -40px; top: 8px; width: 12px; height: 12px; border-radius: 50%; background: #C8A656; border: 3px solid #1C2924; box-shadow: 0 0 0 3px rgba(200,166,86,0.3) }
  .ro-step-n { font-family: 'Playfair Display', serif; font-size: 13px; font-weight: 600; color: #C8A656; letter-spacing: 0.1em; margin-bottom: 6px }
  .ro-step-title { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: #E7DDCC; margin: 0 0 10px }
  .ro-step-desc { font-size: 15px; color: rgba(231,221,204,0.65); line-height: 1.75; max-width: 520px }
  .ro-processo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start }
  .ro-processo-panel { border: 1px solid rgba(200,166,86,0.18); background: rgba(62,74,52,0.18); padding: 34px; position: sticky; top: 110px }
  .ro-processo-profile { display: flex; align-items: center; gap: 18px; padding-bottom: 24px; border-bottom: 1px solid rgba(200,166,86,0.12) }
  .ro-processo-profile img { width: 86px; height: 86px; object-fit: cover; border-radius: 50%; border: 2px solid rgba(200,166,86,0.35) }
  .ro-processo-profile strong { display: block; font-family: 'Playfair Display', serif; font-size: 22px; color: #E7DDCC; margin-bottom: 4px }
  .ro-processo-profile span { display: block; font-size: 12px; color: #C8A656; letter-spacing: 0.12em; text-transform: uppercase }
  .ro-processo-quote { font-family: 'Playfair Display', serif; font-style: italic; font-size: clamp(24px,3vw,34px); line-height: 1.25; color: #E7DDCC; margin: 28px 0 18px }
  .ro-processo-note { color: rgba(231,221,204,0.65); font-size: 15px; line-height: 1.75; margin: 0 }
  .ro-processo-img { width: min(220px,100%); aspect-ratio: 1; object-fit: cover; object-position: top; border-radius: 50%; border: 3px solid rgba(200,166,86,0.32); align-self: center; justify-self: center; box-shadow: 0 24px 80px rgba(0,0,0,0.28) }
  @media(max-width:768px){ .ro-processo-grid { grid-template-columns: 1fr } .ro-processo-panel { position: static } }

  /* Depoimentos */
  .ro-test-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px }
  .ro-test-card { background: rgba(62,74,52,0.2); border: 1px solid rgba(200,166,86,0.12); padding: 36px 28px; position: relative }
  .ro-test-card::before { content: '“'; font-family: 'Playfair Display', serif; font-size: 80px; color: rgba(200,166,86,0.15); position: absolute; top: 8px; left: 20px; line-height: 1 }
  .ro-test-text { font-family: 'Playfair Display', serif; font-style: italic; font-size: 16px; color: rgba(231,221,204,0.85); line-height: 1.8; margin: 20px 0 28px; position: relative; z-index: 1 }
  .ro-test-avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #C8A656, #A8796E); display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: #1C2924; margin-bottom: 10px }
  .ro-test-name { font-size: 14px; font-weight: 600; color: #E7DDCC }
  .ro-test-company { font-size: 12px; color: rgba(231,221,204,0.5); margin-top: 2px }
  @media(max-width:768px){ .ro-test-grid { grid-template-columns: 1fr } }

  /* Instagram */
  .ro-ig-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 4px }
  .ro-ig-item { position: relative; aspect-ratio: 1; overflow: hidden; cursor: pointer; background: rgba(62,74,52,0.25) }
  .ro-ig-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s }
  .ro-ig-item:hover img { transform: scale(1.06) }
  .ro-ig-overlay { position: absolute; inset: 0; background: rgba(28,41,36,0.78); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; opacity: 0; transition: opacity 0.3s; padding: 24px; text-align: center }
  .ro-ig-overlay span { color: #E7DDCC; font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; line-height: 1.5 }
  .ro-ig-item:hover .ro-ig-overlay { opacity: 1 }
  @media(max-width:580px){ .ro-ig-grid { grid-template-columns: repeat(2,1fr) } }

  /* FAQ layout */
  .ro-faq-section-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; align-items: start }
  @media(max-width:768px){ .ro-faq-section-grid { grid-template-columns: 1fr; gap: 40px } }

  /* FAQ */
  .ro-faq-list { border-top: 1px solid rgba(200,166,86,0.15) }
  .ro-faq-item { border-bottom: 1px solid rgba(200,166,86,0.15) }
  .ro-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 22px 0; background: none; border: none; color: #E7DDCC; font-family: 'Montserrat',sans-serif; font-size: 16px; font-weight: 500; cursor: pointer; text-align: left; gap: 16px; transition: color 0.2s }
  .ro-faq-btn:hover { color: #C8A656 }
  .ro-faq-btn.open { color: #C8A656 }
  .ro-faq-icon { flex-shrink: 0; transition: transform 0.3s; color: #C8A656 }
  .ro-faq-btn.open .ro-faq-icon { transform: rotate(45deg) }
  .ro-faq-answer { overflow: hidden; max-height: 0; transition: max-height 0.4s ease }
  .ro-faq-answer.open { max-height: 300px }
  .ro-faq-answer p { font-size: 15px; color: rgba(231,221,204,0.7); line-height: 1.8; padding: 0 0 24px; margin: 0; border-left: 3px solid #C8A656; padding-left: 20px }

  /* CTA Final */
  .ro-cta-final { text-align: center; padding: 112px 24px; background: linear-gradient(135deg, rgba(28,41,36,0.95), rgba(26,26,26,0.95)); position: relative; overflow: hidden }
  .ro-cta-final::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 600px; height: 600px; border-radius: 50%; border: 1px solid rgba(200,166,86,0.06); pointer-events: none }
  .ro-cta-final::after { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 900px; height: 900px; border-radius: 50%; border: 1px solid rgba(200,166,86,0.04); pointer-events: none }

  /* Rodapé */
  .ro-footer { background: #111; border-top: 1px solid rgba(200,166,86,0.15); padding: 64px 24px 32px }
  .ro-footer-inner { max-width: 1200px; margin: 0 auto }
  .ro-footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 48px; margin-bottom: 48px }
  .ro-footer-logo { height: 54px; max-width: 190px; object-fit: contain; margin-bottom: 16px }
  .ro-footer-tagline { font-family: 'Playfair Display', serif; font-style: italic; font-size: 14px; color: rgba(231,221,204,0.5); margin: 0 0 16px }
  .ro-footer-col h4 { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C8A656; margin: 0 0 20px }
  .ro-footer-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px }
  .ro-footer-col ul a { font-size: 14px; color: rgba(231,221,204,0.6); text-decoration: none; transition: color 0.2s }
  .ro-footer-col ul a:hover { color: #E7DDCC }
  .ro-footer-contact p { font-size: 14px; color: rgba(231,221,204,0.6); margin: 0 0 8px; line-height: 1.6 }
  .ro-footer-bottom { border-top: 1px solid rgba(231,221,204,0.08); padding-top: 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap }
  .ro-footer-bottom p { font-size: 12px; color: rgba(231,221,204,0.35); margin: 0 }
  @media(max-width:900px){ .ro-footer-grid { grid-template-columns: 1fr 1fr } }
  @media(max-width:580px){ .ro-footer-grid { grid-template-columns: 1fr } }

  @media(max-width:640px){
    html { scroll-padding-top: 116px }
    .ro-topbar { min-height: 48px; flex-wrap: wrap; gap: 4px 8px; padding: 7px 12px }
    .ro-nav { top: 48px }
    .ro-nav-inner { height: 64px; padding: 0 34px 0 48px }
    .ro-nav-logo { height: 38px; max-width: 150px }
    .ro-mob-drawer-head { padding: 16px 20px }
    .ro-mob-brand { gap: 10px }
    .ro-mob-brand-mark { width: 42px; height: 42px; flex-basis: 42px }
    .ro-mob-brand-copy strong { font-size: 17px }
    .ro-mob-brand-copy span { font-size: 9px; letter-spacing: 0.13em }
    .ro-mob-brand-copy small { display: none }

    .ro-hero-content { padding: 0 24px }
    .ro-hero-tag { font-size: 10px; letter-spacing: 0.14em; padding: 6px 12px; margin-bottom: 18px }
    .ro-hero-h1 { font-size: clamp(34px, 11vw, 44px); line-height: 1.08; margin-bottom: 18px }
    .ro-hero-sub { font-size: 15px; line-height: 1.65; margin-bottom: 28px }
    .ro-hero-btns { gap: 12px }
    .ro-btn-gold,
    .ro-btn-ghost { width: 100%; justify-content: center; padding: 13px 20px; font-size: 13px }
    .ro-scroll { bottom: 14px }

    .ro-section { padding: 56px 24px }
    .ro-divider { margin: 16px 0 30px }
    .ro-section-label { font-size: 10px; letter-spacing: 0.18em; margin-bottom: 10px }
    .ro-section-title { font-size: clamp(28px, 9vw, 34px) }

    .ro-sobre-grid,
    .ro-authority-grid,
    .ro-processo-grid,
    .ro-faq-section-grid { gap: 34px }
    .ro-sobre-imgs { grid-template-columns: minmax(0,1fr) 112px; gap: 12px }
    .ro-sobre-img-accent { width: 112px }
    .ro-sobre-text p { font-size: 15px; line-height: 1.7; margin-bottom: 16px }
    .ro-sobre-badge { width: 100%; padding: 12px 14px }
    .ro-sobre-badge span { font-size: 12px; line-height: 1.45 }

    .ro-authority-cover { max-width: 280px }
    .ro-authority-cover::after { inset: 12px -12px -12px 12px }
    .ro-authority-card { grid-template-columns: 1fr; gap: 16px; padding: 22px }
    .ro-authority-icon { width: 46px; height: 46px }
    .ro-authority-points { gap: 8px; margin-top: 18px }
    .ro-authority-point { padding: 14px 0 }

    .ro-stats-grid { padding: 38px 20px }
    .ro-stat { padding: 24px 10px }
    .ro-stat-label { font-size: 11px; line-height: 1.4 }

    .ro-service-card { padding: 28px 22px }
    .ro-diff-grid { gap: 14px }
    .ro-diff-card { padding: 24px 18px }

    .ro-timeline { padding-left: 32px }
    .ro-step { padding: 0 0 34px 24px }
    .ro-step::before { left: -24px }
    .ro-timeline::before { left: 8px }
    .ro-processo-img { display: none }
    .ro-step:last-child { padding-bottom: 8px }

    .ro-test-card { padding: 28px 22px }
    .ro-ig-grid { gap: 3px }
    .ro-faq-btn { padding: 18px 0; font-size: 15px }
    .ro-cta-final { padding: 70px 24px }
    .ro-footer { padding: 44px 24px 28px }
    .ro-footer-grid { gap: 30px; margin-bottom: 34px }
    .ro-wa { right: 16px; bottom: 16px; width: 54px; height: 54px }
  }

  /* Reveal animation */
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease }
  .reveal.visible { opacity: 1; transform: translateY(0) }
`;

// ── Hooks ──────────────────────────────────────────────────────────────────────
function useCounter(target: number, trigger: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── Stat Counter ──────────────────────────────────────────────────────────────
function StatCard({ value, suffix = "", prefix = "", label }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const count = useCounter(value, triggered);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTriggered(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="ro-stat" ref={ref}>
      <div className="ro-stat-val">{prefix}{count.toLocaleString("pt-BR")}{suffix}</div>
      <div className="ro-stat-label">{label}</div>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="ro-faq-item">
      <button
        className={`ro-faq-btn${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
      >
        {q}
        <X size={18} className="ro-faq-icon" aria-hidden="true" />
      </button>
      <div id={id} className={`ro-faq-answer${open ? " open" : ""}`} aria-hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Topbar() {
  return (
    <div className="ro-topbar">
      <span className="ro-topbar-dot" aria-hidden="true" />
      <strong>Proposta comercial</strong>
      <span className="ro-topbar-sep">·</span>
      <span>Prévia conceitual desenvolvida pela LumaSites.com.br</span>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RosiOlliveiraPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  return (
    <div className="ro">
      <style>{css}</style>

      <Topbar />

      {/* ── Navbar ── */}
      <nav className="ro-nav">
        <div className="ro-nav-inner">
          <img src={imgs.logoGold} alt="Olliveira Contabilidade" className="ro-nav-logo" />
          <ul className="ro-nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a href={WA()} target="_blank" rel="noopener noreferrer" className="ro-nav-cta">
            Solicitar Diagnóstico
          </a>
          <button className="ro-mob-btn" onClick={() => setMenuOpen(true)} aria-label="Menu">
            <span className="ro-menu-mark" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <div
        className={`ro-mob-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`ro-mob-drawer${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* Header */}
        <div className="ro-mob-drawer-head">
          <a href="#" className="ro-mob-brand" onClick={() => setMenuOpen(false)} aria-label="Olliveira Contabilidade">
            <span className="ro-mob-brand-mark" aria-hidden="true">
              <span className="ro-mob-brand-dot" />
            </span>
            <span className="ro-mob-brand-copy" aria-hidden="true">
              <strong>Olliveira</strong>
              <span>Contabilidade</span>
              <small>Assessoria consultiva</small>
            </span>
          </a>
          <button className="ro-mob-close" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="ro-mob-nav">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="ro-mob-link"
              style={{ "--i": i } as React.CSSProperties}
              onClick={() => setMenuOpen(false)}
            >
              <span className="ro-mob-link-num">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="ro-mob-footer">
          <a
            href={WA()}
            target="_blank"
            rel="noopener noreferrer"
            className="ro-mob-footer-cta"
            onClick={() => setMenuOpen(false)}
          >
            <ArrowRight size={15} />
            Solicitar Diagnóstico
          </a>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ro-mob-footer-ig"
          >
            <Instagram size={13} />
            @rosiolliveiracontadora
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="ro-hero">
        <div className="ro-hero-bg" aria-hidden="true">
          <img src={imgs.hero} alt="" />
        </div>
        <div className="ro-hero-overlay" aria-hidden="true" />
        <div className="ro-hero-content">
          <div className="ro-hero-copy">
          <div className="ro-hero-tag">Olliveira &amp; Contadoras Associadas</div>
          <h1 className="ro-hero-h1">
            Contabilidade que<br />
            impulsiona <em>decisões.</em>
          </h1>
          <p className="ro-hero-sub">
            Estratégia, inteligência tributária e gestão financeira para empresas
            que desejam crescer com segurança.
          </p>
          <div className="ro-hero-btns">
            <a href={WA()} target="_blank" rel="noopener noreferrer" className="ro-btn-gold">
              Solicitar Diagnóstico <ArrowRight size={16} />
            </a>
            <a href="#servicos" className="ro-btn-ghost">
              Conhecer Soluções
            </a>
          </div>
          </div>
          <div className="ro-hero-visual reveal">
            <div className="ro-hero-portrait">
              <img src={imgs.hero} alt="Rosi Olliveira em ensaio corporativo" fetchPriority="high" />
            </div>
            <div className="ro-hero-seal">
              <strong>2016</strong>
              <span>Construindo gestao, clareza e crescimento empresarial</span>
            </div>
          </div>
        </div>
        <div className="ro-scroll" aria-hidden="true">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ── Sobre ── */}
      <section id="sobre">
        <div className="ro-section">
          <div className="ro-sobre-grid">
            <div className="ro-sobre-imgs reveal">
              <img src={imgs.palestra} alt="Rosi Olliveira em palestra para contadoras" className="ro-sobre-img-main" />
              <img src={imgs.perfil} alt="Rosi Olliveira no escritorio" className="ro-sobre-img-accent" />
            </div>
            <div className="ro-sobre-text reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="ro-section-label">Quem somos</div>
              <h2 className="ro-section-title">
                Mais que contabilidade.<br />
                Uma parceira <em>estratégica.</em>
              </h2>
              <div className="ro-divider" />
              <p>
                A <strong>Olliveira & Contadoras Associadas</strong> nasceu da determinação de transformar
                a contabilidade em um instrumento real de crescimento empresarial.
              </p>
              <p>
                Fundada em <strong>2016</strong> por <strong>Rosi Olliveira</strong> — Contadora, Mentora e
                referência em consultoria tributária em Manaus — o escritório se especializou em atender
                empresas que precisam de mais do que conformidade fiscal: precisam de estratégia.
              </p>
              <p>
                Atendemos empresas em Manaus e em todo o Brasil, com um olhar consultivo que vai além
                dos números. <strong>Cuidamos da sua gestão para que você foque em crescer.</strong>
              </p>
              <div className="ro-sobre-badge">
                <CheckCircle2 size={18} style={{ color: "#C8A656", flexShrink: 0 }} />
                <span>Estratégia que gera legado — desde 2016</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="ro-authority-band">
        <div className="ro-section">
          <div className="ro-authority-grid">
            <div className="ro-authority-cover reveal">
              <img src={imgs.revista} alt="Rosi Olliveira na Revista Interacao Negocios" />
            </div>
            <div className="reveal" style={{ transitionDelay: "0.12s" }}>
              <div className="ro-section-label">Reconhecimento</div>
              <h2 className="ro-section-title">
                Autoridade que reforça<br />
                a percepção de <em>valor.</em>
              </h2>
              <div className="ro-divider" />
              <div className="ro-authority-card">
                <div className="ro-authority-icon">
                  <Award size={26} />
                </div>
                <p>
                  A presença editorial da Rosi na Revista Interação Negócios passa a funcionar como
                  prova de autoridade. Ela sustenta o posicionamento de contadora estrategista, mentora
                  e referência em gestão empresarial.
                </p>
              </div>
              <div className="ro-authority-points">
                <div className="ro-authority-point">
                  <strong>Na mídia</strong>
                  Reconhecimento externo aumenta confiança antes do primeiro contato.
                </div>
                <div className="ro-authority-point">
                  <strong>Mentoria</strong>
                  Posiciona Rosi como liderança para outras profissionais da área.
                </div>
                <div className="ro-authority-point">
                  <strong>Estratégia</strong>
                  Reforça a promessa de transformar números em decisões.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ro-stats-bg">
        <div className="ro-stats-grid">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </div>

      {/* ── Serviços ── */}
      <section id="servicos">
        <div className="ro-section">
          <div className="reveal">
            <div className="ro-section-label">O que oferecemos</div>
            <h2 className="ro-section-title">Soluções que fazem sua<br />empresa <em>avançar.</em></h2>
            <div className="ro-divider" />
          </div>
          <div className="ro-services-grid">
            {services.map(({ Icon, title, desc }, i) => (
              <div key={title} className="ro-service-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <Icon className="ro-service-icon" />
                <h3 className="ro-service-title">{title}</h3>
                <p className="ro-service-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diferenciais ── */}
      <section id="diferenciais" style={{ background: "rgba(62,74,52,0.1)" }}>
        <div className="ro-section">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "clamp(30px, 5vw, 48px)" }}>
            <div className="ro-section-label" style={{ justifyContent: "center", display: "flex" }}>Por que nos escolher</div>
            <h2 className="ro-section-title" style={{ textAlign: "center" }}>
              Por que empresários escolhem<br />a <em>Olliveira?</em>
            </h2>
          </div>
          <div className="ro-diff-grid">
            {differentials.map(({ Icon, title, desc }, i) => (
              <div key={title} className="ro-diff-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <Icon className="ro-diff-icon" />
                <div className="ro-diff-title">{title}</div>
                <p className="ro-diff-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Processo ── */}
      <section id="processo">
        <div className="ro-section">
          <div className="ro-processo-grid">
            <div>
              <div className="reveal">
                <div className="ro-section-label">Como trabalhamos</div>
                <h2 className="ro-section-title">Do diagnóstico ao<br /><em>crescimento.</em></h2>
                <div className="ro-divider" />
              </div>
              <div className="ro-timeline">
                {steps.map((s, i) => (
                  <div key={s.n} className="ro-step reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="ro-step-n">{s.n}</div>
                    <div className="ro-step-title">{s.title}</div>
                    <p className="ro-step-desc">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <img src={imgs.perfil} alt="Rosi Olliveira no escritório" className="ro-processo-img reveal" style={{ transitionDelay: "0.2s" }} />
          </div>
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section id="depoimentos" style={{ background: "rgba(28,41,36,0.6)" }}>
        <div className="ro-section">
          <div className="reveal" style={{ marginBottom: "clamp(30px, 5vw, 48px)" }}>
            <div className="ro-section-label">Resultados reais</div>
            <h2 className="ro-section-title">O que dizem nossos<br /><em>clientes.</em></h2>
            <div className="ro-divider" />
          </div>
          <div className="ro-test-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className="ro-test-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <p className="ro-test-text">{t.text}</p>
                <div className="ro-test-avatar">{t.initials}</div>
                <div className="ro-test-name">{t.name}</div>
                <div className="ro-test-company">{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram ── */}
      <section>
        <div className="ro-section" style={{ paddingBottom: "clamp(28px, 5vw, 48px)" }}>
          <div className="reveal" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: "clamp(24px, 4vw, 32px)" }}>
            <div>
              <div className="ro-section-label">Conteúdo</div>
              <h2 className="ro-section-title" style={{ marginBottom: 0 }}>
                Conteúdo que<br /><em>transforma.</em>
              </h2>
            </div>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="ro-btn-ghost" style={{ gap: 8 }}>
              <Instagram size={16} /> Ver no Instagram
            </a>
          </div>
        </div>
        <div className="ro-ig-grid" style={{ maxWidth: 1200, margin: "0 auto", paddingBottom: "clamp(56px, 8vw, 96px)" }}>
          {imgs.ig.map((post) => (
            <a key={post.src} href={IG_URL} target="_blank" rel="noopener noreferrer" className="ro-ig-item">
              <img src={post.src} alt={post.title} loading="lazy" />
              <div className="ro-ig-overlay">
                <Instagram size={28} color="#C8A656" />
                <span>{post.title}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ borderTop: "1px solid rgba(200,166,86,0.08)" }}>
        <div className="ro-section">
          <div className="ro-faq-section-grid">
            <div className="reveal">
              <div className="ro-section-label">Tire suas dúvidas</div>
              <h2 className="ro-section-title">Perguntas<br /><em>frequentes.</em></h2>
              <div className="ro-divider" />
              <p style={{ fontSize: 15, color: "rgba(231,221,204,0.55)", lineHeight: 1.75 }}>
                Dúvidas comuns de empresários que querem crescer com segurança.
              </p>
              <a href={WA("Olá, Rosi! Tenho uma dúvida sobre a Olliveira Contabilidade.")} target="_blank" rel="noopener noreferrer" className="ro-btn-gold" style={{ marginTop: "clamp(22px, 4vw, 32px)", display: "inline-flex" }}>
                Falar com Especialista <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="ro-faq-list">
                {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section id="contato">
        <div className="ro-cta-final">
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="ro-section-label" style={{ display: "inline-block", marginBottom: 24 }}>Próximo passo</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,5vw,56px)", fontWeight: 700, color: "#E7DDCC", lineHeight: 1.2, margin: "0 0 20px" }}>
              Sua empresa está pronta para<br />
              o <em style={{ color: "#C8A656", fontStyle: "italic" }}>próximo nível?</em>
            </h2>
            <p style={{ fontSize: 17, color: "rgba(231,221,204,0.7)", maxWidth: 520, margin: "0 auto clamp(28px, 5vw, 40px)", lineHeight: 1.75 }}>
              Tenha uma contabilidade estratégica focada em crescimento com segurança e inteligência financeira.
            </p>
            <a href={WA()} target="_blank" rel="noopener noreferrer" className="ro-btn-gold" style={{ fontSize: 15, padding: "16px 40px" }}>
              Falar com Especialista <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Rodapé ── */}
      <footer className="ro-footer">
        <div className="ro-footer-inner">
          <div className="ro-footer-grid">
            <div>
              <img src={imgs.logoGold} alt="Olliveira Contabilidade" className="ro-footer-logo" />
              <p className="ro-footer-tagline">Estratégia que gera legado.</p>
              <p style={{ fontSize: 13, color: "rgba(231,221,204,0.4)", lineHeight: 1.7, maxWidth: 280 }}>
                Contabilidade estratégica e consultiva para empresas que desejam crescer com segurança e inteligência.
              </p>
            </div>
            <div className="ro-footer-col">
              <h4>Navegação</h4>
              <ul>
                {navItems.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
              </ul>
            </div>
            <div className="ro-footer-col">
              <h4>Serviços</h4>
              <ul>
                {services.map((s) => <li key={s.title}><a href="#servicos">{s.title}</a></li>)}
              </ul>
            </div>
            <div className="ro-footer-col ro-footer-contact">
              <h4>Contato</h4>
              <p>📱 (92) 98249-0717</p>
              <p>✉️ oassessoriacontabil@gmail.com</p>
              <p>📍 Av. Francisco Queiroz, 67<br />Cidade Nova — Manaus, AM</p>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, fontSize: 13, color: "#C8A656", textDecoration: "none" }}>
                <Instagram size={16} /> @rosiolliveiracontadora
              </a>
            </div>
          </div>
          <div className="ro-footer-bottom">
            <p>© {new Date().getFullYear()} Olliveira &amp; Contadoras Associadas. Todos os direitos reservados.</p>
            <p>Desenvolvido por <strong style={{ color: "rgba(231,221,204,0.5)" }}>LumaSites</strong></p>
          </div>
        </div>
      </footer>

      <a
        className="ro-wa"
        href={WA()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Rosi Olliveira pelo WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
