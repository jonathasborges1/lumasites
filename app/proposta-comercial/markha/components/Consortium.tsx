const PORTO_LAR_LOGO =
  "https://markha.com.br/wp-content/uploads/2023/09/logo-porto-lar-consorcio-site.png";

const BENEFITS = [
  "Parcelas reduzidas até a contemplação",
  "Uso do FGTS permitido (imóvel)",
  "Alto índice de contemplação",
  "Lance e assembleia pelo aplicativo",
  "Qualidade de atendimento Porto Seguro",
  "Certificação Porto Elite",
];

const HOW_IT_WORKS = [
  {
    title: "Escolha sua cota",
    desc: "Defina a carta de crédito ideal e contribua mensalmente para o fundo do grupo.",
  },
  {
    title: "Participe dos sorteios",
    desc: "A cada mês, participantes podem ser contemplados e comprar o bem à vista.",
  },
  {
    title: "Antecipe com lance",
    desc: "Se quiser acelerar a contemplação, você pode ofertar lance pelo aplicativo.",
  },
];

const COMPARISON_ROWS = [
  {
    propertyValue: "R$ 250.000,00",
    financingInstallment: "204 x R$ 2.962,78",
    consortiumInstallment: "200 x R$ 1.546,54",
    financingTotal: "R$ 604.407,12",
    consortiumTotal: "R$ 309.308,00",
    savings: "R$ 295.099,12",
  },
  {
    propertyValue: "R$ 500.000,00",
    financingInstallment: "204 x R$ 5.925,63",
    consortiumInstallment: "200 x R$ 3.093,08",
    financingTotal: "R$ 1.208.828,52",
    consortiumTotal: "R$ 618.616,00",
    savings: "R$ 590.198,24",
  },
  {
    propertyValue: "R$ 1.000.000,00",
    financingInstallment: "204 x R$ 11.851,12",
    consortiumInstallment: "200 x R$ 6.186,16",
    financingTotal: "R$ 2.417.628,48",
    consortiumTotal: "R$ 1.237.232,00",
    savings: "R$ 1.180.396,48",
  },
];

type Product = {
  title: string;
  subtitle: string;
  items: string[];
  cta: string;
  waText: string;
  icon: React.ReactNode;
};

const PRODUCTS: Product[] = [
  {
    title: "Consórcio de Imóvel",
    subtitle: "Créditos a partir de R$ 70 mil",
    items: [
      "Pague em até 200 meses",
      "Sem entrada e sem juros",
      "Use seu FGTS como lance",
      "Casa, apartamento, terreno, construção ou reforma",
    ],
    cta: "Simular consórcio de imóvel",
    waText: "Olá! Gostaria de simular um consórcio de imóvel.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#D4A017"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: "Consórcio de Veículo",
    subtitle: "Créditos a partir de R$ 25 mil",
    items: [
      "Planos de 50 a 120 meses",
      "Carros, motos, caminhões, náuticos, vans e ônibus",
      "Novos, seminovos e renovação de frota",
      "Compra planejada, sem entrada e sem juros",
    ],
    cta: "Simular consórcio de veículo",
    waText: "Olá! Gostaria de simular um consórcio de veículo.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#D4A017"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
];

export function Consortium() {
  return (
    <section
      id="consorcio"
      className="py-20 sm:py-24"
      style={{ backgroundColor: "#0D1550" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-px w-10 flex-shrink-0"
                style={{ backgroundColor: "#D4A017" }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#D4A017" }}
              >
                Porto Lar Consórcios
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Realize seus sonhos sem pagar juros
            </h2>
            <p
              className="text-base max-w-3xl"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Há mais de 20 anos, a Porto Lar Consórcios — uma empresa do Grupo
              Markha® — é referência em consórcio Porto, com certificação Porto
              Elite e mais de 500 contemplações realizadas.
            </p>
          </div>

          <div
            className="justify-self-start lg:justify-self-end rounded-2xl px-8 py-4"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PORTO_LAR_LOGO}
              alt="Porto Lar Consórcios"
              className="h-11 w-auto object-contain"
            />
          </div>
        </div>

        <div
          className="mb-10 overflow-hidden rounded-2xl border bg-white"
          style={{ borderColor: "rgba(212,160,23,0.32)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr]">
            <div
              className="p-6 sm:p-8"
              style={{ backgroundColor: "#F8F9FC" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#D4A017" }}
              >
                Consórcio x financiamento
              </p>
              <h3
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ color: "#0D1550" }}
              >
                Compare a economia em diferentes cartas de crédito.
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5A6080" }}
              >
                Ao ser contemplado, você usa a carta de crédito para negociar à
                vista. É uma alternativa para conquistar imóvel ou veículo com
                planejamento e sem juros de financiamento.
              </p>
              <div
                className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-semibold uppercase tracking-wide"
                style={{ color: "#6B7280" }}
              >
                <span>Financiamento</span>
                <span style={{ color: "#12A8D8" }}>Consórcio</span>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-sm">
                  <thead>
                    <tr>
                      {[
                        "Valor do imóvel",
                        "Parcelas",
                        "Valor total",
                        "Economia",
                      ].map((heading) => (
                        <th
                          key={heading}
                          className="border-b px-4 pb-3 text-left font-bold"
                          style={{ borderColor: "#E2E8F0", color: "#0D1550" }}
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row) => (
                      <tr key={row.propertyValue}>
                        <td
                          className="border-b px-4 py-5 font-semibold"
                          style={{ borderColor: "#E2E8F0", color: "#4A5568" }}
                        >
                          {row.propertyValue}
                        </td>
                        <td
                          className="border-b px-4 py-5"
                          style={{ borderColor: "#E2E8F0" }}
                        >
                          <span style={{ color: "#6B7280" }}>
                            {row.financingInstallment}
                          </span>
                          <br />
                          <strong style={{ color: "#12A8D8" }}>
                            {row.consortiumInstallment}
                          </strong>
                        </td>
                        <td
                          className="border-b px-4 py-5"
                          style={{ borderColor: "#E2E8F0" }}
                        >
                          <span style={{ color: "#6B7280" }}>
                            {row.financingTotal}
                          </span>
                          <br />
                          <strong style={{ color: "#12A8D8" }}>
                            {row.consortiumTotal}
                          </strong>
                        </td>
                        <td
                          className="border-b px-4 py-5"
                          style={{ borderColor: "#E2E8F0" }}
                        >
                          <span
                            className="inline-flex rounded-lg px-3 py-2 font-bold text-white"
                            style={{ backgroundColor: "#12A8D8" }}
                          >
                            {row.savings}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden space-y-3">
                {COMPARISON_ROWS.map((row) => (
                  <div
                    key={row.propertyValue}
                    className="rounded-xl border p-4"
                    style={{ borderColor: "#E2E8F0" }}
                  >
                    <div
                      className="text-sm font-bold mb-3"
                      style={{ color: "#0D1550" }}
                    >
                      {row.propertyValue}
                    </div>
                    <div className="grid grid-cols-1 gap-3 text-xs">
                      <div>
                        <span
                          className="block font-semibold uppercase tracking-wide mb-1"
                          style={{ color: "#6B7280" }}
                        >
                          Parcelas
                        </span>
                        <span style={{ color: "#6B7280" }}>
                          {row.financingInstallment}
                        </span>
                        <br />
                        <strong style={{ color: "#12A8D8" }}>
                          {row.consortiumInstallment}
                        </strong>
                      </div>
                      <div>
                        <span
                          className="block font-semibold uppercase tracking-wide mb-1"
                          style={{ color: "#6B7280" }}
                        >
                          Valor total
                        </span>
                        <span style={{ color: "#6B7280" }}>
                          {row.financingTotal}
                        </span>
                        <br />
                        <strong style={{ color: "#12A8D8" }}>
                          {row.consortiumTotal}
                        </strong>
                      </div>
                      <div>
                        <span
                          className="block font-semibold uppercase tracking-wide mb-1"
                          style={{ color: "#6B7280" }}
                        >
                          Economia
                        </span>
                        <span
                          className="inline-flex rounded-lg px-3 py-2 font-bold text-white"
                          style={{ backgroundColor: "#12A8D8" }}
                        >
                          {row.savings}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="mt-4 text-xs leading-relaxed"
                style={{ color: "#6B7280" }}
              >
                Valores ilustrativos conforme comparativo de referência. A
                simulação final depende do crédito, grupo e condições vigentes.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="mb-5">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "#D4A017" }}
            >
              Como funciona
            </p>
            <h3 className="text-2xl font-bold text-white">
              Da cota à contemplação, em três etapas simples.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {HOW_IT_WORKS.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl p-5 border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold mb-4"
                  style={{ backgroundColor: "#D4A017", color: "#0D1550" }}
                >
                  {index + 1}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.68)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-4 text-sm leading-relaxed max-w-4xl"
            style={{ color: "rgba(255,255,255,0.62)" }}
          >
            Os grupos da Porto Lar são administrados pela Porto, instituição
            regulamentada pelo Banco Central.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="rounded-2xl p-7 border transition-colors"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(212,160,23,0.12)" }}
                >
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {product.title}
                  </h3>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "#D4A017" }}
                  >
                    {product.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 mb-7">
                {product.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#D4A017" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/551239468433?text=${encodeURIComponent(product.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: "#D4A017", color: "#0D1550" }}
              >
                {product.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Diferenciais Porto Lar
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="flex items-center gap-2 rounded-xl px-4 py-3"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#D4A017"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span
                  className="text-sm text-white"
                  style={{ color: "rgba(255,255,255,0.82)" }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
