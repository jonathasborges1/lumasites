import { KM_COLORS, KM_FONT_BODY, KM_FONT_HEADING } from "@/lib/karenmoraes/theme";
import Markdown from "@/components/karenmoraes/Markdown";

export default function ArticleView({
  title,
  date,
  cover,
  content,
}: {
  title: string;
  date: string;
  cover?: string;
  content: string;
}) {
  return (
    <article style={{ maxWidth: 720, margin: "0 auto", background: KM_COLORS.white, borderRadius: 12, padding: 40, color: KM_COLORS.text }}>
      <span style={{ fontFamily: KM_FONT_BODY, fontSize: 13, color: KM_COLORS.gold, textTransform: "uppercase", letterSpacing: 1 }}>
        {new Date(date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
      </span>
      <h1 style={{ fontFamily: KM_FONT_HEADING, color: KM_COLORS.wineDark, fontSize: 36, margin: "8px 0 24px" }}>{title}</h1>
      {cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cover} alt={title} style={{ width: "100%", borderRadius: 8, marginBottom: 24 }} />
      )}
      <Markdown content={content} />
    </article>
  );
}
