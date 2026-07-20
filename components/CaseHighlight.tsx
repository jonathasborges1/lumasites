import { ArrowUpRight } from "lucide-react";

export type CaseItem = {
  client: string;
  detail: string;
  url: string;
};

type CaseHighlightProps = {
  eyebrow: string;
  cases: CaseItem[];
};

export function CaseHighlight({ eyebrow, cases }: CaseHighlightProps) {
  return (
    <div className="rounded-2xl border border-glow-cyan/20 bg-deep-blue/60 p-6 md:p-8">
      <p className="mb-5 font-display text-xs uppercase tracking-[0.3em] text-glow-aqua">
        {eyebrow}
      </p>
      <div className="space-y-5">
        {cases.map((item, index) => (
          <div
            key={item.client}
            className={`flex flex-wrap items-center justify-between gap-3 ${
              index > 0 ? "border-t border-white/8 pt-5" : ""
            }`}
          >
            <div>
              <p className="font-display text-sm uppercase tracking-wide text-ink-primary">
                {item.client}
              </p>
              <p className="text-sm leading-relaxed text-ink-secondary">{item.detail}</p>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 font-display text-xs uppercase tracking-wide text-glow-aqua underline underline-offset-2 transition-colors duration-200 hover:text-white"
            >
              Ver site
              <ArrowUpRight size={13} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
