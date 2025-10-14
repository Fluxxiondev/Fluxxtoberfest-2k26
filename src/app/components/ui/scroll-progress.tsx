"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gradient-to-r from-teal-light via-teal-dark to-purple origin-left"
      style={{ 
        scaleX,
        opacity,
        boxShadow: "0 0 10px rgba(121, 186, 193, 0.5), 0 0 20px rgba(42, 120, 134, 0.3)"
      }}
    />
  )
}