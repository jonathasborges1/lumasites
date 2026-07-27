import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-angela-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-angela-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prévia Conceitual | Dra. Angela Carolina Nascimento",
  description:
    "Prévia conceitual do site da Dra. Angela Carolina Nascimento, médica dermatologista em Manaus.",
  alternates: {
    canonical:
      "https://lumasites.com.br/proposta-comercial/draangeladermato",
  },
  openGraph: {
    title: "Dra. Angela Carolina Nascimento | Dermatologista em Manaus",
    description:
      "Dermatologia clínica em Manaus com diagnóstico preciso, cuidado individualizado e condutas baseadas em evidências.",
    type: "website",
    locale: "pt_BR",
    url: "https://lumasites.com.br/proposta-comercial/draangeladermato",
    images: [
      {
        url: "/images/draangeladermato/dra-angela-og.png",
        width: 1200,
        height: 630,
        alt: "Dra. Angela Carolina Nascimento — Dermatologia clínica em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Angela Carolina Nascimento | Dermatologista em Manaus",
    description:
      "Dermatologia clínica em Manaus com diagnóstico preciso e cuidado individualizado.",
    images: ["/images/draangeladermato/dra-angela-og.png"],
  },
  robots: { index: false, follow: false },
};

export default function DraAngelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${display.variable} ${body.variable}`}>{children}</div>;
}
