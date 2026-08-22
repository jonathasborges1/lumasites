import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-almeida-display",
  display: "swap",
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-almeida-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Almeida Advocacia | Família, Trabalho e Previdenciário em São Miguel Paulista",
  description:
    "Dra. Patrícia Oliveira Almeida, OAB/SP 387.824, advocacia em Direito de Família, Trabalho e Previdenciário na Zona Leste de São Paulo. Atendimento presencial ou à distância, com sigilo absoluto.",
  alternates: {
    canonical:
      "https://lumasites.com.br/proposta-comercial/escritorioalmeidaadv",
  },
  openGraph: {
    title: "Almeida Advocacia | São Miguel Paulista, SP",
    description:
      "Advocacia em Direito de Família, Trabalho e Previdenciário, com atendimento próximo e técnico na Zona Leste de São Paulo. OAB/SP 387.824.",
    type: "website",
    locale: "pt_BR",
    url: "https://lumasites.com.br/proposta-comercial/escritorioalmeidaadv",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almeida Advocacia | São Miguel Paulista, SP",
    description:
      "Advocacia em Direito de Família, Trabalho e Previdenciário na Zona Leste de São Paulo.",
  },
  robots: { index: false, follow: false },
};

export default function AlmeidaAdvocaciaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${display.variable} ${body.variable}`}>{children}</div>;
}
