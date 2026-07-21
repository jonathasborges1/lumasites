import Link from "next/link";
import { KM_COLORS, KM_FONT_BODY, KM_FONT_HEADING } from "@/lib/karenmoraes/theme";

export default function SiteFooter() {
  return (
    <footer style={{ background: KM_COLORS.wineDark, padding: "40px 24px 24px", color: "#fff" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <p style={{ fontFamily: KM_FONT_HEADING, fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Karen Moraes</p>
        <p style={{ fontFamily: KM_FONT_BODY, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: KM_COLORS.gold, marginBottom: 16 }}>
          Família & Sucessões
        </p>
        <p style={{ fontFamily: KM_FONT_BODY, fontSize: 13, color: "rgba(255,255,255,.75)", marginBottom: 4 }}>
          (66) 99248-6203 · karenmoraes.jur@gmail.com
        </p>
        <p style={{ fontFamily: KM_FONT_BODY, fontSize: 13, color: "rgba(255,255,255,.6)", marginBottom: 20 }}>
          Barra do Garças – MT · Atendimento online em todo o Brasil
        </p>
        <p
          style={{
            fontFamily: KM_FONT_BODY,
            fontSize: 12,
            color: "rgba(255,255,255,.45)",
            borderTop: "1px solid rgba(255,255,255,.15)",
            paddingTop: 16,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>© {new Date().getFullYear()} Karen Moraes Advocacia. Todos os direitos reservados.</span>
          <Link href="/proposta-comercial/karenmoraes/admin/login" style={{ color: "rgba(255,255,255,.45)", textDecoration: "none" }}>
            Área restrita
          </Link>
        </p>
      </div>
    </footer>
  );
}
