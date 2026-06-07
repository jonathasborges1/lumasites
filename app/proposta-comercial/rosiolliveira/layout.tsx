import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olliveira & Contadoras Associadas | Estratégia que gera legado",
  description:
    "Contabilidade estratégica e consultiva para empresas que desejam crescer com segurança, previsibilidade e inteligência financeira. Manaus e todo o Brasil.",
  keywords:
    "contabilidade estratégica Manaus, planejamento tributário, consultoria empresarial, BPO financeiro, Rosi Olliveira contadora, Olliveira Contabilidade",
  openGraph: {
    title: "Olliveira & Contadoras Associadas | Estratégia que gera legado",
    description:
      "Transformamos números em decisões estratégicas. Ajudamos empresários a crescer com segurança e inteligência financeira.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/rosiolliveira/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olliveira & Contadoras Associadas — contabilidade que impulsiona decisões",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olliveira & Contadoras Associadas | Estratégia que gera legado",
    description:
      "Transformamos números em decisões estratégicas. Ajudamos empresários a crescer com segurança e inteligência financeira.",
    images: ["/images/rosiolliveira/og-image.jpg"],
  },
};

export default function RosiOlliviiraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
