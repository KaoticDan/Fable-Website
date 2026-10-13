import { NextResponse } from "next/server";

const types = new Set(["whitelist", "speedrun", "media-consent"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
  const formType = String(body.formType || "");
  const source = String(body.source || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  if (!types.has(formType) || !source || source.length > 120 || !emailPattern.test(email) || email.length > 256) return NextResponse.json({ error: "Invalid form details" }, { status: 400 });
  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const linkedin = String(body.linkedin || "").trim();
  if (name.length > 256 || phone.length > 80 || linkedin.length > 500) return NextResponse.json({ error: "Invalid form details" }, { status: 400 });
  const details = body.details && typeof body.details === "object" && !Array.isArray(body.details) ? body.details as Record<string, unknown> : {};
  if (JSON.stringify(details).length > 8000) return NextResponse.json({ error: "Form is too large" }, { status: 400 });
  if (formType !== "whitelist" && (!name || !phone)) return NextResponse.json({ error: "Please complete all required fields" }, { status: 400 });
  if (formType === "speedrun" && (!linkedin || !details.role || !details.pitch || !details.content || !details.travel)) return NextResponse.json({ error: "Please complete all required fields" }, { status: 400 });
  if (formType === "media-consent" && body.consent !== true) return NextResponse.json({ error: "Consent is required" }, { status: 400 });
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return NextResponse.json({ error: "Form service is not configured" }, { status: 503 });
  const response = await fetch(`${url}/rest/v1/fable_leads`, {
    method: "POST",
    headers: { apikey: key, "content-type": "application/json", prefer: "return=minimal" },
    body: JSON.stringify({ form_type: formType, source, email, name: name || null, phone: phone || null, linkedin: linkedin || null, details, consent: formType === "media-consent" ? true : null, consent_version: formType === "media-consent" ? "2026-02-22" : null }),
    cache: "no-store",
  });
  if (!response.ok) return NextResponse.json({ error: "Could not save your submission" }, { status: 502 });
  return new NextResponse(null, { status: 204 });
}
