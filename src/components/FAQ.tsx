import { useEffect, useRef, useState } from 'react'
import { animate, stagger } from 'animejs'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is Veil really end-to-end encrypted?',
    a: 'Yes. Every message, call, and file transfer uses E2E encryption. Not even Veil servers can read your data.',
  },
  {
    q: 'Can I self-host Veil?',
    a: 'Absolutely. Our Enterprise plan includes full self-hosting support with Docker and Kubernetes deployment guides.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Your data is yours. You can export everything before cancelling. After cancellation, data is permanently deleted from our servers within 30 days.',
  },
  {
    q: 'Does Veil work on mobile?',
    a: 'Veil works on all modern browsers and we have native apps for iOS and Android in development.',
  },
  {
    q: 'How does Veil compare to Slack or Discord?',
    a: 'Veil offers similar collaboration features but with privacy as the core principle. No ads, no data mining, no third-party tracking.',
  },
  {
    q: 'Is there a free tier?',
    a: 'Yes. The Free plan supports up to 10 members with encrypted messaging and voice calls — no credit card required.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev
      if (contentRef.current) {
        animate(contentRef.current, {
          height: next ? [0, contentRef.current.scrollHeight] : [contentRef.current.scrollHeight, 0],
          opacity: next ? [0, 1] : [1, 0],
          duration: 300,
          ease: 'outQuart',
        })
      }
      return next
    })
  }

  return (
    <div className="faq-item border-b border-zinc-800 opacity-0">
      <button onClick={toggle} className="flex w-full items-center justify-between py-4 text-left">
        <span className="pr-4 text-sm font-medium">{q}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-zinc-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <p className="pb-4 text-sm leading-relaxed text-zinc-400">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate('.faq-heading', {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            ease: 'outExpo',
          })
          animate('.faq-item', {
            opacity: [0, 1],
            translateY: [20, 0],
            delay: stagger(80),
            duration: 500,
            ease: 'outExpo',
          })
        }
      },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="faq-heading mb-10 text-center opacity-0">
          <h2 className="mb-3 text-3xl font-bold">FAQ</h2>
          <p className="text-zinc-400">Common questions about Veil.</p>
        </div>
        <div className="rounded-sm border border-zinc-700 bg-zinc-900 px-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
