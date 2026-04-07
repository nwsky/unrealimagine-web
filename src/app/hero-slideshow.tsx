"use client";

import { useState, useEffect } from "react";

const IMAGES = [
  { src: "/hero-1.jpg", alt: "Cinematic Drama" },
  { src: "/hero-2.jpg", alt: "City Night" },
  { src: "/hero-3.jpg", alt: "Behind the Scene" },
  { src: "/hero-4.jpg", alt: "Emotional Portrait" },
];

const INTERVAL = 4000;
const FADE_DURATION = 1000;

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => setCurrent(index);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slideshow">
      {IMAGES.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="hero-slide-img"
          style={{
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="slide-dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`slide-dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`切换到第 ${i + 1} 张`}
          />
        ))}
      </div>
    </div>
  );
}
