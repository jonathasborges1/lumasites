import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function ShimmerTitle({ children, className = "" }: Props) {
  return (
    <span
      className={`relative inline-block bg-clip-text text-transparent animate-shimmer-slow ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(100deg, #EAF2FF 20%, #4FC8FF 40%, #7FE5FF 50%, #4FC8FF 60%, #EAF2FF 80%)",
        backgroundSize: "200% 100%",
      }}
    >
      {children}
    </span>
  );
}
