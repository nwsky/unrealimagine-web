import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "../../components";
import { featuredWorks } from "../../data";
import { MediaGallery } from "../../components";
import type { WorkMedia } from "../../data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featuredWorks.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredWorks.find((w) => w.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — UnrealImagine`,
    description: project.description,
    openGraph: {
      title: `${project.title} — UnrealImagine`,
      description: project.description,
      images: project.cover ? [{ url: project.cover }] : [],
    },
  };
}

// Admin media now served via /api/admin/media endpoint
// This is a placeholder — client-side will fetch from API
function getAdminMedia(slug: string): { cover: string; media: WorkMedia[] } {
  // Server-side: return empty (data comes from API on client)
  return { cover: "", media: [] };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = featuredWorks.find((w) => w.slug === slug);
  if (!project) notFound();

  // Merge: data.ts media + admin-uploaded media
  const adminData = getAdminMedia(slug);
  const cover = adminData.cover || project!.cover || "";
  const media: WorkMedia[] = [
    ...(project!.media ?? []),
    ...adminData.media,
  ];
  const mediaData = { cover, media };

  return (
    <PageShell>
      <main className="inner-page">

        {/* Hero */}
        <section className="section page-hero detail-hero">
          <div className="detail-backdrop" />
          <div className="container detail-grid">
            <div className="detail-copy">
              <p className="eyebrow">Project Detail</p>
              <h1>{project.title}</h1>
              <p className="detail-tagline">{project.tagline}</p>
              <p className="card-meta">{project.format}</p>
              <p className="section-copy">{project.longDescription}</p>
              <div className="hero-actions">
                <Link className="button" href="/contact">Discuss This Project</Link>
                <Link className="button button-secondary" href="/works">Back to Works</Link>
              </div>
            </div>

            <div className="detail-panel">
              {cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cover} alt={project!.title} className="detail-cover-img" />
              )}
              <div className="detail-meta-block">
                <span className="card-tag">{project.status}</span>
                <div className="detail-meta-item">
                  <span className="meta-label">Tone</span>
                  <span className="meta-value">{project.tone}</span>
                </div>
                <div className="detail-meta-item">
                  <span className="meta-label">Format</span>
                  <span className="meta-value">{project.format}</span>
                </div>
                <div className="detail-meta-item">
                  <span className="meta-label">Status</span>
                  <span className="meta-value">{project.status}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Gallery */}
        {mediaData.media.length > 0 ? (
          <section className="section">
            <div className="container">
              <p className="eyebrow">Visual Materials</p>
              <h2 className="section-title">Photos &amp; Video</h2>
              <MediaGallery media={mediaData.media} />
            </div>
          </section>
        ) : (
          <section className="section">
            <div className="container">
              <div className="media-placeholder">
                <p className="eyebrow">Visual Materials</p>
                <p className="media-placeholder-text">
                  Photos and video for this project will appear here.<br />
                  Visit <code>/admin</code> to upload media.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="section section-dark">
          <div className="container two-column">
            <div className="content-card cinematic-card">
              <h2>Positioning</h2>
              <p className="section-copy">
                Built for premium short-form development conversations. Fast emotional access,
                strong visual control, and a presentation style suitable for creative partners,
                studios, and streaming platforms.
              </p>
            </div>
            <div className="content-card cinematic-card">
              <h2>Interested in this project?</h2>
              <p className="section-copy">
                We welcome development partners, co-producers, and creative collaborators.
              </p>
              <div className="hero-actions" style={{ marginTop: 20 }}>
                <Link className="button" href="/contact">Start a Conversation</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </PageShell>
  );
}
