"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Monitor } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GlowButton } from "@/components/GlowButton";
import { Aurora } from "@/components/Aurora";
import { whatsappLink } from "@/utils/whatsapp";
import { portfolioItems } from "@/content/portfolio";

export function Portfolio() {
  const [featured, ...secondary] = portfolioItems;
  const sideProjects = secondary.slice(0, 2);
  const wideProjects = secondary.slice(2);

  return (
    <section id="portfolio" className="relative overflow-hidden py-16 md:py-24">
      <Aurora intensity="soft" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-glow-cyan/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/3 h-96 w-96 rounded-full bg-accent-magenta/5 blur-3xl"
      />

      <div className="relative container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Trabalhos reais"
            title="Sites que já entregamos"
            subtitle={
              <>
                Projetos criados sob medida para transformar a presença digital de{" "}
                <span className="font-medium text-glow-aqua">negócios reais</span>
                — com estratégia, identidade e uma experiência que inspira confiança.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="mx-auto mb-5 flex max-w-6xl items-end justify-between gap-5 md:mb-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-glow-cyan/45" />
              <span className="font-display text-[10px] uppercase tracking-[0.34em] text-ink-muted">
                Seleção de projetos
              </span>
            </div>
            <a
              href="/proposta-comercial"
              className="group hidden items-center gap-2 text-xs font-medium text-ink-secondary transition-colors hover:text-glow-aqua sm:inline-flex"
            >
              Ver portfólio completo
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-6xl space-y-4 md:space-y-5">
          <div className="grid gap-4 lg:grid-cols-[1.16fr_.84fr] lg:gap-5">
            {featured && (
              <PortfolioCard item={featured} variant="featured" delay={100} />
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 lg:gap-5">
              {sideProjects.map((item, index) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  variant="side"
                  delay={140 + index * 70}
                />
              ))}
            </div>
          </div>

          {wideProjects.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {wideProjects.map((item, index) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  variant="wide"
                  delay={220 + index * 70}
                />
              ))}
            </div>
          )}
        </div>

        <ScrollReveal delay={120}>
          <div className="mx-auto mt-10 grid max-w-6xl divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.10] bg-midnight/65 shadow-[0_20px_60px_rgba(0,0,0,.16)] backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { value: "100%", label: "Design exclusivo por projeto" },
              { value: "4–7", label: "Dias da ideia ao site no ar" },
              { value: "∞", label: "Revisões até você aprovar" },
            ].map(({ value, label }) => (
              <div key={label} className="px-6 py-5 text-center sm:py-6">
                <div className="font-display text-2xl leading-none text-glow-aqua md:text-3xl">
                  {value}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-ink-muted md:text-xs">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-ink-secondary">
              O próximo projeto em destaque pode ser o{" "}
              <span className="font-medium text-glow-aqua">seu</span>.
            </p>
            <GlowButton
              href={whatsappLink({ custom: "Quero um site para o meu negócio!" })}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="group"
            >
              Quero o meu site
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </GlowButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

type PortfolioItem = (typeof portfolioItems)[number];
type CardVariant = "featured" | "side" | "wide";

function PortfolioCard({
  item,
  variant,
  delay,
}: {
  item: PortfolioItem;
  variant: CardVariant;
  delay: number;
}) {
  const sizeClass = {
    featured: "aspect-[4/3] lg:aspect-auto lg:min-h-[590px]",
    side: "aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:min-h-0",
    wide: "aspect-[4/3] sm:aspect-[16/10]",
  }[variant];

  const imageSizes =
    variant === "featured"
      ? "(max-width: 1023px) 100vw, 58vw"
      : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw";

  const content = (
    <article
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/[0.12] bg-midnight shadow-[0_22px_70px_rgba(0,0,0,.22)] transition duration-500 hover:-translate-y-1 hover:border-glow-cyan/50 hover:shadow-[0_28px_90px_rgba(60,214,255,.13)] ${sizeClass}`}
    >
      <Image
        src={item.image}
        alt={`Projeto de site desenvolvido para ${item.client}`}
        fill
        sizes={imageSizes}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.035]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/20 to-[#070b14]/5" />
      <div className="absolute inset-x-0 top-0 flex h-11 items-center justify-between border-b border-white/[0.10] bg-[#080d18]/55 px-4 backdrop-blur-md">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-glow-cyan/65" />
        </div>
        <span className="max-w-[65%] truncate text-[9px] uppercase tracking-[0.16em] text-white/55">
          Projeto Luma Sites
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
        <div className="min-w-0">
          <span className="mb-2 inline-flex rounded-full border border-glow-cyan/35 bg-[#07101d]/75 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-glow-aqua backdrop-blur-md">
            {item.tag}
          </span>
          <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/55">
            {item.category}
          </p>
          <h3 className={`font-display font-semibold leading-tight text-white ${variant === "featured" ? "text-xl md:text-3xl" : "text-base md:text-xl"}`}>
            {item.client}
          </h3>
        </div>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.09] text-white backdrop-blur-md transition group-hover:border-glow-cyan/55 group-hover:bg-glow-cyan group-hover:text-midnight">
          <ArrowUpRight size={17} />
        </span>
      </div>

      {variant === "featured" && (
        <div className="absolute right-5 top-16 hidden items-center gap-2 rounded-full border border-white/[0.14] bg-[#07101d]/60 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/65 backdrop-blur-md md:flex">
          <Monitor size={12} className="text-glow-aqua" />
          Projeto em destaque
        </div>
      )}
    </article>
  );

  return (
    <ScrollReveal delay={delay} direction="up" className="h-full">
      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver o site de ${item.client}`}
          className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-midnight"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </ScrollReveal>
  );
}
