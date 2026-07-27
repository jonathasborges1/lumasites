import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-angela-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-angela-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prévia Conceitual | Dra. Angela Carolina Nascimento",
  description:
    "Prévia conceitual do site da Dra. Angela Carolina Nascimento, médica dermatologista em Manaus.",
  robots: { index: false, follow: false },
};

export default function DraAngelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${display.variable} ${body.variable}`}>{children}</div>;
}
