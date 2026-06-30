import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fn-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-fn-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proposta Comercial | Fabiola Nascimento Semijoias — Luma Sites",
  description:
    "Diagnóstico, direção estratégica, conceito visual, escopo e investimento para o novo site da Fabiola Nascimento — semijoias de fabricação própria com programa de revendedoras.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Proposta Comercial | Fabiola Nascimento Semijoias",
    description:
      "Uma proposta da Luma Sites para elevar a presença digital da Fabiola Nascimento ao nível de autoridade que uma marca de fabricação própria merece.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/fabiolanascimento/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Proposta Comercial Fabiola Nascimento Semijoias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proposta Comercial | Fabiola Nascimento Semijoias",
    description:
      "Uma proposta da Luma Sites para elevar a presença digital da Fabiola Nascimento ao nível de autoridade que uma marca de fabricação própria merece.",
    images: ["/images/fabiolanascimento/og-image.jpg"],
  },
};

export default function FabiolaNascimentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${dmSans.variable} ${playfair.variable}`}>
      {children}
    </div>
  );
}
