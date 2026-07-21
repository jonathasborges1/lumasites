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
