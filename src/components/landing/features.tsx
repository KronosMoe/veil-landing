import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  MessageIcon,
  UsersIcon,
  ShieldIcon,
  MicIcon,
  FolderIcon,
  PaletteIcon,
  CheckListIcon,
  MegaphoneIcon,
  HashIcon,
} from './icons'

const features = [
  {
    icon: MessageIcon,
    title: 'Direct & Group Messaging',
    description:
      'Chat one-on-one or create group conversations with friends and colleagues. Share text, images, and files in real time with full encryption.',
  },
  {
    icon: UsersIcon,
    title: 'Workspaces',
    description:
      'Create organized spaces for your team or community. Invite members, set up channels for different topics, and keep everything neatly in one place.',
  },
  {
    icon: ShieldIcon,
    title: 'End-to-End Encryption',
    description:
      "Every message and file attachment is encrypted the moment it leaves your device. Only you and your recipients can read what's shared — no one else.",
  },
  {
    icon: HashIcon,
    title: 'Text Channels',
    description:
      'Keep discussions organized with dedicated text channels inside your workspace. Different topics, different channels — easy to follow and search.',
  },
  {
    icon: MicIcon,
    title: 'Voice Channels',
    description:
      'Hop into voice conversations instantly — no scheduling required. Great for quick check-ins, team meetings, or just hanging out.',
  },
  {
    icon: CheckListIcon,
    title: 'Todo List Channels',
    description:
      'Track tasks right inside your workspace with a built-in todo list channel. Add tasks, set priorities, mark them done — simple and straightforward.',
  },
  {
    icon: MegaphoneIcon,
    title: 'Announcement Channels',
    description:
      'Post important updates in a dedicated announcement channel so nothing important gets buried in the chat. Keep your community in the loop.',
  },
  {
    icon: FolderIcon,
    title: 'Personal Drive',
    description:
      "See a file you want to keep? Save it to your personal Drive with one click. Your Drive organizes all the attachments you've chosen to save — from any chat or workspace.",
  },
  {
    icon: PaletteIcon,
    title: 'Customizable Accent Color',
    description:
      'Veil is yours to personalize. Pick an accent color that matches your style and the whole interface adapts to it instantly.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#0e0e0e]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-[#f3701e] uppercase">
            Features
          </span>
          <h2 className="mb-6 text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
            Everything You Need to Connect
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-pretty text-gray-400">
            Veil brings together messaging, collaboration, and privacy into one seamless experience — no compromises.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skeu-card group relative cursor-default rounded-lg p-6 transition-all duration-300"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[#f3701e]/15 bg-[#f3701e]/10 transition-colors group-hover:bg-[#f3701e]/20"
                style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.05) inset, 0 2px 6px rgba(0,0,0,0.35)' }}
              >
                <feature.icon className="h-5 w-5 text-[#f3701e]" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
