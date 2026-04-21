type Props = {
  flip?: boolean;
};

export function SectionTransition({ flip = false }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-14 md:h-20 overflow-hidden ${flip ? "rotate-180" : ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/70 to-midnight" />
      <div className="absolute left-1/2 top-1/2 h-20 w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(circle,rgba(79,200,255,0.06)_0%,rgba(79,200,255,0.02)_35%,transparent_70%)]" />
    </div>
  );
}
