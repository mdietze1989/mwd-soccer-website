"use client";

import { useId, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const roles = [
  "Player",
  "Parent/Family Member",
  "Coach",
  "Club/Sporting Director",
  "Agent/International Partner",
  "Media/Other",
];

const playerRoles = new Set(["Player", "Parent/Family Member"]);

type FormState = {
  name: string;
  email: string;
  phone: string;
  role: string;
  organization: string;
  position: string;
  gradYear: string;
  highlightVideo: string;
  message: string;
  website: string; // honeypot
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  role: roles[0],
  organization: "",
  position: "",
  gradYear: "",
  highlightVideo: "",
  message: "",
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const errorId = useId();

  const showPlayerFields = playerRoles.has(form.role);
  const canSubmit = form.name.trim() && form.email.trim() && form.message.trim();

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || status === "submitting") return;

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again or email directly.");
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-3" role="status">
        <h2 className="font-display text-2xl text-paper">Message sent.</h2>
        <p className="text-sm text-paper/80">
          Thanks for reaching out — Mike will get back to you directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot — hidden from real users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field blank
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Name" required>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
          />
        </Field>
        <Field label="Email" required>
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
        <Field label="Phone / WhatsApp (optional)">
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
          />
        </Field>
        <Field label="I am a:">
          <select
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            className="w-full border-b hairline-light bg-ink py-2 text-paper outline-none focus:border-accent"
          >
            {roles.map((r) => (
              <option key={r} value={r} className="bg-ink">
                {r}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Current school or club (optional)">
        <input
          type="text"
          value={form.organization}
          onChange={(e) => update("organization", e.target.value)}
          className="w-full border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
        />
      </Field>

      {showPlayerFields && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Position (optional)">
            <input
              type="text"
              value={form.position}
              onChange={(e) => update("position", e.target.value)}
              className="w-full border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
            />
          </Field>
          <Field label="Graduation or birth year (optional)">
            <input
              type="text"
              value={form.gradYear}
              onChange={(e) => update("gradYear", e.target.value)}
              className="w-full border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
            />
          </Field>
        </div>
      )}

      {showPlayerFields && (
        <Field label="Highlight video link (optional)">
          <input
            type="url"
            placeholder="https://"
            value={form.highlightVideo}
            onChange={(e) => update("highlightVideo", e.target.value)}
            className="w-full border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
          />
        </Field>
      )}

      <Field label="Message" required>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          aria-describedby={error ? errorId : undefined}
          className="w-full resize-none border-b hairline-light bg-transparent py-2 text-paper outline-none focus:border-accent"
        />
      </Field>

      {status === "error" && error && (
        <p id={errorId} role="alert" className="text-sm text-accent">
          {error}{" "}
          <a href={`mailto:${siteConfig.emails.founder}`} className="underline">
            Email {siteConfig.emails.founder} directly
          </a>
          .
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={!canSubmit || status === "submitting"}
          className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "submitting" ? "Sending…" : "Start the Conversation"}
        </button>
        <p className="mt-3 text-xs text-muted-dark">
          Prefer email? Reach Mike directly at{" "}
          <a href={`mailto:${siteConfig.emails.founder}`} className="text-accent hover:underline">
            {siteConfig.emails.founder}
          </a>
          .
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm text-muted-dark">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
