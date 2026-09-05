export type Person = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
  imageAlt?: string;
};

// Core team — people directly involved in MWD Soccer's day-to-day work.
// Titles for Longo and McCluskey are intentionally kept simple and editable.
export const coreTeam: Person[] = [
  {
    slug: "mike-dietze",
    name: "Mike Dietze",
    title: "Founder & FIFA-Licensed Football Agent",
    bio: "FIFA Agent ID 202304-869. Founder of MWD Soccer, handling player representation, contract negotiation and club placement.",
    image: "/images/team/mike-dietze.jpg",
    imageAlt: "Mike Dietze, Founder of MWD Soccer",
  },
  {
    slug: "bryan-longo",
    name: "Bryan Longo",
    title: "Head of Scouting",
    bio: "Leads player identification and scouting evaluation across MWD Soccer's network.",
  },
  {
    slug: "john-mccluskey",
    name: "John McCluskey",
    title: "Strategic Advisor",
    bio: "Advises on strategy and commercial matters across MWD Soccer's work.",
  },
];

// International partners — independent, FIFA-licensed collaborators, not staff.
export const internationalPartners: Person[] = [
  {
    slug: "boly-gaye-seck-sonko",
    name: "Boly Gaye Seck Sonko",
    title: "International Partner — West Africa · FIFA-Licensed Football Agent",
    bio: "FIFA-licensed football agent based in Senegal, collaborating with MWD Soccer on player identification, representation and international opportunities across West Africa, Europe and North America.",
    image: "/images/partners/boly-sonko.jpg",
    imageAlt: "Boly Gaye Seck Sonko",
  },
  {
    slug: "paolo-maria-grimaldi",
    name: "Paolo Maria Grimaldi",
    title: "International Partner — Italy · FIFA-Licensed Football Agent",
    bio: "FIFA-licensed football agent based in Italy, collaborating with MWD Soccer on European player access, club relationships and cross-border opportunities.",
    image: "/images/partners/paolo-grimaldi.jpg",
    imageAlt: "Paolo Maria Grimaldi",
  },
];
