"use client";

import { useEffect, useRef, useState } from "react";
import {
  Camera,
  ChevronDown,
  ChevronRight,
  Clock,
  LogIn,
  MapPin,
  MessageCircle,
  Navigation,
  Shield,
  Truck,
  Zap,
} from "lucide-react";

/* ── constants ─────────────────────────────────────────── */
const WA_NUMBER = "5500000000000"; // Aguardando número do cliente
const wa = (msg = "Olá, GeraSeg! Vi a proposta e gostaria de saber mais sobre rastreamento veicular.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const navItems = [
  { href: "#top",      label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre",    label: "Sobre" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#duvidas",  label: "Dúvidas" },
  { href: "#contato",  label: "Contato" },
];

const services = [
  {
    icon: Navigation,
    eyebrow: "Localização em Tempo Real",
    title: "Rastreamento Veicular",
    desc: "Saiba exatamente onde cada veículo está, a qualquer hora do dia. GPS de alta precisão com posição, velocidade e rota — acessível no celular ou computador.",
    points: [
      "GPS com atualização em tempo real",
      "Histórico completo de percursos",
      "Alertas de saída de área e desvio de rota",
    ],
  },
  {
    icon: Truck,
    eyebrow: "Gestão Operacional",
    title: "Monitoramento de Frotas",
    desc: "Transforme dados de deslocamento em decisões que reduzem custo. Controle combustível, jornada de motoristas e produtividade com relatórios automáticos.",
    points: [
      "Dashboard completo em tempo real",
      "Controle de jornada e comportamento",
      "Relatórios de consumo e eficiência",
    ],
  },
  {
    icon: Camera,
    eyebrow: "Vigilância Ativa",
    title: "Videomonitoramento Veicular",
    desc: "Câmeras embarcadas HD que registram tudo — dentro e fora do veículo. Evidências concretas em acidentes e proteção contra fraudes operacionais.",
    points: [
      "Câmeras HD internas e externas",
      "Gravação em nuvem 24h por dia",
      "Monitoramento ao vivo pelo aplicativo",
    ],
  },
];

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Fale com a equipe",
    text: "Descreva sua necessidade pelo WhatsApp — um veículo pessoal, uma frota pequena ou uma operação maior. Respondemos com agilidade e sem enrolação.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Diagnóstico sem custo",
    text: "Avaliamos seu perfil e indicamos a solução ideal: tipo de rastreador, câmeras e plano de monitoramento — tudo adequado à sua realidade.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Instalação e ativação",
    text: "Técnicos especializados instalam o equipamento de forma rápida. Em poucas horas, seu veículo já está monitorado, rastreado e protegido.",
  },
];

const faqs = [
  {
    q: "Como funciona o rastreamento veicular?",
    a: "O rastreador instalado no veículo usa GPS e rede celular (GSM) para transmitir a posição em tempo real para nossa plataforma. Você acessa pelo aplicativo ou computador e visualiza localização, velocidade, rota percorrida e histórico de deslocamentos.",
  },
  {
    q: "Quais tipos de veículos podem ser rastreados?",
    a: "Qualquer veículo com bateria: carros, motos, caminhões, vans, ônibus, máquinas agrícolas e equipamentos pesados. Nossa solução cobre desde um veículo pessoal até frotas de centenas de unidades.",
  },
  {
    q: "O que acontece em caso de roubo ou furto?",
    a: "Em caso de ocorrência, nossa central de atendimento aciona o protocolo de localização e bloqueio remoto do veículo. Atuamos junto às autoridades para maximizar as chances de recuperação.",
  },
  {
    q: "O sistema funciona em qualquer parte do Brasil?",
    a: "Sim. Utilizamos as maiores redes de cobertura celular do país. Em áreas sem sinal, o dispositivo armazena os dados localmente e os envia automaticamente ao recuperar conexão.",
  },
  {
    q: "Posso monitorar minha frota pelo celular?",
    a: "Sim. Nossa plataforma tem versão web responsiva e aplicativo para Android e iOS. Acesse posição, rotas, alertas e relatórios de qualquer lugar, a qualquer hora.",
  },
  {
    q: "Quanto tempo leva a instalação?",
    a: "A instalação leva entre 1 e 2 horas por veículo, realizada por técnicos especializados no local combinado. Para frotas maiores, montamos um cronograma por etapas sem interromper a operação.",
  },
];

/* ── SVG helpers ───────────────────────────────────────── */
const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const MenuIcon = ({ open = false }: { open?: boolean }) => (
  <span className={`gs-menu-glyph${open ? " open" : ""}`} aria-hidden="true">
    <span className="gs-mg-top" />
    <span className="gs-mg-bot" />
    <span className="gs-mg-dot" />
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
  --gs-bar:      58px;
  --gs-nav:      72px;

  --gs-dark:     #08101E;
  --gs-dark2:    #151719;
  --gs-dark3:    #25282B;

  --gs-orange:   #232323;
  --gs-orange2:  #9A9A9A;
  --gs-orange3:  #111111;
  --gs-orange-bg: rgba(35,35,35,.08);
  --gs-orange-br: rgba(35,35,35,.22);
  --gs-silver:   #A7A9AC;

  --gs-slate:    #EEF1F5;
  --gs-light:    #F5F5F3;
  --gs-white:    #FAFAF8;
  --gs-ink:      #171717;
  --gs-muted:    #626262;
  --gs-line-l:   rgba(13,17,23,.08);
  --gs-line-d:   rgba(255,255,255,.08);
}

@media (min-width: 640px) {
  :root { --gs-bar: 48px; }
}

/* ── page shell ─────────────────────────────────────────── */
#gs-conceito {
  padding-top: calc(var(--gs-bar) + var(--gs-nav));
  font-family: var(--font-gs-body), system-ui, sans-serif;
}
#gs-conceito h1, #gs-conceito h2, #gs-conceito h3, #gs-conceito h4 {
  font-family: var(--font-gs-display), system-ui, sans-serif;
}
.gs-page {
  color: var(--gs-ink);
  background: var(--gs-white);
  overflow-x: clip;
  min-height: 100vh;
}

/* ── preview bar ─────────────────────────────────────────── */
.gs-preview {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1001;
  height: var(--gs-bar);
  padding: 7px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  background: var(--gs-dark);
  border-bottom: 1px solid rgba(167,169,172,.28);
}
.gs-preview-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.gs-preview-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--gs-white);
}
.gs-preview-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--gs-orange);
  animation: gs-pulse-dot 1.6s ease-out infinite;
}
@keyframes gs-pulse-dot {
  0%   { box-shadow: 0 0 0 0 rgba(167,169,172,.65); }
  70%  { box-shadow: 0 0 0 10px rgba(167,169,172,0); }
  100% { box-shadow: 0 0 0 0 rgba(167,169,172,0); }
}
.gs-preview-sub {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,.4);
}
.gs-preview-sub a {
  color: var(--gs-orange2);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.gs-preview-link {
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
.gs-preview-link:hover {
  border-color: var(--gs-orange-br);
  color: var(--gs-orange2);
}
/* ── preview bar — mobile ────────────────────────────────── */
@media (max-width: 639px) {
  .gs-preview { padding: 0 14px; }
  .gs-preview-center { gap: 1px; }
  .gs-preview-title-full { display: none; }
  .gs-preview-title-short { font-size: 10px; letter-spacing: .12em; white-space: nowrap; }
  .gs-preview-sub { font-size: 10px; line-height: 1.3; }
  .gs-preview-link { display: none; }
}
@media (min-width: 640px) {
  .gs-preview-title-short { display: none; }
}

/* ── nav ─────────────────────────────────────────────────── */
.gs-nav {
  position: fixed;
  left: 0; right: 0;
  top: var(--gs-bar);
  z-index: 1000;
  height: var(--gs-nav);
  background: rgba(8,16,30,.95);
  border-bottom: 1px solid rgba(167,169,172,.14);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition: background .25s, box-shadow .25s;
  font-family: var(--font-gs-body), system-ui, sans-serif;
}
.gs-nav.scrolled {
  background: rgba(6,12,22,.99);
  box-shadow: 0 12px 40px rgba(0,0,0,.6);
}
.gs-nav-inner {
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.gs-brand {
  display: flex;
  flex-direction: column;
  gap: 4px;
  line-height: 1;
}
.gs-brand-logo {
  width: 172px;
  height: auto;
  filter: invert(1) grayscale(1) contrast(1.1);
}
.gs-brand-sub {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: rgba(255,255,255,.3);
}
.gs-links {
  display: none;
  align-items: center;
  gap: 20px;
}
.gs-links a {
  position: relative;
  color: rgba(255,255,255,.46);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  transition: color .15s;
}
.gs-links a:hover, .gs-links a.active { color: var(--gs-white); }
.gs-links a:not(.gs-nav-cta)::after {
  content: "";
  position: absolute;
  bottom: -7px; left: 0; right: 0;
  height: 1px;
  background: var(--gs-orange);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .2s;
}
.gs-links a.active::after, .gs-links a:hover::after { transform: scaleX(1); }
.gs-nav-cta {
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 18px;
  border-radius: 3px;
  background: var(--gs-orange3);
  color: var(--gs-white) !important;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  box-shadow: 0 6px 22px rgba(0,0,0,.22);
  transition: background .15s, box-shadow .15s;
}
.gs-nav-cta:hover {
  background: var(--gs-orange);
  box-shadow: 0 8px 28px rgba(17,17,17,.32);
}
.gs-nav-cta::after { display: none !important; }
.gs-nav-client {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 3px;
  color: rgba(255,255,255,.55) !important;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  transition: border-color .15s, color .15s, background .15s;
}
.gs-nav-client:hover {
  border-color: var(--gs-orange-br);
  color: var(--gs-orange2) !important;
  background: var(--gs-orange-bg);
}
.gs-nav-client::after { display: none !important; }
.gs-mobile-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.gs-nav-client-mobile {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0 12px;
  border: 1px solid rgba(255,255,255,.22);
  border-radius: 3px;
  background: rgba(255,255,255,.08);
  color: var(--gs-white);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  box-shadow: 0 8px 28px rgba(0,0,0,.22);
}
.gs-nav-client-mobile svg {
  color: var(--gs-white);
  flex-shrink: 0;
}
.gs-mobile-client {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  padding: 15px 16px;
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 4px;
  background: rgba(255,255,255,.08);
  color: var(--gs-white);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
  transition: border-color .15s, background .15s;
}
.gs-mobile-client:hover {
  border-color: rgba(255,255,255,.32);
  background: rgba(255,255,255,.12);
  color: var(--gs-white);
}
.gs-menu-btn {
  width: 44px; height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(167,169,172,.28);
  border-radius: 3px;
  background: transparent;
  color: var(--gs-orange2);
  transition: background .2s;
}
.gs-menu-btn:hover { background: var(--gs-orange-bg); }
.gs-menu-glyph {
  position: relative;
  width: 22px; height: 18px;
  display: block;
}
.gs-mg-top, .gs-mg-bot {
  position: absolute;
  right: 0;
  height: 1.5px;
  border-radius: 999px;
  background: currentColor;
  transition: top .28s cubic-bezier(.22,.8,.28,1), width .28s cubic-bezier(.22,.8,.28,1), transform .28s cubic-bezier(.22,.8,.28,1);
}
.gs-mg-top { top: 5px; width: 22px; }
.gs-mg-bot { top: 13px; width: 15px; }
.gs-mg-dot {
  position: absolute;
  right: 0; top: 9px;
  width: 4px; height: 4px;
  border-radius: 50%;
  background: currentColor;
  transition: opacity .2s .1s;
}
.gs-menu-glyph.open .gs-mg-top { top: 9px; transform: rotate(42deg); }
.gs-menu-glyph.open .gs-mg-bot { top: 9px; width: 22px; transform: rotate(-42deg); }
.gs-menu-glyph.open .gs-mg-dot { opacity: 0; }
.gs-mobile-menu {
  display: none;
  position: fixed;
  top: calc(var(--gs-bar) + var(--gs-nav));
  left: 0; right: 0;
  z-index: 999;
  background: rgba(6,12,22,.98);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(167,169,172,.14);
  padding: 16px 20px 24px;
  flex-direction: column;
  gap: 4px;
}
.gs-mobile-menu.open { display: flex; }
.gs-mobile-menu a {
  display: flex;
  align-items: center;
  padding: 12px 8px;
  border-bottom: 1px solid rgba(255,255,255,.05);
  color: rgba(255,255,255,.55);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: color .15s, padding-left .15s;
}
.gs-mobile-menu a:hover { color: var(--gs-white); padding-left: 16px; }
.gs-mobile-menu .gs-mobile-wa {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  border-radius: 4px;
  background: var(--gs-orange3);
  color: var(--gs-white);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  border-bottom: 0;
}
.gs-mobile-menu .gs-mobile-wa:hover {
  background: var(--gs-orange);
  padding-left: 14px;
  color: var(--gs-white);
}
@media (min-width: 900px) {
  .gs-links { display: flex; }
  .gs-mobile-actions { display: none; }
  .gs-menu-btn { display: none; }
}
@media (max-width: 480px) {
  .gs-nav-inner {
    width: min(100% - 28px, 1160px);
    gap: 10px;
  }
  .gs-brand-logo { width: clamp(158px, 40vw, 182px); }
  .gs-nav-client-mobile {
    padding: 0 10px;
    letter-spacing: .08em;
  }
}

/* ── sections ─────────────────────────────────────────── */
.gs-section { padding: 96px 20px; border-top: 1px solid var(--gs-line-l); }
.gs-section.alt { background: var(--gs-light); }
.gs-section.slate { background: var(--gs-slate); }
.gs-section.dark { background: var(--gs-dark2); color: var(--gs-white); border-top: none; }
.gs-section.darker { background: var(--gs-dark); color: var(--gs-white); border-top: none; }
.gs-wrap { width: min(1120px, 100%); margin: 0 auto; }
.gs-section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--gs-orange);
  margin-bottom: 14px;
}
.gs-section-label::before {
  content: "";
  display: block;
  width: 28px; height: 1px;
  background: var(--gs-orange);
}
.dark .gs-section-label,
.darker .gs-section-label { color: var(--gs-orange2); }
.dark .gs-section-label::before,
.darker .gs-section-label::before { background: var(--gs-orange2); }
.gs-divider {
  width: 36px; height: 2px;
  background: var(--gs-orange);
  margin: 18px 0;
  border-radius: 1px;
}
.gs-h2 {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -.02em;
  margin: 0 0 12px;
}
.gs-lead {
  font-size: 17px;
  line-height: 1.65;
  color: var(--gs-muted);
  max-width: 620px;
}
.dark .gs-lead, .darker .gs-lead { color: rgba(255,255,255,.52); }

/* ── hero ─────────────────────────────────────────────── */
.gs-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  background: #EEF1F6;
  overflow: hidden;
  border-bottom: 1px solid rgba(13,17,23,.12);
}
.gs-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 65% 70% at 72% 50%, rgba(35,35,35,.05) 0%, transparent 55%),
    radial-gradient(ellipse 40% 50% at 5% 80%, rgba(35,35,35,.03) 0%, transparent 55%),
    linear-gradient(155deg, #E8ECF3 0%, #F2F5FA 50%, #F9FAFB 100%);
}
.gs-hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(8,16,30,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(8,16,30,.045) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}
.gs-hero-inner {
  position: relative;
  z-index: 2;
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  padding: 80px 0 64px;
  align-items: center;
}
.gs-hero-copy {
  position: relative;
  z-index: 2;
  max-width: 600px;
}
.gs-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px 10px 12px;
  border: 1px solid rgba(8,16,30,.16);
  border-radius: 4px;
  background: rgba(255,255,255,.9);
  box-shadow: 0 14px 36px rgba(8,16,30,.1);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: #0A0A0A;
  margin-bottom: 28px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: gs-hero-in .5s cubic-bezier(.22,.8,.28,1) .1s both;
}
.gs-hero-eyebrow-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--gs-orange);
  flex-shrink: 0;
  animation: gs-pulse-dot 1.6s ease-out infinite;
}
.gs-hero h1 {
  font-size: clamp(34px, 8vw, 62px);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -.03em;
  color: var(--gs-ink);
  margin: 0 0 24px;
  animation: gs-hero-in .65s cubic-bezier(.22,.8,.28,1) .2s both;
}
.gs-hero h1 em {
  font-style: normal;
  color: var(--gs-muted);
}
.gs-hero-sub {
  font-size: clamp(15px, 1.8vw, 18px);
  line-height: 1.7;
  color: var(--gs-muted);
  margin: 0 0 40px;
  animation: gs-hero-in .65s cubic-bezier(.22,.8,.28,1) .32s both;
}
.gs-hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  animation: gs-hero-in .65s cubic-bezier(.22,.8,.28,1) .44s both;
}
.gs-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  border-radius: 3px;
  background: var(--gs-orange3);
  color: var(--gs-white);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .05em;
  text-transform: uppercase;
  box-shadow: 0 8px 28px rgba(0,0,0,.24);
  transition: background .15s, box-shadow .15s, transform .15s;
}
.gs-btn-primary:hover {
  background: var(--gs-orange);
  box-shadow: 0 12px 36px rgba(17,17,17,.32);
  transform: translateY(-1px);
}
.gs-btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 24px;
  border-radius: 3px;
  border: 1px solid rgba(8,16,30,.2);
  color: var(--gs-ink);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .04em;
  transition: border-color .15s, color .15s;
}
.gs-btn-outline:hover {
  border-color: var(--gs-orange);
  color: var(--gs-orange3);
}
.gs-hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
  animation: gs-hero-in .65s cubic-bezier(.22,.8,.28,1) .56s both;
}
.gs-hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border: 1px solid rgba(8,16,30,.11);
  border-radius: 2px;
  background: rgba(8,16,30,.04);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .04em;
  color: var(--gs-muted);
}
.gs-hero-pill svg { color: var(--gs-orange3); flex-shrink: 0; }
.gs-hero-side {
  position: relative;
  width: min(100%, 620px);
  margin: 0;
  justify-self: center;
  animation: gs-hero-in .75s cubic-bezier(.22,.8,.28,1) .36s both;
}
.gs-hero-image-frame {
  position: relative;
  aspect-ratio: 16 / 10;
  border: 1px solid rgba(8,16,30,.14);
  border-radius: 8px;
  background: rgba(255,255,255,.45);
  box-shadow: 0 28px 80px rgba(8,16,30,.16);
  overflow: hidden;
}
.gs-hero-image-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(238,241,246,.18) 0%, transparent 24%),
    linear-gradient(180deg, rgba(8,16,30,0) 62%, rgba(8,16,30,.14) 100%);
}
.gs-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
@media (max-width: 1023px) {
  .gs-hero-inner {
    gap: 0;
    padding-top: 96px;
  }
  .gs-hero-eyebrow {
    width: 100%;
    justify-content: center;
    padding: 12px 14px;
    font-size: 11px;
    line-height: 1.25;
    letter-spacing: .11em;
    text-align: center;
  }
  .gs-hero-pills {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-top: 32px;
  }
  .gs-hero-pill {
    justify-content: center;
    min-height: 38px;
    padding: 8px 10px;
    text-align: center;
  }
  .gs-hero-side {
    position: absolute;
    z-index: 1;
    top: 28px;
    left: -20px;
    right: -20px;
    width: auto;
    max-width: none;
    pointer-events: none;
  }
  .gs-hero-image-frame {
    height: min(520px, 68vh);
    aspect-ratio: auto;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    background: transparent;
  }
  .gs-hero-image-frame::after {
    background:
      linear-gradient(90deg, rgba(238,241,246,.72) 0%, rgba(238,241,246,.5) 48%, rgba(238,241,246,.22) 100%),
      linear-gradient(180deg, rgba(238,241,246,.2) 0%, rgba(238,241,246,.72) 70%, #EEF1F6 100%);
  }
  .gs-hero-image {
    object-position: center top;
  }
}
@media (min-width: 1024px) {
  .gs-hero-inner {
    grid-template-columns: minmax(0, 560px) minmax(360px, 520px);
    justify-content: space-between;
    gap: 44px;
  }
  .gs-hero-side {
    justify-self: end;
  }
  .gs-hero-image-frame {
    aspect-ratio: 1.55 / 1;
  }
}
@keyframes gs-hero-in {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}

/* ── hero dashboard visual ────────────────────────────── */
.gs-hero-visual {
  position: relative;
  animation: gs-hero-in .8s cubic-bezier(.22,.8,.28,1) .3s both;
}
@media (max-width: 899px) {
  .gs-hero-visual {
    display: none;
  }
}
.gs-dashboard {
  position: relative;
  background: rgba(16,25,39,.85);
  border: 1px solid rgba(167,169,172,.24);
  border-radius: 8px;
  padding: 20px;
  backdrop-filter: blur(8px);
  box-shadow: 0 32px 80px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.06);
  overflow: hidden;
}
.gs-dashboard::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(167,169,172,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(167,169,172,.08) 1px, transparent 1px);
  background-size: 36px 36px;
}
.gs-db-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.gs-db-title {
  font-family: var(--font-gs-display), system-ui, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.5);
}
.gs-db-live {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--gs-orange);
}
.gs-db-live-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--gs-orange);
  animation: gs-pulse-dot 1.4s ease-out infinite;
}
.gs-map-area {
  position: relative;
  background: rgba(8,16,30,.6);
  border-radius: 6px;
  height: 200px;
  overflow: hidden;
  margin-bottom: 16px;
  border: 1px solid rgba(255,255,255,.05);
}
.gs-map-grid-inner {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
  background-size: 28px 28px;
}
.gs-map-route {
  position: absolute;
  inset: 0;
}
.gs-route-line {
  position: absolute;
  top: 50%; left: 15%;
  width: 70%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gs-orange3), var(--gs-orange), transparent);
  transform: translateY(-50%) rotate(-8deg);
  border-radius: 999px;
  opacity: .7;
}
.gs-route-line::before {
  content: "";
  position: absolute;
  right: -4px; top: -4px;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--gs-orange);
  box-shadow: 0 0 0 3px rgba(167,169,172,.34), 0 0 12px rgba(250,250,248,.34);
  animation: gs-ping 2s ease-out infinite;
}
@keyframes gs-ping {
  0%, 100% { box-shadow: 0 0 0 3px rgba(167,169,172,.34), 0 0 12px rgba(250,250,248,.34); }
  50% { box-shadow: 0 0 0 8px rgba(167,169,172,.18), 0 0 24px rgba(167,169,172,.34); }
}
.gs-map-pin {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.gs-map-pin-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,.35);
  border: 1px solid rgba(255,255,255,.15);
}
.gs-map-pin-label {
  font-size: 9px;
  font-weight: 700;
  color: rgba(255,255,255,.35);
  white-space: nowrap;
}
.gs-pin-a { top: 38%; left: 12%; }
.gs-pin-b { bottom: 22%; right: 18%; }
.gs-db-stats {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.gs-db-stat {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 6px;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.gs-db-stat-icon { color: var(--gs-orange2); }
.gs-db-stat-value {
  font-family: var(--font-gs-display), system-ui, sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: var(--gs-white);
  line-height: 1;
  letter-spacing: -.02em;
}
.gs-db-stat-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .05em;
  text-transform: uppercase;
  color: rgba(255,255,255,.35);
}
.gs-db-vehicle-list {
  position: relative;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.gs-db-vehicle {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 5px;
}
.gs-db-vehicle-icon {
  width: 32px; height: 32px;
  border-radius: 6px;
  background: var(--gs-orange-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gs-orange2);
  flex-shrink: 0;
}
.gs-db-vehicle-info { flex: 1; min-width: 0; }
.gs-db-vehicle-plate {
  font-size: 12px;
  font-weight: 700;
  color: var(--gs-white);
  line-height: 1;
}
.gs-db-vehicle-route {
  font-size: 10px;
  color: rgba(255,255,255,.35);
  margin-top: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.gs-db-vehicle-speed {
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 700;
  color: var(--gs-orange2);
}
.gs-db-vehicle-status {
  flex-shrink: 0;
  width: 8px; height: 8px;
  border-radius: 50%;
}
.gs-db-vehicle-status.online { background: #22D3A1; box-shadow: 0 0 6px rgba(34,211,161,.4); }
.gs-db-vehicle-status.idle   { background: #FBBF24; box-shadow: 0 0 6px rgba(251,191,36,.3); }

/* ── services ────────────────────────────────────────────── */
.gs-services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 56px;
}
.gs-service-card {
  padding: 32px 28px;
  border-radius: 5px;
  border: 1px solid var(--gs-line-l);
  background: var(--gs-white);
  transition: border-color .2s, box-shadow .2s, transform .2s;
}
.gs-service-card:hover {
  border-color: var(--gs-orange-br);
  box-shadow: 0 16px 48px rgba(0,0,0,.07);
  transform: translateY(-2px);
}
.gs-service-icon {
  width: 48px; height: 48px;
  border-radius: 10px;
  background: var(--gs-orange-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gs-orange3);
  margin-bottom: 20px;
}
.gs-service-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--gs-orange3);
  margin-bottom: 6px;
}
.gs-service-title {
  font-family: var(--font-gs-display), system-ui, sans-serif;
  font-size: 23px;
  font-weight: 800;
  margin: 0 0 12px;
  color: var(--gs-ink);
  line-height: 1.15;
  letter-spacing: -.02em;
}
.gs-service-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--gs-muted);
  margin-bottom: 20px;
}
.gs-service-points {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid var(--gs-line-l);
  padding-top: 20px;
}
.gs-service-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 500;
  color: var(--gs-ink);
}
.gs-service-points li::before {
  content: "";
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--gs-orange);
  flex-shrink: 0;
}
.gs-service-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--gs-orange3);
  transition: gap .15s, color .15s;
}
.gs-service-link:hover { gap: 10px; color: var(--gs-orange); }
.gs-services-cta {
  margin-top: 48px;
  text-align: center;
}
@media (min-width: 640px) {
  .gs-services-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .gs-services-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── sobre ───────────────────────────────────────────────── */
.gs-about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  align-items: center;
  margin-top: 16px;
}
.gs-about-visual {
  position: relative;
}
@media (max-width: 899px) {
  .gs-about-visual {
    display: none;
  }
}
.gs-about-card {
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid rgba(35,35,35,.1);
  padding: 32px 28px;
  box-shadow: 0 24px 64px rgba(0,0,0,.07);
  position: relative;
  overflow: hidden;
}
.gs-about-card::before {
  content: "";
  position: absolute;
  top: -60px; right: -60px;
  width: 240px; height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(35,35,35,.04) 0%, transparent 70%);
  pointer-events: none;
}
.gs-about-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  background: var(--gs-orange-bg);
  border: 1px solid var(--gs-orange-br);
  border-radius: 3px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--gs-orange);
  margin-bottom: 20px;
}
.gs-about-metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 24px;
}
.gs-about-metric {
  background: var(--gs-light);
  border: 1px solid var(--gs-line-l);
  border-radius: 6px;
  padding: 16px 14px;
}
.gs-about-metric-value {
  font-family: var(--font-gs-display), system-ui, sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: var(--gs-orange3);
  line-height: 1;
  letter-spacing: -.02em;
}
.gs-about-metric-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--gs-muted);
  margin-top: 5px;
  text-transform: uppercase;
  letter-spacing: .05em;
}
.gs-about-diff {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.gs-about-diff-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--gs-muted);
}
.gs-about-diff-item::before {
  content: "";
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--gs-orange);
  flex-shrink: 0;
}
.gs-about-text {
  font-size: 16px;
  line-height: 1.78;
  color: var(--gs-muted);
  margin-bottom: 16px;
}
.gs-about-text strong { color: var(--gs-ink); font-weight: 700; }
.gs-about-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 28px;
}
.gs-about-info-card {
  padding: 16px 14px;
  border: 1px solid var(--gs-line-l);
  border-radius: 4px;
  background: rgba(255,255,255,.7);
}
.gs-about-info-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--gs-orange3);
  margin-bottom: 4px;
}
.gs-about-info-value {
  font-family: var(--font-gs-display), system-ui, sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--gs-ink);
  line-height: 1.25;
  letter-spacing: -.01em;
}
.gs-location-panel {
  display: grid;
  gap: 24px;
  align-items: stretch;
}
.gs-location-card {
  display: grid;
  gap: 18px;
  padding: 24px;
  border: 1px solid var(--gs-line-l);
  border-radius: 7px;
  background: rgba(255,255,255,.82);
}
.gs-location-head {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.gs-location-icon {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--gs-orange-bg);
  color: var(--gs-orange3);
}
.gs-location-kicker {
  margin: 0 0 4px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--gs-orange3);
}
.gs-location-address {
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: var(--gs-muted);
}
.gs-location-link {
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  padding: 0 16px;
  border-radius: 3px;
  background: var(--gs-orange3);
  color: var(--gs-white);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.gs-location-map {
  display: none;
  width: 100%;
  min-height: 320px;
  border: 0;
  border-radius: 7px;
  filter: grayscale(1) contrast(1.05);
}
@media (min-width: 768px) {
  .gs-location-panel {
    grid-template-columns: minmax(260px, .68fr) minmax(360px, 1.32fr);
  }
  .gs-location-map { display: block; }
}
/* ── process ─────────────────────────────────────────────── */
.gs-process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 56px;
}
.gs-step {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 32px 28px;
  border-radius: 5px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.07);
  transition: background .2s, border-color .2s;
}
.gs-step:hover {
  background: rgba(35,35,35,.06);
  border-color: rgba(167,169,172,.28);
}
.gs-step-num {
  font-family: var(--font-gs-display), system-ui, sans-serif;
  font-size: 52px;
  font-weight: 800;
  line-height: 1;
  color: rgba(167,169,172,.28);
  flex-shrink: 0;
  min-width: 56px;
  letter-spacing: -.04em;
}
.gs-step-icon {
  width: 42px; height: 42px;
  border-radius: 8px;
  background: var(--gs-orange-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gs-orange2);
  flex-shrink: 0;
  margin-top: 4px;
}
.gs-step-title {
  font-family: var(--font-gs-display), system-ui, sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: var(--gs-white);
  margin: 0 0 10px;
  letter-spacing: -.02em;
}
.gs-step-text {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255,255,255,.48);
}
@media (min-width: 768px) {
  .gs-process-grid { grid-template-columns: repeat(3, 1fr); }
  .gs-step { flex-direction: column; gap: 16px; }
}

/* ── faq ─────────────────────────────────────────────────── */
.gs-faq-list {
  margin-top: 48px;
  max-width: 780px;
}
.gs-faq-item { border-bottom: 1px solid var(--gs-line-l); }
.gs-faq-item:first-child { border-top: 1px solid var(--gs-line-l); }
.gs-faq-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding: 22px 4px;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
}
.gs-faq-q {
  font-size: 16px;
  font-weight: 600;
  color: var(--gs-ink);
  line-height: 1.4;
  transition: color .15s;
}
.gs-faq-btn:hover .gs-faq-q,
.gs-faq-item.open .gs-faq-q { color: var(--gs-orange3); }
.gs-faq-chevron {
  flex-shrink: 0;
  width: 22px; height: 22px;
  border-radius: 50%;
  border: 1px solid var(--gs-line-l);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gs-muted);
  margin-top: 2px;
  transition: transform .25s, background .15s, color .15s, border-color .15s;
}
.gs-faq-item.open .gs-faq-chevron {
  transform: rotate(180deg);
  background: var(--gs-orange-bg);
  color: var(--gs-orange3);
  border-color: var(--gs-orange-br);
}
.gs-faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height .35s cubic-bezier(.22,.8,.28,1), padding .25s;
  font-size: 15px;
  line-height: 1.72;
  color: var(--gs-muted);
  padding: 0 4px;
}
.gs-faq-item.open .gs-faq-answer {
  max-height: 400px;
  padding-bottom: 22px;
}
.gs-faq-footer {
  margin-top: 40px;
  padding: 24px 28px;
  border-radius: 5px;
  background: var(--gs-orange-bg);
  border: 1px solid var(--gs-orange-br);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.gs-faq-footer-text {
  font-size: 15px;
  font-weight: 500;
  color: var(--gs-ink);
}
.gs-faq-footer a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 3px;
  background: var(--gs-orange3);
  color: var(--gs-white);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: background .15s;
}
.gs-faq-footer a:hover { background: var(--gs-orange); }

/* ── cta final ───────────────────────────────────────────── */
.gs-cta-final {
  background: linear-gradient(145deg, var(--gs-dark) 0%, #0E1826 55%, #192135 100%);
  padding: 120px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.gs-cta-final::before {
  content: "";
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 700px; height: 420px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(255,255,255,.06) 0%, transparent 70%);
  pointer-events: none;
}
.gs-cta-final-inner {
  position: relative;
  width: min(680px, 100%);
  margin: 0 auto;
}
.gs-cta-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--gs-orange2);
  margin-bottom: 20px;
}
.gs-cta-final h2 {
  font-size: clamp(30px, 5vw, 54px);
  font-weight: 800;
  color: var(--gs-white);
  line-height: 1.08;
  margin: 0 0 20px;
  letter-spacing: -.03em;
}
.gs-cta-final h2 em {
  font-style: normal;
  color: var(--gs-silver);
}
.gs-cta-final-sub {
  font-size: 17px;
  line-height: 1.6;
  color: rgba(255,255,255,.68);
  margin-bottom: 40px;
}
.gs-cta-final-loc {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.56);
}
.gs-cta-final-loc svg { color: var(--gs-silver); }

/* ── footer ──────────────────────────────────────────────── */
.gs-footer {
  background: var(--gs-dark);
  border-top: 1px solid rgba(255,255,255,.08);
  padding: 64px 20px 40px;
  color: rgba(255,255,255,.5);
  font-family: var(--font-gs-body), system-ui, sans-serif;
}
.gs-footer-inner {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}
.gs-footer-logo {
  width: 168px;
  height: auto;
  filter: invert(1) grayscale(1) contrast(1.08);
  margin-bottom: 14px;
}
.gs-footer-desc {
  font-size: 13px;
  line-height: 1.65;
  max-width: 280px;
  color: rgba(255,255,255,.64);
}
.gs-footer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}
.gs-footer-tag {
  padding: 4px 10px;
  border-radius: 2px;
  background: var(--gs-orange-bg);
  border: 1px solid var(--gs-orange-br);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.78);
}
.gs-footer-col-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: rgba(255,255,255,.68);
  margin-bottom: 16px;
}
.gs-footer-links {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.gs-footer-links a {
  font-size: 14px;
  color: rgba(255,255,255,.66);
  transition: color .15s;
}
.gs-footer-links a:hover { color: var(--gs-orange2); }
.gs-footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: rgba(255,255,255,.66);
  margin-bottom: 10px;
}
.gs-footer-contact-item svg { color: var(--gs-silver); flex-shrink: 0; margin-top: 2px; }
.gs-footer-contact-item a { transition: color .15s; }
.gs-footer-contact-item a:hover { color: var(--gs-orange2); }
.gs-footer-divider {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,.05);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  grid-column: 1 / -1;
}
.gs-footer-copy { color: rgba(255,255,255,.52); }
.gs-footer-luma {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,.7);
}
.gs-footer-luma a {
  color: var(--gs-white);
  font-weight: 700;
  transition: color .15s;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.gs-footer-luma a:hover { color: var(--gs-orange2); }
@media (min-width: 768px) {
  .gs-footer-inner { grid-template-columns: 2fr 1fr 1fr; }
}
@media (max-width: 767px) {
  .gs-footer {
    padding-bottom: 132px;
  }
  .gs-footer-divider {
    align-items: flex-start;
  }
}

/* ── whatsapp float ──────────────────────────────────────── */
.gs-wa-float {
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
  box-shadow: 0 6px 24px rgba(37,211,102,.4);
  animation: gs-wa-pulse 2.4s ease-out infinite;
  transition: transform .15s, box-shadow .15s, opacity .3s;
  opacity: 0;
}
.gs-wa-float.visible { opacity: 1; }
.gs-wa-float:hover {
  transform: scale(1.08);
  box-shadow: 0 10px 32px rgba(37,211,102,.55);
}
@keyframes gs-wa-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(37,211,102,.45); }
  70%  { box-shadow: 0 0 0 18px rgba(37,211,102,0); }
  100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
}

/* ── reveal ─────────────────────────────────────────────── */
.gs-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .6s cubic-bezier(.22,.8,.28,1), transform .6s cubic-bezier(.22,.8,.28,1);
}
.gs-reveal.is-visible { opacity: 1; transform: none; }
.gs-d1.is-visible { transition-delay: .05s; }
.gs-d2.is-visible { transition-delay: .12s; }
.gs-d3.is-visible { transition-delay: .19s; }
.gs-d4.is-visible { transition-delay: .26s; }
.gs-d5.is-visible { transition-delay: .33s; }
.gs-d6.is-visible { transition-delay: .40s; }
`;

/* ── component ──────────────────────────────────────────── */
export default function GeralSegPage() {
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
    document.querySelectorAll(".gs-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="gs-page" id="gs-conceito" ref={pageRef}>

        {/* ── preview bar ── */}
        <div className="gs-preview" role="banner">
          <div className="gs-preview-center">
            <p className="gs-preview-title gs-preview-title-short">
              <span className="gs-preview-dot" aria-hidden="true" />
              Prévia Conceitual · GeraSeg
            </p>
            <p className="gs-preview-title gs-preview-title-full">
              <span className="gs-preview-dot" aria-hidden="true" />
              Prévia Conceitual · GeraSeg Rastreamento Veicular
            </p>
            <p className="gs-preview-sub">
              Proposta desenvolvida pela{" "}
              <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                Luma Sites
              </a>{" "}
              — uso exclusivo do cliente
            </p>
          </div>
          <a
            href="http://geralseg.com.br"
            target="_blank"
            rel="noreferrer"
            className="gs-preview-link"
          >
            <ChevronRight size={12} />
            Site atual
          </a>
        </div>

        {/* ── nav ── */}
        <nav className={`gs-nav${scrolled ? " scrolled" : ""}`} aria-label="Navegação principal">
          <div className="gs-nav-inner">
            <a href="#top" className="gs-brand" onClick={closeMenu}>
              <img
                src="/images/geralseg/geralseg-logo.png"
                alt="GeraSeg Segurança Eletrônica"
                className="gs-brand-logo"
              />
            </a>

            <div className="gs-links" role="navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a
                href="https://www16.itrack.com.br/itrackmon"
                target="_blank"
                rel="noreferrer"
                className="gs-nav-client"
              >
                <LogIn size={13} />
                Área do Cliente
              </a>
              <a href={wa()} target="_blank" rel="noreferrer" className="gs-nav-cta">
                <WaIcon size={14} />
                Falar agora
              </a>
            </div>

            <div className="gs-mobile-actions">
              <a
                href="https://www16.itrack.com.br/itrackmon"
                target="_blank"
                rel="noreferrer"
                className="gs-nav-client-mobile"
                aria-label="Acessar área do cliente GeraSeg"
              >
                <LogIn size={14} />
                Cliente
              </a>
              <button
                className="gs-menu-btn"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
              >
                <MenuIcon open={menuOpen} />
              </button>
            </div>
          </div>
        </nav>

        {/* mobile menu */}
        <div className={`gs-mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            href="https://www16.itrack.com.br/itrackmon"
            target="_blank"
            rel="noreferrer"
            className="gs-mobile-client"
            onClick={closeMenu}
          >
            <LogIn size={16} />
            Área do Cliente
          </a>
          <a href={wa()} target="_blank" rel="noreferrer" className="gs-mobile-wa" onClick={closeMenu}>
            <WaIcon size={18} />
            Falar com especialista
          </a>
        </div>

        {/* ── hero ── */}
        <section className="gs-hero" id="top" aria-labelledby="gs-hero-h1">
          <div className="gs-hero-bg" aria-hidden="true" />
          <div className="gs-hero-grid" aria-hidden="true" />

          <div className="gs-hero-inner">
            <div className="gs-hero-copy">
              <div className="gs-hero-eyebrow">
                <span className="gs-hero-eyebrow-dot" />
                Rastreamento · Frotas · Videomonitoramento
              </div>

              <h1 id="gs-hero-h1">
                Tranquilidade para você,<br />
                sua família<br />
                ou seu <em>negócio!</em>
              </h1>

              <p className="gs-hero-sub">
                Rastreamento GPS em tempo real, monitoramento de frotas e videomonitoramento
                veicular para empresas e pessoas que não podem se dar ao luxo de perder o controle
                do que é seu.
              </p>

              <div className="gs-hero-btns">
                <a
                  href={wa("Olá, GeraSeg! Gostaria de rastrear meus veículos. Podem me ajudar?")}
                  target="_blank"
                  rel="noreferrer"
                  className="gs-btn-primary"
                >
                  <WaIcon size={18} />
                  Solicitar diagnóstico grátis
                </a>
                <a href="#solucoes" className="gs-btn-outline">
                  Ver soluções
                  <ChevronDown size={16} />
                </a>
              </div>

              <div className="gs-hero-pills">
                <span className="gs-hero-pill">
                  <Navigation size={13} />
                  GPS em tempo real
                </span>
                <span className="gs-hero-pill">
                  <Shield size={13} />
                  Bloqueio remoto
                </span>
                <span className="gs-hero-pill">
                  <Navigation size={13} />
                  Via satélite
                </span>
                <span className="gs-hero-pill">
                  <Clock size={13} />
                  Vídeo rastreamento
                </span>
              </div>
            </div>

            <figure className="gs-hero-side" aria-label="Rastreamento e monitoramento de frotas">
              <div className="gs-hero-image-frame">
                <img
                  src="/images/geralseg/hero-rastreamento-frotas-hq.jpg"
                  alt="Caminhão verde em rodovia ao lado de uma tela com sistema de rastreamento e videomonitoramento veicular"
                  className="gs-hero-image"
                  loading="eager"
                />
              </div>
            </figure>
          </div>
        </section>

        {/* ── services ── */}
        <section className="gs-section" id="solucoes" aria-labelledby="gs-solucoes-h2">
          <div className="gs-wrap">
            <p className="gs-section-label gs-reveal">Nossas Soluções</p>
            <h2 className="gs-h2 gs-reveal gs-d1" id="gs-solucoes-h2">
              Tecnologia completa para<br />quem não pode parar
            </h2>
            <div className="gs-divider gs-reveal gs-d2" />
            <p className="gs-lead gs-reveal gs-d2">
              Rastreamento, gestão e vigilância integrados em uma plataforma. Proteja seus veículos,
              reduza custos operacionais e tome decisões com dados reais.
            </p>

            <div className="gs-services-grid">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className={`gs-service-card gs-reveal gs-d${(i % 3) + 1}`}
                  aria-label={s.title}
                >
                  <div className="gs-service-icon" aria-hidden="true">
                    <s.icon size={22} />
                  </div>
                  <p className="gs-service-eyebrow">{s.eyebrow}</p>
                  <h3 className="gs-service-title">{s.title}</h3>
                  <p className="gs-service-desc">{s.desc}</p>
                  <ul className="gs-service-points" aria-label={`Benefícios de ${s.title}`}>
                    {s.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <a
                    href={wa(`Olá! Tenho interesse em ${s.title}. Podem me dar mais informações?`)}
                    target="_blank"
                    rel="noreferrer"
                    className="gs-service-link"
                    aria-label={`Saber mais sobre ${s.title}`}
                  >
                    Saber mais
                    <ChevronRight size={14} />
                  </a>
                </article>
              ))}
            </div>

            <div className="gs-services-cta gs-reveal">
              <a href={wa()} target="_blank" rel="noreferrer" className="gs-btn-primary">
                <WaIcon size={18} />
                Solicitar diagnóstico gratuito
              </a>
            </div>
          </div>
        </section>

        {/* ── sobre ── */}
        <section className="gs-section alt" id="sobre" aria-labelledby="gs-sobre-h2">
          <div className="gs-wrap">
            <p className="gs-section-label gs-reveal">Quem somos</p>
            <div className="gs-about-grid">

              <div>
                <h2 className="gs-h2 gs-reveal gs-d1" id="gs-sobre-h2">
                  Quem Somos
                </h2>
                <div className="gs-divider gs-reveal gs-d1" />

                <p className="gs-about-text gs-reveal gs-d2">
                  Fundada em <strong>2 de outubro de 2010</strong>, na cidade de{" "}
                  <strong>Caçador (SC)</strong>, a Geralseg consolidou-se como referência no setor
                  de segurança. Com uma trajetória de mais de 15 anos de dedicação, evoluímos para
                  oferecer soluções completas que vão além das estruturas físicas.
                </p>
                <p className="gs-about-text gs-reveal gs-d3">
                  Hoje, somos especialistas não apenas em segurança eletrônica residencial e
                  comercial, mas também em <strong>rastreamento veicular e telemetria por
                  videomonitoramento</strong>, garantindo que seu patrimônio esteja protegido
                  onde quer que ele esteja.
                </p>
                <p className="gs-about-text gs-reveal gs-d4">
                  Nossa missão é entregar tranquilidade através de serviços de alta qualidade e
                  produtos que se destacam pela durabilidade. Na Geralseg,{" "}
                  <strong>o compromisso com o cliente é a base de cada solução tecnológica
                  que entregamos.</strong>
                </p>

                <div className="gs-about-info-grid gs-reveal gs-d4">
                  {[
                    { label: "Fundação",         value: "2 de outubro de 2010" },
                    { label: "Sede",             value: "Caçador, SC" },
                    { label: "Atuação",          value: "+15 anos no mercado" },
                    { label: "Especialidades",   value: "Segurança eletrônica e rastreamento" },
                  ].map((c) => (
                    <div key={c.label} className="gs-about-info-card">
                      <div className="gs-about-info-label">{c.label}</div>
                      <div className="gs-about-info-value">{c.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── processo ── */}
        <section className="gs-section" id="sede" aria-labelledby="gs-sede-h2">
          <div className="gs-wrap">
            <p className="gs-section-label gs-reveal">Nossa sede</p>
            <h2 className="gs-h2 gs-reveal gs-d1" id="gs-sede-h2">
              Presença local,<br />atendimento nacional
            </h2>
            <div className="gs-divider gs-reveal gs-d1" />

            <div className="gs-location-panel gs-reveal gs-d2">
              <div className="gs-location-card">
                <div className="gs-location-head">
                  <span className="gs-location-icon" aria-hidden="true">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="gs-location-kicker">GeraSeg em Caçador</p>
                    <p className="gs-location-address">
                      Rua Dr. Altamiro Guimarães, 26, Sala 02 - Centro,
                      Caçador - SC, 89500-025.
                    </p>
                  </div>
                </div>
                <p className="gs-about-text">
                  A sede reforça a origem e a estrutura da operação. O atendimento pode ser feito
                  em todo o Brasil, com foco em rastreamento, monitoramento e suporte.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua%20Dr.%20Altamiro%20Guimaraes%2026%20Sala%2002%20Centro%20Cacador%20SC%2089500-025"
                  target="_blank"
                  rel="noreferrer"
                  className="gs-location-link"
                >
                  Abrir no Google Maps
                  <ChevronRight size={14} />
                </a>
              </div>
              <iframe
                className="gs-location-map"
                title="Mapa da sede da GeraSeg em Caçador, SC"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Rua%20Dr.%20Altamiro%20Guimaraes%2026%20Sala%2002%20Centro%20Cacador%20SC%2089500-025&output=embed"
              />
            </div>
          </div>
        </section>

        <section className="gs-section dark" id="processo" aria-labelledby="gs-processo-h2">
          <div className="gs-wrap">
            <p className="gs-section-label gs-reveal">Como Funciona</p>
            <h2 className="gs-h2 gs-reveal gs-d1" id="gs-processo-h2" style={{ color: "var(--gs-white)" }}>
              Simples de contratar,<br />poderoso na prática
            </h2>
            <div className="gs-divider gs-reveal gs-d2" />
            <p className="gs-lead gs-reveal gs-d2">
              Do primeiro contato à ativação do rastreamento — sem burocracia, sem demora,
              sem dor de cabeça.
            </p>

            <div className="gs-process-grid">
              {steps.map((s, i) => (
                <div key={s.num} className={`gs-step gs-reveal gs-d${i + 1}`}>
                  <div className="gs-step-num" aria-hidden="true">{s.num}</div>
                  <div>
                    <div className="gs-step-icon" aria-hidden="true">
                      <s.icon size={20} />
                    </div>
                    <h3 className="gs-step-title">{s.title}</h3>
                    <p className="gs-step-text">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── faq ── */}
        <section className="gs-section" id="duvidas" aria-labelledby="gs-faq-h2">
          <div className="gs-wrap">
            <p className="gs-section-label gs-reveal">Dúvidas Frequentes</p>
            <h2 className="gs-h2 gs-reveal gs-d1" id="gs-faq-h2">
              Suas perguntas, respondidas
            </h2>
            <div className="gs-divider gs-reveal gs-d1" />

            <div className="gs-faq-list gs-reveal gs-d2" role="list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`gs-faq-item${openFaq === i ? " open" : ""}`}
                  role="listitem"
                >
                  <button
                    className="gs-faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`gs-faq-answer-${i}`}
                  >
                    <span className="gs-faq-q">{faq.q}</span>
                    <span className="gs-faq-chevron" aria-hidden="true">
                      <ChevronDown size={14} />
                    </span>
                  </button>
                  <div
                    className="gs-faq-answer"
                    id={`gs-faq-answer-${i}`}
                    role="region"
                    aria-hidden={openFaq !== i}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

            <div className="gs-faq-footer gs-reveal gs-d3">
              <p className="gs-faq-footer-text">
                Ficou com alguma dúvida? Nossa equipe responde.
              </p>
              <a href={wa("Olá! Tenho uma dúvida sobre rastreamento veicular.")} target="_blank" rel="noreferrer">
                <WaIcon size={15} />
                Perguntar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── cta final ── */}
        <section className="gs-cta-final" id="contato" aria-labelledby="gs-cta-h2">
          <div className="gs-cta-final-inner">
            <p className="gs-cta-eyebrow gs-reveal">Proteja agora</p>
            <h2 className="gs-reveal gs-d1" id="gs-cta-h2">
              Controle total.<br />
              Custo que cabe no <em>orçamento.</em>
            </h2>
            <p className="gs-cta-final-sub gs-reveal gs-d2">
              Fale com nossa equipe, descreva sua necessidade e receba um diagnóstico
              gratuito com a solução ideal para seus veículos ou sua frota.
            </p>
            <div className="gs-reveal gs-d3">
              <a
                href={wa("Olá, GeraSeg! Gostaria de solicitar um diagnóstico gratuito para minha frota.")}
                target="_blank"
                rel="noreferrer"
                className="gs-btn-primary"
                style={{ display: "inline-flex", margin: "0 auto" }}
              >
                <WaIcon size={20} />
                Solicitar diagnóstico gratuito
              </a>
            </div>
            <div className="gs-cta-final-loc gs-reveal gs-d4">
              <MapPin size={14} />
              Atendimento em todo o Brasil
            </div>
          </div>
        </section>

        {/* ── footer ── */}
        <footer className="gs-footer">
          <div className="gs-footer-inner">
            <div>
              <img
                src="/images/geralseg/geralseg-logo.png"
                alt="GeraSeg Segurança Eletrônica"
                className="gs-footer-logo"
              />
              <p className="gs-footer-desc">
                Soluções em rastreamento veicular, monitoramento de frotas e videomonitoramento
                para empresas e pessoas físicas em todo o Brasil.
              </p>
              <div className="gs-footer-tags">
                {["Rastreamento GPS", "Frotas", "Videomonitoramento", "Bloqueio Remoto", "24h"].map((t) => (
                  <span key={t} className="gs-footer-tag">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="gs-footer-col-title">Navegação</p>
              <ul className="gs-footer-links">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="gs-footer-col-title">Contato</p>
              <div className="gs-footer-contact-item">
                <WaIcon size={15} />
                <a href={wa()} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
              </div>
              <div className="gs-footer-contact-item">
                <MapPin size={15} />
                <span>Atendimento nacional</span>
              </div>
              <div className="gs-footer-contact-item">
                <Clock size={15} />
                <span>Suporte 24h por dia</span>
              </div>
            </div>

            <div className="gs-footer-divider">
              <p className="gs-footer-copy">
                © 2026 GeraSeg Rastreamento Veicular. Todos os direitos reservados.
              </p>
              <p className="gs-footer-luma">
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
          className={`gs-wa-float${waVisible ? " visible" : ""}`}
          aria-label="Falar pelo WhatsApp"
        >
          <WaIcon size={26} />
        </a>

      </div>
    </>
  );
}
