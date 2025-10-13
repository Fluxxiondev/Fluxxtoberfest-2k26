"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";
import Nav from "../components/Nav";

const SignUp = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignUp = () => {
    setError("");
    setSuccess(false);

    if (!fullName.trim()) return setError("⚠️ Please enter your full name.");

    const emailRegex = /^[^\s@]+@[^\s@]+\.(gmail\.com|szabist\.pk)$/;
    if (!emailRegex.test(email))
      return setError("❌ Email must end with @gmail.com or @szabist.pk.");

    if (password.length < 8 || password.length > 16)
      return setError("❌ Password must be 8-16 characters long.");

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
    if (!passwordRegex.test(password))
      return setError(
        "❌ Password must include 1 uppercase, 1 number & 1 special character."
      );

    if (password !== confirmPassword)
      return setError("❌ Passwords do not match.");

    localStorage.setItem(
      "userCredentials",
      JSON.stringify({ email, password })
    );
    setSuccess(true);
    setError("");
    setTimeout(() => router.push("/signIn"), 1500);
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
            onClick={() => router.push("/signIn")}
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

        {/* Full Name */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-[#4a176130] bg-white/60 focus:ring-2 focus:ring-[#047481] focus:outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">Email</label>
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

        {/* Confirm Password */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#4a176130] bg-white/60 focus:ring-2 focus:ring-[#047481] focus:outline-none pr-10 transition-all"
            />
            <div
              className="absolute cursor-pointer text-[#4a1761] hover:text-[#047481]"
              style={{ top: '50%', right: '12px', transform: 'translateY(-50%)' }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
            </div>
          </div>
        </div>

        {/* Sign Up Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSignUp}
          className="block mx-auto bg-[#047481] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#036c77] transition-all duration-300 mb-4"
        >
          Create Account
        </motion.button>

        {/* Already have account link */}
        <div className="text-sm text-center">
          <span className="text-[#4a1761]">
            Already have an account?{" "}
            <span
              className="font-semibold cursor-pointer text-[#047481] hover:underline"
              onClick={() => router.push("/signIn")}
            >
              Sign In
            </span>
          </span>
        </div>

        {/* Validation Messages */}
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        {success && <p className="text-green-600 text-center mt-4">✅ Sign up successful! Redirecting...</p>}
      </motion.div>
    </div>
  );
};

export default SignUp;