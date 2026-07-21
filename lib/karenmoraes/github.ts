import { KM_GITHUB_BRANCH, KM_GITHUB_OWNER, KM_GITHUB_REPO, KM_GITHUB_TOKEN } from "./config";

function assertConfigured() {
  if (!KM_GITHUB_OWNER || !KM_GITHUB_REPO || !KM_GITHUB_TOKEN) {
    throw new Error(
      "GitHub não configurado: defina KARENMORAES_GITHUB_OWNER, KARENMORAES_GITHUB_REPO e KARENMORAES_GITHUB_TOKEN"
    );
  }
}

function apiUrl(path: string) {
  return `https://api.github.com/repos/${KM_GITHUB_OWNER}/${KM_GITHUB_REPO}/contents/${path}`;
}

function headers() {
  return {
    Authorization: `Bearer ${KM_GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };
}

export type GithubFile = { name: string; path: string; sha: string; content: string };

/** `revalidate` (segundos): usado pelas páginas públicas, que podem aceitar um
 * cache curto. Sem ele, busca sempre em tempo real — usado pelo admin, que
 * precisa refletir o estado real do repositório imediatamente. */
export async function getFile(path: string, revalidate?: number): Promise<GithubFile | null> {
  assertConfigured();
  const res = await fetch(`${apiUrl(path)}?ref=${KM_GITHUB_BRANCH}`, {
    headers: headers(),
    ...(revalidate ? { next: { revalidate } } : { cache: "no-store" }),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub getFile falhou (${res.status}): ${await res.text()}`);
  const data = await res.json();
  return {
    name: data.name,
    path: data.path,
    sha: data.sha,
    content: Buffer.from(data.content, "base64").toString("utf-8"),
  };
}

export async function listDir(path: string, revalidate?: number): Promise<{ name: string; path: string }[]> {
  assertConfigured();
  const res = await fetch(`${apiUrl(path)}?ref=${KM_GITHUB_BRANCH}`, {
    headers: headers(),
    ...(revalidate ? { next: { revalidate } } : { cache: "no-store" }),
  });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub listDir falhou (${res.status}): ${await res.text()}`);
  const data = await res.json();
  return Array.isArray(data) ? data.map((f) => ({ name: f.name, path: f.path })) : [];
}

async function putRaw(path: string, base64Content: string, message: string, sha?: string) {
  assertConfigured();
  const res = await fetch(apiUrl(path), {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify({
      message,
      content: base64Content,
      branch: KM_GITHUB_BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) throw new Error(`GitHub putFile falhou (${res.status}): ${await res.text()}`);
  return res.json();
}

export function putFile(path: string, content: string, message: string, sha?: string) {
  return putRaw(path, Buffer.from(content, "utf-8").toString("base64"), message, sha);
}

export function putBinaryFile(path: string, base64Content: string, message: string, sha?: string) {
  return putRaw(path, base64Content, message, sha);
}

export async function deleteFile(path: string, sha: string, message: string) {
  assertConfigured();
  const res = await fetch(apiUrl(path), {
    method: "DELETE",
    headers: headers(),
    body: JSON.stringify({ message, sha, branch: KM_GITHUB_BRANCH }),
  });
  if (!res.ok) throw new Error(`GitHub deleteFile falhou (${res.status}): ${await res.text()}`);
  return res.json();
}
