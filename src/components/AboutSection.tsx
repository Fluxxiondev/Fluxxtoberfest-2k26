"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 md:grid-cols-2 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">About FluxxtoberFest</h2>
            <p className="text-slate-600">
              FluxxtoberFest is a community-first, open-source festival that
              explores interactions, 3D on the web, motion design, and modern
              front-end workflows. We showcase projects, mentor contributors,
              and host workshops to bridge design and development.
            </p>
          </div>

          <div className="space-y-4 text-slate-600">
            <p>
              <strong>Why it exists:</strong> to empower creators to experiment
              with immersive web tech and share knowledge.
            </p>
            <p>
              <strong>Who it's for:</strong> designers, devs, 3D artists, and
              mentors who love hands-on learning and open-source.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
