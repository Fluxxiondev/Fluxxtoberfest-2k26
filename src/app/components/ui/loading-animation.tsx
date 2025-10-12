"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface LoadingAnimationProps {
  onComplete: () => void
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [showLogo, setShowLogo] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  const steps = [
    { text: "Initializing Systems", icon: "⚡", color: "from-teal-light to-teal-dark" },
    { text: "Loading Experience", icon: "🚀", color: "from-teal-dark to-purple" },
    { text: "Preparing Interface", icon: "✨", color: "from-purple to-teal-light" },
    { text: "Almost Ready", icon: "🎯", color: "from-teal-light via-purple to-teal-dark" },
    { text: "Welcome to FluxxtoberFest", icon: "🎉", color: "from-teal-light to-purple" }
  ]

  // Handle client-side dimensions safely
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })

      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    // Show logo after a brief delay
    const logoTimer = setTimeout(() => setShowLogo(true), 500)

    const stepTimer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        // Final step - show welcome message longer
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(onComplete, 600)
        }, 1000)
      }
    }, currentStep === steps.length - 1 ? 800 : 600)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(stepTimer)
    }
  }, [currentStep, steps.length, onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 0.95,
            filter: "blur(10px)"
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1] 
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
        >
          {/* Sophisticated Grid Background */}
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute inset-0 bg-grid-pattern"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(121, 186, 193, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(121, 186, 193, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                transform: 'perspective(800px) rotateX(25deg)'
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-gray-950/30"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Minimalist Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-teal-light/40 rounded-full"
                initial={{ 
                  x: (i % 4) * (dimensions.width / 4) + Math.random() * 200,
                  y: Math.floor(i / 4) * (dimensions.height / 3) + Math.random() * 200,
                  opacity: 0
                }}
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scale: [1, 2, 1],
                  y: [
                    Math.floor(i / 4) * (dimensions.height / 3) + Math.random() * 200,
                    Math.floor(i / 4) * (dimensions.height / 3) + Math.random() * 200 - 100
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 text-center space-y-16 max-w-4xl mx-auto px-8">
            
            {/* Premium Logo Design */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, rotateY: -180 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 1,
                    ease: [0.23, 1, 0.32, 1],
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Main Logo Circle */}
                    <motion.div
                      className="relative w-28 h-28 rounded-full bg-gradient-to-br from-teal-light/20 via-purple/20 to-teal-dark/20 backdrop-blur-xl border border-teal-light/30 flex items-center justify-center"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      {/* Inner Rotating Element */}
                      <motion.div
                        animate={{ rotate: [0, -360] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 rounded-full border-2 border-transparent bg-gradient-to-r from-teal-light via-purple to-teal-dark p-0.5"
                      >
                        <div className="w-full h-full rounded-full bg-gray-900/80 flex items-center justify-center">
                          <span className="text-2xl font-bold text-gradient-corporate">F</span>
                        </div>
                      </motion.div>

                      {/* Orbiting Dots */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-gradient-to-r from-teal-light to-purple rounded-full"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: `0 ${-45 + i * 5}px`
                          }}
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Premium Glow Effects */}
                    <motion.div
                      className="absolute -inset-6 bg-gradient-to-r from-teal-light/10 via-purple/10 to-teal-dark/10 rounded-full blur-2xl"
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Elegant Brand Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="relative">
                <motion.h1 
                  className="text-6xl md:text-8xl font-light tracking-wide text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  {"FluxxtoberFest".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        color: "#79BAC1",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>
                
                {/* Subtle underline effect */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.8 }}
                  className="h-px bg-gradient-to-r from-transparent via-teal-light to-transparent mx-auto mt-4"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="flex items-center justify-center space-x-6"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-500" />
                <span className="text-xl font-mono text-gray-400 tracking-wider">2025</span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-500" />
              </motion.div>
            </motion.div>

            {/* Clean Progress Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="space-y-8"
            >
              {/* Current Step Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-center justify-center space-x-4"
                >
                  <motion.span
                    animate={{ 
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="text-2xl"
                  >
                    {steps[currentStep].icon}
                  </motion.span>
                  
                  <motion.p
                    className="text-lg font-medium text-gray-300 tracking-wide"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {steps[currentStep].text}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* Minimalist Progress Indicators */}
              <div className="space-y-6">
                {/* Step Dots */}
                <div className="flex justify-center space-x-4">
                  {steps.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        index <= currentStep 
                          ? 'bg-teal-light shadow-lg shadow-teal-light/50' 
                          : 'bg-gray-700 border border-gray-600'
                      }`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 2 + index * 0.1 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {index === currentStep && (
                        <motion.div
                          className="w-full h-full rounded-full bg-white"
                          animate={{ scale: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Clean Progress Bar */}
                <div className="relative w-72 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal-light via-teal-dark to-purple relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        repeatDelay: 1
                      }}
                    />
                  </motion.div>
                </div>

                {/* Progress Percentage */}
                <motion.div
                  className="text-center"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-sm font-mono text-gray-500 tracking-wider">
                    {Math.round(((currentStep + 1) / steps.length) * 100)}%
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Subtle Particle System */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-px bg-teal-light/60 rounded-full"
                initial={{ 
                  x: (i * dimensions.width) / 8,
                  y: dimensions.height + 20,
                  opacity: 0
                }}
                animate={{ 
                  y: -20,
                  opacity: [0, 1, 0],
                  scale: [1, 2, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}