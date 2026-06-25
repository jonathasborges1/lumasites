"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Combine,
  Download,
  Gem,
  Home,
  Landmark,
  MapPin,
  Maximize2,
  Paintbrush,
  Ruler,
  Sparkles,
  Trees,
} from "lucide-react";

const assets = {
  hero: "/images/bristol/bristol-entorno.jpg",
  towers: "/images/bristol/bristol-torres-destaques.jpg",
  lifestyle: "/images/bristol/bristol-lifestyle.webp",
  decorated: "/images/bristol/bristol-planta-decorado-121.jpg",
  plant117: "/images/bristol/bristol-planta-117.jpg",
  plant97: "/images/bristol/bristol-planta-97.jpg",
  plant127: "/images/bristol/bristol-planta-127.jpg",
  cover242: "/images/bristol/bristol-cobertura-242.jpg",
  cover253: "/images/bristol/bristol-cobertura-253.jpg",
  unifiedA: "/images/bristol/bristol-unificacao-1-17.jpg",
  finishes: "/images/bristol/bristol-acabamentos.jpg",
};

const pdfUrl = "/docs/bristol/planta-bristol-reserva-inglesa.pdf";
const whatsappUrl = `https://wa.me/5592988410440?text=${encodeURIComponent(
  "Olá! Vim pela proposta do Bristol Reserva Inglesa e gostaria de falar sobre o projeto.",
)}`;

const navItems = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#plantas", label: "Plantas" },
  { href: "#unificacao", label: "Unificação" },
  { href: "#acabamentos", label: "Acabamentos" },
];

const MenuGlyph = ({ open = false }: { open?: boolean }) => (
  <span className={`br-menu-glyph${open ? " open" : ""}`} aria-hidden="true">
    <span className="br-menu-line br-menu-line-top" />
    <span className="br-menu-line br-menu-line-bottom" />
    <span className="br-menu-dot" />
  </span>
);

const highlights = [
  ["97m² a 253m²", "Plantas amplas e funcionais"],
  ["+22", "Itens de lazer"],
  ["Ponta Negra", "Localização em Manaus"],
  ["Duplex", "Coberturas exclusivas"],
];

const differentials = [
  {
    icon: Gem,
    title: "Exclusividade no endereço",
    text: "Uma comunicação posicionada para valorizar conforto, sofisticação e presença em uma das regiões mais desejadas de Manaus.",
  },
  {
    icon: Ruler,
    title: "Plantas flexíveis",
    text: "Opções de 97m² a 253m², com plantas tipo, unidade decorada, coberturas duplex e possibilidades de unificação.",
  },
  {
    icon: Paintbrush,
    title: "Autonomia nos acabamentos",
    text: "Conceito de entrega pensado para que o cliente escolha materiais, padrões e estilo conforme seu planejamento.",
  },
  {
    icon: Trees,
    title: "Vida com respiro",
    text: "O material destaca área verde, entorno qualificado e uma narrativa visual voltada para família, bem-estar e permanência.",
  },
];

const plants = [
  {
    name: "Decorado",
    area: "121m²",
    detail: "UN final 02",
    image: assets.decorated,
  },
  {
    name: "Tipo 1º ao 17º",
    area: "117m²",
    detail: "UN final 01",
    image: assets.plant117,
  },
  {
    name: "Tipo 1º ao 17º",
    area: "97m²",
    detail: "UN final 03",
    image: assets.plant97,
  },
  {
    name: "Tipo 18º ao 23º",
    area: "127m²",
    detail: "UN final 02",
    image: assets.plant127,
  },
];

const covers = [
  {
    name: "Cobertura 2401",
    area: "242m²",
    image: assets.cover242,
  },
  {
    name: "Cobertura 2402",
    area: "253m²",
    image: assets.cover253,
  },
];

const unified = [
  ["1º ao 17º", "117m² + 121m²", "238m²"],
  ["1º ao 17º", "97m² + 101m²", "198m²"],
  ["18º ao 23º", "121m² + 127m²", "248m²"],
  ["18º ao 23º", "101m² + 106m²", "207m²"],
];

const css = `
html{scroll-behavior:smooth;scroll-padding-top:88px}
*,*::before,*::after{box-sizing:border-box}
body{margin:0}
.bristol{min-height:100vh;overflow-x:clip;background:#eeece2;color:#251f1e;font-family:var(--font-bristol-body),system-ui,sans-serif}
.bristol img{display:block;max-width:100%}
.bristol a{color:inherit;text-decoration:none}
.bristol button{font:inherit}
.br-wrap{width:min(1160px,calc(100% - 40px));margin:0 auto}
.br-section{padding:88px 0}
.br-section.alt{background:#fffaf1}
.br-kicker{display:inline-flex;align-items:center;gap:10px;margin:0 0 14px;color:#b39156;font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}
.br-kicker::before{content:"";width:28px;height:1px;background:currentColor}
.br-h2{margin:0;max-width:780px;font-family:var(--font-bristol-display),serif;color:#3a1717;font-size:clamp(34px,5vw,64px);font-weight:600;line-height:.96;letter-spacing:0}
.br-lead{max-width:720px;margin:18px 0 0;color:#675b55;font-size:16px;line-height:1.76}
.br-btn{min-height:48px;padding:0 18px;display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:6px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.br-btn:hover{transform:translateY(-1px)}
.br-btn.primary{background:#b39156;color:#17110f;box-shadow:0 16px 36px rgba(179,145,86,.24)}
.br-btn.light{border:1px solid rgba(255,255,255,.38);background:rgba(255,255,255,.1);color:#fff}
.br-btn.dark{background:#3a1717;color:#fff}

.br-preview{position:fixed;inset:0 0 auto;z-index:22;min-height:52px;padding:7px 16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;text-align:center;background:#140909;color:rgba(255,255,255,.66);border-bottom:1px solid rgba(255,255,255,.08)}
.br-preview-main{display:flex;align-items:center;gap:8px;color:#fff;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
.br-preview-dot{width:7px;height:7px;border-radius:999px;background:#b39156;box-shadow:0 0 0 5px rgba(179,145,86,.14)}
.br-preview-detail{font-size:11px;line-height:1.35}
.br-preview-detail a{color:#e6c47e;font-weight:800}
.br-nav{position:fixed;inset:52px 0 auto;z-index:20;height:72px;background:rgba(60,24,24,.88);border-bottom:1px solid rgba(255,255,255,.12);backdrop-filter:blur(14px)}
.br-nav-inner{height:100%;display:flex;align-items:center;justify-content:space-between;gap:20px}
.br-brand{display:flex;align-items:center;gap:14px;color:#fff}
.br-brand-logo{width:210px;height:auto;filter:drop-shadow(0 8px 20px rgba(0,0,0,.18))}
.br-nav-links{display:none;align-items:center;gap:22px;color:rgba(255,255,255,.76);font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
.br-nav-links a:hover{color:#d5b36f}
.br-menu-btn{width:44px;height:44px;display:inline-grid;place-items:center;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(255,255,255,.06);color:#e6c47e;box-shadow:0 0 0 0 rgba(179,145,86,.3);animation:br-menu-pulse 2.2s ease-out infinite;transition:background .18s ease,border-color .18s ease,transform .18s ease}
.br-menu-btn:hover{background:rgba(255,255,255,.1);transform:translateY(-1px)}
.br-nav.menu-open .br-menu-btn{background:rgba(179,145,86,.14);border-color:rgba(230,196,126,.42);animation:none}
.br-menu-glyph{position:relative;width:22px;height:18px;display:block}
.br-menu-line{position:absolute;right:0;height:1.5px;border-radius:999px;background:currentColor;transition:top .26s cubic-bezier(.22,.8,.28,1),width .26s cubic-bezier(.22,.8,.28,1),transform .26s cubic-bezier(.22,.8,.28,1)}
.br-menu-line-top{top:5px;width:22px}
.br-menu-line-bottom{top:13px;width:15px}
.br-menu-dot{position:absolute;left:0;bottom:3px;width:3.5px;height:3.5px;border-radius:50%;background:currentColor;box-shadow:0 0 0 0 rgba(230,196,126,.66);animation:br-menu-dot-pulse 1.6s ease-out infinite;transition:opacity .18s ease,transform .26s ease}
.br-menu-glyph.open .br-menu-line-top{top:8px;width:22px;transform:rotate(42deg)}
.br-menu-glyph.open .br-menu-line-bottom{top:8px;width:22px;transform:rotate(-42deg)}
.br-menu-glyph.open .br-menu-dot{opacity:0;transform:scale(0);animation:none}
.br-mobile{position:fixed;z-index:19;inset:124px 0 auto;background:#3a1717;color:#fff;border-bottom:1px solid rgba(255,255,255,.12);box-shadow:0 28px 60px rgba(30,10,10,.32);animation:br-mobile-enter .3s cubic-bezier(.22,.8,.28,1) both}
.br-mobile-inner{width:min(100% - 40px,520px);margin:0 auto;padding:26px 0 30px}
.br-mobile-eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:14px;color:#e6c47e;font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
.br-mobile-eyebrow::before{content:"";width:28px;height:1px;background:currentColor}
.br-mobile-nav{display:grid}
.br-mobile-link{min-height:56px;display:grid;grid-template-columns:32px 1fr 20px;align-items:center;border-top:1px solid rgba(255,255,255,.1);color:#fff}
.br-mobile-link:last-child{border-bottom:1px solid rgba(255,255,255,.1)}
.br-mobile-index{color:#e6c47e;font-size:9px;font-weight:800;letter-spacing:.12em}
.br-mobile-label{font-family:var(--font-bristol-display),serif;font-size:24px;font-weight:600;line-height:1}
.br-mobile-cta{min-height:54px;margin-top:18px;padding:0 18px;display:flex;align-items:center;justify-content:space-between;border-radius:6px;background:#b39156;color:#17110f;font-size:11px;font-weight:900;letter-spacing:.1em;text-transform:uppercase}
@keyframes br-mobile-enter{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
@keyframes br-menu-pulse{0%{box-shadow:0 0 0 0 rgba(179,145,86,.32)}70%{box-shadow:0 0 0 12px rgba(179,145,86,0)}100%{box-shadow:0 0 0 0 rgba(179,145,86,0)}}
@keyframes br-menu-dot-pulse{0%{box-shadow:0 0 0 0 rgba(230,196,126,.72)}70%{box-shadow:0 0 0 8px rgba(230,196,126,0)}100%{box-shadow:0 0 0 0 rgba(230,196,126,0)}}

.br-hero{position:relative;min-height:88svh;padding-top:124px;color:#fff;isolation:isolate}
.br-hero-bg{position:absolute;inset:0;z-index:-2}
.br-hero-bg img{width:100%;height:100%;object-fit:cover}
.br-hero::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(49,18,18,.88),rgba(49,18,18,.5) 46%,rgba(49,18,18,.1)),linear-gradient(0deg,rgba(20,12,10,.35),rgba(20,12,10,.12))}
.br-hero-inner{min-height:calc(88svh - 124px);display:flex;align-items:center;padding:70px 0}
.br-hero-copy{max-width:820px}
.br-overline{display:inline-flex;align-items:center;gap:9px;margin-bottom:18px;color:#e6c47e;font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}
.br-hero h1{margin:0;font-family:var(--font-bristol-display),serif;font-size:clamp(48px,8vw,106px);font-weight:600;line-height:.86;letter-spacing:0;text-wrap:balance}
.br-hero p{max-width:680px;margin:24px 0 0;color:rgba(255,255,255,.84);font-size:18px;line-height:1.72}
.br-hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}
.br-metrics{position:relative;margin-top:-1px;background:#3a1717;color:#fff}
.br-metrics-grid{display:grid;grid-template-columns:1fr;gap:1px;background:rgba(255,255,255,.12)}
.br-metric{padding:24px 20px;background:#3a1717}
.br-metric strong{display:block;font-family:var(--font-bristol-display),serif;color:#e6c47e;font-size:36px;font-weight:600;line-height:1}
.br-metric span{display:block;margin-top:8px;color:rgba(255,255,255,.72);font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}

.br-split{display:grid;gap:34px;align-items:center}
.br-photo{position:relative;overflow:hidden;border-radius:8px;background:#d8d1c4;box-shadow:0 22px 70px rgba(58,23,23,.14)}
.br-photo img{width:100%;height:100%;aspect-ratio:16/10;object-fit:cover}
.br-copy-panel{padding:30px 0}
.br-checks{display:grid;gap:12px;margin-top:26px}
.br-check{display:flex;gap:10px;align-items:flex-start;color:#453936;font-size:14px;font-weight:650;line-height:1.5}
.br-check svg{margin-top:2px;color:#9a6e37;flex:none}

.br-diff-grid{display:grid;grid-template-columns:1fr;gap:14px;margin-top:34px}
.br-card{border:1px solid rgba(58,23,23,.12);border-radius:8px;background:#fffdf8;padding:22px;box-shadow:0 16px 44px rgba(58,23,23,.06)}
.br-icon{width:42px;height:42px;display:grid;place-items:center;border-radius:6px;background:#efe3cf;color:#7b302f}
.br-card h3{margin:16px 0 0;color:#3a1717;font-size:18px;line-height:1.2}
.br-card p{margin:10px 0 0;color:#6f625d;font-size:14px;line-height:1.68}

.br-gallery-head{display:flex;flex-direction:column;gap:18px;align-items:flex-start;margin-bottom:30px}
.br-plant-grid{display:grid;grid-template-columns:1fr;gap:18px}
.br-plant{overflow:hidden;border:1px solid rgba(58,23,23,.1);border-radius:8px;background:#fffdf8;box-shadow:0 16px 44px rgba(58,23,23,.06)}
.br-plant-img{position:relative;background:#7b302f}
.br-plant-img img{width:100%;aspect-ratio:16/9;object-fit:cover}
.br-plant-body{padding:18px}
.br-plant-body span{display:block;color:#9a6e37;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
.br-plant-body strong{display:block;margin-top:6px;color:#3a1717;font-family:var(--font-bristol-display),serif;font-size:34px;font-weight:600;line-height:1}
.br-plant-body p{margin:8px 0 0;color:#6f625d;font-size:13px;font-weight:650}

.br-band{background:#7b302f;color:#fff}
.br-band .br-kicker{color:#e6c47e}
.br-band .br-h2{color:#fff}
.br-band .br-lead{color:rgba(255,255,255,.76)}
.br-unified{display:grid;grid-template-columns:1fr;gap:12px;margin-top:34px}
.br-unified-row{display:grid;grid-template-columns:1fr;gap:8px;padding:18px;border:1px solid rgba(255,255,255,.18);border-radius:8px;background:rgba(255,255,255,.06)}
.br-unified-row span{color:rgba(255,255,255,.68);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
.br-unified-row strong{font-family:var(--font-bristol-display),serif;color:#e6c47e;font-size:34px;font-weight:600;line-height:1}

.br-finish{display:grid;gap:26px;align-items:start}
.br-finish-list{display:grid;gap:12px;margin-top:24px}
.br-finish-item{display:flex;gap:12px;padding:16px;border-left:3px solid #b39156;background:#fffdf8;color:#4e423d;font-size:14px;line-height:1.58}
.br-finish-item svg{color:#7b302f;flex:none;margin-top:2px}
.br-note{margin-top:24px;padding:18px;border-radius:8px;background:#f2eadc;color:#62554f;font-size:12px;line-height:1.68}

.br-cta{position:relative;isolation:isolate;overflow:hidden;padding:90px 0;color:#fff;background:#251f1e}
.br-cta::before{content:"";position:absolute;inset:0;z-index:-2;background:url("${assets.lifestyle}") center/cover no-repeat}
.br-cta::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(58,23,23,.94),rgba(58,23,23,.74),rgba(58,23,23,.35))}
.br-cta h2{margin:0;max-width:760px;font-family:var(--font-bristol-display),serif;font-size:clamp(36px,6vw,76px);font-weight:600;line-height:.94}
.br-cta p{max-width:650px;margin:18px 0 0;color:rgba(255,255,255,.78);font-size:16px;line-height:1.76}
.br-footer{padding:28px 0;background:#2d1414;color:rgba(255,255,255,.58);font-size:12px}
.br-footer-inner{display:flex;flex-direction:column;gap:8px}
.br-footer strong{color:#fff;letter-spacing:.12em;text-transform:uppercase}
.br-footer a{color:#e6c47e;font-weight:800}
.br-wa-float{position:fixed;right:max(20px,env(safe-area-inset-right));bottom:max(20px,env(safe-area-inset-bottom));z-index:1002;width:58px;height:58px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#25d366;color:#fff;box-shadow:0 4px 22px rgba(37,211,102,.42);animation:br-wa-pulse 2s ease-out infinite;transition:transform .2s,opacity .2s,visibility .2s}
.br-wa-float svg{color:#fff;fill:#fff}
.br-wa-float:hover{transform:scale(1.07)}
.br-wa-float:active{transform:scale(.94)}
.br-wa-float.menu-open{opacity:0;visibility:hidden;pointer-events:none;transform:translateY(12px) scale(.88);animation:none}
@keyframes br-wa-pulse{0%{box-shadow:0 4px 22px rgba(37,211,102,.42),0 0 0 0 rgba(37,211,102,.45)}70%{box-shadow:0 4px 22px rgba(37,211,102,.42),0 0 0 16px rgba(37,211,102,0)}100%{box-shadow:0 4px 22px rgba(37,211,102,.42),0 0 0 0 rgba(37,211,102,0)}}

@media (min-width:700px){
  .br-metrics-grid{grid-template-columns:repeat(4,1fr)}
  .br-diff-grid{grid-template-columns:repeat(2,1fr)}
  .br-plant-grid{grid-template-columns:repeat(2,1fr)}
  .br-unified-row{grid-template-columns:1fr 1fr auto;align-items:center}
}
@media (min-width:980px){
  .br-nav-links{display:flex}
  .br-menu-btn,.br-mobile{display:none}
  .br-split{grid-template-columns:1.02fr .98fr}
  .br-split.reverse{grid-template-columns:.92fr 1.08fr}
  .br-split.reverse .br-photo{order:2}
  .br-diff-grid{grid-template-columns:repeat(4,1fr)}
  .br-gallery-head{flex-direction:row;align-items:end;justify-content:space-between}
  .br-plant-grid.featured{grid-template-columns:1.2fr .8fr}
  .br-finish{grid-template-columns:.95fr 1.05fr}
  .br-footer-inner{flex-direction:row;align-items:center;justify-content:space-between}
}
@media (max-width:520px){
  .br-wrap{width:min(100% - 28px,1160px)}
  .br-section{padding:64px 0}
  .br-preview{min-height:52px;padding-inline:76px 14px;align-items:flex-start;text-align:left}
  .br-preview-detail{font-size:10px}
  .br-nav{height:66px}
  .br-brand-logo{width:168px}
  .br-nav-links{display:none}
  .br-mobile{inset:118px 0 auto}
  .br-hero-bg img{object-position:left center}
  .br-hero::after{background:linear-gradient(90deg,rgba(49,18,18,.9),rgba(49,18,18,.78)),linear-gradient(0deg,rgba(20,12,10,.28),rgba(20,12,10,.2))}
  .br-hero{padding-top:118px;min-height:86svh}
  .br-hero-inner{min-height:calc(86svh - 118px);padding:54px 0}
  .br-hero p{font-size:16px}
  .br-btn{width:100%}
  .br-metric{padding:20px 14px}
  .br-wa-float{right:max(20px,env(safe-area-inset-right));bottom:max(20px,env(safe-area-inset-bottom))}
}
`;

function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
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
}

export default function BristolProposalPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => setMenuOpen(false);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("resize", closeOnResize);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "Bristol Reserva Inglesa",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manaus",
      addressRegion: "AM",
      addressCountry: "BR",
      streetAddress: "Ponta Negra",
    },
    description:
      "Empreendimento em pré-venda na Ponta Negra, com plantas de 97m² a 253m², coberturas duplex e mais de 22 itens de lazer.",
  };

  return (
    <main className="bristol">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="br-preview" aria-label="Aviso de proposta">
        <div className="br-preview-main">
          <span className="br-preview-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="br-preview-detail">
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

      <header
        className={`br-nav${menuOpen ? " menu-open" : ""}`}
        aria-label="Navegação principal"
      >
        <div className="br-wrap br-nav-inner">
          <a
            className="br-brand"
            href="#top"
            aria-label="Bristol Reserva Inglesa"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              className="br-brand-logo"
              src="/images/bristol/bristol-reserva-inglesa-logo-proposta.svg"
              alt="Bristol Reserva Inglesa"
              width={520}
              height={156}
              priority
            />
          </a>
          <nav className="br-nav-links" aria-label="Seções">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="br-menu-btn"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="br-mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <MenuGlyph open={menuOpen} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="br-mobile"
          id="br-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="br-mobile-inner">
            <span className="br-mobile-eyebrow">Navegação</span>
            <nav className="br-mobile-nav" aria-label="Navegação mobile">
              {navItems.map((item, index) => (
                <a
                  className="br-mobile-link"
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="br-mobile-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="br-mobile-label">{item.label}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              ))}
            </nav>
            <a
              className="br-mobile-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <span>Falar pelo WhatsApp</span>
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>
      )}

      <section id="top" className="br-hero" aria-label="Bristol Reserva Inglesa">
        <div className="br-hero-bg" aria-hidden="true">
          <Image
            src={assets.hero}
            alt=""
            width={2160}
            height={1215}
            priority
            sizes="100vw"
          />
        </div>
        <div className="br-wrap br-hero-inner">
          <div className="br-hero-copy">
            <span className="br-overline">
              <MapPin size={15} />
              Ponta Negra - Manaus
            </span>
            <h1>Bristol Reserva Inglesa</h1>
            <p>
              Exclusividade, conforto e sofisticação em um novo endereço, com
              plantas amplas, coberturas duplex e uma proposta pensada para
              quem deseja morar com liberdade de escolha.
            </p>
            <div className="br-hero-actions">
              <a className="br-btn primary" href="#plantas">
                Ver plantas
                <ArrowRight size={16} />
              </a>
              <a className="br-btn light" href="#acabamentos">
                Entender acabamentos
              </a>
              <a
                className="br-btn light"
                href={pdfUrl}
                download="planta-bristol-reserva-inglesa.pdf"
              >
                Baixar PDF
                <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="br-metrics" aria-label="Destaques do empreendimento">
        <div className="br-metrics-grid">
          {highlights.map(([value, label]) => (
            <div className="br-metric" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="br-section">
        <div className="br-wrap br-split">
          <div className="br-photo">
            <Image
              src={assets.towers}
              alt="Render das torres do Bristol Reserva Inglesa"
              width={2160}
              height={1215}
              sizes="(min-width: 980px) 52vw, 100vw"
            />
          </div>
          <div className="br-copy-panel">
            <span className="br-kicker">Pré-venda</span>
            <h2 className="br-h2">Um produto imobiliário com leitura premium desde o primeiro contato.</h2>
            <p className="br-lead">
              A comunicação do Bristol combina arquitetura vertical, entorno
              verde e atributos comerciais objetivos. A proposta prioriza uma
              leitura elegante, com dados claros para o comprador comparar
              metragens, tipologias e possibilidades de personalização.
            </p>
            <div className="br-checks">
              <span className="br-check">
                <CheckCircle2 size={18} />
                Plantas amplas e funcionais de 97m² a 253m².
              </span>
              <span className="br-check">
                <CheckCircle2 size={18} />
                Mais de 22 itens de lazer destacados no material original.
              </span>
              <span className="br-check">
                <CheckCircle2 size={18} />
                Localização comercialmente posicionada em Ponta Negra.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="br-section alt">
        <div className="br-wrap">
          <span className="br-kicker">Diferenciais</span>
          <h2 className="br-h2">A proposta traduz o Bristol como escolha de endereço, planta e estilo.</h2>
          <p className="br-lead">
            O foco é apresentar o empreendimento com sofisticação, sem perder a
            precisão das informações que influenciam a decisão de compra.
          </p>
          <div className="br-diff-grid">
            {differentials.map((item) => (
              <article className="br-card" key={item.title}>
                <span className="br-icon">
                  <item.icon size={21} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="plantas" className="br-section">
        <div className="br-wrap">
          <div className="br-gallery-head">
            <div>
              <span className="br-kicker">Plantas</span>
              <h2 className="br-h2">Tipologias para diferentes momentos de vida.</h2>
              <p className="br-lead">
                Unidade decorada, plantas tipo e coberturas duplex foram
                organizadas para facilitar a leitura comercial das opções.
              </p>
            </div>
            <a className="br-btn dark" href="#unificacao">
              Ver unificação
              <Combine size={16} />
            </a>
          </div>

          <div className="br-plant-grid">
            {plants.map((plant) => (
              <article className="br-plant" key={`${plant.name}-${plant.area}`}>
                <div className="br-plant-img">
                  <Image
                    src={plant.image}
                    alt={`${plant.name} ${plant.area} - ${plant.detail}`}
                    width={2160}
                    height={1215}
                    sizes="(min-width: 700px) 50vw, 100vw"
                  />
                </div>
                <div className="br-plant-body">
                  <span>{plant.name}</span>
                  <strong>{plant.area}</strong>
                  <p>{plant.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section alt">
        <div className="br-wrap">
          <div className="br-gallery-head">
            <div>
              <span className="br-kicker">Coberturas duplex</span>
              <h2 className="br-h2">Metragens superiores para uma experiência mais reservada.</h2>
              <p className="br-lead">
                O material apresenta quatro coberturas duplex, com destaque para
                as unidades de 242m², 253m², 197m² e 209m².
              </p>
            </div>
          </div>
          <div className="br-plant-grid featured">
            {covers.map((cover) => (
              <article className="br-plant" key={cover.name}>
                <div className="br-plant-img">
                  <Image
                    src={cover.image}
                    alt={`${cover.name} com ${cover.area}`}
                    width={2160}
                    height={1215}
                    sizes="(min-width: 700px) 50vw, 100vw"
                  />
                </div>
                <div className="br-plant-body">
                  <span>{cover.name}</span>
                  <strong>{cover.area}</strong>
                  <p>Andar inferior e andar superior.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="unificacao" className="br-section br-band">
        <div className="br-wrap br-split reverse">
          <div className="br-photo">
            <Image
              src={assets.unifiedA}
              alt="Tabela de unificação de unidades do 1º ao 17º pavimento"
              width={2160}
              height={1215}
              sizes="(min-width: 980px) 54vw, 100vw"
            />
          </div>
          <div>
            <span className="br-kicker">Unificação de unidades</span>
            <h2 className="br-h2">Mais área privativa para quem busca amplitude.</h2>
            <p className="br-lead">
              A unificação amplia o argumento comercial do empreendimento,
              permitindo apresentar opções de área privativa entre 198m² e
              248m², conforme pavimento e combinação de finais.
            </p>
            <div className="br-unified">
              {unified.map(([floor, combo, total]) => (
                <div className="br-unified-row" key={`${floor}-${total}`}>
                  <span>{floor}</span>
                  <span>{combo}</span>
                  <strong>{total}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="acabamentos" className="br-section">
        <div className="br-wrap br-finish">
          <div>
            <span className="br-kicker">Acabamentos</span>
            <h2 className="br-h2">Personalização como argumento central de valor.</h2>
            <p className="br-lead">
              O material posiciona a entrega com flexibilidade para que o
              adquirente defina materiais, padrões e estilo. Essa promessa
              precisa aparecer de forma clara e juridicamente cuidadosa.
            </p>
            <div className="br-finish-list">
              <div className="br-finish-item">
                <Home size={18} />
                Living, circulação, cozinha, área de serviços, suítes, closets,
                área técnica e varandas com piso em concreto desempenado.
              </div>
              <div className="br-finish-item">
                <Landmark size={18} />
                Paredes com pintura branca e teto com forro de gesso com pintura.
              </div>
              <div className="br-finish-item">
                <Sparkles size={18} />
                Um banheiro em cada unidade será entregue com revestimento no
                piso, parede e forro, conforme ressalva do material.
              </div>
            </div>
          </div>
          <div>
            <div className="br-photo">
              <Image
                src={assets.finishes}
                alt="Informações de acabamento do Bristol Reserva Inglesa"
                width={2160}
                height={1215}
                sizes="(min-width: 980px) 52vw, 100vw"
              />
            </div>
            <p className="br-note">
              Imagens e plantas são meramente ilustrativas e podem sofrer
              variações em relação ao produto final. Bancadas de granito e
              acabamentos exibidos nas peças de divulgação não fazem parte da
              entrega padrão, exceto itens previstos na planta contratual.
            </p>
          </div>
        </div>
      </section>

      <section className="br-cta" aria-label="Chamada final">
        <div className="br-wrap">
          <span className="br-overline">
            <Building2 size={15} />
            Bristol Reserva Inglesa
          </span>
          <h2>Uma proposta pronta para vender o empreendimento com clareza.</h2>
          <p>
            A página organiza o conteúdo de pré-venda em uma experiência
            comercial: posicionamento, diferenciais, plantas, coberturas,
            unificação e acabamentos em uma leitura fluida para o comprador.
          </p>
          <div className="br-hero-actions">
            <a className="br-btn primary" href="#top">
              Voltar ao início
              <ArrowRight size={16} />
            </a>
            <a className="br-btn light" href="#plantas">
              Revisar plantas
              <Maximize2 size={16} />
            </a>
            <a
              className="br-btn light"
              href={pdfUrl}
              download="planta-bristol-reserva-inglesa.pdf"
            >
              Baixar PDF
              <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="br-footer">
        <div className="br-wrap br-footer-inner">
          <strong>Bristol Reserva Inglesa</strong>
          <span>Proposta comercial baseada no material de pré-venda analisado.</span>
          <span>
            Desenvolvido por{" "}
            <a
              href="https://lumasites.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              LumaSites.com.br
            </a>
          </span>
        </div>
      </footer>

      <a
        className={`br-wa-float${menuOpen ? " menu-open" : ""}`}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar sobre o projeto Bristol pelo WhatsApp"
        aria-hidden={menuOpen}
        tabIndex={menuOpen ? -1 : 0}
      >
        <WhatsAppIcon size={26} />
      </a>
    </main>
  );
}
