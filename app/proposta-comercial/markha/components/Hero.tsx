const WHATSAPP_URL = "https://wa.me/551239468433";
const HERO_IMG =
  "https://markha.com.br/wp-content/uploads/2023/07/foto-markha1.jpg";

const QUICK_LINKS = [
  { label: "Seguros", href: "#seguros" },
  { label: "Saúde e Odonto", href: "#saude" },
  { label: "Consórcio", href: "#consorcio" },
];

const TRUST_POINTS = [
  { value: "30+ anos", label: "de mercado" },
  { value: "38.000+", label: "segurados" },
  { value: "Porto Elite", label: "certificação" },
  { value: "500+", label: "contemplações" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center"
      style={{
        minHeight: "calc(100vh - 36px)",
        paddingTop: "116px",
        paddingBottom: "60px",
        backgroundImage: `url(${HERO_IMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(13,21,80,0.96) 0%, rgba(22,32,112,0.9) 42%, rgba(22,32,112,0.58) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-1 hidden lg:block"
        style={{ backgroundColor: "#D4A017", opacity: 0.6 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-7">
            <div
              className="h-px w-14 flex-shrink-0"
              style={{ backgroundColor: "#D4A017" }}
              aria-hidden="true"
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#D4A017" }}
            >
              Markha Consultoria em Seguros
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.08] mb-6 text-white">
            Seguros, saúde e consórcio com{" "}
            <span style={{ color: "#D4A017" }}>consultoria personalizada</span>
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-3xl mb-9"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Há mais de 30 anos protegendo patrimônios, famílias e empresas com
            atendimento próximo, tecnologia e grandes parceiros de mercado.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg"
              style={{ backgroundColor: "#D4A017", color: "#0D1550" }}
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Falar com especialista
            </a>
            <a
              href="#seguros"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-full border-2 transition-all duration-200 hover:scale-[1.02]"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Ver soluções
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
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

          <div className="flex flex-wrap gap-2.5 mb-12">
            {QUICK_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{
                  borderColor: "rgba(255,255,255,0.22)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.84)",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {TRUST_POINTS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border px-4 py-3"
                style={{
                  borderColor: "rgba(255,255,255,0.14)",
                  backgroundColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-sm font-bold text-white leading-none mb-1">
                  {item.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.56)" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #162070 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
