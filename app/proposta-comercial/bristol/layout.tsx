import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bristol-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-bristol-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bristol Reserva Inglesa | Proposta Comercial",
  description:
    "Proposta comercial para o Bristol Reserva Inglesa, empreendimento em Ponta Negra com plantas de 97m2 a 253m2, coberturas duplex e mais de 22 itens de lazer.",
  openGraph: {
    title: "Bristol Reserva Inglesa | Ponta Negra - Manaus",
    description:
      "Exclusividade, conforto e sofisticacao em um novo endereco na Ponta Negra.",
    type: "website",
    images: [
      {
        url: "/images/bristol/bristol-torres-destaques.jpg",
        width: 1200,
        height: 675,
        alt: "Bristol Reserva Inglesa em Ponta Negra, Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bristol Reserva Inglesa | Ponta Negra - Manaus",
    description:
      "Plantas amplas, coberturas duplex e uma proposta premium para pre-venda imobiliaria.",
    images: ["/images/bristol/bristol-torres-destaques.jpg"],
  },
};

export default function BristolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${montserrat.variable} ${cormorant.variable}`}>
      {children}
    </div>
  );
}
