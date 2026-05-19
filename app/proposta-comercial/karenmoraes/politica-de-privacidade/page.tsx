import Link from "next/link";

const C = {
  wine: "#6B1A2A",
  wineDark: "#4A1020",
  rose: "#F9F0EB",
  white: "#FDFAF8",
  gold: "#BFA26A",
  text: "#2C1810",
  muted: "#7A5C54",
  border: "#E0C8BC",
};

const sections = [
  {
    title: "1. Informações que podem ser coletadas",
    body: [
      "Podemos coletar informações fornecidas voluntariamente por você em formulários, WhatsApp, telefone, e-mail ou outros canais de contato, como nome, telefone, e-mail, cidade, assunto de interesse e mensagem enviada.",
      "Também podem ser coletados dados técnicos básicos de navegação, como endereço IP, tipo de dispositivo, navegador, páginas acessadas e dados de cookies, quando aplicável.",
    ],
  },
  {
    title: "2. Finalidade do uso dos dados",
    body: [
      "Os dados são utilizados para responder solicitações, realizar atendimento inicial, esclarecer dúvidas, agendar consultas, enviar comunicações relacionadas ao contato realizado e melhorar a experiência de navegação.",
      "As informações fornecidas não são utilizadas para decisões automatizadas que produzam efeitos jurídicos ou relevantes sobre o titular.",
    ],
  },
  {
    title: "3. Compartilhamento de informações",
    body: [
      "Os dados pessoais não são vendidos. O compartilhamento pode ocorrer apenas quando necessário para atendimento, cumprimento de obrigação legal, exercício regular de direitos ou uso de ferramentas essenciais para comunicação e operação do site.",
      "Quando houver uso de serviços de terceiros, buscamos adotar ferramentas compatíveis com boas práticas de segurança e proteção de dados.",
    ],
  },
  {
    title: "4. Sigilo profissional",
    body: [
      "As informações enviadas em razão de possível atendimento jurídico são tratadas com confidencialidade, observadas as regras profissionais aplicáveis à advocacia.",
      "O envio de mensagem pelo site ou WhatsApp não estabelece, por si só, contratação de serviços advocatícios, que depende de aceite expresso entre as partes.",
    ],
  },
  {
    title: "5. Cookies e tecnologias similares",
    body: [
      "Este site pode utilizar cookies para funcionamento, análise de navegação e melhoria da experiência. Você pode gerenciar ou bloquear cookies nas configurações do seu navegador.",
    ],
  },
  {
    title: "6. Armazenamento e segurança",
    body: [
      "Os dados são mantidos pelo tempo necessário para as finalidades descritas nesta política, observadas obrigações legais, regulatórias e o exercício regular de direitos.",
      "São adotadas medidas razoáveis de segurança para proteger os dados contra acessos não autorizados, perda, alteração ou divulgação indevida.",
    ],
  },
  {
    title: "7. Direitos do titular",
    body: [
      "Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode solicitar confirmação de tratamento, acesso, correção, atualização, exclusão, portabilidade, informação sobre compartilhamento e revogação de consentimento, quando aplicável.",
    ],
  },
  {
    title: "8. Contato",
    body: [
      "Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelos canais informados no site da Dra. Karen Moraes.",
      "E-mail: karenmoraes.jur@gmail.com",
      "Telefone/WhatsApp: (66) 99248-6203",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: C.rose,
        color: C.text,
        fontFamily: "var(--km-font-body), Inter, system-ui, sans-serif",
      }}
    >
      <section
        style={{
          background: `linear-gradient(135deg, ${C.wineDark} 0%, ${C.wine} 100%)`,
          padding: "96px 24px 72px",
        }}
      >
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <Link
            href="/proposta-comercial/karenmoraes"
            style={{
              color: "rgba(255,255,255,.74)",
              fontSize: "13px",
              textDecoration: "none",
              letterSpacing: ".04em",
            }}
          >
            ← Voltar para a proposta
          </Link>
          <p
            style={{
              color: C.gold,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2.4px",
              textTransform: "uppercase",
              marginTop: "36px",
              marginBottom: "16px",
            }}
          >
            Karen Moraes Advocacia
          </p>
          <h1
            style={{
              color: C.white,
              fontFamily: "var(--km-font-heading), Georgia, serif",
              fontSize: "clamp(34px, 6vw, 56px)",
              lineHeight: 1.08,
              margin: 0,
              marginBottom: "24px",
            }}
          >
            Política de Privacidade
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.78)",
              fontSize: "17px",
              lineHeight: 1.75,
              maxWidth: "760px",
              margin: 0,
            }}
          >
            Esta política explica como dados pessoais podem ser coletados,
            utilizados e protegidos nos canais digitais relacionados à proposta
            comercial da Dra. Karen Moraes.
          </p>
        </div>
      </section>

      <section style={{ padding: "64px 24px 88px" }}>
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: "14px",
            padding: "clamp(28px, 5vw, 52px)",
            boxShadow: "0 18px 48px rgba(107,26,42,.08)",
          }}
        >
          <p
            style={{
              color: C.muted,
              fontSize: "14px",
              lineHeight: 1.7,
              marginTop: 0,
              marginBottom: "36px",
            }}
          >
            Última atualização: 19 de maio de 2026.
          </p>

          {sections.map((section) => (
            <article key={section.title} style={{ marginBottom: "34px" }}>
              <h2
                style={{
                  color: C.wine,
                  fontFamily: "var(--km-font-heading), Georgia, serif",
                  fontSize: "24px",
                  lineHeight: 1.25,
                  marginBottom: "14px",
                }}
              >
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  style={{
                    color: C.muted,
                    fontSize: "15px",
                    lineHeight: 1.8,
                    marginBottom: "12px",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </article>
          ))}

          <div
            style={{
              borderTop: `1px solid ${C.border}`,
              paddingTop: "28px",
              marginTop: "12px",
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: C.muted, fontSize: "13px", margin: 0 }}>
              Documento informativo para transparência no tratamento de dados.
            </p>
            <Link
              href="/proposta-comercial/karenmoraes"
              style={{
                background: C.wine,
                color: C.white,
                padding: "12px 18px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: ".04em",
                textTransform: "uppercase",
              }}
            >
              Voltar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
