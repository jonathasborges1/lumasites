"use client";

import { GlowButton } from "@/components/GlowButton";
import { Fireflies } from "@/components/Fireflies";
import { StarField } from "@/components/StarField";
import { Aurora } from "@/components/Aurora";
import { LightOrb } from "@/components/LightOrb";
import { Counter } from "@/components/Counter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { whatsappLink } from "@/utils/whatsapp";
import { trackWhatsAppClick } from "@/utils/analytics";
import { MessageCircle, ArrowDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const pathname = usePathname();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const now = new Date();
  const currentMonth = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(now);
  const currentMonthNum = String(now.getMonth() + 1).padStart(2, "0");
  const currentYear = now.getFullYear();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const syncViewport = () => setIsDesktop(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced || !mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener("change", syncViewport);
      };
    }

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        const el = parallaxRef.current;
        if (el) el.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      mediaQuery.removeEventListener("change", syncViewport);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] md:min-h-[92vh] flex items-center overflow-hidden"
    >
      <div
        ref={parallaxRef}
        className="absolute inset-0 md:will-change-transform"
      >
        <StarField count={isDesktop ? 18 : 6} />
        <Aurora intensity="soft" />
        <div className="absolute inset-0 bg-grad-hero" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(10,14,26,0.36)_0%,rgba(10,14,26,0.64)_42%,rgba(10,14,26,0.92)_100%)]"
      />

      <Fireflies count={isDesktop ? 4 : 0} />

      {/* Orbe central pulsante */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] pointer-events-none opacity-10 sm:opacity-12 scale-[0.78] sm:scale-100"
      >
        <LightOrb size={180} />
      </div>

      {/* Luma — personagem sugerida por contorno no desktop */}
      <HeroStarCanopy />

      <div
        aria-hidden="true"
        className="absolute left-4 top-[24%] hidden lg:block rounded-full border border-glow-cyan/10 bg-midnight/28 px-4 py-2 font-display text-[10px] uppercase tracking-[0.28em] text-glow-aqua/45 backdrop-blur-sm"
      >
        SEO local
      </div>
      <div
        aria-hidden="true"
        className="absolute right-16 top-[30%] hidden lg:block rounded-full border border-white/10 bg-midnight/24 px-4 py-2 font-display text-[10px] uppercase tracking-[0.28em] text-ink-primary/45 backdrop-blur-sm"
      >
        Site rápido
      </div>
      <div
        aria-hidden="true"
        className="absolute left-16 bottom-[24%] hidden lg:block rounded-full border border-accent-green/15 bg-midnight/24 px-4 py-2 font-display text-[10px] uppercase tracking-[0.28em] text-accent-green/50 backdrop-blur-sm"
      >
        Mobile first
      </div>

      {isDesktop && (
        <LumaMascotOutline />
      )}

      {/* silhueta inferior */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-40 md:h-56"
        style={{
          background:
            "linear-gradient(to top, #070B14 0%, rgba(7,11,20,0.6) 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-5 md:px-8 lg:px-12 xl:px-20 pt-24 pb-12 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal duration={800}>
            <div className="inline-flex max-w-full items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 rounded-full border border-white/8 bg-midnight/78 px-3.5 sm:px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-35 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
              </span>
              <span className="font-display text-xs uppercase tracking-[0.1em] sm:tracking-[0.3em] text-ink-primary/85 text-center leading-snug">
                <span className="sm:hidden">
                  Atendimento Especializado em Manaus · Agenda limitada em{" "}
                  <span className="text-accent-green">{currentMonth}</span> (
                  {currentMonthNum}/{currentYear})
                </span>
                <span className="hidden sm:inline">
                  Atendimento em Manaus · Agenda limitada para o mês de{" "}
                  <span className="text-accent-green">{currentMonth}</span> (
                  {currentMonthNum}/{currentYear})
                </span>
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} duration={900}>
            <h1
              className="font-display uppercase text-[2.35rem] sm:text-4xl md:text-5xl lg:text-6xl leading-[0.92] sm:leading-[0.95] text-ink-primary"
              style={{
                textShadow: "0 1px 0 rgba(0,0,0,.35)",
              }}
            >
              Criação de sites em Manaus
              <br />
              <span
                className="inline-block bg-clip-text text-transparent animate-shimmer-slow"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, #eafcff 20%, #b7eaff 40%, #ffffff 50%, #b7eaff 60%, #eafcff 80%)",
                  backgroundSize: "200% 100%",
                }}
              >
                para destacar seu negócio
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300} duration={900}>
            <p className="mt-4 sm:mt-5 text-[15px] md:text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
              Criamos sites em Manaus{" "}
              <span className="text-glow-aqua font-medium">
                rápidos, profissionais
              </span>{" "}
              e sob medida para o seu negócio.
              Seu cliente te
              <span className="text-glow-aqua font-medium"> encontra</span>.
              Você <span className="text-glow-aqua font-medium">cresce</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={450} duration={900}>
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <GlowButton
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() =>
                  trackWhatsAppClick({
                    page: pathname,
                    service: "hero",
                  })
                }
              >
                <MessageCircle size={17} strokeWidth={2} />
                Falar no WhatsApp agora
              </GlowButton>

              <GlowButton
                href="/#servicos"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto"
              >
                Ver serviços
                <ArrowDown size={15} />
              </GlowButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600} duration={1000}>
            <div className="mt-6 md:mt-10 grid grid-cols-3 gap-3 md:gap-8 max-w-2xl mx-auto">
              <StatItem
                valueNode={
                  <>
                    <Counter to={3} />–<Counter to={7} />
                  </>
                }
                label="dias no ar"
              />
              <StatItem
                valueNode={<Counter to={497} prefix="R$ " duration={1800} />}
                label="a partir de"
              />
              <StatItem
                valueNode={<Counter to={100} suffix="%" />}
                label="no celular"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* scroll hint */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-muted"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.35em]">
          Explorar
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-glow-aqua to-transparent" />
      </div>
    </section>
  );
}

function StatItem({
  valueNode,
  label,
}: {
  valueNode: React.ReactNode;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="font-display text-xl md:text-3xl text-glow-aqua tabular-nums">
        {valueNode}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wide sm:tracking-widest text-ink-muted">
        {label}
      </div>
    </div>
  );
}

function LumaMascotOutline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 360"
      className="absolute right-0 top-1/2 hidden h-[380px] w-[300px] -translate-y-[55%] pointer-events-none animate-float lg:block"
      fill="none"
    >
      <g opacity="0.7" filter="url(#luma-desktop-outline-glow)">
        <path
          d="M131 111c33 0 59 25 61 59 2 38-27 68-62 68s-64-30-62-68c2-34 29-59 63-59Z"
          stroke="url(#luma-desktop-outline)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M96 115C59 86 38 47 50 27c27 2 58 35 68 78"
          stroke="url(#luma-desktop-leaf)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M151 111c13-45 43-76 70-76 10 24-17 65-56 90"
          stroke="url(#luma-desktop-leaf)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M105 103c-7-22-3-42 12-60 17 16 22 39 12 63"
          stroke="url(#luma-desktop-leaf)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.86"
        />
        <path
          d="M80 218c-24 4-47-1-63-17 16-18 43-22 67-10"
          stroke="url(#luma-desktop-outline)"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.74"
        />
        <path
          d="M183 216c27 1 48 12 59 32-23 12-49 6-68-10"
          stroke="url(#luma-desktop-outline)"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.74"
        />
        <path
          d="M123 237c-5 31-21 55-45 68-12-29 4-61 33-80"
          stroke="url(#luma-desktop-outline)"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.72"
        />
        <path
          d="M148 236c20 24 26 52 16 79-25-13-40-38-44-69"
          stroke="url(#luma-desktop-outline)"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.72"
        />
        <path
          d="M97 166c8 8 17 8 25 0"
          stroke="#EAF2FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.52"
        />
        <path
          d="M153 166c8 8 17 8 25 0"
          stroke="#EAF2FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.52"
        />
        <path
          d="M126 194c7 4 14 4 20 0"
          stroke="#EAF2FF"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.36"
        />
      </g>

      <ellipse
        cx="132"
        cy="318"
        rx="58"
        ry="16"
        fill="url(#luma-desktop-ground)"
        opacity="0.5"
      />

      <defs>
        <linearGradient
          id="luma-desktop-outline"
          x1="44"
          y1="31"
          x2="204"
          y2="310"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7FE5FF" />
          <stop offset="0.48" stopColor="#EAF2FF" />
          <stop offset="1" stopColor="#84E2A8" stopOpacity="0.58" />
        </linearGradient>
        <linearGradient
          id="luma-desktop-leaf"
          x1="52"
          y1="24"
          x2="207"
          y2="125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#84E2A8" />
          <stop offset="0.62" stopColor="#7FE5FF" />
          <stop offset="1" stopColor="#EAF2FF" />
        </linearGradient>
        <radialGradient id="luma-desktop-ground">
          <stop stopColor="#FFD54F" stopOpacity="0.38" />
          <stop offset="0.58" stopColor="#7DE68B" stopOpacity="0.18" />
          <stop offset="1" stopColor="#7DE68B" stopOpacity="0" />
        </radialGradient>
        <filter
          id="luma-desktop-outline-glow"
          x="-30"
          y="-30"
          width="320"
          height="420"
          colorInterpolationFilters="sRGB"
        >
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="5"
            floodColor="#4FC8FF"
            floodOpacity="0.42"
          />
        </filter>
      </defs>
    </svg>
  );
}

function HeroStarCanopy() {
  const stars = [
    [16, 52, 1.7, 0.62, 3.6, 0.2],
    [31, 27, 2.1, 0.78, 4.4, 1.1],
    [45, 64, 1.7, 0.58, 3.9, 2.3],
    [58, 36, 2.5, 0.9, 5.1, 0.7],
    [72, 19, 1.7, 0.62, 3.8, 1.8],
    [86, 48, 2, 0.82, 4.7, 3.1],
    [106, 31, 1.8, 0.64, 4.1, 1.5],
    [123, 58, 2.4, 0.86, 5.3, 2.6],
    [141, 38, 1.7, 0.6, 3.7, 0.9],
    [158, 67, 2.1, 0.7, 4.6, 3.4],
  ];
  const desktopStars = [
    [8, 46, 2.1, 0.54, 4.6, 0.3],
    [15, 28, 1.6, 0.42, 5.4, 1.1],
    [22, 61, 2.6, 0.66, 4.1, 2.2],
    [31, 34, 1.8, 0.5, 5.8, 1.7],
    [42, 22, 2.4, 0.68, 4.8, 0.6],
    [49, 52, 1.7, 0.44, 5.1, 2.8],
    [57, 36, 3, 0.76, 4.3, 1.3],
    [67, 58, 2, 0.52, 5.7, 3.2],
    [76, 27, 2.5, 0.7, 4.9, 0.9],
    [86, 48, 1.8, 0.48, 5.2, 2.4],
    [93, 62, 2.2, 0.58, 4.5, 1.9],
  ];

  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 180 120"
        className="absolute inset-x-0 top-16 h-40 w-full pointer-events-none opacity-100 md:hidden"
        fill="none"
        preserveAspectRatio="none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 68%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 68%, transparent 100%)",
        }}
      >
        <rect width="180" height="120" fill="url(#canopy-wash)" />
        <ellipse cx="90" cy="78" rx="74" ry="18" fill="url(#canopy-horizon)" />
        <g style={{ filter: "drop-shadow(0 0 8px rgba(127,229,255,0.86))" }}>
          {stars.map(([cx, cy, r, opacity, duration, delay]) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={r}
              fill="url(#canopy-star)"
              opacity={opacity}
            >
              <animate
                attributeName="opacity"
                values={`${Math.max(opacity - 0.34, 0.24)};1;${Math.max(opacity - 0.22, 0.3)};${opacity}`}
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`${r};${r + 0.55};${r}`}
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
          <path
            d="M58 28v16M50 36h16"
            stroke="#EAF2FF"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.72"
          >
            <animate
              attributeName="opacity"
              values="0.18;0.92;0.24;0.72"
              dur="4.2s"
              begin="0.8s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        <path
          d="M28 74C58 57 91 53 127 63c12 3 23 7 31 12"
          stroke="url(#canopy-arc)"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.22"
        />
        <defs>
          <radialGradient id="canopy-wash" cx="50%" cy="46%" r="64%">
            <stop stopColor="#4FC8FF" stopOpacity="0.18" />
            <stop offset="0.52" stopColor="#173B58" stopOpacity="0.12" />
            <stop offset="1" stopColor="#0A0E1A" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="canopy-horizon">
            <stop stopColor="#7FE5FF" stopOpacity="0.24" />
            <stop offset="0.55" stopColor="#4FC8FF" stopOpacity="0.12" />
            <stop offset="1" stopColor="#4FC8FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="canopy-star">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.48" stopColor="#7FE5FF" />
            <stop offset="1" stopColor="#7FE5FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="canopy-arc"
            x1="28"
            y1="74"
            x2="158"
            y2="74"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7FE5FF" stopOpacity="0" />
            <stop offset="0.5" stopColor="#EAF2FF" />
            <stop offset="1" stopColor="#84E2A8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-20 hidden h-56 pointer-events-none overflow-hidden md:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 16%, black 72%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 16%, black 72%, transparent 100%)",
        }}
      >
        <style>{`
          @keyframes lumaCanopyDesktopTwinkle {
            0%, 100% { opacity: var(--star-base); transform: translateZ(0) scale(0.72); }
            42% { opacity: 1; transform: translateZ(0) scale(1.22); }
            68% { opacity: calc(var(--star-base) * 0.62); transform: translateZ(0) scale(0.88); }
          }
          @keyframes lumaCanopyDesktopDrift {
            0%, 100% { transform: translate3d(0,0,0); }
            50% { transform: translate3d(0,-8px,0); }
          }
        `}</style>
        <div className="absolute left-1/2 top-6 h-40 w-[74rem] max-w-[94vw] -translate-x-1/2 animate-[lumaCanopyDesktopDrift_12s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,200,255,0.20)_0%,rgba(23,59,88,0.11)_38%,rgba(10,14,26,0)_72%)]" />
          <div className="absolute left-[14%] right-[14%] top-[62%] h-px bg-gradient-to-r from-transparent via-glow-aqua/30 to-transparent" />
          {desktopStars.map(([left, top, size, opacity, duration, delay]) => (
            <span
              key={`${left}-${top}`}
              className="absolute rounded-full bg-white"
              style={
                {
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity,
                  boxShadow:
                    "0 0 8px rgba(127,229,255,0.9), 0 0 18px rgba(79,200,255,0.42)",
                  animation: `lumaCanopyDesktopTwinkle ${duration}s ease-in-out ${delay}s infinite`,
                  "--star-base": opacity,
                } as React.CSSProperties
              }
            />
          ))}
          <span className="absolute left-[57%] top-[38%] h-5 w-5 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink-primary/70 animate-[lumaCanopyDesktopTwinkle_4.8s_ease-in-out_1.4s_infinite]" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink-primary/70 animate-[lumaCanopyDesktopTwinkle_4.8s_ease-in-out_1.4s_infinite]" />
          </span>
        </div>
      </div>
    </>
  );
}
