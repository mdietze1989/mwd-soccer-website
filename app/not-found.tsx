import Link from "next/link";
import { Container, PrimaryLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container>
        <p className="font-display text-sm text-accent">404</p>
        <h1 className="mt-3 max-w-xl font-display text-4xl text-paper md:text-5xl">
          That page doesn&apos;t exist.
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/85">
          The page you&apos;re looking for may have moved. Try the track record,
          or head back home.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <PrimaryLink href="/">Back to Home</PrimaryLink>
          <Link
            href="/track-record"
            className="inline-flex items-center justify-center rounded-sm border border-paper/30 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper/5"
          >
            View Track Record
          </Link>
        </div>
      </Container>
    </section>
  );
}
