import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andre Lopes Hair Stylist | Colorimetria, Mechas & Make em Sao Paulo",
  description:
    "Hair stylist especialista em corte, colorimetria, mechas e maquiagem em Sao Paulo. Muito alem da beleza: autoestima para mulheres poderosas.",
  keywords:
    "hair stylist sao paulo, colorimetria sao paulo, mechas sao paulo, cabeleireiro bosque da saude, morena iluminada sao paulo, corte feminino sao paulo, maquiagem profissional sao paulo, andre lopes hair stylist",
  openGraph: {
    title: "Andre Lopes Hair Stylist | Colorimetria & Make . Sao Paulo",
    description:
      "Especialista em corte, colorimetria, mechas e maquiagem. Muito alem de cor, corte e tratamentos: autoestima para mulheres poderosas.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AndreLopesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
