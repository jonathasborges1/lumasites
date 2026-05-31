import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  MessageCircle,
  Smile,
  Sparkles,
} from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { breadcrumbSchema } from "@/components/Breadcrumb";
import { site } from "@/content/site";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import {
  articleDates,
  articleSchema,
  articleSections,
  benefits,
  faqSchema,
  faqs,
  internalLinks,
  localDifferentials,
  pageMetadata,
  processSteps,
  siteEssentials,
  thumbnail,
  wppLink,
} from "./content";

export const metadata: Metadata = pageMetadata;

export default function SiteParaDentistaEmManausPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(
              [{ label: "Blog", href: "/blog" }, { label: "Site para Dentista em Manaus" }],
              site.url,
            ),
          ),
        }}
      />

      <Header />

      <main className="bg-midnight text-ink-primary">
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-glow-cyan/5 blur-[140px]" />
            <div className="absolute right-0 top-24 h-[320px] w-[320px] rounded-full bg-accent-amber/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-5 md:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
                <li>
                  <Link href="/" className="transition-colors duration-200 hover:text-glow-aqua">
                    Início
                  </Link>
                </li>
                <li>
                  <ChevronRight size={13} className="text-ink-muted/40" />
                </li>
                <li>
                  <Link href="/blog" className="transition-colors duration-200 hover:text-glow-aqua">
                    Blog
                  </Link>
                </li>
                <li>
                  <ChevronRight size={13} className="text-ink-muted/40" />
                </li>
                <li className="text-glow-aqua/80" aria-current="page">
                  Site para Dentista em Manaus
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-glow-cyan/70" />
                <span className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
                  SEO local para dentistas
                </span>
                <span className="h-px w-8 bg-glow-cyan/70" />
              </div>

              <h1 className="mb-8 font-display text-3xl uppercase leading-[1.1] text-ink-primary sm:text-4xl md:text-5xl lg:text-[3.4rem]">
                Site para dentista
                <span className="text-glow-aqua"> em Manaus</span>
                <br />
                presença profissional para ser encontrado no Google
              </h1>

              <div className="mb-10 flex flex-wrap items-center gap-5 text-sm text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} className="text-glow-cyan/60" />
                  Publicado em {articleDates.publishedLabel}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-glow-cyan/60" />
                  Leitura: 10 minutos
                </span>
                <span className="flex items-center gap-1.5">
                  <Smile size={14} className="text-accent-amber/70" />
                  Para dentistas e clínicas odontológicas
                </span>
              </div>

              <div className="max-w-3xl space-y-4 border-l-2 border-glow-cyan/30 pl-6 text-base leading-relaxed text-ink-secondary md:text-lg">
                <p>
                  Manaus tem muitos consultórios odontológicos. Em bairros como Adrianópolis, Dom
                  Pedro e Chapada, a concorrência entre clínicas particulares é real — e boa parte
                  dela acontece antes do paciente sequer pegar o telefone.
                </p>
                <p>
                  Quando alguém pesquisa por dentista em Manaus, ortodontista no Dom Pedro ou
                  implante dentário em Manaus, a primeira impressão já aconteceu. Um site para
                  dentista em Manaus organiza essa presença com clareza, credibilidade e estrutura
                  para ser encontrado no Google.
                </p>
              </div>
            </div>

            <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-surface/40 shadow-glow-sm">
              <Image
                src={thumbnail.src}
                alt={thumbnail.alt}
                width={thumbnail.width}
                height={thumbnail.height}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <h2 className="mb-8 font-display text-2xl uppercase text-ink-primary md:text-3xl lg:text-4xl">
                Por que um site faz diferença para
                <span className="text-glow-aqua"> dentistas em Manaus</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mb-12 grid gap-4 sm:grid-cols-2">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-xl border border-white/8 bg-surface/50 p-5 transition-colors duration-300 hover:border-glow-cyan/20"
                  >
                    <div className="mt-0.5 shrink-0">
                      <item.Icon size={18} className={item.iconClass} />
                    </div>
                    <div>
                      <p className="mb-1.5 font-display text-sm uppercase tracking-wide text-ink-primary">
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed text-ink-secondary">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {articleSections.slice(0, 4).map((section, index) => (
              <ScrollReveal key={section.h2} delay={index * 60}>
                <article className="mb-12">
                  <h2 className="mb-5 font-display text-2xl uppercase text-ink-primary md:text-3xl">
                    {section.h2}
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-ink-secondary">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="bg-deep-blue/30 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <h2 className="mb-4 font-display text-2xl uppercase text-ink-primary md:text-3xl lg:text-4xl">
                O que um site para dentista
                <span className="text-glow-aqua"> deve ter</span>
              </h2>
              <p className="mb-12 max-w-2xl text-base leading-relaxed text-ink-secondary">
                Um site odontológico precisa ser claro, rápido e confiável. Ele orienta o paciente,
                apresenta as especialidades e facilita o primeiro contato sem linguagem apelativa.
              </p>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteEssentials.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 50}>
                  <div className="flex h-full gap-4 rounded-xl border border-white/8 bg-midnight/60 p-5 transition-colors duration-300 hover:border-glow-cyan/20">
                    <div className="mt-0.5 shrink-0">
                      <item.Icon size={18} className="text-glow-cyan" />
                    </div>
                    <div>
                      <h3 className="mb-1.5 font-display text-sm uppercase tracking-wide text-ink-primary">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-ink-secondary">{item.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            {articleSections.slice(4).map((section, index) => (
              <ScrollReveal key={section.h2} delay={index * 60}>
                <article className="mb-12">
                  <h2 className="mb-5 font-display text-2xl uppercase text-ink-primary md:text-3xl">
                    {section.h2}
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-ink-secondary">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="bg-deep-blue/30 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <h2 className="mb-4 font-display text-2xl uppercase text-ink-primary md:text-3xl lg:text-4xl">
                Como funciona a criação de um site para
                <span className="text-glow-aqua"> dentistas em Manaus</span>
              </h2>
              <p className="mb-12 max-w-2xl text-base leading-relaxed text-ink-secondary">
                O processo une estratégia de conteúdo, comunicação dentro das normas do CFO e base
                técnica para SEO local. Estas são as etapas que fazem diferença.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.num} delay={index * 70}>
                  <div className="flex gap-5 rounded-2xl border border-white/8 bg-surface/40 p-6 transition-colors duration-300 hover:border-glow-cyan/20 md:gap-6">
                    <div className="w-12 shrink-0 select-none pt-0.5 font-display text-3xl leading-none text-glow-cyan/15 md:text-4xl">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="mb-2.5 font-display text-sm uppercase tracking-wide text-ink-primary md:text-base">
                        {step.h3}
                      </h3>
                      <p className="text-sm leading-relaxed text-ink-secondary md:text-base">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl border border-glow-cyan/30 bg-gradient-to-br from-deep-blue/80 to-surface/60 p-8 text-center md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-grad-hero opacity-50" />
                <div className="relative">
                  <p className="mb-4 font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
                    {site.name} | Sites profissionais em Manaus
                  </p>
                  <p className="mx-auto mb-7 max-w-2xl text-lg leading-relaxed text-ink-primary md:text-xl">
                    Se você é dentista em Manaus e quer fortalecer sua presença no Google, um site
                    bem estruturado pode ser o diferencial para atrair pacientes qualificados.
                  </p>
                  <GlowButton
                    href={wppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                  >
                    <MessageCircle size={18} />
                    Conversar sobre meu site
                  </GlowButton>
                  <p className="mt-5 text-sm text-ink-muted">
                    lumasites.com.br · @jonathasborges1
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <h2 className="mb-8 font-display text-2xl uppercase text-ink-primary md:text-3xl lg:text-4xl">
                Diferenciais para um projeto
                <span className="text-glow-aqua"> profissional e encontrável</span>
              </h2>
            </ScrollReveal>

            <div className="mb-12 grid gap-4 sm:grid-cols-2">
              {localDifferentials.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 55}>
                  <div className="flex h-full gap-4 rounded-xl border border-white/8 bg-midnight/60 p-5 transition-colors duration-300 hover:border-glow-cyan/20">
                    <div className="mt-0.5 shrink-0">
                      <item.Icon size={18} className={item.iconClass} />
                    </div>
                    <div>
                      <p className="mb-1.5 font-display text-sm uppercase tracking-wide text-ink-primary">
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed text-ink-secondary">{item.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="rounded-2xl border border-accent-amber/20 bg-accent-amber/5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Sparkles size={20} className="mt-1 shrink-0 text-accent-amber" />
                  <div>
                    <p className="mb-3 font-display text-xs uppercase tracking-[0.3em] text-accent-amber">
                      Observação importante
                    </p>
                    <p className="text-sm leading-relaxed text-ink-secondary md:text-base">
                      Um site para dentista deve seguir as diretrizes do CFO: sem comparativos de
                      resultados entre pacientes, sem promessas estéticas específicas e sem
                      linguagem sensacionalista sobre procedimentos. A força da presença digital
                      odontológica está em informar bem, transmitir credibilidade e facilitar o
                      contato para quem está procurando atendimento qualificado.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-deep-blue/30 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <div className="mb-12">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-glow-cyan/70" />
                  <span className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
                    Dúvidas frequentes
                  </span>
                  <span className="h-px w-8 bg-glow-cyan/70" />
                </div>
                <h2 className="font-display text-2xl uppercase text-ink-primary md:text-3xl lg:text-4xl">
                  Perguntas frequentes sobre site para dentista em Manaus
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={faq.q} delay={index * 45}>
                  <div className="rounded-2xl border border-white/8 bg-midnight/60 p-6 transition-colors duration-300 hover:border-glow-cyan/20">
                    <h3 className="mb-3 font-display text-sm uppercase tracking-wide text-glow-aqua md:text-base">
                      {faq.q}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-secondary md:text-base">
                      {faq.a}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <h2 className="mb-8 font-display text-2xl uppercase text-ink-primary md:text-3xl">
                Continue lendo sobre
                <span className="text-glow-aqua"> presença digital local</span>
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {internalLinks.map((link, index) => (
                <ScrollReveal key={link.href} delay={index * 70}>
                  <Link
                    href={link.href}
                    className="group block h-full rounded-2xl border border-white/8 bg-surface/40 p-5 transition-colors duration-300 hover:border-glow-cyan/20"
                  >
                    <p className="mb-3 font-display text-sm uppercase tracking-wide text-ink-primary group-hover:text-glow-aqua">
                      {link.label}
                    </p>
                    <p className="mb-5 text-sm leading-relaxed text-ink-secondary">{link.text}</p>
                    <span className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-glow-aqua">
                      Ler artigo
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-glow-cyan/5 blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
            <ScrollReveal>
              <h2 className="mb-6 font-display text-3xl uppercase text-ink-primary md:text-4xl lg:text-5xl">
                Pronto para construir uma presença que
                <span className="text-glow-aqua"> gera confiança e agendamentos?</span>
              </h2>

              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg">
                A Luma Sites cria sites rápidos, profissionais e otimizados para buscas locais em
                Manaus, com conteúdo claro e uma experiência pensada para transformar pesquisa em
                consulta agendada.
              </p>

              <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
                <GlowButton
                  href={wppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  <MessageCircle size={18} />
                  Falar pelo WhatsApp
                </GlowButton>
                <GlowButton href="/site-profissional-manaus" variant="ghost" size="lg">
                  Ver opções de site
                  <ArrowRight size={16} />
                </GlowButton>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-ink-muted">
                {["lumasites.com.br", "@jonathasborges1", "Atendimento em Manaus"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent-green" />
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
