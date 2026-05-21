"use client";

import Image from "next/image";
import { GlowButton } from "@/components/GlowButton";
import { Fireflies } from "@/components/Fireflies";
import { StarField } from "@/components/StarField";
import { Aurora } from "@/components/Aurora";
import { LightOrb } from "@/components/LightOrb";
import { Counter } from "@/components/Counter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { whatsappLink } from "@/utils/whatsapp";
import { MessageCircle, ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
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

      {/* Luma — personagem flutuando à direita (desktop) */}
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
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-[55%] pointer-events-none animate-float"
          style={{
            width: 300,
            height: 380,
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 78%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 78%, transparent 100%)",
            mixBlendMode: "screen",
          }}
        >
          {/* glow âmbar no chão do personagem */}
          <div
            className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-28 h-10 rounded-full blur-2xl animate-pulse-glow"
            style={{ background: "rgba(255,190,60,.55)" }}
          />
          <Image
            src="/characters/luma-flying.png"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "8% 78%" }}
            sizes="300px"
            priority
          />
        </div>
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
                  Atendendo em Manaus · Agenda limitada para o mês de{" "}
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
              Tire seu negócio
              <br />
              <span
                className="inline-block bg-clip-text text-transparent animate-shimmer-slow"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, #eafcff 20%, #b7eaff 40%, #ffffff 50%, #b7eaff 60%, #eafcff 80%)",
                  backgroundSize: "200% 100%",
                }}
              >
                da escuridão digital
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300} duration={900}>
            <p className="mt-4 sm:mt-5 text-[15px] md:text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
              Criamos sites{" "}
              <span className="text-glow-aqua font-medium">
                rápidos, profissionais
              </span>{" "}
              e sob medida em <span className="text-ink-primary">Manaus</span>.
              Seu cliente te
              <span className="text-glow-aqua font-medium"> encontra</span>.
              Você <span className="text-glow-aqua font-medium">cresce</span>.
              Sem enrolação. Sem taxa escondida.
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

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 120"
      className="absolute inset-x-0 top-16 h-40 w-full pointer-events-none opacity-100 md:top-20 md:h-48"
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
  );
}
