import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel } from "@/components/ui";
import {
  professionalDeals,
  clubOpportunities,
  authorizations,
  globalClubAccess,
} from "@/lib/content/track-record";

export const metadata: Metadata = {
  title: "Track Record",
  description:
    "MWD Soccer's documented track record: professional contracts and transfers, trials and draft interest, international authorizations, and global club access.",
};

const categories = [
  { id: "contracts", label: "Professional Contracts & Transfers" },
  { id: "opportunities", label: "Trials, Draft Interest & Club Opportunities" },
  { id: "authorizations", label: "International Authorizations & Assignments" },
  { id: "global-access", label: "Global Club Access" },
];

export default function TrackRecordPage() {
  const landry = professionalDeals.find((d) => d.slug === "houssou-landry")!;
  const otherDeals = professionalDeals.filter((d) => d.slug !== "houssou-landry");

  return (
    <>
      <section className="border-b hairline-dark py-20">
        <Container>
          <SectionLabel>Track Record</SectionLabel>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-paper md:text-5xl">
            Specific players, clubs and outcomes — not marketing claims.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/75">
            Every item below is a documented deal, opportunity or
            authorization. Current representation, completed contracts,
            trials and club-specific authorizations are kept clearly
            distinct.
          </p>

          <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t hairline-dark pt-6">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="text-sm text-muted-dark hover:text-accent"
              >
                {c.label}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {/* Professional Contracts & Transfers */}
      <section id="contracts" className="scroll-mt-20 border-b hairline-dark py-20">
        <Container>
          <h2 className="font-display text-3xl text-paper">
            Professional Contracts &amp; Transfers
          </h2>

          {/* Landry career progression — genuine sequence, numbered */}
          <div className="mt-14">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,340px)_1fr]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-2">
                <Image
                  src={landry.primaryImage.src}
                  alt={landry.primaryImage.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 340px, 90vw"
                />
              </div>
              <div>
                <p className="text-sm text-muted-dark">
                  {landry.club} &middot; {landry.league} &middot; {landry.season}
                </p>
                <h3 className="mt-1 font-display text-2xl text-paper">
                  {landry.player}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-paper/85">
                  {landry.summary}
                </p>

                <ol className="mt-8 space-y-5 border-t hairline-dark pt-6">
                  {landry.career?.map((step, i) => (
                    <li key={step.club} className="flex gap-4">
                      <span className="font-display text-sm text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-paper">
                          {step.club}
                          {step.league ? (
                            <span className="text-muted-dark"> &middot; {step.league}</span>
                          ) : null}
                          <span className="text-muted-dark"> &middot; {step.period}</span>
                        </p>
                        <p className="mt-1 text-sm text-muted-dark">{step.note}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                {landry.secondaryImages && landry.secondaryImages.length > 0 && (
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {landry.secondaryImages.map((img) => (
                      <div key={img.src} className="relative aspect-[4/3] overflow-hidden bg-ink-2">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 23vw, 46vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Other professional deals */}
          <div className="mt-20 divide-y hairline-dark border-t hairline-dark">
            {otherDeals.map((deal) => (
              <div
                key={deal.slug}
                className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[220px_1fr] md:gap-10"
              >
                <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden bg-ink-2">
                  <Image
                    src={deal.primaryImage.src}
                    alt={deal.primaryImage.alt}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-dark">
                    {deal.club} &middot; {deal.league} &middot; {deal.season}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-paper">
                    {deal.player}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-paper/85">
                    {deal.summary}
                  </p>
                  {deal.secondaryImages && deal.secondaryImages.length > 0 && (
                    <div className="mt-6 flex gap-4">
                      {deal.secondaryImages.map((img) => (
                        <div
                          key={img.src}
                          className="relative aspect-[4/3] w-40 overflow-hidden bg-ink-2"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="160px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trials, Draft Interest & Club Opportunities */}
      <section id="opportunities" className="scroll-mt-20 border-b hairline-dark bg-ink-2 py-20">
        <Container>
          <h2 className="font-display text-3xl text-paper">
            Trials, Draft Interest &amp; Club Opportunities
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-dark">
            Not every opportunity results in a signed contract. These are
            documented, real steps in a player&apos;s professional path.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {clubOpportunities.map((o) => (
              <div key={o.slug} className="flex gap-5 border hairline-dark p-6">
                {o.image ? (
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-ink">
                    <Image
                      src={o.image.src}
                      alt={o.image.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ) : (
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border hairline-dark font-display text-lg text-accent">
                    {o.player
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <div>
                  <p className="text-sm text-muted-dark">{o.program}</p>
                  <h3 className="mt-1 font-display text-xl text-paper">{o.player}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/80">{o.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* International Authorizations & Assignments */}
      <section id="authorizations" className="scroll-mt-20 border-b hairline-dark py-20">
        <Container>
          <h2 className="font-display text-3xl text-paper">
            International Authorizations &amp; Assignments
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-dark">
            Precise scopes, not blanket representation claims. Where an
            authorization is joint or club-specific, that is stated directly.
          </p>

          <div className="mt-12 divide-y hairline-dark border-t hairline-dark">
            {authorizations.map((a) => (
              <div key={a.slug} className="grid grid-cols-1 gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-10">
                <div>
                  <p className="text-sm text-accent">{a.scope}</p>
                  <h3 className="mt-1 font-display text-xl text-paper">{a.player}</h3>
                </div>
                <p className="text-[15px] leading-relaxed text-paper/85">{a.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Club Access */}
      <section id="global-access" className="scroll-mt-20 py-20">
        <Container>
          <h2 className="font-display text-3xl text-paper">Global Club Access</h2>
          <div className="mt-10 max-w-2xl border hairline-dark p-8">
            <h3 className="font-display text-xl text-paper">{globalClubAccess.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-paper/85">
              {globalClubAccess.description}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
