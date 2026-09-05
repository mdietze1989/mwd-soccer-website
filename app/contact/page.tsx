import type { Metadata } from "next";
import { Container, SectionLabel } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MWD Soccer — for players and families, clubs and sporting directors, or agents and international partners.",
};

const pathways = [
  {
    title: "Players & families",
    detail: "Considering representation, or want to talk through your situation.",
  },
  {
    title: "Clubs & sporting directors",
    detail: "Looking into a player, a trial, or a specific transfer window.",
  },
  {
    title: "Agents & international partners",
    detail: "Co-agent work, authorizations, or collaboration across markets.",
  },
];

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-3 font-display text-4xl text-paper md:text-5xl">
              Get in touch.
            </h1>

            <div className="mt-10 space-y-8 border-t hairline-dark pt-8">
              {pathways.map((p) => (
                <div key={p.title}>
                  <h2 className="font-display text-lg text-paper">{p.title}</h2>
                  <p className="mt-1 text-sm text-muted-dark">{p.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-2 border-t hairline-dark pt-8 text-sm">
              <p>
                <a href={`mailto:${siteConfig.emails.primary}`} className="text-accent hover:underline">
                  {siteConfig.emails.primary}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.emails.founder}`} className="text-accent hover:underline">
                  {siteConfig.emails.founder}
                </a>
              </p>
              <p className="text-muted-dark">{siteConfig.phone}</p>
              <p className="text-muted-dark">{siteConfig.location}</p>
            </div>
          </div>

          <div className="border hairline-dark p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
