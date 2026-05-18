const POSTS = [
  {
    title: "Financiamento ou Consórcio: descubra a melhor escolha",
    desc: "Entenda as diferenças para decidir com mais segurança ao comprar imóvel ou veículo.",
    date: "31/05/2024",
    href: "https://markha.com.br/financiamento-consorcio-qual-a-melhor-opcao/",
    category: "Consórcio",
  },
  {
    title: "Guia para maximizar os benefícios do seu plano de saúde",
    desc: "Veja como garantir cobertura médica de qualidade e proteger sua família.",
    date: "12/06/2024",
    href: "https://markha.com.br/maximize-os-beneficios-do-seu-plano-de-saude/",
    category: "Saúde",
  },
  {
    title: "Benefícios do seguro para empresas",
    desc: "Proteja ativos e garanta continuidade do negócio frente a imprevistos.",
    date: "06/06/2024",
    href: "https://markha.com.br/beneficios-do-seguro-para-empresas/",
    category: "Empresas",
  },
  {
    title: "Seguro de habitação vs. seguro residencial",
    desc: "Entenda as diferenças e escolha a proteção ideal para sua casa.",
    date: "16/05/2024",
    href: "https://markha.com.br/seguro-habitacao-vs-seguro-residencial-entenda-as-diferencas/",
    category: "Seguros",
  },
];

export function Newsletter() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-px w-10 flex-shrink-0"
                style={{ backgroundColor: "#162070" }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#162070" }}
              >
                Newsletter Markha
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ color: "#1A1A2E" }}
            >
              Conteúdo para você escolher com mais segurança
            </h2>

            <p
              className="text-base leading-relaxed mb-7"
              style={{ color: "#5A6080" }}
            >
              A Markha também produz conteúdos educativos sobre seguros, saúde e
              consórcio para ajudar clientes a comparar opções, entender
              coberturas e tomar decisões mais conscientes.
            </p>

            <a
              href="https://markha.com.br/category/newsletter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "#162070", color: "white" }}
            >
              Acessar newsletter
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.4}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {POSTS.map((post) => (
              <a
                key={post.href}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "#E2E8F0", backgroundColor: "#F8F9FC" }}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
                    style={{ backgroundColor: "#EEF1FC", color: "#162070" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "#5A6080" }}>
                    {post.date}
                  </span>
                </div>

                <h3
                  className="text-base font-bold leading-snug mb-3"
                  style={{ color: "#1A1A2E" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#5A6080" }}
                >
                  {post.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity group-hover:opacity-75"
                  style={{ color: "#162070" }}
                >
                  Ler artigo
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
