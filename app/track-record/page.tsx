import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel } from "@/components/ui";
import {
  professionalDeals,
  clubOpportunities,
  authorizations,
} from "@/lib/content/track-record";

export const metadata: Metadata = {
  title: "Track Record",
  description:
    "MWD Football Management's track record: professional contracts and transfers, trials and draft opportunities, and international mandates and authorizations.",
};

const categories = [
  { id: "contracts", label: "Player Contracts & Transfers" },
  { id: "opportunities", label: "Trials & Professional Opportunities" },
  { id: "authorizations", label: "International Mandates" },
];

function Timeline({ steps }: { steps: { club: string; league?: string; period: string; note: string; status?: string }[] }) {
  return (
    <ol className="mt-6 space-y-4 border-t hairline-dark pt-6">
      {steps.map((step, i) => (
        <li key={step.club} className="flex gap-4">
          <span className="font-display text-sm text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-paper">
              <span>
                {step.club}
                {step.league ? (
                  <span className="text-muted-dark"> &middot; {step.league}</span>
                ) : null}
                <span className="text-muted-dark"> &middot; {step.period}</span>
              </span>
              {step.status && (
                <span className="rounded-full border border-accent/50 px-2 py-0.5 text-[11px] uppercase tracking-wide text-accent">
                  {step.status}
                </span>
              )}
            </p>
            <p className="mt-1 text-sm text-muted-dark">{step.note}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function TrackRecordPage() {
  const landry = professionalDeals.find((d) => d.slug === "houssou-landry")!;
  const otherDeals = professionalDeals.filter((d) => d.slug !== "houssou-landry");

  return (
    <>
      <section className="border-b hairline-dark py-20">
        <Container>
          <SectionLabel>Track Record</SectionLabel>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-paper md:text-5xl">
            Your first professional contract is the beginning — not the destination.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
            Contracts, transfers, trials and club opportunities completed
            across the U.S. and international game.
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

      {/* Player Contracts & Transfers */}
      <section id="contracts" className="scroll-mt-20 border-b hairline-dark py-20">
        <Container>
          <h2 className="font-display text-3xl text-paper">
            Player Contracts &amp; Transfers
          </h2>

          {/* Landry — featured, strongest career-management case */}
          <div className="mt-14">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,340px)_1fr]">
              <div>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-2">
                  <Image
                    src={landry.primaryImage.src}
                    alt={landry.primaryImage.alt}
                    fill
                    className={landry.primaryImage.fit === "contain" ? "object-contain" : "object-cover"}
                    sizes="(min-width: 768px) 340px, 90vw"
                  />
                </div>
                {/* Loudoun + New Mexico as portrait thumbnails (their source photos are
                    tall action shots); Charleston action stays landscape below — each
                    keeps its native shape instead of forcing one destructive crop. */}
                {landry.secondaryImages && landry.secondaryImages.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {landry.secondaryImages.slice(0, 2).map((img) => (
                      <div key={img.src} className="relative aspect-[3/4] overflow-hidden bg-ink-2">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className={img.fit === "contain" ? "object-contain" : "object-cover"}
                          style={img.position ? { objectPosition: img.position } : undefined}
                          sizes="(min-width: 768px) 170px, 45vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
                {landry.secondaryImages && landry.secondaryImages.length > 2 && (
                  <div className="mt-4 relative aspect-[4/3] overflow-hidden bg-ink-2">
                    <Image
                      src={landry.secondaryImages[2].src}
                      alt={landry.secondaryImages[2].alt}
                      fill
                      className={landry.secondaryImages[2].fit === "contain" ? "object-contain" : "object-cover"}
                      style={landry.secondaryImages[2].position ? { objectPosition: landry.secondaryImages[2].position } : undefined}
                      sizes="(min-width: 768px) 340px, 90vw"
                    />
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm text-muted-dark">{landry.metaLine}</p>
                <h3 className="mt-1 font-display text-2xl text-paper">
                  {landry.player}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-paper/92">
                  {landry.summary}
                </p>
                {landry.career && <Timeline steps={landry.career} />}
              </div>
            </div>
          </div>

          {/* Other players */}
          <div className="mt-20 divide-y hairline-dark border-t hairline-dark">
            {otherDeals.map((deal) => (
              <div
                key={deal.slug}
                className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[220px_1fr] md:gap-10"
              >
                <div>
                  <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden bg-ink-2">
                    <Image
                      src={deal.primaryImage.src}
                      alt={deal.primaryImage.alt}
                      fill
                      className={deal.primaryImage.fit === "contain" ? "object-contain" : "object-cover"}
                      style={deal.primaryImage.position ? { objectPosition: deal.primaryImage.position } : undefined}
                      sizes="220px"
                    />
                  </div>
                  {deal.secondaryImages && deal.secondaryImages.length > 0 && (
                    <div className="mt-4 flex flex-col gap-4">
                      {deal.secondaryImages.map((img) => (
                        <div
                          key={img.src}
                          className="relative aspect-[4/3] w-full max-w-[220px] overflow-hidden bg-ink-2"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={img.fit === "contain" ? "object-contain" : "object-cover"}
                            style={img.position ? { objectPosition: img.position } : undefined}
                            sizes="220px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-dark">{deal.metaLine}</p>
                  <h3 className="mt-1 font-display text-2xl text-paper">
                    {deal.player}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-paper/92">
                    {deal.summary}
                  </p>
                  {deal.career && deal.career.length > 0 && <Timeline steps={deal.career} />}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trials & Professional Opportunities */}
      <section id="opportunities" className="scroll-mt-20 border-b hairline-dark bg-ink-2 py-20">
        <Container>
          <h2 className="font-display text-3xl text-paper">
            Professional Trials &amp; Draft Opportunities
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-dark">
            Club invitations and formal shortlists secured for MWD players.
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
                  <p className="mt-2 text-sm leading-relaxed text-paper/88">{o.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* International Mandates & Authorizations */}
      <section id="authorizations" className="scroll-mt-20 py-20">
        <Container>
          <h2 className="font-display text-3xl text-paper">
            The trusted route into MLS.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-dark">
            Players, agents and clubs turn to Mike to reach the right
            decision-makers at MLS clubs — through direct presentations and
            co-agent mandates.
          </p>

          <div className="mt-12 divide-y hairline-dark border-t hairline-dark">
            {authorizations.map((a) => (
              <div key={a.slug} className="grid grid-cols-1 gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-10">
                <div>
                  <p className="text-sm text-accent">{a.scope}</p>
                  <h3 className="mt-1 font-display text-xl text-paper">{a.player}</h3>
                </div>
                <p className="text-[15px] leading-relaxed text-paper/92">{a.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
