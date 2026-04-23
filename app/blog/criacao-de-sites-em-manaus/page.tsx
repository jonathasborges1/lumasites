import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { GlowButton } from "@/components/GlowButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/content/site";
import { CheckCircle2, Zap, MessageCircle, ArrowRight, ChevronRight, Clock, Star } from "lucide-react";
import {
  pageMetadata,
  articleSchema,
  faqSchema,
  wppLink,
  faqs,
  benefits,
  processSteps,
  siteTypes,
  localDifferentials,
  contractingGuide,
} from "./content";

export const metadata: Metadata = pageMetadata;

export default function CriacaoDeSitesEmManausPage() {
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
        {/* ── HERO ── */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-glow-cyan/5 blur-[140px] rounded-full" />
          </div>

          <div className="relative max-w-4xl mx-auto px-5 md:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
                <li>
                  <Link href="/" className="hover:text-glow-aqua transition-colors duration-200">
                    Início
                  </Link>
                </li>
                <li><ChevronRight size={13} className="text-ink-muted/40" /></li>
                <li>
                  <Link href="/blog" className="hover:text-glow-aqua transition-colors duration-200">
                    Blog
                  </Link>
                </li>
                <li><ChevronRight size={13} className="text-ink-muted/40" /></li>
                <li className="text-glow-aqua/80" aria-current="page">
                  Criação de Sites em Manaus
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-glow-cyan/70" />
              <span className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
                Guia completo
              </span>
              <span className="h-px w-8 bg-glow-cyan/70" />
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] uppercase text-ink-primary leading-[1.1] mb-8">
              Criação de Sites{" "}
              <span className="text-glow-aqua">em Manaus</span>
              <br />o que saber antes de contratar
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-ink-muted mb-10">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-glow-cyan/60" />
                Leitura: 8 minutos
              </span>
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-accent-amber/70" />
                Para donos de negócios em Manaus
              </span>
            </div>

            <div className="border-l-2 border-glow-cyan/30 pl-6 space-y-4 text-ink-secondary text-base md:text-lg leading-relaxed">
              <p>
                Se você tem um negócio em Manaus e ainda não está na internet com um site
                próprio, existe uma chance real de que seus concorrentes estejam capturando
                clientes que poderiam ser seus. Toda vez que alguém pesquisa no Google por
                um serviço na cidade, os negócios com site levam vantagem: aparecem, transmitem
                credibilidade e recebem o contato.
              </p>
              <p>
                Neste guia, você vai entender como funciona o processo de criação de um site
                profissional, quais são os tipos disponíveis, o que avaliar antes de contratar
                qualquer fornecedor — e por que faz sentido escolher uma empresa local em Manaus.
              </p>
            </div>
          </div>
        </section>

        {/* ── SEÇÃO 1: DIAGNÓSTICO ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-ink-primary mb-8">
                Por que ter um site profissional faz diferença{" "}
                <span className="text-glow-aqua">para negócios em Manaus</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-5 text-ink-secondary text-base leading-relaxed mb-10">
                <p>
                  Mais de 70% dos consumidores pesquisam online antes de contratar qualquer
                  serviço local — mesmo quando a intenção é ir presencialmente ao
                  estabelecimento. Em Manaus, esse comportamento cresce a cada ano: clientes
                  comparam fornecedores, leem avaliações e procuram informações antes de fazer
                  o primeiro contato. Negócios sem site ficam invisíveis nessa etapa.
                </p>
                <p>
                  Ter um site profissional equivale a ter uma loja bem sinalizada na avenida
                  mais movimentada da cidade — disponível 24 horas por dia, sete dias por semana,
                  sem depender do alcance de uma postagem nas redes sociais.
                </p>
                <p>
                  Diferente do Instagram ou do Facebook — plataformas que você não controla e
                  que mudam as regras sem avisar —, seu site é um ativo digital próprio. O
                  conteúdo está lá, o endereço é seu e qualquer pessoa pode encontrá-lo no Google.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="relative rounded-2xl border border-glow-cyan/20 bg-deep-blue/60 p-6 md:p-8 mb-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-glow-cyan/50" />
                <p className="font-display text-xs uppercase tracking-[0.3em] text-glow-aqua mb-3">
                  Ponto de atenção
                </p>
                <p className="text-ink-primary text-base md:text-lg leading-relaxed">
                  Não ter um site não significa que você está ausente da internet — significa
                  que quando alguém pesquisa pelo seu serviço em Manaus, quem aparece é o
                  seu concorrente.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 rounded-xl border border-white/8 bg-surface/50 hover:border-glow-cyan/20 transition-colors duration-300"
                  >
                    <div className="shrink-0 mt-0.5">
                      <item.Icon size={18} className={item.iconClass} />
                    </div>
                    <div>
                      <p className="font-display text-sm uppercase tracking-wide text-ink-primary mb-1.5">
                        {item.title}
                      </p>
                      <p className="text-ink-secondary text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SEÇÃO 2: PROCESSO ── */}
        <section className="py-16 md:py-20 bg-deep-blue/30">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-ink-primary mb-4">
                Como funciona a criação de um site profissional
              </h2>
              <p className="text-ink-secondary text-base leading-relaxed mb-12 max-w-2xl">
                Quando existe um processo bem definido, criar um site é simples e previsível.
                Nada de surpresa no meio do caminho. Veja cada etapa:
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {processSteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex gap-5 md:gap-6 p-6 rounded-2xl border border-white/8 bg-midnight/60 hover:border-glow-cyan/20 transition-colors duration-300">
                    <div className="shrink-0 font-display text-3xl md:text-4xl text-glow-cyan/15 leading-none w-12 pt-0.5 select-none">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-display text-sm md:text-base uppercase tracking-wide text-ink-primary mb-2.5">
                        {step.h3}
                      </h3>
                      <p className="text-ink-secondary text-sm md:text-base leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA INTERMEDIÁRIO ── */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <div className="relative rounded-2xl border border-glow-cyan/30 bg-gradient-to-br from-deep-blue/80 to-surface/60 p-8 md:p-10 text-center overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-grad-hero opacity-50" />
                <div className="relative">
                  <p className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua mb-4">
                    {site.name} — {site.city}
                  </p>
                  <p className="text-ink-primary text-lg md:text-xl leading-relaxed mb-7 max-w-lg mx-auto">
                    Quer saber quanto custa e quanto tempo leva para o seu site ficar pronto?
                  </p>
                  <GlowButton
                    href={wppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                  >
                    <MessageCircle size={18} />
                    Solicitar orçamento gratuito
                  </GlowButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SEÇÃO 3: TIPOS DE SITE ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-ink-primary mb-4">
                Qual tipo de site é ideal{" "}
                <span className="text-glow-aqua">para o seu negócio em Manaus?</span>
              </h2>
              <p className="text-ink-secondary text-base leading-relaxed mb-12 max-w-2xl">
                Antes de contratar, é importante entender que &quot;site&quot; não é uma solução única.
                O tipo certo depende do seu objetivo, do seu público e do que você quer que o
                visitante faça ao acessar a página.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {siteTypes.map((type, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="h-full flex flex-col rounded-2xl border border-white/8 bg-surface/50 hover:border-glow-cyan/20 transition-colors duration-300 p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className="p-2.5 rounded-xl bg-white/5">
                        <type.Icon size={type.iconSize} className={type.iconClass} />
                      </div>
                      <span className={`text-[10px] font-display uppercase tracking-wider border px-2.5 py-1 rounded-full ${type.badgeClass}`}>
                        {type.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-base uppercase tracking-wide text-ink-primary mb-3">
                      {type.h3}
                    </h3>
                    <p className="text-ink-secondary text-sm leading-relaxed mb-6 flex-1">
                      {type.content}
                    </p>
                    <div className="pt-5 border-t border-white/6 space-y-2.5">
                      <p className="font-display text-[10px] uppercase tracking-widest text-ink-muted mb-3">
                        Indicado para:
                      </p>
                      {type.good.map((g, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-accent-green shrink-0 mt-0.5" />
                          <span className="text-ink-secondary text-sm">{g}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEÇÃO 4: DIFERENCIAIS LOCAIS ── */}
        <section className="py-16 md:py-20 bg-deep-blue/30">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-ink-primary mb-4">
                Por que contratar uma empresa de criação de sites{" "}
                <span className="text-glow-aqua">em Manaus?</span>
              </h2>
              <p className="text-ink-secondary text-base leading-relaxed mb-12 max-w-2xl">
                Com plataformas automáticas e agências de outros estados disponíveis online, é
                natural perguntar: por que contratar localmente? A resposta é prática, não só
                regional.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {localDifferentials.map((item, i) => (
                <ScrollReveal key={i} delay={i * 55}>
                  <div className="flex gap-4 p-5 rounded-xl border border-white/8 bg-midnight/60 hover:border-glow-cyan/20 transition-colors duration-300 h-full">
                    <div className="shrink-0 mt-0.5">
                      <item.Icon size={18} className={item.iconClass} />
                    </div>
                    <div>
                      <p className="font-display text-sm uppercase tracking-wide text-ink-primary mb-1.5">
                        {item.title}
                      </p>
                      <p className="text-ink-secondary text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-accent-amber/20 bg-accent-amber/5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Star size={20} className="text-accent-amber shrink-0 mt-1" />
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.3em] text-accent-amber mb-3">
                      Quem somos
                    </p>
                    <p className="text-ink-secondary text-sm md:text-base leading-relaxed">
                      A{" "}
                      <strong className="text-ink-primary">{site.name}</strong> é uma empresa
                      de desenvolvimento web com base em Manaus, especializada em criar sites
                      profissionais para pequenos negócios, autônomos e profissionais liberais
                      em toda a região. Desenvolvemos projetos para clínicas, escritórios,
                      prestadores de serviço e comércio local. Nosso foco é direto: sites que
                      funcionam, aparecem no Google e geram resultado.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SEÇÃO 5: GUIA DE CONTRATAÇÃO ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-ink-primary mb-4">
                O que avaliar antes de contratar{" "}
                <span className="text-glow-aqua">desenvolvimento de sites em Manaus</span>
              </h2>
              <p className="text-ink-secondary text-base leading-relaxed mb-12 max-w-2xl">
                Independente de quem você contratar — inclusive nós —, existem perguntas que
                todo contratante deve fazer antes de fechar negócio.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {contractingGuide.map((item, i) => (
                <ScrollReveal key={i} delay={i * 70}>
                  <div className="rounded-2xl border border-white/8 bg-surface/40 hover:border-glow-cyan/20 transition-colors duration-300 overflow-hidden">
                    <div className="p-6">
                      <h3 className="font-display text-sm md:text-base uppercase tracking-wide text-ink-primary mb-3 flex items-center gap-3">
                        <span className="font-display text-sm text-glow-cyan/30 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.h3}
                      </h3>
                      <p className="text-ink-secondary text-sm md:text-base leading-relaxed mb-4">
                        {item.content}
                      </p>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-glow-cyan/5 border border-glow-cyan/15">
                        <Zap size={13} className="text-glow-cyan shrink-0 mt-0.5" />
                        <p className="text-glow-aqua/90 text-sm leading-relaxed">{item.tip}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-20 bg-deep-blue/30">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-glow-cyan/70" />
                  <span className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
                    Dúvidas frequentes
                  </span>
                  <span className="h-px w-8 bg-glow-cyan/70" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-ink-primary">
                  Perguntas frequentes sobre criação de sites em Manaus
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 45}>
                  <div className="rounded-2xl border border-white/8 bg-midnight/60 hover:border-glow-cyan/20 transition-colors duration-300 p-6">
                    <h3 className="font-display text-sm md:text-base uppercase tracking-wide text-glow-aqua mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-ink-secondary text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-glow-cyan/5 blur-[140px] rounded-full" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-magenta/4 blur-[120px] rounded-full -translate-y-1/2" />
          </div>

          <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
            <ScrollReveal>
              <div className="flex justify-center items-center gap-3 mb-6">
                <span className="h-px w-8 bg-glow-cyan/70" />
                <span className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
                  {site.name}
                </span>
                <span className="h-px w-8 bg-glow-cyan/70" />
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-ink-primary mb-6">
                Pronto para ter um site{" "}
                <span className="text-glow-aqua">profissional em Manaus?</span>
              </h2>

              <p className="text-ink-secondary text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Atendemos pequenas empresas, autônomos, clínicas e profissionais liberais em
                toda a região de Manaus. Orçamento gratuito, sem compromisso — respondemos no
                mesmo dia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                <GlowButton href="/#servicos" variant="ghost" size="lg">
                  Ver nossos serviços
                  <ArrowRight size={16} />
                </GlowButton>
              </div>

              <p className="text-ink-muted text-sm">
                Prefere e-mail?{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-glow-aqua hover:text-white transition-colors duration-200 underline underline-offset-2"
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
