import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. Charlene Damasceno | Advogada Previdenciaria — INSS e Beneficios",
  description:
    "Advogada especialista em Direito Previdenciario. Aposentadorias, BPC/LOAS, auxilio-doenca, revisao de beneficios e defesa em negativas do INSS. Atendimento presencial e online.",
  keywords:
    "advogada previdenciaria, INSS beneficios, aposentadoria especialista, BPC LOAS, auxilio doenca, revisao beneficio INSS, negativa INSS recurso, charlene damasceno advogada",
  openGraph: {
    title: "Dra. Charlene Damasceno | Advogada Previdenciaria",
    description:
      "Especialista em INSS, aposentadorias e beneficios previdenciarios. Atendimento humanizado presencial e online.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function CharleneDamascenoPropLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
