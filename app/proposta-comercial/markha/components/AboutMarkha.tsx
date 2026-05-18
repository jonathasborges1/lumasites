const OFFICE_IMAGE =
  "https://markha.com.br/wp-content/uploads/2023/07/foto-markha2.jpg";

const CEO_IMAGE =
  "https://markha.com.br/wp-content/uploads/2023/07/IMG-20220317-WA0009-e1688995356932.jpg";

const STRUCTURE = [
  { value: "38.000+", label: "segurados" },
  { value: "20", label: "colaboradores diretos" },
  { value: "Brasil", label: "atuação nacional" },
  { value: "1992", label: "fundação da Markha" },
];

const PILLARS = [
  "Tecnologia para entregar soluções com agilidade",
  "Equipe qualificada e especialista em todos os ramos",
  "Parcerias sólidas com seguradoras e operadoras",
  "Ética, transparência e atendimento personalizado",
];

export function AboutMarkha() {
  return (
    <section id="a-markha" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
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
                Conheça a Markha
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ color: "#1A1A2E" }}
            >
              Seu patrimônio seguro,
              <br className="hidden sm:block" />
              você mais tranquilo
            </h2>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#5A6080" }}
            >
              Há mais de 30 anos no mercado, a Markha Consultoria em Seguros e
              Consórcios constrói sua trajetória com foco em encontrar a melhor
              solução em seguros, saúde e consórcios para cada cliente.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#5A6080" }}
            >
              A corretora investe em tecnologia, pessoal qualificado e parcerias
              sólidas com as principais seguradoras e operadoras do mercado,
              mantendo ética, transparência e profissionalismo em um atendimento
              totalmente personalizado.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-x-12 mb-8">
              {STRUCTURE.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border px-4 py-4 min-w-[142px]"
                  style={{ borderColor: "#E2E8F0", backgroundColor: "#F8F9FC" }}
                >
                  <div
                    className="text-xl font-bold leading-none mb-2"
                    style={{ color: "#162070" }}
                  >
                    {item.value}
                  </div>
                  <div
                    className="text-[10px] font-semibold uppercase tracking-normal leading-snug whitespace-normal"
                    style={{ color: "#5A6080" }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PILLARS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: "#5A6080" }}
                >
                  <span
                    className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#D4A017" }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_0.82fr] gap-5 items-end">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={OFFICE_IMAGE}
                alt="Estrutura da Markha Consultoria em Seguros"
                className="h-80 sm:h-[430px] w-full object-cover"
              />
            </div>

            <div className="space-y-5">
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: "#162070" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
                  style={{ color: "#D4A017" }}
                >
                  CEO
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={CEO_IMAGE}
                      alt="Kako Blanch, CEO da Markha"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Kako Blanch</h3>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.62)" }}
                    >
                      Fundador da Markha Seguros
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.74)" }}
                >
                  Fundou a Markha em 1992 e soma 46 anos de experiência no ramo,
                  liderando uma consultoria feita para atender necessidades,
                  sonhos e objetivos com proximidade.
                </p>
              </div>

              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: "#E2E8F0", backgroundColor: "#F8F9FC" }}
              >
                <p
                  className="text-xl font-bold leading-snug"
                  style={{ color: "#162070" }}
                >
                  Pensou em seguros, saúde ou consórcio?
                </p>
                <p
                  className="text-sm font-semibold mt-2"
                  style={{ color: "#D4A017" }}
                >
                  Pensou Markha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
