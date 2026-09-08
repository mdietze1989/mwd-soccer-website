export type Person = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
  imageAlt?: string;
};

// Core team — people directly involved in MWD Football Management's day-to-day work.
//
// Bryan Longo and John McCluskey's photos are small, low-resolution source
// files (pulled from an older site version) — candidates for a future
// high-resolution replacement when available. Do not upscale/sharpen them.
export const coreTeam: Person[] = [
  {
    slug: "mike-dietze",
    name: "Mike Dietze",
    title: "Founder & FIFA-Licensed Agent",
    bio: "Founder of MWD Football Management, handling player representation, contract negotiation and club placement.",
    image: "/images/team/mike-dietze.jpg",
    imageAlt: "Mike Dietze, Founder of MWD Football Management",
  },
  {
    slug: "bryan-longo",
    name: "Bryan Longo",
    title: "Head of Talent Acquisition",
    bio: "Leads player identification, video review and scouting coordination across MWD's domestic and international network.",
    image: "/images/team/bryan-longo.jpg", // low-res source — replace when a higher-resolution photo is available
    imageAlt: "Bryan Longo, Head of Talent Acquisition at MWD Football Management",
  },
  {
    slug: "john-mccluskey",
    name: "John McCluskey",
    title: "Strategic Advisor",
    bio: "Advises MWD on commercial strategy, marketing and player brand development.",
    image: "/images/team/john-mccluskey.jpg", // low-res source — replace when a higher-resolution photo is available
    imageAlt: "John McCluskey, Strategic Advisor at MWD Football Management",
  },
];

// International partners — independent, FIFA-licensed collaborators, not staff.
//
// Boly Gaye Seck Sonko and Paolo Maria Grimaldi's photos are also candidates
// for a future high-resolution replacement — keep as-is for now.
export const internationalPartners: Person[] = [
  {
    slug: "boly-gaye-seck-sonko",
    name: "Boly Gaye Seck Sonko",
    title: "FIFA-Licensed Agent | Senegal and West Africa",
    bio: "Based in Senegal, Boly collaborates with MWD on player identification, representation and club opportunities connecting West Africa with North American and European markets.",
    image: "/images/partners/boly-sonko.jpg", // low-res source — replace when a higher-resolution photo is available
    imageAlt: "Boly Gaye Seck Sonko",
  },
  {
    slug: "paolo-maria-grimaldi",
    name: "Paolo Maria Grimaldi",
    title: "FIFA-Licensed Agent | Italy and Europe",
    bio: "Based in Italy, Paolo collaborates with MWD on European player access, club relationships and cross-border assignments, including matters reflected in MWD's Track Record.",
    image: "/images/partners/paolo-grimaldi.jpg", // low-res source — replace when a higher-resolution photo is available
    imageAlt: "Paolo Maria Grimaldi",
  },
];
