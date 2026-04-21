"use client";

import Image from "next/image";

type Pose = "flying" | "standing";
type Size = "sm" | "md" | "lg" | "xl";

type Props = {
  pose?: Pose;
  size?: Size;
  className?: string;
  /** remove usando mix-blend-mode:screen — funciona bem em fundos escuros */
  blendScreen?: boolean;
  animate?: boolean;
};

const sizes: Record<Size, { w: number; h: number }> = {
  sm: { w: 100, h: 140 },
  md: { w: 160, h: 220 },
  lg: { w: 240, h: 330 },
  xl: { w: 340, h: 470 },
};

/**
 * Luma em pose "flying": imagem 166d26 (1400×525).
 * O personagem está na porção esquerda (~25% da largura, 55–100% da altura).
 * Usamos overflow-hidden + object-position para isolar apenas o personagem.
 *
 * Luma em pose "standing": imagem 2f4982 (1262×997).
 * O render 3D está na metade direita (55–100% width, 8–95% height).
 * mix-blend-mode: screen elimina o fundo escuro da floresta.
 */
export function LumaMascot({
  pose = "flying",
  size = "md",
  className = "",
  blendScreen = true,
  animate = true,
}: Props) {
  const dim = sizes[size];

  if (pose === "flying") {
    return (
      <div
        aria-hidden="true"
        className={`relative overflow-hidden flex-shrink-0 ${
          animate ? "animate-float" : ""
        } ${className}`}
        style={{ width: dim.w, height: dim.h }}
      >
        {/* glow no chão, igual ao do personagem original */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-8 rounded-full blur-xl animate-pulse-glow"
          style={{ background: "rgba(255,210,80,.55)" }}
        />
        <Image
          src="/characters/luma-flying.png"
          alt="Luma — mascote da Luma Sites"
          fill
          className={`object-cover ${blendScreen ? "mix-blend-screen" : ""}`}
          /* objectPosition isola o personagem (esq-baixo da imagem) */
          style={{ objectPosition: "6% 90%" }}
          sizes={`${dim.w}px`}
          priority
        />
      </div>
    );
  }

  /* pose = "standing" — usa render 3D da direita de luma-concept.png */
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden flex-shrink-0 ${
        animate ? "animate-float-slow" : ""
      } ${className}`}
      style={{ width: dim.w, height: dim.h }}
    >
      {/* glow âmbar embaixo */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-10 rounded-full blur-2xl animate-pulse-glow"
        style={{ background: "rgba(255,175,60,.45)" }}
      />
      <Image
        src="/characters/luma-concept.png"
        alt="Luma — mascote da Luma Sites"
        fill
        className={`object-cover ${blendScreen ? "mix-blend-screen" : ""}`}
        /* objectPosition mostra apenas o render 3D (lado direito) */
        style={{ objectPosition: "95% 10%" }}
        sizes={`${dim.w}px`}
        priority
      />
    </div>
  );
}
