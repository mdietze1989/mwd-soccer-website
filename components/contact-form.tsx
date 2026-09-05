"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const reasons = [
  "Player representation",
  "Club or sporting director inquiry",
  "Agent / international partner",
  "Media or other",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    reason: reasons[0],
    message: "",
  });

  const canSubmit = form.name.trim() && form.email.trim() && form.message.trim();

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    const subject = encodeURIComponent(`${form.reason} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization/Club: ${form.organization || "—"}\nReason: ${form.reason}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.emails.primary}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Name">
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Organization or club (optional)">
          <input
            type="text"
            value={form.organization}
            onChange={(e) => update("organization", e.target.value)}
            className="w-full border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
          />
        </Field>
        <Field label="Reason for contact">
          <select
            value={form.reason}
            onChange={(e) => update("reason", e.target.value)}
            className="w-full border-b hairline-light bg-ink py-2 text-paper outline-none focus:border-accent"
          >
            {reasons.map((r) => (
              <option key={r} value={r} className="bg-ink">
                {r}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message">
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full resize-none border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
        />
      </Field>

      <div className="pt-2">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
        >
          Send Message
        </button>
        <p className="mt-3 text-xs text-muted-dark">
          This opens your email client with the message pre-filled, addressed
          to {siteConfig.emails.primary}.
        </p>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm text-muted-dark">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
