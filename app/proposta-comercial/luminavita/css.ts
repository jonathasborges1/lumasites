/**
 * Base CSS for the Lumina Vita Finance preview page. Class prefix: `lv-`.
 * Palette and typography reconstructed from the official site's own bundle
 * (oklch tokens: dark navy background, warm gold primary) — see
 * luminavita-analise-melhorias.md for the extraction notes.
 */
export const pageCss = `
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .lv-page, .lv-page * { box-sizing: border-box; }
  .lv-page {
    --navy: #0a0e1a;
    --navy-deep: #05070d;
    --navy-soft: #131a2c;
    --card: #151d33;
    --gold: #c9a15a;
    --gold-light: #e3c384;
    --gold-dim: rgba(201,161,90,.5);
    --ink: #f4efe4;
    --muted: #a6adc0;
    --muted-soft: #7c869c;
    --line: rgba(244,239,228,.12);
    min-height: 100vh;
    overflow-x: clip;
    background: var(--navy);
    color: var(--ink);
    font-family: var(--font-body, Outfit), Outfit, system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size: 17px;
    line-height: 1.6;
  }
  .lv-page h1, .lv-page h2, .lv-page h3 {
    font-family: var(--font-display, "Cormorant Garamond"), "Cormorant Garamond", Georgia, serif;
    font-weight: 600;
    letter-spacing: -0.005em;
    line-height: 1.16;
  }
  .lv-page ::selection { background: var(--gold-dim); color: var(--navy-deep); }
  .lv-page section[id] { scroll-margin-top: 132px; }
  .lv-page img { display: block; max-width: 100%; }
  .lv-page a { color: inherit; text-decoration: none; }
  .lv-page button { font: inherit; cursor: pointer; }
  .lv-page :focus-visible {
    outline: 3px solid var(--gold-light);
    outline-offset: 4px;
    border-radius: 6px;
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .lv-page *, .lv-page *::before, .lv-page *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
  .lv-wrap { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }
  .lv-skip {
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
  .lv-skip:focus { transform: translateY(0); }

  /* ── Preview bar ── */
  .lv-preview-bar {
    position: fixed; z-index: 80; inset: 0 0 auto; min-height: 52px;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
    padding: 7px 20px;
    background: #030409; color: rgba(255,255,255,.72);
    border-bottom: 1px solid rgba(255,255,255,.12);
    text-align: center;
  }
  a.lv-preview-back {
    position: absolute; left: 12px; top: 50%;
    min-width: 36px; min-height: 36px;
    display: inline-flex; align-items: center; justify-content: center;
    gap: 6px; padding: 0 10px; border-radius: 6px;
    color: rgba(255,255,255,.62);
    font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase;
    transform: translateY(-50%);
  }
  a.lv-preview-back:hover { background: rgba(255,255,255,.08); color: white; }
  a.lv-preview-site {
    position: absolute; right: 12px; top: 50%;
    min-height: 36px;
    display: inline-flex; align-items: center; justify-content: center;
    gap: 6px; padding: 0 10px;
    border: 1px solid rgba(201,161,90,.4); border-radius: 6px;
    color: var(--gold-light);
    font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase;
    white-space: nowrap;
    transform: translateY(-50%);
  }
  a.lv-preview-site:hover { background: rgba(201,161,90,.14); color: white; }
  .lv-preview-line {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    color: white; font-size: 11px; font-weight: 800; letter-spacing: .13em; text-transform: uppercase;
  }
  .lv-preview-sub { color: rgba(255,255,255,.48); font-size: 11px; line-height: 1.25; }
  .lv-preview-sub a { color: var(--gold-light); text-decoration: underline; text-underline-offset: 2px; }
  .lv-preview-sub a:hover { color: white; }
  .lv-preview-dot {
    width: 7px; height: 7px; display: inline-block; flex: none; border-radius: 999px;
    background: var(--gold-light);
    animation: lv-dot-pulse 1.7s ease-out infinite;
  }
  @keyframes lv-dot-pulse {
    0% { box-shadow: 0 0 0 0 rgba(201,161,90,.6); }
    100% { box-shadow: 0 0 0 11px rgba(201,161,90,0); }
  }

  /* ── Header ── */
  .lv-header {
    position: fixed; z-index: 70; inset: 52px 0 auto;
    background: rgba(10,14,26,.8);
    border-bottom: 1px solid var(--line);
    -webkit-backdrop-filter: blur(16px) saturate(1.3);
    backdrop-filter: blur(16px) saturate(1.3);
  }
  .lv-nav { height: 74px; display: flex; align-items: center; gap: 20px; }
  .lv-brand { display: inline-flex; flex-direction: column; line-height: 1.1; flex: none; }
  .lv-brand strong {
    font-family: var(--font-display, "Cormorant Garamond"), serif;
    font-size: 1.2rem; font-weight: 600; color: white; letter-spacing: .01em;
  }
  .lv-brand strong em { color: var(--gold-light); font-style: italic; }
  .lv-brand span { font-size: .62rem; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--muted-soft); }
  .lv-desktop-nav { margin-left: auto; display: none; align-items: center; gap: 22px; }
  .lv-desktop-nav a {
    min-height: 44px; display: inline-flex; align-items: center;
    color: rgba(244,239,228,.72);
    font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase;
    white-space: nowrap;
  }
  .lv-desktop-nav a:hover { color: var(--gold-light); }
  a.lv-nav-cta {
    display: none; min-height: 44px; align-items: center; justify-content: center; gap: 9px;
    padding: 0 18px; border-radius: 8px;
    background: linear-gradient(165deg, var(--gold-light), var(--gold));
    color: var(--navy-deep);
    font-size: 13px; font-weight: 800; flex: none; white-space: nowrap;
  }
  a.lv-nav-cta:hover { filter: brightness(1.06); }
  .lv-menu-button {
    margin-left: auto; width: 44px; height: 44px; flex: 0 0 44px;
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid var(--line); border-radius: 12px;
    background: rgba(255,255,255,.06); color: white;
    transition: border-color .18s ease, background .18s ease, transform .18s ease;
  }
  .lv-menu-button:hover { border-color: rgba(255,255,255,.3); background: rgba(255,255,255,.1); }
  .lv-menu-button:active { transform: scale(.96); }

  .lv-menu-overlay {
    position: fixed; z-index: 200; inset: 0; border: 0;
    background: rgba(2,3,7,.7);
    -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px);
    opacity: 0; visibility: hidden; pointer-events: none;
    transition: opacity .22s ease, visibility 0s linear .22s;
  }
  .lv-menu-overlay.is-open { opacity: 1; visibility: visible; pointer-events: auto; transition-delay: 0s; }
  .lv-mobile-drawer {
    position: fixed; z-index: 201; top: 0; right: 0;
    width: min(86vw, 340px); height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    background:
      radial-gradient(420px 260px at 100% 0%, rgba(201,161,90,.12), transparent 66%),
      linear-gradient(180deg, var(--navy-soft) 0%, var(--navy-deep) 100%);
    border-left: 1px solid var(--line);
    box-shadow: -24px 0 60px rgba(0,0,0,.5);
    transform: translateX(104%);
    visibility: hidden;
    transition: transform .24s cubic-bezier(.22, 1, .36, 1), visibility 0s linear .24s;
  }
  .lv-mobile-drawer.is-open { transform: translateX(0); visibility: visible; transition-delay: 0s; }
  .lv-drawer-head {
    min-height: 78px; display: flex; align-items: center; justify-content: space-between;
    gap: 18px; padding: 14px 18px 14px 22px;
    border-bottom: 1px solid var(--line);
  }
  .lv-drawer-head > div { display: grid; gap: 4px; }
  .lv-drawer-head span { color: white; font-size: .95rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  .lv-drawer-head small { color: var(--gold-light); font-size: .7rem; font-weight: 700; }
  .lv-drawer-head button {
    width: 44px; height: 44px; flex: 0 0 44px;
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid var(--line); border-radius: 12px;
    background: rgba(255,255,255,.06); color: white;
  }
  .lv-drawer-nav {
    min-height: 0; flex: 1; display: flex; flex-direction: column; gap: 2px;
    padding: 16px 18px max(20px, env(safe-area-inset-bottom));
    overflow-y: auto;
  }
  .lv-drawer-nav > a:not(.lv-drawer-cta) {
    min-height: 52px; display: flex; align-items: center; justify-content: space-between;
    gap: 16px; padding: 0 10px;
    border-bottom: 1px solid var(--line);
    color: rgba(244,239,228,.84);
    font-size: .95rem; font-weight: 650;
    transition: color .16s ease, padding-left .16s ease;
  }
  .lv-drawer-nav > a:not(.lv-drawer-cta):hover { padding-left: 14px; color: white; }
  .lv-drawer-nav > a:not(.lv-drawer-cta) svg { flex: none; color: var(--gold); }
  .lv-drawer-nav a.lv-drawer-cta {
    min-height: 52px; margin-top: auto;
    display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 0 16px; border-radius: 11px;
    background: linear-gradient(165deg, var(--gold-light), var(--gold));
    color: var(--navy-deep);
    font-size: .92rem; font-weight: 800;
    box-shadow: 0 14px 28px rgba(0,0,0,.32);
  }

  /* ── Shared bits ── */
  .lv-kicker {
    margin: 0 0 12px; color: var(--gold-light);
    font-size: 11px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
  }
  .lv-button {
    min-height: 52px; display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 0 24px; border-radius: 9px;
    font-size: 15px; font-weight: 800;
    transition: transform .16s ease, filter .16s ease;
  }
  .lv-button:hover { transform: translateY(-1px); }
  a.lv-button-primary {
    background: linear-gradient(165deg, var(--gold-light), var(--gold));
    color: var(--navy-deep);
    box-shadow: 0 14px 30px rgba(201,161,90,.22);
  }
  a.lv-button-primary:hover { filter: brightness(1.05); }
  a.lv-button-outline { border: 1.5px solid rgba(244,239,228,.32); color: var(--ink); }
  a.lv-button-outline:hover { border-color: var(--gold-light); color: var(--gold-light); background: rgba(255,255,255,.04); }

  .lv-badge-row { display: flex; flex-wrap: wrap; gap: 10px; }
  .lv-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 9px 14px; border: 1px solid var(--line); border-radius: 999px;
    background: rgba(255,255,255,.03); color: rgba(244,239,228,.86);
    font-size: .82rem; font-weight: 700;
  }
  .lv-badge svg { color: var(--gold-light); }

  /* ── Hero ── */
  .lv-hero { position: relative; padding: 172px 0 76px; overflow: hidden; background: var(--navy); }
  .lv-hero-bg { position: absolute; inset: 0; z-index: 0; }
  .lv-hero-bg-img {
    object-fit: cover;
    object-position: center 58%;
    opacity: .82;
    filter: saturate(.88) contrast(1.04);
  }
  .lv-hero-bg-overlay {
    position: absolute; inset: 0;
    background:
      radial-gradient(720px 440px at 82% 10%, rgba(201,161,90,.08), transparent 66%),
      linear-gradient(90deg, rgba(5,7,13,.96) 0%, rgba(5,7,13,.88) 38%, rgba(5,7,13,.58) 58%, rgba(5,7,13,.18) 78%, rgba(5,7,13,.36) 100%),
      linear-gradient(180deg, rgba(5,7,13,.38) 0%, rgba(5,7,13,.08) 48%, var(--navy) 100%);
  }
  .lv-hero-inner { position: relative; z-index: 1; max-width: 720px; }
  .lv-hero h1 { margin: 0 0 20px; font-size: clamp(2.1rem, 5.6vw, 3.4rem); color: white; }
  .lv-hero h1 em { font-style: italic; color: var(--gold-light); }
  .lv-hero-lead { margin: 0 0 30px; max-width: 620px; color: rgba(244,239,228,.82); font-size: 1.08rem; }
  .lv-hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 30px; }
  .lv-hero .lv-badge-row { margin-top: 6px; }

  /* ── Section divider ── */
  .lv-divider {
    width: min(1160px, calc(100% - 40px));
    margin: -30px auto 42px;
    display: flex; align-items: center; gap: 18px;
    color: var(--gold-dim);
  }
  .lv-divider::before, .lv-divider::after {
    content: ""; flex: 1; height: 1px;
    background: linear-gradient(90deg, transparent, var(--line));
  }
  .lv-divider::after { background: linear-gradient(90deg, var(--line), transparent); }
  .lv-divider span {
    width: 42px; height: 42px; flex: none;
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid var(--gold-dim);
    border-radius: 999px;
    background: linear-gradient(160deg, rgba(201,161,90,.16), rgba(201,161,90,.02));
    color: var(--gold-light);
  }

  /* ── Staggered reveal for grid children ── */
  .lv-motion-ready .lv-reveal .lv-stagger > * {
    opacity: 0; transform: translateY(16px);
    transition: opacity .5s ease, transform .5s ease;
  }
  .lv-motion-ready .lv-reveal.is-visible .lv-stagger > * { opacity: 1; transform: none; }
  .lv-motion-ready .lv-reveal.is-visible .lv-stagger > *:nth-child(1) { transition-delay: .04s; }
  .lv-motion-ready .lv-reveal.is-visible .lv-stagger > *:nth-child(2) { transition-delay: .1s; }
  .lv-motion-ready .lv-reveal.is-visible .lv-stagger > *:nth-child(3) { transition-delay: .16s; }
  .lv-motion-ready .lv-reveal.is-visible .lv-stagger > *:nth-child(4) { transition-delay: .22s; }
  .lv-motion-ready .lv-reveal.is-visible .lv-stagger > *:nth-child(5) { transition-delay: .28s; }
  .lv-motion-ready .lv-reveal.is-visible .lv-stagger > *:nth-child(6) { transition-delay: .34s; }
  .lv-motion-ready .lv-reveal.is-visible .lv-stagger > *:nth-child(7) { transition-delay: .4s; }

  /* ── Sections ── */
  .lv-section { padding: 76px 0; }
  .lv-section-soft { background: var(--navy-soft); }
  .lv-section-head { max-width: 720px; margin-bottom: 42px; }
  .lv-section-head h2 { margin: 0 0 16px; font-size: clamp(1.7rem, 3.4vw, 2.4rem); color: white; }
  .lv-section-head h2 em { color: var(--gold-light); font-style: italic; }
  .lv-section-head p { margin: 0; color: var(--muted); font-size: 1rem; line-height: 1.7; }

  /* ── Editorial narrative ── */
  .lv-editorial-wrap { max-width: 920px; }
  .lv-editorial-wrap > h2,
  .lv-perspective h2 {
    margin: 0 0 30px; max-width: 860px;
    color: white; font-size: clamp(2rem, 4vw, 3rem);
  }
  .lv-editorial-copy { display: grid; gap: 16px; color: var(--muted); font-size: 1rem; line-height: 1.78; }
  .lv-editorial-copy p { margin: 0; }
  .lv-symptoms { display: grid; gap: 1px; margin: 38px 0 26px; border: 1px solid var(--line); border-radius: 14px; overflow: hidden; background: var(--line); }
  .lv-symptom { display: flex; align-items: flex-start; gap: 16px; padding: 19px 22px; background: rgba(9,14,26,.94); }
  .lv-symptom svg { flex: none; margin-top: 3px; color: var(--gold-light); }
  .lv-symptom p { margin: 0; color: rgba(244,239,228,.86); font-size: .94rem; }
  .lv-editorial-close { margin: 0; color: var(--muted); line-height: 1.75; }
  .lv-statement {
    margin: 48px 0 0; padding: 34px 24px; border-block: 1px solid var(--gold-dim);
    color: var(--gold-light); text-align: center;
    font-family: var(--font-display, "Cormorant Garamond"), serif;
    font-size: clamp(1.45rem, 3vw, 2rem); font-style: italic; line-height: 1.3;
  }
  .lv-perspective-grid { display: grid; gap: 36px; align-items: start; }
  .lv-perspective h2 { margin-bottom: 0; }
  .lv-perspective h2 em { color: var(--gold-light); font-style: normal; }
  .lv-solution-head { max-width: 800px; }
  .lv-solution-head h2 { font-size: clamp(2rem, 4vw, 3rem); }
  .lv-subheading { margin: 52px 0 20px; color: var(--muted-soft); font-size: .76rem; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }

  /* ── Five pillars ── */
  .lv-pillars-grid { display: grid; border-top: 1px solid var(--line); }
  .lv-pillar { position: relative; padding: 26px 4px 28px; border-bottom: 1px solid var(--line); }
  .lv-pillar > span { display: block; margin-bottom: 12px; color: var(--gold); font-family: var(--font-display, "Cormorant Garamond"), serif; font-size: 1rem; }
  .lv-pillar h3 { margin: 0 0 7px; color: white; font-size: 1.1rem; }
  .lv-pillar p { margin: 0; color: var(--muted); font-size: .88rem; line-height: 1.6; }

  /* ── Method ── */
  .lv-method-grid { display: grid; gap: 10px; }
  .lv-method-item {
    min-width: 0; display: flex; align-items: center; gap: 18px;
    padding: 18px; border: 1px solid var(--line); border-radius: 12px;
    background: rgba(10,14,26,.48);
  }
  .lv-method-item > strong {
    width: 48px; height: 48px; flex: 0 0 48px;
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid var(--gold-dim); border-radius: 999px;
    color: var(--gold-light); font-family: var(--font-display, "Cormorant Garamond"), serif; font-size: 1.45rem;
  }
  .lv-method-item h3 { margin: 0 0 2px; color: white; font-size: .98rem; font-family: var(--font-body, Outfit), sans-serif; }
  .lv-method-item p { margin: 0; color: var(--muted-soft); font-size: .78rem; }

  /* ── Journey ── */
  .lv-journey-list { position: relative; display: grid; gap: 0; max-width: 940px; }
  .lv-journey-list::before { content: ""; position: absolute; top: 30px; bottom: 30px; left: 24px; width: 1px; background: linear-gradient(var(--gold), var(--gold-dim), transparent); }
  .lv-journey-item { position: relative; display: grid; grid-template-columns: 50px 1fr; gap: 22px; padding: 0 0 42px; }
  .lv-journey-marker { position: relative; z-index: 1; padding-top: 4px; }
  .lv-journey-marker span {
    width: 48px; height: 48px; display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid var(--gold-dim); border-radius: 999px; background: var(--navy);
    color: var(--gold-light); font-family: var(--font-display, "Cormorant Garamond"), serif; font-weight: 700;
  }
  .lv-journey-content { padding: 2px 0 32px; border-bottom: 1px solid var(--line); }
  .lv-journey-content small { display: block; margin-bottom: 4px; color: var(--gold-light); font-size: .72rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
  .lv-journey-content h3 { margin: 0 0 10px; color: white; font-size: 1.35rem; }
  .lv-journey-content > p { margin: 0; color: var(--muted); font-size: .92rem; line-height: 1.65; }
  .lv-journey-content blockquote { margin: 16px 0 0; color: rgba(227,195,132,.84); font-family: var(--font-display, "Cormorant Garamond"), serif; font-size: 1.05rem; font-style: italic; }
  .lv-results-layout { display: grid; gap: 10px 54px; align-items: start; }

  .lv-audience-grid { display: grid; gap: 16px; }
  .lv-audience-card {
    padding: 26px 24px; border: 1px solid var(--line); border-radius: 14px;
    background: linear-gradient(145deg, rgba(24,34,60,.86), rgba(16,23,40,.72));
    box-shadow: 0 18px 44px rgba(0,0,0,.15), inset 0 1px rgba(255,255,255,.03);
    -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  }
  .lv-audience-card svg { color: var(--gold-light); margin-bottom: 14px; }
  .lv-audience-card h3 { margin: 0 0 8px; font-size: 1.02rem; color: white; font-family: var(--font-body, Outfit), sans-serif; font-weight: 700; }
  .lv-audience-card p { margin: 0; color: var(--muted); font-size: .9rem; line-height: 1.6; }
  .lv-audience-not {
    margin-top: 22px; padding: 18px 22px; border-radius: 12px;
    display: grid; gap: 5px;
    background: rgba(255,255,255,.02); border: 1px dashed var(--line);
    color: var(--muted-soft); font-size: .88rem;
  }
  .lv-audience-not strong { color: var(--muted); }
  .lv-audience-not span { color: var(--muted-soft); line-height: 1.6; }

  .lv-section-visual { position: relative; overflow: hidden; }
  .lv-section-visual-bg { position: absolute; inset: 0; z-index: 0; }
  .lv-section-visual-bg-img { object-fit: cover; opacity: .24; }
  .lv-section-visual-bg-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, var(--navy) 0%, rgba(10,14,26,.82) 30%, rgba(10,14,26,.82) 70%, var(--navy) 100%);
  }
  .lv-section-visual > .lv-wrap { position: relative; z-index: 1; }

  .lv-results-grid { display: grid; gap: 14px; }
  .lv-result-item {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 20px 22px; border-radius: 12px;
    background: linear-gradient(100deg, rgba(21,29,51,.88), rgba(16,23,40,.64));
    border: 1px solid rgba(244,239,228,.12);
    -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  }
  .lv-result-item svg { color: var(--gold-light); flex: none; margin-top: 2px; }
  .lv-result-item p { margin: 0; color: rgba(244,239,228,.88); font-size: .94rem; line-height: 1.6; }

  .lv-format-grid { display: grid; gap: 16px; }
  .lv-format-item {
    padding: 24px 22px; border-radius: 14px;
    background: linear-gradient(145deg, rgba(21,29,51,.86), rgba(9,14,26,.72));
    border: 1px solid rgba(244,239,228,.13);
    box-shadow: 0 18px 44px rgba(0,0,0,.17);
    -webkit-backdrop-filter: blur(11px); backdrop-filter: blur(11px);
  }
  .lv-format-item svg { color: var(--gold-light); margin-bottom: 14px; }
  .lv-format-item h3 { margin: 0 0 8px; font-size: 1rem; color: white; font-family: var(--font-body, Outfit), sans-serif; font-weight: 700; }
  .lv-format-item p { margin: 0; color: var(--muted); font-size: .88rem; line-height: 1.6; }

  .lv-founder-grid { display: grid; gap: 36px; align-items: center; }
  .lv-founder-photo {
    position: relative; border-radius: 18px; overflow: hidden;
    border: 1px solid rgba(227,195,132,.24); max-width: 340px;
    box-shadow: 0 28px 70px rgba(0,0,0,.4), 0 0 90px rgba(201,161,90,.14);
  }
  .lv-founder-photo::after {
    content: ""; position: absolute; inset: -10px; z-index: 1;
    border: 1px solid var(--gold-dim); border-radius: 22px;
    pointer-events: none;
  }
  .lv-founder-copy .lv-kicker { color: var(--gold-light); }
  .lv-founder-copy h2 { margin: 0 0 6px; font-size: clamp(1.5rem, 2.8vw, 2rem); color: white; }
  .lv-quote-block { position: relative; margin: 16px 0 18px; }
  .lv-quote-mark { position: absolute; top: -20px; left: -8px; z-index: 0; color: var(--gold-dim); opacity: .55; }
  .lv-founder-copy blockquote {
    position: relative; z-index: 1; margin: 0; padding: 0 0 0 18px; border-left: 2px solid var(--gold);
    color: rgba(244,239,228,.9); font-size: 1.05rem; line-height: 1.65; font-style: italic;
    font-family: var(--font-display, "Cormorant Garamond"), serif;
  }
  .lv-founder-intro { margin: 16px 0 18px; color: var(--muted); font-size: .92rem; line-height: 1.7; }
  .lv-founder-traits { display: grid; gap: 1px; margin-top: 24px; border: 1px solid var(--line); border-radius: 12px; overflow: hidden; background: var(--line); }
  .lv-founder-traits span { display: grid; gap: 2px; padding: 14px 16px; background: rgba(10,14,26,.94); color: var(--muted); font-size: .82rem; }
  .lv-founder-traits strong { color: var(--gold-light); font-size: .68rem; letter-spacing: .12em; text-transform: uppercase; }

  .lv-faq-grid { display: grid; gap: 36px; }
  .lv-faq-list { display: grid; gap: 12px; }
  .lv-faq-item {
    border: 1px solid rgba(244,239,228,.12); border-radius: 12px; overflow: hidden;
    background: linear-gradient(110deg, rgba(21,29,51,.88), rgba(12,18,32,.72));
    box-shadow: 0 14px 36px rgba(0,0,0,.14);
    -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  }
  .lv-faq-item button {
    width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px;
    padding: 18px 20px; background: transparent; border: 0; text-align: left;
    font-size: .98rem; font-weight: 700; color: white;
  }
  .lv-faq-item button svg { flex: none; transition: transform .2s ease; color: var(--gold-light); }
  .lv-faq-item button[aria-expanded="true"] svg { transform: rotate(180deg); }
  .lv-faq-answer { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
  .lv-faq-answer.is-open { max-height: 400px; }
  .lv-faq-answer div { padding: 0 20px 18px; }
  .lv-faq-answer p { margin: 0; color: var(--muted); font-size: .92rem; line-height: 1.7; }

  .lv-final { position: relative; padding: 84px 0; background: var(--navy-deep); text-align: center; overflow: hidden; }
  .lv-final::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 2;
    background: linear-gradient(90deg, transparent 4%, var(--gold-dim) 50%, transparent 96%);
  }
  .lv-final-bg { position: absolute; inset: 0; z-index: 0; }
  .lv-final-bg-img { object-fit: cover; opacity: .3; }
  .lv-final-bg-overlay {
    position: absolute; inset: 0;
    background: radial-gradient(680px 420px at 50% 0%, rgba(10,14,26,.35), var(--navy-deep) 78%);
  }
  .lv-final-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
  .lv-final h2 { margin: 0 0 16px; color: white; font-size: clamp(1.7rem, 3.4vw, 2.3rem); }
  .lv-final p { margin: 0 0 28px; color: rgba(244,239,228,.76); font-size: 1rem; line-height: 1.7; }
  .lv-final-note { margin-top: 18px; color: var(--muted-soft); font-size: .82rem; }

  .lv-footer { background: #030409; color: rgba(244,239,228,.68); padding: 56px 0 26px; }
  .lv-footer-grid { display: grid; gap: 36px; }
  .lv-footer-top { display: grid; gap: 30px; }
  .lv-footer-brand strong { display: block; font-family: var(--font-display, "Cormorant Garamond"), serif; font-size: 1.2rem; color: white; margin-bottom: 6px; }
  .lv-footer-brand strong em { color: var(--gold-light); font-style: italic; }
  .lv-footer-brand span { font-size: .82rem; color: rgba(244,239,228,.5); }
  .lv-footer-links { display: grid; gap: 8px; align-content: start; }
  .lv-footer-links strong { color: white; font-size: .8rem; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px; }
  .lv-footer-links span, .lv-footer-links a { font-size: .84rem; color: rgba(244,239,228,.54); }
  .lv-footer-links a:hover { color: var(--gold-light); }
  .lv-footer-legal { padding-top: 28px; border-top: 1px solid var(--line); }
  .lv-footer-legal p { margin: 0; font-size: .78rem; line-height: 1.6; color: rgba(244,239,228,.45); }
  .lv-footer-credit {
    margin: 26px 0 0; padding-top: 20px; border-top: 1px solid var(--line);
    display: flex; flex-wrap: wrap; gap: 6px; font-size: .78rem; color: rgba(244,239,228,.4);
  }
  .lv-footer-credit a { color: var(--gold-light); font-weight: 800; }
  .lv-footer-credit a:hover { color: white; }

  a.lv-floating-apply {
    position: fixed; z-index: 90;
    right: max(18px, env(safe-area-inset-right));
    bottom: max(18px, env(safe-area-inset-bottom));
    display: inline-flex; align-items: center; gap: 8px;
    padding: 0 18px; height: 52px; border-radius: 999px;
    background: linear-gradient(165deg, var(--gold-light), var(--gold));
    color: var(--navy-deep);
    font-size: .84rem; font-weight: 800;
    box-shadow: 0 14px 34px rgba(0,0,0,.4);
    transition: transform .16s ease;
  }
  a.lv-floating-apply:hover { transform: scale(1.04); }

  .lv-motion-ready .lv-reveal { opacity: 0; transform: translateY(22px); transition: opacity .6s ease, transform .6s ease; }
  .lv-motion-ready .lv-reveal.is-visible { opacity: 1; transform: none; }

  @media (max-width: 719px) {
    .lv-hero-bg-img { object-position: 63% center; opacity: .62; }
    .lv-hero-bg-overlay {
      background:
        linear-gradient(90deg, rgba(5,7,13,.86), rgba(5,7,13,.62)),
        linear-gradient(180deg, rgba(5,7,13,.32), rgba(5,7,13,.24) 48%, var(--navy) 100%);
    }
    .lv-preview-back span { display: none; }
    .lv-preview-site span { display: none; }
    .lv-preview-site { border: 0; }
    .lv-floating-apply span { display: none; }
    .lv-floating-apply { width: 52px; padding: 0; justify-content: center; }
  }
  @media (min-width: 640px) {
    .lv-audience-grid { grid-template-columns: repeat(3, 1fr); }
    .lv-pillars-grid { grid-template-columns: repeat(2, 1fr); gap: 0 24px; }
    .lv-method-grid { grid-template-columns: repeat(2, 1fr); }
    .lv-format-grid { grid-template-columns: repeat(2, 1fr); }
    .lv-founder-traits { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 860px) {
    .lv-perspective-grid { grid-template-columns: 1.15fr .85fr; gap: 72px; }
    .lv-results-layout { grid-template-columns: .85fr 1.15fr; }
    .lv-faq-grid { grid-template-columns: 0.8fr 1.2fr; }
    .lv-founder-grid { grid-template-columns: 0.7fr 1.3fr; }
    .lv-footer-top { grid-template-columns: 1.4fr 1fr 1fr; }
  }
  @media (min-width: 1024px) {
    .lv-desktop-nav { display: flex; }
    .lv-nav-cta { display: inline-flex; }
    .lv-menu-button { display: none; }
    .lv-method-grid { grid-template-columns: repeat(7, 1fr); gap: 0; border-block: 1px solid var(--line); }
    .lv-method-item { min-height: 190px; display: block; padding: 24px 15px; border: 0; border-right: 1px solid var(--line); border-radius: 0; background: transparent; }
    .lv-method-item:first-child { border-left: 1px solid var(--line); }
    .lv-method-item > strong { margin-bottom: 22px; }
  }
`;
