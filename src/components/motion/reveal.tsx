import type { ReactNode } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
  direction?: Direction
  /** How far into the viewport the element must be before it plays. */
  amount?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'span'
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * Reveals its children the first time they scroll into view. Honours
 * prefers-reduced-motion by rendering the final state immediately.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  direction = 'up',
  amount = 0.25,
  as = 'div',
}: Props) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as]

  if (shouldReduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const offset = offsets[direction]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x: offset.x * distance, y: offset.y * distance }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/** Parent that staggers its `RevealItem` children as the group scrolls in. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  amount = 0.15,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  amount?: number
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return <div className={className}>{children}</div>

  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  )
}
