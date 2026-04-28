import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "center" | "left";
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass} mb-10`}>
      {eyebrow && (
        <div
          className={`flex ${
            align === "center" ? "justify-center" : "justify-start"
          } items-center gap-3 mb-4`}
        >
          <span className="h-px w-8 bg-glow-cyan/70" />
          <span className="font-display text-xs uppercase tracking-[0.35em] text-glow-aqua">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-glow-cyan/70" />
        </div>
      )}
      <h2
        className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-ink-primary"
        style={{
          textShadow: "none",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-ink-secondary text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
