"use client";

import { useEffect, useState } from "react";
import { Instagram, Menu, X, ChevronRight, Check, ArrowRight, Building2, User } from "lucide-react";

/* ─── LINKS ───────────────────────────────────────────────── */
const WA      = "https://wa.me/5581985609936?text=Ol%C3%A1%2C+Thiago!+Vim+pelo+site+e+gostaria+de+agendar+uma+aula.";
const IG      = "https://www.instagram.com/thiagoliveirapersonal/";
const PT      = "https://br.pinterest.com/thiagoliveirapersonal/";
const SYMPLA  = "https://www.sympla.com.br/evento/funcional-mes-das-maes-by-thiago-oliveira/2945848";
const TABELA  = "https://micaelamirelaa.my.canva.site/tabela-de-valores-atualizado-story";

/* Local assets extracted from the public Canva link bio. */
const IMG = {
  hero:   "/images/thiagooliveira/hero.jpg",
  sobre:  "/images/thiagooliveira/sobre.jpg",
  corp:   "/images/thiagooliveira/corporativo.jpg",
};

/* ─── DATA ────────────────────────────────────────────────── */
const navItems = [
  { href: "#servicos",    label: "Serviços" },
  { href: "#corporativo", label: "Empresas" },
  { href: "#planos",      label: "Planos" },
  { href: "#sobre",       label: "Sobre" },
];

const stripItems = [
  { num: "3x",         label: "Aulas por semana" },
  { num: "Online",     label: "+ Presencial" },
  { num: "Avaliação",  label: "de progresso" },
  { num: "Corporativo",label: "para empresas" },
];

const services = [
  {
    n: "01",
    title: "Treino Presencial",
    desc: "Sessões personalizadas para o seu ritmo e objetivo, com acompanhamento técnico em cada movimento.",
    items: ["Treino individualizado", "Progressão estruturada", "3 sessões semanais", "Acompanhamento próximo"],
  },
  {
    n: "02",
    title: "Assessoria Online",
    desc: "Orientação remota com planejamento de treino, ajustes periódicos e suporte contínuo. Para quem treina em qualquer lugar.",
    items: ["Plano de treino personalizado", "App de acompanhamento", "Suporte por mensagem", "Ajustes semanais"],
  },
  {
    n: "03",
    title: "Avaliação Física",
    desc: "Medição real do seu progresso. Saiba exatamente o quanto você está evoluindo com dados concretos.",
    items: ["Avaliação completa", "Métricas de progresso", "Histórico de evolução", "Relatório personalizado"],
  },
];

const corpServices = [
  { title: "Palestras",           desc: "Saúde, qualidade de vida e bem-estar para equipes." },
  { title: "Ginástica Laboral",   desc: "Atividade física regular no ambiente de trabalho." },
  { title: "Treino Funcional",    desc: "Sessões coletivas de alta energia e resultado." },
  { title: "Eventos Temáticos",   desc: "Ações especiais para datas comemorativas." },
];

const plans = [
  {
    name: "START",
    price: "1.590",
    period: "trimestral",
    badge: null,
    items: [
      "3 aulas semanais",
      "Ebook impulsionador de resultados",
      "Acesso ao clube CLUBTH10",
    ],
  },
  {
    name: "IMPULSE FIT",
    price: "1.710",
    period: "trimestral",
    badge: "Mais popular",
    items: [
      "3 aulas semanais",
      "App de treino básico",
      "Avaliação física completa",
      "Ebook impulsionador de resultados",
      "Acesso ao clube CLUBTH10",
    ],
  },
  {
    name: "FIT MASTER",
    price: "1.943",
    period: "trimestral",
    badge: null,
    items: [
      "3 aulas semanais",
      "Assessoria premium",
      "App de treino premium",
      "Avaliação física completa",
      "Ebook impulsionador de resultados",
      "Acesso ao clube CLUBTH10",
    ],
  },
];

/* ─── WHATSAPP ICON ───────────────────────────────────────── */
const WaIcon = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const PinterestIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

/* ─── CSS ─────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap');

  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; cursor: pointer; border: none; }

  :root {
    --to-bar:    48px;
    --to-nav:    66px;
    --to-navy:   #011423;
    --to-navy2:  #172D44;
    --to-navy3:  #23405F;
    --to-blue:   #496481;
    --to-orange: #FF4001;
    --to-amber:  #F9A01B;
    --to-dk-or:  #BE3004;
    --to-bg:     #F4F5F5;
    --to-white:  #FFFFFF;
    --to-ink:    #0D0D0D;
    --to-soft:   rgba(255,255,255,.88);
    --to-muted:  rgba(255,255,255,.56);
    --to-ldk:    rgba(255,255,255,.10);
    --to-llt:    rgba(0,0,0,.09);
    --to-wa:     #25D366;
  }

  .to-page {
    overflow-x: clip;
    font-family: 'Inter', system-ui, sans-serif;
    background: var(--to-navy);
    color: #fff;
  }

  /* ══ PREVIEW BAR ═════════════════════════════════════════ */
  .to-prebar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1001;
    min-height: var(--to-bar);
    padding: 6px 20px;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    background: #000D1A;
    text-align: center;
    font-family: 'Inter', sans-serif;
    border-bottom: 1px solid rgba(255,64,1,.18);
  }
  .to-prebar-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--to-orange); flex: none;
    animation: to-dot-pulse 1.8s ease-out infinite;
  }
  @keyframes to-dot-pulse {
    0%  { box-shadow: 0 0 0 0 rgba(255,64,1,.8); }
    70% { box-shadow: 0 0 0 9px rgba(255,64,1,0); }
    100%{ box-shadow: 0 0 0 0 rgba(255,64,1,0); }
  }
  .to-prebar-label {
    font-size: 11px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase;
    color: #fff;
  }
  .to-prebar-sub {
    font-size: 11px; color: rgba(255,255,255,.5);
  }
  .to-prebar-sub a { color: rgba(255,255,255,.72); text-decoration: underline; text-underline-offset: 2px; }
  .to-prebar-sub a:hover { color: #fff; }

  /* ══ NAV ═════════════════════════════════════════════════ */
  .to-nav {
    position: fixed; z-index: 1000;
    inset: var(--to-bar) 0 auto 0;
    height: var(--to-nav);
    transition: background .3s, box-shadow .3s;
    font-family: 'Inter', sans-serif;
  }
  .to-nav.scrolled {
    background: rgba(1,20,35,.94);
    backdrop-filter: blur(16px);
    box-shadow: 0 1px 0 rgba(255,64,1,.12);
  }
  .to-nav-inner {
    width: min(1200px, calc(100% - 40px));
    margin: 0 auto; height: 100%;
    display: flex; align-items: center; justify-content: space-between; gap: 20px;
  }
  .to-brand { display: flex; flex-direction: column; gap: 2px; line-height: 1; }
  .to-brand strong {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 22px; letter-spacing: .06em;
    color: #fff;
  }
  .to-brand small {
    font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
    color: var(--to-orange);
  }
  .to-nav-links { display: none; align-items: center; gap: 28px; }
  .to-nav-links a {
    font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    color: rgba(255,255,255,.68);
    position: relative; padding-bottom: 2px;
    transition: color .2s;
  }
  .to-nav-links a::after {
    content: ""; position: absolute; bottom: -2px; left: 0; right: 0;
    height: 2px; background: var(--to-orange);
    transform: scaleX(0); transform-origin: left;
    transition: transform .22s ease;
  }
  .to-nav-links a:hover { color: #fff; }
  .to-nav-links a:hover::after { transform: scaleX(1); }
  .to-nav-cta {
    min-height: 40px; padding: 0 18px;
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 6px;
    background: var(--to-orange);
    color: #fff;
    font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase;
    box-shadow: 0 4px 16px rgba(255,64,1,.32);
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .to-nav-cta:hover {
    background: #E53500;
    box-shadow: 0 6px 20px rgba(255,64,1,.44);
    transform: translateY(-1px);
  }
  .to-nav-links a.to-nav-cta::after { display: none; }
  .to-menu-btn {
    min-height: 44px; min-width: 44px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 6px;
    background: rgba(255,255,255,.08); color: #fff;
    transition: background .2s;
  }
  .to-menu-btn:hover { background: rgba(255,255,255,.14); }

  /* ══ MOBILE MENU ════════════════════════════════════════= */
  .to-mob-menu {
    position: fixed; z-index: 999;
    inset: calc(var(--to-bar) + var(--to-nav)) 0 auto 0;
    background: #010F1E;
    padding: 10px 20px 20px;
    display: flex; flex-direction: column;
    border-bottom: 1px solid var(--to-ldk);
    box-shadow: 0 24px 48px rgba(0,0,0,.5);
    animation: to-mob-in .2s ease;
  }
  @keyframes to-mob-in {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: none; }
  }
  .to-mob-menu a {
    padding: 13px 0;
    border-bottom: 1px solid var(--to-ldk);
    font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    color: rgba(255,255,255,.72);
    transition: color .15s, padding-left .15s;
  }
  .to-mob-menu a:hover { color: var(--to-orange); padding-left: 6px; }
  .to-mob-menu a:last-child { border-bottom: none; }

  /* ══ WRAP ════════════════════════════════════════════════ */
  .to-wrap { width: min(1200px, calc(100% - 40px)); margin: 0 auto; }

  /* ══ HERO ════════════════════════════════════════════════ */
  .to-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100svh;
    padding-top: calc(var(--to-bar) + var(--to-nav));
    background: var(--to-navy);
  }
  .to-hero-left {
    display: flex; flex-direction: column; justify-content: center;
    padding: 44px 48px 48px max(40px, calc((100vw - 1200px) / 2 + 20px));
    position: relative;
  }
  .to-hero-content {
    width: min(100%, 590px);
    position: relative; z-index: 1;
  }
  .to-hero-left::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 0% 40%, rgba(255,64,1,.08) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 50% 100%, rgba(23,45,68,.8) 0%, transparent 70%);
    pointer-events: none;
  }
  .to-hero-right {
    position: relative;
    background: var(--to-navy2);
    overflow: hidden;
    min-height: 560px;
  }
  .to-hero-photo {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: top center;
    opacity: 0;
    transition: opacity .9s ease;
  }
  .to-hero-ready .to-hero-photo { opacity: 1; }
  .to-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(1,20,35,.1) 0%,
      rgba(1,20,35,.15) 50%,
      rgba(1,20,35,.72) 88%,
      rgba(1,20,35,.92) 100%
    );
  }
  .to-hero-badge {
    position: absolute; bottom: 28px; left: 24px;
    padding: 12px 18px;
    background: rgba(1,20,35,.85);
    border: 1px solid rgba(255,64,1,.3);
    border-left: 3px solid var(--to-orange);
    border-radius: 0 8px 8px 0;
    backdrop-filter: blur(10px);
    opacity: 0; transform: translateY(10px);
    transition: opacity .6s ease .8s, transform .6s ease .8s;
  }
  .to-hero-ready .to-hero-badge { opacity: 1; transform: none; }
  .to-hero-badge strong { display: block; font-size: 14px; font-weight: 700; color: #fff; }
  .to-hero-badge span { font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--to-orange); }

  /* hero text entrance */
  .to-hero-kicker {
    display: inline-flex; align-items: center; gap: 10px;
    margin-bottom: 12px;
    font-size: 11px; font-weight: 800; letter-spacing: .22em; text-transform: uppercase;
    color: var(--to-orange);
    position: relative; z-index: 1;
    opacity: 0; transform: translateY(10px);
    transition: opacity .4s ease 0s, transform .4s ease 0s;
  }
  .to-hero-kicker::before { content: ""; width: 28px; height: 2px; background: var(--to-orange); }
  .to-hero-ready .to-hero-kicker { opacity: 1; transform: none; }

  .to-hero h1 {
    margin: 0;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: clamp(42px, 4.8vw, 68px);
    line-height: 1.0; letter-spacing: .03em;
    color: #fff;
    position: relative; z-index: 1;
    opacity: 0; transform: translateY(12px);
    transition: opacity .45s ease .08s, transform .45s ease .08s;
  }
  .to-hero h1 em { font-style: normal; color: var(--to-orange); }
  .to-hero-ready h1 { opacity: 1; transform: none; }

  .to-hero-sub {
    margin: 18px 0 0; max-width: 520px;
    font-size: 16px; line-height: 1.65; color: rgba(255,255,255,.72);
    position: relative; z-index: 1;
    opacity: 0; transform: translateY(10px);
    transition: opacity .45s ease .18s, transform .45s ease .18s;
  }
  .to-hero-ready .to-hero-sub { opacity: 1; transform: none; }

  .to-hero-actions {
    display: flex; flex-wrap: wrap; gap: 12px;
    margin-top: 24px;
    position: relative; z-index: 1;
    opacity: 0; transform: translateY(10px);
    transition: opacity .4s ease .28s, transform .4s ease .28s;
  }
  .to-hero-ready .to-hero-actions { opacity: 1; transform: none; }

  .to-hero-trust {
    display: flex; flex-wrap: wrap; gap: 24px;
    margin-top: 28px; padding-top: 22px;
    border-top: 1px solid rgba(255,255,255,.1);
    position: relative; z-index: 1;
    opacity: 0;
    transition: opacity .4s ease .38s;
  }
  .to-hero-ready .to-hero-trust { opacity: 1; }
  .to-trust-item { display: flex; flex-direction: column; gap: 2px; }
  .to-trust-item strong { font-size: 13px; font-weight: 800; color: #fff; }
  .to-trust-item span { font-size: 11px; color: rgba(255,255,255,.5); }

  /* ══ HERO PILLS ══════════════════════════════════════════ */
  .to-hero-pills {
    display: flex; flex-wrap: wrap; gap: 8px;
    margin-top: 20px;
    position: relative; z-index: 1;
    opacity: 0; transform: translateY(10px);
    transition: opacity .4s ease .22s, transform .4s ease .22s;
  }
  .to-hero-ready .to-hero-pills { opacity: 1; transform: none; }
  .to-hero-pill {
    padding: 5px 14px; border-radius: 20px;
    border: 1px solid rgba(255,64,1,.3);
    background: rgba(255,64,1,.08);
    font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    color: rgba(255,255,255,.78);
  }

  /* ══ BUTTONS ════════════════════════════════════════════= */
  .to-btn-orange {
    min-height: 52px; padding: 0 28px;
    display: inline-flex; align-items: center; gap: 9px;
    border-radius: 8px;
    background: var(--to-orange);
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase;
    box-shadow: 0 8px 24px rgba(255,64,1,.32);
    position: relative; overflow: hidden;
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .to-btn-orange::before {
    content: ""; position: absolute; top: 0; left: -100%;
    width: 55%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent);
    transition: left .45s ease;
  }
  .to-btn-orange:hover { background: #E53500; box-shadow: 0 12px 32px rgba(255,64,1,.44); transform: translateY(-1px); }
  .to-btn-orange:hover::before { left: 150%; }

  .to-btn-outline {
    min-height: 52px; padding: 0 24px;
    display: inline-flex; align-items: center; gap: 8px;
    border: 1.5px solid rgba(255,255,255,.22); border-radius: 8px;
    background: transparent; color: rgba(255,255,255,.82);
    font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
    transition: border-color .2s, background .2s, color .2s, transform .15s;
  }
  .to-btn-outline:hover { border-color: var(--to-orange); background: rgba(255,64,1,.08); color: #fff; transform: translateY(-1px); }

  .to-btn-navy {
    min-height: 52px; padding: 0 28px;
    display: inline-flex; align-items: center; gap: 9px;
    border-radius: 8px;
    background: var(--to-navy2);
    border: 1.5px solid var(--to-navy3);
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
    transition: background .2s, border-color .2s, transform .15s;
  }
  .to-btn-navy:hover { background: var(--to-navy3); border-color: var(--to-blue); transform: translateY(-1px); }

  /* ══ STRIP (scorecard) ═══════════════════════════════════ */
  .to-strip { background: #000D1A; border-top: 1px solid rgba(255,64,1,.14); border-bottom: 1px solid rgba(255,64,1,.14); }
  .to-strip-inner {
    width: min(1200px, calc(100% - 40px)); margin: 0 auto;
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: rgba(255,255,255,.06);
  }
  .to-strip-cell {
    background: #010F1E; padding: 22px 28px;
    display: flex; flex-direction: column; gap: 3px;
    transition: background .22s;
  }
  .to-strip-cell:hover { background: rgba(255,64,1,.06); }
  .to-strip-cell strong {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 26px; letter-spacing: .04em;
    color: var(--to-orange); line-height: 1;
  }
  .to-strip-cell span { font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.56); }

  /* ══ SECTION BASE ════════════════════════════════════════ */
  .to-section { padding: 96px 0; }
  .to-sec-kicker {
    display: inline-block; margin-bottom: 10px;
    font-size: 11px; font-weight: 800; letter-spacing: .22em; text-transform: uppercase;
    color: var(--to-orange);
  }
  .to-sec-h2 {
    margin: 0;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: clamp(36px, 4.5vw, 60px); letter-spacing: .03em; line-height: .96;
    color: #fff;
  }
  .to-sec-h2.dark { color: var(--to-navy); }
  .to-sec-lead {
    margin: 14px 0 0; max-width: 600px;
    font-size: 15px; line-height: 1.85;
    color: rgba(255,255,255,.62);
  }
  .to-sec-lead.dark { color: rgba(13,13,13,.65); }

  /* ══ DIAGONAL DIVIDER ════════════════════════════════════ */
  .to-divider {
    height: 56px; position: relative; overflow: hidden;
  }
  .to-divider.navy-to-light { background: var(--to-navy); }
  .to-divider.navy-to-light::after {
    content: ""; position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 100%;
    background: var(--to-bg);
    clip-path: polygon(0 100%, 100% 0%, 100% 100%);
  }
  .to-divider.light-to-navy { background: var(--to-bg); }
  .to-divider.light-to-navy::after {
    content: ""; position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 100%;
    background: var(--to-navy);
    clip-path: polygon(0 0%, 100% 100%, 0 100%);
  }
  .to-divider.navy-to-dk { background: var(--to-navy); }
  .to-divider.navy-to-dk::after {
    content: ""; position: absolute;
    bottom: 0; left: 0; right: 0; height: 100%;
    background: #000D1A;
    clip-path: polygon(0 100%, 100% 0%, 100% 100%);
  }
  .to-divider.dk-to-navy { background: #000D1A; }
  .to-divider.dk-to-navy::after {
    content: ""; position: absolute;
    bottom: 0; left: 0; right: 0; height: 100%;
    background: var(--to-navy);
    clip-path: polygon(0 0%, 100% 100%, 0 100%);
  }

  /* ══ PATH SELECTOR ═══════════════════════════════════════ */
  .to-paths-section { background: var(--to-bg); padding: 80px 0; }
  .to-paths-head { text-align: center; margin-bottom: 48px; }
  .to-paths-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
  }
  .to-path-card {
    padding: 40px 36px;
    border-radius: 16px;
    display: flex; flex-direction: column; gap: 20px;
    transition: transform .25s, box-shadow .25s;
  }
  .to-path-card:hover { transform: translateY(-4px); }
  .to-path-card.individual {
    background: var(--to-navy);
    border: 1.5px solid rgba(255,64,1,.18);
    box-shadow: 0 8px 40px rgba(1,20,35,.22);
  }
  .to-path-card.individual:hover { box-shadow: 0 16px 56px rgba(255,64,1,.14); }
  .to-path-card.empresa {
    background: var(--to-navy2);
    border: 1.5px solid rgba(73,100,129,.4);
    box-shadow: 0 8px 40px rgba(1,20,35,.18);
  }
  .to-path-card.empresa:hover { box-shadow: 0 16px 56px rgba(1,20,35,.32); }
  .to-path-icon {
    width: 52px; height: 52px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
  }
  .to-path-card.individual .to-path-icon { background: rgba(255,64,1,.15); color: var(--to-orange); }
  .to-path-card.empresa .to-path-icon { background: rgba(73,100,129,.25); color: #7AACCC; }
  .to-path-title {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 30px; letter-spacing: .04em;
    color: #fff; line-height: 1;
  }
  .to-path-desc { font-size: 14px; line-height: 1.7; color: rgba(255,255,255,.65); margin: 0; }
  .to-path-items { display: flex; flex-direction: column; gap: 8px; }
  .to-path-item {
    display: flex; align-items: center; gap: 10px;
    font-size: 13px; color: rgba(255,255,255,.8); font-weight: 500;
  }
  .to-path-card.individual .to-path-item svg { color: var(--to-orange); flex: none; }
  .to-path-card.empresa .to-path-item svg { color: #7AACCC; flex: none; }

  /* ══ SERVICES ════════════════════════════════════════════ */
  .to-services-section { background: var(--to-navy); padding: 96px 0; }
  .to-services-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 20px; margin-top: 52px;
  }
  .to-svc-card {
    padding: 36px 28px;
    background: rgba(255,255,255,.04);
    border: 1.5px solid rgba(255,255,255,.09);
    border-radius: 14px;
    display: flex; flex-direction: column; gap: 0;
    position: relative; overflow: hidden;
    transition: border-color .25s, background .25s, transform .25s, box-shadow .25s;
  }
  .to-svc-card::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0;
    height: 3px; background: var(--to-orange);
    transform: scaleX(0); transform-origin: left;
    transition: transform .3s ease;
  }
  .to-svc-card:hover { border-color: rgba(255,64,1,.28); background: rgba(255,64,1,.04); transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,.28); }
  .to-svc-card:hover::before { transform: scaleX(1); }
  .to-svc-num {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 48px; letter-spacing: .04em;
    color: rgba(255,64,1,.18); line-height: 1;
    margin-bottom: 4px;
  }
  .to-svc-title {
    font-size: 14px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase;
    color: var(--to-orange);
    margin-bottom: 14px; padding-bottom: 14px;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .to-svc-desc { font-size: 13.5px; line-height: 1.75; color: rgba(255,255,255,.62); margin-bottom: 20px; }
  .to-svc-list { display: flex; flex-direction: column; gap: 8px; flex: 1; }
  .to-svc-item {
    display: flex; align-items: center; gap: 8px;
    font-size: 13px; color: rgba(255,255,255,.8);
  }
  .to-svc-item svg { color: var(--to-orange); flex: none; }
  .to-svc-cta {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 24px; padding-top: 20px;
    min-height: 44px;
    border-top: 1px solid rgba(255,255,255,.08);
    font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
    color: var(--to-orange);
    transition: gap .2s;
  }
  .to-svc-cta:hover { gap: 10px; }

  /* ══ CORPORATE ═══════════════════════════════════════════ */
  .to-corp-section {
    background: #000D1A; padding: 96px 0;
    position: relative; overflow: hidden;
  }
  .to-corp-section::before {
    content: ""; position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 80% at 100% 50%, rgba(255,64,1,.06) 0%, transparent 60%),
      radial-gradient(ellipse 40% 60% at 0% 80%, rgba(35,64,95,.3) 0%, transparent 55%);
    pointer-events: none;
  }
  .to-corp-inner {
    width: min(1200px, calc(100% - 40px)); margin: 0 auto;
    display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: start;
    position: relative; z-index: 1;
  }
  .to-corp-right { display: flex; flex-direction: column; gap: 16px; }
  .to-corp-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 32px;
  }
  .to-corp-card {
    padding: 22px 20px;
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 10px;
    transition: border-color .22s, background .22s;
  }
  .to-corp-card:hover { border-color: rgba(255,64,1,.24); background: rgba(255,64,1,.04); }
  .to-corp-card-title { font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 6px; }
  .to-corp-card-desc { font-size: 12.5px; color: rgba(255,255,255,.52); line-height: 1.6; }
  .to-event-card {
    margin-top: 32px;
    padding: 24px;
    background: rgba(255,64,1,.08);
    border: 1px solid rgba(255,64,1,.24);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
    transition: background .2s, border-color .2s;
  }
  .to-event-card:hover { background: rgba(255,64,1,.12); border-color: rgba(255,64,1,.38); }
  .to-event-label { font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--to-orange); margin-bottom: 4px; }
  .to-event-title { font-size: 15px; font-weight: 700; color: #fff; }
  .to-event-arrow { flex: none; color: var(--to-orange); }
  .to-corp-photo {
    border-radius: 14px; overflow: hidden;
    position: relative;
    aspect-ratio: 4/5;
  }
  .to-corp-photo img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
  .to-corp-photo-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,13,26,.72) 0%, transparent 55%);
  }

  /* ══ PLANS ═══════════════════════════════════════════════ */
  .to-plans-section { background: var(--to-bg); padding: 96px 0; }
  .to-plans-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 16px; margin-top: 52px; align-items: start;
  }
  .to-plan-card {
    padding: 36px 28px;
    border-radius: 16px;
    display: flex; flex-direction: column; gap: 0;
    position: relative;
    transition: transform .25s, box-shadow .25s;
  }
  .to-plan-card.standard {
    background: var(--to-navy);
    border: 1.5px solid rgba(255,255,255,.1);
  }
  .to-plan-card.featured {
    background: var(--to-navy);
    border: 2px solid var(--to-orange);
    box-shadow: 0 0 0 4px rgba(255,64,1,.08), 0 16px 48px rgba(255,64,1,.16);
    transform: translateY(-8px);
  }
  .to-plan-card:not(.featured):hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(1,20,35,.24); }
  .to-plan-badge {
    position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
    padding: 4px 16px; border-radius: 20px;
    background: var(--to-orange);
    font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase;
    color: #fff; white-space: nowrap;
    box-shadow: 0 4px 16px rgba(255,64,1,.4);
  }
  .to-plan-name {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 28px; letter-spacing: .06em;
    color: #fff; margin-bottom: 4px;
  }
  .to-plan-price {
    display: flex; align-items: baseline; gap: 4px;
    margin: 16px 0 4px;
  }
  .to-plan-currency { font-size: 18px; font-weight: 700; color: rgba(255,255,255,.7); }
  .to-plan-value {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 52px; letter-spacing: .02em; line-height: 1;
    color: #fff;
  }
  .to-plan-card.featured .to-plan-value { color: var(--to-orange); }
  .to-plan-period { font-size: 11px; color: rgba(255,255,255,.5); margin-bottom: 24px; }
  .to-plan-divider { border: none; border-top: 1px solid rgba(255,255,255,.08); margin: 0 0 22px; }
  .to-plan-items { display: flex; flex-direction: column; gap: 10px; flex: 1; }
  .to-plan-item {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 13px; color: rgba(255,255,255,.8); line-height: 1.45;
  }
  .to-plan-item svg { color: var(--to-orange); flex: none; margin-top: 1px; }
  .to-plan-cta {
    margin-top: 28px;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    min-height: 50px; border-radius: 8px;
    font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase;
    font-family: 'Inter', sans-serif;
    transition: background .2s, transform .15s, box-shadow .2s;
  }
  .to-plan-card.standard .to-plan-cta {
    background: rgba(255,255,255,.07);
    border: 1.5px solid rgba(255,255,255,.12);
    color: rgba(255,255,255,.82);
  }
  .to-plan-card.standard .to-plan-cta:hover { background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.2); transform: translateY(-1px); }
  .to-plan-card.featured .to-plan-cta {
    background: var(--to-orange);
    border: none;
    color: #fff;
    box-shadow: 0 8px 24px rgba(255,64,1,.36);
  }
  .to-plan-card.featured .to-plan-cta:hover { background: #E53500; box-shadow: 0 12px 32px rgba(255,64,1,.48); transform: translateY(-1px); }
  .to-plans-note {
    text-align: center; margin-top: 28px;
    font-size: 13px; color: rgba(13,13,13,.52);
  }
  .to-plans-note a { color: var(--to-navy3); font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
  .to-plans-note a:hover { color: var(--to-navy); }

  /* ══ SOBRE ═══════════════════════════════════════════════ */
  .to-sobre-section { background: var(--to-navy); padding: 96px 0; }
  .to-sobre-grid {
    display: grid; grid-template-columns: 1fr 1.2fr;
    gap: 64px; align-items: center;
  }
  .to-sobre-photo-wrap {
    position: relative; border-radius: 14px; overflow: hidden;
    aspect-ratio: 3/4;
    box-shadow: 0 24px 64px rgba(0,0,0,.5);
  }
  .to-sobre-photo-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
  .to-sobre-photo-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(1,20,35,.6) 0%, transparent 50%);
  }
  .to-sobre-cref {
    position: absolute; bottom: 20px; left: 20px; right: 20px;
    padding: 14px 18px;
    background: rgba(1,20,35,.88);
    border: 1px solid rgba(255,64,1,.28);
    border-radius: 8px;
    backdrop-filter: blur(8px);
  }
  .to-sobre-cref strong { display: block; font-size: 13px; font-weight: 700; color: #fff; }
  .to-sobre-cref span { font-size: 11px; color: var(--to-orange); font-weight: 600; letter-spacing: .1em; text-transform: uppercase; }
  .to-sobre-name {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 42px; letter-spacing: .03em; line-height: 1;
    color: #fff; margin: 12px 0 4px;
  }
  .to-sobre-role {
    display: block;
    font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
    color: var(--to-orange); margin-bottom: 24px;
  }
  .to-sobre-text { font-size: 15px; line-height: 1.85; color: rgba(255,255,255,.65); margin: 0 0 28px; }
  .to-sobre-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .to-sobre-tag {
    padding: 6px 14px; border-radius: 20px;
    border: 1px solid rgba(255,255,255,.12);
    font-size: 11px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase;
    color: rgba(255,255,255,.7);
    transition: border-color .2s, background .2s, color .2s;
  }
  .to-sobre-tag:hover { border-color: var(--to-orange); background: rgba(255,64,1,.08); color: var(--to-orange); }

  /* ══ CTA FINAL ═══════════════════════════════════════════ */
  .to-cta-section {
    background: var(--to-navy2); padding: 96px 0;
    position: relative; overflow: hidden;
  }
  .to-cta-section::before {
    content: ""; position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 70% 70% at 50% 100%, rgba(255,64,1,.12) 0%, transparent 60%),
      radial-gradient(ellipse 50% 50% at 10% 20%, rgba(255,64,1,.06) 0%, transparent 55%);
    pointer-events: none;
  }
  .to-cta-inner {
    position: relative; z-index: 1;
    max-width: 680px; margin: 0 auto; text-align: center;
  }
  .to-cta-h2 {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: clamp(48px, 6vw, 80px); letter-spacing: .04em; line-height: .95;
    color: #fff; margin: 12px 0 0;
  }
  .to-cta-h2 em { font-style: normal; color: var(--to-orange); }
  .to-cta-sub { font-size: 16px; line-height: 1.75; color: rgba(255,255,255,.64); margin: 18px 0 0; }
  .to-cta-actions {
    display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;
    margin-top: 36px;
  }

  /* ══ FOOTER ══════════════════════════════════════════════ */
  .to-footer {
    background: var(--to-navy);
    border-top: 1px solid rgba(255,64,1,.12);
    font-family: 'Inter', sans-serif;
  }
  .to-footer-body {
    padding: 56px 0 44px;
    display: grid; grid-template-columns: 1.6fr 1fr 1fr; gap: 48px;
  }
  .to-footer-brand strong {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 26px; letter-spacing: .05em;
    display: block; color: #fff; margin-bottom: 8px;
  }
  .to-footer-brand p { margin: 0 0 20px; font-size: 13px; line-height: 1.75; color: rgba(255,255,255,.48); max-width: 260px; }
  .to-footer-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .to-footer-tag {
    padding: 4px 10px; border-radius: 4px;
    border: 1px solid rgba(255,255,255,.12);
    font-size: 11px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase;
    color: rgba(255,255,255,.48);
    transition: border-color .2s, color .2s;
  }
  .to-footer-tag:hover { border-color: var(--to-orange); color: var(--to-orange); }
  .to-footer-col h4 {
    margin: 0 0 16px;
    font-size: 11px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase;
    color: #fff;
  }
  .to-footer-col a {
    display: flex; align-items: center; gap: 8px;
    color: rgba(255,255,255,.52); padding: 5px 0; font-size: 13px;
    transition: color .15s, gap .15s;
  }
  .to-footer-col a:hover { color: var(--to-orange); gap: 12px; }
  .to-footer-col a svg { flex: none; }
  .to-footer-line { border: none; border-top: 1px solid rgba(255,255,255,.06); margin: 0; }
  .to-footer-bottom {
    padding: 16px 0;
    display: flex; flex-wrap: wrap; gap: 10px;
    align-items: center; justify-content: space-between;
    font-size: 12px; color: rgba(255,255,255,.4);
  }
  .to-footer-bottom a { color: var(--to-orange); font-weight: 700; transition: color .15s; }
  .to-footer-bottom a:hover { color: #fff; }

  /* ══ WHATSAPP FLOAT ══════════════════════════════════════ */
  .to-wa-float {
    position: fixed; z-index: 1002;
    right: max(20px, env(safe-area-inset-right));
    bottom: max(20px, env(safe-area-inset-bottom));
    width: 58px; height: 58px; border-radius: 50%;
    background: var(--to-wa);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 20px rgba(37,211,102,.4);
    transform: scale(0) translateY(20px); opacity: 0;
    animation: to-wa-in .5s cubic-bezier(.22,.9,.36,1) 1s forwards,
               to-wa-pulse 2s ease-out 1.8s infinite;
    transition: transform .2s ease;
  }
  .to-wa-float:hover { transform: scale(1.07) !important; }
  @keyframes to-wa-in {
    to { transform: scale(1) translateY(0); opacity: 1; }
  }
  @keyframes to-wa-pulse {
    0%  { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,.4); }
    70% { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 14px rgba(37,211,102,0); }
    100%{ box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,0); }
  }

  /* ══ SCROLL REVEAL ═══════════════════════════════════════ */
  [data-to-anim] {
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(.22,.9,.36,1);
    transition-duration: .6s;
  }
  [data-to-anim="up"]    { opacity: 0; transform: translateY(28px); }
  [data-to-anim="left"]  { opacity: 0; transform: translateX(-28px); }
  [data-to-anim="right"] { opacity: 0; transform: translateX(28px); }
  [data-to-anim="scale"] { opacity: 0; transform: scale(.95); }
  [data-to-anim].to-anim-in { opacity: 1; transform: none; }
  [data-to-delay="1"] { transition-delay: .1s; }
  [data-to-delay="2"] { transition-delay: .2s; }
  [data-to-delay="3"] { transition-delay: .3s; }
  [data-to-delay="4"] { transition-delay: .4s; }

  /* ══ FOCUS ═══════════════════════════════════════════════ */
  a:focus-visible, button:focus-visible {
    outline: 2px solid var(--to-orange);
    outline-offset: 3px; border-radius: 4px;
  }
  .to-wa-float:focus-visible { outline-color: #fff; }

  /* ══ RESPONSIVE ══════════════════════════════════════════ */
  @media (min-width: 768px) {
    .to-nav-links { display: flex; }
    .to-menu-btn { display: none; }
  }

  @media (max-width: 1024px) {
    .to-services-grid { grid-template-columns: repeat(2, 1fr); }
    .to-plans-grid { grid-template-columns: 1fr; max-width: 440px; margin-inline: auto; }
    .to-plan-card.featured { transform: none; }
    .to-plan-card.featured:hover { transform: translateY(-4px); }
    .to-corp-inner { grid-template-columns: 1fr; }
    .to-corp-photo { aspect-ratio: 16/9; max-height: 320px; }
    .to-strip-inner { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .to-sobre-grid { grid-template-columns: 1fr; }
    .to-sobre-photo-wrap { aspect-ratio: 4/3; }
    .to-footer-body { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 767px) {
    :root { --to-nav: 58px; }
    .to-hero {
      grid-template-columns: 1fr;
      grid-template-areas: "photo" "text";
      min-height: auto;
    }
    .to-hero-left {
      grid-area: text;
      padding: 28px 20px 36px;
    }
    .to-hero-content { width: 100%; }
    .to-hero-right {
      grid-area: photo;
      min-height: 260px; max-height: 360px;
      height: 60vw;
    }
    .to-hero-actions a { width: 100%; justify-content: center; }
    .to-paths-grid { grid-template-columns: 1fr; }
    .to-services-grid { grid-template-columns: 1fr; }
    .to-corp-grid { grid-template-columns: 1fr; }
    .to-corp-photo {
      aspect-ratio: 4 / 3;
      max-height: none;
    }
    .to-corp-photo img { object-position: center 38%; }
    .to-sobre-grid { grid-template-columns: 1fr; }
    .to-sobre-photo-wrap { aspect-ratio: 1 / 1; }
    .to-sobre-photo-wrap img { object-position: center 38%; }
    .to-sobre-cref {
      bottom: 12px; left: 12px; right: 12px;
      padding: 11px 13px;
    }
    .to-sobre-cref strong { font-size: 12px; }
    .to-sobre-cref span { font-size: 10px; letter-spacing: .08em; }
    .to-footer-body { grid-template-columns: 1fr; gap: 28px; padding: 40px 0 28px; }
    .to-strip-inner { grid-template-columns: repeat(2, 1fr); }
    .to-section { padding: 64px 0; }
    .to-services-section, .to-corp-section, .to-plans-section, .to-sobre-section, .to-paths-section { padding: 64px 0; }
    .to-cta-section { padding: 72px 0; }
    .to-prebar { flex-direction: column; gap: 2px; }
  }

  /* ══ REDUCED MOTION ══════════════════════════════════════ */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
    html { scroll-behavior: auto; }
    .to-hero-photo, .to-hero-badge, .to-hero-kicker, .to-hero h1,
    .to-hero-sub, .to-hero-actions, .to-hero-trust { opacity: 1; transform: none; transition: none; }
    [data-to-anim] { opacity: 1; transform: none; transition: none; }
  }
`;

/* ─── COMPONENT ───────────────────────────────────────────── */
export default function ThiagoOliveiraPropPage() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [heroReady,  setHeroReady]  = useState(false);

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
    const els = document.querySelectorAll("[data-to-anim]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("to-anim-in");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ── PREVIEW BAR ── */}
      <div className="to-prebar" aria-label="Aviso de proposta">
        <span className="to-prebar-dot" aria-hidden="true" />
        <span className="to-prebar-label">Prévia Conceitual</span>
        <span className="to-prebar-sub">
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
      </div>

      {/* ── NAV ── */}
      <nav className={`to-nav${scrolled ? " scrolled" : ""}`} aria-label="Navegação">
        <div className="to-nav-inner">
          <a className="to-brand" href="#top">
            <strong>Thiago Oliveira</strong>
            <small>Personal Trainer · CREF 010493-G/PE</small>
          </a>
          <div className="to-nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <a className="to-nav-cta" href={WA} target="_blank" rel="noreferrer">
              <WaIcon size={13} /> Agendar Aula
            </a>
          </div>
          <button
            className="to-menu-btn"
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
        <div className="to-mob-menu" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            Agendar pelo WhatsApp
          </a>
        </div>
      )}

      <main className="to-page">

        {/* ── HERO ── */}
        <section
          id="top"
          className={`to-hero${heroReady ? " to-hero-ready" : ""}`}
          aria-label="Hero"
        >
          <div className="to-hero-left">
            <div className="to-hero-content">
              <span className="to-hero-kicker">Personal Trainer · CREF 010493-G/PE</span>
              <h1>
                Treino com <em>direção.</em><br />
                Evolução que você acompanha.
              </h1>
              <p className="to-hero-sub">
                Do treino individual à assessoria online, cada sessão é projetada
                para que você avance — e saiba exatamente o quanto avançou.
              </p>
              <div className="to-hero-pills">
                {["Treino Presencial", "Assessoria Online", "Avaliação Física"].map((p) => (
                  <span className="to-hero-pill" key={p}>{p}</span>
                ))}
              </div>

              <div className="to-hero-actions">
                <a className="to-btn-orange" href={WA} target="_blank" rel="noreferrer">
                  <WaIcon size={16} /> Agendar minha aula
                </a>
                <a className="to-btn-outline" href="#corporativo">
                  Para empresas <ChevronRight size={15} />
                </a>
              </div>
              <div className="to-hero-trust">
                {[
                  { v: "CREF",      l: "010493-G/PE" },
                  { v: "Online",    l: "+ Presencial" },
                  { v: "Igarassu", l: "Pernambuco" },
                  { v: "3 Planos",  l: "disponíveis" },
                ].map((t) => (
                  <div className="to-trust-item" key={t.l}>
                    <strong>{t.v}</strong>
                    <span>{t.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="to-hero-right" aria-hidden="true">
            <img
              className="to-hero-photo"
              src={IMG.hero}
              alt="Thiago Oliveira Personal Trainer"
              fetchPriority="high"
            />
            <div className="to-hero-overlay" />
            <div className="to-hero-badge">
              <strong>Thiago Oliveira</strong>
              <span>Personal Trainer</span>
            </div>
          </div>
        </section>

        {/* ── STRIP ── */}
        <div className="to-strip" aria-label="Serviços em destaque">
          <div className="to-strip-inner">
            {stripItems.map((s) => (
              <div className="to-strip-cell" key={s.label}>
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── PATH SELECTOR ── */}
        <section className="to-paths-section" aria-label="Qual é o seu objetivo">
          <div className="to-wrap">
            <div className="to-paths-head" data-to-anim="up">
              <span className="to-sec-kicker">Escolha o seu caminho</span>
              <h2 className="to-sec-h2 dark">Qual é o seu objetivo?</h2>
              <p className="to-sec-lead dark">
                Thiago atende tanto pessoas que buscam evolução física pessoal
                quanto empresas que querem levar saúde e bem-estar para suas equipes.
              </p>
            </div>

            <div className="to-paths-grid">
              {/* Individual */}
              <div className="to-path-card individual" data-to-anim="left">
                <div className="to-path-icon">
                  <User size={26} />
                </div>
                <div className="to-path-title">Quero treinar<br />e evoluir</div>
                <p className="to-path-desc">
                  Para pessoas que buscam treino personalizado, assessoria online
                  ou avaliação de progresso com acompanhamento real.
                </p>
                <div className="to-path-items">
                  {["Treino presencial", "Assessoria online", "Avaliação física"].map((item) => (
                    <div className="to-path-item" key={item}>
                      <Check size={14} /> {item}
                    </div>
                  ))}
                </div>
                <a className="to-btn-orange" href="#servicos" style={{ marginTop: "8px" }}>
                  Ver serviços <ArrowRight size={15} />
                </a>
              </div>

              {/* Empresa */}
              <div className="to-path-card empresa" data-to-anim="right">
                <div className="to-path-icon">
                  <Building2 size={26} />
                </div>
                <div className="to-path-title">Quero para<br />minha empresa</div>
                <p className="to-path-desc">
                  Soluções de bem-estar para equipes corporativas: palestras,
                  ginástica laboral, treino funcional e eventos temáticos.
                </p>
                <div className="to-path-items">
                  {["Palestras de saúde", "Ginástica laboral", "Treino funcional coletivo"].map((item) => (
                    <div className="to-path-item" key={item}>
                      <Check size={14} /> {item}
                    </div>
                  ))}
                </div>
                <a className="to-btn-outline" href="#corporativo" style={{ marginTop: "8px" }}>
                  Ver soluções <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="to-divider light-to-navy" aria-hidden="true" />

        {/* ── SERVICES ── */}
        <section id="servicos" className="to-services-section" aria-label="Serviços individuais">
          <div className="to-wrap">
            <div data-to-anim="up">
              <span className="to-sec-kicker">Atendimento Individual</span>
              <h2 className="to-sec-h2">Serviços pensados<br />para a sua evolução.</h2>
              <p className="to-sec-lead">
                Cada serviço é estruturado para que você tenha resultado mensurável
                e acompanhamento de verdade — sem achismo.
              </p>
            </div>

            <div className="to-services-grid">
              {services.map((svc, i) => (
                <article
                  className="to-svc-card"
                  data-to-anim="up"
                  data-to-delay={String(i + 1)}
                  key={svc.n}
                >
                  <div className="to-svc-num">{svc.n}</div>
                  <div className="to-svc-title">{svc.title}</div>
                  <p className="to-svc-desc">{svc.desc}</p>
                  <div className="to-svc-list">
                    {svc.items.map((item) => (
                      <div className="to-svc-item" key={item}>
                        <Check size={13} /> {item}
                      </div>
                    ))}
                  </div>
                  <a className="to-svc-cta" href={WA} target="_blank" rel="noreferrer">
                    <WaIcon size={13} /> Agendar agora <ChevronRight size={13} style={{ marginLeft: "auto" }} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="to-divider navy-to-dk" aria-hidden="true" />

        {/* ── CORPORATE ── */}
        <section id="corporativo" className="to-corp-section" aria-label="Soluções corporativas">
          <div className="to-corp-inner">
            <div>
              <div data-to-anim="left">
                <span className="to-sec-kicker">Para Empresas</span>
                <h2 className="to-sec-h2">Sua empresa<br />em movimento.</h2>
                <p className="to-sec-lead" style={{ marginTop: "14px" }}>
                  Thiago Oliveira leva saúde e bem-estar diretamente para o ambiente
                  corporativo. Programas sob medida para equipes de todos os tamanhos.
                </p>
              </div>

              <div className="to-corp-grid" data-to-anim="up" data-to-delay="2">
                {corpServices.map((s) => (
                  <div className="to-corp-card" key={s.title}>
                    <div className="to-corp-card-title">{s.title}</div>
                    <div className="to-corp-card-desc">{s.desc}</div>
                  </div>
                ))}
              </div>

              <a
                className="to-event-card"
                href={SYMPLA}
                target="_blank"
                rel="noreferrer"
                data-to-anim="up"
                data-to-delay="3"
              >
                <div>
                  <div className="to-event-label">Evento público</div>
                  <div className="to-event-title">Funcional Mês das Mães by Thiago Oliveira</div>
                </div>
                <ArrowRight size={20} className="to-event-arrow" />
              </a>
            </div>

            <div className="to-corp-photo" data-to-anim="right">
              <img src={IMG.corp} alt="Thiago Oliveira em atividade" loading="lazy" />
              <div className="to-corp-photo-overlay" />
            </div>
          </div>
        </section>

        <div className="to-divider dk-to-navy" aria-hidden="true" />

        {/* ── PLANS ── */}
        <section id="planos" className="to-plans-section" aria-label="Planos">
          <div className="to-wrap">
            <div data-to-anim="up" style={{ textAlign: "center" }}>
              <span className="to-sec-kicker">Planos</span>
              <h2 className="to-sec-h2 dark">Escolha o plano<br />certo para você.</h2>
              <p className="to-sec-lead dark" style={{ margin: "14px auto 0" }}>
                Todos os planos são trimestrais com 3 aulas semanais.
                Quanto mais você investe, mais ferramentas você tem.
              </p>
            </div>

            <div className="to-plans-grid">
              {plans.map((plan, i) => (
                <div
                  className={`to-plan-card ${plan.badge ? "featured" : "standard"}`}
                  data-to-anim="up"
                  data-to-delay={String(i + 1)}
                  key={plan.name}
                >
                  {plan.badge && <div className="to-plan-badge">{plan.badge}</div>}
                  <div className="to-plan-name">{plan.name}</div>
                  <div className="to-plan-price">
                    <span className="to-plan-currency">R$</span>
                    <span className="to-plan-value">{plan.price}</span>
                  </div>
                  <div className="to-plan-period">/ {plan.period}</div>
                  <hr className="to-plan-divider" />
                  <div className="to-plan-items">
                    {plan.items.map((item) => (
                      <div className="to-plan-item" key={item}>
                        <Check size={13} /> {item}
                      </div>
                    ))}
                  </div>
                  <a
                    className="to-plan-cta"
                    href={WA}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WaIcon size={15} /> Quero este plano
                  </a>
                </div>
              ))}
            </div>

            <p className="to-plans-note">
              Confira a{" "}
              <a href={TABELA} target="_blank" rel="noreferrer">
                tabela de valores completa
              </a>{" "}
              ou fale diretamente pelo WhatsApp para mais informações.
            </p>
          </div>
        </section>

        <div className="to-divider light-to-navy" aria-hidden="true" />

        {/* ── SOBRE ── */}
        <section id="sobre" className="to-sobre-section" aria-label="Sobre Thiago Oliveira">
          <div className="to-wrap">
            <div className="to-sobre-grid">
              <div className="to-sobre-photo-wrap" data-to-anim="left">
                <img src={IMG.sobre} alt="Thiago Oliveira" loading="lazy" />
                <div className="to-sobre-photo-overlay" />
                <div className="to-sobre-cref">
                  <strong>Thiago Agostinho de Oliveira</strong>
                  <span>CREF 010493-G/PE · Igarassu, PE</span>
                </div>
              </div>

              <div data-to-anim="right">
                <span className="to-sec-kicker">Sobre</span>
                <h2 className="to-sobre-name">Thiago Oliveira</h2>
                <span className="to-sobre-role">Profissional de Educação Física</span>
                <p className="to-sobre-text">
                  Graduado, Licenciado e Bacharel em Educação Física (CREF 010493-G/PE),
                  Thiago Oliveira combina treino individual, assessoria online e soluções
                  corporativas em uma atuação versátil e comprometida com o resultado real
                  de cada cliente.
                </p>
                <p className="to-sobre-text">
                  Baseado em Igarassu, Pernambuco, ele atende de forma presencial e online,
                  medindo a evolução de cada aluno com avaliações físicas periódicas.
                  Para empresas, oferece programas completos de bem-estar, do treinamento
                  funcional às palestras corporativas.
                </p>
                <div className="to-sobre-tags">
                  {["Treino Personalizado", "Assessoria Online", "Avaliação Física", "Ginástica Laboral", "Funcional", "Palestras Corporativas"].map((t) => (
                    <span className="to-sobre-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contato" className="to-cta-section" aria-label="Contato">
          <div className="to-wrap">
            <div className="to-cta-inner" data-to-anim="up">
              <span className="to-sec-kicker">Comece agora</span>
              <h2 className="to-cta-h2">
                Vem fazer o<br />treino <em>do quadro!</em>
              </h2>
              <p className="to-cta-sub">
                Clique abaixo, agende sua aula e comece a acompanhar
                a sua evolução com quem sabe orientar de verdade.
              </p>
              <div className="to-cta-actions">
                <a className="to-btn-orange" href={WA} target="_blank" rel="noreferrer">
                  <WaIcon size={18} /> Agendar minha aula agora
                </a>
                <a className="to-btn-outline" href={IG} target="_blank" rel="noreferrer">
                  <Instagram size={16} /> @thiagoliveirapersonal
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="to-footer">
          <div className="to-wrap">
            <div className="to-footer-body">
              <div className="to-footer-brand">
                <strong>Thiago Oliveira</strong>
                <p>
                  Personal trainer em Igarassu/PE. Treino individual, assessoria online,
                  avaliação física e soluções corporativas.
                </p>
                <div className="to-footer-tags">
                  {["CREF 010493-G/PE", "Igarassu/PE", "Online", "Corporativo"].map((t) => (
                    <span className="to-footer-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="to-footer-col">
                <h4>Navegação</h4>
                <a href="#servicos">Serviços</a>
                <a href="#corporativo">Para empresas</a>
                <a href="#planos">Planos</a>
                <a href="#sobre">Sobre</a>
                <a href={WA} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>

              <div className="to-footer-col">
                <h4>Contato</h4>
                <a href={WA} target="_blank" rel="noreferrer">
                  <WaIcon size={14} /> (81) 98560-9936
                </a>
                <a href={IG} target="_blank" rel="noreferrer">
                  <Instagram size={14} /> @thiagoliveirapersonal
                </a>
                <a href={PT} target="_blank" rel="noreferrer">
                  <PinterestIcon /> Pinterest
                </a>
                <a href={SYMPLA} target="_blank" rel="noreferrer">
                  <ArrowRight size={14} /> Evento no Sympla
                </a>
                <a href={TABELA} target="_blank" rel="noreferrer">
                  <ArrowRight size={14} /> Tabela de valores
                </a>
              </div>
            </div>

            <hr className="to-footer-line" />
            <div className="to-footer-bottom">
              <span>© 2026 Thiago Oliveira Personal Trainer. Todos os direitos reservados.</span>
              <span>
                Site por{" "}
                <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                  LumaSites
                </a>
              </span>
            </div>
          </div>
        </footer>
      </main>

      {/* ── WHATSAPP FLOAT ── */}
      <a
        className="to-wa-float"
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Thiago Oliveira pelo WhatsApp"
      >
        <WaIcon size={28} color="white" />
      </a>
    </>
  );
}
