type Props = {
  size?: number;
  color?: string;
  className?: string;
};

export function LightOrb({
  size = 140,
  color = "#4FC8FF",
  className = "",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* halo externo difuso */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-glow blur-2xl"
        style={{
          background: `radial-gradient(circle, ${color}66 0%, ${color}22 44%, transparent 76%)`,
        }}
      />
      {/* halo médio */}
      <div
        className="absolute inset-[20%] rounded-full blur-xl animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, ${color}88 0%, ${color}30 52%, transparent 82%)`,
          animationDelay: "-1.5s",
        }}
      />
      {/* núcleo brilhante */}
      <div
        className="absolute inset-[38%] rounded-full animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, #ffffff 0%, ${color} 58%, transparent 100%)`,
          boxShadow: `0 0 14px ${color}, 0 0 28px ${color}, 0 0 44px ${color}`,
        }}
      />
      {/* anéis orbitais */}
      <div
        className="absolute inset-[25%] rounded-full border border-white/20 animate-orbit"
        style={{ borderStyle: "dashed" }}
      />
      <div
        className="absolute inset-[10%] rounded-full border border-white/10 animate-orbit-reverse"
        style={{ borderStyle: "dashed", animationDuration: "14s" }}
      />
    </div>
  );
}
