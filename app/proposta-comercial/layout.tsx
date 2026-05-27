import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageTransition } from "./PageTransition";

export const metadata: Metadata = {
  openGraph: {
    images: [],
  },
  twitter: {
    card: "summary",
    images: [],
  },
};

export default function ProposalGroupLayout({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
