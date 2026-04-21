import { SectionTitle } from "@/components/SectionTitle";
import { TornCard } from "@/components/TornCard";
import { Icon } from "@/components/Icon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { benefits } from "@/content/benefits";

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Por que ter um site"
            title="Sem site, você some"
            subtitle="Hoje, quem não aparece na internet perde para o concorrente que aparece. Um site é o porteiro do seu negócio — 24 horas por dia, 7 dias por semana."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((b, idx) => (
            <ScrollReveal
              key={b.title}
              delay={idx * 100}
              direction={idx % 2 === 0 ? "up" : "up"}
            >
              <TornCard className="p-7 h-full group">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-glow-cyan/10 border border-glow-cyan/50 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-all duration-500">
                    <Icon
                      name={b.icon}
                      size={22}
                      className="text-glow-aqua group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute inset-0 rounded-full border border-glow-cyan/40 group-hover:animate-ripple" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-wide text-ink-primary mb-2 group-hover:text-glow-aqua transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-ink-secondary leading-relaxed text-sm md:text-base">
                      {b.description}
                    </p>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute top-4 right-4 font-display text-3xl text-white/5 tabular-nums group-hover:text-glow-cyan/20 transition-colors"
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </TornCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
