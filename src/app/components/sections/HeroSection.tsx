/* filepath: c:\Users\butta\OneDrive\Desktop\FluxxtoberFest-2k26\src\app\components\sections\HeroSection.tsx */
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "../ui/btn"
import SplineEmbed from "./spline-embed"

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    const email = "fluxxtoberfest@gmail.com"
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      console.log("Email copied to clipboard")
    } catch (err) {
      console.error("Failed to copy email: ", err)
    }
  }

  useEffect(() => {
    // Add particle positions dynamically
    const particles = document.querySelectorAll(".particle")
    particles.forEach((particle, index) => {
      const left = Math.random() * 100
      const delay = Math.random() * 20
      ;(particle as HTMLElement).style.left = `${left}%`
      ;(particle as HTMLElement).style.animationDelay = `${delay}s`
    })
  }, [])

  return (
    <main className="relative">
      <section id="hero-section" className="relative w-full overflow-hidden hero-section-container">
        {/* Space Background Layer */}
        <div className="space-bg pointer-events-none absolute inset-0" aria-hidden="true"></div>

        {/* Floating Particles */}
        <div className="floating-particles pointer-events-none absolute inset-0" aria-hidden="true">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>

        {/* Shooting Stars */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="shooting-star pointer-events-none absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
            aria-hidden="true"
          />
        ))}

        {/* Enhanced Nebula Glows */}
        <div
          className="nebula-glow pointer-events-none absolute"
          style={{ top: "15%", left: "10%" }}
          aria-hidden="true"
        />
        <div
          className="nebula-glow pointer-events-none absolute"
          style={{
            top: "60%",
            right: "8%",
            background: "radial-gradient(circle, rgba(42, 120, 134, 0.18) 0%, rgba(81, 43, 88, 0.12) 40%, transparent 70%)",
            animationDelay: "3s",
            animationDuration: "12s",
          }}
          aria-hidden="true"
        />

        {/* Galaxy Spiral */}
        <div className="galaxy-spiral pointer-events-none absolute inset-0" aria-hidden="true"></div>

        {/* Professional Background blur effect */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 blur-[100px]"
          style={{ background: "var(--purple-glow)" }}
        ></div>

        {/* Main Content Container - Perfect Alignment */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Professional Badge - Centered */}
          <div className="flex justify-center mb-12">
            <Link
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full glass-corporate px-4 py-2 text-sm backdrop-blur-md transition-all duration-300 hover:scale-105 animate-fade-in-down"
            >
              <span className="flex h-2 w-2 rounded-full bg-gradient-to-r from-teal-light to-teal-dark">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-teal-light opacity-75"></span>
              </span>
              <span className="text-xs font-semibold text-purple bg-gradient-to-r from-teal-light to-purple bg-clip-text text-transparent">
                NEW
              </span>
              <span className="text-light/90 font-medium">FluxxtoberFest 2025 is live!</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-light transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </div>

          {/* Main Content Grid - Perfect Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="flex flex-col space-y-8 text-center lg:text-left">
              
              {/* Main Heading */}
              <div className="space-y-4 animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight tracking-tight">
                  <span className="block text-light mb-2">We help developers</span>
                  <span className="block text-light mb-2">build the future of</span>
                  <span className="block text-gradient-corporate font-extrabold italic">
                    open source
                  </span>
                </h1>
              </div>

     

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-light/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Join the world's most innovative open source celebration. Experience cutting-edge 3D web technologies, 
                collaborate with amazing developers, and build the future of interactive web experiences.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <Button className="btn-corporate group relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 hover:shadow-2xl">
                  <span className="relative z-10 text-light">Start Contributing</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-light to-purple opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="group flex items-center gap-3 rounded-full glass-corporate px-6 py-4 text-base font-medium text-light/90 transition-all duration-300 hover:text-light hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-colors duration-300 ${copied ? 'text-teal-light' : 'text-purple'}`}
                  >
                    {copied ? (
                      <path d="M20 6 9 17l-5-5" />
                    ) : (
                      <>
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </>
                    )}
                  </svg>
                  <span className="font-mono text-sm">
                    {copied ? 'Copied!' : 'fluxxtoberfest@gmail.com'}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: 3D Model */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="w-full max-w-lg lg:max-w-none">
                <SplineEmbed
                  scene="https://my.spline.design/r4xbotcopy-FeOqp5XKSCum1rNJW3YGcHrO/scene.splinecode"
                  className="h-80 sm:h-96 lg:h-[500px] w-full animate-professional-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Curved Bottom Section */}
      <div className="relative w-full h-32 sm:h-40 lg:h-48 overflow-hidden">
        <svg 
          className="absolute bottom-0 left-0 w-full h-full" 
          viewBox="0 0 1200 320" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,160 C300,220 600,280 900,240 C1050,210 1150,180 1200,160 L1200,320 L0,320 Z" 
            fill="url(#professionalGradient)"
            className="drop-shadow-2xl"
          />
          <defs>
            <linearGradient id="professionalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-light)" stopOpacity="0.9" />
              <stop offset="50%" stopColor="var(--color-teal-light)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--color-light)" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Enhanced glow effects */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-24 blur-2xl opacity-40"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 100%, var(--color-teal-light) 0%, transparent 70%)'
          }}
        />
        
        <div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-16 blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(ellipse, var(--color-purple) 0%, transparent 70%)'
          }}
        />
      </div>
    </main>
  )
}