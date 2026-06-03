"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

function PageTransitionInner({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("navigation-settled"));
  }, []);

  return <div className="proposal-page-enter">{children}</div>;
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <PageTransitionInner key={pathname}>{children}</PageTransitionInner>;
}
