import Link from "next/link";
import { PageShell } from "./components";
import { PillarIcon } from "./pillar-icons";
import { capabilities, featuredWorks, pillars } from "./data";
import { HeroSlideshow } from "./hero-slideshow";

const STATS = [
  { value: "2022", label: "Founded in Culver City, CA" },
  { value: "8.1", label: "IMDB rating — The Chain of Love" },
  { value: "7", label: "Production sets on location" },
  { value: "100%", label: "Story-first approach" },
];

export default function Home() {
  return (
    <PageShell>
      <main>

        {/* ── Hero ── */}
        <section className="hero hero-redesign cinematic-hero">
          <div className="hero-backdrop">
            <video autoPlay muted loop playsInline className="hero-bg-video" src="/hero-bg-video.mp4" />
          </div>
          <div className="inner">
            <div className="text-col">
              <p className="eyebrow">Culver City, CA · Micro-Drama Production Studio</p>
              <h1>Short-Form Stories.<br /><span className="hero-accent">Cinematic Impact.</span></h1>
              <p className="hero-text">
                Unreal Imagine is a Culver City-based production studio creating
                premium short-form dramas — raw emotions brought to life through
                love, heartbreak, passion, and hope. Now streaming on Vigloo.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/works">View Our Work</Link>
                <Link className="button button-secondary" href="/capabilities">Explore Capabilities</Link>
              </div>
            </div>
            <div className="img-col">
              <HeroSlideshow />
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <div className="stats-bar reveal">
          <div className="container stats-row">
            {STATS.map((s) => (
              <div key={s.label} className="stat-block">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── About ── */}
        <section className="section section-dark">
          <div className="container about-split">
            <div className="about-deco" aria-hidden="true">
              <div className="deco-circle deco-circle-1" />
              <div className="deco-circle deco-circle-2" />
            </div>
            <div className="reveal">
              <p className="eyebrow">About Unreal Imagine</p>
              <h2>Raw emotions brought to life — love, heartbreak, passion, and hope.</h2>
              <p className="section-copy">
                Founded in 2022 and based in Culver City, CA, Unreal Imagine is a
                multi-set production studio crafting micro-dramas for global streaming
                platforms. Our stories grip viewers' hearts, spark laughter, evoke
                tears, and linger long after the screen goes dark.
              </p>
              <Link className="text-link" href="/about">Learn More About Us →</Link>
            </div>
          </div>
        </section>

        {/* ── Featured Works ── */}
        <section className="section works-highlight-section">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">Featured Works</p>
                <h2>Selected concepts shaped for visual atmosphere and fast audience pull.</h2>
              </div>
              <p className="section-sidecopy">
                A curated look at the narrative tone, visual atmosphere, and
                production logic behind the UnrealImagine approach.
              </p>
            </div>

            <div className="card-grid cinematic-card-grid">
              {featuredWorks.map((work, i) => (
                <Link href={`/works/${work.slug}`} key={work.slug} className={`work-card-link reveal reveal-delay-${i + 1}`}>
                  <article className="work-card">
                    <div className="work-card-cover-wrap">
                      {work.cover
                        // eslint-disable-next-line @next/next/no-img-element
                        ? <img src={work.cover} alt={work.title} className="work-card-cover" />
                        : <div className="work-card-cover" style={{ background: 'linear-gradient(135deg, #1a2033, #0d1019)' }} />}
                    </div>
                    <div className="work-card-body">
                      <span className="card-tag">{work.status}</span>
                      <h3>{work.title}</h3>
                      <p className="work-card-tagline">{work.tagline}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="works-cta-row reveal">
              <Link className="button button-secondary" href="/works">View All Works</Link>
            </div>
          </div>
        </section>

        {/* ── Why Section ── */}
        <section className="section section-dark">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">Why UnrealImagine</p>
                <h2>A studio approach built for modern short-form storytelling.</h2>
              </div>
            </div>
            <div className="pillar-grid">
              {pillars.map((pillar, i) => (
                <article className={`pillar-card reveal reveal-delay-${(i % 4) + 1}`} key={pillar.title}>
                  <PillarIcon name={pillar.title} />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Capabilities ── */}
        <section className="section">
          <div className="container capabilities-grid">
            <div className="reveal">
              <p className="eyebrow">Capabilities</p>
              <h2>Creative development, production discipline, and partnership readiness.</h2>
              <p className="section-copy">
                From concept shaping to visual execution, UnrealImagine develops
                short-form screen stories with creative focus, cinematic control,
                and scalable production thinking.
              </p>
              <Link className="text-link" href="/capabilities">Full Capabilities →</Link>
            </div>
            <div className="cap-list-visual reveal reveal-delay-2">
              {capabilities.map((item, i) => (
                <div key={item.title} className="cap-list-item">
                  <span className="cap-list-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="cap-list-title">{item.title}</span>
                  <span className="cap-list-arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section cta-section">
          <div className="cta-bg-deco" aria-hidden="true">
            <div className="cta-ring cta-ring-1" />
            <div className="cta-ring cta-ring-2" />
          </div>
          <div className="container narrow center reveal" style={{ position: "relative", zIndex: 1 }}>
            <p className="eyebrow">Partnership</p>
            <h2>Let&apos;s build the next story together.</h2>
            <p className="section-copy">
              We welcome conversations around original projects, branded
              storytelling, production partnerships, and focused creative collaboration.
            </p>
            <div className="hero-actions center-actions">
              <Link className="button" href="/contact">Contact UnrealImagine</Link>
              <Link className="button button-secondary" href="/works">Explore Projects</Link>
            </div>
          </div>
        </section>

      </main>
    </PageShell>
  );
}
