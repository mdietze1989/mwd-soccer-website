import type { Metadata } from "next";
import { Container, SectionLabel } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Mike Dietze at MWD Soccer — for players and families, clubs and sporting directors, or agents and international partners.",
};

const audiences = [
  {
    title: "Players & Families",
    detail: "Representation, professional opportunities or a current career decision.",
  },
  {
    title: "Clubs & Sporting Directors",
    detail: "Player availability, trials and transfer-window opportunities.",
  },
  {
    title: "Agents & International Partners",
    detail: "Co-agent work, mandates and cross-border collaboration.",
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
              Let&apos;s talk about your next move.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/80">
              Players and families can speak directly with Mike about
              representation, professional pathways and the transition into
              the professional game.
            </p>

            <div className="mt-10 space-y-8 border-t hairline-dark pt-8">
              {audiences.map((a) => (
                <div key={a.title}>
                  <h2 className="font-display text-lg text-paper">{a.title}</h2>
                  <p className="mt-1 text-sm text-muted-dark">{a.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-3 border-t hairline-dark pt-8 text-sm">
              <p>
                <a href={`mailto:${siteConfig.emails.founder}`} className="text-accent hover:underline">
                  {siteConfig.emails.founder}
                </a>
                <span className="ml-2 text-muted-dark">— direct / player and family inquiries</span>
              </p>
              <p>
                <a href={`mailto:${siteConfig.emails.primary}`} className="text-accent hover:underline">
                  {siteConfig.emails.primary}
                </a>
                <span className="ml-2 text-muted-dark">— player profiles and scouting submissions</span>
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
