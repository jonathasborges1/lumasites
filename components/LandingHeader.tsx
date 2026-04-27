"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-midnight/92 backdrop-blur-md border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl uppercase tracking-[0.3em] text-ink-primary hover:text-glow-aqua transition-colors"
        >
          {site.brand}
        </Link>
      </div>
    </header>
  );
}
