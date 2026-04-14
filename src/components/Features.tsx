import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import { Lock, MessageSquare, Mic, MonitorPlay, PenTool, Pin, Paperclip, UserPlus, Palette } from 'lucide-react'

const features = [
  {
    icon: <Lock size={20} />,
    title: 'Private Direct Messages',
    desc: 'Your DMs are protected so only you and the person you\u2019re chatting with can read them. No one else — not even us.',
  },
  {
    icon: <MessageSquare size={20} />,
    title: 'Text Channels',
    desc: 'Set up channels for different projects, teams, or topics. Reply to messages, pin important ones, and keep things on track.',
  },
  {
    icon: <Mic size={20} />,
    title: 'Voice & Video',
    desc: 'Jump into a voice channel for a quick chat, or start a video call with a friend. Share your camera or just talk.',
  },
  {
    icon: <MonitorPlay size={20} />,
    title: 'Screen Sharing',
    desc: 'Show your screen during a voice call to walk through a document, demo something, or fix a problem together.',
  },
  {
    icon: <PenTool size={20} />,
    title: 'Whiteboard',
    desc: 'Sketch ideas, draw diagrams, and brainstorm together in real time on a shared whiteboard inside your workspace.',
  },
  {
    icon: <Paperclip size={20} />,
    title: 'Rich Messages',
    desc: 'Share images, videos, audio, and files. Send GIFs and emojis. Format text with markdown. Preview links automatically.',
  },
  {
    icon: <Pin size={20} />,
    title: 'Pin & Reply',
    desc: 'Pin important messages so your team can find them later. Reply to any message to keep conversations easy to follow.',
  },
  {
    icon: <UserPlus size={20} />,
    title: 'Friends',
    desc: 'Add people as friends for quick one-on-one chats and calls outside of workspaces. Your contacts go wherever you go.',
  },
  {
    icon: <Palette size={20} />,
    title: 'Make It Yours',
    desc: 'Pick a theme, choose your accent color, and adjust audio and video settings. Make Veil feel like home.',
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
          <h2 className="mb-3 text-3xl font-bold">Everything Your Team Needs</h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            Chat, call, share, and collaborate — all in one place.
          </p>
        </div>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
