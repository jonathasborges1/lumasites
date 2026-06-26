"use client";

import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GlowButton } from "@/components/GlowButton";
import { Aurora } from "@/components/Aurora";
import { whatsappLink } from "@/utils/whatsapp";
import { portfolioItems } from "@/content/portfolio";

export function Portfolio() {
  // Split into two columns for masonry effect
  const leftCol = portfolioItems.filter((_, i) => i % 2 === 0);
  const rightCol = portfolioItems.filter((_, i) => i % 2 !== 0);

  return (
    <section id="portfolio" className="relative py-16 md:py-24 overflow-hidden">
      <Aurora intensity="soft" />

      {/* Subtle ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 w-96 h-96 rounded-full bg-glow-cyan/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/3 w-96 h-96 rounded-full bg-accent-magenta/5 blur-3xl"
      />

      <div className="relative container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Trabalhos reais"
            title="Sites que já entregamos"
            subtitle={
              <>
                Cada projeto é feito sob medida para{" "}
                <span className="text-glow-aqua font-medium">
                  profissionais reais
                </span>{" "}
                de Manaus — design exclusivo, entrega rápida, resultado que{" "}
                <span className="text-glow-aqua font-medium">aparece</span>.
              </>
            }
          />
        </ScrollReveal>

        {/* Client spotlight header */}
        <ScrollReveal delay={80}>
          <div className="flex items-center justify-between max-w-6xl mx-auto mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-glow-cyan/40" />
              <span className="font-display text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                Destaque do portfólio
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-ink-muted">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              Site no ar
            </div>
          </div>
        </ScrollReveal>

        {/* Masonry grid — two asymmetric columns */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Left column */}
          <div className="flex flex-col gap-3 md:gap-4">
            {leftCol.map((item, idx) => (
              <PortfolioCard key={item.id} item={item} delay={idx * 100} />
            ))}
          </div>

          {/* Right column (offset on desktop → spans 2 cols) */}
          <div className="flex flex-col gap-3 md:gap-4 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {rightCol.map((item, idx) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  delay={idx * 100 + 50}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <ScrollReveal delay={120}>
          <div className="mt-10 max-w-6xl mx-auto rounded-2xl border border-white/8 bg-midnight/60 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
            {[
              { value: "100%", label: "Design exclusivo por projeto" },
              { value: "4–7", label: "Dias da ideia ao site no ar" },
              { value: "∞", label: "Revisões até você aprovar" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left flex-1">
                <div className="font-display text-2xl md:text-3xl text-glow-aqua leading-none">
                  {value}
                </div>
                <div className="mt-1 text-xs text-ink-muted uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={160}>
          <div className="mt-12 text-center flex flex-col items-center gap-4">
            <p className="text-ink-secondary text-sm">
              O próximo pode ser o{" "}
              <span className="text-glow-aqua font-medium">seu</span>.
            </p>
            <GlowButton
              href={whatsappLink({ custom: "Quero um site para o meu negócio!" })}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="group"
            >
              Quero o meu site
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </GlowButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  delay = 0,
}: {
  item: (typeof portfolioItems)[0];
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <div className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-glow-cyan/40 transition-all duration-500 shadow-sm hover:shadow-glow-sm cursor-pointer">
        <Image
          src={item.image}
          alt={`Site de ${item.client}`}
          width={600}
          height={750}
          className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)]"
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10 rounded-full bg-midnight/75 border border-glow-cyan/30 px-2.5 py-1 backdrop-blur-sm">
          <span className="font-display text-[9px] uppercase tracking-[0.25em] text-glow-aqua">
            {item.tag}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-end p-5 gap-1">
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-glow-aqua">
            {item.category}
          </span>
          <span className="font-display text-base md:text-lg uppercase text-ink-primary text-center leading-tight">
            {item.client}
          </span>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-ink-secondary hover:text-glow-aqua transition-colors"
            >
              <ExternalLink size={11} />
              Ver site
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
