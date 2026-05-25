import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. Marianna Monteiro | Liminares em Direito da Saude — Brasilia DF",
  description:
    "Advogada especialista em medidas liminares urgentes na area da saude. Plano de saude, SUS, UTI, home care, TEA e medicamentos. Protocolo em ate 2h. Atendimento 100% online.",
  keywords:
    "advogada saude brasilia, liminar plano de saude, liminar UTI brasilia, direito da saude df, negativa plano de saude, liminar medicamento alto custo, advogada liminar urgente, marianna monteiro advogada",
  openGraph: {
    title: "Dra. Marianna Monteiro | Liminares em Direito da Saude",
    description:
      "Medidas liminares urgentes para garantir seu direito a saude. Protocolo judicial em ate 2h. Atendimento 100% online.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function MarianaMonteiroPropLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
