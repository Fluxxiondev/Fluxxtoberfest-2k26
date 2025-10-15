"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed w-full z-50 backdrop-blur-sm transition-colors ${
        scrolled ? "bg-white/70 dark:bg-slate-900/60 shadow" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          FluxxtoberFest
        </Link>

        <div className="hidden md:flex gap-6 items-center text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#mentors" className="hover:underline">Mentors</a>
          <a href="#timeline" className="hover:underline">Timeline</a>
          <a
            href="#join"
            className="rounded-full px-4 py-2 bg-indigo-600 text-white text-sm"
          >
            Join
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
