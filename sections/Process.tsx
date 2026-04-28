"use client";

import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Icon } from "@/components/Icon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { processSteps } from "@/content/process";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="relative py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Como funciona"
            title="Do WhatsApp ao ar em dias"
            subtitle={
              <>
                Um processo{" "}
                <span className="text-glow-aqua font-medium">simples</span>,
                pensado para quem tem negócio para tocar e não tem tempo para
                perder.
              </>
            }
          />
        </ScrollReveal>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* linha SVG animada desktop */}
          <svg
            aria-hidden="true"
            className="hidden lg:block absolute top-14 left-0 right-0 w-full h-24 pointer-events-none"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#4FC8FF" stopOpacity="0" />
                <stop offset="20%" stopColor="#4FC8FF" stopOpacity=".6" />
                <stop offset="50%" stopColor="#7FE5FF" stopOpacity="1" />
                <stop offset="80%" stopColor="#4FC8FF" stopOpacity=".6" />
                <stop offset="100%" stopColor="#4FC8FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 120 40 Q 300 10, 500 40 T 880 40"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="1200"
              strokeDashoffset={inView ? 0 : 1200}
              style={{
                transition:
                  "stroke-dashoffset 2.4s cubic-bezier(.22,.61,.36,1)",
                filter: "drop-shadow(0 0 4px rgba(79,200,255,.6))",
              }}
            />
          </svg>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
            {processSteps.map((s, idx) => (
              <ScrollReveal
                key={s.step}
                delay={idx * 180}
                direction="up"
                duration={800}
              >
                <div className="relative text-center group">
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <div className="absolute inset-0 rounded-full bg-glow-cyan/5 border border-glow-cyan/30 group-hover:border-glow-cyan/70 group-hover:shadow-glow-md transition-all duration-500" />
                    <div className="absolute inset-2 rounded-full bg-midnight/80 flex items-center justify-center overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                        style={{
                          background:
                            "radial-gradient(circle at center, rgba(79,200,255,.35), transparent 70%)",
                        }}
                      />
                      <Icon
                        name={s.icon}
                        size={28}
                        className="text-glow-aqua relative z-10 group-hover:scale-110 transition-transform duration-500"
                        strokeWidth={1.4}
                      />
                    </div>
                    <div className="absolute -top-2 -right-1 w-9 h-9 rounded-full bg-midnight border-2 border-glow-cyan/70 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md group-hover:-rotate-12 transition-all duration-500">
                      <span className="font-display text-glow-aqua text-xs tabular-nums">
                        {s.step}
                      </span>
                    </div>
                    {/* ripple on the outer ring */}
                    <span className="absolute inset-0 rounded-full border border-glow-cyan/30 group-hover:animate-ripple" />
                  </div>

                  <h3 className="font-display text-xl uppercase tracking-wide text-ink-primary mb-2 group-hover:text-glow-aqua transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
