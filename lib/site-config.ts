/**
 * Centralized site configuration.
 *
 * This is the single place to update the public brand name, legal entity,
 * domain, contact details, socials, and founder/license information.
 * Every page and component reads from here — nothing below should need to be
 * touched anywhere else if any of these values change.
 */

export const siteConfig = {
  // Public brand
  brandName: "MWD Soccer",
  tagline: "Football representation built on direct relationships and documented outcomes.",

  // Legal entity (shown discreetly in the footer)
  legalName: "MWD Soccer Agency LLC",

  // Domain
  domain: "mwdsocceragency.com",
  siteUrl: "https://mwdsocceragency.com",

  // Contact
  emails: {
    primary: "scouting@mwdsoccer.com",
    founder: "mike@mwdsoccer.com",
  },
  phone: "(201) 747-8162",
  location: "Hoboken, New Jersey",

  // Social links — add/remove as needed; empty array renders no social row
  social: [
    // { label: "Instagram", href: "https://instagram.com/mwdsoccer" },
    // { label: "LinkedIn", href: "https://linkedin.com/company/mwdsoccer" },
  ] as { label: string; href: string }[],

  // Founder
  founder: {
    name: "Mike Dietze",
    title: "Founder & FIFA-Licensed Football Agent",
  },

  // FIFA license
  fifa: {
    licenseNumber: "202304-869",
    licenseLabel: "FIFA Agent ID 202304-869",
  },

  // Logo paths (swap when a mark is available; text wordmark is used until then)
  logo: {
    mark: null as string | null,
  },
} as const;

export type SiteConfig = typeof siteConfig;
