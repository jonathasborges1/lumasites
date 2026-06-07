import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Murillo Martins | Implantes Dentários em Imbituba SC",
  description:
    "Implantes dentários, reabilitação oral e odontologia estética com planejamento individualizado e atendimento humanizado em Imbituba, Santa Catarina.",
  keywords:
    "implantes dentários Imbituba, dentista Imbituba SC, reabilitação oral, alinhadores invisíveis, clareamento dental, odontologia estética Imbituba, Dr. Murillo Martins",
  openGraph: {
    title: "Dr. Murillo Martins | Implantes Dentários em Imbituba SC",
    description:
      "Tratamentos odontológicos premium com planejamento individualizado e atendimento humanizado em Imbituba, SC.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function MurilloMartinsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
