import type { Metadata } from "next";
import { PreviewBar, SiteFooter, SiteHeader } from "../shared";
import styles from "../style.module.css";

const base = "/proposta-comercial/amandamonteiro";
const waLink = "https://wa.me/5592992214912";

export const metadata: Metadata = {
  title: "Política de Privacidade | Amanda Monteiro Psicologia",
  description:
    "Como Amanda Monteiro, Psicóloga (CRP 20/14136), trata os dados pessoais recebidos por este site, de acordo com a LGPD.",
  robots: { index: false, follow: false },
};

const nav = [
  { href: `${base}#sobre`, label: "Sobre" },
  { href: `${base}#temas`, label: "Temas" },
  { href: `${base}#como-funciona`, label: "Como funciona" },
  { href: `${base}#duvidas`, label: "Dúvidas" },
  { href: `${base}#contato`, label: "Contato" },
];

const rights = [
  "confirmar que tratamos seus dados e acessá-los;",
  "corrigir dados incompletos, inexatos ou desatualizados;",
  "pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários ou tratados em desacordo com a lei;",
  "pedir a eliminação dos dados tratados com base no seu consentimento, ressalvadas as hipóteses de guarda obrigatória;",
  "saber com quem os dados foram compartilhados;",
  "revogar o consentimento a qualquer momento;",
  "reclamar à Autoridade Nacional de Proteção de Dados (ANPD).",
];

export default function PoliticaDePrivacidade() {
  return (
    <main id="inicio" className={styles.site}>
      <PreviewBar />
      <SiteHeader
        nav={nav}
        ctaHref={`${waLink}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de informações sobre o atendimento.")}`}
        homeHref={base}
      />

      <article className={`${styles.section} ${styles.legal}`}>
        <div className={`${styles.container} ${styles.legalInner}`}>
          <header className={styles.legalHead}>
            <span className={styles.kicker}>Privacidade e LGPD</span>
            <h1>Política de Privacidade</h1>
            <p>
              Aqui você encontra, de forma simples, quais dados pessoais este site recebe, para que servem, com quem
              podem ser compartilhados e como exercer os seus direitos, em conformidade com a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018, a LGPD).
            </p>
            <p className={styles.legalMeta}>Última atualização: 25 de outubro de 2026</p>
          </header>

          <aside className={styles.legalNote} role="note">
            Minuta elaborada para a prévia conceitual. Antes da publicação, o texto deve ser revisado por profissional
            jurídico e ajustado às ferramentas efetivamente usadas no site final.
          </aside>

          <section>
            <h2>1. Quem é a responsável pelos seus dados</h2>
            <p>
              A responsável pelo tratamento (controladora) é <strong>Amanda Monteiro</strong>, Psicóloga, CRP 20/14136,
              com atendimento em Ponta Negra, Manaus/AM, e online. Para qualquer assunto sobre privacidade, fale
              diretamente com ela pelo e-mail{" "}
              <a href="mailto:psicoamandamonteiro@gmail.com">psicoamandamonteiro@gmail.com</a> ou pelo{" "}
              <a href={waLink} target="_blank" rel="noreferrer">WhatsApp (92) 99221-4912</a>.
            </p>
          </section>

          <section>
            <h2>2. Quais dados este site recebe</h2>
            <h3>Dados que você informa nos formulários</h3>
            <ul>
              <li>Nome, e-mail e número de WhatsApp;</li>
              <li>Se você é paciente ou empresa;</li>
              <li>
                No formulário para empresas: nome da empresa, cargo, número aproximado de colaboradores e serviço de
                interesse;
              </li>
              <li>A mensagem, que é opcional.</li>
            </ul>
            <p>
              <strong>Não é necessário descrever sua situação de saúde no formulário.</strong> O primeiro contato serve
              para combinar horários, e a conversa sobre o seu momento acontece depois, com calma e sigilo. Se você
              escolher compartilhar informações de saúde na mensagem, elas serão tratadas como dado sensível, com sigilo
              e apenas para responder ao seu pedido.
            </p>
            <h3>Dados de navegação</h3>
            <p>
              Ao visitar o site, podem ser registrados dados técnicos, como endereço IP, tipo de aparelho e navegador,
              páginas visitadas e tempo de visita, para fins de segurança, funcionamento e medição de audiência (veja o
              item 6).
            </p>
          </section>

          <section>
            <h2>3. Como o envio pelo formulário funciona</h2>
            <p>
              Este site <strong>não armazena</strong> o que você digita nos formulários em banco de dados próprio. Ao
              clicar em enviar, o site monta uma mensagem e abre o <strong>WhatsApp</strong> com ela pronta. A mensagem
              só é enviada quando você confirma o envio por lá. A partir desse momento, ela passa a ser tratada no
              WhatsApp da equipe de atendimento, sujeita também às regras do próprio aplicativo (WhatsApp/Meta).
            </p>
            <p>
              Se você preferir não usar o formulário, pode escrever diretamente pelo botão de WhatsApp ou pelo e-mail.
            </p>
          </section>

          <section>
            <h2>4. Para que usamos seus dados e em que base legal</h2>
            <div className={styles.legalTable} role="table" aria-label="Finalidades e bases legais">
              <div role="row">
                <strong role="columnheader">Finalidade</strong>
                <strong role="columnheader">Base legal (LGPD)</strong>
              </div>
              <div role="row">
                <span role="cell">Responder ao seu contato e apresentar horários disponíveis</span>
                <span role="cell">Procedimentos preliminares a um contrato, a pedido do titular (art. 7º, V) e consentimento (art. 7º, I)</span>
              </div>
              <div role="row">
                <span role="cell">Preparar proposta para empresas e instituições</span>
                <span role="cell">Procedimentos preliminares a um contrato (art. 7º, V)</span>
              </div>
              <div role="row">
                <span role="cell">Acompanhamento psicológico, quando você decidir iniciar</span>
                <span role="cell">Tutela da saúde, por profissional de saúde (art. 11, II, f), e consentimento (art. 11, I)</span>
              </div>
              <div role="row">
                <span role="cell">Segurança do site e medição de audiência</span>
                <span role="cell">Legítimo interesse (art. 7º, IX) e, para cookies não essenciais, consentimento</span>
              </div>
              <div role="row">
                <span role="cell">Cumprir obrigações legais e éticas da profissão</span>
                <span role="cell">Cumprimento de obrigação legal ou regulatória (art. 7º, II)</span>
              </div>
            </div>
            <p>
              Não usamos seus dados para enviar propaganda de terceiros e não vendemos informações pessoais.
            </p>
          </section>

          <section>
            <h2>5. Com quem os dados podem ser compartilhados</h2>
            <ul>
              <li>
                <strong>WhatsApp (Meta):</strong> a mensagem trafega e é armazenada conforme a política do próprio
                aplicativo;
              </li>
              <li>
                <strong>Google Maps:</strong> o mapa de localização é carregado dos servidores do Google, que pode
                receber seu endereço IP e informações do navegador;
              </li>
              <li>
                <strong>Provedores de hospedagem e de medição de audiência</strong>, necessários para o site funcionar;
              </li>
              <li>
                <strong>Autoridades</strong>, apenas quando houver obrigação legal ou ordem judicial.
              </li>
            </ul>
            <p>
              Alguns desses serviços podem processar dados fora do Brasil. Nesses casos, a transferência observa as
              regras de proteção da LGPD.
            </p>
          </section>

          <section>
            <h2>6. Cookies e tecnologias semelhantes</h2>
            <p>
              Usamos cookies <strong>essenciais</strong>, necessários para o site funcionar, e, quando ativados,
              cookies de <strong>medição de audiência</strong>, que nos ajudam a entender quais páginas são mais úteis.
              Os cookies não essenciais só são usados com a sua autorização, e você pode recusá-los no banner de cookies
              ou pelas configurações do seu navegador. Recusar não impede o uso do site.
            </p>
          </section>

          <section>
            <h2>7. Por quanto tempo guardamos os dados</h2>
            <p>
              Mantemos as conversas e os dados de contato apenas pelo tempo necessário para responder ao seu pedido e
              para o atendimento, e depois pelos prazos exigidos por lei e pelas normas do Conselho Federal de Psicologia
              (CFP). Quando não houver mais necessidade ou obrigação de guarda, os dados são eliminados ou anonimizados.
            </p>
          </section>

          <section>
            <h2>8. Sigilo profissional</h2>
            <p>
              O que você compartilha em atendimento está protegido pelo sigilo profissional, previsto no Código de Ética
              Profissional do Psicólogo. Esta política trata dos dados recebidos por este site e pelo primeiro contato;
              as informações do atendimento são tratadas conforme as normas éticas da profissão.
            </p>
          </section>

          <section>
            <h2>9. Seus direitos</h2>
            <p>Pela LGPD, você pode, a qualquer momento e gratuitamente:</p>
            <ul>
              {rights.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p>
              Para exercer qualquer um deles, use o e-mail ou o WhatsApp indicados no item 1. Responderemos dentro do
              prazo legal.
            </p>
          </section>

          <section>
            <h2>10. Segurança</h2>
            <p>
              Adotamos medidas razoáveis para proteger os dados contra acesso não autorizado, perda ou uso indevido,
              como conexão segura (HTTPS), acesso restrito ao aparelho e à conta de WhatsApp da equipe e coleta apenas
              do necessário. Nenhum meio de comunicação é totalmente livre de riscos, por isso pedimos que não envie
              documentos ou informações clínicas detalhadas antes do primeiro atendimento.
            </p>
          </section>

          <section>
            <h2>11. Alterações desta política</h2>
            <p>
              Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da última
              atualização fica sempre no topo desta página.
            </p>
          </section>

          <p className={styles.legalBack}>
            <a className={styles.btnPrimary} href={base}>Voltar ao site</a>
          </p>
        </div>
      </article>

      <SiteFooter anchorPrefix={base} />
    </main>
  );
}
