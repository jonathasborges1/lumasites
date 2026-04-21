type Props = {
  flip?: boolean;
  tone?: "dark-to-cream" | "cream-to-dark";
};

export function TornDivider({ flip = false, tone = "dark-to-cream" }: Props) {
  const fill = tone === "dark-to-cream" ? "#0A0E1A" : "#F5EFE4";

  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      }`}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-[60px] md:h-[80px]"
      >
        <path
          d="M0,80 L0,40 C80,60 160,20 240,35 C320,50 400,15 480,25 C560,35 640,5 720,18 C800,31 880,52 960,40 C1040,28 1120,8 1200,22 C1280,36 1360,55 1440,42 L1440,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
