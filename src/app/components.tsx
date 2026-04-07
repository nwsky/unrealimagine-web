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
        <div className="footer-brand-col">
          <p className="brand">UnrealImagine</p>
          <p className="footer-copy">Premium short-form storytelling, visual development, and production-ready collaboration.</p>
          {/* Social links */}
          <div className="footer-social">
            <a href="https://www.instagram.com/unrealimagine" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@unrealimagine" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@unrealimagine" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/works">Works</Link>
            <Link href="/capabilities">Capabilities</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <p className="footer-legal">© 2025 Unreal Imagine Inc. All rights reserved.</p>
        </div>
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
              : lightbox.src.includes("youtube") || lightbox.src.includes("youtu.be")
                ? <iframe src={lightbox.src} className="lightbox-video" allow="autoplay; fullscreen" allowFullScreen />
                : <video src={lightbox.src} className="lightbox-video" controls autoPlay playsInline />}
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
