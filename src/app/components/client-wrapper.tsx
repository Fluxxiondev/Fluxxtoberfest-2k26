"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingAnimation from "./ui/loading-animation"
import ScrollProgress from "./ui/scroll-progress"
import Navbar from "./sections/Navbar"
import HeroSection from "./sections/HeroSection"

export default function ClientWrapper() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 100)
  }

  // Prevent body scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  return (
    <>
      <LoadingAnimation onComplete={handleLoadingComplete} />
      
      <AnimatePresence>
        {showContent && (
          <>
            <ScrollProgress />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Navbar />
              <HeroSection />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}