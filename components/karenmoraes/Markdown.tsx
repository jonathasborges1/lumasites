import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { KM_COLORS } from "@/lib/karenmoraes/theme";

const CSS = `
  .km-markdown{line-height:1.75;font-size:16px;color:${KM_COLORS.text};color-scheme:light}
  .km-markdown h1,.km-markdown h2,.km-markdown h3{line-height:1.3;margin:1.4em 0 .5em}
  .km-markdown p{margin:0 0 1em}
  .km-markdown ul,.km-markdown ol{margin:0 0 1em;padding-left:1.4em}
  .km-markdown a{color:inherit;text-decoration:underline}
  .km-markdown img{max-width:100%;border-radius:8px}
  .km-markdown table{width:100%;border-collapse:collapse;margin:0 0 1em}
  .km-markdown th,.km-markdown td{border:1px solid rgba(0,0,0,.15);padding:8px 12px;text-align:left}
  .km-markdown blockquote{margin:0 0 1em;padding-left:1em;border-left:3px solid rgba(0,0,0,.15);opacity:.85}
`;

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="km-markdown">
      <style>{CSS}</style>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
