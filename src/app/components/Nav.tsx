"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ Import navigation hook

const Nav = () => {
  const router = useRouter();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 
        w-[90%] md:w-[80%] lg:w-[70%] 
        backdrop-blur-lg bg-white/40 border border-white/50 
        shadow-lg rounded-2xl px-6 py-4 
        flex items-center justify-between 
        transition-all duration-500 hover:bg-white/60"
    >
      {/* Left: Logo */}
      <div
        onClick={() => router.push("/")}
        className="text-2xl md:text-3xl font-extrabold text-[#4a1761] cursor-pointer select-none hover:scale-105 transition-transform duration-300"
      >
        Fluxxtober<span className="text-[#047481]">Fest</span>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex gap-8 text-[#4a1761] font-medium text-lg">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <span
            key={item}
            onClick={() => {
              const path =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase()}`;
              router.push(path);
            }}
            className="relative cursor-pointer hover:text-[#047481] transition-colors duration-300
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#047481] after:bottom-[-4px] after:left-0
              hover:after:w-full after:transition-all after:duration-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Right: Get Started Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => router.push("/signIn")} // ✅ Navigates to sign-in page
        className="hidden md:block bg-[#047481] text-white font-semibold px-6 py-2 rounded-full 
          shadow-md hover:shadow-[#047481]/40 transition-all duration-300"
      >
        Get Started
      </motion.button>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col gap-[5px] cursor-pointer group">
        <span className="w-6 h-[2px] bg-[#4a1761] rounded-full group-hover:bg-[#047481] transition-all duration-300"></span>
        <span className="w-6 h-[2px] bg-[#4a1761] rounded-full group-hover:bg-[#047481] transition-all duration-300"></span>
        <span className="w-6 h-[2px] bg-[#4a1761] rounded-full group-hover:bg-[#047481] transition-all duration-300"></span>
      </div>
    </motion.nav>
  );
};

export default Nav;
