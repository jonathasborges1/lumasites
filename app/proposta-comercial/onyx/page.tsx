"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Bike,
  Bus,
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock3,
  ExternalLink,
  Facebook,
  FileText,
  GraduationCap,
  Instagram,
  Landmark,
  Link2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
  X,
} from "lucide-react";

/* ─── Dados extraídos do site oficial (www.aeonyx.com.br) ─── */

const WA_ARUJA = "5511921505361";
const WA_SUZANO = "551128913017";
const WA_TEXT = encodeURIComponent(
  "Olá! Vim pelo site da Autoescola Onyx e quero mais informações. 🚗",
);
const WA_ARUJA_LINK = `https://wa.me/${WA_ARUJA}?text=${WA_TEXT}`;
const WA_SUZANO_LINK = `https://wa.me/${WA_SUZANO}?text=${WA_TEXT}`;
const EMAIL = "contato@aeonyx.com.br";
const OFFICIAL = "https://www.aeonyx.com.br";

const UNIDADES = [
  {
    nome: "Unidade Arujá",
    endereco: "Rua Major Benjamin Franco, 367 — Jd Vitória, Arujá/SP, CEP 07400-165",
    telefone: "11 4652.2951",
    telefoneHref: "tel:+551146522951",
    cnpj: "09.253.587/0001-15",
    wa: WA_ARUJA_LINK,
    facebook: "https://www.facebook.com/autoescolaonyx",
    instagram: "https://instagram.com/autoescola_onyx",
    instagramHandle: "@autoescola_onyx",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Major+Benjamin+Franco+367+Jd+Vitoria+Aruja+SP",
  },
  {
    nome: "Unidade Suzano",
    endereco:
      "R. Dona Augusta Aparecida de Carvalho Moraes, 109 — Jd Sta Helena, Suzano/SP, CEP 08674-220",
    telefone: "11 2891.3017",
    telefoneHref: "tel:+551128913017",
    cnpj: "27.820.308/0001-30",
    wa: WA_SUZANO_LINK,
    facebook: "https://www.facebook.com/autoescolaonyxsuzano",
    instagram: "https://instagram.com/autoescola_onyx_suzano",
    instagramHandle: "@autoescola_onyx_suzano",
    maps: "https://www.google.com/maps/search/?api=1&query=R+Dona+Augusta+Aparecida+de+Carvalho+Moraes+109+Jd+Sta+Helena+Suzano+SP",
  },
];

const nav = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#servicos", label: "Serviços" },
  { href: "#precos", label: "Preços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#unidades", label: "Unidades" },
  { href: "#links-uteis", label: "Links úteis" },
  { href: "#contato", label: "Contato" },
];

const heroStats = [
  { icon: Award, label: "Desde 2007", text: "Fundada em 27 de novembro de 2007" },
  { icon: Car, label: "Frota completa", text: "Todas as categorias, veículos modernos" },
  { icon: GraduationCap, label: "Curso teórico exclusivo", text: "Cursinho próprio para alunos Onyx" },
  { icon: MapPin, label: "Alto Tietê", text: "Unidades em Arujá e Suzano" },
];

const estruturaFeatures = [
  {
    icon: Car,
    title: "Veículos modernos e confortáveis",
    text: "Frota em renovação constante para você aprender com segurança e tranquilidade, da primeira aula ao exame.",
  },
  {
    icon: GraduationCap,
    title: "Ambiente acolhedor com cursinho teórico próprio",
    text: "Curso teórico exclusivo para alunos Onyx, com alto índice de aprovação e indicações de alunos satisfeitos.",
  },
  {
    icon: Users,
    title: "Instrutores experientes que acompanham cada aluno",
    text: "Uma equipe que guia com empatia e paciência, das manobras básicas até as mais avançadas.",
  },
];

const servicosResumo = [
  { icon: Car, label: "Primeira Habilitação — Carro (B) e Moto (A)" },
  { icon: Truck, label: "Categorias Profissionais — C, D e E" },
  { icon: RefreshCcw, label: "Curso de Reciclagem — para quem teve a CNH suspensa" },
  { icon: ShieldCheck, label: "Aulas para Habilitados — volte ao volante com segurança" },
  { icon: Scale, label: "Assessoria Jurídica de Trânsito — pendências e dúvidas sobre CNH" },
];

const categoriasProfissionais = [
  {
    icon: Bike,
    cat: "A",
    nome: "Motocicletas",
    req: "Para quem já possui habilitação B, C, D ou E e quer pilotar motocicletas com segurança.",
  },
  {
    icon: Truck,
    cat: "C",
    nome: "Caminhões",
    req: "Requisito: 1 ano de habilitação na categoria B. Autoriza a dirigir caminhões.",
  },
  {
    icon: Bus,
    cat: "D",
    nome: "Ônibus e micro-ônibus",
    req: "Requisitos: 2 anos na categoria B ou 1 ano na C, com idade mínima de 21 anos.",
  },
  {
    icon: Truck,
    cat: "E",
    nome: "Carretas",
    req: "Requisitos: 1 ano na categoria C ou D e idade mínima de 21 anos.",
  },
];

const reciclagemBeneficios = [
  "Regularizar a CNH e voltar a dirigir legalmente",
  "Aprender sobre direção defensiva, legislação e primeiros socorros",
  "Realizar as aulas presenciais ou online",
  "Receber suporte de uma equipe especializada",
];

const planos = [
  {
    nome: "Carro",
    cat: "Categoria B",
    icon: Car,
    de: "R$ 2.038,00",
    por: "R$ 1.748,00",
    parcelado: "Entrada de R$ 185,00 + 9 parcelas de R$ 185,00 no boleto",
    inclui: [
      "Matrícula",
      "Exame Médico/Psicotécnico",
      "Curso teórico — 9 dias",
      "Taxas do governo",
      "20 aulas práticas de carro",
    ],
    destaque: false,
  },
  {
    nome: "Carro + Moto",
    cat: "Categoria AB",
    icon: Bike,
    de: "R$ 2.438,00",
    por: "R$ 2.138,00",
    parcelado: "Entrada de R$ 225,00 + 9 parcelas de R$ 225,00 no boleto",
    inclui: [
      "Matrícula",
      "Exame Médico/Psicotécnico",
      "Curso teórico — 9 dias",
      "Taxas do governo",
      "20 aulas práticas de moto",
      "20 aulas práticas de carro",
    ],
    destaque: true,
  },
];

const depoimentos = [
  {
    nome: "Renata Pereira",
    papel: "Aluna",
    texto:
      "Ótima autoescola! Atendimento diferenciado, atendentes e instrutores nota 1.0000! Recomendo, todos super atenciosos e comprometidos. Sempre prontos em ajudar.",
  },
  {
    nome: "Ester Sara",
    papel: "Aluna",
    texto: "Autoescola excelente, atendimento sensacional e instrutores ótimos. Estão de parabéns.",
  },
  {
    nome: "Paloma Nunes",
    papel: "Aluna",
    texto: "Ótima escola... Espaço amplo e confortável. Excelentes profissionais!",
  },
];

const equipe = [
  { nome: "Breno", cargo: "Diretor Geral — Arujá", foto: "/images/onyx/equipe-breno.jpg" },
  { nome: "Tânia", cargo: "Diretora de Ensino — Suzano", foto: "/images/onyx/equipe-tania.jpg" },
  { nome: "Gleicyelle", cargo: "Diretora de Ensino — Arujá", foto: "/images/onyx/equipe-gleicyelle.jpg" },
  { nome: "Tailane", cargo: "Diretora de Ensino — Mogi", foto: "/images/onyx/equipe-tailane.jpg" },
  { nome: "Andre Luiz", cargo: "Instrutor Prático", foto: "/images/onyx/equipe-andre-luiz.jpg" },
  { nome: "Cintia", cargo: "Administrativo — Mogi", foto: "/images/onyx/equipe-cintia.jpg" },
  { nome: "Cesar", cargo: "Instrutor Prático", foto: "/images/onyx/equipe-cesar.jpg" },
  { nome: "Diego", cargo: "Instrutor Prático", foto: "/images/onyx/equipe-diego.jpg" },
  { nome: "Jeferson", cargo: "Instrutor Prático — Profissionais", foto: "/images/onyx/equipe-jeferson.jpg" },
  { nome: "Kauã", cargo: "Instrutor Prático", foto: "/images/onyx/equipe-kaua.jpg" },
  { nome: "Matheus", cargo: "Instrutor Prático", foto: "/images/onyx/equipe-matheus.jpg" },
  { nome: "Néia", cargo: "Instrutora de Trânsito", foto: "/images/onyx/equipe-neia.jpg" },
  { nome: "Raphael", cargo: "Instrutor Prático", foto: "/images/onyx/equipe-raphael.jpg" },
  { nome: "Ricardo", cargo: "Instrutor Teórico", foto: "/images/onyx/equipe-ricardo.jpg" },
  { nome: "Vitória", cargo: "Administrativo — Arujá", foto: "/images/onyx/equipe-vitoria.jpg" },
];

const linksUteis = [
  {
    nome: "Simulado Detran",
    desc: "Treine para a prova teórica com o simulado oficial",
    href: "https://www.detran.sp.gov.br/simulado",
  },
  {
    nome: "Detran SP",
    desc: "Portal oficial do Departamento Estadual de Trânsito",
    href: "http://www.detran.sp.gov.br/",
  },
  {
    nome: "e-CNH SP",
    desc: "Acompanhe seu processo de habilitação online",
    href: "https://www.e-cnhsp.sp.gov.br/",
  },
  {
    nome: "Poupatempo",
    desc: "Agendamentos e serviços do Governo de SP",
    href: "https://www.poupatempo.sp.gov.br/",
  },
  {
    nome: "Código de Trânsito Brasileiro",
    desc: "Lei 9.503/97 completa e atualizada",
    href: "http://www.planalto.gov.br/ccivil_03/leis/L9503Compilado.htm",
  },
  {
    nome: "Delegacia Eletrônica",
    desc: "Boletim de ocorrência online — SSP/SP",
    href: "http://www.ssp.sp.gov.br/nbo/",
  },
];

const faqs = [
  {
    q: "Quais os requisitos para tirar a primeira habilitação?",
    a: "Para obter a sua 1ª habilitação é necessário ter 18 anos completos e ser alfabetizado. Documentos necessários: RG, CPF e comprovante de residência atualizado. A Onyx cuida de tudo para você — do início da matrícula até o momento da carteira na mão.",
  },
  {
    q: "Como funciona o curso de reciclagem para CNH suspensa?",
    a: "O curso tem carga horária de 45 horas-aula, pode ser feito presencial ou online, é autorizado pelo Detran e concluído em poucos dias. Ao final, você recebe certificado válido em todo o Brasil e regulariza a sua CNH para voltar a dirigir legalmente.",
  },
  {
    q: "Posso parcelar o valor do curso?",
    a: "Sim. Além do valor à vista (dinheiro ou cartão), há condições parceladas no boleto: na categoria B, entrada de R$ 185,00 + 9 parcelas de R$ 185,00; na categoria AB, entrada de R$ 225,00 + 9 parcelas de R$ 225,00. As ofertas promocionais são válidas para matrículas online.",
  },
  {
    q: "Quero adicionar as categorias C, D ou E. O que preciso?",
    a: "Categoria C (caminhões): 1 ano de habilitação na categoria B. Categoria D (ônibus): 2 anos na B ou 1 ano na C, com idade mínima de 21 anos. Categoria E (carretas): 1 ano na C ou D e idade mínima de 21 anos. Documentos: RG, CPF, comprovante de residência e CNH.",
  },
  {
    q: "Onde a Autoescola Onyx atende?",
    a: "A Onyx atende a região do Alto Tietê, com unidades em Arujá (Rua Major Benjamin Franco, 367) e Suzano (R. Dona Augusta Aparecida de Carvalho Moraes, 109). Na pré-matrícula você também encontra a opção Mogi das Cruzes — fale com a gente pelo WhatsApp para mais detalhes.",
  },
];

/* ─── Componentes ─── */

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

function SectionHead({
  kicker,
  title,
  lead,
  light,
}: {
  kicker: string;
  title: string;
  lead?: string;
  light?: boolean;
}) {
  return (
    <div className={`ox-section-head${light ? " is-light" : ""}`}>
      <span className="ox-kicker">{kicker}</span>
      <h2>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const id = `ox-faq-${index}`;

  return (
    <div className="ox-faq-item">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{q}</span>
        <ChevronDown size={20} aria-hidden="true" />
      </button>
      <div id={id} className={`ox-faq-answer${open ? " is-open" : ""}`}>
        <div>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

function PreMatriculaForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [unidade, setUnidade] = useState("Arujá");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const numero = unidade === "Suzano" ? WA_SUZANO : WA_ARUJA;
    const linhas = [
      "Olá! Quero fazer minha pré-matrícula na Autoescola Onyx. 🚗✨",
      `Nome completo: ${nome.trim() || "—"}`,
      `Unidade escolhida: ${unidade}`,
      `Telefone: ${telefone.trim() || "—"}`,
      `Email: ${email.trim() || "—"}`,
      `Endereço residencial: ${endereco.trim() || "—"}`,
      `Aniversário: ${aniversario.trim() || "—"}`,
    ];
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(linhas.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form className="ox-form" onSubmit={handleSubmit}>
      <div className="ox-form-grid">
        <label htmlFor="ox-nome">
          Nome completo
          <input
            id="ox-nome"
            type="text"
            name="nome"
            autoComplete="name"
            placeholder="Seu nome completo"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </label>
        <label htmlFor="ox-telefone">
          Telefone
          <input
            id="ox-telefone"
            type="tel"
            name="telefone"
            autoComplete="tel"
            placeholder="(11) 90000-0000"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            required
          />
        </label>
        <label htmlFor="ox-email">
          Email
          <input
            id="ox-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="voce@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor="ox-unidade">
          Qual a unidade escolhida?
          <select
            id="ox-unidade"
            name="unidade"
            value={unidade}
            onChange={(event) => setUnidade(event.target.value)}
          >
            <option value="Arujá">Arujá</option>
            <option value="Mogi das Cruzes">Mogi das Cruzes</option>
            <option value="Suzano">Suzano</option>
          </select>
        </label>
        <label htmlFor="ox-endereco">
          Endereço residencial
          <input
            id="ox-endereco"
            type="text"
            name="endereco"
            autoComplete="street-address"
            placeholder="Rua, número, bairro e cidade"
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
          />
        </label>
        <label htmlFor="ox-aniversario">
          Aniversário
          <input
            id="ox-aniversario"
            type="date"
            name="aniversario"
            value={aniversario}
            onChange={(event) => setAniversario(event.target.value)}
          />
        </label>
      </div>
      <button type="submit" className="ox-button ox-button-wa">
        <WaIcon /> Enviar pré-matrícula pelo WhatsApp
      </button>
      <p className="ox-form-note">
        Sua pré-matrícula chega direto no WhatsApp da unidade escolhida, já com todos os dados.
        Sem cadastro, sem espera.
      </p>
    </form>
  );
}

/* ─── Página ─── */

export default function OnyxPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".ox-page");
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".ox-page > section:not(.ox-hero)"),
    );

    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    page.classList.add("ox-motion-ready");
    sections.forEach((section) => section.classList.add("ox-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      page.classList.remove("ox-motion-ready");
      sections.forEach((section) => section.classList.remove("ox-reveal", "is-visible"));
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousActive = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const desktopMedia = window.matchMedia("(min-width: 1080px)");

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnDesktop = () => {
      if (desktopMedia.matches) setMenuOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopMedia.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopMedia.removeEventListener("change", closeOnDesktop);
      if (previousActive && document.contains(previousActive)) previousActive.focus();
    };
  }, [menuOpen]);

  const drivingSchoolSchema = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: "Autoescola Onyx",
    url: OFFICIAL,
    foundingDate: "2007-11-27",
    slogan: "Dirija seus sonhos com a gente! #VemPraOnyx",
    email: EMAIL,
    areaServed: "Alto Tietê — Arujá, Suzano e Mogi das Cruzes (SP)",
    department: UNIDADES.map((u) => ({
      "@type": "DrivingSchool",
      name: `Autoescola Onyx — ${u.nome}`,
      telephone: u.telefone,
      address: u.endereco,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="ox-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(drivingSchoolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <a className="ox-skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className="ox-preview-bar" role="note" aria-label="Aviso de prévia conceitual">
        <Link
          className="ox-preview-back"
          href="/proposta-comercial"
          aria-label="Voltar para propostas comerciais"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className="ox-preview-line">
          <span className="ox-preview-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="ox-preview-sub">
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
        <a
          className="ox-preview-site"
          href={OFFICIAL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Site oficial</span>
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>

      <header className="ox-header">
        <div className="ox-wrap ox-nav">
          <a href="#inicio" className="ox-brand" aria-label="Autoescola Onyx">
            <Image
              src="/images/onyx/onyx-logo.png"
              alt="Autoescola Onyx"
              width={1703}
              height={577}
              priority
              className="ox-brand-logo"
            />
          </a>

          <nav aria-label="Navegação principal" className="ox-desktop-nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="ox-nav-cta" href="#pre-matricula">
            Pré-matrícula
          </a>

          <button
            ref={menuButtonRef}
            className="ox-menu-button"
            type="button"
            aria-label="Abrir menu"
            aria-controls="ox-mobile-drawer"
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      <button
        className={`ox-menu-overlay${menuOpen ? " is-open" : ""}`}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <aside
        ref={drawerRef}
        id="ox-mobile-drawer"
        className={`ox-mobile-drawer${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!menuOpen}
      >
        <div className="ox-drawer-head">
          <div>
            <span>Menu</span>
            <small>Autoescola Onyx</small>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Navegação do menu">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="ox-drawer-cta" href="#pre-matricula" onClick={() => setMenuOpen(false)}>
            Fazer pré-matrícula
          </a>
          <div className="ox-drawer-wa">
            <a href={WA_ARUJA_LINK} target="_blank" rel="noopener noreferrer">
              <WaIcon size={16} /> Whats Arujá
            </a>
            <a href={WA_SUZANO_LINK} target="_blank" rel="noopener noreferrer">
              <WaIcon size={16} /> Whats Suzano
            </a>
          </div>
        </nav>
      </aside>

      {/* ── Hero ── */}
      <section className="ox-hero" id="inicio">
        <div className="ox-hero-bg" aria-hidden="true" />
        <div className="ox-wrap ox-hero-inner" id="conteudo">
          <div className="ox-hero-copy">
            <span className="ox-hero-badge">
              <Sparkles size={14} aria-hidden="true" /> Autoescola no Alto Tietê · Desde 2007
            </span>
            <h1>
              Primeira habilitação...{" "}
              <span className="ox-hero-em">dos seus sonhos!</span>
            </h1>
            <p>
              Na Autoescola Onyx você encontra credibilidade e agilidade para tirar a tão
              sonhada primeira habilitação — e muito mais: categorias profissionais,
              reciclagem e aulas para habilitados. Dirija seus sonhos com a gente!{" "}
              <strong>#VemPraOnyx</strong>
            </p>
            <div className="ox-hero-ctas">
              <a
                className="ox-button ox-button-wa"
                href={WA_ARUJA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon /> Whats Arujá
              </a>
              <a
                className="ox-button ox-button-wa is-alt"
                href={WA_SUZANO_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon /> Whats Suzano
              </a>
              <a className="ox-button ox-button-ghost" href="#precos">
                Ver preços e condições <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <ul className="ox-hero-stats">
              {heroStats.map(({ icon: Icon, label, text }) => (
                <li key={label}>
                  <Icon size={18} aria-hidden="true" />
                  <div>
                    <strong>{label}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <figure className="ox-hero-media">
            <Image
              src="/images/onyx/onyx-estrutura.jpg"
              alt="Frota de veículos da Autoescola Onyx enfileirada ao pôr do sol"
              width={1600}
              height={1200}
              priority
            />
            <figcaption>
              <Car size={15} aria-hidden="true" /> Frota própria, moderna e completa
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Sobre nós ── */}
      <section className="ox-section" id="sobre">
        <div className="ox-wrap ox-about">
          <div className="ox-about-copy">
            <SectionHead
              kicker="🚗✨ Sobre nós"
              title="Transformamos a conquista da CNH em uma experiência leve, divertida e inesquecível"
            />
            <p>
              Fundada em <strong>27 de novembro de 2007</strong>, a Autoescola Onyx acredita
              que aprender a dirigir é conquistar <strong>liberdade, confiança e
              independência</strong>. Por isso, modernizamos continuamente nossos espaços e
              renovamos a frota, para receber cada aluno com conforto, praticidade e
              qualidade.
            </p>
            <p>
              Nossa equipe se destaca pela dedicação ao serviço e pela adaptação constante às
              mudanças do trânsito e das regulamentações. E tem mais: oferecemos{" "}
              <strong>curso teórico exclusivo</strong> para alunos Onyx — com alto índice de
              aprovação e indicações de alunos satisfeitos.
            </p>
            <p className="ox-hashtag">#VemPraOnyx 💛</p>
            <div className="ox-about-ctas">
              <a className="ox-button ox-button-primary" href="#pre-matricula">
                Garantir minha vaga <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="ox-button ox-button-ghost" href="#equipe">
                Conhecer a equipe
              </a>
            </div>
          </div>
          <figure className="ox-about-media">
            <Image
              src="/images/onyx/onyx-sobre.jpg"
              alt="Aluno beijando a CNH recém-conquistada ao lado do logo da Autoescola Onyx e da pergunta: Vamos juntos?"
              width={4000}
              height={1000}
            />
          </figure>
        </div>
      </section>

      {/* ── Estrutura ── */}
      <section className="ox-section is-muted" id="estrutura">
        <div className="ox-wrap">
          <SectionHead
            kicker="Estrutura"
            title="Descubra a autoescola que combina com você 🚗✨"
            lead="Escolher onde tirar a habilitação vai muito além de aprender a dirigir: envolve confiança e acolhimento. Desde 2007, preparamos tudo para o seu processo ser tranquilo do começo ao fim."
          />
          <div className="ox-feature-grid">
            {estruturaFeatures.map(({ icon: Icon, title, text }) => (
              <article className="ox-feature" key={title}>
                <div className="ox-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="ox-fleet">
            <figure>
              <Image
                src="/images/onyx/onyx-servico-2.jpg"
                alt="Pátio da Autoescola Onyx com carro, micro-ônibus, caminhões e carreta de treinamento"
                width={3264}
                height={2448}
              />
              <figcaption>
                Frota para todas as categorias: carro, moto, caminhão, ônibus e carreta
              </figcaption>
            </figure>
            <div className="ox-fleet-copy">
              <h3>Veículos para todas as categorias</h3>
              <p>
                Da primeira aula na categoria B ao treino de baliza com carreta na categoria
                E: a Onyx mantém uma das maiores frotas da região, sempre em renovação.
              </p>
              <ul>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" /> Carros modernos e confortáveis
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" /> Motos para categoria A
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" /> Caminhão, ônibus e carreta para C, D e E
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" /> Credenciada Detran.SP
                </li>
              </ul>
              <p className="ox-fleet-note">
                Ficou com alguma dúvida? Entre em contato pelo telefone ou WhatsApp — vai ser
                um prazer te atender!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Serviços ── */}
      <section className="ox-section" id="servicos">
        <div className="ox-wrap">
          <SectionHead
            kicker="🚘 Serviços prestados"
            title="Dirigir é mais do que aprender — é conquistar liberdade com confiança! 💛"
            lead="Aulas práticas e teóricas, instrutores experientes, horários flexíveis e condições que cabem no seu bolso. Venha viver essa experiência e dar o próximo passo rumo à sua liberdade no volante!"
          />

          <ul className="ox-services-summary">
            {servicosResumo.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          {/* Primeira habilitação */}
          <article className="ox-service" id="primeira-habilitacao">
            <figure className="ox-service-media">
              <Image
                src="/images/onyx/onyx-servico-4.jpg"
                alt="Aluno segurando a CNH em frente aos cones da pista — Primeira Habilitação"
                width={1080}
                height={1080}
              />
            </figure>
            <div className="ox-service-copy">
              <span className="ox-service-tag">
                <Car size={14} aria-hidden="true" /> Categorias A e B
              </span>
              <h3>Primeira Habilitação</h3>
              <p className="ox-service-lead">
                Chegou a hora de conquistar sua liberdade e dirigir com confiança! 🚗
              </p>
              <p>
                Na Onyx, o aprendizado é uma experiência leve, divertida e cheia de
                descobertas. As <strong>aulas teóricas</strong> são dinâmicas e acessíveis,
                com simulações interativas que ajudam você a entender o trânsito de forma
                prática e segura. Nas <strong>aulas práticas</strong>, você conta com
                veículos modernos e instrutores experientes e pacientes, que ensinam desde
                as manobras básicas até as mais avançadas.
              </p>
              <p>
                Cuidamos de tudo pra você — do início da matrícula até o tão esperado momento
                da sua carteira na mão. 💛
              </p>
              <div className="ox-service-req">
                <h4>
                  <FileText size={16} aria-hidden="true" /> Requisitos e documentos
                </h4>
                <ul>
                  <li>
                    <CheckCircle2 size={15} aria-hidden="true" /> Ter 18 anos completos e ser
                    alfabetizado
                  </li>
                  <li>
                    <CheckCircle2 size={15} aria-hidden="true" /> RG e CPF
                  </li>
                  <li>
                    <CheckCircle2 size={15} aria-hidden="true" /> Comprovante de residência
                    atualizado
                  </li>
                </ul>
              </div>
              <a className="ox-button ox-button-primary" href="#pre-matricula">
                Fazer minha matrícula <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* Adição de categoria */}
          <article className="ox-service is-reverse" id="adicao-categoria">
            <figure className="ox-service-media">
              <Image
                src="/images/onyx/onyx-servico-3.jpg"
                alt="Jovem sorridente apontando para carro e moto da Onyx — Adição de Categoria"
                width={1080}
                height={1080}
              />
            </figure>
            <div className="ox-service-copy">
              <span className="ox-service-tag">
                <Bike size={14} aria-hidden="true" /> Categorias A e B
              </span>
              <h3>Adição de Categoria A ou B 🚗🏍️</h3>
              <p className="ox-service-lead">
                Já tem CNH? Amplie suas possibilidades ao volante — ou no guidão.
              </p>
              <ul className="ox-service-list">
                <li>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  <span>
                    <strong>Categoria A (moto):</strong> para quem tem habilitação B e quer
                    pilotar motocicletas
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  <span>
                    <strong>Categoria B (carro):</strong> para quem tem categoria A e quer
                    dirigir automóveis
                  </span>
                </li>
              </ul>
              <div className="ox-service-req">
                <h4>
                  <Sparkles size={16} aria-hidden="true" /> Por que fazer na Onyx
                </h4>
                <ul>
                  <li>
                    <CheckCircle2 size={15} aria-hidden="true" /> Aulas práticas com
                    instrutores experientes
                  </li>
                  <li>
                    <CheckCircle2 size={15} aria-hidden="true" /> Processo rápido e sem
                    complicação
                  </li>
                  <li>
                    <CheckCircle2 size={15} aria-hidden="true" /> Horários flexíveis
                  </li>
                  <li>
                    <CheckCircle2 size={15} aria-hidden="true" /> Parcelamentos que cabem no
                    seu bolso
                  </li>
                </ul>
              </div>
              <a
                className="ox-button ox-button-primary"
                href={WA_ARUJA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon /> Quero adicionar categoria
              </a>
            </div>
          </article>

          {/* Categorias profissionais */}
          <article className="ox-service" id="categorias-profissionais">
            <figure className="ox-service-media">
              <Image
                src="/images/onyx/onyx-servico-1.jpg"
                alt="Motorista profissional de colete ao lado do caminhão de treinamento da Onyx — Categorias C, D e E"
                width={1080}
                height={1080}
              />
            </figure>
            <div className="ox-service-copy">
              <span className="ox-service-tag">
                <Truck size={14} aria-hidden="true" /> Categorias C, D e E
              </span>
              <h3>Adição ou Mudança de Categoria — Profissionais 🚛</h3>
              <p className="ox-service-lead">
                Amplie suas possibilidades de trabalho na direção com as categorias
                profissionais.
              </p>
              <div className="ox-cat-grid">
                {categoriasProfissionais.map(({ icon: Icon, cat, nome, req }) => (
                  <div className="ox-cat" key={cat}>
                    <div className="ox-cat-head">
                      <Icon size={18} aria-hidden="true" />
                      <strong>
                        Categoria {cat} · {nome}
                      </strong>
                    </div>
                    <p>{req}</p>
                  </div>
                ))}
              </div>
              <div className="ox-service-req">
                <h4>
                  <FileText size={16} aria-hidden="true" /> Documentação necessária
                </h4>
                <ul>
                  <li>
                    <CheckCircle2 size={15} aria-hidden="true" /> RG e CPF
                  </li>
                  <li>
                    <CheckCircle2 size={15} aria-hidden="true" /> Comprovante de residência
                  </li>
                  <li>
                    <CheckCircle2 size={15} aria-hidden="true" /> CNH
                  </li>
                </ul>
              </div>
              <a
                className="ox-button ox-button-primary"
                href={WA_ARUJA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon /> Quero ser profissional
              </a>
            </div>
          </article>

          {/* Reciclagem */}
          <article className="ox-service is-reverse" id="reciclagem">
            <figure className="ox-service-media">
              <Image
                src="/images/onyx/onyx-servico-5.jpg"
                alt="Aluno fazendo curso de reciclagem online no computador — Reciclagem, regularize!"
                width={1080}
                height={1080}
              />
            </figure>
            <div className="ox-service-copy">
              <span className="ox-service-tag">
                <RefreshCcw size={14} aria-hidden="true" /> CNH suspensa
              </span>
              <h3>Curso de Reciclagem — recupere sua CNH com rapidez e segurança! 🚗</h3>
              <p className="ox-service-lead">
                Sua habilitação foi suspensa? 😟 Fique tranquilo: a Onyx oferece o curso de
                reciclagem de forma rápida, prática e autorizada pelo Detran.
              </p>
              <ul className="ox-service-list">
                {reciclagemBeneficios.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="ox-recycle-facts">
                <div>
                  <Clock3 size={17} aria-hidden="true" />
                  <strong>45 horas-aula</strong>
                  <span>carga horária total</span>
                </div>
                <div>
                  <CalendarDays size={17} aria-hidden="true" />
                  <strong>Poucos dias</strong>
                  <span>duração média</span>
                </div>
                <div>
                  <Award size={17} aria-hidden="true" />
                  <strong>Certificado</strong>
                  <span>válido em todo o Brasil</span>
                </div>
              </div>
              <a
                className="ox-button ox-button-primary"
                href={`https://wa.me/${WA_ARUJA}?text=${encodeURIComponent(
                  "Olá! Minha CNH foi suspensa e quero fazer o curso de reciclagem na Onyx.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon /> Fazer meu cadastro
              </a>
            </div>
          </article>

          <div className="ox-extra-services">
            <article>
              <div className="ox-icon" aria-hidden="true">
                <ShieldCheck size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h3>Aulas para Habilitados</h3>
                <p>
                  Já tem CNH mas perdeu a prática? Volte ao volante com segurança, no seu
                  ritmo, com instrutores pacientes.
                </p>
              </div>
            </article>
            <article>
              <div className="ox-icon" aria-hidden="true">
                <Scale size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h3>Assessoria Jurídica de Trânsito</h3>
                <p>
                  Suporte para pendências e dúvidas sobre a sua CNH, com orientação
                  especializada.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Preços ── */}
      <section className="ox-section is-dark" id="precos">
        <div className="ox-wrap">
          <SectionHead
            light
            kicker="Ofertas online"
            title="Preços transparentes, tudo incluso"
            lead="Sem surpresa no meio do caminho: matrícula, exames, curso teórico, taxas do governo e aulas práticas já estão no valor. Ofertas válidas para matrículas online."
          />
          <div className="ox-plans">
            {planos.map(({ icon: Icon, ...plano }) => (
              <article
                className={`ox-plan${plano.destaque ? " is-featured" : ""}`}
                key={plano.cat}
              >
                {plano.destaque ? <span className="ox-plan-flag">Mais completo</span> : null}
                <div className="ox-plan-head">
                  <Icon size={22} aria-hidden="true" />
                  <div>
                    <h3>{plano.nome}</h3>
                    <span>{plano.cat}</span>
                  </div>
                </div>
                <p className="ox-plan-price">
                  <s>De {plano.de}</s>
                  <strong>
                    Por {plano.por}
                    <small>*à vista</small>
                  </strong>
                </p>
                <p className="ox-plan-installments">
                  <CalendarDays size={15} aria-hidden="true" /> {plano.parcelado}
                </p>
                <h4>Tudo incluso:</h4>
                <ul>
                  {plano.inclui.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={15} aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
                <a className="ox-button ox-button-wa" href="#pre-matricula">
                  Faça agora mesmo a sua matrícula!
                </a>
              </article>
            ))}
          </div>
          <p className="ox-plans-note">
            *Valores à vista (dinheiro ou cartão). Ofertas válidas somente para compras
            online — consulte condições na unidade mais próxima.
          </p>
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section className="ox-section" id="depoimentos">
        <div className="ox-wrap">
          <SectionHead
            kicker="Depoimentos"
            title="Quem já passou por aqui recomenda"
            lead="Histórias reais de alunos que conquistaram a liberdade no volante com a Onyx."
          />
          <div className="ox-quotes">
            {depoimentos.map((dep) => (
              <figure className="ox-quote" key={dep.nome}>
                <Quote size={22} aria-hidden="true" />
                <div className="ox-quote-stars" aria-label="Avaliação 5 de 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} aria-hidden="true" />
                  ))}
                </div>
                <blockquote>{dep.texto}</blockquote>
                <figcaption>
                  <strong>{dep.nome}</strong>
                  <span>{dep.papel}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipe ── */}
      <section className="ox-section is-muted" id="equipe">
        <div className="ox-wrap">
          <SectionHead
            kicker="Equipe"
            title="Nosso time de profissionais"
            lead="Somos uma equipe animada e cheia de energia — gente que ama o que faz e acredita que aprender a dirigir pode (e deve!) ser uma experiência leve, divertida e inesquecível. Aqui, cada instrutor, atendente e colaborador tem um papel importante em fazer nossos alunos se sentirem confiantes e felizes a cada conquista. 🚗✨"
          />
          <div className="ox-team">
            {equipe.map((pessoa) => (
              <figure className="ox-member" key={pessoa.nome}>
                <div className="ox-member-photo">
                  <Image
                    src={pessoa.foto}
                    alt={`${pessoa.nome} — ${pessoa.cargo}`}
                    width={400}
                    height={400}
                  />
                </div>
                <figcaption>
                  <strong>{pessoa.nome}</strong>
                  <span>{pessoa.cargo}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="ox-recruit">
            <div>
              <h3>Quer fazer parte dessa equipe? 💫</h3>
              <p>
                Se você é comunicativo, gosta de ajudar pessoas e quer crescer junto com a
                gente, envie seu currículo. Vem acelerar com a Onyx!
              </p>
            </div>
            <a className="ox-button ox-button-primary" href={`mailto:${EMAIL}`}>
              <Mail size={16} aria-hidden="true" /> {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* ── Unidades ── */}
      <section className="ox-section" id="unidades">
        <div className="ox-wrap">
          <SectionHead
            kicker="Unidades"
            title="Perto de você no Alto Tietê"
            lead="Em Suzano, a Onyx ganhou um novo espaço cheio de energia boa, pronto para continuar escrevendo histórias de superação e conquistas. Aqui, cada conquista é celebrada e cada sonho ganha direção."
          />
          <div className="ox-units">
            {UNIDADES.map((u) => (
              <article className="ox-unit" key={u.nome}>
                <h3>
                  <MapPin size={18} aria-hidden="true" /> {u.nome}
                </h3>
                <p className="ox-unit-address">{u.endereco}</p>
                <ul className="ox-unit-data">
                  <li>
                    <Phone size={15} aria-hidden="true" />
                    <a href={u.telefoneHref}>{u.telefone}</a>
                  </li>
                  <li>
                    <Landmark size={15} aria-hidden="true" />
                    <span>CNPJ {u.cnpj}</span>
                  </li>
                  <li>
                    <Instagram size={15} aria-hidden="true" />
                    <a href={u.instagram} target="_blank" rel="noopener noreferrer">
                      {u.instagramHandle}
                    </a>
                  </li>
                </ul>
                <div className="ox-unit-actions">
                  <a
                    className="ox-button ox-button-wa"
                    href={u.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WaIcon size={16} /> WhatsApp
                  </a>
                  <a
                    className="ox-button ox-button-ghost"
                    href={u.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no mapa <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
                <div className="ox-unit-social">
                  <a href={u.facebook} target="_blank" rel="noopener noreferrer" aria-label={`Facebook — ${u.nome}`}>
                    <Facebook size={17} aria-hidden="true" />
                  </a>
                  <a href={u.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram — ${u.nome}`}>
                    <Instagram size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="ox-units-note">
            Atendemos também alunos de <strong>Mogi das Cruzes</strong> — selecione a unidade
            na pré-matrícula e fale com a nossa equipe.
          </p>
        </div>
      </section>

      {/* ── Pré-matrícula ── */}
      <section className="ox-section is-orange" id="pre-matricula">
        <div className="ox-wrap ox-prematricula">
          <div className="ox-prematricula-copy">
            <span className="ox-kicker is-dark">Pré-matrícula</span>
            <h2>Garanta sua vaga na melhor autoescola do Alto Tietê!</h2>
            <p>
              Preencha a pré-matrícula e nossa equipe entra em contato para agendar tudo:
              exames, curso teórico e aulas práticas. Nossa equipe está pronta para te
              atender com atenção e carinho! 💛
            </p>
            <ul>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" /> Resposta rápida pelo WhatsApp
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" /> Atendimento em Arujá, Suzano e
                Mogi das Cruzes
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" /> Parcelamento que cabe no bolso
              </li>
            </ul>
          </div>
          <div className="ox-prematricula-form">
            <PreMatriculaForm />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ox-section" id="duvidas">
        <div className="ox-wrap ox-faq-wrap">
          <SectionHead
            kicker="Dúvidas frequentes"
            title="Tudo o que você precisa saber antes de começar"
          />
          <div className="ox-faq">
            {faqs.map((item, index) => (
              <FAQItem key={item.q} q={item.q} a={item.a} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Links úteis ── */}
      <section className="ox-section is-muted" id="links-uteis">
        <div className="ox-wrap">
          <SectionHead
            kicker="Links úteis"
            title="Precisa de uma ajudinha rápida? 💡"
            lead="Reunimos aqui os principais links pra facilitar sua vida no trânsito!"
          />
          <div className="ox-links">
            {linksUteis.map((link) => (
              <a
                className="ox-link-card"
                key={link.nome}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link2 size={18} aria-hidden="true" />
                <div>
                  <strong>{link.nome}</strong>
                  <span>{link.desc}</span>
                </div>
                <ExternalLink size={15} aria-hidden="true" className="ox-link-ext" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contato ── */}
      <section className="ox-section is-dark" id="contato">
        <div className="ox-wrap ox-contact">
          <SectionHead
            light
            kicker="Fale conosco 💬"
            title="Será um prazer falar com você!"
            lead="Tem dúvidas, sugestões ou quer saber mais sobre nossos serviços? Nossa equipe está pronta para te atender com atenção e carinho — e te ajudar a dar o próximo passo rumo à sua habilitação! 🚗✨"
          />
          <div className="ox-contact-grid">
            <a
              className="ox-contact-card"
              href={WA_ARUJA_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WaIcon size={20} />
              <strong>Whats Arujá</strong>
              <span>Resposta rápida em horário comercial</span>
            </a>
            <a
              className="ox-contact-card"
              href={WA_SUZANO_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WaIcon size={20} />
              <strong>Whats Suzano</strong>
              <span>Resposta rápida em horário comercial</span>
            </a>
            <a className="ox-contact-card" href="tel:+551146522951">
              <Phone size={20} aria-hidden="true" />
              <strong>11 4652.2951</strong>
              <span>Telefone — Unidade Arujá</span>
            </a>
            <a className="ox-contact-card" href="tel:+551128913017">
              <Phone size={20} aria-hidden="true" />
              <strong>11 2891.3017</strong>
              <span>Telefone — Unidade Suzano</span>
            </a>
            <a className="ox-contact-card" href={`mailto:${EMAIL}`}>
              <Mail size={20} aria-hidden="true" />
              <strong>{EMAIL}</strong>
              <span>Email — dúvidas e currículos</span>
            </a>
            <a className="ox-contact-card" href="#pre-matricula">
              <MessageCircle size={20} aria-hidden="true" />
              <strong>Pré-matrícula online</strong>
              <span>Formulário direto no WhatsApp</span>
            </a>
          </div>
          <p className="ox-contact-social">
            Curta nossas redes sociais e fique por dentro de tudo!{" "}
            <a
              href="https://instagram.com/autoescola_onyx"
              target="_blank"
              rel="noopener noreferrer"
            >
              @autoescola_onyx
            </a>{" "}
            ·{" "}
            <a
              href="https://instagram.com/autoescola_onyx_suzano"
              target="_blank"
              rel="noopener noreferrer"
            >
              @autoescola_onyx_suzano
            </a>
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="ox-footer">
        <div className="ox-wrap ox-footer-grid">
          <div className="ox-footer-brand">
            <Image
              src="/images/onyx/onyx-logo.png"
              alt="Autoescola Onyx"
              width={1703}
              height={577}
            />
            <p>
              Autoescola Onyx — dirija seus sonhos com a gente! Centro de Formação de
              Condutores credenciado ao Detran.SP, desde 2007. <strong>#VemPraOnyx</strong>
            </p>
          </div>
          {UNIDADES.map((u) => (
            <div className="ox-footer-unit" key={u.nome}>
              <h3>{u.nome}</h3>
              <p>{u.endereco}</p>
              <p>
                Tel.: <a href={u.telefoneHref}>{u.telefone}</a>
              </p>
              <p>CNPJ: {u.cnpj}</p>
              <div className="ox-footer-social">
                <a href={u.facebook} target="_blank" rel="noopener noreferrer" aria-label={`Facebook — ${u.nome}`}>
                  <Facebook size={16} aria-hidden="true" />
                </a>
                <a href={u.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram — ${u.nome}`}>
                  <Instagram size={16} aria-hidden="true" />
                </a>
                <a href={u.wa} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp — ${u.nome}`}>
                  <WaIcon size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="ox-wrap ox-footer-bottom">
          <p>
            Prévia conceitual desenvolvida pela{" "}
            <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
              Luma Sites
            </a>{" "}
            a partir do conteúdo público de{" "}
            <a href={OFFICIAL} target="_blank" rel="noopener noreferrer">
              www.aeonyx.com.br
            </a>
            . Marca, fotos e textos pertencem à Autoescola Onyx.
          </p>
        </div>
      </footer>

      <a
        className="ox-float-wa"
        href={WA_ARUJA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Autoescola Onyx no WhatsApp"
      >
        <WaIcon size={26} />
      </a>

      <style jsx global>
        {css}
      </style>
    </main>
  );
}

/* ─── Estilos (mobile-first) ─── */

const css = `
  .ox-page {
    --ox-orange: #f7941d;
    --ox-orange-deep: #e07c00;
    --ox-black: #131313;
    --ox-ink: #26221c;
    --ox-muted: #6b6257;
    --ox-cream: #fdf8f1;
    --ox-sand: #f6ede0;
    --ox-line: #ece1d2;
    --ox-white: #ffffff;
    --ox-wa: #1fa855;
    --ox-radius: 18px;
    font-family: "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif;
    background: var(--ox-cream);
    color: var(--ox-ink);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: clip;
    padding-top: 52px;
  }
  .ox-page [id] {
    scroll-margin-top: 122px;
  }
  .ox-page *,
  .ox-page *::before,
  .ox-page *::after {
    box-sizing: border-box;
  }
  .ox-page img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  .ox-page h1,
  .ox-page h2,
  .ox-page h3,
  .ox-page h4,
  .ox-page p,
  .ox-page ul,
  .ox-page figure,
  .ox-page blockquote {
    margin: 0;
  }
  .ox-page h1,
  .ox-page h2,
  .ox-page h3,
  .ox-page h4 {
    font-family: inherit;
    font-variant: normal;
    text-transform: none;
  }
  .ox-page ul {
    padding: 0;
    list-style: none;
  }
  .ox-page a {
    color: inherit;
    text-decoration: none;
  }
  .ox-wrap {
    width: min(100% - 2.5rem, 74rem);
    margin-inline: auto;
  }

  .ox-skip {
    position: absolute;
    left: -9999px;
    top: 0;
    z-index: 200;
    background: var(--ox-black);
    color: #fff;
    padding: 0.65rem 1rem;
    border-radius: 0 0 10px 0;
  }
  .ox-skip:focus {
    left: 0;
  }

  /* Preview bar (fixa no topo, como nas demais prévias) */
  .ox-preview-bar {
    position: fixed;
    inset: 0 0 auto;
    z-index: 72;
    height: 52px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    align-content: center;
    align-items: center;
    column-gap: 0.7rem;
    row-gap: 1px;
    padding: 4px 12px;
    background: #0d0d0d;
    color: #cfc8bd;
    font-size: 0.72rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
  .ox-preview-back {
    grid-column: 1;
    grid-row: 1 / span 2;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 600;
    color: #fff;
  }
  .ox-preview-line {
    grid-column: 2;
    grid-row: 1;
    justify-self: center;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ox-orange);
    white-space: nowrap;
  }
  .ox-preview-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--ox-orange);
    box-shadow: 0 0 0 3px rgba(247, 148, 29, 0.25);
    animation: ox-pulse 2.2s infinite;
  }
  @keyframes ox-pulse {
    0%, 100% { box-shadow: 0 0 0 3px rgba(247, 148, 29, 0.25); }
    50% { box-shadow: 0 0 0 6px rgba(247, 148, 29, 0.08); }
  }
  .ox-preview-sub {
    grid-column: 2;
    grid-row: 2;
    justify-self: center;
    font-size: 0.64rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .ox-preview-sub a,
  .ox-preview-site {
    color: #fff;
    font-weight: 600;
  }
  .ox-preview-site {
    grid-column: 3;
    grid-row: 1 / span 2;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 999px;
    padding: 0.25rem 0.7rem;
    white-space: nowrap;
  }

  /* Header */
  .ox-header {
    position: sticky;
    top: 52px;
    z-index: 60;
    background: rgba(19, 19, 19, 0.96);
    backdrop-filter: blur(8px);
    border-bottom: 3px solid var(--ox-orange);
  }
  .ox-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.65rem 0;
  }
  .ox-brand {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
  }
  .ox-page img.ox-brand-logo {
    width: auto;
    height: 40px;
    filter: drop-shadow(0 1px 0 rgba(255,255,255,0.9)) drop-shadow(0 0 6px rgba(255,255,255,0.65));
  }
  .ox-desktop-nav {
    display: none;
  }
  .ox-nav-cta {
    display: none;
  }
  .ox-menu-button {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
    color: #fff;
    cursor: pointer;
  }

  .ox-menu-overlay {
    position: fixed;
    inset: 0;
    z-index: 76;
    border: 0;
    background: rgba(12, 10, 8, 0.55);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
  }
  .ox-menu-overlay.is-open {
    opacity: 1;
    pointer-events: auto;
  }
  .ox-mobile-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 80;
    width: min(21rem, 88vw);
    background: var(--ox-black);
    color: #fff;
    padding: 1.1rem 1.25rem 2rem;
    transform: translateX(105%);
    transition: transform 0.28s ease;
    overflow-y: auto;
    visibility: hidden;
  }
  .ox-mobile-drawer.is-open {
    transform: translateX(0);
    visibility: visible;
  }
  .ox-drawer-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 0.9rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
  .ox-drawer-head span {
    display: block;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.72rem;
    color: var(--ox-orange);
  }
  .ox-drawer-head small {
    color: #b9b1a5;
  }
  .ox-drawer-head button {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
    color: #fff;
    cursor: pointer;
  }
  .ox-mobile-drawer nav {
    display: grid;
    gap: 0.25rem;
  }
  .ox-mobile-drawer nav > a {
    padding: 0.7rem 0.6rem;
    border-radius: 10px;
    font-weight: 600;
  }
  .ox-mobile-drawer nav > a:hover {
    background: rgba(255, 255, 255, 0.08);
  }
  .ox-drawer-cta {
    margin-top: 0.6rem;
    background: var(--ox-orange);
    color: var(--ox-black) !important;
    text-align: center;
    font-weight: 800 !important;
  }
  .ox-drawer-wa {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin-top: 0.9rem;
  }
  .ox-drawer-wa a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.6rem;
    border-radius: 10px;
    background: var(--ox-wa);
    color: #fff;
    font-weight: 700;
    font-size: 0.85rem;
  }

  /* Buttons */
  .ox-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-height: 48px;
    padding: 0.7rem 1.25rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.95rem;
    border: 2px solid transparent;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  }
  .ox-button:hover {
    transform: translateY(-1px);
  }
  .ox-button-primary {
    background: var(--ox-orange);
    color: var(--ox-black);
    box-shadow: 0 8px 20px rgba(247, 148, 29, 0.35);
  }
  .ox-button-primary:hover {
    background: var(--ox-orange-deep);
    color: #fff;
  }
  .ox-button-wa {
    background: var(--ox-wa);
    color: #fff;
    box-shadow: 0 8px 20px rgba(31, 168, 85, 0.3);
  }
  .ox-button-wa.is-alt {
    background: #128c46;
  }
  .ox-button-ghost {
    border-color: currentColor;
    background: transparent;
  }

  /* Section scaffolding */
  .ox-section {
    padding: 3.2rem 0;
  }
  .ox-section.is-muted {
    background: var(--ox-sand);
  }
  .ox-section.is-dark {
    background: var(--ox-black);
    color: #f3ede4;
  }
  .ox-section.is-orange {
    background: linear-gradient(135deg, var(--ox-orange) 0%, var(--ox-orange-deep) 100%);
    color: var(--ox-black);
  }
  .ox-section-head {
    max-width: 46rem;
    margin-bottom: 2rem;
  }
  .ox-section-head h2 {
    font-size: clamp(1.5rem, 4.5vw, 2.2rem);
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin-top: 0.6rem;
  }
  .ox-section-head p {
    margin-top: 0.8rem;
    color: var(--ox-muted);
  }
  .ox-section-head.is-light p {
    color: #cfc6b8;
  }
  .ox-kicker {
    display: inline-block;
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ox-orange-deep);
    background: rgba(247, 148, 29, 0.14);
    border: 1px solid rgba(247, 148, 29, 0.35);
    border-radius: 999px;
    padding: 0.3rem 0.8rem;
  }
  .ox-section.is-dark .ox-kicker {
    color: var(--ox-orange);
    background: rgba(247, 148, 29, 0.12);
  }
  .ox-kicker.is-dark {
    color: var(--ox-black);
    background: rgba(19, 19, 19, 0.12);
    border-color: rgba(19, 19, 19, 0.3);
  }

  /* Hero */
  .ox-hero {
    position: relative;
    background: var(--ox-black);
    color: #f6f1e8;
    overflow: hidden;
  }
  .ox-hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(60% 50% at 85% 0%, rgba(247, 148, 29, 0.28), transparent 60%),
      radial-gradient(50% 60% at 0% 100%, rgba(247, 148, 29, 0.14), transparent 55%);
    pointer-events: none;
  }
  .ox-hero-inner {
    position: relative;
    display: grid;
    gap: 2rem;
    padding: 3rem 0 3.2rem;
  }
  .ox-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ox-orange);
    background: rgba(247, 148, 29, 0.12);
    border: 1px solid rgba(247, 148, 29, 0.4);
    border-radius: 999px;
    padding: 0.35rem 0.85rem;
  }
  .ox-hero h1 {
    margin-top: 1rem;
    font-size: clamp(2rem, 7vw, 3.3rem);
    line-height: 1.08;
    letter-spacing: -0.02em;
    font-weight: 800;
  }
  .ox-hero-em {
    color: var(--ox-orange);
    display: inline-block;
  }
  .ox-hero-copy > p {
    margin-top: 1rem;
    max-width: 34rem;
    color: #d9d1c4;
    font-size: 1.03rem;
  }
  .ox-hero-ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1.5rem;
  }
  .ox-hero-ctas .ox-button-ghost {
    color: #f6f1e8;
  }
  .ox-hero-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem 1.2rem;
    margin-top: 2rem;
  }
  .ox-hero-stats li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
  }
  .ox-hero-stats svg {
    color: var(--ox-orange);
    flex-shrink: 0;
    margin-top: 0.2rem;
  }
  .ox-hero-stats strong {
    display: block;
    font-size: 0.92rem;
  }
  .ox-hero-stats span {
    font-size: 0.78rem;
    color: #b6ad9f;
  }
  .ox-hero-media {
    position: relative;
  }
  .ox-hero-media img {
    border-radius: var(--ox-radius);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  .ox-hero-media figcaption {
    position: absolute;
    left: 0.9rem;
    bottom: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(13, 13, 13, 0.82);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 999px;
    padding: 0.4rem 0.85rem;
    border: 1px solid rgba(247, 148, 29, 0.5);
  }
  .ox-hero-media figcaption svg {
    color: var(--ox-orange);
  }

  /* Sobre */
  .ox-about {
    display: grid;
    gap: 2rem;
  }
  .ox-about-copy p + p {
    margin-top: 0.9rem;
  }
  .ox-about-copy p {
    color: #4c443a;
  }
  .ox-hashtag {
    margin-top: 1rem !important;
    font-weight: 800;
    color: var(--ox-orange-deep) !important;
    font-size: 1.05rem;
  }
  .ox-about-ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1.4rem;
  }
  .ox-about-media img {
    border-radius: var(--ox-radius);
    border: 1px solid var(--ox-line);
    box-shadow: 0 16px 40px rgba(38, 34, 28, 0.12);
  }

  /* Estrutura */
  .ox-feature-grid {
    display: grid;
    gap: 1rem;
  }
  .ox-feature {
    background: var(--ox-white);
    border: 1px solid var(--ox-line);
    border-radius: var(--ox-radius);
    padding: 1.4rem;
    box-shadow: 0 10px 26px rgba(38, 34, 28, 0.06);
  }
  .ox-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border-radius: 14px;
    background: rgba(247, 148, 29, 0.15);
    color: var(--ox-orange-deep);
    margin-bottom: 0.9rem;
    flex-shrink: 0;
  }
  .ox-feature h3 {
    font-size: 1.05rem;
    margin-bottom: 0.4rem;
  }
  .ox-feature p {
    font-size: 0.92rem;
    color: var(--ox-muted);
  }
  .ox-fleet {
    display: grid;
    gap: 1.6rem;
    margin-top: 2.2rem;
    align-items: center;
  }
  .ox-fleet figure img {
    border-radius: var(--ox-radius);
    border: 1px solid var(--ox-line);
  }
  .ox-fleet figcaption {
    font-size: 0.8rem;
    color: var(--ox-muted);
    margin-top: 0.5rem;
  }
  .ox-fleet-copy h3 {
    font-size: 1.25rem;
    margin-bottom: 0.6rem;
  }
  .ox-fleet-copy > p {
    color: #4c443a;
  }
  .ox-fleet-copy ul {
    margin-top: 0.9rem;
    display: grid;
    gap: 0.45rem;
  }
  .ox-fleet-copy li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.94rem;
    font-weight: 600;
  }
  .ox-fleet-copy li svg {
    color: var(--ox-orange-deep);
    flex-shrink: 0;
  }
  .ox-fleet-note {
    margin-top: 1rem !important;
    font-size: 0.9rem;
    color: var(--ox-muted) !important;
  }

  /* Serviços */
  .ox-services-summary {
    display: grid;
    gap: 0.6rem;
    margin-bottom: 2.4rem;
  }
  .ox-services-summary li {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    background: var(--ox-white);
    border: 1px solid var(--ox-line);
    border-radius: 12px;
    padding: 0.75rem 1rem;
    font-weight: 600;
    font-size: 0.94rem;
  }
  .ox-services-summary svg {
    color: var(--ox-orange-deep);
    flex-shrink: 0;
  }
  .ox-service {
    display: grid;
    gap: 1.5rem;
    background: var(--ox-white);
    border: 1px solid var(--ox-line);
    border-radius: calc(var(--ox-radius) + 4px);
    padding: 1.3rem;
    box-shadow: 0 14px 34px rgba(38, 34, 28, 0.07);
  }
  .ox-service + .ox-service {
    margin-top: 1.6rem;
  }
  .ox-service-media img {
    border-radius: var(--ox-radius);
  }
  .ox-service-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ox-orange-deep);
    background: rgba(247, 148, 29, 0.14);
    border-radius: 999px;
    padding: 0.3rem 0.75rem;
    margin-bottom: 0.8rem;
  }
  .ox-service-copy h3 {
    font-size: clamp(1.2rem, 3.4vw, 1.55rem);
    line-height: 1.25;
  }
  .ox-service-lead {
    margin-top: 0.55rem !important;
    font-weight: 600;
    color: var(--ox-ink) !important;
  }
  .ox-service-copy > p {
    margin-top: 0.55rem;
    color: #4c443a;
    font-size: 0.96rem;
  }
  .ox-service-list {
    margin-top: 0.9rem;
    display: grid;
    gap: 0.55rem;
  }
  .ox-service-list li {
    display: flex;
    gap: 0.5rem;
    font-size: 0.94rem;
  }
  .ox-service-list svg {
    color: var(--ox-orange-deep);
    flex-shrink: 0;
    margin-top: 0.22rem;
  }
  .ox-service-req {
    margin-top: 1.1rem;
    background: var(--ox-sand);
    border: 1px dashed rgba(224, 124, 0, 0.45);
    border-radius: 14px;
    padding: 0.95rem 1.05rem;
  }
  .ox-service-req h4 {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--ox-orange-deep);
    margin-bottom: 0.6rem;
  }
  .ox-service-req ul {
    display: grid;
    gap: 0.4rem;
  }
  .ox-service-req li {
    display: flex;
    gap: 0.45rem;
    font-size: 0.9rem;
    align-items: flex-start;
  }
  .ox-service-req li svg {
    color: var(--ox-orange-deep);
    flex-shrink: 0;
    margin-top: 0.22rem;
  }
  .ox-service-copy .ox-button {
    margin-top: 1.2rem;
  }
  .ox-cat-grid {
    display: grid;
    gap: 0.7rem;
    margin-top: 1rem;
  }
  .ox-cat {
    border: 1px solid var(--ox-line);
    border-radius: 14px;
    padding: 0.85rem 1rem;
    background: var(--ox-cream);
  }
  .ox-cat-head {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.35rem;
  }
  .ox-cat-head svg {
    color: var(--ox-orange-deep);
  }
  .ox-cat-head strong {
    font-size: 0.95rem;
  }
  .ox-cat p {
    font-size: 0.87rem;
    color: var(--ox-muted);
  }
  .ox-recycle-facts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.7rem;
    margin-top: 1.1rem;
  }
  .ox-recycle-facts > div {
    background: var(--ox-cream);
    border: 1px solid var(--ox-line);
    border-radius: 14px;
    padding: 0.8rem 0.6rem;
    text-align: center;
    display: grid;
    gap: 0.15rem;
    justify-items: center;
  }
  .ox-recycle-facts svg {
    color: var(--ox-orange-deep);
  }
  .ox-recycle-facts strong {
    font-size: 0.9rem;
  }
  .ox-recycle-facts span {
    font-size: 0.72rem;
    color: var(--ox-muted);
  }
  .ox-extra-services {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
  }
  .ox-extra-services article {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    background: var(--ox-white);
    border: 1px solid var(--ox-line);
    border-radius: var(--ox-radius);
    padding: 1.2rem;
  }
  .ox-extra-services .ox-icon {
    margin-bottom: 0;
  }
  .ox-extra-services h3 {
    font-size: 1.02rem;
    margin-bottom: 0.3rem;
  }
  .ox-extra-services p {
    font-size: 0.9rem;
    color: var(--ox-muted);
  }

  /* Preços */
  .ox-plans {
    display: grid;
    gap: 1.4rem;
  }
  .ox-plan {
    position: relative;
    background: #1c1a17;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: calc(var(--ox-radius) + 4px);
    padding: 1.6rem 1.4rem;
    display: flex;
    flex-direction: column;
  }
  .ox-plan.is-featured {
    border-color: var(--ox-orange);
    box-shadow: 0 0 0 1px var(--ox-orange), 0 18px 50px rgba(247, 148, 29, 0.18);
  }
  .ox-plan-flag {
    position: absolute;
    top: -0.8rem;
    right: 1.2rem;
    background: var(--ox-orange);
    color: var(--ox-black);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 999px;
    padding: 0.3rem 0.8rem;
  }
  .ox-plan-head {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  .ox-plan-head svg {
    color: var(--ox-orange);
  }
  .ox-plan-head h3 {
    font-size: 1.25rem;
  }
  .ox-plan-head span {
    font-size: 0.8rem;
    color: #b6ad9f;
  }
  .ox-plan-price {
    margin-top: 1.1rem;
    display: grid;
    gap: 0.15rem;
  }
  .ox-plan-price s {
    color: #97907f;
    font-size: 0.95rem;
  }
  .ox-plan-price strong {
    font-size: clamp(1.7rem, 5vw, 2.1rem);
    color: var(--ox-orange);
    line-height: 1.1;
  }
  .ox-plan-price small {
    display: block;
    font-size: 0.75rem;
    color: #b6ad9f;
    font-weight: 500;
  }
  .ox-plan-installments {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    margin-top: 0.8rem;
    font-size: 0.87rem;
    color: #e8e0d2;
    background: rgba(247, 148, 29, 0.1);
    border: 1px solid rgba(247, 148, 29, 0.3);
    border-radius: 12px;
    padding: 0.6rem 0.8rem;
  }
  .ox-plan-installments svg {
    color: var(--ox-orange);
    flex-shrink: 0;
  }
  .ox-plan h4 {
    margin-top: 1.2rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #b6ad9f;
  }
  .ox-plan ul {
    margin-top: 0.7rem;
    display: grid;
    gap: 0.45rem;
    flex: 1;
  }
  .ox-plan li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.93rem;
  }
  .ox-plan li svg {
    color: var(--ox-orange);
    flex-shrink: 0;
  }
  .ox-plan .ox-button {
    margin-top: 1.4rem;
  }
  .ox-plans-note {
    margin-top: 1.4rem;
    font-size: 0.8rem;
    color: #97907f;
  }

  /* Depoimentos */
  .ox-quotes {
    display: grid;
    gap: 1rem;
  }
  .ox-quote {
    background: var(--ox-white);
    border: 1px solid var(--ox-line);
    border-radius: var(--ox-radius);
    padding: 1.4rem;
    box-shadow: 0 10px 26px rgba(38, 34, 28, 0.06);
    display: flex;
    flex-direction: column;
  }
  .ox-quote > svg {
    color: var(--ox-orange);
    margin-bottom: 0.6rem;
  }
  .ox-quote-stars {
    display: inline-flex;
    gap: 0.15rem;
    margin-bottom: 0.7rem;
  }
  .ox-quote-stars svg {
    color: var(--ox-orange);
    fill: var(--ox-orange);
  }
  .ox-quote blockquote {
    font-size: 0.96rem;
    color: #4c443a;
    flex: 1;
  }
  .ox-quote figcaption {
    margin-top: 1rem;
    display: grid;
  }
  .ox-quote figcaption strong {
    font-size: 0.95rem;
  }
  .ox-quote figcaption span {
    font-size: 0.8rem;
    color: var(--ox-muted);
  }

  /* Equipe */
  .ox-team {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .ox-member {
    background: var(--ox-white);
    border: 1px solid var(--ox-line);
    border-radius: var(--ox-radius);
    overflow: hidden;
    text-align: center;
    padding-bottom: 1rem;
  }
  .ox-member-photo {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: var(--ox-sand);
  }
  .ox-member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.3s ease;
  }
  .ox-member:hover .ox-member-photo img {
    transform: scale(1.04);
  }
  .ox-member figcaption {
    padding: 0.8rem 0.6rem 0;
    display: grid;
    gap: 0.1rem;
  }
  .ox-member strong {
    font-size: 0.98rem;
  }
  .ox-member span {
    font-size: 0.76rem;
    color: var(--ox-muted);
  }
  .ox-recruit {
    margin-top: 2rem;
    background: var(--ox-black);
    color: #f3ede4;
    border-radius: calc(var(--ox-radius) + 4px);
    padding: 1.6rem 1.4rem;
    display: grid;
    gap: 1.2rem;
  }
  .ox-recruit h3 {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }
  .ox-recruit p {
    color: #cfc6b8;
    font-size: 0.94rem;
  }
  .ox-recruit .ox-button {
    justify-self: start;
    word-break: break-all;
  }

  /* Unidades */
  .ox-units {
    display: grid;
    gap: 1.2rem;
  }
  .ox-unit {
    background: var(--ox-white);
    border: 1px solid var(--ox-line);
    border-radius: calc(var(--ox-radius) + 4px);
    padding: 1.5rem 1.4rem;
    box-shadow: 0 12px 30px rgba(38, 34, 28, 0.07);
  }
  .ox-unit h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.15rem;
  }
  .ox-unit h3 svg {
    color: var(--ox-orange-deep);
  }
  .ox-unit-address {
    margin-top: 0.6rem;
    color: #4c443a;
    font-size: 0.94rem;
  }
  .ox-unit-data {
    margin-top: 0.9rem;
    display: grid;
    gap: 0.45rem;
  }
  .ox-unit-data li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: var(--ox-muted);
  }
  .ox-unit-data svg {
    color: var(--ox-orange-deep);
    flex-shrink: 0;
  }
  .ox-unit-data a:hover {
    color: var(--ox-orange-deep);
  }
  .ox-unit-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1.1rem;
  }
  .ox-unit-social {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .ox-unit-social a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid var(--ox-line);
    color: var(--ox-orange-deep);
    transition: background 0.15s ease;
  }
  .ox-unit-social a:hover {
    background: rgba(247, 148, 29, 0.12);
  }
  .ox-units-note {
    margin-top: 1.4rem;
    font-size: 0.9rem;
    color: var(--ox-muted);
  }

  /* Pré-matrícula */
  .ox-prematricula {
    display: grid;
    gap: 2rem;
  }
  .ox-prematricula-copy h2 {
    margin-top: 0.7rem;
    font-size: clamp(1.5rem, 4.5vw, 2.1rem);
    line-height: 1.18;
    color: var(--ox-black);
  }
  .ox-prematricula-copy > p {
    margin-top: 0.8rem;
    color: rgba(19, 19, 19, 0.82);
  }
  .ox-prematricula-copy ul {
    margin-top: 1.1rem;
    display: grid;
    gap: 0.5rem;
  }
  .ox-prematricula-copy li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 0.94rem;
    color: var(--ox-black);
  }
  .ox-prematricula-copy li svg {
    flex-shrink: 0;
  }
  .ox-prematricula-form {
    background: var(--ox-white);
    border-radius: calc(var(--ox-radius) + 6px);
    padding: 1.5rem 1.3rem;
    box-shadow: 0 24px 60px rgba(19, 19, 19, 0.25);
  }
  .ox-form-grid {
    display: grid;
    gap: 0.9rem;
  }
  .ox-form label {
    display: grid;
    gap: 0.35rem;
    font-size: 0.84rem;
    font-weight: 700;
    color: var(--ox-ink);
  }
  .ox-form input,
  .ox-form select {
    width: 100%;
    min-height: 48px;
    border: 1px solid var(--ox-line);
    border-radius: 12px;
    padding: 0.6rem 0.85rem;
    font: inherit;
    font-weight: 500;
    background: var(--ox-cream);
    color: var(--ox-ink);
  }
  .ox-form input:focus,
  .ox-form select:focus {
    outline: 2px solid var(--ox-orange);
    outline-offset: 1px;
  }
  .ox-form .ox-button {
    width: 100%;
    margin-top: 1.1rem;
  }
  .ox-form-note {
    margin-top: 0.8rem;
    font-size: 0.78rem;
    color: var(--ox-muted);
    text-align: center;
  }

  /* FAQ */
  .ox-faq-wrap {
    max-width: 52rem;
  }
  .ox-faq {
    display: grid;
    gap: 0.7rem;
  }
  .ox-faq-item {
    background: var(--ox-white);
    border: 1px solid var(--ox-line);
    border-radius: 14px;
    overflow: hidden;
  }
  .ox-faq-item > button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1.15rem;
    background: transparent;
    border: 0;
    font: inherit;
    font-weight: 700;
    text-align: left;
    cursor: pointer;
    color: var(--ox-ink);
  }
  .ox-faq-item > button svg {
    flex-shrink: 0;
    color: var(--ox-orange-deep);
    transition: transform 0.25s ease;
  }
  .ox-faq-item > button[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
  .ox-faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.28s ease;
  }
  .ox-faq-answer > div {
    overflow: hidden;
  }
  .ox-faq-answer.is-open {
    grid-template-rows: 1fr;
  }
  .ox-faq-answer p {
    padding: 0 1.15rem 1.05rem;
    font-size: 0.93rem;
    color: #4c443a;
  }

  /* Links úteis */
  .ox-links {
    display: grid;
    gap: 0.8rem;
  }
  .ox-link-card {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    background: var(--ox-white);
    border: 1px solid var(--ox-line);
    border-radius: 14px;
    padding: 1rem 1.1rem;
    transition: border-color 0.15s ease, transform 0.15s ease;
  }
  .ox-link-card:hover {
    border-color: var(--ox-orange);
    transform: translateY(-2px);
  }
  .ox-link-card > svg {
    color: var(--ox-orange-deep);
    flex-shrink: 0;
  }
  .ox-link-card div {
    display: grid;
    gap: 0.1rem;
    flex: 1;
  }
  .ox-link-card strong {
    font-size: 0.96rem;
  }
  .ox-link-card span {
    font-size: 0.8rem;
    color: var(--ox-muted);
  }
  .ox-link-ext {
    color: var(--ox-muted);
  }

  /* Contato */
  .ox-contact-grid {
    display: grid;
    gap: 0.9rem;
  }
  .ox-contact-card {
    display: grid;
    gap: 0.3rem;
    justify-items: start;
    background: #1c1a17;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--ox-radius);
    padding: 1.2rem 1.15rem;
    transition: border-color 0.15s ease, transform 0.15s ease;
  }
  .ox-contact-card:hover {
    border-color: var(--ox-orange);
    transform: translateY(-2px);
  }
  .ox-contact-card svg {
    color: var(--ox-orange);
  }
  .ox-contact-card strong {
    font-size: 0.98rem;
    word-break: break-word;
  }
  .ox-contact-card span {
    font-size: 0.8rem;
    color: #b6ad9f;
  }
  .ox-contact-social {
    margin-top: 1.6rem;
    font-size: 0.9rem;
    color: #cfc6b8;
  }
  .ox-contact-social a {
    color: var(--ox-orange);
    font-weight: 700;
  }

  /* Footer */
  .ox-footer {
    background: #0d0d0d;
    color: #cfc6b8;
    padding: 2.8rem 0 5.5rem;
  }
  .ox-footer-grid {
    display: grid;
    gap: 2rem;
  }
  .ox-page .ox-footer-brand img {
    width: min(230px, 60vw);
    height: auto;
    filter: drop-shadow(0 1px 0 rgba(255,255,255,0.9)) drop-shadow(0 0 6px rgba(255,255,255,0.6));
  }
  .ox-footer-brand p {
    margin-top: 1rem;
    font-size: 0.9rem;
    max-width: 26rem;
  }
  .ox-footer-unit h3 {
    color: var(--ox-orange);
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }
  .ox-footer-unit p {
    font-size: 0.87rem;
    margin-top: 0.3rem;
  }
  .ox-footer-unit a:hover {
    color: #fff;
  }
  .ox-footer-social {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.8rem;
  }
  .ox-footer-social a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 11px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: var(--ox-orange);
  }
  .ox-footer-social a:hover {
    background: rgba(247, 148, 29, 0.14);
  }
  .ox-footer-bottom {
    margin-top: 2.2rem;
    padding-top: 1.4rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.78rem;
  }
  .ox-footer-bottom a {
    color: var(--ox-orange);
    font-weight: 600;
  }

  /* Floating WhatsApp */
  .ox-float-wa {
    position: fixed;
    right: 1.1rem;
    bottom: 1.1rem;
    z-index: 55;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 58px;
    height: 58px;
    border-radius: 999px;
    background: var(--ox-wa);
    color: #fff;
    box-shadow: 0 14px 34px rgba(31, 168, 85, 0.45);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    animation: ox-wa-pulse 2s ease-out infinite;
  }
  .ox-float-wa:hover {
    transform: scale(1.06);
  }
  .ox-float-wa:active {
    transform: scale(0.94);
  }
  @keyframes ox-wa-pulse {
    0% {
      box-shadow: 0 14px 34px rgba(31, 168, 85, 0.45),
        0 0 0 0 rgba(37, 211, 102, 0.48);
    }
    70% {
      box-shadow: 0 14px 34px rgba(31, 168, 85, 0.45),
        0 0 0 16px rgba(37, 211, 102, 0);
    }
    100% {
      box-shadow: 0 14px 34px rgba(31, 168, 85, 0.45),
        0 0 0 0 rgba(37, 211, 102, 0);
    }
  }

  /* Reveal animations */
  .ox-motion-ready .ox-reveal {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .ox-motion-ready .ox-reveal.is-visible {
    opacity: 1;
    transform: none;
  }

  /* Mobile: mais respiro na primeira dobra */
  @media (max-width: 639px) {
    .ox-nav {
      padding-block: 0.8rem;
    }
    .ox-hero-inner {
      gap: 2.6rem;
      padding: 3.4rem 0 3.8rem;
    }
    .ox-hero-badge {
      padding: 0.45rem 0.9rem;
      line-height: 1.35;
    }
    .ox-hero h1 {
      margin-top: 1.35rem;
    }
    .ox-hero-copy > p {
      margin-top: 1.3rem;
      line-height: 1.65;
    }
    .ox-hero-ctas {
      gap: 0.85rem 0.7rem;
      margin-top: 1.8rem;
    }
    .ox-hero-ctas .ox-button-wa {
      flex: 1 1 calc(50% - 0.35rem);
      padding-inline: 0.8rem;
    }
    .ox-hero-ctas .ox-button-ghost {
      flex-basis: auto;
      margin-top: 0.1rem;
    }
    .ox-page .ox-hero-stats {
      gap: 1.5rem 1rem;
      margin-top: 2.5rem;
    }
    .ox-hero-stats li {
      gap: 0.7rem;
    }
    .ox-hero-stats strong {
      line-height: 1.4;
    }
    .ox-hero-stats span {
      display: block;
      margin-top: 0.25rem;
      line-height: 1.55;
    }
  }

  /* ── Tablet+ ── */
  @media (min-width: 640px) {
    .ox-team {
      grid-template-columns: repeat(3, 1fr);
    }
    .ox-quotes,
    .ox-links,
    .ox-contact-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .ox-feature-grid,
    .ox-extra-services {
      grid-template-columns: repeat(2, 1fr);
    }
    .ox-services-summary {
      grid-template-columns: repeat(2, 1fr);
    }
    .ox-cat-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .ox-form-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .ox-recruit {
      grid-template-columns: 1fr auto;
      align-items: center;
    }
  }

  @media (min-width: 900px) {
    .ox-section {
      padding: 4.5rem 0;
    }
    .ox-hero-inner {
      grid-template-columns: 1.08fr 0.92fr;
      align-items: center;
      padding: 4.5rem 0 5rem;
    }
    .ox-about {
      grid-template-columns: 1fr;
    }
    .ox-feature-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .ox-fleet {
      grid-template-columns: 1.05fr 0.95fr;
    }
    .ox-service {
      grid-template-columns: 0.9fr 1.1fr;
      align-items: center;
      padding: 1.8rem;
    }
    .ox-service.is-reverse .ox-service-media {
      order: 2;
    }
    .ox-service.is-reverse .ox-service-copy {
      order: 1;
    }
    .ox-plans {
      grid-template-columns: repeat(2, 1fr);
      max-width: 56rem;
    }
    .ox-quotes {
      grid-template-columns: repeat(3, 1fr);
    }
    .ox-team {
      grid-template-columns: repeat(5, 1fr);
    }
    .ox-units {
      grid-template-columns: repeat(2, 1fr);
    }
    .ox-prematricula {
      grid-template-columns: 1fr 1.05fr;
      align-items: center;
    }
    .ox-links {
      grid-template-columns: repeat(3, 1fr);
    }
    .ox-contact-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .ox-footer-grid {
      grid-template-columns: 1.2fr 1fr 1fr;
    }
    .ox-footer {
      padding-bottom: 3rem;
    }
  }

  @media (min-width: 1080px) {
    .ox-desktop-nav {
      display: flex;
      align-items: center;
      gap: 1.15rem;
      margin-left: auto;
    }
    .ox-desktop-nav a {
      color: #ece5da;
      font-size: 0.86rem;
      font-weight: 600;
      padding: 0.4rem 0.1rem;
      border-bottom: 2px solid transparent;
      transition: color 0.15s ease, border-color 0.15s ease;
    }
    .ox-desktop-nav a:hover {
      color: var(--ox-orange);
      border-color: var(--ox-orange);
    }
    .ox-nav-cta {
      display: inline-flex;
      align-items: center;
      background: var(--ox-orange);
      color: var(--ox-black);
      font-weight: 800;
      font-size: 0.86rem;
      border-radius: 999px;
      padding: 0.55rem 1.15rem;
      transition: background 0.15s ease;
    }
    .ox-nav-cta:hover {
      background: var(--ox-orange-deep);
      color: #fff;
    }
    .ox-menu-button {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ox-page *,
    .ox-page *::before,
    .ox-page *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
