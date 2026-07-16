import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDownIcon } from './icons'

const faqs = [
  {
    question: 'Is Veil really free to use?',
    answer:
      'Yes — Veil is completely free. All core features are included at no cost. We believe everyone deserves secure and private communication without a price tag.',
  },
  {
    question: 'How does end-to-end encryption work?',
    answer:
      "Your messages are scrambled on your device before being sent. Only you and your intended recipients hold the keys to unscramble them. Even we can't read your conversations.",
  },
  {
    question: 'Can I use Veil for my team or community?',
    answer:
      'Absolutely. Veil workspaces are designed for groups of any size. Spin up channels for different topics, use voice chat for meetings, and stay organized — all in one place.',
  },
  {
    question: 'Are file attachments encrypted too?',
    answer:
      'Yes. Every file you send through Veil — images, documents, audio — is encrypted with the same protection as your messages.',
  },
  {
    question: 'How does the personal Drive work?',
    answer:
      "When you receive a file attachment in a chat or workspace, you can choose to save it to your personal Drive by clicking the save button. Files don't go to your Drive automatically — you decide what to keep. Your Drive is organized by source, so you always know where something came from.",
  },
  {
    question: 'What platforms is Veil available on?',
    answer:
      'Veil is available only on Windows, Linux, and macOS. We are working hard to expand to more platforms in the future.',
  },
  {
    question: 'Can I customize how Veil looks?',
    answer:
      'Yes! You can pick a custom accent color that applies throughout the whole interface. Make Veil feel like yours.',
  },
  {
    question: 'Who can see messages in a workspace?',
    answer:
      'Only members of your workspace who have access to a specific channel can see its messages. You control who joins and what they can access.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-[#2a2a2a] last:border-0">
      <button
        onClick={onClick}
        className="group flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-sm font-medium text-white transition-colors group-hover:text-[#f3701e] sm:text-base">
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
          <ChevronDownIcon className="h-4 w-4 text-gray-500 transition-colors group-hover:text-[#f3701e]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#111111]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-xl font-semibold tracking-wider text-[#f3701e] uppercase">FAQ</span>
          <h2 className="mb-4 text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">Got Questions?</h2>
          <p className="text-base leading-relaxed text-gray-400">
            Here are answers to the most common things people ask about Veil.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="skeu-card rounded-lg px-5 py-2 sm:px-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
