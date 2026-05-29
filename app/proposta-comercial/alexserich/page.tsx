"use client";

import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Brain,
  Dumbbell,
  Instagram,
  Menu,
  ShieldCheck,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

const FORM_URL = "https://form.respondi.app/9xY2CbDM";
const WHATSAPP_URL = FORM_URL;

const imgs = {
  logo: "/images/alexserich/alex-serich-logo-vector.png",
  hero: "/images/alexserich/hero-bg.webp",
  alex: "/images/alexserich/alex-serich.webp",
  alexBio: "/images/alexserich/alex-bio.webp",
  bgNucleo: "/images/alexserich/bg-nucleo.webp",
  conquistar: "/images/alexserich/conquistar-real.webp",
  process: "/images/alexserich/bg-como-sera.jpg",
  proof: "/images/alexserich/depoimentos.webp",
  t01: "/images/alexserich/transformacao-01.webp",
  t02: "/images/alexserich/transformacao-02.webp",
  t04: "/images/alexserich/transformacao-04.webp",
  t05: "/images/alexserich/transformacao-05.webp",
};

const pains = [
  "Treina há meses, mas o corpo não muda",
  "Sente dores ou desconfortos durante os treinos",
  "Está cansado de treinos genéricos de internet",
  "Não sabe se está executando os exercícios corretamente",
  "Quer definição muscular, mas não sabe por onde começar",
  "Já tentou de tudo, mas sempre desiste no meio do caminho",
];

const pillars = [
  {
    n: "01",
    title: "Avaliação Inteligente",
    text: "Antes de prescrever qualquer treino, o método entende postura, mobilidade, histórico e compensações. O corpo deixa de ser tratado no escuro.",
  },
  {
    n: "02",
    title: "Correção & Consciência Corporal",
    text: "A execução vem antes da carga. Cada movimento é ajustado para reduzir risco, ganhar controle e criar base para evoluir.",
  },
  {
    n: "03",
    title: "Força Estruturada",
    text: "Progressão técnica e muscular com direção. Nada de treino aleatório, copiável ou solto da realidade do aluno.",
  },
  {
    n: "04",
    title: "Estética, Performance e Longevidade",
    text: "Resultado visível em 8 semanas, mas com construção para durar: corpo definido, funcional e mais confiante.",
  },
];

const benefits = [
  { text: "Corpo visivelmente mais definido", Icon: Dumbbell },
  { text: "Treinar sem dores ou desconfortos articulares", Icon: ShieldCheck },
  { text: "Técnica impecável em todos os exercícios", Icon: Target },
  { text: "Evolução constante", Icon: TrendingUp },
  { text: "Consciência corporal que poucos têm", Icon: Brain },
  { text: "Confiança total no seu treino", Icon: BadgeCheck },
];

const steps = [
  "Avaliação inicial para entender ponto de partida, limitações e objetivo real.",
  "Protocolo individualizado com treino estruturado para o corpo do aluno.",
  "Acompanhamento semanal com ajustes, feedback e direção prática.",
  "Guia alimentar com nutricionista para potencializar o resultado.",
];

const faq = [
  {
    q: "Em quanto tempo começo a ver resultados?",
    a: "A proposta do Método Núcleo® trabalha uma janela de 8 semanas. Muitos alunos percebem evolução já nas primeiras etapas, principalmente em consciência corporal, controle e redução de desconfortos.",
  },
  {
    q: "Funciona para quem está começando do zero?",
    a: "Sim. A avaliação inicial existe justamente para ajustar o ponto de partida e evitar pular etapas importantes.",
  },
  {
    q: "Vou ter suporte durante o processo?",
    a: "Sim. O acompanhamento inclui feedback semanal, ajustes de protocolo e orientação para manter evolução com segurança.",
  },
];

const proofHighlights = [
  "Evolução visível com protocolo individualizado",
  "Correção técnica antes de aumentar carga",
  "Acompanhamento semanal com ajustes práticos",
  "Consistência para manter o resultado depois das 8 semanas",
  "Guia alimentar com nutricionista para potencializar a mudança",
  "Treino com direção, segurança e consciência corporal",
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

  html { scroll-behavior: smooth; }
  .as-page *, .as-page *::before, .as-page *::after { box-sizing: border-box; }
  .as-page { --black:#000; --ink:#031006; --surface:#08110A; --soft:#101A12; --white:#fff; --muted:rgba(255,255,255,.68); --line:rgba(255,255,255,.11); --red:#FF3F26; --red2:#F53D2D; --green:#B2FE02; background:#000; color:#fff; min-height:100vh; font-family:'Sora',system-ui,sans-serif; overflow-x:clip; text-rendering:optimizeLegibility; }
  .as-page a { color:inherit; text-decoration:none; }
  .as-page img { display:block; max-width:100%; }
  .as-page button { font:inherit; color:inherit; border:0; background:none; cursor:pointer; }
  .as-page h1, .as-page h2, .as-page h3, .as-page p { font-family:'Sora',system-ui,sans-serif; }
  .as-page :focus-visible { outline:3px solid var(--green); outline-offset:4px; }

  .as-skip {
    position:fixed; left:16px; top:12px; z-index:100;
    transform:translateY(-140%);
    padding:10px 14px; border-radius:8px;
    background:var(--green); color:#000; font-size:13px; font-weight:800;
    transition:transform .2s;
  }
  .as-skip:focus { transform:translateY(0); }

  .as-prebar {
    position:fixed; inset:0 0 auto 0; z-index:51;
    min-height:30px; padding:5px 20px;
    display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1px;
    background:var(--red2); text-align:center;
    transition:background .25s ease, box-shadow .25s ease;
  }
  .as-prebar-line {
    display:flex; align-items:center; gap:7px;
    color:#fff; font-size:10px; font-weight:800; letter-spacing:.14em; text-transform:uppercase;
  }
  .as-prebar-dot {
    width:6px; height:6px; border-radius:50%; background:var(--green); flex:none;
    animation:as-dot-pulse 1.6s ease-out infinite;
  }
  @keyframes as-dot-pulse {
    0%  { box-shadow:0 0 0 0 rgba(178,254,2,.9); }
    70% { box-shadow:0 0 0 8px rgba(178,254,2,0); }
    100%{ box-shadow:0 0 0 0 rgba(178,254,2,0); }
  }
  .as-prebar-sub { font-size:10px; color:rgba(255,255,255,.72); }
  .as-prebar-sub a { color:#fff; font-weight:700; text-decoration:underline; text-underline-offset:2px; }
  .as-prebar-sub a:hover { color:var(--green); }

  .as-topbar {
    position:fixed; top:30px; left:0; right:0; z-index:50;
    display:flex; align-items:center; justify-content:center; gap:16px;
    min-height:38px; padding:9px 18px;
    background:linear-gradient(90deg,var(--red2),#ff463f);
    color:#fff; font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase;
  }
  .as-topbar-dot { width:5px; height:5px; border-radius:50%; background:var(--green); }

  .as-nav {
    position:fixed; top:42px; left:0; right:0; z-index:49;
    display:flex; align-items:center; gap:34px;
    padding:18px clamp(22px,5vw,72px);
    background:linear-gradient(180deg,rgba(0,0,0,.92),rgba(0,0,0,.46));
    backdrop-filter:blur(16px);
    border-bottom:1px solid rgba(255,255,255,.07);
  }
  .as-logo { width:222px; max-width:42vw; height:auto; }
  .as-nav-links { display:flex; gap:30px; margin-left:auto; }
  .as-nav-links a { font-size:12px; font-weight:600; color:rgba(255,255,255,.72); transition:color .2s; }
  .as-nav-links a:hover { color:var(--green); }
  .as-menu-toggle { display:none; }
  .as-mobile-menu-cta { display:none; }
  .as-nav-cta {
    padding:13px 22px; border:1px solid rgba(255,255,255,.8); border-radius:10px;
    font-size:12px; font-weight:800; letter-spacing:.04em; text-transform:uppercase;
    transition:background .2s,color .2s,border-color .2s;
  }
  .as-nav-cta:hover { background:var(--red); border-color:var(--red); }

  .as-hero {
    min-height:100svh; padding:172px clamp(22px,6vw,88px) 64px;
    display:flex; align-items:center;
    background:
      linear-gradient(90deg,rgba(0,0,0,.98) 0%,rgba(0,0,0,.88) 38%,rgba(0,0,0,.18) 63%,rgba(0,0,0,0) 100%),
      radial-gradient(ellipse 55% 70% at 78% 45%,rgba(255,63,38,.28),rgba(255,63,38,0) 65%),
      radial-gradient(ellipse 35% 50% at 68% 20%,rgba(255,180,80,.14),rgba(255,180,80,0) 60%),
      url('${imgs.hero}') right bottom/auto calc(100% - 112px) no-repeat;
    position:relative;
  }
  .as-hero::after {
    content:""; position:absolute; inset:auto 0 0; height:180px;
    background:linear-gradient(0deg,#000,rgba(0,0,0,0));
    pointer-events:none;
  }
  .as-hero-inner { width:min(680px,100%); position:relative; z-index:1; top: 80px }
  .as-hero-img-mobile { display:none !important; }
  .as-eyebrow {
    display:inline-flex;
    align-items:center; gap:10px; margin-bottom:22px;
    color:var(--green); font-size:13px; font-weight:800; letter-spacing:.14em; text-transform:uppercase;
  }
  .as-eyebrow::before { content:""; width:34px; height:2px; background:var(--green); }
  .as-h1 {
    margin:0; max-width:650px;
    font-family:'Sora',system-ui,sans-serif !important;
    font-size:clamp(28px,3.6vw,50px); line-height:1.05; font-weight:800; letter-spacing:-.035em;
    text-transform:uppercase; text-wrap:balance;
  }
  .as-red { color:var(--red); font-size:36px }
  .as-h1 .as-red, .as-h1-white { display:block; }
  .as-h1-white { color:#fff; }
  .as-hero-copy {
    max-width:560px; margin:22px 0 30px;
    font-size:clamp(16px,1.45vw,18px); line-height:1.65; color:rgba(255,255,255,.82); font-weight:500;
  }
  .as-actions { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
  .as-primary {
    display:inline-flex; align-items:center; justify-content:center; min-height:58px;
    padding:17px 32px; border-radius:10px; border:none;
    border-top:2px solid #F7E1B3;
    background:linear-gradient(90deg,#F53D2D 0%,#FF916D 50%,#F53D2D 100%);
    color:#fff; font-size:14px; font-weight:800; text-transform:uppercase;
    box-shadow:
      0 10px 20px 0 rgba(255,63,38,.40),
      0 20px 40px 0 rgba(255,63,38,.30),
      0 40px 80px 0 rgba(255,63,38,.20),
      0 60px 120px 0 rgba(255,63,38,.10);
    position:relative; overflow:hidden;
    transition:transform .22s, box-shadow .22s;
    cursor:pointer;
  }
  .as-primary::before {
    content:'';
    background:linear-gradient(10deg,rgba(255,255,255,.8) 12.81%,rgba(255,255,255,0) 66.66%);
    width:70px; height:130%;
    position:absolute;
    transform:translateX(-50%) skew(-25deg);
    bottom:0; pointer-events:none; user-select:none;
    animation:as-shinery 3s infinite ease-in-out;
    filter:blur(4px);
  }
  .as-primary::after {
    content:'';
    position:absolute; top:-10px; left:50%;
    transform:translateX(-50%);
    width:90%; height:20px;
    background:radial-gradient(ellipse at center,rgba(255,233,187,.9) 20%,rgba(255,233,187,.4) 70%,rgba(255,233,187,0) 100%);
    mix-blend-mode:screen; filter:blur(12px);
    pointer-events:none; z-index:1;
  }
  .as-primary:hover {
    transform:translateY(-3px);
    box-shadow:
      0 12px 30px rgba(255,63,38,.40),
      0 30px 60px rgba(255,63,38,.30),
      0 50px 100px rgba(255,63,38,.20);
  }
  .as-primary:active { opacity:.5; }
  @keyframes as-shinery {
    0%,100% { left:-10%; opacity:0; }
    20%      { opacity:1; }
    48%      { left:110%; opacity:1; }
    51%      { opacity:0; }
  }
  .as-secondary {
    display:inline-flex; align-items:center; justify-content:center; min-height:58px;
    padding:17px 26px; border:1px solid rgba(255,255,255,.7); border-radius:10px;
    font-size:14px; font-weight:800; text-transform:uppercase;
    background:rgba(0,0,0,.22);
    transition:background .2s,border-color .2s;
  }
  .as-secondary:hover { background:rgba(255,255,255,.08); border-color:#fff; }
  .as-hero-offer {
    display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:10px;
    max-width:660px; margin-top:34px;
  }
  .as-offer-card {
    min-height:128px; padding:20px 18px;
    border:1px solid rgba(255,255,255,.12);
    border-radius:12px;
    background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.025));
    box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
  }
  .as-offer-card strong {
    display:block; color:var(--green);
    font-size:15px; line-height:1.22; font-weight:800; text-transform:uppercase;
  }
  .as-offer-card span {
    display:block; margin-top:9px;
    color:rgba(255,255,255,.64);
    font-size:12px; line-height:1.45; font-weight:500;
  }

  .as-hero-note {
    display:flex; align-items:center; gap:10px;
    margin-top:18px; color:rgba(255,255,255,.56);
    font-size:12px; font-weight:700; letter-spacing:.04em; text-transform:uppercase;
  }
  .as-hero-note::before { content:""; width:8px; height:8px; border-radius:50%; background:var(--green); box-shadow:0 0 18px rgba(178,254,2,.65); }

  .as-marquee { overflow:hidden; background:linear-gradient(90deg,var(--red2),#ff463f); border-block:1px solid rgba(255,255,255,.1); }
  .as-track { display:flex; width:max-content; animation:as-scroll 25s linear infinite; }
  .as-track span { padding:19px 28px; color:#fff; font-size:16px; font-weight:800; text-transform:uppercase; white-space:nowrap; }
  .as-track b { color:var(--green); }
  @keyframes as-scroll { from { transform:translateX(0); } to { transform:translateX(-50%); } }

  .as-section { padding:clamp(60px,7vw,104px) clamp(22px,6vw,88px); position:relative; scroll-margin-top:112px; }
  .as-section > .as-wrap { position:relative; z-index:1; }
  .as-wrap { width:min(1180px,100%); margin:0 auto; }
  .as-section-grid { display:grid; grid-template-columns:minmax(0,1fr) minmax(320px,.78fr); gap:clamp(38px,7vw,82px); align-items:center; }
  .as-kicker { display:inline-flex; margin-bottom:18px; color:var(--red); font-size:12px; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }
  .as-h2 { margin:0; font-size:clamp(30px,4vw,50px); line-height:1.1; font-weight:700; letter-spacing:-.01em; }
  .as-lead { margin:18px 0 0; max-width:680px; color:var(--muted); font-size:16px; line-height:1.65; }

  .as-problem { background:linear-gradient(180deg,#000 0%,#030605 52%,#060C08 100%); }
  .as-pain-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; margin-top:34px; }
  .as-pain { display:grid; grid-template-columns:44px 1fr; gap:16px; align-items:center; min-height:82px; padding:20px; border:1px solid var(--line); background:linear-gradient(135deg,#070707,#101010); border-radius:10px; }
  .as-pain-num { display:grid; place-items:center; width:44px; height:44px; border-radius:50%; background:rgba(255,63,38,.13); color:var(--red); font-weight:800; }
  .as-pain-text { margin:0; color:rgba(255,255,255,.82); font-size:15px; line-height:1.4; }
  .as-problem-visual {
    border-radius:16px; overflow:hidden; border:1px solid rgba(255,63,38,.28); background:#061008;
    box-shadow:
      0 0 0 1px rgba(255,63,38,.08),
      0 8px 32px rgba(255,63,38,.18),
      0 32px 80px rgba(255,63,38,.10),
      inset 0 1px 0 rgba(255,255,255,.07);
    position:relative;
  }
  .as-problem-visual::after {
    content:""; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255,63,38,.18) 0%, rgba(255,63,38,0) 70%),
      radial-gradient(ellipse 60% 30% at 50% 100%, rgba(0,0,0,.55) 0%, rgba(0,0,0,0) 100%);
  }
  .as-problem-visual img { width:100%; min-height:480px; object-fit:cover; object-position:center top; }

  .as-truth { background:radial-gradient(ellipse 80% 60% at 50% 50%,rgba(255,63,38,.07) 0%,rgba(255,63,38,0) 70%), linear-gradient(180deg,#160808 0%,#0E0404 45%,#160808 100%); text-align:center; border-block:1px solid rgba(255,63,38,.12); position:relative; overflow:hidden; }
  .as-truth::before { content:"90%"; position:absolute; inset:50% auto auto 50%; transform:translate(-50%,-50%); color:rgba(255,63,38,.13); font-size:clamp(160px,28vw,360px); font-weight:800; line-height:1; }
  .as-truth .as-wrap { position:relative; z-index:1; }
  .as-truth-title { margin:0 auto; max-width:780px; font-size:clamp(31px,4.2vw,58px); line-height:1.08; font-weight:800; }
  .as-truth-copy { max-width:720px; margin:22px auto 0; color:rgba(255,255,255,.72); font-size:16px; line-height:1.7; }

  .as-method { background:url('${imgs.bgNucleo}') center/cover no-repeat; position:relative; overflow:hidden; }
  .as-method::before {
    content:""; position:absolute; inset:0;
    background:
      linear-gradient(180deg,#050805 0%,rgba(0,0,0,.22) 18%,rgba(0,0,0,.2) 78%,#000 100%),
      linear-gradient(90deg,rgba(0,0,0,.94),rgba(0,0,0,.76));
  }
  .as-method .as-wrap { position:relative; z-index:1; }
  .as-pillars { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:14px; margin-top:44px; }
  .as-pillar { min-height:270px; padding:26px 20px; border:1px solid rgba(255,255,255,.14); border-radius:12px; background:rgba(0,0,0,.58); backdrop-filter:blur(10px); position:relative; overflow:hidden; }
  .as-pillar::after { content:attr(data-n); position:absolute; right:-4px; bottom:-22px; color:rgba(178,254,2,.08); font-size:120px; font-weight:800; line-height:1; }
  .as-pillar small { color:var(--green); font-size:11px; font-weight:800; letter-spacing:.12em; }
  .as-pillar h3 { margin:14px 0 10px; font-size:17px; line-height:1.2; text-transform:uppercase; }
  .as-pillar p { margin:0; color:rgba(255,255,255,.62); font-size:13px; line-height:1.62; }

  .as-benefits {
    min-height:760px;
    display:flex; align-items:center;
    background:
      linear-gradient(180deg,#000 0%,rgba(0,0,0,0) 15%,rgba(0,0,0,0) 80%,#000 100%),
      linear-gradient(90deg,#000 0%,rgba(0,0,0,.98) 32%,rgba(0,0,0,.66) 54%,rgba(0,0,0,.18) 76%,#000 100%),
      radial-gradient(ellipse 45% 65% at 78% 50%,rgba(255,63,38,.22),rgba(255,63,38,0) 65%),
      radial-gradient(ellipse 28% 38% at 85% 22%,rgba(255,160,60,.13),rgba(255,160,60,0) 60%),
      url('${imgs.conquistar}') right center/auto 100% no-repeat,
      #000;
    position:relative; overflow:hidden;
  }
  .as-benefits::after {
    content:""; position:absolute; inset:auto 0 0; height:150px;
    background:linear-gradient(0deg,#000,rgba(0,0,0,0));
    pointer-events:none;
  }
  .as-benefit-shell {
    display:grid; grid-template-columns:minmax(420px,680px) 1fr; gap:54px; align-items:center;
    position:relative; z-index:1;
  }
  .as-benefit-content { max-width:680px; padding-block:18px; }
  .as-benefit-content .as-h2 { max-width:560px; font-size:clamp(34px,4.5vw,62px); line-height:1.02; }
  .as-benefit-content .as-lead { max-width:560px; margin-top:18px; color:rgba(255,255,255,.74); }
  .as-benefit-image { display:none; }
  .as-benefit-list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:0 28px; max-width:650px; margin-top:34px; }
  .as-benefit {
    display:grid; grid-template-columns:40px 1fr; align-items:start; gap:14px;
    min-height:58px;
    padding:13px 0;
    border-top:1px solid rgba(255,255,255,.11);
    color:#fff; font-size:16px; line-height:1.42; font-weight:600;
  }
  .as-benefit:nth-last-child(-n+2) { border-bottom:1px solid rgba(255,255,255,.11); }
  .as-check {
    display:inline-flex; align-items:center; justify-content:center;
    width:34px; height:34px;
    color:var(--red); flex:0 0 auto;
    background:rgba(255,63,38,.09);
    border:1px solid rgba(255,63,38,.26);
    border-radius:10px;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.06);
  }
  .as-check svg { width:18px; height:18px; stroke-width:2.35; }

  .as-process { background:url('${imgs.process}') center/cover no-repeat; position:relative; overflow:hidden; }
  .as-process::before {
    content:""; position:absolute; inset:0;
    background:
      linear-gradient(180deg,#000 0%,rgba(0,0,0,.16) 18%,rgba(0,0,0,.18) 78%,#000 100%),
      linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.58));
  }
  .as-process .as-wrap { position:relative; z-index:1; }
  .as-steps { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:1px; margin-top:44px; background:rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.14); border-radius:12px; overflow:hidden; }
  .as-step { min-height:200px; padding:26px 20px; background:rgba(0,0,0,.58); }
  .as-step strong { color:var(--green); font-size:11px; letter-spacing:.14em; }
  .as-step p { margin:18px 0 0; color:rgba(255,255,255,.72); font-size:14px; line-height:1.62; }

  .as-gallery { background:radial-gradient(ellipse 70% 50% at 50% 60%,rgba(178,254,2,.04) 0%,rgba(178,254,2,0) 70%), linear-gradient(180deg,#060D07 0%,#040A05 48%,#060D07 100%); }
  .as-gallery-head { display:flex; align-items:end; justify-content:space-between; gap:28px; margin-bottom:34px; }
  .as-gallery-grid { display:grid; grid-template-columns:1.25fr .8fr .8fr; grid-template-rows:280px 280px; gap:12px; }
  .as-gallery-item {
    border-radius:14px; overflow:hidden; border:1px solid rgba(178,254,2,.14); background:#111;
    box-shadow:
      0 4px 24px rgba(0,0,0,.55),
      0 0 0 1px rgba(178,254,2,.05);
    position:relative;
    transition:box-shadow .35s ease, border-color .35s ease;
  }
  .as-gallery-item:first-child { grid-row:span 2; }
  .as-gallery-item::after {
    content:""; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(ellipse 90% 35% at 50% 0%, rgba(178,254,2,.09) 0%, rgba(178,254,2,0) 70%),
      linear-gradient(0deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,0) 40%);
    transition:opacity .35s ease;
  }
  .as-gallery-item:hover {
    box-shadow:
      0 8px 40px rgba(0,0,0,.7),
      0 0 30px rgba(178,254,2,.12),
      0 0 0 1px rgba(178,254,2,.22);
    border-color:rgba(178,254,2,.3);
  }
  .as-gallery-item img { width:100%; height:100%; object-fit:cover; transition:transform .45s ease; }
  .as-gallery-item:hover img { transform:scale(1.035); }

  .as-about {
    min-height:820px;
    display:flex;
    align-items:center;
    position:relative;
    overflow:hidden;
    background:
      linear-gradient(90deg,#000 0%,rgba(0,0,0,.98) 29%,rgba(0,0,0,.52) 53%,rgba(0,0,0,.06) 76%,rgba(0,0,0,.82) 100%),
      linear-gradient(180deg,#000 0%,rgba(0,0,0,0) 18%,rgba(0,0,0,0) 78%,#000 100%),
      radial-gradient(ellipse 50% 60% at 75% 45%,rgba(255,63,38,.2),rgba(255,63,38,0) 60%),
      radial-gradient(ellipse 30% 40% at 80% 18%,rgba(255,160,60,.12),rgba(255,160,60,0) 60%),
      url('${imgs.alexBio}') right center/auto 100% no-repeat,
      #000;
  }
  .as-about-grid {
    display:grid;
    grid-template-columns:minmax(340px,560px) 1fr;
    gap:64px;
    align-items:center;
    position:relative;
    z-index:1;
  }
  .as-about-photo { display:none; }
  .as-about-copy { max-width:620px; }
  .as-quote { margin:26px 0 20px; padding-left:18px; border-left:3px solid var(--red); color:#fff; font-size:20px; line-height:1.34; font-weight:800; }
  .as-about-stats { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:10px; margin-top:26px; }
  .as-about-stat { min-height:86px; padding:16px 14px; border:1px solid rgba(255,255,255,.12); border-radius:12px; background:linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.025)); box-shadow:inset 0 1px 0 rgba(255,255,255,.08); }
  .as-about-stat strong { display:block; color:var(--green); font-size:22px; line-height:1; font-weight:900; }
  .as-about-stat span { display:block; margin-top:8px; color:rgba(255,255,255,.68); font-size:12px; line-height:1.35; font-weight:700; text-transform:uppercase; }
  .as-credentials { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; margin-top:20px; }
  .as-credential { display:flex; align-items:flex-start; gap:10px; min-height:72px; padding:16px; border:1px solid rgba(255,255,255,.11); border-radius:12px; color:#fff; background:rgba(0,0,0,.42); font-size:15px; line-height:1.35; font-weight:700; }
  .as-credential::before { content:"✓"; color:var(--red); font-size:18px; line-height:1.15; font-weight:900; flex:0 0 auto; }
  .as-about-actions { display:flex; align-items:center; gap:16px; flex-wrap:wrap; margin-top:28px; }
  .as-about-microcopy { color:rgba(255,255,255,.58); font-size:13px; line-height:1.45; font-weight:600; }

  .as-proof { background:linear-gradient(180deg,#000 0%,#0C0A07 16%,#0C0A07 82%,#000 100%); }
  .as-proof-grid { display:grid; grid-template-columns:1fr .92fr; gap:54px; align-items:center; }
  .as-proof-image {
    border-radius:16px; overflow:hidden; border:1px solid rgba(178,254,2,.2); background:#111;
    box-shadow:
      0 0 0 1px rgba(178,254,2,.06),
      0 8px 36px rgba(0,0,0,.5),
      0 0 60px rgba(178,254,2,.08),
      inset 0 1px 0 rgba(255,255,255,.07);
    position:relative;
  }
  .as-proof-image::after {
    content:""; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(ellipse 70% 30% at 50% 0%, rgba(178,254,2,.1) 0%, rgba(178,254,2,0) 70%),
      linear-gradient(0deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 35%);
  }
  .as-proof-image img { width:100%; height:auto; }
  .as-scope { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; margin-top:32px; }
  .as-scope-item { padding:14px 16px; border:1px solid rgba(178,254,2,.22); border-radius:10px; background:rgba(178,254,2,.05); color:rgba(255,255,255,.78); font-size:13px; line-height:1.5; }

  .as-faq { background:linear-gradient(180deg,#000 0%,#101010 18%,#101010 82%,#000 100%); border-top:1px solid rgba(255,255,255,.08); }
  .as-faq-list { margin-top:34px; border-top:1px solid var(--line); }
  .as-faq-row { border-bottom:1px solid var(--line); }
  .as-faq-btn { width:100%; display:flex; justify-content:space-between; align-items:center; gap:22px; padding:22px 0; text-align:left; font-size:17px; font-weight:700; }
  .as-faq-icon { width:34px; height:34px; border-radius:50%; display:grid; place-items:center; background:var(--red); color:#fff; flex:0 0 auto; transition:transform .2s; }
  .as-faq-btn[aria-expanded="true"] .as-faq-icon { transform:rotate(45deg); }
  .as-faq-answer { max-height:0; overflow:hidden; color:rgba(255,255,255,.68); line-height:1.7; transition:max-height .25s,padding-bottom .25s; }
  .as-faq-answer.open { max-height:220px; padding-bottom:24px; }

  .as-final {
    min-height:560px;
    display:grid;
    place-items:center;
    text-align:center;
    background:
      radial-gradient(ellipse 70% 55% at 50% 45%,rgba(255,63,38,.2),rgba(255,63,38,0) 66%),
      radial-gradient(ellipse 42% 28% at 50% 34%,rgba(178,254,2,.1),rgba(178,254,2,0) 68%),
      linear-gradient(180deg,#000 0%,#100504 45%,#000 100%);
    padding:88px 22px;
  }
  .as-final h2 {
    margin:0 auto;
    max-width:880px;
    font-size:clamp(38px,4.1vw,64px);
    line-height:1.08;
    font-weight:500;
    letter-spacing:0;
    text-wrap:balance;
  }
  .as-final h2 .as-red {
    display:inline;
    font-size:.72em;
    font-weight:700;
    white-space:nowrap;
  }
  .as-final p { max-width:520px; margin:22px auto 32px; color:rgba(255,255,255,.68); font-size:16px; line-height:1.62; }
  .as-footer {
    background:
      radial-gradient(circle at 18% 0%,rgba(255,63,38,.13),rgba(255,63,38,0) 34%),
      #000;
    border-top:1px solid var(--line);
    color:rgba(255,255,255,.68);
    padding:0 clamp(22px,6vw,88px);
  }
  .as-footer-inner {
    max-width:1220px;
    margin:0 auto;
    display:grid;
    grid-template-columns:minmax(280px,1.2fr) minmax(260px,.95fr) auto;
    gap:42px;
    align-items:start;
    padding:42px 0 34px;
  }
  .as-footer-brand img { width:184px; height:auto; display:block; }
  .as-footer-brand p { max-width:390px; margin:18px 0 0; color:rgba(255,255,255,.62); font-size:14px; line-height:1.62; }
  .as-footer-nav {
    display:grid;
    grid-template-columns:repeat(2,minmax(120px,1fr));
    gap:12px 28px;
  }
  .as-footer-nav a,
  .as-footer-bottom a {
    color:rgba(255,255,255,.72);
    font-size:13px;
    font-weight:700;
    transition:color .18s ease;
  }
  .as-social-link {
    display:inline-flex;
    align-items:center;
    gap:8px;
  }
  .as-social-link svg {
    width:17px;
    height:17px;
    flex:0 0 auto;
    color:var(--red);
  }
  .as-footer-social-mobile { display:none; }
  .as-footer-nav a:hover,
  .as-footer-bottom a:hover { color:#fff; }
  .as-footer-action { display:flex; flex-direction:column; align-items:flex-start; gap:14px; min-width:230px; }
  .as-footer-badge {
    display:inline-flex;
    align-items:center;
    min-height:34px;
    padding:0 14px;
    border:1px solid rgba(178,254,2,.26);
    border-radius:999px;
    color:var(--green);
    font-size:11px;
    font-weight:900;
    letter-spacing:.12em;
    text-transform:uppercase;
  }
  .as-footer-cta {
    min-height:48px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:0 22px;
    border-radius:8px;
    background:var(--red);
    color:#fff;
    font-size:12px;
    font-weight:900;
    letter-spacing:.04em;
    text-transform:uppercase;
    box-shadow:0 12px 30px rgba(255,63,38,.22);
    transition:transform .18s ease, box-shadow .18s ease, background .18s ease;
  }
  .as-footer-cta:hover { transform:translateY(-2px); box-shadow:0 18px 40px rgba(255,63,38,.32); background:#ff533f; }
  .as-footer-bottom {
    max-width:1220px;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:18px;
    flex-wrap:wrap;
    padding:20px 0 28px;
    border-top:1px solid rgba(255,255,255,.08);
    color:rgba(255,255,255,.48);
    font-size:12px;
  }

  .as-wa-float {
    position:fixed;
    z-index:1002;
    right:max(20px, env(safe-area-inset-right));
    bottom:max(20px, env(safe-area-inset-bottom));
    width:58px;
    height:58px;
    border-radius:50%;
    background:#25D366;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow:0 4px 20px rgba(37,211,102,.45);
    transform:scale(0) translateY(20px);
    opacity:0;
    transition:transform .3s ease, box-shadow .2s;
    animation:as-wa-entrance .5s cubic-bezier(.22,.9,.36,1) 1.2s forwards,
              as-wa-pulse 2s ease-out 2s infinite;
  }
  .as-wa-float:hover { transform:scale(1.07) !important; }
  .as-wa-float:active { transform:scale(.95) !important; }
  .as-wa-float svg { width:29px; height:29px; display:block; }
  .as-wa-float:focus-visible { outline:3px solid #fff; outline-offset:4px; }

  @keyframes as-wa-entrance {
    to { transform:scale(1) translateY(0); opacity:1; }
  }
  @keyframes as-wa-pulse {
    0% {
      box-shadow:
        0 4px 20px rgba(37,211,102,.45),
        0 0 0 0 rgba(37,211,102,.48);
    }
    70% {
      box-shadow:
        0 4px 20px rgba(37,211,102,.45),
        0 0 0 16px rgba(37,211,102,0);
    }
    100% {
      box-shadow:
        0 4px 20px rgba(37,211,102,.45),
        0 0 0 0 rgba(37,211,102,0);
    }
  }

  /* ── REVEAL ON SCROLL ─────────────────────── */
  .as-reveal {
    opacity:0;
    transform:translateY(36px);
    transition:opacity .7s cubic-bezier(.22,.8,.36,1), transform .7s cubic-bezier(.22,.8,.36,1);
    will-change:opacity,transform;
  }
  .as-reveal-left {
    opacity:0;
    transform:translateX(-40px);
    transition:opacity .7s cubic-bezier(.22,.8,.36,1), transform .7s cubic-bezier(.22,.8,.36,1);
    will-change:opacity,transform;
  }
  .as-reveal-right {
    opacity:0;
    transform:translateX(40px);
    transition:opacity .7s cubic-bezier(.22,.8,.36,1), transform .7s cubic-bezier(.22,.8,.36,1);
    will-change:opacity,transform;
  }
  .as-reveal.in, .as-reveal-left.in, .as-reveal-right.in {
    opacity:1; transform:none;
  }
  .as-reveal[data-d="1"],.as-reveal-left[data-d="1"],.as-reveal-right[data-d="1"] { transition-delay:.08s }
  .as-reveal[data-d="2"],.as-reveal-left[data-d="2"],.as-reveal-right[data-d="2"] { transition-delay:.16s }
  .as-reveal[data-d="3"],.as-reveal-left[data-d="3"],.as-reveal-right[data-d="3"] { transition-delay:.24s }
  .as-reveal[data-d="4"],.as-reveal-left[data-d="4"],.as-reveal-right[data-d="4"] { transition-delay:.32s }
  .as-reveal[data-d="5"],.as-reveal-left[data-d="5"],.as-reveal-right[data-d="5"] { transition-delay:.40s }
  .as-reveal[data-d="6"],.as-reveal-left[data-d="6"],.as-reveal-right[data-d="6"] { transition-delay:.48s }

  /* ── DIAGONAL SECTION DIVIDERS ─────────────── */
  .as-truth {
    clip-path:polygon(0 56px,100% 0,100% calc(100% - 56px),0 100%);
    margin-block:-56px;
    padding-block:calc(clamp(60px,7vw,104px) + 56px);
    z-index:1;
  }
  .as-method {
    clip-path:polygon(0 0,100% 56px,100% 100%,0 calc(100% - 56px));
    margin-block:-56px;
    padding-block:calc(clamp(60px,7vw,104px) + 56px);
    z-index:1;
  }
  .as-gallery {
    clip-path:polygon(0 56px,100% 0,100% 100%,0 100%);
    margin-top:-56px;
    padding-top:calc(clamp(60px,7vw,104px) + 56px);
    z-index:1;
  }

  @media (max-width:960px) {
    .as-nav-links { display:none; }
    .as-nav { justify-content:space-between; }
    .as-section-grid,.as-benefit-shell,.as-about-grid,.as-proof-grid { grid-template-columns:1fr; }
    .as-pillars,.as-steps { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .as-gallery-grid { grid-template-columns:1fr 1fr; grid-template-rows:auto; }
    .as-gallery-item,.as-gallery-item:first-child { grid-row:auto; aspect-ratio:1/1; }
    .as-benefits {
      min-height:auto;
      align-items:flex-end;
      padding-top:min(58vh,520px);
      background:
        linear-gradient(180deg,rgba(0,0,0,.08) 0%,rgba(0,0,0,.34) 36%,#000 78%),
        url('${imgs.conquistar}') center top/auto min(58vh,520px) no-repeat,
        #000;
    }
    .as-benefit { font-size:16px; }
    .as-about {
      min-height:auto;
      align-items:flex-end;
      padding-top:min(62vh,560px);
      background:
        linear-gradient(180deg,rgba(0,0,0,.08) 0%,rgba(0,0,0,.35) 38%,#000 82%),
        url('${imgs.alexBio}') 85% top/auto min(62vh,560px) no-repeat,
        #000;
    }
    .as-about-copy { max-width:none; }
    .as-about-stats { grid-template-columns:repeat(3,minmax(0,1fr)); }
    .as-footer-inner { grid-template-columns:1fr; gap:28px; }
    .as-footer-action { min-width:0; }
  }
  @media (max-width:620px) {
    .as-topbar { justify-content:flex-start; overflow:hidden; font-size:9px; gap:10px; white-space:nowrap; }
    .as-nav {
      top:42px;
      z-index:60;
      padding:13px 16px;
      gap:14px;
      justify-content:space-between;
      background:transparent;
      -webkit-backdrop-filter:none;
      backdrop-filter:none;
      border-bottom:1px solid transparent;
      box-shadow:none;
      transition:background .35s ease, backdrop-filter .35s ease, -webkit-backdrop-filter .35s ease, border-color .35s ease, box-shadow .35s ease;
    }
    .as-nav.is-scrolled {
      background:rgba(8,8,8,.52);
      -webkit-backdrop-filter:blur(4px) saturate(1.6);
      backdrop-filter:blur(24px) saturate(1.6);
      border-bottom:1px solid rgba(255,255,255,.08);
      box-shadow:0 4px 24px rgba(0,0,0,.22);
    }
    .as-nav.is-open { z-index:60; }
    .as-prebar {
      z-index:61;
      background:rgba(245,61,45,.62);
      -webkit-backdrop-filter:blur(12px);
      backdrop-filter:blur(12px);
      box-shadow:0 8px 20px rgba(0,0,0,.10);
    }
    .as-logo { width:164px; max-width:58vw; }
    .as-menu-toggle {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      width:44px;
      height:44px;
      border:1px solid rgba(255,255,255,.2);
      border-radius:10px;
      background:rgba(255,255,255,.06);
      color:#fff;
      transition:background .2s,border-color .2s;
    }
    .as-menu-toggle:active { background:rgba(255,63,38,.18); border-color:rgba(255,63,38,.45); }
    .as-menu-toggle svg { width:22px; height:22px; stroke-width:2.35; }
    .as-nav-links {
      position:absolute;
      top:100%;
      left:0;
      right:0;
      display:grid;
      width:100%;
      gap:0;
      margin-left:0;
      padding:6px 16px 16px;
      background:linear-gradient(180deg,rgba(0,0,0,.92),rgba(0,0,0,.98));
      border-bottom:1px solid rgba(255,255,255,.1);
      box-shadow:0 24px 42px rgba(0,0,0,.55);
      opacity:0;
      transform:translateY(-8px);
      pointer-events:none;
      visibility:hidden;
      transition:opacity .2s ease, transform .2s ease, visibility .2s;
    }
    .as-nav.is-open .as-nav-links {
      opacity:1;
      transform:translateY(0);
      pointer-events:auto;
      visibility:visible;
    }
    .as-nav-links a {
      display:flex;
      align-items:center;
      min-height:46px;
      border-bottom:1px solid rgba(255,255,255,.08);
      color:rgba(255,255,255,.86);
      font-size:14px;
      line-height:1.15;
      font-weight:700;
    }
    .as-nav-cta { display:none; }
    .as-mobile-menu-cta {
      display:flex !important;
      min-height:52px !important;
      margin-top:14px;
      border:0 !important;
      border-radius:8px !important;
      background:linear-gradient(90deg,#F53D2D 0%,#FF6A4D 100%);
      color:#fff !important;
      justify-content:center;
      text-transform:uppercase;
      font-size:13px !important;
      box-shadow:0 18px 40px rgba(255,63,38,.24);
    }
    .as-hero {
      min-height:100svh;
      padding:348px 20px 82px;
      display:flex;
      align-items:flex-start;
      justify-content:center;
      overflow:hidden;
      text-align:center;
      background:
        radial-gradient(ellipse 80% 28% at 50% 45%,rgba(255,73,42,.3),rgba(255,73,42,0) 72%),
        linear-gradient(180deg,rgba(0,0,0,.06) 0%,rgba(0,0,0,.16) 36%,rgba(0,0,0,.72) 50%,#000 68%,#000 100%),
        linear-gradient(90deg,#000 0%,rgba(0,0,0,.16) 28%,rgba(0,0,0,.16) 72%,#000 100%),
        #000;
    }
    .as-hero::before {
      content:""; position:absolute; inset:0;
      background:
        radial-gradient(ellipse 52% 26% at 50% 70%,rgba(255,63,38,.2),rgba(255,63,38,0) 72%),
        linear-gradient(180deg,rgba(0,0,0,.18) 0%,rgba(0,0,0,0) 24%,rgba(0,0,0,.8) 56%,#000 82%);
      pointer-events:none;
    }
    .as-hero-inner { width:100%; max-width:540px; margin:0 auto; z-index:2; top:110px; }
    .as-hero-img-mobile {
      display:block !important;
      position:absolute;
      z-index:1;
      top:85px;
      left:0px;
      width:100%;
      height:430px;
      min-height:430px;
      max-height:none;
      transform:none;
      object-fit:cover;
      object-position: 82% top;
      filter:drop-shadow(0 26px 44px rgba(0,0,0,.66));
      pointer-events:none;
      user-select:none;
    }
    .as-eyebrow { display:none; font-size:11px; letter-spacing:.1em; margin-top:0; }
    .as-h1 { margin:0 auto; max-width:520px; font-size:clamp(36px,10.4vw,42px); line-height:1.04; letter-spacing:-.01em; text-transform:none; }
    .as-h1-white { font-size:32px }
    .as-hero-copy { max-width:500px; font-size:clamp(16px,5.2vw,11px); line-height:1.15; margin:14px auto 30px; color:#fff; font-weight:400; }
    .as-actions { justify-content:center; }
    .as-hero .as-primary { width:min(357px,100%); max-width:357px; margin-inline:auto; min-height:65px; font-size:16px; border-radius:7px; }
    .as-hero .as-secondary,
    .as-hero-note,
    .as-hero-offer { display:none; }
    .as-hero-offer,.as-pain-grid,.as-pillars,.as-steps,.as-credentials,.as-scope,.as-about-stats { grid-template-columns:1fr; }
    .as-process {
      background:
        radial-gradient(ellipse 85% 46% at 50% 0%,rgba(255,63,38,.16),rgba(255,63,38,0) 70%),
        linear-gradient(180deg,#000 0%,#0D0D0D 42%,#000 100%);
    }
    .as-process::before {
      background:linear-gradient(180deg,rgba(0,0,0,.04) 0%,rgba(0,0,0,.18) 100%);
    }
    .as-about-stat { min-height:auto; }
    .as-about-actions .as-primary { width:100%; }
    .as-benefits {
      padding-top:min(68vw,420px);
      background:
        linear-gradient(180deg,rgba(0,0,0,.08) 0%,rgba(0,0,0,.34) 36%,#000 78%),
        url('${imgs.conquistar}') 80% 3%/auto min(100vw,420px) no-repeat,
        #000;
    }
    .as-benefit-list { grid-template-columns:1fr; gap:0; }
    .as-benefit:nth-last-child(-n+2) { border-bottom:0; }
    .as-benefit:last-child { border-bottom:1px solid rgba(255,255,255,.11); }
    .as-gallery-head { display:block; }
    .as-primary,.as-secondary { width:100%; }
    .as-footer { padding:0 20px; }
    .as-footer-inner {
      gap:24px;
      padding:36px 0 26px;
      text-align:center;
    }
    .as-footer-brand {
      display:flex;
      flex-direction:column;
      align-items:center;
    }
    .as-footer-brand img { width:166px; }
    .as-footer-brand p {
      max-width:330px;
      margin-top:16px;
      font-size:13px;
      line-height:1.58;
    }
    .as-footer-nav {
      width:100%;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:10px;
    }
    .as-footer-nav a {
      display:flex;
      align-items:center;
      justify-content:center;
      min-height:42px;
      padding:10px 8px;
      border:1px solid rgba(255,255,255,.1);
      border-radius:8px;
      background:rgba(255,255,255,.035);
      font-size:12px;
      line-height:1.15;
    }
    .as-footer-action {
      align-items:center;
      justify-content:center;
      flex-direction:row;
      flex-wrap:wrap;
      width:100%;
      padding-top:2px;
    }
    .as-footer-social-mobile {
      display:inline-flex;
      min-height:34px;
      padding:0 12px;
      border:1px solid rgba(255,255,255,.12);
      border-radius:999px;
      background:rgba(255,255,255,.035);
      font-size:11px;
      font-weight:800;
      color:rgba(255,255,255,.78);
    }
    .as-footer-cta { width:100%; }
    .as-footer-bottom {
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:10px;
      padding:18px 0 86px;
      text-align:center;
    }
    .as-footer-bottom > span,
    .as-footer-bottom > a { display:block; }
    .as-footer-bottom > * + * { margin-top:0; }
    .as-footer-bottom .as-social-link { display:none; }
    .as-footer-bottom .as-social-link span { display:inline; }
    .as-wa-float { right:16px; bottom:max(16px, env(safe-area-inset-bottom)); width:54px; height:54px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .as-track, .as-primary::before, .as-wa-float { animation:none; }
    .as-wa-float { transform:scale(1) translateY(0); opacity:1; }
    .as-primary, .as-secondary, .as-gallery-item img, .as-faq-icon, .as-wa-float { transition:none; }
  }
`;

export default function AlexSerichPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".as-reveal,.as-reveal-left,.as-reveal-right",
    );
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="as-page">
        <a className="as-skip" href="#problema">
          Pular para o conteúdo
        </a>

        {/* PREVIEW BAR */}
        <div className="as-prebar" aria-label="Aviso de proposta">
          <div className="as-prebar-line">
            <span className="as-prebar-dot" aria-hidden="true" />
            Prévia Conceitual
          </div>
          <span className="as-prebar-sub">
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

        <nav
          className={`as-nav${isMenuOpen ? " is-open" : ""}${scrolled ? " is-scrolled" : ""}`}
          aria-label="Navegação principal"
        >
          <a
            href="#top"
            aria-label="Alex Serich"
            onClick={() => setIsMenuOpen(false)}
          >
            <img className="as-logo" src={imgs.logo} alt="Alex Serich" />
          </a>
          <button
            className="as-menu-toggle"
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="as-mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
          <div className="as-nav-links" id="as-mobile-menu">
            <a href="#problema" onClick={() => setIsMenuOpen(false)}>
              Problema
            </a>
            <a href="#metodo" onClick={() => setIsMenuOpen(false)}>
              Método
            </a>
            <a href="#resultados" onClick={() => setIsMenuOpen(false)}>
              Resultados
            </a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>
              Alex
            </a>
            <a href="#prova" onClick={() => setIsMenuOpen(false)}>
              Prova real
            </a>
            <a
              className="as-mobile-menu-cta"
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Quero conhecer o método
            </a>
          </div>
          <a
            className="as-nav-cta"
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Quero conhecer
          </a>
        </nav>

        <section id="top" className="as-hero" aria-labelledby="hero-title">
          <img
            className="as-hero-img-mobile"
            src={imgs.hero}
            alt=""
            aria-hidden="true"
          />
          <div className="as-hero-inner">
            <span className="as-eyebrow">Consultoria premium</span>
            <h1 id="hero-title" className="as-h1">
              <span className="as-red">Destrave seu corpo em 8 semanas</span>
              <span className="as-h1-white">com o Método Núcleo</span>
            </h1>
            <p className="as-hero-copy">
              O sistema de 4 pilares que corrige compensações, elimina dores e
              entrega o físico que você sempre quis.
            </p>
            <div className="as-actions">
              <a
                className="as-primary"
                href={FORM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Quero conhecer o Método Núcleo no formulário"
              >
                Quero conhecer o método →
              </a>
              <a className="as-secondary" href="#metodo">
                Ver o método
              </a>
            </div>
            <div className="as-hero-note">
              Avaliação, correção, força e performance
            </div>
            <div
              className="as-hero-offer"
              aria-label="Benefícios principais do Método Núcleo"
            >
              <div className="as-offer-card">
                <strong>Diagnóstico antes do treino</strong>
                <span>
                  Avaliação para entender limitações, compensações e ponto de
                  partida real.
                </span>
              </div>
              <div className="as-offer-card">
                <strong>Execução sem achismo</strong>
                <span>
                  Correção técnica para treinar com mais controle, segurança e
                  consciência corporal.
                </span>
              </div>
              <div className="as-offer-card">
                <strong>8 semanas com direção</strong>
                <span>
                  Progressão estruturada para estética, performance e
                  longevidade.
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="as-marquee" aria-hidden="true">
          <div className="as-track">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i}>
                MÉTODO <b>NÚCLEO</b>
              </span>
            ))}
          </div>
        </div>

        <section
          id="problema"
          className="as-section as-problem"
          aria-labelledby="problema-title"
        >
          <div className="as-wrap as-section-grid">
            <div>
              <span className="as-kicker as-reveal">Você treina</span>
              <h2 id="problema-title" className="as-h2 as-reveal" data-d="1">
                Mas não vê <span className="as-red">resultado?</span>
              </h2>
              <p className="as-lead as-reveal" data-d="2">
                Se você se identifica com pelo menos uma dessas situações,
                continue lendo. O problema não é você. É o método.
              </p>
              <div className="as-pain-grid">
                {pains.map((pain, index) => (
                  <div
                    className="as-reveal as-pain"
                    key={pain}
                    data-d={String(index + 1)}
                  >
                    <span className="as-pain-num">{index + 1}</span>
                    <p className="as-pain-text">{pain}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="as-problem-visual as-reveal-right" data-d="2">
              <img src={imgs.alex} alt="Alex Serich" />
            </div>
          </div>
        </section>

        <section className="as-section as-truth">
          <div className="as-wrap">
            <span className="as-kicker as-reveal">
              A verdade que ninguém te conta
            </span>
            <h3 className="as-truth-title as-reveal" data-d="1">
              90% das pessoas que treinam fazem isso de forma completamente
              errada.
            </h3>
            <p className="as-truth-copy as-reveal" data-d="2">
              Elas seguem treinos prontos da internet, copiam influencers, fazem
              exercícios com técnica ruim e, pior: treinam sem avaliação.
              Resultado? Zero evolução, frustração, dor e desistência. Mas
              existe um jeito certo de treinar. E esse jeito tem nome:{" "}
              <strong>Método Núcleo®</strong>.
            </p>
          </div>
        </section>

        <section id="metodo" className="as-section as-method">
          <div className="as-wrap">
            <span className="as-kicker as-reveal">
              O que é o Método Núcleo?
            </span>
            <h2 className="as-h2 as-reveal" data-d="1">
              Do ponto A, corpo estagnado, ao ponto B:{" "}
              <span className="as-red">resultado visível em 8 semanas.</span>
            </h2>
            <p className="as-lead as-reveal" data-d="2">
              Um sistema completo para corrigir o que bloqueia sua evolução
              antes de simplesmente aumentar carga ou repetir exercícios.
            </p>
            <div className="as-pillars">
              {pillars.map((pillar, i) => (
                <article
                  className="as-pillar as-reveal"
                  data-n={pillar.n}
                  data-d={String(i + 1)}
                  key={pillar.n}
                >
                  <small>{pillar.n}</small>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="as-section as-benefits">
          <div className="as-wrap as-benefit-shell">
            <div className="as-benefit-content">
              <span className="as-kicker as-reveal">Em 8 semanas</span>
              <h2 className="as-h2 as-reveal" data-d="1">
                O que você vai <span className="as-red">conquistar</span>
              </h2>
              <p className="as-lead as-reveal" data-d="2">
                O resultado não é só visual: é treino com mais controle, menos
                desconforto e evolução que você consegue sustentar.
              </p>
              <div className="as-benefit-list">
                {benefits.map((benefit, i) => (
                  <div
                    className="as-benefit as-reveal"
                    data-d={String((i % 3) + 1)}
                    key={benefit.text}
                  >
                    <span className="as-check" aria-hidden="true">
                      <benefit.Icon />
                    </span>
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="as-section as-process">
          <div className="as-wrap">
            <span className="as-kicker as-reveal">Como funciona</span>
            <h2 className="as-h2 as-reveal" data-d="1">
              Acompanhamento com direção, ajuste e evolução real.
            </h2>
            <div className="as-steps">
              {steps.map((step, index) => (
                <div
                  className="as-step as-reveal"
                  data-d={String(index + 1)}
                  key={step}
                >
                  <strong>ETAPA {String(index + 1).padStart(2, "0")}</strong>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prova" className="as-section as-proof">
          <div className="as-wrap as-proof-grid">
            <div>
              <span className="as-kicker as-reveal">Prova real</span>
              <h2 className="as-h2 as-reveal" data-d="1">
                Resultado não vem de treino aleatório. Vem de método, correção e
                constância.
              </h2>
              <p className="as-lead as-reveal" data-d="2">
                O antes e depois mostra o que acontece quando o aluno para de
                copiar treinos prontos e passa a seguir um protocolo pensado
                para o próprio corpo.
              </p>
              <div className="as-scope">
                {proofHighlights.map((item, i) => (
                  <div
                    className="as-scope-item as-reveal"
                    data-d={String((i % 3) + 1)}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div
                className="as-actions as-reveal"
                data-d="3"
                style={{ marginTop: 30 }}
              >
                <a
                  className="as-primary"
                  href={FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Quero falar com Alex
                </a>
              </div>
            </div>
            <div className="as-proof-image as-reveal-right" data-d="2">
              <img
                src={imgs.proof}
                alt="Antes e depois de aluno acompanhado pelo Método Núcleo"
              />
            </div>
          </div>
        </section>

        <section id="resultados" className="as-section as-gallery">
          <div className="as-wrap">
            <div className="as-gallery-head">
              <div>
                <span className="as-kicker as-reveal">Transformações</span>
                <h2 className="as-h2 as-reveal" data-d="1">
                  Resultados <span className="as-red">reais</span>
                </h2>
              </div>
              <a
                className="as-secondary as-reveal"
                data-d="2"
                href={FORM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Quero começar
              </a>
            </div>
            <div className="as-gallery-grid">
              {[imgs.t01, imgs.t02, imgs.t04, imgs.t05].map((src, index) => (
                <div
                  className="as-gallery-item as-reveal"
                  data-d={String(index + 1)}
                  key={src}
                >
                  <img src={src} alt={`Transformação real ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="as-section as-about">
          <div className="as-wrap as-about-grid">
            <div className="as-about-copy">
              <span className="as-kicker as-reveal">Quem é Alex Serich</span>
              <h2 className="as-h2 as-reveal" data-d="1">
                Referência em treinamento na cidade
              </h2>
              <p className="as-quote as-reveal" data-d="2">
                Não sou influencer. Sou profissional com resultados reais.
              </p>
              <p className="as-lead as-reveal" data-d="3">
                Meu trabalho fala por mim: alunos que treinam comigo há anos
                porque resultado é garantia de permanência. A proposta visual
                precisa carregar essa autoridade desde o primeiro segundo.
              </p>
              <div
                className="as-about-stats"
                aria-label="Destaques da autoridade de Alex Serich"
              >
                <div className="as-about-stat as-reveal" data-d="1">
                  <strong>8</strong>
                  <span>semanas de direção</span>
                </div>
                <div className="as-about-stat as-reveal" data-d="2">
                  <strong>4</strong>
                  <span>pilares do método</span>
                </div>
                <div className="as-about-stat as-reveal" data-d="3">
                  <strong>Top 2</strong>
                  <span>palco competitivo</span>
                </div>
              </div>
              <div className="as-credentials">
                <div className="as-credential as-reveal" data-d="1">
                  Formação em Educação Física
                </div>
                <div className="as-credential as-reveal" data-d="2">
                  Criador do Método Núcleo®
                </div>
                <div className="as-credential as-reveal" data-d="3">
                  Sócio-proprietário da Academia A.R. Fit
                </div>
                <div className="as-credential as-reveal" data-d="4">
                  Top 2 Sardinha Classic 2021 e Muscle Contest Mercosul 2023
                </div>
              </div>
              <div className="as-about-actions as-reveal" data-d="4">
                <a
                  className="as-primary"
                  href={FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Quero falar com Alex"
                >
                  Quero falar com Alex
                </a>
                <span className="as-about-microcopy">
                  Avaliação inicial para entender objetivo, limitações e ponto
                  de partida.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="as-section as-faq">
          <div className="as-wrap">
            <span className="as-kicker as-reveal">FAQ</span>
            <h2 className="as-h2 as-reveal" data-d="1">
              Perguntas frequentes
            </h2>
            <div className="as-faq-list">
              {faq.map((item, index) => (
                <div
                  className="as-faq-row as-reveal"
                  data-d={String(index + 1)}
                  key={item.q}
                >
                  <button
                    className="as-faq-btn"
                    type="button"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    {item.q}
                    <span className="as-faq-icon">+</span>
                  </button>
                  <div
                    className={`as-faq-answer${openFaq === index ? " open" : ""}`}
                  >
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="as-final">
          <div>
            <span className="as-kicker as-reveal">Comece agora</span>
            <h2 className="as-reveal" data-d="1">
              Destrave seu corpo em <span className="as-red">8 semanas</span>
            </h2>
            <p className="as-reveal" data-d="2">
              O Método Núcleo® está pronto. A página agora precisa vender essa
              promessa com a mesma força.
            </p>
            <a
              className="as-primary as-reveal"
              data-d="3"
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Quero conhecer o método
            </a>
          </div>
        </section>

        <footer className="as-footer">
          <div className="as-footer-inner">
            <div className="as-footer-brand">
              <a href="#top" aria-label="Voltar ao início da proposta">
                <img src={imgs.logo} alt="Alex Serich" />
              </a>
              <p>
                Proposta comercial para transformar o Método Núcleo® em uma
                experiência digital com mais autoridade, clareza e conversão.
              </p>
            </div>

            <nav className="as-footer-nav" aria-label="Navegação do rodapé">
              <a href="#problema">Problema</a>
              <a href="#metodo">Método</a>
              <a href="#resultados">Resultados</a>
              <a href="#sobre">Alex Serich</a>
              <a href="#prova">Prova real</a>
            </nav>

            <div className="as-footer-action">
              <span className="as-footer-badge">Método Núcleo®</span>
              <a
                className="as-social-link as-footer-social-mobile"
                href="https://www.instagram.com/alex_sserich"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do Alex Serich"
              >
                <Instagram aria-hidden="true" />
                <span>@alex_sserich</span>
              </a>
            </div>
          </div>

          <div className="as-footer-bottom">
            <span>© 2026 Alex Serich. Todos os direitos reservados.</span>
            <span>
              Proposta comercial desenvolvida por{" "}
              <a
                href="https://lumasites.com.br"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--green)", fontWeight: 600 }}
              >
                Lumasites
              </a>
            </span>
            <a
              className="as-social-link"
              href="https://www.instagram.com/alex_sserich"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do Alex Serich"
            >
              <Instagram aria-hidden="true" />
              <span>@alex_sserich</span>
            </a>
          </div>
        </footer>

        <a
          className="as-wa-float"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com Alex Serich pelo WhatsApp"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M16.04 3.2C9 3.2 3.28 8.86 3.28 15.82c0 2.23.6 4.4 1.74 6.3L3.2 28.8l6.86-1.78a12.9 12.9 0 0 0 5.98 1.5c7.04 0 12.76-5.66 12.76-12.62S23.08 3.2 16.04 3.2Zm0 23.16c-1.88 0-3.7-.5-5.3-1.45l-.38-.23-4.07 1.06 1.08-3.93-.25-.4a10.3 10.3 0 0 1-1.6-5.59c0-5.76 4.72-10.46 10.52-10.46 5.8 0 10.52 4.7 10.52 10.46 0 5.76-4.72 10.54-10.52 10.54Zm5.77-7.84c-.32-.16-1.88-.92-2.17-1.03-.29-.1-.5-.16-.72.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.84-1.6-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.72-.98-2.36-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67s1.15 3.1 1.31 3.31c.16.21 2.26 3.43 5.48 4.81.77.33 1.37.53 1.83.68.77.24 1.47.21 2.03.13.62-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"
            />
          </svg>
        </a>
      </main>
    </>
  );
}
