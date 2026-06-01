import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageTransition } from "./PageTransition";
import { ProposalBackLink } from "./ProposalBackLink";
import { site } from "@/content/site";

export const metadata: Metadata = {
  openGraph: {
    images: [],
  },
  twitter: {
    card: "summary",
    images: [],
  },
};

const creativeWorkSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  creator: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

const waNumber = site.whatsapp.number;
const waMsg = encodeURIComponent(
  "Olá! Vi o portfólio da Luma Sites e quero criar meu site!",
);

export default function ProposalGroupLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <ProposalBackLink />
      <PageTransition>{children}</PageTransition>
      <a
        href={`https://wa.me/${waNumber}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Criar meu site com a Luma Sites"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-[#0a0e1a]/90 px-3.5 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-sm transition-opacity hover:opacity-80"
      >
        <span className="font-display text-[10px] font-semibold tracking-widest text-cyan-300">
          LUMA
        </span>
        <span className="text-white/30">·</span>
        <span className="text-slate-300">Criar meu site</span>
      </a>
    </>
  );
}
