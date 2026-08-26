import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { Check, Info } from 'lucide-react'
import { guarantees, securitySteps } from '@/content/site'
import { Reveal, RevealGroup } from '../motion/reveal'
import { revealItemVariants } from '@/lib/motion-variants'

export function Security() {
  const stepsRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Drives the connecting line between the three steps: it draws itself as the
  // steps pass through the middle of the viewport.
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start 0.85', 'end 0.6'],
  })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 22, restDelta: 0.001 })

  return (
    <section id="security" className="relative overflow-hidden py-20 sm:py-28">
      <div className="veil-aurora pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-primary-500 text-xs font-semibold tracking-[0.2em] uppercase">
            How it stays private
          </span>
          <h2 className="mt-3 text-3xl font-bold text-balance text-gray-900 sm:text-4xl dark:text-white">
            Privacy you can follow step by step
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-gray-600 dark:text-gray-400">
            Not a promise on a marketing page — a sequence you can trace, from your keyboard to our disks.
          </p>
        </Reveal>

        <div ref={stepsRef} className="relative mt-14">
          {/* The line only exists on the three-across layout. */}
          <div className="absolute top-11 right-[16.6%] left-[16.6%] hidden h-px overflow-hidden bg-black/10 md:block dark:bg-white/10">
            <motion.div
              style={shouldReduceMotion ? { scaleX: 1 } : { scaleX: lineProgress }}
              className="from-primary-500 to-secondary-500 h-full origin-left bg-gradient-to-r"
            />
          </div>

          <RevealGroup className="relative grid gap-4 md:grid-cols-3" stagger={0.14}>
            {securitySteps.map((step) => (
              <motion.div key={step.step} variants={revealItemVariants} className="veil-card flex flex-col p-6">
                <span className="veil-well text-primary-500 flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold">
                  {step.step}
                </span>
                <h3 className="mt-5 text-base font-bold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{step.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="veil-well mt-4 block rounded-2xl p-6" delay={0.1}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
            <span className="veil-card flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
              <Info className="text-primary-500 h-4 w-4" />
            </span>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">And it follows you between devices</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Encryption should not mean starting from scratch on every new machine. Sign in on your laptop, your
                desktop or a browser you have never used before and your conversations are there, decrypted and
                readable, with no recovery phrase to write down and no export file to carry around.
              </p>
            </div>
          </div>

          <RevealGroup className="mt-6 grid gap-2 sm:grid-cols-3" stagger={0.07} amount={0.3}>
            {guarantees.map((guarantee) => (
              <motion.span
                key={guarantee}
                variants={revealItemVariants}
                className="veil-card flex items-start gap-2 rounded-xl px-3.5 py-3 text-xs leading-relaxed text-gray-700 dark:text-gray-300"
              >
                <Check className="text-primary-500 mt-0.5 h-3.5 w-3.5 shrink-0" />
                {guarantee}
              </motion.span>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  )
}
