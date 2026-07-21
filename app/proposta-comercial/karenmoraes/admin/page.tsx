"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ArticleView from "@/components/karenmoraes/ArticleView";
import SiteHeader from "@/components/karenmoraes/SiteHeader";
import SiteFooter from "@/components/karenmoraes/SiteFooter";
import AdminSidebar from "@/components/karenmoraes/AdminSidebar";
import AdminLogoutButton from "@/components/karenmoraes/AdminLogoutButton";
import Spinner from "@/components/karenmoraes/Spinner";
import FileDropZone from "@/components/karenmoraes/FileDropZone";
import { KM_COLORS, KM_FONT_BODY, KM_FONT_HEADING } from "@/lib/karenmoraes/theme";
import type { Article } from "@/lib/karenmoraes/types";
import { loadPreviewDraft, savePreviewDraft } from "@/lib/karenmoraes/previewDraft";
import { slugify } from "@/lib/karenmoraes/slug";

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

type View = { mode: "list" } | { mode: "new" } | { mode: "edit"; slug: string };
type Toast = { type: "success" | "error"; text: string };
type DeployTracking = { slug: string; title: string; status: "waiting" | "live" | "timeout" };

const DEPLOY_POLL_INTERVAL_MS = 2000;
const DEPLOY_POLL_MAX_ATTEMPTS = 20; // ~40 segundos — margem de segurança, mas some publicado em poucos segundos

/** Nunca rejeita: converte falha de rede ou resposta sem JSON numa mensagem legível. */
async function requestJson(url: string, options?: RequestInit): Promise<{ ok: boolean; data: any }> {
  try {
    const res = await fetch(url, options);
    const data = await res
      .json()
      .catch(() => ({ error: "O servidor respondeu de forma inesperada. Tente novamente." }));
    return { ok: res.ok, data };
  } catch {
    return { ok: false, data: { error: "Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente." } };
  }
}

const EDIT_GRID_CSS = `
  .km-edit-grid{display:block}
  .km-edit-preview{margin-top:24px}
  @media (min-width: 960px){
    .km-edit-grid{display:grid;grid-template-columns:1.1fr 0.9fr;gap:24px;align-items:start}
    .km-edit-preview{margin-top:0;position:sticky;top:24px}
  }
`;

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid ${KM_COLORS.border}`,
  fontFamily: KM_FONT_BODY,
  marginBottom: 12,
  background: KM_COLORS.white,
  color: KM_COLORS.text,
  colorScheme: "light",
};

const labelStyle: React.CSSProperties = {
  fontFamily: KM_FONT_BODY,
  fontSize: 13,
  color: KM_COLORS.text,
  display: "block",
  marginBottom: 4,
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 18px",
  borderRadius: 8,
  border: "none",
  fontFamily: KM_FONT_BODY,
  fontWeight: 600,
  cursor: "pointer",
};

function ToastBanner({ toast }: { toast: Toast }) {
  const isSuccess = toast.type === "success";
  return (
    <div
      style={{
        background: isSuccess ? "#E7F5EC" : "#FBE9E9",
        border: `1px solid ${isSuccess ? "#3FA65C" : "crimson"}`,
        color: isSuccess ? "#1E6B39" : "crimson",
        borderRadius: 8,
        padding: "12px 16px",
        marginBottom: 20,
        fontFamily: KM_FONT_BODY,
        fontSize: 14,
      }}
    >
      {toast.text}
    </div>
  );
}

function DeployTrackingBanner({
  tracking,
  onRetry,
  onDismiss,
}: {
  tracking: DeployTracking;
  onRetry: () => void;
  onDismiss: () => void;
}) {
  const articleUrl = `/proposta-comercial/karenmoraes/blog/${tracking.slug}`;
  return (
    <div
      style={{
        background: KM_COLORS.champagne,
        border: `1px solid ${KM_COLORS.gold}`,
        borderRadius: 8,
        padding: "12px 16px",
        marginBottom: 20,
        fontFamily: KM_FONT_BODY,
        fontSize: 14,
        color: KM_COLORS.text,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      {tracking.status === "waiting" && (
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Spinner size={14} />
          Publicando "{tracking.title}"... geralmente aparece em poucos segundos.
        </span>
      )}
      {tracking.status === "live" && (
        <span>
          "{tracking.title}" está no ar!{" "}
          <a href={articleUrl} target="_blank" rel="noreferrer" style={{ color: KM_COLORS.wine, fontWeight: 600 }}>
            Ver artigo publicado
          </a>
        </span>
      )}
      {tracking.status === "timeout" && (
        <span>
          Ainda não encontramos "{tracking.title}" no ar. Isso é incomum — verifique o painel da Vercel para ver se algo falhou.
        </span>
      )}
      <div style={{ display: "flex", gap: 8 }}>
        {tracking.status === "timeout" && (
          <button onClick={onRetry} style={{ ...buttonStyle, padding: "6px 12px", background: KM_COLORS.wine, color: "#fff" }}>
            Verificar novamente
          </button>
        )}
        {tracking.status !== "waiting" && (
          <button onClick={onDismiss} style={{ ...buttonStyle, padding: "6px 12px", background: "transparent", color: KM_COLORS.muted }}>
            Ok
          </button>
        )}
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  return (
    <Suspense fallback={null}>
      <AdminDashboardInner />
    </Suspense>
  );
}

function AdminDashboardInner() {
  const searchParams = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [view, setView] = useState<View>({ mode: "list" });
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<Toast | null>(null);
  const [listError, setListError] = useState<string | null>(null);
  const [deployTracking, setDeployTracking] = useState<DeployTracking | null>(null);
  // Preenche o formulário quando se volta da prévia — só é limpo quando o usuário
  // explicitamente escolhe "Novo artigo" ou "Editar" outro artigo da lista.
  const [formSeed, setFormSeed] = useState<Article | undefined>(undefined);

  // Carregar a lista não decide sozinho se mostra erro — quem chama decide,
  // porque essa mesma função também roda em segundo plano só para restaurar a
  // edição vinda da prévia (?edit=slug), quando a lista em si nem vai aparecer.
  async function loadArticles(): Promise<{ loaded: Article[]; error: string | null }> {
    setLoading(true);
    const { ok, data } = await requestJson("/api/karenmoraes/blog");
    const loaded: Article[] = ok ? data.articles : [];
    if (ok) setArticles(loaded);
    setLoading(false);
    return { loaded, error: ok ? null : data.error ?? "Não foi possível carregar os artigos." };
  }

  // Permite abrir direto num artigo (?edit=slug) ou num rascunho novo (?new=true) —
  // usado pelo link "voltar para edição" na tela de prévia. Se houver uma prévia
  // recente para esse slug (mesmo sem publicar), ela tem prioridade sobre a última
  // versão publicada, para não perder o que foi editado depois da última publicação.
  useEffect(() => {
    loadArticles().then(({ loaded, error }) => {
      const editSlug = searchParams.get("edit");
      const wantsNew = searchParams.get("new") === "true";
      if (!editSlug && !wantsNew) {
        // Navegação de volta para "/admin" sem parâmetros (ex.: link "Artigos" no
        // menu) — precisa resetar a visão explicitamente, senão fica presa na
        // tela anterior (a URL muda, mas o formulário continua na tela).
        setListError(error);
        setFormSeed(undefined);
        setView({ mode: "list" });
        return;
      }

      if (editSlug) {
        const published = loaded.find((a) => a.slug === editSlug);
        const draft = loadPreviewDraft(editSlug);
        if (published || draft) {
          setFormSeed({
            title: draft?.title ?? published!.title,
            slug: editSlug,
            date: published?.date ?? draft?.date ?? new Date().toISOString(),
            excerpt: draft?.excerpt ?? published?.excerpt ?? "",
            cover: draft?.cover ?? published?.cover,
            source: draft?.source ?? published!.source,
            content: draft?.content ?? published?.content ?? "",
          });
          setView(published ? { mode: "edit", slug: editSlug } : { mode: "new" });
          return;
        }
        setToast({ type: "error", text: "Não encontramos esse rascunho (a prévia pode ter expirado). Comece um novo a partir daqui." });
      }
      setFormSeed(undefined);
      setView({ mode: "new" });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 6000);
    return () => clearTimeout(timer);
  }, [toast]);

  // Não há como saber quando a Vercel termina o deploy sem novas credenciais;
  // em vez disso, verificamos se a própria página do artigo já responde.
  useEffect(() => {
    if (!deployTracking || deployTracking.status !== "waiting") return;
    const slug = deployTracking.slug;
    let attempts = 0;
    const interval = setInterval(async () => {
      attempts += 1;
      const isLive = await fetch(`/proposta-comercial/karenmoraes/blog/${slug}`, { cache: "no-store" })
        .then((res) => res.ok)
        .catch(() => false);

      if (isLive) {
        setDeployTracking((current) => (current?.slug === slug ? { ...current, status: "live" } : current));
        clearInterval(interval);
      } else if (attempts >= DEPLOY_POLL_MAX_ATTEMPTS) {
        setDeployTracking((current) => (current?.slug === slug ? { ...current, status: "timeout" } : current));
        clearInterval(interval);
      }
    }, DEPLOY_POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [deployTracking?.slug, deployTracking?.status]);

  async function handleDelete(slug: string) {
    if (!confirm(`Excluir o artigo "${slug}"? Essa ação não pode ser desfeita.`)) return;
    const { ok, data } = await requestJson(`/api/karenmoraes/blog/${slug}`, { method: "DELETE" });
    if (ok) {
      setToast({ type: "success", text: "Artigo excluído." });
      loadArticles().then(({ error }) => setListError(error));
    } else {
      setToast({ type: "error", text: data.error ?? "Não foi possível excluir o artigo." });
    }
  }

  return (
    <>
    <SiteHeader variant="admin" actions={<AdminLogoutButton />} />
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <main style={{ flex: 1, minWidth: 0, background: KM_COLORS.rose, padding: "48px 24px" }}>
      <div style={{ maxWidth: view.mode === "list" ? 760 : 1320, margin: "0 auto" }}>
        <h1 style={{ fontFamily: KM_FONT_HEADING, color: KM_COLORS.wineDark, fontSize: 28, marginBottom: 32 }}>
          Artigos do blog
        </h1>

        {toast && <ToastBanner toast={toast} />}
        {deployTracking && (
          <DeployTrackingBanner
            tracking={deployTracking}
            onRetry={() => setDeployTracking((current) => (current ? { ...current, status: "waiting" } : current))}
            onDismiss={() => setDeployTracking(null)}
          />
        )}

        {view.mode === "list" && (
          <>
            {listError && <ToastBanner toast={{ type: "error", text: listError }} />}
            <button
              onClick={() => {
                setFormSeed(undefined);
                setView({ mode: "new" });
              }}
              style={{ ...buttonStyle, background: KM_COLORS.wine, color: "#fff", marginBottom: 24 }}
            >
              + Novo artigo
            </button>
            {loading && (
              <p style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: KM_FONT_BODY, color: KM_COLORS.text }}>
                <Spinner size={14} /> Carregando...
              </p>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {articles.map((article) => (
                <div key={article.slug} style={{ background: KM_COLORS.white, border: `1px solid ${KM_COLORS.border}`, borderRadius: 12, padding: 20 }}>
                  <h2 style={{ fontFamily: KM_FONT_HEADING, color: KM_COLORS.wineDark, fontSize: 18 }}>{article.title}</h2>
                  <p style={{ fontFamily: KM_FONT_BODY, fontSize: 13, color: KM_COLORS.muted, margin: "4px 0 12px" }}>
                    origem: {article.source.type === "gdoc" ? "Google Doc" : "arquivo .docx"} · slug: {article.slug}
                  </p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <a
                      href={`/proposta-comercial/karenmoraes/blog/${article.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        ...buttonStyle,
                        background: "transparent",
                        color: KM_COLORS.wine,
                        border: `1px solid ${KM_COLORS.wine}`,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      Ver artigo
                    </a>
                    <button
                      onClick={() => {
                        setFormSeed(undefined);
                        setView({ mode: "edit", slug: article.slug });
                      }}
                      style={{ ...buttonStyle, background: KM_COLORS.champagne, color: KM_COLORS.wineDark }}
                    >
                      Editar
                    </button>
                    <button onClick={() => handleDelete(article.slug)} style={{ ...buttonStyle, background: "transparent", color: "crimson", border: "1px solid crimson" }}>
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {view.mode === "new" && (
          <ArticleForm
            mode="new"
            article={formSeed}
            onDone={(message, createdArticle) => {
              setFormSeed(undefined);
              setView({ mode: "list" });
              loadArticles().then(({ error }) => setListError(error));
              setToast({ type: "success", text: message });
              if (createdArticle) setDeployTracking({ slug: createdArticle.slug, title: createdArticle.title, status: "waiting" });
            }}
            onCancel={() => {
              setFormSeed(undefined);
              setView({ mode: "list" });
            }}
          />
        )}

        {view.mode === "edit" && (
          <ArticleForm
            mode="edit"
            article={formSeed?.slug === view.slug ? formSeed : articles.find((a) => a.slug === view.slug)}
            onDone={(message) => {
              setFormSeed(undefined);
              setView({ mode: "list" });
              loadArticles().then(({ error }) => setListError(error));
              setToast({ type: "success", text: message });
            }}
            onCancel={() => {
              setFormSeed(undefined);
              setView({ mode: "list" });
            }}
          />
        )}
      </div>
      </main>
    </div>
    <SiteFooter />
    </>
  );
}

function ArticleForm({
  mode,
  article,
  onDone,
  onCancel,
}: {
  mode: "new" | "edit";
  article?: Article;
  onDone: (message: string, createdArticle?: Article) => void;
  onCancel: () => void;
}) {
  const [source, setSource] = useState<"gdoc" | "docx">(article?.source.type ?? "docx");
  const [title, setTitle] = useState(article?.title ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [googleDocUrl, setGoogleDocUrl] = useState(article?.source.type === "gdoc" ? article.source.url : "");
  const [docxFile, setDocxFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [content, setContent] = useState(article?.content ?? "");
  const [error, setError] = useState<string | null>(null);
  const [importNotice, setImportNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [previewBusy, setPreviewBusy] = useState(false);
  const [coverPreviewUrl, setCoverPreviewUrl] = useState<string | undefined>(article?.cover);

  // Gera uma URL local instantânea para a prévia ao vivo, sem precisar converter o
  // arquivo para base64 (isso só acontece de fato ao pré-visualizar/publicar).
  useEffect(() => {
    if (!coverFile) {
      setCoverPreviewUrl(article?.cover);
      return;
    }
    const url = URL.createObjectURL(coverFile);
    setCoverPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverFile]);

  async function importContent(opts: { source: "gdoc" | "docx"; googleDocUrl?: string; docxFile?: File | null }) {
    if (opts.source === "gdoc" && !opts.googleDocUrl) {
      setError("Cole o link do Google Doc antes de importar.");
      return;
    }
    if (opts.source === "docx" && !opts.docxFile) {
      setError("Escolha um arquivo .docx antes de importar.");
      return;
    }
    setBusy(true);
    setError(null);
    setImportNotice(null);
    const form = new FormData();
    form.set("source", opts.source);
    if (opts.source === "gdoc") form.set("googleDocUrl", opts.googleDocUrl!);
    if (opts.source === "docx" && opts.docxFile) form.set("docxFile", opts.docxFile);

    const { ok, data } = await requestJson("/api/karenmoraes/blog/preview", { method: "POST", body: form });
    setBusy(false);
    if (!ok) {
      setError(data.error);
      return;
    }
    setContent(data.content);
    if (!title.trim() && data.suggestedTitle) setTitle(data.suggestedTitle);
    if (!excerpt.trim() && data.suggestedExcerpt) setExcerpt(data.suggestedExcerpt);
    setImportNotice("Conteúdo importado. Título e resumo foram sugeridos a partir do arquivo — revise antes de publicar.");
  }

  async function handleImport() {
    await importContent({ source, googleDocUrl, docxFile });
  }

  async function handleDocxFileSelected(file: File | null) {
    setDocxFile(file);
    if (file) await importContent({ source: "docx", docxFile: file });
  }

  async function handleResync() {
    setBusy(true);
    setError(null);
    setImportNotice(null);
    const form = new FormData();
    form.set("resync", "true");
    const { ok, data } = await requestJson(`/api/karenmoraes/blog/${article!.slug}`, { method: "PUT", body: form });
    setBusy(false);
    if (!ok) {
      setError(data.error);
      return;
    }
    setContent(data.article.content);
    setImportNotice("Conteúdo sincronizado com o Google Doc. Revise antes de salvar.");
  }

  async function handlePreview() {
    setPreviewBusy(true);
    const cover = coverFile ? await fileToDataUrl(coverFile) : article?.cover;
    // mesmo slugify usado na publicação real, para a URL da prévia bater com a URL final
    const slug = mode === "edit" && article ? article.slug : slugify(title) || "rascunho";
    savePreviewDraft(slug, {
      title: title.trim() || "(sem título)",
      excerpt,
      date: article?.date ?? new Date().toISOString(),
      cover,
      content,
      source: mode === "edit" && article ? article.source : source === "gdoc" ? { type: "gdoc", url: googleDocUrl } : { type: "docx" },
    });
    setPreviewBusy(false);
    window.open(`/proposta-comercial/karenmoraes/preview/${slug}`, "_blank");
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setShowConfirm(true);
  }

  async function performPublish() {
    setShowConfirm(false);
    setBusy(true);
    setError(null);
    setImportNotice(null);

    const form = new FormData();
    form.set("title", title);
    form.set("excerpt", excerpt);
    form.set("content", content);
    if (coverFile) form.set("cover", coverFile);

    let ok: boolean, data: any;
    if (mode === "new") {
      form.set("source", source);
      if (source === "gdoc") form.set("googleDocUrl", googleDocUrl);
      ({ ok, data } = await requestJson("/api/karenmoraes/blog", { method: "POST", body: form }));
    } else {
      if (docxFile) form.set("docxFile", docxFile);
      ({ ok, data } = await requestJson(`/api/karenmoraes/blog/${article!.slug}`, { method: "PUT", body: form }));
    }

    setBusy(false);
    if (!ok) {
      setError(data.error ?? "Não foi possível salvar o artigo. Tente novamente.");
      return;
    }
    onDone(
      mode === "new"
        ? "Artigo publicado! Acompanhando o deploy da Vercel abaixo..."
        : "Alterações salvas! A Vercel vai gerar um novo deploy em poucos minutos.",
      mode === "new" ? data.article : undefined
    );
  }

  return (
    <>
    <style>{EDIT_GRID_CSS}</style>
    <form onSubmit={handleSubmit} className="km-edit-grid">
    <div style={{ background: KM_COLORS.white, border: `1px solid ${KM_COLORS.border}`, borderRadius: 12, padding: 24 }}>
      <h2 style={{ fontFamily: KM_FONT_HEADING, color: KM_COLORS.wineDark, fontSize: 20, marginBottom: 16 }}>
        {mode === "new" ? "Novo artigo" : `Editar: ${article?.title}`}
      </h2>

      <label style={labelStyle}>
        Título {mode === "new" && <span style={{ color: KM_COLORS.muted, fontWeight: 400 }}>(opcional — se vazio, extraímos do arquivo)</span>}
      </label>
      <input
        style={inputStyle}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={mode === "new" ? "Deixe em branco para usar o título do arquivo" : undefined}
      />
      {mode === "new" && (
        <p style={{ fontFamily: KM_FONT_BODY, fontSize: 12, color: KM_COLORS.muted, marginTop: -8, marginBottom: 12 }}>
          URL: /blog/{title.trim() ? slugify(title) : <em>gerada a partir do título ou do arquivo</em>}
        </p>
      )}

      <label style={labelStyle}>
        Resumo {mode === "new" && <span style={{ color: KM_COLORS.muted, fontWeight: 400 }}>(opcional — se vazio, extraímos do arquivo)</span>}
      </label>
      <textarea
        style={{ ...inputStyle, minHeight: 60 }}
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        placeholder={mode === "new" ? "Deixe em branco para usar o início do texto do arquivo" : undefined}
      />

      <label style={labelStyle}>Imagem de capa (opcional)</label>
      <FileDropZone accept="image/*" file={coverFile} label="Selecione a imagem de capa" onFileSelected={setCoverFile} />

      {mode === "new" && (
        <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <label style={labelStyle}>
            <input type="radio" checked={source === "docx"} onChange={() => setSource("docx")} /> Upload .docx
          </label>
          <label style={labelStyle}>
            <input type="radio" checked={source === "gdoc"} onChange={() => setSource("gdoc")} /> Google Doc
          </label>
        </div>
      )}

      {mode === "new" && source === "docx" && (
        <>
          <label style={labelStyle}>Arquivo .docx</label>
          <FileDropZone
            accept=".docx"
            file={docxFile}
            disabled={busy}
            label="Selecione o arquivo .docx"
            onFileSelected={handleDocxFileSelected}
          />
          {busy && (
            <p style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: KM_FONT_BODY, fontSize: 13, color: KM_COLORS.wine, marginTop: -4, marginBottom: 12 }}>
              <Spinner size={13} /> Convertendo o arquivo...
            </p>
          )}
        </>
      )}
      {mode === "new" && source === "gdoc" && (
        <>
          <label style={labelStyle}>Link do Google Doc</label>
          <input style={inputStyle} value={googleDocUrl} onChange={(e) => setGoogleDocUrl(e.target.value)} placeholder="https://docs.google.com/document/d/..." />
        </>
      )}
      {mode === "new" && source === "gdoc" && (
        <button
          type="button"
          onClick={handleImport}
          disabled={busy}
          style={{ ...buttonStyle, display: "inline-flex", alignItems: "center", gap: 8, background: KM_COLORS.champagne, color: KM_COLORS.wineDark, marginBottom: 16, opacity: busy ? 0.7 : 1 }}
        >
          {busy && <Spinner size={13} />}
          {busy ? "Importando..." : "Importar e converter"}
        </button>
      )}

      {mode === "edit" && article?.source.type === "gdoc" && (
        <button
          type="button"
          onClick={handleResync}
          disabled={busy}
          style={{ ...buttonStyle, display: "inline-flex", alignItems: "center", gap: 8, background: KM_COLORS.champagne, color: KM_COLORS.wineDark, marginBottom: 16, opacity: busy ? 0.7 : 1 }}
        >
          {busy && <Spinner size={13} />}
          {busy ? "Sincronizando..." : "Sincronizar com o Google Doc"}
        </button>
      )}
      {mode === "edit" && article?.source.type === "docx" && (
        <>
          <label style={labelStyle}>Reenviar arquivo .docx (opcional)</label>
          <FileDropZone accept=".docx" file={docxFile} label="Selecione o novo arquivo .docx" onFileSelected={setDocxFile} />
        </>
      )}

      <label style={labelStyle}>Conteúdo (markdown)</label>
      <textarea style={{ ...inputStyle, minHeight: 160, fontFamily: "monospace", fontSize: 13 }} value={content} onChange={(e) => setContent(e.target.value)} />

      {importNotice && <p style={{ color: "#1E6B39", fontFamily: KM_FONT_BODY, fontSize: 13, marginBottom: 12 }}>{importNotice}</p>}

      {error && (
        <p style={{ background: "#FBE9E9", border: "1px solid crimson", borderRadius: 8, padding: "10px 12px", color: "crimson", fontFamily: KM_FONT_BODY, fontSize: 14, marginBottom: 12 }}>
          {error}
        </p>
      )}

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={handlePreview}
          disabled={previewBusy || !content}
          style={{ ...buttonStyle, display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: KM_COLORS.wine, border: `1px solid ${KM_COLORS.wine}`, opacity: previewBusy || !content ? 0.7 : 1 }}
        >
          {previewBusy && <Spinner size={13} />}
          {previewBusy ? "Gerando prévia..." : "Pré-visualizar em nova aba"}
        </button>
        <button
          type="submit"
          disabled={busy || !content}
          style={{ ...buttonStyle, display: "inline-flex", alignItems: "center", gap: 8, background: KM_COLORS.wine, color: "#fff", opacity: busy || !content ? 0.7 : 1 }}
        >
          {busy && <Spinner size={13} />}
          {busy ? "Salvando..." : mode === "new" ? "Publicar" : "Salvar alterações"}
        </button>
        <button type="button" onClick={onCancel} disabled={busy} style={{ ...buttonStyle, background: "transparent", color: KM_COLORS.muted }}>
          Cancelar
        </button>
      </div>
    </div>

    <div className="km-edit-preview">
      <div
        style={{
          background: KM_COLORS.champagne,
          border: `1px solid ${KM_COLORS.gold}`,
          borderRadius: 8,
          padding: "8px 16px",
          marginBottom: 12,
          fontFamily: KM_FONT_BODY,
          fontSize: 12,
          color: KM_COLORS.text,
          textAlign: "center",
        }}
      >
        Prévia ao vivo — atualiza conforme você edita
      </div>
      <div style={{ background: KM_COLORS.rose, borderRadius: 12, padding: 16, maxHeight: "calc(100vh - 160px)", overflowY: "auto" }}>
        {content ? (
          <ArticleView
            title={title.trim() || "(sem título)"}
            date={article?.date ?? new Date().toISOString()}
            cover={coverPreviewUrl}
            content={content}
          />
        ) : (
          <p style={{ fontFamily: KM_FONT_BODY, color: KM_COLORS.muted, textAlign: "center", padding: "40px 16px" }}>
            A prévia aparece aqui assim que houver conteúdo (importe um arquivo/Google Doc ou digite abaixo).
          </p>
        )}
      </div>
    </div>
    </form>

    {showConfirm && (
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(44,24,16,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
          padding: 24,
        }}
      >
        <div style={{ background: KM_COLORS.white, borderRadius: 12, padding: 28, maxWidth: 420, width: "100%" }}>
          <h3 style={{ fontFamily: KM_FONT_HEADING, color: KM_COLORS.wineDark, fontSize: 20, marginBottom: 12 }}>
            {mode === "new" ? "Confirmar publicação" : "Confirmar alterações"}
          </h3>
          <p style={{ fontFamily: KM_FONT_BODY, fontSize: 14, color: KM_COLORS.text, marginBottom: 8 }}>
            <strong>{title.trim() || "(sem título)"}</strong>
          </p>
          <p style={{ fontFamily: KM_FONT_BODY, fontSize: 14, color: KM_COLORS.muted, marginBottom: 20 }}>
            {mode === "new"
              ? "Depois de confirmar, o artigo vira público em poucos minutos. Se ainda não conferiu como vai ficar, use \"Pré-visualizar em nova aba\" antes de confirmar."
              : "Depois de confirmar, as alterações vão para o ar em poucos minutos."}
          </p>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <button type="button" onClick={() => setShowConfirm(false)} style={{ ...buttonStyle, background: "transparent", color: KM_COLORS.muted }}>
              Voltar e revisar
            </button>
            <button type="button" onClick={performPublish} style={{ ...buttonStyle, background: KM_COLORS.wine, color: "#fff" }}>
              {mode === "new" ? "Sim, publicar" : "Sim, salvar"}
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
