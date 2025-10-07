"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "../ui/btn"
import SplineEmbed from "./spline-embed"

const PHRASES = [
  "Where Creativity Meets Technology",
  "Build the Future Together",
  "Code • Design • Innovate"
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  const current = useMemo(() => PHRASES[index], [index])

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  useEffect(() => {
    const speed = deleting ? 50 : 100
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, speed)

    if (!deleting && subIndex === current.length) {
      clearTimeout(timeout)
      const hold = setTimeout(() => setDeleting(true), 1500)
      return () => clearTimeout(hold)
    }

    if (deleting && subIndex === 0) {
      clearTimeout(timeout)
      setDeleting(false)
      setIndex((prev) => (prev + 1) % PHRASES.length)
      return
    }

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, current])

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-cyber rounded-full px-4 py-2 text-sm animate-cyber-glow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
                #FluxxtoberFest 2025 • Live Now
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-breathe">
                  FluxxtoberFest
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold h-12 sm:h-14 lg:h-16 flex items-center">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {current.slice(0, subIndex)}
                </span>
                <span className={`ml-1 inline-block w-0.5 lg:w-1 h-6 sm:h-7 lg:h-8 xl:h-10 bg-gradient-to-b from-cyan-400 to-blue-500 ${blink ? "opacity-100" : "opacity-0"} transition-opacity`} />
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              Join the ultimate celebration of open source development. Experience cutting-edge 3D web technologies, 
              collaborate with amazing developers, and build the future of interactive web experiences.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 py-4">
              <div className="glass-cyber rounded-xl p-3 sm:p-4 text-center group hover:scale-105 transition-all duration-300 min-w-[100px]">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-white/60 group-hover:text-white/80 transition-colors">
                  Contributors
                </div>
              </div>
              <div className="glass-cyber rounded-xl p-3 sm:p-4 text-center group hover:scale-105 transition-all duration-300 min-w-[100px]">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-white/60 group-hover:text-white/80 transition-colors">
                  Projects
                </div>
              </div>
              <div className="glass-cyber rounded-xl p-3 sm:p-4 text-center group hover:scale-105 transition-all duration-300 min-w-[100px]">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-white/60 group-hover:text-white/80 transition-colors">
                  Support
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button className="aurora-bg text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg animate-cyber-glow">
                <Link href="#get-started" className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl">🤖</span>
                  <span className="text-sm sm:text-base">Start Contributing</span>
                </Link>
              </Button>
              
              <Link
                href="#explore"
                className="glass-cyber rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white/80 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group text-sm sm:text-base"
              >
                <span>Explore Projects</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: 3D Model */}
          <div className="relative lg:order-last">
            <SplineEmbed 
              scene="https://my.spline.design/r4xbotcopy-FeOqp5XKSCum1rNJW3YGcHrO/scene.splinecode" 
              className="animate-float"
            />
            
            {/* Enhanced decorative elements matching the robot */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: "1.5s"}}></div>
            <div className="absolute top-1/2 -right-3 w-16 h-16 bg-gradient-to-r from-cyan-300/25 to-cyan-500/25 rounded-full blur-xl animate-drift"></div>
            
            {/* Floating tech elements */}
            <div className="absolute top-6 left-3 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute bottom-8 right-6 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: "1s"}}></div>
            <div className="absolute top-1/4 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{animationDelay: "2s"}}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs sm:text-sm">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-white/50 rounded-full mt-1.5 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}