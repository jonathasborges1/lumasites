/**
 * Base CSS shared by all three Alves Barbosa preview pages (hub, pessoa-fisica,
 * pessoa-juridica). Each page appends its own page-specific rules after this
 * string in its `<style jsx global>` block. Class prefix: `ab-`.
 */
export const baseCss = `
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .ab-page, .ab-page * { box-sizing: border-box; }
  .ab-page {
    --navy: #0f1d33;
    --navy-deep: #0a1526;
    --blue: #2c4a7c;
    --blue-soft: #4f74ab;
    --blue-pale: #dbe4f1;
    --gold: #b08d57;
    --gold-light: #c9a978;
    --paper: #f4f6f9;
    --white: #ffffff;
    --ink: #1a1e26;
    --muted: #4c5563;
    --line: #e0e4ec;
    --wa: #25c366;
    min-height: 100vh;
    overflow-x: clip;
    background: var(--white);
    color: var(--ink);
    font-family: var(--font-body, Inter), Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size: 17px;
    line-height: 1.6;
  }
  .ab-page h1, .ab-page h2 {
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 700;
    letter-spacing: -0.008em;
    line-height: 1.16;
  }
  .ab-page h3 {
    font-family: var(--font-body, Inter), Inter, system-ui, sans-serif;
    font-weight: 800;
    letter-spacing: -0.015em;
    line-height: 1.2;
  }
  .ab-page ::selection { background: var(--blue-pale); color: var(--navy); }
  .ab-page section[id] { scroll-margin-top: 140px; }
  .ab-page img { display: block; max-width: 100%; }
  .ab-page a { color: inherit; text-decoration: none; }
  .ab-page button { font: inherit; cursor: pointer; }
  .ab-page :focus-visible {
    outline: 3px solid color-mix(in srgb, var(--blue) 70%, white);
    outline-offset: 4px;
    border-radius: 6px;
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .ab-page *, .ab-page *::before, .ab-page *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
  .ab-wrap { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }
  .ab-skip {
    position: fixed;
    z-index: 999;
    top: 8px; left: 8px;
    transform: translateY(-140%);
    background: var(--gold-light);
    color: var(--navy-deep);
    padding: 10px 14px;
    font-weight: 800;
    border-radius: 6px;
  }
  .ab-skip:focus { transform: translateY(0); }

  .ab-preview-bar {
    position: fixed;
    z-index: 80;
    inset: 0 0 auto;
    min-height: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 7px 20px;
    background: #05070c;
    color: rgba(255,255,255,.72);
    border-bottom: 1px solid rgba(255,255,255,.12);
    text-align: center;
  }
  .ab-preview-back {
    position: absolute;
    left: 12px; top: 50%;
    min-width: 36px; min-height: 36px;
    display: inline-flex; align-items: center; justify-content: center;
    gap: 6px; padding: 0 10px;
    border-radius: 6px;
    color: rgba(255,255,255,.62);
    font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase;
    transform: translateY(-50%);
  }
  .ab-preview-back:hover { background: rgba(255,255,255,.08); color: white; }
  .ab-preview-site {
    position: absolute;
    right: 12px; top: 50%;
    min-height: 36px;
    display: inline-flex; align-items: center; justify-content: center;
    gap: 6px; padding: 0 10px;
    border: 1px solid rgba(201,169,120,.4);
    border-radius: 6px;
    color: var(--gold-light);
    font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase;
    white-space: nowrap;
    transform: translateY(-50%);
  }
  .ab-preview-site:hover { background: rgba(201,169,120,.14); color: white; }
  .ab-preview-line {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    color: white; font-size: 11px; font-weight: 800; letter-spacing: .13em; text-transform: uppercase;
  }
  .ab-preview-sub { color: rgba(255,255,255,.48); font-size: 11px; line-height: 1.25; }
  .ab-preview-sub a { color: var(--gold-light); text-decoration: underline; text-underline-offset: 2px; }
  .ab-preview-sub a:hover { color: white; }
  .ab-preview-dot {
    width: 7px; height: 7px;
    display: inline-block; flex: none;
    border-radius: 999px;
    background: var(--gold-light);
    box-shadow: 0 0 0 0 rgba(201,169,120,.72);
    animation: ab-dot-pulse 1.7s ease-out infinite;
  }
  @keyframes ab-dot-pulse {
    0% { box-shadow: 0 0 0 0 rgba(201,169,120,.6); }
    100% { box-shadow: 0 0 0 11px rgba(201,169,120,0); }
  }

  .ab-header {
    position: fixed;
    z-index: 70;
    inset: 52px 0 auto;
    background: rgba(15,29,51,.75);
    border-bottom: 1px solid rgba(255,255,255,.1);
    -webkit-backdrop-filter: blur(16px) saturate(1.3);
    backdrop-filter: blur(16px) saturate(1.3);
  }
  .ab-nav { height: 74px; display: flex; align-items: center; gap: 20px; }
  .ab-brand { display: inline-flex; align-items: center; flex: none; min-height: 48px; }
  .ab-brand-mark {
    width: 150px;
    display: inline-flex;
    align-items: center;
    border-radius: 6px;
    background: white;
    padding: 6px 10px;
  }
  .ab-brand-mark img { width: 100%; height: auto; }
  .ab-desktop-nav { margin-left: auto; display: none; align-items: center; gap: 16px; }
  .ab-desktop-nav a {
    min-height: 44px; display: inline-flex; align-items: center;
    color: rgba(255,255,255,.72);
    font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase;
    white-space: nowrap;
  }
  .ab-desktop-nav a:hover { color: var(--gold-light); }
  .ab-nav-sep { width: 1px; height: 22px; background: rgba(255,255,255,.16); }
  .ab-audience-link {
    padding: 7px 12px !important;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 999px;
    background: rgba(255,255,255,.04);
  }
  .ab-audience-link.is-active {
    border-color: var(--gold-light);
    background: rgba(201,169,120,.16);
    color: var(--gold-light) !important;
  }
  .ab-nav-cta {
    display: none;
    min-height: 44px; align-items: center; justify-content: center; gap: 9px;
    padding: 0 16px; border-radius: 8px;
    background: var(--wa); color: white;
    font-size: 13px; font-weight: 900; flex: none; white-space: nowrap;
  }
  .ab-nav-cta:hover { background: #1fae57; }
  .ab-menu-button {
    margin-left: auto;
    width: 44px; height: 44px; flex: 0 0 44px;
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 12px;
    background: rgba(255,255,255,.07);
    color: white;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
    transition: border-color .18s ease, background .18s ease, transform .18s ease;
  }
  .ab-menu-button:hover { border-color: rgba(255,255,255,.32); background: rgba(255,255,255,.11); }
  .ab-menu-button:active { transform: scale(.96); }
  .ab-menu-button:focus-visible, .ab-drawer-head button:focus-visible, .ab-drawer-nav a:focus-visible {
    outline: 2px solid var(--gold-light); outline-offset: 3px;
  }

  .ab-menu-overlay {
    position: fixed; z-index: 200; inset: 0; border: 0;
    background: rgba(2,4,8,.66);
    -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px);
    opacity: 0; visibility: hidden; pointer-events: none;
    transition: opacity .22s ease, visibility 0s linear .22s;
  }
  .ab-menu-overlay.is-open { opacity: 1; visibility: visible; pointer-events: auto; transition-delay: 0s; }
  .ab-mobile-drawer {
    position: fixed; z-index: 201; top: 0; right: 0;
    width: min(86vw, 340px); height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    background:
      radial-gradient(420px 260px at 100% 0%, rgba(201,169,120,.1), transparent 66%),
      linear-gradient(180deg, #101f38 0%, #060c17 100%);
    border-left: 1px solid rgba(255,255,255,.12);
    box-shadow: -24px 0 60px rgba(0,0,0,.48);
    transform: translateX(104%);
    visibility: hidden;
    transition: transform .24s cubic-bezier(.22, 1, .36, 1), visibility 0s linear .24s;
  }
  .ab-mobile-drawer.is-open { transform: translateX(0); visibility: visible; transition-delay: 0s; }
  .ab-drawer-head {
    min-height: 78px; display: flex; align-items: center; justify-content: space-between;
    gap: 18px; padding: 14px 18px 14px 22px;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .ab-drawer-head > div { display: grid; gap: 4px; }
  .ab-drawer-head span { color: white; font-size: 1rem; font-weight: 900; letter-spacing: .1em; text-transform: uppercase; }
  .ab-drawer-head small { color: var(--gold-light); font-size: .7rem; font-weight: 700; }
  .ab-drawer-head button {
    width: 44px; height: 44px; flex: 0 0 44px;
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid rgba(255,255,255,.18); border-radius: 12px;
    background: rgba(255,255,255,.07); color: white;
  }
  .ab-drawer-nav {
    min-height: 0; flex: 1; display: flex; flex-direction: column; gap: 2px;
    padding: 16px 18px max(20px, env(safe-area-inset-bottom));
    overflow-y: auto;
  }
  .ab-drawer-caption {
    margin: 14px 0 2px; padding: 0 10px;
    color: rgba(255,255,255,.4); font-size: .7rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
  }
  .ab-drawer-nav > a:not(.ab-drawer-cta) {
    min-height: 52px; display: flex; align-items: center; justify-content: space-between;
    gap: 16px; padding: 0 10px;
    border-bottom: 1px solid rgba(255,255,255,.07);
    color: rgba(255,255,255,.84);
    font-size: .95rem; font-weight: 750;
    transition: color .16s ease, padding-left .16s ease;
  }
  .ab-drawer-nav > a:not(.ab-drawer-cta):hover { padding-left: 14px; color: white; }
  .ab-drawer-nav > a:not(.ab-drawer-cta) svg { flex: none; color: var(--blue-soft); }
  .ab-drawer-nav > a.is-active { color: var(--gold-light); }
  .ab-drawer-nav .ab-drawer-cta {
    min-height: 52px; margin-top: auto;
    display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 0 16px; border-radius: 11px;
    background: var(--wa); color: white;
    font-size: .92rem; font-weight: 900;
    box-shadow: 0 14px 28px rgba(0,0,0,.28);
  }

  .ab-kicker {
    margin: 0 0 12px;
    color: var(--gold-light);
    font-size: 12px; font-weight: 900; letter-spacing: .16em; text-transform: uppercase;
  }
  .ab-actions { display: flex; flex-wrap: wrap; gap: 12px; }
  .ab-button {
    min-height: 52px; display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 0 22px; border-radius: 9px;
    font-size: 15px; font-weight: 900;
    transition: transform .16s ease, background .16s ease, color .16s ease;
  }
  .ab-button:hover { transform: translateY(-1px); }
  .ab-button-wa {
    background: linear-gradient(165deg, #2dd571 0%, #1fae57 100%);
    color: white;
    box-shadow: 0 10px 24px rgba(6,7,9,.32);
  }
  .ab-button-wa:hover { background: linear-gradient(165deg, #2bc96b 0%, #189a4c 100%); box-shadow: 0 14px 30px rgba(6,7,9,.42); }
  .ab-button-outline { border: 1.5px solid rgba(255,255,255,.38); color: white; }
  .ab-button-outline:hover { border-color: var(--gold-light); color: var(--gold-light); background: rgba(255,255,255,.06); }

  /* Video hero (autoplay/muted/loop background video + scrim overlay) */
  .ab-video-hero {
    position: relative;
    padding: 178px 0 84px;
    min-height: 640px;
    display: flex;
    align-items: center;
    color: white;
    overflow: hidden;
    background: var(--navy);
  }
  .ab-video-hero-media { position: absolute; inset: 0; z-index: 0; }
  .ab-video-hero-video,
  .ab-video-hero-poster {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  .ab-video-hero-poster { transition: opacity .5s ease; z-index: 1; }
  .ab-video-hero-overlay {
    position: absolute; inset: 0; z-index: 2;
    background:
      linear-gradient(180deg, rgba(8,14,26,.86) 0%, rgba(10,17,32,.72) 42%, rgba(10,17,32,.9) 100%),
      linear-gradient(100deg, rgba(6,10,20,.5) 0%, transparent 55%);
  }
  .ab-video-hero-content { position: relative; z-index: 3; max-width: 700px; }
  .ab-video-hero h1 { margin: 0 0 18px; font-size: clamp(2rem, 5vw, 3.1rem); }
  .ab-video-hero-lead { margin: 0 0 28px; color: rgba(255,255,255,.86); font-size: 1.08rem; max-width: 600px; }
  .ab-hero-service { margin: 14px 0 0; color: rgba(255,255,255,.6); font-size: .92rem; }
  .ab-trust-strip { margin-top: 26px; display: flex; flex-wrap: wrap; gap: 10px; }
  .ab-trust-strip span {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 9px 14px; border: 1px solid rgba(255,255,255,.16); border-radius: 999px;
    background: rgba(255,255,255,.06); color: rgba(255,255,255,.88);
    font-size: .84rem; font-weight: 700;
  }
  .ab-trust-strip svg { color: var(--gold-light); }

  .ab-section { padding: 72px 0; }
  .ab-section-soft { background: var(--paper); }

  .ab-divider {
    width: min(1160px, calc(100% - 40px));
    margin: -18px auto 26px;
    display: flex; align-items: center; gap: 18px;
    color: var(--blue-soft);
  }
  .ab-divider::before, .ab-divider::after {
    content: ""; flex: 1; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(76,85,99,.38));
  }
  .ab-divider::after { background: linear-gradient(90deg, rgba(76,85,99,.38), transparent); }
  .ab-divider span {
    width: 42px; height: 42px; flex: none;
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid rgba(76,85,99,.32);
    border-radius: 999px;
    background: linear-gradient(160deg, rgba(255,255,255,.95) 0%, rgba(219,228,241,.95) 100%);
    color: var(--blue);
  }

  .ab-section-head { max-width: 700px; margin-bottom: 40px; }
  .ab-section-head .ab-kicker { color: var(--blue); }
  .ab-section-head h2 { margin: 0 0 14px; font-size: clamp(1.6rem, 3.2vw, 2.3rem); color: var(--navy); }
  .ab-section-head p { margin: 0; color: var(--muted); font-size: .98rem; }

  .ab-card-grid { display: grid; gap: 18px; }
  .ab-card {
    display: flex; flex-direction: column;
    padding: 28px 24px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--white);
    box-shadow: 0 10px 30px rgba(15,29,51,.05);
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .ab-card:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(15,29,51,.09); }
  .ab-icon {
    width: 48px; height: 48px;
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: 12px;
    background: var(--blue-pale);
    color: var(--blue);
    margin-bottom: 16px;
  }
  .ab-card h3 { margin: 0 0 8px; font-size: 1.1rem; color: var(--navy); }
  .ab-card p { margin: 0 0 16px; color: var(--muted); font-size: .92rem; }
  .ab-card ul { list-style: none; margin: 0 0 20px; padding: 0; display: grid; gap: 8px; flex: 1; max-height: 340px; overflow-y: auto; padding-right: 4px; }
  .ab-card li { display: flex; align-items: flex-start; gap: 8px; color: var(--ink); font-size: .86rem; }
  .ab-card li svg { color: var(--blue); flex: none; margin-top: 2px; }
  .ab-card > a {
    display: inline-flex; align-items: center; gap: 6px;
    color: var(--blue); font-weight: 800; font-size: .88rem;
  }
  .ab-card > a:hover { gap: 10px; }

  .ab-check-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
  .ab-check-list li { display: flex; align-items: flex-start; gap: 10px; color: var(--ink); font-size: .92rem; }
  .ab-check-list li svg { color: var(--blue); flex: none; margin-top: 2px; }

  .ab-faq-grid { display: grid; gap: 36px; }
  .ab-faq-list { display: grid; gap: 12px; }
  .ab-faq-item { border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
  .ab-faq-item button {
    width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px;
    padding: 18px 20px; background: var(--white); border: 0; text-align: left;
    font-size: .98rem; font-weight: 800; color: var(--navy);
  }
  .ab-faq-item button svg { flex: none; transition: transform .2s ease; color: var(--blue); }
  .ab-faq-item button[aria-expanded="true"] svg { transform: rotate(180deg); }
  .ab-faq-answer { max-height: 0; overflow: hidden; transition: max-height .25s ease; background: var(--paper); }
  .ab-faq-answer.is-open { max-height: 400px; }
  .ab-faq-answer div { padding: 0 20px 18px; }
  .ab-faq-answer p { margin: 0; color: var(--muted); font-size: .92rem; line-height: 1.7; }

  .ab-final { position: relative; padding: 80px 0; background: var(--navy); color: white; }
  .ab-final::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent 4%, rgba(201,169,120,.45) 50%, transparent 96%);
  }
  .ab-final-grid { display: grid; gap: 40px; }
  .ab-final .ab-kicker { color: var(--gold-light); }
  .ab-final h2 { margin: 0 0 16px; color: white; font-size: clamp(1.6rem, 3.2vw, 2.2rem); }
  .ab-final > .ab-wrap > div > p { color: rgba(255,255,255,.76); font-size: .98rem; margin: 0 0 24px; }
  .ab-contact-list { list-style: none; margin: 26px 0 0; padding: 0; display: grid; gap: 14px; }
  .ab-contact-list li { display: flex; align-items: flex-start; gap: 12px; font-size: .92rem; color: rgba(255,255,255,.86); }
  .ab-contact-list li svg { color: var(--gold-light); flex: none; margin-top: 2px; }
  .ab-social { display: flex; gap: 10px; margin-top: 24px; }
  .ab-social a {
    width: 40px; height: 40px;
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 999px;
    color: white;
    transition: background .15s ease, border-color .15s ease;
  }
  .ab-social a:hover { background: rgba(255,255,255,.1); border-color: var(--gold-light); }
  .ab-final-form { padding: 28px 24px; border-radius: 16px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.14); }
  .ab-final-form h3 { margin: 0 0 18px; color: white; font-size: 1.1rem; }
  .ab-form { display: grid; gap: 16px; }
  .ab-form label { display: grid; gap: 8px; font-size: .82rem; font-weight: 700; color: rgba(255,255,255,.82); }
  .ab-form label small { font-weight: 500; color: rgba(255,255,255,.5); }
  .ab-form input, .ab-form textarea {
    padding: 12px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,.18);
    background: rgba(255,255,255,.06); color: white; font: inherit; resize: vertical;
  }
  .ab-form input::placeholder, .ab-form textarea::placeholder { color: rgba(255,255,255,.4); }
  .ab-form input:focus, .ab-form textarea:focus { outline: 2px solid var(--gold-light); outline-offset: 2px; }
  .ab-form-note { margin: 0; color: rgba(255,255,255,.5); font-size: .78rem; line-height: 1.5; }

  .ab-footer { background: var(--navy-deep); color: rgba(255,255,255,.7); padding: 56px 0 26px; }
  .ab-footer-grid { display: grid; gap: 40px; }
  .ab-footer-top { display: grid; gap: 30px; }
  .ab-footer-brand { display: flex; flex-direction: column; gap: 14px; }
  .ab-footer-brand img { width: 170px; height: auto; background: white; padding: 6px 10px; border-radius: 6px; }
  .ab-footer-brand strong { display: block; color: white; font-size: 1rem; margin-bottom: 4px; }
  .ab-footer-brand span { font-size: .82rem; color: rgba(255,255,255,.56); }
  .ab-footer-links { display: grid; gap: 8px; align-content: start; }
  .ab-footer-links strong { color: white; font-size: .84rem; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 4px; }
  .ab-footer-links span, .ab-footer-links a { font-size: .84rem; color: rgba(255,255,255,.58); }
  .ab-footer-links a:hover { color: var(--gold-light); }
  .ab-footer-legal { padding-top: 30px; border-top: 1px solid rgba(255,255,255,.1); }
  .ab-footer-legal h2 { font-size: .78rem; text-transform: uppercase; letter-spacing: .1em; color: rgba(255,255,255,.5); margin: 0 0 14px; }
  .ab-footer-legal-grid { display: grid; gap: 12px; }
  .ab-footer-legal-grid p { margin: 0; font-size: .8rem; line-height: 1.6; color: rgba(255,255,255,.5); }
  .ab-footer-credit {
    margin: 30px 0 0; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.08);
    display: flex; flex-wrap: wrap; gap: 6px; font-size: .78rem; color: rgba(255,255,255,.42);
  }
  .ab-footer-credit a { color: var(--gold-light); font-weight: 800; }
  .ab-footer-credit a:hover { color: white; }

  .ab-floating-wa {
    position: fixed; z-index: 90;
    right: max(18px, env(safe-area-inset-right));
    bottom: max(18px, env(safe-area-inset-bottom));
    width: 56px; height: 56px;
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: 999px;
    background: var(--wa);
    color: white;
    box-shadow: 0 14px 34px rgba(0,0,0,.28);
    transition: transform .16s ease;
  }
  .ab-floating-wa:hover { transform: scale(1.06); }

  .ab-motion-ready .ab-reveal { opacity: 0; transform: translateY(22px); transition: opacity .6s ease, transform .6s ease; }
  .ab-motion-ready .ab-reveal.is-visible { opacity: 1; transform: none; }

  @media (max-width: 719px) {
    .ab-preview-back span { display: none; }
    .ab-preview-site span { display: none; }
    .ab-preview-site { border: 0; }
  }
  @media (min-width: 640px) {
    .ab-card-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 860px) {
    .ab-faq-grid { grid-template-columns: 0.8fr 1.2fr; }
    .ab-final-grid { grid-template-columns: 1.1fr 0.9fr; }
    .ab-footer-top { grid-template-columns: 1.3fr 0.8fr 1fr 1fr; }
  }
  @media (min-width: 1024px) {
    .ab-desktop-nav { display: flex; }
    .ab-nav-cta { display: inline-flex; }
    .ab-menu-button { display: none; }
    .ab-card-grid { grid-template-columns: repeat(3, 1fr); }
  }
`;
