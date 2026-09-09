import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel } from "@/components/ui";
import { internationalPartners } from "@/lib/content/people";
import { transferRoomCredential } from "@/lib/content/track-record";

export const metadata: Metadata = {
  title: "International Network",
  description:
    "MWD Football Management's international partners in Senegal, Italy and France, collaborating on player representation and club access across North America, West Africa and Europe.",
};

const locations = ["United States", "Senegal", "Italy", "France"];

export default function InternationalNetworkPage() {
  return (
    <>
      <section className="border-b hairline-dark py-12 md:py-16">
        <Container>
          <SectionLabel>International Network</SectionLabel>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-paper md:text-5xl">
            One point of contact. A network across three continents.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
            MWD players work directly with Mike Dietze, supported by
            FIFA-licensed partners, trusted contacts and club relationships
            across North America, West Africa and Europe.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t hairline-dark pt-6 text-sm text-muted-dark">
            {locations.map((loc) => (
              <span key={loc}>{loc}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Mike's international presence — documentary, not a claimed club mandate */}
      <section className="border-b hairline-dark py-10 md:py-14">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[48%_1fr] md:gap-12 md:items-center">
            <div className="relative aspect-[7/8] w-full overflow-hidden bg-ink-2">
              <Image
                src="/images/network/wydad-morocco.jpg"
                alt="Mike Dietze with Wydad Athletic Club's sporting director during the 2025 U-17 Africa Cup of Nations in Morocco"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 48vw, 90vw"
              />
            </div>
            <div className="max-w-sm">
              <SectionLabel>On the Ground</SectionLabel>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/88">
                Mike Dietze with Wydad Athletic Club&apos;s sporting director
                during the 2025 U-17 Africa Cup of Nations in Morocco.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b hairline-ivory bg-ivory py-14 md:py-18">
        <Container>
          <h2 className="font-display text-2xl text-ivory-ink">International Partners</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {internationalPartners.map((person, i) => {
              // Same odd-count centering used on the Track Record page — the
              // last card in an odd-length list would otherwise sit alone
              // with an empty gap beside it.
              const isDangling =
                internationalPartners.length % 2 !== 0 &&
                i === internationalPartners.length - 1;
              return (
              <div
                key={person.slug}
                className={`flex gap-6 border hairline-ivory p-6 ${isDangling ? "md:col-span-2 md:mx-auto md:w-1/2 md:min-w-[420px]" : ""}`}
              >
                {/* Gradient placeholder avoids a flat "empty circle" look while the (low-res) photo lazy-loads */}
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-ivory-2 to-ivory-line">
                  <Image
                    src={person.image!}
                    alt={person.imageAlt ?? person.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ivory-ink">{person.name}</h3>
                  <p className="mt-1 text-sm text-accent">{person.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ivory-ink/80">{person.bio}</p>
                </div>
              </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
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
