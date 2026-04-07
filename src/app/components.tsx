"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { WorkMedia } from "./data";

// ── Site Header ──
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link className="brand" href="/" onClick={() => setMenuOpen(false)}>UnrealImagine</Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/works">Works</Link>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="button button-small button-outline nav-cta" href="/contact">Partner With Us</Link>
        <button className="hamburger" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <span /><span /><span />
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
          <nav className="mobile-nav">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/works" onClick={() => setMenuOpen(false)}>Works</Link>
            <Link href="/capabilities" onClick={() => setMenuOpen(false)}>Capabilities</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>Partner With Us</Link>
          </nav>
        </div>
      )}
      {/* Film strip */}
      <div className="film-strip global-film-strip" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={i} className="film-hole" />
        ))}
      </div>
    </header>
  );
}

// ── Site Footer ──
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div>
          <p className="brand">UnrealImagine</p>
          <p className="footer-copy">Premium short-form storytelling, visual development, and production-ready collaboration.</p>
        </div>
        <nav className="footer-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/works">Works</Link>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

// ── Page Shell ──
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}

// ── Media Gallery ──
export function MediaGallery({ media }: { media: WorkMedia[] }) {
  const [lightbox, setLightbox] = useState<WorkMedia | null>(null);
  return (
    <>
      <div className="media-gallery">
        {media.map((item, i) => (
          <div key={i} className="media-item" onClick={() => setLightbox(item)}>
            {item.type === "image"
              // eslint-disable-next-line @next/next/no-img-element
              ? <img src={item.src} alt={item.caption ?? ""} className="media-img" />
              : (
                <div className="media-video-thumb">
                  {item.thumb
                    // eslint-disable-next-line @next/next/no-img-element
                    ? <img src={item.thumb} alt={item.caption ?? "Video"} className="media-img" />
                    : <div className="media-video-placeholder" />}
                  <div className="play-button">▶</div>
                </div>
              )}
            {item.caption && <p className="media-caption">{item.caption}</p>}
          </div>
        ))}
      </div>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            {lightbox.type === "image"
              // eslint-disable-next-line @next/next/no-img-element
              ? <img src={lightbox.src} alt={lightbox.caption ?? ""} className="lightbox-img" />
              : <iframe src={lightbox.src} className="lightbox-video" allow="autoplay; fullscreen" allowFullScreen />}
            {lightbox.caption && <p className="lightbox-caption">{lightbox.caption}</p>}
          </div>
        </div>
      )}
    </>
  );
}

// ── Contact Form ──
export function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const errs: Record<string, string> = {};
    if (!data.name) errs.name = "Name is required";
    if (!data.email) errs.email = "Email is required";
    if (!data.inquiryType) errs.inquiryType = "Please select an inquiry type";
    if (!data.summary) errs.summary = "Please describe your project";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("sending"); setErrors({});
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch { setStatus("error"); }
  }

  if (status === "success") return (
    <div style={{ padding: "32px 0", textAlign: "center" }}>
      <p style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 12 }}>✓ Inquiry sent</p>
      <p style={{ color: "var(--muted)" }}>We&apos;ll be in touch soon.</p>
    </div>
  );

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>Name <span style={{ color: "#f87171" }}>*</span>
        <input type="text" name="name" placeholder="Your name" />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </label>
      <label>Company<input type="text" name="company" placeholder="Company or studio" /></label>
      <label>Email <span style={{ color: "#f87171" }}>*</span>
        <input type="email" name="email" placeholder="you@example.com" />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </label>
      <label>Inquiry Type <span style={{ color: "#f87171" }}>*</span>
        <select name="inquiryType" defaultValue="">
          <option value="" disabled>Select one</option>
          <option value="partnership">Partnership</option>
          <option value="project">Project Inquiry</option>
          <option value="branded">Branded Storytelling</option>
          <option value="other">Other</option>
        </select>
        {errors.inquiryType && <span className="field-error">{errors.inquiryType}</span>}
      </label>
      <label>Project Summary <span style={{ color: "#f87171" }}>*</span>
        <textarea name="summary" rows={5} placeholder="Tell us what you're building or exploring." />
        {errors.summary && <span className="field-error">{errors.summary}</span>}
      </label>
      {status === "error" && <p className="field-error">Something went wrong. Please try again.</p>}
      <button className="button submit-button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
