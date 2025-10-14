"use client";

import React, { useEffect, useRef } from "react";
import "../app/globals.css";

interface Event {
  src: string;
  title: string;
  description: string;
}

const events: Event[] = [
  {
    src: "/images/slide1.jpg",
    title: "Future Fest 2025",
    description: "Where innovation meets imagination. Join the experience.",
  },
  {
    src: "/images/slide1.webp",
    title: "TechVision Summit",
    description: "Discover ideas shaping tomorrow’s digital landscape.",
  },
  {
    src: "/images/slide.webp",
    title: "DesignSphere Expo",
    description: "Creative minds reimagining art and technology together.",
  },
  {
    src: "/images/slide1.jpg",
    title: "AI Frontier Forum",
    description: "Pioneering discussions about the next era of AI.",
  },
  {
    src: "/images/api.webp",
    title: "Digital Culture Week",
    description: "Exploring creativity, tech, and the human connection.",
  },
];

const EventCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const total = events.length;
  const angle = 360 / total;
  const radius = 300;

  // --- Continuous spin animation ---
  useEffect(() => {
    let rotation = 0;
    let animationFrame: number;
    let paused = false;

    const spin = () => {
      if (!paused && carouselRef.current) {
        rotation += 0.1;
        carouselRef.current.style.transform = `rotateY(${rotation}deg)`;
      }
      animationFrame = requestAnimationFrame(spin);
    };
    spin();

    // Pause spin when hovering any card
    const cards = document.querySelectorAll(".card-inner");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => (paused = true));
      card.addEventListener("mouseleave", () => (paused = false));
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // --- Smooth card tilt with easing ---
  useEffect(() => {
    const cards = document.querySelectorAll(".card-inner");

    cards.forEach((card) => {
      let currentX = 0,
        currentY = 0;
      let targetX = 0,
        targetY = 0;
      let hovering = false;
      let animationFrame: number;

      const update = () => {
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        (card as HTMLElement).style.transform = `
          rotateX(${currentY}deg)
          rotateY(${currentX}deg)
          scale(${hovering ? 1.08 : 1})
        `;
        animationFrame = requestAnimationFrame(update);
      };
      update();

      card.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        targetX = ((x - centerX) / centerX) * 10; // rotateY
        targetY = ((y - centerY) / centerY) * -10; // rotateX
      });

      card.addEventListener("mouseenter", () => {
        hovering = true;
      });

      card.addEventListener("mouseleave", () => {
        hovering = false;
        targetX = 0;
        targetY = 0;
      });
    });
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel" ref={carouselRef}>
        {events.map((event, i) => (
          <div
            key={i}
            className="card"
            style={{
              transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
            }}
          >
            <div className="card-inner">
              <div className="card-glow"></div>
              <img src={event.src} alt={event.title} />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <button>View More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
