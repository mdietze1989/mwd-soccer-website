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

function Avatar({ entry }: { entry: Entry }) {
  if (entry.image) {
    return (
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
    );
  }
  return (
    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border hairline-dark font-display text-lg text-accent">
      {entry.name
        .split(" ")
        .map((n) => n[0])
        .join("")}
    </div>
  );
}

export default function TrackRecordPage() {
  const landry = professionalDeals.find((d) => d.slug === "houssou-landry")!;

  // One flat list — no "contracts" vs. "trials" vs. "mandates" tiers. Every
  // entry gets the same card treatment and the same amount of detail: a
  // photo, a one-line context tag, and one confident, factual sentence.
  const entries: Entry[] = [
    ...professionalDeals
      .filter((d) => d.slug !== "houssou-landry")
      .map((d) => ({ key: d.slug, name: d.player, label: d.careerLine, blurb: d.summary, image: d.primaryImage })),
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
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {/* Landry — leads the list because there's simply more real material
                to show (a documented, multi-club history), not because he
                belongs to a higher-tier category. */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,340px)_1fr]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-2">
                  <Image
                    src={landry.primaryImage.src}
                    alt={landry.primaryImage.alt}
                    fill
                    className={landry.primaryImage.fit === "contain" ? "object-contain" : "object-cover"}
                    sizes="(min-width: 768px) 340px, 90vw"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-dark">{landry.metaLine}</p>
                  <h3 className="mt-1 font-display text-2xl text-paper">
                    {landry.player}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-paper/92">
                    {landry.summary}
                  </p>
                </div>
              </div>

              {landry.secondaryImages && landry.secondaryImages.length > 0 && (
                <div className="mt-8 max-w-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {landry.secondaryImages.slice(0, 2).map((img) => (
                      <div key={img.src} className="relative aspect-[3/4] overflow-hidden bg-ink-2">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className={img.fit === "contain" ? "object-contain" : "object-cover"}
                          style={img.position ? { objectPosition: img.position } : undefined}
                          sizes="(min-width: 768px) 328px, 45vw"
                        />
                      </div>
                    ))}
                  </div>
                  {landry.secondaryImages.length > 2 && (
                    <div className="mt-4 relative aspect-[16/9] overflow-hidden bg-ink-2">
                      <Image
                        src={landry.secondaryImages[2].src}
                        alt={landry.secondaryImages[2].alt}
                        fill
                        className={landry.secondaryImages[2].fit === "contain" ? "object-contain" : "object-cover"}
                        style={landry.secondaryImages[2].position ? { objectPosition: landry.secondaryImages[2].position } : undefined}
                        sizes="(min-width: 768px) 672px, 90vw"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {entries.map((entry, i) => {
              // Odd-count safety net: if the list ever ends up with an odd
              // number of entries, center the last one instead of leaving it
              // stuck alone with an empty gap beside it.
              const isDangling = entries.length % 2 !== 0 && i === entries.length - 1;
              return (
                <div
                  key={entry.key}
                  className={`flex gap-5 border hairline-dark p-6 ${isDangling ? "md:col-span-2 md:mx-auto md:w-1/2 md:min-w-[360px]" : ""}`}
                >
                  <Avatar entry={entry} />
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
