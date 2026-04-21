"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

export function StarField({ count = 60 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const list = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 0.8 + Math.random() * 2,
      delay: Math.random() * 8,
      duration: 3 + Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setStars(list);
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: s.opacity,
            boxShadow: `0 0 ${s.size * 2}px rgba(255,255,255,.6)`,
          }}
        />
      ))}
    </div>
  );
}
