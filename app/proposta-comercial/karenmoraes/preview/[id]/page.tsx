"use client";

import { Suspense, use, useEffect, useState } from "react";
import ArticleView from "@/components/karenmoraes/ArticleView";
import SiteHeader from "@/components/karenmoraes/SiteHeader";
import SiteFooter from "@/components/karenmoraes/SiteFooter";
import AdminSidebar from "@/components/karenmoraes/AdminSidebar";
import AdminLogoutButton from "@/components/karenmoraes/AdminLogoutButton";
import Spinner from "@/components/karenmoraes/Spinner";
import { KM_COLORS, KM_FONT_BODY } from "@/lib/karenmoraes/theme";
import { loadPreviewDraft, PreviewDraft } from "@/lib/karenmoraes/previewDraft";

export default function PreviewPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={null}>
      <PreviewPageInner params={params} />
    </Suspense>
  );
}

function PreviewPageInner({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [draft, setDraft] = useState<PreviewDraft | null | undefined>(undefined);

  useEffect(() => {
    setDraft(loadPreviewDraft(id));
  }, [id]);

  return (
    <>
    <SiteHeader variant="admin" actions={<AdminLogoutButton />} />
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <main style={{ flex: 1, minWidth: 0, background: KM_COLORS.rose, padding: "64px 24px" }}>
      {draft === undefined && (
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, fontFamily: KM_FONT_BODY, color: KM_COLORS.text }}>
          <Spinner size={14} /> Carregando prévia...
        </p>
      )}

      {draft === null && (
        <p style={{ textAlign: "center", fontFamily: KM_FONT_BODY, color: KM_COLORS.text, maxWidth: 480, margin: "0 auto" }}>
          Esta prévia não foi encontrada ou expirou (prévias duram 30 minutos e só funcionam no mesmo navegador em
          que foram geradas). Volte à área de admin e clique em "Pré-visualizar" novamente.
        </p>
      )}

      {draft && (
        <>
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto 16px",
              background: "#FFF6DE",
              border: "1px solid #E0C070",
              borderRadius: 8,
              padding: "10px 16px",
              fontFamily: KM_FONT_BODY,
              fontSize: 13,
              color: KM_COLORS.text,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span>Esta é uma prévia — o artigo ainda não foi publicado (ou ainda não com este conteúdo).</span>
            <a
              href={`/proposta-comercial/karenmoraes/admin?edit=${id}`}
              style={{ color: KM_COLORS.wine, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}
            >
              ← Voltar para edição
            </a>
          </div>
          <ArticleView title={draft.title || "(sem título)"} date={draft.date} cover={draft.cover} content={draft.content} />
        </>
      )}
      </main>
    </div>
    <SiteFooter />
    </>
  );
}
