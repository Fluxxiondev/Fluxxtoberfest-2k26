"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";
import Nav from "../components/Nav";

const SignIn = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignIn = () => {
    setError("");
    setSuccess(false);

    if (!email.trim()) return setError("⚠️ Please enter your email.");
    if (!password.trim()) return setError("⚠️ Please enter your password.");

    const user = JSON.parse(localStorage.getItem("userCredentials") || "{}");

    if (!user.email || !user.password)
      return setError("❌ Account not found. Please create an account first.");

    if (email !== user.email) return setError("⚠️ Email not found.");
    if (password !== user.password) return setError("❌ Incorrect password.");

    setError("");
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e9fcff] text-[#4a1761] relative overflow-hidden pt-20">
      <Nav />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-xl bg-white/40 border border-white/60 shadow-2xl rounded-2xl p-10 w-[90%] max-w-md mt-10"
      >
        {/* Header: Sign In | Sign Up */}
        <div className="flex justify-center items-center gap-4 mb-4 text-[#4a1761] text-2xl font-bold">
          <span
            className={`cursor-pointer font-semibold hover:underline ${
              pathname === "/signIn"
                ? "text-[#047481] border-b-2 border-[#047481] pb-1"
                : "text-[#4a1761]"
            }`}
          >
            Sign In
          </span>
          <div className="w-[2px] h-8 bg-[#047481]"></div>
          <span
            className={`cursor-pointer font-semibold hover:underline ${
              pathname === "/signUp"
                ? "text-[#047481] border-b-2 border-[#047481] pb-1"
                : "text-[#4a1761]"
            }`}
            onClick={() => router.push("/signUp")}
          >
            Sign Up
          </span>
        </div>

        {/* Separator */}
        <div className="w-full h-[2px] bg-[#047481] mb-6"></div>

        {/* Username / Email */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">Username</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-[#4a176130] bg-white/60 focus:ring-2 focus:ring-[#047481] focus:outline-none transition-all"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#4a176130] bg-white/60 focus:ring-2 focus:ring-[#047481] focus:outline-none pr-10 transition-all"
            />
            <div
              className="absolute cursor-pointer text-[#4a1761] hover:text-[#047481]"
              style={{ top: '50%', right: '12px', transform: 'translateY(-50%)' }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
            </div>
          </div>
        </div>

        {/* Forgot & Create Account Links */}
        <div className="flex items-center justify-between text-sm mb-8">
          <p className="text-[#4a1761] cursor-pointer hover:text-[#047481] transition-colors duration-200">
            Forgot Password?
          </p>
          <p className="text-[#4a1761] cursor-pointer hover:text-[#047481] transition-colors duration-200">
            Don't have an account?{" "}
            <span
              className="font-semibold"
              onClick={() => router.push("/signUp")}
            >
              Create one
            </span>
          </p>
        </div>

        {/* Sign In Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSignIn}
          className="block mx-auto bg-[#047481] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#036c77] transition-all duration-300"
        >
          Sign In
        </motion.button>

        {/* Validation Messages */}
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        {success && <p className="text-green-600 text-center mt-4">✅ Sign in successful!</p>}
      </motion.div>
    </div>
  );
};

export default SignIn;