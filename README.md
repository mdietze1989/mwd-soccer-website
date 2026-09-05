# MWD Soccer — Website

Production Next.js (App Router) site for MWD Soccer Agency.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Self-hosted fonts (Fraunces, Public Sans via `@fontsource`) — no runtime dependency on Google Fonts
- No database or backend required for the initial version

## Structure

- `lib/site-config.ts` — **the single file to edit** for brand name, legal entity, domain, emails, phone, socials, founder, and FIFA license. Update this file for a future rebrand (e.g. to "Dietze Football") instead of editing pages.
- `lib/content/` — structured content: `track-record.ts` (deals, trials, authorizations), `people.ts` (team + international partners), `services.ts`.
- `app/` — one folder per route (`about`, `track-record`, `services`, `international-network`, `contact`).
- `components/` — shared UI (nav, footer, contact form, buttons).
- `public/images/` — optimized player, team and partner photography.

## Adding or updating track-record content

Add a new entry to the relevant array in `lib/content/track-record.ts` (or `people.ts` for team/partners) — no page code needs to change. Drop new images into `public/images/players/<slug>/` and reference them by path.

## Contact form

There is no email-sending service connected yet. The contact form builds a `mailto:` link with the submitted details and opens the visitor's email client, addressed to the primary inbox in `site-config.ts`. This is functional without a backend, but if you'd like real form submissions captured server-side (e.g. via Resend, Formspree, or a database), that needs to be wired up before relying on it for lead capture.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Deployment

See `DEPLOYMENT.md` for the full GitHub → Vercel → domain handoff.
