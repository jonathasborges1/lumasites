"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Shield,
  Smile,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";

// ── Config ─────────────────────────────────────────────────────────────────────
const GAL = (n: string) => `/images/murillomartins/galeria/${n}`;

const galeriaFotos = Array.from({ length: 24 }, (_, i) => GAL(`foto-${String(i + 1).padStart(2, "0")}.jpg`));

const galeriaVideos = [
  GAL("video-01.mp4"),
  GAL("video-02.mp4"),
  GAL("video-03.mp4"),
  GAL("video-04.mp4"),
  GAL("video-05.mp4"),
  GAL("video-06.mp4"),
  GAL("video-07.mp4"),
  GAL("video-08.mp4"),
];

const WA_NUMBER = "5548996015912";
const WA = (msg = "Olá, Dr. Murillo! Gostaria de agendar uma avaliação.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const MAPS_QUERY = "Rua Nereu Ramos, 124, Centro, Imbituba, SC";
const IG_URL = "https://www.instagram.com/drmurillomartins/";
const FB_URL = "https://www.facebook.com/dr.murillomartins";

const imgs = {
  logo:        "/images/murillomartins/logo-dr-murillo-martins.jpg",
  retrato:     "/images/murillomartins/dr-murillo-martins-retrato-sem-texto-4x5.jpg",
  consultorio: "/images/murillomartins/dr-murillo-martins-consultorio-sem-texto.jpg",
  fachada:     "/images/murillomartins/fachada-consultorio-imbituba.jpg",
};

// ── Data ───────────────────────────────────────────────────────────────────────
const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "FAQ" },
];

const stats = [
  { value: "9+",     label: "anos de experiência",   href: undefined },
  { value: "2.051",  label: "seguidores no Instagram", href: IG_URL },
  { value: "5",      label: "especialidades clínicas", href: undefined },
  { value: "Sul SC", label: "referência regional",     href: undefined },
];

const benefits = [
  {
    Icon: Activity,
    title: "Mastigue sem limitações",
    desc: "Recupere o prazer de comer sem dor ou insegurança — com implantes que funcionam como dentes naturais.",
  },
  {
    Icon: Smile,
    title: "Sorria com confiança",
    desc: "Sinta-se livre para rir, fotografar e se expressar em qualquer situação do dia a dia.",
  },
  {
    Icon: Heart,
    title: "Recupere sua autoestima",
    desc: "Tratamentos que devolvem muito mais do que dentes — devolvem bem-estar e qualidade de vida.",
  },
  {
    Icon: Calendar,
    title: "Planejado para você",
    desc: "Sem protocolos genéricos. Cada caso recebe um plano exclusivo desde a avaliação inicial.",
  },
];

const treatments = [
  {
    Icon: Shield,
    title: "Implantes Dentários",
    desc: "Reposição definitiva de dentes perdidos. Resultado natural, função completa e durabilidade comprovada por décadas.",
    cta: "Saber mais sobre implantes",
  },
  {
    Icon: Activity,
    title: "Prótese sobre Implante",
    desc: "Estabilidade que uma prótese removível não oferece. Fixação segura, mastigação confortável e sem inseguranças.",
    cta: "Conhecer a prótese sobre implante",
  },
  {
    Icon: Sparkles,
    title: "Alinhadores Invisíveis",
    desc: "Alinhamento discreto e eficiente. Sem fio, sem brackets, sem desconforto visual durante o tratamento.",
    cta: "Ver como funciona",
  },
  {
    Icon: Star,
    title: "Clareamento Dental",
    desc: "Sorriso mais iluminado em poucos atendimentos. Resultado seguro, natural e duradouro — sem sensibilidade excessiva.",
    cta: "Agendar clareamento",
  },
  {
    Icon: Heart,
    title: "Reabilitação Oral",
    desc: "Reconstrução funcional e estética completa. Para casos complexos, com planejamento digital individualizado.",
    cta: "Entender a reabilitação oral",
  },
];

const steps = [
  {
    n: "01",
    title: "Avaliação Inicial",
    desc: "Escuta ativa, exame clínico completo e diagnóstico preciso — sem pressa. Cada detalhe importa para o planejamento.",
  },
  {
    n: "02",
    title: "Planejamento Digital",
    desc: "Mapeamento detalhado do seu caso com tecnologia. Um plano exclusivo criado para a sua boca, não para um protocolo genérico.",
  },
  {
    n: "03",
    title: "Execução do Tratamento",
    desc: "Procedimentos realizados com segurança, precisão e atenção ao seu conforto durante todo o processo.",
  },
  {
    n: "04",
    title: "Acompanhamento Contínuo",
    desc: "O cuidado não termina no procedimento. Suporte próximo para garantir o resultado e preservar sua saúde bucal.",
  },
];

const differentials = [
  {
    Icon: Heart,
    title: "Atendimento Humanizado",
    desc: "Você não é mais um paciente. É tratado com atenção real, escuta genuína e respeito ao seu tempo.",
  },
  {
    Icon: Award,
    title: "Planejamento Personalizado",
    desc: "Nenhum protocolo genérico. Cada caso é estudado individualmente — do diagnóstico à finalização.",
  },
  {
    Icon: Zap,
    title: "Tecnologia Moderna",
    desc: "Diagnóstico e execução com recursos clínicos de última geração para mais precisão e conforto.",
  },
  {
    Icon: Shield,
    title: "Acompanhamento Próximo",
    desc: "A relação não termina no procedimento. Você é acompanhado de perto para garantir seu resultado.",
  },
];

const testimonials = [
  {
    initials: "M.S.",
    name: "M. S.",
    city: "Imbituba",
    treatment: "Implante Dentário",
    text: "Tinha muito medo de fazer implante, mas o Dr. Murillo me deixou completamente à vontade. O resultado ficou perfeito e minha autoestima voltou.",
    stars: 5,
  },
  {
    initials: "R.C.",
    name: "R. C.",
    city: "Garopaba",
    treatment: "Reabilitação Oral",
    text: "Profissional incrível. Explicou cada etapa com paciência e cuidado. Meu sorriso nunca foi tão bonito — me sinto uma pessoa nova.",
    stars: 5,
  },
  {
    initials: "A.L.",
    name: "A. L.",
    city: "Imbituba",
    treatment: "Clareamento Dental",
    text: "Atendimento impecável desde o primeiro contato. Resultado acima do que eu esperava. Recomendo muito para quem busca qualidade!",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Implante dentário dói?",
    a: "O procedimento é realizado com anestesia local e é muito bem tolerado pela maioria dos pacientes. O desconforto pós-operatório é controlado com medicação e a rotina costuma ser retomada em poucos dias.",
  },
  {
    q: "Quanto tempo dura um implante?",
    a: "Com os cuidados adequados e acompanhamento regular, um implante pode durar a vida toda. A osseointegração cria uma base sólida e definitiva — muito mais estável do que uma prótese removível.",
  },
  {
    q: "Qual a diferença entre implante e prótese removível?",
    a: "O implante é fixo, integrado ao osso, e funciona exatamente como um dente natural. A prótese removível pode se mover, causar desconforto ao mastigar e exige manutenção frequente.",
  },
  {
    q: "Posso fazer implante com diabetes ou hipertensão?",
    a: "Na maioria dos casos sim — desde que as condições estejam controladas. O Dr. Murillo avalia cada situação individualmente na consulta para indicar o tratamento mais seguro.",
  },
  {
    q: "Como agendar minha avaliação?",
    a: "Pelo WhatsApp ou pelos botões presentes nesta página. A avaliação inicial é o primeiro passo para entender seu caso e descobrir o melhor caminho para o seu sorriso.",
  },
];

// ── CSS ────────────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

  html { scroll-behavior: smooth; scroll-padding-top: 104px }
  *, *::before, *::after { box-sizing: border-box }
  body { margin: 0 }

  .mrm {
    min-height: 100vh;
    overflow-x: clip;
    background: #F4E3D5;
    color: #1A1A0E;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }
  .mrm img { display: block; max-width: 100% }
  .mrm a { color: inherit; text-decoration: none }
  .mrm button { font: inherit; cursor: pointer }

  .mrm-wrap { width: min(1160px, calc(100% - 40px)); margin: 0 auto }
  .mrm-section { padding: 88px 0 }

  /* ── Tipografia ── */
  .mrm-eyebrow {
    display: flex; align-items: center; gap: 10px;
    margin: 0 0 16px;
    color: #B8A270;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px; font-weight: 700;
    letter-spacing: .18em; text-transform: uppercase;
  }
  .mrm-eyebrow::before {
    content: ""; flex-shrink: 0; width: 22px; height: 2px; background: #B8A270;
  }
  .mrm-eyebrow--dark { color: #4F5442 }
  .mrm-eyebrow--dark::before { background: #4F5442 }

  .mrm-h2 {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 800;
    letter-spacing: -.015em;
    line-height: 1.06;
    text-wrap: balance;
  }
  .mrm-lead {
    max-width: 640px; margin: 18px 0 0;
    color: #6B6457; font-size: 16px; line-height: 1.78;
  }
  .mrm-lead--white { color: rgba(255,255,255,.68) }

  /* ── Botões ── */
  .mrm-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 9px;
    min-height: 50px; padding: 0 24px;
    border: 0; border-radius: 6px;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
  }
  .mrm-btn:hover { transform: translateY(-2px) }
  .mrm-btn--gold {
    background: #B8A270; color: #1A1A0E;
    box-shadow: 0 12px 30px rgba(184,162,112,.30);
  }
  .mrm-btn--gold:hover {
    background: #C2A76E;
    box-shadow: 0 18px 40px rgba(194,167,110,.38);
  }
  .mrm-btn--ghost-white {
    border: 1.5px solid rgba(255,255,255,.28);
    background: rgba(255,255,255,.08);
    color: #fff;
  }
  .mrm-btn--ghost-white:hover { background: rgba(255,255,255,.16) }
  .mrm-mobile-text { display: none }

  /* ── Topbar ── */
  .mrm-topbar {
    position: fixed; inset: 0 0 auto; z-index: 1002;
    min-height: 38px; padding: 7px 16px;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: #131A1E;
    font-size: 11px; text-align: center;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: .06em;
  }
  .mrm-topbar strong { color: #B8A270; font-weight: 700; text-transform: uppercase }
  .mrm-topbar-sep { color: rgba(255,255,255,.24); padding: 0 2px }
  .mrm-topbar span { color: rgba(255,255,255,.6) }
  .mrm-topbar-dot { width: 6px; height: 6px; border-radius: 50%; background: #B8A270; flex-shrink: 0 }

  /* ── Navbar ── */
  .mrm-nav {
    position: fixed; inset: 38px 0 auto; z-index: 1001;
    height: 66px;
    background: rgba(244,227,213,.93);
    border-bottom: 1px solid rgba(54,62,39,.1);
    backdrop-filter: blur(18px);
  }
  .mrm-nav-inner {
    height: 100%;
    display: flex; align-items: center; justify-content: space-between; gap: 20px;
  }
  .mrm-brand { display: flex; align-items: center; gap: 12px }
  .mrm-brand-mark {
    width: 42px; height: 42px; border-radius: 50%;
    background: #363E27;
    overflow: hidden;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(54,62,39,.18);
  }
  .mrm-brand-mark img {
    width: 100%; height: 100%; object-fit: cover;
  }
  .mrm-brand strong {
    display: block; color: #1A1A0E;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px; font-weight: 800; line-height: 1;
  }
  .mrm-brand span {
    display: block; margin-top: 3px;
    color: #8D8A74;
    font-size: 10px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase;
  }
  .mrm-nav-links { display: none; align-items: center; gap: 24px }
  .mrm-nav-links a {
    color: #4F5442;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    transition: color .15s ease;
  }
  .mrm-nav-links a:hover { color: #363E27 }
  .mrm-menu {
    width: 42px; height: 42px;
    display: grid; place-items: center;
    border: 1.5px solid rgba(54,62,39,.16);
    border-radius: 6px; background: rgba(255,255,255,.7); color: #1A1A0E;
  }
  .mrm-mobile {
    position: fixed; z-index: 1000;
    top: 104px; left: 0; right: 0;
    padding: 14px 20px 22px;
    background: #F4E3D5;
    border-bottom: 1px solid rgba(54,62,39,.1);
    box-shadow: 0 24px 48px rgba(0,0,0,.14);
  }
  .mrm-mobile a {
    display: block; padding: 14px 0;
    border-bottom: 1px solid rgba(54,62,39,.09);
    color: #1A1A0E;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
  }
  .mrm-mobile-cta {
    margin-top: 12px; padding: 15px 16px !important;
    border-bottom: 0 !important;
    border-radius: 6px;
    background: #363E27; color: #B8A270 !important;
    text-align: center;
    display: flex !important; align-items: center; justify-content: center; gap: 8px;
  }

  /* ── Hero ── */
  .mrm-hero {
    position: relative; padding-top: 104px;
    background: #363E27; color: #fff; overflow: hidden;
  }
  .mrm-hero::after {
    content: ""; position: absolute; inset: 0;
    background: radial-gradient(ellipse 70% 65% at 72% 45%, rgba(184,162,112,.07), transparent);
    pointer-events: none;
  }
  .mrm-hero-inner {
    position: relative; z-index: 1;
    display: grid; gap: 40px; align-items: stretch;
    min-height: calc(100svh - 104px);
    padding: 48px 0 60px;
  }
  .mrm-hero-copy {
    display: flex; flex-direction: column; justify-content: center; padding: 16px 0;
  }
  .mrm-hero h1 {
    margin: 0; color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(36px, 5.5vw, 66px);
    font-weight: 800;
    letter-spacing: 0; line-height: .96;
    text-wrap: balance;
  }
  .mrm-hero h1 em { color: #B8A270; font-style: normal }
  .mrm-hero-sub {
    max-width: 600px; margin: 24px 0 0;
    color: rgba(255,255,255,.7);
    font-size: 17px; line-height: 1.76;
  }
  .mrm-hero-actions {
    display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px;
  }
  .mrm-hero-proofs {
    display: grid; grid-template-columns: 1fr; gap: 10px;
    margin-top: 38px; max-width: 680px;
  }
  .mrm-proof {
    padding: 14px 18px;
    border-left: 3px solid #B8A270;
    background: rgba(255,255,255,.05);
    border-radius: 0 6px 6px 0;
    backdrop-filter: blur(8px);
  }
  .mrm-proof strong {
    display: block; color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px; font-weight: 700;
  }
  .mrm-proof span {
    display: block; margin-top: 4px;
    color: rgba(255,255,255,.58); font-size: 12px; line-height: 1.45;
  }

  /* Visual card do hero */
  .mrm-hero-visual {
    position: relative; min-height: 540px;
    border-radius: 12px; overflow: hidden;
    background: linear-gradient(145deg, #4F5442 0%, #2E3520 100%);
    box-shadow: 0 36px 90px rgba(0,0,0,.44);
  }
  .mrm-hero-deco {
    position: absolute; inset: 0;
    background:
      radial-gradient(circle 300px at 80% 20%, rgba(184,162,112,.12), transparent),
      radial-gradient(circle 200px at 10% 80%, rgba(184,162,112,.07), transparent);
  }
  .mrm-hero-badge {
    position: absolute; left: 28px; top: 28px; z-index: 2;
    max-width: 286px; padding: 16px 18px;
    background: rgba(19,26,30,.84);
    border: 1px solid rgba(184,162,112,.24);
    border-radius: 8px;
    backdrop-filter: blur(12px);
  }
  .mrm-hero-badge strong {
    display: block; color: #B8A270;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: .14em; text-transform: uppercase;
  }
  .mrm-hero-badge span {
    display: block; margin-top: 7px;
    color: rgba(255,255,255,.76); font-size: 13px; line-height: 1.56;
  }
  .mrm-doctor-card {
    position: absolute; right: 28px; bottom: 28px; z-index: 2;
    width: min(318px, calc(100% - 56px));
    padding: 12px;
    background: rgba(244,227,213,.96);
    border-radius: 10px;
    box-shadow: 0 22px 60px rgba(0,0,0,.36);
  }
  .mrm-doctor-photo {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    border-radius: 7px;
    background: #8D8A74;
    display: block;
  }
  .mrm-doctor-meta { padding: 14px 5px 4px }
  .mrm-doctor-meta strong {
    display: block; color: #1A1A0E;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px; font-weight: 800;
  }
  .mrm-doctor-meta span {
    display: block; margin-top: 4px;
    color: #B8A270;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: .14em; text-transform: uppercase;
  }

  /* ── Stats ── */
  .mrm-stats { background: #131A1E }
  .mrm-stats-grid {
    display: grid; grid-template-columns: 1fr;
  }
  .mrm-stat {
    padding: 28px 0;
    border-bottom: 1px solid rgba(255,255,255,.055);
  }
  .mrm-stat strong {
    display: block; color: #B8A270;
    font-family: 'Montserrat', sans-serif;
    font-size: 32px; font-weight: 800; line-height: 1;
  }
  .mrm-stat span {
    display: block; margin-top: 6px;
    color: rgba(255,255,255,.48);
    font-size: 10px; font-weight: 600;
    letter-spacing: .12em; text-transform: uppercase;
  }
  .mrm-stat-link {
    display: block; text-decoration: none;
    transition: opacity .18s ease;
  }
  .mrm-stat-link:hover { opacity: .78 }
  .mrm-stat-link strong { color: #B8A270 }
  .mrm-stat-link span { color: rgba(255,255,255,.48) }

  /* ── About ── */
  .mrm-about { background: #F4E3D5 }
  .mrm-about-grid { display: grid; gap: 44px; align-items: center }
  .mrm-about-block {
    padding: 32px;
    background: #363E27; color: #fff;
    border-radius: 10px; margin-top: 28px;
  }
  .mrm-about-block p {
    margin: 0; color: rgba(255,255,255,.76);
    font-size: 16px; line-height: 1.84;
  }
  .mrm-about-block p + p { margin-top: 16px }
  .mrm-checks { display: grid; gap: 11px; margin-top: 24px }
  .mrm-check {
    display: flex; gap: 10px; align-items: flex-start;
    color: rgba(255,255,255,.88); font-size: 13px; line-height: 1.45;
  }
  .mrm-check svg { color: #B8A270; flex: none; margin-top: 1px }
  .mrm-about-visual {
    position: relative;
    border-radius: 12px; overflow: hidden;
    background: linear-gradient(150deg, #4F5442 0%, #363E27 100%);
    box-shadow: 0 26px 64px rgba(54,62,39,.22);
    min-height: 480px;
  }
  .mrm-about-visual img {
    width: 100%; height: 100%; min-height: 480px; object-fit: cover; object-position: top center; border-radius: 12px;
  }
  .mrm-credentials {
    display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px;
  }
  .mrm-badge {
    padding: 7px 14px;
    border-radius: 100px;
    border: 1px solid rgba(184,162,112,.3);
    color: #B8A270;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
  }

  /* ── Benefits ── */
  .mrm-benefits { background: #fff }
  .mrm-benefits-grid {
    display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 44px;
  }
  .mrm-benefit {
    padding: 28px;
    border: 1px solid rgba(54,62,39,.08);
    border-radius: 10px; background: #F4E3D5;
    transition: box-shadow .2s ease, transform .2s ease;
  }
  .mrm-benefit:hover {
    box-shadow: 0 16px 40px rgba(54,62,39,.1);
    transform: translateY(-2px);
  }
  .mrm-benefit-icon {
    width: 48px; height: 48px; margin-bottom: 20px;
    display: grid; place-items: center;
    border-radius: 8px; background: #363E27; color: #B8A270;
  }
  .mrm-benefit h3 {
    margin: 0; color: #1A1A0E;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px; font-weight: 700; line-height: 1.2;
  }
  .mrm-benefit p {
    margin: 10px 0 0; color: #6B6457; font-size: 14px; line-height: 1.68;
  }

  /* ── Treatments ── */
  .mrm-treatments { background: #363E27 }
  .mrm-treatments .mrm-h2 { color: #fff }
  .mrm-treatments-grid {
    display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 44px;
  }
  .mrm-treatment {
    padding: 28px;
    background: #F4E3D5; border-radius: 10px;
    transition: box-shadow .22s ease, transform .22s ease;
  }
  .mrm-treatment:hover {
    box-shadow: 0 18px 48px rgba(0,0,0,.18);
    transform: translateY(-2px);
  }
  .mrm-treatment-icon {
    width: 46px; height: 46px; margin-bottom: 18px;
    display: grid; place-items: center;
    border-radius: 8px; background: #363E27; color: #B8A270;
  }
  .mrm-treatment h3 {
    margin: 0; color: #1A1A0E;
    font-family: 'Montserrat', sans-serif;
    font-size: 19px; font-weight: 700;
  }
  .mrm-treatment p {
    margin: 10px 0 0; color: #6B6457; font-size: 14px; line-height: 1.68;
  }
  .mrm-treatment-link {
    display: inline-flex; align-items: center; gap: 7px;
    margin-top: 18px;
    color: #363E27;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px; font-weight: 700;
    letter-spacing: .08em; text-transform: uppercase;
    transition: gap .15s ease;
  }
  .mrm-treatment-link:hover { gap: 11px }
  .mrm-treatments-cta {
    display: flex; justify-content: center; margin-top: 44px;
  }

  /* ── Process ── */
  .mrm-process { background: #CABAA9 }
  .mrm-process .mrm-h2 { color: #1A1A0E }
  .mrm-steps { display: grid; gap: 14px; margin-top: 44px }
  .mrm-step {
    display: grid; grid-template-columns: auto 1fr; gap: 22px;
    padding: 26px;
    background: #fff; border-radius: 10px;
    box-shadow: 0 10px 32px rgba(54,62,39,.06);
  }
  .mrm-step-n {
    width: 46px; height: 46px; flex-shrink: 0;
    display: grid; place-items: center; border-radius: 50%;
    background: #363E27; color: #B8A270;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px; font-weight: 800;
  }
  .mrm-step h3 {
    margin: 0; color: #1A1A0E;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px; font-weight: 700; line-height: 1.15;
  }
  .mrm-step p { margin: 8px 0 0; color: #6B6457; font-size: 15px; line-height: 1.65 }

  /* ── Differentials ── */
  .mrm-diffs { background: #fff }
  .mrm-diffs-grid {
    display: grid; grid-template-columns: 1fr; gap: 14px; margin-top: 44px;
  }
  .mrm-diff {
    display: flex; gap: 16px; align-items: flex-start;
    padding: 24px;
    border: 1px solid rgba(54,62,39,.09);
    border-radius: 10px; background: #F4E3D5;
    transition: box-shadow .2s ease;
  }
  .mrm-diff:hover { box-shadow: 0 12px 36px rgba(54,62,39,.1) }
  .mrm-diff-icon {
    width: 46px; height: 46px; flex-shrink: 0;
    display: grid; place-items: center;
    border-radius: 8px; background: #363E27; color: #B8A270;
  }
  .mrm-diff strong {
    display: block; color: #1A1A0E;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px; font-weight: 700; line-height: 1.2;
  }
  .mrm-diff p { margin: 6px 0 0; color: #6B6457; font-size: 13px; line-height: 1.58 }

  /* ── Testimonials ── */
  .mrm-testimonials { background: #4F5442 }
  .mrm-testimonials .mrm-h2 { color: #fff }
  .mrm-testimonials-grid {
    display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 44px;
  }
  .mrm-testimonial {
    padding: 28px;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 10px;
  }
  .mrm-testimonial-stars { display: flex; gap: 3px; margin-bottom: 16px; color: #B8A270 }
  .mrm-testimonial blockquote {
    margin: 0;
    color: rgba(255,255,255,.82);
    font-size: 15px; line-height: 1.74; font-style: italic;
  }
  .mrm-testimonial-footer {
    display: flex; align-items: center; gap: 12px; margin-top: 20px;
  }
  .mrm-testimonial-av {
    width: 40px; height: 40px; border-radius: 50%;
    background: #363E27;
    display: grid; place-items: center; flex-shrink: 0;
    color: #B8A270;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px; font-weight: 800;
  }
  .mrm-testimonial strong {
    display: block; color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px; font-weight: 700;
  }
  .mrm-testimonial span {
    display: block; margin-top: 2px;
    color: #B8A270;
    font-size: 10px; font-weight: 600;
    letter-spacing: .08em; text-transform: uppercase;
  }
  .mrm-testimonials-note {
    margin-top: 28px;
    color: rgba(255,255,255,.38);
    font-size: 11px; font-style: italic; text-align: center;
  }

  /* ── Location ── */
  .mrm-location { background: #fff }
  .mrm-location-grid { display: grid; gap: 32px; align-items: center }
  .mrm-location-card {
    padding: 30px; border-radius: 10px;
    background: #363E27; color: #fff;
  }
  .mrm-location-card strong {
    display: block; color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px; font-weight: 700;
  }
  .mrm-location-card p {
    margin: 12px 0 0; color: rgba(255,255,255,.72);
    line-height: 1.72; font-size: 15px;
  }
  .mrm-location-card a { margin-top: 22px }
  .mrm-map {
    min-height: 380px; border-radius: 12px; overflow: hidden;
    box-shadow: 0 20px 54px rgba(54,62,39,.14);
    background: #CABAA9;
  }
  .mrm-map iframe { display: block; width: 100%; height: 100%; min-height: 380px; border: 0 }

  /* ── FAQ ── */
  .mrm-faq { background: #F4E3D5 }
  .mrm-faq-grid { display: grid; gap: 10px; margin-top: 40px }
  .mrm-faq-item {
    background: #fff; border: 1px solid rgba(54,62,39,.09);
    border-radius: 9px; overflow: hidden;
  }
  .mrm-faq-btn {
    width: 100%; padding: 18px 20px;
    display: flex; align-items: center; justify-content: space-between; gap: 14px;
    border: 0; background: transparent; text-align: left;
    color: #1A1A0E;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px; font-weight: 700; line-height: 1.35;
  }
  .mrm-faq-btn svg { flex: none; color: #B8A270; transition: transform .2s ease }
  .mrm-faq-item.open .mrm-faq-btn svg { transform: rotate(180deg) }
  .mrm-faq-answer {
    margin: 0; padding: 0 20px 20px;
    color: #6B6457; font-size: 14px; line-height: 1.7;
  }

  /* ── Final CTA ── */
  .mrm-final {
    position: relative; padding: 92px 0;
    background: #363E27; color: #fff; overflow: hidden;
  }
  .mrm-final::before {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 70% at 20% 50%, rgba(184,162,112,.09), transparent),
      radial-gradient(ellipse 40% 50% at 85% 50%, rgba(184,162,112,.06), transparent);
  }
  .mrm-final-inner {
    position: relative; z-index: 1;
    display: grid; gap: 36px; align-items: center;
  }
  .mrm-final-copy { max-width: 700px }
  .mrm-final h2 {
    max-width: 680px; margin: 0; color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(28px, 4.4vw, 52px);
    font-weight: 800; letter-spacing: 0; line-height: 1.06; text-wrap: balance;
  }
  .mrm-final p {
    max-width: 560px; margin: 18px 0 0;
    color: rgba(255,255,255,.7); font-size: 16px; line-height: 1.76;
  }
  .mrm-final-note {
    display: inline-flex; align-items: center; gap: 8px;
    margin-top: 16px;
    color: rgba(255,255,255,.58); font-size: 13px; font-weight: 600;
  }
  .mrm-final-note svg { color: #B8A270; flex: none }
  .mrm-final-card {
    width: min(100%, 430px);
    justify-self: end;
    padding: 22px;
    border-radius: 10px;
    background: rgba(19,26,30,.72);
    border: 1px solid rgba(184,162,112,.24);
    box-shadow: 0 26px 70px rgba(0,0,0,.26);
    backdrop-filter: blur(14px);
  }
  .mrm-final-card-top {
    display: flex; align-items: flex-start; gap: 12px;
    padding-bottom: 18px; margin-bottom: 18px;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .mrm-final-card-icon {
    width: 42px; height: 42px; flex: none;
    display: grid; place-items: center;
    border-radius: 50%;
    color: #1A1A0E; background: #B8A270;
  }
  .mrm-final-card strong {
    display: block; color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px; font-weight: 800; line-height: 1.2;
  }
  .mrm-final-card span {
    display: block; margin-top: 5px;
    color: rgba(255,255,255,.58); font-size: 13px; line-height: 1.5;
  }
  .mrm-final-actions { display: grid; gap: 14px }
  .mrm-final-actions .mrm-btn {
    width: 100%; justify-content: center;
  }
  .mrm-final-checks {
    display: grid; gap: 10px; margin-top: 16px;
  }
  .mrm-final-check {
    display: flex; align-items: flex-start; gap: 9px;
    color: rgba(255,255,255,.76);
    font-size: 13px; line-height: 1.45;
  }
  .mrm-final-check svg { color: #B8A270; flex: none; margin-top: 1px }

  /* ── Footer ── */
  .mrm-footer { padding: 52px 0 42px; background: #131A1E; color: rgba(255,255,255,.6) }
  .mrm-footer-grid { display: grid; gap: 24px }
  .mrm-footer strong {
    display: block; color: #fff;
    font-family: 'Montserrat', sans-serif; font-weight: 700;
  }
  .mrm-footer p { margin: 10px 0 0; line-height: 1.65; font-size: 14px }
  .mrm-footer a {
    display: inline-flex; align-items: center; gap: 7px;
    margin-top: 8px; color: #B8A270; font-size: 14px;
    text-decoration: none;
    transition: color .18s ease, opacity .18s ease, transform .18s ease;
  }
  .mrm-footer a:hover { color: #D4BE86; transform: translateY(-1px) }
  .mrm-footer-brand {
    display: flex; align-items: center; gap: 12px;
    margin: 0 0 10px; text-decoration: none;
  }
  .mrm-footer-logo {
    width: 54px; height: 54px; border-radius: 50%;
    background: #363E27; overflow: hidden; flex-shrink: 0;
    border: 1px solid rgba(184,162,112,.34);
    box-shadow: 0 10px 26px rgba(0,0,0,.34);
  }
  .mrm-footer-logo img { width: 100%; height: 100%; object-fit: cover; display: block }
  .mrm-footer-brand-text strong {
    font-size: 17px; font-weight: 800; line-height: 1;
  }
  .mrm-footer-brand-text span {
    display: block; margin-top: 4px;
    color: #B8A270;
    font-family: 'Montserrat', sans-serif;
    font-size: 9px; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
  }
  .mrm-footer-kicker {
    display: inline-flex; align-items: center;
    margin-top: 12px; padding: 6px 10px;
    border-radius: 999px;
    background: rgba(184,162,112,.08);
    border: 1px solid rgba(184,162,112,.16);
    color: rgba(255,255,255,.7);
    font-size: 11px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
  }
  .mrm-footer-links {
    display: grid; gap: 4px; margin-top: 8px;
  }
  .mrm-footer-muted-link {
    color: rgba(255,255,255,.64) !important;
  }
  .mrm-footer-muted-link svg { color: #B8A270 }
  .mrm-footer-divider {
    margin: 36px 0 0; padding-top: 24px;
    border-top: 1px solid rgba(255,255,255,.07);
    display: flex; flex-wrap: wrap; gap: 10px;
    align-items: center; justify-content: space-between;
    color: rgba(255,255,255,.3); font-size: 12px;
  }
  .mrm-footer-divider a { color: rgba(255,255,255,.4); margin: 0; font-size: 12px }
  .mrm-footer-divider a:hover { color: #B8A270 }

  /* ── Galeria ── */
  .mrm-galeria { background: #131A1E }
  .mrm-galeria .mrm-h2 { color: #fff }
  .mrm-galeria .mrm-lead { color: rgba(255,255,255,.55) }
  .mrm-galeria-fotos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-top: 44px;
  }
  .mrm-galeria-fotos img {
    width: 100%; aspect-ratio: 1/1;
    object-fit: cover; border-radius: 6px;
    display: block;
    transition: transform .22s ease, opacity .22s ease;
  }
  .mrm-galeria-fotos img:hover { transform: scale(1.03); opacity: .88 }
  .mrm-galeria-videos {
    margin-top: 32px;
    display: flex; gap: 14px;
    overflow-x: auto; padding-bottom: 12px;
    scrollbar-width: thin; scrollbar-color: rgba(184,162,112,.4) transparent;
  }
  .mrm-galeria-videos::-webkit-scrollbar { height: 4px }
  .mrm-galeria-videos::-webkit-scrollbar-thumb { background: rgba(184,162,112,.4); border-radius: 2px }
  .mrm-galeria-video {
    flex: none; width: 220px; aspect-ratio: 9/16; border-radius: 10px; overflow: hidden;
    background: #1E2730;
    box-shadow: 0 10px 30px rgba(0,0,0,.36);
  }
  .mrm-galeria-video video {
    width: 100%; height: 100%; object-fit: cover; display: block;
  }
  .mrm-galeria-note {
    margin-top: 22px; text-align: center;
    color: rgba(255,255,255,.28); font-size: 11px; font-style: italic;
  }
  @media(max-width: 679px) {
    .mrm-galeria-fotos { grid-template-columns: repeat(3, 1fr); gap: 5px }
    .mrm-galeria-video { width: 180px }
  }
  @media(min-width: 680px) {
    .mrm-galeria-fotos { grid-template-columns: repeat(4, 1fr) }
  }
  @media(min-width: 980px) {
    .mrm-galeria-fotos { grid-template-columns: repeat(6, 1fr) }
  }

  /* ── WhatsApp FAB ── */
  .mrm-wa {
    position: fixed; right: 18px; bottom: 18px; z-index: 950;
    width: 58px; height: 58px;
    display: grid; place-items: center;
    border-radius: 50%; background: #25D366; color: #fff;
    box-shadow: 0 12px 36px rgba(37,211,102,.32);
    animation: mrm-pulse 2.2s ease-out infinite;
    transition: transform .18s ease;
  }
  .mrm-wa:hover { transform: translateY(-2px) scale(1.04); animation-play-state: paused }
  @keyframes mrm-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,.58), 0 12px 36px rgba(37,211,102,.32) }
    68%  { box-shadow: 0 0 0 18px rgba(37,211,102,0), 0 12px 36px rgba(37,211,102,.32) }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0), 0 12px 36px rgba(37,211,102,.32) }
  }

  /* ── Responsive ── */
  @media(min-width: 680px) {
    .mrm-hero-proofs { grid-template-columns: repeat(3, 1fr) }
    .mrm-stats-grid { grid-template-columns: repeat(4, 1fr) }
    .mrm-stat { border-bottom: 0; border-right: 1px solid rgba(255,255,255,.055) }
    .mrm-stat:last-child { border-right: 0 }
    .mrm-benefits-grid { grid-template-columns: repeat(2, 1fr) }
    .mrm-treatments-grid { grid-template-columns: repeat(2, 1fr) }
    .mrm-diffs-grid { grid-template-columns: repeat(2, 1fr) }
    .mrm-testimonials-grid { grid-template-columns: repeat(3, 1fr) }
    .mrm-footer-grid { grid-template-columns: 1.6fr .9fr 1.25fr 1.05fr }
  }
  @media(min-width: 980px) {
    .mrm-nav-links { display: flex }
    .mrm-menu { display: none }
    .mrm-hero-inner { grid-template-columns: minmax(0, 1fr) 526px }
    .mrm-about-grid { grid-template-columns: 1.1fr .9fr }
    .mrm-treatments-grid { grid-template-columns: repeat(3, 1fr) }
    .mrm-diffs-grid { grid-template-columns: repeat(4, 1fr) }
    .mrm-location-grid { grid-template-columns: .84fr 1.16fr }
    .mrm-final-inner { grid-template-columns: minmax(0, 1fr) 430px }
  }
  @media(max-width: 679px) {
    .mrm-wrap { width: min(100% - 32px, 1160px) }
    .mrm-topbar { min-height: 48px; flex-wrap: wrap; gap: 4px 8px }
    .mrm-nav { top: 48px }
    .mrm-mobile { top: 114px }
    .mrm-hero { padding-top: 114px }
    .mrm-hero-inner { min-height: auto; padding: 36px 0 52px }
    .mrm-hero-actions .mrm-btn { width: 100% }
    .mrm-desktop-text { display: none }
    .mrm-mobile-text { display: inline }
    .mrm-treatments-cta .mrm-btn {
      width: 100%;
      min-height: 48px;
      padding: 0 16px;
      font-size: 11px;
      letter-spacing: .04em;
      white-space: nowrap;
    }
    .mrm-hero-visual {
      min-height: 0;
      display: grid;
      gap: 18px;
      padding: 18px;
      overflow: visible;
    }
    .mrm-hero-badge {
      position: relative;
      left: auto; right: auto; top: auto;
      max-width: none;
      width: 100%;
    }
    .mrm-doctor-card {
      position: relative;
      right: auto; bottom: auto;
      justify-self: center;
      width: min(280px, 100%);
      padding: 10px;
    }
    .mrm-doctor-meta strong { font-size: 15px }
    .mrm-doctor-meta span { font-size: 9px }
    .mrm-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; padding: 20px 0 }
    .mrm-stat {
      padding: 16px 14px; border-bottom: 0; border-right: 0 !important;
      border-radius: 8px; background: rgba(255,255,255,.04);
    }
    .mrm-stat strong { font-size: 24px }
    .mrm-section { padding: 64px 0 }
    .mrm-about-visual { min-height: 360px }
    .mrm-final-inner { grid-template-columns: 1fr }
    .mrm-final-card { justify-self: stretch; padding: 18px }
  }
`;

// ── Icons ──────────────────────────────────────────────────────────────────────
function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

// ── Componentes ───────────────────────────────────────────────────────────────
function Topbar() {
  return (
    <div className="mrm-topbar">
      <span className="mrm-topbar-dot" aria-hidden="true" />
      <strong>Proposta comercial</strong>
      <span className="mrm-topbar-sep">·</span>
      <span>Prévia conceitual desenvolvida pela LumaSites.com.br</span>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="mrm-nav" aria-label="Navegação principal">
        <div className="mrm-wrap mrm-nav-inner">
          <a className="mrm-brand" href="#top" onClick={close}>
            <span className="mrm-brand-mark">
              <img src={imgs.logo} alt="Logo Dr. Murillo Martins" width={320} height={320} />
            </span>
            <span>
              <strong>Dr. Murillo Martins</strong>
              <span>Cirurgião-Dentista · Imbituba SC</span>
            </span>
          </a>
          <div className="mrm-nav-links">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
            <a
              className="mrm-btn mrm-btn--gold"
              href={WA()}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={14} /> Agendar avaliação
            </a>
          </div>
          <button
            className="mrm-menu"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mrm-mobile">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={close}>{item.label}</a>
          ))}
          <a
            className="mrm-mobile-cta"
            href={WA()}
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            <WhatsAppIcon size={14} /> Agendar avaliação
          </a>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="mrm-hero">
      <div className="mrm-wrap mrm-hero-inner">
        <div className="mrm-hero-copy">
          <p className="mrm-eyebrow">Implantodontia em Imbituba — SC</p>
          <h1>
            Recupere seu <em>sorriso</em> com segurança, conforto e naturalidade.
          </h1>
          <p className="mrm-hero-sub">
            Implantes dentários planejados individualmente, com tecnologia moderna
            e o cuidado que você merece — para devolver função, estética e confiança.
          </p>
          <div className="mrm-hero-actions">
            <a
              className="mrm-btn mrm-btn--gold"
              href={WA("Olá, Dr. Murillo! Gostaria de agendar minha avaliação gratuita.")}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={16} /> Agendar avaliação gratuita
            </a>
            <a className="mrm-btn mrm-btn--ghost-white" href="#tratamentos">
              Ver tratamentos <ArrowRight size={15} />
            </a>
          </div>
          <div className="mrm-hero-proofs">
            <div className="mrm-proof">
              <strong>Diagnóstico individualizado</strong>
              <span>Cada caso é avaliado e planejado do zero.</span>
            </div>
            <div className="mrm-proof">
              <strong>Tecnologia aplicada</strong>
              <span>Precisão desde o diagnóstico até a entrega.</span>
            </div>
            <div className="mrm-proof">
              <strong>Atendimento humanizado</strong>
              <span>Escuta real antes de qualquer procedimento.</span>
            </div>
          </div>
        </div>

        <div className="mrm-hero-visual" aria-label="Dr. Murillo Martins — Consultório">
          <div className="mrm-hero-deco" aria-hidden="true" />
          <div className="mrm-hero-badge">
            <strong>Cirurgião-Dentista</strong>
            <span>
              Especialista em implantodontia com formação pela UNISUL e pós-graduação em endodontia.
            </span>
          </div>
          <div className="mrm-doctor-card">
            <img
              className="mrm-doctor-photo"
              src={imgs.retrato}
              alt="Dr. Murillo Martins — Cirurgião-Dentista"
              width={640}
              height={800}
              decoding="async"
              fetchPriority="high"
            />
            <div className="mrm-doctor-meta">
              <strong>Dr. Murillo Martins</strong>
              <span>CRO-SC 15196 · Cirurgião-Dentista</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mrm-stats" aria-label="Números do consultório">
      <div className="mrm-wrap mrm-stats-grid">
        {stats.map(({ value, label, href }) => (
          <div className="mrm-stat" key={label}>
            {href ? (
              <a href={href} target="_blank" rel="noreferrer" className="mrm-stat-link">
                <strong>{value}</strong>
                <span>{label}</span>
              </a>
            ) : (
              <>
                <strong>{value}</strong>
                <span>{label}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="mrm-section mrm-about">
      <div className="mrm-wrap mrm-about-grid">
        <div>
          <p className="mrm-eyebrow mrm-eyebrow--dark">Sobre o Dr. Murillo</p>
          <h2 className="mrm-h2" style={{ color: "#1A1A0E" }}>
            Seu sorriso em mãos experientes.
          </h2>
          <div className="mrm-about-block">
            <p>
              O Dr. Murillo Martins é cirurgião-dentista formado pela Universidade
              do Sul de Santa Catarina (UNISUL), com especialização em implantodontia
              e pós-graduação em endodontia.
            </p>
            <p>
              Ao longo de mais de 9 anos de prática clínica em Imbituba — SC, desenvolveu
              um atendimento baseado na escuta genuína: cada plano de tratamento começa
              por entender o paciente, não apenas o dente.
            </p>
            <div className="mrm-checks">
              <span className="mrm-check">
                <CheckCircle2 size={17} />
                Especialista em implantodontia
              </span>
              <span className="mrm-check">
                <CheckCircle2 size={17} />
                Pós-graduado em endodontia pela Uningá
              </span>
              <span className="mrm-check">
                <CheckCircle2 size={17} />
                Formação pela UNISUL — Universidade do Sul de SC
              </span>
              <span className="mrm-check">
                <CheckCircle2 size={17} />
                Atendimento em Imbituba, São José e Tubarão
              </span>
            </div>
          </div>
          <div className="mrm-credentials">
            <span className="mrm-badge">CRO-SC 15196</span>
            <span className="mrm-badge">UNISUL 2016</span>
            <span className="mrm-badge">Implantodontia 2019</span>
            <span className="mrm-badge">Endodontia 2018</span>
          </div>
        </div>

        <div
          className="mrm-about-visual"
          aria-label="Dr. Murillo Martins no consultório em Imbituba"
        >
          <img
            src={imgs.consultorio}
            alt="Dr. Murillo Martins no consultório — Imbituba SC"
            width={640}
            height={1136}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="mrm-section mrm-benefits">
      <div className="mrm-wrap">
        <p className="mrm-eyebrow mrm-eyebrow--dark">O que você ganha</p>
        <h2 className="mrm-h2" style={{ color: "#1A1A0E" }}>
          Mais do que dentes.<br />Qualidade de vida de volta.
        </h2>
        <p className="mrm-lead">
          Os tratamentos do Dr. Murillo vão além da técnica — eles devolvem função,
          confiança e a liberdade de sorrir sem pensar duas vezes.
        </p>
        <div className="mrm-benefits-grid">
          {benefits.map(({ Icon, title, desc }) => (
            <article className="mrm-benefit" key={title}>
              <div className="mrm-benefit-icon" aria-hidden="true">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section id="tratamentos" className="mrm-section mrm-treatments">
      <div className="mrm-wrap">
        <p className="mrm-eyebrow">Tratamentos</p>
        <h2 className="mrm-h2">Realizados com precisão e cuidado real.</h2>
        <p className="mrm-lead mrm-lead--white">
          Cada tratamento é precedido por avaliação individualizada. O Dr. Murillo
          indica o caminho mais adequado para o seu caso específico.
        </p>
        <div className="mrm-treatments-grid">
          {treatments.map(({ Icon, title, desc, cta }) => (
            <article className="mrm-treatment" key={title}>
              <div className="mrm-treatment-icon" aria-hidden="true">
                <Icon size={21} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a
                className="mrm-treatment-link"
                href={WA(`Olá, Dr. Murillo! Gostaria de saber mais sobre ${title}.`)}
                target="_blank"
                rel="noreferrer"
              >
                {cta} <ArrowRight size={13} />
              </a>
            </article>
          ))}
        </div>
        <div className="mrm-treatments-cta">
          <a
            className="mrm-btn mrm-btn--gold"
            href={WA("Olá, Dr. Murillo! Gostaria de saber qual tratamento é indicado para mim.")}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={16} />
            <span className="mrm-desktop-text">Quero saber qual tratamento é para mim</span>
            <span className="mrm-mobile-text">Quero saber o tratamento ideal</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" className="mrm-section mrm-process">
      <div className="mrm-wrap">
        <p className="mrm-eyebrow mrm-eyebrow--dark">Como funciona</p>
        <h2 className="mrm-h2">Como é ser atendido pelo Dr. Murillo.</h2>
        <p className="mrm-lead" style={{ color: "#4F5442" }}>
          Um processo claro, seguro e pensado para que você entenda cada etapa
          antes de tomar qualquer decisão.
        </p>
        <div className="mrm-steps">
          {steps.map(({ n, title, desc }) => (
            <article className="mrm-step" key={n}>
              <span className="mrm-step-n" aria-hidden="true">{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="mrm-section mrm-diffs">
      <div className="mrm-wrap">
        <p className="mrm-eyebrow mrm-eyebrow--dark">Por que o Dr. Murillo</p>
        <h2 className="mrm-h2" style={{ color: "#1A1A0E" }}>
          O que faz pacientes continuarem escolhendo.
        </h2>
        <p className="mrm-lead">
          Mais do que resultados clínicos — um atendimento que respeita o tempo,
          a história e a ansiedade de cada paciente.
        </p>
        <div className="mrm-diffs-grid">
          {differentials.map(({ Icon, title, desc }) => (
            <article className="mrm-diff" key={title}>
              <div className="mrm-diff-icon" aria-hidden="true">
                <Icon size={21} />
              </div>
              <div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mrm-section mrm-testimonials">
      <div className="mrm-wrap">
        <p className="mrm-eyebrow">Depoimentos</p>
        <h2 className="mrm-h2">O que nossos pacientes dizem.</h2>
        <div className="mrm-testimonials-grid">
          {testimonials.map(({ initials, name, city, treatment, text, stars }) => (
            <article className="mrm-testimonial" key={name}>
              <div className="mrm-testimonial-stars" aria-label={`${stars} estrelas`}>
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <blockquote>"{text}"</blockquote>
              <footer className="mrm-testimonial-footer">
                <div className="mrm-testimonial-av" aria-hidden="true">{initials}</div>
                <div>
                  <strong>{name} · {city}</strong>
                  <span>{treatment}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
        <p className="mrm-testimonials-note">
          * Depoimentos ilustrativos para esta proposta. Substituir por avaliações reais do Google ou relatos de pacientes autorizados.
        </p>
      </div>
    </section>
  );
}

function LazyGalleryVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || active) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "420px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div className="mrm-galeria-video" ref={ref}>
      {active && (
        <video
          src={src}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          controls={false}
          aria-label={label}
        />
      )}
    </div>
  );
}

function Gallery() {
  return (
    <section className="mrm-section mrm-galeria">
      <div className="mrm-wrap">
        <p className="mrm-eyebrow">Galeria de trabalhos</p>
        <h2 className="mrm-h2">Resultados reais, histórias reais.</h2>
        <p className="mrm-lead">
          Registros autênticos do dia a dia clínico do Dr. Murillo — procedimentos,
          casos concluídos e momentos do consultório em Imbituba.
        </p>

        <div className="mrm-galeria-fotos">
          {galeriaFotos.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Registro do consultório Dr. Murillo Martins — foto ${i + 1}`}
              width={320}
              height={569}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>

        <div className="mrm-galeria-videos">
          {galeriaVideos.map((src, i) => (
            <LazyGalleryVideo
              key={src}
              src={src}
              label={`Vídeo ${i + 1} — consultório Dr. Murillo Martins`}
            />
          ))}
        </div>

        <p className="mrm-galeria-note">
          Conteúdo extraído dos destaques do{" "}
          <a href={IG_URL} target="_blank" rel="noreferrer" style={{ color: "#B8A270", textDecoration: "none" }}>
            Instagram @drmurillomartins
          </a>
        </p>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="mrm-section mrm-location" aria-label="Localização do consultório">
      <div className="mrm-wrap mrm-location-grid">
        <div>
          <p className="mrm-eyebrow mrm-eyebrow--dark">Localização</p>
          <h2 className="mrm-h2" style={{ color: "#1A1A0E" }}>
            Atendendo em Imbituba — SC.
          </h2>
          <p className="mrm-lead">
            Consultório com infraestrutura moderna e ambiente projetado para o
            seu conforto — desde a espera até o final do atendimento.
          </p>
          <div className="mrm-location-card">
            <strong>Consultório Dr. Murillo Martins</strong>
            <p>
              Rua Nereu Ramos, 124 — Sala 06<br />
              Centro · Imbituba — SC
            </p>
            <a
              className="mrm-btn mrm-btn--gold"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={15} /> Abrir no Google Maps
            </a>
          </div>
        </div>
        <div>
          <img
            src={imgs.fachada}
            alt="Fachada do Consultório Dr. Murillo Martins em Imbituba SC"
            width={640}
            height={800}
            loading="lazy"
            decoding="async"
            style={{ width: "100%", borderRadius: 12, marginBottom: 16, objectFit: "cover", maxHeight: 220 }}
          />
          <div className="mrm-map">
            <iframe
              title="Mapa — Consultório Dr. Murillo Martins em Imbituba SC"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number>(-1);

  return (
    <section id="faq" className="mrm-section mrm-faq">
      <div className="mrm-wrap">
        <p className="mrm-eyebrow mrm-eyebrow--dark">Dúvidas frequentes</p>
        <h2 className="mrm-h2" style={{ color: "#1A1A0E" }}>
          Perguntas antes da primeira consulta.
        </h2>
        <div className="mrm-faq-grid">
          {faqs.map(({ q, a }, i) => {
            const active = open === i;
            return (
              <div className={`mrm-faq-item${active ? " open" : ""}`} key={q}>
                <button
                  className="mrm-faq-btn"
                  type="button"
                  aria-expanded={active}
                  onClick={() => setOpen(active ? -1 : i)}
                >
                  {q}
                  <ChevronDown size={18} />
                </button>
                {active && <p className="mrm-faq-answer">{a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mrm-final">
      <div className="mrm-wrap mrm-final-inner">
        <div className="mrm-final-copy">
          <p className="mrm-eyebrow">Pronto para começar?</p>
          <h2>Seu novo sorriso começa com uma conversa.</h2>
          <p>
            Agende sua avaliação e descubra o melhor caminho para o seu caso.
            Sem compromisso, sem pressão — apenas clareza sobre o que você pode alcançar.
          </p>
          <span className="mrm-final-note">
            <MapPin size={15} /> Atendimento em Imbituba, São José e Tubarão — SC
          </span>
        </div>
        <div className="mrm-final-card">
          <div className="mrm-final-card-top">
            <span className="mrm-final-card-icon" aria-hidden="true">
              <Calendar size={20} />
            </span>
            <div>
              <strong>Avaliação individual</strong>
              <span>Uma conversa objetiva para entender seu caso e explicar os próximos passos.</span>
            </div>
          </div>
          <div className="mrm-final-actions">
            <a
              className="mrm-btn mrm-btn--gold"
              href={WA("Olá, Dr. Murillo! Gostaria de agendar minha avaliação.")}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={16} /> Agendar pelo WhatsApp
            </a>
            <div className="mrm-final-checks">
              {["Sem compromisso", "Plano explicado com clareza", "Atendimento humanizado"].map((item) => (
                <span className="mrm-final-check" key={item}>
                  <CheckCircle2 size={15} /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mrm-footer">
      <div className="mrm-wrap">
        <div className="mrm-footer-grid">
          <div>
            <a href="#top" className="mrm-footer-brand">
              <span className="mrm-footer-logo">
                <img src={imgs.logo} alt="Logo Dr. Murillo Martins" width={320} height={320} />
              </span>
              <span className="mrm-footer-brand-text">
                <strong>Dr. Murillo Martins</strong>
                <span>Cirurgião-Dentista · Imbituba SC</span>
              </span>
            </a>
            <p>
              Especialista em implantodontia e reabilitação oral
              — Imbituba, SC.
            </p>
            <span className="mrm-footer-kicker">CRO-SC 15196</span>
          </div>
          <div>
            <strong>Links rápidos</strong>
            <div className="mrm-footer-links">
              {navItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <strong>Endereço</strong>
            <a
              className="mrm-footer-muted-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir endereço no Google Maps"
            >
              <MapPin size={14} />
              <span>
              Rua Nereu Ramos, 124 — Sala 06<br />
              Centro · Imbituba — SC
              </span>
            </a>
          </div>
          <div>
            <strong>Redes sociais</strong>
            <a href={IG_URL} target="_blank" rel="noreferrer" aria-label="Instagram Dr. Murillo Martins">
              <InstagramIcon size={14} />
              @drmurillomartins
            </a>
            <a href={FB_URL} target="_blank" rel="noreferrer" aria-label="Facebook Dr. Murillo Martins">
              <FacebookIcon size={14} />
              dr.murillomartins
            </a>
          </div>
        </div>
        <div className="mrm-footer-divider">
          <span>© {new Date().getFullYear()} Dr. Murillo Martins · Todos os direitos reservados</span>
          <span>
            Prévia conceitual por{" "}
            <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
              LumaSites.com.br
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function MurilloMartinsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Topbar />
      <Navbar />
      <main className="mrm">
        <Hero />
        <Stats />
        <About />
        <Benefits />
        <Treatments />
        <Process />
        <Differentials />
        <Testimonials />
        <Gallery />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <a
        className="mrm-wa"
        href={WA()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Dr. Murillo pelo WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
