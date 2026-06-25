"use client";

import { useEffect, useState } from "react";
import {
  Award,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Clock,
  FileText,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Verified,
} from "lucide-react";

const WA_NUMBER = "5579998571541";
const SITE_ATUAL = "https://tatianevgracasadv.com.br/";
const assets = {
  logo: "/images/tatianevgracas/logo-original.png",
  heroVideo: "/images/tatianevgracas/hero-background-lite.mp4",
  profile: "/images/tatianevgracas/hero-portrait-pro.webp",
  legacy: "/images/tatianevgracas/legacy-cover-crop.webp",
  team: "/images/tatianevgracas/equipe-crop.webp",
};
const whatsApp = (msg = "Olá, Dra. Tatiane! Gostaria de receber informações sobre atendimento jurídico.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const navItems = [
  { href: "#top",      label: "Início" },
  { href: "#areas",    label: "Áreas" },
  { href: "#sobre",    label: "Sobre" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#duvidas",  label: "Dúvidas" },
  { href: "#contato",  label: "Contato" },
];

const services = [
  {
    icon: Clock,
    eyebrow: "Direito Previdenciário",
    title: "Aposentadorias",
    desc: "Orientação e acompanhamento em pedidos de aposentadoria rural, híbrida, urbana e por tempo de contribuição, com avaliação técnica da documentação e do histórico contributivo.",
    points: [
      "Aposentadoria rural e híbrida",
      "Aposentadoria por tempo de contribuição",
      "Planejamento previdenciário personalizado",
    ],
  },
  {
    icon: Shield,
    eyebrow: "Direito Previdenciário",
    title: "Benefícios por Incapacidade",
    desc: "Atuação em pedidos de auxílio-doença e aposentadoria por invalidez, com análise de documentos médicos, perícias e medidas administrativas ou judiciais cabíveis.",
    points: [
      "Auxílio-doença e auxílio-acidente",
      "Aposentadoria por invalidez",
      "Recursos contra indeferimentos do INSS",
    ],
  },
  {
    icon: HeartHandshake,
    eyebrow: "Direito Previdenciário",
    title: "BPC/LOAS",
    desc: "Orientação sobre Benefício de Prestação Continuada para idosos e pessoas com deficiência, com análise dos requisitos legais e da documentação necessária.",
    points: [
      "BPC para idosos a partir de 65 anos",
      "BPC para pessoas com deficiência",
      "Recursos administrativos e judiciais",
    ],
  },
  {
    icon: FileText,
    eyebrow: "Direito Previdenciário",
    title: "Revisão de Benefícios",
    desc: "Análise técnica de benefícios previdenciários já concedidos, com revisão do histórico contributivo e identificação de eventuais inconsistências de cálculo.",
    points: [
      "Revisão da vida toda",
      "Correção de salário-de-benefício",
      "Restituição de valores retroativos",
    ],
  },
  {
    icon: BookOpen,
    eyebrow: "Direito Previdenciário",
    title: "Salário-Maternidade",
    desc: "Orientação sobre salário-maternidade para seguradas urbanas e rurais, incluindo análise de negativas administrativas e caminhos jurídicos possíveis.",
    points: [
      "Salário-maternidade rural e urbano",
      "Recursos contra negativas do INSS",
      "Análise dos prazos legais aplicáveis",
    ],
  },
  {
    icon: Scale,
    eyebrow: "Direito Trabalhista",
    title: "Direito do Trabalho",
    desc: "Atuação técnica em demandas trabalhistas: reconhecimento de vínculo, verbas rescisórias, horas extras, acordos e outros temas relacionados à relação de trabalho.",
    points: [
      "Reclamações individuais e coletivas",
      "Verbas rescisórias e horas extras",
      "Reconhecimento de vínculo empregatício",
    ],
  },
];

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Contato Inicial",
    text: "Envie uma mensagem pelo WhatsApp descrevendo seu caso. A equipe faz a triagem inicial das informações com sigilo e responsabilidade profissional.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Análise do Caso",
    text: "Avaliamos sua situação, os documentos e o histórico no INSS para identificar os melhores caminhos jurídicos e as chances reais de êxito.",
  },
  {
    num: "03",
    icon: Award,
    title: "Estratégia Jurídica",
    text: "Após a análise, são apresentados os caminhos jurídicos cabíveis e as próximas etapas, com comunicação clara durante o acompanhamento.",
  },
];

const faqs = [
  {
    q: "Tenho direito ao BPC/LOAS? Como saber?",
    a: "O BPC/LOAS pode ser devido a pessoas com deficiência ou idosos (65 anos ou mais), observados os requisitos legais de renda e vulnerabilidade. A análise individual depende dos documentos e das circunstâncias do caso.",
  },
  {
    q: "Quando há indeferimento pelo INSS, quais caminhos podem existir?",
    a: "A depender do caso, pode haver recurso administrativo no INSS ou medida judicial. O prazo para recurso administrativo costuma ser de 30 dias após a notificação, mas a orientação adequada exige análise dos documentos.",
  },
  {
    q: "Como funciona a aposentadoria rural?",
    a: "Trabalhadores rurais que comprovem pelo menos 15 anos de atividade no campo podem se aposentar mais cedo: 55 anos para mulheres e 60 anos para homens. A comprovação pode ser feita com documentos variados (declarações, contratos, testemunhos). Podemos ajudar nessa documentação.",
  },
  {
    q: "O que é revisão de benefício e quando vale a pena?",
    a: "É a correção do valor de um benefício que foi calculado com renda inferior ao correto. Pode gerar efeitos retroativos (pagamento dos valores que você deixou de receber). Vale a pena sempre que o benefício tenha sido concedido há pouco mais de 10 anos ou com possíveis erros no cálculo.",
  },
  {
    q: "O atendimento é presencial ou online?",
    a: "100% online em todo o Brasil, com a mesma eficiência de um atendimento presencial. Documentos, reuniões e acompanhamentos são feitos à distância, com segurança e praticidade. Você resolve tudo do conforto da sua casa.",
  },
  {
    q: "Qual o prazo de análise de um benefício no INSS?",
    a: "Os prazos podem variar conforme o tipo de requerimento, a documentação apresentada, a necessidade de perícia e a via administrativa ou judicial. Cada situação deve ser avaliada individualmente.",
  },
  {
    q: "Meu salário-maternidade foi negado. O que fazer?",
    a: "É possível avaliar os motivos da negativa e verificar se há documentos ou medidas cabíveis na via administrativa ou judicial, especialmente em casos de seguradas rurais.",
  },
];

const testimonials = [
  {
    initial: "M",
    name: "Maria S.",
    benefit: "Atendimento previdenciário",
    text: "Recebi orientação clara sobre os documentos necessários e sobre as etapas do atendimento. A equipe explicou cada ponto com paciência e responsabilidade.",
  },
  {
    initial: "J",
    name: "João B.",
    benefit: "Orientação trabalhista",
    text: "O atendimento online foi organizado e objetivo. Pude entender melhor quais informações eram relevantes antes de qualquer encaminhamento.",
  },
  {
    initial: "R",
    name: "Rosane F.",
    benefit: "Atendimento online",
    text: "Mesmo à distância, o contato foi cuidadoso e transparente. A comunicação ajudou nossa família a organizar a documentação com mais segurança.",
  },
];

// ── Ícone WhatsApp ────────────────────────────────────────────────────────────
const WaIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const MenuIcon = ({ open = false }: { open?: boolean }) => (
  <span className={`tv-menu-glyph${open ? " open" : ""}`} aria-hidden="true">
    <span className="tv-mg-top" />
    <span className="tv-mg-bot" />
    <span className="tv-mg-dot" />
  </span>
);

// ── CSS ────────────────────────────────────────────────────────────────────────
const css = `
html { scroll-behavior: smooth; }
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; }

:root {
  --tv-bar: 48px;
  --tv-nav: 72px;

  /* Charcoal escuro — base da marca */
  --tv-dark:  #0D1117;
  --tv-dark2: #131920;

  /* Âmbar/Dourado — cor de destaque */
  --tv-gold:   #C8902A;
  --tv-gold2:  #DFA83A;
  --tv-gold3:  #F0C060;
  --tv-gold-bg: rgba(200,144,42,0.10);
  --tv-gold-br: rgba(200,144,42,0.22);

  /* Neutros */
  --tv-white:  #FAFAFA;
  --tv-cream:  #F5F0EA;
  --tv-warm:   #EEE8DF;
  --tv-ink:    #1C1812;
  --tv-muted:  #6B6560;
  --tv-line-l: rgba(28,24,18,0.10);
}

.tv-page {
  font-family: var(--font-tv-body), system-ui, sans-serif;
  color: var(--tv-ink);
  background: var(--tv-cream);
  overflow-x: clip;
  min-height: 100vh;
}
.tv-scroll-progress {
  position: fixed;
  left: 0;
  right: 0;
  top: calc(var(--tv-bar) + var(--tv-nav) - 2px);
  z-index: 1003;
  height: 2px;
  background: linear-gradient(90deg, var(--tv-gold), var(--tv-gold3));
  box-shadow: 0 0 18px rgba(223,168,58,0.55);
  transform-origin: left center;
  pointer-events: none;
}

#conceito {
  padding-top: calc(var(--tv-bar) + var(--tv-nav));
  font-family: var(--font-tv-body), system-ui, sans-serif;
}
#conceito h1,
#conceito h2,
#conceito h3,
#conceito h4 {
  font-family: var(--font-tv-display), Georgia, serif;
}

/* ── PREVIEW BAR ─────────────────────────────── */
.tv-preview {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1001;
  min-height: var(--tv-bar);
  padding: 6px max(16px, env(safe-area-inset-right)) 6px max(16px, env(safe-area-inset-left));
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
  background: var(--tv-dark);
  border-bottom: 1px solid var(--tv-gold-br);
}
.tv-preview-spacer {
  /* coluna esquerda — garante que o centro fique centralizado mesmo com botão de voltar do browser */
  min-width: 0;
}
.tv-preview-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  text-align: center;
}
.tv-preview-old-site {
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 3px;
  color: rgba(255,255,255,0.50);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: border-color .15s, color .15s;
}
.tv-preview-old-site:hover { border-color: rgba(255,255,255,0.32); color: rgba(255,255,255,0.82); }
.tv-preview-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tv-white);
}
.tv-preview-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--tv-gold2);
  animation: tv-pulse-dot 1.6s ease-out infinite;
}
@keyframes tv-pulse-dot {
  0%   { box-shadow: 0 0 0 0 rgba(223,168,58,.9); }
  70%  { box-shadow: 0 0 0 10px rgba(223,168,58,0); }
  100% { box-shadow: 0 0 0 0 rgba(223,168,58,0); }
}
.tv-preview-sub {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,0.40);
}
.tv-preview-sub a {
  color: var(--tv-gold2);
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* ── NAV ─────────────────────────────────────── */
.tv-nav {
  position: fixed;
  left: 0; right: 0;
  top: var(--tv-bar);
  z-index: 1000;
  height: var(--tv-nav);
  background: linear-gradient(180deg, rgba(13,17,23,0.72), rgba(13,17,23,0.58));
  border-bottom: 1px solid rgba(200,144,42,0.26);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
  backdrop-filter: blur(22px) saturate(145%);
  -webkit-backdrop-filter: blur(22px) saturate(145%);
  transition: background .25s, box-shadow .25s, border-color .25s;
  font-family: var(--font-tv-body), system-ui, sans-serif;
}
.tv-nav.scrolled {
  background: linear-gradient(180deg, rgba(10,13,18,0.84), rgba(10,13,18,0.70));
  border-color: rgba(200,144,42,0.34);
  box-shadow: 0 12px 40px rgba(0,0,0,.36), inset 0 1px 0 rgba(255,255,255,0.05);
}
.tv-nav-inner {
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.tv-brand {
  display: inline-flex;
  align-items: center;
  min-width: 0;
}
.tv-brand-logo {
  width: clamp(178px, 18vw, 260px);
  height: auto;
  max-height: 58px;
  object-fit: contain;
  object-position: left center;
}
.tv-links {
  display: none;
  align-items: center;
  gap: 18px;
}
.tv-links a {
  position: relative;
  color: rgba(255,255,255,0.48);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color .15s;
}
.tv-links a:hover,
.tv-links a.active { color: var(--tv-white); }
.tv-links a:not(.tv-nav-cta)::after {
  content: "";
  position: absolute;
  bottom: -8px; left: 0; right: 0;
  height: 1px;
  background: var(--tv-gold);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .2s;
}
.tv-links a.active::after,
.tv-links a:hover::after { transform: scaleX(1); }
.tv-nav-cta {
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  border-radius: 3px;
  background: var(--tv-gold);
  color: #0D1117 !important;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 6px 22px rgba(200,144,42,0.32);
  transition: background .15s, box-shadow .15s;
}
.tv-nav-cta:hover {
  background: var(--tv-gold2);
  box-shadow: 0 8px 28px rgba(200,144,42,0.44);
}
.tv-menu-btn {
  width: 44px; height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--tv-gold-br);
  border-radius: 3px;
  background: transparent;
  color: var(--tv-gold2);
  transition: background .2s;
}
.tv-menu-btn:hover { background: var(--tv-gold-bg); }
.tv-menu-glyph {
  position: relative;
  width: 22px; height: 18px;
  display: block;
}
.tv-mg-top, .tv-mg-bot {
  position: absolute;
  right: 0; height: 1.5px;
  border-radius: 999px;
  background: currentColor;
  transition: top .28s cubic-bezier(.22,.8,.28,1), width .28s cubic-bezier(.22,.8,.28,1), transform .28s cubic-bezier(.22,.8,.28,1);
}
.tv-mg-top { top: 5px; width: 22px; }
.tv-mg-bot { top: 13px; width: 15px; }
.tv-mg-dot {
  position: absolute;
  left: 0; bottom: 3px;
  width: 3px; height: 3px;
  border-radius: 50%;
  background: var(--tv-gold2);
  transition: opacity .18s, transform .28s;
}
.tv-menu-glyph.open .tv-mg-top { top: 9px; width: 22px; transform: rotate(42deg); }
.tv-menu-glyph.open .tv-mg-bot { top: 9px; width: 22px; transform: rotate(-42deg); }
.tv-menu-glyph.open .tv-mg-dot { opacity: 0; transform: scale(0); }

/* ── MOBILE MENU ─────────────────────────────── */
.tv-mobile {
  position: fixed;
  inset: calc(var(--tv-bar) + var(--tv-nav)) 0 0;
  z-index: 999;
  overflow: hidden auto;
  background: linear-gradient(160deg, #10161F 0%, #0D1117 60%, #080B10 100%);
  color: var(--tv-white);
  animation: tv-mob-in .34s cubic-bezier(.22,.8,.28,1) both;
}
@keyframes tv-mob-in {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: none; }
}
.tv-mobile-inner {
  width: min(calc(100% - 40px), 520px);
  min-height: 100%;
  margin: 0 auto;
  padding: 36px 0 32px;
  display: flex;
  flex-direction: column;
}
.tv-mob-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  color: var(--tv-gold2);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}
.tv-mob-eyebrow::before {
  content: "";
  width: 28px; height: 1px;
  background: currentColor;
}
.tv-mob-link {
  position: relative;
  min-height: 58px;
  display: grid;
  grid-template-columns: 30px 1fr 24px;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  color: var(--tv-white);
}
.tv-mob-link:first-of-type { border-top: 1px solid rgba(255,255,255,0.06); }
.tv-mob-link-idx { color: var(--tv-gold2); font-size: 9px; font-weight: 700; letter-spacing: 0.12em; }
.tv-mob-link-label {
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: clamp(17px, 5vw, 22px);
  font-weight: 600;
}
.tv-mob-link svg { color: rgba(200,144,42,.5); }
.tv-mob-cta {
  min-height: 54px;
  margin-top: 24px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background: var(--tv-gold);
  color: #0D1117;
  border-radius: 2px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 8px 24px rgba(200,144,42,0.35);
}
.tv-mob-meta {
  margin-top: auto;
  padding-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.tv-mob-meta-label {
  display: block;
  margin-bottom: 6px;
  color: rgba(255,255,255,0.28);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.tv-mob-meta strong {
  display: block;
  color: rgba(255,255,255,0.65);
  font-size: 12px;
  line-height: 1.7;
}
.tv-oab-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid var(--tv-gold-br);
  color: var(--tv-gold2);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* ── WRAP ────────────────────────────────────── */
.tv-wrap { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }

/* ── HERO ────────────────────────────────────── */
.tv-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--tv-dark);
}
.tv-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 65% at 76% 40%, rgba(20,26,36,0.88) 0%, transparent 58%),
    radial-gradient(ellipse 32% 45% at 4% 88%, rgba(200,144,42,0.06) 0%, transparent 55%),
    radial-gradient(ellipse 28% 42% at 96% 8%, rgba(200,144,42,0.05) 0%, transparent 52%),
    linear-gradient(150deg, #101828 0%, #0D1117 52%, #080B10 100%);
}
.tv-hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  filter: saturate(0.82) contrast(1.04);
}
.tv-hero-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(8,11,16,0.95) 0%, rgba(8,11,16,0.74) 44%, rgba(8,11,16,0.55) 100%),
    radial-gradient(ellipse 48% 58% at 78% 42%, rgba(200,144,42,0.18), transparent 62%);
  pointer-events: none;
}
.tv-hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.28;
  pointer-events: none;
}
.tv-hero-grid {
  position: relative;
  z-index: 1;
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  padding: 64px 0 72px;
  display: grid;
  align-items: center;
  gap: 40px;
}
.tv-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: var(--tv-gold2);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}
.tv-kicker::before {
  content: "";
  width: 26px; height: 1px;
  background: var(--tv-gold);
}
.tv-hero h1 {
  margin: 0;
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: clamp(32px, 4.8vw, 62px);
  line-height: 1.08;
  font-weight: 700;
  color: var(--tv-white);
  letter-spacing: -0.01em;
}
.tv-hero h1 em {
  font-style: italic;
  color: var(--tv-gold2);
}
.tv-hero-sub {
  max-width: 520px;
  margin: 24px 0 0;
  color: rgba(255,255,255,0.55);
  font-size: 15px;
  line-height: 1.85;
}
.tv-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}
.tv-btn-gold {
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 28px;
  border: 0;
  border-radius: 3px;
  background: var(--tv-gold);
  color: #0D1117;
  font-family: var(--font-tv-body), system-ui, sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 14px 36px rgba(200,144,42,0.38);
  transition: background .15s, box-shadow .15s, transform .15s;
}
.tv-btn-gold:hover {
  background: var(--tv-gold2);
  box-shadow: 0 18px 44px rgba(200,144,42,0.5);
  transform: translateY(-1px);
}
.tv-btn-outline {
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 24px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 3px;
  background: transparent;
  color: rgba(255,255,255,0.68);
  font-family: var(--font-tv-body), system-ui, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: border-color .15s, color .15s;
}
.tv-btn-outline:hover {
  border-color: var(--tv-gold-br);
  color: var(--tv-gold3);
}

/* Hero proof pills */
.tv-proof-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
}
.tv-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border: 1px solid var(--tv-gold-br);
  border-radius: 999px;
  background: var(--tv-gold-bg);
  color: rgba(255,255,255,0.68);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.tv-pill svg { color: var(--tv-gold2); flex: 0 0 auto; }

/* Hero media */
.tv-hero-photo-col {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.tv-hero-photo-wrap {
  position: relative;
  max-width: 500px;
  width: 100%;
  animation: tv-photo-float 7s ease-in-out 1.2s infinite;
}
.tv-hero-photo-frame {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--tv-gold-br);
  box-shadow: 0 32px 80px rgba(0,0,0,0.55);
  background: #0F1319;
}
.tv-hero-photo-frame img,
.tv-about-photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .75s cubic-bezier(.22,.8,.28,1), filter .75s cubic-bezier(.22,.8,.28,1);
}
.tv-hero-photo-frame img {
  object-position: center;
}
.tv-hero-photo-frame:hover img,
.tv-about-photo-frame:hover img {
  transform: scale(1.045);
  filter: saturate(1.04) contrast(1.03);
}
.tv-hero-photo-accent {
  position: absolute;
  top: -14px; right: -14px; bottom: 14px; left: 14px;
  border: 1px solid var(--tv-gold-br);
  border-radius: 3px;
  pointer-events: none;
}
.tv-hero-badge {
  position: absolute;
  bottom: -18px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 14px 18px;
  background: rgba(13,17,23,0.97);
  border: 1px solid var(--tv-gold-br);
  border-left: 3px solid var(--tv-gold);
  border-radius: 3px;
  backdrop-filter: blur(10px);
}
.tv-hero-badge strong {
  color: var(--tv-white);
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: 14px;
  font-weight: 700;
}
.tv-hero-badge span {
  color: var(--tv-gold2);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

/* ── TRUST BAR ───────────────────────────────── */
.tv-trust {
  background: var(--tv-dark2);
  border-bottom: 1px solid var(--tv-gold-br);
  padding: 28px 0;
}
.tv-trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
}
.tv-trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
  padding: 16px 12px;
}
.tv-trust-item strong {
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: clamp(22px, 3.6vw, 32px);
  font-weight: 700;
  color: var(--tv-white);
  line-height: 1;
}
.tv-trust-item strong span { color: var(--tv-gold2); }
.tv-trust-item small {
  color: rgba(255,255,255,0.36);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* ── LEGACY STRIP ────────────────────────────── */
.tv-legacy-strip {
  background: linear-gradient(90deg, #0D1117 0%, #141A24 48%, #0D1117 100%);
  border-bottom: 1px solid var(--tv-gold-br);
  padding: 20px 0;
}
.tv-legacy-inner {
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px 32px;
  text-align: center;
}
.tv-legacy-label {
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.28);
  white-space: nowrap;
}
.tv-legacy-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border: 1px solid var(--tv-gold-br);
  border-radius: 3px;
  background: var(--tv-gold-bg);
  transition: transform .22s ease, border-color .22s ease, background .22s ease;
}
.tv-legacy-badge:hover {
  transform: translateY(-2px);
  border-color: rgba(240,192,96,0.45);
  background: rgba(200,144,42,0.15);
}
.tv-legacy-thumb {
  width: 54px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid rgba(240,192,96,0.34);
  box-shadow: 0 10px 26px rgba(0,0,0,0.28);
  transition: transform .35s ease;
}
.tv-legacy-badge:hover .tv-legacy-thumb { transform: rotate(-1.5deg) scale(1.05); }
.tv-legacy-badge-text strong {
  display: block;
  color: var(--tv-gold3);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.06em;
}
.tv-legacy-badge-text span {
  display: block;
  color: rgba(255,255,255,0.45);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.tv-legacy-quote {
  max-width: 480px;
  color: rgba(255,255,255,0.42);
  font-size: 12px;
  font-style: italic;
  line-height: 1.7;
}
.tv-legacy-quote em { color: var(--tv-gold3); font-style: normal; font-weight: 600; }

/* ── SECTIONS ────────────────────────────────── */
.tv-section {
  position: relative;
  isolation: isolate;
  padding: 96px 0;
  overflow: hidden;
}
.tv-section > .tv-wrap {
  position: relative;
  z-index: 1;
}
.tv-section::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  z-index: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200,144,42,0.32), transparent);
  pointer-events: none;
}
.tv-section.dark::after,
.tv-section.dark2::after,
.tv-cta-section::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    linear-gradient(115deg, transparent 0 42%, rgba(255,255,255,0.035) 42% 43%, transparent 43% 100%);
  opacity: .45;
  pointer-events: none;
}
.tv-page section[id] {
  scroll-margin-top: calc(var(--tv-bar) + var(--tv-nav) + 16px);
}
.tv-section.alt   { background: var(--tv-warm); }
.tv-section.dark  { background: var(--tv-dark); color: var(--tv-white); }
.tv-section.dark2 { background: var(--tv-dark2); color: var(--tv-white); }
.tv-section-head  { max-width: 700px; margin-bottom: 48px; }
.tv-section-head.center { text-align: center; margin-left: auto; margin-right: auto; }

.tv-label {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--tv-gold);
}
.tv-section.dark  .tv-label,
.tv-section.dark2 .tv-label { color: var(--tv-gold2); }

.tv-h2 {
  margin: 0;
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: clamp(26px, 3.4vw, 44px);
  font-weight: 700;
  line-height: 1.1;
  color: var(--tv-ink);
}
.tv-section.dark  .tv-h2,
.tv-section.dark2 .tv-h2 { color: var(--tv-white); }

.tv-lead {
  margin: 16px 0 0;
  font-size: 15px;
  line-height: 1.85;
  color: var(--tv-muted);
}
.tv-section.dark  .tv-lead,
.tv-section.dark2 .tv-lead { color: rgba(255,255,255,0.52); }

.tv-divider {
  width: 48px; height: 2px;
  background: var(--tv-gold);
  margin: 16px 0 0;
  border: 0;
  transform-origin: left center;
}
.tv-section.dark  .tv-divider,
.tv-section.dark2 .tv-divider { background: var(--tv-gold2); }

/* ── SERVICES ────────────────────────────────── */
.tv-services-grid {
  display: grid;
  gap: 18px;
  counter-reset: service;
}
.tv-service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 26px;
  overflow: hidden;
  border: 1px solid var(--tv-gold-br);
  border-radius: 14px;
  background: linear-gradient(145deg, rgba(20,26,36,0.96), rgba(13,17,23,0.99));
  box-shadow: 0 18px 45px rgba(0,0,0,0.14);
  transition: border-color .25s, box-shadow .25s, transform .25s, background .25s;
  counter-increment: service;
}
.tv-service-card::before {
  content: "";
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--tv-gold), transparent 68%);
  opacity: .75;
}
.tv-service-card::after {
  content: "0" counter(service);
  position: absolute;
  top: 22px; right: 24px;
  color: rgba(200,144,42,0.16);
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
}
.tv-service-card:hover {
  border-color: rgba(200,144,42,0.48);
  box-shadow: 0 24px 60px rgba(0,0,0,0.24);
  transform: translateY(-7px);
  background: linear-gradient(145deg, rgba(23,31,43,0.98), rgba(13,17,23,0.99));
}
.tv-service-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.tv-service-icon {
  width: 48px; height: 48px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(200,144,42,0.2), rgba(200,144,42,0.06));
  color: var(--tv-gold2);
  border: 1px solid var(--tv-gold-br);
  transition: background .22s, border-color .22s, transform .22s;
}
.tv-service-card:hover .tv-service-icon {
  background: rgba(200,144,42,0.22);
  border-color: rgba(200,144,42,0.5);
  transform: rotate(-3deg) scale(1.04);
}
.tv-service-eyebrow {
  display: inline-flex;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--tv-gold-bg);
  color: var(--tv-gold3);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  line-height: 1;
  text-transform: uppercase;
}
.tv-service-card h3 {
  max-width: 260px;
  margin: 0 0 12px;
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: clamp(20px, 2vw, 24px);
  font-weight: 700;
  line-height: 1.15;
  color: var(--tv-white);
}
.tv-service-card p {
  margin: 0 0 20px;
  color: rgba(255,255,255,0.60);
  font-size: 13px;
  line-height: 1.7;
}
.tv-service-points {
  display: grid;
  gap: 9px;
  margin: 0 0 22px;
  padding: 18px 0 0;
  border-top: 1px solid rgba(255,255,255,0.07);
  list-style: none;
}
.tv-service-points li {
  position: relative;
  padding-left: 18px;
  color: rgba(255,255,255,0.52);
  font-size: 12px;
  line-height: 1.45;
}
.tv-service-points li::before {
  content: "";
  position: absolute;
  top: .55em; left: 1px;
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--tv-gold);
  box-shadow: 0 0 0 4px rgba(200,144,42,0.08);
  transition: transform .2s ease, box-shadow .2s ease;
}
.tv-service-card:hover .tv-service-points li::before {
  transform: scale(1.18);
  box-shadow: 0 0 0 6px rgba(200,144,42,0.12);
}
.tv-service-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  color: var(--tv-gold2);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .04em;
}
.tv-service-link svg { transition: transform .2s; }
.tv-service-link:hover svg { transform: translateX(3px); }

/* ── ABOUT ───────────────────────────────────── */
.tv-two-col {
  display: grid;
  gap: 56px;
  align-items: center;
}
.tv-about-photo-wrap {
  position: relative;
  max-width: 500px;
}
.tv-about-photo-frame {
  width: 100%;
  aspect-ratio: 3 / 4;
  background: linear-gradient(160deg, #1A2230 0%, #0F1319 100%);
  border: 1px solid var(--tv-gold-br);
  border-radius: 3px;
  box-shadow: 0 24px 56px rgba(0,0,0,0.28);
  overflow: hidden;
}
.tv-about-photo-frame img {
  object-position: center top;
}
.tv-about-accent {
  position: absolute;
  top: -12px; left: -12px;
  right: 12px; bottom: 12px;
  border: 1px solid var(--tv-gold-br);
  border-radius: 3px;
  pointer-events: none;
}
.tv-about-badge {
  position: absolute;
  right: -18px;
  bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 18px;
  background: rgba(13,17,23,0.97);
  border: 1px solid var(--tv-gold-br);
  border-left: 3px solid var(--tv-gold);
  border-radius: 3px;
}
.tv-about-badge strong {
  color: var(--tv-white);
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: 14px;
  font-weight: 700;
}
.tv-about-badge span {
  color: var(--tv-gold2);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.tv-about-copy p {
  margin: 0 0 16px;
  color: var(--tv-muted);
  font-size: 15px;
  line-height: 1.9;
}
.tv-about-copy p:last-child { margin-bottom: 0; }
.tv-oab-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  padding: 10px 16px;
  border: 1px solid var(--tv-gold-br);
  border-radius: 3px;
  background: var(--tv-gold-bg);
  color: var(--tv-gold);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.tv-credentials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 28px;
}
.tv-cred-card {
  padding: 16px;
  border: 1px solid var(--tv-line-l);
  border-radius: 3px;
  background: rgba(255,255,255,0.6);
  transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
}
.tv-cred-card:hover {
  transform: translateY(-4px);
  border-color: var(--tv-gold-br);
  box-shadow: 0 14px 28px rgba(28,24,18,0.08);
}
.tv-cred-card svg { margin-bottom: 8px; color: var(--tv-gold); }
.tv-cred-card strong {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: var(--tv-ink);
  line-height: 1.3;
}
.tv-cred-card span {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  color: var(--tv-muted);
  line-height: 1.5;
}

/* ── STEPS ───────────────────────────────────── */
.tv-steps-grid {
  display: grid;
  gap: 16px;
  margin-top: 40px;
}
.tv-step {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: start;
  padding: 28px 24px;
  border: 1px solid var(--tv-gold-br);
  border-radius: 3px;
  background: rgba(20,26,36,0.5);
  transition: border-color .2s, background .2s, transform .2s;
}
.tv-step:hover {
  border-color: rgba(200,144,42,0.4);
  background: rgba(20,26,36,0.75);
  transform: translateY(-5px);
}
.tv-step-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.tv-step-num {
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: 30px;
  font-weight: 700;
  color: rgba(200,144,42,0.22);
  line-height: 1;
}
.tv-step-icon {
  width: 40px; height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--tv-gold-bg);
  color: var(--tv-gold2);
  border: 1px solid var(--tv-gold-br);
  transition: transform .22s ease, box-shadow .22s ease;
}
.tv-step:hover .tv-step-icon {
  transform: scale(1.08);
  box-shadow: 0 0 0 8px rgba(200,144,42,0.08);
}
.tv-step h3 {
  margin: 0 0 10px;
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--tv-white);
}
.tv-step p {
  margin: 0;
  color: rgba(255,255,255,0.50);
  font-size: 14px;
  line-height: 1.8;
}

/* ── FAQ ─────────────────────────────────────── */
.tv-faq-list {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--tv-line-l);
  border-radius: 3px;
  background: rgba(255,255,255,0.7);
  box-shadow: 0 16px 40px rgba(28,24,18,0.07);
  overflow: hidden;
  margin-top: 40px;
}
.tv-faq-item { border-bottom: 1px solid var(--tv-line-l); }
.tv-faq-item:last-child { border-bottom: 0; }
.tv-faq-btn {
  width: 100%;
  text-align: left;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: transparent;
  border: 0;
  color: var(--tv-ink);
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  transition: background .15s;
}
.tv-faq-btn:hover { background: rgba(28,24,18,0.03); }
.tv-faq-btn.open  { color: var(--tv-gold); }
.tv-faq-icon { color: var(--tv-gold); flex: 0 0 auto; transition: transform .22s; }
.tv-faq-btn.open .tv-faq-icon { transform: rotate(180deg); }
.tv-faq-body {
  padding: 0 24px 22px;
  color: var(--tv-muted);
  font-size: 14px;
  line-height: 1.85;
  animation: tv-faq-open .24s cubic-bezier(.22,.8,.28,1) both;
}
.tv-faq-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 28px;
  color: var(--tv-gold);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: gap .15s;
}
.tv-faq-cta:hover { gap: 10px; }

/* ── TESTIMONIALS ────────────────────────────── */
.tv-testimonials-grid {
  display: grid;
  gap: 16px;
  margin-top: 40px;
}
.tv-testimonial-card {
  padding: 28px 24px;
  border: 1px solid var(--tv-line-l);
  border-radius: 3px;
  background: rgba(255,255,255,0.72);
  box-shadow: 0 8px 24px rgba(28,24,18,0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
}
.tv-testimonial-card:hover {
  transform: translateY(-5px);
  border-color: var(--tv-gold-br);
  box-shadow: 0 18px 42px rgba(28,24,18,0.10);
}
.tv-testimonial-stars {
  display: flex;
  gap: 3px;
  color: var(--tv-gold);
}
.tv-testimonial-text {
  margin: 0;
  color: var(--tv-muted);
  font-size: 14px;
  line-height: 1.85;
  font-style: italic;
}
.tv-testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--tv-line-l);
}
.tv-testimonial-avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: var(--tv-gold-bg);
  border: 1px solid var(--tv-gold-br);
  display: grid;
  place-items: center;
  font-family: var(--font-tv-display), Georgia, serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--tv-gold);
  flex-shrink: 0;
}
.tv-testimonial-info strong {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: var(--tv-ink);
}
.tv-testimonial-info span {
  font-size: 11px;
  color: var(--tv-muted);
  letter-spacing: 0.04em;
}
.tv-testimonial-badge {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--tv-gold-bg);
  border: 1px solid var(--tv-gold-br);
  color: var(--tv-gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  white-space: nowrap;
}

/* ── CTA SECTION ─────────────────────────────── */
.tv-cta-section {
  background: linear-gradient(135deg, #0D1117 0%, #131920 48%, #101828 100%);
  position: relative;
  overflow: hidden;
}
.tv-cta-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,144,42,0.08) 0%, transparent 65%);
  pointer-events: none;
}
.tv-cta-inner {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
.tv-cta-inner::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -32px;
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--tv-gold3), transparent);
  transform: translateX(-50%);
  animation: tv-line-breathe 3.6s ease-in-out infinite;
}
.tv-cta-inner .tv-hero-actions { justify-content: center; }
.tv-cta-location {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.07);
}
.tv-cta-location span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: rgba(255,255,255,0.38);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
}
.tv-cta-location span svg { color: var(--tv-gold); opacity: 0.7; }

/* ── FOOTER ──────────────────────────────────── */
.tv-footer {
  background: var(--tv-dark);
  color: rgba(255,255,255,0.38);
  font-size: 13px;
  border-top: 1px solid var(--tv-gold-br);
}
.tv-footer-body {
  padding: 60px 0 44px;
  display: grid;
  gap: 40px;
}
.tv-footer-brand p {
  margin: 12px 0 18px;
  font-size: 13px;
  max-width: 280px;
  line-height: 1.7;
}
.tv-footer-logo {
  width: min(280px, 100%);
  height: auto;
  margin-bottom: 16px;
}
.tv-footer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tv-footer-tag {
  padding: 4px 10px;
  border: 1px solid var(--tv-gold-br);
  color: rgba(255,255,255,0.38);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
}
.tv-footer-col h4 {
  margin: 0 0 14px;
  color: var(--tv-white);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.tv-footer-col a {
  display: block;
  color: rgba(255,255,255,0.50);
  padding: 3px 0;
  font-size: 13px;
  transition: color .15s;
}
.tv-footer-col a:hover { color: var(--tv-gold2); }
.tv-footer-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 0;
  font-size: 13px;
  color: rgba(255,255,255,0.50);
}
.tv-footer-row svg { flex: 0 0 auto; color: var(--tv-gold); opacity: 0.7; margin-top: 2px; }
.tv-footer-divider {
  border: 0;
  border-top: 1px solid rgba(255,255,255,0.05);
  margin: 0;
}
.tv-footer-bottom {
  padding: 18px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(255,255,255,0.28);
}
.tv-footer-bottom a {
  color: var(--tv-gold2);
  font-weight: 700;
  transition: color .15s;
}
.tv-footer-bottom a:hover { color: var(--tv-white); }

/* ── MAPA ────────────────────────────────────── */
.tv-map-section {
  background: var(--tv-dark2);
  border-top: 1px solid var(--tv-gold-br);
  border-bottom: 1px solid var(--tv-gold-br);
  padding: 72px 0 0;
  overflow: hidden;
}
.tv-map-grid {
  display: grid;
  gap: 40px;
  align-items: start;
  padding-bottom: 48px;
}
.tv-map-address-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.tv-map-detail {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  border: 1px solid var(--tv-gold-br);
  border-radius: 4px;
  background: rgba(200,144,42,0.05);
  transition: border-color .2s, background .2s;
}
.tv-map-detail:hover {
  border-color: rgba(200,144,42,0.38);
  background: rgba(200,144,42,0.09);
}
.tv-map-detail-icon {
  width: 38px; height: 38px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--tv-gold-bg);
  border: 1px solid var(--tv-gold-br);
  color: var(--tv-gold2);
}
.tv-map-detail-body strong {
  display: block;
  color: var(--tv-white);
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 4px;
}
.tv-map-detail-body span {
  color: rgba(255,255,255,0.46);
  font-size: 13px;
  line-height: 1.6;
}
.tv-map-open-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  color: var(--tv-gold2);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color .15s;
}
.tv-map-open-link:hover { color: var(--tv-gold3); }
.tv-map-frame-wrap {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--tv-gold-br);
  box-shadow: 0 24px 56px rgba(0,0,0,0.38);
  aspect-ratio: 16 / 9;
}
.tv-map-frame-wrap iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(0.18) contrast(1.06);
}
.tv-map-online-note {
  padding: 12px 20px;
  background: linear-gradient(90deg, var(--tv-gold-bg), transparent);
  border-top: 1px solid var(--tv-gold-br);
  color: rgba(255,255,255,0.48);
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.tv-map-online-note svg { color: var(--tv-gold2); flex: 0 0 auto; }
@media (min-width: 768px) {
  .tv-map-grid { grid-template-columns: 1fr 1.6fr; padding-bottom: 0; }
  .tv-map-frame-wrap { aspect-ratio: unset; height: 100%; min-height: 360px; }
}

/* ── WA FLOAT ────────────────────────────────── */
.tv-wa-float {
  position: fixed;
  z-index: 1002;
  right: max(20px, env(safe-area-inset-right));
  bottom: max(20px, env(safe-area-inset-bottom));
  width: 58px; height: 58px;
  border-radius: 50%;
  background: #25D366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 22px rgba(37,211,102,0.42);
  transition: transform .2s, opacity .2s;
  animation: tv-wa-pulse 2s ease-out infinite;
}
.tv-wa-float svg,
.tv-wa-float svg path {
  color: #fff;
  fill: #fff;
}
.tv-wa-float:hover { transform: scale(1.07); }
.tv-wa-float.hidden { opacity: 0; pointer-events: none; transform: translateY(12px) scale(0.88); animation: none; }
@keyframes tv-wa-pulse {
  0%   { box-shadow: 0 4px 22px rgba(37,211,102,.42), 0 0 0 0 rgba(37,211,102,.45); }
  70%  { box-shadow: 0 4px 22px rgba(37,211,102,.42), 0 0 0 16px rgba(37,211,102,0); }
  100% { box-shadow: 0 4px 22px rgba(37,211,102,.42), 0 0 0 0 rgba(37,211,102,0); }
}

/* ── REVEAL ──────────────────────────────────── */
.tv-reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .38s cubic-bezier(.22,.8,.28,1), transform .38s cubic-bezier(.22,.8,.28,1);
  will-change: opacity, transform;
}
.tv-reveal.is-visible { opacity: 1; transform: none; }
.tv-section-head.tv-reveal { transform: translateY(12px); }
.tv-service-card.tv-reveal:nth-child(3n+1) { transform: translate(-10px, 16px); }
.tv-service-card.tv-reveal:nth-child(3n+2) { transform: translateY(20px); }
.tv-service-card.tv-reveal:nth-child(3n)   { transform: translate(10px, 16px); }
.tv-service-card.tv-reveal.is-visible { transform: none; }
.tv-step.tv-reveal:nth-child(odd)  { transform: translateY(16px); }
.tv-step.tv-reveal:nth-child(even) { transform: translateY(16px); }
.tv-step.tv-reveal.is-visible { transform: none; }
.tv-testimonial-card.tv-reveal:nth-child(1) { transform: translateY(16px); }
.tv-testimonial-card.tv-reveal:nth-child(2) { transform: translateY(20px); }
.tv-testimonial-card.tv-reveal:nth-child(3) { transform: translateY(16px); }
.tv-testimonial-card.tv-reveal.is-visible { transform: none; }
.tv-divider {
  animation: tv-divider-draw .45s cubic-bezier(.22,.8,.28,1) both;
}
.tv-d1.is-visible { transition-delay: .03s; }
.tv-d2.is-visible { transition-delay: .07s; }
.tv-d3.is-visible { transition-delay: .11s; }
.tv-d4.is-visible { transition-delay: .15s; }
.tv-d5.is-visible { transition-delay: .19s; }
.tv-d6.is-visible { transition-delay: .23s; }

/* ── HERO ENTRANCE ───────────────────────────── */
@keyframes tv-hero-in {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}
@keyframes tv-hero-in-right {
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: none; }
}
@keyframes tv-photo-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes tv-faq-open {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: none; }
}
@keyframes tv-line-breathe {
  0%, 100% { opacity: .45; transform: translateX(-50%) scaleX(.72); }
  50% { opacity: 1; transform: translateX(-50%) scaleX(1); }
}
@keyframes tv-divider-draw {
  from { transform: scaleX(.2); opacity: .4; }
  to { transform: scaleX(1); opacity: 1; }
}
.tv-kicker        { animation: tv-hero-in .35s cubic-bezier(.22,.8,.28,1) .05s both; }
.tv-hero h1       { animation: tv-hero-in .4s  cubic-bezier(.22,.8,.28,1) .12s both; }
.tv-hero-sub      { animation: tv-hero-in .38s cubic-bezier(.22,.8,.28,1) .20s both; }
.tv-hero-actions  { animation: tv-hero-in .38s cubic-bezier(.22,.8,.28,1) .27s both; }
.tv-proof-pills   { animation: tv-hero-in .38s cubic-bezier(.22,.8,.28,1) .33s both; }
.tv-hero-photo-col { animation: tv-hero-in-right .42s cubic-bezier(.22,.8,.28,1) .15s both; }

/* Trust stagger */
.tv-trust-item {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity .32s cubic-bezier(.22,.8,.28,1), transform .32s cubic-bezier(.22,.8,.28,1);
}
.tv-trust-item.is-visible { opacity: 1; transform: none; }
.tv-trust-item strong span {
  display: inline-block;
  transition: transform .22s ease, color .22s ease;
}
.tv-trust-item:hover strong span {
  transform: translateY(-2px) scale(1.05);
  color: var(--tv-gold3);
}
.tv-trust-item:nth-child(1).is-visible { transition-delay: .03s; }
.tv-trust-item:nth-child(2).is-visible { transition-delay: .07s; }
.tv-trust-item:nth-child(3).is-visible { transition-delay: .11s; }
.tv-trust-item:nth-child(4).is-visible { transition-delay: .15s; }
.tv-trust-item:nth-child(5).is-visible { transition-delay: .19s; }

/* ── RESPONSIVE ──────────────────────────────── */
@media (min-width: 1100px) {
  .tv-links { display: flex; }
  .tv-menu-btn { display: none; }
  .tv-mobile { display: none; }
}
@media (min-width: 768px) {
  .tv-hero-grid { grid-template-columns: minmax(0,1fr) minmax(320px,0.75fr); }
  .tv-trust-grid { grid-template-columns: repeat(5, 1fr); }
  .tv-two-col { grid-template-columns: 1fr 1fr; }
  .tv-steps-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .tv-testimonials-grid { grid-template-columns: repeat(3, 1fr); }
  .tv-footer-body { grid-template-columns: 1.4fr 0.8fr 1fr; gap: 48px; }
  .tv-step:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 48px;
    left: calc(100% + 2px);
    width: 18px;
    height: 1px;
    background: linear-gradient(90deg, var(--tv-gold-br), transparent);
  }
}
@media (min-width: 600px) {
  .tv-services-grid { grid-template-columns: repeat(2, 1fr); }
  .tv-credentials { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .tv-services-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 767px) {
  :root { --tv-nav: 64px; }
  .tv-hero-grid { padding: 48px 0 52px; }
  .tv-hero-sub { font-size: 14px; }
  .tv-hero-actions a, .tv-hero-actions button { width: 100%; justify-content: center; }
  .tv-proof-pills { gap: 8px; }
  .tv-section { padding: 64px 0; }
  .tv-section-head { margin-bottom: 32px; }
  .tv-two-col { gap: 32px; }
  .tv-about-badge { right: 8px; bottom: 20px; }
  .tv-step { padding: 20px 16px; gap: 14px; }
  .tv-faq-btn { font-size: 14px; padding: 18px; }
  .tv-faq-body { padding: 0 18px 18px; }
  .tv-footer-body { padding: 44px 0 28px; gap: 28px; }
  .tv-legacy-quote { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .tv-preview-dot, .tv-wa-float { animation: none; }
  .tv-scroll-progress { display: none; }
  .tv-reveal, .tv-trust-item,
  .tv-kicker, .tv-hero h1, .tv-hero-sub,
  .tv-hero-actions, .tv-proof-pills, .tv-hero-photo-col,
  .tv-hero-photo-wrap, .tv-divider, .tv-cta-inner::before {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
`;

// ── Component ─────────────────────────────────────────────────────────────────
export default function TatianeVGracasPage() {
  const [scrolled, setScrolled]    = useState(false);
  const [menuOpen, setMenuOpen]    = useState(false);
  const [openFaq, setOpenFaq]      = useState<number>(0);
  const [activeSection, setActive] = useState("top");
  const [waVisible, setWaVisible]  = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setWaVisible(window.scrollY > 300);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0);
    };
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
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeResize = () => setMenuOpen(false);
    window.addEventListener("resize", closeResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("resize", closeResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    const targets = document.querySelectorAll(".tv-reveal, .tv-trust-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -16px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div id="conceito" className="tv-page">
        <div
          className="tv-scroll-progress"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />

        {/* ── PREVIEW BAR ── */}
        <div className="tv-preview">
          {/* coluna esquerda — empurra o centro para o meio mesmo com botão de voltar do browser */}
          <div className="tv-preview-spacer" aria-hidden="true" />

          <div className="tv-preview-center">
            <div className="tv-preview-title">
              <span className="tv-preview-dot" />
              Prévia Conceitual
            </div>
            <span className="tv-preview-sub">
              Proposta elaborada pela{" "}
              <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                LumaSites.com.br
              </a>
            </span>
          </div>

          <a
            className="tv-preview-old-site"
            href={SITE_ATUAL}
            target="_blank"
            rel="noreferrer"
          >
            Site atual ↗
          </a>
        </div>

        {/* ── NAV ── */}
        <nav className={`tv-nav${scrolled ? " scrolled" : ""}`}>
          <div className="tv-nav-inner">
            <a className="tv-brand" href="#top">
              <img
                className="tv-brand-logo"
                src={assets.logo}
                alt="Tatiane Vasconcelos das Graças Consultoria e Assessoria Jurídica"
              />
            </a>

            <div className="tv-links">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? "active" : undefined}
                >
                  {item.label}
                </a>
              ))}
              <a className="tv-nav-cta" href={whatsApp()} target="_blank" rel="noreferrer">
                <WaIcon size={14} /> Informações
              </a>
            </div>

            <button
              className="tv-menu-btn"
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </nav>

        {/* ── MOBILE MENU ── */}
        {menuOpen && (
          <div className="tv-mobile" role="dialog" aria-modal="true">
            <div className="tv-mobile-inner">
              <span className="tv-mob-eyebrow">Navegação</span>
              <div>
                {navItems.map((item, idx) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="tv-mob-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="tv-mob-link-idx">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="tv-mob-link-label">{item.label}</span>
                    <ChevronRight size={18} />
                  </a>
                ))}
              </div>
              <a
                className="tv-mob-cta"
                href={whatsApp()}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <WaIcon size={18} /> Informações sobre atendimento
                </span>
                <ChevronRight size={18} />
              </a>
              <div className="tv-mob-meta">
                <div>
                  <span className="tv-mob-meta-label">Contato</span>
                  <strong>(79) 99857-1541</strong>
                  <strong>tatianevgadv@gmail.com</strong>
                </div>
                <div className="tv-oab-badge">
                  <ShieldCheck size={14} />
                  OAB/SE 9.270 · 10+ anos de experiência
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── HERO ── */}
        <section id="top" className="tv-hero">
          <div className="tv-hero-bg" aria-hidden="true">
            <video
              className="tv-hero-video"
              src={assets.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
          <div className="tv-hero-grid">
            {/* Texto */}
            <div>
              <div className="tv-kicker">
                <ShieldCheck size={13} /> Advocacia Previdenciária e Trabalhista
              </div>

              <h1>
                Orientação jurídica previdenciária e trabalhista{" "}
                <em>com técnica, ética e clareza.</em>
              </h1>

              <p className="tv-hero-sub">
                Atendimento online em todo o Brasil, com análise responsável de documentos,
                requisitos legais e caminhos jurídicos cabíveis.
              </p>

              <div className="tv-hero-actions">
                <a
                  className="tv-btn-gold"
                  href={whatsApp()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WaIcon size={16} />
                  Solicitar informações sobre atendimento
                </a>
                <a className="tv-btn-outline" href="#areas">
                  Ver áreas de atuação
                </a>
              </div>

              <div className="tv-proof-pills">
                <span className="tv-pill">
                  <Award size={13} /> OAB/SE 9.270
                </span>
                <span className="tv-pill">
                  <Clock size={13} /> 10+ anos de experiência
                </span>
                <span className="tv-pill">
                  <Verified size={13} /> Conta verificada no Instagram
                </span>
                <span className="tv-pill">
                  <MapPin size={13} /> Atendimento nacional online
                </span>
              </div>
            </div>

            {/* Foto placeholder */}
            <div className="tv-hero-photo-col">
              <div className="tv-hero-photo-wrap">
                <div className="tv-hero-photo-frame">
                  <img
                    src={assets.profile}
                    alt="Dra. Tatiane Vasconcelos das Graças"
                  />
                </div>
                <div className="tv-hero-photo-accent" />
                <div className="tv-hero-badge">
                  <strong>Dra. Tatiane Vasconcelos</strong>
                  <span>Advogada Previdenciária · OAB/SE 9.270</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="tv-trust">
          <div className="tv-wrap">
            <div className="tv-trust-grid">
              {[
                { value: "10+", label: "Anos de experiência" },
                { value: "736", label: "Posts no Instagram" },
                { value: "5.7K", label: "Seguidores verificados" },
                { value: "100%", label: "Atendimento online" },
                { value: "2", label: "Especialidades jurídicas" },
              ].map((item) => (
                <div key={item.label} className="tv-trust-item">
                  <strong>
                    <span>{item.value}</span>
                  </strong>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── LEGACY STRIP ── */}
        <div className="tv-legacy-strip">
          <div className="tv-legacy-inner">
            <span className="tv-legacy-label">Na mídia</span>
            <div className="tv-legacy-badge">
              <img
                className="tv-legacy-thumb"
                src={assets.legacy}
                alt="Capa da Revista LEGACY com Dra. Tatiane Vasconcelos"
              />
              <div className="tv-legacy-badge-text">
                <strong>Revista LEGACY — Histórias que Inspiram</strong>
                <span>Capa · Vol. 04 · Junho 2026</span>
              </div>
            </div>
            <p className="tv-legacy-quote">
              <em>"Referência em Advocacia Previdenciária</em> e Defesa dos Direitos Sociais,
              compromisso com o cidadão e excelência na atuação previdenciária."
            </p>
          </div>
        </div>

        {/* ── ÁREAS DE ATUAÇÃO ── */}
        <section id="areas" className="tv-section dark2">
          <div className="tv-wrap">
            <div className="tv-section-head tv-reveal tv-d1">
              <span className="tv-label">O que fazemos</span>
              <h2 className="tv-h2">
                Atuação especializada para orientar decisões jurídicas com segurança
              </h2>
              <hr className="tv-divider" />
              <p className="tv-lead">
                Do benefício negado à aposentadoria merecida — atuamos com técnica precisa
                em todas as frentes do Direito Previdenciário e Trabalhista.
              </p>
            </div>

            <div className="tv-services-grid">
              {services.map((s, i) => (
                <div key={s.title} className={`tv-service-card tv-reveal tv-d${(i % 3) + 1}`}>
                  <div className="tv-service-top">
                    <div className="tv-service-icon">
                      <s.icon size={22} />
                    </div>
                    <span className="tv-service-eyebrow">{s.eyebrow}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="tv-service-points">
                    {s.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <a
                    className="tv-service-link"
                    href={whatsApp(`Olá, Dra. Tatiane! Gostaria de receber informações sobre ${s.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Informações sobre este tema <ChevronRight size={14} />
                  </a>
                </div>
              ))}
            </div>

            <p style={{ textAlign: "center", marginTop: 24, color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
              Dúvidas sobre qual área pode se relacionar ao seu caso?{" "}
              <a href={whatsApp()} target="_blank" rel="noreferrer" style={{ color: "var(--tv-gold2)", fontWeight: 700 }}>
                Envie uma mensagem para orientações iniciais.
              </a>
            </p>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section id="sobre" className="tv-section alt">
          <div className="tv-wrap">
            <div className="tv-two-col">
              {/* Foto */}
              <div className="tv-about-photo-wrap tv-reveal tv-d1">
                <div className="tv-about-photo-frame">
                  <img
                    src={assets.team}
                    alt="Equipe do escritório Tatiane Vasconcelos das Graças Advocacia"
                  />
                </div>
                <div className="tv-about-accent" />
                <div className="tv-about-badge">
                  <strong>Dra. Tatiane Vasconcelos</strong>
                  <span>OAB/SE 9.270 · Previdenciária</span>
                </div>
              </div>

              {/* Texto */}
              <div className="tv-about-copy tv-reveal tv-d2">
                <span className="tv-label">Quem somos</span>
                <h2 className="tv-h2">
                  Mais de uma década defendendo os direitos de quem mais precisa
                </h2>
                <hr className="tv-divider" />

                <div style={{ marginTop: 24 }}>
                  <p>
                    A Dra. Tatiane Vasconcelos das Graças é advogada especializada em Direito
                    Previdenciário, pós-graduada na área e{" "}
                    <strong>membro da Comissão de Direito Previdenciário da OAB/SE</strong>.
                    Com mais de 10 anos de atuação, construiu uma trajetória reconhecida pela
                    excelência técnica e pelo compromisso com o cidadão.
                  </p>
                  <p>
                    Em 2026, foi destaque na capa da <strong>Revista LEGACY — Histórias que
                    Inspiram</strong>, publicação que reconhece profissionais que geram valor
                    e transformam realidades. Uma conquista que reflete o impacto real do seu
                    trabalho na vida de centenas de famílias.
                  </p>
                  <p>
                    O escritório conta com equipe dedicada e atua 100% de forma online,
                    atendendo clientes em todo o Brasil com a mesma qualidade e atenção de um
                    atendimento presencial.
                  </p>
                </div>

                <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <span className="tv-oab-tag">
                    <ShieldCheck size={14} /> OAB/SE 9.270
                  </span>
                  <span className="tv-oab-tag">
                    <Award size={14} /> Revista LEGACY 2026
                  </span>
                </div>

                <div className="tv-credentials">
                  <div className="tv-cred-card">
                    <BookOpen size={18} />
                    <strong>Pós-graduada em Direito Previdenciário</strong>
                    <span>Formação especializada na área de atuação</span>
                  </div>
                  <div className="tv-cred-card">
                    <Users size={18} />
                    <strong>Membro da Comissão OAB/SE</strong>
                    <span>Comissão de Direito Previdenciário da OAB/SE</span>
                  </div>
                  <div className="tv-cred-card">
                    <Scale size={18} />
                    <strong>Dr. Arthur Elias Vasconcelos</strong>
                    <span>OAB/SE 17.972 · Trabalhista, Cível e Bancária</span>
                  </div>
                  <div className="tv-cred-card">
                    <MapPin size={18} />
                    <strong>Atendimento nacional online</strong>
                    <span>São Miguel do Aleixo – SE · Todo o Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section id="processo" className="tv-section dark">
          <div className="tv-wrap">
            <div className="tv-section-head center tv-reveal tv-d1">
              <span className="tv-label">Nosso processo</span>
              <h2 className="tv-h2">Como funciona o atendimento</h2>
              <hr className="tv-divider" style={{ margin: "16px auto 0" }} />
              <p className="tv-lead" style={{ textAlign: "center" }}>
                Três etapas simples, transparentes e sem burocracia. Do primeiro contato
                às próximas etapas, você permanece informado.
              </p>
            </div>

            <div className="tv-steps-grid">
              {steps.map((step, i) => (
                <div key={step.num} className={`tv-step tv-reveal tv-d${i + 1}`}>
                  <div className="tv-step-left">
                    <span className="tv-step-num">{step.num}</span>
                    <div className="tv-step-icon">
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
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section className="tv-section">
          <div className="tv-wrap">
            <div className="tv-section-head center tv-reveal tv-d1">
              <span className="tv-label">Experiência de atendimento</span>
              <h2 className="tv-h2">O que pode transmitir confiança no primeiro contato</h2>
              <hr className="tv-divider" style={{ margin: "16px auto 0" }} />
              <p className="tv-lead" style={{ textAlign: "center" }}>
                Relatos devem ser usados com autorização, sobriedade e sem exposição de
                desfechos processuais. A proposta prioriza clareza, sigilo e acolhimento.
              </p>
            </div>

            <div className="tv-testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={t.name} className={`tv-testimonial-card tv-reveal tv-d${i + 1}`}>
                  <div className="tv-testimonial-stars">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p className="tv-testimonial-text">"{t.text}"</p>
                  <div className="tv-testimonial-author">
                    <div className="tv-testimonial-avatar">{t.initial}</div>
                    <div className="tv-testimonial-info">
                      <strong>{t.name}</strong>
                      <span>Atendimento online</span>
                    </div>
                    <span className="tv-testimonial-badge">
                      <ShieldCheck size={10} /> {t.benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="duvidas" className="tv-section alt">
          <div className="tv-wrap">
            <div className="tv-section-head tv-reveal tv-d1">
              <span className="tv-label">Dúvidas frequentes</span>
              <h2 className="tv-h2">
                Perguntas que respondemos todos os dias
              </h2>
              <hr className="tv-divider" />
              <p className="tv-lead">
                O Direito Previdenciário é complexo. Aqui estão as dúvidas mais comuns
                de quem nos procura pela primeira vez.
              </p>
            </div>

            <div className="tv-faq-list tv-reveal tv-d2">
              {faqs.map((faq, i) => (
                <div key={i} className="tv-faq-item">
                  <button
                    className={`tv-faq-btn${openFaq === i ? " open" : ""}`}
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <ChevronDown size={18} className="tv-faq-icon" />
                  </button>
                  {openFaq === i && (
                    <div className="tv-faq-body">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>

            <a
              className="tv-faq-cta"
              href={whatsApp("Olá, Dra. Tatiane! Gostaria de receber informações sobre atendimento previdenciário.")}
              target="_blank"
              rel="noreferrer"
            >
              Minha dúvida não está aqui — quero falar com a equipe <ChevronRight size={14} />
            </a>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contato" className="tv-section tv-cta-section">
          <div className="tv-wrap">
            <div className="tv-cta-inner">
              <span className="tv-label">Próximo passo</span>
              <h2 className="tv-h2" style={{ color: "var(--tv-white)" }}>
                Atendimento jurídico com escuta, técnica e responsabilidade
              </h2>
              <hr className="tv-divider" style={{ margin: "16px auto 0" }} />
              <p className="tv-lead" style={{ textAlign: "center", marginTop: 20 }}>
                Envie uma mensagem para entender como funciona o atendimento e quais
                informações podem ser necessárias para uma avaliação jurídica individual.
              </p>

              <div className="tv-hero-actions" style={{ justifyContent: "center", marginTop: 32 }}>
                <a
                  className="tv-btn-gold"
                  href={whatsApp()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WaIcon size={16} /> Solicitar informações
                </a>
                <a
                  className="tv-btn-outline"
                  href={`tel:+5579999752066`}
                >
                  <Phone size={15} /> (79) 99975-2066
                </a>
              </div>

              <div className="tv-cta-location">
                <span><MapPin size={13} /> São Miguel do Aleixo – SE</span>
                <span><Shield size={13} /> OAB/SE 9.270 e OAB/SE 17.972</span>
                <span><Sparkles size={13} /> Atendimento em todo o Brasil</span>
              </div>

              <p style={{ marginTop: 24, color: "rgba(255,255,255,0.22)", fontSize: 11, textAlign: "center" }}>
                Nosso escritório só entra em contato pelos números oficiais:{" "}
                <strong style={{ color: "rgba(255,255,255,0.4)" }}>
                  (79) 99975-2066 · (79) 99857-1541
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* ── MAPA / LOCALIZAÇÃO ── */}
        <div className="tv-map-section">
          <div className="tv-wrap">
            <div className="tv-section-head tv-reveal tv-d1" style={{ marginBottom: 32 }}>
              <span className="tv-label">Onde estamos</span>
              <h2 className="tv-h2" style={{ color: "var(--tv-white)" }}>
                Nosso escritório
              </h2>
              <hr className="tv-divider" />
              <p className="tv-lead">
                Atendimento presencial em São Miguel do Aleixo – SE e 100% online
                para clientes de qualquer estado do Brasil.
              </p>
            </div>

            <div className="tv-map-grid tv-reveal tv-d2">
              {/* Bloco de informações */}
              <div className="tv-map-address-block">
                <div className="tv-map-detail">
                  <div className="tv-map-detail-icon">
                    <MapPin size={17} />
                  </div>
                  <div className="tv-map-detail-body">
                    <strong>Endereço</strong>
                    <span>
                      Praça Oliveira Campos, 283<br />
                      São Miguel do Aleixo – SE<br />
                      CEP 49535-000
                    </span>
                    <a
                      className="tv-map-open-link"
                      href="https://www.google.com/maps/search/Praça+Oliveira+Campos,+283,+São+Miguel+do+Aleixo,+SE"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Abrir no Google Maps ↗
                    </a>
                  </div>
                </div>

                <div className="tv-map-detail">
                  <div className="tv-map-detail-icon">
                    <Phone size={17} />
                  </div>
                  <div className="tv-map-detail-body">
                    <strong>Telefone / WhatsApp</strong>
                    <span>(79) 99975-2066<br />(79) 99857-1541</span>
                  </div>
                </div>

                <div className="tv-map-detail">
                  <div className="tv-map-detail-icon">
                    <Clock size={17} />
                  </div>
                  <div className="tv-map-detail-body">
                    <strong>Horário de atendimento</strong>
                    <span>Segunda a sexta: 8h às 18h<br />Sábado: 8h às 12h</span>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="tv-map-frame-wrap">
                <iframe
                  title="Localização do escritório Tatiane Vasconcelos das Graças Advocacia"
                  src="https://maps.google.com/maps?q=Pra%C3%A7a+Oliveira+Campos%2C+283%2C+S%C3%A3o+Miguel+do+Aleixo%2C+SE%2C+Brasil&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="tv-map-online-note">
                  <Shield size={13} />
                  Atendimento 100% online disponível para todo o Brasil — sem necessidade de deslocamento.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="tv-footer">
          <div className="tv-wrap">
            <div className="tv-footer-body">
              <div className="tv-footer-brand">
                <img
                  className="tv-footer-logo"
                  src={assets.logo}
                  alt="Tatiane Vasconcelos das Graças Consultoria e Assessoria Jurídica"
                />
                <p>
                  Advocacia Previdenciária e Trabalhista.
                  Comprometida com seus direitos desde 2014.
                </p>
                <div className="tv-footer-tags">
                  <span className="tv-footer-tag">Previdenciário</span>
                  <span className="tv-footer-tag">Trabalhista</span>
                  <span className="tv-footer-tag">OAB/SE</span>
                  <span className="tv-footer-tag">Online</span>
                </div>
              </div>

              <div className="tv-footer-col">
                <h4>Áreas de Atuação</h4>
                <a href="#areas">Aposentadorias</a>
                <a href="#areas">Benefícios por Incapacidade</a>
                <a href="#areas">BPC/LOAS</a>
                <a href="#areas">Revisão de Benefícios</a>
                <a href="#areas">Salário-Maternidade</a>
                <a href="#areas">Direito Trabalhista</a>
              </div>

              <div className="tv-footer-col">
                <h4>Contato</h4>
                <div className="tv-footer-row">
                  <Phone size={14} />
                  <span>(79) 99975-2066</span>
                </div>
                <div className="tv-footer-row">
                  <WaIcon size={14} />
                  <span>(79) 99857-1541</span>
                </div>
                <div className="tv-footer-row">
                  <MapPin size={14} />
                  <span>
                    Praça Oliveira Campos, 283<br />
                    São Miguel do Aleixo – SE<br />
                    CEP 49535-000
                  </span>
                </div>
                <a
                  href="https://www.instagram.com/tatianevgadvocacia/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: 8, color: "var(--tv-gold2)", fontWeight: 700 }}
                >
                  @tatianevgadvocacia ↗
                </a>
              </div>
            </div>

            <hr className="tv-footer-divider" />

            <div className="tv-footer-bottom">
              <span>
                © 2026 Tatiane Vasconcelos das Graças. Todos os direitos reservados.
              </span>
              <span>
                Proposta por{" "}
                <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                  LumaSites
                </a>
              </span>
            </div>
          </div>
        </footer>

        {/* ── WA FLOAT ── */}
        <a
          className={`tv-wa-float${waVisible ? "" : " hidden"}`}
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
