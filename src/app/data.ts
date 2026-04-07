export interface WorkMedia {
  type: "image" | "video";
  src: string;          // URL or /public path
  thumb?: string;       // thumbnail for video
  caption?: string;
}

export interface Work {
  slug: string;
  title: string;
  tagline: string;
  format: string;
  status: string;
  tone: string;
  description: string;
  longDescription: string;
  cover?: string;       // cover image for card
  media?: WorkMedia[];  // photos + videos, freely add more
}

export const featuredWorks: Work[] = [
  {
    slug: "the-chain-of-love",
    title: "The Chain of Love",
    tagline: "Blackmailed into his world. Seduced by the power play.",
    format: "Micro-Drama / Romance · Short-Form Series · Now Streaming",
    status: "Now streaming on Vigloo. IMDB 8.1",
    tone: "Intense. Seductive. Emotionally charged.",
    description:
      "Alexis is blackmailed into spying on her powerful boss — and finds herself pulled deep into a seductive game of power, desire, and dangerous secrets.",
    longDescription:
      "The Chain of Love is a micro-drama series produced by Unreal Imagine, now streaming on Vigloo. Alexis is blackmailed into spying on her boss and finds herself caught in a seductive, high-stakes power play where the lines between loyalty and desire blur at every turn. Starring Alyssa Corella, Zachary M. Davis, Hayley Jordyn Seat, and Daria Harnaha. Rated 8.1 on IMDB.",
    cover: "/cover-chain-of-love.jpg",
    media: [
      { type: "video", src: "/chain-of-love-video.mp4", thumb: "/cover-chain-of-love.jpg", caption: "The Chain of Love — Teaser" },
      { type: "image", src: "/cover-chain-of-love.jpg", caption: "The Chain of Love — Now Streaming on Vigloo" },
      { type: "image", src: "/chain-of-love-2.jpg", caption: "Power and tension" },
      { type: "image", src: "/chain-of-love-3.jpg", caption: "Secrets and danger" },
    ],
  },
  {
    slug: "fractured-sunset",
    title: "Fractured Sunset",
    tagline: "A fractured timeline. A single truth.",
    format: "Micro-Drama / Thriller · 6 episodes · ~8 min/ep",
    status: "In active development. Pilot script complete.",
    tone: "Slow-burn. Intimate. Disorienting in a controlled way.",
    description:
      "A woman reconstructs the last 72 hours before her sister's disappearance — told in reverse, each scene a different version of the same moment.",
    longDescription:
      "Fractured Sunset follows a woman reconstructing the last 72 hours before her sister's disappearance — told in reverse, each scene a different version of the same moment. A study in unreliable memory and emotional precision. Designed for premium streaming.",
    cover: "/cover-fractured-sunset.jpg",
    media: [
      { type: "image", src: "/cover-fractured-sunset.jpg", caption: "Fractured Sunset — mood visual" },
      { type: "image", src: "/fractured-sunset-2.jpg", caption: "Fragmented time" },
      { type: "image", src: "/fractured-sunset-3.jpg", caption: "Absence and mystery" },
      { type: "video", src: "/fractured-sunset-video.mp4", thumb: "/cover-fractured-sunset.jpg", caption: "Fractured Sunset — Teaser" },
    ],
  },
  {
    slug: "second-signal",
    title: "Second Signal",
    tagline: "The message came twice. No one believed the first one.",
    format: "Short-Form Sci-Fi · 4 episodes · ~10 min/ep",
    status: "Treatment and visual lookbook complete. Seeking development partners.",
    tone: "Tense. Cerebral. Visually stark.",
    description:
      "A communications engineer intercepts a distress signal — and realizes she sent it. A contained, high-concept thriller built around a single location and a tight cast.",
    longDescription:
      "Second Signal is a near-future thriller about a communications engineer who intercepts a distress signal — and realizes she sent it. A contained, high-concept story built around a single location and a tight cast. Pitch-ready for co-production.",
    cover: "/cover-second-signal.jpg",
    media: [
      { type: "image", src: "/cover-second-signal.jpg", caption: "Second Signal — mood visual" },
      { type: "image", src: "/second-signal-2.jpg", caption: "Signal and isolation" },
      { type: "image", src: "/second-signal-3.jpg", caption: "Contained space" },
      { type: "video", src: "/second-signal-video.mp4", thumb: "/cover-second-signal.jpg", caption: "Second Signal — Teaser" },
    ],
  },
  {
    slug: "after-the-scene",
    title: "After the Scene",
    tagline: "What happens when the cameras stop.",
    format: "Drama · 5 episodes · ~12 min/ep",
    status: "First draft complete. In refinement.",
    tone: "Dry. Honest. Quietly funny.",
    description:
      "Five people orbit the same question at a struggling regional film festival: why do they still make things no one watches?",
    longDescription:
      "After the Scene is a character study set inside a struggling regional film festival. Over four days, five people orbit the same question: why do they still make things no one watches? A story about creative obsession and quiet failure. Festival-circuit and branded content crossover potential.",
    cover: "/cover-after-the-scene.jpg",
    media: [
      { type: "image", src: "/cover-after-the-scene.jpg", caption: "After the Scene — mood visual" },
      { type: "image", src: "/after-the-scene-2.jpg", caption: "Behind the camera" },
      { type: "image", src: "/after-the-scene-3.jpg", caption: "Festival screening" },
      { type: "video", src: "/after-the-scene-video.mp4", thumb: "/cover-after-the-scene.jpg", caption: "After the Scene — Teaser" },
    ],
  },
];

export const capabilities = [
  {
    title: "Original Development",
    text: "Story concepts, format shaping, and short-form narrative framing built for emotional clarity and market relevance.",
  },
  {
    title: "Micro-Drama Production",
    text: "Production planning, visual execution, and disciplined short-form storytelling with cinematic intent.",
  },
  {
    title: "Branded Storytelling",
    text: "Narrative-led content formats designed for commercial partners without losing audience engagement.",
  },
  {
    title: "Creative Direction",
    text: "Tone, visual identity, and story-world alignment across development and presentation stages.",
  },
  {
    title: "Production Collaboration",
    text: "Flexible partnership with producers, investors, agencies, and creative teams on focused project builds.",
  },
];

export const pillars = [
  {
    title: "Story-First Thinking",
    text: "We begin with narrative clarity, emotional timing, and audience pull.",
  },
  {
    title: "Visual Control",
    text: "Every frame is shaped to carry tone, mood, and recognizability.",
  },
  {
    title: "Short-Form Discipline",
    text: "We build for compressed attention without sacrificing creative intent.",
  },
  {
    title: "Collaboration Readiness",
    text: "We work with creative, commercial, and production partners with focus and precision.",
  },
];
