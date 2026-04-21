import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "ghost" | "amber";
type Size = "md" | "lg";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

const base =
  "relative inline-flex items-center justify-center gap-2 font-display tracking-wider uppercase rounded-full transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-glow-cyan/8 text-glow-aqua border border-glow-cyan/40 hover:bg-glow-cyan/12 hover:text-white",
  ghost:
    "text-ink-primary border border-white/12 hover:border-glow-cyan/30 hover:text-glow-aqua",
  amber:
    "bg-accent-amber/14 text-accent-amber border border-accent-amber/50 hover:bg-accent-amber/20 hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function GlowButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <a
      {...props}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
