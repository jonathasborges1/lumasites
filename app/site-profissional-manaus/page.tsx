import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  FileSearch,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";
import { GlowButton } from "@/components/GlowButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Fireflies } from "@/components/Fireflies";
import {
  audiences,
  campaignWhatsApp,
  deliverables,
  diagnosticItems,
  faqs,
  faqSchema,
  hero,
  pageMetadata,
  proofItems,
  serviceSchema,
  steps,
  testimonials,
} from "./content";

export const metadata = pageMetadata;

export default function SiteProfissionalManausPage() {
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

      <LandingHeader />

      <main className="bg-midnight text-ink-primary">
        {/* Hero */}
        <section className="relative min-h-[720px] overflow-hidden pt-28 md:pt-36">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/characters/gameplay-forest.jpg"
              alt=""
              fill
              priority
              className="object-cover object-center opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-midnight/75 via-midnight/82 to-midnight" />
            <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/76 to-midnight/30" />
          </div>

          <Fireflies count={16} />

          <div className="relative container mx-auto px-5 md:px-8 pb-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <ScrollReveal className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 border border-glow-cyan/30 bg-midnight/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-glow-aqua backdrop-blur-sm">
                  <MapPin size={14} />
                  {hero.eyebrow}
                </div>

                {/* Prova social acima do fold */}
                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-secondary">
                  <span className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className="fill-accent-amber text-accent-amber"
                      />
                    ))}
                  </span>
                  <span className="text-ink-muted">·</span>
                  <span>{hero.socialProof}</span>
                  <span className="text-ink-muted">·</span>
                  <span className="text-accent-amber font-medium">
                    {hero.urgency}
                  </span>
                </div>

                <h1 className="font-display text-4xl uppercase leading-[0.98] text-ink-primary sm:text-5xl md:text-6xl lg:text-7xl">
                  {hero.title}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
                  {hero.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <GlowButton
                    href={campaignWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    variant="amber"
                    className="w-full sm:w-auto"
                  >
                    <MessageCircle size={18} />
                    {hero.primaryCta}
                  </GlowButton>
                  <GlowButton href="#como-funciona" size="lg" variant="ghost">
                    {hero.secondaryCta}
                    <ArrowRight size={16} />
                  </GlowButton>
                </div>
                <p className="mt-3 text-xs text-ink-muted">
                  {hero.helper}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {proofItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border border-white/10 bg-midnight/58 px-4 py-3 text-sm text-ink-secondary backdrop-blur-sm"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-accent-green"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120} className="hidden lg:block">
                <div className="relative ml-auto max-w-md border border-glow-cyan/20 bg-midnight/76 p-6 backdrop-blur-md">
                  <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-display text-xs uppercase tracking-[0.3em] text-glow-aqua">
                      Diagnóstico
                    </span>
                    <Clock3 size={16} className="text-accent-amber" />
                  </div>
                  <p className="font-display text-2xl uppercase leading-tight text-ink-primary">
                    Em poucos minutos você entende o melhor caminho para seu
                    site.
                  </p>
                  <div className="mt-6 space-y-4">
                    {diagnosticItems.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-ink-secondary">
                        <BadgeCheck
                          size={16}
                          className="mt-0.5 shrink-0 text-glow-cyan"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Por que profissional */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <ScrollReveal>
                <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                  Por que profissional importa
                </span>
                <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-ink-primary md:text-4xl">
                  Seu cliente pesquisa antes de ligar. O que ele encontra sobre
                  você?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-secondary">
                  Um site feito em construtor gratuito, lento e idêntico a mil
                  outros passa a mensagem errada. Um site profissional transmite
                  competência silenciosamente — antes da primeira conversa.
                </p>
              </ScrollReveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {deliverables.map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 70}>
                    <div className="h-full border border-white/10 bg-surface/45 p-5 transition-colors duration-300 hover:border-glow-cyan/25">
                      <item.Icon size={22} className="mb-5 text-glow-cyan" />
                      <h3 className="font-display text-sm uppercase tracking-[0.18em] text-ink-primary">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                        {item.text}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="bg-deep-blue/35 py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                Processo simples
              </span>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-ink-primary md:text-4xl">
                Do primeiro contato ao site profissional no ar sem complicar sua
                rotina.
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 90}>
                  <div className="h-full border border-white/10 bg-midnight/60 p-6">
                    <div className="mb-6 font-display text-5xl text-glow-cyan/20">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-base uppercase tracking-[0.2em] text-ink-primary">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                      {step.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                Quem já criou com a Luma
              </span>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-ink-primary md:text-4xl">
                Resultados reais de negócios em Manaus.
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((t, index) => (
                <ScrollReveal key={t.name} delay={index * 80}>
                  <article className="h-full border border-white/10 bg-surface/45 p-6 flex flex-col gap-5">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-accent-amber text-accent-amber"
                        />
                      ))}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-ink-secondary">
                      &quot;{t.text}&quot;
                    </p>
                    <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-glow-cyan/10 font-display text-xs text-glow-aqua">
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-ink-primary">
                          {t.name}
                        </div>
                        <div className="text-xs text-ink-muted">
                          {t.role} · {t.location}
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Para quem é */}
        <section className="bg-deep-blue/35 py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <ScrollReveal>
                <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                  Indicado para
                </span>
                <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-ink-primary md:text-4xl">
                  Para negócios que querem ser levados a sério na internet.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-secondary">
                  Se você depende da credibilidade para fechar negócios — seja
                  numa clínica, escritório ou empresa de serviços — um site
                  profissional é o ponto de partida certo.
                </p>
                <div className="mt-8">
                  <GlowButton
                    href={campaignWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="amber"
                    size="lg"
                  >
                    <MessageCircle size={18} />
                    Receber proposta gratuita
                  </GlowButton>
                  <p className="mt-3 text-xs text-ink-muted">
                    Gratuito · Sem compromisso · Resposta em até 1 hora
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {audiences.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border border-white/10 bg-surface/45 px-4 py-4 text-sm text-ink-secondary"
                    >
                      <Sparkles
                        size={15}
                        className="shrink-0 text-accent-amber"
                      />
                      <span className="capitalize">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <ScrollReveal>
                <span className="font-display text-xs uppercase tracking-[0.32em] text-glow-aqua">
                  Dúvidas frequentes
                </span>
                <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-ink-primary md:text-4xl">
                  Perguntas comuns sobre sites profissionais.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-secondary">
                  Respostas diretas para você tomar a decisão com segurança.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <ScrollReveal key={faq.question} delay={index * 60}>
                    <article className="border border-white/10 bg-midnight/60 p-5">
                      <h3 className="font-display text-sm uppercase tracking-[0.18em] text-glow-aqua">
                        {faq.question}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                        {faq.answer}
                      </p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative overflow-hidden py-20 md:py-28">
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
              <FileSearch className="mx-auto mb-6 text-glow-cyan" size={32} />
              <h2 className="font-display text-3xl uppercase leading-tight text-ink-primary md:text-5xl">
                Pronto para ter um site que representa de verdade o seu
                negócio?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg">
                Chame no WhatsApp, conte o que você faz e receba uma orientação
                objetiva sobre o melhor formato, prazo e investimento para o seu
                caso.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <GlowButton
                  href={campaignWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="amber"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle size={18} />
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
