import type { Metadata } from "next";
import { Container, PrimaryLink, SectionLabel } from "@/components/ui";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MWD Soccer's services: player representation, contract negotiation, club placement and transfers, career strategy, market access, and scouting.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b hairline-dark py-20">
        <Container>
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-paper md:text-5xl">
            Practical work, grounded in what actually moves a career forward.
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 border-t hairline-dark md:grid-cols-2">
            {services.map((service) => (
              <div key={service.slug} className="border-b hairline-dark p-8 md:border-r md:p-10 md:[&:nth-child(2n)]:border-r-0">
                <h2 className="font-display text-2xl text-paper">{service.title}</h2>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-paper/80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t hairline-dark py-20">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-lg font-display text-3xl text-paper">
              Reach out to talk through a specific situation.
            </h2>
            <PrimaryLink href="/contact">Contact MWD</PrimaryLink>
          </div>
        </Container>
      </section>
    </>
  );
}
