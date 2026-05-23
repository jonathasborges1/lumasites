"use client";

import { useEffect, useState } from "react";
import {
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Scissors,
  X,
} from "lucide-react";

const WA_NUMBER = "5511983325791";

const whatsApp = (
  message = "Ola, Andre! Vim pelo seu site e gostaria de agendar um horario."
) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const images = {
  hero: "/images/andrelopes/resultado-morena-iluminada.jpg",
  portrait: "/images/andrelopes/andre-lopes-retrato.jpg",
  story: "/images/andrelopes/andre-lopes-autoridade-historia.jpg",
  backstage: "/images/andrelopes/bastidores-salao-finalizacao.jpg",
  alignment: "/images/andrelopes/resultado-realinhamento-capilar.jpg",
  makeup: "/images/andrelopes/makeup-pele-perfeita.jpg",
};

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Servicos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#espaco", label: "Espaco" },
  { href: "#contato", label: "Agenda" },
];

const hours = [
  { days: "Terca a Sabado", time: "9h as 19h" },
  { days: "Segunda-feira", time: "Agendamento previo" },
  { days: "Feriados", time: "Agendamento previo" },
];

const services = [
  {
    title: "Corte feminino",
    text: "Corte tecnico pensado para valorizar o rosto, o cabelo e o estilo de cada cliente. Do classico ao arrojado — incluindo penteados e finalizacoes especiais.",
    image: images.backstage,
    position: "center 15%",
    label: "Transformar",
    cta: "Quero um novo corte",
  },
  {
    title: "Colorimetria e mechas",
    text: "Morena iluminada, mechas, loiro, correcao de cor — criacao de cor com leitura tecnica do fio e do desejo da cliente.",
    image: images.hero,
    position: "center 28%",
    label: "Iluminar",
    cta: "Quero iluminar meu cabelo",
  },
  {
    title: "Tratamentos e progressiva",
    text: "Realinhamento capilar, progressiva, alisamento espelhado e tratamentos de brilho para cabelo saudavel e acabamento fotografavel.",
    image: images.alignment,
    position: "center top",
    label: "Tratar",
    cta: "Quero tratar meu cabelo",
  },
  {
    title: "Make e pele perfeita",
    text: "Maquiagem profissional para realcar beleza, expressao e presenca — do dia a dia a ocasioes especiais.",
    image: images.makeup,
    position: "center 20%",
    label: "Realcar",
    cta: "Quero fazer minha make",
  },
];

const proofPoints = [
  { value: "22K+", label: "seguidores" },
  { value: "473", label: "posts" },
  { value: "62", label: "destaques" },
  { value: "✓", label: "conta verificada" },
];

const WaIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const credentials = [
  "L'Oreal Professionnel Education Brasil",
  "Catharine Hill Academy",
  "Mirra Cosmeticos",
  "Olenka Cosmeticos",
];


const css = `
  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; }

  :root {
    --proposal-bar-height: 52px;
    --proposal-nav-height: 72px;
    --ink: #16120f;
    --soft-ink: #46382f;
    --muted: #76685f;
    --paper: #fffaf4;
    --warm: #f4ebe0;
    --cream: #fbf5ec;
    --gold: #c8953d;
    --gold-dark: #8d6324;
    --rose: #c8797e;
    --line: rgba(22, 18, 15, 0.12);
    --dark: #100c09;
    --white: #fffdf9;
    --whatsapp: #25d366;
  }

  .al-page {
    overflow-x: clip;
    color: var(--ink);
    background: var(--paper);
    font-family: var(--al-body, Poppins, system-ui, sans-serif);
    min-height: 100vh;
  }

  .al-preview,
  .al-nav,
  .al-mobile,
  .al-wa-float {
    font-family: var(--al-body, Poppins, system-ui, sans-serif);
  }

  .al-preview {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1001;
    min-height: var(--proposal-bar-height);
    padding: 7px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    text-align: center;
    background: var(--dark);
    color: rgba(255, 253, 249, 0.74);
  }

  .al-preview-line1 {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--white);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .al-preview-line1 span {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: var(--gold);
    flex: 0 0 auto;
  }
  .al-preview-detail {
    display: block;
    color: rgba(255, 253, 249, 0.55);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: none;
  }
  .al-preview-detail a {
    color: rgba(255, 253, 249, 0.72);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .al-preview-detail a:hover { color: var(--white); }
  .al-nav {
    position: fixed;
    z-index: 1000;
    inset: var(--proposal-bar-height) 0 auto 0;
    height: var(--proposal-nav-height);
    border-bottom: 1px solid rgba(255, 253, 249, 0.12);
    background: rgba(16, 12, 9, 0.76);
    backdrop-filter: blur(18px);
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .al-nav.scrolled {
    background: rgba(255, 250, 244, 0.94);
    border-color: var(--line);
  }

  .al-nav-inner,
  .al-wrap {
    width: min(1160px, calc(100% - 40px));
    margin: 0 auto;
  }

  .al-nav-inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .al-brand {
    color: var(--white);
    line-height: 1;
  }

  .al-nav.scrolled .al-brand { color: var(--ink); }

  .al-brand strong {
    display: block;
    font-family: var(--al-heading, "Playfair Display", Georgia, serif);
    font-size: 21px;
    font-weight: 700;
  }

  .al-brand small {
    display: block;
    margin-top: 7px;
    color: var(--gold);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .al-links {
    display: none;
    align-items: center;
    gap: 24px;
  }

  .al-links a {
    color: rgba(255, 253, 249, 0.78);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .al-nav.scrolled .al-links a { color: var(--soft-ink); }
  .al-links a:hover { color: var(--gold); }

  .al-button,
  .al-outline,
  .al-nav-cta,
  .al-menu-button {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 0;
    cursor: pointer;
  }

  .al-nav-cta {
    padding: 0 18px;
    border-radius: 999px;
    background: var(--gold);
    color: var(--dark) !important;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .al-menu-button {
    width: 44px;
    border-radius: 999px;
    color: var(--white);
    background: rgba(255, 253, 249, 0.1);
  }

  .al-nav.scrolled .al-menu-button {
    color: var(--ink);
    background: rgba(16, 12, 9, 0.08);
  }

  .al-mobile {
    position: fixed;
    z-index: 999;
    inset: calc(var(--proposal-bar-height) + var(--proposal-nav-height)) 0 auto 0;
    display: grid;
    gap: 0;
    padding: 16px 20px 22px;
    background: var(--paper);
    border-bottom: 1px solid var(--line);
    box-shadow: 0 20px 50px rgba(16, 12, 9, 0.18);
  }

  .al-mobile a {
    padding: 15px 0;
    border-bottom: 1px solid var(--line);
    color: var(--soft-ink);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .al-mobile a:last-child { border-bottom: 0; }

  .al-hero {
    position: relative;
    min-height: 100svh;
    padding: 120px 0 52px;
    display: flex;
    align-items: end;
    overflow: hidden;
    background: var(--dark);
  }

  .al-hero-media {
    position: absolute;
    inset: 0;
  }

  .al-hero-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 28%;
    filter: saturate(1.05) contrast(1.05) brightness(0.97);
  }

  .al-hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(16, 12, 9, 0.93), rgba(16, 12, 9, 0.62) 48%, rgba(16, 12, 9, 0.18)),
      linear-gradient(0deg, rgba(16, 12, 9, 0.96), rgba(16, 12, 9, 0.18) 58%);
  }

  .al-hero-content {
    position: relative;
    z-index: 1;
    max-width: 760px;
    color: var(--white);
  }

  .al-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
    color: var(--gold);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.24em;
    text-transform: uppercase;
  }

  .al-kicker::before {
    content: "";
    width: 32px;
    height: 1px;
    background: currentColor;
  }

  .al-hero h1 {
    margin: 0;
    max-width: 760px;
    font-family: var(--al-heading, "Playfair Display", Georgia, serif);
    font-size: clamp(30px, 4.8vw, 58px);
    line-height: 1.05;
    letter-spacing: 0;
    font-weight: 700;
  }

  .al-hero h1 span { color: var(--gold); font-style: italic; }

  .al-hero p {
    max-width: 590px;
    margin: 24px 0 0;
    color: rgba(255, 253, 249, 0.82);
    font-size: 16px;
    line-height: 1.8;
  }

  .al-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
  }

  .al-button {
    padding: 0 22px;
    border-radius: 999px;
    background: var(--whatsapp);
    color: #062414;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 18px 44px rgba(37, 211, 102, 0.28);
  }

  .al-outline {
    padding: 0 20px;
    border: 1px solid rgba(255, 253, 249, 0.28);
    border-radius: 999px;
    color: var(--white);
    background: rgba(255, 253, 249, 0.08);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .al-hero-proof {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-top: 38px;
    max-width: 560px;
  }

  .al-proof {
    border: 1px solid rgba(255, 253, 249, 0.16);
    background: rgba(255, 253, 249, 0.08);
    padding: 14px 16px;
  }

  .al-proof strong {
    display: block;
    color: var(--white);
    font-family: var(--al-heading, "Playfair Display", Georgia, serif);
    font-size: 25px;
    line-height: 1;
  }

  .al-proof span {
    display: block;
    margin-top: 7px;
    color: rgba(255, 253, 249, 0.62);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .al-section {
    padding: 96px 0;
    background: var(--paper);
  }

  .al-section.alt { background: var(--warm); }
  .al-section.dark { background: var(--dark); color: var(--white); }

  .al-section-head {
    max-width: 720px;
    margin-bottom: 42px;
  }

  .al-label {
    display: block;
    margin-bottom: 14px;
    color: var(--gold-dark);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .al-section.dark .al-label { color: var(--gold); }

  .al-h2 {
    margin: 0;
    color: var(--ink);
    font-family: var(--al-heading, "Playfair Display", Georgia, serif);
    font-size: clamp(26px, 3.4vw, 44px);
    line-height: 1.08;
    font-weight: 700;
  }

  .al-section.dark .al-h2 { color: var(--white); }

  .al-lead {
    margin: 18px 0 0;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.85;
  }

  .al-section.dark .al-lead { color: rgba(255, 253, 249, 0.72); }

  .al-two-col {
    display: grid;
    gap: 46px;
    align-items: center;
  }

  .al-portrait {
    position: relative;
    max-width: 470px;
  }

  .al-portrait img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: center top;
    border: 1px solid var(--line);
    background: var(--dark);
    filter: saturate(1.02) contrast(1.03);
  }

  .al-seal {
    position: absolute;
    right: -12px;
    bottom: 22px;
    width: 132px;
    min-height: 132px;
    display: grid;
    place-items: center;
    padding: 18px;
    text-align: center;
    background: rgba(16, 12, 9, 0.92);
    color: var(--white);
    border: 1px solid rgba(255, 253, 249, 0.22);
    font-size: 10px;
    font-weight: 900;
    line-height: 1.45;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .al-copy p {
    margin: 0 0 18px;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.9;
  }

  .al-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 28px;
  }

  .al-tag {
    padding: 8px 12px;
    border: 1px solid var(--line);
    background: var(--white);
    color: var(--soft-ink);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .al-story-grid {
    display: grid;
    gap: 42px;
    align-items: center;
  }

  .al-story-image {
    border: 1px solid rgba(255, 253, 249, 0.12);
    background: rgba(255, 253, 249, 0.04);
    padding: 10px;
  }

  .al-story-image img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: left center;
    filter: saturate(0.85) contrast(1.05) brightness(1.08);
  }

  .al-quote {
    margin: 28px 0 0;
    padding: 24px 0 0;
    border-top: 1px solid rgba(255, 253, 249, 0.16);
    color: rgba(255, 253, 249, 0.82);
    font-family: var(--al-heading, "Playfair Display", Georgia, serif);
    font-size: clamp(24px, 4vw, 36px);
    line-height: 1.18;
  }

  .al-credentials {
    display: grid;
    gap: 10px;
    margin-top: 26px;
  }

  .al-credential {
    display: flex;
    gap: 10px;
    align-items: center;
    color: rgba(255, 253, 249, 0.72);
    font-size: 13px;
  }

  .al-credential svg { color: var(--gold); flex: 0 0 auto; }

  .al-services {
    display: grid;
    gap: 18px;
  }

  .al-reveal {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }

  .al-reveal.al-visible {
    opacity: 1;
    transform: none;
  }

  .al-reveal-delay-1 { transition-delay: 0.1s; }
  .al-reveal-delay-2 { transition-delay: 0.2s; }
  .al-reveal-delay-3 { transition-delay: 0.3s; }

  .al-card {
    overflow: hidden;
    border: 1px solid var(--line);
    background: var(--white);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }

  .al-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 36px rgba(22, 18, 15, 0.11);
  }

  .al-card-image {
    position: relative;
    background: var(--dark);
  }

  .al-card-image img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    filter: saturate(1.04) contrast(1.03);
  }

  .al-card-badge {
    position: absolute;
    left: 14px;
    bottom: 14px;
    padding: 7px 11px;
    background: var(--gold);
    color: var(--dark);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .al-card-body {
    padding: 24px;
  }

  .al-card-body h3 {
    margin: 0;
    color: var(--ink);
    font-family: var(--al-heading, "Playfair Display", Georgia, serif);
    font-size: 28px;
    line-height: 1.08;
  }

  .al-card-body p {
    margin: 13px 0 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.75;
  }

  .al-card-body a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 20px;
    color: var(--gold-dark);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .al-results {
    display: grid;
    gap: 16px;
  }

  .al-result {
    position: relative;
    overflow: hidden;
    min-height: 320px;
    background: var(--dark);
  }

  .al-result img {
    width: 100%;
    height: 100%;
    min-height: 320px;
    object-fit: cover;
    filter: saturate(1.03) contrast(1.04);
  }

  .al-result.large img { aspect-ratio: 16 / 11; }
  .al-result.small img { aspect-ratio: 4 / 5; }

  .al-result::after {
    content: "";
    position: absolute;
    inset: auto 0 0 0;
    height: 46%;
    background: linear-gradient(0deg, rgba(16, 12, 9, 0.82), transparent);
  }

  .al-result-caption {
    position: absolute;
    z-index: 1;
    left: 18px;
    right: 18px;
    bottom: 18px;
    color: var(--white);
  }

  .al-result-caption strong {
    display: block;
    font-family: var(--al-heading, "Playfair Display", Georgia, serif);
    font-size: 26px;
  }

  .al-result-caption span {
    display: block;
    margin-top: 4px;
    color: rgba(255, 253, 249, 0.72);
    font-size: 12px;
  }

  .al-steps {
    display: grid;
    gap: 16px;
    margin-top: 34px;
  }

  .al-step {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    align-items: start;
    padding: 24px;
    border: 1px solid var(--line);
    background: rgba(255, 253, 249, 0.68);
  }

  .al-step h3 {
    margin: 0;
    font-size: 18px;
    color: var(--ink);
  }

  .al-step p {
    margin: 8px 0 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.7;
  }

  .al-espaco-grid {
    display: grid;
    gap: 40px;
    align-items: start;
  }

  .al-map-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border: 1px solid var(--line);
  }

  .al-map-wrap iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    filter: saturate(0.7) contrast(1.05);
  }

  .al-espaco-info {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .al-address-block {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .al-address-block strong {
    font-family: var(--al-heading, "Playfair Display", Georgia, serif);
    font-size: 20px;
    color: var(--ink);
  }

  .al-address-block p {
    margin: 0;
    color: var(--soft-ink);
    font-size: 15px;
    line-height: 1.65;
  }

  .al-hours {
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 1px solid var(--line);
  }

  .al-hours-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 14px 18px;
    border-bottom: 1px solid var(--line);
    font-size: 14px;
  }

  .al-hours-row:last-child { border-bottom: 0; }

  .al-hours-row span:first-child {
    color: var(--soft-ink);
    font-weight: 600;
  }

  .al-hours-row span:last-child {
    color: var(--gold-dark);
    font-weight: 700;
  }

  .al-espaco-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: var(--warm);
    border: 1px solid var(--line);
    color: var(--soft-ink);
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    transition: background 0.15s;
    width: fit-content;
  }

  .al-espaco-cta:hover { background: var(--cream); }

  .al-final {
    position: relative;
    overflow: hidden;
  }

  .al-final::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(16, 12, 9, 0.9), rgba(16, 12, 9, 0.74)),
      url("/images/andrelopes/bastidores-salao-finalizacao.jpg") center 15% / cover;
    opacity: 1;
  }

  .al-final-content {
    position: relative;
    z-index: 1;
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
  }

  .al-final .al-actions { justify-content: center; }

  .al-wa-float {
    position: fixed;
    z-index: 1002;
    right: max(20px, env(safe-area-inset-right));
    bottom: max(20px, env(safe-area-inset-bottom));
    width: 56px;
    height: 56px;
    border-radius: 999px;
    background: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
    transition: transform 0.3s, box-shadow 0.3s;
    animation: al-whatsapp-pulse 1.8s ease-out infinite;
  }

  .al-wa-float:hover { transform: scale(1.05); }
  .al-wa-float:active { transform: scale(0.95); }

  @keyframes al-whatsapp-pulse {
    0% {
      box-shadow:
        0 4px 20px rgba(37, 211, 102, 0.45),
        0 0 0 0 rgba(37, 211, 102, 0.48);
    }
    70% {
      box-shadow:
        0 4px 20px rgba(37, 211, 102, 0.45),
        0 0 0 16px rgba(37, 211, 102, 0);
    }
    100% {
      box-shadow:
        0 4px 20px rgba(37, 211, 102, 0.45),
        0 0 0 0 rgba(37, 211, 102, 0);
    }
  }

  .al-step-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: var(--dark);
    color: var(--gold);
    flex: 0 0 auto;
  }

  .al-footer {
    background: #090706;
    color: rgba(255, 253, 249, 0.55);
    font-size: 13px;
    line-height: 1.7;
  }

  .al-footer-body {
    padding: 60px 0 48px;
    display: grid;
    gap: 40px;
  }

  .al-footer-brand strong {
    display: block;
    color: var(--white);
    font-family: var(--al-heading, "Playfair Display", Georgia, serif);
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 10px;
  }

  .al-footer-brand p {
    margin: 0 0 20px;
    font-size: 13px;
    max-width: 260px;
  }

  .al-footer-brand-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .al-footer-brand-tag {
    padding: 4px 10px;
    border: 1px solid rgba(255, 253, 249, 0.14);
    color: rgba(255, 253, 249, 0.45);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .al-footer-col h4 {
    margin: 0 0 16px;
    color: var(--white);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .al-footer-col a {
    display: block;
    color: rgba(255, 253, 249, 0.55);
    font-size: 13px;
    text-decoration: none;
    padding: 4px 0;
    transition: color 0.15s;
  }

  .al-footer-col a:hover { color: var(--gold); }

  .al-footer-contact-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 4px 0;
    color: rgba(255, 253, 249, 0.55);
    font-size: 13px;
  }

  .al-footer-contact-row svg { flex: 0 0 auto; margin-top: 3px; }

  .al-footer-divider {
    border: 0;
    border-top: 1px solid rgba(255, 253, 249, 0.08);
    margin: 0;
  }

  .al-footer-bottom {
    padding: 18px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    color: rgba(255, 253, 249, 0.3);
  }

  .al-footer-bottom a {
    color: var(--gold);
    text-decoration: none;
    font-weight: 700;
  }

  @media (min-width: 760px) {
    .al-links { display: flex; }
    .al-menu-button { display: none; }
    .al-two-col { grid-template-columns: 0.84fr 1fr; }
    .al-story-grid { grid-template-columns: 1fr 0.82fr; }
    .al-services { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; }
    .al-card-image img { aspect-ratio: 16 / 9; }
    .al-results { grid-template-columns: 1.25fr 0.75fr; }
    .al-result.large { grid-row: span 2; }
    .al-steps { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .al-espaco-grid { grid-template-columns: 1fr 1fr; gap: 56px; }
    .al-footer-body { grid-template-columns: 1.4fr 0.8fr 1fr; gap: 48px; }
.al-hero-proof { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }

  @media (max-width: 759px) {
    :root { --proposal-nav-height: 66px; }
    .al-result-hide-mobile { display: none; }
    .al-preview { font-size: 9px; line-height: 1.4; }
    .al-wrap, .al-nav-inner { width: min(100% - 28px, 1160px); }
    .al-brand strong { font-size: 19px; }
    .al-brand small { font-size: 8px; }
    .al-hero { min-height: 720px; padding-bottom: 42px; }
    .al-hero h1 { font-size: clamp(26px, 9vw, 42px); }
    .al-hero p { font-size: 14px; }
    .al-actions a { width: 100%; }
    .al-hero-proof { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .al-section { padding: 72px 0; }
    .al-seal { right: 10px; width: 116px; min-height: 116px; font-size: 9px; }
    .al-card-image img { aspect-ratio: 16 / 12; }
    .al-step { padding: 20px; }
  }
`;

export default function AndreLopesProposalPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [menuOpen]);

  useEffect(() => {
    const els = document.querySelectorAll(".al-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("al-visible"); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="al-preview" aria-label="Aviso de proposta">
        <div className="al-preview-line1">
          <span aria-hidden="true" />
          Previa Conceitual
        </div>
        <span className="al-preview-detail">
          Proposta comercial elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
      </div>

      <nav className={`al-nav${scrolled ? " scrolled" : ""}`} aria-label="Navegacao principal">
        <div className="al-nav-inner">
          <a className="al-brand" href="#top" aria-label="Andre Lopes Hair Stylist">
            <strong>Andre Lopes</strong>
            <small>Hair Stylist . Sao Paulo</small>
          </a>

          <div className="al-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="al-nav-cta" href={whatsApp()} target="_blank" rel="noreferrer">
              <WaIcon size={16} />
              Agendar
            </a>
          </div>

          <button
            className="al-menu-button"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="al-mobile" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={whatsApp()} target="_blank" rel="noreferrer">
            Agendar no WhatsApp
          </a>
        </div>
      )}

      <main className="al-page">
        <section id="top" className="al-hero" aria-label="Andre Lopes Hair Stylist">
          <div className="al-hero-media" aria-hidden="true">
            <img src={images.hero} alt="" style={{ objectPosition: "center 28%" }} />
          </div>
          <div className="al-wrap">
            <div className="al-hero-content">
              <span className="al-kicker">Hair Stylist em Sao Paulo</span>
              <h1>
                Muito alem de cor, corte e tratamentos: <span>autoestima para mulheres poderosas.</span>
              </h1>
              <p>
                Venha viver uma experiencia de beleza completa — do cabelo a maquiagem, com tecnica e cuidado no
                Espaco Andre Lopes, Bosque da Saude, Sao Paulo.
              </p>
              <div className="al-actions">
                <a className="al-button" href={whatsApp()} target="_blank" rel="noreferrer">
                  <WaIcon size={17} />
                  Agendar horario
                </a>
                <a className="al-outline" href="https://www.instagram.com/andredlopes/" target="_blank" rel="noreferrer">
                  <Instagram size={17} />
                  Ver Instagram
                </a>
              </div>
              <div className="al-hero-proof" aria-label="Provas de autoridade">
                {proofPoints.map((item) => (
                  <div className="al-proof" key={item.label}>
                    {item.value === "✓"
                      ? <CheckCircle2 size={26} style={{ color: "var(--gold)", marginBottom: 4 }} />
                      : <strong>{item.value}</strong>
                    }
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="al-section alt" aria-label="Sobre Andre Lopes">
          <div className="al-wrap al-two-col al-reveal">
            <div className="al-portrait">
              <img src={images.portrait} alt="Andre Lopes, hair stylist em Sao Paulo" />
              <div className="al-seal">CEO . Espaco Andre Lopes Hair Stylist</div>
            </div>
            <div className="al-copy">
              <span className="al-label">Sobre Andre</span>
              <h2 className="al-h2">Uma historia de superacao transformada em autoridade de beleza.</h2>
              <p>
                Andre Lopes construiu uma trajetoria marcada por resiliencia, tecnica apurada e sensibilidade humana.
                Uma historia real que se tornou referencia em beleza feminina em Sao Paulo.
              </p>
              <p>
                Cada atendimento e uma experiencia completa: do cabelo a maquiagem, do cuidado a autoestima.
                Mulheres que chegam para um corte saem se sentindo rainhas.
              </p>
              <div className="al-tags" aria-label="Especialidades">
                {["Colorimetria", "Mechas", "Corte", "Make", "Progressiva", "Tratamentos"].map((tag) => (
                  <span className="al-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="autoridade" className="al-section dark" aria-label="Autoridade e historia">
          <div className="al-wrap al-story-grid al-reveal">
            <div>
              <span className="al-label">Autoridade</span>
              <h2 className="al-h2">Mais de uma decada construindo historia, tecnica e confianca em beleza feminina.</h2>
              <p className="al-lead">
                Conta verificada, quase 22 mil seguidores, mais de 470 publicacoes e formacoes reconhecidas sustentam
                uma narrativa de confianca para quem esta decidindo onde cuidar da propria imagem.
              </p>
              <div className="al-credentials">
                {credentials.map((item) => (
                  <span className="al-credential" key={item}>
                    <CheckCircle2 size={17} />
                    {item}
                  </span>
                ))}
              </div>
              <blockquote className="al-quote">
                "Nunca sera sobre o que a vida fez de voce, e sim o que voce faz com o que a vida fez de voce."
              </blockquote>
            </div>
            <div className="al-story-image">
              <img src={images.story} alt="Imagem institucional sobre quem e Andre Lopes" style={{ objectPosition: "left center" }} />
            </div>
          </div>
        </section>

        <section id="servicos" className="al-section" aria-label="Servicos">
          <div className="al-wrap">
            <div className="al-section-head al-reveal">
              <span className="al-label">Transformacoes</span>
              <h2 className="al-h2">O que voce quer sentir ao sair do salao?</h2>
              <p className="al-lead">
                Cabelo, colorimetria, mechas, make e tratamentos — pensados pelo que voce quer ser, nao so pelo que
                quer fazer.
              </p>
            </div>

            <div className="al-services al-reveal al-reveal-delay-1">
              {services.map((service) => (
                <article className="al-card" key={service.title}>
                  <div className="al-card-image">
                    <img src={service.image} alt={service.title} style={{ objectPosition: service.position }} />
                    <span className="al-card-badge">{service.label}</span>
                  </div>
                  <div className="al-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a href={whatsApp(`Ola, Andre! ${service.cta}.`)} target="_blank" rel="noreferrer">
                      {service.cta} <ChevronRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resultados" className="al-section alt" aria-label="Resultados">
          <div className="al-wrap">
            <div className="al-section-head al-reveal">
              <span className="al-label">Resultados reais</span>
              <h2 className="al-h2">Cada transformacao e unica. Cada resultado e real.</h2>
              <p className="al-lead">
                Cada imagem e uma transformacao verdadeira. Cabelo, maquiagem e autoestima — capturados logo depois do
                atendimento no espaco Andre Lopes.
              </p>
            </div>

            <div className="al-results al-reveal al-reveal-delay-1">
              <div className="al-result large">
                <img src={images.hero} alt="Resultado de colorimetria morena iluminada" style={{ objectPosition: "center 28%" }} />
                <div className="al-result-caption">
                  <strong>Morena iluminada</strong>
                  <span>Colorimetria e mechas com leitura tecnica do fio.</span>
                </div>
              </div>
              <div className="al-result small">
                <img src={images.alignment} alt="Resultado de realinhamento capilar" style={{ objectPosition: "center top" }} />
                <div className="al-result-caption">
                  <strong>Tratamento</strong>
                  <span>Brilho, alinhamento e saude capilar.</span>
                </div>
              </div>
              <div className="al-result small al-result-hide-mobile">
                <img src={images.makeup} alt="Resultado de maquiagem profissional" style={{ objectPosition: "center 20%" }} />
                <div className="al-result-caption">
                  <strong>Make</strong>
                  <span>Pele, acabamento e presenca.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="al-section" aria-label="Experiencia de atendimento">
          <div className="al-wrap">
            <div className="al-section-head">
              <span className="al-label">Experiencia</span>
              <h2 className="al-h2">Do primeiro contato ao resultado: uma experiencia pensada para voce.</h2>
              <p className="al-lead">
                Atendimento humano, tecnica profissional e agenda facil pelo WhatsApp. Simples assim, do inicio ao
                fim.
              </p>
            </div>

            <div className="al-steps al-reveal al-reveal-delay-1">
              <div className="al-step">
                <span className="al-step-icon"><Heart size={18} /></span>
                <div>
                  <h3>Desejo e identificacao</h3>
                  <p>Voce conta o que quer mudar. Corte novo, colorimetria especial, mechas dos sonhos ou maquiagem para uma ocasiao. Andre entende o seu desejo antes de comecar.</p>
                </div>
              </div>
              <div className="al-step">
                <span className="al-step-icon"><Scissors size={18} /></span>
                <div>
                  <h3>Consulta e cuidado</h3>
                  <p>Andre analisa seu cabelo, entende sua rotina e define o melhor caminho tecnico. Cada detalhe do atendimento e personalizado para voce.</p>
                </div>
              </div>
              <div className="al-step">
                <span className="al-step-icon"><CalendarCheck size={18} /></span>
                <div>
                  <h3>Agendamento direto</h3>
                  <p>Entre em contato pelo WhatsApp e garanta seu horario. Sem formulario, sem fila — so voce e o Andre, de forma direta e rapida.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="espaco" className="al-section alt" aria-label="Espaco e localizacao">
          <div className="al-wrap">
            <div className="al-section-head">
              <span className="al-label">Espaco</span>
              <h2 className="al-h2">Venha ao espaco. Venha se sentir uma rainha.</h2>
              <p className="al-lead">
                O Espaco Andre Lopes Hair Stylist fica na Av. Bosque da Saude, no coracao da Vila da Saude em Sao Paulo.
              </p>
            </div>

            <div className="al-espaco-grid al-reveal al-reveal-delay-1">
              <div className="al-map-wrap">
                <iframe
                  src="https://maps.google.com/maps?q=Av.+Bosque+da+Saude,+336,+Vila+da+Saude,+Sao+Paulo,+SP&output=embed"
                  title="Localizacao Espaco Andre Lopes Hair Stylist"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="al-espaco-info">
                <div className="al-address-block">
                  <strong>Espaco Andre Lopes Hair Stylist</strong>
                  <p>
                    Av. Bosque da Saude, 336<br />
                    Vila da Saude — Sao Paulo, SP
                  </p>
                </div>

                <div>
                  <span className="al-label" style={{ display: "block", marginBottom: 14 }}>Horarios de atendimento</span>
                  <div className="al-hours">
                    {hours.map((row) => (
                      <div className="al-hours-row" key={row.days}>
                        <span>{row.days}</span>
                        <span>{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  className="al-espaco-cta"
                  href="https://maps.google.com/maps?q=Av.+Bosque+da+Saude,+336,+Vila+da+Saude,+Sao+Paulo,+SP"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={15} />
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="al-section dark al-final" aria-label="Agendamento">
          <div className="al-wrap">
            <div className="al-final-content al-reveal">
              <span className="al-label">Agenda via WhatsApp</span>
              <h2 className="al-h2">Pronta para se sentir uma rainha?</h2>
              <p className="al-lead">
                O Espaco Andre Lopes Hair Stylist espera por voce. Agende pelo WhatsApp e venha viver a experiencia
                de beleza que voce merece.
              </p>
              <div className="al-actions">
                <a className="al-button" href={whatsApp()} target="_blank" rel="noreferrer">
                  <CalendarDays size={17} />
                  Agendar agora
                </a>
                <a className="al-outline" href="https://www.instagram.com/andredlopes/" target="_blank" rel="noreferrer">
                  <Instagram size={17} />
                  @andredlopes
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="al-footer">
          <div className="al-wrap">
            <div className="al-footer-body">
              <div className="al-footer-brand">
                <strong>Andre Lopes</strong>
                <p>Hair stylist especializado em beleza feminina — corte, colorimetria, make e autoestima em Sao Paulo.</p>
                <div className="al-footer-brand-tags">
                  {["Colorimetria", "Mechas", "Corte", "Make", "Progressiva"].map((tag) => (
                    <span className="al-footer-brand-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="al-footer-col">
                <h4>Navegacao</h4>
                <a href="#sobre">Sobre Andre</a>
                <a href="#servicos">Servicos</a>
                <a href="#resultados">Resultados</a>
                <a href="#espaco">Espaco</a>
                <a href={whatsApp()} target="_blank" rel="noreferrer">Agendar horario</a>
              </div>

              <div className="al-footer-col">
                <h4>Contato</h4>
                <div className="al-footer-contact-row">
                  <MapPin size={14} />
                  <span>Av. Bosque da Saude, 336<br />Vila da Saude — Sao Paulo, SP</span>
                </div>
                <div className="al-footer-contact-row">
                  <MessageCircle size={14} />
                  <a href={whatsApp()} target="_blank" rel="noreferrer">(11) 98332-5791</a>
                </div>
                <div className="al-footer-contact-row">
                  <Instagram size={14} />
                  <a href="https://www.instagram.com/andredlopes/" target="_blank" rel="noreferrer">@andredlopes</a>
                </div>
                <div className="al-footer-contact-row" style={{ marginTop: 8 }}>
                  <CalendarDays size={14} />
                  <span>Ter a Sab: 9h as 19h<br />Seg e feriados: agendamento</span>
                </div>
              </div>
            </div>

            <hr className="al-footer-divider" />

            <div className="al-footer-bottom">
              <span>© 2026 Andre Lopes Hair Stylist. Todos os direitos reservados.</span>
              <span>Site por <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">Lumasites</a></span>
            </div>
          </div>
        </footer>

      </main>

      <a
        className="al-wa-float"
        href={whatsApp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar horario via WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>
    </>
  );
}
