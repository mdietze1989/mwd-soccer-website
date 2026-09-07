import type { Metadata } from "next";
import { Container, PrimaryLink, SectionLabel } from "@/components/ui";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MWD Soccer's services: college and academy transition, club placement and transfers, contract negotiation, career strategy, ongoing player management, and international market access.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b hairline-dark py-12 md:py-16">
        <Container>
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-paper md:text-5xl">
            Representation for every stage of a professional career.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
            From the transition out of college or academy soccer to
            contracts, transfers and the decisions that follow, MWD manages
            the work behind a player&apos;s next move.
          </p>
        </Container>
      </section>

      <section className="bg-ivory py-14 md:py-18">
        <Container>
          <div className="grid grid-cols-1 border-t hairline-ivory md:grid-cols-2">
            {services.map((service) => (
              <div key={service.slug} className="border-b hairline-ivory p-8 md:border-r md:p-10 md:[&:nth-child(2n)]:border-r-0">
                <h2 className="font-display text-2xl text-ivory-ink">{service.title}</h2>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ivory-ink/80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t hairline-dark py-12 md:py-16">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-lg font-display text-3xl text-paper">
                Considering representation or your next professional move?
              </h2>
              <p className="mt-3 max-w-md text-[15px] text-paper/80">
                Speak directly with Mike about your situation.
              </p>
            </div>
            <PrimaryLink href="/contact">Start a Conversation</PrimaryLink>
          </div>
        </Container>
      </section>
    </>
  );
}
