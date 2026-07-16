import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MailIcon, ArrowRightIcon } from './icons'
import { VeilLogo } from './veil-logo'
import Button from '../ui/button'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-[#111111] via-[#0e0e0e] to-[#111111]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3701e]/4 blur-3xl" />

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <VeilLogo className="mx-auto h-14 w-14 drop-shadow-[0_0_20px_rgba(243,112,30,0.25)]" color="#ffffff" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-[#f3701e] uppercase">
            Support &amp; Contact
          </span>
          <h2 className="mb-5 text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
            We&apos;re Here to Help
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-pretty text-gray-400">
            Got a question, found a bug, or just want to say hi? Drop us an email and we&apos;ll get back to you as soon
            as we can.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="mailto:support@veil.in.th"
            className="group skeuo-raised flex items-center gap-3 rounded-lg border border-black/60 bg-gradient-to-b from-gray-800 to-gray-900 p-2 transition-all duration-150 hover:skeuo-inset hover:from-gray-900 hover:to-gray-950 active:translate-y-px"
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f3701e]/15 bg-[#f3701e]/10"
              style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.05) inset, 0 2px 6px rgba(0,0,0,0.35)' }}
            >
              <MailIcon className="h-4 w-4 text-[#f3701e]" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500">Email support</div>
              <div className="text-sm font-medium text-white">support@veil.in.th</div>
            </div>
          </a>

          <motion.a
            href="https://app.veil.in.th"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button color="primary" variant="solid" size='lg'>
              Get Started Free
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-sm text-gray-600"
        >
          We typically respond within 24–48 hours.
        </motion.p>
      </div>
    </section>
  )
}
