"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FileText,
  Instagram,
  Landmark,
  MapPin,
  Scale,
  Shield,
  Smartphone,
  X,
} from "lucide-react";

const WA_NUMBER = "557398117194";
const WA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Olá, Dr. Eduardo Bremer! Gostaria de falar sobre atendimento jurídico.",
)}`;
const IG = "https://www.instagram.com/ehbremer.adv/";

const IMG = {
  hero: "/images/eduardobremer/eduardo-bremer-advogado-08.jpg",
  sobre: "/images/eduardobremer/eduardo-bremer-advogado-12.jpg",
  portrait: "/images/eduardobremer/instagram-feed-selected/eduardo-bremer-feed-retrato-formal-05.jpg",
  logoTransparent: "/images/eduardobremer/eduardo-bremer-logo-gold-transparent.png",
  fgts: "/images/eduardobremer/instagram-feed-selected/eduardo-bremer-feed-deposito-fgts-07.jpg",
  reuniao: "/images/eduardobremer/instagram-feed-selected/eduardo-bremer-feed-reuniao-advocacia-21.jpg",
};

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

const areas = [
  { Icon: Shield, title: "Criminal", text: "Defesa, acompanhamento e orientação em situações criminais que exigem estratégia e discrição." },
  { Icon: FileText, title: "Cível", text: "Demandas envolvendo contratos, responsabilidades, conflitos patrimoniais e relações do dia a dia." },
  { Icon: BriefcaseBusiness, title: "Trabalhista", text: "FGTS, verbas rescisórias, vínculo, jornada, assédio e demais direitos de trabalhadores." },
  { Icon: Landmark, title: "Previdenciário", text: "Análise de benefícios, revisões e demandas previdenciárias com clareza documental." },
];

const process = [
  ["01", "Primeiro contato", "Você entra em contato pelo WhatsApp e relata sua situação com clareza e segurança."],
  ["02", "Análise inicial", "Os documentos, a urgência e a área jurídica envolvida são avaliados para definir o melhor caminho."],
  ["03", "Encaminhamento", "Com a estratégia definida, o atendimento segue com orientação técnica e acompanhamento responsável."],
];

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menuIcon${open ? " open" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

const css = `
  html{scroll-behavior:smooth}
  body{margin:0}
  *{box-sizing:border-box}
  a{text-decoration:none;color:inherit}
  button{font:inherit}
  img{max-width:100%;display:block}
  a:focus-visible,button:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
  :root{
    --navy:#070707;--navy2:#171717;--ink:#050505;--gold:#D6A933;
    --gold2:#B8891F;--paper:#F7F4EC;--white:#fff;--muted:#7B8493;
    --line:rgba(255,255,255,.14);--line2:rgba(5,5,5,.12);--top:52px;--nav:74px;
  }
  section[id]{scroll-margin-top:calc(var(--top) + var(--nav) + 18px)}
  .eb{min-height:100vh;background:var(--paper);font-family:var(--eb-body),Montserrat,system-ui,sans-serif;color:var(--ink);overflow-x:clip}
  .wrap{width:min(1180px,calc(100% - 40px));margin:0 auto}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}

  /* topbar */
  .topbar{position:fixed;z-index:60;inset:0 0 auto;height:var(--top);display:flex;align-items:center;justify-content:center;background:#050505;color:rgba(255,255,255,.7);border-bottom:1px solid rgba(214,169,51,.22);font-size:11px;letter-spacing:.14em;text-transform:uppercase}
  .topbarText{display:inline-flex;align-items:center;justify-content:center;gap:8px}
  .topbarDot{width:6px;height:6px;border-radius:999px;background:var(--gold);flex:none}
  .topbarText strong{color:#fff;font-weight:800}
  .topbarSub{text-transform:none;letter-spacing:.04em}
  .topbarSep{color:rgba(255,255,255,.28)}
  .back{position:absolute;left:12px;display:inline-flex;align-items:center;gap:7px;height:36px;padding:0 10px;border-radius:6px;color:rgba(255,255,255,.62)}
  .back:hover{background:rgba(255,255,255,.08);color:#fff}

  /* nav */
  .nav{position:fixed;z-index:59;inset:var(--top) 0 auto;height:var(--nav);transition:.25s background,.25s box-shadow}
  .nav.on{background:rgba(5,5,5,.96);backdrop-filter:blur(16px);box-shadow:0 1px 0 rgba(255,255,255,.08)}
  .navin{height:100%;display:flex;align-items:center;justify-content:space-between;gap:22px;width:min(1180px,calc(100% - 40px));margin:0 auto}
  .brand{display:flex;align-items:center;gap:10px;color:#fff;min-width:220px}
  .brandLogo{position:relative;width:88px;height:50px;flex:none}
  .brandLogo img{object-fit:contain;object-position:left center}
  .brandMeta{display:flex;flex-direction:column;gap:3px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.55);white-space:nowrap;line-height:1.25}
  .links{display:flex;align-items:center;gap:24px}
  .links a:not(.cta){font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:rgba(255,255,255,.66);position:relative}
  .links a:not(.cta)::after{content:"";position:absolute;bottom:-3px;left:50%;right:50%;height:1px;background:var(--gold);transition:left .25s ease,right .25s ease}
  .links a:not(.cta):hover{color:#fff}
  .links a:not(.cta):hover::after{left:0;right:0}
  .cta{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:42px;padding:0 18px;background:var(--gold);color:#050505!important;border-radius:6px;font-weight:800}
  .menu{display:none;width:44px;height:44px;border:1px solid rgba(214,169,51,.22);border-radius:0;background:transparent;color:#fff;flex-direction:column;align-items:center;justify-content:center;gap:0}
  .menuIcon{display:flex;flex-direction:column;align-items:flex-end;gap:5px;width:20px}
  .menuIcon span{display:block;height:1.5px;border-radius:999px;transition:transform .35s cubic-bezier(.22,1,.36,1),width .35s ease,opacity .25s ease,background .3s ease}
  .menuIcon span:nth-child(1){width:100%;background:var(--gold)}
  .menuIcon span:nth-child(2){width:65%;background:rgba(255,255,255,.75)}
  .menuIcon span:nth-child(3){width:35%;background:rgba(255,255,255,.45)}
  .menuIcon.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg);width:100%;background:#fff}
  .menuIcon.open span:nth-child(2){opacity:0;width:0}
  .menuIcon.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg);width:100%;background:#fff;opacity:1}

  /* mobile menu — always in DOM, toggled via class */
  .mobile{position:fixed;z-index:58;inset:calc(var(--top) + var(--nav)) 0 auto;background:#070707;overflow:hidden;max-height:0;opacity:0;padding:0 24px;border-bottom:1px solid var(--line);box-shadow:0 24px 50px rgba(0,0,0,.28);transition:max-height .32s ease,opacity .25s ease,padding .32s ease}
  .mobile.open{max-height:420px;opacity:1;padding:10px 24px 22px}
  .mobile a{display:block;padding:14px 0;border-bottom:1px solid var(--line);font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.75)}

  /* hero */
  .hero{min-height:92svh;padding-top:calc(var(--top) + var(--nav));position:relative;display:grid;grid-template-columns:1.04fr .96fr;background:#070707;color:#fff;overflow:hidden}
  .heroMedia{position:relative;min-height:540px;order:2;display:grid;place-items:center;background:#090909;overflow:hidden;border-left:1px solid rgba(214,169,51,.15)}
  .heroMedia::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#070707 0%,rgba(7,7,7,.6) 20%,transparent 52%),linear-gradient(0deg,#070707 0%,transparent 28%);pointer-events:none;z-index:1}
  .heroImg{object-fit:cover;object-position:center top;will-change:transform}
  .heroCopy{position:relative;z-index:2;display:flex;flex-direction:column;justify-content:center;padding:54px 6vw 58px max(40px,calc((100vw - 1180px)/2 + 20px))}
  .eyebrow,.label{display:inline-flex;align-items:center;gap:12px;width:max-content;max-width:100%;color:var(--gold);font-size:10px;font-weight:800;letter-spacing:.28em;text-transform:uppercase;margin-bottom:18px}
  .eyebrow::before,.label::before{content:"";height:1px;background:var(--gold);width:28px;flex:none}
  h1{font-family:var(--eb-heading),Georgia,serif;font-size:clamp(48px,6vw,92px);line-height:.94;font-weight:600;letter-spacing:0;margin:26px 0 0;max-width:770px}
  h1 em{font-style:italic;color:var(--gold)}
  .heroLead{max-width:560px;margin:22px 0 0;color:rgba(255,255,255,.75);font-size:16px;line-height:1.75}
  .actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
  .btnGold,.btnGhost{min-height:48px;padding:0 20px;border-radius:6px;display:inline-flex;align-items:center;gap:10px;font-weight:800;font-size:12px;letter-spacing:.1em;text-transform:uppercase}
  .btnGold{background:var(--gold);color:#050505;overflow:hidden;position:relative}
  .btnGold::after{content:"";position:absolute;inset:0 auto 0 -75%;width:50%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent);transform:skewX(-20deg)}
  .btnGold:hover{background:#E3BE56;transform:translateY(-1px)}
  .btnGold:hover::after{animation:shimmer .52s linear forwards}
  .btnGhost{border:1px solid rgba(255,255,255,.18);color:#fff;background:rgba(255,255,255,.05);transition:.25s border-color,.25s color}
  .btnGhost:hover{border-color:rgba(214,169,51,.5);color:var(--gold)}
  .heroCreds{display:flex;align-items:stretch;gap:0;margin-top:36px;padding-top:28px;border-top:1px solid rgba(255,255,255,.1);max-width:560px}
  .heroCred{display:flex;flex-direction:column;gap:5px;padding:0 22px}
  .heroCred:first-child{padding-left:0}
  .heroCred:not(:last-child){border-right:1px solid rgba(255,255,255,.12)}
  .heroCred strong{color:#fff;font-size:14px;font-weight:700;letter-spacing:-.01em;white-space:nowrap}
  .heroCred span{color:rgba(255,255,255,.42);font-size:10px;text-transform:uppercase;letter-spacing:.13em;white-space:nowrap}

  /* sections */
  .section{padding:78px 0}
  .dark{background:#070707;color:#fff}
  .blue{background:#171717;color:#fff}
  .paper{background:var(--paper)}
  .title{font-family:var(--eb-heading),Georgia,serif;font-size:clamp(36px,4.6vw,66px);line-height:1.02;font-weight:600;margin:0;letter-spacing:0}
  .lead{max-width:640px;margin:20px 0 0;font-size:16px;line-height:1.85;color:rgba(7,20,38,.68)}
  .dark .lead,.blue .lead{color:rgba(255,255,255,.68)}
  .sectionHead{display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,.58fr);gap:32px;align-items:end;margin-bottom:32px}
  .sectionHead .lead{margin:0;padding-left:18px;border-left:1px solid rgba(214,169,51,.35);text-align:left}
  .final .sectionHead .lead{text-align:left;margin:0}
  .sectionHeadText{position:relative}

  /* manifest */
  .manifest{display:grid;grid-template-columns:.82fr 1.18fr;gap:34px;align-items:center}
  .manifestQuote{font-family:var(--eb-heading),Georgia,serif;font-size:clamp(36px,5vw,76px);line-height:.98;margin:0;color:#050505}
  .manifestQuote em{color:var(--gold);font-style:italic}
  .manifestPanel{border-left:2px solid var(--gold);padding-left:28px}
  .manifestPanel p{font-size:16px;line-height:1.9;color:#4B5563;margin:0}

  /* areas */
  .areaGrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.1)}
  .area{min-height:274px;background:#070707;padding:24px;display:flex;flex-direction:column;transition:.3s background,.3s transform,.3s border-color;border:1px solid transparent}
  .area:hover{background:#171717;transform:translateY(-4px);border-color:rgba(214,169,51,.55)}
  .areaIcon{width:44px;height:44px;display:grid;place-items:center;border:1px solid rgba(214,169,51,.45);color:var(--gold);margin-bottom:28px;transition:.3s border-color}
  .area:hover .areaIcon{border-color:rgba(214,169,51,.9)}
  .area h3{font-family:var(--eb-heading),Georgia,serif;font-size:30px;font-weight:600;margin:0;color:#fff}
  .area p{margin:14px 0 0;color:rgba(255,255,255,.66);font-size:14px;line-height:1.7}
  .area a{margin-top:auto;color:var(--gold);display:inline-flex;align-items:center;gap:7px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:800}

  /* presence */
  .presence{display:grid;grid-template-columns:1.02fr .98fr;gap:36px;align-items:center}
  .mosaic{display:grid;grid-template-columns:1fr 1fr;gap:14px}
  .shot{position:relative;overflow:hidden;background:#fff;border:1px solid rgba(5,5,5,.08);display:grid;place-items:center}
  .shot::before{content:"";display:block;width:100%;aspect-ratio:4/5}
  .shot.tall{grid-row:span 2}
  .shot.tall::before{aspect-ratio:4/5}
  .shot img{object-fit:contain;object-position:center}
  .shot.photo{background:#f0ece4}
  .shot.photo img{object-fit:contain}
  .shot.brandLogoShot{background:#070707}
  .shot.brandLogoShot::before{aspect-ratio:16/10}
  .shot.brandLogoShot img{object-fit:contain;padding:26px}
  .insights{display:grid;gap:14px;margin-top:26px}
  .insight{display:flex;gap:14px;align-items:flex-start;border-top:1px solid rgba(7,20,38,.12);padding-top:16px;opacity:1;transform:none;transition:opacity .5s ease,transform .5s ease}
  .insight svg{color:var(--gold);flex:none}
  .insight strong{display:block;font-size:14px}
  .insight span{display:block;margin-top:4px;color:#667085;font-size:13px;line-height:1.55}

  /* process */
  .processGrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:var(--line);border:1px solid var(--line);margin-top:30px}
  .step{background:#171717;padding:26px;min-height:220px;transition:.25s background}
  .step:hover{background:#1e1e1e}
  .stepNum{font-family:var(--eb-heading),Georgia,serif;color:var(--gold);font-size:54px;line-height:1}
  .step h3{font-size:18px;margin:26px 0 0}
  .step p{font-size:14px;line-height:1.75;color:rgba(255,255,255,.66);margin:12px 0 0}

  /* about */
  .about{display:grid;grid-template-columns:1fr 1.1fr;gap:0;align-items:stretch}
  .aboutPhoto{position:relative;min-height:580px;overflow:hidden;background:#0a0a0a}
  .aboutPhoto img{object-fit:cover;object-position:center top}
  .aboutContent{padding:56px 52px;display:flex;flex-direction:column;justify-content:center;border-left:1px solid rgba(214,169,51,.18)}
  .aboutContent .title{color:#fff}
  .bio{margin-top:18px;color:rgba(255,255,255,.65);font-size:15px;line-height:1.85}
  .tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:28px}
  .tag{border:1px solid rgba(214,169,51,.28);padding:7px 13px;border-radius:4px;font-size:10px;text-transform:uppercase;letter-spacing:.12em;font-weight:800;color:rgba(255,255,255,.6);background:transparent;transition:.25s border-color,.25s color}
  .tag:hover{border-color:var(--gold);color:var(--gold)}

  /* location */
  .locationBar{display:flex;align-items:center;gap:0;margin-top:28px;margin-bottom:36px;border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1)}
  .locationBarItem{display:flex;align-items:center;gap:9px;padding:14px 28px;color:rgba(255,255,255,.52);font-size:12px;letter-spacing:.06em;flex:1;justify-content:center}
  .locationBarItem:not(:last-child){border-right:1px solid rgba(255,255,255,.1)}
  .locationBarItem svg{color:var(--gold);flex:none}
  .mobileOnly{display:none}

  .mapCard{position:relative;overflow:hidden;border:1px solid rgba(214,169,51,.18);display:block;text-decoration:none;cursor:pointer}
  .mapCard::before{content:"";display:block;aspect-ratio:3/2}
  .mapCard iframe{position:absolute;inset:0;width:100%;height:100%;border:0;filter:saturate(.9) contrast(1.04);pointer-events:none}
  .mapCard::after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(5,5,5,.88) 0%,rgba(5,5,5,.4) 38%,transparent 62%);transition:background .3s ease}
  .mapCard:hover::after{background:linear-gradient(0deg,rgba(5,5,5,.92) 0%,rgba(5,5,5,.58) 50%,rgba(5,5,5,.22) 100%)}
  .mapCardOpen{position:absolute;top:16px;right:16px;z-index:3;display:flex;align-items:center;gap:6px;background:rgba(214,169,51,.15);border:1px solid rgba(214,169,51,.4);color:var(--gold);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:6px 12px;opacity:0;transform:translateY(-4px);transition:opacity .25s ease,transform .25s ease}
  .mapCard:hover .mapCardOpen{opacity:1;transform:translateY(0)}
  .mapCardInfo{position:absolute;left:0;right:0;bottom:0;padding:24px 28px;z-index:2}
  .mapCardAccent{display:block;width:24px;height:2px;background:var(--gold);margin-bottom:12px}
  .mapCardCity{display:block;font-family:var(--eb-heading),Georgia,serif;font-size:24px;font-weight:600;color:#fff;line-height:1.1;margin-bottom:6px}
  .mapCardAddr{display:block;color:rgba(255,255,255,.56);font-size:12px;line-height:1.6}

  /* final / footer */
  .final{background:#05070B;color:#fff;padding:96px 0 0}
  .finalBox{text-align:center;max-width:760px;margin:0 auto;padding-bottom:72px;border-bottom:1px solid rgba(255,255,255,.1)}
  .final .lead{color:rgba(255,255,255,.68);margin:22px auto 0;text-align:center}
  .finalActions .btnGold{min-width:220px;justify-content:center}
  .locationHead{padding-top:0}
  .locationHead+.locationBar{margin-top:0}
  .mapsCards{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:72px}
  .finalActions{display:flex;flex-direction:column;align-items:center;gap:14px;margin-top:40px}
  .footer{color:rgba(255,255,255,.56)}
  .footerBody{display:grid;grid-template-columns:1.7fr 1fr 1fr;gap:56px;padding:44px 0 34px}
  .footerLogo{position:relative;width:160px;height:56px;margin:0 0 14px;filter:drop-shadow(0 12px 24px rgba(0,0,0,.24))}
  .footerLogo img{object-fit:contain;object-position:left center}
  .footerRole{display:block;margin-bottom:4px;color:var(--gold);font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase}
  .footerOab{display:block;margin-bottom:18px;color:rgba(255,255,255,.46);font-size:12px}
  .footerBrand p{max-width:370px;margin:0 0 8px;line-height:1.75;font-size:13px}
  .footerAddr{color:rgba(255,255,255,.42);font-size:12px;line-height:1.65}
  .footerTags{display:flex;flex-wrap:wrap;gap:7px;margin-top:18px}
  .footerTag{padding:5px 10px;border:1px solid rgba(255,255,255,.11);border-radius:4px;color:rgba(255,255,255,.46);font-size:10px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;transition:.18s border-color,.18s color}
  .footerTag:hover{border-color:var(--gold);color:var(--gold)}
  .footerCol h4{color:#fff;margin:0 0 18px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.18em}
  .footerCol a{display:flex;align-items:center;gap:8px;width:max-content;max-width:100%;padding:5px 0;color:rgba(255,255,255,.56);font-size:13px;line-height:1.5;transition:.18s color,.18s gap}
  .footerCol a:hover{color:var(--gold);gap:12px}
  .footerCol svg{flex:none}
  .footerLine{border:0;border-top:1px solid rgba(255,255,255,.08);margin:0}
  .footerBottom{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:20px 0;color:rgba(255,255,255,.42);font-size:12px}
  .footerBottom a{color:var(--gold);font-weight:800}
  .footerBottom a:hover{color:#fff}

  /* ── WA float with pulse ───────────────────────────── */
  @keyframes waPulse{
    0%,100%{box-shadow:0 18px 34px rgba(0,0,0,.28),0 0 0 0 rgba(37,211,102,.55)}
    65%{box-shadow:0 18px 34px rgba(0,0,0,.28),0 0 0 14px rgba(37,211,102,0)}
  }
  .waFloat{position:fixed;right:22px;bottom:22px;z-index:70;width:58px;height:58px;border-radius:999px;background:#25D366;color:#fff;display:grid;place-items:center;animation:waPulse 2.2s ease-out infinite;transition:transform .2s ease}
  .waFloat:hover{transform:scale(1.1)}

  /* ── Scroll reveal ─────────────────────────────────── */
  [data-reveal]{opacity:1;transform:none}
  [data-delay="80"]{transition-delay:.08s}
  [data-delay="120"]{transition-delay:.12s}
  [data-delay="160"]{transition-delay:.16s}
  [data-delay="200"]{transition-delay:.2s}
  [data-delay="240"]{transition-delay:.24s}

  /* insights stagger — triggered when parent gets .revealed */
  [data-reveal].revealed .insight:nth-child(1){opacity:1;transform:none;transition-delay:.1s}
  [data-reveal].revealed .insight:nth-child(2){opacity:1;transform:none;transition-delay:.21s}
  [data-reveal].revealed .insight:nth-child(3){opacity:1;transform:none;transition-delay:.32s}

  /* ── Hero entrance (CSS keyframes, immediate) ──────── */
  @keyframes heroUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
  @keyframes drawLine{from{width:0}to{width:28px}}
  .hero .eyebrow{animation:heroUp .7s cubic-bezier(.22,1,.36,1) .05s both}
  .hero .eyebrow::before{animation:drawLine .5s ease .55s both}
  .hero h1{animation:heroUp .7s cubic-bezier(.22,1,.36,1) .2s both}
  .heroLead{animation:heroUp .7s cubic-bezier(.22,1,.36,1) .35s both}
  .hero .actions{animation:heroUp .7s cubic-bezier(.22,1,.36,1) .48s both}
  .heroCreds{animation:heroUp .7s cubic-bezier(.22,1,.36,1) .6s both}

  /* ── Shimmer on gold CTA buttons ───────────────────── */
  @keyframes shimmer{0%{left:-75%}100%{left:125%}}

  /* ── Map modal ──────────────────────────────────────── */
  .mapModal{position:fixed;inset:0;z-index:999;display:flex;align-items:center;justify-content:center;padding:24px;opacity:0;pointer-events:none;transition:opacity .25s ease}
  .mapModal.open{opacity:1;pointer-events:all}
  .mapModalBackdrop{position:absolute;inset:0;background:rgba(5,5,5,.88);backdrop-filter:blur(6px)}
  .mapModalBox{position:relative;z-index:1;width:100%;max-width:880px;background:#0d0d0d;border:1px solid rgba(214,169,51,.22);transform:translateY(16px) scale(.98);transition:transform .3s cubic-bezier(.22,1,.36,1)}
  .mapModal.open .mapModalBox{transform:translateY(0) scale(1)}
  .mapModalHead{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid rgba(214,169,51,.14)}
  .mapModalTitle{font-family:var(--eb-heading),Georgia,serif;font-size:16px;font-weight:600;color:#fff;display:flex;align-items:center;gap:10px}
  .mapModalTitle span{color:rgba(255,255,255,.4);font-family:var(--eb-body),sans-serif;font-size:12px;font-weight:400}
  .mapModalActions{display:flex;align-items:center;gap:8px}
  .mapModalLink{display:flex;align-items:center;gap:5px;color:var(--gold);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;padding:6px 12px;border:1px solid rgba(214,169,51,.3);transition:background .2s}
  .mapModalLink:hover{background:rgba(214,169,51,.1)}
  .mapModalClose{display:flex;align-items:center;justify-content:center;width:32px;height:32px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.7);cursor:pointer;transition:background .2s}
  .mapModalClose:hover{background:rgba(255,255,255,.12);color:#fff}
  .mapModalFrame{width:100%;aspect-ratio:16/9;display:block;border:0}

  /* ── Section diagonal transitions ──────────────────── */
  #sobre{position:relative;z-index:3;clip-path:polygon(0 0,100% 0,100% calc(100% - 48px),0 100%);padding-bottom:calc(78px + 48px);margin-bottom:-48px}
  #especialidades{position:relative;z-index:2;clip-path:polygon(0 48px,100% 0,100% calc(100% - 48px),0 100%);padding:calc(78px + 48px) 0;margin-bottom:-48px}
  #como-funciona{position:relative;z-index:1;clip-path:polygon(0 48px,100% 0,100% calc(100% - 48px),0 100%);padding:calc(78px + 48px) 0;margin-bottom:-48px}
  #contato{position:relative;z-index:0;clip-path:polygon(0 48px,100% 0,100% 100%,0 100%);padding-top:calc(96px + 48px)}

  /* ── Responsive ────────────────────────────────────── */
  @media (max-width:980px){
    .links{display:none}.menu{display:grid;place-items:center}
    .hero{grid-template-columns:1fr;min-height:auto}.heroMedia{display:none}.heroCopy{padding:42px 20px 54px}
    .heroStats,.areaGrid,.processGrid,.footerBody{grid-template-columns:1fr}
    .manifest,.presence,.about{grid-template-columns:1fr}
    .locationBar{flex-direction:column}.locationBarItem{justify-content:flex-start;border-right:0!important;border-bottom:1px solid rgba(255,255,255,.1)}.locationBarItem:last-child{border-bottom:0}
    .mapsCards{grid-template-columns:1fr}
    .sectionHead{display:block}.sectionHead .lead{margin-top:18px}
    .section{padding:58px 0}
    #sobre{clip-path:polygon(0 0,100% 0,100% calc(100% - 32px),0 100%);padding-bottom:calc(58px + 32px);margin-bottom:-32px}
    #especialidades{clip-path:polygon(0 32px,100% 0,100% calc(100% - 32px),0 100%);padding:calc(58px + 32px) 0;margin-bottom:-32px}
    #como-funciona{clip-path:polygon(0 32px,100% 0,100% calc(100% - 32px),0 100%);padding:calc(58px + 32px) 0;margin-bottom:-32px}
    #contato{clip-path:polygon(0 32px,100% 0,100% 100%,0 100%);padding-top:calc(58px + 32px)}
  }
  @media (max-width:560px){
    :root{--top:58px;--nav:68px}
    .topbar{padding:0 70px;text-align:center;font-size:9px}.back span{display:none}
    .brand{min-width:0}.brandLogo{width:132px;height:44px}.brandMeta{display:none}
    .wrap,.navin{width:min(100% - 28px,1180px)}
    h1{font-size:clamp(38px,12vw,48px);line-height:1;max-width:100%}
    .heroLead{font-size:14px;line-height:1.7}
    .heroCreds{display:grid;grid-template-columns:1fr;margin-top:28px;padding-top:20px}
    .heroCred{padding:12px 0;border-right:0!important;border-bottom:1px solid rgba(255,255,255,.1)}
    .heroCred:first-child{padding-top:0}
    .heroCred:last-child{border-bottom:0;padding-bottom:0}
    .heroCred strong,.heroCred span{white-space:normal}
    .heroStats{margin-top:28px}
    .mosaic{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.shot::before,.shot.tall::before{aspect-ratio:4/5}.shot.brandLogoShot::before{aspect-ratio:16/10}.presence{gap:28px}
    .aboutPhoto{min-height:360px}.aboutContent{padding:36px 24px;border-left:0;border-top:1px solid rgba(214,169,51,.18)}
    .processGrid{margin-top:24px}.step{min-height:auto}
    .desktopOnly{display:none}.mobileOnly{display:inline}
    .sectionHead{margin-bottom:24px}
    .sectionHead .lead{padding-left:0;border-left:0;font-size:14px;line-height:1.7}
    .locationHead .title{max-width:320px;font-size:clamp(38px,11vw,46px);line-height:1.02}
    .locationHead .lead{margin-top:18px;max-width:330px;color:rgba(255,255,255,.64)}
    .locationBar{display:grid;grid-template-columns:1fr;gap:9px;margin-top:24px;margin-bottom:22px;border:0}
    .locationBarItem{justify-content:flex-start;text-align:left;border:1px solid rgba(255,255,255,.1)!important;background:rgba(255,255,255,.035);padding:13px 14px;color:rgba(255,255,255,.7)}
    .locationBarItem svg{width:16px;height:16px}
    .mapsCards{gap:10px;margin-bottom:48px}
    .mapCard{display:flex;flex-direction:column;background:#0d0d0d;padding:20px 20px 20px 22px;border:1px solid rgba(214,169,51,.16);border-left:2px solid var(--gold)}
    .mapCard::before,.mapCard::after,.mapCard iframe{display:none}
    .mapCardInfo{position:static;padding:0;order:1}
    .mapCardAccent{display:none}
    .mapCardCity{font-size:22px;margin-bottom:6px;letter-spacing:-.01em}
    .mapCardAddr{font-size:13px;color:rgba(255,255,255,.52);line-height:1.55}
    .mapCardOpen{position:static;opacity:1;transform:none;order:2;width:100%;margin-top:16px;justify-content:center;background:rgba(214,169,51,.08);color:var(--gold);border-color:rgba(214,169,51,.28);padding:10px 12px;font-size:11px}
    #contato{clip-path:polygon(0 24px,100% 0,100% 100%,0 100%);padding-top:64px}.finalBox{padding-bottom:32px}
    .footerBody{gap:28px;padding:36px 0 28px}.footerLogo{width:130px;height:42px}
    .footerCol a{min-height:38px}
    .btnGold,.btnGhost{width:100%}
  }
  @media (prefers-reduced-motion: reduce){
    html{scroll-behavior:auto}
    *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}
    [data-reveal],.insight{opacity:1!important;transform:none!important}
    .heroImg{transform:none!important}
  }
`;

export default function EduardoBremerPage() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const [mapModal, setMapModal] = useState<null | { src: string; title: string; mapsUrl: string }>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setParallaxY(window.scrollY * 0.12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMapModal(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="eb">
        <div className="topbar">
          <Link className="back" href="/proposta-comercial">
            <ArrowLeft size={15} />
            <span>Voltar</span>
          </Link>
          <span className="topbarText">
            <span className="topbarDot" aria-hidden="true" />
            <strong>Proposta comercial</strong>
            <span className="topbarSep">·</span>
            <span className="topbarSub">Prévia conceitual desenvolvida pela LumaSites.com.br</span>
          </span>
        </div>

        <header className={`nav${scrolled ? " on" : ""}`}>
          <div className="navin">
            <a className="brand" href="#inicio" aria-label="Ir para o início">
              <span className="brandLogo" aria-hidden="true">
                <Image src={IMG.logoTransparent} alt="" fill sizes="164px" priority />
              </span>
              <span className="brandMeta">
                <span>OAB/ES 37.747</span>
                <span>OAB/BA 83.916</span>
              </span>
            </a>
            <nav className="links" aria-label="Navegação principal">
              {nav.map((item) => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
              <a className="cta" href={WA} target="_blank" rel="noreferrer">
                <WaIcon size={15} /> WhatsApp
              </a>
            </nav>
            <button
              className="menu"
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="eb-mobile-menu"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </header>

        {open && (
          <nav
            id="eb-mobile-menu"
            className="mobile open"
            aria-label="Navegação mobile"
          >
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
            <a href={WA} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              Falar no WhatsApp
            </a>
          </nav>
        )}

        {/* ── HERO ── */}
        <section id="inicio" className="hero" aria-label="Apresentação">
          <div className="heroCopy">
            <span className="eyebrow">Advocacia estratégica</span>
            <h1>
              Direito claro para quem precisa de <em>direção</em>.
            </h1>
            <p className="heroLead">
              Atendimento jurídico presencial em Mucuri/BA e Vitória/ES, com
              orientação online para quem precisa agir com segurança nas áreas
              Criminal, Cível, Trabalhista e Previdenciária.
            </p>
            <div className="actions">
              <a className="btnGold" href={WA} target="_blank" rel="noreferrer">
                <WaIcon /> Falar com Eduardo
              </a>
              <a className="btnGhost" href="#especialidades">
                Ver atuação <ArrowRight size={16} />
              </a>
            </div>
            <div className="heroCreds" aria-label="Credenciais">
              <div className="heroCred"><strong>OAB/ES 37.747</strong><span>OAB/BA 83.916</span></div>
              <div className="heroCred"><strong>Criminal · Cível</strong><span>Trabalhista · Prev.</span></div>
              <div className="heroCred"><strong>Presencial · Online</strong><span>Mucuri/BA · Vitória/ES</span></div>
            </div>
          </div>
          <div className="heroMedia" aria-hidden="true">
            <Image
              className="heroImg"
              src={IMG.hero}
              alt=""
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              priority
              style={{ transform: `translateY(${parallaxY}px)` }}
            />
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section id="sobre" className="section dark" aria-label="Sobre Dr. Eduardo Bremer">
          <div className="wrap about">
            <div className="aboutPhoto" data-reveal="left">
              <Image
                src={IMG.sobre}
                alt="Dr. Eduardo Bremer em retrato profissional"
                fill
                sizes="(max-width: 980px) 100vw, 44vw"
                loading="eager"
              />
            </div>
            <div className="aboutContent" data-reveal="right">
              <span className="label">Sobre</span>
              <h2 className="title">Dr. Eduardo Bremer</h2>
              <p className="bio">
                Advogado inscrito na OAB/ES 37.747 e OAB/BA 83.916, com atuação
                nas áreas Criminal, Cível, Trabalhista e Previdenciária. Sua
                atuação combina técnica, escuta e comunicação acessível para
                orientar pessoas em decisões jurídicas relevantes.
              </p>
              <p className="bio">
                Atendimento presencial em Mucuri/BA e Vitória/ES, e online para
                todo o Brasil.
              </p>
              <div className="tags">
                {["OAB/ES 37.747", "OAB/BA 83.916", "Criminal", "Cível", "Trabalhista", "Previdenciário"].map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ESPECIALIDADES ── */}
        <section id="especialidades" className="section dark" aria-label="Especialidades">
          <div className="wrap">
            <div className="sectionHead" data-reveal="">
              <div className="sectionHeadText">
                <span className="label">Especialidades</span>
                <h2 className="title">Problemas reais pedem resposta jurídica clara.</h2>
              </div>
              <p className="lead">
                Atuação em áreas que exigem atenção, estratégia e acompanhamento
                profissional desde o primeiro contato.
              </p>
            </div>
            <div className="areaGrid">
              {areas.map(({ Icon, title, text }, i) => (
                <article
                  className="area"
                  key={title}
                  data-reveal=""
                  data-delay={String(i * 80)}
                >
                  <div className="areaIcon"><Icon size={24} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href={WA} target="_blank" rel="noreferrer">
                    Solicitar orientação <ChevronRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section id="como-funciona" className="section dark" aria-label="Como funciona o atendimento">
          <div className="wrap">
            <div className="sectionHead" data-reveal="">
              <div className="sectionHeadText">
                <span className="label">Como funciona</span>
                <h2 className="title">Um caminho simples para entender o seu caso.</h2>
              </div>
              <p className="lead">
                Do primeiro contato ao encaminhamento, o atendimento segue com
                escuta, análise e orientação clara sobre os próximos passos.
              </p>
            </div>
            <div className="processGrid">
              {process.map(([n, title, text], i) => (
                <article className="step" key={n} data-reveal="" data-delay={String(i * 120)}>
                  <div className="stepNum">{n}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTATO / FOOTER ── */}
        <section id="contato" className="final" aria-label="Contato">
          <div className="wrap">

            {/* Localização */}
            <div className="sectionHead locationHead" data-reveal="">
              <div className="sectionHeadText">
                <span className="label">Localização</span>
                <h2 className="title">
                  <span className="desktopOnly">Atendimento em Mucuri/BA, Vitória/ES e online.</span>
                  <span className="mobileOnly">Atendimento presencial e online</span>
                </h2>
              </div>
              <p className="lead">
                Atendimento presencial nos dois endereços e orientação online
                pelo WhatsApp para avaliar o melhor encaminhamento do seu caso.
              </p>
            </div>
            <div className="locationBar" data-reveal="" data-delay="120">
              <div className="locationBarItem"><Smartphone size={14} /> +55 73 9811-7194</div>
              <div className="locationBarItem"><Building2 size={14} /> Presencial · Online</div>
              <div className="locationBarItem"><MapPin size={14} /> Mucuri/BA · Vitória/ES</div>
            </div>
            <div className="mapsCards">
              <button
                className="mapCard"
                onClick={() => setMapModal({
                  src: "https://maps.google.com/maps?q=Rua%20Severino%20Vieira%2C%2083%2C%20Mucuri%2C%20BA%2C%2045930000%2C%20Brasil&output=embed&z=16&hl=pt-BR",
                  title: "Mucuri / BA",
                  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Severino+Vieira,+83,+Mucuri,+BA,+45930-000",
                })}
                data-reveal=""
                data-delay="0"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Rua%20Severino%20Vieira%2C%2083%2C%20Mucuri%2C%20BA%2C%2045930000%2C%20Brasil&output=embed&z=16&hl=pt-BR"
                  title="Mapa do escritório em Mucuri, Bahia"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <span className="mapCardOpen"><ExternalLink size={10} /> Ver no mapa</span>
                <div className="mapCardInfo">
                  <span className="mapCardAccent" />
                  <span className="mapCardCity">Mucuri / BA</span>
                  <span className="mapCardAddr">Rua Severino Vieira, 83 · CEP 45.930-000</span>
                </div>
              </button>
              <button
                className="mapCard"
                onClick={() => setMapModal({
                  src: "https://maps.google.com/maps?q=Avenida%20Scherrer%20Souza%2C%202230%2C%20Edificio%20Essencial%20Escritorios%2C%20Sala%20401%2C%20Vitoria%2C%20ES%2C%20Brasil&output=embed&z=16&hl=pt-BR",
                  title: "Vitória / ES",
                  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+Scherrer+Souza,+2230,+Vitória,+ES",
                })}
                data-reveal=""
                data-delay="120"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Avenida%20Scherrer%20Souza%2C%202230%2C%20Edificio%20Essencial%20Escritorios%2C%20Sala%20401%2C%20Vitoria%2C%20ES%2C%20Brasil&output=embed&z=16&hl=pt-BR"
                  title="Mapa do escritório em Vitória, Espírito Santo"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <span className="mapCardOpen"><ExternalLink size={10} /> Ver no mapa</span>
                <div className="mapCardInfo">
                  <span className="mapCardAccent" />
                  <span className="mapCardCity">Vitória / ES</span>
                  <span className="mapCardAddr">Av. Scherrer Souza, 2230 · Ed. Essencial Escritórios · Sala 401</span>
                </div>
              </button>
            </div>

            <div className="finalBox" data-reveal="">
              <span className="label">Próximo passo</span>
              <h2 className="title">Seu caso merece uma orientação clara.</h2>
              <p className="lead">
                Entre em contato pelo WhatsApp, informe sua situação e receba
                orientação sobre o melhor caminho para o seu caso.
              </p>
              <div className="finalActions">
                <a className="btnGold" href={WA} target="_blank" rel="noreferrer">
                  <WaIcon size={20} /> Iniciar conversa
                </a>
              </div>
            </div>

            <footer className="footer">
              <div className="footerBody">
                <div className="footerBrand" data-reveal="" data-delay="0">
                  <div className="footerLogo">
                    <Image src={IMG.logoTransparent} alt="Dr. Eduardo Bremer Advocacia" fill sizes="230px" />
                  </div>
                  <span className="footerRole">Advocacia estratégica</span>
                  <span className="footerOab">OAB/ES 37.747 · OAB/BA 83.916</span>
                  <p>
                    Atendimento jurídico presencial em Mucuri/BA e Vitória/ES,
                    com orientação online nas áreas Criminal, Cível, Trabalhista
                    e Previdenciária.
                  </p>
                  <p className="footerAddr">
                    Rua Severino Vieira, 83 · Mucuri/BA<br />
                    Av. Scherrer Souza, 2230 · Sala 401 · Vitória/ES
                  </p>
                  <div className="footerTags">
                    {["Criminal", "Cível", "Trabalhista", "Previdenciário"].map((tag) => (
                      <span className="footerTag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <nav className="footerCol" aria-label="Navegação no rodapé" data-reveal="" data-delay="120">
                  <h4>Navegação</h4>
                  {nav.map((item) => (
                    <a key={item.href} href={item.href}>{item.label}</a>
                  ))}
                  <a href={WA} target="_blank" rel="noreferrer">
                    Falar com Eduardo
                    <span className="sr"> (abre em nova aba)</span>
                  </a>
                </nav>

                <div className="footerCol" data-reveal="" data-delay="240">
                  <h4>Contato</h4>
                  <a href={WA} target="_blank" rel="noreferrer">
                    <WaIcon size={14} /> WhatsApp
                    <span className="sr"> (abre em nova aba)</span>
                  </a>
                  <a href={IG} target="_blank" rel="noreferrer">
                    <Instagram size={14} /> @ehbremer.adv
                    <span className="sr"> (abre em nova aba)</span>
                  </a>
                </div>
              </div>

              <hr className="footerLine" />
              <div className="footerBottom">
                <span>© 2026 Dr. Eduardo Bremer · Advocacia · OAB/ES 37.747 · OAB/BA 83.916</span>
                <span>
                  Site por{" "}
                  <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                    LumaSites<span className="sr"> (abre em nova aba)</span>
                  </a>
                </span>
              </div>
            </footer>
          </div>
        </section>
      </main>

      <a
        className="waFloat"
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Dr. Eduardo Bremer pelo WhatsApp"
      >
        <WaIcon size={28} />
      </a>

      {/* Map modal */}
      <div
        className={`mapModal${mapModal ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={mapModal?.title ?? "Mapa"}
      >
        <div className="mapModalBackdrop" onClick={() => setMapModal(null)} />
        <div className="mapModalBox">
          <div className="mapModalHead">
            <div className="mapModalTitle">
              <MapPin size={14} style={{ color: "var(--gold)" }} />
              {mapModal?.title}
              <span>Escritório</span>
            </div>
            <div className="mapModalActions">
              <a
                className="mapModalLink"
                href={mapModal?.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={11} /> Abrir no Google Maps
              </a>
              <button className="mapModalClose" onClick={() => setMapModal(null)} aria-label="Fechar">
                <X size={16} />
              </button>
            </div>
          </div>
          {mapModal && (
            <iframe
              key={mapModal.src}
              className="mapModalFrame"
              src={mapModal.src}
              title={mapModal.title}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </>
  );
}
