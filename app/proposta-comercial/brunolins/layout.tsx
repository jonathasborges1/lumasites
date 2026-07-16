import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bruno Lins de Arruda | Criminalista, Direito da Saúde e PCD",
  description:
    "Prévia conceitual para Bruno Lins de Arruda, advogado Criminalista com atuação também em Direito da Saúde e direitos da pessoa com deficiência (PCD). Atendimento em Maceió/AL, com emergências criminais 24 horas.",
  alternates: { canonical: "/proposta-comercial/brunolins" },
  openGraph: {
    title: "Bruno Lins de Arruda | Prévia conceitual",
    description:
      "Direito Criminal, Direito da Saúde e direitos da pessoa com deficiência, em uma presença digital clara e acessível.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/brunolins/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bruno Lins de Arruda — Direito que acolhe, voz que transforma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Lins de Arruda | Criminalista, Direito da Saúde e PCD",
    description:
      "Direito Criminal, Direito da Saúde e PCD, com vivência e inclusão em uma comunicação jurídica clara e acessível.",
    images: ["/images/brunolins/og-image.png"],
  },
};

export default function BrunoLinsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <style>{`
        [aria-label="Criar meu site com a Luma Sites"],
        .proposal-back-link { display: none !important; }
      `}</style>
      {children}
    </div>
  );
}
