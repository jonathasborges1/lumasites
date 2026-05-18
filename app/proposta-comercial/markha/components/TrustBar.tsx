"use client";

import { useEffect, useRef, useState } from "react";

function useAnimatedCounter(
  target: number,
  duration = 1800,
  active = false
): number {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  isActive,
}: {
  value: number;
  suffix: string;
  label: string;
  isActive: boolean;
}) {
  const count = useAnimatedCounter(value, 1800, isActive);

  return (
    <div className="flex flex-col items-center text-center px-6 py-8 sm:py-0">
      <span
        className="text-4xl sm:text-5xl lg:text-6xl font-bold tabular-nums leading-none mb-2"
        style={{ color: "#D4A017" }}
      >
        {count.toLocaleString("pt-BR")}
        {suffix}
      </span>
      <span
        className="text-sm sm:text-base font-medium uppercase tracking-wider"
        style={{ color: "rgba(255,255,255,0.65)" }}
      >
        {label}
      </span>
    </div>
  );
}

export function TrustBar() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      style={{ backgroundColor: "#162070" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x"
          style={{ "--tw-divide-opacity": "0.18" } as React.CSSProperties}
        >
          <div
            className="sm:border-r"
            style={{ borderColor: "rgba(255,255,255,0.18)" }}
          >
            <StatItem
              value={46}
              suffix=" anos"
              label="de experiência em seguros"
              isActive={visible}
            />
          </div>
          <div
            className="border-t sm:border-t-0 sm:border-r"
            style={{ borderColor: "rgba(255,255,255,0.18)" }}
          >
            <StatItem
              value={32000}
              suffix="+"
              label="vidas seguradas"
              isActive={visible}
            />
          </div>
          <div
            className="border-t sm:border-t-0"
            style={{ borderColor: "rgba(255,255,255,0.18)" }}
          >
            <StatItem
              value={500}
              suffix="+"
              label="contemplações no consórcio"
              isActive={visible}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
