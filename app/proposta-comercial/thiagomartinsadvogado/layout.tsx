import { Fraunces, Inter } from "next/font/google";
import type { Metadata } from "next";

const heading = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--tm-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--tm-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thiago Martins Advogados | Defesa dos Direitos dos Trabalhadores",
  description:
    "Advocacia trabalhista dedicada à defesa dos trabalhadores, com clareza, ética e estratégia. Atendimento on-line em todo o Brasil e presencial em Belo Horizonte.",
  keywords:
    "Thiago Martins advogado, advogado trabalhista, direitos dos trabalhadores, verbas rescisórias, horas extras, reconhecimento de vínculo, Belo Horizonte",
  alternates: {
    canonical: "/proposta-comercial/thiagomartinsadvogado",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Thiago Martins Advogados | Direito do Trabalho",
    description:
      "Defesa dos direitos dos trabalhadores com clareza, ética e estratégia. Atendimento on-line em todo o Brasil.",
    url: "/proposta-comercial/thiagomartinsadvogado",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Martins Advogados",
    description: "Advocacia trabalhista para trabalhadores. Atendimento on-line em todo o Brasil.",
  },
};

export default function ThiagoMartinsAdvogadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${heading.variable} ${body.variable}`}>
      <style>{`
        [aria-label="Criar meu site com a Luma Sites"],
        .proposal-back-link {
          display: none !important;
        }
      `}</style>
      {children}
    </div>
  );
}
