"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { eventImage } from "./data";

type Entry = readonly [string, string];

export function ProblemSection({ title, intro, problems, provider = false }: { title: string; intro?: string; problems: readonly Entry[]; provider?: boolean }) {
  const section = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const node = section.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const travel = Math.max(1, rect.height - window.innerHeight);
        setProgress(Math.max(0, Math.min(1, -rect.top / travel)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return <section className={`problem-stack-section ${provider ? "provider-problem" : ""}`} ref={section}>
    <div className="problem-stack-sticky">
      {provider ? <div className="provider-problem-copy"><p>The Problem</p><h2>{title}</h2><p>{intro}</p></div> : <h2 className="problem-back-title">{title}</h2>}
      <div className="problem-card-stack">{problems.map(([heading, body], i) => {
        const start = i / problems.length;
        const local = Math.max(0, Math.min(1, (progress - start) * problems.length * 1.5));
        const offset = local * -125;
        const rotation = i * 3 - local * (i % 2 ? -13 : 13);
        return <article className="problem-stack-card" key={heading} style={{ zIndex: problems.length - i, transform: `translate3d(0, ${offset}vh, 0) rotate(${rotation}deg)` }}><h3>{heading}</h3><p>{body}</p></article>;
      })}</div>
    </div>
  </section>;
}

export function SolutionTimeline({ id, eyebrow, title, intro, solutions, images }: { id?: string; eyebrow: string; title: string; intro: string; solutions: readonly Entry[]; images: readonly string[] }) {
  const timeline = useRef<HTMLDivElement>(null);
  const [passed, setPassed] = useState(0);
  useEffect(() => {
    const update = () => {
      const markers = timeline.current?.querySelectorAll(".timeline-marker");
      if (!markers) return;
      setPassed([...markers].filter(marker => marker.getBoundingClientRect().top < window.innerHeight / 2).length);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return <section className="solution-timeline" id={id}>
    <div className="solution-timeline-intro"><p>{eyebrow}</p><h2>{title}</h2><p>{intro}</p></div>
    <div className="timeline-items" ref={timeline}><div className="timeline-progress" aria-hidden="true"><span /></div>{solutions.map(([heading, body], i) => <article className="timeline-item" key={heading}>
      <div className="timeline-photo"><img src={images[i]?.includes(".") ? `/assets/${images[i]}` : eventImage(images[i] || "01")} alt="Fable event" /></div>
      <span className={`timeline-marker ${i < passed ? "passed" : ""}`} aria-hidden="true" />
      <div className="timeline-copy"><h3>{heading}</h3><p>{body}</p></div>
    </article>)}</div>
  </section>;
}

export function StatementReveal({ text, eyebrow = "You deserve better" }: { text: string; eyebrow?: string }) {
  const section = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(/\s+/);
  useEffect(() => {
    const update = () => {
      const rect = section.current?.getBoundingClientRect();
      if (!rect) return;
      const start = window.innerHeight * .8;
      const end = window.innerHeight * .25;
      setProgress(Math.max(0, Math.min(1, (start - rect.top) / (rect.height + start - end))));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return <section className="statement-reveal" ref={section}><div><p>{eyebrow}</p><h2>{words.map((word, i) => <Fragment key={i}><span className="statement-word" style={{ opacity: .25 + .75 * Math.max(0, Math.min(1, (progress - i / words.length * .85) * 8)) }}>{word}</span>{i < words.length - 1 ? " " : null}</Fragment>)}</h2></div></section>;
}
