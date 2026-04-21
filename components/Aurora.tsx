type Props = {
  intensity?: "soft" | "strong";
  className?: string;
};

export function Aurora({ intensity = "soft", className = "" }: Props) {
  const opacity = intensity === "strong" ? "opacity-28" : "opacity-12";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className={`absolute -inset-[20%] blur-3xl ${opacity} animate-aurora-drift`}
        style={{
          background:
            "radial-gradient(ellipse 42% 52% at 20% 30%, rgba(79,200,255,.14), transparent 64%), radial-gradient(ellipse 34% 44% at 80% 20%, rgba(194,107,255,.08), transparent 64%), radial-gradient(ellipse 48% 38% at 50% 80%, rgba(125,230,139,.06), transparent 66%)",
        }}
      />
      <div
        className={`absolute -inset-[20%] blur-3xl ${opacity} animate-aurora-drift-reverse`}
        style={{
          background:
            "radial-gradient(ellipse 30% 40% at 70% 60%, rgba(79,200,255,.1), transparent 64%), radial-gradient(ellipse 25% 35% at 30% 70%, rgba(255,183,77,.06), transparent 66%)",
          animationDelay: "-6s",
        }}
      />
    </div>
  );
}
