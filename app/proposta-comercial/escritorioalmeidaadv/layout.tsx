import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-almeida-display",
  display: "swap",
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-almeida-body",
  display: "swap",
});

const OG_IMAGE_URL =
  "https://lumasites.com.br/images/escritorioalmeidaadv/almeida-advocacia-og-v3.jpg";

export const metadata: Metadata = {
  title: "Almeida Advocacia | Doenças ocupacionais em São Miguel Paulista",
  description:
    "Advocacia trabalhista e previdenciária para trabalhadores com doenças ocupacionais, concausa e benefícios por incapacidade. Atendimento presencial ou à distância.",
  alternates: {
    canonical:
      "https://lumasites.com.br/proposta-comercial/escritorioalmeidaadv",
  },
  openGraph: {
    title: "Doenças ocupacionais | Almeida Advocacia",
    description:
      "Orientação trabalhista e previdenciária quando o trabalho causa ou agrava a saúde. OAB/SP 387.824.",
    type: "website",
    locale: "pt_BR",
    url: "https://lumasites.com.br/proposta-comercial/escritorioalmeidaadv",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Almeida Advocacia — orientação sobre doenças ocupacionais",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doenças ocupacionais | Almeida Advocacia",
    description:
      "Orientação trabalhista e previdenciária quando o trabalho causa ou agrava a saúde.",
    images: [OG_IMAGE_URL],
  },
  robots: { index: false, follow: false },
};

export default function AlmeidaAdvocaciaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${display.variable} ${body.variable}`}>{children}</div>;
}
