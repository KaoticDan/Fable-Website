"use client";

import { FormEvent, useState } from "react";
import { eventImage, eventTypes, model, nav } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="site-header"><a href="/" aria-label="Fable home"><img src="/assets/fable-logo.svg" alt="Fable" /></a><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}><span /><span /></button></header>
    <div className={`menu-panel ${open ? "open" : ""}`} aria-hidden={!open}><nav aria-label="Main navigation">{nav.map(([name, url]) => <a key={url} href={url}>{name}</a>)}</nav></div>
  </>;
}

export function LeadForm({ source, label = "Get Whitelisted", compact = false }: { source: string; label?: string; compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") || "");
    setStatus("sending");
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ formType: "whitelist", source, email }) });
      if (!response.ok) throw new Error();
      setStatus("success"); form.reset();
    } catch { setStatus("error"); }
  }
  return <form className={`lead-form ${compact ? "compact" : ""}`} onSubmit={submit}>
    <label className="sr-only" htmlFor={`email-${source.replace(/[^a-z0-9]/gi, "-")}`}>Email address</label>
    <input id={`email-${source.replace(/[^a-z0-9]/gi, "-")}`} name="email" type="email" placeholder={compact ? "Enter your email" : "Your email"} required maxLength={256} />
    <button className="button yellow" type="submit" disabled={status === "sending"}>{status === "sending" ? "Please wait..." : label}</button>
    <span className="form-feedback" role="status">{status === "success" ? "Thank you. We'll be in touch soon." : status === "error" ? "Something went wrong. Please try again." : ""}</span>
  </form>;
}

export function PhotoMosaic({ overlay = false }: { overlay?: boolean }) {
  const columns = [["09", "08", "22", "10"], ["11", "12", "14", "13"], ["18", "17", "15", "16"], ["04", "03", "05", "21"], ["01", "02", "06", "19"]];
  return <div className={`photo-mosaic ${overlay ? "with-overlay" : ""}`} aria-hidden="true">{columns.map((photos, column) => <div className={`mosaic-column mosaic-column-${column + 1}`} key={column}>{[0, 1].map(copy => <div className="mosaic-list" key={copy}>{photos.map((n, i) => <div className="mosaic-tile" key={`${copy}-${i}`}><img src={`/assets/mosaic-${n}.webp`} alt="" decoding="async" fetchPriority={copy === 0 ? "high" : "auto"} /></div>)}</div>)}</div>)}</div>;
}

export function PhotoGrid() {
  const columns = [["22", "25", "27", "03"], ["21", "08", "19", "17"], ["14", "20", "18"]];
  return <section className="section proof"><p className="eyebrow">The Fable Experience</p><h2>Proof in motion</h2><p>Founders and investors in their element</p><div className="proof-grid">{columns.map((photos, col) => <div className="proof-column" key={col}>{photos.map((n, i) => <img key={n} src={eventImage(n)} alt={`Fable event moment ${col * 4 + i + 1}`} />)}</div>)}</div></section>;
}

export function WhitelistCallout({ heading = "Get Whitelisted For All Our Events", source = "cta", text = "Reserve your seat at Fable's upcoming events across the globe.", label = "Get Whitelisted" }: { heading?: string; source?: string; text?: string; label?: string }) {
  return <section className="whitelist section"><div className="whitelist-inner"><h2>{heading}</h2><p>{text}</p><LeadForm source={source} label={label} /><small>By submitting this form you agree to our Terms and Conditions.</small></div></section>;
}

export function EventTypes() {
  const [active, setActive] = useState(0);
  return <section className="section event-types"><div className="event-types-layout"><div className="event-types-copy"><p>How We Do It</p><h2>Our Event Types</h2><div className="type-list" role="tablist" aria-label="Event types">{eventTypes.map((item, i) => <button className={active === i ? "active" : ""} type="button" role="tab" aria-selected={active === i} onClick={() => setActive(i)} key={item.title}><h3>{item.title}</h3><p>{item.body}</p></button>)}</div></div><img src={eventImage(eventTypes[active].image)} alt={eventTypes[active].title} role="tabpanel" /></div></section>;
}

export function Model() {
  const [active, setActive] = useState<number | null>(null);
  return <section className="section model"><p className="model-kicker">How We Do It</p><h2>Our Model</h2><div className={`model-grid ${active !== null ? "has-active" : ""}`} onMouseLeave={() => setActive(null)}>{model.map((item, i) => <article key={item.title} tabIndex={0} className={active === i ? "active" : active !== null ? "inactive" : ""} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => { if (window.matchMedia("(hover: none)").matches) setActive(i); }} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); } if (e.key === "Escape") setActive(null); }}><img src={`/assets/${item.image}`} alt="" /><div className="model-shade" /><div className="model-card-copy"><small>{item.label}</small><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div></section>;
}

const tierRows: [string, string, string, string][] = [
  ["Conference Coverage", "All Fable Events Hosted At That Conference", "All Fable Events Hosted At That Conference", "All Fable Events Hosted At That Conference"],
  ["Digital Branding (Luma/Socials)", "✓", "✓", "✓"],
  ["On-Site Branding (Print/Screens)", "✓", "✓", "Premium Placement"],
  ["Cross Promotion With Other Sponsors (Dependent On Sponsor Opt-In)", "✓", "✓", "✓"],
  ["All-Access Staff Tickets", "—", "3 Tickets", "5 Tickets"],
  ["Registrant Data (Name, Email, Role)", "—", "Full List", "Full List"],
  ["Custom Registration Question", "—", "Subject To Approval", "Subject To Approval"],
  ["60-Second Elevator Pitch On Stage", "—", "—", "✓"],
  ["Event Takeover (Host Your Own Interviews & Film With Our Videographer)", "—", "—", "✓"],
  ["Content Deliverables", "Logo Placement Only & Event Photos", "Mentioned In Fable Recap Video, Event Photos & Raw Footage", "All Raw Footage & Photos, 1x Branded Event Reel, 1x Branded Event Recap"],
];

export function SponsorshipTiers() {
  const icons = [
    <svg key="globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-3 3-4 6-4 9s1 6 4 9m0-18c3 3 4 6 4 9s-1 6-4 9"/></svg>,
    <svg key="lead" viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h8"/></svg>,
    <svg key="content" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="m12 10 4-7M14 13l6 4M10 14l-3 6M10 10 4 7m10 3 3-6"/></svg>,
  ];
  return <section className="section tiers" id="Sponsorship-Tiers"><p className="eyebrow">Outcome-Based Access</p><h2>Sponsorship Tiers</h2><p className="section-intro">We do not sell "logo gore" or generic sponsorships. We align our infrastructure with your sales pipeline, offering three distinct pathways to capture the signal, the data, and the energy of the room.</p><p className="tier-swipe-hint">Swipe to compare all three tiers →</p><div className="tier-table-wrap" role="region" aria-label="Sponsorship tier comparison; scroll horizontally for all tiers" tabIndex={0}><table className="tier-table"><thead><tr><th>Tier comparison</th>{[["Brand Presence","Warm introductions to serious founders"],["Lead Generator","Authority building through strike team"],["Content Engine","Complete ecosystem presence and access"]].map(([title,desc],i)=><th key={title}><span className="tier-icon">{icons[i]}</span>{title}<small>{desc}</small></th>)}</tr></thead><tbody>{tierRows.map(([feature,...values])=><tr key={feature}><th>{feature}</th>{values.map((value,i)=><td className={value === "✓" ? "yes" : value === "—" ? "no" : ""} key={i}>{value === "—" ? "×" : value}</td>)}</tr>)}</tbody></table></div></section>;
}

export function Footer() {
  return <footer className="footer"><div className="footer-top"><div className="footer-brand"><a href="/" className="footer-logo">Fable</a><p>Our events are private and strictly curated! See if you qualify to attend via the form below.</p><LeadForm source="footer" /><small>By subscribing you agree to our Privacy Policy</small></div><div><h3>Pages</h3><a href="/">Home</a><a href="/about-us">About</a><a href="/blog">Blog & Interviews</a><a href="/attend">Attend</a><a href="/startup-speedrun">The Startup Speed Run</a><a href="/media-consent-form">Media Consent</a></div><div><h3>Use Cases</h3><a href="/founders">Founders</a><a href="/investors">Investors</a><a href="/service-providers">Service Providers</a></div><div><h3>Community</h3><a href="https://www.linkedin.com/company/your-fable">LinkedIn</a><a href="https://www.instagram.com/your_fable/">Instagram</a><a href="#">YouTube</a></div></div><div className="footer-bottom"><span>Copyright © 2026 Fable</span><span>Designed By <a href="https://www.ouab.io/">Once Upon A Business</a></span><span><a href="#">Terms of use</a> &nbsp; <a href="#">Privacy</a></span></div></footer>;
}

type FormKind = "speedrun" | "media-consent";
export function ApplicationForm({ kind }: { kind: FormKind }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const speedrun = kind === "speedrun";
  const total = speedrun ? 3 : 2;
  const update = (key: string, value: string) => setValues(old => ({ ...old, [key]: value }));
  const field = (label: string, name: string, type = "text", required = true, placeholder = "") => <label className="field" key={name}>{label}<input type={type} required={required} value={values[name] || ""} placeholder={placeholder} onChange={e => update(name, e.target.value)} /></label>;
  const choices = (label: string, name: string, options: string[]) => <fieldset className="field choice" key={name}><legend>{label}</legend>{options.map(option => <label key={option} className={values[name] === option ? "selected" : ""}><input type="radio" name={name} value={option} checked={values[name] === option} onChange={() => update(name, option)} required />{option}</label>)}</fieldset>;
  function next(e: FormEvent<HTMLFormElement>) { e.preventDefault(); if (step < total - 1) setStep(step + 1); }
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (kind === "media-consent" && values.read !== "Yes") { setStatus("error"); return; }
    setStatus("sending");
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ formType: kind, source: `/${kind === "speedrun" ? "startup-speedrun" : "media-consent-form"}`, email: values.email, name: values.name, phone: values.phone, linkedin: values.linkedin, details: values, consent: kind === "media-consent" ? values.read === "Yes" : undefined }) });
      if (!response.ok) throw new Error();
      if (speedrun) { window.location.assign("/susr-confirmation"); return; }
      setStatus("success");
    } catch { setStatus("error"); }
  }
  if (status === "success") return <div className="application success"><h2>Thank you!</h2><p>Your submission has been received.</p></div>;
  return <div className="application" id="application"><div className="progress"><div className="progress-bars">{Array.from({ length: total }, (_, i) => <span className={i <= step ? "current" : ""} key={i} />)}</div><small>Step {step + 1}/{total}</small></div><form onSubmit={step === total - 1 ? submit : next}>
    {step === 0 && <><h2>First a little bit about you</h2>{field("📛 What is your full name?", "name", "text", true, "John Smith")}{field("✉️ What is your email address?", "email", "email", true, "email@example.com")}{field("☎️ What number could we most easily reach you with?", "phone", "tel", true, "480-123-1234")}{field("🔗 What is your LinkedIn profile URL?", "linkedin", "url", speedrun, "https://www.linkedin.com/in/")}</>}
    {speedrun && step === 1 && <><h2>Now the real questions</h2>{choices("🧭 What role are you applying for?", "role", ["The Founder (Narrative & Leadership)", "The Builder (Code & Engineering)", "The Creative (Design & Brand)"])}{field("😈 Sell us on you, what do you bring to the table? Why did you pick this role?", "pitch", "text", true, "I'm it, here's why.")}</>}
    {speedrun && step === 2 && <><h2>Just some housekeeping</h2>{choices("🎥 Have you filmed content before?", "content", ["A lot", "A little", "No"])}{field("📅 Are you traveling out of Toronto anytime before end of April 2026?", "travel", "text", true, "January 1st until January 5th")}</>}
    {!speedrun && step === 1 && <><h2>The legal</h2>{choices("⚖️ I have read and agree to the Media Consent above.", "read", ["Yes", "No"])}</>}
    <div className="form-actions">{step === 0 ? <a className="button outline" href="/">Cancel</a> : <button className="button outline" type="button" onClick={() => { setStep(step - 1); setStatus("idle"); }}>Back</button>}<button className="button yellow" type="submit" disabled={status === "sending"}>{step === total - 1 ? "Submit Application" : "Next"}</button></div>
    {status === "error" && <p className="form-error" role="alert">{kind === "media-consent" && values.read !== "Yes" ? "Please agree to the Media Consent before submitting." : "Something went wrong. Please try again."}</p>}
  </form></div>;
}
