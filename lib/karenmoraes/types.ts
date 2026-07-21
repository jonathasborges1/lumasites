export type ArticleSource = { type: "gdoc"; url: string } | { type: "docx" };

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  cover?: string;
  source: ArticleSource;
};

export type Article = ArticleFrontmatter & { content: string };
