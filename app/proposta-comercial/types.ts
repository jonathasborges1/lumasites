export type ProposalMeta = {
  clientName: string;
  tagline: string;
  category: string;
  categoryColor: string;
  highlight: string;
  location: string;
  createdAt: string; // "YYYY-MM-DD"
  accentColor: string;
};

export type ProposalWithSlug = ProposalMeta & { slug: string };
