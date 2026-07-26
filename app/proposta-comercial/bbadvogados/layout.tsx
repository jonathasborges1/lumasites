import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";

const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--bb-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--bb-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bergamaschi & Bergamaschi Advogados Associados | Advocacia Nacional",
  description:
    "Escritório com 20 anos de atuação nacional e 20 mil processos conduzidos. Direito do Agronegócio, Empresarial, Tributário, Trabalhista, Previdenciário, Construção Civil, Servidores Públicos e Família e Sucessões.",
  keywords:
    "advocacia nacional, Bergamaschi Advogados, direito previdenciário, direito do agronegócio, direito tributário, direito empresarial, OAB RS, advogado Porto Alegre, advogado Encantado",
  alternates: {
    canonical: "/proposta-comercial/bbadvogados",
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
    title: "Bergamaschi & Bergamaschi Advogados Associados | Advocacia Nacional",
    description:
      "20 anos de atuação nacional e 20 mil processos conduzidos. Excelência técnica como hábito, resultado como compromisso.",
    url: "/proposta-comercial/bbadvogados",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bergamaschi & Bergamaschi Advogados Associados",
    description:
      "Advocacia com atuação nacional. 20 anos de excelência técnica e resultado.",
  },
};

export default function BBAdvogadosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${heading.variable} ${body.variable}`}>
      <style>{`
        [aria-label="Criar meu site com a Luma Sites"],
        .proposal-back-link {
          display: none !important;
        }
      `}</style>
      {children}
    </div>
  );
}
