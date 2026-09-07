import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t hairline-dark">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-lg text-paper">{siteConfig.brandName}</p>
            <p className="mt-3 max-w-sm text-sm text-muted-dark">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm text-paper">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-dark">
              <li><Link href="/about" className="hover:text-paper">About</Link></li>
              <li><Link href="/track-record" className="hover:text-paper">Track Record</Link></li>
              <li><Link href="/services" className="hover:text-paper">Services</Link></li>
              <li><Link href="/international-network" className="hover:text-paper">International Network</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-paper">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-dark">
              <li>
                <a href={`mailto:${siteConfig.emails.founder}`} className="hover:text-paper">
                  {siteConfig.emails.founder}
                </a>
                <span className="block text-xs text-muted-dark/70">Players &amp; families</span>
              </li>
              <li>
                <a href={`mailto:${siteConfig.emails.primary}`} className="hover:text-paper">
                  {siteConfig.emails.primary}
                </a>
                <span className="block text-xs text-muted-dark/70">Scouting submissions</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="hover:text-paper">
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t hairline-dark pt-6 text-xs text-muted-dark md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. {siteConfig.fifa.licenseLabel}.
          </p>
          <p>{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
