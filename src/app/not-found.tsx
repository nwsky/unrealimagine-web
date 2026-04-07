import Link from "next/link";
import { PageShell } from "./components";

export default function NotFound() {
  return (
    <PageShell>
      <main className="not-found-page">
        <div className="not-found-bg">404</div>
        <div className="not-found-content">
          <p className="eyebrow">Lost Frame</p>
          <h1>This page doesn&apos;t exist.</h1>
          <p className="hero-text">
            But the story continues — head back and find what you&apos;re looking for.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/">Back to Home</Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
