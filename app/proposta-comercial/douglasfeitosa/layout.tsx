import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Douglas Feitosa Advocacia | Prévia Conceitual",
  description:
    "Prévia conceitual de landing page para Douglas Feitosa Advocacia, com foco em Direito Previdenciário, atendimento online e conversão via WhatsApp.",
  openGraph: {
    title: "Douglas Feitosa Advocacia | Prévia Conceitual",
    description:
      "Landing page jurídica elegante, responsiva e orientada a atendimento online.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/douglasfeitosa/douglas-feitosa-retrato.jpg",
        width: 853,
        height: 1280,
        alt: "Douglas Feitosa, advogado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Feitosa Advocacia | Prévia Conceitual",
    description:
      "Landing page jurídica elegante, responsiva e orientada a atendimento online.",
    images: ["/images/douglasfeitosa/douglas-feitosa-retrato.jpg"],
  },
};

export default function DouglasFeitosaLayout({
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
