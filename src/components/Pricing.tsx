import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate('.pricing-content', {
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
    <section ref={sectionRef} id="pricing" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="pricing-content rounded-sm border border-zinc-700 bg-zinc-900 p-8 text-center opacity-0 shadow-lg">
          <h2 className="mb-3 text-3xl font-bold">Free to Use</h2>
          <p className="mb-6 text-zinc-400">
            Veil is <span className="font-semibold text-emerald-400">completely free</span> right now. No credit card, no
            trial countdown — just sign up and go.
          </p>
          <div className="mx-auto mb-6 max-w-sm rounded-sm border border-zinc-800 bg-zinc-950 p-5">
            <div className="mb-1 text-xs font-medium tracking-wider text-zinc-500 uppercase">Everything included</div>
            <div className="mb-3 text-2xl font-bold">
              $0 <span className="text-sm font-normal text-zinc-500">/ free</span>
            </div>
            <ul className="space-y-1 text-sm text-zinc-400">
              <li>Private direct messages</li>
              <li>Workspaces with text, voice & whiteboard channels</li>
              <li>Voice & video calls</li>
              <li>Screen sharing</li>
              <li>File sharing, GIFs & emojis</li>
              <li>Desktop app</li>
            </ul>
          </div>
          <p className="mb-6 text-xs text-zinc-600">Paid plans with higher limits may come in the future. A free tier will always exist.</p>
          <a href="https://app.veil.in.th">
            <button className="rounded-sm bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-500">
              Get Started for Free
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
