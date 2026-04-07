import Link from "next/link";
import { PageShell } from "../components";
import { featuredWorks } from "../data";

export default function WorksPage() {
  const [featured, ...rest] = featuredWorks;

  return (
    <PageShell>
      <main className="inner-page" suppressHydrationWarning>

        {/* ── Page Hero ── */}
        <section className="works-page-hero cinematic-page-hero">
          <div className="hero-backdrop">
            <video autoPlay muted loop playsInline className="hero-bg-video" src="/hero-bg-video.mp4" />
          </div>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <p className="eyebrow">Works</p>
            <h1 className="works-page-title">
              Stories that move.<br />
              <span className="hero-accent">Dramas that stay.</span>
            </h1>
            <p className="works-page-sub">
              Micro-dramas built for cinematic impact — from streaming originals to projects in active development.
            </p>
          </div>
        </section>

        {/* ── Featured: Now Streaming ── */}
        <section className="section works-featured-section">
          <div className="container">
            <p className="eyebrow">Now Streaming</p>
            <Link href={`/works/${featured.slug}`} className="work-featured-link reveal">
              <article className="work-featured-card">
                <div className="work-featured-info">
                  <span className="work-badge work-badge-streaming">● Live on Vigloo</span>
                  <h2 className="work-featured-title">{featured.title}</h2>
                  <p className="work-featured-tagline">{featured.tagline}</p>
                  <p className="work-featured-desc">{featured.description}</p>
                  <div className="work-featured-meta">
                    <span className="work-meta-pill">⭐ 8.1 IMDB</span>
                    <span className="work-meta-pill">Romance · Thriller · 2025</span>
                  </div>
                  <span className="work-view-link">View Project →</span>
                </div>
                <div className="work-featured-visual">
                  {featured.cover
                    // eslint-disable-next-line @next/next/no-img-element
                    ? <img src={featured.cover} alt={featured.title} className="work-featured-img" />
                    : <div className="work-featured-img work-featured-placeholder" />}
                  <div className="work-featured-overlay" />
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* ── In Development ── */}
        <section className="section works-grid-section">
          <div className="container">
            <div className="works-grid-header reveal">
              <div>
                <p className="eyebrow">In Development</p>
                <h2>Projects taking shape.</h2>
              </div>
              <p className="section-sidecopy">
                Narrative concepts and visual formats at various stages of development —
                each built for focused partnership and premium streaming.
              </p>
            </div>

            {/* Asymmetric editorial layout: big left + stacked right */}
            <div className="works-editorial-grid reveal">
              {/* Left: large card */}
              <Link href={`/works/${rest[0].slug}`} className="work-editorial-main-link">
                <article className="work-editorial-card work-editorial-main">
                  <div className="work-editorial-img-wrap">
                    {rest[0].cover
                      // eslint-disable-next-line @next/next/no-img-element
                      ? <img src={rest[0].cover} alt={rest[0].title} className="work-editorial-img" />
                      : <div className="work-editorial-img work-editorial-placeholder" />}
                    <div className="work-editorial-gradient" />
                  </div>
                  <span className="work-editorial-num">01</span>
                  <div className="work-editorial-body">
                    <span className="work-editorial-status">{rest[0].status.split(".")[0]}</span>
                    <h3 className="work-editorial-title">{rest[0].title}</h3>
                    <p className="work-editorial-tagline">{rest[0].tagline}</p>
                    <p className="work-editorial-desc">{rest[0].description}</p>
                    <span className="work-editorial-cta">View Project →</span>
                  </div>
                </article>
              </Link>

              {/* Right: stacked cards */}
              <div className="work-editorial-stack">
                {rest.slice(1).map((work, i) => (
                  <Link key={work.slug} href={`/works/${work.slug}`} className="work-editorial-side-link">
                    <article className="work-editorial-card work-editorial-side">
                      <div className="work-editorial-img-wrap">
                        {work.cover
                          // eslint-disable-next-line @next/next/no-img-element
                          ? <img src={work.cover} alt={work.title} className="work-editorial-img" />
                          : <div className="work-editorial-img work-editorial-placeholder" />}
                        <div className="work-editorial-gradient" />
                      </div>
                      <span className="work-editorial-num">0{i + 2}</span>
                      <div className="work-editorial-body">
                        <span className="work-editorial-status">{work.status.split(".")[0]}</span>
                        <h3 className="work-editorial-title">{work.title}</h3>
                        <p className="work-editorial-tagline">{work.tagline}</p>
                        <p className="work-editorial-desc">{work.description}</p>
                        <span className="work-editorial-cta">View Project →</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section section-dark">
          <div className="container narrow center reveal">
            <p className="eyebrow">Partnership</p>
            <h2>Let&apos;s build the next story together.</h2>
            <p className="section-copy">
              We welcome conversations around original projects, branded
              storytelling, and focused creative collaboration.
            </p>
            <div className="hero-actions center-actions">
              <Link className="button" href="/contact">Contact UnrealImagine</Link>
              <Link className="button button-secondary" href="/">Back Home</Link>
            </div>
          </div>
        </section>

      </main>
    </PageShell>
  );
}
