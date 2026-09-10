// Structured track-record data. Each entry is designed to be extended later
// (new players, new seasons) without touching page layout code.

export type ImageRef = {
  src: string;
  alt: string;
  /** CSS object-position (e.g. "62% center") — set when the subject sits off-center. */
  position?: string;
  /** "contain" for signing graphics / studio portraits where the full composition
   *  matters; defaults to "cover" for action photography. */
  fit?: "cover" | "contain";
};

export type CareerStep = {
  club: string;
  league?: string;
  period: string;
  note: string;
  status?: string; // e.g. "Term Sheet" — flags a step that is not yet an executed contract
};

export type ProfessionalDeal = {
  slug: string;
  player: string;
  metaLine: string; // Track Record subtitle, e.g. "USL Championship | 2023–2028"
  careerLine: string; // Short arrow-chain used on the Home page, e.g. "Loudoun United → New Mexico United"
  homeSummary: string; // One line used in the Home page outcome card
  summary: string; // Short summary used on the Track Record page
  role?: string;
  primaryImage: ImageRef;
  secondaryImages?: ImageRef[];
  career?: CareerStep[];
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
  image?: ImageRef;
};

// Player order: Houssou is the strongest career-management case, and Jack is
// the clearest direct analogue for the elite college audience, so he leads
// the remaining players.
export const professionalDeals: ProfessionalDeal[] = [
  {
    slug: "houssou-landry",
    player: "Houssou Landry",
    metaLine: "USL Championship | 2023–2028",
    careerLine: "Loudoun United → New Mexico United → Charleston Battery → Athletic Club Boise",
    homeSummary:
      "Three USL Championship clubs — Loudoun United, New Mexico United, Charleston Battery — with a multi-year move to Athletic Club Boise ahead of the club's 2027 launch.",
    summary:
      "Three USL Championship clubs — Loudoun United, New Mexico United, Charleston Battery — with a multi-year move to Athletic Club Boise ahead of the club's 2027 launch.",
    role: "Representation & contract negotiation",
    primaryImage: {
      src: "/images/players/landry/new-mexico-action.jpg",
      alt: "Houssou Landry in match action for New Mexico United",
    },
    secondaryImages: [
      {
        src: "/images/players/landry/loudoun-action.jpg",
        alt: "Houssou Landry in match action for Loudoun United",
      },
      {
        src: "/images/players/landry/new-mexico-united.jpg",
        alt: "Houssou Landry in action for New Mexico United",
        position: "center 58%",
      },
      {
        src: "/images/players/landry/charleston-action.jpg",
        alt: "Houssou Landry in match action for Charleston Battery",
      },
    ],
    career: [
      { club: "Loudoun United", league: "USL Championship", period: "2023", note: "First U.S. professional contract" },
      { club: "New Mexico United", league: "USL Championship", period: "2024", note: "Transfer completed for the 2024 season" },
      { club: "Charleston Battery", league: "USL Championship", period: "2025–2026", note: "Two-year agreement selected from three competing USL Championship offers" },
      { club: "Athletic Club Boise", league: "USL Championship", period: "2027–2028", note: "Two-year term sheet secured for 2027–2028", status: "Term Sheet" },
    ],
  },
  {
    slug: "jack-singer",
    player: "Jack Singer",
    metaLine: "University of Virginia → Las Vegas Lights FC | 2025",
    careerLine: "University of Virginia → Las Vegas Lights FC",
    homeSummary: "Directly from college into a guaranteed USL Championship contract for the 2025 season.",
    summary: "Moved directly from college into a guaranteed USL Championship contract for the 2025 season.",
    role: "Representation & contract negotiation",
    primaryImage: {
      src: "/images/players/singer/action.jpg",
      alt: "Jack Singer in match action for Las Vegas Lights FC",
      position: "30% center",
    },
    career: [
      { club: "Las Vegas Lights FC", league: "USL Championship", period: "2025", note: "Guaranteed professional contract" },
    ],
  },
  {
    slug: "gaoussou-samake",
    player: "Gaoussou Samake",
    metaLine: "D.C. United → Las Vegas Lights FC | 2022–2025",
    careerLine: "D.C. United → Las Vegas Lights FC",
    homeSummary: "Two-year contract with D.C. United in MLS, followed by a two-year contract with Las Vegas Lights in USL Championship.",
    summary:
      "Two-year contract with D.C. United in MLS, followed by a two-year contract with Las Vegas Lights in USL Championship.",
    role: "Representation & contract negotiation",
    primaryImage: {
      src: "/images/players/samake/dc-united-action.jpg",
      alt: "Gaoussou Samake in match action for D.C. United against Philadelphia Union",
      position: "65% center",
    },
    career: [
      { club: "D.C. United", league: "MLS", period: "2022", note: "Two-year professional contract with options for additional years" },
      { club: "Las Vegas Lights FC", league: "USL Championship", period: "2024–2025", note: "Two-year USL Championship contract" },
    ],
  },
  {
    slug: "luka-malesevic",
    player: "Luka Malesevic",
    metaLine: "Rio Grande Valley FC Toros → Monterey Bay FC | 2022–2026",
    careerLine: "Rio Grande Valley FC Toros → Monterey Bay FC",
    homeSummary: "First professional contract in 2022, followed by a move to Monterey Bay FC for 2026.",
    summary:
      "First professional contract with Rio Grande Valley FC in 2022, followed by a move to Monterey Bay FC for 2026.",
    role: "Representation & contract negotiation",
    primaryImage: {
      src: "/images/players/malesevic/action.jpg",
      alt: "Luka Malesevic in match action for Monterey Bay FC",
    },
    career: [
      { club: "Rio Grande Valley FC Toros", league: "USL Championship", period: "2022", note: "First professional contract" },
      { club: "Monterey Bay FC", league: "USL Championship", period: "2026", note: "Professional contract" },
    ],
  },
  {
    slug: "abdoul-zanne",
    player: "Abdoul Zanne",
    metaLine: "ASEC Mimosas → North Texas SC | 2024",
    careerLine: "ASEC Mimosas → North Texas SC",
    homeSummary: "A 2024 loan move to North Texas SC in MLS NEXT Pro.",
    summary: "A 2024 loan move to North Texas SC in MLS NEXT Pro.",
    role: "Representation & club placement",
    primaryImage: {
      src: "/images/players/zanne/action.jpg",
      alt: "Abdoul Zanne in match action for North Texas SC",
    },
    career: [
      { club: "North Texas SC", league: "MLS NEXT Pro", period: "2024", note: "Loan move from ASEC Mimosas" },
    ],
  },
];

export const clubOpportunities: ClubOpportunity[] = [
  {
    slug: "kairou-amoustapha",
    player: "Kairou Amoustapha",
    program: "FC Etzella Ettelbruck | Luxembourg",
    detail: "U.S. market representation.",
    image: {
      src: "/images/players/amoustapha/action.jpg",
      alt: "Kairou Amoustapha in match action for Cancún FC",
    },
  },
  {
    slug: "delasi-batse",
    player: "Delasi Batse",
    program: "UNC Charlotte",
    detail: "Received a New York Red Bulls preseason invitation in 2022.",
    image: {
      src: "/images/players/batse/portrait.jpg",
      alt: "Delasi Batse portrait",
    },
  },
  {
    slug: "sam-gomez",
    player: "Sam Gomez",
    program: "2020 MLS Draft",
    detail: "Shortlisted for Nashville SC's 2020 MLS Draft class.",
    image: {
      src: "/images/players/gomez/portrait.jpg",
      alt: "Sam Gomez portrait",
    },
  },
  {
    slug: "kwadwo-amoako",
    player: "Kwadwo Amoako",
    program: "Ghana Premier League — Ashanti Gold, Medeama SC & Aduana FC",
    detail: "Called into Ghana's national team camp for 2021 AFCON qualifiers and secured a trial with FC Dila Gori in Georgia.",
    image: {
      src: "/images/players/amoako/portrait.jpg",
      alt: "Kwadwo Amoako in Ghana national team training kit",
    },
  },
];

// TransferRoom is a professional credential/tool, not a player outcome — shown
// as a compact module on the About or International Network page.
export const transferRoomCredential = {
  title: "TransferRoom Access",
  description:
    "Active agent access to live club requirements and direct communication with decision-makers across international markets.",
};

export const authorizations: Authorization[] = [
  {
    slug: "edinson-cavani",
    player: "Edinson Cavani",
    scope: "Uruguayan International",
    detail: "Presented directly to MLS clubs.",
  },
  {
    slug: "marco-imperiale",
    player: "Marco Imperiale",
    scope: "Serie B Italy",
    detail: "Presented directly to MLS clubs league-wide.",
  },
  {
    slug: "maksim-samorodov",
    player: "Maksim Samorodov",
    scope: "Russian Premier League",
    detail: "Presented directly to MLS clubs.",
  },
];
