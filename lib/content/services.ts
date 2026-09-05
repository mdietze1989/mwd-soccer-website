export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "player-representation",
    title: "Player Representation",
    description:
      "Direct representation for professional and aspiring professional players, from first conversation through contract signing.",
  },
  {
    slug: "contract-negotiation",
    title: "Contract Negotiation",
    description:
      "Negotiating terms, renewals and extensions directly with clubs — including against competing offers from multiple teams.",
  },
  {
    slug: "club-placement-transfers",
    title: "Club Placement & Transfers",
    description:
      "Identifying and securing moves between clubs and leagues, including loans, transfers and trial-to-contract pathways.",
  },
  {
    slug: "career-strategy",
    title: "Career Strategy",
    description:
      "Planning next steps around season timing, league level and club fit, based on where a player's opportunities actually are.",
  },
  {
    slug: "market-access",
    title: "Domestic & International Market Access",
    description:
      "Direct relationships with club executives, sporting directors, coaches and licensed agents across the United States, West Africa and Europe.",
  },
  {
    slug: "scouting-identification",
    title: "Scouting & Player Identification",
    description:
      "Evaluating and tracking players through a network of scouts and collaborators, and matching them to realistic club opportunities.",
  },
];
