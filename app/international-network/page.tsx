import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel } from "@/components/ui";
import { coreTeam, internationalPartners } from "@/lib/content/people";

export const metadata: Metadata = {
  title: "International Network",
  description:
    "The people behind MWD Soccer — core team and international partners in Senegal and Italy, collaborating on player representation and club access.",
};

export default function InternationalNetworkPage() {
  return (
    <>
      <section className="border-b hairline-dark py-20">
        <Container>
          <SectionLabel>International Network</SectionLabel>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-paper md:text-5xl">
            A small team, and a working network of independent partners.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/75">
            MWD Soccer is not a large agency. It is a focused team working
            with FIFA-licensed collaborators abroad — each with a defined
            role, rather than a wall of logos.
          </p>
        </Container>
      </section>

      <section className="border-b hairline-dark py-20">
        <Container>
          <h2 className="font-display text-2xl text-paper">Core Team</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {coreTeam.map((person) => (
              <div key={person.slug}>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-2">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.imageAlt ?? person.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 30vw, 90vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-4xl text-muted-dark">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <h3 className="mt-4 font-display text-xl text-paper">{person.name}</h3>
                <p className="mt-1 text-sm text-accent">{person.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-dark">{person.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="font-display text-2xl text-paper">International Partners</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-dark">
            Independent, FIFA-licensed agents collaborating with MWD Soccer —
            not internal staff.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {internationalPartners.map((person) => (
              <div key={person.slug} className="flex gap-6 border hairline-dark p-6">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-ink-2">
                  <Image
                    src={person.image!}
                    alt={person.imageAlt ?? person.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
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
