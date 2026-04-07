"use client";

interface PillarIconProps {
  name: string;
}

const ICONS: Record<string, React.ReactNode> = {
  "Story-First Thinking": (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="28" height="4" rx="2" fill="currentColor" opacity=".9"/>
      <rect x="6" y="16" width="20" height="3" rx="1.5" fill="currentColor" opacity=".6"/>
      <rect x="6" y="23" width="24" height="3" rx="1.5" fill="currentColor" opacity=".6"/>
      <rect x="6" y="30" width="14" height="3" rx="1.5" fill="currentColor" opacity=".4"/>
    </svg>
  ),
  "Visual Control": (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2.5" opacity=".9"/>
      <circle cx="20" cy="20" r="5" fill="currentColor" opacity=".9"/>
      <line x1="20" y1="4" x2="20" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
      <line x1="20" y1="30" x2="20" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
      <line x1="4" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
      <line x1="30" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
    </svg>
  ),
  "Short-Form Discipline": (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" opacity=".8"/>
      <path d="M14 20h12M20 14v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".9"/>
    </svg>
  ),
  "Collaboration Readiness": (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="16" r="5" stroke="currentColor" strokeWidth="2.5" opacity=".9"/>
      <circle cx="26" cy="16" r="5" stroke="currentColor" strokeWidth="2.5" opacity=".9"/>
      <path d="M6 32c0-5 3.6-8 8-8h12c4.4 0 8 3 8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".7"/>
    </svg>
  ),
};

export function PillarIcon({ name }: PillarIconProps) {
  return (
    <div className="pillar-icon">
      {ICONS[name] ?? null}
    </div>
  );
}
