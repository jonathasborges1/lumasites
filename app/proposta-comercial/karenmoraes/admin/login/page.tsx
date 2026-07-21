"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { KM_COLORS, KM_FONT_BODY, KM_FONT_HEADING } from "@/lib/karenmoraes/theme";
import SiteHeader from "@/components/karenmoraes/SiteHeader";
import SiteFooter from "@/components/karenmoraes/SiteFooter";
import Spinner from "@/components/karenmoraes/Spinner";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/karenmoraes/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      setLoading(false);
      const { error: message } = await res.json();
      setError(message ?? "Não foi possível entrar");
      return;
    }
    // Mantém o spinner ativo até o navegador realmente sair desta tela — se
    // desligássemos o loading aqui, o botão voltaria ao normal enquanto a
    // navegação e o carregamento do painel ainda estão em andamento, dando a
    // falsa impressão de que travou.
    router.push("/proposta-comercial/karenmoraes/admin");
  }

  return (
    <>
    <SiteHeader variant="admin" />
    <main style={{ background: KM_COLORS.rose, minHeight: "calc(100vh - 220px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, gap: 16 }}>
      <div style={{ width: "100%", maxWidth: 360 }}>
        <Link
          href="/proposta-comercial/karenmoraes"
          style={{ fontFamily: KM_FONT_BODY, fontSize: 13, color: KM_COLORS.wine, textDecoration: "none", fontWeight: 600 }}
        >
          ← Voltar para o site
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ background: KM_COLORS.white, borderRadius: 12, padding: 40, width: "100%", maxWidth: 360, border: `1px solid ${KM_COLORS.border}` }}
      >
        <h1 style={{ fontFamily: KM_FONT_HEADING, color: KM_COLORS.wineDark, fontSize: 24, marginBottom: 24 }}>
          Área da Dra. Karen
        </h1>
        <label style={{ fontFamily: KM_FONT_BODY, fontSize: 14, color: KM_COLORS.text, display: "block", marginBottom: 8 }}>
          Senha
        </label>
        <div style={{ position: "relative", marginBottom: 16 }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 40px 10px 12px",
              borderRadius: 8,
              border: `1px solid ${KM_COLORS.border}`,
              fontFamily: KM_FONT_BODY,
              background: KM_COLORS.white,
              color: KM_COLORS.text,
              colorScheme: "light",
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            title={showPassword ? "Ocultar senha" : "Mostrar senha"}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: KM_COLORS.muted,
              display: "flex",
              padding: 4,
            }}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {error && <p style={{ color: "crimson", fontFamily: KM_FONT_BODY, fontSize: 14, marginBottom: 16 }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: 8,
            border: "none",
            background: KM_COLORS.wine,
            color: "#fff",
            fontFamily: KM_FONT_BODY,
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {loading && <Spinner size={14} />}
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
    <SiteFooter />
    </>
  );
}
