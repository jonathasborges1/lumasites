"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { ScrollReveal } from "@/components/ScrollReveal";
import { faq } from "@/content/faq";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="relative py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Dúvidas frequentes"
            title="O que as pessoas perguntam"
            subtitle="Respostas rápidas para as dúvidas mais comuns. Não achou a sua? Manda no WhatsApp."
          />
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={item.question} delay={i * 60}>
                <div
                  className={`rounded-xl border transition-all duration-500 ${
                    isOpen
                      ? "border-glow-cyan/60 bg-surface/80 shadow-glow-sm"
                      : "border-white/10 bg-surface/40 hover:border-glow-cyan/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5"
                  >
                    <span
                      className={`font-display uppercase tracking-wide text-sm md:text-base transition-colors duration-300 ${
                        isOpen ? "text-glow-aqua" : "text-ink-primary"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "border-glow-cyan text-glow-aqua rotate-180 shadow-glow-sm"
                          : "border-white/30 text-ink-muted rotate-0"
                      }`}
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-5 text-ink-secondary leading-relaxed text-sm md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
