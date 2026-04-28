import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { GlowButton } from "@/components/GlowButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/content/site";
import {
  CalendarDays,
  CheckCircle2,
  Zap,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  Clock,
  Star,
  AlertTriangle,
} from "lucide-react";
import {
  articleDates,
  pageMetadata,
  articleSchema,
  faqSchema,
  wppLink,
  faqs,
  rankingFactors,
  commonMistakes,
  actionSteps,
} from "./content";

export const metadata: Metadata = pageMetadata;

export default function ComoAparecerNoGoogleEmManausPage() {
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

          <div className="relative max-w-5xl mx-auto px-5 md:px-8">
            <div className="lg:grid lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] lg:gap-14 lg:items-start">

              {/* ── Coluna de texto ── */}
              <div>
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
                      Como Aparecer no Google em Manaus
                    </li>
                  </ol>
                </nav>

                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-glow-cyan/70" />
                  <span className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
                    Presença digital
                  </span>
                  <span className="h-px w-8 bg-glow-cyan/70" />
                </div>

                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] uppercase text-ink-primary leading-[1.1] mb-8">
                  Seu cliente está no Google.{" "}
                  <br />
                  <span className="text-glow-aqua">ele encontra você?</span>
                </h1>

                <div className="flex flex-wrap items-center gap-5 text-sm text-ink-muted mb-10">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-glow-cyan/60" />
                    Publicado em {articleDates.publishedLabel}
                  </span>
                  {articleDates.updatedLabel && (
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-accent-green/70" />
                      Atualizado em {articleDates.updatedLabel}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-glow-cyan/60" />
                    Leitura: 7 minutos
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={14} className="text-accent-amber/70" />
                    Para donos de negócios em Manaus
                  </span>
                </div>

                <div className="border-l-2 border-glow-cyan/30 pl-6 space-y-4 text-ink-secondary text-base md:text-lg leading-relaxed">
                  <p>
                    Toda vez que alguém em Manaus digita &quot;dentista perto de mim&quot;,
                    &quot;advocacia no Adrianópolis&quot; ou &quot;clínica de estética em Manaus&quot;,
                    o Google entrega uma lista de negócios. Alguns aparecem. Outros não existem para
                    quem está buscando. A diferença entre os dois grupos não é tamanho nem tempo
                    de mercado — é presença digital configurada corretamente.
                  </p>
                  <p>
                    Neste guia, você vai entender o que o Google leva em conta para decidir quem
                    aparece nas buscas locais, quais erros impedem negócios de serem encontrados e
                    quais ações concretas aplicar hoje para mudar isso.
                  </p>
                </div>
              </div>

              {/* ── Imagem lateral ── */}
              <div className="mt-12 lg:mt-0 lg:sticky lg:top-28">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-glow-sm">
                  <Image
                    src="/blog/cliente-no-google-manaus.png"
                    alt="Seu cliente está no Google — ele encontra você? Presença digital para negócios em Manaus"
                    width={640}
                    height={960}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SEÇÃO 1: FATORES DE RANQUEAMENTO ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-ink-primary mb-8">
                O que o Google considera para{" "}
                <span className="text-glow-aqua">mostrar negócios locais em Manaus</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-5 text-ink-secondary text-base leading-relaxed mb-10">
                <p>
                  Quando alguém pesquisa por um serviço local, o Google combina três critérios
                  principais para decidir quais negócios mostrar: relevância (seu negócio faz o
                  que a pessoa procura?), distância (você está próximo?) e proeminência (o Google
                  confia em você?). O terceiro é onde a maioria dos negócios em Manaus perde pontos.
                </p>
                <p>
                  Proeminência é construída ao longo do tempo com sinais consistentes: perfil
                  completo, avaliações positivas, um site confiável e informações coerentes em
                  todos os canais. Não é mágica — é configuração e constância.
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
                  Estar no Google não depende de pagar anúncios. Depende de ter as informações
                  certas, nos lugares certos, configuradas da forma correta.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="grid sm:grid-cols-2 gap-4">
                {rankingFactors.map((item, i) => (
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

        {/* ── SEÇÃO 2: GOOGLE MEU NEGÓCIO ── */}
        <section className="py-16 md:py-20 bg-deep-blue/30">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-ink-primary mb-4">
                Google Meu Negócio:{" "}
                <span className="text-glow-aqua">o ponto de partida gratuito</span>
              </h2>
              <p className="text-ink-secondary text-base leading-relaxed mb-10 max-w-2xl">
                O Google Business Profile — conhecido como Google Meu Negócio — é a ferramenta
                gratuita que faz seu negócio aparecer no Google Maps e nos resultados locais. É
                o passo mais importante e o mais ignorado por pequenos negócios em Manaus.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="space-y-4 mb-10">
                <div className="rounded-2xl border border-white/8 bg-midnight/60 p-6">
                  <p className="font-display text-sm uppercase tracking-wide text-ink-primary mb-3">
                    O que você consegue com o perfil completo
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Aparecer no Google Maps",
                      "Receber ligações direto pelo Google",
                      "Mostrar fotos, horários e avaliações",
                      "Aparecer em buscas por bairro",
                      "Receber mensagens e pedidos de direção",
                      "Ver quantas pessoas encontraram seu negócio",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-accent-green shrink-0 mt-0.5" />
                        <span className="text-ink-secondary text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="rounded-2xl border border-accent-amber/20 bg-accent-amber/5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Star size={20} className="text-accent-amber shrink-0 mt-1" />
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.3em] text-accent-amber mb-3">
                      Dados que você precisa saber
                    </p>
                    <p className="text-ink-secondary text-sm md:text-base leading-relaxed">
                      Segundo o Google, perfis completos no Google Meu Negócio recebem{" "}
                      <strong className="text-ink-primary">7x mais cliques</strong> do que perfis
                      incompletos. Negócios com mais de 10 fotos recebem{" "}
                      <strong className="text-ink-primary">35% mais cliques</strong> para o site
                      e <strong className="text-ink-primary">42% mais pedidos de direção</strong>{" "}
                      pelo Maps. Em Manaus, onde a concorrência digital ainda é baixa em muitos
                      segmentos, isso representa uma vantagem real sobre quem não configurou.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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
                    Quer um site que já sai configurado para aparecer no Google em Manaus?
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

        {/* ── SEÇÃO 3: ERROS COMUNS ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-ink-primary mb-4">
                Erros que impedem negócios de{" "}
                <span className="text-glow-aqua">aparecer no Google em Manaus</span>
              </h2>
              <p className="text-ink-secondary text-base leading-relaxed mb-12 max-w-2xl">
                Antes de aplicar novas ações, vale identificar o que pode estar sabotando
                sua visibilidade hoje. Esses são os erros mais comuns que encontramos nos negócios
                locais de Manaus.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {commonMistakes.map((item, i) => (
                <ScrollReveal key={i} delay={i * 70}>
                  <div className="flex gap-4 p-6 rounded-2xl border border-white/8 bg-surface/40 hover:border-glow-cyan/20 transition-colors duration-300">
                    <div className="shrink-0 mt-0.5">
                      <AlertTriangle size={18} className="text-accent-amber" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm md:text-base uppercase tracking-wide text-ink-primary mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-ink-secondary text-sm md:text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEÇÃO 4: CHECKLIST ── */}
        <section className="py-16 md:py-20 bg-deep-blue/30">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-ink-primary mb-4">
                O que fazer{" "}
                <span className="text-glow-aqua">para aparecer no Google em Manaus</span>
              </h2>
              <p className="text-ink-secondary text-base leading-relaxed mb-12 max-w-2xl">
                Um checklist prático e na ordem certa. Cada passo constói sobre o anterior.
                Comece pelo primeiro e avance — qualquer ação já coloca você à frente de
                negócios que não fizeram nada.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {actionSteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="rounded-2xl border border-white/8 bg-midnight/60 hover:border-glow-cyan/20 transition-colors duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex gap-5 md:gap-6 mb-4">
                        <div className="shrink-0 font-display text-3xl md:text-4xl text-glow-cyan/15 leading-none w-12 pt-0.5 select-none">
                          {step.num}
                        </div>
                        <h3 className="font-display text-sm md:text-base uppercase tracking-wide text-ink-primary pt-1">
                          {step.h3}
                        </h3>
                      </div>
                      <p className="text-ink-secondary text-sm md:text-base leading-relaxed mb-4 pl-[68px] md:pl-[72px]">
                        {step.content}
                      </p>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-glow-cyan/5 border border-glow-cyan/15 ml-[68px] md:ml-[72px]">
                        <Zap size={13} className="text-glow-cyan shrink-0 mt-0.5" />
                        <p className="text-glow-aqua/90 text-sm leading-relaxed">{step.tip}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-20">
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
                  Perguntas frequentes sobre aparecer no Google em Manaus
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
                Pronto para ser encontrado{" "}
                <span className="text-glow-aqua">no Google em Manaus?</span>
              </h2>

              <p className="text-ink-secondary text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Desenvolvemos sites para pequenas empresas, clínicas, escritórios e profissionais
                autônomos em Manaus — já otimizados para aparecer nas buscas locais desde o
                primeiro dia. Orçamento gratuito, sem compromisso.
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
