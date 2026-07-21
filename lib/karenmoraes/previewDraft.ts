import type { ArticleSource } from "./types";

export type PreviewDraft = {
  title: string;
  excerpt: string;
  date: string;
  cover?: string;
  content: string;
  source: ArticleSource;
  createdAt: number;
};

const PREFIX = "km_preview_";
const TTL_MS = 30 * 60 * 1000; // 30 minutos

function cleanupExpired() {
  const now = Date.now();
  for (const key of Object.keys(localStorage)) {
    if (!key.startsWith(PREFIX)) continue;
    try {
      const draft = JSON.parse(localStorage.getItem(key) ?? "");
      if (now - draft.createdAt > TTL_MS) localStorage.removeItem(key);
    } catch {
      localStorage.removeItem(key);
    }
  }
}

/** `id` já deve ser o slug (mesma função usada na publicação real), para a URL da prévia
 *  ficar o mais próxima possível da URL final publicada. */
export function savePreviewDraft(id: string, draft: Omit<PreviewDraft, "createdAt">) {
  cleanupExpired();
  localStorage.setItem(PREFIX + id, JSON.stringify({ ...draft, createdAt: Date.now() }));
}

export function loadPreviewDraft(id: string): PreviewDraft | null {
  const raw = localStorage.getItem(PREFIX + id);
  if (!raw) return null;
  try {
    const draft: PreviewDraft = JSON.parse(raw);
    if (Date.now() - draft.createdAt > TTL_MS) {
      localStorage.removeItem(PREFIX + id);
      return null;
    }
    return draft;
  } catch {
    return null;
  }
}
