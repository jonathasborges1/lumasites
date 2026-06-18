import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antonio Aguiar | Advogado Bancário, Rio Branco AC",
  description:
    "Advogado especialista em Direito Bancário. Revisão de contratos, conta bloqueada, negativação indevida, busca e apreensão de veículo e suspensão de CNH. Atendimento online para todo o Brasil.",
  keywords:
    "advogado bancário rio branco ac, direito bancário acre, revisão contrato bancário, conta bloqueada, busca e apreensão veículo, negativação indevida, CNH suspensa dívida, advogado produtor rural, antonio aguiar advogado",
  openGraph: {
    title: "Antonio Aguiar | Advogado Bancário",
    description:
      "Defesa especializada em casos bancários: conta bloqueada, contrato abusivo, busca e apreensão, negativação indevida e CNH suspensa. Atendimento online em todo o Brasil.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/antonioaguiar/og-antonio-aguiar.jpg",
        width: 1200,
        height: 630,
        alt: "Antonio Aguiar, advogado especialista em Direito Bancário",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Aguiar | Advogado Bancário",
    description:
      "Estratégia e atuação especializada contra abusos bancários.",
    images: ["/images/antonioaguiar/og-antonio-aguiar.jpg"],
  },
};

export default function AntonioAguiarPropLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
