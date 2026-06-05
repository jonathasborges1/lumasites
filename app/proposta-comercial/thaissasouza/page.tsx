"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Instagram,
  Menu,
  Minus,
  Plus,
  X,
} from "lucide-react";

/* ─── CONTATOS ─────────────────────────────────────────────── */
const WA = `https://wa.me/5532988336590?text=${encodeURIComponent(
  "Olá, Dra. Thais! Gostaria de agendar uma pré-consulta.",
)}`;
const IG = "https://www.instagram.com/drathaissouzacirplastica/";
const TK = "https://www.tiktok.com/@drathaissouzacirplastica";
const SITE_ATUAL = "https://drathaissouzacirurgiaplastica.com";

/* ─── IMAGENS ──────────────────────────────────────────────── */
const IMG = {
  hero: "/images/thaissasouza/dra-thais-souza.webp",
  sobre: "/images/thaissasouza/perfil.webp",
  perfil: "/images/thaissasouza/perfil-medica.png",
  logo: "/images/thaissasouza/logo.png",
};

/* ─── VÍDEOS (referência — Presto Player / site atual da cliente) ─ */
const VIDEOS = {
  resultado:
    "https://drathaissouzacirurgiaplastica.com/wp-content/uploads/2025/12/Resultado-PUB-1912_2025.mp4",
  cirurgia:
    "https://drathaissouzacirurgiaplastica.com/wp-content/uploads/2025/12/Cirurgia-Plastica.mp4",
};

const youtubeVideo = (id: string) => ({
  kind: "youtube" as const,
  url: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`,
  thumb: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
});

/* ─── GALERIA DE RESULTADOS ────────────────────────────────── */
const resultadoImages = [
  { src: "/images/thaissasouza/resultado-1.webp", label: "Resultado Cirúrgico" },
  { src: "/images/thaissasouza/resultado-2.webp", label: "Resultado Cirúrgico" },
  { src: "/images/thaissasouza/resultado-3.webp", label: "Resultado Cirúrgico" },
  { src: "/images/thaissasouza/resultado-4.webp", label: "Resultado Cirúrgico" },
  { src: "/images/thaissasouza/resultado-5.webp", label: "Resultado Cirúrgico" },
  { src: "/images/thaissasouza/resultado-6.webp", label: "Resultado Cirúrgico" },
];

/* ─── DADOS ─────────────────────────────────────────────────── */
const navItems = [
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#pre-consulta", label: "Pré-consulta" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const procedimentos = [
  {
    n: "01",
    nome: "Lipoabdominoplastia",
    desc: "Redefinição completa do abdômen com remoção de excesso de pele e gordura localizada, entregando contorno plano e natural.",
    detalhe: "Contorno abdominal",
  },
  {
    n: "02",
    nome: "Lipoescultura",
    desc: "Modelagem corporal com tecnologia LipoHD Ultrassônica para definição precisa das curvas com mínimo trauma tecidual.",
    detalhe: "LipoHD Ultrassônica",
  },
  {
    n: "03",
    nome: "Mamoplastia de Aumento",
    desc: "Aumento volumétrico natural e proporcional com próteses de alta qualidade, respeitando a anatomia de cada paciente.",
    detalhe: "Contorno mamário",
  },
  {
    n: "04",
    nome: "Mamoplastia Redutora",
    desc: "Redução de volume com equilíbrio estético e funcional, aliviando desconfortos e proporcionando melhor qualidade de vida.",
    detalhe: "Contorno mamário",
  },
  {
    n: "05",
    nome: "Mastopexia",
    desc: "Rejuvenescimento e elevação das mamas com técnica de cicatriz reduzida. Resultado firme, natural e duradouro.",
    detalhe: "Cicatriz reduzida",
  },
];

const diferenciais = [
  {
    titulo: "LipoHD Ultrassônica",
    descricao:
      "Tecnologia de ultrassom interno que fragmenta a gordura com precisão cirúrgica antes da aspiração, proporcionando maior definição, menor trauma e recuperação mais rápida.",
    icone: "◈",
  },
  {
    titulo: "Mastopexia com Cicatriz Reduzida",
    descricao:
      "Técnica especializada que preserva ao máximo o tecido saudável e minimiza a extensão da cicatriz, sem comprometer o resultado estético final.",
    icone: "◈",
  },
  {
    titulo: "Recuperação Acelerada",
    descricao:
      "Protocolo cirúrgico e pós-operatório desenvolvido para reduzir o tempo de afastamento, controlar o desconforto e acelerar o retorno à rotina.",
    icone: "◈",
  },
];

const videoCards = [
  {
    proc: "Lipoabdominoplastia",
    duracao: "Pré-consulta",
    ...youtubeVideo("usz2sSTmDsk"),
  },
  {
    proc: "Lipoescultura",
    duracao: "Pré-consulta",
    ...youtubeVideo("Ze1ls90mTd0"),
  },
  {
    proc: "Mamoplastia de Aumento",
    duracao: "Pré-consulta",
    ...youtubeVideo("IXzdWdTM5ik"),
  },
  {
    proc: "Mamoplastia Redutora",
    duracao: "Pré-consulta",
    ...youtubeVideo("k-M-NMDG144"),
  },
  {
    proc: "Mastopexia",
    duracao: "Pré-consulta",
    ...youtubeVideo("T2tT6DBhBtM"),
  },
];

const faqs = [
  {
    q: "Como sei se sou candidata a um procedimento cirúrgico?",
    a: "A avaliação de elegibilidade é realizada em consulta presencial com a Dra. Thais Souza. Durante a consulta, são avaliadas sua saúde geral, expectativas, histórico clínico e características individuais. Entre em contato para agendar sua pré-consulta.",
  },
  {
    q: "O que é a pré-consulta em vídeo e como funciona?",
    a: "A Dra. Thais gravou uma série de vídeos educativos — um para cada procedimento — com as informações mais importantes que os pacientes precisam conhecer antes da consulta. Assim, quando você chegar ao consultório, já terá respondidas as dúvidas mais comuns e o tempo da consulta será dedicado inteiramente ao seu caso.",
  },
  {
    q: "Qual é o período de recuperação após a cirurgia?",
    a: "O tempo de recuperação varia de acordo com o procedimento e o perfil individual de cada paciente. O protocolo de recuperação acelerada da Dra. Thais é planejado para reduzir o desconforto e o afastamento. Os detalhes específicos são orientados em consulta.",
  },
  {
    q: "Em qual local são realizadas as cirurgias?",
    a: "As cirurgias são realizadas no Hospital São João Batista, em Visconde do Rio Branco/MG, em ambiente hospitalar seguro e equipado. As consultas são realizadas no consultório da Dra. Thais na mesma cidade.",
  },
  {
    q: "Qual é a formação e credencial da Dra. Thais Souza?",
    a: "A Dra. Thais Souza é graduada pela Universidade Federal de Juiz de Fora (UFJF), realizou residência em Cirurgia Geral e Plástica pela UFMG e é membro da Sociedade Brasileira de Cirurgia Plástica (SBCP). A filiação ao SBCP garante que a profissional atende os mais rígidos critérios de formação e ética da especialidade.",
  },
  {
    q: "Como agendar uma consulta com a Dra. Thais?",
    a: 'Basta clicar em qualquer botão "Agendar pré-consulta" nesta página para iniciar uma conversa pelo WhatsApp. Nossa equipe responderá com as orientações para agendamento.',
  },
];

/* ─── SVG WHATSAPP ─────────────────────────────────────────── */
function WaIcon({
  size = 17,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

/* ─── CSS ──────────────────────────────────────────────────── */
const css = `
  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; cursor: pointer; border: none; background: none; padding: 0; }

  :root {
    --bar:           52px;
    --nav:           68px;
    /* palette */
    --cream:         #F7F3EE;
    --blush:         #F0E4E0;
    --champagne:     #C9A96E;
    --champagne-dk:  #9B7540;   /* texto sobre fundo claro — contraste WCAG AA */
    --champagne-lt:  #DFC498;   /* texto sobre fundo escuro */
    --charcoal:      #1C1C1C;
    --slate:         #5A5A5A;
    --muted:         #8A8A8A;
    --line:          rgba(28,28,28,.09);
    --line-lt:       rgba(28,28,28,.05);
    --ink:           #0D0D0D;
    --wa:            #25D366;
  }

  section[id] { scroll-margin-top: calc(var(--bar) + var(--nav) + 16px); }

  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
  }
  .skip-link {
    position: fixed; z-index: 1100; top: 8px; left: 8px;
    padding: 10px 14px; border-radius: 6px;
    background: #fff; color: var(--charcoal);
    font-size: 14px; font-weight: 700;
    transform: translateY(-160%); transition: transform .15s;
  }
  .skip-link:focus { transform: translateY(0); }

  .ts {
    overflow-x: clip;
    font-family: var(--ts-body), 'Raleway', system-ui, sans-serif;
    background: var(--cream);
    color: var(--charcoal);
  }

  /* ══ PREVIEW BAR ══════════════════════════════════════════ */
  .pre-bar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1001;
    min-height: var(--bar);
    padding: 7px 20px;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
    background: var(--ink); text-align: center;
  }
  .pre-back {
    position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
    min-width: 36px; min-height: 36px; padding: 0 10px;
    display: inline-flex; align-items: center; gap: 6px;
    border-radius: 6px; color: rgba(255,255,255,.72);
    font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    transition: color .15s, background .15s;
  }
  .pre-back:hover { color: #fff; background: rgba(255,255,255,.08); }
  .pre-line {
    display: flex; align-items: center; gap: 8px;
    color: #fff; font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase;
  }
  .pre-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--champagne); flex: none;
    animation: dot-pulse 1.8s ease-out infinite;
  }
  @keyframes dot-pulse {
    0%  { box-shadow: 0 0 0 0 rgba(201,169,110,.9); }
    70% { box-shadow: 0 0 0 9px rgba(201,169,110,0); }
    100%{ box-shadow: 0 0 0 0 rgba(201,169,110,0); }
  }
  .pre-sub { font-size: 11px; color: rgba(255,255,255,.5); font-family: var(--ts-body), 'Raleway', sans-serif; }
  .pre-sub a { color: rgba(255,255,255,.72); text-decoration: underline; text-underline-offset: 2px; }
  .pre-sub a:hover { color: #fff; }
  .pre-site-atual {
    position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
    display: inline-flex; align-items: center; gap: 5px;
    padding: 5px 11px; border-radius: 5px;
    border: 1px solid rgba(201,169,110,.35);
    color: rgba(201,169,110,.85); font-size: 10px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    transition: color .15s, border-color .15s, background .15s;
    white-space: nowrap;
  }
  .pre-site-atual:hover { color: var(--champagne); border-color: var(--champagne); background: rgba(201,169,110,.08); }

  /* ══ NAV ══════════════════════════════════════════════════ */
  .nav {
    position: fixed; z-index: 1000;
    inset: var(--bar) 0 auto 0;
    height: var(--nav);
    background: rgba(13,13,13,.82);
    backdrop-filter: blur(18px);
    transition: background .3s, box-shadow .3s;
  }
  .nav.scrolled {
    background: rgba(13,13,13,.95);
    box-shadow: 0 1px 0 rgba(255,255,255,.06);
  }
  .nav-inner {
    width: min(1200px, calc(100% - 40px));
    margin: 0 auto; height: 100%;
    display: flex; align-items: center; justify-content: space-between; gap: 20px;
  }
  .brand { display: flex; align-items: center; line-height: 1; }
  .brand-logo { height: 38px; width: auto; display: block; }
  .nav-links { display: none; align-items: center; gap: 26px; }
  .nav-links a {
    font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
    color: rgba(247,243,238,.7);
    position: relative; padding: 8px 0;
    transition: color .2s;
  }
  .nav-links a::after {
    content: ""; position: absolute; bottom: -2px; left: 0; right: 0;
    height: 1px; background: var(--champagne);
    transform: scaleX(0); transform-origin: left;
    transition: transform .25s ease;
  }
  .nav-links a:hover { color: #fff; }
  .nav-links a:hover::after { transform: scaleX(1); }
  .nav-links .nav-cta-btn {
    min-height: 42px; padding: 0 20px;
    display: inline-flex; align-items: center; gap: 7px;
    border-radius: 8px;
    background: var(--champagne-dk); color: #fff;
    font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    box-shadow: 0 4px 16px rgba(155,117,64,.28);
    border: 1.5px solid rgba(255,255,255,.1);
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .nav-links .nav-cta-btn::after { display: none; }
  .nav-links .nav-cta-btn:hover {
    background: var(--charcoal);
    box-shadow: 0 6px 20px rgba(28,28,28,.28);
    transform: translateY(-1px);
  }
  .menu-btn {
    min-height: 44px; min-width: 44px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 8px;
    background: rgba(255,255,255,.08); color: rgba(247,243,238,.9);
    transition: background .2s;
  }
  .menu-btn:hover { background: rgba(255,255,255,.14); }

  /* ══ MOBILE MENU ══════════════════════════════════════════ */
  .mob-menu {
    position: fixed; z-index: 999;
    inset: calc(var(--bar) + var(--nav)) 0 auto 0;
    background: var(--cream);
    padding: 12px 20px 20px;
    display: flex; flex-direction: column;
    border-bottom: 1px solid var(--line);
    box-shadow: 0 24px 48px rgba(0,0,0,.07);
    animation: mob-slide-in .2s ease;
  }
  @keyframes mob-slide-in {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: none; }
  }
  .mob-menu a {
    padding: 14px 0;
    border-bottom: 1px solid var(--line-lt);
    font-size: 13px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase;
    color: var(--slate);
    transition: color .15s, padding-left .15s;
  }
  .mob-menu a:hover { color: var(--charcoal); padding-left: 6px; }
  .mob-menu a:last-child { border-bottom: none; color: var(--champagne-dk); font-weight: 700; }

  /* ══ WRAP ═════════════════════════════════════════════════ */
  .wrap { width: min(1200px, calc(100% - 40px)); margin: 0 auto; }

  /* ══ HERO ════════════════════════════════════════════════ */
  .hero {
    display: grid;
    grid-template-columns: 1fr 0.9fr;
    min-height: 100svh;
    padding-top: calc(var(--bar) + var(--nav));
    background: var(--cream);
  }
  .hero-left {
    display: flex; flex-direction: column; justify-content: center;
    padding: 48px 64px 72px max(40px, calc((100vw - 1200px) / 2 + 20px));
  }
  .hero-right {
    position: relative;
    background:
      linear-gradient(135deg, #F3EAE3 0%, #FBF8F4 46%, #E8D6CC 100%);
    overflow: hidden;
    min-height: 540px;
    display: grid;
    place-items: end center;
  }
  .hero-right::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 62% 46% at 52% 100%, rgba(201,169,110,.23) 0%, transparent 66%),
      radial-gradient(ellipse 44% 34% at 82% 18%, rgba(255,255,255,.7) 0%, transparent 58%);
    pointer-events: none; z-index: 1;
  }
  .hero-right::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 34%;
    background: linear-gradient(180deg, transparent 0%, rgba(28,28,28,.11) 100%);
    pointer-events: none;
    z-index: 2;
  }
  .hero-photo {
    object-fit: contain;
    object-position: center bottom;
    padding: 34px 6% 0;
    filter: saturate(.98) contrast(1.03);
    opacity: 0;
    transition: opacity 1s ease;
    z-index: 2;
  }
  .hero-ready .hero-photo {
    opacity: 1;
  }
  .hero-badge {
    position: absolute; bottom: 28px; right: 20px;
    padding: 14px 18px;
    background: rgba(247,243,238,.94);
    border: 1px solid rgba(201,169,110,.25);
    border-radius: 8px;
    backdrop-filter: blur(14px);
    display: flex; flex-direction: column; gap: 3px;
    opacity: 0; transform: translateY(12px);
    transition: opacity .6s ease .9s, transform .6s ease .9s;
    box-shadow: 0 8px 32px rgba(0,0,0,.07);
    z-index: 3;
  }
  .hero-ready .hero-badge { opacity: 1; transform: none; }
  .hero-badge strong {
    font-family: var(--ts-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 15px; font-weight: 600; color: var(--charcoal); line-height: 1.2;
  }
  .hero-badge span { font-size: 10px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--champagne-dk); }

  .hero-kicker {
    display: inline-flex; align-items: center; gap: 10px;
    margin-bottom: 20px;
    font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--champagne-dk);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .6s ease .15s, transform .6s ease .15s;
  }
  .hero-kicker::before { content: ""; width: 24px; height: 1px; background: var(--champagne); }
  .hero-ready .hero-kicker { opacity: 1; transform: none; }

  .hero h1 {
    margin: 0;
    font-family: var(--ts-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(40px, 4.6vw, 68px);
    font-weight: 600; line-height: 1.02; letter-spacing: -.01em;
    color: var(--charcoal);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .65s ease .28s, transform .65s ease .28s;
  }
  .hero h1 em { font-style: italic; color: var(--champagne); }
  .hero.hero-ready h1 { opacity: 1; transform: none; }

  .hero-sub {
    margin: 22px 0 0; max-width: 520px;
    font-size: 17px; line-height: 1.78; color: var(--slate);
    opacity: 0; transform: translateX(-20px);
    transition: opacity .65s ease .42s, transform .65s ease .42s;
  }
  .hero-ready .hero-sub { opacity: 1; transform: none; }

  .hero-actions {
    display: flex; flex-wrap: wrap; gap: 12px;
    margin-top: 36px;
    opacity: 0; transform: translateY(14px);
    transition: opacity .6s ease .58s, transform .6s ease .58s;
  }
  .hero-ready .hero-actions { opacity: 1; transform: none; }

  .hero-trust {
    display: flex; gap: 20px; flex-wrap: wrap;
    margin-top: 36px; padding-top: 28px;
    border-top: 1px solid var(--line);
    opacity: 0;
    transition: opacity .6s ease .72s;
  }
  .hero-ready .hero-trust { opacity: 1; }
  .trust-item { display: flex; flex-direction: column; gap: 2px; }
  .trust-item strong { font-size: 12px; font-weight: 700; color: var(--charcoal); letter-spacing: .04em; }
  .trust-item span { font-size: 11px; color: var(--muted); }

  /* ══ BUTTONS ══════════════════════════════════════════════ */
  .btn-primary {
    min-height: 52px; padding: 0 28px;
    display: inline-flex; align-items: center; gap: 10px;
    border-radius: 10px;
    background: var(--champagne-dk); color: #fff;
    font-family: var(--ts-body), 'Raleway', sans-serif;
    font-size: 13px; font-weight: 600; letter-spacing: .04em;
    box-shadow: 0 8px 24px rgba(155,117,64,.28);
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .btn-primary:hover { background: var(--charcoal); box-shadow: 0 12px 32px rgba(28,28,28,.22); transform: translateY(-1px); }
  .btn-primary:active { transform: translateY(1px); }

  .btn-outline {
    min-height: 52px; padding: 0 24px;
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 10px;
    border: 1.5px solid var(--line); background: transparent;
    color: var(--charcoal);
    font-family: var(--ts-body), 'Raleway', sans-serif;
    font-size: 13px; font-weight: 600; letter-spacing: .04em;
    transition: border-color .2s, background .2s, transform .15s;
  }
  .btn-outline:hover { border-color: var(--champagne); background: var(--blush); transform: translateY(-1px); }

  .btn-champ {
    min-height: 56px; padding: 0 32px;
    display: inline-flex; align-items: center; gap: 10px;
    border-radius: 10px;
    background: var(--champagne-dk); color: #fff;
    font-family: var(--ts-body), 'Raleway', sans-serif;
    font-size: 14px; font-weight: 600;
    box-shadow: 0 10px 28px rgba(155,117,64,.32);
    transition: background .2s, box-shadow .2s, transform .15s;
  }
  .btn-champ:hover { background: var(--charcoal); box-shadow: 0 14px 36px rgba(28,28,28,.26); transform: translateY(-1px); }

  .btn-ghost {
    min-height: 56px; padding: 0 28px;
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 10px;
    border: 1.5px solid rgba(247,243,238,.3); background: transparent;
    color: rgba(247,243,238,.82);
    font-family: var(--ts-body), 'Raleway', sans-serif;
    font-size: 13px; font-weight: 600;
    transition: border-color .2s, background .2s, transform .15s;
  }
  .btn-ghost:hover { border-color: rgba(247,243,238,.55); background: rgba(247,243,238,.08); transform: translateY(-1px); }

  /* ══ CREDENTIALS STRIP ════════════════════════════════════ */
  .creds-strip {
    background: var(--blush);
    border-top: 1px solid rgba(201,169,110,.18);
    border-bottom: 1px solid rgba(201,169,110,.18);
  }
  .creds-inner {
    width: min(1200px, calc(100% - 40px)); margin: 0 auto;
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: rgba(201,169,110,.12);
    list-style: none; padding: 0;
  }
  .cred-cell {
    background: var(--blush); padding: 22px 24px;
    display: flex; flex-direction: column; gap: 3px;
    transition: background .2s;
  }
  .cred-cell:hover { background: #e4cfc9; }
  .cred-cell strong {
    font-family: var(--ts-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 19px; font-weight: 600; color: var(--champagne-dk); line-height: 1;
  }
  .cred-cell span { font-size: 11px; font-weight: 500; letter-spacing: .08em; text-transform: uppercase; color: var(--slate); }

  /* ══ SECTION BASE ═════════════════════════════════════════ */
  .section { padding: 96px 0; }
  .section.bg-cream { background: var(--cream); }
  .section.bg-blush  { background: var(--blush); }
  .section.bg-dark   { background: var(--ink); }

  .sec-label {
    display: inline-block; margin-bottom: 12px;
    font-size: 10px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
    color: var(--champagne-dk);
  }
  .dark-section .sec-label { color: var(--champagne-lt); }

  .sec-h2 {
    margin: 0;
    font-family: var(--ts-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(30px, 3.8vw, 50px); font-weight: 600; line-height: 1.08;
    color: var(--charcoal);
  }
  .dark-section .sec-h2 { color: #fff; }
  .sec-lead {
    margin: 16px 0 0; max-width: 640px;
    font-size: 16px; line-height: 1.85; color: var(--slate);
  }
  .dark-section .sec-lead { color: rgba(247,243,238,.62); }

  /* ══ PROCEDIMENTOS ════════════════════════════════════════ */
  .proc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; margin-top: 52px;
  }
  .proc-grid .proc-card:nth-child(4),
  .proc-grid .proc-card:nth-child(5) {
    grid-column: span 1;
  }
  /* center last two cards */
  .proc-grid-row2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px; margin-top: 20px;
    max-width: calc(66.66% + 10px);
    margin-left: auto; margin-right: auto;
  }
  .proc-card {
    padding: 32px 28px;
    background: #fff;
    border-radius: 14px;
    border: 1px solid var(--line-lt);
    box-shadow: 0 2px 12px rgba(0,0,0,.04);
    display: flex; flex-direction: column; gap: 0;
    transition: border-color .25s, box-shadow .25s, transform .25s;
    position: relative; overflow: hidden;
  }
  .proc-card::before {
    content: "";
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(to right, var(--champagne), var(--champagne-dk));
    transform: scaleX(0); transform-origin: left;
    transition: transform .3s ease;
  }
  .proc-card:hover {
    border-color: rgba(201,169,110,.3);
    box-shadow: 0 12px 36px rgba(155,117,64,.12);
    transform: translateY(-4px);
  }
  .proc-card:hover::before { transform: scaleX(1); }
  .proc-num {
    font-family: var(--ts-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--champagne); margin-bottom: 16px;
  }
  .proc-name {
    font-family: var(--ts-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 22px; font-weight: 600; color: var(--charcoal);
    margin: 0 0 10px; line-height: 1.15;
  }
  .proc-detalhe {
    display: inline-block; margin-bottom: 14px;
    padding: 4px 10px; border-radius: 20px;
    border: 1px solid rgba(201,169,110,.3);
    font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    color: var(--champagne-dk);
    background: rgba(201,169,110,.07);
  }
  .proc-desc {
    font-size: 14px; line-height: 1.78; color: var(--slate); margin: 0; flex: 1;
  }
  .proc-link {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 20px; padding-top: 16px;
    border-top: 1px solid var(--line-lt);
    font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    color: var(--champagne-dk);
    transition: gap .2s, color .2s;
  }
  .proc-card:hover .proc-link { gap: 10px; color: var(--charcoal); }

  /* ══ SOBRE ════════════════════════════════════════════════ */
  .sobre-grid {
    display: grid; grid-template-columns: 0.85fr 1fr;
    gap: 0; border-radius: 16px; overflow: hidden;
    box-shadow: 0 24px 64px rgba(0,0,0,.09);
    margin-top: 56px;
  }
  .sobre-photo-col {
    position: relative;
    background:
      radial-gradient(circle at 50% 45%, rgba(247,243,238,.62) 0%, transparent 42%),
      linear-gradient(135deg, #725C55 0%, #3F2931 100%);
    min-height: 560px; overflow: hidden;
  }
  .sobre-photo {
    object-fit: contain;
    object-position: center;
    padding: 42px;
    filter: saturate(.98) contrast(1.04);
    transition: transform .6s ease;
  }
  .sobre-photo-col:hover .sobre-photo { transform: scale(1.03); }
  .sobre-text-col {
    padding: 60px 52px;
    background: #fff;
    display: flex; flex-direction: column; justify-content: center;
  }
  .sobre-name {
    font-family: var(--ts-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 36px; font-weight: 600; color: var(--charcoal);
    margin: 0 0 4px; line-height: 1.1;
  }
  .sobre-role {
    display: block; margin-bottom: 6px;
    font-size: 10px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--champagne-dk);
  }
  .sobre-cred {
    display: block; margin-bottom: 28px;
    font-size: 12px; font-weight: 500; color: var(--muted);
  }
  .sobre-text-col p { margin: 0 0 16px; font-size: 15px; line-height: 1.9; color: var(--slate); }
  .sobre-text-col p:last-of-type { margin-bottom: 0; }
  .sobre-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
  .sobre-tag {
    padding: 6px 14px; border-radius: 20px;
    border: 1.5px solid var(--line);
    font-size: 11px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase;
    color: var(--slate);
    transition: border-color .2s, background .2s, color .2s, transform .2s;
  }
  .sobre-tag:hover { border-color: var(--champagne); background: var(--blush); color: var(--champagne-dk); transform: translateY(-2px); }

  /* ══ DIFERENCIAIS ═════════════════════════════════════════ */
  .dif-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 24px; margin-top: 52px;
  }
  .dif-card {
    padding: 36px 28px;
    background: var(--cream);
    border-radius: 14px;
    border: 1px solid var(--line-lt);
    position: relative; overflow: hidden;
    transition: border-color .25s, box-shadow .25s, transform .25s;
  }
  .dif-card::after {
    content: "";
    position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(to right, var(--champagne-dk), var(--champagne));
    opacity: 0; transition: opacity .3s;
  }
  .dif-card:hover {
    border-color: rgba(201,169,110,.3);
    box-shadow: 0 16px 40px rgba(155,117,64,.1);
    transform: translateY(-4px);
  }
  .dif-card:hover::after { opacity: 1; }
  .dif-icone {
    font-size: 28px; color: var(--champagne);
    margin-bottom: 20px; display: block; line-height: 1;
  }
  .dif-titulo {
    font-family: var(--ts-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 24px; font-weight: 600; color: var(--charcoal);
    margin: 0 0 14px; line-height: 1.15;
  }
  .dif-desc {
    font-size: 14px; line-height: 1.8; color: var(--slate); margin: 0;
  }

  /* ══ PRÉ-CONSULTA ═════════════════════════════════════════ */
  .pre-section {
    padding: 96px 0;
    background: var(--ink);
    position: relative; overflow: hidden;
  }
  .pre-section::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 50% 60% at 10% 50%, rgba(201,169,110,.08) 0%, transparent 55%),
      radial-gradient(ellipse 40% 50% at 90% 20%, rgba(201,169,110,.06) 0%, transparent 55%);
    pointer-events: none;
  }
  .pre-inner {
    position: relative; z-index: 1;
  }
  .pre-header { max-width: 680px; }
  .pre-header .sec-label { color: var(--champagne-lt); }
  .pre-header .sec-h2 { color: #fff; }
  .pre-header .sec-lead { color: rgba(247,243,238,.62); margin-top: 16px; max-width: 620px; }
  .pre-videos {
    display: grid; grid-template-columns: repeat(5, 1fr);
    gap: 14px; margin-top: 48px;
  }
  .pre-video-card {
    background: rgba(247,243,238,.06);
    border: 1px solid rgba(247,243,238,.1);
    border-radius: 10px; overflow: hidden;
    transition: background .2s, border-color .2s, transform .25s;
    cursor: default;
    text-decoration: none; display: block;
  }
  .pre-video-card:hover {
    background: rgba(247,243,238,.1);
    border-color: rgba(201,169,110,.3);
    transform: translateY(-3px);
  }
  .pre-video-card.has-video {
    cursor: pointer;
    border-color: rgba(201,169,110,.25);
  }
  .pre-video-card.has-video:hover {
    border-color: var(--champagne);
    box-shadow: 0 8px 28px rgba(201,169,110,.18);
  }
  .pre-video-badge {
    position: absolute; top: 8px; right: 8px;
    padding: 3px 7px; border-radius: 4px;
    background: var(--champagne); color: #fff;
    font-size: 9px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    z-index: 3;
  }
  .pre-video-thumb {
    aspect-ratio: 16/9;
    background:
      linear-gradient(135deg, rgba(115,38,52,.55), rgba(13,13,13,.9));
    display: flex; align-items: center; justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .pre-video-thumb-img {
    object-fit: cover;
    object-position: center;
    filter: saturate(.96) contrast(1.05);
    transform: scale(1.02);
    transition: transform .45s ease, filter .45s ease;
  }
  .pre-video-thumb::after {
    content: "";
    position: absolute; inset: 0;
    background:
      linear-gradient(180deg, rgba(13,13,13,.08) 0%, rgba(13,13,13,.58) 100%),
      radial-gradient(circle at 50% 45%, transparent 0%, rgba(13,13,13,.22) 72%);
    pointer-events: none;
  }
  .pre-video-card:hover .pre-video-thumb-img {
    transform: scale(1.08);
    filter: saturate(1.02) contrast(1.08);
  }
  .pre-video-play {
    position: relative;
    z-index: 2;
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(201,169,110,.8);
    display: flex; align-items: center; justify-content: center;
    transition: background .2s, transform .2s;
  }
  .pre-video-card:hover .pre-video-play {
    background: var(--champagne);
    transform: scale(1.1);
  }
  .pre-video-play svg {
    width: 18px; height: 18px; fill: #fff;
    margin-left: 3px;
  }
  .pre-video-info { padding: 14px 14px 16px; }
  .pre-video-proc {
    font-size: 13px; font-weight: 600; color: rgba(247,243,238,.88); line-height: 1.3;
    margin-bottom: 4px;
  }
  .pre-video-dur {
    font-size: 11px; font-weight: 500; letter-spacing: .08em; text-transform: uppercase;
    color: rgba(247,243,238,.4);
  }
  .pre-cta {
    display: flex; flex-wrap: wrap; gap: 14px; align-items: center;
    margin-top: 44px;
  }
  .pre-cta-text {
    font-size: 14px; color: rgba(247,243,238,.5);
    font-style: italic;
  }

  /* ══ QUOTE BANNER ═════════════════════════════════════════ */
  .quote-banner {
    padding: 80px 0;
    background: linear-gradient(135deg, #2A1F12 0%, #1C1610 100%);
    position: relative; overflow: hidden;
  }
  .quote-banner::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 80% at 15% 50%, rgba(201,169,110,.14) 0%, transparent 60%),
      radial-gradient(ellipse 40% 60% at 85% 50%, rgba(247,243,238,.05) 0%, transparent 55%);
    pointer-events: none;
  }
  .quote-inner {
    position: relative; z-index: 1;
    max-width: 800px; margin: 0 auto; text-align: center;
  }
  .quote-ornament {
    width: 48px; height: 1px;
    background: linear-gradient(to right, transparent, var(--champagne), transparent);
    margin: 0 auto 28px;
  }
  .quote-text {
    font-family: var(--ts-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(22px, 3vw, 40px); font-style: italic; font-weight: 400;
    color: rgba(247,243,238,.92); line-height: 1.5;
    margin: 0 0 28px;
  }
  .quote-line {
    width: 48px; height: 1px;
    background: linear-gradient(to right, transparent, var(--champagne), transparent);
    margin: 0 auto 22px;
  }
  .quote-author {
    font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--champagne-lt);
  }

  /* ══ RESULTADOS ═══════════════════════════════════════════ */
  .resultados-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: var(--line);
    margin-top: 52px; border-radius: 14px; overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,.05);
  }
  .res-cell {
    background: #fff; padding: 32px 28px;
    display: flex; flex-direction: column; gap: 6px;
    transition: background .2s;
  }
  .res-cell:hover { background: var(--blush); }
  .res-num {
    font-family: var(--ts-heading), 'Cormorant Garamond', Georgia, serif;
    font-size: 44px; font-weight: 600; line-height: 1;
    color: var(--champagne-dk);
  }
  .res-label {
    font-size: 13px; font-weight: 600; color: var(--charcoal); letter-spacing: .02em;
  }
  .res-sub {
    font-size: 12px; color: var(--muted);
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px; margin-top: 40px;
  }
  .gallery-item {
    aspect-ratio: 3/4;
    background: var(--blush);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transition: transform .3s ease, box-shadow .3s ease;
  }
  .gallery-item:hover { transform: scale(1.02); box-shadow: 0 12px 32px rgba(0,0,0,.1); }
  .gallery-item-label {
    position: absolute; inset: 0;
    display: flex; align-items: flex-end;
    background: linear-gradient(to top, rgba(28,28,28,.5) 0%, transparent 50%);
    padding: 16px;
    opacity: 0; transition: opacity .25s;
  }
  .gallery-item:hover .gallery-item-label { opacity: 1; }
  .gallery-item-label span {
    font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    color: rgba(247,243,238,.9);
  }

  /* ══ FAQ ════════════════════════════════════════════════ */
  .faq-list { margin-top: 48px; display: flex; flex-direction: column; gap: 8px; max-width: 820px; }
  .faq-item {
    background: #fff; border-radius: 10px;
    border: 1px solid var(--line-lt);
    overflow: hidden;
    transition: border-color .2s, box-shadow .2s;
  }
  .faq-item.open { border-color: rgba(201,169,110,.35); box-shadow: 0 4px 18px rgba(155,117,64,.1); }
  .faq-btn {
    width: 100%; padding: 20px 22px;
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
    text-align: left;
    font-size: 15px; font-weight: 600; color: var(--charcoal);
    transition: color .2s;
  }
  .faq-item.open .faq-btn { color: var(--champagne-dk); }
  .faq-icon { flex: none; color: var(--champagne); }
  .faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows .35s ease;
  }
  .faq-item.open .faq-answer { grid-template-rows: 1fr; }
  .faq-answer-inner { overflow: hidden; }
  .faq-answer p { margin: 0; padding: 0 22px 20px; font-size: 14px; line-height: 1.85; color: var(--slate); }

  /* ══ CTA FINAL ════════════════════════════════════════════ */
  .cta-final {
    padding: 100px 0;
    background: var(--ink);
    position: relative; overflow: hidden;
  }
  .cta-final::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 20% 50%, rgba(201,169,110,.1) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 80% 30%, rgba(201,169,110,.07) 0%, transparent 60%);
    pointer-events: none;
  }
  .cta-content {
    position: relative; z-index: 1;
    max-width: 680px; margin: 0 auto; text-align: center;
  }
  .cta-content .sec-h2 { color: #fff; }
  .cta-content .sec-lead { color: rgba(247,243,238,.58); margin: 16px auto 0; }
  .cta-champ-line {
    width: 56px; height: 1px;
    background: linear-gradient(to right, transparent, var(--champagne), transparent);
    margin: 0 auto 24px;
  }
  .cta-actions {
    display: flex; flex-wrap: wrap; gap: 14px; justify-content: center;
    margin-top: 36px;
  }

  /* ══ FOOTER ══════════════════════════════════════════════ */
  .footer {
    background: var(--ink); color: rgba(247,243,238,.5);
    font-size: 13px; line-height: 1.7;
    border-top: 1px solid rgba(247,243,238,.07);
  }
  .footer-body {
    padding: 64px 0 48px;
    display: grid; grid-template-columns: 1.6fr 1fr 1fr;
    gap: 52px;
  }
  .footer-brand .footer-cred {
    display: block; margin-bottom: 18px;
    font-size: 12px; color: rgba(247,243,238,.4);
  }
  .footer-brand p { margin: 0 0 20px; max-width: 280px; font-size: 13px; }
  .footer-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .footer-tag {
    padding: 4px 10px; border-radius: 4px;
    border: 1px solid rgba(247,243,238,.1);
    font-size: 11px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
    color: rgba(247,243,238,.4);
    transition: border-color .2s, color .2s;
  }
  .footer-tag:hover { border-color: var(--champagne); color: var(--champagne-lt); }
  .footer-col h4 {
    margin: 0 0 16px;
    font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: #fff;
  }
  .footer-col a {
    display: flex; align-items: center; gap: 8px;
    color: rgba(247,243,238,.5); padding: 5px 0; font-size: 13px;
    transition: color .15s, gap .15s;
  }
  .footer-col a:hover { color: var(--champagne-lt); gap: 12px; }
  .footer-col a svg { flex: none; }
  .footer-line { border: none; border-top: 1px solid rgba(247,243,238,.06); margin: 0; }
  .footer-bottom {
    padding: 18px 0;
    display: flex; flex-wrap: wrap; gap: 10px;
    align-items: center; justify-content: space-between;
    font-size: 12px; color: rgba(247,243,238,.45);
  }
  .footer-bottom a { color: var(--champagne-lt); font-weight: 600; transition: color .15s; }
  .footer-bottom a:hover { color: #fff; }

  /* ══ WHATSAPP FLOAT ═══════════════════════════════════════ */
  .wa-float {
    position: fixed; z-index: 1002;
    right: max(20px, env(safe-area-inset-right));
    bottom: max(20px, env(safe-area-inset-bottom));
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--wa);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 20px rgba(37,211,102,.38);
    transform: scale(0) translateY(20px); opacity: 0;
    transition: transform .3s ease, box-shadow .2s;
    animation: wa-entrance .5s cubic-bezier(.22,.9,.36,1) 1.2s forwards,
               wa-pulse 2.2s ease-out 2s infinite;
  }
  .wa-float:hover { transform: scale(1.08) !important; }
  @keyframes wa-entrance { to { transform: scale(1) translateY(0); opacity: 1; } }
  @keyframes wa-pulse {
    0%  { box-shadow: 0 4px 20px rgba(37,211,102,.38), 0 0 0 0 rgba(37,211,102,.38); }
    70% { box-shadow: 0 4px 20px rgba(37,211,102,.38), 0 0 0 14px rgba(37,211,102,0); }
    100%{ box-shadow: 0 4px 20px rgba(37,211,102,.38), 0 0 0 0 rgba(37,211,102,0); }
  }

  /* ══ FOCUS ════════════════════════════════════════════════ */
  a:focus-visible, button:focus-visible {
    outline: none; border-radius: 4px;
    box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--champagne-dk);
  }

  /* ══ SCROLL REVEAL ════════════════════════════════════════ */
  [data-anim] {
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(.22,.9,.36,1);
    transition-duration: .65s;
  }
  [data-anim="up"]    { opacity: 0; transform: translateY(24px); }
  [data-anim="left"]  { opacity: 0; transform: translateX(-32px); }
  [data-anim="right"] { opacity: 0; transform: translateX(32px); }
  [data-anim="scale"] { opacity: 0; transform: scale(.94); }
  [data-anim="fade"]  { opacity: 0; }
  [data-anim].anim-in { opacity: 1; transform: none; }
  [data-delay="1"] { transition-delay: .1s; }
  [data-delay="2"] { transition-delay: .2s; }
  [data-delay="3"] { transition-delay: .3s; }
  [data-delay="4"] { transition-delay: .4s; }
  [data-delay="5"] { transition-delay: .5s; }

  /* ══ RESPONSIVE ═══════════════════════════════════════════ */
  @media (min-width: 1025px) {
    .nav-links { display: flex; }
    .menu-btn { display: none; }
  }
  @media (max-width: 1024px) {
    .proc-grid { grid-template-columns: repeat(2, 1fr); }
    .proc-grid-row2 { max-width: 100%; grid-template-columns: repeat(2, 1fr); }
    .pre-videos { grid-template-columns: repeat(3, 1fr); }
    .creds-inner { grid-template-columns: repeat(2, 1fr); }
    .dif-grid { grid-template-columns: repeat(2, 1fr); }
    .resultados-grid { grid-template-columns: repeat(2, 1fr); }
    .gallery-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 900px) {
    .sobre-grid { grid-template-columns: 1fr; }
    .sobre-photo-col { min-height: 320px; }
    .sobre-text-col { padding: 36px 28px; }
    .footer-body { grid-template-columns: 1fr 1fr; }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 767px) {
    :root { --nav: 60px; }
    .pre-bar {
      padding: 8px 75px 8px 56px;
      gap: 1px;
    }
    .pre-line,
    .pre-sub {
      transform: translateX(-18px);
    }
    .pre-site-atual {
      right: 10px;
      font-size: 9px;
      padding: 4px 8px;
    }
    .wrap, .nav-inner { width: min(100% - 32px, 1200px); }
    .hero {
      grid-template-columns: 1fr;
      grid-template-areas: "photo" "text";
      min-height: auto;
    }
    .hero-left {
      grid-area: text;
      padding: 40px 20px 52px;
    }
    .hero-right {
      grid-area: photo;
      height: 86vw; min-height: 360px; max-height: 520px;
    }
    .hero-photo {
      padding: 28px 7% 0;
    }
    .hero-badge {
      left: 16px; right: 16px; bottom: 10px;
      justify-content: center; text-align: center;
      transform: none; opacity: 0;
      transition: opacity .6s ease .9s;
    }
    .hero-ready .hero-badge { opacity: 1; transform: none; }
    .hero h1 { font-size: clamp(34px, 9vw, 46px); }
    .hero-sub { font-size: 15px; }
    .hero-actions a, .cta-actions a { width: 100%; justify-content: center; }
    .proc-grid { grid-template-columns: 1fr; }
    .proc-grid-row2 { grid-template-columns: 1fr; }
    .dif-grid { grid-template-columns: 1fr; }
    .pre-videos { grid-template-columns: repeat(2, 1fr); }
    .resultados-grid { grid-template-columns: repeat(2, 1fr); }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-body { grid-template-columns: 1fr; gap: 28px; padding: 44px 0 32px; }
    .section { padding: 64px 0; }
    .creds-inner { width: min(100% - 32px, 1200px); }
    .cred-cell { padding: 16px; }
    .pre-back { left: 6px; min-width: 44px; min-height: 44px; padding: 0 8px; }
    .pre-back span { display: none; }
  }

  /* ══ VIDEO MODAL ══════════════════════════════════════════ */
  .vmodal-backdrop {
    position: fixed; inset: 0; z-index: 2000;
    background: rgba(0,0,0,.88);
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
    animation: vmodal-in .22s ease;
  }
  @keyframes vmodal-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .vmodal-box {
    position: relative;
    width: min(860px, 100%);
    background: #0D0D0D;
    border-radius: 14px; overflow: hidden;
    box-shadow: 0 32px 80px rgba(0,0,0,.7);
    animation: vmodal-scale .25s cubic-bezier(.22,.9,.36,1);
  }
  @keyframes vmodal-scale {
    from { transform: scale(.94); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
  }
  .vmodal-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 20px 14px;
    border-bottom: 1px solid rgba(255,255,255,.07);
  }
  .vmodal-title {
    font-size: 13px; font-weight: 600; letter-spacing: .06em;
    color: rgba(247,243,238,.8);
  }
  .vmodal-close {
    width: 34px; height: 34px; border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    color: rgba(247,243,238,.6);
    background: rgba(255,255,255,.06);
    transition: background .15s, color .15s;
  }
  .vmodal-close:hover { background: rgba(255,255,255,.12); color: #fff; }
  .vmodal-player {
    width: 100%; aspect-ratio: 16/9;
    display: block; background: #000;
    border: 0;
  }

  /* ══ REDUCED MOTION ═══════════════════════════════════════ */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    html { scroll-behavior: auto; }
    .hero-photo, .hero-badge, .hero-kicker, .hero h1,
    .hero-sub, .hero-actions, .hero-trust { opacity: 1; transform: none; transition: none; }
    [data-anim] { opacity: 1; transform: none; transition: none; }
  }
`;

/* ─── COMPONENT ────────────────────────────────────────────── */
export default function ThaisSouzaProposalPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<{
    url: string;
    title: string;
    kind: "youtube" | "mp4";
  } | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /* nav scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* hero entrance */
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* fechar menu no resize */
  useEffect(() => {
    if (!menuOpen) return;
    const fn = () => setMenuOpen(false);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [menuOpen]);

  /* fechar modal com ESC */
  useEffect(() => {
    if (!videoModal) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoModal(null);
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [videoModal]);

  /* fechar menu com Escape */
  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [menuOpen]);

  /* scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll("[data-anim]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("anim-in");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.07 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      {/* ── PREVIEW BAR ── */}
      <div className="pre-bar" role="note" aria-label="Aviso de proposta">
        <Link
          className="pre-back"
          href="/proposta-comercial"
          aria-label="Voltar para propostas comerciais"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className="pre-line">
          <span className="pre-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="pre-sub">
          Proposta elaborada pela{" "}
          <a
            href="https://lumasites.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            LumaSites.com.br
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </span>
        <a
          className="pre-site-atual"
          href={SITE_ATUAL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver site atual da Dra. Thais Souza (abre em nova aba)"
        >
          Site atual <ExternalLink size={10} aria-hidden="true" />
        </a>
      </div>

      {/* ── NAV ── */}
      <nav
        className={`nav${scrolled ? " scrolled" : ""}`}
        aria-label="Navegação principal"
      >
        <div className="nav-inner">
          <a
            className="brand"
            href="#top"
            aria-label="Dra. Thais Souza — página inicial"
          >
            <Image
              className="brand-logo"
              src={IMG.logo}
              alt="Dra. Thais Souza — Cirurgiã Plástica"
              width={160}
              height={38}
            />
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className="nav-cta-btn"
              href={WA}
              target="_blank"
              rel="noreferrer"
            >
              <WaIcon size={13} /> Agendar consulta
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
          <button
            className="menu-btn"
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mob-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav id="mob-menu" className="mob-menu" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Agendar consulta
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </nav>
      )}

      <main id="conteudo" className="ts">
        {/* ── HERO ── */}
        <section
          id="top"
          className={`hero${heroReady ? " hero-ready" : ""}`}
          aria-label="Dra. Thais Souza — Cirurgiã Plástica"
        >
          <div className="hero-left">
            <span className="hero-kicker">Cirurgia Plástica · Membro SBCP</span>
            <h1>
              Vidas esculpidas
              <br />
              com técnica, cuidado
              <br />e <em>arte cirúrgica.</em>
            </h1>
            <p className="hero-sub">
              Dra. Thais Souza é cirurgiã plástica com residência pela UFMG e
              membro da SBCP, dedicada a resultados naturais e uma experiência
              humanizada em Visconde do Rio Branco, MG.
            </p>
            <div className="hero-actions">
              <a
                className="btn-primary"
                href={WA}
                target="_blank"
                rel="noreferrer"
              >
                <WaIcon size={16} /> Agendar pré-consulta
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
              <a className="btn-outline" href="#procedimentos">
                Ver procedimentos <ChevronRight size={15} />
              </a>
            </div>
            <div className="hero-trust">
              {[
                { v: "SBCP", l: "Sociedade Brasileira" },
                { v: "UFMG", l: "Residência Médica" },
                { v: "UFJF", l: "Graduação" },
                { v: "Visconde / MG", l: "Consultório e cirurgias" },
              ].map((t) => (
                <div className="trust-item" key={t.l}>
                  <strong>{t.v}</strong>
                  <span>{t.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right" aria-hidden="true">
            <Image
              className="hero-photo"
              src={IMG.hero}
              alt=""
              role="presentation"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              quality={85}
              priority
            />
            <div className="hero-badge">
              <strong>Dra. Thais Souza</strong>
              <span>Cirurgiã Plástica · Membro SBCP</span>
            </div>
          </div>
        </section>

        {/* ── CREDENTIALS STRIP ── */}
        <section className="creds-strip" aria-label="Credenciais profissionais">
          <ul className="creds-inner">
            {[
              { v: "SBCP", l: "Membro Titular" },
              { v: "UFMG", l: "Residência Cirúrgica" },
              { v: "UFJF", l: "Graduação em Medicina" },
              { v: "H. São João Batista", l: "Cirurgias realizadas" },
            ].map((c) => (
              <li className="cred-cell" key={c.l}>
                <strong>{c.v}</strong>
                <span>{c.l}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── PROCEDIMENTOS ── */}
        <section
          id="procedimentos"
          className="section bg-cream"
          aria-label="Procedimentos"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Especialidades</span>
              <h2 className="sec-h2">
                Procedimentos de alto padrão,
                <br />
                resultados naturais.
              </h2>
              <p className="sec-lead">
                Cada cirurgia é planejada individualmente, respeitando a
                anatomia, o histórico e as expectativas de cada paciente.
              </p>
            </div>

            <div className="proc-grid" data-anim="up" data-delay="1">
              {procedimentos.slice(0, 3).map((p, i) => (
                <article
                  className="proc-card"
                  key={p.n}
                  data-anim="up"
                  data-delay={String(i + 1)}
                >
                  <span className="proc-num">{p.n}</span>
                  <h3 className="proc-name">{p.nome}</h3>
                  <span className="proc-detalhe">{p.detalhe}</span>
                  <p className="proc-desc">{p.desc}</p>
                  <span className="proc-link">
                    Saiba mais <ChevronRight size={12} />
                  </span>
                </article>
              ))}
            </div>

            <div className="proc-grid-row2">
              {procedimentos.slice(3).map((p, i) => (
                <article
                  className="proc-card"
                  key={p.n}
                  data-anim="up"
                  data-delay={String(i + 1)}
                >
                  <span className="proc-num">{p.n}</span>
                  <h3 className="proc-name">{p.nome}</h3>
                  <span className="proc-detalhe">{p.detalhe}</span>
                  <p className="proc-desc">{p.desc}</p>
                  <span className="proc-link">
                    Saiba mais <ChevronRight size={12} />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section
          id="sobre"
          className="section bg-blush"
          aria-label="Sobre Dra. Thais Souza"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Sobre</span>
              <h2 className="sec-h2">Dra. Thais Souza</h2>
            </div>
            <div className="sobre-grid">
              <div className="sobre-photo-col" data-anim="left">
                <Image
                  className="sobre-photo"
                  src={IMG.sobre}
                  alt="Dra. Thais Souza, Cirurgiã Plástica"
                  fill
                  sizes="(max-width: 900px) 100vw, 44vw"
                  quality={85}
                />
              </div>
              <div className="sobre-text-col" data-anim="right">
                <h3 className="sobre-name">Dra. Thais Souza</h3>
                <span className="sobre-role">Cirurgiã Plástica</span>
                <span className="sobre-cred">
                  Membro SBCP · Visconde do Rio Branco, MG
                </span>
                <p>
                  Graduada pela Universidade Federal de Juiz de Fora (UFJF) e
                  com residência em Cirurgia Geral e Plástica pela UFMG, a Dra.
                  Thais Souza é membro da Sociedade Brasileira de Cirurgia
                  Plástica — a certificação mais rigorosa da especialidade no
                  país.
                </p>
                <p>
                  Sua prática clínica é orientada por uma filosofia clara: o
                  maior patrimônio de um médico é o paciente. Por isso, cada
                  atendimento começa pelo respeito ao tempo, ao corpo e às
                  expectativas de quem a procura.
                </p>
                <p>
                  Atua no consultório em Visconde do Rio Branco e realiza
                  cirurgias no Hospital São João Batista, levando para a Zona da
                  Mata Mineira um nível de cuidado e tecnicidade habitualmente
                  encontrado apenas nos grandes centros.
                </p>
                <div className="sobre-tags">
                  {[
                    "SBCP",
                    "UFMG",
                    "UFJF",
                    "Contorno Corporal",
                    "Contorno Mamário",
                    "Recuperação Humanizada",
                  ].map((t) => (
                    <span className="sobre-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAIS TÉCNICOS ── */}
        <section
          id="diferenciais"
          className="section bg-cream"
          aria-label="Diferenciais técnicos"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Técnica</span>
              <h2 className="sec-h2">
                O que torna cada procedimento
                <br />
                diferente aqui.
              </h2>
              <p className="sec-lead">
                Além das especialidades tradicionais, a Dra. Thais utiliza
                técnicas modernas que elevam a qualidade dos resultados e a
                experiência do paciente.
              </p>
            </div>
            <div className="dif-grid">
              {diferenciais.map((d, i) => (
                <div
                  className="dif-card"
                  key={d.titulo}
                  data-anim="up"
                  data-delay={String(i + 1)}
                >
                  <span className="dif-icone" aria-hidden="true">
                    {d.icone}
                  </span>
                  <h3 className="dif-titulo">{d.titulo}</h3>
                  <p className="dif-desc">{d.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRÉ-CONSULTA ── */}
        <section
          id="pre-consulta"
          className="pre-section"
          aria-label="Série de pré-consulta"
        >
          <div className="wrap pre-inner">
            <div className="pre-header" data-anim="up">
              <span className="sec-label">Pré-Consulta</span>
              <h2 className="sec-h2">
                O tempo de cada paciente
                <br />é insubstituível.
              </h2>
              <p className="sec-lead">
                Por isso, a Dra. Thais criou uma série de vídeos educativos — um
                para cada procedimento — para que você chegue à consulta
                informada, segura e com suas principais dúvidas já respondidas.
              </p>
            </div>

            <div className="pre-videos" data-anim="up" data-delay="2">
              {videoCards.map((v, i) => (
                <div
                  className={`pre-video-card${v.url ? " has-video" : ""}`}
                  key={v.proc}
                  data-anim="up"
                  data-delay={String(i + 1)}
                  role={v.url ? "button" : undefined}
                  tabIndex={v.url ? 0 : undefined}
                  aria-label={v.url ? `Assistir vídeo: ${v.proc}` : undefined}
                  onClick={() =>
                    v.url &&
                    setVideoModal({ url: v.url, title: v.proc, kind: v.kind })
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    v.url &&
                    setVideoModal({ url: v.url, title: v.proc, kind: v.kind })
                  }
                >
                  <div className="pre-video-thumb" aria-hidden="true">
                    {v.url && <span className="pre-video-badge">Assistir</span>}
                    <Image
                      className="pre-video-thumb-img"
                      src={v.thumb}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 50vw, 20vw"
                      quality={75}
                    />
                    <div className="pre-video-play">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="pre-video-info">
                    <div className="pre-video-proc">{v.proc}</div>
                    <div className="pre-video-dur">{v.duracao}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pre-cta" data-anim="up" data-delay="3">
              <a
                className="btn-champ"
                href={WA}
                target="_blank"
                rel="noreferrer"
              >
                <WaIcon size={17} /> Agendar minha consulta
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
              <span className="pre-cta-text">
                Assistiu ao vídeo? Chegue à consulta já preparada.
              </span>
            </div>
          </div>
        </section>

        {/* ── QUOTE BANNER ── */}
        <section className="quote-banner" aria-label="Filosofia">
          <div className="wrap">
            <div className="quote-inner" data-anim="up">
              <div className="quote-ornament" aria-hidden="true" />
              <p className="quote-text">
                &ldquo;O maior patrimônio de um médico é o paciente.&rdquo;
              </p>
              <div className="quote-line" aria-hidden="true" />
              <span className="quote-author">
                — Dra. Thais Souza · Cirurgiã Plástica
              </span>
            </div>
          </div>
        </section>

        {/* ── RESULTADOS ── */}
        <section
          id="resultados"
          className="section bg-cream"
          aria-label="Resultados"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Transformações</span>
              <h2 className="sec-h2">
                Milhares de vidas
                <br />
                esculpidas.
              </h2>
              <p className="sec-lead">
                Cada resultado é único porque cada paciente é única. Confira
                alguns dos trabalhos realizados pela Dra. Thais Souza ao longo
                de 2025.
              </p>
            </div>

            <div className="resultados-grid" data-anim="scale" data-delay="1">
              {[
                { v: "20+", l: "Resultados publicados", s: "Apenas em 2025" },
                {
                  v: "SBCP",
                  l: "Credencial máxima",
                  s: "Soc. Brasileira de Cir. Plástica",
                },
                {
                  v: "5",
                  l: "Especialidades",
                  s: "Contorno corporal e mamário",
                },
                {
                  v: "Visconde / MG",
                  l: "Referência regional",
                  s: "Zona da Mata Mineira",
                },
              ].map((r) => (
                <div className="res-cell" key={r.l}>
                  <div className="res-num">{r.v}</div>
                  <div className="res-label">{r.l}</div>
                  <div className="res-sub">{r.s}</div>
                </div>
              ))}
            </div>

            <div className="gallery-grid" data-anim="up" data-delay="2">
              {resultadoImages.map((img, i) => (
                <div
                  className="gallery-item"
                  key={i}
                  role="img"
                  aria-label={img.label}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    sizes="(max-width: 767px) 50vw, 25vw"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div className="gallery-item-label">
                    <span>{img.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{ marginTop: "32px", textAlign: "center" }}
              data-anim="up"
              data-delay="3"
            >
              <a
                className="btn-outline"
                href={IG}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={15} /> Ver mais resultados no Instagram
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          id="faq"
          className="section bg-blush"
          aria-label="Perguntas frequentes"
        >
          <div className="wrap">
            <div data-anim="up">
              <span className="sec-label">Dúvidas</span>
              <h2 className="sec-h2">Perguntas frequentes.</h2>
              <p className="sec-lead">
                Encontre respostas para as principais dúvidas sobre
                procedimentos, formação e atendimento.
              </p>
            </div>
            <div className="faq-list" data-anim="up" data-delay="1">
              {faqs.map((faq, i) => (
                <div
                  className={`faq-item${openFaq === i ? " open" : ""}`}
                  key={faq.q}
                >
                  <button
                    className="faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    {faq.q}
                    <span className="faq-icon" aria-hidden="true">
                      {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    className="faq-answer"
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-label={faq.q}
                    hidden={openFaq !== i ? true : undefined}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contato" className="cta-final" aria-label="Agendamento">
          <div className="wrap">
            <div className="cta-content" data-anim="up">
              <div className="cta-champ-line" aria-hidden="true" />
              <span
                className="sec-label"
                style={{ color: "var(--champagne-lt)" }}
              >
                Primeiro passo
              </span>
              <h2 className="sec-h2" style={{ color: "#fff" }}>
                Dê o primeiro passo
                <br />
                em direção à sua transformação.
              </h2>
              <p
                className="sec-lead"
                style={{
                  color: "rgba(247,243,238,.58)",
                  margin: "16px auto 0",
                }}
              >
                Agende sua pré-consulta e conheça pessoalmente a Dra. Thais
                Souza. O cuidado com o seu caso começa no primeiro contato.
              </p>
              <div className="cta-actions">
                <a
                  className="btn-champ"
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WaIcon size={18} /> Agendar pelo WhatsApp
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a
                  className="btn-ghost"
                  href={IG}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={16} /> @drathaissouzacirplastica
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a
                  className="btn-ghost"
                  href={SITE_ATUAL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={15} /> Ver site atual
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <div className="wrap">
            <div className="footer-body">
              <div className="footer-brand">
                <Image
                  src={IMG.logo}
                  alt="Dra. Thais Souza — Cirurgiã Plástica"
                  width={180}
                  height={44}
                  style={{ marginBottom: "14px" }}
                />
                <span className="footer-cred">Membro SBCP · UFMG · UFJF</span>
                <p>
                  Cirurgia plástica de alto padrão em Visconde do Rio Branco,
                  MG. Resultados naturais, técnica avançada e cuidado
                  humanizado.
                </p>
                <div className="footer-tags">
                  {[
                    "SBCP",
                    "Lipoescultura",
                    "Mamoplastia",
                    "Mastopexia",
                    "LipoHD",
                  ].map((t) => (
                    <span className="footer-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <nav className="footer-col" aria-label="Navegação no rodapé">
                <h4>Procedimentos</h4>
                <a href="#procedimentos">Lipoabdominoplastia</a>
                <a href="#procedimentos">Lipoescultura</a>
                <a href="#procedimentos">Mamoplastia de Aumento</a>
                <a href="#procedimentos">Mamoplastia Redutora</a>
                <a href="#procedimentos">Mastopexia</a>
              </nav>
              <div className="footer-col">
                <h4>Contato</h4>
                <a href={WA} target="_blank" rel="noreferrer">
                  <WaIcon size={14} /> WhatsApp
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a href={IG} target="_blank" rel="noreferrer">
                  <Instagram size={14} /> Instagram
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a href={TK} target="_blank" rel="noreferrer">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.26 6.26 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.17 8.17 0 004.79 1.52V6.72a4.86 4.86 0 01-1.02-.03z" />
                  </svg>
                  TikTok
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </div>
            <hr className="footer-line" />
            <div className="footer-bottom">
              <span>
                © 2026 Dra. Thais Souza. Cirurgiã Plástica — Membro SBCP.
              </span>
              <span>
                Site por{" "}
                <a
                  href="https://lumasites.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  LumaSites
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </main>

      {/* ── WHATSAPP FLOAT ── */}
      <a
        className="wa-float"
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Dra. Thais Souza pelo WhatsApp (abre em nova aba)"
      >
        <WaIcon size={27} color="white" />
      </a>

      {/* ── VIDEO MODAL ── */}
      {videoModal && (
        <div
          className="vmodal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`Vídeo: ${videoModal.title}`}
          onClick={(e) => e.target === e.currentTarget && setVideoModal(null)}
        >
          <div className="vmodal-box">
            <div className="vmodal-header">
              <span className="vmodal-title">{videoModal.title}</span>
              <button
                className="vmodal-close"
                onClick={() => setVideoModal(null)}
                aria-label="Fechar vídeo"
              >
                <X size={16} />
              </button>
            </div>
            {videoModal.kind === "youtube" ? (
              <iframe
                className="vmodal-player"
                src={videoModal.url}
                title={videoModal.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                className="vmodal-player"
                src={videoModal.url}
                controls
                autoPlay
                playsInline
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
