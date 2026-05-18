"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Seguros", href: "#seguros" },
  { label: "Saúde", href: "#saude" },
  { label: "Consórcio", href: "#consorcio" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/551239468433";
const LOGO_URL =
  "https://markha.com.br/wp-content/uploads/2023/07/cropped-MARKHA-CONSULTORIA-EM-SEGUROS-AZUL.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className="fixed left-0 right-0 z-[90] transition-all duration-300"
      style={{
        top: "36px",
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.98)"
          : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid #E2E8F0"
          : "1px solid rgba(226,232,240,0.5)",
        boxShadow: scrolled ? "0 2px 24px rgba(22,32,112,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0" aria-label="Markha — Início">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_URL}
              alt="Markha Consultoria em Seguros"
              width={140}
              height={52}
              className="h-9 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "#5A6080" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#162070";
                  e.currentTarget.style.backgroundColor = "#EEF1FC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#5A6080";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:+551239468433`}
              className="text-sm font-medium transition-colors"
              style={{ color: "#5A6080" }}
            >
              (12) 3946-8433
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "#162070" }}
            >
              Solicitar Cotação
            </a>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#162070" }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "#E2E8F0", backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium rounded-xl transition-colors"
                style={{ color: "#1A1A2E" }}
                onClick={handleNavClick}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#EEF1FC")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 px-4 py-3 text-sm font-semibold rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#162070" }}
              onClick={handleNavClick}
            >
              Solicitar Cotação pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
