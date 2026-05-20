"use client";

import { useState, useEffect } from "react";

/* ─── Design Tokens ─────────────────────────────────────────────── */
const C = {
  wine: "#6B1A2A",
  wineDark: "#4A1020",
  wineLight: "#8B2638",
  wineTint: "rgba(107,26,42,0.06)",
  rose: "#F9F0EB",
  roseMid: "#EDD9D0",
  champagne: "#F4E8DE",
  gold: "#BFA26A",
  goldLight: "#D4B88A",
  greenCta: "#25D366",
  greenDark: "#128C48",
  text: "#2C1810",
  muted: "#7A5C54",
  white: "#FDFAF8",
  border: "#E0C8BC",
};

const FH = "var(--km-font-heading,'Playfair Display',Georgia,serif)";
const FB = "var(--km-font-body,'Inter',system-ui,sans-serif)";

const WA_BASE = "https://wa.me/5566992486203";
const WA = (msg = "Olá, Dra. Karen! Gostaria de agendar uma consulta.") =>
  `${WA_BASE}?text=${encodeURIComponent(msg)}`;
const KAREN_HERO_PHOTO = "/images/karenmoraes/karen-moraes-hero.jpg?v=2";
const KAREN_ABOUT_PHOTO = "/images/karenmoraes/karen-moraes-about.jpg?v=2";

/* ─── Responsive CSS ─────────────────────────────────────────────── */
const CSS = `
  html{scroll-padding-top:130px}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  .km{font-family:${FB};color:${C.text};background:${C.rose};min-height:100vh;overflow-x:hidden}
  .km-wrap{max-width:1140px;margin:0 auto;padding:0 24px}
  .km-wrap-sm{max-width:800px;margin:0 auto;padding:0 24px}

  /* nav */
  .km-nav-links{display:none;gap:20px;align-items:center}
  .km-menu-btn{display:flex;background:none;border:none;cursor:pointer;padding:8px;color:${C.wine}}
  .km-mobile-nav{display:none;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:${C.white};border-top:1px solid ${C.border};padding:16px 24px 24px;gap:0;box-shadow:0 8px 32px rgba(107,26,42,.12);z-index:90}
  .km-mobile-nav.open{display:flex}
  .km-nav-link{display:block;padding:12px 0;color:${C.text};text-decoration:none;font-family:${FB};font-size:15px;font-weight:500;border-bottom:1px solid ${C.border};transition:color .2s}
  .km-nav-link:hover{color:${C.wine}}
  .km-nav-link:last-child{border-bottom:none}

  /* grids */
  .km-hero-grid{display:grid;gap:28px;align-items:center}
  .km-hero-photo{display:block;order:2}
  .km-hero-copy{order:1}
  .km-hero-photo-card{padding:18px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:12px;backdrop-filter:blur(12px);text-align:center}
  .km-hero-image-wrap{position:relative;width:100%;height:300px;border-radius:10px;overflow:hidden;margin:0 auto 16px;background:linear-gradient(135deg,${C.gold} 0%,rgba(191,162,106,.3) 100%);border:1px solid rgba(191,162,106,.45);box-shadow:0 18px 48px rgba(0,0,0,.22)}
  .km-hero-title-card{font-family:${FH};font-size:20px;font-weight:700;color:${C.white};margin-bottom:4px}
  .km-hero-oab{font-family:${FB};font-size:11px;color:${C.goldLight};letter-spacing:1.8px;text-transform:uppercase;margin-bottom:0}
  .km-hero-card-divider,.km-hero-card-desc,.km-hero-card-list{display:none}
  .km-hero-eyebrow{font-family:${FB};font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.goldLight};margin-bottom:14px}
  .km-hero-heading{font-family:${FH};font-weight:700;font-size:clamp(32px,9vw,44px);line-height:1.08;color:${C.white};margin-bottom:16px}
  .km-hero-copy-text{font-family:${FB};font-size:15px;line-height:1.65;color:rgba(255,255,255,.85);max-width:520px;margin-bottom:24px}
  .km-hero-copy-desktop{display:none}
  .km-hero-cta-row{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:14px}
  .km-hero-main-cta{background:${C.greenCta};color:#fff;padding:15px 22px;border-radius:4px;font-family:${FB};font-weight:700;font-size:14px;text-decoration:none;letter-spacing:.7px;text-transform:uppercase;display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;min-height:50px;text-align:center}
  .km-hero-secure{font-family:${FB};font-size:12px;color:rgba(255,255,255,.62);letter-spacing:.2px}
  .km-hero-chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}
  .km-hero-chip{background:rgba(255,255,255,.1);color:rgba(255,255,255,.82);border:1px solid rgba(255,255,255,.15);border-radius:20px;padding:5px 10px;font-family:${FB};font-size:11px;letter-spacing:.2px}
  .km-hero-grid > .km-up{order:1}
  .km-hero-grid > .km-hero-photo{order:2}
  .km-id-grid{display:grid;gap:20px;grid-template-columns:1fr}
  .km-svc-grid{display:grid;gap:24px;grid-template-columns:1fr}
  .km-how-grid{display:grid;gap:32px}
  .km-test-grid{display:grid;gap:24px;grid-template-columns:1fr}
  .km-footer-grid{display:grid;gap:48px}
  .km-about-grid{display:grid;gap:48px}
  .km-topbar-right{display:none}
  .km-topbar-email{display:none!important}

  /* proposal banner */
  .km-banner{position:fixed;top:0;left:0;right:0;z-index:300;height:36px;background:#000;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:8px;padding:0 16px;font-size:11.5px;letter-spacing:.04em;color:rgba(255,255,255,.72);text-align:center}
  .km-banner-dot{width:6px;height:6px;border-radius:50%;background:${C.gold};flex-shrink:0;display:inline-block}
  .km-banner-sep{opacity:.4}
  .km-banner-short{display:none}
  .km-top-pad{padding-top:36px}
  .km-nav-top{top:36px}

  /* circular avatars — mobile only */
  .km-avatar-hero{display:none;width:96px;height:96px;border-radius:50%;overflow:hidden;border:3px solid ${C.gold};box-shadow:0 0 0 4px rgba(191,162,106,.25),0 8px 24px rgba(0,0,0,.3);margin:0 auto 28px;position:relative;background:linear-gradient(135deg,${C.gold} 0%,rgba(191,162,106,.4) 100%);flex-shrink:0}
  .km-avatar-about{display:none;width:120px;height:120px;border-radius:50%;overflow:hidden;border:3px solid ${C.wine};box-shadow:0 0 0 4px rgba(107,26,42,.18),0 8px 24px rgba(107,26,42,.2);margin:0 auto 28px;position:relative;background:linear-gradient(135deg,${C.wine} 0%,${C.wineLight} 100%);flex-shrink:0}
  .km-avatar-initials{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:${FH};font-weight:700;color:#fff}
  .km-avatar-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top}
  .km-about-photo-rect{display:none}
  .km-about-card-mobile{display:none;border-radius:12px;overflow:hidden;background:linear-gradient(135deg,${C.wineDark} 0%,${C.wine} 100%);padding:32px 24px;text-align:center;margin-bottom:32px}
  .km-about-card-mobile .km-avatar-about{display:flex}
  .km-about-pills{display:none}
  .km-about-cta{display:flex;justify-content:flex-start}
  @media(max-width:899px){
    .km-avatar-hero{display:none}
    .km-about-card-mobile{display:block}
  }
  @media(min-width:900px){
    .km-about-photo-rect{display:block}
  }

  /* section padding */
  .km-section{padding:96px 0}
  .km-hero-sec{padding:80px 0 72px}

  /* sticky CTA */
  .km-sticky{display:none;position:fixed;bottom:0;left:0;right:0;z-index:200;padding:12px 20px;padding-bottom:max(12px,env(safe-area-inset-bottom));background:linear-gradient(135deg,${C.greenDark} 0%,${C.greenCta} 100%);align-items:center;justify-content:center;gap:10px;text-decoration:none;color:#fff;font-family:${FB};font-weight:700;font-size:15px;letter-spacing:.5px;box-shadow:0 -4px 20px rgba(0,0,0,.15)}
  .km-wa-float{display:flex!important}

  @media(max-width:599px){
    .km-banner{height:52px;flex-direction:column;gap:2px;padding:5px 12px}
    .km-banner-sep{display:none}
    .km-banner-full{display:none}
    .km-banner-short{display:inline}
    .km-top-pad{padding-top:52px}
    .km-nav-top{top:52px!important}
    .km-section{padding:60px 0}
    .km-hero-sec{padding:42px 0 40px}
    .km-wrap{padding:0 16px}
    .km-wrap-sm{padding:0 16px}
    .km-hero-grid{gap:22px}
    .km-hero-grid > .km-up > p:first-of-type{font-size:11px!important;letter-spacing:1.8px!important;margin-bottom:14px!important}
    .km-hero-grid > .km-up > h1{font-size:clamp(32px,9vw,42px)!important;line-height:1.08!important;margin-bottom:16px!important}
    .km-hero-grid > .km-up > p:nth-of-type(2){font-size:15px!important;line-height:1.62!important;margin-bottom:22px!important}
    .km-hero-grid > .km-up > div:nth-of-type(2){margin-bottom:14px!important}
    .km-hero-grid > .km-up > div:nth-of-type(2) a{width:100%!important;justify-content:center!important;min-height:50px!important;padding:15px 20px!important;font-size:14px!important;text-align:center!important}
    .km-hero-grid > .km-up > p:nth-of-type(3){font-size:12px!important;color:rgba(255,255,255,.64)!important;letter-spacing:.2px!important}
    .km-hero-grid > .km-up > div:nth-of-type(3){gap:8px!important;margin-top:16px!important}
    .km-hero-grid > .km-up > div:nth-of-type(3) span{padding:5px 10px!important;font-size:11px!important;letter-spacing:.2px!important}
    .km-hero-photo > div{padding:18px!important}
    .km-hero-photo > div > div:first-child{height:auto!important;aspect-ratio:853/1280!important;margin-bottom:16px!important}
    .km-hero-photo > div > div:first-child img{object-fit:contain!important;object-position:center center!important}
    .km-hero-photo > div > p:first-of-type{font-size:20px!important;margin-bottom:4px!important}
    .km-hero-photo > div > p:nth-of-type(2){font-size:11px!important;margin-bottom:0!important}
    .km-hero-photo > div > div:nth-of-type(2),.km-hero-photo > div > p:nth-of-type(3),.km-hero-photo > div > div:nth-of-type(3){display:none!important}
    .km-wa-float{right:16px!important;bottom:max(20px,env(safe-area-inset-bottom))!important;width:54px!important;height:54px!important}
    .km-about-cta{justify-content:center}
    .km-about-cta a{text-align:center}
  }
  @media(min-width:600px){
    .km-id-grid{grid-template-columns:1fr 1fr}
    .km-svc-grid{grid-template-columns:1fr 1fr}
    .km-test-grid{grid-template-columns:1fr 1fr}
    .km-topbar-right{display:flex}
    .km-topbar-email{display:flex!important}
  }
  @media(min-width:900px){
    .km-nav-links{display:flex}
    .km-menu-btn{display:none}
    .km-sticky{display:none}
    .km-svc-grid{grid-template-columns:1fr 1fr 1fr}
    .km-how-grid{grid-template-columns:1fr 1fr 1fr}
    .km-test-grid{grid-template-columns:1fr 1fr}
    .km-footer-grid{grid-template-columns:1fr 1fr 1fr}
    .km-about-grid{grid-template-columns:400px 1fr;align-items:start}
    .km-about-photo-rect{display:block}
    .km-about-pills{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
    .km-hero-grid{grid-template-columns:1fr 360px;gap:48px}
    .km-hero-grid > .km-up{order:initial}
    .km-hero-grid > .km-hero-photo{order:initial}
    .km-hero-copy{order:initial}
    .km-hero-photo{display:block;order:initial}
    .km-hero-photo-card{padding:40px 32px}
    .km-hero-image-wrap{aspect-ratio:4/5;height:auto;margin-bottom:24px}
    .km-hero-title-card{font-size:22px;margin-bottom:6px}
    .km-hero-oab{font-size:12px;letter-spacing:2px;margin-bottom:20px}
    .km-hero-card-divider{display:block}
    .km-hero-card-desc{display:block}
    .km-hero-card-list{display:flex}
    .km-hero-eyebrow{font-size:12px;letter-spacing:3px;margin-bottom:20px}
    .km-hero-heading{font-size:clamp(34px,5vw,56px);line-height:1.15;margin-bottom:24px}
    .km-hero-copy-text{font-size:17px;line-height:1.75;margin-bottom:36px}
    .km-hero-copy-mobile{display:none}
    .km-hero-copy-desktop{display:inline}
    .km-hero-cta-row{margin-bottom:28px}
    .km-hero-main-cta{width:auto;padding:16px 32px;font-size:15px}
    .km-hero-secure{font-size:12px;letter-spacing:.5px}
    .km-hero-chips{gap:10px;margin-top:24px}
    .km-hero-chip{padding:5px 14px;font-size:12px;letter-spacing:.3px}
    .km-wa-float{display:flex!important}
  }

  /* transitions */
  .km-card{transition:transform .22s ease,box-shadow .22s ease}
  .km-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(107,26,42,.13)}
  .km-faq-panel{overflow:hidden;transition:max-height .35s ease,opacity .3s ease;opacity:0;max-height:0}
  .km-faq-panel.open{opacity:1;max-height:600px}
  .km-btn-hover{transition:opacity .2s,transform .18s}
  .km-btn-hover:hover{opacity:.88;transform:translateY(-2px)}

  @keyframes km-wa-pulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.7)}65%{box-shadow:0 0 0 16px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}
  .km-pulse-cta{animation:km-wa-pulse 2s ease-out infinite}
  .km-pulse-cta:hover{animation-play-state:paused}

  @keyframes km-up{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
  .km-up{animation:km-up .7s cubic-bezier(.22,.61,.36,1) both}
  .km-up-2{animation:km-up .7s .12s cubic-bezier(.22,.61,.36,1) both}
  .km-up-3{animation:km-up .7s .24s cubic-bezier(.22,.61,.36,1) both}

  /* form */
  .km-input{width:100%;padding:11px 14px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.25);border-radius:4px;color:#fff;font-family:${FB};font-size:14px;outline:none;transition:border .2s;margin-bottom:12px}
  .km-input::placeholder{color:rgba(255,255,255,.45)}
  .km-input:focus{border-color:rgba(255,255,255,.55)}
  .km-textarea{height:130px;resize:vertical}
`;

/* ─── Sub-components ─────────────────────────────────────────────── */
function CTABtn({
  href,
  children,
  variant = "green",
  full = false,
  small = false,
  noArrow = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "green" | "wine" | "outline";
  full?: boolean;
  small?: boolean;
  noArrow?: boolean;
}) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: small ? "10px 22px" : "14px 30px",
    borderRadius: "4px",
    fontFamily: FB,
    fontWeight: 700,
    fontSize: small ? "13px" : "15px",
    letterSpacing: "0.6px",
    textDecoration: "none",
    cursor: "pointer",
    width: full ? "100%" : "auto",
    textTransform: "uppercase" as const,
  };
  const varStyle =
    variant === "green"
      ? {
          background: `linear-gradient(135deg, ${C.greenDark} 0%, ${C.greenCta} 100%)`,
          color: "#fff",
          border: "none",
        }
      : variant === "wine"
        ? { background: C.wine, color: "#fff", border: "none" }
        : {
            background: "transparent",
            color: C.wine,
            border: `2px solid ${C.wine}`,
          };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...base, ...varStyle }}
      className="km-btn-hover km-pulse-cta"
    >
      {variant === "green" && <WAIcon size={17} />}
      {children}
      {!noArrow && " →"}
    </a>
  );
}

function Label({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      style={{
        fontFamily: FB,
        fontWeight: 700,
        fontSize: "11px",
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        color: light ? C.goldLight : C.gold,
        marginBottom: "12px",
      }}
    >
      {children}
    </p>
  );
}

function H2({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      style={{
        fontFamily: FH,
        fontWeight: 700,
        fontSize: "clamp(28px, 4vw, 40px)",
        lineHeight: 1.2,
        color: light ? C.white : C.wine,
        marginBottom: "16px",
      }}
    >
      {children}
    </h2>
  );
}

function GoldDivider() {
  return (
    <div
      style={{
        width: "48px",
        height: "3px",
        background: `linear-gradient(90deg,${C.gold},${C.goldLight})`,
        borderRadius: "2px",
        margin: "16px auto 28px",
      }}
    />
  );
}

/* ─── TopBar ─────────────────────────────────────────────── */
function TopBar() {
  return (
    <div
      style={{
        background: C.wineDark,
        color: C.white,
        fontSize: "12px",
        fontFamily: FB,
      }}
    >
      <div
        className="km-wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 24px",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+5566992486203"
            style={{
              color: C.white,
              textDecoration: "none",
              display: "flex",
              gap: "6px",
              alignItems: "center",
            }}
          >
            <PhoneIcon /> (66) 99248-6203
          </a>
          <a
            href="mailto:karenmoraes.jur@gmail.com"
            className="km-topbar-email"
            style={{
              color: C.white,
              textDecoration: "none",
              gap: "6px",
              alignItems: "center",
            }}
          >
            <MailIcon /> karenmoraes.jur@gmail.com
          </a>
          <span
            className="km-topbar-email"
            style={{
              color: "rgba(255,255,255,.6)",
              gap: "6px",
              alignItems: "center",
            }}
          >
            <PinIcon /> Barra do Garças – MT · Todo o Brasil
          </span>
        </div>
        <div
          className="km-topbar-right"
          style={{ gap: "12px", alignItems: "center" }}
        >
          <a
            href="https://instagram.com/dra_karenmoraes"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,.7)",
              textDecoration: "none",
              fontSize: "11px",
              letterSpacing: "1px",
            }}
          >
            Instagram
          </a>
          <span style={{ color: "rgba(255,255,255,.3)" }}>·</span>
          <a
            href="https://tiktok.com/@karenmoraesadvogada"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,.7)",
              textDecoration: "none",
              fontSize: "11px",
              letterSpacing: "1px",
            }}
          >
            TikTok
          </a>
          <span style={{ color: "rgba(255,255,255,.3)" }}>·</span>
          <a
            href="https://facebook.com/karenmoraes"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,.7)",
              textDecoration: "none",
              fontSize: "11px",
              letterSpacing: "1px",
            }}
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    ["Início", "#"],
    ["Sobre", "#sobre"],
    ["Áreas de Atuação", "#atuacao"],
    ["Como Funciona", "#como-funciona"],
    ["Depoimentos", "#depoimentos"],
    ["Dúvidas Frequentes", "#faq"],
    ["Contato", "#contato"],
  ];

  return (
    <nav
      className="km-nav-top"
      style={{
        position: "sticky",
        zIndex: 100,
        background: scrolled ? "rgba(253,250,248,.97)" : C.white,
        borderBottom: `1px solid ${C.border}`,
        backdropFilter: "blur(12px)",
        transition: "background .3s,box-shadow .3s",
        boxShadow: scrolled ? "0 2px 20px rgba(107,26,42,.08)" : "none",
      }}
    >
      <div
        className="km-wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 24px",
          position: "relative",
        }}
      >
        {/* Logo */}
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
              fontFamily: FH,
              fontWeight: 700,
              fontSize: "18px",
              color: C.wine,
              letterSpacing: ".3px",
            }}
          >
            Karen Moraes
          </span>
          <span
            style={{
              fontFamily: FB,
              fontSize: "10px",
              letterSpacing: "2px",
              color: C.muted,
              textTransform: "uppercase",
            }}
          >
            Família & Sucessões
          </span>
        </a>

        {/* Desktop nav */}
        <div className="km-nav-links">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="km-nav-link"
              style={{
                fontFamily: FB,
                fontSize: "13px",
                fontWeight: 500,
                color: C.text,
                textDecoration: "none",
                letterSpacing: ".3px",
                padding: "6px 0",
                borderBottom: "2px solid transparent",
                transition: "color .2s,border-color .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.wine;
                e.currentTarget.style.borderColor = C.wine;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = C.text;
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href={WA()}
            target="_blank"
            rel="noopener noreferrer"
            className="km-btn-hover"
            style={{
              background: C.wine,
              color: "#fff",
              padding: "9px 18px",
              borderRadius: "4px",
              fontFamily: FB,
              fontWeight: 700,
              fontSize: "13px",
              textDecoration: "none",
              letterSpacing: ".5px",
              textTransform: "uppercase",
            }}
          >
            Fale comigo →
          </a>
          <button
            className="km-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{ color: C.wine }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className={`km-mobile-nav ${open ? "open" : ""}`}>
        {navItems.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="km-nav-link"
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
          style={{
            marginTop: "16px",
            display: "block",
            background: `linear-gradient(135deg, ${C.greenDark} 0%, ${C.greenCta} 100%)`,
            color: "#fff",
            padding: "14px",
            borderRadius: "4px",
            fontFamily: FB,
            fontWeight: 700,
            fontSize: "15px",
            textDecoration: "none",
            textAlign: "center",
            letterSpacing: ".5px",
          }}
        >
          <WAIcon size={18} /> Falar com a Advogada →
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="km-hero-sec"
      style={{
        background: `linear-gradient(135deg, ${C.wineDark} 0%, ${C.wine} 55%, ${C.wineLight} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "rgba(191,162,106,.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-60px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(255,255,255,.04)",
          pointerEvents: "none",
        }}
      />

      <div className="km-wrap">
        <div className="km-hero-grid">
          {/* Left: copy */}
          <div className="km-up km-hero-copy">
            {/* Mobile circular avatar */}
            <div className="km-avatar-hero">
              <div className="km-avatar-initials" style={{ fontSize: "28px" }}>
                KM
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={KAREN_HERO_PHOTO}
                alt="Dra. Karen Moraes"
                className="km-avatar-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <p className="km-hero-eyebrow">
              Você está passando por uma situação difícil na sua família?
            </p>
            <h1 className="km-hero-heading">
              Decisões seguras
              <br />
              <em style={{ color: C.goldLight, fontStyle: "italic" }}>
                em momentos
              </em>
              <br />
              que mudam tudo.
            </h1>
            <p
              style={{
                fontFamily: FB,
                fontSize: "17px",
                lineHeight: 1.75,
                color: "rgba(255,255,255,.85)",
                maxWidth: "520px",
                marginBottom: "36px",
              }}
            >
              Divórcio, guarda dos filhos, pensão alimentícia, inventário.
              Questões que mexem com a sua vida, o seu patrimônio e os seus
              filhos não podem ser resolvidas no improviso.
              <br />
              <br />
              Aqui, você tem uma advogada ao seu lado, do primeiro contato até a
              solução.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "28px",
              }}
            >
              <a
                href={WA(
                  "Olá, Dra. Karen! Quero falar com a advogada sobre meu caso.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="km-btn-hover km-pulse-cta"
                style={{
                  background: `linear-gradient(135deg, ${C.greenDark} 0%, ${C.greenCta} 100%)`,
                  color: "#fff",
                  padding: "16px 32px",
                  borderRadius: "6px",
                  fontFamily: FB,
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  letterSpacing: ".8px",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <WAIcon size={20} />
                Falar com a Advogada
              </a>
            </div>

            <p
              style={{
                fontFamily: FB,
                fontSize: "12px",
                color: "rgba(255,255,255,.55)",
                letterSpacing: ".5px",
              }}
            >
              🔒 Atendimento seguro e sigiloso via WhatsApp
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "24px",
              }}
            >
              {[
                "Atendimento online",
                "Presencial em Barra do Garças",
                "Todo o Brasil",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(255,255,255,.1)",
                    color: "rgba(255,255,255,.8)",
                    border: "1px solid rgba(255,255,255,.15)",
                    borderRadius: "20px",
                    padding: "5px 14px",
                    fontFamily: FB,
                    fontSize: "12px",
                    letterSpacing: ".3px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: ID card */}
          <div className="km-hero-photo km-up-3">
            <div
              style={{
                background: "rgba(255,255,255,.07)",
                border: "1px solid rgba(255,255,255,.15)",
                borderRadius: "12px",
                padding: "40px 32px",
                backdropFilter: "blur(12px)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "2 / 3",
                  borderRadius: "10px",
                  overflow: "hidden",
                  margin: "0 auto 24px",
                  background: `linear-gradient(135deg, ${C.gold} 0%, rgba(191,162,106,.3) 100%)`,
                  border: `1px solid rgba(191,162,106,.45)`,
                  boxShadow: "0 18px 48px rgba(0,0,0,.22)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "38px",
                    fontFamily: FH,
                    color: C.white,
                    fontWeight: 700,
                    letterSpacing: "2px",
                  }}
                >
                  KM
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={KAREN_HERO_PHOTO}
                  alt="Dra. Karen Moraes em seu escritório"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />
              </div>

              <p
                style={{
                  fontFamily: FH,
                  fontSize: "22px",
                  fontWeight: 700,
                  color: C.white,
                  marginBottom: "6px",
                }}
              >
                Dra. Karen Moraes
              </p>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: "12px",
                  color: C.goldLight,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                OAB/MT 36197
              </p>
              <div
                style={{
                  height: "1px",
                  background: "rgba(191,162,106,.3)",
                  margin: "0 0 20px",
                }}
              />
              <p
                style={{
                  fontFamily: FB,
                  fontSize: "13px",
                  color: "rgba(255,255,255,.7)",
                  lineHeight: 1.6,
                }}
              >
                Advogada especialista em
                <br />
                <strong style={{ color: C.white }}>
                  Direito de Família e Sucessões
                </strong>
              </p>
              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  gap: "8px",
                  flexDirection: "column",
                }}
              >
                {[
                  "✓ Atendimento humanizado",
                  "✓ 100% online ou presencial",
                  "✓ Sigilo absoluto",
                ].map((item) => (
                  <p
                    key={item}
                    style={{
                      fontFamily: FB,
                      fontSize: "13px",
                      color: "rgba(255,255,255,.75)",
                      textAlign: "left",
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Identification ─────────────────────────────────────────────── */
const painPoints = [
  {
    icon: "⚖️",
    text: "Você quer se separar, mas tem medo de ficar sem renda ou perder os filhos",
  },
  {
    icon: "📋",
    text: "Você está passando por um divórcio difícil e não sabe seus direitos",
  },
  {
    icon: "💰",
    text: "O pai das suas crianças não paga pensão ou paga menos do que deveria",
  },
  {
    icon: "📜",
    text: "Você precisa resolver uma questão de herança ou inventário e não sabe por onde começar",
  },
  {
    icon: "🏠",
    text: "Há conflito com a família do falecido sobre bens ou guarda dos filhos",
  },
  {
    icon: "🛡️",
    text: "Você quer proteger seus filhos e seu patrimônio antes que surja um problema",
  },
];

function IdentificationSection() {
  return (
    <section
      id="identificacao"
      className="km-section"
      style={{ background: C.white }}
    >
      <div className="km-wrap">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <Label>Identificação</Label>
          <H2>Você pode estar passando por isso</H2>
          <GoldDivider />
          <p
            style={{
              fontFamily: FB,
              fontSize: "16px",
              color: C.muted,
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Questões de família e herança são delicadas, e cada dia sem
            orientação jurídica pode custar caro.
          </p>
        </div>

        <div className="km-id-grid">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="km-card"
              style={{
                background: C.champagne,
                border: `1px solid ${C.border}`,
                borderRadius: "8px",
                padding: "28px 24px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "28px", lineHeight: 1 }}>{p.icon}</span>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: "15px",
                  color: C.text,
                  lineHeight: 1.65,
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing banner */}
        <div
          style={{
            marginTop: "32px",
            background: C.wine,
            borderRadius: "8px",
            padding: "32px 36px",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: FH,
              fontSize: "18px",
              color: C.white,
              fontWeight: 600,
              lineHeight: 1.4,
              maxWidth: "480px",
            }}
          >
            Se você se identificou com algum desses pontos, o problema não vai
            se resolver sozinho, e adiar pode custar caro.
          </p>
          <CTABtn
            href={WA("Olá, Dra. Karen! Quero falar sobre meu caso.")}
            variant="green"
            small
            noArrow
          >
            Falar com a Advogada Agora
          </CTABtn>
        </div>
      </div>
    </section>
  );
}

/* ─── Urgency ─────────────────────────────────────────────── */
function UrgencySection() {
  return (
    <section className="km-section" style={{ background: C.roseMid }}>
      <div className="km-wrap-sm" style={{ textAlign: "center" }}>
        <Label>Por que agir agora</Label>
        <h2
          style={{
            fontFamily: FH,
            fontWeight: 700,
            fontSize: "clamp(28px, 4.5vw, 44px)",
            lineHeight: 1.2,
            color: C.wine,
            marginBottom: "32px",
          }}
        >
          Deixar para depois quase sempre sai mais caro.
        </h2>
        <GoldDivider />
        <p
          style={{
            fontFamily: FB,
            fontSize: "17px",
            color: C.text,
            lineHeight: 1.8,
            marginBottom: "20px",
          }}
        >
          Quando a situação envolve filhos, bens ou herança, cada decisão tomada
          sem orientação jurídica pode gerar prejuízo financeiro, perda de
          direitos ou conflitos que demoram anos para resolver.
        </p>
        <p
          style={{
            fontFamily: FB,
            fontSize: "17px",
            color: C.text,
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          Quanto antes você tiver clareza sobre o seu caso, menor o desgaste
          emocional e financeiro.
        </p>
        <p
          style={{
            fontFamily: FH,
            fontSize: "22px",
            color: C.wine,
            fontStyle: "italic",
            fontWeight: 600,
          }}
        >
          "Sua tranquilidade começa com uma decisão bem tomada."
        </p>
      </div>
    </section>
  );
}

/* ─── Services ─────────────────────────────────────────────── */
const services = [
  {
    icon: "⚖️",
    title: "Divórcio",
    desc: "Divórcio consensual ou litigioso, com orientação clara em cada etapa, do início ao acordo ou sentença. Você não precisa enfrentar isso sozinha.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Guarda dos Filhos",
    desc: "Guarda compartilhada, unilateral, regulamentação de visitas e direito de convivência. Os filhos precisam de proteção jurídica, não apenas de boa vontade.",
  },
  {
    icon: "💳",
    title: "Pensão Alimentícia",
    desc: "Fixação, revisão, cobrança e execução de pensão. Se o valor está desatualizado ou o pagamento atrasado, há caminhos jurídicos concretos para resolver.",
  },
  {
    icon: "🏠",
    title: "Partilha de Bens",
    desc: "Divisão do patrimônio construído durante o casamento ou a união estável, com análise do que realmente pertence a você, mesmo que não esteja no seu nome.",
  },
  {
    icon: "📜",
    title: "Inventário e Herança",
    desc: "Inventário extrajudicial (cartório) ou judicial, com acompanhamento completo. O prazo legal começa a contar após o falecimento e o atraso gera multa.",
  },
  {
    icon: "🛡️",
    title: "Planejamento Sucessório",
    desc: "Organize seu patrimônio ainda em vida. Testamento, doação com reserva de usufruto e outras ferramentas para proteger quem você ama, com segurança jurídica.",
  },
];

function ServicesSection() {
  return (
    <section id="atuacao" className="km-section" style={{ background: C.rose }}>
      <div className="km-wrap">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <Label>Como posso te ajudar</Label>
          <H2>Áreas de atuação</H2>
          <GoldDivider />
        </div>

        <div className="km-svc-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="km-card"
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: "8px",
                padding: "32px 28px",
                borderTop: `3px solid ${C.wine}`,
              }}
            >
              <span
                style={{
                  fontSize: "32px",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                {s.icon}
              </span>
              <h3
                style={{
                  fontFamily: FH,
                  fontSize: "20px",
                  fontWeight: 700,
                  color: C.wine,
                  marginBottom: "12px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: "14px",
                  color: C.muted,
                  lineHeight: 1.7,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <CTABtn
            href={WA("Olá, Dra. Karen! Quero analisar meu caso com você.")}
          >
            Quero analisar meu caso
          </CTABtn>
        </div>
      </div>
    </section>
  );
}

/* ─── Inventory Alert ─────────────────────────────────────────────── */
function InventoryAlertSection() {
  return (
    <section style={{ background: C.wineDark, padding: "80px 0" }}>
      <div className="km-wrap-sm" style={{ textAlign: "center" }}>
        <span
          style={{
            display: "inline-block",
            background: C.gold,
            color: C.wineDark,
            fontFamily: FB,
            fontWeight: 800,
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "5px 14px",
            borderRadius: "20px",
            marginBottom: "28px",
          }}
        >
          ⚠ Atenção: Prazo Legal
        </span>
        <h2
          style={{
            fontFamily: FH,
            fontWeight: 700,
            fontSize: "clamp(26px, 4vw, 40px)",
            color: C.white,
            marginBottom: "28px",
            lineHeight: 1.25,
          }}
        >
          O inventário tem prazo. E quem não cumpre paga multa.
        </h2>
        <p
          style={{
            fontFamily: FB,
            fontSize: "16px",
            color: "rgba(255,255,255,.8)",
            lineHeight: 1.8,
            marginBottom: "20px",
          }}
        >
          A lei determina que o inventário seja aberto em até{" "}
          <strong style={{ color: C.goldLight }}>
            60 dias após o falecimento
          </strong>
          . Quando isso não acontece, o Estado pode aplicar uma multa que varia
          de <strong style={{ color: C.goldLight }}>10% a 20%</strong> sobre o
          imposto devido, reduzindo o valor que cada herdeiro recebe.
        </p>
        <p
          style={{
            fontFamily: FB,
            fontSize: "16px",
            color: "rgba(255,255,255,.7)",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          Esse prazo coincide com um dos momentos mais difíceis da família. Por
          isso é essencial ter uma advogada que conduza o processo enquanto você
          cuida de quem ama.
        </p>
        <CTABtn
          href={WA("Olá, Dra. Karen! Preciso falar sobre inventário.")}
          variant="green"
        >
          Falar sobre o meu inventário
        </CTABtn>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="sobre" className="km-section" style={{ background: C.white }}>
      <div className="km-wrap">
        <div className="km-about-grid">
          {/* Professional photo */}
          <div className="km-about-photo-rect">
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                background: `linear-gradient(145deg, ${C.roseMid} 0%, ${C.champagne} 50%, ${C.roseMid} 100%)`,
                aspectRatio: "4/5",
                border: `1px solid ${C.border}`,
                position: "relative",
                boxShadow: "0 18px 48px rgba(107,26,42,.12)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  fontFamily: FH,
                  color: C.white,
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${C.wine} 0%, ${C.wineLight} 100%)`,
                }}
              >
                KM
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={KAREN_ABOUT_PHOTO}
                alt="Dra. Karen Moraes"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(74,16,32,.88) 0%, rgba(74,16,32,.3) 40%, rgba(74,16,32,0) 65%)",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: FH,
                    fontSize: "20px",
                    fontWeight: 700,
                    color: C.white,
                    textShadow: "0 2px 12px rgba(0,0,0,.4)",
                    marginBottom: "4px",
                  }}
                >
                  Dra. Karen Moraes
                </p>
                <p
                  style={{
                    fontFamily: FB,
                    fontSize: "11px",
                    color: C.goldLight,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  OAB/MT 36197
                </p>
              </div>
            </div>

            {/* Quote below photo — desktop only */}
            <div
              style={{
                marginTop: "20px",
                padding: "22px 24px",
                background: `linear-gradient(135deg, ${C.wineDark} 0%, ${C.wine} 100%)`,
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontFamily: FH,
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: C.white,
                  lineHeight: 1.65,
                  marginBottom: "12px",
                }}
              >
                "Família e herança são assuntos que mexem com o que as pessoas
                têm de mais precioso."
              </p>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: "11px",
                  color: C.goldLight,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Dra. Karen Moraes
              </p>
            </div>
          </div>

          {/* Bio */}
          <div style={{ paddingTop: "8px" }}>
            <Label>Advogada especialista em Família e Sucessões</Label>

            {/* Mobile: profile card with wine bg — hidden on desktop */}
            <div className="km-about-card-mobile">
              {/* Avatar */}
              <div
                className="km-avatar-about"
                style={{ margin: "0 auto 20px" }}
              >
                <div
                  className="km-avatar-initials"
                  style={{ fontSize: "34px" }}
                >
                  KM
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={KAREN_ABOUT_PHOTO}
                  alt="Dra. Karen Moraes"
                  className="km-avatar-img"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: FH,
                  fontSize: "22px",
                  fontWeight: 700,
                  color: C.white,
                  marginBottom: "6px",
                }}
              >
                Dra. Karen Moraes
              </p>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: C.goldLight,
                  marginBottom: "16px",
                }}
              >
                OAB/MT 36197
              </p>
              <div
                style={{
                  height: "1px",
                  background: "rgba(191,162,106,.3)",
                  margin: "0 16px 16px",
                }}
              />
              <p
                style={{
                  fontFamily: FB,
                  fontSize: "13px",
                  color: "rgba(255,255,255,.72)",
                  lineHeight: 1.6,
                }}
              >
                Advogada especialista em{" "}
                <strong style={{ color: C.white }}>
                  Direito de Família e Sucessões
                </strong>
              </p>
            </div>

            <H2>Dra. Karen Moraes</H2>
            <GoldDivider />

            <p
              style={{
                fontFamily: FB,
                fontSize: "16px",
                color: C.text,
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              Atuar em Direito de Família e Sucessões não é apenas uma escolha
              profissional. É uma missão. Cada caso que chega até mim envolve
              uma família atravessando um momento difícil, e é exatamente nesses
              momentos que uma orientação jurídica clara pode mudar o desfecho
              de tudo.
            </p>
            <p
              style={{
                fontFamily: FB,
                fontSize: "16px",
                color: C.text,
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Minha atuação é focada em proteção: dos seus direitos, do seu
              patrimônio e, principalmente, dos seus filhos. Trabalho para que
              você tome decisões com segurança: sem achismos, sem promessas
              vagas, sem juridiquês.
            </p>

            <div
              style={{
                background: C.champagne,
                border: `1px solid ${C.border}`,
                borderRadius: "8px",
                padding: "20px 24px",
                marginBottom: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: FB,
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: C.wine,
                  marginBottom: "16px",
                }}
              >
                Credenciais
              </p>
              {[
                "Graduada em Direito pela UniCathedral-MT",
                "Especialização em Direito de Família e Sucessões",
                "Atuação em Direito de Família e Sucessões",
                "Atendimento presencial em Barra do Garças – MT",
                "Atendimento online em todo o Brasil",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      color: C.gold,
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontFamily: FB,
                      fontSize: "14px",
                      color: C.text,
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="km-about-cta">
              <CTABtn
                href={WA(
                  "Olá, Dra. Karen! Quero falar com você sobre meu caso.",
                )}
              >
                Falar com a Dra. Karen
              </CTABtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─────────────────────────────────────────────── */
const steps = [
  {
    n: "01",
    title: "Você me conta sua situação",
    desc: "Conversa segura e sigilosa via WhatsApp. Você explica o que está acontecendo, sem julgamento, sem pressa, sem juridiquês.",
  },
  {
    n: "02",
    title: "Eu analiso o seu caso",
    desc: "Faço a avaliação jurídica completa da sua situação: o que a lei garante, quais são os caminhos possíveis e o que precisa ser feito primeiro.",
  },
  {
    n: "03",
    title: "Você recebe orientação clara",
    desc: "Entendimento objetivo sobre o seu caso, os próximos passos e uma proposta transparente de atuação. Sem surpresas.",
  },
];

function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="km-section"
      style={{ background: C.champagne }}
    >
      <div className="km-wrap">
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <Label>O processo</Label>
          <H2>O próximo passo é mais simples do que parece</H2>
          <GoldDivider />
          <p
            style={{
              fontFamily: FB,
              fontSize: "16px",
              color: C.muted,
              maxWidth: "500px",
              margin: "0 auto 56px",
              lineHeight: 1.7,
            }}
          >
            Você não precisa ter certeza de tudo antes de entrar em contato.
            Começa com uma conversa.
          </p>
        </div>

        <div className="km-how-grid">
          {steps.map((s, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: "8px",
                  padding: "36px 28px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: C.wine,
                    color: C.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FH,
                    fontWeight: 700,
                    fontSize: "22px",
                    marginBottom: "24px",
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontFamily: FH,
                    fontSize: "20px",
                    fontWeight: 700,
                    color: C.wine,
                    marginBottom: "12px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: FB,
                    fontSize: "15px",
                    color: C.muted,
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p
            style={{
              fontFamily: FH,
              fontWeight: 700,
              color: C.wine,
              fontSize: "18px",
              marginBottom: "28px",
              letterSpacing: ".5px",
            }}
          >
            Direto. Seguro. Resolutivo.
          </p>
          <CTABtn href={WA("Olá, Dra. Karen! Quero iniciar minha consulta.")}>
            Iniciar minha consulta
          </CTABtn>
          <p
            style={{
              fontFamily: FB,
              fontSize: "12px",
              color: C.muted,
              marginTop: "12px",
              letterSpacing: ".5px",
            }}
          >
            Atendimento online e presencial · Todo o Brasil
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─────────────────────────────────────────────── */
const testimonials = [
  {
    name: "M. S.",
    stars: 5,
    text: "A Dra. Karen me orientou em um momento muito difícil do meu divórcio. Ela foi clara, objetiva e sempre ao meu lado. Resultado excelente.",
  },
  {
    name: "R. A.",
    stars: 5,
    text: "Precisei resolver o inventário do meu pai com muita urgência. O atendimento foi online, rápido e sem burocracia desnecessária. Recomendo muito.",
  },
  {
    name: "F. C.",
    stars: 5,
    text: "Consegui a revisão da pensão alimentícia em poucos meses. A Dra. Karen explicou tudo com calma, sem juridiquês. Me senti protegida durante todo o processo.",
  },
  {
    name: "L. M.",
    stars: 5,
    text: "Estava perdida em um processo de guarda. Ela foi humana, competente e resolutiva. Minha filha está protegida graças ao seu trabalho.",
  },
];

function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="km-section"
      style={{ background: C.rose }}
    >
      <div className="km-wrap">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <Label>Depoimentos</Label>
          <H2>O que clientes dizem</H2>
          <GoldDivider />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Stars count={5} />
            <span style={{ fontFamily: FB, fontSize: "14px", color: C.muted }}>
              Avaliação média 5.0 · Google
            </span>
          </div>
        </div>

        <div className="km-test-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="km-card"
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: "8px",
                padding: "28px 24px",
              }}
            >
              <Stars count={t.stars} />
              <p
                style={{
                  fontFamily: FB,
                  fontSize: "14px",
                  color: C.text,
                  lineHeight: 1.75,
                  margin: "16px 0 20px",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              <p
                style={{
                  fontFamily: FB,
                  fontWeight: 700,
                  fontSize: "13px",
                  color: C.wine,
                }}
              >
                {t.name}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <CTABtn href={WA("Olá, Dra. Karen! Quero falar com a advogada.")}>
            Quero falar com a advogada
          </CTABtn>
        </div>
      </div>
    </section>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: C.gold, fontSize: "16px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

/* ─── FAQ ─────────────────────────────────────────────── */
const faqs = [
  {
    q: "Posso me separar mesmo sem o outro concordar?",
    a: "Sim. O divórcio é um direito individual: você não precisa da concordância do outro para dar início ao processo. Quando há consenso, o caminho é mais rápido; quando não há, o divórcio segue pela via judicial litigiosa, onde um juiz decide sobre os pontos em conflito (guarda, pensão, partilha de bens). Em todos os casos, você tem o direito de se separar.",
  },
  {
    q: "Quem sai de casa perde direitos no divórcio?",
    a: "Não necessariamente. Sair de casa não significa abrir mão dos direitos sobre o imóvel ou sobre o patrimônio construído durante o casamento. Porém, fazê-lo sem orientação jurídica pode gerar complicações. Antes de qualquer decisão, é fundamental conversar com uma advogada.",
  },
  {
    q: "Como é calculado o valor da pensão alimentícia?",
    a: "A pensão é fixada com base em dois critérios: as necessidades de quem recebe e a capacidade de quem paga. Não existe um percentual fixo em lei, o valor é analisado caso a caso. A pensão pode incluir alimentação, escola, plano de saúde, atividades e outras necessidades dos filhos. Se o valor atual está desatualizado, é possível pedir revisão.",
  },
  {
    q: "O pai pode tirar a guarda da mãe?",
    a: "A guarda é definida com base no melhor interesse da criança, não em punição para os pais. A mudança de guarda exige demonstração de que o ambiente atual prejudica o bem-estar do filho. Ter uma advogada acompanhando o processo é essencial para proteger seu papel como mãe.",
  },
  {
    q: "Sou obrigada a fazer o inventário?",
    a: "Sim, quando há bens a serem transmitidos, o inventário é obrigatório. A lei determina que o processo seja aberto em até 60 dias após o falecimento. O descumprimento gera multa sobre o imposto devido (ITCMD), que pode variar de 10% a 20%. Quando todos os herdeiros são maiores e estão de acordo, o inventário pode ser feito em cartório, mais rápido e menos burocrático.",
  },
  {
    q: "Posso fazer inventário sem ir ao cartório ou à Justiça presencialmente?",
    a: "Sim. O atendimento é 100% online. Toda a documentação pode ser enviada de forma digital, e o processo é acompanhado à distância. Você não precisa se deslocar para ter uma advogada cuidando do seu caso.",
  },
  {
    q: "Como funciona o atendimento online?",
    a: "O contato inicial é feito pelo WhatsApp. Você explica sua situação, eu analiso o caso juridicamente e apresento os caminhos possíveis de forma clara. Toda a comunicação, envio de documentos e acompanhamento do processo acontece de forma digital, segura e sigilosa.",
  },
  {
    q: "Quanto custa contratar uma advogada?",
    a: "Os honorários variam conforme a demanda e a complexidade do caso. Após a análise inicial, apresento uma proposta transparente, sem surpresas nem valores ocultos. Entre em contato para conversarmos sobre o seu caso.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="km-section" style={{ background: C.white }}>
      <div className="km-wrap-sm">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <Label>Dúvidas</Label>
          <H2>Perguntas frequentes</H2>
          <GoldDivider />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((f, i) => (
            <div
              key={i}
              style={{
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  padding: "22px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: FH,
                    fontSize: "17px",
                    fontWeight: 600,
                    color: open === i ? C.wine : C.text,
                    lineHeight: 1.4,
                    transition: "color .2s",
                  }}
                >
                  {f.q}
                </span>
                <span
                  style={{
                    color: C.wine,
                    fontSize: "22px",
                    fontWeight: 300,
                    flexShrink: 0,
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform .3s",
                  }}
                >
                  +
                </span>
              </button>
              <div className={`km-faq-panel ${open === i ? "open" : ""}`}>
                <p
                  style={{
                    fontFamily: FB,
                    fontSize: "15px",
                    color: C.muted,
                    lineHeight: 1.8,
                    paddingBottom: "24px",
                  }}
                >
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p
            style={{
              fontFamily: FB,
              fontSize: "15px",
              color: C.muted,
              marginBottom: "20px",
            }}
          >
            Não encontrou sua dúvida? Fale diretamente com a Dra. Karen.
          </p>
          <CTABtn
            href={WA("Olá, Dra. Karen! Tenho uma dúvida sobre meu caso.")}
          >
            Falar com a advogada
          </CTABtn>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${C.wineDark} 0%, ${C.wine} 100%)`,
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(191,162,106,.06)",
          pointerEvents: "none",
        }}
      />
      <div
        className="km-wrap-sm"
        style={{ textAlign: "center", position: "relative" }}
      >
        <Label light>Próximo passo</Label>
        <h2
          style={{
            fontFamily: FH,
            fontWeight: 700,
            fontSize: "clamp(30px, 4.5vw, 46px)",
            color: C.white,
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Sua tranquilidade depende de uma decisão bem tomada.
        </h2>
        <div
          style={{
            width: "48px",
            height: "3px",
            background: `linear-gradient(90deg,${C.gold},${C.goldLight})`,
            borderRadius: "2px",
            margin: "0 auto 28px",
          }}
        />
        <p
          style={{
            fontFamily: FB,
            fontSize: "17px",
            color: "rgba(255,255,255,.82)",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          E essa decisão começa com uma conversa. Fale comigo agora e entenda o
          que é possível fazer no seu caso.
        </p>
        <a
          href={WA("Olá, Dra. Karen! Quero falar com você sobre meu caso.")}
          target="_blank"
          rel="noopener noreferrer"
          className="km-btn-hover km-pulse-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: `linear-gradient(135deg, ${C.greenDark} 0%, ${C.greenCta} 100%)`,
            color: "#fff",
            padding: "18px 40px",
            borderRadius: "4px",
            fontFamily: FB,
            fontWeight: 700,
            fontSize: "16px",
            letterSpacing: ".8px",
            textTransform: "uppercase",
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          <WAIcon size={20} /> Falar com a Dra. Karen Agora →
        </a>
        <p
          style={{
            fontFamily: FB,
            fontSize: "12px",
            color: "rgba(255,255,255,.5)",
            letterSpacing: ".8px",
          }}
        >
          Atendimento online · Seguro e sigiloso · Brasil inteiro
        </p>
      </div>
    </section>
  );
}

/* ─── Contact + Footer ─────────────────────────────────────────────── */
function ContactFooter() {
  return (
    <footer
      id="contato"
      style={{ background: C.wineDark, padding: "80px 0 0" }}
    >
      <div className="km-wrap">
        <div className="km-footer-grid" style={{ paddingBottom: "64px" }}>
          {/* Col 1: Contact info */}
          <div>
            <p
              style={{
                fontFamily: FH,
                fontSize: "22px",
                fontWeight: 700,
                color: C.white,
                marginBottom: "8px",
              }}
            >
              Karen Moraes
            </p>
            <p
              style={{
                fontFamily: FB,
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: "28px",
              }}
            >
              Família & Sucessões
            </p>

            {[
              {
                icon: "📱",
                label: "(66) 99248-6203",
                href: "tel:+5566992486203",
              },
              {
                icon: "✉",
                label: "karenmoraes.jur@gmail.com",
                href: "mailto:karenmoraes.jur@gmail.com",
              },
              { icon: "📍", label: "Barra do Garças – MT", href: undefined },
              { icon: "🕐", label: "Segunda a sexta, 8h–18h", href: undefined },
              {
                icon: "🌐",
                label: "Atendimento online em todo o Brasil",
                href: undefined,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  marginBottom: "14px",
                }}
              >
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: FB,
                      fontSize: "14px",
                      color: "rgba(255,255,255,.75)",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: FB,
                      fontSize: "14px",
                      color: "rgba(255,255,255,.65)",
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            ))}

            <div style={{ marginTop: "28px", display: "flex", gap: "16px" }}>
              {[
                ["Instagram", "https://instagram.com/dra_karenmoraes"],
                ["TikTok", "https://tiktok.com/@karenmoraesadvogada"],
                ["Facebook", "https://facebook.com/karenmoraes"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: FB,
                    fontSize: "12px",
                    color: C.goldLight,
                    letterSpacing: "1px",
                    textDecoration: "none",
                    opacity: 0.85,
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Form */}
          <div>
            <p
              style={{
                fontFamily: FH,
                fontSize: "20px",
                fontWeight: 700,
                color: C.white,
                marginBottom: "6px",
              }}
            >
              Fale comigo
            </p>
            <p
              style={{
                fontFamily: FB,
                fontSize: "14px",
                color: "rgba(255,255,255,.55)",
                marginBottom: "24px",
              }}
            >
              Preencha abaixo e entrarei em contato em breve.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const msg = `Olá, Dra. Karen! Meu nome é ${data.get("nome")}. ${data.get("mensagem")}`;
                window.open(WA(msg), "_blank");
              }}
            >
              <input
                name="nome"
                className="km-input"
                placeholder="Seu nome"
                required
              />
              <input
                name="email"
                type="email"
                className="km-input"
                placeholder="Seu e-mail"
              />
              <input
                name="whatsapp"
                className="km-input"
                placeholder="Seu WhatsApp"
              />
              <textarea
                name="mensagem"
                className="km-input km-textarea"
                placeholder="Sua mensagem ou situação"
                required
              />
              <button
                type="submit"
                className="km-btn-hover"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: `linear-gradient(135deg, ${C.greenDark} 0%, ${C.greenCta} 100%)`,
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  fontFamily: FB,
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: ".8px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                <WAIcon size={16} /> Enviar mensagem →
              </button>
            </form>
          </div>

          {/* Col 3: Map */}
          <div>
            <p
              style={{
                fontFamily: FH,
                fontSize: "20px",
                fontWeight: 700,
                color: C.white,
                marginBottom: "6px",
              }}
            >
              Localização
            </p>
            <p
              style={{
                fontFamily: FB,
                fontSize: "13px",
                color: "rgba(255,255,255,.55)",
                marginBottom: "20px",
              }}
            >
              Rua Carlos Gomes, esq. c/ Raimundo Melo, 485, Campinas, Barra do
              Garças-MT
            </p>
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,.15)",
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Rua+Carlos+Gomes+485+Campinas+Barra+do+Garcas+MT+Brasil&output=embed&z=16"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do escritório"
              />
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.1)",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: FH,
              fontStyle: "italic",
              fontSize: "14px",
              color: "rgba(255,255,255,.5)",
            }}
          >
            "Decisões seguras em momentos que mudam tudo."
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/proposta-comercial/karenmoraes/politica-de-privacidade"
              style={{
                fontFamily: FB,
                fontSize: "12px",
                color: "rgba(255,255,255,.35)",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              Política de Privacidade
            </a>
            <span style={{ color: "rgba(255,255,255,.2)" }}>|</span>
            <p
              style={{
                fontFamily: FB,
                fontSize: "12px",
                color: "rgba(255,255,255,.35)",
              }}
            >
              © 2026 Karen Moraes Advocacia · OAB/MT 36197
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── WhatsApp Floating ─────────────────────────────────────────────── */
function WhatsAppFloat() {
  return (
    <a
      href={WA()}
      target="_blank"
      rel="noopener noreferrer"
      className="km-wa-float km-pulse-cta"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "24px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#25D366",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,.45)",
        zIndex: 250,
        textDecoration: "none",
        transition: "transform .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      aria-label="Falar no WhatsApp"
    >
      <WAIcon />
    </a>
  );
}

/* ─── Sticky Mobile CTA ─────────────────────────────────────────────── */
function StickyCTA() {
  return (
    <a
      href={WA()}
      target="_blank"
      rel="noopener noreferrer"
      className="km-sticky km-pulse-cta"
    >
      <WAIcon size={18} /> Falar com a Advogada →
    </a>
  );
}

/* ─── SVG Icons ─────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function WAIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffffff">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ─── Proposal Banner ────────────────────────────────────────────── */
function ProposalBanner() {
  const waLink = (
    <a
      href="https://lumasites.com.br"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: C.goldLight,
        textDecoration: "underline",
        textUnderlineOffset: "2px",
      }}
    >
      LumaSites.com.br
    </a>
  );
  return (
    <div className="km-banner" style={{ fontFamily: FB }}>
      <span className="km-banner-dot" />
      <span style={{ color: "rgba(255,255,255,0.92)", fontWeight: 600 }}>
        Proposta Comercial
      </span>
      <span className="km-banner-sep">·</span>
      {/* desktop: full text */}
      <span className="km-banner-full">
        Este site foi desenvolvido como prévia da proposta inicial pela {waLink}
      </span>
      {/* mobile: shortened text */}
      <span
        className="km-banner-short"
        style={{ fontSize: "10px", color: "rgba(255,255,255,.6)" }}
      >
        Prévia da proposta pela {waLink}
      </span>
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export default function KarenMoraesPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <ProposalBanner />
      <div className="km km-top-pad">
        <TopBar />
        <Navbar />
        <HeroSection />
        <IdentificationSection />
        <UrgencySection />
        <ServicesSection />
        <InventoryAlertSection />
        <AboutSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
        <ContactFooter />
        <StickyCTA />
      </div>
      <WhatsAppFloat />
    </>
  );
}
