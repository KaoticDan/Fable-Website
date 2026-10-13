import { Footer, Header, PhotoMosaic } from "./components";

export default function Home() {
  return <><Header /><main><section className="home-hero"><PhotoMosaic overlay /><div className="home-hero-content"><h1>Where unicorns are found by design, not choice</h1><p>The question is, which role do you play in the unicorns journey?</p><div className="hero-actions"><a className="button yellow" href="/founders">I'm A Founder</a><a className="button glass" href="/investors">I'm A Investor</a><a className="button glass" href="/service-providers">I'm A Service Provider</a></div></div></section></main><Footer /></>;
}
