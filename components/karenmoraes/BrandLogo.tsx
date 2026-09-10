import Image from "next/image";
import type { CSSProperties } from "react";

type BrandLogoProps = {
  className?: string;
  style?: CSSProperties;
  /** Mantido para compatibilidade com os locais que já usam o componente. */
  tone?: "gold" | "light";
  title?: string;
};

/**
 * Logotipo oficial fornecido pela cliente.
 *
 * O arquivo é usado sem reconstrução, recorte, filtro ou alteração de cor.
 * A transparência e a proporção original de 746 × 335 são preservadas.
 */
export default function BrandLogo({
  className,
  style,
  title = "Karen Moraes — Advocacia e Consultoria Jurídica",
}: BrandLogoProps) {
  return (
    <Image
      className={className}
      src="/images/karenmoraes/karen-moraes-logo-oficial.png"
      alt={title}
      width={746}
      height={335}
      sizes="(max-width: 600px) 150px, 250px"
      style={{
        display: "block",
        height: "auto",
        objectFit: "contain",
        ...style,
      }}
    />
  );
}
