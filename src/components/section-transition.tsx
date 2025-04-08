
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionTransition({ children, className, delay = 0 }: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
