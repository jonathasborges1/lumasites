"use client";

import { useState } from "react";

type TabId = "pessoa_fisica" | "empresa" | "consorcio";

const TABS: { id: TabId; label: string }[] = [
  { id: "pessoa_fisica", label: "Pessoa Física" },
  { id: "empresa", label: "Empresa" },
  { id: "consorcio", label: "Consórcio" },
];

type Solution = {
  title: string;
  desc: string;
  img: string;
  icon: React.ReactNode;
};

const BASE = "https://markha.com.br/wp-content/uploads";

const SOLUTIONS: Record<TabId, Solution[]> = {
  pessoa_fisica: [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Seguro de Vida",
      desc: "Tranquilidade para quem você ama. Coberturas por falecimento, invalidez e assistência funeral personalizadas.",
      img: `${BASE}/2024/03/seguro_vida.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      title: "Seguro Auto",
      desc: "Proteção completa para seu veículo com coberturas personalizadas, assistência 24h e franquia reduzida.",
      img: `${BASE}/2024/03/seguro_auto.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      title: "Seguro Residencial",
      desc: "Seu lar protegido com coberturas contra incêndio, roubo, danos elétricos e diversas assistências.",
      img: `${BASE}/2024/03/seguro_residencial_1.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      title: "Plano de Saúde",
      desc: "Planos individuais e familiares com cobertura ambulatorial, hospitalar e odontológica.",
      img: `${BASE}/2024/06/plano_saude_1.jpg`,
    },
  ],
  empresa: [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      title: "Vida em Grupo",
      desc: "Valorize e proteja sua equipe com coberturas coletivas personalizadas para o porte da sua empresa.",
      img: `${BASE}/2024/04/seguro_vida_grupo_1.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      title: "RC Profissional",
      desc: "Proteção contra responsabilidade civil por erros ou omissões no exercício da sua atividade.",
      img: `${BASE}/2024/03/responsabilidade_civil_1.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      title: "D&O — Directors & Officers",
      desc: "Blindagem jurídica para executivos e conselheiros contra riscos da gestão empresarial.",
      img: `${BASE}/2024/06/protecao_vs_seguro_1.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      title: "Financiamento",
      desc: "Vantagens e taxas exclusivas para proteção de financiamentos de veículos e imóveis.",
      img: `${BASE}/2024/05/financiamento_consorcio_1.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      title: "Transporte",
      desc: "Proteção para suas mercadorias e para quem as transporta, cobrindo cargas em todo o trajeto.",
      img: `${BASE}/2024/03/seguro_terceiro_1.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
      ),
      title: "Fiança Locatícia",
      desc: "Praticidade para o inquilino e garantia para o proprietário — sem necessidade de fiador.",
      img: `${BASE}/2024/05/habitacao_vs_residencial_2.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m5.267-5.267l-4.41 4.41M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Equipamentos",
      desc: "Proteção para máquinas e equipamentos da sua empresa contra danos, roubo e quebra.",
      img: `${BASE}/2024/06/protecao_vs_seguro_2.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: "Seguro Empresarial",
      desc: "Cobertura completa para o patrimônio, responsabilidades e operações do seu negócio.",
      img: `${BASE}/2024/06/seguro_empresa_2.jpg`,
    },
  ],
  consorcio: [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      title: "Consórcio de Imóvel",
      desc: "Realize o sonho da casa própria sem juros. Planos em até 200 meses a partir de R$ 70 mil.",
      img: `${BASE}/2024/05/consorcio_imoveis_porto_seguro_1.jpg`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      title: "Consórcio de Veículo",
      desc: "Carros, motos, caminhões e mais, novos ou seminovos. Sem juros, de 50 a 120 meses.",
      img: `${BASE}/2024/06/consorcio-de-veiculo_1.jpg`,
    },
  ],
};

export function Solutions() {
  const [active, setActive] = useState<TabId>("pessoa_fisica");

  return (
    <section
      id="seguros"
      className="py-20 sm:py-24"
      style={{ backgroundColor: "#F8F9FC" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div
              className="h-px w-10"
              style={{ backgroundColor: "#162070" }}
              aria-hidden="true"
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: "#162070" }}
            >
              Nossas soluções
            </span>
            <div
              className="h-px w-10"
              style={{ backgroundColor: "#162070" }}
              aria-hidden="true"
            />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#1A1A2E" }}
          >
            Soluções para cada momento da sua vida
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: "#5A6080" }}
          >
            De proteção pessoal a planos corporativos, encontramos a solução
            ideal para o seu perfil e momento de vida.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-xl p-1 gap-1"
            style={{ backgroundColor: "#E2E8F0" }}
            role="tablist"
            aria-label="Categorias de soluções"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
                style={{
                  backgroundColor:
                    active === tab.id ? "#162070" : "transparent",
                  color: active === tab.id ? "white" : "#5A6080",
                  boxShadow:
                    active === tab.id
                      ? "0 2px 8px rgba(22,32,112,0.25)"
                      : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          role="tabpanel"
        >
          {SOLUTIONS[active].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl overflow-hidden bg-white border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ borderColor: "#E2E8F0" }}
            >
              {/* Card image */}
              <div className="h-36 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card body */}
              <div className="p-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#EEF1FC", color: "#162070" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-semibold text-sm mb-2 leading-snug"
                  style={{ color: "#1A1A2E" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-4"
                  style={{ color: "#5A6080" }}
                >
                  {item.desc}
                </p>
                <a
                  href="https://wa.me/551239468433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-75"
                  style={{ color: "#162070" }}
                >
                  Solicitar cotação
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
