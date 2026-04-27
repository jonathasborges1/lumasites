import { site } from "@/content/site";

export function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-midnight/80 py-6 text-center text-xs text-ink-muted">
      © {year} {site.name}. Todos os direitos reservados.
    </footer>
  );
}
