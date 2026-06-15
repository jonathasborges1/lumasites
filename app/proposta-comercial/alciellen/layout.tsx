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
        url: "/images/alciellen/alciellen-consultora-comercial.png",
        width: 1000,
        height: 1500,
        alt: "Alciellen, consultora comercial da J&R Concretos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alciellen | Concreto Usinado e Lajes Pre-Moldadas em Manaus",
    description:
      "Atendimento especializado para concreto usinado, lajes pre-moldadas, vigotas e bombeamento em Manaus.",
    images: ["/images/alciellen/alciellen-consultora-comercial.png"],
  },
};

export default function AlciellenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
