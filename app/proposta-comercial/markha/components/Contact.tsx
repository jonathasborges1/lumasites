"use client";

import { useState } from "react";

const CONTACT_INFO = [
  {
    label: "Telefone",
    value: "(12) 3946-8433",
    href: "tel:+551239468433",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    value: "markha@markha.com.br",
    href: "mailto:markha@markha.com.br",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Endereço",
    value: "Av. Heitor Villa Lobos, 804 — São José dos Campos, SP",
    href: "https://maps.google.com/?q=Av.+Heitor+Villa+Lobos,+804,+São+José+dos+Campos",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Horário de atendimento",
    value: "Segunda a sexta, das 9h às 18h",
    href: undefined,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const OFFICE_IMG =
  "https://markha.com.br/wp-content/uploads/2023/07/foto-markha3.jpg";

type FormData = {
  name: string;
  phone: string;
  email: string;
  need: string;
};

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    need: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const waMessage = `Olá! Meu nome é ${form.name || "___"}.${
    form.need ? ` Tenho interesse em: ${form.need}.` : ""
  }${form.phone ? ` Telefone: ${form.phone}.` : ""}`;
  const waUrl = `https://wa.me/551239468433?text=${encodeURIComponent(waMessage)}`;

  const inputStyle = {
    borderColor: "#E2E8F0",
    color: "#1A1A2E",
    backgroundColor: "#FAFBFF",
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#162070";
    e.target.style.outline = "none";
    e.target.style.boxShadow = "0 0 0 3px rgba(22,32,112,0.08)";
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#E2E8F0";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="contato"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Form */}
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
                Fale conosco
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: "#1A1A2E" }}
            >
              Solicite sua cotação
            </h2>
            <p className="text-base mb-8" style={{ color: "#5A6080" }}>
              Preencha o formulário e entraremos em contato pelo WhatsApp em
              até 2h em dias úteis.
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "#1A1A2E" }}
                >
                  Nome completo
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-xl border text-sm transition-all"
                  style={inputStyle}
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: "#1A1A2E" }}
                  >
                    WhatsApp / Telefone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    placeholder="(12) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border text-sm transition-all"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: "#1A1A2E" }}
                  >
                    E-mail <span style={{ color: "#9CA3AF" }}>(opcional)</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border text-sm transition-all"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Need */}
              <div>
                <label
                  htmlFor="contact-need"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "#1A1A2E" }}
                >
                  O que você precisa proteger?
                </label>
                <select
                  id="contact-need"
                  name="need"
                  value={form.need}
                  onChange={handleChange}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                  className="w-full px-4 py-3 rounded-xl border text-sm appearance-none transition-all"
                  style={{
                    ...inputStyle,
                    color: form.need ? "#1A1A2E" : "#9CA3AF",
                  }}
                >
                  <option value="">Selecione uma opção</option>
                  <option>Seguro de Vida</option>
                  <option>Seguro Auto</option>
                  <option>Seguro Residencial</option>
                  <option>Plano de Saúde — Pessoal / Familiar</option>
                  <option>Plano de Saúde — Empresarial</option>
                  <option>Consórcio de Imóvel</option>
                  <option>Consórcio de Veículo</option>
                  <option>Seguro Empresarial / D&O / RC</option>
                  <option>Outros</option>
                </select>
              </div>

              {/* Submit */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full px-6 py-4 text-sm font-semibold rounded-xl text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#162070" }}
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Enviar pelo WhatsApp
              </a>

              <p
                className="text-center text-xs"
                style={{ color: "#9CA3AF" }}
              >
                Resposta em até 2h em dias úteis · Sem compromisso
              </p>
            </form>
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            {/* Office photo */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={OFFICE_IMG}
                alt="Escritório Markha Consultoria em Seguros"
                className="w-full h-52 object-cover"
              />
            </div>

            {/* Contact details */}
            <div
              className="rounded-2xl p-6 border space-y-5"
              style={{ borderColor: "#E2E8F0", backgroundColor: "#FAFBFF" }}
            >
              {CONTACT_INFO.map(({ label, value, href, icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EEF1FC", color: "#162070" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium mb-0.5"
                      style={{ color: "#9CA3AF" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm font-medium transition-colors hover:underline"
                        style={{ color: "#1A1A2E" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#1A1A2E" }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E2E8F0" }}>
              <div className="px-4 pt-4 pb-2 flex items-center gap-2" style={{ backgroundColor: "#FAFBFF" }}>
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: "#162070" }} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: "#5A6080" }}>
                  Como nos encontrar
                </span>
              </div>
              <iframe
                title="Localização da Markha Consultoria em Seguros"
                src="https://maps.google.com/maps?q=Av.+Heitor+Villa+Lobos,+804,+São+José+dos+Campos,+SP,+Brasil&output=embed&z=16"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Mapa com a localização da Markha em São José dos Campos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
