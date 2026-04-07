import Link from "next/link";
import { PageShell } from "../components";
import { capabilities } from "../data";

const PROCESS = [
  { step: "01", title: "Concept", desc: "Story brief, format definition, emotional core." },
  { step: "02", title: "Development", desc: "Script, visual lookbook, tone reference." },
  { step: "03", title: "Production", desc: "On-set execution across 7 studio sets." },
  { step: "04", title: "Delivery", desc: "Platform-ready format, pitch package, partnership." },
];

export default function CapabilitiesPage() {
  return (
    <PageShell>
      <main className="inner-page">

        {/* ── Hero ── */}
        <section className="cap-hero cinematic-page-hero">
          <div className="hero-backdrop" />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="reveal">
              <p className="eyebrow">Capabilities</p>
              <h1 className="cap-hero-title">
                From idea to screen —<br />
                <span className="hero-accent">every stage covered.</span>
              </h1>
              <p className="cap-hero-sub">
                Development, production, creative direction, and partnership —
                built for the precision and pace that premium short-form demands.
              </p>
            </div>
          </div>
        </section>

        {/* ── Capabilities List ── */}
        <section className="section">
          <div className="container">
            <div className="cap-list-grid">
              {capabilities.map((item, i) => (
                <article key={item.title} className={`cap-item reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="cap-item-left">
                    <span className="cap-item-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="cap-item-right">
                    <h2 className="cap-item-title">{item.title}</h2>
                    <p className="cap-item-text">{item.text}</p>
                  </div>
                  <div className="cap-item-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="section section-dark">
          <div className="container">
            <div className="cap-process-head reveal">
              <div>
                <p className="eyebrow">How We Work</p>
                <h2>A clear process from brief to delivery.</h2>
              </div>
              <p className="section-sidecopy">
                We operate with production discipline and creative clarity —
                no wasted stages, no unclear handoffs.
              </p>
            </div>
            <div className="cap-process-row">
              {PROCESS.map((p, i) => (
                <div key={p.step} className={`cap-process-step reveal reveal-delay-${i + 1}`}>
                  <span className="cap-process-num">{p.step}</span>
                  <div className="cap-process-connector" />
                  <h3 className="cap-process-title">{p.title}</h3>
                  <p className="cap-process-desc">{p.desc}</p>
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
            <p className="eyebrow">Next Step</p>
            <h2>Ready to build something together?</h2>
            <p className="section-copy">
              Whether you are developing an original concept, exploring branded
              storytelling, or looking for a production partner — we are open
              to focused conversations.
            </p>
            <div className="hero-actions center-actions">
              <Link className="button" href="/contact">Contact UnrealImagine</Link>
              <Link className="button button-secondary" href="/works">View Works</Link>
            </div>
          </div>
        </section>

      </main>
    </PageShell>
  );
}
