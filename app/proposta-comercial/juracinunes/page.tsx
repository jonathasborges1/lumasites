"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Award,
  ChevronDown,
  ChevronRight,
  Clock,
  FileText,
  Gavel,
  MessageCircle,
  Play,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Phone,
} from "lucide-react";

const WA_NUMBER = "5579999986028";
const whatsApp = (msg = "Olá, Dr. Juraci! Preciso de atendimento urgente.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const navItems = [
  { href: "#top",       label: "Início" },
  { href: "#servicos",  label: "Serviços" },
  { href: "#sobre",     label: "Sobre" },
  { href: "#processo",  label: "Como Funciona" },
  { href: "#duvidas",   label: "Dúvidas" },
  { href: "#contato",   label: "Contato" },
];


const services = [
  {
    icon: Shield,
    eyebrow: "Direito Criminal",
    title: "Pedido de Prisão Domiciliar",
    desc: "Substituição da prisão preventiva por domiciliar. Atuamos para garantir o direito de aguardar o julgamento em casa, com base nos requisitos legais.",
    points: [
      "Prisão domiciliar humanitária",
      "Monitoramento eletrônico",
      "Pedido liminar e definitivo",
    ],
  },
  {
    icon: Scale,
    eyebrow: "Revisão Processual",
    title: "Revisão de Cadeia",
    desc: "Reavaliamos prisões para verificar excessos de prazo, ilegalidades ou fatos novos que justifiquem a soltura imediata do acusado.",
    points: [
      "Excesso de prazo na prisão",
      "Relaxamento de prisão ilegal",
      "Reavaliação de medidas cautelares",
    ],
  },
  {
    icon: Gavel,
    eyebrow: "Atuação Imediata",
    title: "Prisão em Flagrante",
    desc: "Atendemos prisões em flagrante. Atuamos desde a delegacia até o tribunal para garantir seus direitos e buscar a liberdade provisória.",
    points: [
      "Acompanhamento na delegacia",
      "Relaxamento de flagrante",
      "Liberdade provisória com fiança",
    ],
  },
  {
    icon: Clock,
    eyebrow: "Direito Fundamental",
    title: "Liberdade",
    desc: "Atuação em pedidos de revogação de prisão, relaxamento e liberdade provisória, conforme as circunstâncias e os fundamentos aplicáveis.",
    points: [
      "Revogação de prisão preventiva",
      "Liberdade provisória",
      "Revisão de cautelares abusivas",
    ],
  },
  {
    icon: FileText,
    eyebrow: "Remédio Constitucional",
    title: "Habeas Corpus",
    desc: "Impetramos Habeas Corpus para cessar ilegalidades e abusos de autoridade que restrinjam sua liberdade de locomoção — em todas as instâncias.",
    points: [
      "HC preventivo e repressivo",
      "Combate à prisão ilegal",
      "Atuação nos tribunais superiores",
    ],
  },
  {
    icon: ShieldCheck,
    eyebrow: "Defesa Especializada",
    title: "Tráfico de Drogas",
    desc: "Defesa técnica em processos relacionados à Lei 11.343/06, com análise individual dos fatos, provas e teses juridicamente cabíveis.",
    points: [
      "Análise da legalidade das provas",
      "Desclassificação para uso próprio",
      "Teses de absolvição ou redução",
    ],
  },
];

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Contato Urgente",
    text: "Apresente sua situação pelo WhatsApp para iniciar um atendimento sigiloso e receber as orientações iniciais.",
  },
  {
    num: "02",
    icon: Scale,
    title: "Análise do Caso",
    text: "Avaliamos os fatos, identificamos ilegalidades e definimos a estratégia mais eficaz para o seu caso.",
  },
  {
    num: "03",
    icon: Gavel,
    title: "Definição da Atuação",
    text: "Após a análise, são apresentados os caminhos jurídicos adequados e os próximos passos do atendimento.",
  },
];

const faqs = [
  {
    q: "Meu familiar foi preso. O que faço agora?",
    a: "Entre em contato pelo WhatsApp e reúna as informações disponíveis sobre a prisão. O caso será analisado individualmente para definição das medidas juridicamente cabíveis.",
  },
  {
    q: "O atendimento é presencial ou online?",
    a: "Trabalhamos de forma 100% online com sigilo total. Atendemos Aracaju e todo o estado de Sergipe. Em situações que exijam presença física, agendamos com prioridade.",
  },
  {
    q: "Qual o prazo para conseguir a liberdade?",
    a: "Não é possível garantir prazo ou resultado. O tempo depende das circunstâncias do caso, da medida adotada e da análise das autoridades competentes.",
  },
  {
    q: "O que é habeas corpus e quando é cabível?",
    a: "Habeas corpus é um remédio constitucional que garante o direito à liberdade quando há coação ilegal ou abuso de autoridade. É cabível em prisões ilegais, excesso de prazo e constrangimento ilegal.",
  },
  {
    q: "Dr. Juraci atende casos de tráfico de drogas?",
    a: "Sim. A atuação inclui defesa técnica em casos relacionados à Lei 11.343/06, sempre após análise individual dos fatos e documentos.",
  },
];

const WaIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const MenuIcon = ({ open = false }: { open?: boolean }) => (
  <span className={`jn-menu-glyph${open ? " open" : ""}`} aria-hidden="true">
    <span className="jn-mg-top" />
    <span className="jn-mg-bot" />
    <span className="jn-mg-dot" />
  </span>
);

const css = `
html { scroll-behavior: smooth; }
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; }

:root {
  --jn-bar:    48px;
  --jn-nav:    72px;

  /* Base escura — quase-preto com sub-tom quente */
  --jn-dark:   #07101F;
  --jn-dark2:  #0B1628;

  /* Crimson refinado — identidade da marca */
  --jn-red:    #9B1C1C;
  --jn-red2:   #B91C1C;
  --jn-red3:   #DC2626;
  --jn-red-bg: rgba(185,28,28,0.12);
  --jn-red-br: rgba(185,28,28,0.24);

  /* Ouro — credenciais, prêmios, ABRADAA */
  --jn-gold:   #C8A84B;
  --jn-gold2:  #DFC06A;

  /* Neutros */
  --jn-white:  #FAFAFA;
  --jn-cream:  #F8F5F0;
  --jn-warm:   #F2EDE6;
  --jn-ink:    #1A1414;
  --jn-muted:  #6B6068;
  --jn-line-l: rgba(20,10,10,0.1);
}

.jn-page {
  font-family: var(--font-juraci-body), system-ui, sans-serif;
  color: var(--jn-ink);
  background: var(--jn-cream);
  overflow-x: clip;
  min-height: 100vh;
}

/* ── PREVIEW BAR ─────────────────────────────── */
#conceito {
  padding-top: calc(var(--jn-bar) + var(--jn-nav));
  font-family: var(--font-juraci-body), system-ui, sans-serif;
}
#conceito h1,
#conceito h2,
#conceito h3,
#conceito h4,
#conceito h5,
#conceito h6 {
  font-family: var(--font-juraci-display), Georgia, serif;
}
.jn-preview {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1001;
  min-height: var(--jn-bar);
  padding: 7px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  background: var(--jn-dark);
  border-bottom: 1px solid rgba(185,28,28,0.25);
}
.jn-preview-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.jn-preview-old-site {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 3px;
  color: rgba(255,255,255,0.55);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: border-color .15s, color .15s;
}
.jn-preview-old-site:hover {
  border-color: rgba(255,255,255,0.35);
  color: rgba(255,255,255,0.85);
}
.jn-preview-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--jn-white);
}
.jn-preview-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--jn-red3);
  animation: jn-pulse-dot 1.6s ease-out infinite;
}
@keyframes jn-pulse-dot {
  0%   { box-shadow: 0 0 0 0 rgba(220,38,38,.9); }
  70%  { box-shadow: 0 0 0 10px rgba(220,38,38,0); }
  100% { box-shadow: 0 0 0 0 rgba(220,38,38,0); }
}
.jn-preview-sub {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,0.44);
}
.jn-preview-sub a {
  color: var(--jn-gold);
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* ── NAV ─────────────────────────────────────── */
.jn-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: var(--jn-bar);
  z-index: 1000;
  height: var(--jn-nav);
  background: rgba(12,10,11,0.97);
  border-bottom: 1px solid rgba(185,28,28,0.16);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition: background .25s, box-shadow .25s;
  font-family: var(--font-juraci-body), system-ui, sans-serif;
}
.jn-nav.scrolled {
  background: rgba(10,8,9,0.99);
  box-shadow: 0 12px 40px rgba(0,0,0,.5);
}
.jn-nav-inner {
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.jn-brand {
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: 1;
}
.jn-brand-name {
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--jn-white);
  letter-spacing: 0.01em;
}
.jn-brand-name span { color: var(--jn-red3); }
.jn-brand-sub {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.36);
}
.jn-links {
  display: none;
  align-items: center;
  gap: 18px;
}
.jn-links a {
  position: relative;
  color: rgba(255,255,255,0.52);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color .15s;
}
.jn-links a:hover,
.jn-links a.active { color: var(--jn-white); }
.jn-links a:not(.jn-nav-cta)::after {
  content: "";
  position: absolute;
  bottom: -8px; left: 0; right: 0;
  height: 1px;
  background: var(--jn-red3);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .2s;
}
.jn-links a.active::after,
.jn-links a:hover::after { transform: scaleX(1); }
.jn-nav-cta {
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  border-radius: 3px;
  background: var(--jn-red2);
  color: var(--jn-white) !important;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 6px 22px rgba(185,28,28,0.32);
  transition: background .15s, box-shadow .15s;
}
.jn-nav-cta:hover {
  background: var(--jn-red3);
  box-shadow: 0 8px 28px rgba(185,28,28,0.44);
}
.jn-menu-btn {
  width: 44px; height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(185,28,28,0.28);
  border-radius: 3px;
  background: transparent;
  color: var(--jn-red3);
  transition: background .2s;
}
.jn-menu-btn:hover { background: rgba(185,28,28,0.1); }
.jn-menu-glyph {
  position: relative;
  width: 22px; height: 18px;
  display: block;
}
.jn-mg-top, .jn-mg-bot {
  position: absolute;
  right: 0;
  height: 1.5px;
  border-radius: 999px;
  background: currentColor;
  transition: top .28s cubic-bezier(.22,.8,.28,1), width .28s cubic-bezier(.22,.8,.28,1), transform .28s cubic-bezier(.22,.8,.28,1);
}
.jn-mg-top { top: 5px; width: 22px; }
.jn-mg-bot { top: 13px; width: 15px; }
.jn-mg-dot {
  position: absolute;
  left: 0; bottom: 3px;
  width: 3px; height: 3px;
  border-radius: 50%;
  background: var(--jn-red3);
  transition: opacity .18s, transform .28s;
}
.jn-menu-glyph.open .jn-mg-top { top: 9px; width: 22px; transform: rotate(42deg); }
.jn-menu-glyph.open .jn-mg-bot { top: 9px; width: 22px; transform: rotate(-42deg); }
.jn-menu-glyph.open .jn-mg-dot { opacity: 0; transform: scale(0); }

/* ── MOBILE MENU ─────────────────────────────── */
.jn-mobile {
  position: fixed;
  inset: calc(var(--jn-bar) + var(--jn-nav)) 0 0;
  z-index: 999;
  overflow: hidden auto;
  background: linear-gradient(160deg, #130F10 0%, #0C0A0B 60%, #080607 100%);
  color: var(--jn-white);
  animation: jn-mob-in .34s cubic-bezier(.22,.8,.28,1) both;
}
@keyframes jn-mob-in {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: none; }
}
.jn-mobile-inner {
  width: min(calc(100% - 40px), 520px);
  min-height: 100%;
  margin: 0 auto;
  padding: 36px 0 32px;
  display: flex;
  flex-direction: column;
}
.jn-mob-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  color: var(--jn-red3);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}
.jn-mob-eyebrow::before {
  content: "";
  width: 28px; height: 1px;
  background: currentColor;
}
.jn-mob-link {
  position: relative;
  min-height: 58px;
  display: grid;
  grid-template-columns: 30px 1fr 24px;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  color: var(--jn-white);
}
.jn-mob-link:first-of-type { border-top: 1px solid rgba(255,255,255,0.06); }
.jn-mob-link-idx {
  color: var(--jn-red3);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
}
.jn-mob-link-label {
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: clamp(17px, 5vw, 22px);
  font-weight: 600;
}
.jn-mob-link svg { color: rgba(220,38,38,.5); }
.jn-mob-cta {
  min-height: 54px;
  margin-top: 24px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background: var(--jn-red2);
  color: var(--jn-white);
  border-radius: 2px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 8px 24px rgba(185,28,28,0.35);
}
.jn-mob-meta {
  margin-top: auto;
  padding-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.jn-mob-meta-label {
  display: block;
  margin-bottom: 6px;
  color: rgba(255,255,255,0.3);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.jn-mob-meta strong {
  display: block;
  color: rgba(255,255,255,0.68);
  font-size: 12px;
  line-height: 1.7;
}
.jn-oab-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid rgba(200,168,75,0.3);
  color: var(--jn-gold);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* ── WRAP ────────────────────────────────────── */
.jn-wrap { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }

/* ── HERO ────────────────────────────────────── */
.jn-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--jn-dark);
}
.jn-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 65% at 78% 42%, rgba(26,18,18,0.88) 0%, transparent 58%),
    radial-gradient(ellipse 35% 50% at 5% 85%, rgba(155,28,28,0.08) 0%, transparent 55%),
    radial-gradient(ellipse 28% 40% at 95% 6%, rgba(155,28,28,0.07) 0%, transparent 50%),
    linear-gradient(150deg, #101E33 0%, #07101F 52%, #050B15 100%);
}
/* Subtle red noise grain overlay */
.jn-hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.35;
  pointer-events: none;
}
.jn-hero-grid {
  position: relative;
  z-index: 1;
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  padding: 64px 0 72px;
  display: grid;
  align-items: center;
  gap: 40px;
}
.jn-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: var(--jn-red3);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}
.jn-kicker::before {
  content: "";
  width: 26px; height: 1px;
  background: var(--jn-red3);
}
.jn-hero h1 {
  margin: 0;
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: clamp(34px, 5.2vw, 66px);
  line-height: 1.06;
  font-weight: 700;
  color: var(--jn-white);
  letter-spacing: -0.01em;
}
.jn-hero h1 em {
  font-style: italic;
  color: var(--jn-red3);
}
.jn-hero-sub {
  max-width: 520px;
  margin: 24px 0 0;
  color: rgba(255,255,255,0.58);
  font-size: 15px;
  line-height: 1.85;
}
.jn-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}
.jn-btn-red {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 28px;
  border: 0;
  border-radius: 3px;
  background: var(--jn-red2);
  color: var(--jn-white);
  font-family: var(--font-juraci-body), system-ui, sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 14px 36px rgba(185,28,28,0.38);
  transition: background .15s, box-shadow .15s, transform .15s;
}
.jn-btn-red:hover {
  background: var(--jn-red3);
  box-shadow: 0 18px 44px rgba(185,28,28,0.5);
  transform: translateY(-1px);
}
.jn-btn-outline {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 24px;
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: 3px;
  background: transparent;
  color: rgba(255,255,255,0.72);
  font-family: var(--font-juraci-body), system-ui, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: border-color .15s, color .15s;
}
.jn-btn-outline:hover {
  border-color: rgba(220,38,38,0.5);
  color: var(--jn-white);
}

/* Hero proof pills */
.jn-proof-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
}
.jn-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border: 1px solid rgba(185,28,28,0.22);
  border-radius: 999px;
  background: rgba(185,28,28,0.07);
  color: rgba(255,255,255,0.7);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.jn-pill svg { color: var(--jn-red3); flex: 0 0 auto; }
.jn-pill.gold {
  border-color: rgba(200,168,75,0.24);
  background: rgba(200,168,75,0.07);
}
.jn-pill.gold svg { color: var(--jn-gold); }

/* Hero photo */
.jn-hero-photo-col {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.jn-hero-photo-wrap {
  position: relative;
  max-width: 520px;
  width: 100%;
}
.jn-hero-photo-frame {
  position: relative;
}
.jn-hero-photo-accent {
  position: absolute;
  top: -14px; right: -14px; bottom: 14px; left: 14px;
  border: 1px solid rgba(185,28,28,0.28);
  border-radius: 3px;
  pointer-events: none;
}
.jn-hero-video-frame {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid rgba(200,168,75,.26);
  border-radius: 3px;
  background: #050b15;
  box-shadow: 0 28px 70px rgba(0,0,0,.58);
}
.jn-hero-video-poster {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: #050b15;
  color: var(--jn-white);
  cursor: pointer;
}
.jn-hero-video-poster img {
  object-fit: cover;
}
.jn-hero-video-poster::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(5,11,21,.05), rgba(5,11,21,.38)),
    radial-gradient(circle at center, transparent 0 18%, rgba(5,11,21,.12) 58%, rgba(5,11,21,.35) 100%);
  pointer-events: none;
}
.jn-hero-video-play {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.42);
  border-radius: 50%;
  background: rgba(7,16,31,.82);
  color: var(--jn-white);
  box-shadow: 0 12px 36px rgba(0,0,0,.42);
  transform: translate(-50%, -50%);
  transition: background .2s, border-color .2s, transform .2s;
  backdrop-filter: blur(8px);
}
.jn-hero-video-play svg { margin-left: 3px; }
.jn-hero-video-poster:hover .jn-hero-video-play {
  border-color: var(--jn-gold2);
  background: rgba(155,28,28,.92);
  transform: translate(-50%, -50%) scale(1.06);
}
.jn-hero-video-play-label {
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 18px;
  color: rgba(255,255,255,.9);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .14em;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 10px rgba(0,0,0,.8);
}
.jn-hero-video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.jn-hero-video-label {
  position: absolute;
  z-index: 2;
  top: -17px;
  left: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid rgba(200,168,75,.3);
  background: #07101f;
  color: var(--jn-gold2);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}
.jn-hero-video-note {
  margin: 16px 0 0;
  text-align: center;
  color: rgba(255,255,255,.42);
  font-size: 10px;
  line-height: 1.6;
}

/* ── TRUST BAR ───────────────────────────────── */
.jn-trust {
  background: var(--jn-dark2);
  border-bottom: 1px solid rgba(185,28,28,0.14);
  padding: 28px 0;
}
.jn-trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
}
.jn-trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
  padding: 16px 12px;
}
.jn-trust-item strong {
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: clamp(22px, 3.6vw, 32px);
  font-weight: 700;
  color: var(--jn-white);
  line-height: 1;
}
.jn-trust-item strong span { color: var(--jn-red3); }
.jn-trust-item em {
  font-style: normal;
  color: var(--jn-gold);
}
.jn-trust-item cite {
  font-style: normal;
  color: var(--jn-red3);
}
.jn-trust-item small {
  color: rgba(255,255,255,0.38);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* ── SECTIONS ────────────────────────────────── */
.jn-section {
  padding: 96px 0;
}
.jn-page section[id] {
  scroll-margin-top: calc(var(--jn-bar) + var(--jn-nav) + 16px);
}
.jn-section.alt   { background: var(--jn-warm); }
.jn-section.dark  { background: var(--jn-dark); color: var(--jn-white); }
.jn-section.dark2 { background: var(--jn-dark2); color: var(--jn-white); }
.jn-section.red   { background: var(--jn-red2); color: var(--jn-white); }
.jn-section-head  { max-width: 700px; margin-bottom: 48px; }
.jn-section-head.center { text-align: center; margin-left: auto; margin-right: auto; }

.jn-label {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--jn-red2);
}
.jn-section.dark  .jn-label,
.jn-section.dark2 .jn-label { color: var(--jn-red3); }
.jn-section.alt   .jn-label { color: var(--jn-red2); }
.jn-section.red   .jn-label { color: rgba(255,255,255,0.6); }

.jn-h2 {
  margin: 0;
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: clamp(26px, 3.4vw, 44px);
  font-weight: 700;
  line-height: 1.1;
  color: var(--jn-ink);
}
.jn-section.dark  .jn-h2,
.jn-section.dark2 .jn-h2 { color: var(--jn-white); }
.jn-section.red   .jn-h2 { color: var(--jn-white); }

.jn-lead {
  margin: 16px 0 0;
  font-size: 15px;
  line-height: 1.85;
  color: var(--jn-muted);
}
.jn-section.dark  .jn-lead,
.jn-section.dark2 .jn-lead { color: rgba(255,255,255,0.54); }
.jn-section.red   .jn-lead { color: rgba(255,255,255,0.72); }

/* ── SERVICES ────────────────────────────────── */
.jn-services-grid {
  display: grid;
  gap: 18px;
  counter-reset: service;
}
.jn-service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 26px;
  overflow: hidden;
  border: 1px solid rgba(200,168,75,0.18);
  border-radius: 14px;
  background:
    linear-gradient(145deg, rgba(16,30,51,0.92), rgba(7,16,31,0.98));
  box-shadow: 0 18px 45px rgba(0,0,0,0.14);
  transition: border-color .25s, box-shadow .25s, transform .25s;
  counter-increment: service;
}
.jn-service-card::before {
  content: "";
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--jn-gold), transparent 68%);
  opacity: .7;
}
.jn-service-card::after {
  content: "0" counter(service);
  position: absolute;
  top: 22px;
  right: 24px;
  color: rgba(223,192,106,0.18);
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
}
.jn-service-card:hover {
  border-color: rgba(200,168,75,0.48);
  box-shadow: 0 24px 60px rgba(0,0,0,0.24);
  transform: translateY(-5px);
}
.jn-service-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.jn-service-icon {
  width: 48px; height: 48px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(200,168,75,0.22), rgba(200,168,75,0.07));
  color: var(--jn-gold2);
  border: 1px solid rgba(200,168,75,0.28);
  transition: background .22s, border-color .22s, transform .22s;
}
.jn-service-card:hover .jn-service-icon {
  background: rgba(200,168,75,0.2);
  border-color: rgba(200,168,75,0.5);
  transform: rotate(-3deg) scale(1.04);
}
.jn-service-eyebrow {
  display: inline-flex;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(185,28,28,0.12);
  color: #ef7373;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  line-height: 1;
  text-transform: uppercase;
}
.jn-service-card h3 {
  max-width: 260px;
  margin: 0 0 12px;
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: clamp(21px, 2vw, 25px);
  font-weight: 700;
  line-height: 1.15;
  color: var(--jn-white);
}
.jn-service-card p {
  margin: 0 0 20px;
  color: rgba(255,255,255,0.62);
  font-size: 13px;
  line-height: 1.7;
}
.jn-service-points {
  display: grid;
  gap: 9px;
  margin: 0 0 22px;
  padding: 18px 0 0;
  border-top: 1px solid rgba(255,255,255,0.07);
  list-style: none;
}
.jn-service-points li {
  position: relative;
  padding-left: 18px;
  color: rgba(255,255,255,0.55);
  font-size: 12px;
  line-height: 1.45;
}
.jn-service-points li::before {
  content: "";
  position: absolute;
  top: .55em;
  left: 1px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--jn-gold);
  box-shadow: 0 0 0 4px rgba(200,168,75,0.08);
}
.jn-service-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  color: var(--jn-gold2);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .04em;
  text-decoration: none;
}
.jn-service-link svg { transition: transform .2s; }
.jn-service-link:hover svg { transform: translateX(3px); }
.jn-service-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 22px;
  color: rgba(255,255,255,0.46);
  font-size: 12px;
}
.jn-service-note::before,
.jn-service-note::after {
  content: "";
  width: 34px;
  height: 1px;
  background: rgba(200,168,75,0.3);
}

/* ── SOBRE ───────────────────────────────────── */
.jn-two-col {
  display: grid;
  gap: 56px;
  align-items: center;
}
.jn-about-photo-wrap {
  position: relative;
  max-width: 500px;
}
.jn-about-photo {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center top;
  border-radius: 3px;
  filter: saturate(0.84) contrast(1.08);
  box-shadow: 0 24px 56px rgba(0,0,0,0.22);
}
.jn-about-accent {
  position: absolute;
  top: -12px; left: -12px;
  right: 12px; bottom: 12px;
  border: 1px solid var(--jn-red-br);
  border-radius: 3px;
  pointer-events: none;
}
.jn-about-badge {
  position: absolute;
  right: -18px;
  bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 20px;
  background: rgba(6,4,5,0.97);
  border: 1px solid rgba(185,28,28,0.3);
  border-left: 3px solid var(--jn-red2);
  border-radius: 3px;
}
.jn-about-badge strong {
  color: var(--jn-white);
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: 14px;
  font-weight: 700;
}
.jn-about-badge span {
  color: var(--jn-gold);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.jn-about-copy p {
  margin: 0 0 16px;
  color: var(--jn-muted);
  font-size: 15px;
  line-height: 1.9;
}
.jn-about-copy p:last-child { margin-bottom: 0; }
.jn-oab-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  padding: 10px 16px;
  border: 1px solid var(--jn-line-l);
  border-radius: 3px;
  background: rgba(155,28,28,0.06);
  border-color: rgba(155,28,28,0.15);
  color: var(--jn-red2);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.jn-credentials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 28px;
}
.jn-cred-card {
  padding: 16px;
  border: 1px solid var(--jn-line-l);
  border-radius: 3px;
  background: rgba(255,255,255,0.6);
}
.jn-cred-card svg { margin-bottom: 8px; }
.jn-cred-card svg.red  { color: var(--jn-red2); }
.jn-cred-card svg.gold { color: var(--jn-gold); }
.jn-cred-card strong {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: var(--jn-ink);
  line-height: 1.3;
}
.jn-cred-card span {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  color: var(--jn-muted);
  line-height: 1.5;
}

/* ── STEPS ───────────────────────────────────── */
.jn-steps-grid {
  display: grid;
  gap: 16px;
  margin-top: 40px;
}
.jn-step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: start;
  padding: 28px 24px;
  border: 1px solid var(--jn-red-br);
  border-radius: 3px;
  background: rgba(26,18,18,0.4);
  transition: border-color .2s, background .2s;
}
.jn-step:hover {
  border-color: rgba(185,28,28,0.4);
  background: rgba(26,18,18,0.65);
}
.jn-step-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.jn-step-num {
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: 30px;
  font-weight: 700;
  color: rgba(185,28,28,0.22);
  line-height: 1;
}
.jn-step-icon {
  width: 40px; height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--jn-red-bg);
  color: var(--jn-red3);
  border: 1px solid var(--jn-red-br);
}
.jn-step h3 {
  margin: 0 0 10px;
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--jn-white);
}
.jn-step p {
  margin: 0;
  color: rgba(255,255,255,0.52);
  font-size: 14px;
  line-height: 1.8;
}

/* ── FAQ ─────────────────────────────────────── */
.jn-faq-list {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--jn-line-l);
  border-radius: 3px;
  background: rgba(255,255,255,0.7);
  box-shadow: 0 16px 40px rgba(12,10,11,0.07);
  overflow: hidden;
  margin-top: 40px;
}
.jn-faq-item { border-bottom: 1px solid var(--jn-line-l); }
.jn-faq-item:last-child { border-bottom: 0; }
.jn-faq-btn {
  width: 100%;
  text-align: left;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: transparent;
  border: 0;
  color: var(--jn-ink);
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  transition: background .15s;
}
.jn-faq-btn:hover { background: rgba(12,10,11,0.03); }
.jn-faq-btn.open  { color: var(--jn-red2); }
.jn-faq-icon { color: var(--jn-red3); flex: 0 0 auto; transition: transform .22s; }
.jn-faq-btn.open .jn-faq-icon { transform: rotate(180deg); }
.jn-faq-body {
  padding: 0 24px 22px;
  color: var(--jn-muted);
  font-size: 14px;
  line-height: 1.85;
}
.jn-faq-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 28px;
  color: var(--jn-red2);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: gap .15s;
}
.jn-faq-cta:hover { gap: 10px; }

/* ── CTA ─────────────────────────────────────── */
.jn-cta-section {
  background: linear-gradient(135deg, #0B1628 0%, #07101F 48%, #101E33 100%);
  position: relative;
  overflow: hidden;
}
.jn-cta-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(185,28,28,0.1) 0%, transparent 65%);
  pointer-events: none;
}
.jn-cta-inner {
  position: relative;
  z-index: 1;
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}
.jn-cta-inner .jn-hero-actions { justify-content: center; }
/* ── FOOTER ──────────────────────────────────── */
.jn-footer {
  background: var(--jn-dark);
  color: rgba(255,255,255,0.4);
  font-size: 13px;
  border-top: 1px solid rgba(185,28,28,0.14);
}
.jn-footer-body {
  padding: 60px 0 44px;
  display: grid;
  gap: 40px;
}
.jn-footer-brand p {
  margin: 12px 0 18px;
  font-size: 13px;
  max-width: 280px;
  line-height: 1.7;
}
.jn-footer-name {
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--jn-white);
}
.jn-footer-name span { color: var(--jn-red3); }
.jn-footer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.jn-footer-tag {
  padding: 4px 10px;
  border: 1px solid rgba(185,28,28,0.2);
  color: rgba(255,255,255,0.4);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
}
.jn-footer-col h4 {
  margin: 0 0 14px;
  color: var(--jn-white);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.jn-footer-col a {
  display: block;
  color: rgba(255,255,255,0.52);
  padding: 3px 0;
  font-size: 13px;
  transition: color .15s;
}
.jn-footer-col a:hover { color: var(--jn-red3); }
.jn-footer-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 0;
  font-size: 13px;
  color: rgba(255,255,255,0.52);
}
.jn-footer-row svg { flex: 0 0 auto; color: var(--jn-red3); opacity: 0.7; margin-top: 2px; }
.jn-footer-divider {
  border: 0;
  border-top: 1px solid rgba(255,255,255,0.05);
  margin: 0;
}
.jn-footer-bottom {
  padding: 18px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(255,255,255,0.3);
}
.jn-footer-bottom a {
  color: var(--jn-red3);
  font-weight: 700;
  transition: color .15s;
}
.jn-footer-bottom a:hover { color: var(--jn-white); }

/* ── WA FLOAT ────────────────────────────────── */
.jn-wa-float {
  position: fixed;
  z-index: 1002;
  right: max(20px, env(safe-area-inset-right));
  bottom: max(20px, env(safe-area-inset-bottom));
  width: 58px; height: 58px;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 22px rgba(37,211,102,0.42);
  transition: transform .2s, opacity .2s;
  animation: jn-wa-pulse 2s ease-out infinite;
}
.jn-wa-float:hover { transform: scale(1.07); }
.jn-wa-float.hidden { opacity: 0; pointer-events: none; transform: translateY(12px) scale(0.88); animation: none; }
@keyframes jn-wa-pulse {
  0%   { box-shadow: 0 4px 22px rgba(37,211,102,.42), 0 0 0 0 rgba(37,211,102,.45); }
  70%  { box-shadow: 0 4px 22px rgba(37,211,102,.42), 0 0 0 16px rgba(37,211,102,0); }
  100% { box-shadow: 0 4px 22px rgba(37,211,102,.42), 0 0 0 0 rgba(37,211,102,0); }
}

/* ── CTA LOCATION ───────────────────────────── */
.jn-cta-location {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.jn-cta-location span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: rgba(255,255,255,0.42);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
}
.jn-cta-location span svg { color: var(--jn-red3); opacity: 0.7; }

/* ── DEPOIMENTOS ─────────────────────────────── */
.jn-testimonials-grid {
  display: grid;
  gap: 16px;
  margin-top: 40px;
}
.jn-testimonial-card {
  padding: 28px 24px;
  border: 1px solid var(--jn-line-l);
  border-radius: 3px;
  background: rgba(255,255,255,0.7);
  box-shadow: 0 8px 24px rgba(12,10,11,0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.jn-testimonial-stars {
  display: flex;
  gap: 3px;
  color: var(--jn-gold);
}
.jn-testimonial-text {
  margin: 0;
  color: var(--jn-muted);
  font-size: 14px;
  line-height: 1.85;
  font-style: italic;
}
.jn-testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--jn-line-l);
}
.jn-testimonial-avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(155,28,28,0.1);
  border: 1px solid rgba(155,28,28,0.2);
  display: grid;
  place-items: center;
  font-family: var(--font-juraci-display), Georgia, serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--jn-red2);
  flex-shrink: 0;
}
.jn-testimonial-info strong {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: var(--jn-ink);
}
.jn-testimonial-info span {
  font-size: 11px;
  color: var(--jn-muted);
  letter-spacing: 0.04em;
}
.jn-testimonial-badge {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(155,28,28,0.07);
  border: 1px solid rgba(155,28,28,0.15);
  color: var(--jn-red2);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  white-space: nowrap;
}
@media (min-width: 768px) {
  .jn-testimonials-grid { grid-template-columns: repeat(2, 1fr); }
}

/* ── DIVIDER LINE ────────────────────────────── */
.jn-divider {
  width: 48px; height: 2px;
  background: var(--jn-red2);
  margin: 16px 0 0;
  border: 0;
}
.jn-section.dark  .jn-divider,
.jn-section.dark2 .jn-divider { background: var(--jn-red3); }

/* ── REVEAL ──────────────────────────────────── */
.jn-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity .6s cubic-bezier(.22,.8,.28,1), transform .6s cubic-bezier(.22,.8,.28,1);
}
.jn-reveal.is-visible {
  opacity: 1;
  transform: none;
}
.jn-d1.is-visible { transition-delay: .05s; }
.jn-d2.is-visible { transition-delay: .12s; }
.jn-d3.is-visible { transition-delay: .19s; }
.jn-d4.is-visible { transition-delay: .26s; }
.jn-d5.is-visible { transition-delay: .33s; }
.jn-d6.is-visible { transition-delay: .40s; }

/* ── HERO ENTRANCE ───────────────────────────── */
@keyframes jn-hero-in {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}
@keyframes jn-hero-in-right {
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: none; }
}
.jn-kicker       { animation: jn-hero-in .55s cubic-bezier(.22,.8,.28,1) .1s  both; }
.jn-hero h1      { animation: jn-hero-in .65s cubic-bezier(.22,.8,.28,1) .2s  both; }
.jn-hero-sub     { animation: jn-hero-in .6s  cubic-bezier(.22,.8,.28,1) .32s both; }
.jn-hero-actions { animation: jn-hero-in .6s  cubic-bezier(.22,.8,.28,1) .42s both; }
.jn-proof-pills  { animation: jn-hero-in .6s  cubic-bezier(.22,.8,.28,1) .52s both; }
.jn-hero-photo-col { animation: jn-hero-in-right .7s cubic-bezier(.22,.8,.28,1) .3s both; }

/* ── DIVIDER LINE GROW ───────────────────────── */
@keyframes jn-divider-grow {
  from { width: 0; opacity: 0; }
  to   { width: 48px; opacity: 1; }
}
.jn-reveal.is-visible > .jn-divider,
.jn-section-head.is-visible > .jn-divider {
  animation: jn-divider-grow .5s cubic-bezier(.22,.8,.28,1) .35s both;
}

/* ── TRUST BAR STAGGER ───────────────────────── */
.jn-trust-item {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity .5s cubic-bezier(.22,.8,.28,1), transform .5s cubic-bezier(.22,.8,.28,1);
}
.jn-trust-item.is-visible { opacity: 1; transform: none; }
.jn-trust-item:nth-child(1).is-visible { transition-delay: .05s; }
.jn-trust-item:nth-child(2).is-visible { transition-delay: .13s; }
.jn-trust-item:nth-child(3).is-visible { transition-delay: .21s; }
.jn-trust-item:nth-child(4).is-visible { transition-delay: .29s; }

/* ── RESPONSIVE ──────────────────────────────── */
@media (min-width: 1100px) {
  .jn-links { display: flex; }
  .jn-menu-btn { display: none; }
  .jn-mobile { display: none; }
}
@media (min-width: 768px) {
  .jn-hero-grid { grid-template-columns: minmax(0,1fr) minmax(320px,0.78fr); }
  .jn-trust-grid { grid-template-columns: repeat(4, 1fr); }
  .jn-two-col { grid-template-columns: 1fr 1fr; }
  .jn-steps-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .jn-footer-body { grid-template-columns: 1.4fr 0.8fr 1fr; gap: 48px; }
}
@media (min-width: 600px) {
  .jn-services-grid { grid-template-columns: repeat(2, 1fr); }
  .jn-credentials { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .jn-services-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 767px) {
  :root { --jn-nav: 64px; }
  .jn-hero-grid { padding: 48px 0 52px; }
  .jn-hero-photo-col { margin-top: 16px; }
  .jn-hero-video-label { left: 12px; }
  .jn-hero-sub { font-size: 14px; }
  .jn-hero-actions a, .jn-hero-actions button { width: 100%; justify-content: center; }
  .jn-proof-pills { gap: 8px; }
  .jn-section { padding: 64px 0; }
  .jn-section-head { margin-bottom: 32px; }
  .jn-two-col { gap: 32px; }
  .jn-about-badge { right: 8px; bottom: 20px; }
  .jn-step { padding: 20px 16px; gap: 14px; }
  .jn-credentials { grid-template-columns: 1fr 1fr; }
  .jn-faq-btn { font-size: 14px; padding: 18px; }
  .jn-faq-body { padding: 0 18px 18px; }
  .jn-footer-body { padding: 44px 0 28px; gap: 28px; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .jn-preview-dot, .jn-wa-float { animation: none; }
  .jn-reveal, .jn-trust-item,
  .jn-kicker, .jn-hero h1, .jn-hero-sub,
  .jn-hero-actions, .jn-proof-pills, .jn-hero-photo-col {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
`;

export default function JuraciNunesPropPage() {
  const [scrolled, setScrolled]    = useState(false);
  const [menuOpen, setMenuOpen]    = useState(false);
  const [openFaq, setOpenFaq]      = useState<number>(0);
  const [activeSection, setActive] = useState("top");
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.href.slice(1)))
      .filter((s): s is HTMLElement => Boolean(s));
    const update = () => {
      let curr = sections[0]?.id ?? "top";
      sections.forEach((s) => {
        if (s.getBoundingClientRect().top <= 140) curr = s.id;
      });
      if (
        window.scrollY > 50 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      )
        curr = sections.at(-1)?.id ?? curr;
      setActive(curr);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeResize = () => setMenuOpen(false);
    window.addEventListener("resize", closeResize);
    return () => { document.body.style.overflow = prev; window.removeEventListener("resize", closeResize); };
  }, [menuOpen]);

  useEffect(() => {
    const targets = document.querySelectorAll(".jn-reveal, .jn-trust-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div id="conceito">
      {/* ── PREVIEW BAR ── */}
      <div className="jn-preview">
        <div className="jn-preview-center">
          <div className="jn-preview-title">
            <span className="jn-preview-dot" />
            Prévia Conceitual
          </div>
          <span className="jn-preview-sub">
            Proposta elaborada pela{" "}
            <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">LumaSites.com.br</a>
          </span>
        </div>
        <a
          className="jn-preview-old-site"
          href="https://juracinunescriminalista.com/"
          target="_blank"
          rel="noreferrer"
        >
          Site atual ↗
        </a>
      </div>

      {/* ── NAV ── */}
      <nav className={`jn-nav${scrolled ? " scrolled" : ""}`}>
        <div className="jn-nav-inner">
          <a className="jn-brand" href="#top">
            <span className="jn-brand-name">Dr. <span>Juraci Nunes</span></span>
            <span className="jn-brand-sub">Advogado Criminalista · OAB/SE</span>
          </a>

          <div className="jn-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? "active" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a className="jn-nav-cta" href={whatsApp()} target="_blank" rel="noreferrer">
              <WaIcon size={14} /> Atendimento Online
            </a>
          </div>

          <button
            className="jn-menu-btn"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="jn-mobile" role="dialog" aria-modal="true">
          <div className="jn-mobile-inner">
            <span className="jn-mob-eyebrow">Navegação</span>
            <div>
              {navItems.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="jn-mob-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="jn-mob-link-idx">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="jn-mob-link-label">{item.label}</span>
                  <ChevronRight size={18} />
                </a>
              ))}
            </div>
            <a className="jn-mob-cta" href={whatsApp()} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <WaIcon size={18} /> Atendimento Online
              </span>
              <ChevronRight size={18} />
            </a>
            <div className="jn-mob-meta">
              <div>
                <span className="jn-mob-meta-label">Atuação</span>
                <strong>Aracaju · Todo o Estado de Sergipe</strong>
              </div>
              <span className="jn-oab-badge">
                <ShieldCheck size={13} /> OAB/SE
              </span>
            </div>
          </div>
        </div>
      )}

      <main className="jn-page">

        {/* ── HERO ── */}
        <section id="top" className="jn-hero">
          <div className="jn-hero-bg" aria-hidden="true" />
          <div className="jn-hero-grid">

            {/* Copy */}
            <div>
              <span className="jn-kicker">Criminalista · Aracaju · Sergipe</span>
              <h1>
                Precisando de um<br />
                Advogado Criminalista<br />
                <em>Urgentemente?</em>
              </h1>
              <p className="jn-hero-sub">
                Atuação criminal estratégica, com atendimento sigiloso e
                comunicação clara em cada etapa. Aracaju e todo o estado de
                Sergipe.
              </p>
              <div className="jn-hero-actions">
                <a className="jn-btn-red" href={whatsApp()} target="_blank" rel="noreferrer">
                  <WaIcon size={17} /> Falar com Especialista
                </a>
                <a className="jn-btn-outline" href="#servicos">
                  Ver Serviços <ChevronRight size={16} />
                </a>
              </div>
              <div className="jn-proof-pills" aria-label="Credenciais">
                <span className="jn-pill">
                  <Star size={13} />
                  5,0 no Google · Verificado
                </span>
                <span className="jn-pill gold">
                  <Award size={13} />
                  4x Eleito Melhor Advogado de SE
                </span>
                <span className="jn-pill gold">
                  <Shield size={13} />
                  Presidente da ABRADAA
                </span>
              </div>
            </div>

            {/* Vídeo original do site atual */}
            <div className="jn-hero-photo-col">
              <div className="jn-hero-photo-wrap">
                <div className="jn-hero-photo-frame">
                  <div className="jn-hero-photo-accent" />
                  <span className="jn-hero-video-label">
                    <Sparkles size={12} /> Vídeo de apresentação
                  </span>
                  <div className="jn-hero-video-frame">
                    {videoActive ? (
                      <iframe
                        src="https://player-vz-b2698388-468.tv.pandavideo.com.br/embed/?v=4e74437b-1b7d-414f-802d-d647615b7c7c&autoplay=true"
                        title="Vídeo de apresentação do Dr. Juraci Nunes"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        className="jn-hero-video-poster"
                        onClick={() => setVideoActive(true)}
                        aria-label="Assistir ao vídeo de apresentação do Dr. Juraci Nunes"
                      >
                        <Image
                          src="/images/juracinunes/video-poster.jpg"
                          alt=""
                          fill
                          sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
                          priority
                        />
                        <span className="jn-hero-video-play" aria-hidden="true">
                          <Play size={25} fill="currentColor" />
                        </span>
                        <span className="jn-hero-video-play-label">Assistir apresentação</span>
                      </button>
                    )}
                  </div>
                  <p className="jn-hero-video-note">
                    Conteúdo audiovisual preservado do site atual e integrado à nova experiência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="jn-trust" aria-label="Credenciais">
          <div className="jn-wrap">
            <div className="jn-trust-grid">
              <div className="jn-trust-item">
                <strong>+<span>200</span></strong>
                <small>Clientes atendidos</small>
              </div>
              <div className="jn-trust-item">
                <strong><em>5,0</em></strong>
                <small>Nota Google verificado</small>
              </div>
              <div className="jn-trust-item">
                <strong><span>4x</span></strong>
                <small>Melhor advogado · SE</small>
              </div>
              <div className="jn-trust-item">
                <strong>+<cite>5</cite> anos</strong>
                <small>De experiência criminal</small>
              </div>
            </div>
          </div>
        </div>

        {/* ── SERVIÇOS ── */}
        <section id="servicos" className="jn-section dark" aria-label="Serviços">
          <div className="jn-wrap">
            <div className="jn-section-head center jn-reveal">
              <span className="jn-label">Defesa Criminal</span>
              <h2 className="jn-h2">Áreas de Atuação</h2>
              <hr className="jn-divider" style={{ margin: "16px auto 0" }} />
              <p className="jn-lead">
                Defesa criminal estratégica com excelência e compromisso. Cada caso é único —
                atuamos com urgência e técnica em todas as frentes do direito penal.
              </p>
            </div>
            <div className="jn-services-grid">
              {services.map((s, i) => (
                <div className={`jn-service-card jn-reveal jn-d${i + 1}`} key={s.title}>
                  <div className="jn-service-top">
                    <div className="jn-service-icon"><s.icon size={22} /></div>
                    <span className="jn-service-eyebrow">{s.eyebrow}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="jn-service-points">
                    {s.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <a
                    className="jn-service-link"
                    href={whatsApp(`Olá, Dr. Juraci! Preciso de orientação sobre ${s.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Saber mais sobre ${s.title}`}
                  >
                    Saber mais <ChevronRight size={14} />
                  </a>
                </div>
              ))}
            </div>
            <p className="jn-service-note">Atendimento sigiloso e análise individual de cada caso</p>
            <div style={{ textAlign: "center", marginTop: 40 }} className="jn-reveal">
              <a className="jn-btn-red" href={whatsApp("Olá, Dr. Juraci! Gostaria de saber mais sobre os serviços.")} target="_blank" rel="noreferrer">
                <WaIcon size={17} /> Falar com Especialista
              </a>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section id="sobre" className="jn-section alt" aria-label="Sobre o Dr. Juraci">
          <div className="jn-wrap jn-two-col jn-reveal">
            <div className="jn-about-photo-wrap">
              <div className="jn-about-accent" />
              <Image
                className="jn-about-photo"
                src="/images/juracinunes/profile_pic-clean.png"
                alt="Dr. Juraci Nunes em ambiente profissional"
                width={1086}
                height={1448}
                sizes="(min-width: 900px) 480px, calc(100vw - 40px)"
                quality={90}
              />
              <div className="jn-about-badge">
                <strong>Dr. Juraci Nunes</strong>
                <span>Presidente · ABRADAA</span>
              </div>
            </div>

            <div className="jn-about-copy">
              <span className="jn-label">Sobre o Advogado</span>
              <h2 className="jn-h2">
                Experiência profissional, atuação estratégica e compromisso
                com uma defesa técnica.
              </h2>
              <hr className="jn-divider" />
              <p style={{ marginTop: 24 }}>
                Com mais de 5 anos de atuação no direito criminal, o Dr. Juraci
                Nunes construiu uma trajetória reconhecida em Sergipe — eleito
                melhor advogado criminalista do estado por 4 anos consecutivos
                pelo jornal Imprensa 24h.
              </p>
              <p>
                Atende Aracaju e todo o estado de Sergipe com foco em defesa
                técnica, comunicação clara e sigilo em cada etapa do processo.
              </p>
              <div className="jn-oab-tag">
                <ShieldCheck size={14} />
                OAB/SE · Atendimento sigiloso e 100% online
              </div>
              <div className="jn-credentials" aria-label="Credenciais">
                <div className="jn-cred-card">
                  <Award size={18} className="gold" />
                  <strong>4x Melhor Advogado · SE</strong>
                  <span>Prêmio Imprensa 24h — 4 anos consecutivos</span>
                </div>
                <div className="jn-cred-card">
                  <Users size={18} className="red" />
                  <strong>Presidente ABRADAA</strong>
                  <span>Associação Brasileira de Advogados</span>
                </div>
                <div className="jn-cred-card">
                  <Star size={18} className="gold" />
                  <strong>5,0 no Google</strong>
                  <span>Mais de 200 clientes atendidos</span>
                </div>
                <div className="jn-cred-card">
                  <Scale size={18} className="red" />
                  <strong>+5 anos de experiência</strong>
                  <span>Atuação criminal em Sergipe</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section id="processo" className="jn-section dark2" aria-label="Como funciona">
          <div className="jn-wrap">
            <div className="jn-section-head center jn-reveal">
              <span className="jn-label">Processo</span>
              <h2 className="jn-h2">Atendimento sigiloso e 100% online.</h2>
              <hr className="jn-divider" style={{ margin: "16px auto 0" }} />
              <p className="jn-lead">
                Da primeira mensagem ao acompanhamento do caso, com
                objetividade, discrição e orientação clara.
              </p>
            </div>
            <div className="jn-steps-grid">
              {steps.map((step, i) => (
                <div className={`jn-step jn-reveal jn-d${i + 1}`} key={step.num}>
                  <div className="jn-step-left">
                    <span className="jn-step-num">{step.num}</span>
                    <div className="jn-step-icon"><step.icon size={18} /></div>
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="duvidas" className="jn-section" aria-label="Dúvidas frequentes">
          <div className="jn-wrap">
            <div className="jn-section-head center jn-reveal">
              <span className="jn-label">Dúvidas</span>
              <h2 className="jn-h2">Perguntas frequentes.</h2>
              <hr className="jn-divider" style={{ margin: "16px auto 0" }} />
              <p className="jn-lead">Tire suas dúvidas antes de entrar em contato.</p>
            </div>
            <div className="jn-faq-list jn-reveal" role="list">
              {faqs.map((faq, i) => (
                <div className="jn-faq-item" key={i} role="listitem">
                  <button
                    className={`jn-faq-btn${openFaq === i ? " open" : ""}`}
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <ChevronDown className="jn-faq-icon" size={18} />
                  </button>
                  {openFaq === i && <div className="jn-faq-body">{faq.a}</div>}
                </div>
              ))}
            </div>
            <a
              className="jn-faq-cta jn-reveal"
              href={whatsApp("Olá, Dr. Juraci! Tenho uma dúvida sobre meu caso.")}
              target="_blank"
              rel="noreferrer"
            >
              <WaIcon size={14} />
              Não encontrou sua dúvida? Fale diretamente
              <ChevronRight size={14} />
            </a>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section className="jn-section" aria-label="Depoimentos">
          <div className="jn-wrap">
            <div className="jn-section-head center jn-reveal">
              <span className="jn-label">Depoimentos</span>
              <h2 className="jn-h2">O que nossos clientes dizem.</h2>
              <hr className="jn-divider" style={{ margin: "16px auto 0" }} />
              <p className="jn-lead">
                Histórias reais de quem recuperou a liberdade com nossa defesa criminal.
              </p>
            </div>
            <div className="jn-testimonials-grid">
              {[
                {
                  initials: "MS",
                  name: "Maria Souza",
                  area: "Habeas Corpus",
                  text: "Meu filho foi preso injustamente. O Dr. Juraci atuou com rapidez e competência, conseguindo o habeas corpus em tempo recorde. Um profissional extremamente competente e humano.",
                },
                {
                  initials: "JP",
                  name: "José Pereira",
                  area: "Prisão Domiciliar",
                  text: "Minha esposa estava presa preventivamente. O Dr. Juraci conseguiu a prisão domiciliar humanitária em tempo recorde. Atendimento sigiloso e dedicado do início ao fim.",
                },
                {
                  initials: "AL",
                  name: "André Lima",
                  area: "Tráfico de Drogas",
                  text: "Fui acusado de tráfico de drogas, mas era apenas usuário. O Dr. Juraci estudou o caso com seriedade e conseguiu a desclassificação para uso próprio. Gratidão enorme.",
                },
                {
                  initials: "RC",
                  name: "Rafael Costa",
                  area: "Prisão em Flagrante",
                  text: "Fui preso em flagrante e não sabia o que fazer. O Dr. Juraci assumiu o caso com calma e segurança, conseguiu minha liberdade provisória em poucas horas. Recomendo demais.",
                },
              ].map((t, idx) => (
                <div className="jn-testimonial-card jn-reveal" key={t.initials} style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="jn-testimonial-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="jn-testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="jn-testimonial-author">
                    <div className="jn-testimonial-avatar">{t.initials}</div>
                    <div className="jn-testimonial-info">
                      <strong>{t.name}</strong>
                      <span>{t.area}</span>
                    </div>
                    <span className="jn-testimonial-badge">✓ Verificado</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contato" className="jn-section jn-cta-section" aria-label="Contato">
          <div className="jn-wrap">
            <div className="jn-cta-inner jn-reveal">
              <span className="jn-label" style={{ color: "var(--jn-red3)" }}>Fale Agora</span>
              <h2 className="jn-h2" style={{ color: "var(--jn-white)" }}>
                Precisando de um Advogado Criminalista <em style={{ fontStyle: "italic", color: "var(--jn-red3)" }}>Agora?</em>
              </h2>
              <hr className="jn-divider" style={{ margin: "16px auto 0", background: "var(--jn-red3)" }} />
              <p className="jn-lead" style={{ color: "rgba(255,255,255,0.6)" }}>
                Atendimento sigiloso, urgente e 100% online. Aracaju e todo o estado de Sergipe.
                Entre em contato para apresentar sua situação e receber orientações sobre o atendimento.
              </p>
              <div className="jn-hero-actions">
                <a className="jn-btn-red" href={whatsApp()} target="_blank" rel="noreferrer" style={{ minHeight: 52 }}>
                  <WaIcon size={17} /> Falar com Especialista
                </a>
              </div>
              <div className="jn-cta-location">
                <span><Shield size={13} /> OAB/SE · Aracaju — Sergipe</span>
                <span>Atendimento em todo o estado de Sergipe</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="jn-footer">
          <div className="jn-wrap">
            <div className="jn-footer-body">
              <div className="jn-footer-brand">
                <div className="jn-footer-name">Dr. <span>Juraci Nunes</span></div>
                <p>Advocacia criminal em Aracaju e todo o estado de Sergipe, com atendimento sigiloso e comunicação clara.</p>
                <div className="jn-footer-tags">
                  {["Habeas Corpus", "Prisão Domiciliar", "Flagrante", "Tráfico", "Liberdade Urgente"].map((t) => (
                    <span className="jn-footer-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="jn-footer-col">
                <h4>Navegação</h4>
                {navItems.map((item) => (
                  <a key={item.href} href={item.href}>{item.label}</a>
                ))}
                <a href={whatsApp()} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
              </div>

              <div className="jn-footer-col">
                <h4>Contato</h4>
                <div className="jn-footer-row">
                  <Phone size={13} />
                  <a href={whatsApp()} target="_blank" rel="noreferrer">(79) 9 9998-6028</a>
                </div>
                <div className="jn-footer-row">
                  <MessageCircle size={13} />
                  <a href="https://instagram.com/advogadojuraci" target="_blank" rel="noreferrer">@advogadojuraci</a>
                </div>
                <div className="jn-footer-row">
                  <ShieldCheck size={13} />
                  <span>OAB/SE · Aracaju — Sergipe</span>
                </div>
              </div>
            </div>

            <hr className="jn-footer-divider" />

            <div className="jn-footer-bottom">
              <span>© 2026 Dr. Juraci Nunes. Todos os direitos reservados.</span>
              <span>
                Desenvolvido por{" "}
                <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">LumaSites.com.br</a>
              </span>
            </div>
          </div>
        </footer>
      </main>

      {/* ── WA FLOAT ── */}
      <a
        className={`jn-wa-float${scrolled ? "" : " hidden"}`}
        href={whatsApp()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
      >
        <WaIcon size={26} />
      </a>

      </div>

    </>
  );
}
