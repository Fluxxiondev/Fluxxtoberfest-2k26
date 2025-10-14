"use client";

import React from "react";
import Spline from "@splinetool/react-spline";

export default function Testimonials() {
  return (
    <section className="w-full py-20 mt-24 flex flex-col items-center text-center">
      <h2
        className="text-[32px] font-bold  mb-10 dark:text-white"
        style={{ color: "var(--text-primary)" }}
      >
        What Previous Contributors Are Saying!
      </h2>

      {/*Local Testimonials Spline file has two versions: testimonial_carousel.spline with a solid background, and 
      testimonial_trsp_carousel.spline with a transparent background.*/}
      <div className="w-full max-w-5xl h-[500px] rounded-2xl overflow-hidden bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/10">
        <Spline scene="/testimonial_trsp_carousel.spline" />
      </div>
    </section>
  );
}
