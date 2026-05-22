import type { ReactNode } from "react";
import { PageTransition } from "./PageTransition";

export default function ProposalGroupLayout({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
