import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "RB Manutenção em Cadeiras — Prévia Conceitual | Conserto de Cadeiras Giratórias em Manaus",
  description:
    "Prévia conceitual de site para a RB Manutenção em Cadeiras: conserto, reforma e venda de cadeiras giratórias e estofados em Manaus. Mais de 20 anos no segmento, loja física no Coroado e orçamento pelo WhatsApp.",
  alternates: {
    canonical: "/proposta-comercial/rbcadeiras",
  },
  openGraph: {
    title: "RB Manutenção em Cadeiras — Prévia Conceitual",
    description:
      "Site conceitual para a RB Manutenção em Cadeiras: conserto e reforma de cadeiras giratórias em Manaus, com jornada de orçamento via WhatsApp e SEO local.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/rbcadeiras/rb-og-social.jpg",
        width: 1200,
        height: 630,
        alt: "RB Manutenção em Cadeiras — conserto e reforma de cadeiras em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RB Manutenção em Cadeiras — Prévia Conceitual",
    description:
      "Site conceitual para conserto e reforma de cadeiras giratórias em Manaus — Coroado, mais de 20 anos no segmento.",
    images: ["/images/rbcadeiras/rb-og-social.jpg"],
  },
};

export default function RbCadeirasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <style>{`
        [aria-label="Criar meu site com a Luma Sites"],
        .proposal-back-link {
          display:none!important;
        }
      `}</style>
      {children}
    </div>
  );
}
