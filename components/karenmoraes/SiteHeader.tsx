import { Lock } from "lucide-react";
import { KM_COLORS, KM_FONT_BODY, KM_WHATSAPP_LINK } from "@/lib/karenmoraes/theme";
import BrandLogo from "./BrandLogo";

const HOME = "/proposta-comercial/karenmoraes";

const NAV_ITEMS: [string, string][] = [
  ["Início", `${HOME}#`],
  ["Sobre", `${HOME}#sobre`],
  ["Áreas de Atuação", `${HOME}#atuacao`],
  ["Blog", `${HOME}/blog`],
  ["Contato", `${HOME}#contato`],
];

export default function SiteHeader({
  variant = "public",
  actions,
}: {
  variant?: "public" | "admin";
  actions?: React.ReactNode;
}) {
  return (
    <header>
      <div style={{ background: KM_COLORS.wineDark, color: "#fff", fontFamily: KM_FONT_BODY, fontSize: 12 }}>
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "8px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span>(66) 99248-6203 · karenmoraes.jur@gmail.com</span>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "rgba(255,255,255,.65)" }}>Barra do Garças – MT · Todo o Brasil</span>
            {variant === "public" && (
              <>
                <span style={{ color: "rgba(255,255,255,.3)" }}>·</span>
                <a
                  href={`${HOME}/admin/login`}
                  title="Área restrita"
                  style={{ display: "flex", alignItems: "center", gap: 4, color: "rgba(255,255,255,.7)", textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  <Lock size={12} /> Área restrita
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#FFFFFF",
          borderBottom: `1px solid ${KM_COLORS.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a href={HOME} aria-label="Karen Moraes — página inicial" style={{ textDecoration: "none", display: "block", flexShrink: 0 }}>
            <BrandLogo style={{ width: 174 }} />
            {variant === "admin" && (
              <span style={{ display: "block", marginTop: 3, textAlign: "center", fontFamily: KM_FONT_BODY, fontSize: 9, letterSpacing: 1.8, color: KM_COLORS.muted, textTransform: "uppercase" }}>
                Painel administrativo
              </span>
            )}
          </a>

          {variant === "public" && (
            <nav style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
              {NAV_ITEMS.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{ fontFamily: KM_FONT_BODY, fontSize: 13, fontWeight: 500, color: KM_COLORS.text, textDecoration: "none" }}
                >
                  {label}
                </a>
              ))}
            </nav>
          )}

          {actions ??
            (variant === "public" && (
              <a
                href={KM_WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: KM_COLORS.wine,
                  color: "#fff",
                  padding: "9px 18px",
                  borderRadius: 4,
                  fontFamily: KM_FONT_BODY,
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                Fale comigo →
              </a>
            ))}
        </div>
      </div>
    </header>
  );
}
