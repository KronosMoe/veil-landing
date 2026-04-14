import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { Mail } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate('.contact-content', {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 700,
            ease: 'outExpo',
          })
        }
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="contact-content rounded-sm border border-zinc-700 bg-zinc-900 p-8 text-center opacity-0 shadow-lg">
          <h2 className="mb-3 text-3xl font-bold">Got a Question?</h2>
          <p className="mb-8 text-zinc-400">
            Whether you found a bug, need help with something, or just want to say hi — we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:support@veil.in.th"
            className="inline-flex items-center gap-2 rounded-sm border border-zinc-700 bg-zinc-800 px-6 py-2.5 text-sm transition-colors hover:bg-zinc-700"
          >
            <Mail size={16} />
            support@veil.in.th
          </a>
        </div>
      </div>
    </section>
  )
}
