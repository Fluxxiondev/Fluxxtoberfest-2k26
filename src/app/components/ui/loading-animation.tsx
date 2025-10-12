"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface LoadingAnimationProps {
  onComplete: () => void
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const steps = [
    "Initializing 3D Engine...",
    "Loading Assets...",
    "Preparing Experience...",
    "Welcome to FluxxtoberFest!"
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(onComplete, 500)
        }, 800)
      }
    }, 600)

    return () => clearTimeout(timer)
  }, [currentStep, steps.length, onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(121, 186, 193, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(42, 120, 134, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(81, 43, 88, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)
            `
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-teal-light to-purple rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                  opacity: 0
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                  rotate: 360
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center space-y-8">
            
            {/* Rotating Logo/Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <div className="w-20 h-20 rounded-full border-4 border-teal-light/30 border-t-teal-light"></div>
                <div className="absolute inset-2 w-12 h-12 rounded-full border-4 border-purple/30 border-b-purple"></div>
                <div className="absolute inset-4 w-8 h-8 rounded-full bg-gradient-to-r from-teal-light to-purple"></div>
              </motion.div>
            </motion.div>

            {/* Brand Name with Stagger Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gradient-corporate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {"FluxxtoberFest".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.05
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-lg text-light/80 font-mono"
              >
                2025
              </motion.p>
            </motion.div>

            {/* Progress Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="space-y-4"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-light/90 font-medium"
                >
                  {steps[currentStep]}
                </motion.p>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="flex justify-center space-x-2">
                {steps.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index <= currentStep ? 'bg-teal-light' : 'bg-light/30'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="w-64 h-1 bg-light/20 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-light to-purple"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Subtle Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-teal-light/60 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50
                }}
                animate={{ 
                  y: -50,
                  x: Math.random() * window.innerWidth
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
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