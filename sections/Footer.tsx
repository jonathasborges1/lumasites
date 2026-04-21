import { site } from "@/content/site";
import { whatsappLink } from "@/utils/whatsapp";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-midnight/80">
      <div className="container mx-auto px-5 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
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
          </div>

          <div>
            <div className="font-display uppercase tracking-[0.2em] text-sm text-glow-aqua mb-4">
              Navegação
            </div>
            <ul className="space-y-2 text-sm text-ink-secondary">
              {[
                { href: "#beneficios", label: "Benefícios" },
                { href: "#servicos", label: "Serviços" },
                { href: "#como-funciona", label: "Como funciona" },
                { href: "#diferenciais", label: "Diferenciais" },
                { href: "#duvidas", label: "Dúvidas" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-glow-aqua transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
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
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 hover:text-glow-aqua transition-colors"
                >
                  <Instagram size={14} />
                  @lumasites
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <p>
            © {year} {site.name}. Feito em Manaus para o mundo.
          </p>
          <p className="uppercase tracking-[0.25em]">
            CNPJ sob consulta · Atendimento presencial mediante agendamento
          </p>
        </div>
      </div>
    </footer>
  );
}
