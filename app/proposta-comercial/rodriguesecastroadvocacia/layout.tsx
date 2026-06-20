import { Montserrat, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--rc-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--rc-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodrigues e Castro Advocacia | Direito Civil, Trabalhista e do Consumidor — AM",
  description:
    "Escritório de advocacia com atuação em Direito Civil, Trabalhista e do Consumidor. Anne Castro (OAB/AM-11421) e Juliana Rodrigues (OAB/AM-10547). Atendimento em Manaus mediante agendamento.",
  keywords:
    "advocacia Amazonas, advogado Manaus, direito civil AM, direito trabalhista AM, direito consumidor AM, Rodrigues e Castro Advocacia, OAB AM",
  alternates: {
    canonical: "/proposta-comercial/rodriguesecastroadvocacia",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Rodrigues e Castro Advocacia | Direito Civil · Trabalhista · Consumidor",
    description:
      "Advocacia com atuação em Direito Civil, Trabalhista e do Consumidor em Manaus. Atendimento transparente e mediante agendamento.",
    url: "/proposta-comercial/rodriguesecastroadvocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/rodriguesecastroadvocacia/hero-v2.png",
        width: 1672,
        height: 941,
        alt: "Rodrigues e Castro Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigues e Castro Advocacia",
    description:
      "Advocacia com atuação em Direito Civil, Trabalhista e do Consumidor em Manaus.",
    images: ["/images/rodriguesecastroadvocacia/hero-v2.png"],
  },
};

export default function RodriguesCastroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${montserrat.variable}`}>
      <style>{`[aria-label="Criar meu site com a Luma Sites"]{display:none!important}`}</style>
      {children}
    </div>
  );
}
