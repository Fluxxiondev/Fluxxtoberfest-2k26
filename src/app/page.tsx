"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';

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
    <>
      <Navbar />
      <HeroSection />
      <div className="relative flex flex-col items-center py-28 px-4 sm:px-8 lg:px-10 xl:px-12 overflow-visible">
        {/* Ambient Background Accents */}
        <div className="pointer-events-none absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-secondary/60 to-bg-tertiary/80" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-teal-light/10 blur-[160px] opacity-60" />
          <div className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-purple/20 blur-[140px] opacity-40" />
          <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-teal-dark/10 blur-[120px] opacity-60" />
        </div>

        <section id="past-events" aria-labelledby="past-events-heading" className="w-full max-w-7xl relative">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide glass-corporate border border-teal-light/20 mb-6 shadow-glass">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-light opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-light" />
              </span>
              ARCHIVE
            </span>
            <h2 id="past-events-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-4">
              <span className="block text-gradient-corporate">Past Events</span>
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-light/70">A look back at our community milestones and collaborative achievements across the years.</p>
          </div>

          {/* Swiper Carousel */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 bg-gradient-to-r from-teal-dark/10 via-purple/5 to-teal-light/10 blur-2xl rounded-[3rem] opacity-60" />
            <Swiper
              modules={[Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                820: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              loop
              autoplay={{ delay: 4200, disableOnInteraction: false }}
              className="overflow-visible px-2 sm:px-4"
            >
              {events.map((event, index) => (
                <SwiperSlide key={index} className="overflow-visible pt-4 pb-12">
                  <TiltCard event={event} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-center mt-16">
            <Link href="/contact" className="group relative inline-flex items-center gap-2 rounded-full bg-teal-dark/80 backdrop-blur px-8 py-4 text-sm font-semibold text-light shadow-glass transition-all hover:bg-teal-dark hover:shadow-glass-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-light/60">
              <span>Go to Contact Page</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

/* ---------------------------
   TiltCard component - 22° tilt + teal-white shadow + live gradient text
----------------------------*/
function TiltCard({ event, index }: { event: any; index?: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imageLayerRef = useRef<HTMLDivElement | null>(null);
  const contentLayerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);
  const target = useRef({ rx: 0, ry: 0 });
  const current = useRef({ rx: 0, ry: 0 });
  const pointer = useRef({ x: 50, y: 50 });
  const reducedMotion = useRef(false);
  const revealed = useRef(false);

  // Detect reduced motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      reducedMotion.current = mq.matches;
    }
  }, []);

  // Lerp animation loop
  useEffect(() => {
    let frame: number;
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    const animate = () => {
      current.current.rx = lerp(current.current.rx, target.current.rx, 0.12);
      current.current.ry = lerp(current.current.ry, target.current.ry, 0.12);
      const el = cardRef.current;
      if (el) {
        el.style.transform = `perspective(1100px) rotateX(${current.current.rx}deg) rotateY(${current.current.ry}deg) scale(${hover ? 1.045 : 1})`;
      }
      // Parallax layers
      const img = imageLayerRef.current;
      const content = contentLayerRef.current;
      if (img) img.style.transform = `translateZ(40px) translateX(${current.current.ry * -0.8}px) translateY(${current.current.rx * 0.8}px) scale(1.05)`;
      if (content) content.style.transform = `translateZ(55px) translateX(${current.current.ry * 0.6}px) translateY(${current.current.rx * -0.6}px)`;
      frame = requestAnimationFrame(animate);
    };
    if (!reducedMotion.current) animate();
    return () => cancelAnimationFrame(frame);
  }, [hover]);

  // Entry reveal
  useEffect(() => {
    const el = cardRef.current;
    if (!el || revealed.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealed.current = true;
            el.animate([
              { opacity: 0, transform: 'translateY(30px) scale(.95)' },
              { opacity: 1, transform: 'translateY(0px) scale(1)' }
            ], { duration: 600, easing: 'cubic-bezier(.4,.2,.2,1)', delay: (index || 0) * 80 });
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion.current) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const cx = r.width / 2;
    const cy = r.height / 2;
    target.current.rx = ((y - cy) / cy) * 12; // tilt X
    target.current.ry = ((x - cx) / cx) * -12; // tilt Y
    pointer.current.x = ((x - cx) / cx) * -50 + 50;
    pointer.current.y = ((y - cy) / cy) * -50 + 50;
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(circle at ${pointer.current.x}% ${pointer.current.y}%, rgba(121,186,193,0.4), rgba(81,43,88,0) 70%)`;
    }
  };

  const handleLeave = () => {
    setHover(false);
    target.current.rx = 0;
    target.current.ry = 0;
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleLeave}
      className={`group relative mx-auto w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-shadow duration-300 overflow-hidden shadow-glass hover:shadow-glass-hover focus-within:shadow-glass-hover outline-none ${hover ? 'z-10' : 'z-0'}`}
      tabIndex={0}
      aria-label={event.title}
    >
      {/* Depth base gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-bg-secondary/40 via-bg-secondary/10 to-bg-tertiary/40 opacity-70" />
      {/* Glow dynamic */}
      <div ref={glowRef} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-plus-lighter" />
      {/* Edge ring */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
      {/* Parallax image layer */}
      <div ref={imageLayerRef} className="relative h-56 w-full overflow-hidden rounded-t-3xl will-change-transform">
        <Image
          src={event.img}
          alt={event.title}
          fill
          priority={index === 0}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.12]"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 via-bg-secondary/10 to-transparent" />
      </div>
      {/* Content layer */}
      <div ref={contentLayerRef} className="relative z-10 p-6 flex flex-col h-[220px] will-change-transform">
        <h3 className="mb-2 text-lg font-semibold leading-snug text-gradient-live">
          {event.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm text-light/70">
          {event.desc}
        </p>
        <div className="mt-auto">
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-teal-dark/80 px-4 py-2 text-xs font-medium text-light backdrop-blur transition-colors hover:bg-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-light/60 util-gradient-ring"
          >
            View More
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </article>
  );
}