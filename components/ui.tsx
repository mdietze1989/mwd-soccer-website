import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm text-accent">{children}</p>
  );
}

export function PrimaryLink({
  href,
  children,
  tone = "default",
}: {
  href: string;
  children: ReactNode;
  /** "bright" is a richer, higher-contrast gold reserved for the hero CTA,
   *  which sits over a photo + dark gradient rather than a flat surface.
   *  Default stays the standard accent gold used everywhere else. */
  tone?: "default" | "bright";
}) {
  const toneClass =
    tone === "bright"
      ? "bg-[#e0a83e] hover:bg-accent"
      : "bg-accent hover:bg-accent-soft";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium text-ink transition-colors ${toneClass}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-sm border border-paper/30 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper/5"
    >
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  tone = "accent",
}: {
  href: string;
  children: ReactNode;
  /** "ink" reads as dark charcoal — use on the warm-ivory sections, where gold
   *  accent text falls below accessible contrast. Default "accent" (gold) is
   *  for the dark sections, unchanged. */
  tone?: "accent" | "ink";
}) {
  const toneClass =
    tone === "ink"
      ? "text-ivory-ink underline decoration-ivory-ink/40 hover:decoration-ivory-ink visited:text-ivory-ink"
      : "text-accent underline decoration-accent/40 hover:decoration-accent visited:text-accent";
  return (
    <Link
      href={href}
      className={`text-sm underline-offset-4 transition-colors ${toneClass}`}
    >
      {children}
    </Link>
  );
}
