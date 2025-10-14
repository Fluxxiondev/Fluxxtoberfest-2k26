"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';

export default function Home() {
  const events = [
    {
      img: "/images/event-2025.jpg",
      title: "FluxxtoberFest 2025",
      desc: "A celebration of innovation and creativity, bringing together global minds to collaborate and build. ",
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
      desc: "Where it all began, the first edition that inspired hundreds of young developers worldwide. ",
      link: "https://github.com/Fluxxiondev",
    },
    {
      img: "/images/event-2022.jpg",
      title: "FluxxtoberFest 2022",
      desc: "The foundation year that sparked open collaboration and creativity for tech enthusiasts. ",
      link: "https://github.com/Fluxxiondev",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6 relative overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0b1f3f] to-white"></div>

      {/* Past Events Section */}
      <section id="past-events" className="w-full max-w-6xl text-center relative overflow-visible">
        <h2 className="relative text-5xl sm:text-6xl md:text-7xl mb-16 font-[var(--font-press-start)] text-white font-extrabold tracking-wide uppercase glow-heading">
          <span className="absolute inset-0 blur-3xl opacity-30 rounded-lg"></span>
          <span className="relative drop-shadow-[4px_4px_12px_rgba(0,0,0,0.5)] hover:drop-shadow-[6px_6px_20px_rgba(0,0,0,0.7)] transition-all duration-500">
            Past Events
          </span>
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
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
          className="pb-12 overflow-visible rounded-3xl"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index} className="overflow-visible px-3 py-6">
              {/* Card with thicker glass effect */}
              <div className="group relative hover-pulse-glow hover-float transition-all duration-500 min-h-[450px] rounded-3xl overflow-visible">
                
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl -z-10"></div>

                {/* Card Glow Overlay */}
                <div className="absolute inset-0 opacity-20 transition-opacity duration-700 bg-gradient-to-r from-[#2A7886]/20 via-[#1C2C4D]/20 to-[#79BAC1]/20 blur-2xl rounded-3xl -z-10"></div>

                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
                  <Image
                    src={event.img}
                    alt={event.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8 relative z-10 text-left">
                  <h3 className="text-2xl font-semibold text-[#63C6D4] mb-3 shine-heading group-hover:shine-hover">
                    {event.title}
                  </h3>
                  <p className="text-gray-100/90 leading-relaxed mb-5">
                    {event.desc}
                  </p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#246270] text-white px-6 py-3 rounded-full font-medium tracking-wide hover:bg-[#79BAC1] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(36,98,112,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.8)]"
                  >
                    View More →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Styles */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes soft-pulse {
          0% { box-shadow: 0 0 25px 7px rgba(255,255,255,0.4); }
          50% { box-shadow: 0 0 40px 12px rgba(255,255,255,0.6); }
          100% { box-shadow: 0 0 25px 7px rgba(255,255,255,0.4); }
        }
        .hover-pulse-glow:hover {
          animation: soft-pulse 1.5s ease-in-out infinite;
        }

        .hover-float:hover {
          transform: translateY(-10px);
        }

        .shine-heading {
          position: relative;
          background: linear-gradient(90deg, #79BAC1, #ffffff, #79BAC1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          transition: background-size 0.5s ease;
          animation: shine 2.5s linear infinite;
        }
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .group-hover\:shine-hover {
          background-size: 300% auto !important;
        }

        .glow-heading span.relative {
          text-shadow: 0 0 5px rgba(255,255,255,0.4),
                       0 0 10px rgba(255,255,255,0.2),
                       0 0 15px rgba(255,255,255,0.1);
          transition: text-shadow 0.5s ease;
        }
        .glow-heading span.relative:hover {
          text-shadow: 0 0 7px rgba(255,255,255,0.5),
                       0 0 12px rgba(255,255,255,0.3),
                       0 0 18px rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}