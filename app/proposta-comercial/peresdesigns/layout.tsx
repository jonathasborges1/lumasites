import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-pd-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-pd-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prévia Conceitual | Peres Design — Marcas com presença",
  description:
    "Prévia conceitual para Peres Design: identidade visual e design gráfico por Kethelyn Peres — Maringá, PR.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Prévia Conceitual | Peres Design",
    description:
      "Ideias ganham forma. Marcas ganham presença — proposta visual para a Peres Design.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prévia Conceitual | Peres Design",
    description:
      "Branding & Identidade Visual por Kethelyn Peres — Maringá, PR.",
  },
};

export default function PeresDesignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${cormorant.variable} ${montserrat.variable}`}>{children}</div>;
}
