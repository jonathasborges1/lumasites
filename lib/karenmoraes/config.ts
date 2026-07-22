export const KM_COOKIE_NAME = "karenmoraes_admin_session";
export const KM_ADMIN_BASE_PATH = "/proposta-comercial/karenmoraes/admin";
export const KM_CONTENT_DIR = "content/karenmoraes/blog";
export const KM_COVERS_PUBLIC_DIR = "public/proposta-comercial/karenmoraes/blog/covers";
export const KM_COVERS_URL_PREFIX = "/proposta-comercial/karenmoraes/blog/covers";

export const KM_GITHUB_OWNER = process.env.KARENMORAES_GITHUB_OWNER ?? "";
export const KM_GITHUB_REPO = process.env.KARENMORAES_GITHUB_REPO ?? "";
export const KM_GITHUB_BRANCH = process.env.KARENMORAES_GITHUB_BRANCH ?? "main";
export const KM_GITHUB_TOKEN = process.env.KARENMORAES_GITHUB_TOKEN ?? "";

export const KM_ADMIN_PASSWORD_HASH = process.env.KARENMORAES_ADMIN_PASSWORD_HASH ?? "";
export const KM_SESSION_SECRET = process.env.KARENMORAES_SESSION_SECRET ?? "";

/** Cache das páginas públicas do blog (segundos) — publicar/editar dispara
 * revalidatePath e ignora essa janela, então isso só cobre o pior caso. */
export const KM_PUBLIC_REVALIDATE_SECONDS = 60;

/** Limite de tamanho por arquivo (.docx e imagem de capa). A Vercel já rejeita
 * sozinha qualquer corpo de requisição de função serverless acima de ~4.5MB
 * (limite fixo da plataforma, não é configurável) — ficamos com folga abaixo
 * disso para sempre dar uma mensagem nossa, amigável, em vez do erro genérico
 * da plataforma. */
export const KM_MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
export const KM_MAX_UPLOAD_MB = KM_MAX_UPLOAD_BYTES / (1024 * 1024);

/** Validação do lado do servidor — mesma regra do FileDropZone no cliente,
 * repetida aqui porque o cliente pode ser contornado (DevTools, chamada
 * direta à API). Lança erro com mensagem amigável em vez de deixar a
 * plataforma rejeitar com um 413 genérico. */
export function assertUploadSize(file: File) {
  if (file.size > KM_MAX_UPLOAD_BYTES) {
    throw new Error(
      `"${file.name}" tem ${(file.size / (1024 * 1024)).toFixed(1)}MB — o limite é ${KM_MAX_UPLOAD_MB}MB. Escolha um arquivo menor.`
    );
  }
}
