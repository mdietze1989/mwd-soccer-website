"use client";

import { Container, PrimaryLink } from "@/components/ui";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container>
        <p className="font-display text-sm text-accent">Something went wrong</p>
        <h1 className="mt-3 max-w-xl font-display text-4xl text-paper">
          This page hit an error.
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/85">
          Try again, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
          >
            Try again
          </button>
          <PrimaryLink href="/">Back to Home</PrimaryLink>
        </div>
      </Container>
    </section>
  );
}
