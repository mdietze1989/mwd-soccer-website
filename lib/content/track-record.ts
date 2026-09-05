// Structured track-record data. Each entry is designed to be extended later
// (new players, new seasons) without touching page layout code.

export type ImageRef = {
  src: string;
  alt: string;
};

export type CareerStep = {
  club: string;
  league?: string;
  period: string;
  note: string;
};

export type ProfessionalDeal = {
  slug: string;
  player: string;
  nationality: string;
  position?: string;
  club: string;
  league: string;
  season: string;
  summary: string;
  role?: string;
  primaryImage: ImageRef;
  secondaryImages?: ImageRef[];
  career?: CareerStep[];
  current: boolean;
};

export type ClubOpportunity = {
  slug: string;
  player: string;
  program: string; // e.g. "UNC Charlotte — 2022 MLS Draft Prospect"
  detail: string;
  image?: ImageRef;
};

export type Authorization = {
  slug: string;
  player: string;
  scope: string; // e.g. "MLS Authorization"
  detail: string;
};

export const professionalDeals: ProfessionalDeal[] = [
  {
    slug: "houssou-landry",
    player: "Houssou Landry",
    nationality: "Ivory Coast",
    position: "Midfielder",
    club: "Charleston Battery",
    league: "USL Championship",
    season: "2025–2026",
    summary:
      "Four contracts across three clubs over more than three years, including renewals and a paid transfer. Landry signed with New Mexico United for the 2024 season, then a two-year agreement with Charleston Battery covering 2025 and 2026, negotiated against three competing USL offers. A two-year term sheet with Athletic Club Boise for the 2027–2028 seasons, ahead of the club's USL Championship entry, followed.",
    role: "Representation & contract negotiation",
    primaryImage: {
      src: "/images/players/landry/charleston-signing.jpg",
      alt: "Houssou Landry signing announcement graphic for Charleston Battery",
    },
    secondaryImages: [
      {
        src: "/images/players/landry/new-mexico-united.jpg",
        alt: "Houssou Landry in action for New Mexico United",
      },
      {
        src: "/images/players/landry/charleston-action.jpg",
        alt: "Houssou Landry in match action for Charleston Battery",
      },
    ],
    career: [
      { club: "ASI Abengourou", period: "Ivory Coast", note: "Development" },
      { club: "Loudoun United", league: "USL Championship", period: "2023", note: "First U.S. professional move" },
      { club: "New Mexico United", league: "USL Championship", period: "2024", note: "Signed for the 2024 season" },
      { club: "Charleston Battery", league: "USL Championship", period: "2025–2026", note: "Two-year agreement, negotiated against three competing offers" },
      { club: "Athletic Club Boise", league: "USL Championship", period: "2027–2028", note: "Two-year term sheet ahead of the club's USL Championship entry" },
    ],
    current: true,
  },
  {
    slug: "luka-malesevic",
    player: "Luka Malesevic",
    nationality: "United States / Montenegro",
    club: "Monterey Bay FC",
    league: "USL Championship",
    season: "2026",
    summary:
      "Professional deal with Rio Grande Valley FC Toros in 2022, followed by a move to Monterey Bay FC in 2026. Dual U.S./Montenegro national.",
    role: "Representation & contract negotiation",
    primaryImage: {
      src: "/images/players/malesevic/monterey-bay-action.jpg",
      alt: "Luka Malesevic in match action for Monterey Bay FC",
    },
    career: [
      { club: "Rio Grande Valley FC Toros", league: "USL Championship", period: "2022", note: "Professional debut deal" },
      { club: "Monterey Bay FC", league: "USL Championship", period: "2026", note: "Current club" },
    ],
    current: true,
  },
  {
    slug: "gaoussou-samake",
    player: "Gaoussou Samake",
    nationality: "Mali",
    club: "Las Vegas Lights FC",
    league: "USL Championship",
    season: "2024–2025",
    summary:
      "Played in MLS before moving into the USL Championship. Signed a two-year professional contract with Las Vegas Lights covering the 2024 and 2025 seasons.",
    role: "Representation & contract negotiation",
    primaryImage: {
      src: "/images/players/samake/las-vegas-action.jpg",
      alt: "Gaoussou Samake in match action for Las Vegas Lights FC",
    },
    current: true,
  },
  {
    slug: "jack-singer",
    player: "Jack Singer",
    nationality: "United States",
    club: "Las Vegas Lights FC",
    league: "USL Championship",
    season: "2025",
    summary:
      "Moved directly from the University of Virginia into a guaranteed professional contract with Las Vegas Lights for the 2025 season.",
    role: "Representation & contract negotiation",
    primaryImage: {
      src: "/images/players/singer/portrait.jpg",
      alt: "Jack Singer portrait in Las Vegas Lights FC kit",
    },
    secondaryImages: [
      {
        src: "/images/players/singer/action.jpg",
        alt: "Jack Singer in match action for Las Vegas Lights FC",
      },
    ],
    career: [
      { club: "University of Virginia", period: "College", note: "NCAA Division I" },
      { club: "Las Vegas Lights FC", league: "USL Championship", period: "2025", note: "Guaranteed professional contract" },
    ],
    current: true,
  },
  {
    slug: "abdoul-zanne",
    player: "Abdoul Zanne",
    nationality: "Ivory Coast",
    club: "North Texas SC",
    league: "MLS NEXT Pro",
    season: "2024",
    summary:
      "Moved on loan from ASEC Mimosas to North Texas SC — FC Dallas's second team — for the 2024 season. Also generated written offers from New England Revolution II and Rhode Island FC.",
    role: "Representation & club placement",
    primaryImage: {
      src: "/images/players/zanne/north-texas-sc.jpg",
      alt: "Abdoul Zanne portrait in North Texas SC kit",
    },
    current: true,
  },
];

export const clubOpportunities: ClubOpportunity[] = [
  {
    slug: "delasi-batse",
    player: "Delasi Batse",
    program: "UNC Charlotte — 2022 MLS Draft Prospect",
    detail: "Received a New York Red Bulls preseason invitation in 2022.",
  },
  {
    slug: "sam-gomez",
    player: "Sam Gomez",
    program: "2020 MLS Draft Prospect",
    detail: "Named to Nashville SC's MLS Draft shortlist in 2020.",
    image: {
      src: "/images/players/gomez/portrait.jpg",
      alt: "Sam Gomez portrait",
    },
  },
];

export const globalClubAccess = {
  title: "TransferRoom",
  description:
    "Active agent access to TransferRoom, providing visibility into live club requirements and direct contact with club decision-makers across the global transfer market. This extends MWD Soccer's reach beyond a traditional personal network and supports identifying international opportunities as they open.",
};

export const authorizations: Authorization[] = [
  {
    slug: "edinson-cavani",
    player: "Edinson Cavani",
    scope: "MLS Authorization",
    detail:
      "Received direct authorization to present Edinson Cavani to Austin FC, D.C. United and New England Revolution during the 2026 MLS Secondary Transfer Window.",
  },
  {
    slug: "marco-imperiale",
    player: "Marco Imperiale",
    scope: "Serie B Club Mandate",
    detail:
      "Jointly authorized by Carrarese Calcio 1908, together with FIFA-licensed agent Paolo Maria Grimaldi, to assess interest from MLS and affiliated clubs.",
  },
  {
    slug: "maksim-samorodov",
    player: "Maksim Samorodov",
    scope: "International Player Authorization",
    detail:
      "Authorized as co-agent to present Kazakhstan international and Russian Premier League winger Maksim Samorodov for specified MLS opportunities, including Columbus Crew and San Jose Earthquakes.",
  },
];
