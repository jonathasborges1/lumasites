"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Ban,
  BookOpen,
  Car,
  ChevronDown,
  ChevronRight,
  CreditCard,
  FileX,
  Globe,
  IdCard,
  Mail,
  MapPin,
  MessageCircle,
  Scale,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

const WA_NUMBER = "5548988464514";
const whatsApp = (
  message = "Olá, Antonio! Quero tirar uma dúvida sobre meu caso bancário.",
) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const navItems = [
  { href: "#top", label: "Início" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#duvidas", label: "Dúvidas Frequentes" },
  { href: "#onde-atuamos", label: "Onde Atuamos" },
  { href: "#contato", label: "Fale Conosco" },
];

const problems = [
  {
    icon: Ban,
    title: "Conta Bloqueada",
    desc: "Banco bloqueou sua conta sem aviso ou justificativa?",
  },
  {
    icon: FileX,
    title: "Contrato Abusivo",
    desc: "Parcelas altas, juros escondidos, cláusulas ilegais?",
  },
  {
    icon: Car,
    title: "Busca e Apreensão",
    desc: "Veículo ameaçado ou já tomado pelo banco?",
  },
  {
    icon: CreditCard,
    title: "Nome Negativado",
    desc: "Negativação indevida travando seu crédito?",
  },
  {
    icon: IdCard,
    title: "CNH Suspensa",
    desc: "CNH suspensa por dívida bancária?",
  },
  {
    icon: BookOpen,
    title: "Direito Civil",
    desc: "Contratos irregulares, rescisões abusivas ou cobranças indevidas?",
  },
  {
    icon: Users,
    title: "Direito do Consumidor",
    desc: "Produto, serviço ou cláusula que viola seus direitos como consumidor?",
  },
];

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Primeiro Contato",
    text: "Você fala conosco pelo WhatsApp. Sem burocracia, sem compromisso. Relate sua situação e tire suas dúvidas com tranquilidade.",
  },
  {
    number: "02",
    icon: Search,
    title: "Análise do Caso",
    text: "Avaliamos sua situação com o banco e identificamos o melhor caminho jurídico para resolver o problema da forma mais eficiente.",
  },
  {
    number: "03",
    icon: Scale,
    title: "Estratégia Jurídica",
    text: "Montamos a estratégia e agimos: negociação extrajudicial, liminar ou ação judicial, com dedicação e comprometimento em cada etapa.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Acompanhamento Completo",
    text: "Acompanhamos até a resolução completa do seu caso, com comunicação clara e transparência em cada etapa.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Preciso de atendimento presencial?",
    a: "Não. Todo o atendimento pode ser feito online, por WhatsApp, e-mail ou videochamada. Encontros presenciais, quando necessários, são realizados mediante disponibilidade e agendamento prévio.",
  },
  {
    q: "O banco já bloqueou minha conta. Ainda tem solução?",
    a: "Sim. O bloqueio de conta sem justificativa legal ou com base em contrato abusivo pode ser revertido judicialmente. Quanto antes você buscar orientação, mais rápido agimos para restaurar o acesso.",
  },
  {
    q: "O veículo já foi apreendido. Posso recuperá-lo?",
    a: "Em muitos casos, sim. Analisamos o contrato, verificamos irregularidades e atuamos para recuperar o bem ou reverter os efeitos da busca e apreensão. Cada caso é avaliado individualmente.",
  },
  {
    q: "Quanto tempo leva para resolver um caso bancário?",
    a: "Depende da complexidade. Medidas urgentes como liminares podem surtir efeito em dias. Ações revisionais completas levam alguns meses, mas agimos sempre com a máxima agilidade possível.",
  },
  {
    q: "Qual o custo para contratar um advogado bancário?",
    a: "Cada caso é avaliado individualmente. Entre em contato para uma análise sem compromisso. A consulta inicial é gratuita.",
  },
];

const serviceRegions = [
  {
    state: "Acre",
    acronym: "AC",
    city: "Rio Branco",
  },
  {
    state: "Amazonas",
    acronym: "AM",
    city: "Boca do Acre",
  },
  {
    state: "Santa Catarina",
    acronym: "SC",
    city: "Florianópolis",
  },
];

const WaIcon = ({ size = 17 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const EditorialMenuIcon = ({ open = false }: { open?: boolean }) => (
  <span
    className={`aa-menu-glyph${open ? " open" : ""}`}
    aria-hidden="true"
  >
    <span className="aa-menu-glyph-line aa-menu-glyph-line-top" />
    <span className="aa-menu-glyph-line aa-menu-glyph-line-bottom" />
    <span className="aa-menu-glyph-dot" />
  </span>
);

const css = `
html {
  scroll-behavior: smooth;
  scroll-padding-top: 0;
}
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }

:root {
  --aa-bar-height: 52px;
  --aa-nav-height: 72px;
  --aa-black: #18302a;
  --aa-petrol: #28473f;
  --aa-gold: #b99452;
  --aa-gold-light: #cba866;
  --aa-gold-dark: #8f7139;
  --aa-cream: #f7f4ed;
  --aa-warm: #eee9df;
  --aa-ink: #292b29;
  --aa-soft-ink: #414743;
  --aa-muted: #686d68;
  --aa-white: #fffdf8;
  --aa-line-dark: rgba(245,240,232,0.1);
  --aa-line-light: rgba(26,26,20,0.12);
}

.aa-page {
  overflow-x: clip;
  color: var(--aa-ink);
  background: var(--aa-cream);
  font-family: var(--font-antonio-body), system-ui, sans-serif;
  min-height: 100vh;
}

/* ── PREVIEW BAR ──────────────────────────────────── */
.aa-preview {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1001;
  min-height: var(--aa-bar-height);
  padding: 7px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  text-align: center;
  background: #060d0b;
  color: rgba(245,240,232,0.65);
  font-family: var(--font-antonio-body), system-ui, sans-serif;
}
.aa-preview-line1 {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--aa-white);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.aa-preview-dot {
  position: relative;
  width: 9px; height: 9px;
  border-radius: 999px;
  background: var(--aa-gold);
  flex: 0 0 auto;
  animation: aa-dot-pulse 1.6s ease-out infinite;
}
@keyframes aa-dot-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(201,168,76,0.9), 0 0 6px 1px rgba(201,168,76,0.5); }
  70%  { box-shadow: 0 0 0 12px rgba(201,168,76,0), 0 0 6px 1px rgba(201,168,76,0); }
  100% { box-shadow: 0 0 0 0 rgba(201,168,76,0), 0 0 6px 1px rgba(201,168,76,0); }
}
.aa-preview-detail {
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: rgba(245,240,232,0.62);
}
.aa-preview-detail a {
  color: rgba(245,240,232,0.78);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.aa-preview-detail a:hover { color: var(--aa-white); }

/* ── NAV ──────────────────────────────────────────── */
.aa-nav {
  position: fixed;
  z-index: 1000;
  inset: var(--aa-bar-height) 0 auto 0;
  height: var(--aa-nav-height);
  border-bottom: 1px solid rgba(204,166,121,0.18);
  background: rgba(7,9,8,0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;
  font-family: var(--font-antonio-body), system-ui, sans-serif;
}
.aa-nav.scrolled {
  background: rgba(5,7,6,0.93);
  border-color: rgba(204,166,121,0.24);
  box-shadow: 0 12px 38px rgba(0,0,0,0.34);
}
.aa-nav-inner {
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.aa-brand {
  display: flex;
  align-items: center;
  width: 210px;
  height: 50px;
}
.aa-brand-logo {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: left center;
  filter: none;
  opacity: 1;
}
.aa-links {
  display: none;
  align-items: center;
  gap: 17px;
}
.aa-links a {
  position: relative;
  color: rgba(245,240,232,0.72);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  transition: color 0.15s;
}
.aa-links a:hover { color: var(--aa-gold-light); }
.aa-links a:not(.aa-nav-cta)::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -10px;
  left: 0;
  height: 1px;
  background: var(--aa-gold);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.2s ease;
}
.aa-links a.active {
  color: var(--aa-gold);
}
.aa-links a.active::after {
  transform: scaleX(1);
}
.aa-nav-cta {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border: 1px solid var(--aa-gold);
  cursor: pointer;
  font-family: var(--font-antonio-body), system-ui, sans-serif;
  padding: 0 18px;
  border-radius: 4px;
  background: transparent;
  color: var(--aa-gold-light) !important;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.aa-nav-cta:hover {
  border-color: var(--aa-gold-light);
  background: var(--aa-gold-light);
  color: #090b0a !important;
}
.aa-menu-btn {
  min-height: 44px;
  width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  font-family: var(--font-antonio-body), system-ui, sans-serif;
  border-radius: 4px;
  color: var(--aa-gold-light);
  background: rgba(204,166,121,0.08);
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}
.aa-nav.scrolled .aa-menu-btn {
  color: var(--aa-gold-light);
  background: rgba(204,166,121,0.08);
}
.aa-nav.menu-open {
  background: rgba(5,7,6,0.99);
  border-color: rgba(204,166,121,0.24);
}
.aa-nav.menu-open .aa-menu-btn {
  color: var(--aa-gold);
  background: rgba(204,166,121,0.08);
  border: 1px solid rgba(204,166,121,0.28);
}
.aa-menu-glyph {
  position: relative;
  width: 22px;
  height: 18px;
  display: block;
}
.aa-menu-glyph-line {
  position: absolute;
  right: 0;
  height: 1.5px;
  border-radius: 999px;
  background: currentColor;
  transform-origin: center;
  transition:
    top 0.28s cubic-bezier(.22,.8,.28,1),
    width 0.28s cubic-bezier(.22,.8,.28,1),
    transform 0.28s cubic-bezier(.22,.8,.28,1);
}
.aa-menu-glyph-line-top {
  top: 5px;
  width: 22px;
}
.aa-menu-glyph-line-bottom {
  top: 13px;
  width: 15px;
}
.aa-menu-glyph-dot {
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--aa-gold);
  transition: opacity 0.18s, transform 0.28s;
}
.aa-menu-glyph.open .aa-menu-glyph-line-top {
  top: 8px;
  width: 21px;
  transform: rotate(42deg);
}
.aa-menu-glyph.open .aa-menu-glyph-line-bottom {
  top: 8px;
  width: 21px;
  transform: rotate(-42deg);
}
.aa-menu-glyph.open .aa-menu-glyph-dot {
  opacity: 0;
  transform: scale(0);
}

/* ── MOBILE MENU ──────────────────────────────────── */
.aa-mobile {
  position: fixed;
  z-index: 999;
  inset: calc(var(--aa-bar-height) + var(--aa-nav-height)) 0 0;
  overflow: hidden auto;
  background:
    radial-gradient(circle at 95% 12%, rgba(204,166,121,0.13), transparent 34%),
    linear-gradient(145deg, #171b1a 0%, #10201c 58%, #09110f 100%);
  color: var(--aa-white);
  font-family: var(--font-antonio-body), system-ui, sans-serif;
  animation: aa-menu-enter 0.38s cubic-bezier(.22,.8,.28,1) both;
}
.aa-mobile::before {
  content: "A";
  position: fixed;
  right: -18px;
  top: calc(var(--aa-bar-height) + var(--aa-nav-height) + 16px);
  color: rgba(204,166,121,0.035);
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: min(76vw, 360px);
  line-height: 0.9;
  pointer-events: none;
}
@keyframes aa-menu-enter {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}
.aa-mobile-inner {
  position: relative;
  z-index: 1;
  width: min(100% - 40px, 520px);
  min-height: 100%;
  margin: 0 auto;
  padding: 38px 0 max(28px, env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
}
.aa-mobile-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  color: var(--aa-gold);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}
.aa-mobile-eyebrow::before {
  content: "";
  width: 30px;
  height: 1px;
  background: currentColor;
}
.aa-mobile-nav {
  display: grid;
}
.aa-mobile-link {
  position: relative;
  min-height: 60px;
  display: grid;
  grid-template-columns: 34px 1fr 24px;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(236,236,236,0.11);
  color: var(--aa-white);
}
.aa-mobile-link:first-child {
  border-top: 1px solid rgba(236,236,236,0.11);
}
.aa-mobile-link-index {
  color: var(--aa-gold);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
}
.aa-mobile-link-label {
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: clamp(18px, 5.4vw, 23px);
  font-weight: 600;
  letter-spacing: 0;
}
.aa-mobile-link svg {
  color: rgba(204,166,121,0.7);
  transition: transform 0.2s;
}
.aa-mobile-link:active svg { transform: translateX(4px); }
.aa-mobile-link.active {
  color: var(--aa-gold);
}
.aa-mobile-link.active::before {
  content: "";
  position: absolute;
  left: -12px;
  width: 3px;
  height: 24px;
  border-radius: 999px;
  background: var(--aa-gold);
}
.aa-mobile-cta {
  min-height: 56px;
  margin-top: 28px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: var(--aa-gold);
  color: #171b1a;
  border-radius: 2px;
  box-shadow: 0 18px 42px rgba(0,0,0,0.24);
}
.aa-mobile-cta-copy {
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.aa-mobile-meta {
  margin-top: auto;
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
.aa-mobile-meta-label {
  display: block;
  margin-bottom: 8px;
  color: rgba(236,236,236,0.42);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.aa-mobile-meta strong {
  display: block;
  color: rgba(236,236,236,0.8);
  font-size: 11px;
  line-height: 1.7;
}
.aa-mobile-oab {
  padding: 9px 10px;
  border: 1px solid rgba(204,166,121,0.25);
  color: var(--aa-gold);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.12em;
  white-space: nowrap;
}

/* ── WRAP ─────────────────────────────────────────── */
.aa-wrap { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }

/* ── HERO ─────────────────────────────────────────── */
.aa-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--aa-cream);
}
.aa-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 65% at 85% 50%, rgba(40,71,63,0.09) 0%, transparent 68%),
    radial-gradient(ellipse 45% 60% at 5% 10%, rgba(185,148,82,0.1) 0%, transparent 65%),
    linear-gradient(145deg, #f8f6f0 0%, #f2eee5 58%, #ebe6dc 100%);
}
.aa-hero-grid {
  position: relative;
  z-index: 1;
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  padding: 128px 0 64px;
  display: grid;
  align-items: center;
  gap: 36px;
}
.aa-hero-copy { color: var(--aa-ink); }
.aa-kicker {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
  color: var(--aa-gold);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.26em;
  text-transform: uppercase;
}
.aa-kicker::before {
  content: "";
  width: 28px; height: 1px;
  background: var(--aa-gold);
}
.aa-hero h1 {
  margin: 0;
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: clamp(32px, 5vw, 66px);
  line-height: 1.06;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--aa-petrol);
}
.aa-hero h1 em {
  font-style: italic;
  color: var(--aa-gold);
}
.aa-hero-sub {
  max-width: 540px;
  margin: 26px 0 0;
  color: var(--aa-muted);
  font-size: 15px;
  line-height: 1.85;
}
.aa-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}
.aa-btn {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border: 0;
  cursor: pointer;
  font-family: var(--font-antonio-body), system-ui, sans-serif;
  padding: 0 24px;
  border-radius: 4px;
  background: var(--aa-gold);
  color: var(--aa-black);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 16px 40px rgba(201,168,76,0.28);
  transition: background 0.15s, box-shadow 0.15s;
}
.aa-btn:hover {
  background: var(--aa-gold-light);
  box-shadow: 0 20px 48px rgba(201,168,76,0.38);
}
.aa-btn-outline {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  cursor: pointer;
  font-family: var(--font-antonio-body), system-ui, sans-serif;
  padding: 0 22px;
  border: 1px solid rgba(40,71,63,0.2);
  border-radius: 4px;
  color: var(--aa-petrol);
  background: rgba(255,255,255,0.52);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: background 0.15s, border-color 0.15s;
}
.aa-btn-outline:hover {
  background: rgba(255,255,255,0.9);
  border-color: rgba(40,71,63,0.34);
}
.aa-proof-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 44px;
  max-width: 440px;
}
.aa-proof-item {
  padding: 16px 16px;
  border: 1px solid rgba(201,168,76,0.22);
  background: rgba(255,255,255,0.58);
  border-radius: 2px;
}
.aa-proof-item strong {
  display: block;
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--aa-petrol);
  line-height: 1;
}
.aa-proof-item span {
  display: block;
  margin-top: 6px;
  color: var(--aa-muted);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Hero photo column */
.aa-hero-photo-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 34px 30px 28px;
  background:
    linear-gradient(145deg, rgba(40,71,63,0.08), rgba(255,255,255,0.34));
  border: 1px solid rgba(40,71,63,0.08);
  box-shadow: 0 28px 70px rgba(40,71,63,0.1);
}
.aa-hero-photo-wrap::before {
  content: "";
  position: absolute;
  top: 18px;
  right: 18px;
  width: 76px;
  height: 76px;
  border-top: 1px solid rgba(185,148,82,0.52);
  border-right: 1px solid rgba(185,148,82,0.52);
  pointer-events: none;
}
.aa-hero-photo-frame {
  position: relative;
  max-width: 450px;
  width: 100%;
}
.aa-hero-photo-accent {
  position: absolute;
  top: -12px;
  right: -12px;
  bottom: 12px;
  left: 12px;
  border: 1px solid rgba(185,148,82,0.38);
  border-radius: 2px;
  pointer-events: none;
}
.aa-hero-photo {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center top;
  border-radius: 2px;
  filter: saturate(0.88) contrast(1.05);
  box-shadow: 0 18px 44px rgba(24,48,42,0.14);
}
.aa-hero-photo-badge {
  position: absolute;
  z-index: 2;
  right: 18px;
  bottom: 18px;
  left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 15px 18px;
  background: rgba(24,48,42,0.94);
  border: 1px solid rgba(185,148,82,0.34);
  border-radius: 2px;
  backdrop-filter: blur(12px);
}
.aa-hero-photo-badge strong {
  color: var(--aa-white);
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
}
.aa-hero-photo-badge span {
  color: var(--aa-gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-align: right;
}

/* ── SECTIONS ─────────────────────────────────────── */
.aa-section {
  padding: 96px 0;
  background: var(--aa-cream);
}
.aa-page section[id] {
  scroll-margin-top: calc(var(--aa-bar-height) + var(--aa-nav-height) + 18px);
}
.aa-section.alt { background: var(--aa-warm); }
.aa-section.dark {
  background: var(--aa-petrol);
  color: var(--aa-white);
}
.aa-section.black {
  background: var(--aa-cream);
  color: var(--aa-ink);
}
.aa-section.gold-bg {
  background: var(--aa-gold);
  color: var(--aa-black);
}
.aa-section-head { max-width: 700px; margin-bottom: 48px; }
.aa-section-head.center { text-align: center; margin-left: auto; margin-right: auto; }
.aa-label {
  display: inline-block;
  margin-bottom: 14px;
  color: var(--aa-gold-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}
.aa-section.dark .aa-label  { color: var(--aa-gold); }
.aa-section.black .aa-label { color: var(--aa-gold-dark); }
.aa-section.gold-bg .aa-label { color: rgba(26,26,20,0.55); }
.aa-h2 {
  margin: 0;
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: clamp(26px, 3.4vw, 44px);
  line-height: 1.1;
  font-weight: 700;
  color: var(--aa-ink);
}
.aa-section.dark .aa-h2    { color: var(--aa-white); }
.aa-section.black .aa-h2   { color: var(--aa-ink); }
.aa-section.gold-bg .aa-h2 { color: var(--aa-black); }
.aa-lead {
  margin: 18px 0 0;
  font-size: 15px;
  line-height: 1.85;
  color: var(--aa-muted);
}
.aa-section.dark .aa-lead    { color: rgba(245,240,232,0.68); }
.aa-section.black .aa-lead   { color: var(--aa-muted); }
.aa-section.gold-bg .aa-lead { color: rgba(26,26,20,0.7); }

/* ── PROBLEMS ─────────────────────────────────────── */
.aa-problems {
  display: grid;
  gap: 16px;
}
.aa-problem-card {
  padding: 28px 22px;
  border: 1px solid rgba(40,71,63,0.1);
  background: rgba(255,255,255,0.72);
  border-radius: 2px;
  box-shadow: 0 12px 32px rgba(40,71,63,0.06);
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
}
.aa-problem-card:hover {
  border-color: rgba(185,148,82,0.38);
  background: var(--aa-white);
  transform: translateY(-2px);
}
.aa-problem-icon {
  width: 44px; height: 44px;
  display: grid;
  place-items: center;
  border-radius: 4px;
  background: rgba(201,168,76,0.12);
  color: var(--aa-gold-dark);
  margin-bottom: 16px;
}
.aa-problem-card h3 {
  margin: 0 0 8px;
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--aa-petrol);
}
.aa-problem-card p {
  margin: 0;
  color: var(--aa-muted);
  font-size: 13px;
  line-height: 1.7;
}

/* ── SOBRE ────────────────────────────────────────── */
.aa-two-col {
  display: grid;
  gap: 52px;
  align-items: center;
}
.aa-about-photo-wrap {
  position: relative;
  max-width: 520px;
}
.aa-about-photo {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: 2px;
  filter: saturate(0.92) contrast(1.04);
}
.aa-about-badge {
  position: absolute;
  right: -16px;
  bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px 20px;
  background: rgba(22,38,34,0.97);
  border: 1px solid rgba(201,168,76,0.35);
  border-radius: 2px;
  backdrop-filter: blur(8px);
}
.aa-about-badge strong {
  color: var(--aa-white);
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3;
}
.aa-about-badge span {
  color: var(--aa-gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.aa-about-oab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 1px solid var(--aa-line-light);
  background: var(--aa-warm);
  color: var(--aa-soft-ink);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 2px;
}
.aa-about-copy p {
  margin: 0 0 16px;
  color: var(--aa-muted);
  font-size: 15px;
  line-height: 1.9;
}
.aa-about-copy p:last-child { margin-bottom: 0; }
.aa-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
}
.aa-tag {
  padding: 7px 13px;
  border: 1px solid var(--aa-line-light);
  background: var(--aa-warm);
  color: var(--aa-soft-ink);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 2px;
}

/* ── STEPS ────────────────────────────────────────── */
.aa-steps {
  display: grid;
  gap: 16px;
  margin-top: 40px;
}
.aa-step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: start;
  padding: 28px 24px;
  border: 1px solid var(--aa-line-dark);
  background: rgba(245,240,232,0.03);
  border-radius: 2px;
  transition: border-color 0.2s, background 0.2s;
}
.aa-step:hover {
  border-color: rgba(201,168,76,0.3);
  background: rgba(201,168,76,0.04);
}
.aa-step-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.aa-step-num {
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: 34px;
  font-weight: 700;
  color: rgba(201,168,76,0.28);
  line-height: 1;
}
.aa-step-icon-wrap {
  width: 40px; height: 40px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(201,168,76,0.12);
  color: var(--aa-gold);
}
.aa-step h3 {
  margin: 0 0 10px;
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--aa-white);
}
.aa-step p {
  margin: 0;
  color: rgba(245,240,232,0.65);
  font-size: 14px;
  line-height: 1.8;
}
.aa-steps-note {
  margin-top: 32px;
  text-align: center;
  color: rgba(245,240,232,0.52);
  font-size: 13px;
  font-style: italic;
}

/* ── FAQ ──────────────────────────────────────────── */
.aa-faq-list {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--aa-line-light);
  background: rgba(255,255,255,0.62);
  box-shadow: 0 18px 42px rgba(40,71,63,0.06);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 40px;
}
.aa-faq-item { border-bottom: 1px solid var(--aa-line-light); }
.aa-faq-item:last-child { border-bottom: 0; }
.aa-faq-btn {
  width: 100%;
  text-align: left;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: var(--aa-ink);
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  transition: background 0.15s;
}
.aa-faq-btn:hover { background: rgba(40,71,63,0.035); }
.aa-faq-btn.open  { color: var(--aa-gold-dark); }
.aa-faq-icon {
  flex: 0 0 auto;
  color: var(--aa-gold);
  transition: transform 0.22s;
}
.aa-faq-btn.open .aa-faq-icon { transform: rotate(180deg); }
.aa-faq-body {
  padding: 0 24px 22px;
  color: var(--aa-muted);
  font-size: 14px;
  line-height: 1.85;
}
.aa-faq-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 32px;
  color: var(--aa-gold-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: gap 0.15s;
}
.aa-faq-cta:hover { gap: 10px; }

/* ── LOCALIZACAO ──────────────────────────────────── */
.aa-location-grid {
  display: grid;
  gap: 40px;
  align-items: start;
}
.aa-offices {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.aa-office-card {
  padding: 20px 22px 20px 20px;
  border-left: 3px solid var(--aa-gold-dark);
  background: var(--aa-white, #fff);
  border-radius: 0 2px 2px 0;
  box-shadow: 0 2px 16px rgba(26,26,20,0.06);
  display: grid;
  grid-template-columns: 42px 1fr auto;
  align-items: center;
  gap: 14px;
}
.aa-office-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--aa-gold-dark);
  background: rgba(204,166,121,0.12);
}
.aa-office-label {
  display: block;
  color: var(--aa-gold-dark);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.aa-office-city {
  display: block;
  color: var(--aa-ink);
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: 16px;
  font-weight: 700;
}
.aa-office-acronym {
  color: rgba(26,26,20,0.24);
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: 30px;
  font-weight: 700;
}
.aa-presence-panel {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(28px, 5vw, 52px);
  border: 1px solid rgba(204,166,121,0.18);
  border-radius: 2px;
  color: var(--aa-white);
  background:
    radial-gradient(circle at 72% 24%, rgba(204,166,121,0.2), transparent 28%),
    linear-gradient(145deg, #365a51 0%, #28473f 58%, #203b34 100%);
}
.aa-presence-panel::before {
  content: "BR";
  position: absolute;
  top: 10px;
  right: 24px;
  color: rgba(204,166,121,0.08);
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: clamp(100px, 17vw, 210px);
  font-weight: 700;
  line-height: 1;
}
.aa-presence-icon {
  position: relative;
  width: 52px;
  height: 52px;
  margin-bottom: 24px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(204,166,121,0.42);
  border-radius: 50%;
  color: var(--aa-gold);
}
.aa-presence-panel h3 {
  position: relative;
  max-width: 430px;
  margin: 0 0 14px;
  font-family: var(--font-antonio-display), Georgia, serif;
  font-size: clamp(27px, 3.4vw, 42px);
  line-height: 1.08;
}
.aa-presence-panel p {
  position: relative;
  max-width: 470px;
  margin: 0;
  color: rgba(245,240,232,0.68);
  font-size: 14px;
  line-height: 1.75;
}
.aa-location-note {
  margin-top: 20px;
  font-size: 13px;
  font-style: italic;
  color: var(--aa-muted);
  display: flex;
  align-items: center;
  gap: 8px;
}
.aa-location-note svg { color: var(--aa-gold-dark); flex: 0 0 auto; }

/* ── CTA GOLD SECTION ────────────────────────────── */
.aa-cta-inner {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}
.aa-section.gold-bg .aa-actions { justify-content: center; }
.aa-btn-dark {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border: 0;
  cursor: pointer;
  font-family: var(--font-antonio-body), system-ui, sans-serif;
  padding: 0 28px;
  border-radius: 4px;
  background: var(--aa-black);
  color: var(--aa-gold);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-shadow: 0 12px 36px rgba(9,16,14,0.28);
  transition: background 0.15s, box-shadow 0.15s;
}
.aa-btn-dark:hover {
  background: var(--aa-petrol);
  box-shadow: 0 16px 44px rgba(9,16,14,0.38);
}

/* ── FOOTER ───────────────────────────────────────── */
.aa-footer {
  background: #18302a;
  color: rgba(245,240,232,0.48);
  font-size: 13px;
  line-height: 1.7;
  font-family: var(--font-antonio-body), system-ui, sans-serif;
}
.aa-footer-body {
  padding: 60px 0 48px;
  display: grid;
  gap: 40px;
}
.aa-footer-logo {
  width: min(280px, 100%);
  height: auto;
  margin-bottom: 20px;
}
.aa-footer-brand p {
  margin: 0 0 20px;
  font-size: 13px;
  max-width: 280px;
}
.aa-footer-brand-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.aa-footer-brand-tag {
  padding: 4px 10px;
  border: 1px solid rgba(245,240,232,0.18);
  color: rgba(245,240,232,0.58);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
}
.aa-footer-col h4 {
  margin: 0 0 16px;
  color: var(--aa-white);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.aa-footer-col a {
  display: block;
  color: rgba(245,240,232,0.68);
  padding: 4px 0;
  font-size: 13px;
  transition: color 0.15s;
}
.aa-footer-col a:hover { color: var(--aa-gold); }
.aa-footer-contact-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 4px 0;
  font-size: 13px;
}
.aa-footer-contact-row svg {
  flex: 0 0 auto;
  margin-top: 3px;
  color: var(--aa-gold);
  opacity: 0.7;
}
.aa-footer-divider {
  border: 0;
  border-top: 1px solid rgba(245,240,232,0.07);
  margin: 0;
}
.aa-footer-bottom {
  padding: 18px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(245,240,232,0.48);
}
.aa-footer-bottom a {
  color: var(--aa-gold);
  font-weight: 700;
  transition: color 0.15s;
}
.aa-footer-bottom a:hover { color: var(--aa-white); }

/* ── WA FLOAT ─────────────────────────────────────── */
.aa-wa-float {
  position: fixed;
  z-index: 1002;
  right: max(20px, env(safe-area-inset-right));
  bottom: max(20px, env(safe-area-inset-bottom));
  width: 56px; height: 56px;
  border-radius: 999px;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37,211,102,0.4);
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    opacity 0.2s,
    visibility 0.2s;
  animation: aa-pulse 2s ease-out infinite;
}
.aa-wa-float:hover { transform: scale(1.06); }
.aa-wa-float:active { transform: scale(0.94); }
.aa-wa-float.menu-open {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(12px) scale(0.88);
  animation: none;
}
@keyframes aa-pulse {
  0%   { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,.45); }
  70%  { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 16px rgba(37,211,102,0); }
  100% { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,0); }
}

/* ── REVEAL ───────────────────────────────────────── */
.aa-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.aa-reveal.aa-visible { opacity: 1; transform: none; }
.aa-delay-1 { transition-delay: 0.08s; }
.aa-delay-2 { transition-delay: 0.16s; }
.aa-delay-3 { transition-delay: 0.24s; }
.aa-delay-4 { transition-delay: 0.32s; }
.aa-delay-5 { transition-delay: 0.40s; }

/* ── RESPONSIVE ───────────────────────────────────── */
@media (min-width: 1120px) {
  .aa-links { display: flex; }
  .aa-menu-btn { display: none; }
  .aa-mobile { display: none; }
}
@media (min-width: 768px) {
  .aa-hero-grid { grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr); }
  .aa-two-col { grid-template-columns: 1fr 1fr; }
  .aa-steps { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .aa-location-grid { grid-template-columns: 0.8fr 1fr; gap: 52px; }
  .aa-footer-body { grid-template-columns: 1.4fr 0.8fr 1fr; gap: 52px; }
}
@media (min-width: 600px) {
  .aa-problems { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .aa-hero-grid { width: min(1280px, calc(100% - 56px)); }
  .aa-problems { grid-template-columns: repeat(5, 1fr); }
  .aa-steps { grid-template-columns: repeat(4, 1fr); gap: 20px; }
}

@media (max-width: 767px) {
  :root { --aa-nav-height: 64px; }
  .aa-nav-inner { width: min(100% - 36px, 1160px); }
  .aa-wrap { width: min(100% - 36px, 1160px); }
  .aa-brand { width: 184px; }
  .aa-hero-grid { padding: 96px 0 48px; gap: 32px; }
  .aa-hero h1 { font-size: clamp(28px, 9vw, 44px); }
  .aa-hero-sub { font-size: 14px; }
  .aa-hero-photo-wrap { display: none; }
  .aa-proof-bar { margin-top: 28px; max-width: 100%; gap: 8px; }
  .aa-proof-item { padding: 12px 10px; }
  .aa-proof-item strong { font-size: 17px; }
  .aa-actions { margin-top: 28px; gap: 10px; }
  .aa-actions a, .aa-actions button { width: 100%; justify-content: center; }
  .aa-section { padding: 64px 0; }
  .aa-section-head { margin-bottom: 32px; }
  .aa-two-col { gap: 32px; }
  .aa-about-badge { right: 10px; bottom: 20px; }
  .aa-step { padding: 20px 16px; gap: 16px; }
  .aa-faq-btn { font-size: 14px; padding: 18px 18px; }
  .aa-faq-body { padding: 0 18px 18px; }
  .aa-footer-body { padding: 44px 0 32px; gap: 28px; }
}
`;

export default function AntonioAguiarPropPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const navigationOffset = 150;
      let current = sections[0]?.id ?? "top";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= navigationOffset) {
          current = section.id;
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = sections.at(-1)?.id ?? current;
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnResize = () => setMenuOpen(false);
    const handleMenuKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".aa-menu-btn, .aa-mobile a[href]",
        ),
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("resize", closeOnResize);
    window.addEventListener("keydown", handleMenuKeyboard);

    window.setTimeout(() => {
      document.querySelector<HTMLAnchorElement>(".aa-mobile-link")?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("resize", closeOnResize);
      window.removeEventListener("keydown", handleMenuKeyboard);
      document.querySelector<HTMLButtonElement>(".aa-menu-btn")?.focus();
    };
  }, [menuOpen]);

  useEffect(() => {
    const els = document.querySelectorAll(".aa-reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("aa-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.07 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ── PREVIEW BAR ── */}
      <div className="aa-preview" aria-label="Aviso de proposta">
        <div className="aa-preview-line1">
          <span className="aa-preview-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="aa-preview-detail">
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

      {/* ── NAV ── */}
      <nav
        className={`aa-nav${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
        aria-label="Navegação principal"
      >
        <div className="aa-nav-inner">
          <a className="aa-brand" href="#top" aria-label="Antonio Aguiar Advogado">
            <Image
              className="aa-brand-logo"
              src="/images/antonioaguiar/brand/antonio-aguiar-logo-dark.png"
              alt=""
              width={733}
              height={166}
              priority
            />
          </a>

          <div className="aa-links">
            {navItems.map((item) => (
              <a
                className={
                  activeSection === item.href.slice(1) ? "active" : undefined
                }
                key={item.href}
                href={item.href}
                aria-current={
                  activeSection === item.href.slice(1) ? "location" : undefined
                }
              >
                {item.label}
              </a>
            ))}
            <a
              className="aa-nav-cta"
              href={whatsApp()}
              target="_blank"
              rel="noreferrer"
            >
              <WaIcon size={14} />
              Falar Agora
            </a>
          </div>

          <button
            className="aa-menu-btn"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="aa-mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <EditorialMenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="aa-mobile"
          id="aa-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="aa-mobile-inner">
            <span className="aa-mobile-eyebrow">Navegação</span>
            <div className="aa-mobile-nav">
              {navItems.map((item, index) => (
                <a
                  className={`aa-mobile-link${
                    activeSection === item.href.slice(1) ? " active" : ""
                  }`}
                  key={item.href}
                  href={item.href}
                  aria-current={
                    activeSection === item.href.slice(1)
                      ? "location"
                      : undefined
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="aa-mobile-link-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="aa-mobile-link-label">{item.label}</span>
                  <ChevronRight size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
            <a
              className="aa-mobile-cta"
              href={whatsApp()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <span className="aa-mobile-cta-copy">
                <WaIcon size={18} />
                Falar com o advogado
              </span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>
            <div className="aa-mobile-meta">
              <div>
                <span className="aa-mobile-meta-label">Atendimento</span>
                <strong>
                  Rio Branco · Boca do Acre
                  <br />
                  Florianópolis · Todo o Brasil
                </strong>
              </div>
              <span className="aa-mobile-oab">OAB 6589/AC</span>
            </div>
          </div>
        </div>
      )}

      <main className="aa-page">
        {/* ── HERO ── */}
        <section id="top" className="aa-hero" aria-label="Hero">
          <div className="aa-hero-bg" aria-hidden="true" />
          <div className="aa-hero-grid">
            <div className="aa-hero-copy">
              <span className="aa-kicker">Direito Bancário · Rio Branco AC</span>
              <h1>
                Seu banco agiu
                <br />
                contra você.{" "}
                <em>Existe
                <br />
                solução jurídica.</em>
              </h1>
              <p className="aa-hero-sub">
                Revisão de contratos abusivos, conta bloqueada, negativação
                indevida, busca e apreensão de veículo e suspensão de CNH.
                Defendo seus direitos com estratégia, dedicação e clareza.
              </p>
              <div className="aa-actions">
                <a
                  className="aa-btn"
                  href={whatsApp()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WaIcon size={17} />
                  Solicitar Atendimento
                </a>
                <a className="aa-btn-outline" href="#atuacao">
                  Ver Atuação
                  <ChevronRight size={16} />
                </a>
              </div>
              <div className="aa-proof-bar" aria-label="Credenciais">
                <div className="aa-proof-item">
                  <strong>6589</strong>
                  <span>OAB · Acre</span>
                </div>
                <div className="aa-proof-item">
                  <strong>100%</strong>
                  <span>Online</span>
                </div>
                <div className="aa-proof-item">
                  <strong>3</strong>
                  <span>Estados</span>
                </div>
              </div>
            </div>

            <div className="aa-hero-photo-wrap" aria-hidden="true">
              <div className="aa-hero-photo-frame">
                <div className="aa-hero-photo-accent" />
                <Image
                  className="aa-hero-photo"
                  src="/images/antonioaguiar/portraits/antonio-aguiar-hero-hq.webp"
                  alt="Antonio Aguiar, advogado especialista em direito bancário"
                  width={1086}
                  height={1448}
                  sizes="(min-width: 900px) 400px, min(88vw, 400px)"
                  quality={90}
                  priority
                />
                <div className="aa-hero-photo-badge">
                  <strong>Antonio Aguiar</strong>
                  <span>Advogado · OAB 6589/AC</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEMAS ── */}
        <section
          id="atuacao"
          className="aa-section"
          aria-label="Áreas de atuação"
        >
          <div className="aa-wrap">
            <div className="aa-section-head center aa-reveal">
              <span className="aa-label">Você está passando por isso?</span>
              <h2 className="aa-h2">
                Cada problema bancário tem uma solução jurídica.
              </h2>
              <p className="aa-lead">
                Atuação em Direito Bancário, Direito Civil e Direito do
                Consumidor, com foco em quem produz e precisa de orientação
                jurídica especializada.
              </p>
            </div>
            <div className="aa-problems">
              {problems.map((p, i) => (
                <div
                  className={`aa-problem-card aa-reveal aa-delay-${i + 1}`}
                  key={p.title}
                >
                  <div className="aa-problem-icon" aria-hidden="true">
                    <p.icon size={20} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section
          id="sobre"
          className="aa-section alt"
          aria-label="Sobre o advogado"
        >
          <div className="aa-wrap aa-two-col aa-reveal">
            <div className="aa-about-photo-wrap">
              <Image
                className="aa-about-photo"
                src="/images/antonioaguiar/office/antonio-aguiar-escritorio-hq.webp"
                alt="Antonio Aguiar em ambiente profissional"
                width={1448}
                height={1086}
                sizes="(min-width: 900px) 520px, calc(100vw - 40px)"
                quality={90}
              />
              <div className="aa-about-badge">
                <strong>Antonio Aguiar</strong>
                <span>OAB 6589 · AC</span>
              </div>
            </div>

            <div className="aa-about-copy">
              <span className="aa-label">Sobre o Advogado</span>
              <h2 className="aa-h2">
                Experiência em direito bancário para quem produz e busca
                orientação jurídica especializada.
              </h2>
              <p>
                Advogado especializado em Direito Bancário, Antonio Aguiar atua
                na defesa de produtores rurais, agropecuaristas e pessoas
                físicas que sofrem abusos de instituições financeiras. Com
                presença no Acre, no Amazonas e em Santa Catarina, oferece
                atendimento online para qualquer estado do Brasil.
              </p>
              <p>
                Cada caso bancário carrega um impacto real na vida de quem
                produz: o trator parado, a conta bloqueada no meio da colheita,
                a CNH que trava a operação. O foco é o seu caso, com clareza,
                estratégia e presença do primeiro contato até a resolução.
              </p>
              <div className="aa-about-oab">
                <ShieldCheck size={14} />
                OAB 6589/AC · Atendimento Online para todo o Brasil
              </div>
              <div className="aa-tags" aria-label="Áreas de atuação">
                {[
                  "Direito Bancário",
                  "Direito Civil",
                  "Direito do Consumidor",
                  "Contratos",
                  "Conta Bloqueada",
                  "Busca e Apreensão",
                  "CNH",
                  "Negativação",
                  "Agronegócio",
                ].map((tag) => (
                  <span className="aa-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section
          id="processo"
          className="aa-section dark"
          aria-label="Como funciona"
        >
          <div className="aa-wrap">
            <div className="aa-section-head center aa-reveal">
              <span className="aa-label">Processo</span>
              <h2 className="aa-h2">
                Como funciona o atendimento.
              </h2>
              <p className="aa-lead">
                Do primeiro contato à resolução do seu caso, simples, direto e
                transparente em cada etapa.
              </p>
            </div>
            <div className="aa-steps">
              {steps.map((step, i) => (
                <div
                  className={`aa-step aa-reveal aa-delay-${i + 1}`}
                  key={step.number}
                >
                  <div className="aa-step-left">
                    <span className="aa-step-num" aria-hidden="true">
                      {step.number}
                    </span>
                    <div className="aa-step-icon-wrap" aria-hidden="true">
                      <step.icon size={18} />
                    </div>
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="aa-steps-note aa-reveal">
              Atendimento online disponível para clientes em qualquer estado do
              Brasil.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          id="duvidas"
          className="aa-section black"
          aria-label="Perguntas frequentes"
        >
          <div className="aa-wrap">
            <div className="aa-section-head center aa-reveal">
              <span className="aa-label">Dúvidas</span>
              <h2 className="aa-h2">Perguntas frequentes.</h2>
              <p className="aa-lead">
                Tire suas dúvidas antes de falar com a gente.
              </p>
            </div>
            <div className="aa-faq-list aa-reveal" role="list">
              {faqs.map((faq, i) => (
                <div className="aa-faq-item" key={i} role="listitem">
                  <button
                    className={`aa-faq-btn${openFaq === i ? " open" : ""}`}
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <ChevronDown className="aa-faq-icon" size={18} />
                  </button>
                  {openFaq === i && (
                    <div className="aa-faq-body">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
            <a
              className="aa-faq-cta aa-reveal"
              href={whatsApp(
                "Olá, Antonio! Tenho uma dúvida que não estava nas perguntas frequentes.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <WaIcon size={14} />
              Não encontrou sua dúvida? Fale diretamente conosco
              <ChevronRight size={14} />
            </a>
          </div>
        </section>

        {/* ── LOCALIZACAO ── */}
        <section
          id="onde-atuamos"
          className="aa-section alt"
          aria-label="Estados onde atua"
        >
          <div className="aa-wrap">
            <div className="aa-section-head center aa-reveal">
              <span className="aa-label">Onde Atuamos</span>
              <h2 className="aa-h2">Presença jurídica em três estados.</h2>
              <p className="aa-lead">
                Atuação com presença no Acre, Amazonas e Santa Catarina, além
                de atendimento online em todo o Brasil.
              </p>
            </div>
            <div className="aa-location-grid aa-reveal aa-delay-1">
              <div>
                <div className="aa-offices">
                  {serviceRegions.map((region) => (
                    <div className="aa-office-card" key={region.acronym}>
                      <span className="aa-office-icon" aria-hidden="true">
                        <MapPin size={18} />
                      </span>
                      <span>
                        <span className="aa-office-label">{region.state}</span>
                        <span className="aa-office-city">{region.city}</span>
                      </span>
                      <span className="aa-office-acronym" aria-hidden="true">
                        {region.acronym}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="aa-location-note">
                  <Globe size={14} />
                  <span>
                    Atendimento presencial mediante disponibilidade e
                    agendamento prévio
                  </span>
                </div>
              </div>
              <div className="aa-presence-panel">
                <span className="aa-presence-icon" aria-hidden="true">
                  <Globe size={24} />
                </span>
                <h3>Atendimento sem fronteiras.</h3>
                <p>
                  Orientação jurídica próxima e acessível, com atendimento
                  online para clientes de qualquer região do Brasil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contato" className="aa-section gold-bg" aria-label="Contato">
          <div className="aa-wrap">
            <div className="aa-cta-inner aa-reveal">
              <span className="aa-label">Fale Agora</span>
              <h2 className="aa-h2">Seu problema bancário tem solução.</h2>
              <p className="aa-lead">
                Atuação no Acre, Amazonas e Santa Catarina, com atendimento
                online para todo o Brasil. Entre em contato agora para uma
                análise sem compromisso.
              </p>
              <div className="aa-actions">
                <a
                  className="aa-btn-dark"
                  href={whatsApp()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WaIcon size={17} />
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="aa-footer">
          <div className="aa-wrap">
            <div className="aa-footer-body">
              <div className="aa-footer-brand">
                <Image
                  className="aa-footer-logo"
                  src="/images/antonioaguiar/brand/antonio-aguiar-logo-dark.png"
                  alt="Antonio Aguiar Advogado"
                  width={733}
                  height={166}
                />
                <p>
                  Advogado especialista em Direito Bancário. Defesa de
                  produtores rurais e pessoas físicas contra abusos de
                  instituições financeiras.
                </p>
                <div className="aa-footer-brand-tags">
                  {[
                    "Direito Bancário",
                    "Direito Civil",
                    "Direito do Consumidor",
                    "Contratos",
                    "Agronegócio",
                  ].map((tag) => (
                    <span className="aa-footer-brand-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="aa-footer-col">
                <h4>Navegação</h4>
                <a href="#top">Início</a>
                <a href="#atuacao">Atuação</a>
                <a href="#sobre">Sobre</a>
                <a href="#processo">Como Funciona</a>
                <a href="#duvidas">Dúvidas Frequentes</a>
                <a href="#onde-atuamos">Onde Atuamos</a>
                <a href="#contato">Fale Conosco</a>
                <a href={whatsApp()} target="_blank" rel="noreferrer">
                  Falar pelo WhatsApp
                </a>
              </div>

              <div className="aa-footer-col">
                <h4>Contato</h4>
                <div className="aa-footer-contact-row">
                  <MessageCircle size={14} />
                  <a href={whatsApp()} target="_blank" rel="noreferrer">
                    (48) 98846-4514
                  </a>
                </div>
                <div className="aa-footer-contact-row">
                  <Mail size={14} />
                  <a href="mailto:antonioaguiaradv10@gmail.com">
                    antonioaguiaradv10@gmail.com
                  </a>
                </div>
                <div className="aa-footer-contact-row">
                  <MapPin size={14} />
                  <span>
                    Rio Branco/AC · Boca do Acre/AM
                    <br />
                    Florianópolis/SC
                  </span>
                </div>
                <div className="aa-footer-contact-row">
                  <ShieldCheck size={14} />
                  <span>OAB 6589/AC</span>
                </div>
              </div>
            </div>

            <hr className="aa-footer-divider" />

            <div className="aa-footer-bottom">
              <span>
                © 2026 Antonio Aguiar Advogado. Todos os direitos reservados.
              </span>
              <span>
                Desenvolvido por{" "}
                <a
                  href="https://lumasites.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  LumaSites.com.br
                </a>
              </span>
            </div>
          </div>
        </footer>
      </main>

      {/* ── WA FLOAT ── */}
      <a
        className={`aa-wa-float${menuOpen ? " menu-open" : ""}`}
        href={whatsApp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Antonio Aguiar pelo WhatsApp"
        aria-hidden={menuOpen}
        tabIndex={menuOpen ? -1 : 0}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>
    </>
  );
}
