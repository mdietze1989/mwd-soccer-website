import Image from "next/image";
import { Container, PrimaryLink, SecondaryLink, SectionLabel, TextLink } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";
import { professionalDeals, authorizations } from "@/lib/content/track-record";
import { coreTeam } from "@/lib/content/people";

const featured = professionalDeals.filter((d) =>
  ["houssou-landry", "luka-malesevic", "gaoussou-samake", "jack-singer"].includes(d.slug)
);

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
              "linear-gradient(180deg, rgba(12,15,14,0.35) 0%, rgba(12,15,14,0.55) 55%, rgba(12,15,14,0.95) 100%)",
          }}
        />
        <Container className="relative z-10 pb-16 pt-32 md:pb-24">
          <div className="max-w-2xl">
            <p className="rise-in rise-in-1 font-display text-sm tracking-wide text-accent">
              {siteConfig.founder.title}
            </p>
            <h1 className="rise-in rise-in-2 mt-4 font-display text-5xl leading-[1.05] text-paper md:text-6xl">
              {siteConfig.brandName}
            </h1>
            <p className="rise-in rise-in-3 mt-6 max-w-lg text-lg text-paper/90">
              {siteConfig.tagline}
            </p>
            <div className="rise-in rise-in-4 mt-9 flex flex-wrap gap-4">
              <PrimaryLink href="/track-record">View Track Record</PrimaryLink>
              <SecondaryLink href="/contact">Contact MWD</SecondaryLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected outcomes */}
      <section className="border-b hairline-dark py-24">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Selected outcomes</SectionLabel>
              <h2 className="mt-3 max-w-xl font-display text-3xl text-paper md:text-4xl">
                Real players, real clubs, real seasons.
              </h2>
            </div>
            <TextLink href="/track-record">See the full track record</TextLink>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {featured.map((deal, i) => (
              <article
                key={deal.slug}
                className={`flex flex-col gap-5 ${i % 2 === 1 ? "md:mt-16" : ""}`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-2">
                  <Image
                    src={deal.primaryImage.src}
                    alt={deal.primaryImage.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 46vw, 92vw"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-dark">
                    {deal.club} &middot; {deal.league}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-paper">
                    {deal.player}
                  </h3>
                  <p className="mt-2 text-sm text-muted-dark">{deal.season}</p>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-paper/80">
                    {deal.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* International assignments */}
      <section className="border-b hairline-dark bg-ink-2 py-24">
        <Container>
          <SectionLabel>International assignments</SectionLabel>
          <h2 className="mt-3 max-w-xl font-display text-3xl text-paper md:text-4xl">
            Authorized to work specific opportunities for players at the highest level.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border hairline-dark bg-ink md:grid-cols-3">
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
            <TextLink href="/track-record">Full authorizations &amp; assignments</TextLink>
          </div>
        </Container>
      </section>

      {/* Founder introduction */}
      <section className="border-b hairline-dark py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:items-center">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden bg-ink-2">
              <Image
                src={mike.image!}
                alt={mike.imageAlt!}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 320px, 80vw"
              />
            </div>
            <div>
              <SectionLabel>Founder</SectionLabel>
              <h2 className="mt-3 font-display text-3xl text-paper md:text-4xl">
                {mike.name}
              </h2>
              <p className="mt-2 text-muted-dark">{siteConfig.fifa.licenseLabel}</p>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/80">
                Mike Dietze is a FIFA-licensed football agent and the founder of
                MWD Soccer, representing players directly through contract
                negotiation, club placement and international collaboration.
              </p>
              <div className="mt-6">
                <TextLink href="/about">More about Mike</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* International network */}
      <section className="border-b hairline-dark bg-ink-2 py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <SectionLabel>International network</SectionLabel>
              <h2 className="mt-3 font-display text-3xl text-paper md:text-4xl">
                A working network across West Africa, Europe and North America.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/80">
                MWD Soccer collaborates with FIFA-licensed agents in Senegal
                and Italy, alongside club executives, sporting directors,
                coaches and scouts across the United States and abroad —
                each with a defined role in the players and assignments they
                work on together.
              </p>
              <div className="mt-6">
                <TextLink href="/international-network">Meet the network</TextLink>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 self-start">
              <div className="border hairline-dark p-6">
                <p className="font-display text-xl text-paper">Senegal</p>
                <p className="mt-2 text-sm text-muted-dark">West Africa partner market</p>
              </div>
              <div className="border hairline-dark p-6">
                <p className="font-display text-xl text-paper">Italy</p>
                <p className="mt-2 text-sm text-muted-dark">European partner market</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-lg font-display text-3xl text-paper md:text-4xl">
                Players, clubs and agents can reach MWD Soccer directly.
              </h2>
            </div>
            <PrimaryLink href="/contact">Contact MWD</PrimaryLink>
          </div>
        </Container>
      </section>
    </>
  );
}
