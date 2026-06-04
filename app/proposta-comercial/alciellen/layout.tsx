import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alciellen | Concreto Usinado e Lajes Pre-Moldadas em Manaus",
  description:
    "Solicite orcamento de concreto usinado, lajes pre-moldadas, vigotas e bombeamento de concreto em Manaus com atendimento especializado.",
  keywords:
    "concreto usinado Manaus, laje pre moldada Manaus, vigotas para laje, bombeamento de concreto Manaus, J&R Concretos, Alciellen",
  openGraph: {
    title: "Alciellen | Concreto Usinado e Lajes Pre-Moldadas em Manaus",
    description:
      "Atendimento especializado para concreto usinado, lajes pre-moldadas, vigotas e bombeamento em Manaus.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/alciellen/concreto-usinado-jr-concretos-manaus.jpg",
        width: 738,
        height: 424,
        alt: "J&R Concretos - concreto usinado em Manaus",
      },
    ],
  },
};

export default function AlciellenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
