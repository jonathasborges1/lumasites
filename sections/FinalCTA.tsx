import Image from "next/image";
import { GlowButton } from "@/components/GlowButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Fireflies } from "@/components/Fireflies";
import { whatsappLink } from "@/utils/whatsapp";
import { MessageCircle, Sparkles } from "lucide-react";

export function FinalCTA() {
  const currentMonth = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(new Date());

  return (
    <section
      id="contato"
      className="relative overflow-hidden py-20 md:py-28 lg:py-0"
    >
      {/* ── plano de fundo: floresta portal (luma-cover) ── */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/characters/luma-cover.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-30"
          sizes="100vw"
        />
        {/* overlay forte para manter contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/80 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-midnight/40 to-midnight/90" />
      </div>

      <Fireflies count={12} />

      {/* ── layout: personagem (esq) + texto (dir) ── */}
      <div className="relative container mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row items-end lg:items-center min-h-[560px] lg:min-h-[640px]">

          {/* personagem Luma — render 3D emergindo do fundo */}
          <ScrollReveal
            direction="up"
            className="hidden lg:block flex-shrink-0 self-end"
          >
            <div
              style={{
                position: "relative",
                width: 340,
                height: 500,
                mixBlendMode: "screen",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              }}
            >
              {/* glow âmbar no chão */}
              <div
                className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-32 h-10 rounded-full blur-2xl animate-pulse-glow"
                style={{ background: "rgba(255,175,60,.55)" }}
              />
              <Image
                src="/characters/luma-concept.png"
                alt="Luma, a personagem luminosa que representa sua presença digital"
                fill
                className="object-cover animate-float-slow"
                /* objectPosition: mostra apenas o render 3D (lado direito, 55-100%) */
                style={{ objectPosition: "96% 12%" }}
                sizes="340px"
              />
            </div>
          </ScrollReveal>

          {/* conteúdo textual */}
          <div className="flex-1 py-20 lg:py-28 lg:pl-12 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-amber/40 bg-midnight/80 px-4 py-1.5 backdrop-blur-sm">
                <Sparkles size={13} className="text-accent-amber animate-pulse-glow" />
                <span className="font-display text-xs uppercase tracking-[0.3em] text-accent-amber">
                  Vagas limitadas em {currentMonth}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <h2
                className="mt-6 font-display uppercase leading-[0.93] text-ink-primary"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                  textShadow: "0 2px 4px rgba(0,0,0,.5)",
                }}
              >
                Hora de acender
                <br />
                <span
                  className="animate-shimmer-slow bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(100deg,#f0fbff 20%,#b7eaff 40%,#fff 50%,#b7eaff 60%,#f0fbff 80%)",
                    backgroundSize: "200% 100%",
                    display: "inline-block",
                  }}
                >
                  a sua luz
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={260}>
              <p className="mt-5 text-base md:text-lg text-ink-primary/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Manda um oi no WhatsApp. Em minutos, você vai saber exatamente
                quanto custa e em quantos dias seu site fica no ar.{" "}
                <span className="text-glow-aqua font-medium">
                  Sem compromisso.
                </span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={380}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <GlowButton
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="amber"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle size={18} strokeWidth={2} />
                  Quero meu orçamento agora
                </GlowButton>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-ink-muted">
                Resposta em minutos · Sem robô · Atendimento em Manaus
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
