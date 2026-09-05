import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel, TextLink } from "@/components/ui";
import { coreTeam } from "@/lib/content/people";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mike Dietze is the founder of MWD Soccer, a FIFA-licensed football agent representing players in the United States and internationally.",
};

const facts = [
  "FIFA-licensed football agent — FIFA Agent ID 202304-869",
  "Former professional and collegiate football player",
  "Played collegiately at Seton Hall University",
  "Education and professional experience in sport management and marketing",
  "Works across player representation, contract negotiation, club placement, transfers and international collaboration",
];

export default function AboutPage() {
  const mike = coreTeam[0];

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
              <p className="mt-2 text-muted-dark">{siteConfig.fifa.licenseLabel}</p>

              <div className="mt-8 space-y-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
                <p>
                  Mike Dietze is the founder of MWD Soccer. He is a FIFA-licensed
                  football agent and a former professional and collegiate
                  football player, having played collegiately at Seton Hall
                  University before moving into sport management and marketing.
                </p>
                <p>
                  His work centers on player representation, contract
                  negotiation, club placement, transfers and international
                  collaboration — built through direct relationships rather
                  than a large back office. That network includes club
                  executives, sporting directors, coaches, scouts and licensed
                  agents in the United States and internationally.
                </p>
                <p>
                  MWD Soccer&apos;s track record includes completed professional
                  contracts, trials and draft interest, and international
                  authorizations to present players to MLS clubs — documented
                  in detail on the{" "}
                  <TextLink href="/track-record">Track Record</TextLink> page.
                </p>
              </div>

              <ul className="mt-8 space-y-3 border-t hairline-dark pt-8">
                {facts.map((fact) => (
                  <li key={fact} className="flex gap-3 text-sm text-paper/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {fact}
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
              <SectionLabel>Direct relationships</SectionLabel>
              <h2 className="mt-3 font-display text-3xl text-paper">
                Built on time spent with players, not a distant office.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/80">
                Mike works directly with players like Houssou Landry and
                Gaoussou Samake through every stage of their careers — from
                first contract to renewal and transfer — rather than handing
                that relationship off to staff.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
