import { SectionTitle } from "@/components/SectionTitle";
import { Icon } from "@/components/Icon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { differentials } from "@/content/differentials";

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/40 to-transparent"
      />

      <div className="relative container mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Diferenciais"
            title="Por que nos escolher"
            subtitle="Somos de Manaus, falamos simples, entregamos rápido e cobramos o justo. Sem marketing vazio."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {differentials.map((d, idx) => (
            <ScrollReveal key={d.title} delay={idx * 80}>
              <div className="relative p-6 rounded-xl border border-white/10 bg-surface/40 hover:bg-surface/70 hover:border-glow-cyan/40 transition-all duration-500 group h-full overflow-hidden">
                {/* gradient hover background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 10%, rgba(79,200,255,.12), transparent 60%)",
                  }}
                />
                <div className="relative flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-glow-cyan/10 flex items-center justify-center group-hover:bg-glow-cyan/20 transition-colors">
                    <Icon
                      name={d.icon}
                      size={22}
                      className="text-glow-aqua group-hover:scale-110 transition-transform duration-500"
                      strokeWidth={1.6}
                    />
                  </div>
                  <h3 className="font-display text-base md:text-lg uppercase tracking-wide text-ink-primary">
                    {d.title}
                  </h3>
                </div>
                <p className="relative text-sm text-ink-secondary leading-relaxed">
                  {d.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
