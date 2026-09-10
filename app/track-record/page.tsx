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
  // One flat list — no "contracts" vs. "trials" vs. "mandates" tiers, and no
  // one entry blown up bigger than the rest. Same card, same small photo
  // treatment, same one-line context tag, same one confident sentence, for
  // every person here, whether the underlying record is a signed contract,
  // a trial, or a presentation. Card size never tracks whether we happen to
  // have a good photo on file -- a photo is a modest accent, not the thing
  // that decides how much weight an entry gets.
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {entries.map((entry, i) => {
              // A lone trailing card (list length leaves exactly one on the
              // last row) centers in the middle column instead of sitting
              // off to one side with two empty slots beside it.
              const isLoneTrailing = entries.length % 3 === 1 && i === entries.length - 1;
              return (
                <div
                  key={entry.key}
                  className={`flex gap-5 border hairline-dark p-6 ${isLoneTrailing ? "md:col-start-2" : ""}`}
                >
                  {entry.image && (
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-ink">
                      <Image
                        src={entry.image.src}
                        alt={entry.image.alt}
                        fill
                        className={entry.image.fit === "contain" ? "object-contain" : "object-cover"}
                        style={entry.image.position ? { objectPosition: entry.image.position } : undefined}
                        sizes="96px"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-dark">{entry.label}</p>
                    <h3 className="mt-1 font-display text-xl text-paper">{entry.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/88">{entry.blurb}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
