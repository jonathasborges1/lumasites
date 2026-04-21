import type { ReactNode } from "react";

type Props = {
  label?: string;
  children: ReactNode;
  tone?: "cyan" | "amber";
};

export function KeyBadge({ label, children, tone = "cyan" }: Props) {
  const ring =
    tone === "cyan"
      ? "border-glow-cyan text-glow-aqua shadow-glow-sm"
      : "border-accent-amber text-accent-amber shadow-glow-amber";

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`inline-flex items-center justify-center w-9 h-9 rounded-full border-2 bg-midnight/60 font-display text-sm uppercase tracking-wider ${ring}`}
      >
        {children}
      </span>
      {label && (
        <span className="font-display uppercase tracking-[0.15em] text-xs text-ink-secondary">
          {label}
        </span>
      )}
    </span>
  );
}
