import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { features } from '@/content/site'
import { Reveal, RevealGroup } from '../motion/reveal'
import { revealItemVariants } from '@/lib/motion-variants'

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Progress of the section through the viewport, used to drive the rail and
  // the slow drift on the heading as you scroll the grid.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const railScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 })
  const headingY = useTransform(scrollYProgress, [0, 1], [24, -24])

  return (
    <section id="features" ref={sectionRef} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div style={shouldReduceMotion ? undefined : { y: headingY }} className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-primary-500 text-xs font-semibold tracking-[0.2em] uppercase">What you get</span>
            <h2 className="mt-3 text-3xl font-bold text-balance text-gray-900 sm:text-4xl dark:text-white">
              The few things we made really good
            </h2>
            <p className="mt-4 text-base leading-relaxed text-pretty text-gray-600 dark:text-gray-400">
              No feature list to wade through. This is what people actually open Veil for.
            </p>
          </Reveal>
        </motion.div>

        {/* Rail that fills as the section scrolls — a quiet progress cue. */}
        <div className="mx-auto mt-10 h-px w-24 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
          <motion.div
            style={shouldReduceMotion ? { scaleX: 1 } : { scaleX: railScale }}
            className="from-primary-500 to-secondary-500 h-full origin-left bg-gradient-to-r"
          />
        </div>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={revealItemVariants}
              className={`veil-card veil-card-interactive flex flex-col p-6 transition-all duration-300 ${feature.span}`}
            >
              <span className="veil-card mb-5 flex h-10 w-10 items-center justify-center rounded-xl">
                <feature.icon className="text-primary-500 h-4.5 w-4.5" />
              </span>
              <span className="text-primary-500 text-xs font-semibold tracking-wider uppercase">{feature.eyebrow}</span>
              <h3 className="mt-2 text-lg font-bold text-balance text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{feature.body}</p>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
