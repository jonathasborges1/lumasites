const WHATSAPP_URL =
  "https://wa.me/551239468433?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seguro%20sa%C3%BAde%20e%20odontol%C3%B3gico.";

const DIFFERENTIALS = [
  {
    title: "Gestão de saúde preventiva",
    desc: "Atuação preventiva com campanhas e ações de conscientização para cuidar dos colaboradores antes dos problemas aparecerem.",
  },
  {
    title: "Análise customizada com health analytics",
    desc: "Uso de BI para apoiar decisões mais assertivas na gestão do plano, controle de sinistralidade e escolha do melhor custo-benefício.",
  },
  {
    title: "Sistema operacional para empresas",
    desc: "Acompanhamento moderno e flexível para gestão de pessoas, beneficiários e indicadores do plano.",
  },
];

const BENEFITS = [
  "Cobertura ambulatorial, hospitalar e obstetrícia",
  "Planos odontológicos e benefícios especiais",
  "Gestão para empresas com controle de sinistralidade",
];

const PARTNERS = [
  {
    name: "SulAmérica",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/sulamerica-logo-300x113.png",
  },
  {
    name: "Bradesco Saúde",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/BRADESCO-300x107.png",
  },
  {
    name: "Amil",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/amil-logo-1-2-300x107.png",
  },
  {
    name: "Seguros Unimed",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/SEGUROS-UNIMED-e1688491268791.png",
  },
  {
    name: "Omint",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/OMINT-300x109.png",
  },
  {
    name: "GNDI",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/GNDI-300x109.png",
  },
  {
    name: "Unimed SJC",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/UNIMED-SJC-300x139.png",
  },
  {
    name: "Santa Casa",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/SANTA-CASA-e1690571571781.png",
  },
  {
    name: "Ativia",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/ATIVIA-LOGO.png",
  },
  {
    name: "Hapvida",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/HAPVIDA-LOGO-300x69.png",
  },
  {
    name: "São Francisco Vida",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/sao-francisco-vida.png",
  },
  {
    name: "Uniodonto",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/uniodonto-300x46.webp",
  },
  {
    name: "Odontoprev",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/odontoprev-e1690571690390-300x59.jpg",
  },
  {
    name: "Dentalpar",
    logo: "https://markha.com.br/wp-content/uploads/2023/07/dentalpar-300x90.png",
  },
];

export function Health() {
  return (
    <section id="saude" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl hidden sm:block"
              style={{ backgroundColor: "#EEF1FC" }}
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://markha.com.br/wp-content/uploads/2024/06/plano_saude_1.jpg"
                alt="Seguro saúde e odontológico Markha"
                className="w-full h-80 lg:h-[440px] object-cover"
              />
              <div
                className="absolute bottom-5 left-5 rounded-2xl px-5 py-4 shadow-xl"
                style={{
                  backgroundColor: "rgba(22,32,112,0.97)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="text-3xl font-bold text-white leading-none mb-1">
                  32.000<span className="text-lg">+</span>
                </div>
                <div
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  Vidas seguradas
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
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
                Saúde e odonto
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ color: "#1A1A2E" }}
            >
              Seguro Saúde e Odontológico para você,
              <br className="hidden sm:block" />
              sua família e sua empresa
            </h2>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#5A6080" }}
            >
              Com mais de 32.000 vidas seguradas, a Markha reúne as vantagens
              de uma contratação corporativa a um atendimento personalizado,
              com soluções para pessoas, famílias e empresas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {BENEFITS.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border px-4 py-3 text-xs font-semibold leading-relaxed"
                  style={{ borderColor: "#E2E8F0", color: "#1A1A2E" }}
                >
                  {item}
                </div>
              ))}
            </div>

            <ul className="space-y-6 mb-10">
              {DIFFERENTIALS.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#162070" }}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-sm mb-1"
                      style={{ color: "#1A1A2E" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#5A6080" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold rounded-full text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "#162070" }}
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Solicitar cotação de saúde e odonto
            </a>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t" style={{ borderColor: "#E2E8F0" }}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-6">
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#162070" }}
              >
                Parceiros
              </span>
              <h3
                className="text-xl sm:text-2xl font-bold mt-2"
                style={{ color: "#1A1A2E" }}
              >
                Principais parceiros Saúde e Odonto
              </h3>
            </div>
            <p className="text-sm max-w-xl" style={{ color: "#5A6080" }}>
              Acesso a grandes seguradoras e operadoras para comparar cobertura,
              rede credenciada e investimento com mais precisão.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="h-20 rounded-xl border bg-white px-3 py-4 flex items-center justify-center"
                style={{ borderColor: "#E2E8F0" }}
                title={partner.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
