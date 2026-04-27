import Link from "next/link";
import { footerNavigation } from "@/content/navigation";
import { site } from "@/content/site";

export function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-midnight/80 py-8 text-xs text-ink-muted">
      <div className="container mx-auto flex flex-col items-center gap-4 px-5 text-center md:px-8">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {footerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-glow-aqua"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p>© {year} {site.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
