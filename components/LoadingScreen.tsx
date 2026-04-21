import { LightOrb } from "@/components/LightOrb";

type Props = {
  fullScreen?: boolean;
};

export function LoadingScreen({ fullScreen = true }: Props) {
  return (
    <div
      className={`flex items-center justify-center bg-midnight px-5 ${
        fullScreen ? "fixed inset-0 z-[100]" : "relative min-h-[100dvh]"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,200,255,0.08)_0%,rgba(10,14,26,0.92)_60%)]"
      />

      <div className="relative flex w-full max-w-sm flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-glow-cyan/10 blur-3xl animate-pulse-glow" />
          <LightOrb size={180} />
        </div>

        <div className="font-display text-xs uppercase tracking-[0.45em] text-ink-muted">
          Luma Sites
        </div>
        <p className="mt-4 text-lg text-ink-primary">Carregando experiência</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
          Preparando recursos, imagens e animações.
        </p>

        <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/8">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-glow-cyan via-glow-aqua to-accent-gold animate-gradient-x" />
        </div>
      </div>
    </div>
  );
}
