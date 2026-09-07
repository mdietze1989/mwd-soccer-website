import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel, TextLink } from "@/components/ui";
import { coreTeam } from "@/lib/content/people";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mike Dietze is the founder of MWD Soccer, a FIFA-licensed agent representing players in the United States and internationally.",
};

const credentials = [
  "FIFA-Licensed Agent",
  "Former Professional & Seton Hall Player",
  "B.S. Sport Management & M.B.A. Marketing — Seton Hall University",
];

export default function AboutPage() {
  const mike = coreTeam[0];
  const advisors = coreTeam.slice(1);

  return (
    <>
      <section className="border-b hairline-dark py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,360px)_1fr]">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-2">
              <Image
                src={mike.image!}
                alt={mike.imageAlt!}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 360px, 90vw"
              />
            </div>
            <div>
              <SectionLabel>About</SectionLabel>
              <h1 className="mt-3 font-display text-4xl text-paper md:text-5xl">
                {mike.name}
              </h1>
              <p className="mt-2 text-muted-dark">FIFA-Licensed Agent</p>

              <div className="mt-8 space-y-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
                <p>
                  Mike Dietze founded MWD Soccer after careers in professional
                  soccer and sports business. A former Fort Lauderdale
                  Strikers and Philadelphia Fury player and Seton Hall
                  student-athlete, he brings a player&apos;s perspective to
                  contract negotiation, club placement and long-term career
                  decisions.
                </p>
                <p>
                  As a FIFA-licensed agent, Mike personally leads every MWD
                  client relationship. His work spans MLS, USL Championship,
                  MLS NEXT Pro and international markets, supported by direct
                  relationships with sporting directors, coaches, scouts and
                  licensed-agent partners.
                </p>
                <p>
                  That structure gives every player one accountable point of
                  contact without limiting the markets MWD can reach. MWD&apos;s
                  full record of contracts, transfers and authorizations is
                  documented on the{" "}
                  <TextLink href="/track-record">Track Record</TextLink> page.
                </p>
              </div>

              <ul className="mt-8 grid grid-cols-1 gap-3 border-t hairline-dark pt-8 sm:grid-cols-1">
                {credentials.map((credential) => (
                  <li key={credential} className="flex gap-3 text-sm text-paper/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {credential}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-2 order-2 md:order-1">
              <Image
                src="/images/team/mike-landry-samake.jpg"
                alt="Mike Dietze with players Houssou Landry and Gaoussou Samake"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 46vw, 92vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionLabel>Direct Relationships</SectionLabel>
              <h2 className="mt-3 font-display text-3xl text-paper">
                Representation is personal.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/80">
                Players work directly with Mike — from the first evaluation
                and club conversation through negotiation, relocation and the
                decisions that follow. The objective is not simply to secure a
                contract, but to make the right move for the player at every
                stage of his career.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t hairline-dark py-24">
        <Container>
          <SectionLabel>MWD Team &amp; Advisors</SectionLabel>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            {advisors.map((person) => (
              <div key={person.slug} className="flex gap-6">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-ink-2">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.imageAlt ?? person.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-2xl text-muted-dark">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-xl text-paper">{person.name}</h3>
                  <p className="mt-1 text-sm text-accent">{person.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/80">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
