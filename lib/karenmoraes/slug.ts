const MAX_SLUG_LENGTH = 70; // limite recomendado para URLs amigáveis a SEO

/** Mesma função usada para gerar o slug final e o slug da prévia — o que a Dra. Karen vê na prévia é a URL real. */
export function slugify(title: string): string {
  const full = title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (full.length <= MAX_SLUG_LENGTH) return full;

  // corta no limite de palavra mais próximo, para não truncar no meio de uma palavra
  const cut = full.slice(0, MAX_SLUG_LENGTH);
  const lastHyphen = cut.lastIndexOf("-");
  return (lastHyphen > 0 ? cut.slice(0, lastHyphen) : cut).replace(/-$/, "");
}
