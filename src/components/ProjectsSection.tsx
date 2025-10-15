"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((mod) => mod.default),
  { ssr: false }
);

type Project = {
  id: string;
  title: string;
  description: string;
  demo?: string; // optional spline scene url
  image?: string;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Interactive 3D Landing",
    description: "A hero landing with embedded Spline models and motion.",
    demo: "https://prod.spline.design/your-scene-url/scene.splinecode",
  },
  {
    id: "p2",
    title: "Motion-rich Component Library",
    description: "Accessible, reusable UI components with Framer Motion.",
  },
  {
    id: "p3",
    title: "Design Systems & Tokens",
    description: "Practical tokens and examples for design system adoption.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">Projects</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm"
            >
              <div className="h-40 rounded overflow-hidden mb-4 bg-slate-100">
                {p.demo ? (
                  <div className="w-full h-full">
                    <Spline scene={p.demo} className="w-full h-full" />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-slate-400">No demo</div>
                  </div>
                )}
              </div>

              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{p.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
