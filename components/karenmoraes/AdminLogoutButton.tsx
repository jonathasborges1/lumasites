"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { KM_COLORS, KM_FONT_BODY } from "@/lib/karenmoraes/theme";

export default function AdminLogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/karenmoraes/admin/logout", { method: "POST" }).catch(() => {});
    router.push("/proposta-comercial/karenmoraes/admin/login");
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "transparent",
        border: `1px solid ${KM_COLORS.wine}`,
        borderRadius: 6,
        padding: "8px 14px",
        color: KM_COLORS.wine,
        fontFamily: KM_FONT_BODY,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      <LogOut size={15} /> Sair
    </button>
  );
}
