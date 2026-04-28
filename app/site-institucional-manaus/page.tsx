import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileSearch,
  MapPin,
  MessageCircle,
  Minus,
  Sparkles,
  Star,
} from "lucide-react";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";
import { Breadcrumb, breadcrumbSchema } from "@/components/Breadcrumb";
import { GlowButton } from "@/components/GlowButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Fireflies } from "@/components/Fireflies";
import { site } from "@/content/site";
import {
  audiences,
  campaignWhatsApp,
  comparison,
  faqs,
  faqSchema,
  hero,
  pageMetadata,
  serviceSchema,
  sitePages,
  steps,
  testimonials,
} from "./content";

export const metadata = pageMetadata;

const breadcrumbItems = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Site institucional em Manaus" },
];

export default function SiteInstitucionalManausPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbItems, site.url)),
        }}
      />

      <LandingHeader />

      <main className="bg-midnight text-ink-primary">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-20 pb-14 md:pt-32 md:pb-20">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/characters/gameplay-forest.jpg"
              alt=""
              fill
              priority
              className="object-cover object-center opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/85 to-midnight" />
          </div>
          <Fireflies count={14} />

          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <ScrollReveal>
              <Breadcrumb items={breadcrumbItems} className="justify-center" />

              <div className="mb-4 inline-flex items-center gap-2 border border-glow-cyan/30 bg-midnight/70 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-glow-aqua backdrop-blur-sm">
                <MapPin size={13} />
                {hero.eyebrow}
              </div>

              <div className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-ink-secondary">
                <span className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-accent-amber text-accent-amber" />
                  ))}
                </span>
                <span className="text-ink-muted">·</span>
                <span>{hero.socialProof}</span>
                <span className="text-ink-muted">·</span>
                <span className="text-accent-amber font-medium">{hero.urgency}</span>
              </div>

              <h1 className="font-display text-3xl uppercase leading-[0.98] text-ink-primary sm:text-4xl md:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-secondary md:text-base">
                {hero.description}
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <GlowButton
                  href={campaignWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="amber"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle size={17} />
                  {hero.primaryCta}
                </GlowButton>
                <GlowButton href="#paginas-incluidas" size="lg" variant="ghost">
                  {hero.secondaryCta}
                  <ArrowRight size={15} />
                </GlowButton>
              </div>
              <p className="mt-3 text-xs text-ink-muted">{hero.helper}</p>
            </ScrollReveal>

            {/* Stats bar */}
            <ScrollReveal delay={120}>
              <div className="mt-10 grid grid-cols-3 divide-x divide-white/10 border border-white/10 bg-midnight/60 backdrop-blur-sm">
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="py-4 px-4">
                    <div className="font-display text-xl text-glow-aqua md:text-2xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── PÁGINAS INCLUÍDAS ── */}
        <section id="paginas-incluidas" className="py-12 md:py-20">
          <div className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
            <ScrollReveal className="mx-auto max-w-2xl text-center mb-8">
              <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                O que está incluído
              </span>
              <h2 className="mt-3 font-display text-2xl uppercase leading-tight text-ink-primary md:text-3xl">
                Cada página com um propósito claro.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                O site institucional é entregue com estrutura completa — não uma
                página genérica, mas seções pensadas para o seu público.
              </p>
            </ScrollReveal>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sitePages.map((page, index) => (
                <ScrollReveal key={page.name} delay={index * 70}>
                  <div className={`h-full border bg-surface/45 p-5 transition-colors duration-300 hover:border-glow-cyan/30 ${page.optional ? "border-white/8 opacity-80" : "border-white/14"}`}>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center border border-glow-cyan/30 bg-glow-cyan/8">
                          <page.Icon size={15} className="text-glow-aqua" />
                        </div>
                        <h3 className="font-display text-xs uppercase tracking-[0.2em] text-ink-primary">
                          {page.name}
                        </h3>
                      </div>
                      {page.optional && (
                        <span className="rounded-full border border-accent-amber/40 px-2 py-0.5 font-display text-[9px] uppercase tracking-[0.2em] text-accent-amber">
                          Opcional
                        </span>
                      )}
                    </div>
                    <p className="mb-3 text-xs leading-relaxed text-ink-muted">
                      {page.description}
                    </p>
                    <ul className="space-y-1.5">
                      {page.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-ink-secondary">
                          <Check size={12} className="mt-0.5 shrink-0 text-accent-green" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARAÇÃO: LP vs INSTITUCIONAL ── */}
        <section className="bg-deep-blue/35 py-12 md:py-20">
          <div className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
            <ScrollReveal className="mx-auto max-w-2xl text-center mb-8">
              <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                Landing page ou institucional?
              </span>
              <h2 className="mt-3 font-display text-2xl uppercase leading-tight text-ink-primary md:text-3xl">
                Entenda qual faz sentido para o seu negócio.
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mx-auto max-w-3xl overflow-hidden border border-white/10">
                {/* Header */}
                <div className="grid grid-cols-[1fr_auto_auto] border-b border-white/10 bg-midnight/80">
                  <div className="px-5 py-3 text-xs uppercase tracking-[0.2em] text-ink-muted" />
                  <div className="w-32 border-l border-white/10 px-4 py-3 text-center font-display text-xs uppercase tracking-[0.18em] text-ink-secondary md:w-40">
                    Landing Page
                  </div>
                  <div className="w-32 border-l border-glow-cyan/30 bg-glow-cyan/5 px-4 py-3 text-center font-display text-xs uppercase tracking-[0.18em] text-glow-aqua md:w-40">
                    Institucional
                  </div>
                </div>

                {comparison.features.map((row, index) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-[1fr_auto_auto] border-b border-white/6 ${index % 2 === 0 ? "bg-midnight/40" : "bg-midnight/20"}`}
                  >
                    <div className="px-5 py-3 text-sm text-ink-secondary">
                      {row.label}
                    </div>
                    <div className="w-32 border-l border-white/10 px-4 py-3 text-center text-xs text-ink-muted md:w-40">
                      {row.lp}
                    </div>
                    <div className="w-32 border-l border-glow-cyan/20 bg-glow-cyan/5 px-4 py-3 text-center text-xs font-medium text-glow-aqua md:w-40">
                      {row.inst}
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-[1fr_auto_auto] bg-midnight/60 pt-2 pb-1">
                  <div />
                  <div className="w-32 md:w-40" />
                  <div className="w-32 border-l border-glow-cyan/20 bg-glow-cyan/5 px-4 py-3 md:w-40">
                    <GlowButton
                      href={campaignWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      className="w-full justify-center !text-[10px] !px-3 !py-2"
                    >
                      Quero este
                    </GlowButton>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── COMO FUNCIONA — timeline vertical ── */}
        <section id="como-funciona" className="py-12 md:py-20">
          <div className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
            <ScrollReveal className="mb-8">
              <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                Processo
              </span>
              <h2 className="mt-3 font-display text-2xl uppercase leading-tight text-ink-primary md:text-3xl">
                Do briefing ao site no ar, passo a passo.
              </h2>
            </ScrollReveal>

            <div className="relative max-w-2xl">
              {/* linha vertical */}
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-glow-cyan/40 via-glow-cyan/20 to-transparent md:left-[23px]" />

              <div className="space-y-0">
                {steps.map((step, index) => (
                  <ScrollReveal key={step.title} delay={index * 100}>
                    <div className="relative flex gap-5 pb-8 md:gap-7 last:pb-0">
                      {/* número */}
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-glow-cyan/40 bg-midnight font-display text-xs text-glow-aqua shadow-glow-sm md:h-12 md:w-12 md:text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="pt-1.5">
                        <h3 className="font-display text-sm uppercase tracking-[0.18em] text-ink-primary md:text-base">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                          {step.text}
                        </p>
                        <p className="mt-1.5 text-xs text-ink-muted">
                          <Minus size={10} className="inline mr-1 text-glow-cyan/50" />
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section className="bg-deep-blue/35 py-12 md:py-16">
          <div className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                Quem já criou com a Luma
              </span>
              <h2 className="mt-3 font-display text-2xl uppercase leading-tight text-ink-primary md:text-3xl">
                Resultados reais de negócios em Manaus.
              </h2>
            </ScrollReveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {testimonials.map((t, index) => (
                <ScrollReveal key={t.name} delay={index * 80}>
                  <article className="h-full border border-white/10 bg-surface/45 p-5 flex flex-col gap-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={12} className="fill-accent-amber text-accent-amber" />
                      ))}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-ink-secondary">
                      &quot;{t.text}&quot;
                    </p>
                    <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-glow-cyan/10 font-display text-xs text-glow-aqua">
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-ink-primary">{t.name}</div>
                        <div className="text-xs text-ink-muted">{t.role} · {t.location}</div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARA QUEM É ── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <ScrollReveal>
                <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                  Indicado para
                </span>
                <h2 className="mt-3 font-display text-2xl uppercase leading-tight text-ink-primary md:text-3xl">
                  Para empresas que precisam de um endereço digital completo.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                  Se sua empresa precisa apresentar equipe, serviços e história
                  de forma organizada — e crescer esse conteúdo ao longo do
                  tempo — o site institucional é a estrutura certa.
                </p>
                <div className="mt-6">
                  <GlowButton
                    href={campaignWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="amber"
                    size="lg"
                  >
                    <MessageCircle size={17} />
                    Receber proposta gratuita
                  </GlowButton>
                  <p className="mt-3 text-xs text-ink-muted">
                    Gratuito · Sem compromisso · Resposta em até 1 hora
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {audiences.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border border-white/10 bg-surface/45 px-4 py-3 text-sm text-ink-secondary"
                    >
                      <Sparkles size={14} className="shrink-0 text-accent-amber" />
                      <span className="capitalize">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-deep-blue/35 py-12 md:py-16">
          <div className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <ScrollReveal>
                <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                  Dúvidas frequentes
                </span>
                <h2 className="mt-3 font-display text-2xl uppercase leading-tight text-ink-primary md:text-3xl">
                  Perguntas comuns sobre site institucional.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                  Respostas diretas para você entender se o institucional é o
                  formato certo para o seu negócio.
                </p>
              </ScrollReveal>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <ScrollReveal key={faq.question} delay={index * 60}>
                    <article className="border border-white/10 bg-midnight/60 p-4">
                      <h3 className="font-display text-sm uppercase tracking-[0.18em] text-glow-aqua">
                        {faq.question}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                        {faq.answer}
                      </p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="relative overflow-hidden py-14 md:py-20">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/characters/luma-cover.jpg"
              alt=""
              fill
              className="object-cover object-top opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/86 to-midnight" />
          </div>

          <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
            <ScrollReveal>
              <FileSearch className="mx-auto mb-5 text-glow-cyan" size={28} />
              <h2 className="font-display text-2xl uppercase leading-tight text-ink-primary md:text-4xl">
                Pronto para dar à sua empresa a presença digital que ela merece?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-secondary md:text-base">
                Chame no WhatsApp, conte o que a empresa faz e receba uma
                proposta com a estrutura de páginas, prazo e investimento para o
                seu caso.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <GlowButton
                  href={campaignWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="amber"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle size={17} />
                  Falar agora no WhatsApp
                </GlowButton>
                <Link
                  href="/blog/criacao-de-sites-em-manaus"
                  className="font-display text-sm uppercase tracking-[0.2em] text-ink-muted hover:text-glow-aqua"
                >
                  Ler guia completo
                </Link>
              </div>
              <p className="mt-4 text-xs text-ink-muted">
                Gratuito · Sem compromisso · Resposta em até 1 hora
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
