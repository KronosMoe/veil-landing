import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { VeilLogo } from './veil-logo'
import { ShieldIcon, LockIcon, MessageIcon } from './icons'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-[#111111] via-[#0e0e0e] to-[#111111]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-[#f3701e] uppercase">
              About Veil
            </span>
            <h2 className="mb-6 text-3xl leading-tight font-bold text-balance text-white sm:text-4xl lg:text-5xl">
              Communication, <span className="text-[#f3701e]">Your Way</span>
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-gray-400">
              Veil is built for people who want real privacy without giving up features. Whether you&apos;re catching up
              with friends, running a community, or staying in sync with your team — Veil gives you everything you need
              in one secure place.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-gray-400">
              We think privacy should just work. Every message and file on Veil is end-to-end encrypted, meaning only
              you and the people you talk to can read what&apos;s shared. Not us, not anyone else.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="skeu-card rounded-lg p-5 transition-all duration-200">
                <div className="mb-1 text-3xl font-bold text-[#f3701e]">100%</div>
                <div className="text-sm text-gray-400">Private &amp; Encrypted</div>
              </div>
              <div className="skeu-card rounded-lg p-5 transition-all duration-200">
                <div className="mb-1 text-3xl font-bold text-[#f3701e]">Free</div>
                <div className="text-sm text-gray-400">No Hidden Costs</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[#f3701e]/10 blur-3xl" />

              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-[#f3701e]/20"
              />

              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-10 rounded-full border border-[#f3701e]/15"
              />

              {/* Center card */}
              <div className="absolute inset-16 flex items-center justify-center rounded-lg">
                <VeilLogo
                  className="h-24 w-24 drop-shadow-[0_0_20px_rgba(243,112,30,0.25)] sm:h-28 sm:w-28"
                  color="#ffffff"
                />
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-4 flex h-14 w-14 items-center justify-center rounded-lg"
              >
                <LockIcon className="h-6 w-6 text-[#f3701e]" />
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-10 left-2 flex h-14 w-14 items-center justify-center rounded-lg"
              >
                <MessageIcon className="h-6 w-6 text-[#f3701e]" />
              </motion.div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute right-10 bottom-6 flex h-14 w-14 items-center justify-center rounded-lg"
              >
                <ShieldIcon className="h-6 w-6 text-[#f3701e]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
