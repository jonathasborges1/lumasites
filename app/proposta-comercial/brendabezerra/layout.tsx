import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-bb-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bb-body",
  display: "swap",
});

const ogImage = "/images/brendabezerra/og-image.jpg";

export const metadata: Metadata = {
  title: "Prévia Conceitual | Brenda Bezerra Estética & Bem-Estar",
  description:
    "Prévia conceitual para Brenda Bezerra: massagem terapêutica, drenagem linfática e limpeza de pele em Recife-PE.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Prévia Conceitual | Brenda Bezerra",
    description:
      "Estética & Bem-Estar em Recife-PE: uma proposta visual para transformar cuidado, pausa e leveza em presença digital.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Prévia Conceitual Brenda Bezerra Estética & Bem-Estar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prévia Conceitual | Brenda Bezerra",
    description:
      "Massagem terapêutica, drenagem linfática e limpeza de pele em Recife-PE.",
    images: [ogImage],
  },
};

export default function BrendaBezerraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${cormorant.variable} ${dmSans.variable}`}>{children}</div>;
}
