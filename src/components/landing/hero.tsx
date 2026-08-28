import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, BadgeCheck, EyeOff, Lock } from 'lucide-react'
import { APP_URL } from '@/content/site'
import Button from '../ui/button'
import { AppPreview } from './app-preview'

const badges = [
  { icon: Lock, label: 'Encrypted before it leaves your device' },
  { icon: BadgeCheck, label: 'Free forever, no card needed' },
  { icon: EyeOff, label: 'No ads, no trackers' },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // The preview settles back and drifts up as the hero leaves — the page feels
  // like it has depth without anything jumping around.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const previewY = useTransform(smooth, [0, 1], [0, -70])
  const previewScale = useTransform(smooth, [0, 1], [1, 0.94])
  const previewOpacity = useTransform(smooth, [0, 0.85], [1, 0.35])
  const auroraY = useTransform(smooth, [0, 1], [0, 90])

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <motion.div
        style={shouldReduceMotion ? undefined : { y: auroraY }}
        className="veil-aurora pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="veil-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="veil-chip inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400">
            <span className="bg-primary-500 h-1.5 w-1.5 rounded-full" />
            Free, encrypted, and open to everyone
          </span>

          <h1 className="mt-6 text-4xl leading-[1.1] font-bold text-balance text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Everything you say here <span className="veil-gradient-text">stays here</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pretty text-gray-600 sm:text-lg dark:text-gray-400">
            Veil is a workspace for teams and communities — chat, calls, whiteboards and to-do boards in one place.
            Every message is end-to-end encrypted, sealed on your device before it is ever sent.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto">
              <Button color="primary" variant="solid" size="xl" className="w-full sm:w-auto">
                Start free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a href="#features" className="w-full sm:w-auto">
              <Button color="secondary" variant="surface" size="xl" className="w-full sm:w-auto">
                See what is inside
              </Button>
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="text-primary-500 h-3.5 w-3.5" />
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <motion.div
            style={shouldReduceMotion ? undefined : { y: previewY, scale: previewScale, opacity: previewOpacity }}
          >
            <AppPreview />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
