import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel } from "@/components/ui";
import {
  professionalDeals,
  clubOpportunities,
  authorizations,
  type ImageRef,
} from "@/lib/content/track-record";

export const metadata: Metadata = {
  title: "Track Record",
  description:
    "MWD Football Management's track record: players Mike has placed, presented and worked with across the U.S. and international game.",
};

type Entry = {
  key: string;
  name: string;
  label: string;
  blurb: string;
  image?: ImageRef;
};

export default function TrackRecordPage() {
  // One flat list — no "contracts" vs. "trials" vs. "mandates" tiers. Every
  // entry gets the same one-line context tag and one confident sentence,
  // whether the underlying record is a signed contract, a trial, or a
  // presentation. Stacked single-file (one player per row, not a grid) so a
  // big photo next to a photo-less entry never sit side by side inviting a
  // size comparison -- you scroll past one, then the next.
  const entries: Entry[] = [
    ...professionalDeals.map((d) => ({ key: d.slug, name: d.player, label: d.careerLine, blurb: d.summary, image: d.primaryImage as ImageRef | undefined })),
    ...clubOpportunities.map((o) => ({ key: o.slug, name: o.player, label: o.program, blurb: o.detail, image: o.image })),
    ...authorizations.map((a) => ({ key: a.slug, name: a.player, label: a.scope, blurb: a.detail, image: a.image })),
  ];

  return (
    <>
      <section className="border-b hairline-dark py-20">
        <Container>
          <SectionLabel>Track Record</SectionLabel>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-paper md:text-5xl">
            Your first professional contract is the beginning — not the destination.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
            Players Mike has placed, presented and worked with across MLS,
            USL Championship, MLS NEXT Pro and the international game —
            including direct presentations to MLS clubs on behalf of
            European and South American internationals.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col">
            {entries.map((entry, i) => (
              <div
                key={entry.key}
                className={`grid grid-cols-1 gap-8 py-14 ${entry.image ? "md:grid-cols-[380px_1fr] md:items-center" : ""} ${i !== 0 ? "border-t hairline-dark" : ""}`}
              >
                {entry.image && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
                    <Image
                      src={entry.image.src}
                      alt={entry.image.alt}
                      fill
                      className={entry.image.fit === "contain" ? "object-contain" : "object-cover"}
                      style={entry.image.position ? { objectPosition: entry.image.position } : undefined}
                      sizes="(min-width: 768px) 380px, 92vw"
                    />
                  </div>
                )}
                <div>
                  <p className="text-sm text-muted-dark">{entry.label}</p>
                  <h3 className="mt-1 font-display text-3xl text-paper">{entry.name}</h3>
                  <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-paper/88">{entry.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
