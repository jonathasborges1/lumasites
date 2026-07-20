import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-tv-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-tv-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proposta Comercial | Dra. Tatiane Vasconcelos",
  description:
    "Diagnóstico, direção estratégica, conceito visual, escopo e investimento para o novo site institucional da Dra. Tatiane Vasconcelos das Graças.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Proposta Comercial | Dra. Tatiane Vasconcelos das Graças",
    description:
      "Uma proposta da Luma Sites para fortalecer a presença digital da Dra. Tatiane Vasconcelos — Advocacia Previdenciária e Trabalhista.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/tatianevgracas/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Proposta comercial para Dra. Tatiane Vasconcelos das Graças",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proposta Comercial | Dra. Tatiane Vasconcelos das Graças",
    description:
      "Conceito visual e direção estratégica para presença digital.",
    images: ["/images/tatianevgracas/og-image.jpg"],
  },
};

export default function TatianeVGracasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${playfair.variable}`}>
      {children}
    </div>
  );
}
