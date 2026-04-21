import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
};

export function TornCard({
  children,
  className = "",
  highlight = false,
}: Props) {
  return (
    <div
      className={`relative group rounded-2xl border bg-midnight/88 transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)] hover:-translate-y-0.5 ${
        highlight
          ? "border-glow-cyan/30"
          : "border-white/10 hover:border-glow-cyan/18"
      } ${className}`}
    >
      {highlight && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-glow-cyan/[0.015]" />
      )}
      {children}
    </div>
  );
}
