import { useEffect, useRef, useState } from 'react'
import { animate, stagger } from 'animejs'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How is Veil different from Slack or Discord?',
    a: 'Veil gives you channels, voice calls, video, screen sharing, and whiteboards — just like the tools you already know. The difference is that your private conversations are actually private. We don\u2019t read your messages, sell your data, or show you ads.',
  },
  {
    q: 'What do you mean by "private messages"?',
    a: 'Your direct messages are locked so only you and the person you\u2019re talking to can read them. Not us, not anyone else. Think of it like passing a sealed note that only the other person can open.',
  },
  {
    q: 'Is Veil really free?',
    a: 'Yes. Everything you see on this page is free to use — no catch, no time limit. We may add paid plans with higher limits down the road, but there will always be a free option.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'Nope. Veil works right in your browser. If you want extras like multi-tab support and better screen sharing, there\u2019s a desktop app you can download too.',
  },
  {
    q: 'What can I do in a workspace?',
    a: 'A workspace is your team\u2019s home base. Inside it, you can create text channels to chat, voice channels to talk, and whiteboard channels to draw and brainstorm together.',
  },
  {
    q: 'Is there a mobile app?',
    a: 'Not yet, but it\u2019s on our list. For now, you can use Veil through your phone\u2019s browser.',
  },
  {
    q: 'Who is Veil for?',
    a: 'Anyone who wants a clean, private space to talk with their team — whether you\u2019re a startup, a student group, a side project, or a department at a bigger company.',
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
    <div className="faq-item border-b border-zinc-800 opacity-0 last:border-b-0">
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
          <h2 className="mb-3 text-3xl font-bold">Questions & Answers</h2>
          <p className="text-zinc-400">Things people usually ask about Veil.</p>
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
