import Link from "next/link";
import { PageShell } from "../components";

const STATS = [
  { value: "2022", label: "Founded" },
  { value: "7", label: "Production Sets" },
  { value: "8.1", label: "IMDB Rating" },
  { value: "1", label: "Series Streaming" },
];

const VALUES = [
  {
    num: "01",
    title: "Compact format.\nNo small ambition.",
    text: "Short-form storytelling should not mean small ambition. Compact formats can deliver emotional clarity, visual power, and strong identity — when handled with discipline.",
  },
  {
    num: "02",
    title: "Story-first.\nBuilt to present.",
    text: "We develop projects with a story-first mindset, build visual direction deliberately, and create formats ready for production, presentation, and collaboration.",
  },
  {
    num: "03",
    title: "Raw emotion.\nReal impact.",
    text: "Our stories explore love, heartbreak, passion, and hope. We craft tales that grip viewers' hearts, spark laughter, evoke tears, and linger long after the screen goes dark.",
  },
  {
    num: "04",
    title: "Global reach.\nLocal precision.",
    text: "Based in Culver City with a globally pitched approach. We build for premium streaming platforms and international audiences without losing creative focus.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <main className="inner-page">

        {/* ── Hero ── */}
        <section className="about-hero cinematic-page-hero">
          <div className="hero-backdrop">
            <video autoPlay muted loop playsInline className="hero-bg-video" src="/hero-bg-video.mp4" />
          </div>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="about-hero-inner reveal">
              <p className="eyebrow">About · Culver City, CA · Est. 2022</p>
              <h1 className="about-hero-title">
                A studio that makes<br />
                <span className="hero-accent">emotions cinematic.</span>
              </h1>
              <p className="about-hero-sub">
                Unreal Imagine is a Culver City production studio creating
                premium micro-dramas for global streaming. We bring raw human
                emotion to screen with visual precision and narrative discipline.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/works">View Works</Link>
                <Link className="button button-secondary" href="/contact">Get in Touch</Link>
              </div>
            </div>

            {/* Stats bar */}
            <div className="about-stats-row reveal reveal-delay-2">
              {STATS.map((s) => (
                <div key={s.label} className="about-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values Grid ── */}
        <section className="section">
          <div className="container">
            <div className="about-section-head reveal">
              <p className="eyebrow">What We Stand For</p>
              <h2>Four principles that shape every project.</h2>
            </div>
            <div className="about-values-grid">
              {VALUES.map((v, i) => (
                <article key={v.num} className={`about-value-card reveal reveal-delay-${(i % 4) + 1}`}>
                  <span className="about-value-num">{v.num}</span>
                  <h3 className="about-value-title">{v.title}</h3>
                  <p className="about-value-text">{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Now Streaming ── */}
        <section className="section section-dark">
          <div className="container">
            <div className="about-streaming-grid reveal">
              <div className="about-streaming-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/cover-chain-of-love.jpg" alt="The Chain of Love" className="about-streaming-img" />
                <div className="about-streaming-badge">
                  <span>● Live on Vigloo</span>
                </div>
              </div>
              <div className="about-streaming-info reveal reveal-delay-2">
                <p className="eyebrow">Now Streaming</p>
                <h2 className="about-streaming-title">The Chain of Love</h2>
                <p className="about-streaming-sub">Romance · Thriller · 2025</p>
                <p className="about-streaming-desc">
                  Alexis is blackmailed into spying on her powerful boss — pulled into
                  a seductive game of power, desire, and dangerous secrets.
                  Starring Alyssa Corella, Zachary M. Davis, Hayley Jordyn Seat, and Daria Harnaha.
                </p>
                <div className="about-streaming-meta">
                  <span className="work-meta-pill">⭐ 8.1 IMDB</span>
                  <span className="work-meta-pill">Debut Series</span>
                </div>
                <div className="hero-actions" style={{ marginTop: 28 }}>
                  <a className="button" href="https://www.vigloo.com/en" target="_blank" rel="noopener noreferrer">Watch on Vigloo</a>
                  <Link className="button button-secondary" href="/works/the-chain-of-love">Project Details</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Studio ── */}
        <section className="section">
          <div className="container about-studio-grid">
            <div className="reveal">
              <p className="eyebrow">Our Studio</p>
              <h2>7 sets.<br />One vision.</h2>
              <p className="section-copy" style={{ marginTop: 20 }}>
                Our Culver City studio features 7 fully equipped production sets,
                giving us the flexibility to shoot diverse stories with consistent
                cinematic quality — from intimate character dramas to high-tension
                thriller sequences, all under one roof.
              </p>
              <div className="hero-actions" style={{ marginTop: 32 }}>
                <Link className="button" href="/contact">Partner With Us</Link>
                <Link className="button button-secondary" href="/capabilities">Our Capabilities</Link>
              </div>
            </div>
            <div className="about-studio-facts reveal reveal-delay-2">
              {[
                { label: "Location", value: "4200 Sepulveda Blvd #102\nCulver City, CA 90230" },
                { label: "Founded", value: "June 2022" },
                { label: "Focus", value: "Micro-Drama · Short-Form · Premium Streaming" },
                { label: "Contact", value: "info@unrealimagine.com" },
              ].map((f) => (
                <div key={f.label} className="about-fact-row">
                  <span className="about-fact-label">{f.label}</span>
                  <span className="about-fact-value">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </PageShell>
  );
}
