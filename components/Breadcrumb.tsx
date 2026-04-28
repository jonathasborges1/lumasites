import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-5 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink-muted ${className}`}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-ink-secondary transition-colors hover:text-glow-aqua"
      >
        <Home size={12} />
        Início
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            <ChevronRight size={12} className="text-glow-cyan/50" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-ink-secondary transition-colors hover:text-glow-aqua"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-glow-aqua">
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export function breadcrumbSchema(items: BreadcrumbItem[], baseUrl: string) {
  const allItems = [{ label: "Início", href: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? new URL(item.href, baseUrl).toString() : undefined,
    })),
  };
}
