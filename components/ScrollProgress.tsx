"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const total = doc.scrollHeight - doc.clientHeight;
        const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
        const el = barRef.current;
        if (el) el.style.transform = `scaleX(${pct / 100})`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 inset-x-0 z-50 h-[2px] bg-transparent pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full origin-left"
        style={{
          transform: "scaleX(0)",
          background:
            "linear-gradient(90deg, #4FC8FF 0%, #7FE5FF 50%, #C26BFF 100%)",
          boxShadow: "0 0 8px rgba(79,200,255,.7)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
