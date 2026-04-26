import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  MessageCircle,
  Scale,
  Shield,
  Star,
} from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/content/site";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import {
  articleDates,
  articleSchema,
  benefits,
  contractingGuide,
  faqSchema,
  faqs,
  localDifferentials,
  pageMetadata,
  processSteps,
  siteTypes,
  wppLink,
} from "./content";

export const metadata: Metadata = pageMetadata;

export default function SiteParaAdvogadosEmManausPage() {
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

      <Header />

      <main className="bg-midnight text-ink-primary">
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-glow-cyan/5 blur-[140px]" />
            <div className="absolute right-0 top-24 h-[320px] w-[320px] rounded-full bg-accent-amber/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl px-5 md:px-8">
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
                  Site para Advogados em Manaus
                </li>
              </ol>
            </nav>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-glow-cyan/70" />
              <span className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
                Marketing jurídico
              </span>
              <span className="h-px w-8 bg-glow-cyan/70" />
            </div>

            <h1 className="mb-8 font-display text-3xl uppercase leading-[1.1] text-ink-primary sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              Site para advogados
              <span className="text-glow-aqua"> em Manaus</span>
              <br />
              estrutura, credibilidade e captação ética
            </h1>

            <div className="mb-10 flex flex-wrap items-center gap-5 text-sm text-ink-muted">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} className="text-glow-cyan/60" />
                Publicado em {articleDates.publishedLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} className="text-accent-green/70" />
                Atualizado em {articleDates.updatedLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-glow-cyan/60" />
                Leitura: 9 minutos
              </span>
              <span className="flex items-center gap-1.5">
                <Scale size={14} className="text-accent-amber/70" />
                Para escritórios e advogados autônomos
              </span>
            </div>

            <div className="space-y-4 border-l-2 border-glow-cyan/30 pl-6 text-base leading-relaxed text-ink-secondary md:text-lg">
              <p>
                Quando alguém recebe uma indicação ou pesquisa por um advogado em Manaus, uma das
                primeiras ações é procurar o nome do profissional no Google. Se encontra um site
                claro, sóbrio e objetivo, a percepção de confiança sobe. Se não encontra nada, ou
                encontra uma página fraca, a dúvida aparece antes mesmo do primeiro contato.
              </p>
              <p>
                Um bom site jurídico não precisa ser chamativo. Ele precisa explicar bem, transmitir
                seriedade, facilitar o contato e mostrar que o escritório sabe o que faz. Neste
                guia, você vai ver como estruturar um site para advogados em Manaus e o que vale
                analisar antes de contratar.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <h2 className="mb-8 font-display text-2xl uppercase text-ink-primary md:text-3xl lg:text-4xl">
                Por que um escritório em Manaus precisa de um
                <span className="text-glow-aqua"> site profissional</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="mb-10 space-y-5 text-base leading-relaxed text-ink-secondary">
                <p>
                  Na advocacia, a jornada do cliente raramente começa com uma decisão imediata.
                  Ela começa com uma dúvida, uma busca, uma comparação silenciosa. Em Manaus, isso
                  acontece tanto com quem procura um escritório no centro quanto com quem quer ser
                  atendido online em bairros mais afastados ou em cidades próximas.
                </p>
                <p>
                  O site organiza essa primeira impressão. Ele responde o essencial: quem atende,
                  em quais áreas, como funciona o contato e por que aquele escritório merece ser
                  considerado. Sem isso, o advogado depende apenas de redes sociais, perfis
                  dispersos e indicações sem contexto.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="relative mb-12 overflow-hidden rounded-2xl border border-glow-cyan/20 bg-deep-blue/60 p-6 md:p-8">
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-glow-cyan/50" />
                <p className="mb-3 font-display text-xs uppercase tracking-[0.3em] text-glow-aqua">
                  Ponto decisivo
                </p>
                <p className="text-base leading-relaxed text-ink-primary md:text-lg">
                  Em serviços jurídicos, o site não serve só para aparecer. Ele serve para reduzir
                  insegurança antes da consulta e transformar interesse em contato qualificado.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="grid gap-4 sm:grid-cols-2">
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
          </div>
        </section>

        <section className="bg-deep-blue/30 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <h2 className="mb-4 font-display text-2xl uppercase text-ink-primary md:text-3xl lg:text-4xl">
                Qual formato de site faz mais sentido para o
                <span className="text-glow-aqua"> seu perfil de advocacia</span>
              </h2>
              <p className="mb-12 max-w-2xl text-base leading-relaxed text-ink-secondary">
                O melhor projeto depende do momento do escritório, da forma de captação e das áreas
                que você quer destacar. Em vez de montar algo genérico, o ideal é escolher a
                estrutura certa para o objetivo certo.
              </p>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2">
              {siteTypes.map((type, index) => (
                <ScrollReveal key={index} delay={index * 70}>
                  <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-surface/50 p-6 transition-colors duration-300 hover:border-glow-cyan/20">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="rounded-xl bg-white/5 p-2.5">
                        <type.Icon size={type.iconSize} className={type.iconClass} />
                      </div>
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-display uppercase tracking-wider ${type.badgeClass}`}
                      >
                        {type.badge}
                      </span>
                    </div>

                    <h3 className="mb-2 font-display text-base uppercase tracking-wide text-ink-primary">
                      {type.h3}
                    </h3>
                    <p className="mb-4 font-display text-xs uppercase tracking-[0.28em] text-glow-aqua">
                      {type.price}
                    </p>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-secondary">
                      {type.content}
                    </p>

                    <div className="border-t border-white/6 pt-5">
                      <p className="mb-3 font-display text-[10px] uppercase tracking-widest text-ink-muted">
                        Indicado para
                      </p>
                      <div className="space-y-2.5">
                        {type.good.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent-green" />
                            <span className="text-sm text-ink-secondary">{item}</span>
                          </div>
                        ))}
                      </div>
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
                    {site.name} | Projetos jurídicos em Manaus
                  </p>
                  <p className="mx-auto mb-7 max-w-2xl text-lg leading-relaxed text-ink-primary md:text-xl">
                    Quer entender qual estrutura faz mais sentido para o seu escritório hoje:
                    landing page, site institucional ou site com blog?
                  </p>
                  <GlowButton
                    href={wppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                  >
                    <MessageCircle size={18} />
                    Pedir avaliação no WhatsApp
                  </GlowButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <h2 className="mb-4 font-display text-2xl uppercase text-ink-primary md:text-3xl lg:text-4xl">
                Como funciona a criação de um site para
                <span className="text-glow-aqua"> advogados em Manaus</span>
              </h2>
              <p className="mb-12 max-w-2xl text-base leading-relaxed text-ink-secondary">
                Um projeto jurídico tende a dar mais certo quando o processo é simples, claro e
                focado em posicionamento. Estas são as etapas que realmente importam.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 70}>
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

        <section className="bg-deep-blue/30 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <h2 className="mb-4 font-display text-2xl uppercase text-ink-primary md:text-3xl lg:text-4xl">
                Diferenciais para quem precisa de um projeto jurídico
                <span className="text-glow-aqua"> com cara profissional</span>
              </h2>
              <p className="mb-12 max-w-2xl text-base leading-relaxed text-ink-secondary">
                O visual, a arquitetura e o SEO precisam conversar com a realidade da advocacia.
                Em Manaus, isso também passa por entender busca local, agilidade de atendimento e
                confiança no digital.
              </p>
            </ScrollReveal>

            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              {localDifferentials.map((item, index) => (
                <ScrollReveal key={index} delay={index * 55}>
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

            <ScrollReveal delay={90}>
              <div className="rounded-2xl border border-accent-amber/20 bg-accent-amber/5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Shield size={20} className="mt-1 shrink-0 text-accent-amber" />
                  <div>
                    <p className="mb-3 font-display text-xs uppercase tracking-[0.3em] text-accent-amber">
                      Observação importante
                    </p>
                    <p className="text-sm leading-relaxed text-ink-secondary md:text-base">
                      Um site jurídico eficiente não precisa soar comercial demais. O equilíbrio
                      está em passar segurança, organizar a informação e facilitar o contato com
                      uma comunicação institucional e ética.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal>
              <h2 className="mb-4 font-display text-2xl uppercase text-ink-primary md:text-3xl lg:text-4xl">
                O que perguntar antes de contratar um site para
                <span className="text-glow-aqua"> escritório de advocacia</span>
              </h2>
              <p className="mb-12 max-w-2xl text-base leading-relaxed text-ink-secondary">
                A melhor escolha não é a mais barata nem a mais bonita isoladamente. É a que
                combina estrutura, posicionamento e capacidade de transformar busca em contato.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {contractingGuide.map((item, index) => (
                <ScrollReveal key={index} delay={index * 70}>
                  <div className="overflow-hidden rounded-2xl border border-white/8 bg-surface/40 transition-colors duration-300 hover:border-glow-cyan/20">
                    <div className="p-6">
                      <h3 className="mb-3 flex items-center gap-3 font-display text-sm uppercase tracking-wide text-ink-primary md:text-base">
                        <span className="shrink-0 font-display text-sm text-glow-cyan/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item.h3}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-ink-secondary md:text-base">
                        {item.content}
                      </p>
                      <div className="flex items-start gap-3 rounded-xl border border-glow-cyan/15 bg-glow-cyan/5 p-4">
                        <Star size={13} className="mt-0.5 shrink-0 text-glow-cyan" />
                        <p className="text-sm leading-relaxed text-glow-aqua/90">{item.tip}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
                  Perguntas frequentes sobre site para advogados em Manaus
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 45}>
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

        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-glow-cyan/5 blur-[140px]" />
            <div className="absolute top-1/2 right-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent-magenta/4 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
            <ScrollReveal>
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-glow-cyan/70" />
                <span className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
                  {site.name}
                </span>
                <span className="h-px w-8 bg-glow-cyan/70" />
              </div>

              <h2 className="mb-6 font-display text-3xl uppercase text-ink-primary md:text-4xl lg:text-5xl">
                Pronto para estruturar um site que
                <span className="text-glow-aqua"> fortalece seu escritório?</span>
              </h2>

              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg">
                Atendemos projetos para advogados autônomos e escritórios em Manaus com foco em
                presença digital, sobriedade visual e contato qualificado.
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
                  Conversar no WhatsApp
                </GlowButton>
                <GlowButton href="/blog" variant="ghost" size="lg">
                  Ver mais artigos
                  <ArrowRight size={16} />
                </GlowButton>
              </div>

              <p className="text-sm text-ink-muted">
                Prefere e-mail?{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-glow-aqua underline underline-offset-2 transition-colors duration-200 hover:text-white"
                >
                  {site.email}
                </a>
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
