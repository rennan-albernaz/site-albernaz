import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  id?: string
  className?: string
  children: React.ReactNode
  delay?: number
}

export default function SectionWrapper({ id, className = '', children, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
