"use client";

import { useState } from "react";

const benefits = [
  {
    label: "The Asset",
    title: "Hours of footage of you pitching, leading, and executing",
    detail: "We hand you the raw files of you in the trenches, building, debating, and shipping. This is months of high quality content for your LinkedIn and Twitter.",
    image: "/assets/speedrun-asset.jpg",
  },
  {
    label: "The Exposure",
    title: "Cross-promote with the other participants",
    detail: "You aren't just broadcasting to your network. You are leveraging ours. Every participant amplifies the cohort. Every clip Fable posts puts you in front of Tier-1 investors. It is algorithmic dominance by design.",
    image: "/assets/speedrun-exposure.avif",
  },
  {
    label: "The Truth",
    title: "VCs invest in you, not your idea",
    detail: "Ideas are cheap. Execution is everything. Investors need to see how you handle friction, deadlines, and zero budget. This isn't a demo day; it is a character test. Prove you can survive the sprint, and a VC might reach out.",
    image: "/assets/event-12.avif",
  },
];

export function SpeedrunBenefits() {
  const [active, setActive] = useState<number | null>(null);
  return <section className="speedrun-benefits" id="why">
    <div className="speedrun-benefits-intro"><p>Why You Should Participate</p><h2>Build A Personal Brand That Outlives Any Startup Idea</h2><p>Most founders work in the dark for 2 years. We force you into the spotlight for 10 hours.</p></div>
    <div className={`speedrun-benefit-cards ${active !== null ? "has-active" : ""}`} onMouseLeave={() => setActive(null)}>{benefits.map((item, i) => <button key={item.label} type="button" className={`speedrun-benefit-card ${active === i ? "active" : active !== null ? "inactive" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => { if (window.matchMedia("(hover: none)").matches) setActive(active === i ? null : i); }} onKeyDown={e => { if (e.key === "Escape") setActive(null); }} aria-expanded={active === i}>
      <img src={item.image} alt="" /><span className="speedrun-benefit-shade" /><span className="speedrun-benefit-copy"><span className="speedrun-benefit-label">{item.label}</span><strong>{item.title}</strong><span className="speedrun-benefit-detail">{item.detail}</span></span>
    </button>)}</div>
  </section>;
}

const roles = [
  { number: "01", label: "Narrative & Leadership", title: "The Visionary", image: "/assets/speedrun-visionary.avif", description: "You are the CEO. Your job is not to code. Your job is to lead, to pivot, and to sell the vision while the world burns around you.", test: "Can you look a camera in the lens and convince an investor to wire you $100k for an idea you had this morning?" },
  { number: "02", label: "Code & Engineering", title: "The Builder", image: "/assets/speedrun-builder.avif", description: "You are the CTO. You ship. While the Founder talks, you build. We don't need clean code. We need working code.", test: "Can you deploy a functional MVP in a day?" },
  { number: "03", label: "Design & Brand", title: "The Creative", image: "/assets/speedrun-creative.avif", description: "You are the Brand. You build the landing page, the deck, and the \"feel.\" You make a 4-hour startup look like a Series A company.", test: "Can you build a high-converting landing page and a killer pitch deck before lunch?" },
];

export function SpeedrunUnicorn() {
  return <section className="speedrun-unicorn"><header className="speedrun-photo-heading speedrun-unicorn-heading"><h2>The 3-Person Unicorn</h2><p>There are only 15 seats. 5 Teams. 3 Roles per team. Which one are you?</p></header><div className="speedrun-role-panels">{roles.map((role, i) => <article className="speedrun-role-panel" id={`layout356-anchor-${["one", "two", "three"][i]}`} key={role.number} style={{ zIndex: i + 1 }}><div className="speedrun-role-inner"><a className="speedrun-role-label" href={`#layout356-anchor-${["one", "two", "three"][i]}`}><span>{role.number}</span>{role.label}</a><div className="speedrun-role-content"><div><h3>{role.title}</h3><p>{role.description}<br /><br />{i < 2 && <strong>The Test: </strong>}{role.test}</p></div><img src={role.image} alt="" /></div></div></article>)}</div></section>;
}

export function SpeedrunApplicationHeading() {
  return <header className="speedrun-photo-heading speedrun-application-heading"><h2>Interested In Participating?</h2><p>Fill out the form below to apply!</p></header>;
}
