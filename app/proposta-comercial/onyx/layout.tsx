import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoescola Onyx — Prévia Conceitual | Habilitação em Arujá e Suzano, Alto Tietê",
  description:
    "Prévia conceitual de site para a Autoescola Onyx: primeira habilitação (A e B), categorias profissionais (C, D e E), adição de categoria, curso de reciclagem e assessoria jurídica de trânsito. Unidades em Arujá e Suzano, desde 2007.",
  alternates: {
    canonical: "/proposta-comercial/onyx",
  },
  openGraph: {
    title: "Autoescola Onyx — Prévia Conceitual",
    description:
      "Site conceitual para a Autoescola Onyx: identidade laranja e preto, jornada de pré-matrícula via WhatsApp, preços transparentes e conteúdo completo dos serviços.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/onyx/onyx-estrutura.jpg",
        width: 1600,
        height: 1200,
        alt: "Frota da Autoescola Onyx — prévia conceitual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoescola Onyx — Prévia Conceitual",
    description:
      "Site conceitual de alta conversão para a Autoescola Onyx — Arujá e Suzano, Alto Tietê.",
    images: ["/images/onyx/onyx-estrutura.jpg"],
  },
};

export default function OnyxLayout({
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
