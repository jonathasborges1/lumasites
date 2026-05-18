export function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div aria-hidden="true" style={{ backgroundColor: from, lineHeight: 0, display: "block" }}>
      <svg
        viewBox="0 0 1440 70"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "clamp(44px, 4.5vw, 72px)" }}
      >
        <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill={to} />
      </svg>
    </div>
  );
}
