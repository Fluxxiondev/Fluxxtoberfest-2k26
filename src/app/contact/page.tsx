"use client";

import { Send, Mail, Phone, Facebook, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { motion, MotionProps } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }
    setStatus("success");
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("idle");
    }, 3000);
  };

  const fadeInUp = (delay: number): MotionProps => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: "easeOut" } },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0b1f3f] to-black text-white px-6 py-20 overflow-hidden">
      {/* 🔹 Section Title */}
      <motion.div {...fadeInUp(0.1)} className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#63C6D4] mb-3 drop-shadow-[0_0_15px_rgba(99,198,212,0.6)]">
          Get In Touch 💌
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Ready to get started on your project? Let’s build something amazing together.
        </p>
      </motion.div>

      {/* 🔹 Main Contact Section */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-10 justify-center">
        {/* 🔸 Left Side - Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.h2 {...fadeInUp(0.3)} className="text-2xl font-semibold mb-2 text-center md:text-left">
            Talk To Me
          </motion.h2>

          {/* 🔹 Email Card */}
          <motion.div
            {...fadeInUp(0.5)}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 0px 35px rgba(99,198,212,0.6)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-lg shadow-lg hover:shadow-[0_0_40px_rgba(99,198,212,0.35)] transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <Mail size={26} className="text-[#63C6D4] mb-3" />
              <h3 className="text-xl font-medium">Email</h3>
              <p className="text-gray-300 mb-3">abc000@gmail.com</p>
              <a href="mailto:abc000@gmail.com" className="text-[#63C6D4] hover:underline flex items-center gap-1">
                Write Me <Send size={16} />
              </a>
            </div>
          </motion.div>

          {/* 🔹 WhatsApp Card */}
          <motion.div
            {...fadeInUp(0.7)}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 0px 35px rgba(99,198,212,0.6)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-lg shadow-lg hover:shadow-[0_0_40px_rgba(99,198,212,0.35)] transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <Phone size={26} className="text-[#63C6D4] mb-3" />
              <h3 className="text-xl font-medium">WhatsApp</h3>
              <p className="text-gray-300 mb-3">(+971) 52 424 64600</p>
              <a href="https://web.whatsapp.com" className="text-[#63C6D4] hover:underline flex items-center gap-1">
                Write Me <Send size={16} />
              </a>
            </div>
          </motion.div>

          {/* 🔹 Social Icons Section */}
<motion.div
  {...fadeInUp(0.9)}
  className="flex justify-center gap-6 mt-4"
>
  {[
    { icon: Facebook, link: "#" },
    { icon: Github, link: "https://github.com/Fluxxiondev" },
    { icon: Linkedin, link: "https://www.linkedin.com/company/fluxxiondev/posts/?feedView=all" },
    { icon: Instagram, link: "#" },
  ].map(({ icon: Icon, link }, index) => (
    <motion.a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.2,
        y: -3,
        boxShadow: "0px 0px 25px rgba(99,198,212,0.9)",
        color: "#63C6D4",
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}  // ⚡ Instant glow & scale
      className="p-3 bg-white/10 border border-white/20 rounded-full text-gray-300 hover:text-[#63C6D4] transition-all duration-150"
    >
      <Icon size={22} />
    </motion.a>
  ))}
</motion.div>

        </div>

        {/* 🔸 Right Side - Message Form */}
        <motion.div
          {...fadeInUp(0.9)}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0px 0px 35px rgba(99,198,212,0.6)",
          }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="flex-1 bg-white/10 backdrop-blur-2xl rounded-2xl shadow-lg border border-white/20 p-8 md:p-10 w-full md:w-[90%] hover:shadow-[0_0_40px_rgba(99,198,212,0.35)] transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#63C6D4] text-center md:text-left">
            Write Me Your Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block mb-2 text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Insert your name"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#63C6D4]"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#63C6D4]"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">Message</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Send a message to get started."
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#63C6D4]"
              />
            </div>

            {/* ✉️ Send Button */}
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 35px rgba(99,198,212,0.8)",
                textShadow: "0px 0px 20px rgba(255,255,255,0.9)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              type="submit"
              className="mt-2 bg-[#63C6D4] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(121,186,193,0.3)] flex items-center justify-center gap-3"
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </form>

          {status !== "idle" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`mt-6 text-center text-lg font-semibold ${status === "success" ? "text-green-400" : "text-red-400"}`}>
              {status === "success" ? "✅ Message sent successfully!" : "❌ Please fill in all fields."}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
