import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { articleDates as medicoEmManausDates } from "@/app/blog/site-para-medico-em-manaus/content";
import { articleDates as quantoCustaDates } from "@/app/blog/quanto-custa-um-site-em-manaus/content";
import { articleDates as comoAparecerNoGoogleDates } from "@/app/blog/como-aparecer-no-google-em-manaus/content";
import { articleDates as advogadosDates } from "@/app/blog/site-para-advogados-em-manaus/content";
import { articleDates as psicologoDates } from "@/app/blog/site-para-psicologo-em-manaus/content";
import { articleDates as dentistaDates } from "@/app/blog/site-para-dentista-em-manaus/content";
import { articleDates as personalTrainerDates } from "@/app/blog/site-para-personal-trainer-em-manaus/content";

const lastModified = {
  home: new Date("2026-04-25"),
  portfolio: new Date("2026-05-30"),
  siteInstitucionalManaus: new Date("2026-04-27"),
  landingPageManaus: new Date("2026-05-16"),
  blog: new Date("2026-05-12"),
  medicoEmManaus: new Date(medicoEmManausDates.updatedAt ?? medicoEmManausDates.publishedAt),
  quantoCusta: new Date(quantoCustaDates.updatedAt ?? quantoCustaDates.publishedAt),
  comoAparecerNoGoogle: new Date(
    comoAparecerNoGoogleDates.updatedAt ?? comoAparecerNoGoogleDates.publishedAt,
  ),
  advogados: new Date(advogadosDates.updatedAt ?? advogadosDates.publishedAt),
  psicologo: new Date(psicologoDates.updatedAt ?? psicologoDates.publishedAt),
  dentista: new Date(dentistaDates.updatedAt ?? dentistaDates.publishedAt),
  personalTrainer: new Date(personalTrainerDates.updatedAt ?? personalTrainerDates.publishedAt),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: lastModified.home,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/proposta-comercial`,
      lastModified: lastModified.portfolio,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/blog`,
      lastModified: lastModified.blog,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${site.url}/site-institucional-manaus`,
      lastModified: lastModified.siteInstitucionalManaus,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/landing-page-manaus`,
      lastModified: lastModified.landingPageManaus,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/blog/site-para-medico-em-manaus`,
      lastModified: lastModified.medicoEmManaus,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/blog/quanto-custa-um-site-em-manaus`,
      lastModified: lastModified.quantoCusta,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/blog/como-aparecer-no-google-em-manaus`,
      lastModified: lastModified.comoAparecerNoGoogle,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/blog/site-para-advogados-em-manaus`,
      lastModified: lastModified.advogados,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/blog/site-para-psicologo-em-manaus`,
      lastModified: lastModified.psicologo,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/blog/site-para-personal-trainer-em-manaus`,
      lastModified: lastModified.personalTrainer,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/blog/site-para-dentista-em-manaus`,
      lastModified: lastModified.dentista,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
