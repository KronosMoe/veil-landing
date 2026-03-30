import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import { Shield, Users, Zap } from 'lucide-react'

export default function Overview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate('.overview-card', {
            opacity: [0, 1],
            translateY: [40, 0],
            delay: stagger(120),
            duration: 700,
            ease: 'outExpo',
          })
          animate('.overview-heading', {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
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
    <section ref={sectionRef} id="overview" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="overview-heading mb-12 text-center opacity-0">
          <h2 className="mb-3 text-3xl font-bold">What is Veil?</h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            A team communication platform where privacy isn&apos;t an afterthought — it&apos;s the foundation. Chat,
            call, and collaborate without compromising your data.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: <Shield size={24} />,
              title: 'Private by Default',
              desc: 'End-to-end encryption on every message, call, and file. Your data stays yours.',
            },
            {
              icon: <Users size={24} />,
              title: 'Built for Teams',
              desc: 'Channels, threads, and roles designed for real collaboration at any scale.',
            },
            {
              icon: <Zap size={24} />,
              title: 'Fast & Lightweight',
              desc: 'Snappy performance without the bloat. Works great even on slower connections.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="overview-card rounded-sm border border-zinc-700 bg-zinc-900 p-6 opacity-0 shadow-lg"
            >
              <div className="mb-3 flex size-10 items-center justify-center rounded-sm bg-zinc-800 text-emerald-400">
                {item.icon}
              </div>
              <h3 className="mb-1 font-bold">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
