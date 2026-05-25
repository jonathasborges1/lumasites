"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Globe,
  MapPin,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  Stethoscope,
  X,
  Zap,
} from "lucide-react";

const WA_NUMBER = "5561995518066";

const whatsApp = (
  message = "Ola, Dra. Marianna! Preciso de ajuda com uma liminar urgente.",
) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Servicos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];

const proofPoints = [
  { value: "OAB/DF", label: "74181" },
  { value: "2h", label: "protocolo judicial" },
  { value: "100%", label: "online" },
  { value: "Brasilia", label: "DF" },
];

const serviceCategories = [
  {
    icon: Stethoscope,
    label: "Hospitalar",
    services: [
      "Vaga em UTI",
      "Internacoes hospitalares",
      "Cirurgias urgentes",
      "Transferencia hospitalar",
      "Internacao psiquiatrica",
    ],
  },
  {
    icon: FileText,
    label: "Medicamentos e Insumos",
    services: [
      "Fornecimento de medicamentos",
      "Medicamentos de alto custo",
      "Tratamentos oncologicos",
      "Fornecimento de insumos medicos",
      "Proteses/orteses/materiais cirurgicos",
      "Reembolso de despesas medicas",
    ],
  },
  {
    icon: ShieldCheck,
    label: "Plano de Saude e SUS",
    services: [
      "Negativa de cobertura medica",
      "Reajustes abusivos de plano de saude",
      "Tratamentos fora do rol da ANS",
      "Exames e procedimentos negados",
      "Atendimento medico especializado",
      "Continuidade de tratamento",
    ],
  },
  {
    icon: Globe,
    label: "Cuidados Especiais",
    services: [
      "Home care",
      "Atendimento domiciliar",
      "Terapias para TEA",
      "Tratamentos multidisciplinares",
      "Cirurgias bariatricas e reparadoras",
    ],
  },
];

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contato e Relato do Caso",
    text: "Voce nos aciona pelo WhatsApp com o relato da situacao — negativa do plano, recusa do SUS, urgencia hospitalar. Orientamos sobre os documentos necessarios com clareza e agilidade.",
  },
  {
    number: "02",
    icon: Scale,
    title: "Analise e Estrategia Juridica",
    text: "Avaliamos a urgencia, a viabilidade da medida liminar e a estrategia mais eficaz para o seu caso. Atuacao focada em direito hospitalar e medidas de urgencia na saude.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Protocolo em ate 2 Horas",
    text: "A partir do fechamento do contrato e da entrega das documentacoes, o protocolo judicial e realizado em ate duas horas. Seguranca juridica com a agilidade que situacoes criticas exigem.",
  },
];

const differentials = [
  {
    icon: Clock,
    title: "Retorno Imediato",
    text: "Em situacoes que envolvem urgencia na saude, cada hora conta. Respondemos com agilidade e suporte especializado desde o primeiro contato — sem deixar voce sem resposta.",
  },
  {
    icon: Zap,
    title: "Protocolo em ate 2 Horas",
    text: "Apos o fechamento do contrato e a entrega das documentacoes, o protocolo judicial e realizado em ate duas horas. Atuacao estrategica com a velocidade que casos criticos exigem.",
  },
  {
    icon: Globe,
    title: "Atendimento 100% Online",
    text: "Conte com atuacao juridica estrategica em medidas de urgencia de qualquer estado do Brasil — com clareza, seguranca e eficiencia, sem precisar sair de casa.",
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

const css = `
  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; }

  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800;900&display=swap');

  :root {
    --mm-bar-height: 52px;
    --mm-nav-height: 72px;
    --mm-bg: #0F0B0B;
    --mm-bg-alt: #160F0F;
    --mm-crimson: #8B1A20;
    --mm-crimson-light: #A8232B;
    --mm-gold: #B8965A;
    --mm-gold-dark: #8A6D3A;
    --mm-paper: #F7F3EE;
    --mm-warm: #EFE9E0;
    --mm-ink: #1E1212;
    --mm-soft-ink: #4A3333;
    --mm-muted: #7A6060;
    --mm-white: #FDF9F5;
    --mm-line-dark: rgba(253, 249, 245, 0.1);
    --mm-line-light: rgba(30, 18, 18, 0.1);
    --mm-whatsapp: #25D366;
  }

  .mm-page {
    overflow-x: clip;
    color: var(--mm-ink);
    background: var(--mm-paper);
    font-family: Inter, system-ui, sans-serif;
    min-height: 100vh;
  }

  /* ─── PREVIEW BAR ─────────────────────────────────── */
  .mm-preview {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1001;
    min-height: var(--mm-bar-height);
    padding: 7px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    text-align: center;
    background: #0A0606;
    color: rgba(253, 249, 245, 0.65);
    font-family: Inter, system-ui, sans-serif;
  }
  .mm-preview-line1 {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--mm-white);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .mm-preview-dot {
    position: relative;
    width: 9px; height: 9px;
    border-radius: 999px;
    background: var(--mm-crimson);
    flex: 0 0 auto;
    animation: mm-dot-pulse 1.6s ease-out infinite;
  }
  @keyframes mm-dot-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(168, 35, 43, 0.9), 0 0 6px 1px rgba(168, 35, 43, 0.5); }
    70%  { box-shadow: 0 0 0 12px rgba(168, 35, 43, 0), 0 0 6px 1px rgba(168, 35, 43, 0); }
    100% { box-shadow: 0 0 0 0 rgba(168, 35, 43, 0), 0 0 6px 1px rgba(168, 35, 43, 0); }
  }
  .mm-preview-detail {
    display: block;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: rgba(253, 249, 245, 0.48);
  }
  .mm-preview-detail a {
    color: rgba(253, 249, 245, 0.65);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .mm-preview-detail a:hover { color: var(--mm-white); }

  /* ─── NAV ─────────────────────────────────────────── */
  .mm-nav {
    position: fixed;
    z-index: 1000;
    inset: var(--mm-bar-height) 0 auto 0;
    height: var(--mm-nav-height);
    border-bottom: 1px solid var(--mm-line-dark);
    background: rgba(15, 11, 11, 0.82);
    backdrop-filter: blur(20px);
    transition: background 0.25s, border-color 0.25s;
    font-family: Inter, system-ui, sans-serif;
  }
  .mm-nav.scrolled {
    background: rgba(247, 243, 238, 0.96);
    border-color: var(--mm-line-light);
  }
  .mm-nav-inner, .mm-wrap {
    width: min(1160px, calc(100% - 40px));
    margin: 0 auto;
  }
  .mm-nav-inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .mm-brand { line-height: 1; color: var(--mm-white); }
  .mm-nav.scrolled .mm-brand { color: var(--mm-ink); }
  .mm-brand strong {
    display: block;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.01em;
  }
  .mm-brand small {
    display: block;
    margin-top: 6px;
    color: var(--mm-gold);
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }
  .mm-nav.scrolled .mm-brand small { color: var(--mm-gold-dark); }
  .mm-links {
    display: none;
    align-items: center;
    gap: 24px;
  }
  .mm-links a {
    color: rgba(253, 249, 245, 0.72);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: color 0.15s;
  }
  .mm-nav.scrolled .mm-links a { color: var(--mm-soft-ink); }
  .mm-links a:hover { color: var(--mm-gold); }
  .mm-nav-cta, .mm-menu-btn, .mm-btn, .mm-btn-outline {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border: 0;
    cursor: pointer;
    font-family: Inter, system-ui, sans-serif;
  }
  .mm-nav-cta {
    padding: 0 18px;
    border-radius: 4px;
    background: var(--mm-crimson);
    color: var(--mm-white) !important;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: background 0.15s;
  }
  .mm-nav-cta:hover { background: var(--mm-crimson-light); }
  .mm-menu-btn {
    width: 44px;
    border-radius: 4px;
    color: var(--mm-white);
    background: rgba(253, 249, 245, 0.1);
  }
  .mm-nav.scrolled .mm-menu-btn {
    color: var(--mm-ink);
    background: rgba(30, 18, 18, 0.08);
  }

  /* ─── MOBILE MENU ─────────────────────────────────── */
  .mm-mobile {
    position: fixed;
    z-index: 999;
    inset: calc(var(--mm-bar-height) + var(--mm-nav-height)) 0 auto 0;
    display: grid;
    padding: 16px 20px 22px;
    background: var(--mm-paper);
    border-bottom: 1px solid var(--mm-line-light);
    box-shadow: 0 20px 50px rgba(15, 11, 11, 0.22);
    font-family: Inter, system-ui, sans-serif;
  }
  .mm-mobile a {
    padding: 15px 0;
    border-bottom: 1px solid var(--mm-line-light);
    color: var(--mm-soft-ink);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .mm-mobile a:last-child { border-bottom: 0; }

  /* ─── WRAP / LAYOUT ───────────────────────────────── */
  .mm-wrap { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }

  /* ─── HERO ────────────────────────────────────────── */
  .mm-hero {
    position: relative;
    min-height: 100svh;
    padding: 120px 0 60px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: var(--mm-bg);
  }
  .mm-hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 70% 40%, rgba(139, 26, 32, 0.18) 0%, transparent 65%),
      radial-gradient(ellipse 50% 80% at 100% 0%, rgba(139, 26, 32, 0.12) 0%, transparent 60%),
      linear-gradient(160deg, #0F0B0B 0%, #160A0A 50%, #0F0B0B 100%);
  }
  .mm-hero-texture {
    position: absolute;
    inset: 0;
    background-image: url("https://mariannamonteiroliminar.com.br/wp-content/uploads/2026/04/c5cd1eb7629fe0d136d8aaec257740e6bce6e71a.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.06;
    mix-blend-mode: luminosity;
  }
  .mm-hero-content {
    position: relative;
    z-index: 1;
    max-width: 780px;
    color: var(--mm-white);
  }
  .mm-kicker {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    color: var(--mm-gold);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.26em;
    text-transform: uppercase;
  }
  .mm-kicker::before {
    content: "";
    width: 28px; height: 1px;
    background: var(--mm-gold);
  }
  .mm-hero h1 {
    margin: 0;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(32px, 5vw, 62px);
    line-height: 1.06;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
  .mm-hero h1 em {
    font-style: italic;
    color: var(--mm-gold);
  }
  .mm-hero-sub {
    max-width: 580px;
    margin: 24px 0 0;
    color: rgba(253, 249, 245, 0.75);
    font-size: 16px;
    line-height: 1.8;
  }
  .mm-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 34px;
  }
  .mm-btn {
    padding: 0 24px;
    border-radius: 4px;
    background: var(--mm-crimson);
    color: var(--mm-white);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 16px 40px rgba(139, 26, 32, 0.4);
    transition: background 0.15s, box-shadow 0.15s;
  }
  .mm-btn:hover {
    background: var(--mm-crimson-light);
    box-shadow: 0 20px 48px rgba(139, 26, 32, 0.5);
  }
  .mm-btn-outline {
    padding: 0 22px;
    border: 1px solid rgba(253, 249, 245, 0.24);
    border-radius: 4px;
    color: var(--mm-white);
    background: rgba(253, 249, 245, 0.06);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: background 0.15s, border-color 0.15s;
  }
  .mm-btn-outline:hover {
    background: rgba(253, 249, 245, 0.12);
    border-color: rgba(253, 249, 245, 0.4);
  }
  .mm-proof-bar {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 44px;
    max-width: 520px;
  }
  .mm-proof-item {
    padding: 16px 18px;
    border: 1px solid rgba(139, 26, 32, 0.28);
    background: rgba(139, 26, 32, 0.08);
    border-radius: 2px;
  }
  .mm-proof-item strong {
    display: block;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 26px;
    font-weight: 700;
    color: var(--mm-white);
    line-height: 1;
  }
  .mm-proof-item span {
    display: block;
    margin-top: 6px;
    color: rgba(253, 249, 245, 0.55);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  /* ─── SECTIONS ────────────────────────────────────── */
  .mm-section {
    padding: 96px 0;
    background: var(--mm-paper);
  }
  .mm-section.alt { background: var(--mm-warm); }
  .mm-section.dark {
    background: var(--mm-bg);
    color: var(--mm-white);
  }
  .mm-section.dark-alt { background: var(--mm-bg-alt); color: var(--mm-white); }
  .mm-section-head { max-width: 700px; margin-bottom: 48px; }
  .mm-section-head.center { text-align: center; margin-left: auto; margin-right: auto; }
  .mm-label {
    display: inline-block;
    margin-bottom: 14px;
    color: var(--mm-crimson);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.24em;
    text-transform: uppercase;
  }
  .mm-section.dark .mm-label { color: var(--mm-gold); }
  .mm-section.dark-alt .mm-label { color: var(--mm-gold); }
  .mm-h2 {
    margin: 0;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(26px, 3.4vw, 44px);
    line-height: 1.1;
    font-weight: 700;
    color: var(--mm-ink);
  }
  .mm-section.dark .mm-h2 { color: var(--mm-white); }
  .mm-section.dark-alt .mm-h2 { color: var(--mm-white); }
  .mm-lead {
    margin: 18px 0 0;
    font-size: 15px;
    line-height: 1.85;
    color: var(--mm-muted);
  }
  .mm-section.dark .mm-lead { color: rgba(253, 249, 245, 0.68); }
  .mm-section.dark-alt .mm-lead { color: rgba(253, 249, 245, 0.68); }

  /* ─── SOBRE ───────────────────────────────────────── */
  .mm-two-col {
    display: grid;
    gap: 52px;
    align-items: center;
  }
  .mm-about-photo-wrap {
    position: relative;
    max-width: 480px;
  }
  .mm-about-photo {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: center top;
    display: block;
    border-radius: 2px;
    filter: saturate(1.04) contrast(1.03);
  }
  .mm-about-badge {
    position: absolute;
    left: -16px;
    bottom: 28px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 18px 20px;
    background: rgba(15, 11, 11, 0.94);
    border: 1px solid rgba(139, 26, 32, 0.35);
    border-radius: 2px;
    backdrop-filter: blur(8px);
  }
  .mm-about-badge strong {
    color: var(--mm-white);
    font-family: "Playfair Display", Georgia, serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
  }
  .mm-about-badge span {
    color: var(--mm-gold);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .mm-about-name {
    color: var(--mm-ink);
    font-family: "Playfair Display", Georgia, serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 6px;
  }
  .mm-about-title {
    display: block;
    color: var(--mm-crimson);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 28px;
  }
  .mm-about-oab {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid var(--mm-line-light);
    background: var(--mm-warm);
    color: var(--mm-soft-ink);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border-radius: 2px;
  }
  .mm-about-copy p {
    margin: 0 0 16px;
    color: var(--mm-muted);
    font-size: 15px;
    line-height: 1.9;
  }
  .mm-about-copy p:last-child { margin-bottom: 0; }
  .mm-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 28px;
  }
  .mm-tag {
    padding: 7px 13px;
    border: 1px solid var(--mm-line-light);
    background: var(--mm-warm);
    color: var(--mm-soft-ink);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 2px;
  }

  /* ─── DIFERENCIAIS ────────────────────────────────── */
  .mm-diffs {
    display: grid;
    gap: 20px;
    margin-top: 0;
  }
  .mm-diff {
    padding: 32px 28px;
    border: 1px solid var(--mm-line-dark);
    background: rgba(253, 249, 245, 0.04);
    border-radius: 2px;
    transition: border-color 0.2s, background 0.2s;
  }
  .mm-diff:hover {
    border-color: rgba(139, 26, 32, 0.4);
    background: rgba(139, 26, 32, 0.06);
  }
  .mm-diff-icon {
    width: 44px; height: 44px;
    display: grid;
    place-items: center;
    border-radius: 4px;
    background: rgba(139, 26, 32, 0.15);
    color: var(--mm-crimson);
    margin-bottom: 18px;
    flex: 0 0 auto;
  }
  .mm-diff h3 {
    margin: 0 0 10px;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--mm-white);
  }
  .mm-diff p {
    margin: 0;
    color: rgba(253, 249, 245, 0.62);
    font-size: 14px;
    line-height: 1.8;
  }

  /* ─── SERVICOS ────────────────────────────────────── */
  .mm-services-grid {
    display: grid;
    gap: 20px;
  }
  .mm-service-card {
    padding: 30px 28px;
    border: 1px solid var(--mm-line-light);
    background: var(--mm-white, #fff);
    border-radius: 2px;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .mm-service-card:hover {
    box-shadow: 0 10px 32px rgba(30, 18, 18, 0.09);
    transform: translateY(-2px);
  }
  .mm-service-head {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }
  .mm-service-icon {
    width: 40px; height: 40px;
    display: grid;
    place-items: center;
    border-radius: 4px;
    background: rgba(139, 26, 32, 0.08);
    color: var(--mm-crimson);
    flex: 0 0 auto;
  }
  .mm-service-head h3 {
    margin: 0;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--mm-crimson);
  }
  .mm-service-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .mm-service-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: var(--mm-soft-ink);
    line-height: 1.45;
  }
  .mm-service-item svg { color: var(--mm-crimson); flex: 0 0 auto; }
  .mm-service-cta {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 20px;
    padding-top: 18px;
    border-top: 1px solid var(--mm-line-light);
    color: var(--mm-crimson);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: gap 0.15s;
    width: 100%;
  }
  .mm-service-cta:hover { gap: 10px; }

  /* ─── COMO FUNCIONA ───────────────────────────────── */
  .mm-steps {
    display: grid;
    gap: 16px;
    margin-top: 40px;
  }
  .mm-step {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    align-items: start;
    padding: 28px 24px;
    border: 1px solid var(--mm-line-dark);
    background: rgba(253, 249, 245, 0.03);
    border-radius: 2px;
  }
  .mm-step-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .mm-step-num {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 36px;
    font-weight: 700;
    color: rgba(139, 26, 32, 0.35);
    line-height: 1;
  }
  .mm-step-icon-wrap {
    width: 40px; height: 40px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: rgba(139, 26, 32, 0.15);
    color: var(--mm-crimson);
  }
  .mm-step h3 {
    margin: 0 0 10px;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--mm-white);
  }
  .mm-step p {
    margin: 0;
    color: rgba(253, 249, 245, 0.65);
    font-size: 14px;
    line-height: 1.8;
  }

  /* ─── LOCALIZACAO ────────────────────────────────── */
  .mm-location-grid {
    display: grid;
    gap: 40px;
    align-items: start;
  }
  .mm-map-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border: 1px solid var(--mm-line-light);
    border-radius: 2px;
  }
  .mm-map-wrap iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    filter: saturate(0.75) contrast(1.05);
  }
  .mm-location-info {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .mm-location-block { display: flex; flex-direction: column; gap: 10px; }
  .mm-location-block p {
    margin: 0;
    color: var(--mm-soft-ink);
    font-size: 15px;
    line-height: 1.7;
  }
  .mm-map-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    width: fit-content;
    border: 1px solid var(--mm-line-light);
    background: var(--mm-paper);
    color: var(--mm-soft-ink);
    font-size: 12px;
    font-weight: 700;
    border-radius: 2px;
    transition: background 0.15s, border-color 0.15s;
  }
  .mm-map-cta:hover {
    background: var(--mm-warm);
    border-color: rgba(139, 26, 32, 0.25);
  }
  .mm-location-rows { display: flex; flex-direction: column; gap: 10px; }
  .mm-location-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: var(--mm-soft-ink);
  }
  .mm-location-row svg { color: var(--mm-crimson); flex: 0 0 auto; }
  .mm-location-row a { color: var(--mm-soft-ink); transition: color 0.15s; }
  .mm-location-row a:hover { color: var(--mm-crimson); }

  /* ─── CITACAO CF ──────────────────────────────────── */
  .mm-cf-block {
    position: relative;
    overflow: hidden;
  }
  .mm-cf-block::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 70% at 30% 50%, rgba(139, 26, 32, 0.15) 0%, transparent 65%);
  }
  .mm-cf-inner {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
  }
  .mm-cf-quote {
    margin: 0 0 20px;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(20px, 3.2vw, 32px);
    font-style: italic;
    line-height: 1.5;
    color: rgba(253, 249, 245, 0.9);
  }
  .mm-cf-source {
    color: var(--mm-gold);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .mm-cf-divider {
    width: 56px; height: 1px;
    background: rgba(184, 150, 90, 0.4);
    margin: 24px auto;
  }

  /* ─── CTA FINAL ───────────────────────────────────── */
  .mm-final {
    position: relative;
    overflow: hidden;
  }
  .mm-final::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 60%, rgba(139, 26, 32, 0.25) 0%, transparent 65%);
  }
  .mm-final-content {
    position: relative;
    z-index: 1;
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }
  .mm-final .mm-actions { justify-content: center; }

  /* ─── FOOTER ──────────────────────────────────────── */
  .mm-footer {
    background: #080404;
    color: rgba(253, 249, 245, 0.48);
    font-size: 13px;
    line-height: 1.7;
    font-family: Inter, system-ui, sans-serif;
  }
  .mm-footer-body {
    padding: 60px 0 48px;
    display: grid;
    gap: 40px;
  }
  .mm-footer-brand strong {
    display: block;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--mm-white);
    margin-bottom: 8px;
  }
  .mm-footer-brand p {
    margin: 0 0 20px;
    font-size: 13px;
    max-width: 280px;
  }
  .mm-footer-brand-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .mm-footer-brand-tag {
    padding: 4px 10px;
    border: 1px solid rgba(253, 249, 245, 0.12);
    color: rgba(253, 249, 245, 0.38);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 2px;
  }
  .mm-footer-col h4 {
    margin: 0 0 16px;
    color: var(--mm-white);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  .mm-footer-col a {
    display: block;
    color: rgba(253, 249, 245, 0.48);
    padding: 4px 0;
    font-size: 13px;
    transition: color 0.15s;
  }
  .mm-footer-col a:hover { color: var(--mm-gold); }
  .mm-footer-contact-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 4px 0;
    font-size: 13px;
  }
  .mm-footer-contact-row svg { flex: 0 0 auto; margin-top: 3px; }
  .mm-footer-divider {
    border: 0;
    border-top: 1px solid rgba(253, 249, 245, 0.07);
    margin: 0;
  }
  .mm-footer-bottom {
    padding: 18px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    color: rgba(253, 249, 245, 0.26);
  }
  .mm-footer-bottom a {
    color: var(--mm-gold);
    font-weight: 700;
    transition: color 0.15s;
  }
  .mm-footer-bottom a:hover { color: var(--mm-white); }

  /* ─── WHATSAPP FLOAT ──────────────────────────────── */
  .mm-wa-float {
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
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    animation: mm-pulse 2s ease-out infinite;
    font-family: Inter, system-ui, sans-serif;
  }
  .mm-wa-float:hover { transform: scale(1.06); }
  .mm-wa-float:active { transform: scale(0.94); }

  @keyframes mm-pulse {
    0%   { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,.45); }
    70%  { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 16px rgba(37,211,102,0); }
    100% { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,0); }
  }

  /* ─── REVEAL ──────────────────────────────────────── */
  .mm-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .mm-reveal.mm-visible { opacity: 1; transform: none; }
  .mm-delay-1 { transition-delay: 0.08s; }
  .mm-delay-2 { transition-delay: 0.16s; }
  .mm-delay-3 { transition-delay: 0.24s; }
  .mm-delay-4 { transition-delay: 0.32s; }

  /* ─── RESPONSIVE ──────────────────────────────────── */
  @media (min-width: 768px) {
    .mm-links { display: flex; }
    .mm-menu-btn { display: none; }
    .mm-two-col { grid-template-columns: 0.9fr 1fr; }
    .mm-proof-bar { grid-template-columns: repeat(4, 1fr); max-width: 680px; }
    .mm-diffs { grid-template-columns: repeat(3, 1fr); }
    .mm-services-grid { grid-template-columns: repeat(2, 1fr); }
    .mm-steps { grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .mm-location-grid { grid-template-columns: 1fr 0.75fr; gap: 52px; }
    .mm-footer-body { grid-template-columns: 1.4fr 0.8fr 1fr; gap: 52px; }
  }

  @media (max-width: 767px) {
    :root { --mm-nav-height: 64px; }
    .mm-wrap, .mm-nav-inner { width: min(100% - 28px, 1160px); }
    .mm-brand strong { font-size: 18px; }
    .mm-hero { min-height: 700px; }
    .mm-hero h1 { font-size: clamp(28px, 9vw, 44px); }
    .mm-hero-sub { font-size: 14px; }
    .mm-actions a { width: 100%; justify-content: center; }
    .mm-section { padding: 72px 0; }
    .mm-monogram { font-size: 72px; }
    .mm-about-card { padding: 36px 28px; }
    .mm-step { padding: 22px 18px; }
  }
`;

export default function MarianaMonteiroPropPage() {
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
    const els = document.querySelectorAll(".mm-reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("mm-visible");
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
      <div className="mm-preview" aria-label="Aviso de proposta">
        <div className="mm-preview-line1">
          <span className="mm-preview-dot" aria-hidden="true" />
          Previa Conceitual
        </div>
        <span className="mm-preview-detail">
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
        className={`mm-nav${scrolled ? " scrolled" : ""}`}
        aria-label="Navegacao principal"
      >
        <div className="mm-nav-inner">
          <a
            className="mm-brand"
            href="#top"
            aria-label="Dra. Marianna Monteiro"
          >
            <strong>Marianna Monteiro</strong>
            <small>Advogada · OAB/DF 74181 </small>
          </a>

          <div className="mm-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className="mm-nav-cta"
              href={whatsApp()}
              target="_blank"
              rel="noreferrer"
            >
              <WaIcon size={15} />
              Falar Agora
            </a>
          </div>

          <button
            className="mm-menu-btn"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mm-mobile" aria-label="Menu mobile">
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
            href={whatsApp()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      )}

      <main className="mm-page">
        {/* ── HERO ── */}
        <section id="top" className="mm-hero" aria-label="Hero">
          <div className="mm-hero-bg" aria-hidden="true" />
          <div className="mm-hero-texture" aria-hidden="true" />
          <div className="mm-wrap">
            <div className="mm-hero-content">
              <span className="mm-kicker">Direito da Saude · Brasilia DF</span>
              <h1>
                Seu direito a saude
                <br />
                nao pode <em>esperar.</em>
              </h1>
              <p className="mm-hero-sub">
                Atuacao juridica estrategica em medidas de urgencia — com
                atendimento agil, suporte especializado e retorno imediato para
                buscar a garantia de direitos com clareza, seguranca e
                eficiencia.
              </p>
              <div className="mm-actions">
                <a
                  className="mm-btn"
                  href={whatsApp()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WaIcon size={17} />
                  Falar com a Dra. Marianna
                </a>
                <a className="mm-btn-outline" href="#servicos">
                  Ver Servicos
                  <ChevronRight size={16} />
                </a>
              </div>
              <div className="mm-proof-bar" aria-label="Credenciais">
                {proofPoints.map((p) => (
                  <div className="mm-proof-item" key={p.label}>
                    <strong>{p.value}</strong>
                    <span>{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section
          id="sobre"
          className="mm-section alt"
          aria-label="Sobre a advogada"
        >
          <div className="mm-wrap mm-two-col mm-reveal">
            <div className="mm-about-photo-wrap">
              <img
                className="mm-about-photo"
                src="/images/marianamonteiro/marianna-monteiro-perfil.jpg"
                alt="Dra. Marianna Monteiro, advogada especialista em direito da saude"
              />
              <div className="mm-about-badge">
                <strong>Dra. Marianna Monteiro</strong>
                <span>OAB/DF 74181 · Brasilia, DF</span>
              </div>
            </div>

            <div className="mm-about-copy">
              <span className="mm-label">Sobre</span>
              <h2 className="mm-h2">
                Liminares rapidas e seguranca juridica para quem mais precisa.
              </h2>
              <p>
                As medidas liminares podem ser buscadas tanto por beneficiarios
                de planos de saude quanto por usuarios do SUS, especialmente em
                situacoes que envolvam urgencia no acesso a tratamentos,
                internacoes, medicamentos ou procedimentos medicos.
              </p>
              <p>
                Busque decisoes judiciais urgentes para assegurar o acesso a
                terapias, procedimentos, internacoes e tratamentos prescritos
                pelos medicos, diante de negativas do plano de saude ou da rede
                publica.
              </p>
              <p>
                Em situacoes criticas, a rapida atuacao juridica pode ser
                essencial para buscar a transferencia do paciente, a
                disponibilizacao de leito adequado ou a continuidade do
                tratamento medico necessario — sempre com base na prescricao
                medica e na comprovacao da urgencia do caso.
              </p>
              <div className="mm-about-oab">
                <ShieldCheck size={14} />
                OAB/DF 74181 · Atendimento 100% Online
              </div>
              <div className="mm-tags" aria-label="Areas de atuacao">
                {[
                  "Liminares",
                  "Plano de Saude",
                  "SUS",
                  "UTI",
                  "Home Care",
                  "TEA",
                  "Oncologia",
                ].map((tag) => (
                  <span className="mm-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAIS ── */}
        <section className="mm-section dark" aria-label="Diferenciais">
          <div className="mm-wrap">
            <div className="mm-section-head mm-reveal">
              <span className="mm-label">Por que escolher</span>
              <h2 className="mm-h2">
                Tres pilares que fazem a diferenca em casos urgentes.
              </h2>
              <p className="mm-lead">
                Velocidade, clareza e presenca digital — construidos para
                atender quem precisa de resposta juridica agora, nao amanha.
              </p>
            </div>
            <div className="mm-diffs">
              {differentials.map((d, i) => (
                <div
                  className={`mm-diff mm-reveal mm-delay-${i + 1}`}
                  key={d.title}
                >
                  <div className="mm-diff-icon" aria-hidden="true">
                    <d.icon size={20} />
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICOS ── */}
        <section id="servicos" className="mm-section" aria-label="Servicos">
          <div className="mm-wrap">
            <div className="mm-section-head mm-reveal">
              <span className="mm-label">Areas de Atuacao</span>
              <h2 className="mm-h2">
                Cobertura completa em liminares de saude.
              </h2>
              <p className="mm-lead">
                Atuamos em 22 areas distintas do direito da saude, organizadas
                por categoria para facilitar a identificacao do seu caso.
              </p>
            </div>
            <div className="mm-services-grid">
              {serviceCategories.map((cat, i) => (
                <article
                  className={`mm-service-card mm-reveal mm-delay-${(i % 2) + 1}`}
                  key={cat.label}
                >
                  <div className="mm-service-head">
                    <div className="mm-service-icon" aria-hidden="true">
                      <cat.icon size={18} />
                    </div>
                    <h3>{cat.label}</h3>
                  </div>
                  <div className="mm-service-list">
                    {cat.services.map((s) => (
                      <div className="mm-service-item" key={s}>
                        <CheckCircle2 size={14} />
                        {s}
                      </div>
                    ))}
                  </div>
                  <a
                    className="mm-service-cta"
                    href={whatsApp(
                      `Ola, Dra. Marianna! Preciso de ajuda com: ${cat.label}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WaIcon size={13} />
                    Consultar este caso
                    <ChevronRight size={13} style={{ marginLeft: "auto" }} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section
          id="como-funciona"
          className="mm-section dark"
          aria-label="Como funciona"
        >
          <div className="mm-wrap">
            <div className="mm-section-head center mm-reveal">
              <span className="mm-label">Processo</span>
              <h2 className="mm-h2">
                Do contato ao protocolo: simples, rapido e seguro.
              </h2>
              <p className="mm-lead">
                Tres etapas objetivas para garantir a representacao juridica
                mais agil possivel em casos urgentes de saude.
              </p>
            </div>
            <div className="mm-steps">
              {steps.map((step, i) => (
                <div
                  className={`mm-step mm-reveal mm-delay-${i + 1}`}
                  key={step.number}
                >
                  <div className="mm-step-left">
                    <span className="mm-step-num" aria-hidden="true">
                      {step.number}
                    </span>
                    <div className="mm-step-icon-wrap" aria-hidden="true">
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

        {/* ── LOCALIZACAO ── */}
        <section className="mm-section alt" aria-label="Localizacao">
          <div className="mm-wrap">
            <div className="mm-section-head mm-reveal">
              <span className="mm-label">Localizacao</span>
              <h2 className="mm-h2">
                Escritorio em Brasilia, atendimento em todo o Brasil.
              </h2>
              <p className="mm-lead">
                Sede no Complexo Brasil 21, Asa Sul — Brasilia/DF. Atendimento
                presencial ou 100% online para clientes de qualquer estado.
              </p>
            </div>
            <div className="mm-location-grid mm-reveal mm-delay-1">
              <div className="mm-map-wrap">
                <iframe
                  src="https://maps.google.com/maps?q=SHS+Quadra+06+Complexo+Brasil+21+Asa+Sul+Brasilia+DF+70316-000&output=embed"
                  title="Localizacao escritorio Dra. Marianna Monteiro"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mm-location-info">
                <div className="mm-location-block">
                  <span className="mm-label">Endereco</span>
                  <p>
                    SHS, Quadra 06
                    <br />
                    Complexo Brasil 21 — Asa Sul
                    <br />
                    Brasilia, DF · 70316-000
                  </p>
                  <a
                    className="mm-map-cta"
                    href="https://maps.google.com/maps?q=SHS+Quadra+06+Complexo+Brasil+21+Asa+Sul+Brasilia+DF"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin size={14} />
                    Abrir no Google Maps
                  </a>
                </div>
                <div className="mm-location-block">
                  <span className="mm-label">Atendimento</span>
                  <div className="mm-location-rows">
                    <div className="mm-location-row">
                      <Globe size={14} />
                      <span>100% Online — qualquer estado do Brasil</span>
                    </div>
                    <div className="mm-location-row">
                      <MapPin size={14} />
                      <span>Presencial — Brasilia/DF</span>
                    </div>
                    <div className="mm-location-row">
                      <MessageCircle size={14} />
                      <a href={whatsApp()} target="_blank" rel="noreferrer">
                        (61) 99551-8066
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CITACAO CF ── */}
        <section
          className="mm-section dark-alt mm-cf-block"
          aria-label="Citacao Constitucional"
        >
          <div className="mm-wrap">
            <div className="mm-cf-inner mm-reveal">
              <span className="mm-label">Art. 196 da Constituicao Federal</span>
              <div className="mm-cf-divider" aria-hidden="true" />
              <blockquote className="mm-cf-quote">
                &ldquo;A saude e direito de todos e dever do Estado, garantido
                mediante politicas sociais e economicas que visem a reducao do
                risco de doenca e de outros agravos e ao acesso universal e
                igualitario as acoes e servicos para sua promocao, protecao e
                recuperacao.&rdquo;
              </blockquote>
              <div className="mm-cf-divider" aria-hidden="true" />
              <span className="mm-cf-source">
                Constituicao Federal · Art. 196
              </span>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section
          id="contato"
          className="mm-section dark mm-final"
          aria-label="Contato"
        >
          <div className="mm-wrap">
            <div className="mm-final-content mm-reveal">
              <span className="mm-label">Fale Agora</span>
              <h2 className="mm-h2">
                Em situacoes criticas, a atuacao rapida pode ser essencial.
              </h2>
              <p className="mm-lead">
                Negativa de plano de saude, recusa do SUS, vaga em UTI,
                transferencia hospitalar ou continuidade de tratamento negada —
                entre em contato agora. Analisamos seu caso com a urgencia que
                ele merece e protocolamos a acao em ate 2 horas.
              </p>
              <div className="mm-actions">
                <a
                  className="mm-btn"
                  href={whatsApp()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WaIcon size={17} />
                  Solicitar Liminar Urgente
                </a>
                <a
                  className="mm-btn-outline"
                  href="https://mariannamonteiroliminar.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver site atual
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="mm-footer">
          <div className="mm-wrap">
            <div className="mm-footer-body">
              <div className="mm-footer-brand">
                <strong>Marianna Monteiro</strong>
                <p>
                  Advogada especialista em medidas liminares urgentes na area da
                  saude. Atendimento 100% online · Brasilia, DF.
                </p>
                <div className="mm-footer-brand-tags">
                  {[
                    "Liminares",
                    "Plano de Saude",
                    "UTI",
                    "Home Care",
                    "TEA",
                    "SUS",
                  ].map((tag) => (
                    <span className="mm-footer-brand-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mm-footer-col">
                <h4>Navegacao</h4>
                <a href="#sobre">Sobre</a>
                <a href="#servicos">Servicos</a>
                <a href="#como-funciona">Como Funciona</a>
                <a href={whatsApp()} target="_blank" rel="noreferrer">
                  Falar pelo WhatsApp
                </a>
              </div>

              <div className="mm-footer-col">
                <h4>Contato</h4>
                <div className="mm-footer-contact-row">
                  <MapPin size={14} />
                  <span>
                    SHS, Quadra 06, Complexo Brasil 21
                    <br />
                    Asa Sul · Brasilia, DF · 70316-000
                  </span>
                </div>
                <div className="mm-footer-contact-row">
                  <MessageCircle size={14} />
                  <a href={whatsApp()} target="_blank" rel="noreferrer">
                    (61) 99551-8066
                  </a>
                </div>
                <div className="mm-footer-contact-row">
                  <ShieldCheck size={14} />
                  <span>OAB/DF 74181</span>
                </div>
              </div>
            </div>

            <hr className="mm-footer-divider" />

            <div className="mm-footer-bottom">
              <span>
                © 2026 Marianna Monteiro Advogada. Todos os direitos reservados.
              </span>
              <span>
                Site por{" "}
                <a
                  href="https://lumasites.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lumasites
                </a>
              </span>
            </div>
          </div>
        </footer>
      </main>

      {/* ── WHATSAPP FLOAT ── */}
      <a
        className="mm-wa-float"
        href={whatsApp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Dra. Marianna Monteiro pelo WhatsApp"
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
