# Feedback do cliente — Paulo Martins (16:05, WhatsApp)

Transcrição de áudio recebida do cliente sobre a proposta/página atual. Tarefas extraídas para revisão antes de execução.

## Contexto geral
Cliente aprovou a estrutura da página ("achei excelente, está bem legal"). Os ajustes abaixo são refinamentos, não uma reestruturação.

## Tasks

- [x] **Trocar a foto principal (hero)**
  Foto da recepção do escritório (com Dr. Paulo Martins e placa "Martins Advocacia Empresarial") aplicada no hero e na seção "Sobre", substituindo a foto provisória.

- [x] **Generalizar o posicionamento — sair do foco só em "direito bancário"**
  Headline, lead e credenciais do hero atualizados para citar direito empresarial, societário e bancário, não só bancário.

- [x] **Reescrever frase de abertura (headline)**
  Alterado para *"Sua empresa não precisa enfrentar os problemas sozinha."*

- [x] **Atualizar lista de serviços**
  Adicionados 3 novos cards de serviço: Direito societário, Conflitos entre sócios, Planejamento patrimonial e sucessório (mantendo os 6 cards de direito bancário existentes).

- [x] **Manter seção de números/resultados como está**
  Nenhuma alteração feita, conforme pedido.

- [ ] **Adicionar fotos da sede do escritório**
  Aplicamos a foto da recepção (hero + fundo da seção "Sobre"), mas o cliente falou em enviar mais fotos do escritório — ainda pendente de material adicional.

- [x] **Reforçar atendimento nacional**
  "Todo o Brasil" agora aparece no eyebrow do hero, na faixa de diferenciais (trustStrip), na seção "Sobre" (parágrafo + card de credenciais) e no rodapé, além da seção "Onde atendemos" que já tinha.

- [x] **Generalizar de fato a seção "Sobre"** *(gap encontrado na revisão de 2026-08-19)*
  Os dois parágrafos principais e o card de credenciais da seção "Sobre" ainda eram 100% focados em dívida bancária, mesmo depois do ajuste no hero. Reescritos para citar direito societário e planejamento patrimonial/sucessório junto com o bancário. A tagline do rodapé também foi generalizada. Mantida a assinatura "Contrato bancário não é sentença" — é a voz autêntica do cliente no Instagram, não descreve o escopo de atuação.

- [x] **Garantir botão flutuante de WhatsApp sempre visível**
  Já existia no código (`styles.floatingWhatsapp`), fixo no canto inferior direito, oculto apenas ao atingir o rodapé. Nenhuma ação necessária.

## Logotipo e foto aplicados
Arquivos recebidos em `public/images/martinsadvocaciaempresarial/`:
- `logo-martins-advogados-associados.jpeg` — aplicado no header (fundo claro)
- `paulo-martins-recepcao.jpeg` — aplicado no hero e na seção "Sobre" (substituiu `paulo-martins-about.png`; `paulo-martins-hero.png` ficou sem uso e pode ser removido)

**Ponto de atenção para o cliente confirmar:** a logotipo enviada traz o texto "MARTINS — Advogados Associados", enquanto o restante do site usa o posicionamento "Martins Advocacia Empresarial" (schema.org, metadados, credenciais). Mantive o texto do rodapé como "Martins Advocacia Empresarial" (SVG + texto), só a logotipo do header usa a imagem enviada — vale confirmar com o cliente se o nome oficial mudou ou se ele prefere manter só o texto atual.

**Limitação técnica:** a logotipo enviada é um JPEG com fundo branco (sem transparência), por isso só foi aplicada no header (fundo claro). O rodapé (fundo escuro) continua usando o ícone vetorial + texto, pois a imagem colocada ali ficaria com uma caixa branca visível. Se o cliente tiver uma versão em PNG transparente ou uma versão branca da logo, dá pra aplicar no rodapé também.

## Itens pendentes de material do cliente
- Fotos da sede (aguardando cliente tirar as fotos)
- Versão transparente/branca da logotipo, se quiser aplicá-la no rodapé também
