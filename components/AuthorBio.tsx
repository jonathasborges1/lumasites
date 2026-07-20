import Image from "next/image";
import { Instagram } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import { site } from "@/content/site";

export function AuthorBio() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-glow-cyan/25 bg-gradient-to-br from-deep-blue/80 to-surface/60 p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-grad-hero opacity-25" />

      <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
        <div className="relative shrink-0">
          <div className="absolute inset-0 -m-2 rounded-full bg-glow-cyan/25 blur-xl" />
          <Image
            src="/images/author/jonathas-borges.jpg"
            alt="Jonathas Borges"
            width={72}
            height={72}
            className="relative h-[72px] w-[72px] rounded-full border-2 border-glow-cyan/50 object-cover shadow-glow-sm"
          />
        </div>

        <div>
          <p className="mb-2 font-display text-[11px] uppercase tracking-[0.3em] text-glow-aqua">
            Quem escreveu este artigo
          </p>
          <p className="mb-2.5 font-display text-lg uppercase tracking-wide text-ink-primary">
            Jonathas Borges
          </p>
          <p className="mb-5 max-w-md text-sm leading-relaxed text-ink-secondary">
            Escrevo e desenvolvo os sites da {site.name} em Manaus. Este artigo reflete decisões
            tomadas em projetos reais entregues a clientes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <GlowButton href="/proposta-comercial" variant="ghost" size="md">
              Ver portfólio
            </GlowButton>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wide text-ink-muted transition-colors duration-200 hover:text-glow-aqua"
            >
              <Instagram size={13} />
              @jonathasborges1
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
