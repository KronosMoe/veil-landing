import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import { MessageSquare, Video, Lock, Bell, Globe, Palette } from 'lucide-react'

const features = [
  {
    icon: <MessageSquare size={20} />,
    title: 'Encrypted Messaging',
    desc: 'Real-time chat with E2E encryption. Markdown, code blocks, and file sharing built in.',
  },
  {
    icon: <Video size={20} />,
    title: 'Voice & Video Calls',
    desc: 'Crystal-clear calls with screen sharing. No third-party routing — direct peer connections.',
  },
  {
    icon: <Lock size={20} />,
    title: 'Zero-Knowledge Auth',
    desc: 'We never see your passwords. Authentication happens entirely on your device.',
  },
  {
    icon: <Bell size={20} />,
    title: 'Smart Notifications',
    desc: 'Granular control over what pings you. Set focus hours, mute channels, or go fully dark.',
  },
  {
    icon: <Globe size={20} />,
    title: 'Self-Hostable',
    desc: 'Run Veil on your own infrastructure. Full control over your data and compliance.',
  },
  {
    icon: <Palette size={20} />,
    title: 'Customizable',
    desc: 'Themes, layouts, and integrations. Make Veil feel like home for your team.',
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate('.features-heading', {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            ease: 'outExpo',
          })
          animate('.feature-item', {
            opacity: [0, 1],
            translateY: [30, 0],
            delay: stagger(80),
            duration: 600,
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
    <section ref={sectionRef} id="features" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="features-heading mb-12 text-center opacity-0">
          <h2 className="mb-3 text-3xl font-bold">Features</h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            Everything your team needs to communicate securely — nothing it doesn&apos;t.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-item group rounded-sm border border-zinc-800 bg-zinc-900/50 p-5 opacity-0 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
            >
              <div className="mb-3 flex size-9 items-center justify-center rounded-sm bg-zinc-800 text-emerald-400 transition-colors group-hover:bg-emerald-900/40">
                {f.icon}
              </div>
              <h3 className="mb-1 text-sm font-bold">{f.title}</h3>
              <p className="text-xs leading-relaxed text-zinc-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
