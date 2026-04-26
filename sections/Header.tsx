"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GlowButton } from "@/components/GlowButton";
import { whatsappLink } from "@/utils/whatsapp";
import { site } from "@/content/site";
import { Menu, X, MessageCircle } from "lucide-react";

const nav = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="container mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-display text-xl md:text-2xl uppercase tracking-[0.3em] text-ink-primary hover:text-glow-aqua transition-colors"
        >
          {site.brand}
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-xs uppercase tracking-[0.25em] text-ink-secondary hover:text-glow-aqua transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-xs uppercase tracking-[0.25em] text-ink-secondary hover:text-glow-aqua transition-colors"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        <div className="hidden md:block">
          <GlowButton
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
          >
            <MessageCircle size={16} />
            Falar agora
          </GlowButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-11 h-11 rounded-full border border-white/20 text-ink-primary flex items-center justify-center"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/8 bg-midnight/96 backdrop-blur-md animate-fade-up">
          <nav className="container mx-auto px-5 py-5 flex flex-col gap-4">
            {nav.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-sm uppercase tracking-[0.2em] text-ink-secondary hover:text-glow-aqua"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-sm uppercase tracking-[0.2em] text-ink-secondary hover:text-glow-aqua"
                >
                  {item.label}
                </a>
              )
            ))}
            <GlowButton
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              onClick={() => setOpen(false)}
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </GlowButton>
          </nav>
        </div>
      )}
    </header>
  );
}
