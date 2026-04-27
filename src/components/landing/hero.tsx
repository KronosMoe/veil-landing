import { motion } from 'framer-motion'
import { VeilLogo } from './veil-logo'
import { ArrowRightIcon, LockIcon } from './icons'
import Button from '../ui/button'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#f3701e]/8 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[#f3701e]/4 blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-8"
        >
          <VeilLogo
            className="mx-auto h-24 w-24 drop-shadow-[0_0_32px_rgba(243,112,30,0.3)] sm:h-32 sm:w-32"
            color="#ffffff"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-6 text-4xl leading-tight font-bold text-balance text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Connect Behind the <span className="text-[#f3701e]">Veil</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-pretty text-gray-400 sm:text-xl"
        >
          Your all-in-one platform for secure messaging, team workspaces, and private collaboration. Chat freely, stay
          organized, and keep every conversation protected.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="https://app.veil.in.th"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button color="primary" variant="solid" size='xl'>
              Get Started Free <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.a>
          <motion.a href="#features" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Button color="secondary" variant="surface" size='xl'>
              Explore Features
            </Button>
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 flex items-center justify-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <LockIcon className="h-4 w-4 text-[#f3701e]" />
            <span>Encrypted Messages</span>
          </div>
          <div className="hidden h-4 w-px bg-[#2e2e2e] sm:block" />
          <div className="hidden items-center gap-2 sm:flex">
            <span>Completely Free</span>
          </div>
          <div className="hidden h-4 w-px bg-[#2e2e2e] sm:block" />
          <div className="hidden items-center gap-2 sm:flex">
            <span>No Ads</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="flex h-10 w-6 items-start justify-center rounded-sm border border-[#2e2e2e] p-2"
        >
          <motion.div className="h-1.5 w-1.5 rounded-full bg-[#f3701e]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
