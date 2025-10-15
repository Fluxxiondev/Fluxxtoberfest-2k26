"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const mentors = [
  { name: "Amina Khan", role: "3D Artist", img: "/avatar-placeholder.png" },
  { name: "Omar Rehman", role: "Frontend Lead", img: "/avatar-placeholder.png" },
  { name: "Sara Ali", role: "Motion Designer", img: "/avatar-placeholder.png" },
];

export default function MentorsSection() {
  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">Mentors & Speakers</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-lg border p-4 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                <Image src={m.img} alt={m.name} width={96} height={96} />
              </div>
              <div className="font-semibold">{m.name}</div>
              <div className="text-sm text-slate-500">{m.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

const timeline = [
  { date: "Oct 2025", title: "Project Kickoff", desc: "Planning & initial designs." },
  { date: "Nov 2025", title: "Workshops", desc: "Intro to Spline & Framer Motion." },
  { date: "Jan 2026", title: "Hackathon", desc: "Community builds & demos." },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">Timeline</h3>

        <div className="space-y-6">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-4 bg-white border rounded-lg"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">{t.date}</div>
                <div className="text-slate-700 font-semibold">{t.title}</div>
              </div>
              <p className="text-sm text-slate-500 mt-2">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
