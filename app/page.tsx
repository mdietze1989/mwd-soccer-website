import Image from "next/image";
import { Container, PrimaryLink, SecondaryLink, SectionLabel, TextLink } from "@/components/ui";
import { professionalDeals, authorizations } from "@/lib/content/track-record";
import { coreTeam, internationalPartners } from "@/lib/content/people";

const featured = professionalDeals.filter((d) =>
  ["houssou-landry", "jack-singer", "gaoussou-samake"].includes(d.slug)
);

const credibilityStrip = [
  "FIFA-Licensed Agent",
  "Former Professional & NCAA Division I Player",
  "MLS, USL Championship & MLS NEXT Pro Experience",
  "U.S. & International Club Network",
];

export default function HomePage() {
  const mike = coreTeam[0];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden border-b hairline-dark">
        <Image
          src="/images/players/landry/charleston-action.jpg"
          alt="A Charleston Battery player in match action under stadium lights"
          fill
          priority
          className="object-cover object-[50%_20%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,15,14,0.45) 0%, rgba(12,15,14,0.62) 45%, rgba(12,15,14,0.95) 100%)",
          }}
        />
        <Container className="relative z-10 pb-16 pt-32 md:pb-24">
          <div className="max-w-2xl">
            <p className="rise-in rise-in-1 font-display text-sm tracking-wide text-paper">
              FIFA-Licensed Player Representation
            </p>
            <h1 className="rise-in rise-in-2 mt-4 font-display text-5xl leading-[1.05] text-paper md:text-6xl">
              From college and academy soccer to the professional game.
            </h1>
            <p className="rise-in rise-in-3 mt-6 max-w-lg text-lg text-paper/95">
              MWD Football Management represents ambitious players through club placement,
              contract negotiation and every move that follows — across the
              United States and internationally.
            </p>
            <div className="rise-in rise-in-4 mt-9 flex flex-wrap gap-4">
              <PrimaryLink href="/track-record" tone="bright">View Player Outcomes</PrimaryLink>
              <SecondaryLink href="/contact">Talk to Mike</SecondaryLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Credibility strip */}
      <section className="border-b hairline-dark py-10">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden border hairline-dark bg-ink-2 md:grid-cols-4">
            {credibilityStrip.map((item) => (
              <div key={item} className="bg-ink px-5 py-6 text-center">
                <p className="text-sm text-paper/95">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Selected player outcomes */}
      <section className="border-b hairline-ivory bg-ivory py-14 md:py-18">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Selected Player Outcomes</SectionLabel>
              <h2 className="mt-3 max-w-xl font-display text-3xl text-ivory-ink md:text-4xl">
                Professional careers are built move by move.
              </h2>
              <p className="mt-3 max-w-lg text-[15px] text-ivory-ink/75">
                A selection of contracts, transfers and professional
                opportunities completed for MWD players.
              </p>
            </div>
            <TextLink href="/track-record" tone="ink">Full Track Record</TextLink>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
            {featured.map((deal) => (
              <a
                key={deal.slug}
                href="/track-record"
                className="group flex flex-col gap-5"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory-2">
                  <Image
                    src={deal.primaryImage.src}
                    alt={deal.primaryImage.alt}
                    fill
                    className={`transition-transform duration-500 group-hover:scale-[1.03] ${deal.primaryImage.fit === "contain" ? "object-contain" : "object-cover"}`}
                    style={deal.primaryImage.position ? { objectPosition: deal.primaryImage.position } : undefined}
                    sizes="(min-width: 768px) 30vw, 92vw"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ivory-ink">
                    {deal.player}
                  </h3>
                  <p className="mt-2 text-sm text-accent">{deal.careerLine}</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory-ink/75">
                    {deal.homeSummary}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder and representation model */}
      <section className="border-b hairline-dark py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:items-center">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-ink-2">
              <Image
                src={mike.image!}
                alt={mike.imageAlt!}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 320px, 80vw"
              />
            </div>
            <div>
              <SectionLabel>Founder &amp; FIFA-Licensed Agent</SectionLabel>
              <h2 className="mt-3 font-display text-3xl text-paper md:text-4xl">
                {mike.name}
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/88">
                Mike personally leads every MWD player relationship — from the
                first evaluation and club conversation through negotiation,
                relocation, contract decisions and the next move.
              </p>
              <div className="mt-6">
                <TextLink href="/about">Meet Mike</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* International assignments */}
      <section className="border-b hairline-dark bg-ink-2 py-14 md:py-18">
        <Container>
          <SectionLabel>International Assignments</SectionLabel>
          <h2 className="mt-3 max-w-xl font-display text-3xl text-paper md:text-4xl">
            Trusted with specific opportunities across international markets.
          </h2>
          <p className="mt-3 max-w-lg text-[15px] text-paper/80">
            Mike leads co-agent arrangements on defined opportunities
            involving MLS and international clubs.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border hairline-dark bg-ink md:grid-cols-3">
            {authorizations.map((a) => (
              <div key={a.slug} className="bg-ink-2 p-8">
                <p className="text-sm text-accent">{a.scope}</p>
                <h3 className="mt-2 font-display text-xl text-paper">{a.player}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-dark">
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <TextLink href="/track-record">Full track record</TextLink>
          </div>
        </Container>
      </section>

      {/* International network preview */}
      <section className="border-b hairline-dark py-12 md:py-16">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>International Network</SectionLabel>
              <h2 className="mt-3 max-w-xl font-display text-3xl text-paper md:text-4xl">
                Local accountability. International reach.
              </h2>
              <p className="mt-3 max-w-lg text-[15px] text-paper/80">
                MWD players work directly with Mike Dietze, supported by
                FIFA-licensed partners and trusted contacts across West
                Africa and Europe, and relationships with club
                decision-makers throughout the United States.
              </p>
            </div>
            <TextLink href="/international-network">Meet the Network</TextLink>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {internationalPartners.map((person, i) => {
              // Same odd-count centering used on the Track Record and
              // International Network pages.
              const isDangling =
                internationalPartners.length % 2 !== 0 &&
                i === internationalPartners.length - 1;
              return (
              <div
                key={person.slug}
                className={`flex gap-5 border hairline-dark p-6 ${isDangling ? "md:col-span-2 md:mx-auto md:w-1/2 md:min-w-[280px]" : ""}`}
              >
                {/* Gradient placeholder avoids a flat "empty circle" look while the (low-res) photo lazy-loads */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-ink-2 to-ink-3">
                  <Image
                    src={person.image!}
                    alt={person.imageAlt ?? person.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg text-paper">{person.name}</h3>
                  <p className="mt-1 text-sm text-accent">{person.title}</p>
                </div>
              </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-lg font-display text-3xl text-paper md:text-4xl">
                Ready to discuss your next move?
              </h2>
              <p className="mt-3 max-w-md text-[15px] text-paper/80">
                Players and families can speak directly with Mike about
                representation, professional pathways and the decisions ahead.
              </p>
            </div>
            <PrimaryLink href="/contact">Start a Conversation</PrimaryLink>
          </div>
        </Container>
      </section>
    </>
  );
}
