import type { Variants } from 'framer-motion'

/** Shared entrance for anything revealed inside a `RevealGroup`. */
export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}
