import { Cormorant_Garamond, Montserrat } from "next/font/google";
import type { Metadata } from "next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--lo-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--lo-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luanda Oliveira Imóveis | Corretora de Alto Padrão em Goiânia",
  description:
    "Especialista em imóveis exclusivos em Goiânia e Região Metropolitana. Curadoria imobiliária premium, atendimento consultivo e foco em valorização patrimonial.",
  keywords:
    "corretora de imóveis goiânia, imóveis de alto padrão goiânia, condomínios fechados goiânia, investimento imobiliário goiânia, imóveis exclusivos goiânia, imóveis de luxo goiânia, luanda oliveira imóveis",
  openGraph: {
    title: "Luanda Oliveira Imóveis | Alto Padrão em Goiânia",
    description:
      "Curadoria imobiliária premium em Goiânia e Região Metropolitana. Atendimento consultivo, pós-venda próximo e imóveis com potencial de valorização.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function LuandaOliveiraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${cormorant.variable} ${montserrat.variable}`}
      style={{ isolation: "isolate" }}
    >
      {children}
    </div>
  );
}
