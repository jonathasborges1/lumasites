"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { TornCard } from "@/components/TornCard";
import { Icon } from "@/components/Icon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Aurora } from "@/components/Aurora";
import { services } from "@/content/services";
import { useSelection } from "@/components/SelectionContext";
import { whatsappLink } from "@/utils/whatsapp";
import { Check, MessageCircle, Plus, Minus } from "lucide-react";

export function Services() {
  const { toggle, has } = useSelection();

  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <Aurora intensity="soft" />
      <div className="relative container mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Nossos serviços"
            title="Escolha o seu tipo de site"
            subtitle={
              <>
                Clique nos cards para montar seu{" "}
                <span className="text-glow-aqua font-medium">combo</span>. O
                botão de{" "}
                <span className="text-glow-aqua font-medium">WhatsApp</span> vai
                resumir tudo para você em uma única mensagem.
              </>
            }
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map((s, idx) => {
            const selected = has(s.id);
            return (
              <ScrollReveal
                key={s.id}
                delay={idx * 120}
                direction={idx % 2 === 0 ? "up" : "up"}
              >
                <TornCard
                  highlight={s.highlight || selected}
                  className={`p-6 md:p-8 h-full flex flex-col group ${
                    selected ? "scale-[1.015]" : ""
                  } transition-transform`}
                >
                  {s.highlight && (
                    <span className="absolute -top-3 left-6 rounded-full border border-accent-amber/80 bg-midnight px-3 py-1 font-display text-[10px] uppercase tracking-[0.3em] text-accent-amber shadow-glow-amber animate-pulse-glow">
                      Mais pedido
                    </span>
                  )}

                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full bg-glow-cyan/10 border-2 border-glow-cyan/60 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md group-hover:scale-105 transition-all duration-500">
                        <Icon
                          name={s.icon}
                          size={26}
                          className="text-glow-aqua"
                        />
                        {(s.highlight || selected) && (
                          <span className="absolute inset-0 rounded-full border border-glow-cyan/40 animate-ripple" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-display text-2xl uppercase text-ink-primary group-hover:text-glow-aqua transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-sm text-glow-aqua font-display tracking-wide">
                          {s.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-ink-secondary leading-relaxed mb-5">
                    {s.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {s.features.map((f, fi) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-ink-secondary opacity-0 animate-fade-up"
                        style={{ animationDelay: `${fi * 80}ms` }}
                      >
                        <Check
                          size={16}
                          className="text-accent-green mt-0.5 flex-shrink-0"
                          strokeWidth={2.4}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between">
                    <div>
                      <div className="font-display text-xs uppercase tracking-[0.25em] text-ink-muted">
                        A partir de
                      </div>
                      <div className="font-display text-3xl text-glow-aqua leading-none mt-1">
                        {s.priceFrom}
                      </div>
                      <div className="text-xs text-ink-muted mt-1">
                        Entrega: {s.deliveryDays}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggle(s.id)}
                        aria-pressed={selected}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 font-display uppercase tracking-wider text-xs transition-all duration-300 active:scale-95 ${
                          selected
                            ? "bg-accent-amber/20 border-accent-amber text-accent-amber shadow-glow-amber"
                            : "bg-midnight/40 border-white/20 text-ink-secondary hover:border-glow-cyan/50 hover:text-glow-aqua"
                        }`}
                      >
                        {selected ? <Minus size={14} /> : <Plus size={14} />}
                        {selected ? "Selecionado" : "Selecionar"}
                      </button>

                      <a
                        href={whatsappLink({ service: s.title })}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Falar sobre ${s.title} no WhatsApp`}
                        className="relative inline-flex items-center justify-center w-11 h-11 rounded-full bg-glow-cyan/10 border-2 border-glow-cyan/70 text-glow-aqua hover:bg-glow-cyan/25 hover:shadow-glow-md transition-all hover:scale-110 active:scale-95"
                      >
                        <MessageCircle size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] uppercase tracking-widest text-ink-muted">
                    Ideal para: {s.idealFor}
                  </p>
                </TornCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200}>
          <p className="mt-10 text-center text-sm text-ink-muted">
            Não achou o que precisa?{" "}
            <a
              href={whatsappLink({
                custom: "Tenho uma ideia diferente de site.",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="text-glow-aqua underline hover:text-white"
            >
              conta pra gente no WhatsApp
            </a>{" "}
            — a gente monta algo sob medida.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
