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
  blurb?: string;
  image?: ImageRef;
};

export default function TrackRecordPage() {
  // One flat list — no "contracts" vs. "trials" vs. "mandates" tiers, and no
  // separate group for the co-agent entries either: setting them apart from
  // everyone else, even without a label, reads as "these three are a
  // different tier." Every entry gets the same card, the same one-line
  // context tag, and one confident sentence, whether the underlying record
  // is a signed contract, a trial, or a co-agent arrangement Mike is leading.
  // A supporting line is omitted rather than used to explain what Mike's
  // role wasn't -- the fact stands on its own or it doesn't appear.
  const bySlug = new Map<string, Entry>([
    ...professionalDeals.map((d): [string, Entry] => [d.slug, { key: d.slug, name: d.player, label: d.careerLine, blurb: d.summary, image: d.primaryImage as ImageRef | undefined }]),
    ...clubOpportunities.map((o): [string, Entry] => [o.slug, { key: o.slug, name: o.player, label: o.program, blurb: o.detail, image: o.image }]),
    ...authorizations.map((a): [string, Entry] => [a.slug, { key: a.slug, name: a.player, label: a.scope, blurb: a.detail, image: a.image }]),
  ]);
  // Explicit order so the three co-agent entries are actually interspersed
  // among everyone else, not just re-styled while still sitting together as
  // a trailing block -- that would only half-satisfy "mix them in."
  const order = [
    "houssou-landry", "jack-singer", "gaoussou-samake", "edinson-cavani",
    "luka-malesevic", "abdoul-zanne", "kairou-amoustapha", "samuel-nongoh",
    "marco-imperiale", "delasi-batse", "sam-gomez", "kwadwo-amoako",
    "maksim-samorodov",
  ];
  const entries: Entry[] = order.map((slug) => bySlug.get(slug)!);

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
            including co-agent arrangements he leads for European and
            South American internationals.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-8">
            {entries.map((entry) => (
              <div
                key={entry.key}
                className={`grid grid-cols-1 gap-8 border hairline-dark bg-ink-2 p-8 md:p-10 ${entry.image ? "md:grid-cols-[380px_1fr] md:items-center" : ""}`}
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
                  {entry.blurb && (
                    <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-paper/88">{entry.blurb}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
