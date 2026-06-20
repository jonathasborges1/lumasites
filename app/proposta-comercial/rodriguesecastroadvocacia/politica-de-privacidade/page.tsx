import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Rodrigues e Castro Advocacia",
  description:
    "Informações sobre privacidade e tratamento de dados nos canais digitais da Rodrigues e Castro Advocacia.",
  alternates: {
    canonical:
      "/proposta-comercial/rodriguesecastroadvocacia/politica-de-privacidade",
  },
};

const sections = [
  {
    title: "1. Dados que podem ser tratados",
    paragraphs: [
      "Podem ser tratados dados fornecidos voluntariamente por WhatsApp, telefone ou e-mail, como nome, número de contato, endereço eletrônico, documentos e informações relacionadas à solicitação de atendimento.",
      "O site também pode registrar dados técnicos básicos de navegação, como endereço IP, dispositivo, navegador, páginas acessadas e informações de cookies, quando aplicável.",
    ],
  },
  {
    title: "2. Finalidades",
    paragraphs: [
      "Os dados são utilizados para responder solicitações, realizar atendimento inicial, organizar agendamentos, orientar sobre documentos, manter comunicação relacionada ao contato e melhorar a experiência de navegação.",
      "O envio de uma mensagem não estabelece automaticamente uma relação contratual ou a contratação de serviços advocatícios.",
    ],
  },
  {
    title: "3. Sigilo profissional",
    paragraphs: [
      "As informações recebidas em razão de possível atendimento jurídico são tratadas com confidencialidade, observadas as normas profissionais aplicáveis à advocacia.",
      "Evite encaminhar documentos sensíveis antes de receber orientação direta de uma das advogadas.",
    ],
  },
  {
    title: "4. Serviços de terceiros",
    paragraphs: [
      "O site utiliza links para WhatsApp e pode incorporar recursos do Google Maps. Esses serviços possuem políticas próprias e podem tratar dados de navegação quando acessados.",
      "Também podem ser utilizados recursos de análise de audiência para compreender o desempenho do site. Esses dados são tratados de forma agregada sempre que possível.",
    ],
  },
  {
    title: "5. Compartilhamento e armazenamento",
    paragraphs: [
      "Os dados pessoais não são comercializados. O compartilhamento pode ocorrer quando necessário ao atendimento, ao cumprimento de obrigação legal, ao exercício regular de direitos ou à operação de ferramentas essenciais.",
      "As informações são mantidas pelo período necessário às finalidades informadas e às obrigações legais e profissionais aplicáveis.",
    ],
  },
  {
    title: "6. Direitos do titular",
    paragraphs: [
      "Nos termos da Lei Geral de Proteção de Dados, o titular pode solicitar confirmação de tratamento, acesso, correção, atualização, informação sobre compartilhamento, revogação de consentimento e exclusão, quando cabível.",
    ],
  },
  {
    title: "7. Contato",
    paragraphs: [
      "Para dúvidas ou solicitações relacionadas a esta política, utilize o e-mail julianasouzarodrigues.adv@gmail.com ou os canais de WhatsApp apresentados no site.",
    ],
  },
];

export default function RodriguesCastroPrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F5F6F7",
        color: "#626262",
        fontFamily: "var(--rc-body), Geometria, Montserrat, system-ui, sans-serif",
      }}
    >
      <style>{`[aria-label="Falar no WhatsApp"]{display:none!important}`}</style>
      <header
        style={{
          padding: "80px 24px 64px",
          borderBottom: "1px solid rgba(210,210,210,.3)",
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,.08), transparent 34%), #132B45",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Link
            href="/proposta-comercial/rodriguesecastroadvocacia"
            style={{ color: "#D2D2D2", fontSize: 13, textDecoration: "none" }}
          >
            ← Voltar para a prévia
          </Link>
          <p
            style={{
              margin: "34px 0 12px",
              color: "#D2D2D2",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Rodrigues e Castro Advocacia
          </p>
          <h1
            style={{
              margin: 0,
              color: "#FFFFFF",
              fontFamily: "var(--rc-heading), Argue, 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(38px, 7vw, 62px)",
              lineHeight: 1.06,
            }}
          >
            Política de Privacidade
          </h1>
          <p
            style={{
              maxWidth: 720,
              margin: "22px 0 0",
              color: "rgba(255,255,255,.58)",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Esta política explica como dados pessoais podem ser tratados nos
            canais digitais relacionados à Rodrigues e Castro Advocacia.
          </p>
        </div>
      </header>

      <section style={{ padding: "64px 24px 88px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "clamp(26px, 5vw, 52px)",
            border: "1px solid #D2D2D2",
            borderRadius: 16,
            background: "#FFFFFF",
            boxShadow: "0 18px 48px rgba(19,43,69,.06)",
          }}
        >
          <p
            style={{
              margin: "0 0 36px",
              color: "#626262",
              fontSize: 13,
            }}
          >
            Última atualização: 20 de junho de 2026.
          </p>

          {sections.map((section) => (
            <article key={section.title} style={{ marginBottom: 34 }}>
              <h2
                style={{
                  margin: "0 0 14px",
                  color: "#132B45",
                  fontFamily: "var(--rc-heading), Argue, 'Cormorant Garamond', Georgia, serif",
                  fontSize: 24,
                }}
              >
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  style={{
                    margin: "0 0 12px",
                    color: "#626262",
                    fontSize: 15,
                    lineHeight: 1.85,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </article>
          ))}

          <div
            style={{
              paddingTop: 28,
              borderTop: "1px solid #D2D2D2",
            }}
          >
            <Link
              href="/proposta-comercial/rodriguesecastroadvocacia"
              style={{
                display: "inline-flex",
                minHeight: 44,
                padding: "0 18px",
                alignItems: "center",
                borderRadius: 8,
                background: "#132B45",
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: 700,
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Voltar para o site
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
