"use client";

import { useState, useEffect } from "react";

/* ─── Design Tokens ─────────────────────────────────────────────── */
const C = {
  bg0: "#020617",
  bg1: "#071126",
  bg2: "#0F172A",
  cyan: "#00D4FF",
  blue: "#2563EB",
  purple: "#7C3AED",
  pink: "#EC4899",
  white: "#FFFFFF",
  textMid: "#CBD5E1",
  textMuted: "#94A3B8",
  border: "rgba(255,255,255,0.08)",
  green: "#25D366",
  greenDark: "#128C48",
};

const FF = "var(--fad-font,'Poppins','Inter',Arial,sans-serif)";

const WA_NUM = "5592981716848";
const WA = (msg = "Olá! Quero escalar minha marca com a Future Ads Digital.") =>
  `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;

const GRAD_BRAND = `linear-gradient(135deg, ${C.cyan} 0%, ${C.blue} 50%, ${C.purple} 100%)`;
const GRAD_HERO = `linear-gradient(135deg, ${C.bg0} 0%, ${C.bg1} 60%, #0D1B3E 100%)`;

/* ─── Global CSS ─────────────────────────────────────────────────── */
const CSS = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;scroll-padding-top:80px}

  .fad{font-family:${FF};background:${C.bg0};color:${C.white};min-height:100vh;overflow-x:hidden;line-height:1.6;text-rendering:optimizeLegibility}
  .fad-wrap{max-width:1160px;margin:0 auto;padding:0 24px}
  .fad-wrap-sm{max-width:820px;margin:0 auto;padding:0 24px}

  /* section */
  .fad-sec{padding:100px 0}
  .fad-sec-sm{padding:72px 0}

  /* label */
  .fad-label{display:inline-block;font-family:${FF};font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
    background:${GRAD_BRAND};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:14px}

  /* headings */
  .fad-h2{font-family:${FF};font-weight:700;font-size:clamp(28px,4.5vw,46px);line-height:1.08;letter-spacing:-0.018em;color:${C.white};margin-bottom:16px}
  .fad-h3{font-family:${FF};font-weight:600;font-size:clamp(18px,2.5vw,22px);line-height:1.25;letter-spacing:-0.012em;color:${C.white};margin-bottom:10px}
  .fad-p{font-family:${FF};font-size:16px;color:${C.textMid};line-height:1.7}

  /* divider */
  .fad-divider{width:48px;height:3px;border-radius:2px;background:${GRAD_BRAND};margin:16px 0 28px}
  .fad-divider-c{margin:16px auto 28px}

  /* cards */
  .fad-card{background:rgba(7,17,38,.86);border:1px solid ${C.border};border-radius:18px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
  .fad-card:hover{transform:translateY(-4px);box-shadow:0 18px 48px rgba(0,0,0,.22);border-color:rgba(0,212,255,.18)}

  /* glow orb */
  .fad-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(80px);opacity:.25}

  /* buttons */
  .fad-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:15px 32px;border-radius:14px;
    font-family:${FF};font-weight:700;font-size:15px;letter-spacing:.3px;text-decoration:none;cursor:pointer;
    transition:opacity .2s,transform .2s}
  .fad-btn:hover{opacity:.9;transform:translateY(-2px)}
  .fad-btn:focus-visible,.fad-nav-link:focus-visible,.fad-mobile-link:focus-visible,.fad-wa:focus-visible{outline:2px solid ${C.cyan};outline-offset:4px}
  .fad-btn-primary{background:${GRAD_BRAND};color:${C.white};border:none}
  .fad-btn-green{background:linear-gradient(135deg,${C.greenDark} 0%,${C.green} 100%);color:${C.white};border:none}
  .fad-btn-outline{background:transparent;color:${C.white};border:1px solid ${C.border}}
  .fad-btn-outline:hover{border-color:rgba(0,212,255,.4)}

  /* nav */
  .fad-nav{position:sticky;top:0;z-index:100;background:rgba(2,6,23,.85);backdrop-filter:blur(20px);
    border-bottom:1px solid ${C.border};transition:box-shadow .3s}
  .fad-nav.scrolled{box-shadow:0 4px 32px rgba(0,0,0,.4)}
  .fad-nav-inner{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;max-width:1160px;margin:0 auto}
  .fad-nav-links{display:none;gap:28px;align-items:center}
  .fad-nav-link{font-family:${FF};font-size:13px;font-weight:500;color:${C.textMid};text-decoration:none;
    transition:color .2s;letter-spacing:.2px}
  .fad-nav-link:hover{color:${C.white}}
  .fad-menu-btn{background:none;border:none;cursor:pointer;padding:6px;color:${C.textMid};display:flex}
  .fad-mobile-nav{display:none;flex-direction:column;background:${C.bg1};border-top:1px solid ${C.border};
    padding:20px 24px 28px;gap:0}
  .fad-mobile-nav.open{display:flex}
  .fad-mobile-link{padding:14px 0;color:${C.textMid};text-decoration:none;font-family:${FF};font-size:15px;
    font-weight:500;border-bottom:1px solid ${C.border}}
  .fad-mobile-link:last-child{border-bottom:none}

  /* hero */
  .fad-hero{position:relative;overflow:hidden;padding:96px 0 80px;background:${GRAD_HERO}}
  .fad-hero-grid{display:grid;gap:48px;align-items:center}
  .fad-hero-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:100px;
    background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.2);margin-bottom:24px}
  .fad-hero-badge span{font-family:${FF};font-size:12px;font-weight:600;letter-spacing:1.6px;text-transform:uppercase;color:${C.cyan}}
  .fad-hero-h1{font-family:${FF};font-weight:800;font-size:clamp(31px,5.2vw,56px);line-height:1.08;letter-spacing:-0.018em;
    color:${C.white};margin-bottom:20px}
  .fad-hero-sub{font-family:${FF};font-size:clamp(15px,2vw,18px);color:${C.textMid};line-height:1.7;max-width:560px;margin-bottom:36px}
  .fad-hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:48px}
  .fad-hero-stats{display:flex;gap:32px;flex-wrap:wrap}
  .fad-stat-num{font-family:${FF};font-weight:800;font-size:clamp(24px,3vw,32px);letter-spacing:-0.02em;
    background:${GRAD_BRAND};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
  .fad-stat-label{font-family:${FF};font-size:12px;color:${C.textMuted};letter-spacing:.3px}

  /* mockup panel */
  .fad-mockup-panel{background:rgba(255,255,255,.04);border:1px solid ${C.border};border-radius:20px;
    padding:28px;overflow:hidden;position:relative}
  .fad-mockup-screen{border-radius:14px;overflow:hidden;background:${C.bg2};border:1px solid ${C.border};
    aspect-ratio:16/10;display:flex;align-items:center;justify-content:center;position:relative}
  .fad-mockup-screen-label{font-family:${FF};font-size:13px;color:${C.textMuted};letter-spacing:.5px}
  .fad-play-btn{width:64px;height:64px;border-radius:50%;background:${GRAD_BRAND};display:flex;
    align-items:center;justify-content:center;cursor:pointer;position:absolute;
    box-shadow:0 0 32px rgba(0,212,255,.4);transition:transform .2s,box-shadow .2s}
  .fad-play-btn:hover{transform:scale(1.1);box-shadow:0 0 48px rgba(0,212,255,.6)}
  .fad-reel-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}
  .fad-reel-item{border-radius:10px;overflow:hidden;background:${C.bg2};border:1px solid ${C.border};
    aspect-ratio:9/16;display:flex;align-items:center;justify-content:center;position:relative}
  .fad-shot-frame{position:absolute;inset:0;background:
    linear-gradient(135deg,rgba(0,212,255,.18),rgba(124,58,237,.12) 42%,rgba(236,72,153,.08)),
    radial-gradient(circle at 70% 18%,rgba(255,255,255,.18),transparent 24%),
    linear-gradient(90deg,rgba(255,255,255,.08) 0 1px,transparent 1px 100%),
    linear-gradient(0deg,rgba(255,255,255,.06) 0 1px,transparent 1px 100%);
    background-size:auto,auto,48px 48px,48px 48px}
  .fad-shot-subject{position:absolute;left:8%;bottom:0;width:38%;height:74%;border-radius:120px 120px 0 0;background:linear-gradient(180deg,rgba(255,255,255,.22),rgba(0,212,255,.08));border:1px solid rgba(255,255,255,.16)}
  .fad-shot-card{position:absolute;right:7%;top:12%;width:44%;padding:14px;border-radius:12px;background:rgba(2,6,23,.72);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(12px)}
  .fad-shot-wave{height:34px;margin-top:10px;border-radius:8px;background:repeating-linear-gradient(90deg,${C.cyan} 0 4px,transparent 4px 10px);opacity:.55}
  .fad-reel-cover{position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(2,6,23,.18)),var(--cover-grad)}

  /* pain */
  .fad-pain-grid{display:grid;gap:16px;grid-template-columns:1fr}
  .fad-pain-item{display:flex;gap:16px;align-items:flex-start;padding:20px 24px;border-radius:16px;
    background:rgba(236,72,153,.05);border:1px solid rgba(236,72,153,.12)}

  /* benefits */
  .fad-benefits-grid{display:grid;gap:20px;grid-template-columns:1fr}
  .fad-benefit-card{display:flex;gap:20px;align-items:flex-start;padding:28px 24px;
    background:${C.bg1};border:1px solid ${C.border};border-radius:20px;
    transition:border-color .25s,transform .25s}
  .fad-benefit-card:hover{border-color:rgba(0,212,255,.25);transform:translateY(-4px)}
  .fad-benefit-icon{width:52px;height:52px;border-radius:14px;background:${GRAD_BRAND};
    display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:22px}

  /* services */
  .fad-svc-grid{display:grid;gap:20px;grid-template-columns:1fr}

  /* proposal */
  .fad-proposal-shell{display:grid;gap:22px;grid-template-columns:1fr}
  .fad-proposal-main{background:linear-gradient(145deg,rgba(7,17,38,.96),rgba(15,23,42,.86));border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:34px}
  .fad-proposal-side{display:grid;gap:16px}
  .fad-proposal-item{display:flex;gap:14px;align-items:flex-start;padding:18px;border-radius:16px;background:rgba(255,255,255,.035);border:1px solid ${C.border}}
  .fad-proposal-list{display:grid;gap:12px;margin-top:24px}
  .fad-proposal-check{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:rgba(37,211,102,.12);color:${C.green};border:1px solid rgba(37,211,102,.28)}

  /* process */
  .fad-process-grid{display:grid;gap:24px}
  .fad-process-step{display:flex;gap:24px;align-items:flex-start;padding:28px;
    background:${C.bg1};border:1px solid ${C.border};border-radius:20px;position:relative}
  .fad-step-num{width:48px;height:48px;border-radius:50%;background:${GRAD_BRAND};
    display:flex;align-items:center;justify-content:center;flex-shrink:0;
    font-family:${FF};font-weight:800;font-size:16px;color:${C.white}}

  /* showcase */
  .fad-showcase-grid{display:grid;gap:20px;grid-template-columns:1fr}
  .fad-showcase-item{border-radius:20px;overflow:hidden;background:${C.bg2};border:1px solid ${C.border};
    aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;position:relative;
    transition:transform .25s,box-shadow .25s}
  .fad-showcase-item:hover{transform:scale(1.02);box-shadow:0 20px 60px rgba(0,212,255,.1)}
  .fad-showcase-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.2;transform:scale(1.01);transition:transform .35s ease,filter .35s ease}
  .fad-showcase-item:hover .fad-showcase-img{transform:scale(1.06);filter:saturate(1.08) contrast(1.04)}
  .fad-showcase-tint{position:absolute;inset:0;background:linear-gradient(180deg,rgba(2,6,23,.06) 0%,rgba(2,6,23,.22) 54%,rgba(2,6,23,.72) 100%)}
  .fad-showcase-label{position:absolute;bottom:16px;left:16px;right:16px;
    background:rgba(2,6,23,.8);backdrop-filter:blur(12px);border-radius:10px;padding:10px 14px;
    border:1px solid ${C.border}}

  /* cases */
  .fad-cases-grid{display:grid;gap:20px;grid-template-columns:1fr}
  .fad-case-card{padding:28px;background:${C.bg1};border:1px solid ${C.border};border-radius:20px;
    transition:border-color .25s,transform .25s}
  .fad-case-card:hover{border-color:rgba(124,58,237,.3);transform:translateY(-4px)}
  .fad-metric{font-family:${FF};font-weight:800;font-size:28px;letter-spacing:-0.02em;
    background:${GRAD_BRAND};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}

  /* clients */
  .fad-clients-marquee{position:relative;overflow:hidden;margin:0 -24px;padding:4px 24px;
    mask-image:linear-gradient(90deg,transparent 0%,#000 9%,#000 91%,transparent 100%)}
  .fad-clients-track{display:flex;width:max-content;gap:18px;animation:fad-clients-scroll 28s linear infinite}
  .fad-clients-marquee:hover .fad-clients-track{animation-play-state:paused}
  .fad-client-card{width:172px;min-height:132px;border-radius:18px;background:rgba(255,255,255,.035);border:1px solid ${C.border};
    display:flex;align-items:center;justify-content:center;padding:22px;flex:0 0 auto;transition:transform .25s ease,border-color .25s ease,background .25s ease}
  .fad-client-card:hover{transform:translateY(-4px);border-color:rgba(0,212,255,.22);background:rgba(255,255,255,.055)}
  .fad-client-logo{width:86px;height:86px;object-fit:contain;filter:saturate(.96) contrast(1.04)}
  @keyframes fad-clients-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-50% - 9px))}}

  /* differentials */
  .fad-diff-grid{display:grid;gap:20px;grid-template-columns:1fr}

  /* final cta */
  .fad-fcta{position:relative;overflow:hidden;padding:112px 0;background:${C.bg1};
    border-top:1px solid ${C.border};border-bottom:1px solid ${C.border}}

  /* footer */
  .fad-footer{background:${C.bg0};border-top:1px solid ${C.border};padding:60px 0 32px}
  .fad-footer-grid{display:grid;gap:48px;grid-template-columns:1fr}

  /* wa float */
  .fad-wa{position:fixed;bottom:28px;right:24px;z-index:200;width:58px;height:58px;border-radius:50%;
    background:linear-gradient(135deg,${C.greenDark} 0%,${C.green} 100%);
    display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(37,211,102,.4);
    text-decoration:none;transition:transform .2s,box-shadow .2s}
  .fad-wa:hover{transform:scale(1.1);box-shadow:0 10px 36px rgba(37,211,102,.55)}

  /* animations */
  @keyframes fad-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  .fad-up{animation:fad-up .7s cubic-bezier(.22,.61,.36,1) both}
  .fad-up-2{animation:fad-up .7s .1s cubic-bezier(.22,.61,.36,1) both}
  .fad-up-3{animation:fad-up .7s .2s cubic-bezier(.22,.61,.36,1) both}
  @keyframes fad-glow{0%,100%{opacity:.2}50%{opacity:.35}}
  .fad-orb-anim{animation:fad-glow 4s ease-in-out infinite}
  @keyframes fad-pulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.6)}70%{box-shadow:0 0 0 14px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}
  .fad-pulse{animation:fad-pulse 2.2s ease-out infinite}
  @keyframes fad-spin-slow{from{transform:rotate(0)}to{transform:rotate(360deg)}}
  .fad-spin-slow{animation:fad-spin-slow 20s linear infinite}

  /* responsive */
  @media(min-width:600px){
    .fad-hero-ctas a{width:auto}
    .fad-pain-grid{grid-template-columns:1fr 1fr}
    .fad-benefits-grid{grid-template-columns:1fr 1fr}
    .fad-svc-grid{grid-template-columns:1fr 1fr}
    .fad-showcase-grid{grid-template-columns:1fr 1fr}
    .fad-cases-grid{grid-template-columns:1fr 1fr}
    .fad-diff-grid{grid-template-columns:1fr 1fr}
    .fad-footer-grid{grid-template-columns:1fr 1fr}
  }
  @media(min-width:900px){
    .fad-nav-links{display:flex}
    .fad-menu-btn{display:none}
    .fad-hero-grid{grid-template-columns:1fr 480px;gap:64px}
    .fad-hero-ctas a:first-child{min-width:220px}
    .fad-svc-grid{grid-template-columns:1fr 1fr 1fr}
    .fad-proposal-shell{grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr)}
    .fad-process-grid{grid-template-columns:1fr 1fr}
    .fad-showcase-grid{grid-template-columns:1fr 1fr 1fr}
    .fad-cases-grid{grid-template-columns:1fr 1fr 1fr}
    .fad-diff-grid{grid-template-columns:1fr 1fr}
    .fad-footer-grid{grid-template-columns:2fr 1fr 1fr 1fr}
    .fad-client-card{width:190px}
  }
  @media(max-width:599px){
    .fad-sec{padding:72px 0}
    .fad-wrap{padding:0 16px}
    .fad-hero{padding:72px 0 60px}
    .fad-hero-stats{gap:24px}
    .fad-hero-ctas{flex-direction:column}
    .fad-hero-ctas a{width:100%;justify-content:center}
    .fad-process-step{flex-direction:column;gap:16px}
    .fad-proposal-main{padding:26px 20px}
  }
  @media(prefers-reduced-motion:reduce){
    *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}
  }
`;

/* ─── Icons ──────────────────────────────────────────────────────── */
function WAIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.427a.75.75 0 0 0 .916.916l5.637-1.47A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.7 9.7 0 0 1-4.95-1.357l-.354-.213-3.68.959.977-3.58-.232-.369A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─── Gradient text helper ────────────────────────────────────────── */
function GradText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: GRAD_BRAND,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    ["Sobre", "#sobre"],
    ["Serviços", "#servicos"],
    ["Proposta", "#proposta"],
    ["Processo", "#processo"],
    ["Resultados", "#resultados"],
    ["Contato", "#contato"],
  ];

  return (
    <nav className={`fad-nav${scrolled ? " scrolled" : ""}`}>
      <div className="fad-nav-inner">
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.1,
          }}
        >
          <span
            style={{
              fontFamily: FF,
              fontWeight: 800,
              fontSize: "17px",
              background: GRAD_BRAND,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
            }}
          >
            Future Ads
          </span>
          <span
            style={{
              fontFamily: FF,
              fontSize: "9px",
              letterSpacing: "3px",
              color: C.textMuted,
              textTransform: "uppercase",
              marginTop: "1px",
            }}
          >
            Digital
          </span>
        </a>

        <div className="fad-nav-links">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="fad-nav-link">
              {label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href={WA()}
            target="_blank"
            rel="noopener noreferrer"
            className="fad-btn fad-btn-primary"
            style={{
              padding: "9px 20px",
              fontSize: "13px",
              borderRadius: "10px",
            }}
          >
            <WAIcon size={15} /> Falar Agora
          </a>
          <button
            className="fad-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`fad-mobile-nav${open ? " open" : ""}`}>
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="fad-mobile-link"
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href={WA()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="fad-btn fad-btn-green fad-pulse"
          style={{ marginTop: "20px", width: "100%" }}
        >
          <WAIcon size={18} /> Quero escalar minha marca
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="fad-hero">
      {/* Orbs */}
      <div
        className="fad-orb fad-orb-anim"
        style={{
          width: "500px",
          height: "500px",
          top: "-200px",
          right: "-150px",
          background: C.blue,
        }}
      />
      <div
        className="fad-orb fad-orb-anim"
        style={{
          width: "300px",
          height: "300px",
          bottom: "-100px",
          left: "-80px",
          background: C.purple,
          animationDelay: "2s",
        }}
      />
      <div
        className="fad-orb"
        style={{
          width: "200px",
          height: "200px",
          top: "30%",
          left: "35%",
          background: C.cyan,
          opacity: 0.1,
          filter: "blur(60px)",
        }}
      />

      <div className="fad-wrap">
        <div className="fad-hero-grid">
          {/* Copy */}
          <div className="fad-up">
            <div className="fad-hero-badge">
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: C.cyan,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span>Produção Audiovisual + Performance</span>
            </div>

            <h1 className="fad-hero-h1">
              Vídeos estratégicos
              <br />
              e tráfego pago para
              <br />
              <GradText>transformar views</GradText>
              <br />
              em clientes.
            </h1>

            <p className="fad-hero-sub">
              Uma proposta para transformar presença digital em demanda: vídeos
              com direção criativa, criativos orientados a conversão e campanhas
              pagas acompanhadas de perto.
            </p>

            <div className="fad-hero-ctas">
              <a
                href={WA(
                  "Olá! Quero escalar minha marca com a Future Ads Digital.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="fad-btn fad-btn-green fad-pulse"
              >
                <WAIcon size={20} /> Iniciar minha proposta
              </a>
              <a href="#servicos" className="fad-btn fad-btn-outline">
                Ver escopo →
              </a>
            </div>

            <div className="fad-hero-stats">
              {[
                ["150+", "Projetos entregues"],
                ["3×", "ROI médio em anúncios"],
                ["98%", "Clientes satisfeitos"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="fad-stat-num">{n}</div>
                  <div className="fad-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup panel */}
          <div className="fad-up-3">
            <div className="fad-mockup-panel">
              {/* main production frame */}
              <div
                className="fad-mockup-screen"
                style={{ marginBottom: "12px" }}
              >
                <div className="fad-shot-frame" />
                <div className="fad-shot-subject" />
                <div
                  style={{
                    position: "absolute",
                    left: "10%",
                    top: "12%",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {["REC", "4K", "ADS"].map((tag, i) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: FF,
                        fontWeight: 700,
                        fontSize: "10px",
                        color: i === 0 ? C.pink : C.textMid,
                        letterSpacing: "1.2px",
                        padding: "5px 8px",
                        borderRadius: "100px",
                        background: "rgba(2,6,23,.58)",
                        border: `1px solid ${C.border}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="fad-shot-card">
                  <div
                    style={{
                      fontFamily: FF,
                      fontWeight: 700,
                      fontSize: "12px",
                      color: C.white,
                      marginBottom: "6px",
                    }}
                  >
                    Campanha em produção
                  </div>
                  <div
                    style={{
                      fontFamily: FF,
                      fontSize: "10px",
                      color: C.textMuted,
                      lineHeight: 1.5,
                    }}
                  >
                    Roteiro, captação, edição e criativos preparados para mídia
                    paga.
                  </div>
                  <div className="fad-shot-wave" />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                      marginTop: "10px",
                    }}
                  >
                    {[
                      ["CTR", "8.7%"],
                      ["CPC", "R$2,10"],
                    ].map(([label, val]) => (
                      <div
                        key={label}
                        style={{
                          padding: "8px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,.05)",
                          border: `1px solid ${C.border}`,
                        }}
                      >
                        <div
                          style={{
                            fontFamily: FF,
                            fontSize: "9px",
                            color: C.textMuted,
                          }}
                        >
                          {label}
                        </div>
                        <div
                          style={{
                            fontFamily: FF,
                            fontWeight: 800,
                            fontSize: "13px",
                            color: C.white,
                          }}
                        >
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="fad-play-btn">
                  <PlayIcon />
                </div>
              </div>

              {/* reel thumbnails */}
              <div className="fad-reel-grid">
                {["Brand film", "Ad creative", "Reel"].map((label, i) => (
                  <div key={label} className="fad-reel-item">
                    <div
                      className="fad-reel-cover"
                      style={
                        {
                          "--cover-grad":
                            i === 0
                              ? `linear-gradient(135deg, ${C.blue}34, ${C.purple}18)`
                              : i === 1
                                ? `linear-gradient(135deg, ${C.pink}34, ${C.purple}18)`
                                : `linear-gradient(135deg, ${C.cyan}34, ${C.blue}18)`,
                        } as React.CSSProperties
                      }
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: GRAD_BRAND,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: 0.8,
                        }}
                      >
                        <PlayIcon />
                      </div>
                      <span
                        style={{
                          fontFamily: FF,
                          fontSize: "9px",
                          color: C.textMuted,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* metrics bar */}
              <div style={{ marginTop: "14px", display: "flex", gap: "10px" }}>
                {[
                  ["12.4K", "Impressões"],
                  ["8.7%", "CTR"],
                  ["3 canais", "Distribuição"],
                ].map(([val, lbl]) => (
                  <div
                    key={lbl}
                    style={{
                      flex: 1,
                      background: C.bg0,
                      borderRadius: "10px",
                      padding: "10px 12px",
                      border: `1px solid ${C.border}`,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FF,
                        fontWeight: 700,
                        fontSize: "14px",
                        background: GRAD_BRAND,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontFamily: FF,
                        fontSize: "10px",
                        color: C.textMuted,
                        marginTop: "2px",
                      }}
                    >
                      {lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pain Section ───────────────────────────────────────────────── */
function PainSection() {
  const pains = [
    {
      icon: "📉",
      text: "Investe em anúncios mas não vê resultado consistente",
    },
    {
      icon: "🎥",
      text: "Não tem vídeos profissionais para diferenciar sua marca",
    },
    {
      icon: "😶",
      text: "Sua empresa aparece, mas não consegue impactar e converter",
    },
    {
      icon: "🔄",
      text: "Criativos repetitivos que não geram engajamento real",
    },
    { icon: "📊", text: "Concorrentes crescendo enquanto seu alcance estagna" },
    {
      icon: "🤷",
      text: "Agências genéricas sem foco em performance e audiovisual",
    },
  ];

  return (
    <section className="fad-sec" style={{ background: C.bg1 }}>
      <div className="fad-wrap">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="fad-label">O problema real</div>
          <h2 className="fad-h2">
            Sua empresa está sendo
            <br />
            <GradText>ignorada no digital?</GradText>
          </h2>
          <div className="fad-divider fad-divider-c" />
          <p className="fad-p" style={{ maxWidth: "560px", margin: "0 auto" }}>
            Hoje não basta apenas anunciar. Empresas que não possuem vídeos
            estratégicos, criativos profissionais e campanhas bem estruturadas
            acabam sendo ignoradas nas redes sociais e no Google.
          </p>
        </div>

        <div className="fad-pain-grid">
          {pains.map((p, i) => (
            <div key={i} className="fad-pain-item">
              <span
                style={{
                  fontSize: "26px",
                  lineHeight: 1,
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                {p.icon}
              </span>
              <p
                style={{
                  fontFamily: FF,
                  fontSize: "15px",
                  color: C.textMid,
                  lineHeight: 1.6,
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "40px",
            background: `linear-gradient(135deg, rgba(124,58,237,.15) 0%, rgba(37,99,235,.15) 100%)`,
            border: "1px solid rgba(124,58,237,.25)",
            borderRadius: "20px",
            padding: "36px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: FF,
              fontWeight: 700,
              fontSize: "18px",
              color: C.white,
              marginBottom: "8px",
              lineHeight: 1.4,
            }}
          >
            O problema não é apenas aparecer.
            <br />
            <span
              style={{ color: C.textMid, fontWeight: 500, fontSize: "16px" }}
            >
              É não conseguir impactar, conectar e converter.
            </span>
          </p>
          <a
            href={WA("Quero resolver isso com a Future Ads Digital!")}
            target="_blank"
            rel="noopener noreferrer"
            className="fad-btn fad-btn-primary"
            style={{ marginTop: "24px" }}
          >
            Quero resolver isso →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── About Section ──────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="sobre" className="fad-sec" style={{ background: C.bg0 }}>
      <div className="fad-wrap">
        <div style={{ display: "grid", gap: "60px", alignItems: "center" }}>
          <div
            style={{ textAlign: "center", maxWidth: "740px", margin: "0 auto" }}
          >
            <div className="fad-label">Quem somos</div>
            <h2 className="fad-h2">
              Produção audiovisual e performance
              <br />
              <GradText>trabalhando juntas.</GradText>
            </h2>
            <div className="fad-divider fad-divider-c" />
            <p className="fad-p" style={{ marginBottom: "20px" }}>
              A Future Ads Digital une criatividade, produção audiovisual e
              tráfego pago para desenvolver campanhas que realmente geram
              impacto. Criamos vídeos, criativos e estratégias de performance
              capazes de fortalecer marcas, aumentar autoridade e transformar
              audiência em clientes.
            </p>
            <p className="fad-p" style={{ marginBottom: "40px" }}>
              Cada projeto é pensado para gerar atenção, conexão, posicionamento
              e conversão.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {["Atenção", "Conexão", "Posicionamento", "Conversão"].map(
                (tag) => (
                  <div
                    key={tag}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "100px",
                      background: "rgba(0,212,255,.08)",
                      border: "1px solid rgba(0,212,255,.2)",
                      fontFamily: FF,
                      fontSize: "13px",
                      fontWeight: 600,
                      color: C.cyan,
                      letterSpacing: ".5px",
                    }}
                  >
                    {tag}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Pillars */}
          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            }}
          >
            {[
              {
                icon: "🎬",
                title: "Audiovisual Estratégico",
                desc: "Vídeos pensados para gerar impacto e converter, não apenas parecer bonito.",
              },
              {
                icon: "🎯",
                title: "Criativos de Alta Performance",
                desc: "Anúncios desenvolvidos com dados e criatividade para maximizar resultados.",
              },
              {
                icon: "📈",
                title: "Tráfego Inteligente",
                desc: "Campanhas otimizadas continuamente para atrair quem realmente compra.",
              },
              {
                icon: "🏆",
                title: "Posicionamento de Marca",
                desc: "Construção de autoridade digital que gera preferência e reconhecimento.",
              },
            ].map((p, i) => (
              <div key={i} className="fad-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>
                  {p.icon}
                </div>
                <h3
                  className="fad-h3"
                  style={{ marginBottom: "8px", fontSize: "16px" }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: FF,
                    fontSize: "14px",
                    color: C.textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Benefits Section ───────────────────────────────────────────── */
function BenefitsSection() {
  const benefits = [
    {
      icon: "⭐",
      title: "Mais autoridade visual",
      desc: "Sua marca passa a ser percebida como líder do mercado, com produção premium que eleva o valor percebido.",
    },
    {
      icon: "💰",
      title: "Criativos de alta conversão",
      desc: "Anúncios e vídeos desenvolvidos com estratégia para transformar atenção em cliques e cliques em vendas.",
    },
    {
      icon: "📣",
      title: "Mais alcance e engajamento",
      desc: "Conteúdo audiovisual que captura atenção orgânica e potencializa o alcance pago nas plataformas.",
    },
    {
      icon: "🚀",
      title: "Crescimento através de performance",
      desc: "Campanhas estruturadas e otimizadas continuamente para escalar resultados sem desperdiçar verba.",
    },
  ];

  return (
    <section
      className="fad-sec"
      style={{ background: C.bg1, position: "relative", overflow: "hidden" }}
    >
      <div
        className="fad-orb"
        style={{
          width: "400px",
          height: "400px",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
          background: C.purple,
        }}
      />
      <div className="fad-wrap" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="fad-label">Resultados reais</div>
          <h2 className="fad-h2">
            O que sua marca conquista
            <br />
            <GradText>com a estratégia certa</GradText>
          </h2>
          <div className="fad-divider fad-divider-c" />
        </div>

        <div className="fad-benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="fad-benefit-card">
              <div className="fad-benefit-icon">{b.icon}</div>
              <div>
                <h3
                  className="fad-h3"
                  style={{ fontSize: "17px", marginBottom: "6px" }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    fontFamily: FF,
                    fontSize: "14px",
                    color: C.textMuted,
                    lineHeight: 1.65,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services Section ───────────────────────────────────────────── */
const services = [
  {
    icon: "🎬",
    accent: C.cyan,
    title: "Produção Audiovisual",
    desc: "Produção de vídeos profissionais, institucionais, comerciais e criativos para fortalecer sua marca e aumentar impacto nas campanhas.",
    tags: ["Institucional", "Comercial", "Reels", "UGC"],
  },
  {
    icon: "🎯",
    accent: C.pink,
    title: "Criativos para Tráfego Pago",
    desc: "Desenvolvimento de criativos focados em conversão para anúncios no Instagram, Facebook, Google e outras plataformas.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads"],
  },
  {
    icon: "📊",
    accent: C.purple,
    title: "Tráfego Pago",
    desc: "Campanhas estratégicas para atrair clientes qualificados, reduzir o custo por aquisição e maximizar resultados.",
    tags: ["Meta", "Google", "Remarketing"],
  },
  {
    icon: "📱",
    accent: C.blue,
    title: "Gestão de Redes Sociais",
    desc: "Conteúdo estratégico e consistente para fortalecer o posicionamento digital e construir audiência qualificada.",
    tags: ["Instagram", "TikTok", "LinkedIn"],
  },
  {
    icon: "💻",
    accent: C.cyan,
    title: "Desenvolvimento de Sites",
    desc: "Landing pages e sites modernos desenvolvidos para gerar autoridade e converter visitantes em leads.",
    tags: ["Landing Page", "Institucional", "E-commerce"],
  },
  {
    icon: "🏷️",
    accent: C.pink,
    title: "Branding & Conteúdo",
    desc: "Identidade visual e comunicação estratégica para fortalecer a percepção de marca e criar reconhecimento.",
    tags: ["Identidade Visual", "Copywriting", "Conteúdo"],
  },
];

function ServicesSection() {
  return (
    <section id="servicos" className="fad-sec" style={{ background: C.bg0 }}>
      <div className="fad-wrap">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="fad-label">O que fazemos</div>
          <h2 className="fad-h2">
            Soluções estratégicas para
            <br />
            <GradText>acelerar o crescimento</GradText>
          </h2>
          <div className="fad-divider fad-divider-c" />
          <p className="fad-p" style={{ maxWidth: "500px", margin: "0 auto" }}>
            Uma solução completa de audiovisual e performance para marcas que
            querem resultados reais.
          </p>
        </div>

        <div className="fad-svc-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="fad-card"
              style={{
                borderTop: `2px solid ${s.accent}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: s.accent,
                  opacity: 0.05,
                  filter: "blur(20px)",
                }}
              />
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>
                {s.icon}
              </div>
              <h3 className="fad-h3">{s.title}</h3>
              <p
                style={{
                  fontFamily: FF,
                  fontSize: "14px",
                  color: C.textMuted,
                  lineHeight: 1.65,
                  marginBottom: "20px",
                }}
              >
                {s.desc}
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: `${s.accent}14`,
                      border: `1px solid ${s.accent}30`,
                      fontFamily: FF,
                      fontSize: "11px",
                      color: s.accent,
                      fontWeight: 600,
                      letterSpacing: ".3px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href={WA(
              "Quero conhecer melhor os serviços da Future Ads Digital.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="fad-btn fad-btn-primary"
          >
            <WAIcon size={18} /> Definir escopo do projeto
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Process Section ────────────────────────────────────────────── */
function ProposalSection() {
  const deliverables = [
    "Diagnóstico de posicionamento, público e oportunidades de campanha",
    "Direção criativa para vídeos, anúncios e peças de conversão",
    "Produção de criativos para Meta Ads, Google Ads e redes sociais",
    "Plano de mídia com metas, canais, públicos e acompanhamento de performance",
    "Relatórios claros com próximos testes e otimizações recomendadas",
  ];

  const side = [
    {
      title: "Formato",
      desc: "Plano mensal com escopo definido e priorização por impacto comercial.",
    },
    {
      title: "Ritmo",
      desc: "Diagnóstico inicial, produção, lançamento e otimização contínua.",
    },
    {
      title: "Objetivo",
      desc: "Mais autoridade visual, geração de demanda e campanhas mais eficientes.",
    },
  ];

  return (
    <section
      id="proposta"
      className="fad-sec"
      style={{ background: C.bg1, position: "relative", overflow: "hidden" }}
    >
      <div className="fad-wrap">
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div className="fad-label">Proposta objetiva</div>
          <h2 className="fad-h2">
            O que entra no plano
            <br />
            <GradText>para acelerar sua marca</GradText>
          </h2>
          <div className="fad-divider fad-divider-c" />
          <p className="fad-p" style={{ maxWidth: "620px", margin: "0 auto" }}>
            A entrega combina estratégia, criação e mídia para que cada peça
            produzida tenha função clara dentro do funil: atrair, provar valor e
            converter.
          </p>
        </div>

        <div className="fad-proposal-shell">
          <div className="fad-proposal-main">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div className="fad-label" style={{ marginBottom: "8px" }}>
                  Escopo recomendado
                </div>
                <h3
                  className="fad-h3"
                  style={{ fontSize: "clamp(22px,3vw,30px)", marginBottom: 0 }}
                >
                  Audiovisual, criativos e performance em um único fluxo.
                </h3>
              </div>
              <a
                href={WA("Quero montar meu plano com a Future Ads Digital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="fad-btn fad-btn-outline"
                style={{ padding: "12px 20px", fontSize: "13px" }}
              >
                Montar plano
              </a>
            </div>

            <div className="fad-proposal-list">
              {deliverables.map((item) => (
                <div key={item} className="fad-proposal-item">
                  <span className="fad-proposal-check">
                    <CheckIcon />
                  </span>
                  <p
                    style={{
                      fontFamily: FF,
                      color: C.textMid,
                      fontSize: "15px",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="fad-proposal-side">
            {side.map((item) => (
              <div
                key={item.title}
                className="fad-card"
                style={{ padding: "24px" }}
              >
                <h3
                  className="fad-h3"
                  style={{ fontSize: "16px", marginBottom: "8px" }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: FF,
                    fontSize: "14px",
                    color: C.textMuted,
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      n: "01",
      title: "Diagnóstico",
      desc: "Analisamos sua marca, concorrência, público e objetivos para entender onde estão as oportunidades de crescimento.",
    },
    {
      n: "02",
      title: "Estratégia",
      desc: "Desenvolvemos um plano de ação personalizado, integrando audiovisual e performance para maximizar resultados.",
    },
    {
      n: "03",
      title: "Produção Audiovisual",
      desc: "Criamos os vídeos, criativos e materiais visuais com qualidade cinematográfica e foco em conversão.",
    },
    {
      n: "04",
      title: "Execução de Campanhas",
      desc: "Lançamos as campanhas nas plataformas certas, com segmentação precisa e criativos otimizados.",
    },
    {
      n: "05",
      title: "Otimização Contínua",
      desc: "Monitoramos, testamos e ajustamos continuamente para reduzir custos e escalar o que funciona.",
    },
  ];

  return (
    <section
      id="processo"
      className="fad-sec"
      style={{ background: C.bg1, position: "relative", overflow: "hidden" }}
    >
      <div
        className="fad-orb"
        style={{
          width: "350px",
          height: "350px",
          bottom: "-100px",
          left: "-80px",
          background: C.cyan,
        }}
      />
      <div className="fad-wrap" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="fad-label">Como trabalhamos</div>
          <h2 className="fad-h2">
            Nosso processo de
            <br />
            <GradText>crescimento digital</GradText>
          </h2>
          <div className="fad-divider fad-divider-c" />
        </div>

        <div className="fad-process-grid">
          {steps.map((s, i) => (
            <div key={i} className="fad-process-step">
              <div className="fad-step-num">{s.n}</div>
              <div>
                <h3
                  className="fad-h3"
                  style={{ fontSize: "17px", marginBottom: "8px" }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: FF,
                    fontSize: "14px",
                    color: C.textMuted,
                    lineHeight: 1.65,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <a
            href={WA("Quero iniciar meu diagnóstico com a Future Ads Digital.")}
            target="_blank"
            rel="noopener noreferrer"
            className="fad-btn fad-btn-green fad-pulse"
          >
            <WAIcon size={18} /> Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Showcase Section ───────────────────────────────────────────── */
function ShowcaseSection() {
  const showcaseImages = [
    "/images/futureadsdigital/showcase/institucional-premium.jpg",
    "/images/futureadsdigital/showcase/creative-ad-produto.jpg",
    "/images/futureadsdigital/showcase/reel-viral-marca.jpg",
    "/images/futureadsdigital/showcase/motion-graphics.jpg",
    "/images/futureadsdigital/showcase/ugc-criativo.jpg",
    "/images/futureadsdigital/showcase/case-sucesso-360.jpg",
  ];

  const items = [
    {
      label: "Institucional Premium",
      type: "Vídeo Corporativo",
      accent: C.cyan,
    },
    { label: "Creative Ad — Produto", type: "Tráfego Pago", accent: C.pink },
    { label: "Reel Viral — Marca", type: "Redes Sociais", accent: C.purple },
    { label: "Motion Graphics", type: "Brand Film", accent: C.blue },
    { label: "UGC Criativo", type: "Performance Ad", accent: C.cyan },
    { label: "Case de Sucesso", type: "Campanha 360°", accent: C.pink },
  ];

  return (
    <section className="fad-sec" style={{ background: C.bg0 }}>
      <div className="fad-wrap">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="fad-label">Portfolio</div>
          <h2 className="fad-h2">
            Criativos desenvolvidos
            <br />
            <GradText>para gerar impacto</GradText>
          </h2>
          <div className="fad-divider fad-divider-c" />
          <p className="fad-p" style={{ maxWidth: "480px", margin: "0 auto" }}>
            Cada projeto entregue com qualidade cinematográfica e foco em
            performance.
          </p>
        </div>

        <div className="fad-showcase-grid">
          {items.map((item, i) => (
            <div key={i} className="fad-showcase-item">
              {/* Thumbnail frame */}
              <img
                className="fad-showcase-img"
                src={showcaseImages[i]}
                alt=""
                loading="lazy"
              />
              <div className="fad-showcase-tint" />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: `${item.accent}33`,
                    border: `1px solid ${item.accent}66`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 14px 34px rgba(0,0,0,.3)",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: GRAD_BRAND,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PlayIcon />
                  </div>
                </div>
              </div>
              {/* Decorative lines */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  right: "20px",
                  height: "2px",
                  background: `linear-gradient(90deg, ${item.accent}44, transparent)`,
                  borderRadius: "1px",
                }}
              />
              <div className="fad-showcase-label">
                <div
                  style={{
                    fontFamily: FF,
                    fontWeight: 600,
                    fontSize: "13px",
                    color: C.white,
                    marginBottom: "2px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: FF,
                    fontSize: "11px",
                    color: item.accent,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.type}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href={WA("Quero ver mais do trabalho da Future Ads Digital.")}
            target="_blank"
            rel="noopener noreferrer"
            className="fad-btn fad-btn-outline"
          >
            Ver portfolio completo →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Cases / Results Section ────────────────────────────────────── */
function ClientsSection() {
  const clients = [
    { name: "DI", logo: "/images/futureadsdigital/clients/cliente-1.png" },
    { name: "Conceito", logo: "/images/futureadsdigital/clients/cliente-2.png" },
    { name: "El Elyon Automóveis", logo: "/images/futureadsdigital/clients/cliente-3.png" },
    { name: "Arlete Coelho Studio de Beleza", logo: "/images/futureadsdigital/clients/cliente-4.png" },
    { name: "Patrone", logo: "/images/futureadsdigital/clients/cliente-5.png" },
    { name: "DBE+ Imóveis Manaus", logo: "/images/futureadsdigital/clients/cliente-6.png" },
  ];

  return (
    <section className="fad-sec-sm" style={{ background: C.bg1 }}>
      <div className="fad-wrap">
        <div style={{ textAlign: "center", marginBottom: "42px" }}>
          <div className="fad-label">Nossos clientes</div>
          <h2 className="fad-h2">Marcas que já aparecem<br /><GradText>ao lado da Future Ads</GradText></h2>
          <div className="fad-divider fad-divider-c" />
        </div>

        <div className="fad-clients-marquee" aria-label="Logotipos de clientes">
          <div className="fad-clients-track">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client.name}-${index}`} className="fad-client-card" aria-hidden={index >= clients.length}>
                <img className="fad-client-logo" src={client.logo} alt={index < clients.length ? `Logo ${client.name}` : ""} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  const cases = [
    {
      brand: "Marca de Moda",
      segment: "E-commerce",
      metrics: [
        { val: "+340%", lbl: "ROAS" },
        { val: "-48%", lbl: "CPL" },
        { val: "4×", lbl: "Faturamento" },
      ],
      desc: "Reestruturação criativa + tráfego pago resultou em quadruplicar o faturamento em 90 dias.",
    },
    {
      brand: "Clínica de Estética",
      segment: "Saúde & Beleza",
      metrics: [
        { val: "12K", lbl: "Leads" },
        { val: "R$8", lbl: "CPL" },
        { val: "+280%", lbl: "Agendamentos" },
      ],
      desc: "Vídeos institucionais + campanhas de performance geraram 12 mil leads qualificados em 6 meses.",
    },
    {
      brand: "Construtora Regional",
      segment: "Imóveis",
      metrics: [
        { val: "+190%", lbl: "Autoridade" },
        { val: "3×", lbl: "Visitas" },
        { val: "R$1.2M", lbl: "Vendas" },
      ],
      desc: "Produção audiovisual premium posicionou a marca como referência no mercado local.",
    },
  ];

  return (
    <section
      id="resultados"
      className="fad-sec"
      style={{ background: C.bg1, position: "relative", overflow: "hidden" }}
    >
      <div
        className="fad-orb"
        style={{
          width: "400px",
          height: "400px",
          top: "-100px",
          right: "-100px",
          background: C.blue,
        }}
      />
      <div className="fad-wrap" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="fad-label">Casos de sucesso</div>
          <h2 className="fad-h2">
            Marcas que confiaram
            <br />
            <GradText>na Future Ads Digital</GradText>
          </h2>
          <div className="fad-divider fad-divider-c" />
        </div>

        <div className="fad-cases-grid">
          {cases.map((c, i) => (
            <div key={i} className="fad-case-card">
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontFamily: FF,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: C.textMuted,
                    marginBottom: "6px",
                  }}
                >
                  {c.segment}
                </div>
                <div
                  style={{
                    fontFamily: FF,
                    fontWeight: 700,
                    fontSize: "18px",
                    color: C.white,
                  }}
                >
                  {c.brand}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                }}
              >
                {c.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="fad-metric">{m.val}</div>
                    <div
                      style={{
                        fontFamily: FF,
                        fontSize: "11px",
                        color: C.textMuted,
                        letterSpacing: ".5px",
                      }}
                    >
                      {m.lbl}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  height: "1px",
                  background: C.border,
                  marginBottom: "16px",
                }}
              />
              <p
                style={{
                  fontFamily: FF,
                  fontSize: "14px",
                  color: C.textMuted,
                  lineHeight: 1.65,
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: "20px",
          }}
        >
          {[
            ["150+", "Projetos entregues"],
            ["R$2M+", "Em verba gerenciada"],
            ["98%", "Taxa de retenção"],
            ["3×", "ROI médio"],
          ].map(([n, l], i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "28px 20px",
                background: C.bg0,
                borderRadius: "16px",
                border: `1px solid ${C.border}`,
              }}
            >
              <div
                style={{
                  fontFamily: FF,
                  fontWeight: 800,
                  fontSize: "32px",
                  letterSpacing: "-0.02em",
                  background: GRAD_BRAND,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: FF,
                  fontSize: "13px",
                  color: C.textMuted,
                  marginTop: "4px",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Differentials Section ──────────────────────────────────────── */
function DifferentialsSection() {
  const diffs = [
    {
      icon: "🎬",
      title: "Produção audiovisual premium",
      desc: "Vídeos de qualidade cinematográfica que elevam a percepção da sua marca e se destacam nas plataformas.",
    },
    {
      icon: "🎯",
      title: "Criativos focados em conversão",
      desc: "Não criamos apenas para parecer bonito. Cada peça é desenvolvida para gerar cliques, leads e vendas.",
    },
    {
      icon: "📈",
      title: "Estratégia orientada a performance",
      desc: "Decisões baseadas em dados. Sem achismo, sem desperdício de verba. Resultados mensuráveis.",
    },
    {
      icon: "🔄",
      title: "Otimização contínua",
      desc: "Acompanhamento constante das campanhas para melhorar o desempenho mês a mês e escalar o que funciona.",
    },
  ];

  return (
    <section className="fad-sec" style={{ background: C.bg0 }}>
      <div className="fad-wrap">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="fad-label">Diferenciais</div>
          <h2 className="fad-h2">
            Por que marcas escolhem
            <br />
            <GradText>a Future Ads Digital?</GradText>
          </h2>
          <div className="fad-divider fad-divider-c" />
        </div>

        <div className="fad-diff-grid">
          {diffs.map((d, i) => (
            <div
              key={i}
              className="fad-card"
              style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
            >
              <div
                style={{ fontSize: "32px", flexShrink: 0, marginTop: "2px" }}
              >
                {d.icon}
              </div>
              <div>
                <h3
                  className="fad-h3"
                  style={{ fontSize: "16px", marginBottom: "8px" }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: FF,
                    fontSize: "14px",
                    color: C.textMuted,
                    lineHeight: 1.65,
                  }}
                >
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value prop */}
        <div
          style={{
            marginTop: "48px",
            textAlign: "center",
            padding: "48px",
            background: C.bg1,
            borderRadius: "24px",
            border: `1px solid ${C.border}`,
          }}
        >
          <p
            style={{
              fontFamily: FF,
              fontWeight: 700,
              fontSize: "clamp(16px,2.5vw,20px)",
              color: C.textMid,
              lineHeight: 1.6,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <GradText>Audiovisual + Performance</GradText> = crescimento.
            <br />
            Essa é a equação que define marcas que escalam de verdade.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA Section ──────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section id="contato" className="fad-fcta">
      {/* Orbs */}
      <div
        className="fad-orb fad-orb-anim"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: C.blue,
          opacity: 0.15,
        }}
      />
      <div
        className="fad-orb"
        style={{
          width: "300px",
          height: "300px",
          top: "0",
          right: "10%",
          background: C.purple,
          opacity: 0.12,
        }}
      />
      <div
        className="fad-orb"
        style={{
          width: "200px",
          height: "200px",
          bottom: "0",
          left: "5%",
          background: C.cyan,
          opacity: 0.1,
        }}
      />

      <div
        className="fad-wrap-sm"
        style={{ textAlign: "center", position: "relative" }}
      >
        <div className="fad-label">Próximo passo</div>
        <h2
          className="fad-h2"
          style={{ fontSize: "clamp(30px,5vw,52px)", marginBottom: "20px" }}
        >
          Sua marca está pronta para
          <br />
          <GradText>crescer no digital?</GradText>
        </h2>
        <div className="fad-divider fad-divider-c" />
        <p
          className="fad-p"
          style={{ fontSize: "17px", maxWidth: "560px", margin: "0 auto 40px" }}
        >
          Transforme sua presença online com vídeos estratégicos, criativos
          profissionais e campanhas orientadas a performance. Vamos construir
          uma marca forte, moderna e preparada para gerar resultados reais.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          <a
            href={WA(
              "Quero solicitar meu diagnóstico estratégico com a Future Ads Digital.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="fad-btn fad-btn-green fad-pulse"
            style={{ fontSize: "16px", padding: "18px 36px" }}
          >
            <WAIcon size={22} /> Solicitar diagnóstico estratégico
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {["Sem compromisso", "Resposta rápida", "Diagnóstico gratuito"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: FF,
                  fontSize: "13px",
                  color: C.textMuted,
                }}
              >
                <span style={{ color: C.green }}>
                  <CheckIcon />
                </span>{" "}
                {t}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="fad-footer">
      <div className="fad-wrap">
        <div className="fad-footer-grid" style={{ marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <span
                style={{
                  fontFamily: FF,
                  fontWeight: 800,
                  fontSize: "20px",
                  background: GRAD_BRAND,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.02em",
                }}
              >
                Future Ads Digital
              </span>
            </div>
            <p
              style={{
                fontFamily: FF,
                fontSize: "14px",
                color: C.textMuted,
                lineHeight: 1.7,
                maxWidth: "280px",
                marginBottom: "20px",
              }}
            >
              Agência especializada em produção audiovisual estratégica e
              campanhas de performance.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {["Instagram", "TikTok", "YouTube", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: FF,
                    fontSize: "12px",
                    color: C.textMuted,
                    textDecoration: "none",
                    padding: "6px 12px",
                    border: `1px solid ${C.border}`,
                    borderRadius: "8px",
                    transition: "color .2s,border-color .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = C.cyan;
                    e.currentTarget.style.borderColor = "rgba(0,212,255,.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = C.textMuted;
                    e.currentTarget.style.borderColor = C.border;
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <div
              style={{
                fontFamily: FF,
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textMuted,
                marginBottom: "16px",
              }}
            >
              Serviços
            </div>
            {[
              "Produção Audiovisual",
              "Tráfego Pago",
              "Criativos",
              "Gestão de Redes",
              "Branding",
            ].map((s) => (
              <a
                key={s}
                href="#servicos"
                style={{
                  display: "block",
                  fontFamily: FF,
                  fontSize: "14px",
                  color: C.textMuted,
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.textMuted;
                }}
              >
                {s}
              </a>
            ))}
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                fontFamily: FF,
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textMuted,
                marginBottom: "16px",
              }}
            >
              Navegação
            </div>
            {[
              ["Sobre", "#sobre"],
              ["Proposta", "#proposta"],
              ["Processo", "#processo"],
              ["Resultados", "#resultados"],
              ["Contato", "#contato"],
            ].map(([l, h]) => (
              <a
                key={l}
                href={h}
                style={{
                  display: "block",
                  fontFamily: FF,
                  fontSize: "14px",
                  color: C.textMuted,
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.textMuted;
                }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: FF,
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textMuted,
                marginBottom: "16px",
              }}
            >
              Contato
            </div>
            <a
              href={WA()}
              target="_blank"
              rel="noopener noreferrer"
              className="fad-btn fad-btn-green fad-pulse"
              style={{
                width: "100%",
                marginBottom: "12px",
                padding: "12px 20px",
                fontSize: "14px",
              }}
            >
              <WAIcon size={16} /> WhatsApp
            </a>
            <a
              href="mailto:contato@futureadsdigital.com.br"
              style={{
                display: "block",
                fontFamily: FF,
                fontSize: "13px",
                color: C.textMuted,
                textDecoration: "none",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = C.textMuted;
              }}
            >
              contato@futureadsdigital.com.br
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${C.border}`,
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontFamily: FF, fontSize: "13px", color: C.textMuted }}>
            © {new Date().getFullYear()} Future Ads Digital. Todos os direitos
            reservados.
          </p>
          <p style={{ fontFamily: FF, fontSize: "12px", color: C.textMuted }}>
            Produção Audiovisual · Tráfego Pago · Performance Digital
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── WhatsApp Float ─────────────────────────────────────────────── */
function WAFloat() {
  return (
    <a
      href={WA()}
      target="_blank"
      rel="noopener noreferrer"
      className="fad-wa fad-pulse"
      aria-label="WhatsApp"
    >
      <WAIcon size={26} />
    </a>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function FutureAdsPage() {
  return (
    <main className="fad">
      <style>{CSS}</style>
      <Navbar />
      <HeroSection />
      <PainSection />
      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <ProposalSection />
      <ProcessSection />
      <ShowcaseSection />
      <ClientsSection />
      <CasesSection />
      <DifferentialsSection />
      <FinalCTASection />
      <Footer />
      <WAFloat />
    </main>
  );
}
