import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Consult Prev | Viviane Santos — Prévia Conceitual",
  description:
    "Prévia conceitual de landing page para Social Consult Prev (Viviane Santos): advocacia previdenciária especialista em BPC/LOAS, salário-maternidade, aposentadorias e benefícios do INSS, em São Paulo e online.",
  openGraph: {
    title: "Social Consult Prev | Viviane Santos — Prévia Conceitual",
    description:
      "Landing page previdenciária elegante, acessível e orientada a atendimento humanizado via WhatsApp.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/vivianesantos/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Social Consult Prev Advocacia — prévia conceitual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Consult Prev | Viviane Santos — Prévia Conceitual",
    description:
      "Landing page previdenciária elegante, acessível e orientada a atendimento humanizado via WhatsApp.",
    images: ["/images/vivianesantos/og-image.jpg"],
  },
};

export default function VivianeSantosLayout({
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
