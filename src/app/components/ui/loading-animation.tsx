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

  const steps = [
    { text: "Initializing Quantum Engine", icon: "⚡", color: "from-teal-light to-teal-dark" },
    { text: "Loading 3D Universe", icon: "🌌", color: "from-teal-dark to-purple" },
    { text: "Calibrating Reality Matrix", icon: "🔮", color: "from-purple to-teal-light" },
    { text: "Synchronizing Dimensions", icon: "🌟", color: "from-teal-light via-purple to-teal-dark" },
    { text: "Welcome to FluxxtoberFest", icon: "", color: "from-teal-light to-purple" }
  ]

  useEffect(() => {
    // Show logo after a brief delay
    const logoTimer = setTimeout(() => setShowLogo(true), 300)

    const stepTimer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        // Final step - show welcome message longer
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(onComplete, 800)
        }, 1200)
      }
    }, currentStep === steps.length - 1 ? 1000 : 700)

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
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(121, 186, 193, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(42, 120, 134, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(81, 43, 88, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%)
            `
          }}
        >
          {/* Dynamic Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(121, 186, 193, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(121, 186, 193, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'grid-move 20s linear infinite'
              }}
            />
          </div>

          {/* Floating Geometric Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                  rotate: 0,
                  opacity: 0
                }}
                animate={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className={`w-3 h-3 ${
                    i % 3 === 0 ? 'rounded-full bg-gradient-to-r from-teal-light to-teal-dark' :
                    i % 3 === 1 ? 'rotate-45 bg-gradient-to-r from-purple to-teal-light' :
                    'rounded-sm bg-gradient-to-r from-teal-dark to-purple'
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 text-center space-y-12 max-w-2xl mx-auto px-8">
            
            {/* Advanced Logo Animation */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.175, 0.885, 0.32, 1.275],
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Outer Rotating Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="relative w-32 h-32"
                    >
                      <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-teal-light via-purple to-teal-dark p-1">
                        <div className="w-full h-full rounded-full bg-gray-900/80" />
                      </div>
                      
                      {/* Orbit Dots */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-gradient-to-r from-teal-light to-purple rounded-full"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: '50% -60px',
                            transform: `rotate(${i * 45}deg) translateY(-60px)`
                          }}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Inner Pulsing Core */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-6 rounded-full bg-gradient-to-r from-teal-light via-purple to-teal-dark flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="text-2xl font-bold text-white"
                      >
                        F
                      </motion.div>
                    </motion.div>

                    {/* Glow Effects */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-teal-light/20 via-purple/20 to-teal-dark/20 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute -inset-4 bg-gradient-to-r from-teal-light/30 via-purple/30 to-teal-dark/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Brand Name with Advanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-4"
            >
              <div className="relative">
                <motion.h1 
                  className="text-5xl md:text-7xl font-black tracking-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1 }}
                >
                  {"FluxxtoberFest".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block bg-gradient-to-r from-teal-light via-purple to-teal-dark bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 1.2 + index * 0.08,
                        ease: [0.175, 0.885, 0.32, 1.275]
                      }}
                      whileHover={{ scale: 1.1, rotateY: 15 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>
                
                {/* Text Glow Effect */}
                <div className="absolute inset-0 text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-teal-light via-purple to-teal-dark bg-clip-text text-transparent blur-sm opacity-50 -z-10">
                  FluxxtoberFest
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-teal-light to-transparent" />
                <span className="text-xl md:text-2xl font-mono text-gradient-corporate">2025</span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple to-transparent" />
              </motion.div>
            </motion.div>

            {/* Enhanced Progress Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="space-y-8"
            >
              {/* Current Step Display */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="glass-corporate rounded-2xl p-6 border border-teal-light/20 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                          scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="text-3xl"
                      >
                        {steps[currentStep].icon}
                      </motion.div>
                      <div className="text-center">
                        <motion.p
                          className="text-lg md:text-xl font-semibold text-light"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {steps[currentStep].text}
                        </motion.p>
                        <div className="flex items-center justify-center mt-2">
                          <motion.div
                            className="flex space-x-1"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-gradient-to-r from-teal-light to-purple rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Advanced Progress Indicators */}
              <div className="space-y-4">
                {/* Step Indicators */}
                <div className="flex justify-center space-x-3">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
                        index <= currentStep 
                          ? 'bg-gradient-to-r ' + step.color 
                          : 'bg-light/20 border-2 border-light/30'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 2.4 + index * 0.1 }}
                    >
                      {index <= currentStep && (
                        <motion.div
                          className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-light/40 to-purple/40 blur-sm"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                      {index === currentStep && (
                        <motion.div
                          className="absolute inset-0.5 rounded-full bg-white"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Animated Progress Bar */}
                <div className="relative w-80 h-2 bg-light/10 rounded-full overflow-hidden mx-auto backdrop-blur-sm border border-light/20">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${steps[currentStep].color} relative`}
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-light/20 via-purple/20 to-teal-dark/20 rounded-full blur-md -z-10" />
                </div>

                {/* Percentage Display */}
                <motion.div
                  className="text-center"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-sm font-mono text-gradient-corporate">
                    {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Particle System */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50,
                  scale: 0
                }}
                animate={{ 
                  y: -50,
                  x: Math.random() * window.innerWidth,
                  scale: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "linear"
                }}
              >
                <div className={`w-1 h-1 rounded-full ${
                  i % 2 === 0 ? 'bg-teal-light' : 'bg-purple'
                } shadow-lg`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}