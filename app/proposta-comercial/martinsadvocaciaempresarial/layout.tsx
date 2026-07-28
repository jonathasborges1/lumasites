import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-martins-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-martins-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martins Advocacia Empresarial | Dívida bancária e patrimônio em Posse, GO",
  description:
    "Dr. Paulo Martins, OAB/GO 46.315 — advocacia empresarial em Posse, GO. Revisão de contratos bancários, redução de juros abusivos e proteção patrimonial para empresários e produtores rurais.",
  alternates: {
    canonical:
      "https://lumasites.com.br/proposta-comercial/martinsadvocaciaempresarial",
  },
  openGraph: {
    title: "Martins Advocacia Empresarial | Posse, GO",
    description:
      "Advocacia empresarial focada em dívida bancária, revisão de contratos e proteção patrimonial. OAB/GO 46.315.",
    type: "website",
    locale: "pt_BR",
    url: "https://lumasites.com.br/proposta-comercial/martinsadvocaciaempresarial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martins Advocacia Empresarial | Posse, GO",
    description:
      "Advocacia empresarial focada em dívida bancária, revisão de contratos e proteção patrimonial.",
  },
  robots: { index: false, follow: false },
};

export default function MartinsAdvocaciaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${display.variable} ${body.variable}`}>{children}</div>;
}
