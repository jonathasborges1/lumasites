import type { ProposalMeta } from "../types";
import { fernandaCoimbra } from "./fernandacoimbra.data";

const proposalMeta: ProposalMeta = {
  clientName: fernandaCoimbra.name,
  tagline: "Direito Médico e da Saúde",
  category: "Jurídico",
  categoryColor: "#A77A2D",
  highlight: `${fernandaCoimbra.oab} · Pacientes e profissionais da saúde`,
  location: fernandaCoimbra.location,
  createdAt: "2026-07-23",
  accentColor: "#0A192F",
};

export default proposalMeta;
