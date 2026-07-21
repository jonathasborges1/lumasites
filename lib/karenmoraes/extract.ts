function stripMarkdown(line: string): string {
  return line
    .replace(/^#+\s*/, "")
    .replace(/[*_`]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

/** Deriva título e resumo do próprio markdown, para publicar sem digitar nada além do arquivo. */
export function deriveTitleAndExcerpt(content: string): { title: string; excerpt: string } {
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const title = lines.length ? stripMarkdown(lines[0]) : "";
  const excerptSource = lines.slice(1).find((line) => stripMarkdown(line).length > 0);
  const excerptText = excerptSource ? stripMarkdown(excerptSource) : "";
  const excerpt = excerptText.length > 160 ? `${excerptText.slice(0, 157)}...` : excerptText;

  return { title, excerpt };
}
