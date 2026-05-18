const REVIEWS = [
  {
    name: "Ana Paula F.",
    date: "Mar 2024",
    rating: 5,
    text: "Excelente atendimento! A equipe da Markha foi super prestativa na escolha do meu plano de saúde. Me explicaram tudo com paciência. Recomendo muito!",
  },
  {
    name: "Roberto C.",
    date: "Jan 2024",
    rating: 5,
    text: "Já sou cliente há mais de 10 anos. Sempre fui muito bem atendido, tanto no seguro do carro quanto no da residência. Confiança total na Markha.",
  },
  {
    name: "Fernanda S.",
    date: "Fev 2024",
    rating: 5,
    text: "O consórcio da Porto Lar foi a melhor decisão que tomei. Fui contemplada em menos de 1 ano e comprei meu apartamento sem pagar nenhum juro.",
  },
  {
    name: "Carlos M.",
    date: "Dez 2023",
    rating: 5,
    text: "Atendimento personalizado e muito profissional. Esclareceram todas as minhas dúvidas sobre o seguro de vida. Equipe muito capacitada e atenciosa.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill={i < count ? "#FFB900" : "#E2E8F0"}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24" style={{ backgroundColor: "#F8F9FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              Depoimentos
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
            O que nossos clientes dizem
          </h2>

          {/* Google badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border"
            style={{ borderColor: "#E2E8F0", backgroundColor: "white" }}
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span
              className="text-sm font-medium"
              style={{ color: "#1A1A2E" }}
            >
              Avaliações Google
            </span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5"
                  viewBox="0 0 20 20"
                  fill="#FFB900"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span
              className="text-xs font-semibold"
              style={{ color: "#5A6080" }}
            >
              Excelente
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="bg-white rounded-2xl p-6 border flex flex-col transition-shadow hover:shadow-md"
              style={{ borderColor: "#E2E8F0" }}
            >
              <Stars count={review.rating} />
              <blockquote
                className="mt-4 text-sm leading-relaxed flex-1"
                style={{ color: "#5A6080" }}
              >
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="flex items-center justify-between mt-5 pt-5 border-t" style={{ borderColor: "#F0F4F8" }}>
                <cite
                  className="not-italic text-sm font-semibold"
                  style={{ color: "#1A1A2E" }}
                >
                  {review.name}
                </cite>
                <time
                  className="text-xs"
                  style={{ color: "#9CA3AF" }}
                >
                  {review.date}
                </time>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
