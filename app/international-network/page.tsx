import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel } from "@/components/ui";
import { internationalPartners } from "@/lib/content/people";
import { transferRoomCredential } from "@/lib/content/track-record";

export const metadata: Metadata = {
  title: "International Network",
  description:
    "MWD Soccer's international partners in Senegal and Italy, collaborating on player representation and club access across North America, West Africa and Europe.",
};

const locations = ["United States", "Senegal", "Italy"];

export default function InternationalNetworkPage() {
  return (
    <>
      <section className="border-b hairline-dark py-20">
        <Container>
          <SectionLabel>International Network</SectionLabel>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-paper md:text-5xl">
            One point of contact. A network across three continents.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
            MWD players work directly with Mike Dietze, supported by
            FIFA-licensed partners and club relationships across North
            America, West Africa and Europe.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t hairline-dark pt-6 text-sm text-muted-dark">
            {locations.map((loc) => (
              <span key={loc}>{loc}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b hairline-dark py-20">
        <Container>
          <h2 className="font-display text-2xl text-paper">International Partners</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {internationalPartners.map((person) => (
              <div key={person.slug} className="flex gap-6 border hairline-dark p-6">
                {/* Gradient placeholder avoids a flat "empty circle" look while the (low-res) photo lazy-loads */}
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-ink-2 to-ink-3">
                  <Image
                    src={person.image!}
                    alt={person.imageAlt ?? person.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div>
                  <p className="text-[13px] text-muted-dark">Independent International Partner</p>
                  <h3 className="mt-1 font-display text-xl text-paper">{person.name}</h3>
                  <p className="mt-1 text-sm text-accent">{person.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/88">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl border hairline-dark p-8">
            <h3 className="font-display text-xl text-paper">{transferRoomCredential.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-paper/92">
              {transferRoomCredential.description}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
