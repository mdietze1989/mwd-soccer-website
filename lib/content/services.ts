export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "college-academy-to-pro",
    title: "College & Academy to Pro",
    description:
      "Evaluating realistic professional pathways, preparing player materials and approaching appropriate clubs across MLS, MLS NEXT Pro and USL.",
  },
  {
    slug: "club-placement-transfers",
    title: "Club Placement & Transfers",
    description:
      "Targeted club outreach for first contracts, loans, transfers, trials and the next move when a player has outgrown his current situation.",
  },
  {
    slug: "contract-negotiation",
    title: "Contract Negotiation",
    description:
      "Negotiating salary, term, options, bonuses and other protections directly with clubs.",
  },
  {
    slug: "career-strategy",
    title: "Career Strategy",
    description:
      "Evaluating opportunities based on playing time, sporting fit, contract structure and what each move can create next.",
  },
  {
    slug: "ongoing-player-management",
    title: "Ongoing Player Management",
    description:
      "Supporting players through club issues, contract decisions, relocation and the situations that arise during a professional season.",
  },
  {
    slug: "market-access",
    title: "Domestic & International Market Access",
    description:
      "Club relationships and licensed-agent collaboration across the United States, West Africa and Europe, supported by active TransferRoom access.",
  },
];
