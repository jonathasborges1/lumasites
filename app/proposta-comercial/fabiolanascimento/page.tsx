"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Award,
  ChevronDown,
  ChevronRight,
  Gem,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Package,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

/* ── constants ─────────────────────────────────────────── */
const WA_NUMBER = "5500000000000"; // Aguardando número da cliente
const FORM_URL = "https://form.jotform.com/261426122425044";

const wa = (msg = "Olá! Vi a proposta e gostaria de saber mais sobre o programa de revendedoras.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const navItems = [
  { href: "#top",      label: "Início" },
  { href: "#sobre",    label: "Sobre" },
  { href: "#programa", label: "Programa" },
  { href: "#pecas",    label: "As Peças" },
  { href: "#duvidas",  label: "Dúvidas" },
  { href: "#contato",  label: "Contato" },
];

const benefits = [
  {
    icon: TrendingUp,
    eyebrow: "Resultado Real",
    title: "Lucro de até 100%",
    desc: "Margens generosas calculadas para que a sua dedicação se traduza em renda real todos os meses — não promessa vaga.",
    points: ["Margem de revenda competitiva", "Tabela de preços clara e transparente", "Quanto mais você vende, mais você ganha"],
  },
  {
    icon: Gem,
    eyebrow: "Diferencial de Mercado",
    title: "Fabricação Própria",
    desc: "Peças criadas e produzidas pela própria Fabiola no Ceará e Rio Grande do Norte. Design exclusivo que você não encontra em nenhum atacado.",
    points: ["Exclusividade de design garantida", "Controle total de qualidade", "Coleções atualizadas com frequência"],
  },
  {
    icon: Users,
    eyebrow: "Você não está sozinha",
    title: "Suporte Completo",
    desc: "Acompanhamento próximo, materiais profissionais para redes sociais e orientação de vendas desde o primeiro dia.",
    points: ["Materiais prontos para Instagram e WhatsApp", "Grupo de revendedoras ativo", "Suporte direto com a equipe Fabiola"],
  },
  {
    icon: Heart,
    eyebrow: "No seu ritmo",
    title: "Flexibilidade Total",
    desc: "Trabalhe de casa, pelo celular, nas redes sociais ou presencialmente. Você define o quanto quer dedicar e quando.",
    points: ["Sem horário fixo ou meta obrigatória", "100% remoto se preferir", "Concilia com qualquer rotina"],
  },
  {
    icon: Package,
    eyebrow: "Comece logo",
    title: "Investimento Acessível",
    desc: "Kit inicial pensado para quem está começando — sem precisar de muito para ter um catálogo real nas mãos.",
    points: ["Sem necessidade de CNPJ para começar", "Kits variados por orçamento", "Entrega em todo o Brasil"],
  },
  {
    icon: Award,
    eyebrow: "Mais do que vender",
    title: "Pertencer a uma Comunidade",
    desc: "Ser revendedora Fabiola Nascimento é pertencer a um grupo de mulheres que escolheram trabalhar com o que amam.",
    points: ["Comunidade ativa de revendedoras", "Encontros e lives exclusivas", "Reconhecimento e bonificações"],
  },
];

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Preencha o cadastro",
    text: "Formulário de 2 minutos com suas informações básicas. Sem compromisso — é apenas para conhecer o seu perfil.",
    detail: "Menos de 2 minutos",
  },
  {
    num: "02",
    icon: CheckCircle,
    title: "Nossa equipe avalia",
    text: "Em até 24 horas úteis analisamos o seu cadastro e entramos em contato para apresentar o programa em detalhes.",
    detail: "Retorno em até 24h",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Boas-vindas ao time",
    text: "Você conhece o catálogo, escolhe o seu kit inicial e começa com todo o suporte da equipe Fabiola do seu lado.",
    detail: "Suporte imediato",
  },
];

const pieces = [
  { category: "Anéis",     label: "Coleção de Anéis",      count: "Peças exclusivas",    image: "/images/fabiolanascimento/fn-piece-aneis.jpg" },
  { category: "Brincos",   label: "Coleção de Brincos",     count: "Design sofisticado",  image: "/images/fabiolanascimento/fn-piece-brincos.jpg" },
  { category: "Colares",   label: "Coleção de Colares",     count: "Alta qualidade",      image: "/images/fabiolanascimento/fn-piece-colares.jpg" },
  { category: "Pulseiras", label: "Coleção de Pulseiras",   count: "Fabricação própria",  image: "/images/fabiolanascimento/fn-piece-pulseiras.jpg" },
  { category: "Conjuntos", label: "Conjuntos Exclusivos",   count: "Sets completos",      image: "/images/fabiolanascimento/fn-piece-conjuntos.jpg" },
  { category: "Lançamentos", label: "Novidades da Coleção", count: "Sempre renovando",    image: "/images/fabiolanascimento/fn-piece-lancamentos.jpg" },
];

const testimonials = [
  {
    text: "Comecei achando que não ia conseguir, mas no segundo mês já tinha recuperado o investimento. As peças vendem sozinhas porque são lindas de verdade — minha cliente volta sempre.",
    name: "[Nome da Revendedora]",
    location: "[Cidade, Estado]",
    highlight: "2º mês já no lucro",
  },
  {
    text: "O suporte que a Fabiola oferece é diferente de tudo que já vi. Ela mesma me orientou no começo e os materiais prontos para o Instagram facilitaram demais. Hoje indico pra todo mundo.",
    name: "[Nome da Revendedora]",
    location: "[Cidade, Estado]",
    highlight: "Suporte que funciona",
  },
  {
    text: "A qualidade das peças me surpreendeu. Minha clientela percebe que não é bijuteria qualquer — é semijoia com acabamento de verdade. Isso cria confiança e fidelidade nas minhas clientes.",
    name: "[Nome da Revendedora]",
    location: "[Cidade, Estado]",
    highlight: "Qualidade que vende",
  },
];

const faqs = [
  {
    q: "Preciso ter CNPJ para ser revendedora?",
    a: "Não. Você pode começar como pessoa física sem nenhum registro formal. O programa é pensado exatamente para quem quer uma renda complementar sem burocracia. Se você quiser formalizar depois, podemos orientar nesse caminho também.",
  },
  {
    q: "O que está incluso no kit inicial?",
    a: "O kit inicial inclui uma seleção de peças das principais categorias do catálogo — anéis, brincos, colares e pulseiras — para você ter um portfólio real nas mãos. Os detalhes do kit atual são apresentados durante o onboarding.",
  },
  {
    q: "Posso vender somente pelo Instagram ou WhatsApp?",
    a: "Sim! A maioria das nossas revendedoras vende 100% online — via Instagram, WhatsApp e grupos de clientes. Você recebe materiais profissionais prontos para usar nessas plataformas desde o primeiro dia.",
  },
  {
    q: "As peças têm garantia?",
    a: "Sim. As semijoias Fabiola Nascimento são produzidas com banho de qualidade e passam por controle de qualidade antes de serem enviadas. Em caso de defeito de fabricação, a política de troca é aplicada.",
  },
  {
    q: "Vocês entregam em todo o Brasil?",
    a: "Sim. Atendemos revendedoras em todo o território nacional. O frete é calculado por região e pode ser repassado ao cliente final ou absorvido na sua estratégia de preço.",
  },
  {
    q: "Quanto tempo leva para começar a vender depois de entrar no programa?",
    a: "Assim que o kit chega, você já pode começar. A maioria das revendedoras realiza as primeiras vendas ainda na primeira semana, especialmente aproveitando o círculo de amizades e família para as primeiras divulgações.",
  },
];

/* ── SVG helpers ───────────────────────────────────────── */
const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const MenuIcon = ({ open = false }: { open?: boolean }) => (
  <span className={`fn-menu-glyph${open ? " open" : ""}`} aria-hidden="true">
    <span className="fn-mg-top" />
    <span className="fn-mg-bot" />
    <span className="fn-mg-dot" />
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
  --fn-bar:      88px;
  --fn-nav:      72px;

  --fn-dark:     #1A1208;
  --fn-dark2:    #231A0E;
  --fn-dark3:    #2E2318;

  --fn-gold:     #C89230;
  --fn-gold2:    #E2AA46;
  --fn-gold3:    #9D6E1A;
  --fn-gold-bg:  rgba(200,146,48,.10);
  --fn-gold-br:  rgba(200,146,48,.22);

  --fn-rose:     #C4897A;

  --fn-cream:    #FAF8F4;
  --fn-warm:     #F3EEE6;
  --fn-white:    #FDFCFA;
  --fn-ink:      #1A1208;
  --fn-muted:    #7A6B5A;
  --fn-line-l:   rgba(26,18,8,.09);
  --fn-line-d:   rgba(255,255,255,.08);
}

@media (min-width: 640px) {
  :root { --fn-bar: 48px; }
}

/* ── page shell ─────────────────────────────────────────── */
#fn-conceito {
  padding-top: calc(var(--fn-bar) + var(--fn-nav));
  font-family: var(--font-fn-body), system-ui, sans-serif;
}
#fn-conceito h1, #fn-conceito h2, #fn-conceito h3, #fn-conceito h4 {
  font-family: var(--font-fn-display), Georgia, serif;
}
.fn-page {
  color: var(--fn-ink);
  background: var(--fn-cream);
  overflow-x: clip;
  min-height: 100vh;
}

/* ── preview bar ─────────────────────────────────────────── */
.fn-preview {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1001;
  height: var(--fn-bar);
  padding: 7px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  background: var(--fn-dark);
  border-bottom: 1px solid rgba(200,146,48,.2);
}
.fn-preview-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.fn-preview-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--fn-white);
}
.fn-preview-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--fn-gold2);
  animation: fn-pulse-dot 1.6s ease-out infinite;
}
@keyframes fn-pulse-dot {
  0%   { box-shadow: 0 0 0 0 rgba(226,170,70,.9); }
  70%  { box-shadow: 0 0 0 10px rgba(226,170,70,0); }
  100% { box-shadow: 0 0 0 0 rgba(226,170,70,0); }
}
.fn-preview-sub {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,.4);
}
.fn-preview-sub a {
  color: var(--fn-gold2);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.fn-preview-link {
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
.fn-preview-link:hover {
  border-color: rgba(200,146,48,.5);
  color: var(--fn-gold2);
}
@media (max-width: 639px) {
  .fn-preview { padding: 8px 14px; }
  .fn-preview-title { justify-content: center; flex-wrap: wrap; font-size: 10px; letter-spacing: .1em; }
  .fn-preview-sub { font-size: 10px; line-height: 1.35; }
  .fn-preview-link { display: none; }
}

/* ── nav ─────────────────────────────────────────────────── */
.fn-nav {
  position: fixed;
  left: 0; right: 0;
  top: var(--fn-bar);
  z-index: 1000;
  height: var(--fn-nav);
  background: rgba(26,18,8,.96);
  border-bottom: 1px solid rgba(200,146,48,.12);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition: background .25s, box-shadow .25s;
}
.fn-nav.scrolled {
  background: rgba(20,12,4,.99);
  box-shadow: 0 12px 40px rgba(0,0,0,.5);
}
.fn-nav-inner {
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.fn-brand { display: flex; align-items: center; gap: 12px; min-width: 0; }
.fn-brand-logo {
  width: 70px;
  height: 42px;
  object-fit: contain;
  background: transparent;
  border: 1px solid rgba(200,146,48,.28);
  padding: 5px 9px;
}
.fn-brand-sub {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: rgba(255,255,255,.32);
}
@media (max-width: 520px) {
  .fn-brand-logo { width: 58px; height: 36px; padding: 4px 7px; }
  .fn-brand-sub { display: none; }
}
.fn-links {
  display: none;
  align-items: center;
  gap: 18px;
}
.fn-links a {
  position: relative;
  color: rgba(255,255,255,.48);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  transition: color .15s;
}
.fn-links a:hover, .fn-links a.active { color: var(--fn-white); }
.fn-links a:not(.fn-nav-cta)::after {
  content: "";
  position: absolute;
  bottom: -8px; left: 0; right: 0;
  height: 1px;
  background: var(--fn-gold);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .2s;
}
.fn-links a.active::after, .fn-links a:hover::after { transform: scaleX(1); }
.fn-nav-cta {
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 18px;
  border-radius: 3px;
  background: var(--fn-gold3);
  color: var(--fn-white) !important;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  box-shadow: 0 6px 22px rgba(157,110,26,.3);
  transition: background .15s, box-shadow .15s;
}
.fn-nav-cta:hover {
  background: var(--fn-gold);
  box-shadow: 0 8px 28px rgba(200,146,48,.44);
}
.fn-menu-btn {
  width: 44px; height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(200,146,48,.24);
  border-radius: 3px;
  background: transparent;
  color: var(--fn-gold2);
  transition: background .2s;
}
.fn-menu-btn:hover { background: rgba(200,146,48,.1); }
.fn-menu-glyph {
  position: relative;
  width: 22px; height: 18px;
  display: block;
}
.fn-mg-top, .fn-mg-bot {
  position: absolute;
  right: 0;
  height: 1.5px;
  border-radius: 999px;
  background: currentColor;
  transition: top .28s cubic-bezier(.22,.8,.28,1), width .28s, transform .28s cubic-bezier(.22,.8,.28,1);
}
.fn-mg-top { top: 5px; width: 22px; }
.fn-mg-bot { top: 13px; width: 15px; }
.fn-mg-dot {
  position: absolute;
  right: 0; top: 9px;
  width: 4px; height: 4px;
  border-radius: 50%;
  background: currentColor;
  transition: opacity .2s .1s;
}
.fn-menu-glyph.open .fn-mg-top { top: 9px; transform: rotate(42deg); }
.fn-menu-glyph.open .fn-mg-bot { top: 9px; width: 22px; transform: rotate(-42deg); }
.fn-menu-glyph.open .fn-mg-dot { opacity: 0; }
.fn-mobile-menu {
  display: none;
  position: fixed;
  top: calc(var(--fn-bar) + var(--fn-nav));
  left: 0; right: 0;
  z-index: 999;
  background: rgba(20,12,4,.98);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(200,146,48,.12);
  padding: 16px 20px 24px;
  flex-direction: column;
  gap: 4px;
}
.fn-mobile-menu.open { display: flex; }
.fn-mobile-menu a {
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
.fn-mobile-menu a:hover { color: var(--fn-white); padding-left: 16px; }
.fn-mobile-wa {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  border-radius: 4px;
  background: var(--fn-gold3);
  color: var(--fn-white);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
}
@media (min-width: 900px) {
  .fn-links { display: flex; }
  .fn-menu-btn { display: none; }
}

/* ── sections ─────────────────────────────────────────── */
.fn-section { padding: 96px 20px; }
.fn-section.alt { background: var(--fn-warm); }
.fn-section.white { background: var(--fn-white); }
.fn-section.dark { background: var(--fn-dark2); color: var(--fn-white); }
.fn-section.darker { background: var(--fn-dark); color: var(--fn-white); }
.fn-wrap { width: min(1120px, 100%); margin: 0 auto; }
.fn-section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--fn-gold);
  margin-bottom: 14px;
}
.fn-section-label::before {
  content: "";
  display: block;
  width: 28px; height: 1px;
  background: var(--fn-gold);
}
.fn-divider {
  width: 40px; height: 2px;
  background: var(--fn-gold);
  margin: 20px 0;
  border-radius: 1px;
}
.fn-h2 {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -.01em;
  margin: 0 0 12px;
}
.fn-lead {
  font-size: 17px;
  line-height: 1.65;
  color: var(--fn-muted);
  max-width: 620px;
}
.dark .fn-lead, .darker .fn-lead { color: rgba(255,255,255,.55); }

/* ── hero ─────────────────────────────────────────────── */
.fn-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  background: var(--fn-dark);
  overflow: hidden;
}
.fn-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 70% at 70% 50%, rgba(200,146,48,.09) 0%, transparent 60%),
    radial-gradient(ellipse 40% 60% at 20% 80%, rgba(196,137,122,.06) 0%, transparent 55%),
    linear-gradient(155deg, #1A1208 0%, #231A0E 55%, #2E2318 100%);
}
.fn-hero-ornament {
  position: absolute;
  top: 60px; right: 0;
  width: 480px; height: 480px;
  border-radius: 50%;
  border: 1px solid rgba(200,146,48,.06);
  pointer-events: none;
}
.fn-hero-ornament-2 {
  position: absolute;
  top: 120px; right: 60px;
  width: 360px; height: 360px;
  border-radius: 50%;
  border: 1px solid rgba(200,146,48,.04);
  pointer-events: none;
}
.fn-hero-inner {
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
.fn-hero-copy { max-width: 600px; }
.fn-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 10px;
  border: 1px solid rgba(200,146,48,.28);
  border-radius: 2px;
  background: rgba(200,146,48,.08);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--fn-gold2);
  margin-bottom: 28px;
  animation: fn-hero-in .5s cubic-bezier(.22,.8,.28,1) .1s both;
}
.fn-hero-eyebrow-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--fn-gold2);
  flex-shrink: 0;
}
.fn-hero h1 {
  font-size: clamp(32px, 5.5vw, 60px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -.02em;
  color: var(--fn-white);
  margin: 0 0 24px;
  animation: fn-hero-in .65s cubic-bezier(.22,.8,.28,1) .2s both;
}
.fn-hero h1 em {
  font-style: italic;
  color: var(--fn-gold2);
}
.fn-hero-sub {
  font-size: clamp(16px, 1.8vw, 18px);
  line-height: 1.65;
  color: rgba(255,255,255,.55);
  margin: 0 0 40px;
  animation: fn-hero-in .65s cubic-bezier(.22,.8,.28,1) .32s both;
}
.fn-hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  animation: fn-hero-in .65s cubic-bezier(.22,.8,.28,1) .44s both;
}
.fn-btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  border-radius: 3px;
  background: var(--fn-gold3);
  color: var(--fn-white);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  box-shadow: 0 8px 28px rgba(157,110,26,.35);
  transition: background .15s, box-shadow .15s, transform .15s;
}
.fn-btn-gold:hover {
  background: var(--fn-gold);
  box-shadow: 0 12px 36px rgba(200,146,48,.44);
  transform: translateY(-1px);
}
.fn-btn-outline {
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
.fn-btn-outline:hover {
  border-color: rgba(200,146,48,.5);
  color: var(--fn-gold2);
}
.fn-hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
  animation: fn-hero-in .65s cubic-bezier(.22,.8,.28,1) .56s both;
}
.fn-hero-pill {
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
.fn-hero-pill svg { color: var(--fn-gold2); flex-shrink: 0; }

/* hero photo */
.fn-hero-photo-wrap {
  position: relative;
  animation: fn-hero-in .8s cubic-bezier(.22,.8,.28,1) .3s both;
}
.fn-hero-photo-frame {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 3/4;
  max-height: 560px;
  box-shadow: 0 32px 80px rgba(0,0,0,.6);
}
.fn-hero-photo-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(26,18,8,.8) 100%);
  pointer-events: none;
}
.fn-hero-photo-accent {
  position: absolute;
  top: -16px; right: -16px;
  width: 80px; height: 80px;
  border: 2px solid var(--fn-gold3);
  border-radius: 4px;
  opacity: .4;
  pointer-events: none;
}
.fn-hero-photo-accent-2 {
  position: absolute;
  bottom: -16px; left: -16px;
  width: 60px; height: 60px;
  border: 1px solid rgba(200,146,48,.3);
  border-radius: 50%;
  pointer-events: none;
}
.fn-hero-photo-badge {
  position: absolute;
  bottom: 20px; left: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: rgba(26,18,8,.88);
  border: 1px solid rgba(200,146,48,.28);
  border-radius: 4px;
  backdrop-filter: blur(8px);
}
.fn-hero-photo-badge-icon {
  color: var(--fn-gold2);
}
.fn-hero-photo-badge-text {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: rgba(255,255,255,.75);
  line-height: 1.3;
}
.fn-hero-photo-badge-text strong {
  display: block;
  font-family: var(--font-fn-display), Georgia, serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--fn-gold2);
  letter-spacing: 0;
  font-style: italic;
}

@keyframes fn-hero-in {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}
@media (min-width: 900px) {
  .fn-hero-inner { grid-template-columns: 1fr 1fr; }
}

/* ── trust bar ─────────────────────────────────────────── */
.fn-trust {
  background: var(--fn-dark3);
  border-top: 1px solid rgba(200,146,48,.12);
  border-bottom: 1px solid rgba(200,146,48,.12);
  padding: 0 20px;
}
.fn-trust-grid {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.fn-trust-item {
  padding: 28px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-right: 1px solid rgba(255,255,255,.06);
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.fn-trust-item:nth-child(2n) { border-right: none; }
.fn-trust-item:nth-last-child(-n+2) { border-bottom: none; }
.fn-trust-icon {
  width: 42px; height: 42px;
  border-radius: 8px;
  background: rgba(200,146,48,.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fn-gold2);
  flex-shrink: 0;
}
.fn-trust-value {
  font-family: var(--font-fn-display), Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--fn-white);
  line-height: 1;
  font-style: italic;
}
.fn-trust-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .04em;
  color: rgba(255,255,255,.44);
  margin-top: 3px;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  .fn-trust-grid { grid-template-columns: repeat(4, 1fr); }
  .fn-trust-item { border-bottom: none; }
  .fn-trust-item:nth-child(2n) { border-right: 1px solid rgba(255,255,255,.06); }
  .fn-trust-item:last-child { border-right: none; }
}

/* ── about ─────────────────────────────────────────────── */
.fn-about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  align-items: center;
  margin-top: 20px;
}
.fn-about-photo-wrap { position: relative; }
.fn-about-photo-frame {
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 1;
  max-height: 480px;
  box-shadow: 0 24px 64px rgba(0,0,0,.16);
}
.fn-about-photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fn-about-photo-accent {
  position: absolute;
  bottom: -16px; right: -16px;
  width: 80px; height: 80px;
  border: 2px solid var(--fn-gold);
  border-radius: 4px;
  opacity: .4;
}
.fn-about-photo-badge {
  position: absolute;
  top: 24px; left: 24px;
  padding: 10px 14px;
  background: rgba(26,18,8,.9);
  border: 1px solid rgba(200,146,48,.3);
  border-radius: 4px;
  backdrop-filter: blur(8px);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--fn-gold2);
  white-space: nowrap;
}
.fn-about-text {
  font-size: 16px;
  line-height: 1.75;
  color: var(--fn-ink);
  margin-bottom: 16px;
}
.fn-about-text strong { color: var(--fn-ink); font-weight: 700; }
.fn-credentials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 32px;
}
.fn-credential {
  padding: 18px 16px;
  border: 1px solid var(--fn-line-l);
  border-radius: 4px;
  background: var(--fn-white);
}
.fn-credential-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--fn-gold3);
  margin-bottom: 4px;
}
.fn-credential-value {
  font-family: var(--font-fn-display), Georgia, serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--fn-ink);
  line-height: 1.2;
  font-style: italic;
}
@media (min-width: 900px) {
  .fn-about-grid { grid-template-columns: 1fr 1fr; }
}

/* ── benefits (programa) ───────────────────────────────── */
.fn-benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 56px;
}
.fn-benefit-card {
  padding: 32px 28px;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,.07);
  background: rgba(255,255,255,.04);
  transition: border-color .2s, background .2s, transform .2s;
}
.fn-benefit-card:hover {
  border-color: rgba(200,146,48,.28);
  background: rgba(200,146,48,.06);
  transform: translateY(-2px);
}
.fn-benefit-icon {
  width: 46px; height: 46px;
  border-radius: 10px;
  background: rgba(200,146,48,.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fn-gold2);
  margin-bottom: 20px;
}
.fn-benefit-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--fn-gold3);
  margin-bottom: 6px;
}
.fn-benefit-title {
  font-family: var(--font-fn-display), Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--fn-white);
  line-height: 1.2;
}
.fn-benefit-desc {
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255,255,255,.5);
  margin-bottom: 20px;
}
.fn-benefit-points {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid rgba(255,255,255,.07);
  padding-top: 20px;
}
.fn-benefit-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,.65);
}
.fn-benefit-points li::before {
  content: "";
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--fn-gold);
  flex-shrink: 0;
}
@media (min-width: 640px) {
  .fn-benefits-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .fn-benefits-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── process (como funciona) ────────────────────────────── */
.fn-process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  margin-top: 56px;
}
.fn-step {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 32px 28px;
  border-radius: 4px;
  background: var(--fn-white);
  border: 1px solid var(--fn-line-l);
  transition: border-color .2s, box-shadow .2s, transform .2s;
}
.fn-step:hover {
  border-color: rgba(200,146,48,.3);
  box-shadow: 0 16px 48px rgba(0,0,0,.08);
  transform: translateY(-2px);
}
.fn-step-num {
  font-family: var(--font-fn-display), Georgia, serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  color: rgba(200,146,48,.2);
  flex-shrink: 0;
  min-width: 56px;
  font-style: italic;
}
.fn-step-icon {
  width: 40px; height: 40px;
  border-radius: 8px;
  background: var(--fn-gold-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fn-gold);
  flex-shrink: 0;
  margin-top: 4px;
}
.fn-step-content {}
.fn-step-title {
  font-family: var(--font-fn-display), Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--fn-ink);
  margin: 0 0 8px;
  font-style: italic;
}
.fn-step-text {
  font-size: 14px;
  line-height: 1.65;
  color: var(--fn-muted);
  margin-bottom: 12px;
}
.fn-step-detail {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--fn-gold3);
  padding: 4px 10px;
  border-radius: 2px;
  background: var(--fn-gold-bg);
  border: 1px solid var(--fn-gold-br);
}
@media (min-width: 768px) {
  .fn-process-grid { grid-template-columns: repeat(3, 1fr); }
  .fn-step { flex-direction: column; gap: 16px; }
}

/* ── portfolio (peças) ─────────────────────────────────── */
.fn-pieces-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 48px;
}
.fn-piece-card {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 3/4;
  background: var(--fn-warm);
  border: 1px solid var(--fn-line-l);
  transition: transform .3s, box-shadow .3s;
}
.fn-piece-card:hover { transform: translateY(-3px); box-shadow: 0 20px 56px rgba(0,0,0,.12); }
.fn-piece-img {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--fn-warm);
}
.fn-piece-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .45s ease;
}
.fn-piece-card:hover .fn-piece-img img { transform: scale(1.04); }
.fn-piece-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(26,18,8,.8) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 16px;
}
.fn-piece-category {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--fn-gold2);
  margin-bottom: 4px;
}
.fn-piece-title {
  font-family: var(--font-fn-display), Georgia, serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--fn-white);
  line-height: 1.2;
  font-style: italic;
}
.fn-piece-sub {
  font-size: 11px;
  color: rgba(255,255,255,.5);
  margin-top: 2px;
}
.fn-pieces-notice {
  margin-top: 24px;
  padding: 16px 20px;
  border-radius: 4px;
  background: var(--fn-gold-bg);
  border: 1px solid var(--fn-gold-br);
  font-size: 13px;
  color: var(--fn-gold3);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
}
@media (min-width: 640px) {
  .fn-pieces-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1024px) {
  .fn-pieces-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── testimonials ──────────────────────────────────────── */
.fn-testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 56px;
}
.fn-testimonial-card {
  padding: 32px 28px;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,.07);
  background: rgba(255,255,255,.04);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.fn-testimonial-stars {
  display: flex;
  gap: 4px;
  color: var(--fn-gold2);
}
.fn-testimonial-text {
  font-size: 15px;
  line-height: 1.75;
  color: rgba(255,255,255,.65);
  font-style: italic;
  flex: 1;
}
.fn-testimonial-text::before { content: '“'; }
.fn-testimonial-text::after { content: '”'; }
.fn-testimonial-highlight {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 2px;
  background: var(--fn-gold-bg);
  border: 1px solid var(--fn-gold-br);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--fn-gold2);
  margin-bottom: 8px;
}
.fn-testimonial-author {
  border-top: 1px solid rgba(255,255,255,.07);
  padding-top: 16px;
}
.fn-testimonial-name {
  font-weight: 700;
  font-size: 14px;
  color: var(--fn-white);
  margin-bottom: 2px;
}
.fn-testimonial-location {
  font-size: 12px;
  color: rgba(255,255,255,.4);
  display: flex;
  align-items: center;
  gap: 4px;
}
.fn-testimonials-note {
  margin-top: 32px;
  text-align: center;
  font-size: 12px;
  color: rgba(255,255,255,.28);
  font-style: italic;
}
@media (min-width: 768px) {
  .fn-testimonials-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── faq ───────────────────────────────────────────────── */
.fn-faq-list {
  margin-top: 48px;
  max-width: 780px;
}
.fn-faq-item { border-bottom: 1px solid var(--fn-line-l); }
.fn-faq-item:first-child { border-top: 1px solid var(--fn-line-l); }
.fn-faq-btn {
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
.fn-faq-q {
  font-size: 16px;
  font-weight: 600;
  color: var(--fn-ink);
  line-height: 1.4;
  transition: color .15s;
}
.fn-faq-btn:hover .fn-faq-q,
.fn-faq-item.open .fn-faq-q { color: var(--fn-gold3); }
.fn-faq-chevron {
  flex-shrink: 0;
  width: 22px; height: 22px;
  border-radius: 50%;
  border: 1px solid var(--fn-line-l);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fn-muted);
  margin-top: 2px;
  transition: transform .25s, background .15s, color .15s;
}
.fn-faq-item.open .fn-faq-chevron {
  transform: rotate(180deg);
  background: var(--fn-gold-bg);
  color: var(--fn-gold3);
  border-color: var(--fn-gold-br);
}
.fn-faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height .35s cubic-bezier(.22,.8,.28,1), padding .25s;
  font-size: 15px;
  line-height: 1.7;
  color: var(--fn-muted);
  padding: 0 4px;
}
.fn-faq-item.open .fn-faq-answer {
  max-height: 400px;
  padding-bottom: 22px;
}
.fn-faq-footer {
  margin-top: 40px;
  padding: 24px 28px;
  border-radius: 4px;
  background: var(--fn-gold-bg);
  border: 1px solid var(--fn-gold-br);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.fn-faq-footer-text {
  font-size: 15px;
  font-weight: 500;
  color: var(--fn-ink);
}
.fn-faq-footer a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 3px;
  background: var(--fn-gold3);
  color: var(--fn-white);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: background .15s;
}
.fn-faq-footer a:hover { background: var(--fn-gold); }

/* ── cta final ─────────────────────────────────────────── */
.fn-cta-final {
  background: linear-gradient(150deg, var(--fn-dark) 0%, #1E1508 55%, #2A1C0A 100%);
  padding: 120px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.fn-cta-final::before {
  content: "";
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 600px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(200,146,48,.08) 0%, transparent 70%);
  pointer-events: none;
}
.fn-cta-final-inner {
  position: relative;
  width: min(680px, 100%);
  margin: 0 auto;
}
.fn-cta-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--fn-gold2);
  margin-bottom: 20px;
}
.fn-cta-final h2 {
  font-size: clamp(30px, 5vw, 52px);
  font-weight: 700;
  color: var(--fn-white);
  line-height: 1.1;
  margin: 0 0 20px;
  letter-spacing: -.02em;
}
.fn-cta-final h2 em {
  font-style: italic;
  color: var(--fn-gold2);
}
.fn-cta-final-sub {
  font-size: 17px;
  line-height: 1.6;
  color: rgba(255,255,255,.5);
  margin-bottom: 40px;
}
.fn-cta-dual {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}
.fn-cta-final-note {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.28);
}
.fn-cta-final-note svg { color: var(--fn-gold3); }

/* ── footer ────────────────────────────────────────────── */
.fn-footer {
  background: var(--fn-dark);
  border-top: 1px solid rgba(200,146,48,.1);
  padding: 64px 20px 40px;
  color: rgba(255,255,255,.5);
}
.fn-footer-inner {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}
.fn-footer-logo {
  width: 132px;
  height: auto;
  object-fit: contain;
  background: transparent;
  border: 1px solid rgba(200,146,48,.24);
  padding: 10px 14px;
  margin-bottom: 16px;
}
.fn-footer-desc {
  font-size: 13px;
  line-height: 1.65;
  max-width: 280px;
}
.fn-footer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}
.fn-footer-tag {
  padding: 4px 10px;
  border-radius: 2px;
  background: rgba(200,146,48,.08);
  border: 1px solid rgba(200,146,48,.16);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--fn-gold3);
}
.fn-footer-col-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: rgba(255,255,255,.35);
  margin-bottom: 16px;
}
.fn-footer-links {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fn-footer-links a {
  font-size: 14px;
  color: rgba(255,255,255,.5);
  transition: color .15s;
}
.fn-footer-links a:hover { color: var(--fn-gold2); }
.fn-footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: rgba(255,255,255,.5);
  margin-bottom: 10px;
}
.fn-footer-contact-item svg { color: var(--fn-gold3); flex-shrink: 0; margin-top: 2px; }
.fn-footer-contact-item a { transition: color .15s; }
.fn-footer-contact-item a:hover { color: var(--fn-gold2); }
.fn-footer-divider {
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
.fn-footer-copy { color: rgba(255,255,255,.25); }
.fn-footer-luma {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,.3);
}
.fn-footer-luma a {
  color: var(--fn-gold3);
  font-weight: 700;
  transition: color .15s;
}
.fn-footer-luma a:hover { color: var(--fn-gold2); }
@media (min-width: 768px) {
  .fn-footer-inner { grid-template-columns: 2fr 1fr 1fr; }
}

/* ── whatsapp float ────────────────────────────────────── */
.fn-wa-float {
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
  animation: fn-wa-pulse 2.4s ease-out infinite;
  transition: transform .15s, box-shadow .15s, opacity .3s;
  opacity: 0;
}
.fn-wa-float.visible { opacity: 1; }
.fn-wa-float:hover {
  transform: scale(1.08);
  box-shadow: 0 10px 32px rgba(37,211,102,.55);
}
@keyframes fn-wa-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(37,211,102,.45); }
  70%  { box-shadow: 0 0 0 18px rgba(37,211,102,0); }
  100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
}

/* ── reveal animations ─────────────────────────────────── */
.fn-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity .6s cubic-bezier(.22,.8,.28,1), transform .6s cubic-bezier(.22,.8,.28,1);
}
.fn-reveal.is-visible { opacity: 1; transform: none; }
.fn-d1.is-visible { transition-delay: .05s; }
.fn-d2.is-visible { transition-delay: .12s; }
.fn-d3.is-visible { transition-delay: .19s; }
.fn-d4.is-visible { transition-delay: .26s; }
.fn-d5.is-visible { transition-delay: .33s; }
.fn-d6.is-visible { transition-delay: .40s; }
`;

/* ── component ──────────────────────────────────────────── */
export default function FabiolaNascimentoPage() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [openFaq, setOpenFaq]     = useState<number | null>(0);
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
    document.querySelectorAll(".fn-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="fn-page" id="fn-conceito" ref={pageRef}>

        {/* ── preview bar ── */}
        <div className="fn-preview" role="banner">
          <div className="fn-preview-center">
            <p className="fn-preview-title">
              <span className="fn-preview-dot" aria-hidden="true" />
              Prévia Conceitual · Fabiola Nascimento Semijoias
            </p>
            <p className="fn-preview-sub">
              Proposta desenvolvida pela{" "}
              <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                Luma Sites
              </a>{" "}
              — uso exclusivo da cliente
            </p>
          </div>
          <a
            href="https://www.instagram.com/fabiolanascimentolicita/"
            target="_blank"
            rel="noreferrer"
            className="fn-preview-link"
          >
            <ChevronRight size={12} />
            Instagram
          </a>
        </div>

        {/* ── nav ── */}
        <nav className={`fn-nav${scrolled ? " scrolled" : ""}`} aria-label="Navegação principal">
          <div className="fn-nav-inner">
            <a href="#top" className="fn-brand" onClick={closeMenu}>
              <Image
                src="/images/fabiolanascimento/fn-logo-treated.png"
                alt="Fabiola Nascimento Semijoias"
                width={1536}
                height={1024}
                className="fn-brand-logo"
                priority
              />
              <span className="fn-brand-sub">Semijoias · Fabricação Própria · CE & RN</span>
            </a>

            <div className="fn-links" role="navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a
                href={FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="fn-nav-cta"
              >
                <Gem size={13} />
                Quero ser revendedora
              </a>
            </div>

            <button
              className="fn-menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <div className={`fn-mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="fn-mobile-wa"
            onClick={closeMenu}
          >
            <Gem size={18} />
            Quero conhecer o programa
          </a>
        </div>

        {/* ── hero ── */}
        <section className="fn-hero" id="top" aria-labelledby="fn-hero-h1">
          <div className="fn-hero-bg" aria-hidden="true" />
          <div className="fn-hero-ornament" aria-hidden="true" />
          <div className="fn-hero-ornament-2" aria-hidden="true" />

          <div className="fn-hero-inner">
            <div className="fn-hero-copy">
              <div className="fn-hero-eyebrow">
                <span className="fn-hero-eyebrow-dot" />
                Fabricação Própria · Ceará & Rio Grande do Norte
              </div>

              <h1 id="fn-hero-h1">
                Mais do que vender joias.{" "}
                <em>Pertencer</em>{" "}
                a algo que brilha.
              </h1>

              <p className="fn-hero-sub">
                Peças exclusivas de fabricação própria, margens reais e suporte que funciona —
                para mulheres que escolheram trabalhar com o que amam e conquistar a sua independência.
              </p>

              <div className="fn-hero-btns">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="fn-btn-gold"
                >
                  <Gem size={18} />
                  Quero conhecer o programa
                </a>
                <a href="#pecas" className="fn-btn-outline">
                  Ver as peças
                  <ChevronDown size={16} />
                </a>
              </div>

              <div className="fn-hero-pills">
                <span className="fn-hero-pill">
                  <Sparkles size={13} />
                  Fabricação própria
                </span>
                <span className="fn-hero-pill">
                  <TrendingUp size={13} />
                  Lucro de até 100%
                </span>
                <span className="fn-hero-pill">
                  <Users size={13} />
                  Comunidade de revendedoras
                </span>
              </div>
            </div>

            <div className="fn-hero-photo-wrap">
              <div className="fn-hero-photo-frame">
                <Image
                  src="/images/fabiolanascimento/fn-hero.jpg"
                  alt="Fabiola Nascimento — Fundadora Fabiola Nascimento Semijoias"
                  width={800}
                  height={1067}
                  sizes="(min-width: 900px) 480px, calc(100vw - 40px)"
                  quality={90}
                  priority
                />
              </div>
              <div className="fn-hero-photo-accent" aria-hidden="true" />
              <div className="fn-hero-photo-accent-2" aria-hidden="true" />
              <div className="fn-hero-photo-badge">
                <div className="fn-hero-photo-badge-icon">
                  <Gem size={20} />
                </div>
                <div className="fn-hero-photo-badge-text">
                  <strong>@fabiolanascimentolicita</strong>
                  Fabricação própria
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── trust bar ── */}
        <div className="fn-trust" role="complementary" aria-label="Diferenciais da marca">
          <div className="fn-trust-grid">
            {[
              { icon: <Gem size={20} />,      value: "Fabricação",    label: "Própria CE & RN" },
              { icon: <TrendingUp size={20} />, value: "Até 100%",     label: "De lucro p/ revendedora" },
              { icon: <Instagram size={20} />, value: "@fabiolanascimentolicita",    label: "Instagram da marca" },
              { icon: <Shield size={20} />,    value: "Suporte",       label: "Completo incluído" },
            ].map((item, i) => (
              <div key={i} className={`fn-trust-item fn-reveal fn-d${i + 1}`}>
                <div className="fn-trust-icon">{item.icon}</div>
                <div>
                  <div className="fn-trust-value">{item.value}</div>
                  <div className="fn-trust-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── about ── */}
        <section className="fn-section alt" id="sobre" aria-labelledby="fn-about-h2">
          <div className="fn-wrap">
            <p className="fn-section-label fn-reveal">Quem é Fabiola</p>
            <div className="fn-about-grid">
              <div className="fn-about-photo-wrap fn-reveal">
                <div className="fn-about-photo-frame">
                  <Image
                    src="/images/fabiolanascimento/fn-quem-e-fabiola.jpg"
                    alt="Quem é Fabiola Nascimento"
                    width={640}
                    height={640}
                    sizes="(min-width: 900px) 480px, calc(100vw - 40px)"
                    quality={90}
                  />
                </div>
                <div className="fn-about-photo-accent" aria-hidden="true" />
                <div className="fn-about-photo-badge">Fabiola Nascimento Semijoias</div>
              </div>

              <div>
                <h2 className="fn-h2 fn-reveal fn-d1" id="fn-about-h2">
                  A mulher por trás de cada peça
                </h2>
                <div className="fn-divider fn-reveal fn-d1" />

                <p className="fn-about-text fn-reveal fn-d2">
                  <strong>Fabiola Nascimento</strong> criou a Fabiola Nascimento Semijoias com um
                  propósito claro: oferecer peças de qualidade real — com design próprio, produzidas
                  no Ceará e no Rio Grande do Norte — e uma oportunidade genuína de renda para
                  mulheres que compartilham esse amor por joias.
                </p>
                <p className="fn-about-text fn-reveal fn-d3">
                  Diferente das marcas que revendem no atacado, aqui <strong>cada peça nasce
                  de fabricação própria</strong>. Isso significa exclusividade de design, controle
                  de qualidade real e margens que permitem às revendedoras trabalhar com orgulho —
                  vendendo algo que elas mesmas usariam.
                </p>
                <p className="fn-about-text fn-reveal fn-d4">
                  O programa de revendedoras não é apenas uma oportunidade de negócio. É um
                  convite para fazer parte de uma comunidade de mulheres que escolheram brilhar —
                  cada uma do seu jeito, no seu tempo.
                </p>

                <div className="fn-credentials-grid fn-reveal fn-d4">
                  {[
                    { label: "Produção",       value: "Fabricação própria" },
                    { label: "Localização",    value: "Ceará & RN" },
                    { label: "Instagram",      value: "@fabiolanascimentolicita" },
                    { label: "Atendimento",    value: "Todo o Brasil" },
                  ].map((c) => (
                    <div key={c.label} className="fn-credential">
                      <div className="fn-credential-label">{c.label}</div>
                      <div className="fn-credential-value">{c.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── benefits (programa) ── */}
        <section className="fn-section darker" id="programa" aria-labelledby="fn-programa-h2">
          <div className="fn-wrap">
            <p className="fn-section-label fn-reveal" style={{ color: "var(--fn-gold2)" }}>
              O Programa
            </p>
            <h2 className="fn-h2 fn-reveal fn-d1" id="fn-programa-h2" style={{ color: "var(--fn-white)" }}>
              Mais do que vender.{" "}
              <em style={{ color: "var(--fn-gold2)", fontStyle: "italic" }}>Pertencer.</em>
            </h2>
            <div className="fn-divider fn-reveal fn-d2" />
            <p className="fn-lead fn-reveal fn-d2">
              Tudo que você precisa para transformar o amor por joias em uma renda real —
              com produto de qualidade, suporte dedicado e uma comunidade que cresce junto.
            </p>

            <div className="fn-benefits-grid">
              {benefits.map((b, i) => (
                <article
                  key={b.title}
                  className={`fn-benefit-card fn-reveal fn-d${(i % 3) + 1}`}
                  aria-label={b.title}
                >
                  <div className="fn-benefit-icon" aria-hidden="true">
                    <b.icon size={22} />
                  </div>
                  <p className="fn-benefit-eyebrow">{b.eyebrow}</p>
                  <h3 className="fn-benefit-title">{b.title}</h3>
                  <p className="fn-benefit-desc">{b.desc}</p>
                  <ul className="fn-benefit-points" aria-label={`Detalhes: ${b.title}`}>
                    {b.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div style={{ marginTop: 48, textAlign: "center" }} className="fn-reveal">
              <a href={FORM_URL} target="_blank" rel="noreferrer" className="fn-btn-gold">
                <Gem size={18} />
                Quero fazer parte do programa
              </a>
            </div>
          </div>
        </section>

        {/* ── process (como funciona) ── */}
        <section className="fn-section" id="como-funciona" aria-labelledby="fn-process-h2">
          <div className="fn-wrap">
            <p className="fn-section-label fn-reveal">Como Funciona</p>
            <h2 className="fn-h2 fn-reveal fn-d1" id="fn-process-h2">
              Três passos para começar
            </h2>
            <div className="fn-divider fn-reveal fn-d2" />
            <p className="fn-lead fn-reveal fn-d2">
              Do cadastro ao primeiro kit em mãos — um processo simples, transparente
              e com suporte em cada etapa.
            </p>

            <div className="fn-process-grid">
              {steps.map((s, i) => (
                <div key={s.num} className={`fn-step fn-reveal fn-d${i + 1}`}>
                  <div className="fn-step-num" aria-hidden="true">{s.num}</div>
                  <div>
                    <div className="fn-step-icon" aria-hidden="true">
                      <s.icon size={20} />
                    </div>
                    <h3 className="fn-step-title">{s.title}</h3>
                    <p className="fn-step-text">{s.text}</p>
                    <span className="fn-step-detail">
                      <Clock size={11} />
                      {s.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── portfolio (peças) ── */}
        <section className="fn-section white" id="pecas" aria-labelledby="fn-pecas-h2">
          <div className="fn-wrap">
            <p className="fn-section-label fn-reveal">As Peças</p>
            <h2 className="fn-h2 fn-reveal fn-d1" id="fn-pecas-h2">
              Design exclusivo,{" "}
              <em style={{ fontStyle: "italic", color: "var(--fn-gold3)" }}>qualidade de verdade</em>
            </h2>
            <div className="fn-divider fn-reveal fn-d2" />
            <p className="fn-lead fn-reveal fn-d2">
              Cada peça é criada e produzida com fabricação própria — exclusividade que
              nenhum revendedor de atacado pode oferecer. Você vende algo que só você tem.
            </p>

            <div className="fn-pieces-grid fn-reveal fn-d2">
              {pieces.map((p, i) => (
                <div
                  key={p.category}
                  className={`fn-piece-card fn-reveal fn-d${(i % 3) + 1}`}
                >
                  <div className="fn-piece-img">
                    <Image
                      src={p.image}
                      alt={`${p.label} - Fabiola Nascimento Semijoias`}
                      width={640}
                      height={854}
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 50vw"
                      quality={88}
                    />
                  </div>
                  <div className="fn-piece-overlay">
                    <p className="fn-piece-category">{p.category}</p>
                    <p className="fn-piece-title">{p.label}</p>
                    <p className="fn-piece-sub">{p.count}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="fn-pieces-notice fn-reveal fn-d3">
              <Sparkles size={16} />
              <span>
                <strong>Catálogo completo disponível no onboarding.</strong>{" "}
                Imagens alocadas a partir do material visual coletado na referência atual da marca.
              </span>
            </div>

            <div style={{ marginTop: 40, textAlign: "center" }} className="fn-reveal">
              <a href={FORM_URL} target="_blank" rel="noreferrer" className="fn-btn-gold">
                <Gem size={18} />
                Conhecer o catálogo completo
              </a>
            </div>
          </div>
        </section>

        {/* ── testimonials ── */}
        <section className="fn-section dark" id="depoimentos" aria-labelledby="fn-depoimentos-h2">
          <div className="fn-wrap">
            <p className="fn-section-label fn-reveal" style={{ color: "var(--fn-gold2)" }}>
              Depoimentos
            </p>
            <h2 className="fn-h2 fn-reveal fn-d1" id="fn-depoimentos-h2" style={{ color: "var(--fn-white)" }}>
              O que dizem as revendedoras
            </h2>
            <div className="fn-divider fn-reveal fn-d2" />

            <div className="fn-testimonials-grid">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`fn-testimonial-card fn-reveal fn-d${i + 1}`}
                  aria-label={`Depoimento de ${t.name}`}
                >
                  <div>
                    <div className="fn-testimonial-highlight">{t.highlight}</div>
                    <div className="fn-testimonial-stars" aria-label="5 estrelas">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="fn-testimonial-text">{t.text}</p>
                  <div className="fn-testimonial-author">
                    <p className="fn-testimonial-name">{t.name}</p>
                    <p className="fn-testimonial-location">
                      <MapPin size={11} />
                      {t.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="fn-testimonials-note fn-reveal">
              Depoimentos reais a serem coletados com autorização das revendedoras ativas
            </p>
          </div>
        </section>

        {/* ── faq ── */}
        <section className="fn-section" id="duvidas" aria-labelledby="fn-faq-h2">
          <div className="fn-wrap">
            <p className="fn-section-label fn-reveal">Perguntas Frequentes</p>
            <h2 className="fn-h2 fn-reveal fn-d1" id="fn-faq-h2">
              Suas dúvidas, respondidas
            </h2>
            <div className="fn-divider fn-reveal fn-d1" />

            <div className="fn-faq-list fn-reveal fn-d2" role="list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`fn-faq-item${openFaq === i ? " open" : ""}`}
                  role="listitem"
                >
                  <button
                    className="fn-faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`fn-faq-answer-${i}`}
                  >
                    <span className="fn-faq-q">{faq.q}</span>
                    <span className="fn-faq-chevron" aria-hidden="true">
                      <ChevronDown size={14} />
                    </span>
                  </button>
                  <div
                    className="fn-faq-answer"
                    id={`fn-faq-answer-${i}`}
                    role="region"
                    aria-hidden={openFaq !== i}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

            <div className="fn-faq-footer fn-reveal fn-d3">
              <p className="fn-faq-footer-text">
                Ficou com alguma dúvida que não está aqui?
              </p>
              <a href={FORM_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={16} />
                Falar com a equipe
              </a>
            </div>
          </div>
        </section>

        {/* ── cta final ── */}
        <section className="fn-cta-final" id="contato" aria-labelledby="fn-cta-h2">
          <div className="fn-cta-final-inner">
            <p className="fn-cta-eyebrow fn-reveal">Comece agora</p>
            <h2 className="fn-reveal fn-d1" id="fn-cta-h2">
              Seu próximo passo{" "}
              <em>começa aqui.</em>
            </h2>
            <p className="fn-cta-final-sub fn-reveal fn-d2">
              Preencha o cadastro em menos de 2 minutos e nossa equipe entra em contato
              em até 24 horas para apresentar o programa completo — sem compromisso.
            </p>
            <div className="fn-cta-dual fn-reveal fn-d3">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="fn-btn-gold"
              >
                <Gem size={18} />
                Quero ser revendedora
              </a>
              <a href={wa()} target="_blank" rel="noreferrer" className="fn-btn-outline">
                <WaIcon size={18} />
                Falar pelo WhatsApp
              </a>
            </div>
            <div className="fn-cta-final-note fn-reveal fn-d4">
              <MapPin size={14} />
              Fabricação própria em CE & RN · Entregas para todo o Brasil
            </div>
          </div>
        </section>

        {/* ── footer ── */}
        <footer className="fn-footer">
          <div className="fn-footer-inner">
            <div>
              <Image
                src="/images/fabiolanascimento/fn-logo-treated.png"
                alt="Fabiola Nascimento Semijoias"
                width={1536}
                height={1024}
                className="fn-footer-logo"
              />
              <p className="fn-footer-desc">
                Semijoias de fabricação própria com programa de revendedoras. Design exclusivo,
                qualidade real e independência financeira para mulheres em todo o Brasil.
              </p>
              <div className="fn-footer-tags">
                {["Fabricação Própria", "Revendedoras", "CE & RN", "Design Exclusivo", "Brasil"].map((t) => (
                  <span key={t} className="fn-footer-tag">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="fn-footer-col-title">Navegação</p>
              <ul className="fn-footer-links">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="fn-footer-col-title">Contato</p>
              <div className="fn-footer-contact-item">
                <Instagram size={15} />
                <a
                  href="https://www.instagram.com/fabiolanascimentolicita/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @fabiolanascimentolicita
                </a>
              </div>
              <div className="fn-footer-contact-item">
                <WaIcon size={15} />
                <a href={wa()} target="_blank" rel="noreferrer">
                  WhatsApp da equipe
                </a>
              </div>
              <div className="fn-footer-contact-item">
                <MapPin size={15} />
                <span>Ceará & Rio Grande do Norte</span>
              </div>
            </div>
          </div>

          <div className="fn-footer-inner">
            <div className="fn-footer-divider" style={{ gridColumn: "1 / -1" }}>
              <p className="fn-footer-copy">
                © 2026 Fabiola Nascimento Semijoias. Todos os direitos reservados.
              </p>
              <p className="fn-footer-luma">
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
          className={`fn-wa-float${waVisible ? " visible" : ""}`}
          aria-label="Falar pelo WhatsApp"
        >
          <WaIcon size={26} />
        </a>

      </div>
    </>
  );
}
