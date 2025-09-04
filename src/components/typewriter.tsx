"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
}

export default function Typewriter({ text, speed = 80, className }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.p>
  )
}