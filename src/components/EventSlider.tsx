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
  const radius = 300; // reduced radius → cards are closer together

  // Parallax rotation on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const rotateY = ((e.clientX - innerWidth / 2) / innerWidth) * 30;
      const rotateX = ((e.clientY - innerHeight / 2) / innerHeight) * -15;

      if (carouselRef.current) {
        carouselRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
            <img src={event.src} alt={event.title} />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <button>View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
