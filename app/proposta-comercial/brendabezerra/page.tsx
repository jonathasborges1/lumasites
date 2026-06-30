"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
  Users,
  CheckCircle,
  Leaf,
  Wind,
  Droplets,
} from "lucide-react";

/* ── constants ─────────────────────────────────────────── */
const WA_NUMBER = "5500000000000"; // Aguardando número da cliente
const WA_MSG = "Olá, Brenda! Vi a prévia do site e gostaria de agendar meu momento.";
const wa = (msg = WA_MSG) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const navItems = [
  { href: "#top",           label: "Início" },
  { href: "#sobre",         label: "Sobre" },
  { href: "#servicos",      label: "Serviços" },
  { href: "#galeria",       label: "Galeria" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#duvidas",       label: "Dúvidas" },
  { href: "#agendar",       label: "Agendar" },
];

const services = [
  {
    icon: Wind,
    slug: "massagem",
    label: "Massagem Terapêutica",
    dor: "Corpo pesado, tensão acumulada, mente que não para.",
    beneficio:
      "Alivie as tensões, relaxe a musculatura e saia do piloto automático. A massagem terapêutica trabalha corpo e mente para devolver conforto, presença e leveza para a rotina.",
    imagem: "/images/brendabezerra/bb-massagem-ai.png",
    alt: "Ambiente de massagem terapêutica com toalhas, óleo e pedras de relaxamento",
    pontos: ["Alívio de tensões musculares", "Relaxamento profundo", "Pausa real para o corpo"],
  },
  {
    icon: Droplets,
    slug: "drenagem",
    label: "Drenagem Linfática",
    dor: "Inchaço, retenção, sensação de corpo bloqueado.",
    beneficio:
      "A drenagem vai muito além de desinchar. É um cuidado que ativa a circulação, reduz a retenção e devolve leveza real ao corpo, com orientação para cada necessidade.",
    imagem: "/images/brendabezerra/bb-drenagem-ai.png",
    alt: "Sala de estética preparada para drenagem linfática e bem-estar",
    pontos: ["Redução de retenção hídrica", "Leveza corporal", "Cuidado conduzido com calma"],
  },
  {
    icon: Sparkles,
    slug: "limpeza",
    label: "Limpeza de Pele",
    dor: "Pele sem viço, poros entupidos, autoestima que pede atenção.",
    beneficio:
      "Um cuidado facial completo para renovar, orientar e valorizar a beleza natural da sua pele. A experiência combina limpeza, atenção aos detalhes e orientação para manter o cuidado em casa.",
    imagem: "/images/brendabezerra/bb-limpeza-ai.png",
    alt: "Produtos e toalhas para limpeza de pele em estética premium",
    pontos: ["Desobstrução dos poros", "Renovação da pele", "Rotina de skincare orientada"],
  },
];

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Chame no WhatsApp",
    text: "Mande uma mensagem e conte como está se sentindo. A Brenda entende sua necessidade antes de qualquer coisa.",
    detalhe: "Resposta rápida",
  },
  {
    num: "02",
    icon: Heart,
    title: "Procedimento ideal indicado",
    text: "Com base no que você está sentindo, o melhor procedimento é indicado — com orientações de preparo e cuidados pós-atendimento.",
    detalhe: "Cuidado personalizado",
  },
  {
    num: "03",
    icon: CheckCircle,
    title: "Seu momento acontece",
    text: "Você chega, a Brenda cuida. O foco é no seu conforto, resultado e bem-estar — do primeiro ao último minuto do atendimento.",
    detalhe: "Resultado real",
  },
];

const testimonials = [
  {
    text: "Melhor esteticista de Recife!! Amoooo.",
    name: "Cliente do Instagram",
    location: "Recife, PE",
    highlight: "Melhor de Recife",
  },
  {
    text: "Parabéns pelo seu trabalho, muito lindo. Super indico!!",
    name: "Cliente do Instagram",
    location: "Recife, PE",
    highlight: "Super indico",
  },
  {
    text: "Linda e profissional! O corpo fala e devemos dar atenção ao que ele está tentando comunicar.",
    name: "Cliente do Instagram",
    location: "Recife, PE",
    highlight: "Linda e profissional",
  },
];

const faqs = [
  {
    q: "Qual procedimento é mais indicado para mim?",
    a: "Isso depende do que você está sentindo agora. Se o corpo está pesado e tenso, a massagem terapêutica costuma ser o melhor começo. Se você sente inchaço ou retenção, a drenagem faz mais sentido. Para cuidado da pele, a limpeza facial é o caminho. Mande uma mensagem e a Brenda te orienta antes de agendar.",
  },
  {
    q: "Drenagem linfática ajuda em que casos?",
    a: "A drenagem é indicada para inchaço, retenção hídrica, sensação de peso nas pernas, pós-cirúrgico (com aval médico), pré e pós viagem longa, e manutenção geral do sistema linfático. Vai muito além de estética — é saúde.",
  },
  {
    q: "A limpeza de pele dói?",
    a: "Pode haver um leve desconforto na extração, que varia de pessoa para pessoa e do tipo de pele. O protocolo da Brenda prioriza o conforto — a pele é preparada antes e cuidada depois para minimizar qualquer reação.",
  },
  {
    q: "Com que frequência devo fazer massagem ou drenagem?",
    a: "Para massagem terapêutica, o ideal é quinzenal ou mensal dependendo do nível de tensão. Para drenagem linfática, uma vez por semana costuma ser o protocolo inicial. A Brenda indica a frequência certa na sua avaliação.",
  },
  {
    q: "Onde fica o atendimento?",
    a: "O atendimento é em Recife-PE. Fale com a Brenda pelo WhatsApp para confirmar o endereço e disponibilidade de agenda.",
  },
  {
    q: "Como faço para agendar?",
    a: "É só mandar uma mensagem no WhatsApp. A Brenda responde rapidamente, entende o que você precisa e já reserva seu momento na agenda.",
  },
  {
    q: "Preciso de algum cuidado antes ou depois do atendimento?",
    a: "Sim — e a Brenda te orienta sobre tudo na hora do agendamento. Em geral: chegar bem hidratada, evitar alimentação pesada antes da massagem, e usar roupas confortáveis. Para limpeza de pele, evitar maquiagem no dia. As orientações pós-procedimento são passadas ao final de cada sessão.",
  },
];

const gallery = [
  { src: "/images/brendabezerra/bb-hero-ai.png",     alt: "Ambiente de estética e bem-estar preparado para atendimento" },
  { src: "/images/brendabezerra/bb-drenagem-ai.png", alt: "Sala de estética com toalhas e maca para drenagem linfática" },
  { src: "/images/brendabezerra/bb-massagem-ai.png", alt: "Detalhe de massagem terapêutica com óleo, toalhas e pedras" },
  { src: "/images/brendabezerra/bb-limpeza-ai.png",  alt: "Produtos e toalhas para limpeza de pele" },
  { src: "/images/brendabezerra/bb-galeria-5.jpg",   alt: "Imagem extraída do Instagram de Brenda Bezerra" },
  { src: "/images/brendabezerra/bb-galeria-1.jpg",   alt: "Conteúdo extraído do Instagram de Brenda Bezerra" },
];

/* ── SVG helpers ───────────────────────────────────────── */
const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const MenuIcon = ({ open = false }: { open?: boolean }) => (
  <span className={`bb-menu-glyph${open ? " open" : ""}`} aria-hidden="true">
    <span className="bb-mg-top" />
    <span className="bb-mg-bot" />
  </span>
);

/* ── CSS ────────────────────────────────────────────────── */
const css = `
html { scroll-behavior: smooth; }
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; }

:root {
  --bb-bar:    72px;
  --bb-nav:    68px;

  --bb-nude:   #F8ECE6;
  --bb-nude2:  #F7DBCE;
  --bb-nude3:  #EEDDD5;
  --bb-rose:   #C18F88;
  --bb-rose2:  #AA5853;
  --bb-terra:  #934E32;
  --bb-terra2: #7A3F28;
  --bb-brown:  #3B1B11;
  --bb-taupe:  #997E71;
  --bb-taupe2: #7A6358;
  --bb-white:  #FDFAF8;
  --bb-ink:    #2C1510;
  --bb-line:   rgba(59,27,17,.10);
  --bb-line-l: rgba(59,27,17,.06);
  --bb-rose-bg: rgba(193,143,136,.10);
  --bb-rose-br: rgba(193,143,136,.28);
}

@media (min-width: 640px) {
  :root { --bb-bar: 44px; }
}

/* ── page shell ─────────────────────────────────────────── */
#bb-conceito {
  padding-top: calc(var(--bb-bar) + var(--bb-nav));
  font-family: var(--font-bb-body, system-ui, sans-serif);
}
#bb-conceito h1, #bb-conceito h2, #bb-conceito h3, #bb-conceito h4 {
  font-family: var(--font-bb-display, Georgia, serif);
}
.bb-page {
  color: var(--bb-ink);
  background: var(--bb-white);
  overflow-x: clip;
  min-height: 100vh;
}

/* ── preview bar ─────────────────────────────────────────── */
.bb-preview {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1001;
  height: var(--bb-bar);
  padding: 7px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  background: var(--bb-brown);
  border-bottom: 1px solid rgba(193,143,136,.2);
}
.bb-preview-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.bb-preview-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--bb-white);
}
.bb-preview-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--bb-rose);
  animation: bb-pulse-dot 1.8s ease-out infinite;
}
@keyframes bb-pulse-dot {
  0%   { box-shadow: 0 0 0 0 rgba(193,143,136,.9); }
  70%  { box-shadow: 0 0 0 9px rgba(193,143,136,0); }
  100% { box-shadow: 0 0 0 0 rgba(193,143,136,0); }
}
.bb-preview-sub {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,.38);
}
.bb-preview-sub a {
  color: var(--bb-rose);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.bb-preview-link {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 3px;
  color: rgba(255,255,255,.5);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: border-color .15s, color .15s;
}
.bb-preview-link:hover {
  border-color: var(--bb-rose-br);
  color: var(--bb-rose);
}
@media (max-width: 639px) {
  .bb-preview { padding: 8px 14px; }
  .bb-preview-title { font-size: 10px; letter-spacing: .1em; }
  .bb-preview-sub { font-size: 10px; }
  .bb-preview-link { display: none; }
}

/* ── nav ─────────────────────────────────────────────────── */
.bb-nav {
  position: fixed;
  left: 0; right: 0;
  top: var(--bb-bar);
  z-index: 1000;
  height: var(--bb-nav);
  background: rgba(253,250,248,.96);
  border-bottom: 1px solid var(--bb-line);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition: background .25s, box-shadow .25s;
}
.bb-nav.scrolled {
  background: rgba(253,250,248,.99);
  box-shadow: 0 8px 32px rgba(59,27,17,.08);
}
.bb-nav-inner {
  width: min(1140px, calc(100% - 40px));
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.bb-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}
.bb-brand-wordmark {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.bb-brand-name {
  font-family: var(--font-bb-display, Georgia, serif);
  font-size: 17px;
  font-weight: 700;
  color: var(--bb-brown);
  letter-spacing: -.01em;
}
.bb-brand-sub {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--bb-taupe);
  margin-top: 2px;
}
.bb-links {
  display: none;
  align-items: center;
  gap: 18px;
}
.bb-links a {
  position: relative;
  color: var(--bb-taupe2);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  transition: color .15s;
}
.bb-links a:hover, .bb-links a.active { color: var(--bb-brown); }
.bb-links a:not(.bb-nav-cta)::after {
  content: "";
  position: absolute;
  bottom: -6px; left: 0; right: 0;
  height: 1px;
  background: var(--bb-rose);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .2s;
}
.bb-links a.active::after, .bb-links a:hover::after { transform: scaleX(1); }
.bb-nav-cta {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  border-radius: 3px;
  background: var(--bb-rose2);
  color: var(--bb-white) !important;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  transition: background .15s;
}
.bb-nav-cta:hover { background: var(--bb-terra); }
.bb-nav-cta::after { display: none !important; }
.bb-menu-btn {
  width: 42px; height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--bb-line);
  border-radius: 3px;
  background: transparent;
  color: var(--bb-brown);
  transition: background .2s;
}
.bb-menu-btn:hover { background: var(--bb-rose-bg); }
.bb-menu-glyph {
  position: relative;
  width: 20px; height: 14px;
  display: block;
}
.bb-mg-top, .bb-mg-bot {
  position: absolute;
  right: 0;
  height: 1.5px;
  border-radius: 999px;
  background: currentColor;
  transition: top .25s cubic-bezier(.22,.8,.28,1), transform .25s cubic-bezier(.22,.8,.28,1), opacity .15s;
}
.bb-mg-top { top: 4px; width: 20px; }
.bb-mg-bot { top: 10px; width: 14px; }
.bb-menu-glyph.open .bb-mg-top { top: 7px; transform: rotate(42deg); width: 20px; }
.bb-menu-glyph.open .bb-mg-bot { top: 7px; width: 20px; transform: rotate(-42deg); }
.bb-mobile-menu {
  display: none;
  position: fixed;
  top: calc(var(--bb-bar) + var(--bb-nav));
  left: 0; right: 0;
  z-index: 999;
  background: rgba(253,250,248,.98);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--bb-line);
  padding: 16px 20px 24px;
  flex-direction: column;
  gap: 2px;
}
.bb-mobile-menu.open { display: flex; }
.bb-mobile-menu a {
  display: flex;
  align-items: center;
  padding: 12px 8px;
  border-bottom: 1px solid var(--bb-line-l);
  color: var(--bb-taupe2);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: color .15s, padding-left .15s;
}
.bb-mobile-menu a:hover { color: var(--bb-brown); padding-left: 14px; }
.bb-mobile-menu a.bb-mobile-wa {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  border-radius: 4px;
  background: var(--bb-rose2);
  color: var(--bb-white);
  border-bottom: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .04em;
}
.bb-mobile-menu a.bb-mobile-wa:hover,
.bb-mobile-menu a.bb-mobile-wa:focus-visible {
  color: var(--bb-white);
  background: var(--bb-terra);
  padding-left: 14px;
}
@media (min-width: 900px) {
  .bb-links { display: flex; }
  .bb-menu-btn { display: none; }
}

/* ── sections ─────────────────────────────────────────── */
.bb-section { padding: 96px 20px; }
.bb-section.alt { background: var(--bb-nude); }
.bb-section.nude2 { background: var(--bb-nude2); }
.bb-section.white { background: var(--bb-white); }
.bb-section.dark { background: var(--bb-brown); color: var(--bb-white); }
.bb-section.terra { background: var(--bb-terra2); color: var(--bb-white); }
.bb-wrap { width: min(1120px, 100%); margin: 0 auto; }
.bb-section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--bb-rose2);
  margin-bottom: 14px;
}
.bb-section-label::before {
  content: "";
  display: block;
  width: 24px; height: 1px;
  background: var(--bb-rose2);
}
.dark .bb-section-label, .terra .bb-section-label {
  color: var(--bb-rose);
}
.dark .bb-section-label::before, .terra .bb-section-label::before {
  background: var(--bb-rose);
}
.bb-divider {
  width: 36px; height: 2px;
  background: var(--bb-rose);
  margin: 18px 0;
  border-radius: 1px;
}
.bb-h2 {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -.01em;
  margin: 0 0 12px;
}
.bb-lead {
  font-size: 17px;
  line-height: 1.65;
  color: var(--bb-taupe2);
  max-width: 600px;
}
.dark .bb-lead, .terra .bb-lead { color: rgba(255,255,255,.55); }

/* ── hero ─────────────────────────────────────────────── */
.bb-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  background: var(--bb-nude);
  overflow: hidden;
}
.bb-hero-grain {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 60% at 80% 40%, rgba(193,143,136,.15) 0%, transparent 60%),
    radial-gradient(ellipse 40% 50% at 10% 80%, rgba(147,78,50,.08) 0%, transparent 55%);
  pointer-events: none;
}
.bb-hero-inner {
  position: relative;
  z-index: 2;
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  padding: 72px 0 64px;
  align-items: center;
}
.bb-hero-copy { max-width: 580px; }
.bb-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 10px;
  border: 1px solid var(--bb-rose-br);
  border-radius: 2px;
  background: var(--bb-rose-bg);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--bb-rose2);
  margin-bottom: 28px;
  animation: bb-hero-in .5s cubic-bezier(.22,.8,.28,1) .1s both;
}
.bb-hero-eyebrow-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--bb-rose);
  flex-shrink: 0;
}
.bb-hero h1 {
  font-size: clamp(34px, 5.5vw, 62px);
  font-weight: 700;
  line-height: 1.06;
  letter-spacing: -.02em;
  color: var(--bb-brown);
  margin: 0 0 24px;
  animation: bb-hero-in .65s cubic-bezier(.22,.8,.28,1) .2s both;
}
.bb-hero h1 em {
  font-style: italic;
  color: var(--bb-rose2);
}
.bb-hero-sub {
  font-size: clamp(16px, 1.8vw, 18px);
  line-height: 1.7;
  color: var(--bb-taupe2);
  margin: 0 0 40px;
  animation: bb-hero-in .65s cubic-bezier(.22,.8,.28,1) .32s both;
}
.bb-hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  animation: bb-hero-in .65s cubic-bezier(.22,.8,.28,1) .44s both;
}
.bb-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  border-radius: 3px;
  background: var(--bb-rose2);
  color: var(--bb-white);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .05em;
  text-transform: uppercase;
  box-shadow: 0 8px 28px rgba(170,88,83,.3);
  transition: background .15s, box-shadow .15s, transform .15s;
}
.bb-btn-primary:hover {
  background: var(--bb-terra);
  box-shadow: 0 12px 36px rgba(147,78,50,.38);
  transform: translateY(-1px);
}
.bb-btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 22px;
  border-radius: 3px;
  border: 1px solid var(--bb-line);
  color: var(--bb-taupe2);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .04em;
  transition: border-color .15s, color .15s;
}
.bb-btn-outline:hover {
  border-color: var(--bb-rose-br);
  color: var(--bb-rose2);
}
.bb-hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
  animation: bb-hero-in .65s cubic-bezier(.22,.8,.28,1) .56s both;
}
.bb-hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border: 1px solid var(--bb-line);
  border-radius: 2px;
  background: rgba(255,255,255,.6);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .04em;
  color: var(--bb-taupe2);
}
.bb-hero-pill svg { color: var(--bb-rose2); flex-shrink: 0; }

/* hero photo */
.bb-hero-photo-wrap {
  position: relative;
  animation: bb-hero-in .8s cubic-bezier(.22,.8,.28,1) .3s both;
}
.bb-hero-photo-frame {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 4/5;
  max-height: 580px;
  box-shadow: 0 28px 72px rgba(59,27,17,.18);
}
.bb-hero-photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bb-hero-photo-accent {
  position: absolute;
  top: -14px; right: -14px;
  width: 72px; height: 72px;
  border: 2px solid var(--bb-rose);
  border-radius: 4px;
  opacity: .35;
  pointer-events: none;
}
.bb-hero-photo-accent-2 {
  position: absolute;
  bottom: -14px; left: -14px;
  width: 52px; height: 52px;
  border: 1px solid var(--bb-rose-br);
  border-radius: 50%;
  pointer-events: none;
}
.bb-hero-badge {
  position: absolute;
  bottom: 20px; left: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: rgba(253,250,248,.92);
  border: 1px solid var(--bb-rose-br);
  border-radius: 4px;
  backdrop-filter: blur(8px);
}
.bb-hero-badge-icon { color: var(--bb-rose2); }
.bb-hero-badge-text {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .05em;
  text-transform: uppercase;
  color: var(--bb-taupe2);
  line-height: 1.3;
}
.bb-hero-badge-text strong {
  display: block;
  font-family: var(--font-bb-display, Georgia, serif);
  font-size: 15px;
  font-weight: 700;
  color: var(--bb-brown);
  letter-spacing: 0;
  font-style: italic;
}

@keyframes bb-hero-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none; }
}
@media (min-width: 900px) {
  .bb-hero-inner { grid-template-columns: 1fr 1fr; }
}

/* ── trust bar ─────────────────────────────────────────── */
.bb-trust {
  background: var(--bb-brown);
  border-top: 1px solid rgba(193,143,136,.12);
  border-bottom: 1px solid rgba(193,143,136,.12);
  padding: 0 20px;
}
.bb-trust-grid {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.bb-trust-item {
  padding: 26px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-right: 1px solid rgba(255,255,255,.06);
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.bb-trust-item:nth-child(2n) { border-right: none; }
.bb-trust-item:nth-last-child(-n+2) { border-bottom: none; }
.bb-trust-icon {
  width: 40px; height: 40px;
  border-radius: 8px;
  background: var(--bb-rose-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bb-rose);
  flex-shrink: 0;
}
.bb-trust-value {
  font-family: var(--font-bb-display, Georgia, serif);
  font-size: 18px;
  font-weight: 700;
  color: var(--bb-white);
  line-height: 1;
  font-style: italic;
}
.bb-trust-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .04em;
  color: rgba(255,255,255,.4);
  margin-top: 3px;
  text-transform: uppercase;
}
@media (min-width: 640px) {
  .bb-trust-grid { grid-template-columns: repeat(4, 1fr); }
  .bb-trust-item { border-bottom: none; }
  .bb-trust-item:nth-child(2n) { border-right: 1px solid rgba(255,255,255,.06); }
  .bb-trust-item:last-child { border-right: none; }
}

/* ── sobre ─────────────────────────────────────────────── */
.bb-sobre-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  align-items: center;
  margin-top: 20px;
}
.bb-sobre-photo-wrap { position: relative; }
.bb-sobre-photo-frame {
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 4/5;
  max-height: 540px;
  box-shadow: 0 24px 64px rgba(59,27,17,.14);
}
.bb-sobre-photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 42%;
}
.bb-sobre-photo-accent {
  position: absolute;
  bottom: -14px; right: -14px;
  width: 72px; height: 72px;
  border: 2px solid var(--bb-rose);
  border-radius: 4px;
  opacity: .35;
}
.bb-sobre-badge {
  position: absolute;
  top: 20px; left: 20px;
  padding: 8px 14px;
  background: rgba(253,250,248,.92);
  border: 1px solid var(--bb-rose-br);
  border-radius: 3px;
  backdrop-filter: blur(8px);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--bb-rose2);
  white-space: nowrap;
}
.bb-sobre-text {
  font-size: 16px;
  line-height: 1.78;
  color: var(--bb-taupe2);
  margin-bottom: 16px;
}
.bb-sobre-text strong { color: var(--bb-brown); font-weight: 700; }
.bb-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 28px;
}
.bb-info-card {
  padding: 16px 14px;
  border: 1px solid var(--bb-line);
  border-radius: 4px;
  background: rgba(255,255,255,.7);
}
.bb-info-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--bb-rose2);
  margin-bottom: 4px;
}
.bb-info-value {
  font-family: var(--font-bb-display, Georgia, serif);
  font-size: 14px;
  font-weight: 700;
  color: var(--bb-brown);
  line-height: 1.25;
  font-style: italic;
}
@media (min-width: 900px) {
  .bb-sobre-grid { grid-template-columns: 1fr 1fr; }
}

/* ── serviços ─────────────────────────────────────────── */
.bb-services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 56px;
}
.bb-service-card {
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 4px;
  overflow: hidden;
  background: var(--bb-white);
  border: 1px solid var(--bb-line);
  box-shadow: 0 4px 24px rgba(59,27,17,.04);
  transition: transform .25s, box-shadow .25s;
}
.bb-service-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 48px rgba(59,27,17,.10);
}
.bb-service-img-wrap {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}
.bb-service-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}
.bb-service-card:hover .bb-service-img-wrap img { transform: scale(1.04); }
.bb-service-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(59,27,17,.55) 100%);
}
.bb-service-img-tag {
  position: absolute;
  bottom: 16px; left: 16px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  background: rgba(253,250,248,.9);
  border-radius: 2px;
  backdrop-filter: blur(6px);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--bb-rose2);
}
.bb-service-body { padding: 28px 24px 32px; }
.bb-service-dor {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--bb-rose2);
  margin-bottom: 8px;
}
.bb-service-title {
  font-family: var(--font-bb-display, Georgia, serif);
  font-size: 24px;
  font-weight: 700;
  color: var(--bb-brown);
  margin: 0 0 14px;
  line-height: 1.2;
}
.bb-service-text {
  font-size: 15px;
  line-height: 1.7;
  color: var(--bb-taupe2);
  margin-bottom: 20px;
}
.bb-service-points {
  list-style: none;
  padding: 0; margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  border-top: 1px solid var(--bb-line-l);
  padding-top: 18px;
}
.bb-service-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--bb-taupe2);
  font-weight: 500;
}
.bb-service-points li::before {
  content: "";
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--bb-rose);
  flex-shrink: 0;
}
.bb-service-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--bb-rose2);
  transition: color .15s, gap .15s;
}
.bb-service-cta:hover { color: var(--bb-terra); gap: 12px; }
@media (min-width: 768px) {
  .bb-services-grid { grid-template-columns: repeat(3, 1fr); }
  .bb-service-img-wrap { aspect-ratio: 3/4; }
  .bb-service-card { flex-direction: column; }
}

/* ── galeria ─────────────────────────────────────────────── */
.bb-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 48px;
}
.bb-gallery-item {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 1;
  background: var(--bb-nude3);
}
.bb-gallery-item:first-child, .bb-gallery-item:nth-child(4) {
  aspect-ratio: 1 / 1.2;
}
.bb-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}
.bb-gallery-item:hover img { transform: scale(1.04); }
.bb-gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(59,27,17,.4) 100%);
  opacity: 0;
  transition: opacity .3s;
}
.bb-gallery-item:hover .bb-gallery-overlay { opacity: 1; }
.bb-gallery-notice {
  margin-top: 20px;
  padding: 14px 18px;
  border-radius: 4px;
  background: var(--bb-rose-bg);
  border: 1px solid var(--bb-rose-br);
  font-size: 13px;
  color: var(--bb-taupe2);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
}
@media (min-width: 640px) {
  .bb-gallery-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── como funciona ─────────────────────────────────────── */
.bb-steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 56px;
}
.bb-step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 28px 24px;
  border-radius: 4px;
  background: var(--bb-white);
  border: 1px solid var(--bb-line);
  transition: border-color .2s, box-shadow .2s, transform .2s;
}
.bb-step:hover {
  border-color: var(--bb-rose-br);
  box-shadow: 0 14px 44px rgba(59,27,17,.07);
  transform: translateY(-2px);
}
.bb-step-num {
  font-family: var(--font-bb-display, Georgia, serif);
  font-size: 44px;
  font-weight: 700;
  line-height: 1;
  color: rgba(193,143,136,.22);
  flex-shrink: 0;
  min-width: 50px;
  font-style: italic;
}
.bb-step-icon {
  width: 38px; height: 38px;
  border-radius: 8px;
  background: var(--bb-rose-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bb-rose2);
  flex-shrink: 0;
  margin-top: 3px;
}
.bb-step-title {
  font-family: var(--font-bb-display, Georgia, serif);
  font-size: 20px;
  font-weight: 700;
  color: var(--bb-brown);
  margin: 0 0 8px;
  font-style: italic;
}
.bb-step-text {
  font-size: 14px;
  line-height: 1.65;
  color: var(--bb-taupe2);
  margin-bottom: 10px;
}
.bb-step-detalhe {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--bb-rose2);
  padding: 4px 10px;
  border-radius: 2px;
  background: var(--bb-rose-bg);
  border: 1px solid var(--bb-rose-br);
}
@media (min-width: 768px) {
  .bb-steps-grid { grid-template-columns: repeat(3, 1fr); }
  .bb-step { flex-direction: column; gap: 14px; }
}

/* ── depoimentos ───────────────────────────────────────── */
.bb-testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin-top: 56px;
}
.bb-testimonial-card {
  padding: 28px 24px;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.05);
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.bb-testimonial-stars {
  display: flex;
  gap: 4px;
  color: var(--bb-rose);
}
.bb-testimonial-highlight {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 2px;
  background: var(--bb-rose-bg);
  border: 1px solid var(--bb-rose-br);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--bb-rose);
  margin-bottom: 8px;
}
.bb-testimonial-text {
  font-size: 15px;
  line-height: 1.75;
  color: rgba(255,255,255,.62);
  font-style: italic;
  flex: 1;
}
.bb-testimonial-text::before { content: '"'; }
.bb-testimonial-text::after { content: '"'; }
.bb-testimonial-author {
  border-top: 1px solid rgba(255,255,255,.07);
  padding-top: 14px;
}
.bb-testimonial-name {
  font-weight: 700;
  font-size: 14px;
  color: var(--bb-white);
  margin-bottom: 2px;
}
.bb-testimonial-location {
  font-size: 12px;
  color: rgba(255,255,255,.38);
  display: flex;
  align-items: center;
  gap: 4px;
}
.bb-testimonials-note {
  margin-top: 28px;
  text-align: center;
  font-size: 12px;
  color: rgba(255,255,255,.28);
  font-style: italic;
}
@media (min-width: 768px) {
  .bb-testimonials-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── faq ───────────────────────────────────────────────── */
.bb-faq-list {
  margin-top: 48px;
  max-width: 760px;
}
.bb-faq-item { border-bottom: 1px solid var(--bb-line); }
.bb-faq-item:first-child { border-top: 1px solid var(--bb-line); }
.bb-faq-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding: 22px 4px;
  background: transparent;
  border: none;
  text-align: left;
}
.bb-faq-q {
  font-size: 16px;
  font-weight: 600;
  color: var(--bb-brown);
  line-height: 1.4;
  transition: color .15s;
}
.bb-faq-btn:hover .bb-faq-q,
.bb-faq-item.open .bb-faq-q { color: var(--bb-rose2); }
.bb-faq-chevron {
  flex-shrink: 0;
  width: 22px; height: 22px;
  border-radius: 50%;
  border: 1px solid var(--bb-line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bb-taupe);
  margin-top: 2px;
  transition: transform .25s, background .15s, color .15s, border-color .15s;
}
.bb-faq-item.open .bb-faq-chevron {
  transform: rotate(180deg);
  background: var(--bb-rose-bg);
  color: var(--bb-rose2);
  border-color: var(--bb-rose-br);
}
.bb-faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height .35s cubic-bezier(.22,.8,.28,1), padding .25s;
  font-size: 15px;
  line-height: 1.72;
  color: var(--bb-taupe2);
  padding: 0 4px;
}
.bb-faq-item.open .bb-faq-answer {
  max-height: 400px;
  padding-bottom: 22px;
}
.bb-faq-footer {
  margin-top: 36px;
  padding: 22px 24px;
  border-radius: 4px;
  background: var(--bb-rose-bg);
  border: 1px solid var(--bb-rose-br);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.bb-faq-footer-text {
  font-size: 15px;
  font-weight: 500;
  color: var(--bb-brown);
}
.bb-faq-footer a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px;
  border-radius: 3px;
  background: var(--bb-rose2);
  color: var(--bb-white);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .05em;
  text-transform: uppercase;
  transition: background .15s;
}
.bb-faq-footer a:hover { background: var(--bb-terra); }

/* ── cta final ─────────────────────────────────────────── */
.bb-cta-final {
  background: var(--bb-brown);
  padding: 120px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.bb-cta-final::before {
  content: "";
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 600px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(193,143,136,.08) 0%, transparent 70%);
  pointer-events: none;
}
.bb-cta-final-inner {
  position: relative;
  width: min(660px, 100%);
  margin: 0 auto;
}
.bb-cta-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--bb-rose);
  margin-bottom: 20px;
}
.bb-cta-final h2 {
  font-size: clamp(30px, 5vw, 52px);
  font-weight: 700;
  color: var(--bb-white);
  line-height: 1.1;
  margin: 0 0 20px;
  letter-spacing: -.02em;
}
.bb-cta-final h2 em {
  font-style: italic;
  color: var(--bb-rose);
}
.bb-cta-final-sub {
  font-size: 17px;
  line-height: 1.6;
  color: rgba(255,255,255,.5);
  margin-bottom: 40px;
}
.bb-cta-dual {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}
.bb-cta-final-note {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.26);
}
.bb-cta-final-note svg { color: var(--bb-rose2); }

/* ── footer ────────────────────────────────────────────── */
.bb-footer {
  background: var(--bb-brown);
  border-top: 1px solid rgba(193,143,136,.1);
  padding: 60px 20px 36px;
  color: rgba(255,255,255,.5);
}
.bb-footer-inner {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
}
.bb-footer-brand-name {
  font-family: var(--font-bb-display, Georgia, serif);
  font-size: 22px;
  font-weight: 700;
  color: var(--bb-white);
  font-style: italic;
  margin-bottom: 4px;
}
.bb-footer-brand-sub {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: rgba(255,255,255,.3);
  margin-bottom: 14px;
}
.bb-footer-desc {
  font-size: 13px;
  line-height: 1.65;
  max-width: 280px;
}
.bb-footer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}
.bb-footer-tag {
  padding: 4px 10px;
  border-radius: 2px;
  background: var(--bb-rose-bg);
  border: 1px solid var(--bb-rose-br);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--bb-rose);
}
.bb-footer-col-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: rgba(255,255,255,.3);
  margin-bottom: 14px;
}
.bb-footer-links {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.bb-footer-links a {
  font-size: 14px;
  color: rgba(255,255,255,.5);
  transition: color .15s;
}
.bb-footer-links a:hover { color: var(--bb-rose); }
.bb-footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: rgba(255,255,255,.5);
  margin-bottom: 10px;
}
.bb-footer-contact-item svg { color: var(--bb-rose2); flex-shrink: 0; margin-top: 2px; }
.bb-footer-contact-item a { transition: color .15s; }
.bb-footer-contact-item a:hover { color: var(--bb-rose); }
.bb-footer-divider {
  margin-top: 36px;
  padding-top: 22px;
  border-top: 1px solid rgba(255,255,255,.06);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  grid-column: 1 / -1;
}
.bb-footer-copy { color: rgba(255,255,255,.22); }
.bb-footer-luma {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,.28);
}
.bb-footer-luma a {
  color: var(--bb-rose);
  font-weight: 700;
  transition: color .15s;
}
.bb-footer-luma a:hover { color: var(--bb-rose2); }
@media (min-width: 768px) {
  .bb-footer-inner { grid-template-columns: 2fr 1fr 1fr; }
}

/* ── whatsapp float ────────────────────────────────────── */
.bb-wa-float {
  position: fixed;
  bottom: 28px; right: 24px;
  z-index: 900;
  width: 56px; height: 56px;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 6px 24px rgba(37,211,102,.38);
  animation: bb-wa-pulse 2.4s ease-out infinite;
  transition: transform .15s, opacity .3s;
  opacity: 0;
}
.bb-wa-float.visible { opacity: 1; }
.bb-wa-float:hover { transform: scale(1.08); }
@keyframes bb-wa-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(37,211,102,.44); }
  70%  { box-shadow: 0 0 0 18px rgba(37,211,102,0); }
  100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
}

/* ── reveal ─────────────────────────────────────────────── */
.bb-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .6s cubic-bezier(.22,.8,.28,1), transform .6s cubic-bezier(.22,.8,.28,1);
}
.bb-reveal.is-visible { opacity: 1; transform: none; }
.bb-d1.is-visible { transition-delay: .05s; }
.bb-d2.is-visible { transition-delay: .12s; }
.bb-d3.is-visible { transition-delay: .19s; }
.bb-d4.is-visible { transition-delay: .26s; }
.bb-d5.is-visible { transition-delay: .33s; }
.bb-d6.is-visible { transition-delay: .40s; }
`;

/* ── component ──────────────────────────────────────────── */
export default function BrendaBezerraPage() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [openFaq,   setOpenFaq]   = useState<number | null>(0);
  const [waVisible, setWaVisible] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setWaVisible(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".bb-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="bb-page" id="bb-conceito" ref={pageRef}>

        {/* ── preview bar ── */}
        <div className="bb-preview" role="banner">
          <div className="bb-preview-center">
            <p className="bb-preview-title">
              <span className="bb-preview-dot" aria-hidden="true" />
              Prévia Conceitual · Brenda Bezerra Esteticista
            </p>
            <p className="bb-preview-sub">
              Proposta desenvolvida pela{" "}
              <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                Luma Sites
              </a>{" "}
              — uso exclusivo da cliente
            </p>
          </div>
          <a
            href="https://www.instagram.com/brendabezerraesteticista/"
            target="_blank"
            rel="noreferrer"
            className="bb-preview-link"
          >
            <Instagram size={12} />
            Instagram
          </a>
        </div>

        {/* ── nav ── */}
        <nav className={`bb-nav${scrolled ? " scrolled" : ""}`} aria-label="Navegação principal">
          <div className="bb-nav-inner">
            <a href="#top" className="bb-brand" onClick={closeMenu}>
              <div className="bb-brand-wordmark">
                <span className="bb-brand-name">Brenda Bezerra</span>
                <span className="bb-brand-sub">Estética & Bem-Estar · Recife</span>
              </div>
            </a>

            <div className="bb-links" role="navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a
                href={wa()}
                target="_blank"
                rel="noreferrer"
                className="bb-nav-cta"
              >
                <WaIcon size={12} />
                Agendar
              </a>
            </div>

            <button
              className="bb-menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <div className={`bb-mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            href={wa()}
            target="_blank"
            rel="noreferrer"
            className="bb-mobile-wa"
            onClick={closeMenu}
          >
            <WaIcon size={18} />
            Agendar meu momento
          </a>
        </div>

        {/* ── hero ── */}
        <section className="bb-hero" id="top" aria-labelledby="bb-hero-h1">
          <div className="bb-hero-grain" aria-hidden="true" />

          <div className="bb-hero-inner">
            <div className="bb-hero-copy">
              <div className="bb-hero-eyebrow">
                <span className="bb-hero-eyebrow-dot" />
                Estética & Bem-Estar · Recife-PE
              </div>

              <h1 id="bb-hero-h1">
                Seu momento de{" "}
                <em>voltar para si.</em>
              </h1>

              <p className="bb-hero-sub">
                Massagem terapêutica, drenagem linfática e limpeza de pele para mulheres
                que precisam desacelerar, aliviar o corpo e recuperar o equilíbrio físico
                e emocional.
              </p>

              <div className="bb-hero-btns">
                <a href={wa()} target="_blank" rel="noreferrer" className="bb-btn-primary">
                  <WaIcon size={18} />
                  Agendar meu momento
                </a>
                <a href="#servicos" className="bb-btn-outline">
                  Ver serviços
                  <ChevronDown size={16} />
                </a>
              </div>

              <div className="bb-hero-pills">
                <span className="bb-hero-pill">
                  <Users size={13} />
                  10,3 mil seguidoras
                </span>
                <span className="bb-hero-pill">
                  <MapPin size={13} />
                  Recife-PE
                </span>
                <span className="bb-hero-pill">
                  <Leaf size={13} />
                  Cuidado personalizado
                </span>
              </div>
            </div>

            <div className="bb-hero-photo-wrap">
              <div className="bb-hero-photo-frame">
                <Image
                  src="/images/brendabezerra/bb-hero-ai.png"
                  alt="Ambiente de estética e bem-estar preparado para um atendimento de Brenda Bezerra"
                  width={1122}
                  height={1402}
                  sizes="(min-width: 900px) 480px, calc(100vw - 40px)"
                  quality={90}
                  priority
                />
              </div>
              <div className="bb-hero-photo-accent" aria-hidden="true" />
              <div className="bb-hero-photo-accent-2" aria-hidden="true" />
              <div className="bb-hero-badge">
                <div className="bb-hero-badge-icon">
                  <Heart size={18} />
                </div>
                <div className="bb-hero-badge-text">
                  <strong>@brendabezerraesteticista</strong>
                  Recife · Massagem, Drenagem & Pele
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── trust bar ── */}
        <div className="bb-trust" role="complementary" aria-label="Diferenciais">
          <div className="bb-trust-grid">
            {[
              { icon: <Wind size={19} />,      value: "Massagem",    label: "Terapêutica" },
              { icon: <Droplets size={19} />,   value: "Drenagem",    label: "Linfática" },
              { icon: <Sparkles size={19} />,   value: "Limpeza",     label: "de Pele" },
              { icon: <MapPin size={19} />,     value: "Recife-PE",   label: "10,3 mil seguidoras" },
            ].map((item, i) => (
              <div key={i} className={`bb-trust-item bb-reveal bb-d${i + 1}`}>
                <div className="bb-trust-icon">{item.icon}</div>
                <div>
                  <div className="bb-trust-value">{item.value}</div>
                  <div className="bb-trust-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── sobre ── */}
        <section className="bb-section alt" id="sobre" aria-labelledby="bb-sobre-h2">
          <div className="bb-wrap">
            <p className="bb-section-label bb-reveal">Quem é Brenda</p>
            <div className="bb-sobre-grid">
              <div className="bb-sobre-photo-wrap bb-reveal">
                <div className="bb-sobre-photo-frame">
                  <Image
                    src="/images/brendabezerra/bb-sobre.jpg"
                    alt="Retrato de apresentação de Brenda Bezerra no Instagram"
                    width={512}
                    height={640}
                    sizes="(min-width: 900px) 480px, calc(100vw - 40px)"
                    quality={90}
                  />
                </div>
                <div className="bb-sobre-photo-accent" aria-hidden="true" />
                <div className="bb-sobre-badge">Brenda Bezerra · Esteticista</div>
              </div>

              <div>
                <h2 className="bb-h2 bb-reveal bb-d1" id="bb-sobre-h2">
                  Do lado de cá, alguém que{" "}
                  <em style={{ fontStyle: "italic", color: "var(--bb-rose2)" }}>cuida de verdade.</em>
                </h2>
                <div className="bb-divider bb-reveal bb-d1" />

                <p className="bb-sobre-text bb-reveal bb-d2">
                  <strong>Brenda Bezerra</strong> construiu sua prática em torno de um cuidado que vai
                  além da estética. Ela atende mulheres que vivem na correria, carregam tensão no corpo
                  e muitas vezes deixam o próprio bem-estar para depois.
                </p>
                <p className="bb-sobre-text bb-reveal bb-d3">
                  Cada procedimento é um momento de pausa, escuta e atenção personalizada —
                  seja para aliviar o corpo com massagem terapêutica, reduzir o inchaço com
                  drenagem ou renovar a pele com uma limpeza cuidadosa. O foco de Brenda é
                  que você <strong>saia se sentindo diferente de quando entrou.</strong>
                </p>
                <p className="bb-sobre-text bb-reveal bb-d4">
                  "Ajudo mulheres cansadas e sobrecarregadas a desacelerarem, relaxarem e
                  recuperarem o equilíbrio físico e emocional."
                </p>

                <div className="bb-info-grid bb-reveal bb-d4">
                  {[
                    { label: "Especialidade",   value: "Massagem, Drenagem & Pele" },
                    { label: "Localização",     value: "Recife-PE" },
                    { label: "Instagram",       value: "@brendabezerraesteticista" },
                    { label: "Presença Social", value: "10,3 mil seguidoras" },
                  ].map((c) => (
                    <div key={c.label} className="bb-info-card">
                      <div className="bb-info-label">{c.label}</div>
                      <div className="bb-info-value">{c.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── serviços ── */}
        <section className="bb-section white" id="servicos" aria-labelledby="bb-servicos-h2">
          <div className="bb-wrap">
            <p className="bb-section-label bb-reveal">Serviços</p>
            <h2 className="bb-h2 bb-reveal bb-d1" id="bb-servicos-h2">
              Escolha o cuidado que{" "}
              <em style={{ fontStyle: "italic", color: "var(--bb-rose2)" }}>seu corpo está pedindo.</em>
            </h2>
            <div className="bb-divider bb-reveal bb-d2" />
            <p className="bb-lead bb-reveal bb-d2">
              Cada procedimento é pensado para o que você está sentindo agora —
              não apenas para o resultado estético, mas para o que você vai sentir ao sair.
            </p>

            <div className="bb-services-grid">
              {services.map((s, i) => (
                <article
                  key={s.slug}
                  className={`bb-service-card bb-reveal bb-d${i + 1}`}
                  aria-label={s.label}
                >
                  <div className="bb-service-img-wrap">
                    <Image
                      src={s.imagem}
                      alt={s.alt}
                      width={640}
                      height={800}
                      sizes="(min-width: 768px) 33vw, calc(100vw - 40px)"
                      quality={88}
                    />
                    <div className="bb-service-img-overlay" aria-hidden="true" />
                    <div className="bb-service-img-tag">
                      <s.icon size={13} />
                      {s.label}
                    </div>
                  </div>
                  <div className="bb-service-body">
                    <p className="bb-service-dor">{s.dor}</p>
                    <h3 className="bb-service-title">{s.label}</h3>
                    <p className="bb-service-text">{s.beneficio}</p>
                    <ul className="bb-service-points" aria-label={`Benefícios: ${s.label}`}>
                      {s.pontos.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                    <a href={wa(`Olá, Brenda! Gostaria de agendar ${s.label}.`)} target="_blank" rel="noreferrer" className="bb-service-cta">
                      Agendar este procedimento
                      <ChevronDown size={14} style={{ transform: "rotate(-90deg)" }} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── galeria ── */}
        <section className="bb-section nude2" id="galeria" aria-labelledby="bb-galeria-h2">
          <div className="bb-wrap">
            <p className="bb-section-label bb-reveal">Galeria</p>
            <h2 className="bb-h2 bb-reveal bb-d1" id="bb-galeria-h2">
              Momentos de{" "}
              <em style={{ fontStyle: "italic", color: "var(--bb-rose2)" }}>cuidado real.</em>
            </h2>
            <div className="bb-divider bb-reveal bb-d2" />
            <p className="bb-lead bb-reveal bb-d2">
              Uma direção visual para elevar a percepção da marca, combinando assets conceituais
              em alta qualidade com referências reais extraídas do Instagram da Brenda.
            </p>

            <div className="bb-gallery-grid bb-reveal bb-d3">
              {gallery.map((g, i) => (
                <div key={i} className="bb-gallery-item">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={480}
                    height={480}
                    sizes="(min-width: 640px) 33vw, 50vw"
                    quality={85}
                  />
                  <div className="bb-gallery-overlay" aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="bb-gallery-notice bb-reveal bb-d4">
              <Instagram size={16} style={{ color: "var(--bb-rose2)", flexShrink: 0 }} />
              <span>
                <strong>Prévia visual com imagens conceituais e referências do Instagram.</strong>{" "}
                A versão final deve substituir os placeholders por fotos originais em alta resolução, autorizadas pela cliente.
              </span>
            </div>

            <div style={{ marginTop: 32, textAlign: "center" }} className="bb-reveal bb-d4">
              <a
                href="https://www.instagram.com/brendabezerraesteticista/"
                target="_blank"
                rel="noreferrer"
                className="bb-btn-outline"
              >
                <Instagram size={16} />
                Ver mais no Instagram
              </a>
            </div>
          </div>
        </section>

        {/* ── como funciona ── */}
        <section className="bb-section white" id="como-funciona" aria-labelledby="bb-steps-h2">
          <div className="bb-wrap">
            <p className="bb-section-label bb-reveal">Como Funciona</p>
            <h2 className="bb-h2 bb-reveal bb-d1" id="bb-steps-h2">
              Três passos para o{" "}
              <em style={{ fontStyle: "italic", color: "var(--bb-rose2)" }}>seu momento.</em>
            </h2>
            <div className="bb-divider bb-reveal bb-d2" />
            <p className="bb-lead bb-reveal bb-d2">
              Simples, acolhedor e personalizado — do primeiro contato ao cuidado pós-atendimento.
            </p>

            <div className="bb-steps-grid">
              {steps.map((s, i) => (
                <div key={s.num} className={`bb-step bb-reveal bb-d${i + 1}`}>
                  <div className="bb-step-num" aria-hidden="true">{s.num}</div>
                  <div>
                    <div className="bb-step-icon" aria-hidden="true">
                      <s.icon size={18} />
                    </div>
                    <h3 className="bb-step-title">{s.title}</h3>
                    <p className="bb-step-text">{s.text}</p>
                    <span className="bb-step-detalhe">
                      <Leaf size={10} />
                      {s.detalhe}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, textAlign: "center" }} className="bb-reveal bb-d3">
              <a href={wa()} target="_blank" rel="noreferrer" className="bb-btn-primary">
                <WaIcon size={18} />
                Começar agora
              </a>
            </div>
          </div>
        </section>

        {/* ── depoimentos ── */}
        <section className="bb-section terra" id="depoimentos" aria-labelledby="bb-dep-h2">
          <div className="bb-wrap">
            <p className="bb-section-label bb-reveal">Depoimentos</p>
            <h2 className="bb-h2 bb-reveal bb-d1" id="bb-dep-h2" style={{ color: "var(--bb-white)" }}>
              O que dizem as clientes
            </h2>
            <div className="bb-divider bb-reveal bb-d2" />

            <div className="bb-testimonials-grid">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`bb-testimonial-card bb-reveal bb-d${i + 1}`}
                  aria-label={`Depoimento de ${t.name}`}
                >
                  <div>
                    <div className="bb-testimonial-highlight">{t.highlight}</div>
                    <div className="bb-testimonial-stars" aria-label="5 estrelas">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="bb-testimonial-text">{t.text}</p>
                  <div className="bb-testimonial-author">
                    <p className="bb-testimonial-name">{t.name}</p>
                    <p className="bb-testimonial-location">
                      <MapPin size={11} />
                      {t.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="bb-testimonials-note bb-reveal">
              Trechos coletados do Instagram · nomes preservados como genéricos até validação e autorização da cliente
            </p>
          </div>
        </section>

        {/* ── faq ── */}
        <section className="bb-section" id="duvidas" aria-labelledby="bb-faq-h2">
          <div className="bb-wrap">
            <p className="bb-section-label bb-reveal">Dúvidas Frequentes</p>
            <h2 className="bb-h2 bb-reveal bb-d1" id="bb-faq-h2">
              Suas perguntas, respondidas
            </h2>
            <div className="bb-divider bb-reveal bb-d1" />

            <div className="bb-faq-list bb-reveal bb-d2" role="list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`bb-faq-item${openFaq === i ? " open" : ""}`}
                  role="listitem"
                >
                  <button
                    className="bb-faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`bb-faq-answer-${i}`}
                  >
                    <span className="bb-faq-q">{faq.q}</span>
                    <span className="bb-faq-chevron" aria-hidden="true">
                      <ChevronDown size={13} />
                    </span>
                  </button>
                  <div
                    className="bb-faq-answer"
                    id={`bb-faq-answer-${i}`}
                    role="region"
                    aria-hidden={openFaq !== i}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

            <div className="bb-faq-footer bb-reveal bb-d3">
              <p className="bb-faq-footer-text">Ficou com alguma dúvida? A Brenda responde.</p>
              <a href={wa("Olá, Brenda! Tenho uma dúvida antes de agendar.")} target="_blank" rel="noreferrer">
                <WaIcon size={15} />
                Perguntar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── cta final ── */}
        <section className="bb-cta-final" id="agendar" aria-labelledby="bb-cta-h2">
          <div className="bb-cta-final-inner">
            <p className="bb-cta-eyebrow bb-reveal">Reserve seu momento</p>
            <h2 className="bb-reveal bb-d1" id="bb-cta-h2">
              Seu corpo também{" "}
              <em>pede cuidado.</em>
            </h2>
            <p className="bb-cta-final-sub bb-reveal bb-d2">
              Reserve um momento para aliviar, respirar e se sentir melhor consigo mesma.
              A Brenda está pronta para te receber.
            </p>
            <div className="bb-cta-dual bb-reveal bb-d3">
              <a href={wa()} target="_blank" rel="noreferrer" className="bb-btn-primary">
                <WaIcon size={18} />
                Agendar pelo WhatsApp
              </a>
              <a
                href="https://www.instagram.com/brendabezerraesteticista/"
                target="_blank"
                rel="noreferrer"
                className="bb-btn-outline"
                style={{ borderColor: "rgba(255,255,255,.18)", color: "rgba(255,255,255,.65)" }}
              >
                <Instagram size={16} />
                Ver no Instagram
              </a>
            </div>
            <div className="bb-cta-final-note bb-reveal bb-d4">
              <MapPin size={13} />
              Atendimento em Recife-PE
            </div>
          </div>
        </section>

        {/* ── footer ── */}
        <footer className="bb-footer">
          <div className="bb-footer-inner">
            <div>
              <p className="bb-footer-brand-name">Brenda Bezerra</p>
              <p className="bb-footer-brand-sub">Estética & Bem-Estar</p>
              <p className="bb-footer-desc">
                Massagem terapêutica, drenagem linfática e limpeza de pele para mulheres
                que escolheram pausar, cuidar e se reconectar com o próprio corpo.
              </p>
              <div className="bb-footer-tags">
                {["Massagem", "Drenagem", "Limpeza de Pele", "Recife-PE", "Bem-Estar"].map((t) => (
                  <span key={t} className="bb-footer-tag">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="bb-footer-col-title">Navegação</p>
              <ul className="bb-footer-links">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="bb-footer-col-title">Contato</p>
              <div className="bb-footer-contact-item">
                <Instagram size={14} />
                <a href="https://www.instagram.com/brendabezerraesteticista/" target="_blank" rel="noreferrer">
                  @brendabezerraesteticista
                </a>
              </div>
              <div className="bb-footer-contact-item">
                <WaIcon size={14} />
                <a href={wa()} target="_blank" rel="noreferrer">
                  Agendar pelo WhatsApp
                </a>
              </div>
              <div className="bb-footer-contact-item">
                <MapPin size={14} />
                <span>Recife-PE</span>
              </div>
            </div>

            <div className="bb-footer-divider">
              <p className="bb-footer-copy">
                © 2026 Brenda Bezerra Estética & Bem-Estar. Todos os direitos reservados.
              </p>
              <p className="bb-footer-luma">
                Proposta desenvolvida por{" "}
                <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                  Luma Sites
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* ── whatsapp float ── */}
        <a
          href={wa()}
          target="_blank"
          rel="noreferrer"
          className={`bb-wa-float${waVisible ? " visible" : ""}`}
          aria-label="Agendar pelo WhatsApp"
        >
          <WaIcon size={26} />
        </a>

      </div>
    </>
  );
}
