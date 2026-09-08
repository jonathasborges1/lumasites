import Link from "next/link";
import { site } from "@/content/site";
import { footerNavigation, servicePages } from "@/content/navigation";
import { reportIssueLink, whatsappLink } from "@/utils/whatsapp";
import { ArrowRight, CircleAlert, MessageCircle, Mail, MapPin } from "lucide-react";

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

            <div className="mt-7 border-l-2 border-glow-cyan/35 bg-white/[0.025] px-3 py-3">
              <div className="font-display text-[10px] uppercase tracking-[0.2em] text-glow-aqua">
                Suporte
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                Encontrou algo que não funciona corretamente?
              </p>
              <a
                href={reportIssueLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-ink-secondary transition-colors hover:text-glow-aqua"
              >
                <CircleAlert size={13} />
                Reportar problema
              </a>
            </div>
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
