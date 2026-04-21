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
  const currentMonth = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(new Date());

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
      className="relative min-h-[92vh] flex items-center overflow-hidden"
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

      <div className="relative z-10 container mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal duration={800}>
            <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-white/8 bg-midnight/78 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-35 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
              </span>
              <span className="font-display text-xs uppercase tracking-[0.3em] text-ink-primary/85">
                Atendendo Manaus — AM · Vagas limitadas em {currentMonth}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} duration={900}>
            <h1
              className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-ink-primary"
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
            <p className="mt-8 text-lg md:text-xl text-ink-secondary max-w-2xl mx-auto leading-relaxed">
              Criamos{" "}
              <span className="text-glow-aqua font-medium">sites simples</span>,
              rápidos e profissionais em{" "}
              <span className="text-ink-primary">Manaus</span>. Seu cliente te
              <span className="text-glow-aqua font-medium"> encontra</span>.
              Você <span className="text-glow-aqua font-medium">cresce</span>.
              Sem complicação, sem mensalidade abusiva.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={450} duration={900}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <MessageCircle size={18} strokeWidth={2} />
                Falar no WhatsApp agora
              </GlowButton>

              <GlowButton
                href="#servicos"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto"
              >
                Ver serviços
                <ArrowDown size={16} />
              </GlowButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600} duration={1000}>
            <div className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
              <StatItem
                valueNode={
                  <>
                    <Counter to={3} />–<Counter to={7} />
                  </>
                }
                label="dias de entrega"
              />
              <StatItem
                valueNode={<Counter to={497} prefix="R$ " duration={1800} />}
                label="a partir de"
              />
              <StatItem
                valueNode={<Counter to={100} suffix="%" />}
                label="mobile first"
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
      <div className="font-display text-2xl md:text-4xl text-glow-aqua tabular-nums">
        {valueNode}
      </div>
      <div className="mt-1 text-xs md:text-sm uppercase tracking-widest text-ink-muted">
        {label}
      </div>
    </div>
  );
}
