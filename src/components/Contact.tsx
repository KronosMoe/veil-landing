import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { Mail, MessageCircle, Github } from 'lucide-react'

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
          <h2 className="mb-3 text-3xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-zinc-400">Have questions or need help? We&apos;d love to hear from you.</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:support@veil.in.th"
              className="flex w-full items-center justify-center gap-2 rounded-sm border border-zinc-700 bg-zinc-800 px-5 py-2.5 text-sm transition-colors hover:bg-zinc-700 sm:w-auto"
            >
              <Mail size={16} />
              Email Us
            </a>
            <a
              href="https://github.com/veil-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-sm border border-zinc-700 bg-zinc-800 px-5 py-2.5 text-sm transition-colors hover:bg-zinc-700 sm:w-auto"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://app.veil.in.th"
              className="flex w-full items-center justify-center gap-2 rounded-sm border border-zinc-700 bg-zinc-800 px-5 py-2.5 text-sm transition-colors hover:bg-zinc-700 sm:w-auto"
            >
              <MessageCircle size={16} />
              Community
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
