"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 min-h-screen bg-[#f8fafc] overflow-hidden">
      <div className="backdrop-blur-xl bg-white/40 border border-white/60 shadow-2xl rounded-2xl p-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      {/* LEFT: Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4a1761] leading-tight mb-4">
          Fluxxtoberfest <span className="text-[#047481]">2026</span>
        </h1>
        <p className="text-lg md:text-xl text-[#425466] mb-8 font-medium">
          Celebrate Open Source • Learn • Build • Contribute
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <button className="bg-[#047481] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            Explore Projects
          </button>
          <button className="border-2 border-[#4a1761] text-[#4a1761] px-6 py-3 rounded-xl font-semibold hover:bg-[#4a1761] hover:text-white transition-colors duration-300">
            Learn More
          </button>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-6 mt-10 text-[#4a1761] font-semibold">
          <p>
            <span className="text-[#047481] text-xl font-bold">100+</span>{" "}
            Projects
          </p>
          <p>
            <span className="text-[#047481] text-xl font-bold">50+</span>{" "}
            Mentors
          </p>
          <p>
            <span className="text-[#047481] text-xl font-bold">🌐</span> Global
            Community
          </p>
        </div>
      </motion.div>

      {/* RIGHT: Spline 3D Model */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex-1 w-full h-[350px] sm:h-[450px] md:h-[550px] flex justify-center items-center"
      >
        <div className="rounded-2xl overflow-hidden shadow-xl bg-white/60 p-3 backdrop-blur-sm">
          <Spline
            scene="/r_4_x_bot.spline"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "350px",
              borderRadius: "16px",
            }}
          />
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;