import { LightOrb } from "@/components/LightOrb";

type Props = {
  fullScreen?: boolean;
  label?: string;
  hint?: string;
};

export function LoadingScreen({
  fullScreen = true,
  label = "Carregando experiência",
  hint = "Preparando recursos, imagens e animações.",
}: Props) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex items-center justify-center bg-midnight px-5 ${
        fullScreen ? "fixed inset-0 z-[100]" : "relative min-h-[100dvh]"
      }`}
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,200,255,0.08)_0%,rgba(10,14,26,0.92)_60%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-glow-cyan/10 blur-3xl animate-aurora-drift" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-accent-magenta/10 blur-3xl animate-aurora-drift-reverse" />

      <div className="relative flex w-full max-w-sm flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-glow-cyan/10 blur-3xl animate-pulse-glow" />
          <LightOrb size={180} />
        </div>

        <div className="font-display text-xs uppercase tracking-[0.45em] text-ink-muted">
          Luma Sites
        </div>
        <p className="mt-4 text-lg text-ink-primary">{label}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
          {hint}
        </p>

        <div className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-glow-aqua/80">
          <span
            className="h-2.5 w-2.5 rounded-full bg-glow-cyan animate-pulse-glow"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full bg-glow-aqua animate-pulse-glow"
            style={{ animationDelay: ".35s" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full bg-accent-gold animate-pulse-glow"
            style={{ animationDelay: ".7s" }}
          />
        </div>

        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
          <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(79,200,255,0.2)_15%,rgba(127,229,255,0.9)_48%,rgba(255,213,79,0.75)_65%,transparent_100%)] bg-[length:200%_100%] animate-shimmer" />
        </div>

        <div className="mt-4 grid w-full grid-cols-3 gap-3 text-left">
          <div className="rounded-xl border border-white/8 bg-white/5 p-3">
            <div className="mb-2 h-1 w-10 rounded-full bg-glow-cyan/50" />
            <div className="h-2 rounded-full bg-white/8" />
          </div>
          <div className="rounded-xl border border-white/8 bg-white/5 p-3">
            <div className="mb-2 h-1 w-8 rounded-full bg-glow-aqua/50" />
            <div className="h-2 rounded-full bg-white/8" />
          </div>
          <div className="rounded-xl border border-white/8 bg-white/5 p-3">
            <div className="mb-2 h-1 w-12 rounded-full bg-accent-gold/50" />
            <div className="h-2 rounded-full bg-white/8" />
          </div>
        </div>
      </div>
    </div>
  );
}
