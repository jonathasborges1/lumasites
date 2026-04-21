"use client";

import { useEffect, useState } from "react";

type Firefly = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
};

const PALETTE = ["#4FC8FF", "#7FE5FF", "#FFD54F", "#C26BFF"];

export function Fireflies({ count = 24 }: { count?: number }) {
  const [items, setItems] = useState<Firefly[]>([]);

  useEffect(() => {
    const list = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 6,
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    }));
    setItems(list);
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {items.map((f) => (
        <span
          key={f.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            background: f.color,
            boxShadow: `0 0 ${f.size * 1.5}px ${f.color}, 0 0 ${
              f.size * 3
            }px ${f.color}`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            opacity: 0.26,
          }}
        />
      ))}
    </div>
  );
}
