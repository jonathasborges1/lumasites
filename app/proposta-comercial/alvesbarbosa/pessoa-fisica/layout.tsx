import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alves Barbosa Advogados — Pessoa Física | Trabalhista, Contratos, Família e Consumidor",
  description:
    "Assessoria jurídica para pessoa física: direito trabalhista, contratos, família e sucessões, e direito do consumidor. Alves Barbosa Sociedade de Advogados, sediado em Alphaville, atendimento em todo o Brasil.",
  alternates: {
    canonical: "/proposta-comercial/alvesbarbosa/pessoa-fisica",
  },
  openGraph: {
    title: "Alves Barbosa Advogados — Pessoa Física",
    description:
      "Direito Trabalhista, Direito Contratual, Família e Sucessões, e Direito do Consumidor — assessoria jurídica individual, com orientação clara e acompanhamento em cada etapa.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/alvesbarbosa/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Alves Barbosa Advogados — Pessoa Física",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alves Barbosa Advogados — Pessoa Física",
    description: "Direito Trabalhista, Contratual, Família e Sucessões, e Direito do Consumidor.",
    images: ["/images/alvesbarbosa/og-image-v2.png"],
  },
};

export default function PessoaFisicaLayout({
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
