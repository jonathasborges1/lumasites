"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GlowButton } from "@/components/GlowButton";
import { whatsappLink } from "@/utils/whatsapp";
import { site } from "@/content/site";
import { mainNavigation, servicePages } from "@/content/navigation";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isServicePage = servicePages.some((item) => item.href === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
        <Link
          href="/"
          className="font-display text-xl md:text-2xl uppercase tracking-[0.3em] text-ink-primary hover:text-glow-aqua transition-colors"
        >
          {site.brand}
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
              className={`flex items-center gap-1 font-display text-xs uppercase tracking-[0.18em] xl:tracking-[0.25em] transition-colors ${
                isServicePage
                  ? "text-glow-aqua"
                  : "text-ink-secondary hover:text-glow-aqua"
              }`}
            >
              Servicos
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 border border-white/12 bg-midnight/96 backdrop-blur-md shadow-xl">
                <div className="p-2">
                  {servicePages.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className={`block px-4 py-3 transition-colors hover:bg-glow-cyan/8 ${
                        pathname === item.href
                          ? "text-glow-aqua"
                          : "text-ink-secondary"
                      }`}
                    >
                      <span className="block font-display text-xs uppercase tracking-[0.16em]">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-ink-muted">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display text-xs uppercase tracking-[0.18em] xl:tracking-[0.25em] transition-colors ${
                pathname === item.href
                  ? "text-glow-aqua"
                  : "text-ink-secondary hover:text-glow-aqua"
              }`}
            >
              {item.label}
            </Link>
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
          onClick={() => setOpen((value) => !value)}
          className="md:hidden w-11 h-11 rounded-full border border-white/20 text-ink-primary flex items-center justify-center"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/8 bg-midnight/96 backdrop-blur-md animate-fade-up">
          <nav className="container mx-auto px-5 py-5 flex flex-col gap-1">
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((value) => !value)}
              className={`flex w-full items-center justify-between py-3 font-display text-sm uppercase tracking-[0.2em] ${
                isServicePage
                  ? "text-glow-aqua"
                  : "text-ink-secondary hover:text-glow-aqua"
              }`}
            >
              Servicos
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="mb-2 ml-4 flex flex-col gap-1 border-l border-glow-cyan/20 pl-4">
                {servicePages.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className={`py-2 transition-colors hover:text-glow-aqua ${
                      pathname === item.href ? "text-glow-aqua" : "text-ink-muted"
                    }`}
                  >
                    <span className="block font-display text-xs uppercase tracking-[0.18em]">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  setMobileServicesOpen(false);
                }}
                className={`py-3 font-display text-sm uppercase tracking-[0.2em] ${
                  pathname === item.href
                    ? "text-glow-aqua"
                    : "text-ink-secondary hover:text-glow-aqua"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3">
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
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
