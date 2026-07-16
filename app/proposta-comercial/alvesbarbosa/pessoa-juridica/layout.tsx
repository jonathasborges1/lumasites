import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alves Barbosa Advogados — Pessoa Jurídica | Consultoria Jurídica Empresarial",
  description:
    "Assessoria jurídica completa para empresas: administrativo, cível, empresarial, trabalhista e entretenimento. Alves Barbosa Sociedade de Advogados, sediado em Alphaville, atuação em todo o território nacional.",
  alternates: {
    canonical: "/proposta-comercial/alvesbarbosa/pessoa-juridica",
  },
  openGraph: {
    title: "Alves Barbosa Advogados — Pessoa Jurídica",
    description:
      "Consultoria jurídica para todo tipo de empresa — advocacia do dia a dia, soluções em direito em todo o território nacional.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/alvesbarbosa/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Alves Barbosa Advogados — Pessoa Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alves Barbosa Advogados — Pessoa Jurídica",
    description: "Consultoria jurídica empresarial: administrativo, cível, empresarial, trabalhista e entretenimento.",
    images: ["/images/alvesbarbosa/og-image-v2.png"],
  },
};

export default function PessoaJuridicaLayout({
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
