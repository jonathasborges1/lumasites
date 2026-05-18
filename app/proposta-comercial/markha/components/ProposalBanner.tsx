export function ProposalBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center px-4 text-center"
      style={{
        height: "36px",
        backgroundColor: "#0D1550",
        color: "rgba(255,255,255,0.72)",
        fontSize: "11.5px",
        letterSpacing: "0.04em",
      }}
    >
      <span className="flex items-center gap-2 flex-wrap justify-center">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: "#D4A017" }}
          aria-hidden="true"
        />
        <span className="font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>
          Prévia Conceitual
        </span>
        <span className="hidden sm:inline opacity-40">·</span>
        <span className="hidden sm:inline">
          Esta é uma proposta de redesign elaborada pela{" "}
          <a
            href="https://lumasites.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors text-[rgba(255,255,255,0.72)] hover:text-white"
          >
            LumaSites.com.br
          </a>
        </span>
      </span>
    </div>
  );
}
