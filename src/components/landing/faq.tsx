import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/content/site'
import { Reveal, RevealGroup } from '../motion/reveal'
import { revealItemVariants } from '@/lib/motion-variants'

// Mirrors the visible copy above, so the rich result and the page never drift.
const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
})

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-primary-500 text-xs font-semibold tracking-[0.2em] uppercase">Questions</span>
          <h2 className="mt-3 text-3xl font-bold text-balance text-gray-900 sm:text-4xl dark:text-white">
            The things people ask us first
          </h2>
        </Reveal>

        <RevealGroup className="veil-card mt-10 px-5 sm:px-7" stagger={0.05} amount={0.1}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={faq.question}
                variants={revealItemVariants}
                className="border-b border-black/10 last:border-0 dark:border-white/5"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="group-hover:text-primary-500 text-sm font-semibold text-gray-900 transition-colors sm:text-base dark:text-white">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="veil-card flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    >
                      <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
