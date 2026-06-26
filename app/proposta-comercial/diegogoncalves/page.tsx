"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Award,
  ChevronDown,
  ChevronRight,
  Clock,
  FileText,
  Gavel,
  Instagram,
  MessageCircle,
  Scale,
  Shield,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from "lucide-react";

/* ── constants ─────────────────────────────────────────── */
const WA_NUMBER = "5592981333333";
const wa = (msg = "Olá! Vi a proposta e gostaria de conversar sobre o projeto do novo site.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const navItems = [
  { href: "#top",      label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre",    label: "Sobre" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#duvidas",  label: "Dúvidas" },
  { href: "#contato",  label: "Contato" },
];

const services = [
  {
    icon: Zap,
    eyebrow: "Atuação Imediata",
    title: "Prisão em Flagrante",
    desc: "Atendimento emergencial desde a delegacia. Atuamos nas primeiras horas críticas para garantir seus direitos e buscar a liberdade imediata.",
    points: ["Acompanhamento na delegacia", "Relaxamento de flagrante ilegal", "Liberdade provisória com ou sem fiança"],
  },
  {
    icon: FileText,
    eyebrow: "Remédio Constitucional",
    title: "Habeas Corpus",
    desc: "Impetração de habeas corpus para cessar ilegalidades e abusos que restrinjam sua liberdade — em todas as instâncias, incluindo tribunais superiores.",
    points: ["HC preventivo e repressivo", "Combate à prisão ilegal", "Atuação em STJ e STF"],
  },
  {
    icon: Shield,
    eyebrow: "Direito Fundamental",
    title: "Prisão Domiciliar",
    desc: "Substituição de prisão preventiva por domiciliar, quando presentes os requisitos legais — com agilidade e fundamentação técnica sólida.",
    points: ["Prisão domiciliar humanitária", "Monitoramento eletrônico", "Pedido liminar e definitivo"],
  },
  {
    icon: Gavel,
    eyebrow: "Defesa Técnica Especializada",
    title: "Tribunal do Júri",
    desc: "Tribunal do Júri exige muito mais que conhecimento jurídico. Oratória, persuasão e estratégia de plenário fazem a diferença entre condenação e absolvição.",
    points: ["Preparação estratégica de plenário", "Oratória e persuasão", "Análise de perícias e provas técnicas"],
  },
  {
    icon: Scale,
    eyebrow: "Revisão Processual",
    title: "Inquérito Policial",
    desc: "Atuação desde a fase pré-processual para produzir provas favoráveis, buscar o arquivamento e proteger seus direitos antes da denúncia.",
    points: ["Defesa desde o inquérito", "Produção antecipada de provas", "Chances reais de arquivamento"],
  },
  {
    icon: ShieldCheck,
    eyebrow: "Defesa Especializada",
    title: "Crimes contra a Pessoa",
    desc: "Defesa técnica em homicídio, lesão corporal, ameaça e crimes correlatos — com análise individualizada das provas e construção sólida da tese defensiva.",
    points: ["Análise de laudos periciais", "Teses de absolvição ou desclassificação", "Atuação em todas as instâncias"],
  },
];

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Contato Urgente",
    text: "Apresente sua situação pelo WhatsApp. O atendimento é sigiloso e as orientações iniciais são imediatas.",
  },
  {
    num: "02",
    icon: Scale,
    title: "Análise do Caso",
    text: "Avaliamos os fatos, identificamos ilegalidades e definimos a estratégia jurídica mais eficaz para a sua situação.",
  },
  {
    num: "03",
    icon: Gavel,
    title: "Atuação e Resultado",
    text: "Iniciamos a defesa com agilidade. Cada passo é comunicado com transparência até o desfecho do caso.",
  },
];

const faqs = [
  {
    q: "Meu familiar foi preso. O que faço agora?",
    a: "Entre em contato imediatamente pelo WhatsApp com as informações disponíveis — nome, local da prisão, motivo alegado. O caso é analisado individualmente para definição das medidas cabíveis. Cada hora conta em uma prisão.",
  },
  {
    q: "Posso contratar um advogado criminalista já no inquérito?",
    a: "Sim — e é altamente recomendado. Atuar desde o inquérito policial aumenta significativamente as chances de arquivamento e garante que provas sejam produzidas corretamente para a fase processual.",
  },
  {
    q: "Qualquer advogado pode atuar no Tribunal do Júri?",
    a: "Tecnicamente sim, mas na prática não. Tribunal do Júri exige oratória, persuasão, profundo domínio de direito penal, constitucional, médico-legal e habilidade estratégica em plenário — competências que não se adquirem em outras áreas do Direito.",
  },
  {
    q: "O que é habeas corpus e quando é cabível?",
    a: "É um remédio constitucional que protege a liberdade de locomoção contra coação ilegal ou abuso de autoridade. É cabível em prisões ilegais, excesso de prazo, constrangimento ilegal e ameaça ao direito de ir e vir.",
  },
  {
    q: "O atendimento é presencial ou pode ser online?",
    a: "Trabalhamos tanto de forma presencial em Manaus/AM quanto online para clientes em todo o Brasil. O sigilo é garantido em qualquer modalidade.",
  },
  {
    q: "É possível conseguir liberdade provisória em casos de tráfico?",
    a: "Cada caso é único. A legislação prevê hipóteses específicas, e a análise das provas, das circunstâncias do flagrante e da conduta individual são determinantes para a estratégia de defesa mais adequada.",
  },
];

/* ── SVG helpers ───────────────────────────────────────── */
const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const MenuIcon = ({ open = false }: { open?: boolean }) => (
  <span className={`dg-menu-glyph${open ? " open" : ""}`} aria-hidden="true">
    <span className="dg-mg-top" />
    <span className="dg-mg-bot" />
    <span className="dg-mg-dot" />
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
  --dg-bar:      88px;
  --dg-nav:      72px;

  --dg-dark:     #101418;
  --dg-dark2:    #1A2028;
  --dg-dark3:    #222C36;

  --dg-copper:   #C78F5F;
  --dg-copper2:  #DBA573;
  --dg-copper3:  #9D6941;
  --dg-copper-bg: rgba(199,143,95,.10);
  --dg-copper-br: rgba(199,143,95,.22);

  --dg-cream:    #E8E5DF;
  --dg-warm:     #F2EFE9;
  --dg-white:    #FAFAF9;
  --dg-ink:      #16120E;
  --dg-muted:    #7A7066;
  --dg-line-l:   rgba(20,16,12,.09);
  --dg-line-d:   rgba(255,255,255,.08);
}

@media (min-width: 640px) {
  :root { --dg-bar: 48px; }
}

/* ── page shell ─────────────────────────────────────────── */
#conceito {
  padding-top: calc(var(--dg-bar) + var(--dg-nav));
  font-family: var(--font-diego-body), system-ui, sans-serif;
}
#conceito h1, #conceito h2, #conceito h3, #conceito h4 {
  font-family: var(--font-diego-display), Georgia, serif;
}
.dg-page {
  color: var(--dg-ink);
  background: var(--dg-warm);
  overflow-x: clip;
  min-height: 100vh;
}

/* ── preview bar ─────────────────────────────────────────── */
.dg-preview {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1001;
  height: var(--dg-bar);
  padding: 7px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  background: var(--dg-dark);
  border-bottom: 1px solid rgba(199,143,95,.2);
}
.dg-preview-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.dg-preview-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--dg-white);
}
.dg-preview-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--dg-copper2);
  animation: dg-pulse-dot 1.6s ease-out infinite;
}
@keyframes dg-pulse-dot {
  0%   { box-shadow: 0 0 0 0 rgba(219,165,115,.9); }
  70%  { box-shadow: 0 0 0 10px rgba(219,165,115,0); }
  100% { box-shadow: 0 0 0 0 rgba(219,165,115,0); }
}
.dg-preview-sub {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,.4);
}
.dg-preview-sub a {
  color: var(--dg-copper2);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.dg-preview-link {
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
.dg-preview-link:hover {
  border-color: rgba(199,143,95,.5);
  color: var(--dg-copper2);
}

@media (max-width: 639px) {
  .dg-preview {
    padding: 8px 14px;
  }
  .dg-preview-title {
    justify-content: center;
    flex-wrap: wrap;
    font-size: 10px;
    letter-spacing: .1em;
  }
  .dg-preview-sub {
    font-size: 10px;
    line-height: 1.35;
  }
  .dg-preview-link {
    display: none;
  }
}

/* ── nav ─────────────────────────────────────────────────── */
.dg-nav {
  position: fixed;
  left: 0; right: 0;
  top: var(--dg-bar);
  z-index: 1000;
  height: var(--dg-nav);
  background: rgba(14,18,22,.96);
  border-bottom: 1px solid rgba(199,143,95,.12);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition: background .25s, box-shadow .25s;
  font-family: var(--font-diego-body), system-ui, sans-serif;
}
.dg-nav.scrolled {
  background: rgba(10,13,17,.99);
  box-shadow: 0 12px 40px rgba(0,0,0,.5);
}
.dg-nav-inner {
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.dg-brand { display: flex; flex-direction: column; gap: 2px; line-height: 1; }
.dg-brand-name {
  font-family: var(--font-diego-display), Georgia, serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--dg-white);
  letter-spacing: .01em;
}
.dg-brand-name span { color: var(--dg-copper2); }
.dg-brand-sub {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: rgba(255,255,255,.32);
}
.dg-links {
  display: none;
  align-items: center;
  gap: 18px;
}
.dg-links a {
  position: relative;
  color: rgba(255,255,255,.48);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  transition: color .15s;
}
.dg-links a:hover, .dg-links a.active { color: var(--dg-white); }
.dg-links a:not(.dg-nav-cta)::after {
  content: "";
  position: absolute;
  bottom: -8px; left: 0; right: 0;
  height: 1px;
  background: var(--dg-copper);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .2s;
}
.dg-links a.active::after, .dg-links a:hover::after { transform: scaleX(1); }
.dg-nav-cta {
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 18px;
  border-radius: 3px;
  background: var(--dg-copper3);
  color: var(--dg-white) !important;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  box-shadow: 0 6px 22px rgba(157,105,65,.3);
  transition: background .15s, box-shadow .15s;
}
.dg-nav-cta:hover {
  background: var(--dg-copper);
  box-shadow: 0 8px 28px rgba(157,105,65,.44);
}
.dg-menu-btn {
  width: 44px; height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(199,143,95,.24);
  border-radius: 3px;
  background: transparent;
  color: var(--dg-copper2);
  transition: background .2s;
}
.dg-menu-btn:hover { background: rgba(199,143,95,.1); }
.dg-menu-glyph {
  position: relative;
  width: 22px; height: 18px;
  display: block;
}
.dg-mg-top, .dg-mg-bot {
  position: absolute;
  right: 0;
  height: 1.5px;
  border-radius: 999px;
  background: currentColor;
  transition: top .28s cubic-bezier(.22,.8,.28,1), width .28s cubic-bezier(.22,.8,.28,1), transform .28s cubic-bezier(.22,.8,.28,1);
}
.dg-mg-top { top: 5px; width: 22px; }
.dg-mg-bot { top: 13px; width: 15px; }
.dg-mg-dot {
  position: absolute;
  right: 0; top: 9px;
  width: 4px; height: 4px;
  border-radius: 50%;
  background: currentColor;
  transition: opacity .2s .1s;
}
.dg-menu-glyph.open .dg-mg-top { top: 9px; transform: rotate(42deg); }
.dg-menu-glyph.open .dg-mg-bot { top: 9px; width: 22px; transform: rotate(-42deg); }
.dg-menu-glyph.open .dg-mg-dot { opacity: 0; }

.dg-mobile-menu {
  display: none;
  position: fixed;
  top: calc(var(--dg-bar) + var(--dg-nav));
  left: 0; right: 0;
  z-index: 999;
  background: rgba(10,13,17,.98);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(199,143,95,.12);
  padding: 16px 20px 24px;
  flex-direction: column;
  gap: 4px;
}
.dg-mobile-menu.open { display: flex; }
.dg-mobile-menu a {
  display: flex;
  align-items: center;
  padding: 12px 8px;
  border-bottom: 1px solid rgba(255,255,255,.06);
  color: rgba(255,255,255,.6);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: color .15s, padding-left .15s;
}
.dg-mobile-menu a:hover { color: var(--dg-white); padding-left: 16px; }
.dg-mobile-menu .dg-mobile-wa {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  border-radius: 4px;
  background: var(--dg-copper3);
  color: var(--dg-white);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
}

@media (min-width: 900px) {
  .dg-links { display: flex; }
  .dg-menu-btn { display: none; }
}

/* ── sections ────────────────────────────────────────────── */
.dg-section {
  padding: 96px 20px;
}
.dg-section.alt { background: var(--dg-cream); }
.dg-section.dark {
  background: var(--dg-dark2);
  color: var(--dg-white);
}
.dg-section.darker {
  background: var(--dg-dark);
  color: var(--dg-white);
}
.dg-wrap {
  width: min(1120px, 100%);
  margin: 0 auto;
}
.dg-section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--dg-copper);
  margin-bottom: 14px;
}
.dg-section-label::before {
  content: "";
  display: block;
  width: 28px; height: 1px;
  background: var(--dg-copper);
}
.dg-section-divider {
  width: 40px; height: 2px;
  background: var(--dg-copper);
  margin: 20px 0;
  border-radius: 1px;
}
.dg-section-h2 {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -.01em;
  margin: 0 0 12px;
}
.dg-section-lead {
  font-size: 17px;
  line-height: 1.65;
  color: var(--dg-muted);
  max-width: 620px;
}
.dark .dg-section-lead,
.darker .dg-section-lead { color: rgba(255,255,255,.55); }

/* ── hero ────────────────────────────────────────────────── */
.dg-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  background: var(--dg-dark);
  overflow: hidden;
}
.dg-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 80% at 65% 50%, rgba(157,105,65,.12) 0%, transparent 65%),
    linear-gradient(160deg, #101418 0%, #1A2028 60%, #222C36 100%);
}
.dg-hero-bg-img {
  position: absolute;
  inset: 0;
  opacity: .06;
  background-image: url('/images/diegogoncalves/diego-bg.jpg');
  background-size: cover;
  background-position: center;
}
.dg-hero-inner {
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
.dg-hero-copy { max-width: 640px; }
.dg-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 10px;
  border: 1px solid rgba(199,143,95,.28);
  border-radius: 2px;
  background: rgba(199,143,95,.08);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--dg-copper2);
  margin-bottom: 28px;
  animation: dg-hero-in .5s cubic-bezier(.22,.8,.28,1) .1s both;
}
.dg-hero-eyebrow-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--dg-copper2);
  flex-shrink: 0;
}
.dg-hero h1 {
  font-size: clamp(32px, 5.5vw, 62px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -.02em;
  color: var(--dg-white);
  margin: 0 0 24px;
  animation: dg-hero-in .65s cubic-bezier(.22,.8,.28,1) .2s both;
}
.dg-hero h1 em {
  font-style: italic;
  color: var(--dg-copper2);
}
.dg-hero-sub {
  font-size: clamp(16px, 1.8vw, 19px);
  line-height: 1.6;
  color: rgba(255,255,255,.55);
  margin: 0 0 40px;
  animation: dg-hero-in .65s cubic-bezier(.22,.8,.28,1) .32s both;
}
.dg-hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  animation: dg-hero-in .65s cubic-bezier(.22,.8,.28,1) .44s both;
}
.dg-btn-copper {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  border-radius: 3px;
  background: var(--dg-copper3);
  color: var(--dg-white);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  box-shadow: 0 8px 28px rgba(157,105,65,.35);
  transition: background .15s, box-shadow .15s, transform .15s;
}
.dg-btn-copper:hover {
  background: var(--dg-copper);
  box-shadow: 0 12px 36px rgba(199,143,95,.44);
  transform: translateY(-1px);
}
.dg-btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 24px;
  border-radius: 3px;
  border: 1px solid rgba(255,255,255,.18);
  color: rgba(255,255,255,.75);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .04em;
  transition: border-color .15s, color .15s;
}
.dg-btn-outline:hover {
  border-color: rgba(199,143,95,.5);
  color: var(--dg-copper2);
}
.dg-hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
  animation: dg-hero-in .65s cubic-bezier(.22,.8,.28,1) .56s both;
}
.dg-hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 2px;
  background: rgba(255,255,255,.04);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .04em;
  color: rgba(255,255,255,.65);
}
.dg-hero-pill svg { color: var(--dg-copper2); flex-shrink: 0; }

/* hero photo */
.dg-hero-photo-wrap {
  position: relative;
  animation: dg-hero-in .8s cubic-bezier(.22,.8,.28,1) .3s both;
}
.dg-hero-photo-frame {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 3/2;
  box-shadow: 0 32px 80px rgba(0,0,0,.6);
}
.dg-hero-photo-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(16,20,24,.85) 100%);
  pointer-events: none;
}
.dg-hero-photo-accent {
  position: absolute;
  top: -16px; right: -16px;
  width: 100px; height: 100px;
  border: 2px solid var(--dg-copper3);
  border-radius: 4px;
  opacity: .35;
  pointer-events: none;
}
.dg-hero-photo-badge {
  position: absolute;
  bottom: 20px; left: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: rgba(16,20,24,.88);
  border: 1px solid rgba(199,143,95,.25);
  border-radius: 4px;
  backdrop-filter: blur(8px);
}
.dg-hero-photo-badge-num {
  font-family: var(--font-diego-display), Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--dg-copper2);
  line-height: 1;
}
.dg-hero-photo-badge-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.65);
  line-height: 1.3;
}

@keyframes dg-hero-in {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}

@media (min-width: 900px) {
  .dg-hero-inner {
    grid-template-columns: 1fr 1fr;
  }
}

/* ── trust bar ───────────────────────────────────────────── */
.dg-trust {
  background: var(--dg-dark2);
  border-top: 1px solid rgba(199,143,95,.12);
  border-bottom: 1px solid rgba(199,143,95,.12);
  padding: 0 20px;
}
.dg-trust-grid {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}
.dg-trust-item {
  padding: 28px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-right: 1px solid rgba(255,255,255,.06);
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.dg-trust-item:nth-child(2n) { border-right: none; }
.dg-trust-item:nth-last-child(-n+2) { border-bottom: none; }
.dg-trust-icon {
  width: 42px; height: 42px;
  border-radius: 8px;
  background: rgba(199,143,95,.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dg-copper2);
  flex-shrink: 0;
}
.dg-trust-num {
  font-family: var(--font-diego-display), Georgia, serif;
  font-size: 26px;
  font-weight: 700;
  color: var(--dg-white);
  line-height: 1;
}
.dg-trust-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .04em;
  color: rgba(255,255,255,.44);
  margin-top: 3px;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  .dg-trust-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .dg-trust-item { border-bottom: none; }
  .dg-trust-item:nth-child(2n) { border-right: 1px solid rgba(255,255,255,.06); }
  .dg-trust-item:last-child { border-right: none; }
}

/* ── instagram strip ─────────────────────────────────────── */
.dg-insta-strip {
  background: linear-gradient(135deg, var(--dg-dark) 0%, #1E1510 100%);
  padding: 72px 20px;
  color: var(--dg-white);
  overflow: hidden;
  position: relative;
}
.dg-insta-strip::before {
  content: "";
  position: absolute;
  top: -80px; right: -80px;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(199,143,95,.08) 0%, transparent 70%);
  pointer-events: none;
}
.dg-insta-inner {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}
.dg-insta-number {
  font-family: var(--font-diego-display), Georgia, serif;
  font-size: clamp(56px, 10vw, 96px);
  font-weight: 700;
  color: var(--dg-copper2);
  line-height: 1;
  letter-spacing: -.02em;
}
.dg-insta-subtitle {
  font-size: clamp(20px, 2.8vw, 28px);
  font-weight: 300;
  color: rgba(255,255,255,.8);
  line-height: 1.3;
  margin: 8px 0 24px;
}
.dg-insta-subtitle strong { font-weight: 700; color: var(--dg-white); }
.dg-insta-copy {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255,255,255,.5);
  max-width: 540px;
}
.dg-insta-handle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding: 10px 18px;
  border: 1px solid rgba(199,143,95,.28);
  border-radius: 3px;
  font-size: 13px;
  font-weight: 600;
  color: var(--dg-copper2);
  transition: background .15s;
}
.dg-insta-handle:hover { background: rgba(199,143,95,.08); }
.dg-insta-visual {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  border-radius: 4px;
  overflow: hidden;
}
.dg-insta-thumb {
  aspect-ratio: 1;
  background: var(--dg-dark3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.dg-insta-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s;
}
.dg-insta-thumb:hover img { transform: scale(1.05); }
.dg-insta-overlay {
  position: absolute;
  inset: 0;
  background: rgba(16,20,24,.38);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity .25s;
}
.dg-insta-thumb:hover .dg-insta-overlay { opacity: 1; }
.dg-insta-count {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--dg-dark3);
  aspect-ratio: 1;
  color: rgba(255,255,255,.4);
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  gap: 6px;
}
.dg-insta-count span { color: var(--dg-copper2); font-size: 20px; font-weight: 700; }
@media (min-width: 860px) {
  .dg-insta-inner { grid-template-columns: 1fr 1fr; }
}

/* ── services ────────────────────────────────────────────── */
.dg-services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 56px;
}
.dg-service-card {
  padding: 32px 28px;
  border-radius: 4px;
  border: 1px solid var(--dg-line-l);
  background: var(--dg-white);
  transition: border-color .2s, box-shadow .2s, transform .2s;
}
.dg-service-card:hover {
  border-color: var(--dg-copper-br);
  box-shadow: 0 16px 48px rgba(0,0,0,.08);
  transform: translateY(-2px);
}
.dg-service-icon {
  width: 46px; height: 46px;
  border-radius: 10px;
  background: var(--dg-copper-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dg-copper3);
  margin-bottom: 20px;
}
.dg-service-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--dg-copper3);
  margin-bottom: 6px;
}
.dg-service-title {
  font-family: var(--font-diego-display), Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--dg-ink);
  line-height: 1.2;
}
.dg-service-desc {
  font-size: 14px;
  line-height: 1.65;
  color: var(--dg-muted);
  margin-bottom: 20px;
}
.dg-service-points {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid var(--dg-line-l);
  padding-top: 20px;
}
.dg-service-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 500;
  color: var(--dg-ink);
}
.dg-service-points li::before {
  content: "";
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--dg-copper);
  flex-shrink: 0;
}
.dg-service-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--dg-copper3);
  transition: gap .15s, color .15s;
}
.dg-service-link:hover { gap: 10px; color: var(--dg-copper); }
.dg-services-cta {
  margin-top: 48px;
  text-align: center;
}
@media (min-width: 640px) {
  .dg-services-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .dg-services-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── about ───────────────────────────────────────────────── */
.dg-about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  align-items: center;
  margin-top: 20px;
}
.dg-about-photo-wrap { position: relative; }
.dg-about-photo-frame {
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 3/2;
  box-shadow: 0 24px 64px rgba(0,0,0,.16);
}
.dg-about-photo-accent {
  position: absolute;
  bottom: -16px; left: -16px;
  width: 80px; height: 80px;
  border: 2px solid var(--dg-copper);
  border-radius: 4px;
  opacity: .4;
}
.dg-about-photo-badge {
  position: absolute;
  top: 24px; right: 24px;
  padding: 10px 14px;
  background: rgba(26,32,40,.9);
  border: 1px solid rgba(199,143,95,.3);
  border-radius: 4px;
  backdrop-filter: blur(8px);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--dg-copper2);
  white-space: nowrap;
}
.dg-about-copy {}
.dg-about-text {
  font-size: 16px;
  line-height: 1.75;
  color: var(--dg-ink);
  margin-bottom: 16px;
}
.dg-about-text strong { color: var(--dg-ink); font-weight: 700; }
.dg-credentials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 32px;
}
.dg-credential {
  padding: 18px 16px;
  border: 1px solid var(--dg-line-l);
  border-radius: 4px;
  background: var(--dg-white);
}
.dg-credential-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--dg-copper3);
  margin-bottom: 4px;
}
.dg-credential-value {
  font-family: var(--font-diego-display), Georgia, serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--dg-ink);
  line-height: 1.2;
}
@media (min-width: 900px) {
  .dg-about-grid { grid-template-columns: 1fr 1fr; }
}

/* ── process ─────────────────────────────────────────────── */
.dg-process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  margin-top: 56px;
}
.dg-step {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 32px 28px;
  border-radius: 4px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  transition: background .2s, border-color .2s;
}
.dg-step:hover {
  background: rgba(199,143,95,.06);
  border-color: rgba(199,143,95,.2);
}
.dg-step-num {
  font-family: var(--font-diego-display), Georgia, serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  color: rgba(199,143,95,.25);
  flex-shrink: 0;
  min-width: 56px;
}
.dg-step-icon {
  width: 40px; height: 40px;
  border-radius: 8px;
  background: rgba(199,143,95,.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dg-copper2);
  flex-shrink: 0;
  margin-top: 4px;
}
.dg-step-content {}
.dg-step-title {
  font-family: var(--font-diego-display), Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--dg-white);
  margin: 0 0 10px;
}
.dg-step-text {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255,255,255,.5);
}
@media (min-width: 768px) {
  .dg-process-grid { grid-template-columns: repeat(3, 1fr); }
  .dg-step { flex-direction: column; gap: 16px; }
}

/* ── faq ─────────────────────────────────────────────────── */
.dg-faq-list {
  margin-top: 48px;
  max-width: 780px;
}
.dg-faq-item {
  border-bottom: 1px solid var(--dg-line-l);
}
.dg-faq-item:first-child { border-top: 1px solid var(--dg-line-l); }
.dg-faq-btn {
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
.dg-faq-q {
  font-size: 16px;
  font-weight: 600;
  color: var(--dg-ink);
  line-height: 1.4;
  transition: color .15s;
}
.dg-faq-btn:hover .dg-faq-q,
.dg-faq-item.open .dg-faq-q { color: var(--dg-copper3); }
.dg-faq-chevron {
  flex-shrink: 0;
  width: 22px; height: 22px;
  border-radius: 50%;
  border: 1px solid var(--dg-line-l);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dg-muted);
  margin-top: 2px;
  transition: transform .25s, background .15s, color .15s;
}
.dg-faq-item.open .dg-faq-chevron {
  transform: rotate(180deg);
  background: var(--dg-copper-bg);
  color: var(--dg-copper3);
  border-color: var(--dg-copper-br);
}
.dg-faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height .35s cubic-bezier(.22,.8,.28,1), padding .25s;
  font-size: 15px;
  line-height: 1.7;
  color: var(--dg-muted);
  padding: 0 4px;
}
.dg-faq-item.open .dg-faq-answer {
  max-height: 400px;
  padding-bottom: 22px;
}
.dg-faq-footer {
  margin-top: 40px;
  padding: 24px 28px;
  border-radius: 4px;
  background: var(--dg-copper-bg);
  border: 1px solid var(--dg-copper-br);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.dg-faq-footer-text {
  font-size: 15px;
  font-weight: 500;
  color: var(--dg-ink);
}
.dg-faq-footer a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 3px;
  background: var(--dg-copper3);
  color: var(--dg-white);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: background .15s;
}
.dg-faq-footer a:hover { background: var(--dg-copper); }

/* ── cta final ───────────────────────────────────────────── */
.dg-cta-final {
  background: linear-gradient(145deg, var(--dg-dark) 0%, #1B1209 60%, #241610 100%);
  padding: 120px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.dg-cta-final::before {
  content: "";
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 600px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(199,143,95,.07) 0%, transparent 70%);
  pointer-events: none;
}
.dg-cta-final-inner {
  position: relative;
  width: min(680px, 100%);
  margin: 0 auto;
}
.dg-cta-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--dg-copper2);
  margin-bottom: 20px;
}
.dg-cta-final h2 {
  font-size: clamp(30px, 5vw, 52px);
  font-weight: 700;
  color: var(--dg-white);
  line-height: 1.1;
  margin: 0 0 20px;
  letter-spacing: -.02em;
}
.dg-cta-final h2 em {
  font-style: italic;
  color: var(--dg-copper2);
}
.dg-cta-final-sub {
  font-size: 17px;
  line-height: 1.6;
  color: rgba(255,255,255,.5);
  margin-bottom: 40px;
}
.dg-cta-final-loc {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.35);
}
.dg-cta-final-loc svg { color: var(--dg-copper3); }

/* ── footer ──────────────────────────────────────────────── */
.dg-footer {
  background: var(--dg-dark);
  border-top: 1px solid rgba(199,143,95,.1);
  padding: 64px 20px 40px;
  color: rgba(255,255,255,.5);
  font-family: var(--font-diego-body), system-ui, sans-serif;
}
.dg-footer-inner {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}
.dg-footer-brand-name {
  font-family: var(--font-diego-display), Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--dg-white);
  margin-bottom: 8px;
}
.dg-footer-brand-name span { color: var(--dg-copper2); }
.dg-footer-desc {
  font-size: 13px;
  line-height: 1.65;
  max-width: 280px;
}
.dg-footer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}
.dg-footer-tag {
  padding: 4px 10px;
  border-radius: 2px;
  background: rgba(199,143,95,.08);
  border: 1px solid rgba(199,143,95,.16);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--dg-copper3);
}
.dg-footer-col-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: rgba(255,255,255,.35);
  margin-bottom: 16px;
}
.dg-footer-links {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.dg-footer-links a {
  font-size: 14px;
  color: rgba(255,255,255,.5);
  transition: color .15s;
}
.dg-footer-links a:hover { color: var(--dg-copper2); }
.dg-footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: rgba(255,255,255,.5);
  margin-bottom: 10px;
}
.dg-footer-contact-item svg { color: var(--dg-copper3); flex-shrink: 0; margin-top: 2px; }
.dg-footer-contact-item a { transition: color .15s; }
.dg-footer-contact-item a:hover { color: var(--dg-copper2); }
.dg-footer-divider {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,.06);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
}
.dg-footer-copy { color: rgba(255,255,255,.25); }
.dg-footer-luma {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,.3);
}
.dg-footer-luma a {
  color: var(--dg-copper3);
  font-weight: 700;
  transition: color .15s;
}
.dg-footer-luma a:hover { color: var(--dg-copper2); }
@media (min-width: 768px) {
  .dg-footer-inner { grid-template-columns: 2fr 1fr 1fr; }
}

/* ── whatsapp float ──────────────────────────────────────── */
.dg-wa-float {
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
  animation: dg-wa-pulse 2.4s ease-out infinite;
  transition: transform .15s, box-shadow .15s, opacity .3s;
  opacity: 0;
}
.dg-wa-float.visible {
  opacity: 1;
}
.dg-wa-float:hover {
  transform: scale(1.08);
  box-shadow: 0 10px 32px rgba(37,211,102,.55);
}
@keyframes dg-wa-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(37,211,102,.45); }
  70%  { box-shadow: 0 0 0 18px rgba(37,211,102,0); }
  100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
}

/* ── reveal animations ───────────────────────────────────── */
.dg-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity .6s cubic-bezier(.22,.8,.28,1), transform .6s cubic-bezier(.22,.8,.28,1);
}
.dg-reveal.is-visible {
  opacity: 1;
  transform: none;
}
.dg-d1.is-visible { transition-delay: .05s; }
.dg-d2.is-visible { transition-delay: .12s; }
.dg-d3.is-visible { transition-delay: .19s; }
.dg-d4.is-visible { transition-delay: .26s; }
.dg-d5.is-visible { transition-delay: .33s; }
.dg-d6.is-visible { transition-delay: .40s; }
`;

/* ── component ──────────────────────────────────────────── */
export default function DiegoGoncalvesPage() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [openFaq, setOpenFaq]     = useState<number | null>(0);
  const [waVisible, setWaVisible] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

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
    document
      .querySelectorAll(".dg-reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="dg-page" id="conceito" ref={revealRef}>

        {/* ── preview bar ── */}
        <div className="dg-preview" role="banner">
          <div className="dg-preview-center">
            <p className="dg-preview-title">
              <span className="dg-preview-dot" aria-hidden="true" />
              Prévia Conceitual · Diego Gonçalves Advocacia Criminal
            </p>
            <p className="dg-preview-sub">
              Proposta desenvolvida pela{" "}
              <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                Luma Sites
              </a>{" "}
              — uso exclusivo do cliente
            </p>
          </div>
          <a
            href="https://causacriminal.com.br"
            target="_blank"
            rel="noreferrer"
            className="dg-preview-link"
          >
            <ChevronRight size={12} />
            Site atual
          </a>
        </div>

        {/* ── nav ── */}
        <nav className={`dg-nav${scrolled ? " scrolled" : ""}`} aria-label="Navegação principal">
          <div className="dg-nav-inner">
            <a href="#top" className="dg-brand" onClick={closeMenu}>
              <span className="dg-brand-name">
                Diego <span>Gonçalves</span>
              </span>
              <span className="dg-brand-sub">Advocacia Criminal · Manaus/AM</span>
            </a>

            <div className="dg-links" role="navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href={wa()} target="_blank" rel="noreferrer" className="dg-nav-cta">
                <WaIcon size={14} />
                Falar agora
              </a>
            </div>

            <button
              className="dg-menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <div className={`dg-mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href={wa()} target="_blank" rel="noreferrer" className="dg-mobile-wa" onClick={closeMenu}>
            <WaIcon size={18} />
            Falar com especialista agora
          </a>
        </div>

        {/* ── hero ── */}
        <section className="dg-hero" id="top" aria-labelledby="hero-h1">
          <div className="dg-hero-bg" aria-hidden="true" />
          <div className="dg-hero-bg-img" aria-hidden="true" />

          <div className="dg-hero-inner">
            <div className="dg-hero-copy">
              <div className="dg-hero-eyebrow">
                <span className="dg-hero-eyebrow-dot" />
                Advocacia Criminal Especializada · Manaus/AM
              </div>

              <h1 id="hero-h1">
                Quando está em jogo a sua{" "}
                <em>liberdade</em>,{" "}
                você precisa do advogado certo.
              </h1>

              <p className="dg-hero-sub">
                Defesa criminal especializada desde o flagrante até o tribunal — com
                agilidade, sigilo e estratégia técnica que faz diferença nos momentos mais críticos.
              </p>

              <div className="dg-hero-btns">
                <a href={wa("Olá! Preciso de orientação jurídica urgente.")} target="_blank" rel="noreferrer" className="dg-btn-copper">
                  <WaIcon size={18} />
                  Falar com especialista
                </a>
                <a href="#servicos" className="dg-btn-outline">
                  Ver áreas de atuação
                  <ChevronDown size={16} />
                </a>
              </div>

              <div className="dg-hero-pills">
                <span className="dg-hero-pill">
                  <Shield size={13} />
                  Habeas Corpus
                </span>
                <span className="dg-hero-pill">
                  <Zap size={13} />
                  Atendimento emergencial
                </span>
                <span className="dg-hero-pill">
                  <Gavel size={13} />
                  Tribunal do Júri
                </span>
              </div>
            </div>

            <div className="dg-hero-photo-wrap">
              <div className="dg-hero-photo-frame">
                <Image
                  src="/images/diegogoncalves/diego-hero.jpg"
                  alt="Diego Gonçalves — Advogado Criminalista"
                  width={1024}
                  height={681}
                  sizes="(min-width: 900px) 520px, calc(100vw - 40px)"
                  quality={90}
                  priority
                />
              </div>
              <div className="dg-hero-photo-accent" aria-hidden="true" />
              <div className="dg-hero-photo-badge">
                <div>
                  <div className="dg-hero-photo-badge-num">23M</div>
                </div>
                <div className="dg-hero-photo-badge-label">
                  Seguidores<br />no Instagram
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── trust bar ── */}
        <div className="dg-trust" role="complementary" aria-label="Indicadores de autoridade">
          <div className="dg-trust-grid">
            {[
              { icon: <Instagram size={20} />, num: "23M+", label: "Seguidores Instagram" },
              { icon: <Users size={20} />, num: "274",   label: "Posts publicados" },
              { icon: <Clock size={20} />, num: "24h",   label: "Atendimento urgente" },
              { icon: <Shield size={20} />, num: "100%", label: "Sigilo garantido" },
            ].map((item, i) => (
              <div key={i} className={`dg-trust-item dg-reveal dg-d${i + 1}`}>
                <div className="dg-trust-icon">{item.icon}</div>
                <div>
                  <div className="dg-trust-num">{item.num}</div>
                  <div className="dg-trust-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── instagram strip ── */}
        <section className="dg-insta-strip" aria-label="Presença digital">
          <div className="dg-insta-inner">
            <div>
              <p className="dg-section-label" style={{ color: "var(--dg-copper2)" }}>
                Autoridade digital
              </p>
              <div className="dg-insta-number dg-reveal">23.1M</div>
              <p className="dg-insta-subtitle dg-reveal dg-d1">
                pessoas <strong>acompanham</strong> nossa orientação jurídica
              </p>
              <p className="dg-insta-copy dg-reveal dg-d2">
                Um dos maiores perfis jurídicos do Brasil no Instagram. Esse alcance não é apenas
                número — é prova de que a comunicação de Diego Gonçalves conecta, educa e gera
                confiança em escala nacional. Seu novo site precisa refletir esse nível de autoridade.
              </p>
              <a
                href="https://www.instagram.com/diegogoncalves_adv/"
                target="_blank"
                rel="noreferrer"
                className="dg-insta-handle dg-reveal dg-d3"
              >
                <Instagram size={16} />
                @diegogoncalves_adv
              </a>
            </div>

            <div className="dg-insta-visual dg-reveal dg-d2">
              {[
                { src: "/images/diegogoncalves/diego-hero.jpg",     alt: "Post Diego Gonçalves" },
                { src: "/images/diegogoncalves/diego-about.jpg",    alt: "Post Diego Gonçalves" },
                { src: "/images/diegogoncalves/diego-photo-03.jpg", alt: "Post Diego Gonçalves" },
              ].map((img, i) => (
                <div key={i} className="dg-insta-thumb">
                  <Image src={img.src} alt={img.alt} fill sizes="200px" style={{ objectFit: "cover" }} />
                  <div className="dg-insta-overlay">
                    <Instagram size={24} color="white" />
                  </div>
                </div>
              ))}
              <div className="dg-insta-count">
                <span>274</span>
                posts publicados
              </div>
              <div className="dg-insta-count">
                <span>23M</span>
                seguidores
              </div>
              <div className="dg-insta-count">
                <span>285</span>
                seguindo
              </div>
            </div>
          </div>
        </section>

        {/* ── services ── */}
        <section className="dg-section" id="servicos" aria-labelledby="services-h2">
          <div className="dg-wrap">
            <p className="dg-section-label dg-reveal">Áreas de Atuação</p>
            <h2 className="dg-section-h2 dg-reveal dg-d1" id="services-h2">
              Defesa criminal em todas as<br />fases do processo
            </h2>
            <div className="dg-section-divider dg-reveal dg-d2" />
            <p className="dg-section-lead dg-reveal dg-d2">
              Nossa equipe atua desde o primeiro momento — delegacia, inquérito,
              instrução processual, júri e tribunais superiores.
            </p>

            <div className="dg-services-grid">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className={`dg-service-card dg-reveal dg-d${(i % 3) + 1}`}
                  aria-label={s.title}
                >
                  <div className="dg-service-icon" aria-hidden="true">
                    <s.icon size={22} />
                  </div>
                  <p className="dg-service-eyebrow">{s.eyebrow}</p>
                  <h3 className="dg-service-title">{s.title}</h3>
                  <p className="dg-service-desc">{s.desc}</p>
                  <ul className="dg-service-points" aria-label={`Detalhes de ${s.title}`}>
                    {s.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <a
                    href={wa(`Olá! Tenho uma questão sobre ${s.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="dg-service-link"
                    aria-label={`Falar sobre ${s.title}`}
                  >
                    Falar sobre esse caso
                    <ChevronRight size={14} />
                  </a>
                </article>
              ))}
            </div>

            <div className="dg-services-cta dg-reveal">
              <a href={wa()} target="_blank" rel="noreferrer" className="dg-btn-copper">
                <WaIcon size={18} />
                Analisar meu caso gratuitamente
              </a>
            </div>
          </div>
        </section>

        {/* ── about ── */}
        <section className="dg-section alt" id="sobre" aria-labelledby="about-h2">
          <div className="dg-wrap">
            <p className="dg-section-label dg-reveal">Quem é Diego Gonçalves</p>
            <div className="dg-about-grid">
              <div className="dg-about-photo-wrap dg-reveal">
                <div className="dg-about-photo-frame">
                  <Image
                    src="/images/diegogoncalves/diego-about.jpg"
                    alt="Diego Gonçalves — Advogado Criminalista em Manaus"
                    width={1024}
                    height={681}
                    sizes="(min-width: 900px) 520px, calc(100vw - 40px)"
                    quality={90}
                  />
                </div>
                <div className="dg-about-photo-accent" aria-hidden="true" />
                <div className="dg-about-photo-badge">Advocacia Criminal · Manaus/AM</div>
              </div>

              <div className="dg-about-copy">
                <h2 className="dg-section-h2 dg-reveal dg-d1" id="about-h2">
                  A defesa que seu caso merece
                </h2>
                <div className="dg-section-divider dg-reveal dg-d1" />

                <p className="dg-about-text dg-reveal dg-d2">
                  <strong>Diego Gonçalves</strong> é advogado criminalista especializado na defesa
                  de pessoas investigadas, indiciadas ou condenadas — com atuação em todas as fases
                  do processo penal, da delegacia ao tribunal.
                </p>
                <p className="dg-about-text dg-reveal dg-d3">
                  Com uma das maiores audiências jurídicas do Instagram no Brasil —{" "}
                  <strong>mais de 23 milhões de seguidores</strong> — Diego construiu autoridade
                  reconhecida nacionalmente ao traduzir o direito criminal em linguagem acessível
                  e direta. Isso reflete a essência do seu trabalho: clareza, técnica e resultado.
                </p>
                <p className="dg-about-text dg-reveal dg-d4">
                  Cada caso é único. A equipe analisa os fatos com rigor técnico e atua com a
                  urgência que a advocacia criminal exige — porque em direito penal,{" "}
                  <strong>tempo é liberdade</strong>.
                </p>

                <div className="dg-credentials-grid dg-reveal dg-d4">
                  {[
                    { label: "Especialidade", value: "Direito Criminal" },
                    { label: "Localização", value: "Manaus / AM" },
                    { label: "Atendimento", value: "Presencial e Online" },
                    { label: "Seguidores", value: "23M+ Instagram" },
                  ].map((c) => (
                    <div key={c.label} className="dg-credential">
                      <div className="dg-credential-label">{c.label}</div>
                      <div className="dg-credential-value">{c.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── process ── */}
        <section className="dg-section dark" id="processo" aria-labelledby="process-h2">
          <div className="dg-wrap">
            <p className="dg-section-label dg-reveal">Como Funciona</p>
            <h2 className="dg-section-h2 dg-reveal dg-d1" id="process-h2" style={{ color: "var(--dg-white)" }}>
              Do primeiro contato à resolução
            </h2>
            <div className="dg-section-divider dg-reveal dg-d2" />
            <p className="dg-section-lead dg-reveal dg-d2">
              Processo objetivo, transparente e sigiloso — para que você saiba exatamente o que
              acontece em cada etapa.
            </p>

            <div className="dg-process-grid" style={{ marginTop: 56 }}>
              {steps.map((s, i) => (
                <div key={s.num} className={`dg-step dg-reveal dg-d${i + 1}`}>
                  <div className="dg-step-num" aria-hidden="true">{s.num}</div>
                  <div>
                    <div className="dg-step-icon" aria-hidden="true">
                      <s.icon size={20} />
                    </div>
                    <h3 className="dg-step-title">{s.title}</h3>
                    <p className="dg-step-text">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── faq ── */}
        <section className="dg-section" id="duvidas" aria-labelledby="faq-h2">
          <div className="dg-wrap">
            <p className="dg-section-label dg-reveal">Perguntas Frequentes</p>
            <h2 className="dg-section-h2 dg-reveal dg-d1" id="faq-h2">
              Suas dúvidas, respondidas
            </h2>
            <div className="dg-section-divider dg-reveal dg-d1" />

            <div className="dg-faq-list dg-reveal dg-d2" role="list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`dg-faq-item${openFaq === i ? " open" : ""}`}
                  role="listitem"
                >
                  <button
                    className="dg-faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="dg-faq-q">{faq.q}</span>
                    <span className="dg-faq-chevron" aria-hidden="true">
                      <ChevronDown size={14} />
                    </span>
                  </button>
                  <div
                    className="dg-faq-answer"
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-hidden={openFaq !== i}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

            <div className="dg-faq-footer dg-reveal dg-d3">
              <p className="dg-faq-footer-text">
                Não encontrou a resposta que precisava?
              </p>
              <a href={wa("Olá! Tenho uma dúvida sobre meu caso.")} target="_blank" rel="noreferrer">
                <WaIcon size={16} />
                Perguntar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── cta final ── */}
        <section className="dg-cta-final" id="contato" aria-labelledby="cta-h2">
          <div className="dg-cta-final-inner">
            <p className="dg-cta-eyebrow dg-reveal">Fale agora</p>
            <h2 className="dg-reveal dg-d1" id="cta-h2">
              Sua liberdade não pode{" "}
              <em>esperar.</em>
            </h2>
            <p className="dg-cta-final-sub dg-reveal dg-d2">
              Entre em contato agora. O atendimento é sigiloso, a análise do seu caso é imediata
              e cada hora pode fazer diferença.
            </p>
            <div className="dg-reveal dg-d3">
              <a
                href={wa("Olá! Preciso de um advogado criminalista com urgência.")}
                target="_blank"
                rel="noreferrer"
                className="dg-btn-copper"
                style={{ display: "inline-flex", margin: "0 auto" }}
              >
                <WaIcon size={20} />
                Quero falar com Dr. Diego agora
              </a>
            </div>
            <div className="dg-cta-final-loc dg-reveal dg-d4">
              <Shield size={14} />
              Manaus/AM · Atendimento presencial e online para todo o Brasil
            </div>
          </div>
        </section>

        {/* ── footer ── */}
        <footer className="dg-footer">
          <div className="dg-footer-inner">
            <div>
              <div className="dg-footer-brand-name">
                Diego <span>Gonçalves</span>
              </div>
              <p className="dg-footer-desc">
                Advocacia criminal especializada em Manaus/AM. Defesa técnica desde o flagrante até
                os tribunais superiores, com sigilo e urgência.
              </p>
              <div className="dg-footer-tags">
                {["Habeas Corpus", "Flagrante", "Júri", "Inquérito", "Prisão Domiciliar"].map((t) => (
                  <span key={t} className="dg-footer-tag">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="dg-footer-col-title">Navegação</p>
              <ul className="dg-footer-links">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="dg-footer-col-title">Contato</p>
              <div className="dg-footer-contact-item">
                <WaIcon size={15} />
                <a href={wa()} target="_blank" rel="noreferrer">(92) 98133-3333</a>
              </div>
              <div className="dg-footer-contact-item">
                <Instagram size={15} />
                <a href="https://www.instagram.com/diegogoncalves_adv/" target="_blank" rel="noreferrer">
                  @diegogoncalves_adv
                </a>
              </div>
              <div className="dg-footer-contact-item">
                <Shield size={15} />
                <span>Manaus, Amazonas</span>
              </div>
            </div>
          </div>

          <div className="dg-footer-inner">
            <div className="dg-footer-divider" style={{ gridColumn: "1 / -1" }}>
              <p className="dg-footer-copy">
                © 2026 Diego Gonçalves Advocacia. Todos os direitos reservados.
              </p>
              <p className="dg-footer-luma">
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
          className={`dg-wa-float${waVisible ? " visible" : ""}`}
          aria-label="Falar pelo WhatsApp"
        >
          <WaIcon size={26} />
        </a>

      </div>
    </>
  );
}
