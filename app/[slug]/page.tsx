import { notFound } from "next/navigation";
import { ApplicationForm, EventTypes, Footer, Header, LeadForm, Model, PhotoGrid, PhotoMosaic, SponsorshipTiers, WhitelistCallout } from "../components";
import { eventImage, roles } from "../data";
import { ProblemSection, SolutionTimeline, StatementReveal } from "../role-sections";
import { SpeedrunTimeline } from "../speedrun-timeline";
import { SpeedrunBenefits, SpeedrunUnicorn, SpeedrunApplicationHeading } from "../speedrun-sections";

const comingSoon = ["events", "the-community", "blog"];

function RolePage({ slug }: { slug: keyof typeof roles }) {
  const role = roles[slug];
  const isProvider = slug === "service-providers";
  return <>
    <section className="role-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.7),rgba(0,0,0,.15)),url('${eventImage(role.heroImage)}')` }}><div className="role-hero-content"><h1>{role.title}</h1><p>{role.intro}</p>{isProvider ? <div className="hero-actions"><a className="button yellow" href="#Sponsorship-Tiers">Sponsor An Event</a><a className="button glass" href="#the-fable-way">Learn More</a></div> : <><LeadForm source={`${slug}-hero`} label={role.heroButton} compact /><small>By clicking Sign Up you&apos;re confirming that you agree with our Terms and Conditions.</small></>}</div></section>
    <section className="logo-strip section"><h2>Companies That Have Attended Events Hosted By Our Team</h2><div>{[5,23,17,22,2,24,13,19,20,16,7,15,10,8,11,9,1,6,18,14].map(n => <img src={`/assets/logo-${n}.avif`} alt="Company logo" key={n} />)}</div></section>
    <ProblemSection title={role.problemTitle} intro={isProvider ? "Most events treat partners as a donor base rather than a growth engine." : undefined} problems={role.problems} provider={isProvider} />
    <SolutionTimeline id="the-fable-way" eyebrow={slug === "founders" ? "The Raising Struggle" : "The Fable Way"} title={role.solutionTitle} intro={role.solutionIntro} solutions={role.solutions} images={slug === "founders" ? ["01", "timeline-interview.avif", "15"] : slug === "investors" ? ["01", "06", "28", "15"] : ["06", "model-content.jpg", "01"]} />
    <StatementReveal text={role.statement} />
    {slug === "founders" && <WhitelistCallout source="founders-middle" />}
    {!isProvider && <Model />}
    <EventTypes />
    {isProvider ? <><SponsorshipTiers /><WhitelistCallout source="sponsor" heading="Sponsor A Fable Event" text="Brand awareness, lead data, and real video for you to post." label="I'm Interested" /></> : slug === "investors" ? <WhitelistCallout source="investors-bottom" /> : null}
    <PhotoGrid />
  </>;
}

const team = [
  ["Danyal Atif", "Our Founder", "Vision, Sales, Operations, Onsite Event Management", "Danyal built the operational infrastructure that scaled Fable’s predecessor from zero to $500k in twelve months. With 139 confirmed projects across marketing, sales, systems, and project management, he engineers the high-leverage frameworks that turn conference noise into a repeatable deal engine.", "danyal-atif"],
  ["Eli Meerson", "Our Co-Founder & Angel Investor", "Business Analysis, Attendee Vetting, Onsite Event Management", "Eli provides the rigorous economic modeling required to navigate global capital markets. With a five-year track record of 25% annual ROI in market dynamics, he ensures Fable’s curation is backed by high-conviction data and structural market analysis.", "eli-meerson"],
  ["Frank Frausto Jr.", "Our Chief Marketing Officer", "Marketing, Sales Strategy, Community Growth", "A 13-year Google veteran, Frank developed the original outbound sales strategy for Google AdWords. He translates Fable’s \"Velvet Rope\" prestige into a predictable customer acquisition machine, specializing in high-fidelity lead generation for global brands.", "frank-frausto-jr"],
  ["Marcos Eirin", "Our Chief Creative Officer", "Branding, Design, Creative Direction", "An award-winning strategist with a portfolio including Audi, UNICEF, and the G20, Marcos defines the Fable aesthetic. He ensures every touchpoint—from digital branding to on-site immersion—meets the \"Old Money\" standard required to command Tier-1 attention.", "marcos-eirin"],
  ["Sahira Mirza", "Our Chief Of Staff", "Team Management, Finance, Admin", "A top 1% performer at American Express and Rogers for over two decades, Sahira manages the fiscal integrity of the circuit. She oversees sponsorship management and financial governance, ensuring operational stability during high-velocity global tours.", "sahira-mirza"],
] as const;
const advisors = [
  ["Shaima Al Yansuri", "Events Director - Ex-Tech Summit", "shaima-al-yansuri", "Shaima leads all vendor sourcing and management, from high-end catering to on-site AV. With a background as a team leader at Tech Summit."],
  ["Daniel Rubio Ferrer", "Head Of Curation", "daniel-rubio-ferrer", "Daniel is responsible for the \"Velvet Rope\" standard that defines Fable. He manually screens every attendee to ensure every room maintains the $1B AUM signal."],
  ["Alec d'Amours", "Videographer & Sales Person", "alec-d-amours", "Alec is a former Sous Chef for 2,000-guest galas, he manages on-site logistics and captures high-fidelity media to ensure every event meets the \"Old Money\" aesthetic."],
  ["Marcus Dickinson", "Operations Advisor - Ex-Bell", "marcus-dickinson", "A systems specialist with 20 years of experience, Marcus built the original self-checkout infrastructure for Walmart and McDonald's."],
  ["Farah Iqbal", "Strategic Planning Advisor - Ex-Bell", "farah-iqbal", "Farah is a program management veteran who has delivered technology transformations valued up to $50M. She supports Fable in its strategic planning."],
  ["Irtaza Ahmad", "Go-To-Market Advisor", "irtaza-ahmad", "Irtaza builds the scalable revenue systems that fuel Fable's growth. A specialist in technical infrastructure and lead generation for Silicon Valley startups."],
] as const;

const aboutStatement = 'Fable Is Our Trojan Horse", as founders, builders, and consultants, we have all of the ideas but needed a better way to validate and fund our ideas. With unemployment rates up, more startups are looking for funding than ever before and so we decided to build Fable as our Trojan horse to help our projects get funding and help the commuity as a whole.';

function About() { return <><section className="mosaic-hero"><PhotoMosaic overlay /><h1>For Founders, By Founders</h1></section><StatementReveal text={aboutStatement} eyebrow="Why We Do It" /><section className="section team">{team.map(([name,title,skills,bio,slug],i)=><article key={name} id={`member-${i+1}`}><div><span className="eyebrow">0{i+1} &nbsp; {title}</span><p>{skills}</p><h2>{name}</h2><p>{bio}</p></div><img src={`/assets/person-${slug}.png`} alt={name} /></article>)}</section><section className="section advisors"><div className="advisor-grid">{advisors.map(([name,title,slug,bio])=><article key={name}><img src={`/assets/person-${slug}.png`} alt={name} /><h3>{name}</h3><p>{title}</p><p>{bio}</p></article>)}</div></section><section className="proof-stats" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,.25)),url('${eventImage("12")}')`}}><div><p className="eyebrow">The Proof</p><h2>Our Previous Run At Fractl</h2><p>We don't measure success in attendees. We measure it in outcomes, capital deployed, companies funded, relationships that matter. Here's what we've built.</p></div><div className="stat-grid">{[["1200+","Registrants Per Event"],["80K+","Total Registrants"],["$1B+","AUM In Every Room"],["37","Events Across The Globe In One Year"]].map(([n,t])=><div key={n}><strong>{n}</strong><span>{t}</span></div>)}</div></section><PhotoGrid /><WhitelistCallout source="about" /></> }

function Speedrun() { return <><section className="role-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.8),transparent),url('${eventImage("15")}')`}}><div className="role-hero-content"><h1>Apply For The Startup Speed Run</h1><p>The cameras are rolling. The clock is ticking. This isn&apos;t a hackathon, it’s a content mining operation for your personal brand.</p><div className="hero-actions"><a href="#application" className="button yellow">Apply</a><a href="#why" className="button glass">Learn More</a></div></div></section><SpeedrunTimeline /><SpeedrunBenefits /><SpeedrunUnicorn /><section className="speedrun-application"><SpeedrunApplicationHeading /><ApplicationForm kind="speedrun" /></section></> }

const mediaText = [
  "By submitting this form, I confirm that I have read and understood the Media Consent below and that I agree to its terms.",
  "I, the undersigned, hereby consent to the recording and use of my photograph, likeness, image, voice, and/or interview in any publication, video, audio recording, social media post, advertisement, pamphlet, or other promotional material produced by Fable, any of its associated or affiliated companies, Danyal Atif, and Eli Meerson (collectively, “Fable”). I understand that these materials may be used to promote or further the business and activities of Fable, in any media now known or later developed, worldwide and for an indefinite period.",
  "I understand that I will not receive separate compensation or consideration from Fable or anyone else for the permission granted in this Consent, nor for the actual publication or use of my photograph, likeness, or interview. By agreeing to this Consent, I release Fable from any and all liability that may occur as a direct or indirect result of the use of my photograph, likeness, identity, or interview in such materials, including but not limited to the use of any quotations from my interview.",
  "I understand that Fable may update or revise this Media Consent from time to time. The version posted on Fable’s website at the time I submit this form will apply to my submission. Fable may contact me using the email address and/or phone number I provide in this form for purposes related to the use of my recording, including clarification, approvals, or administrative matters.",
];
function MediaConsent() { return <><section className="section media-copy"><h1>Media Consent Form</h1><p className="eyebrow">Effective date: February 22, 2026</p><div>{mediaText.map(p=><p key={p}>{p}</p>)}<p>By checking the box and submitting this form, I confirm that:</p><ul><li>I am at least 18 years of age, or I am the parent/legal guardian of the minor named in this form; and</li><li>I consent to the collection and use of my (or the minor’s) personal information as described above.</li></ul></div></section><section className="section form-section"><ApplicationForm kind="media-consent" /></section></> }

function ComingSoon() { return <section className="coming-hero"><PhotoMosaic overlay /><div><h1>This Page Is Coming Soon!</h1><p>In the mean time, reserve your seat at Fable&apos;s upcoming events across the globe.</p><a href="/attend" className="button yellow">Get Whitelisted</a></div></section> }
function Attend() { return <section className="attend-page"><section className="whitelist section"><div className="whitelist-inner"><h1>Get Whitelisted For All Our Events</h1><p>Reserve your seat at Fable&apos;s upcoming events across the globe.</p><LeadForm source="attend" /><small>By submitting this form you agree to our Terms and Conditions.</small></div></section></section> }
function Confirmation() { return <section className="confirmation-hero"><div><h1>Thank you for applying!</h1><p>We will reach out for a interview if you match what we are looking for. Keep an eye out for a message from us!</p></div></section> }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in roles) && ![...comingSoon, "attend", "about-us", "startup-speedrun", "media-consent-form", "susr-confirmation"].includes(slug)) notFound();
  return <><Header /><main>{slug in roles ? <RolePage slug={slug as keyof typeof roles} /> : slug === "about-us" ? <About /> : slug === "startup-speedrun" ? <Speedrun /> : slug === "media-consent-form" ? <MediaConsent /> : slug === "attend" ? <Attend /> : slug === "susr-confirmation" ? <Confirmation /> : <ComingSoon />}</main><Footer /></>;
}
