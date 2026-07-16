import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alves Barbosa Advogados — Prévia Conceitual | Assessoria Jurídica para Pessoas e Empresas",
  description:
    "Prévia conceitual de landing page para Alves Barbosa Sociedade de Advogados, sediado em Alphaville: assessoria jurídica completa para pessoas físicas e pessoas jurídicas, com páginas dedicadas para cada perfil. Atendimento em Barueri, Alphaville, Santana de Parnaíba, Tamboré e Carapicuíba.",
  alternates: {
    canonical: "/proposta-comercial/alvesbarbosa",
  },
  openGraph: {
    title: "Alves Barbosa Advogados — Prévia Conceitual",
    description:
      "Landing page conceitual para escritório de advocacia com atuação completa para Pessoa Física e Pessoa Jurídica — Alphaville e região.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/alvesbarbosa/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Alves Barbosa Advogados — prévia conceitual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alves Barbosa Advogados — Prévia Conceitual",
    description: "Assessoria jurídica completa para Pessoa Física e Pessoa Jurídica, sediado em Alphaville.",
    images: ["/images/alvesbarbosa/og-image-v2.png"],
  },
};

export default function AlvesBarbosaLayout({
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
