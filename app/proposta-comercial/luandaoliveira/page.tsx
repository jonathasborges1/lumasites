"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

/* ─── Design Tokens ──────────────────────────────────────────────── */
const C = {
  bg: "#F1EBDD",
  bgWarm: "#EAE0CB",
  bgSection: "#F7F3EA",
  text: "#2F2B28",
  marrom: "#4A342A",
  marroomMid: "#6B4E42",
  marroomLight: "#8B6A5C",
  oliva: "#A9B39B",
  olivaDark: "#7A8A6C",
  terracota: "#B56E52",
  terracotaDark: "#96553B",
  greenWa: "#25D366",
  greenDark: "#1DA855",
  white: "#FEFCF8",
  muted: "#7A6A60",
  border: "rgba(80,80,80,0.12)",
  borderStrong: "rgba(80,80,80,0.22)",
};

const FH = "var(--lo-heading,'Cormorant Garamond',Georgia,serif)";
const FB = "var(--lo-body,'Montserrat',system-ui,sans-serif)";

/* ─── WhatsApp ───────────────────────────────────────────────────── */
const WA_NUM = "5562996294779";
const WA = (msg = "Olá, Luanda! Vim pelo seu site e gostaria de conhecer imóveis exclusivos em Goiânia.") =>
  `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;

/* ─── Images ─────────────────────────────────────────────────────── */
const IMG = {
  hero: "/images/luandaoliveira/portfolio/luanda-portfolio-06.jpg",
  portrait: "/images/luandaoliveira/portfolio/luanda-portfolio-02.jpg",
  about: "/images/luandaoliveira/portfolio/luanda-portfolio-03.jpg",
  prop1: "/images/luandaoliveira/portfolio/luanda-portfolio-04.jpg",
  prop2: "/images/luandaoliveira/portfolio/luanda-portfolio-05.jpg",
  prop3: "/images/luandaoliveira/portfolio/luanda-portfolio-07.jpg",
  ig1: "/images/luandaoliveira/instagram/luanda-instagram-01.jpg",
  ig2: "/images/luandaoliveira/instagram/luanda-instagram-02.jpg",
  ig3: "/images/luandaoliveira/instagram/luanda-instagram-03.jpg",
  ig4: "/images/luandaoliveira/instagram/luanda-instagram-04.jpg",
  ig5: "/images/luandaoliveira/instagram/luanda-instagram-05.jpg",
  ig6: "/images/luandaoliveira/instagram/luanda-instagram-06.jpg",
};

/* ─── Icons ──────────────────────────────────────────────────────── */
const IcoWA = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IcoIG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

/* ─── CSS ────────────────────────────────────────────────────────── */
const CSS = `
  /* overflow-x:hidden no body/html quebra position:fixed — clip mantém o clipe visual sem esse efeito colateral */
  html, body { overflow-x: clip !important }
  html { scroll-padding-top: 80px }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0 }
  img { display: block; max-width: 100% }
  a { text-decoration: none }

  .lo {
    font-family: ${FB};
    color: ${C.text};
    background: ${C.bg};
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── CONCEPT PREVIEW BANNER ──────────────────── */
  .lo-banner {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 300;
    height: 36px;
    background: #1A0E09;
    color: rgba(254,252,248,0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 16px;
    font-family: ${FB};
    font-size: 11.5px;
    font-weight: 500;
    letter-spacing: 0.04em;
  }
  .lo-banner-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .lo-banner-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: ${C.terracota};
    flex-shrink: 0;
  }
  .lo-banner-title {
    color: ${C.white};
    font-weight: 800;
    text-transform: uppercase;
    font-size: 10.5px;
    letter-spacing: 1.5px;
  }
  .lo-banner-sep { opacity: 0.38 }
  .lo-banner a {
    color: rgba(254,252,248,0.78);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.2s;
  }
  .lo-banner a:hover { color: ${C.white} }

  /* ── NAV ─────────────────────────────────────── */
  .lo-nav {
    position: fixed;
    top: 36px; left: 0; right: 0;
    z-index: 200;
    height: 70px;
    background: rgba(241,235,221,0.94);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid ${C.border};
    transition: box-shadow 0.3s;
  }
  .lo-nav.scrolled { box-shadow: 0 2px 24px rgba(74,52,42,0.09) }
  .lo-nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .lo-nav-logo {
    font-family: ${FH};
    font-size: 19px;
    font-weight: 600;
    color: ${C.marrom};
    line-height: 1.15;
    flex-shrink: 0;
  }
  .lo-nav-logo span {
    display: block;
    font-family: ${FB};
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    color: ${C.terracota};
    margin-top: 3px;
  }
  .lo-nav-links {
    display: none;
    gap: 28px;
    align-items: center;
  }
  .lo-nav-link {
    font-family: ${FB};
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: ${C.text};
    transition: color 0.2s;
  }
  .lo-nav-link:hover { color: ${C.terracota} }
  .lo-nav-cta {
    background: ${C.terracota};
    color: ${C.white};
    padding: 10px 22px;
    font-family: ${FB};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    border-radius: 1px;
    transition: background 0.2s, transform 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .lo-nav-cta:hover { background: ${C.terracotaDark}; transform: translateY(-1px) }
  .lo-menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: ${C.marrom};
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex-shrink: 0;
  }
  .lo-menu-btn span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: currentColor;
    transition: all 0.3s;
  }
  .lo-mobile-menu {
    display: none;
    position: fixed;
    top: 106px; left: 0; right: 0;
    background: ${C.white};
    border-bottom: 1px solid ${C.border};
    padding: 20px 24px 28px;
    z-index: 190;
    flex-direction: column;
    gap: 0;
    box-shadow: 0 12px 40px rgba(74,52,42,0.12);
  }
  .lo-mobile-menu.open { display: flex }
  .lo-mobile-link {
    font-family: ${FB};
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    color: ${C.text};
    padding: 15px 0;
    border-bottom: 1px solid ${C.border};
    display: block;
    transition: color 0.2s;
  }
  .lo-mobile-link:last-of-type { border-bottom: none }
  .lo-mobile-link:hover { color: ${C.terracota} }
  .lo-mobile-wa {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${C.greenWa};
    color: white;
    padding: 15px 20px;
    border-radius: 2px;
    font-family: ${FB};
    font-size: 13px;
    font-weight: 700;
    margin-top: 18px;
    transition: background 0.2s;
  }
  .lo-mobile-wa:hover { background: ${C.greenDark} }

  /* ── HERO ────────────────────────────────────── */
  .lo-hero {
    position: relative;
    height: 100svh;
    min-height: 600px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 72px;
    overflow: hidden;
    background: ${C.marrom};
  }
  .lo-hero-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center 35%;
    will-change: transform;
  }
  .lo-hero-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        to right,
        rgba(20,12,8,0.82) 0%,
        rgba(20,12,8,0.58) 42%,
        rgba(20,12,8,0.18) 100%
      ),
      linear-gradient(
        to top,
        rgba(20,12,8,0.94) 0%,
        rgba(20,12,8,0.66) 46%,
        rgba(20,12,8,0.32) 100%
      );
  }
  .lo-hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }
  .lo-hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: ${FB};
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${C.terracota};
    margin-bottom: 22px;
  }
  .lo-hero-eyebrow::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 1px;
    background: ${C.terracota};
    flex-shrink: 0;
  }
  .lo-hero-title {
    font-family: ${FH};
    font-size: clamp(30px, 5.5vw, 60px);
    font-weight: 500;
    line-height: 1.1;
    color: ${C.white};
    max-width: 800px;
    margin-bottom: 24px;
    letter-spacing: -0.5px;
    text-shadow: 0 3px 18px rgba(0,0,0,0.42);
  }
  .lo-hero-sub {
    font-family: ${FB};
    font-size: clamp(13px, 1.4vw, 15px);
    line-height: 1.75;
    color: rgba(254,252,248,0.86);
    max-width: 560px;
    margin-bottom: 40px;
    font-weight: 400;
    letter-spacing: 0.2px;
    text-shadow: 0 2px 12px rgba(0,0,0,0.36);
  }
  .lo-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; align-items: center }
  .lo-wa-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: ${C.greenWa};
    color: white;
    padding: 16px 28px;
    border-radius: 2px;
    font-family: ${FB};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.25s ease;
    box-shadow: 0 4px 24px rgba(37,211,102,0.28);
  }
  .lo-wa-btn:hover {
    background: ${C.greenDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(37,211,102,0.35);
  }
  .lo-hero-scroll {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(254,252,248,0.35);
    font-family: ${FB};
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 44px;
  }
  .lo-hero-scroll-line { width: 28px; height: 1px; background: rgba(254,252,248,0.25) }

  /* ── COMMONS ─────────────────────────────────── */
  .lo-wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px }
  .lo-section { padding: 96px 0 }
  .lo-section-alt { padding: 96px 0; background: ${C.bgSection} }
  .lo-section-dark { padding: 96px 0; background: ${C.marrom} }

  .lo-label {
    display: inline-block;
    font-family: ${FB};
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${C.terracota};
    margin-bottom: 16px;
  }
  .lo-label-light { color: ${C.oliva} }
  .lo-divider { width: 36px; height: 1px; background: ${C.terracota}; margin-bottom: 28px }
  .lo-divider-light { background: ${C.oliva} }
  .lo-h2 {
    font-family: ${FH};
    font-size: clamp(28px, 4vw, 46px);
    font-weight: 500;
    line-height: 1.12;
    color: ${C.marrom};
    margin-bottom: 16px;
    letter-spacing: -0.3px;
  }
  .lo-h2-light { color: ${C.white} }
  .lo-sub {
    font-family: ${FB};
    font-size: 14px;
    line-height: 1.75;
    color: ${C.muted};
    max-width: 540px;
    font-weight: 300;
  }

  /* ── PROFILE ─────────────────────────────────── */
  .lo-profile {
    position: relative;
    padding: 104px 0;
    background: ${C.bgWarm};
    overflow: hidden;
  }
  .lo-profile::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(74,52,42,0.08) 0, transparent 42%),
      radial-gradient(circle at 78% 18%, rgba(181,110,82,0.18), transparent 30%);
    pointer-events: none;
  }
  .lo-profile-grid {
    position: relative;
    display: grid;
    gap: 48px;
    align-items: center;
  }
  .lo-profile-media {
    position: relative;
    max-width: 520px;
  }
  .lo-profile-frame {
    position: relative;
    overflow: hidden;
    border: 1px solid ${C.borderStrong};
    background: ${C.marrom};
  }
  .lo-profile-frame img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: center top;
    filter: saturate(0.95) contrast(1.02);
  }
  .lo-profile-seal {
    position: absolute;
    right: -18px;
    bottom: 28px;
    width: 132px;
    height: 132px;
    border: 1px solid rgba(254,252,248,0.42);
    background: rgba(74,52,42,0.92);
    color: ${C.white};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 18px;
    font-family: ${FB};
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.8px;
    line-height: 1.55;
    text-transform: uppercase;
  }
  .lo-profile-content { max-width: 560px }
  .lo-profile-kicker {
    display: block;
    font-family: ${FB};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${C.terracotaDark};
    margin-bottom: 16px;
  }
  .lo-profile-title {
    font-family: ${FH};
    font-size: clamp(34px, 5vw, 58px);
    font-weight: 500;
    line-height: 1.04;
    color: ${C.marrom};
    margin-bottom: 24px;
  }
  .lo-profile-copy {
    font-family: ${FB};
    font-size: 14px;
    line-height: 1.9;
    color: ${C.muted};
    font-weight: 300;
    margin-bottom: 18px;
  }
  .lo-profile-signature {
    margin-top: 32px;
    padding-top: 26px;
    border-top: 1px solid ${C.borderStrong};
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .lo-profile-name {
    font-family: ${FH};
    font-size: 26px;
    font-weight: 600;
    color: ${C.marrom};
  }
  .lo-profile-role {
    font-family: ${FB};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    color: ${C.terracota};
  }

  /* ── ABOUT ───────────────────────────────────── */
  .lo-about-grid { display: grid; gap: 56px; align-items: center }
  .lo-about-body {
    font-family: ${FB};
    font-size: 14px;
    line-height: 1.9;
    color: ${C.muted};
    margin-top: 20px;
    font-weight: 300;
  }
  .lo-about-body + .lo-about-body { margin-top: 14px }
  .lo-about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: ${C.border};
    border: 1px solid ${C.border};
    margin-top: 44px;
  }
  .lo-stat {
    background: ${C.white};
    padding: 28px 20px;
    text-align: center;
    transition: background 0.3s;
  }
  .lo-stat:hover { background: ${C.bg} }
  .lo-stat-num {
    font-family: ${FH};
    font-size: 36px;
    font-weight: 600;
    color: ${C.marrom};
    line-height: 1;
    margin-bottom: 6px;
  }
  .lo-stat-label {
    font-family: ${FB};
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${C.muted};
  }
  .lo-about-visual { position: relative }
  .lo-about-img-frame {
    position: relative;
    border: 1px solid ${C.border};
    overflow: hidden;
  }
  .lo-about-img-frame img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
    filter: saturate(0.88) brightness(0.97);
    transition: transform 0.8s ease;
  }
  .lo-about-img-frame:hover img { transform: scale(1.03) }
  .lo-about-caption {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background: rgba(254,252,248,0.93);
    backdrop-filter: blur(10px);
    padding: 18px 22px;
    border-top: 2px solid ${C.terracota};
  }
  .lo-about-caption-text {
    font-family: ${FH};
    font-size: 15px;
    font-style: italic;
    color: ${C.marrom};
    line-height: 1.45;
  }
  .lo-about-decorator {
    position: absolute;
    top: -14px; right: -14px;
    width: 100px; height: 100px;
    border: 1px solid ${C.oliva};
    pointer-events: none;
    z-index: -1;
  }

  /* ── DIFERENCIAIS ────────────────────────────── */
  .lo-diffs-header { margin-bottom: 48px }
  .lo-diffs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    background: ${C.border};
    border: 1px solid ${C.border};
  }
  .lo-diff-card {
    background: ${C.white};
    padding: 36px 32px;
    cursor: default;
    transition: background 0.35s, transform 0.35s;
  }
  .lo-diff-card:hover { background: ${C.marrom} }
  .lo-diff-card:hover .lo-diff-icon { border-color: rgba(254,252,248,0.18); color: ${C.terracota} }
  .lo-diff-card:hover .lo-diff-title { color: ${C.white} }
  .lo-diff-card:hover .lo-diff-text { color: rgba(254,252,248,0.62) }
  .lo-diff-icon {
    width: 42px; height: 42px;
    border: 1px solid ${C.borderStrong};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: ${C.terracota};
    font-size: 16px;
    transition: all 0.35s;
    flex-shrink: 0;
  }
  .lo-diff-title {
    font-family: ${FH};
    font-size: 21px;
    font-weight: 600;
    color: ${C.marrom};
    margin-bottom: 10px;
    line-height: 1.2;
    transition: color 0.35s;
  }
  .lo-diff-text {
    font-family: ${FB};
    font-size: 13px;
    line-height: 1.72;
    color: ${C.muted};
    font-weight: 300;
    transition: color 0.35s;
  }

  /* ── CURADORIA ───────────────────────────────── */
  .lo-props-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    background: ${C.border};
    margin-top: 48px;
  }
  .lo-prop-card { background: ${C.bg}; overflow: hidden }
  .lo-prop-img { position: relative; overflow: hidden; height: 260px }
  .lo-prop-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.65s ease;
    filter: saturate(0.88);
  }
  .lo-prop-card:hover .lo-prop-img img { transform: scale(1.06) }
  .lo-prop-badge {
    position: absolute;
    top: 16px; left: 16px;
    background: ${C.marrom};
    color: ${C.white};
    font-family: ${FB};
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 6px 14px;
  }
  .lo-prop-info {
    padding: 28px 28px 32px;
    background: ${C.white};
    border-top: 1px solid ${C.border};
  }
  .lo-prop-tag {
    font-family: ${FB};
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: ${C.terracota};
    margin-bottom: 8px;
  }
  .lo-prop-name {
    font-family: ${FH};
    font-size: 22px;
    font-weight: 600;
    color: ${C.marrom};
    margin-bottom: 6px;
    line-height: 1.2;
  }
  .lo-prop-loc {
    font-family: ${FB};
    font-size: 12px;
    color: ${C.muted};
    font-weight: 400;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .lo-prop-feats {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-bottom: 22px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${C.border};
  }
  .lo-prop-feat {
    font-family: ${FB};
    font-size: 11px;
    color: ${C.muted};
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .lo-prop-feat::before { content: '·'; color: ${C.terracota} }
  .lo-prop-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: ${FB};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${C.marrom};
    padding-bottom: 2px;
    border-bottom: 1px solid ${C.marrom};
    transition: all 0.2s;
  }
  .lo-prop-link:hover { color: ${C.terracota}; border-color: ${C.terracota} }

  /* ── PROCESSO ────────────────────────────────── */
  .lo-steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    border: 1px solid ${C.border};
    margin-top: 48px;
    margin-bottom: 48px;
  }
  .lo-step {
    padding: 36px 32px;
    border-bottom: 1px solid ${C.border};
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 20px;
    align-items: start;
    background: ${C.white};
    transition: background 0.3s;
  }
  .lo-step:last-child { border-bottom: none }
  .lo-step:hover { background: ${C.bg} }
  .lo-step-num {
    font-family: ${FH};
    font-size: 52px;
    font-weight: 300;
    color: rgba(74,52,42,0.12);
    line-height: 1;
    padding-top: 4px;
  }
  .lo-step-title {
    font-family: ${FH};
    font-size: 22px;
    font-weight: 600;
    color: ${C.marrom};
    margin-bottom: 8px;
    line-height: 1.2;
  }
  .lo-step-text {
    font-family: ${FB};
    font-size: 13px;
    line-height: 1.75;
    color: ${C.muted};
    font-weight: 300;
  }
  .lo-blockquote {
    padding: 36px 36px 36px 44px;
    border-left: 3px solid ${C.terracota};
    background: ${C.white};
    position: relative;
  }
  .lo-blockquote::before {
    content: '"';
    position: absolute;
    top: 4px; left: 14px;
    font-family: ${FH};
    font-size: 80px;
    color: ${C.terracota};
    opacity: 0.22;
    line-height: 1;
    pointer-events: none;
  }
  .lo-blockquote-text {
    font-family: ${FH};
    font-size: clamp(20px, 2.8vw, 30px);
    font-style: italic;
    font-weight: 400;
    color: ${C.marrom};
    line-height: 1.4;
    position: relative;
    z-index: 1;
  }
  .lo-blockquote-attr {
    font-family: ${FB};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${C.terracota};
    margin-top: 18px;
  }

  /* ── INSTAGRAM ───────────────────────────────── */
  .lo-ig-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 36px;
  }
  .lo-ig-handle {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: ${FB};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${C.marroomMid};
    transition: color 0.2s;
  }
  .lo-ig-handle:hover { color: ${C.terracota} }
  .lo-ig-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
    background: ${C.border};
  }
  .lo-ig-post { position: relative; aspect-ratio: 1; overflow: hidden; background: ${C.bgWarm}; display: block }
  .lo-ig-post img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    filter: saturate(0.82) brightness(0.98);
  }
  .lo-ig-post:hover img { transform: scale(1.1) }
  .lo-ig-overlay {
    position: absolute; inset: 0;
    background: rgba(74,52,42,0);
    display: flex; align-items: center; justify-content: center;
    transition: all 0.35s;
  }
  .lo-ig-post:hover .lo-ig-overlay {
    background: rgba(74,52,42,0.46);
  }
  .lo-ig-overlay-icon {
    color: white;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s;
    font-size: 22px;
  }
  .lo-ig-post:hover .lo-ig-overlay-icon {
    opacity: 1;
    transform: scale(1);
  }
  .lo-ig-cta {
    margin-top: 32px;
    text-align: center;
  }
  .lo-outline-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid ${C.marrom};
    color: ${C.marrom};
    padding: 13px 32px;
    font-family: ${FB};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: all 0.25s;
  }
  .lo-outline-btn:hover { background: ${C.marrom}; color: ${C.white} }

  /* ── FINAL CTA ───────────────────────────────── */
  .lo-cta-inner { text-align: center; max-width: 700px; margin: 0 auto }
  .lo-cta-title {
    font-family: ${FH};
    font-size: clamp(28px, 4.5vw, 52px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.15;
    color: ${C.white};
    margin-bottom: 20px;
  }
  .lo-cta-sub {
    font-family: ${FB};
    font-size: 14px;
    font-weight: 300;
    color: rgba(254,252,248,0.55);
    margin-bottom: 44px;
    letter-spacing: 0.3px;
    line-height: 1.7;
  }
  .lo-cta-divider { width: 36px; height: 1px; background: ${C.oliva}; margin: 0 auto 32px }

  /* ── FOOTER ──────────────────────────────────── */
  .lo-footer { background: #180E09; padding: 60px 0 32px }
  .lo-footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    margin-bottom: 28px;
  }
  .lo-footer-brand {
    font-family: ${FH};
    font-size: 22px;
    font-weight: 600;
    color: ${C.white};
    margin-bottom: 6px;
    line-height: 1.2;
  }
  .lo-footer-tagline {
    font-family: ${FB};
    font-size: 11px;
    font-weight: 300;
    letter-spacing: 1.5px;
    color: rgba(254,252,248,0.35);
    text-transform: uppercase;
  }
  .lo-footer-col-label {
    font-family: ${FB};
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: rgba(254,252,248,0.3);
    margin-bottom: 16px;
  }
  .lo-footer-link {
    display: flex;
    align-items: center;
    gap: 7px;
    font-family: ${FB};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: rgba(254,252,248,0.5);
    padding: 6px 0;
    transition: color 0.2s;
  }
  .lo-footer-link:hover { color: ${C.terracota} }
  .lo-footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
  }
  .lo-footer-creci {
    font-family: ${FB};
    font-size: 10px;
    color: rgba(254,252,248,0.25);
    letter-spacing: 0.5px;
  }
  .lo-footer-sig {
    font-family: ${FB};
    font-size: 10px;
    color: rgba(254,252,248,0.18);
    letter-spacing: 0.5px;
  }
  .lo-footer-sig a { color: rgba(254,252,248,0.32); transition: color 0.2s }
  .lo-footer-sig a:hover { color: ${C.terracota} }

  /* ── REVEAL ANIMATION ────────────────────────── */
  .lo-reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.75s ease, transform 0.75s ease;
  }
  .lo-reveal.visible { opacity: 1; transform: translateY(0) }
  .lo-delay-1 { transition-delay: 0.1s }
  .lo-delay-2 { transition-delay: 0.2s }
  .lo-delay-3 { transition-delay: 0.3s }
  .lo-delay-4 { transition-delay: 0.4s }

  /* ── RESPONSIVE ──────────────────────────────── */
  @media (max-width: 599px) {
    .lo-banner { min-height: 42px; height: auto; font-size: 10.5px; line-height: 1.4; padding: 6px 12px }
    .lo-banner-inner { flex-wrap: wrap; gap: 4px }
  }

  @media (min-width: 600px) {
    .lo-ig-grid { grid-template-columns: repeat(3, 1fr) }
  }

  @media (min-width: 768px) {
    .lo-nav-links { display: flex }
    .lo-menu-btn { display: none }
    .lo-profile-grid { grid-template-columns: 0.9fr 1.1fr }
    .lo-about-grid { grid-template-columns: 1fr 1fr }
    .lo-diffs-grid { grid-template-columns: 1fr 1fr }
    .lo-props-grid { grid-template-columns: repeat(3, 1fr) }
    .lo-steps { grid-template-columns: repeat(2, 1fr) }
    .lo-step { border-right: 1px solid ${C.border}; border-bottom: 1px solid ${C.border} }
    .lo-step:nth-child(2n) { border-right: none }
    .lo-step:nth-last-child(-n+2) { border-bottom: none }
    .lo-footer-grid { grid-template-columns: 2fr 1fr 1fr }
    .lo-footer-bottom { flex-direction: row; justify-content: space-between; text-align: left }
  }

  @media (min-width: 1024px) {
    .lo-diffs-grid { grid-template-columns: repeat(5, 1fr) }
    .lo-steps { grid-template-columns: repeat(4, 1fr) }
    .lo-step { border-right: 1px solid ${C.border}; border-bottom: none }
    .lo-step:last-child { border-right: none }
    .lo-step:nth-child(2n) { border-right: 1px solid ${C.border} }
  }
`;

/* ─── Concept Preview Banner (Portal) ───────────────────────────── */
// Renderiza diretamente no document.body via portal para escapar do
// `.proposal-page-enter` que usa transform e quebra position:fixed.
function ConceptPreviewBanner() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div className="lo-banner" role="status">
      <span className="lo-banner-inner">
        <span className="lo-banner-dot" aria-hidden="true" />
        <span className="lo-banner-title">Prévia Conceitual</span>
        <span className="lo-banner-sep" aria-hidden="true">·</span>
        <span>
          Esta é uma proposta comercial elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
      </span>
    </div>,
    document.body
  );
}

/* ─── Page Component ─────────────────────────────────────────────── */
export default function LuandaOliveiraPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".lo-reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const navLinks = [
    { href: "#luanda", label: "Luanda" },
    { href: "#sobre", label: "Sobre" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#curadoria", label: "Curadoria" },
    { href: "#contato", label: "Contato" },
  ];

  const diferenciais = [
    {
      icon: "◆",
      title: "Curadoria Imobiliária",
      text: "Seleção criteriosa de imóveis com potencial real de valorização, alinhados ao perfil e objetivos patrimoniais de cada cliente.",
    },
    {
      icon: "◇",
      title: "Atendimento Consultivo",
      text: "Mais do que apresentar imóveis: orientação estratégica sobre localização, rentabilidade e tendências do mercado goianiense.",
    },
    {
      icon: "○",
      title: "Pós-venda Próximo",
      text: "O relacionamento não termina na assinatura. Suporte continuado nas etapas seguintes à aquisição do seu imóvel.",
    },
    {
      icon: "▷",
      title: "Rede de Construtoras",
      text: "Relacionamento direto com as principais incorporadoras de Goiânia, garantindo acesso privilegiado a lançamentos exclusivos.",
    },
    {
      icon: "◈",
      title: "Valorização Patrimonial",
      text: "Foco em regiões e empreendimentos com alto potencial de valorização — imóveis que representam evolução de patrimônio.",
    },
  ];

  const propriedades = [
    {
      img: IMG.prop1,
      badge: "Alto Padrão",
      tag: "Residencial",
      name: "Villaggio Viento",
      loc: "Setor Bueno · Goiânia",
      feats: ["Alto padrão", "Curadoria", "Sob consulta"],
      wamsg: "Olá, Luanda! Tenho interesse no Villaggio Viento no Setor Bueno. Pode me dar mais informações?",
    },
    {
      img: IMG.prop2,
      badge: "Lançamento",
      tag: "Condomínio Fechado",
      name: "Tonino Lamborghini Residence",
      loc: "Goiânia · GO",
      feats: ["Residence", "Offices", "Sob consulta"],
      wamsg: "Olá, Luanda! Quero saber mais sobre o Tonino Lamborghini Residence. Pode entrar em contato?",
    },
    {
      img: IMG.prop3,
      badge: "Investimento",
      tag: "Alto Potencial",
      name: "Condomínio de Alto Padrão",
      loc: "Região Metropolitana · GO",
      feats: ["Exclusivo", "Valorização", "Sob consulta"],
      wamsg: "Olá, Luanda! Me interesso por imóveis de alto padrão na região metropolitana. Podemos conversar?",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Consulta Inicial",
      text: "Entendemos profundamente seu perfil, necessidades e objetivos patrimoniais — sem pressa, com atenção real à sua história.",
    },
    {
      num: "02",
      title: "Curadoria Personalizada",
      text: "Selecionamos imóveis sob medida para o seu perfil. Apenas opções que façam sentido estratégico para você.",
    },
    {
      num: "03",
      title: "Acompanhamento Total",
      text: "Presença em visitas, negociações e trâmites para que você avance com clareza, segurança e apoio em cada decisão.",
    },
    {
      num: "04",
      title: "Pós-venda Ativo",
      text: "Suporte e relacionamento continuado após a aquisição. O compromisso é com sua satisfação a longo prazo.",
    },
  ];

  const igPosts = [
    { src: IMG.ig1, href: "https://www.instagram.com/p/DNjOD9Ly-Pv/", alt: "Publicação recente da Luanda Oliveira no Instagram" },
    { src: IMG.ig2, href: "https://www.instagram.com/p/B2Xr77-nvJb/", alt: "Publicação recente da Luanda Oliveira no Instagram" },
    { src: IMG.ig3, href: "https://www.instagram.com/p/DYDT_n6Migx/", alt: "Reel recente da Luanda Oliveira no Instagram" },
    { src: IMG.ig4, href: "https://www.instagram.com/p/DYn1w3XGxoj/", alt: "Publicação recente sobre Fazenda Villagio" },
    { src: IMG.ig5, href: "https://www.instagram.com/p/DYnzIgIkts3/", alt: "Publicação recente sobre lançamento Fazenda Villagio" },
    { src: IMG.ig6, href: "https://www.instagram.com/p/DYk_L0Vm25U/", alt: "Publicação recente da Luanda Oliveira no Instagram" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <ConceptPreviewBanner />

      <div className="lo">

        {/* ── NAV ── */}
        <nav className={`lo-nav${scrolled ? " scrolled" : ""}`} aria-label="Navegação principal">
          <div className="lo-nav-inner">
            <a href="#hero" className="lo-nav-logo" aria-label="Luanda Oliveira Imóveis">
              Luanda Oliveira
              <span>Imóveis · Goiânia</span>
            </a>

            <div className="lo-nav-links" role="menubar">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="lo-nav-link" role="menuitem">
                  {l.label}
                </a>
              ))}
              <a
                href={WA()}
                className="lo-nav-cta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp"
              >
                <IcoWA />
                WhatsApp
              </a>
            </div>

            <button
              className="lo-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        {/* ── MOBILE MENU ── */}
        <div
          className={`lo-mobile-menu${menuOpen ? " open" : ""}`}
          role="navigation"
          aria-label="Menu mobile"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="lo-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA()}
            className="lo-mobile-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IcoWA />
            Conversar no WhatsApp
          </a>
        </div>

        {/* ── HERO ── */}
        <section
          id="hero"
          className="lo-hero"
          aria-label="Seção principal"
          style={{ paddingTop: 106 }}
        >
          <div
            className="lo-hero-bg"
            style={{ backgroundImage: `url('${IMG.hero}')` }}
            aria-hidden="true"
          />
          <div className="lo-hero-overlay" aria-hidden="true" />
          <div className="lo-hero-content">
            <div className="lo-hero-eyebrow">Corretora Credenciada · CRECI/GO</div>
            <h1 className="lo-hero-title">
              Imóveis exclusivos para clientes que valorizam patrimônio, evolução e rentabilidade.
            </h1>
            <p className="lo-hero-sub">
              Especialista em imóveis de alto padrão em Goiânia e região metropolitana. Curadoria criteriosa, atendimento consultivo e relacionamento próximo em cada etapa.
            </p>
            <div className="lo-hero-ctas">
              <a
                href={WA("Olá, Luanda! Vim pelo seu site e gostaria de conhecer imóveis exclusivos em Goiânia.")}
                className="lo-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IcoWA />
                Conversar com Luanda
              </a>
            </div>
            <div className="lo-hero-scroll" aria-hidden="true">
              <div className="lo-hero-scroll-line" />
              Explorar
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section id="luanda" className="lo-profile" aria-label="Luanda Oliveira">
          <div className="lo-wrap lo-profile-grid">
            <div className="lo-profile-media lo-reveal">
              <div className="lo-profile-frame">
                <img
                  src={IMG.portrait}
                  alt="Luanda Oliveira, corretora de imóveis em Goiânia"
                  loading="lazy"
                />
              </div>
              <div className="lo-profile-seal" aria-hidden="true">
                Atendimento consultivo
              </div>
            </div>

            <div className="lo-profile-content lo-reveal lo-delay-1">
              <span className="lo-profile-kicker">À frente da curadoria</span>
              <h2 className="lo-profile-title">Luanda Oliveira</h2>
              <p className="lo-profile-copy">
                Uma presença próxima, estratégica e criteriosa para orientar clientes que buscam imóveis com potencial de valorização em Goiânia e na região metropolitana.
              </p>
              <p className="lo-profile-copy">
                Sua atuação combina escuta, curadoria e visão de mercado para transformar a escolha de um imóvel em uma decisão patrimonial mais segura.
              </p>
              <a
                href={WA("Olá, Luanda! Quero conversar sobre uma curadoria imobiliária personalizada.")}
                className="lo-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IcoWA />
                Falar com a Luanda
              </a>
              <div className="lo-profile-signature">
                <span className="lo-profile-name">Luanda Oliveira</span>
                <span className="lo-profile-role">Imóveis em Goiânia · Alto padrão</span>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="lo-section" aria-label="Sobre Luanda Oliveira">
          <div className="lo-wrap lo-about-grid">
            <div className="lo-about-text lo-reveal">
              <span className="lo-label">Sobre</span>
              <div className="lo-divider" />
              <h2 className="lo-h2">Uma nova forma de viver o mercado imobiliário</h2>
              <p className="lo-about-body">
                Luanda Oliveira é especialista em imóveis para clientes que valorizam localização, potencial de valorização e qualidade de vida em Goiânia e região metropolitana. Com uma abordagem consultiva e personalizada, ela transforma a busca pelo imóvel ideal em uma experiência de alto nível — entendendo não apenas as necessidades do momento, mas os objetivos patrimoniais de longo prazo.
              </p>
              <p className="lo-about-body">
                Seu trabalho vai além da intermediação: é curadoria, estratégia e relacionamento. Cada imóvel apresentado é escolhido com critério. Cada cliente atendido com proximidade real e inteligência imobiliária.
              </p>
              <div className="lo-about-stats lo-reveal lo-delay-2">
                {[
                  { num: "01", label: "Curadoria Estratégica" },
                  { num: "02", label: "Atendimento Consultivo" },
                  { num: "03", label: "Pós-venda Próximo" },
                  { num: "GYN", label: "Goiânia & Região" },
                ].map((s) => (
                  <div key={s.label} className="lo-stat">
                    <div className="lo-stat-num">{s.num}</div>
                    <div className="lo-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lo-about-visual lo-reveal lo-delay-1">
              <div className="lo-about-decorator" aria-hidden="true" />
              <div className="lo-about-img-frame">
                <img
                  src={IMG.about}
                  alt="Interior de imóvel de alto padrão em Goiânia"
                  loading="lazy"
                />
                <div className="lo-about-caption">
                  <p className="lo-about-caption-text">
                    "Projetos pensados para clientes que valorizam patrimônio, localização e qualidade de vida."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAIS ── */}
        <section id="diferenciais" className="lo-section-alt" aria-label="Diferenciais">
          <div className="lo-wrap">
            <div className="lo-diffs-header lo-reveal">
              <span className="lo-label">Diferenciais</span>
              <div className="lo-divider" />
              <h2 className="lo-h2">Por que a Luanda Oliveira?</h2>
              <p className="lo-sub">
                Patrimônio, Exclusividade e Valorização — em cada etapa da sua jornada imobiliária.
              </p>
            </div>
            <div className="lo-diffs-grid">
              {diferenciais.map((d, i) => (
                <div
                  key={d.title}
                  className={`lo-diff-card lo-reveal lo-delay-${(i % 4) + 1}`}
                >
                  <div className="lo-diff-icon" aria-hidden="true">{d.icon}</div>
                  <h3 className="lo-diff-title">{d.title}</h3>
                  <p className="lo-diff-text">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CURADORIA ── */}
        <section id="curadoria" className="lo-section" aria-label="Curadoria de Empreendimentos">
          <div className="lo-wrap">
            <div className="lo-reveal">
              <span className="lo-label">Curadoria</span>
              <div className="lo-divider" />
              <h2 className="lo-h2">Empreendimentos Selecionados</h2>
              <p className="lo-sub">
                Imóveis com localização estratégica, arquitetura contemporânea e alto potencial de valorização em Goiânia e região metropolitana.
              </p>
            </div>
            <div className="lo-props-grid">
              {propriedades.map((p, i) => (
                <article
                  key={p.name}
                  className={`lo-prop-card lo-reveal lo-delay-${i + 1}`}
                >
                  <div className="lo-prop-img">
                    <img src={p.img} alt={p.name} loading="lazy" />
                    <div className="lo-prop-badge">{p.badge}</div>
                  </div>
                  <div className="lo-prop-info">
                    <div className="lo-prop-tag">{p.tag}</div>
                    <h3 className="lo-prop-name">{p.name}</h3>
                    <p className="lo-prop-loc">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {p.loc}
                    </p>
                    <div className="lo-prop-feats">
                      {p.feats.map((f) => (
                        <span key={f} className="lo-prop-feat">{f}</span>
                      ))}
                    </div>
                    <a
                      href={WA(p.wamsg)}
                      className="lo-prop-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar disponibilidade →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESSO ── */}
        <section className="lo-section-alt" aria-label="Experiência consultiva">
          <div className="lo-wrap">
            <div className="lo-reveal">
              <span className="lo-label">Experiência Consultiva</span>
              <div className="lo-divider" />
              <h2 className="lo-h2">Como funciona o atendimento</h2>
              <p className="lo-sub">
                Uma jornada personalizada, do primeiro contato à conquista do imóvel que representa sua evolução patrimonial.
              </p>
            </div>
            <div className="lo-steps">
              {steps.map((s, i) => (
                <div key={s.num} className={`lo-step lo-reveal lo-delay-${i + 1}`}>
                  <span className="lo-step-num" aria-hidden="true">{s.num}</span>
                  <div>
                    <h3 className="lo-step-title">{s.title}</h3>
                    <p className="lo-step-text">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <blockquote className="lo-blockquote lo-reveal lo-delay-2">
              <p className="lo-blockquote-text">
                Relacionamentos de confiança geram grandes negócios.
              </p>
              <p className="lo-blockquote-attr">— Luanda Oliveira</p>
            </blockquote>
          </div>
        </section>

        {/* ── INSTAGRAM ── */}
        <section className="lo-section" aria-label="Presença digital e Instagram">
          <div className="lo-wrap">
            <div className="lo-reveal">
              <span className="lo-label">Presença Digital</span>
              <div className="lo-divider" />
              <div className="lo-ig-header">
                <h2 className="lo-h2" style={{ marginBottom: 0 }}>
                  Acompanhe no Instagram
                </h2>
                <a
                  href="https://www.instagram.com/luanda.oliveira.corretora/"
                  className="lo-ig-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IcoIG />
                  @luanda.oliveira.corretora
                </a>
              </div>
            </div>
            <div className="lo-ig-grid lo-reveal lo-delay-1">
              {igPosts.map((post, i) => (
                <a
                  key={post.href}
                  className="lo-ig-post"
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={post.src}
                    alt={post.alt}
                    loading="lazy"
                  />
                  <div className="lo-ig-overlay" aria-hidden="true">
                    <span className="lo-ig-overlay-icon">♥</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="lo-ig-cta lo-reveal lo-delay-2">
              <a
                href="https://www.instagram.com/luanda.oliveira.corretora/"
                className="lo-outline-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IcoIG />
                Seguir no Instagram
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contato" className="lo-section-dark" aria-label="Entre em contato">
          <div className="lo-wrap">
            <div className="lo-cta-inner lo-reveal">
              <span className="lo-label lo-label-light">Vamos conversar</span>
              <div className="lo-cta-divider" />
              <h2 className="lo-cta-title">
                Seu próximo imóvel pode representar mais do que uma conquista.
                Pode representar evolução patrimonial.
              </h2>
              <p className="lo-cta-sub">
                Agende uma conversa sem compromisso. Descubra como a Luanda pode transformar sua busca em uma experiência de alto padrão.
              </p>
              <a
                href={WA("Olá, Luanda! Gostaria de agendar uma conversa sobre imóveis de alto padrão em Goiânia.")}
                className="lo-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 auto", display: "inline-flex" }}
              >
                <IcoWA />
                Iniciar minha jornada
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="lo-footer" role="contentinfo">
          <div className="lo-wrap">
            <div className="lo-footer-grid">
              <div>
                <div className="lo-footer-brand">Luanda Oliveira Imóveis</div>
                <p className="lo-footer-tagline">Patrimônio · Exclusividade · Valorização</p>
              </div>
              <nav aria-label="Links do rodapé">
                <div className="lo-footer-col-label">Navegação</div>
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} className="lo-footer-link">
                    {l.label}
                  </a>
                ))}
              </nav>
              <div>
                <div className="lo-footer-col-label">Contato</div>
                <a
                  href={WA()}
                  className="lo-footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IcoWA />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/luanda.oliveira.corretora/"
                  className="lo-footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IcoIG />
                  Instagram
                </a>
                <span className="lo-footer-link" style={{ cursor: "default" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Goiânia · GO
                </span>
              </div>
            </div>
            <div className="lo-footer-bottom">
              <span className="lo-footer-creci">CRECI/GO · Goiânia, Goiás · Brasil</span>
              <span className="lo-footer-sig">
                Desenvolvido por{" "}
                <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
                  Luma Sites
                </a>
              </span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
