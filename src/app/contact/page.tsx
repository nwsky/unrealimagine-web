import Link from "next/link";
import { PageShell, ContactForm } from "../components";

const CONTACT_INFO = [
  { label: "Email", value: "info@unrealimagine.com", href: "mailto:info@unrealimagine.com" },
  { label: "Location", value: "Culver City, CA 90230", href: null },
  { label: "Studio", value: "4200 Sepulveda Blvd #102", href: null },
];

const TOPICS = [
  { icon: "◈", title: "Original Projects", desc: "Developing a concept or series format with us." },
  { icon: "◇", title: "Branded Storytelling", desc: "Narrative-led content for commercial partners." },
  { icon: "○", title: "Production Partnership", desc: "Co-production, investment, or crew collaboration." },
  { icon: "△", title: "General Inquiry", desc: "Anything else — we read every message." },
];

export default function ContactPage() {
  return (
    <PageShell>
      <main className="inner-page">

        {/* ── Hero ── */}
        <section className="contact-hero cinematic-page-hero">
          <div className="hero-backdrop">
            <video autoPlay muted loop playsInline className="hero-bg-video" src="/hero-bg-video.mp4" />
          </div>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="contact-hero-content reveal">
              <p className="eyebrow">Contact</p>
              <h1 className="contact-hero-title">
                Let&apos;s build the<br />
                <span className="hero-accent">next story together.</span>
              </h1>
              <p className="contact-hero-sub">
                We welcome conversations around original projects, branded
                storytelling, micro-drama production, and strategic creative partnerships.
              </p>
            </div>

            {/* Info pills */}
            <div className="contact-info-row reveal reveal-delay-2">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="contact-info-pill">
                  <span className="contact-info-label">{info.label}</span>
                  {info.href
                    ? <a href={info.href} className="contact-info-value">{info.value}</a>
                    : <span className="contact-info-value">{info.value}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Main content ── */}
        <section className="section contact-main-section">
          <div className="container contact-main-grid">

            {/* Left: topics + note */}
            <div className="contact-left reveal">
              <p className="eyebrow" style={{ marginBottom: 28 }}>What We Talk About</p>
              <div className="contact-topics">
                {TOPICS.map((t) => (
                  <div key={t.title} className="contact-topic-item">
                    <span className="contact-topic-icon">{t.icon}</span>
                    <div>
                      <h3 className="contact-topic-title">{t.title}</h3>
                      <p className="contact-topic-desc">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-note">
                <p>Every inquiry is read personally.<br />We typically respond within 2 business days.</p>
                <Link className="text-link" href="/works" style={{ marginTop: 16, display: "inline-block" }}>
                  View our work first →
                </Link>
              </div>
            </div>

            {/* Right: form */}
            <div className="contact-form-wrap reveal reveal-delay-2">
              <div className="contact-form-header">
                <p className="eyebrow">Send an Inquiry</p>
                <h2 className="contact-form-title">Tell us what you&apos;re building.</h2>
              </div>
              <ContactForm />
            </div>

          </div>
        </section>

      </main>
    </PageShell>
  );
}
