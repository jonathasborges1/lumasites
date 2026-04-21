import { SectionTitle } from "@/components/SectionTitle";
import { TornCard } from "@/components/TornCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { testimonials } from "@/content/testimonials";
import { Star, MapPin, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Prova social"
            title="Quem já saiu da escuridão"
            subtitle={
              <>
                Clientes reais de{" "}
                <span className="text-glow-aqua font-medium">Manaus</span> que
                hoje recebem contato{" "}
                <span className="text-glow-aqua font-medium">todo dia</span>{" "}
                pela internet.
              </>
            }
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.name} delay={idx * 140}>
              <TornCard className="p-6 md:p-7 flex flex-col h-full group relative overflow-hidden">
                <Quote
                  aria-hidden="true"
                  className="absolute -top-2 -right-2 text-glow-cyan/10 group-hover:text-glow-cyan/20 transition-colors"
                  size={80}
                  strokeWidth={1}
                />
                <div
                  aria-label={`Avaliação ${t.rating} de 5`}
                  className="flex items-center gap-1 mb-4"
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent-gold text-accent-gold animate-twinkle"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>

                <p className="relative text-ink-secondary leading-relaxed italic mb-6 z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="relative mt-auto flex items-center gap-3 pt-4 border-t border-white/10 z-10">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-glow-cyan/40 to-accent-magenta/40 flex items-center justify-center font-display text-sm text-white shadow-glow-sm group-hover:shadow-glow-md transition-all">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display uppercase tracking-wide text-ink-primary text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-ink-muted">{t.role}</div>
                    <div className="flex items-center gap-1 text-[10px] text-ink-muted mt-0.5">
                      <MapPin size={10} />
                      {t.location}
                    </div>
                  </div>
                </div>
              </TornCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
