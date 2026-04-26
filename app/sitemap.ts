import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const lastModified = {
  home: new Date("2026-04-25"),
  blog: new Date("2026-04-23"),
  criacaoDeSites: new Date("2026-04-23"),
  advogados: new Date("2026-04-26"),
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
      url: `${site.url}/blog`,
      lastModified: lastModified.blog,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${site.url}/blog/criacao-de-sites-em-manaus`,
      lastModified: lastModified.criacaoDeSites,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/blog/site-para-advogados-em-manaus`,
      lastModified: lastModified.advogados,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
