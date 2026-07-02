import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-gs-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-gs-display",
  display: "swap",
});

const title = "Proposta Comercial | GeraSeg - Rastreamento & Monitoramento";
const description =
  "Uma proposta da Luma Sites para elevar a presenca digital da GeraSeg no segmento de seguranca e rastreamento veicular.";
const ogImage = "/images/geralseg/og-image.jpg";

export const metadata: Metadata = {
  title: "Proposta Comercial | GeraSeg Rastreamento Veicular - Luma Sites",
  description:
    "Direcao estrategica, conceito visual e escopo para o novo site da GeraSeg - solucoes em rastreamento veicular, monitoramento de frotas e videomonitoramento.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Previa conceitual da proposta comercial GeraSeg Rastreamento Veicular",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function GeraSsegLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable}`}>
      {children}
    </div>
  );
}
