"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const events = [
    {
      img: "/images/event-2025.jpg",
      title: "FluxxtoberFest 2025",
      desc: "A celebration of innovation and creativity, bringing together global minds to collaborate and build.",
      link: "https://github.com/Fluxxiondev",
    },
    {
      img: "/images/event-2024.jpg",
      title: "FluxxtoberFest 2024",
      desc: "Pushing open-source boundaries, with over 150 successful projects built in collaboration.",
      link: "https://github.com/Fluxxiondev",
    },
    {
      img: "/images/event-2023.jpg",
      title: "FluxxtoberFest 2023",
      desc: "Where it all began, the first edition that inspired hundreds of young developers worldwide.",
      link: "https://github.com/Fluxxiondev",
    },
    {
      img: "/images/event-2022.jpg",
      title: "FluxxtoberFest 2022",
      desc: "The foundation year that sparked open collaboration and creativity for tech enthusiasts.",
      link: "https://github.com/Fluxxiondev",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6 relative overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040712] via-[#091a33] to-[#0f2942] -z-20"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#205f7b] opacity-20 blur-[100px] -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#3e2b56] opacity-10 blur-[120px] -z-10 animate-pulse-slow delay-500"></div>
        <div className="absolute top-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#2b789e]/20 to-transparent"></div>
      </div>

      {/* Past Events Section */}
      <section
        id="past-events"
        className="w-full max-w-6xl text-center relative overflow-visible"
      >
        {/* Main Heading with live gradient */}
        <h2 className="relative text-5xl sm:text-6xl md:text-7xl mb-16 font-[var(--font-press-start)] font-extrabold tracking-wide uppercase text-gradient-live">
          Past Events
        </h2>

        {/* Swiper */}
        <div className="px-10 sm:px-12 md:px-16 lg:px-20 py-12 overflow-visible">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="overflow-visible rounded-3xl"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index} className="overflow-visible px-6 py-8">
                <TiltCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Contact Page Link */}
        <Link href="/contact">
          <button className="mt-16 bg-[#246270] hover:bg-[#79BAC1] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:text-black transition-all duration-300">
            Go to Contact Page →
          </button>
        </Link>
      </section>
    </div>
  );
}

/* ---------------------------
   TiltCard component - 22° tilt + teal-white shadow + live gradient text
----------------------------*/
function TiltCard({ event }: { event: any }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 18;
    const rotateY = ((x - centerX) / centerX) * -18;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;

    const glowPosX = ((x - centerX) / centerX) * -50 + 50;
    const glowPosY = ((y - centerY) / centerY) * -50 + 50;
    setGlowX(glowPosX);
    setGlowY(glowPosY);

    setGlowStyle({
      boxShadow: `0 15px 25px rgba(26, 78, 85, 0.55),
                  0 0 30px rgba(255, 255, 255, 0.25)`,
      transition: "box-shadow 0.15s ease-out, transform 0.2s ease-out",
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    setGlowStyle({
      boxShadow:
        "0px 10px 20px rgba(26, 78, 85, 0.45), 0px 6px 12px rgba(255, 255, 255, 0.15)",
      transition: "all 0.3s ease",
      transform: "translateZ(0)",
    });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative transition-all duration-300 ease-out 
                  min-h-[420px] rounded-3xl overflow-visible cursor-pointer
                  ${isHovered ? "scale-[1.03] z-10" : "scale-100 z-0"}`}
      style={{
        margin: "0 auto",
        transformStyle: "preserve-3d",
        perspective: "1200px",
        boxShadow: isHovered
          ? ""
          : "0px 10px 20px rgba(26, 78, 85, 0.45), 0px 6px 12px rgba(255, 255, 255, 0.15)",
        ...glowStyle,
      }}
    >
      {/* Pointer-driven light reflection */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none -z-5"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, 
                                      rgba(255,255,255,0.25), 
                                      rgba(26,78,85,0) 70%)`,
            opacity: 0.6,
            mixBlendMode: "plus-lighter",
            transition: "background 0.1s ease-out",
          }}
        />
      )}

      {/* Card layers */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl -z-10"></div>
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-[#2A7886]/10 via-[#1C2C4D]/10 to-[#79BAC1]/5 blur-2xl rounded-3xl -z-10"></div>

      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
        <Image
          src={event.img}
          alt={event.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 text-left">
        {/* Event Title with live gradient */}
        <h3 className="text-xl font-semibold mb-2 text-gradient-live">
          {event.title}
        </h3>
        <p className="text-gray-100/90 text-sm leading-relaxed mb-4">
          {event.desc}
        </p>
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#246270] text-white px-5 py-2.5 rounded-full font-medium tracking-wide hover:bg-[#79BAC1] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(36,98,112,0.4)] hover:shadow-[0_0_25px_rgba(99,198,212,0.6)]"
        >
          View More →
        </a>
      </div>
    </div>
  );
}
