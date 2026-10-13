"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "9AM - The Arrival", image: "speedrun-arrival.jpg", body: <><p>Call time. Mic up.</p><p><strong>The Pre-Game Confessional:</strong> Who are you? What is your superpower? Why will you win? We capture your confidence before the chaos starts.</p></> },
  { title: "10AM - The Draft", image: "speedrun-draft.jpg", body: <><p>You arrive as individuals. We draft you into 5 &quot;Dream Teams&quot; live on set.</p><p>The Reaction Confessional Do you trust your new team? Who is the weak link? We capture your raw reaction to the draft.</p></> },
  { title: "11AM - The Sprint", image: "speedrun-sprint.jpg", body: <><p>Your team has 7 hours to Ideate, Validate, and Build.</p><p><strong>Your goal is to attempt to make</strong> an extremely rough Prototype, a Landing Page, and a Pitch Deck.</p><p>You have $0 budget. You must use speed and leverage to validate the idea before the clock stops.</p></> },
  { title: "630PM - The Pitch", image: "speedrun-pitch.jpg", body: <><p>Laptops close. You pitch the new venture to the judges.</p><p>The pre-pitch confessional: Are you ready? What broke? We capture the panic before you step on stage.</p></> },
  { title: "8pm - The Verdict", image: "speedrun-verdict.jpg", body: <><p>The winner is crowned. The day wraps.</p><p><strong>The Decompression Confessional:</strong> How did you perform? What would you change? We capture the post-mortem while the adrenaline is still high.</p></> },
];

export function SpeedrunTimeline() {
  const timeline = useRef<HTMLDivElement>(null);
  const [passed, setPassed] = useState(0);

  useEffect(() => {
    const update = () => {
      const markers = timeline.current?.querySelectorAll(".timeline-marker");
      if (markers) setPassed([...markers].filter(marker => marker.getBoundingClientRect().top < innerHeight / 2).length);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => { removeEventListener("scroll", update); removeEventListener("resize", update); };
  }, []);

  return <section className="section speedrun-steps solution-timeline"><div className="solution-timeline-intro"><p>How It Works</p><h2>15 Strangers. 5 Teams.<br />1 Mission. 10 Hours.</h2><p>You are not pitching your current company. You are building a new one from scratch. Here is how the day works.</p></div><div className="timeline-items" ref={timeline}><div className="timeline-progress" aria-hidden="true"><span /></div>{steps.map((step, i) => <article className="timeline-item" key={step.title}><div className="timeline-photo"><img src={`/assets/${step.image}`} alt="" /></div><span className={`timeline-marker ${i < passed ? "passed" : ""}`} aria-hidden="true" /><div className="timeline-copy"><h3>{step.title}</h3>{step.body}</div></article>)}</div></section>;
}
