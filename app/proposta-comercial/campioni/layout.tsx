import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campioni Advogados — Prévia Conceitual | Advocacia Trabalhista para Profissionais da Saúde",
  description:
    "Prévia conceitual de landing page para Campioni Advogados: advocacia trabalhista especializada em profissionais da saúde — escalas 12x36, insalubridade, sobreaviso, rescisão indireta e saúde indígena. Atendimento online para todo o Brasil, desde 2007.",
  alternates: {
    canonical: "/proposta-comercial/campioni",
  },
  openGraph: {
    title: "Campioni Advogados — Prévia Conceitual",
    description:
      "Landing page de alta conversão para advocacia trabalhista focada em profissionais da saúde: identidade preto e prata, jornada orientada a WhatsApp e conteúdo educativo.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/campioni/og-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Campioni Advogados — prévia conceitual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campioni Advogados — Prévia Conceitual",
    description:
      "Landing page de alta conversão para advocacia trabalhista focada em profissionais da saúde.",
    images: ["/images/campioni/og-image-v2.jpg"],
  },
};

export default function CampioniLayout({
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
