import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-juraci-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-juraci-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proposta Comercial | Dr. Juraci Nunes — Luma Sites",
  description:
    "Diagnóstico, direção estratégica, conceito visual, escopo e investimento para o novo site institucional do Dr. Juraci Nunes.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Proposta Comercial | Dr. Juraci Nunes",
    description:
      "Uma proposta da Luma Sites para fortalecer a presença digital do Dr. Juraci Nunes.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/juracinunes/og-juraci-nunes.jpg",
        width: 1200,
        height: 630,
        alt: "Proposta comercial para o novo site institucional do Dr. Juraci Nunes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proposta Comercial | Dr. Juraci Nunes",
    description:
      "Diagnóstico, conceito visual, escopo e investimento para o novo site.",
    images: ["/images/juracinunes/og-juraci-nunes.jpg"],
  },
};

export default function JuraciNunesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${montserrat.variable} ${playfair.variable}`}>
      {children}
    </div>
  );
}
