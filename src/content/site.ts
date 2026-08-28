import {
  Bookmark,
  Building2,
  CheckSquare,
  Gift,
  Hash,
  Highlighter,
  Megaphone,
  MessageCircleQuestion,
  MonitorSmartphone,
  Palette,
  Presentation,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  Volume2,
  type LucideIcon,
} from 'lucide-react'

export const APP_URL = 'https://app.veil.in.th'
export const SUPPORT_EMAIL = 'support@veil.in.th'

export const navLinks = [
  { href: '#showcase', label: 'Tour' },
  { href: '#features', label: 'Features' },
  { href: '#security', label: 'Security' },
  { href: '#pricing', label: 'Plans' },
  { href: '#faq', label: 'FAQ' },
]

/** The six channel types a workspace can hold, in the order the app lists them. */
export const channelTypes: { icon: LucideIcon; name: string; blurb: string }[] = [
  { icon: Hash, name: 'Text', blurb: 'The everyday conversation' },
  { icon: Volume2, name: 'Voice', blurb: 'Drop in, no invite needed' },
  { icon: Presentation, name: 'Whiteboard', blurb: 'Think out loud, together' },
  { icon: CheckSquare, name: 'To-do', blurb: 'A board of what happens next' },
  { icon: Megaphone, name: 'Announcements', blurb: 'The things nobody should miss' },
  { icon: MessageCircleQuestion, name: 'Q&A', blurb: 'Ask once, answer once' },
]

/**
 * The scroll-pinned tour on the homepage. Each scene is paired with a live
 * replica of that part of the app in `showcase-demos.tsx`, keyed by `id`.
 */
export type ShowcaseScene = {
  id: 'messages' | 'calls' | 'whiteboard' | 'todo' | 'announcements' | 'qa'
  icon: LucideIcon
  label: string
  eyebrow: string
  title: string
  body: string
  points: string[]
}

export const showcaseScenes: ShowcaseScene[] = [
  {
    id: 'messages',
    icon: Hash,
    label: 'Messages',
    eyebrow: 'Text channels',
    title: 'Say it once, where everyone can find it',
    body: 'Threaded enough to follow, quiet enough to read. Mention a person or a channel and the link goes straight there.',
    points: [
      'Reactions, replies, edits and pins',
      'Mentions that reach across channels',
      'Every message sealed before it leaves your device',
    ],
  },
  {
    id: 'calls',
    icon: Volume2,
    label: 'Calls',
    eyebrow: 'Voice and video',
    title: 'Talk without booking anything',
    body: 'Walk into a voice channel the way you would walk to someone\u2019s desk \u2014 no link, no lobby, no calendar invite. Then run the whole meeting without leaving it.',
    points: [
      'Share a screen and let anyone draw on it',
      'Speaker or gallery view, with pinning and a filmstrip',
      'Chat, polls, Q&A and reactions inside the call',
      'Blur or replace your background mid-call',
    ],
  },
  {
    id: 'whiteboard',
    icon: Presentation,
    label: 'Whiteboard',
    eyebrow: 'Whiteboard channels',
    title: 'Think on the same surface',
    body: 'A real canvas that lives in the channel, with everyone\u2019s cursor on it. Scenes are encrypted client-side and relayed as ciphertext.',
    points: [
      'Live cursors and instant scene sync',
      'Images and files stay encrypted at rest',
      'Nothing to export \u2014 the board is the channel',
    ],
  },
  {
    id: 'todo',
    icon: CheckSquare,
    label: 'To-do',
    eyebrow: 'To-do channels',
    title: 'Turn the conversation into work',
    body: 'A board that sits beside the discussion that produced it, so a decision does not evaporate the moment the thread scrolls away.',
    points: [
      'Drag between columns you define',
      'Priorities, due dates and assignees',
      'Assigned tasks gather in one personal list',
    ],
  },
  {
    id: 'announcements',
    icon: Megaphone,
    label: 'Announcements',
    eyebrow: 'Announcement channels',
    title: 'The things nobody should miss',
    body: 'A channel where a handful of people post and everybody reads. It looks like a noticeboard rather than a chat, so an announcement does not scroll away.',
    points: [
      'Posts that stay put, with a cover image',
      'React and comment without derailing the post',
      'Drafts until you are ready to publish',
    ],
  },
  {
    id: 'qa',
    icon: MessageCircleQuestion,
    label: 'Q&A',
    eyebrow: 'Q&A channels',
    title: 'Ask once, answer once',
    body: 'The same question stops getting asked every month. People upvote what they also want to know, and an answer gets marked so the next person finds it.',
    points: [
      'Upvotes float the real questions up',
      'Answered questions are marked and stay searchable',
      'Filter by answered, unanswered or your own',
    ],
  },
]

export type Feature = {
  icon: LucideIcon
  eyebrow: string
  title: string
  body: string
  /** Tailwind column span at the lg breakpoint, for the bento grid. */
  span: string
}

/** Deliberately short. These are the things people tell their friends about —
 *  the long tail of smaller features lives in the app, not on this page. */
export const features: Feature[] = [
  {
    icon: Sparkles,
    eyebrow: 'One workspace',
    title: 'Six kinds of channels, no extra tabs',
    body: 'Text for the conversation, voice for the quick huddle, a whiteboard for the messy part, a board for what happens next, announcements for what matters and Q&A for what everyone is wondering. All in the same place, all encrypted the same way.',
    span: 'lg:col-span-4',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'End-to-end encrypted',
    title: 'Nothing readable crosses the wire',
    body: 'Messages, files, announcements, polls and whiteboards are encrypted with AES-256-GCM on your device and stay that way in transit and at rest. Nobody sitting on the network in between has anything worth reading.',
    span: 'lg:col-span-2',
  },
  {
    icon: Highlighter,
    eyebrow: 'Live meetings',
    title: 'More than a mute button',
    body: 'Join a voice channel in one click, then share your screen and let anyone draw on it. Run a poll, collect questions, throw a reaction, blur your background, and flip between speaker and gallery view whenever you like.',
    span: 'lg:col-span-3',
  },
  {
    icon: Presentation,
    eyebrow: 'Whiteboard',
    title: 'A canvas nobody else can read',
    body: 'Sketch together in real time, live cursors and all. Every stroke is encrypted in your browser, so the board reaches our servers as ciphertext and comes back the same way.',
    span: 'lg:col-span-3',
  },
  {
    icon: Bookmark,
    eyebrow: 'Keep',
    title: 'Save only what you meant to',
    body: 'Nothing lands in your Keep on its own. Spot a file worth holding onto, hit save, and it is filed away — sorted by the chat it came from.',
    span: 'lg:col-span-2',
  },
  {
    icon: MonitorSmartphone,
    eyebrow: 'Everywhere',
    title: 'Browser, desktop, or installed',
    body: 'Use Veil in any modern browser, install it as an app, or run the desktop build on macOS, Windows and Linux.',
    span: 'lg:col-span-2',
  },
  {
    icon: Palette,
    eyebrow: 'Yours',
    title: 'Your accent, your theme',
    body: 'Pick an accent colour and the whole interface follows it. Light and dark are both first-class — this page included.',
    span: 'lg:col-span-2',
  },
]

export const securitySteps = [
  {
    step: '01',
    title: 'You type it',
    body: 'Your message, file or drawing exists in plain text on your device and nowhere else. Nothing leaves while you are still writing.',
  },
  {
    step: '02',
    title: 'Your device encrypts it',
    body: 'It is sealed with AES-256-GCM before it is sent. Direct messages use a key derived from an X25519 exchange with the person you are talking to, and every channel has a key of its own.',
  },
  {
    step: '03',
    title: 'It stays encrypted',
    body: 'Encrypted in transit and encrypted at rest. Attachments are uploaded already sealed, and sensitive account fields are encrypted again on top of that.',
  },
]

/** The commitments we can actually keep, stated as commitments rather than
 *  as claims about what is technically impossible for us. */
export const guarantees = [
  'Sign-in runs on our own OpenID Connect provider, not a shared password field',
  'Two-factor with an authenticator app or a passkey, whenever you want it',
  'No ads, no ad networks, no third-party trackers — and nothing sold, ever',
]

export type Plan = {
  icon: LucideIcon
  name: string
  price: string
  /** Sits under the price. Short enough for a card. */
  cadence: string
  tagline: string
  benefits: string[]
  /** The thing we would rather say out loud than have someone find out later. */
  caveat?: string
  cta: { label: string; href: string }
  /** The one card the row leans towards. */
  featured?: boolean
}

/**
 * Mirrors the four workspace licences the app offers, cheapest first. Nothing
 * Veil ships today sits behind a licence — the paid tiers add capabilities that
 * do not exist yet, so a free workspace never loses anything it already had.
 */
export const plans: Plan[] = [
  {
    icon: Gift,
    name: 'Free',
    price: 'Free',
    cadence: 'forever',
    tagline: 'Everything Veil ships today, for as long as you want it.',
    benefits: [
      'Text, voice, whiteboard, to-do, announcement and Q&A channels',
      'Messages encrypted on your device before they are sent',
      'Voice and video calls with screen sharing',
      'Unlimited members and message history',
    ],
    cta: { label: 'Create your workspace', href: APP_URL },
  },
  {
    icon: Users,
    name: 'Team',
    price: 'Paid',
    cadence: 'pricing not announced',
    tagline: 'For teams that have to answer to someone.',
    benefits: [
      'Everything in Free',
      'Single sign-on for your members',
      'Audit log export',
      'Custom workspace branding',
      'Priority support',
    ],
    caveat:
      'Billing is not live yet. Registering interest — here or from your workspace settings — costs nothing and charges nothing.',
    cta: {
      label: 'Register interest',
      href: `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Team licence interest')}`,
    },
    featured: true,
  },
  {
    icon: Building2,
    name: 'Enterprise',
    price: 'Talk to us',
    cadence: 'custom terms',
    tagline: 'For organisations with procurement, and a security questionnaire.',
    benefits: ['Everything in Team', 'Compliance reports', 'A named contact at Veil', 'Custom terms and invoicing'],
    cta: {
      label: `Email ${SUPPORT_EMAIL}`,
      href: `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Enterprise licence enquiry')}`,
    },
  },
  {
    icon: Server,
    name: 'Self-hosted',
    price: 'Free',
    cadence: 'you run it',
    tagline: 'Every feature unlocked, on infrastructure you own.',
    benefits: [
      'Everything in Enterprise, at no cost',
      'Your database, your storage, your network',
      'Upgrade on your own schedule',
    ],
    caveat:
      'You deploy and maintain the services yourself — Postgres, RabbitMQ, Redis and the Veil backend. There is no Veil SLA on a deployment you run.',
    cta: {
      label: 'Ask about self-hosting',
      href: `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Self-hosted deployment')}`,
    },
  },
]

export const faqs = [
  {
    question: 'Is Veil really free?',
    answer:
      'Yes. Every feature on this page is on the free plan, with no card, no trial clock and no ads. The paid plans we are building add things the free plan has never had — single sign-on, audit log export, compliance reports — so nothing you use today moves behind a paywall.',
  },
  {
    question: 'What are the plans, then?',
    answer:
      'Every workspace starts on Free and stays there unless its owner asks for something else. Team adds administrative features for teams that answer to someone, and is not billable yet. Enterprise is a conversation with us about custom terms. Self-hosted unlocks everything at no cost on infrastructure you run and maintain yourself.',
  },
  {
    question: 'What does end-to-end encrypted mean here?',
    answer:
      'Your messages, file attachments, announcements, polls, Q&A posts and whiteboards are encrypted with AES-256-GCM in your browser before they are sent, and they stay encrypted in transit and on our disks. Direct messages use a key derived from an X25519 exchange with the person you are writing to, and every channel has its own key.',
  },
  {
    question: 'How do I sign in?',
    answer:
      'Through Veil\u2019s own OpenID Connect provider — the same standard your bank and your workplace login use — rather than a password box wired straight into the app. You can add a second factor with an authenticator app or a passkey.',
  },
  {
    question: 'Are voice and video calls encrypted too?',
    answer:
      'Calls are encrypted in transit and routed live through our media server so everyone stays in sync. We do not record them and we do not store them.',
  },
  {
    question: 'Can I use Veil for a whole team or community?',
    answer:
      'That is what workspaces are for. Invite people, group your channels into categories, drag them into the order that makes sense, and give each topic the kind of channel it deserves.',
  },
  {
    question: 'Where can I run Veil?',
    answer:
      'In any modern browser, as an installed web app, or as a desktop app for macOS, Windows and Linux. Your workspaces, messages and settings follow you between them.',
  },
  {
    question: 'Do you track me or run analytics?',
    answer:
      'There are no ad networks, no third-party analytics and no trackers on this site or in the app. We keep our own operational logs so we know the service is up, and that is the extent of it.',
  },
  {
    question: 'What happens if I delete my account?',
    answer:
      'Deletion is scheduled fourteen days out, so signing back in during that window cancels it. After that your account and the personal data attached to it are removed. Your display name is kept in an archived form so old messages still show who wrote them, rather than turning into blanks for everyone else in the conversation.',
  },
]
