import Link from "next/link";
import { site } from "@/content/site";
import { footerNavigation, servicePages } from "@/content/navigation";
import { whatsappLink } from "@/utils/whatsapp";
import { ArrowRight, MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-midnight/80">
      <div className="container mx-auto px-5 py-12 md:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 md:gap-x-12 md:gap-y-10 lg:grid-cols-[1.45fr_0.9fr_1fr_1.15fr] lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div
              className="font-display text-3xl uppercase tracking-[0.2em] text-ink-primary"
              style={{
                textShadow:
                  "0 0 10px rgba(79,200,255,.6), 0 0 24px rgba(79,200,255,.3)",
              }}
            >
              {site.brand}
            </div>
            <p className="mt-3 text-sm text-ink-secondary max-w-xs leading-relaxed">
              {site.tagline}. Criação de sites simples, rápidos e profissionais em{" "}
              {site.region}.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-glow-cyan/35 bg-glow-cyan/[0.06] px-4 py-2.5 font-display text-xs uppercase tracking-[0.16em] text-glow-aqua transition-colors hover:border-glow-cyan/60 hover:bg-glow-cyan/[0.12] hover:text-white"
            >
              Solicitar orçamento
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="min-w-0">
            <div className="font-display uppercase tracking-[0.2em] text-sm text-glow-aqua mb-4">
              Navegação
            </div>
            <ul className="space-y-2 text-sm text-ink-secondary">
              {footerNavigation.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-glow-aqua transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <div className="font-display uppercase tracking-[0.2em] text-sm text-glow-aqua mb-4">
              Serviços
            </div>
            <ul className="space-y-2 text-sm text-ink-secondary">
              {servicePages.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-glow-aqua transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          <div className="col-span-2 lg:col-span-1">
            <div className="font-display uppercase tracking-[0.2em] text-sm text-glow-aqua mb-4">
              Contato
            </div>
            <ul className="space-y-3 text-sm text-ink-secondary">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-glow-aqua transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 hover:text-glow-aqua transition-colors"
                >
                  <Mail size={14} />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin size={14} />
                {site.region}
              </li>
            </ul>

            <div className="mt-7 font-display uppercase tracking-[0.2em] text-xs text-glow-aqua mb-3">
              Redes
            </div>
            <ul className="space-y-3 text-sm text-ink-secondary">
              <li>
                <a
                  href="https://instagram.com/jonathasborges1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 hover:text-glow-aqua transition-colors"
                >
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @jonathasborges1
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jonathasborges1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center gap-2 hover:text-glow-aqua transition-colors"
                >
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  jonathasborges1
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ink-muted lg:flex-row lg:items-center lg:pr-20">
          <p>
            © {year} {site.name}. Feito em Manaus para o mundo.
          </p>
          <p className="max-w-3xl uppercase tracking-[0.2em] lg:text-right lg:tracking-[0.25em]">
            CNPJ sob consulta · Atendimento presencial mediante agendamento
          </p>
        </div>
      </div>
    </footer>
  );
}
