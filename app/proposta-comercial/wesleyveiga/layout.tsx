import type { Metadata } from "next";

const title = "Wesley Veiga — Advogado do Agronegócio e Empresas";
const description =
  "Prévia conceitual para Wesley Veiga: advocacia em direito agrário, bancário e empresarial para produtores rurais e empresas.";
const ogImage = "/wesleyveiga/og-wesley-veiga.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/proposta-comercial/wesleyveiga",
  },
  openGraph: {
    title: "Wesley Veiga — O agro não para. Sua defesa também não.",
    description,
    type: "website",
    locale: "pt_BR",
    url: "/proposta-comercial/wesleyveiga",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Wesley Veiga — advogado do agronegócio e empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wesley Veiga — Advogado do Agronegócio e Empresas",
    description,
    images: [ogImage],
  },
};

export default function WesleyVeigaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
