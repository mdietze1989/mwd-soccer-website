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
  // one entry blown up bigger than the rest. Same card, same one-line
  // context tag, same one confident sentence, for every person here,
  // whether the underlying record is a signed contract, a trial, or a
  // presentation. A photo shows up when there's a real one to show; when
  // there isn't, the entry is just text — no placeholder avatar standing in
  // for a missing photo.
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
            Players Mike has placed, presented and worked with across the
            U.S. and international game.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {entries.map((entry, i) => {
              // Odd-count safety net: center a trailing lone card instead of
              // leaving it stuck alone with an empty gap beside it.
              const isDangling = entries.length % 2 !== 0 && i === entries.length - 1;
              return (
                <div
                  key={entry.key}
                  className={`flex gap-5 border hairline-dark p-6 ${isDangling ? "md:col-span-2 md:mx-auto md:w-1/2 md:min-w-[360px]" : ""}`}
                >
                  {entry.image && (
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-ink">
                      <Image
                        src={entry.image.src}
                        alt={entry.image.alt}
                        fill
                        className={entry.image.fit === "contain" ? "object-contain" : "object-cover"}
                        style={entry.image.position ? { objectPosition: entry.image.position } : undefined}
                        sizes="80px"
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
