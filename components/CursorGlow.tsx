"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (isTouch || reduced) return;

    setEnabled(true);

    let rafId = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      const el = glowRef.current;
      if (el) {
        el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 w-[400px] h-[400px] mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(79,200,255,.14) 0%, rgba(127,229,255,.06) 30%, transparent 60%)",
        willChange: "transform",
      }}
    />
  );
}
