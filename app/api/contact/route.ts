import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  organization?: string;
  position?: string;
  gradYear?: string;
  highlightVideo?: string;
  message?: string;
  website?: string; // honeypot — real users never fill this in
};

function buildEmailBody(data: ContactPayload) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone/WhatsApp: ${data.phone}` : null,
    `I am a: ${data.role}`,
    data.organization ? `Current school or club: ${data.organization}` : null,
    data.position ? `Position: ${data.position}` : null,
    data.gradYear ? `Graduation/birth year: ${data.gradYear}` : null,
    data.highlightVideo ? `Highlight video: ${data.highlightVideo}` : null,
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill every field, including ones hidden from real users.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email.trim())) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No email provider configured yet — tell the client so it can show the
    // direct-email fallback instead of a false success state.
    return NextResponse.json(
      { ok: false, error: "Email delivery isn't configured yet.", fallback: true },
      { status: 503 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "MWD Football Management Website <onboarding@resend.dev>",
        to: siteConfig.emails.founder,
        reply_to: data.email,
        subject: `New inquiry from ${data.name} (${data.role ?? "Website"})`,
        text: buildEmailBody(data),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend API error:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "Message could not be sent. Please try again or email directly.", fallback: true },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return NextResponse.json(
      { ok: false, error: "Message could not be sent. Please try again or email directly.", fallback: true },
      { status: 500 }
    );
  }
}
