import Image from "next/image";
import { GlowButton } from "@/components/GlowButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { whatsappLink } from "@/utils/whatsapp";
import { MessageCircle } from "lucide-react";

export function MascotBand() {
  return (
    <section
      aria-label="Luma — seu guia digital"
      className="relative overflow-hidden py-0"
    >
      {/* fundo: silhueta das montanhas */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/characters/silhouette-band.png"
          alt=""
          fill
          className="object-cover object-bottom opacity-20"
          style={{ mixBlendMode: "luminosity" }}
        />
        {/* escurece o fundo para manter o tema */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/70 to-midnight" />
      </div>

      <div className="relative container mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-12">

          {/* ── personagem Luma ── */}
          <ScrollReveal direction="left" className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <div
              className="relative"
              style={{
                width: 320,
                height: 360,
                /* mask: fade topo (esconde céu creme) e fade base */
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 28%, black 80%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 28%, black 80%, transparent 100%)",
                mixBlendMode: "screen",
              }}
            >
              <Image
                src="/characters/luma-flying.png"
                alt="Luma, mascote da Luma Sites, flutuando com brilho dourado"
                fill
                className="object-cover"
                style={{ objectPosition: "8% 75%" }}
                sizes="320px"
              />
            </div>
          </ScrollReveal>

          {/* ── conteúdo textual ── */}
          <div className="flex-1 py-16 md:py-20 text-center md:text-left">
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
                <span className="h-px w-8 bg-glow-cyan/70" />
                <span className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
                  A metáfora por trás do nome
                </span>
                <span className="h-px w-8 bg-glow-cyan/70" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <h2
                className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-ink-primary leading-[0.95]"
                style={{
                  textShadow:
                    "0 0 10px rgba(79,200,255,.4), 0 0 28px rgba(79,200,255,.2)",
                }}
              >
                Luma é a{" "}
                <span className="text-glow-aqua">luz</span>
                <br />
                do seu negócio
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={280}>
              <p className="mt-5 text-ink-secondary text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                Na floresta digital, quem não tem um site fica{" "}
                <em className="not-italic text-ink-primary">invisível</em>. A
                Luma é a chama que guia seus clientes até você — um site simples,
                rápido e profissional que acende sua presença online em Manaus.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={400}>
              <div className="mt-8">
                <GlowButton
                  href={whatsappLink({
                    custom: "Quero acender minha presença digital.",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  <MessageCircle size={18} strokeWidth={2} />
                  Quero acender minha luz
                </GlowButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
