import Spline from '@splinetool/react-spline';

// Replace the placeholder div with:
<Spline scene="https://prod.spline.design/YOUR-SCENE/scene.splinecode" />
'use client';

import React, { useState, useEffect } from 'react';
import { Camera, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div 
          className="inline-block mb-6"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: 1 - scrollY / 500
          }}
        >
          <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm text-purple-300 backdrop-blur-sm">
            🎉 October 2025 • Open Source Celebration
          </span>
        </div>

        <h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: 1 - scrollY / 400
          }}
        >
          FluxxtoberFest
          <br />
          <span className="text-5xl md:text-7xl">2025</span>
        </h1>

        <p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            opacity: 1 - scrollY / 450
          }}
        >
          Where creativity meets technology. A fusion of design, development, and 3D innovation.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: 1 - scrollY / 500
          }}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            View Projects
          </button>
        </div>

        {/* 3D Placeholder - Replace with Spline component */}
        <div 
          className="mt-16 w-full h-96 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-3xl border border-white/10 flex items-center justify-center backdrop-blur-sm"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1 - scrollY / 2000})`,
            opacity: 1 - scrollY / 600
          }}
        >
          <div className="text-center">
            <Camera className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <p className="text-gray-400">3D Spline Scene Placeholder</p>
            <p className="text-sm text-gray-500 mt-2">Interactive 3D model will appear here</p>
          </div>
        </div>
      </div>
    </section>
  );
}