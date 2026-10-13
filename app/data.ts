export const eventPhotos = ["09", "08", "22", "10", "11", "12", "14", "13", "18", "15", "17", "01", "04", "03", "05", "06", "16", "19", "21"];
export const eventImage = (n: string) => `/assets/event-${n}.avif`;

export const nav = [
  ["For Founders", "/founders"], ["For Investors", "/investors"],
  ["For Service Providers", "/service-providers"], ["Upcoming Events", "/events"],
  ["About Us", "/about-us"], ["The Community", "/the-community"],
  ["Blogs & Past Interviews", "/blog"], ["Get Whitelisted", "/attend"],
] as const;

export const eventTypes = [
  { title: "Founder & Investor Events", body: "The core community event. One hundred vetted founders and fifty active investors centered in an intimate room designed to optimize signal-to-noise for immediate deal flow.", image: "26" },
  { title: "VC & LP Events", body: "Zero founders allowed. A private, institutional-only gathering where fund managers build direct rapport with Limited Partners and Family Offices to secure commitments for their next fund.", image: "09" },
  { title: "Pitch Competitions", body: "Energy captured and focused. High-traction founders move from the networking floor to the stage, pitching directly to a room of warmed investors ready to provide tactical feedback and capital. We do both virtual and live.", image: "29" },
];

export const model = [
  { label: "Vetting", title: "Curated Events", body: "Signal starts at the door. Only founders with verifiable traction and investors with active, deployable mandates enter the room. The result is a strictly capped environment where every handshake is backed by institutional intent.", image: "model-vetting.jpg" },
  { label: "Content", title: "Dedicated Video Team", body: "Presence is converted into a long-term digital asset. Studio-quality interviews and media capture turn a three-hour window into an authority-building engine for your next raise or your next fund.", image: "model-content.jpg" },
  { label: "Community", title: "The Dealflow Community", body: "The spark of a single event is bridged into year-round access. A vetted ecosystem provides operational triage for founders and thesis-aligned deal routing for investors, ensuring the momentum of the circuit never stops.", image: "event-07.avif" },
];

export const roles = {
  founders: {
    title: "Think You're The Next Unicorn?",
    intro: "We have the highest ROI room for founders looking to raise at every conference we are at.",
    heroImage: "12", heroButton: "Sign up",
    problemTitle: "The Problem",
    problems: [
      ["The Pitching Lottery", "Fundraising is currently a volume game played in inefficient environments. You burn runway to attend 40,000-person conferences where you are a needle in a haystack of noise."],
      ["Window-Shopping Investors", "The \"conference grind\" is filled with \"tourist\" investors who aren't actually deploying. You waste high-value energy on meetings that lead to zero follow-on capital."],
      ["Fragmented Access", "Access to high-net-worth allocators is traditionally gated by who you know, not what you’re building. Without an existing network, the most valuable rooms remain out of reach."],
      ["The Ghosting Epidemic", "Pitching to a generic crowd results in zero feedback and zero momentum. You leave the conference floor with a stack of business cards but no verifiable path to a term sheet."],
    ],
    solutionTitle: "Access is No Longer a Hierarchy",
    solutionIntro: "Most conferences are a lottery where founders burn through thousands for low-signal meetings. Fable replaces the noise with a precision-engineered discovery engine: 150-person rooms packed with active, deployable capital.",
    solutions: [
      ["Every Investor Is Vetted", "We screen every investor for \"Dry Powder\" and an active deployment mandate. You won't waste time pitching window shoppers or tourist investors who aren't writing checks."],
      ["Get Interviewed By Our Team", "Our traveling Strike Team captures studio-quality content on-site. We turn your presence into high-fidelity digital assets that build authority and visibility for your fundraise long after the event ends."],
      ["Global Consistency", "Fable strikes the world’s most influential tech conferences with the same operational rigor. Whether you’re in Tokyo or Paris, our room is where the real deals happen before the conference badge line even opens."],
    ],
    statement: "Conferences are built to sell tickets, not to fund companies. Survival depends on finding the one room where the noise stops and the active capital is actually concentrated. Unicorns are found by design, not chance.",
  },
  investors: {
    title: "Looking For Your Next Unicorn?",
    intro: "The world's best founders and most active capital converge four times a year in rooms designed for serious conversations. This is where allocation happens.",
    heroImage: "15", heroButton: "Apply",
    problemTitle: "The Problem",
    problems: [
      ["The Noise Ratio", "Drowning in \"tourist\" pitches from founders who aren't ready to raise makes major conferences a bad use of your time. The signal-to-noise ratio is structurally broken."],
      ["Diluted Conviction", "A packed schedule of \"coffee chats\" eats up the hours needed for deep diligence and conviction. Real discovery shouldn't feel like an endurance test."],
      ["Mismatched Mandates", "Traditional networking mixers are unvetted. You spend the week wading through companies that don't fit your stage, sector, or thesis."],
      ["Fragmented Deal Flow", "High-conviction deals are scattered across the globe. Without an institutional home base at the major circuits, you miss the breakout signal before the rest of the market catches up."],
    ],
    solutionTitle: "Where capital actually deploys",
    solutionIntro: "Fable stages events where active allocators sit across from serious founders. No window shoppers. No tire kickers. Only people who move capital.",
    solutions: [
      ["Every Founder Is Vetted", "We verify the team, their idea, and their plan before an application is approved. Every founder in the room has been vetted & validated for fundability, reducing your sourcing time from days to minutes."],
      ["Bring Your Portco's", "Fast-track your existing portfolio by introducing them to our network of fresh capital. Skip the coffee-chat grind and fuel their follow-on rounds with pre-vetted Series A/B investors."],
      ["Raise For Your Fund", "Most VCs spend months chasing LPs in inefficient, fragmented environments. Fable centralizes institutional capital, placing GPs in the same room as Family Offices and Sovereign Wealth funds who are actively looking to hit their mandates."],
      ["Global Consistency", "We operate as your global discovery engine. Our predictable format ensures you always have a high-signal \"home base\" at every major tech circuit globally to source your next breakout winner."],
    ],
    statement: "A packed travel schedule doesn't guarantee a single fundable deal. The conference floor is a flood of low-signal pitches and \"coffee chats\" that eat up the very time needed for deep conviction. Real discovery shouldn't feel like a needle in a haystack. High-conviction deals happen when the crowd is stripped away, leaving only the top 1% of vetted talent and institutional mandates in a single, off-the-record environment. Unicorns are found by design, not chance.",
  },
  "service-providers": {
    title: "Don't Buy The Booth, Buy The Conversation",
    intro: "Most event sponsorships are a $20k gamble on unvetted foot traffic. We eliminate the waste by centering your business at the only high-density meeting point for decision-makers at the conference. This is your direct lane to sit across from the CEOs who need your expertise and the VCs who can refer you to their entire portfolio.",
    heroImage: "18", heroButton: "Sponsor An Event",
    problemTitle: "The Sponsorship Vacuum",
    problems: [
      ["The $20k Logo", "Traditional conferences charge tens of thousands for passive brand exposure. You pay for a banner or a booth that 40,000 \"tourists\" walk past without ever engaging with your team or your product."],
      ["The Data Void", "Most events treat partners as donors rather than growth engines. You leave the conference floor with a stack of random business cards but zero verifiable data or qualified leads to track your ROI."],
      ["The Engagement Gap", "Networking at massive mixers is sporadic and unvetted. Your team wastes hours in awkward conversations with attendees who lack the budget, authority, or traction to ever become a customer."],
      ["Zero Content Leverage", "Sponsoring an event usually begins and ends with the physical presence. You spend six figures on a one-time activation and walk away with no high-fidelity media assets to build authority on your social channels."],
    ],
    solutionTitle: "Where capital actually deploys",
    solutionIntro: "Fable stages events where active allocators sit across from serious founders. No window shoppers. No tire kickers. Only people who move capital.",
    solutions: [
      ["Total Ecosystem Presense", "Visibility isn't just a logo on a screen. Every vetted registrant and attendee, founders with traction and investors with mandates are exposed to your brand through a multi-touch digital and physical strategy before and while they are in the room."],
      ["The \"Trojan Horse\" Strategy", "Use our traveling \"Strike Team\" crew to own the room. We provide a dedicated camera person so you can film interviews with high-value leads on-site, turning awkward networking into an authority-building content engine for your socials."],
      ["Quality, Vetted Leads", "Stop hunting for contacts. Gain access to the full registrant list, including custom pre-qualification data, allowing your sales team to reach out to warm, vetted leads immediately post-event."],
    ],
    statement: "Stop paying for \"brand awareness\" that never converts. We eliminate the sponsorship headaches by placing your team at the center of the industry's next power players. Whether they are deploying today or scaling for tomorrow, our Strike Team captures the moment, turning these high-stakes introductions into a permanent content engine for your business. Get the data, own the room, and capture the content.",
  },
} as const;
