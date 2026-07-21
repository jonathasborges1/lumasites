"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FileText, PlusCircle, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { KM_COLORS, KM_FONT_BODY, KM_FONT_HEADING } from "@/lib/karenmoraes/theme";

const COLLAPSE_KEY = "km_admin_sidebar_collapsed";
const EXPANDED_WIDTH = 216;
const COLLAPSED_WIDTH = 64;
const ADMIN_HOME = "/proposta-comercial/karenmoraes/admin";

const CSS = `
  .km-sidebar-link{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:8px;text-decoration:none;color:${KM_COLORS.text};font-family:${KM_FONT_BODY};font-size:14px;font-weight:500;border:none;background:transparent;cursor:pointer;width:100%;text-align:left;white-space:nowrap;overflow:hidden}
  .km-sidebar-link:hover{background:${KM_COLORS.champagne}}
  .km-sidebar-link.active{background:${KM_COLORS.champagne};color:${KM_COLORS.wine};font-weight:700;box-shadow:inset 3px 0 0 ${KM_COLORS.gold}}
  .km-sidebar-collapsed .km-sidebar-link{justify-content:center;padding:10px}
`;

export default function AdminSidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(localStorage.getItem(COLLAPSE_KEY) === "true");
  }, []);

  function toggle() {
    const next = !collapsed;
    setCollapsed(next);
    localStorage.setItem(COLLAPSE_KEY, String(next));
  }

  const isNew = pathname === ADMIN_HOME && searchParams.get("new") === "true";
  const isEdit = pathname === ADMIN_HOME && !!searchParams.get("edit");
  const isArticles = pathname === ADMIN_HOME && !isNew && !isEdit;

  return (
    // A camada externa só carrega o fundo/borda e acompanha a altura real do
    // conteúdo (evita a lacuna quando o formulário é mais alto que a tela).
    // A camada interna é que fica fixa (sticky) na tela, com o menu sempre visível.
    <aside
      className={collapsed ? "km-sidebar-collapsed" : ""}
      style={{
        width: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
        flexShrink: 0,
        alignSelf: "stretch",
        background: KM_COLORS.white,
        borderRight: `1px solid ${KM_COLORS.border}`,
        transition: "width .18s ease",
      }}
    >
      <style>{CSS}</style>

      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "space-between",
            padding: collapsed ? "18px 0" : "18px 14px",
            borderBottom: `1px solid ${KM_COLORS.border}`,
          }}
        >
          {!collapsed && (
            <span style={{ fontFamily: KM_FONT_HEADING, fontWeight: 700, color: KM_COLORS.wine, fontSize: 15 }}>
              Painel
            </span>
          )}
          <button
            onClick={toggle}
            aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
            title={collapsed ? "Expandir menu" : "Recolher menu"}
            style={{ background: "transparent", border: "none", cursor: "pointer", color: KM_COLORS.muted, padding: 6, display: "flex" }}
          >
            {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 4, padding: 8, flex: 1 }}>
          <Link href={ADMIN_HOME} title={collapsed ? "Artigos" : undefined} className={`km-sidebar-link${isArticles ? " active" : ""}`}>
            <FileText size={18} />
            {!collapsed && <span>Artigos</span>}
          </Link>
          <Link href={`${ADMIN_HOME}?new=true`} title={collapsed ? "Novo artigo" : undefined} className={`km-sidebar-link${isNew ? " active" : ""}`}>
            <PlusCircle size={18} />
            {!collapsed && <span>Novo artigo</span>}
          </Link>
        </nav>
      </div>
    </aside>
  );
}
