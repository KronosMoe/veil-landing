import { useId, useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  Check,
  CheckCircle2,
  CheckSquare,
  ChevronDown,
  CircleHelp,
  Clock3,
  File,
  FileText,
  Folder,
  Hash,
  KeyRound,
  LockKeyhole,
  Menu,
  MessageCircle,
  MessageCircleQuestion,
  MonitorSmartphone,
  Palette,
  Phone,
  Plus,
  Search,
  Send,
  ShieldCheck,
  Star,
  Users,
  Video,
  X,
  Zap,
} from 'lucide-react'
import { APP_URL, SUPPORT_EMAIL } from '@/content/site'
import { PRIVACY_POLICY_PATH, TERM_OF_SERVICE_PATH } from '@/constants/routes'
import ThemeToggle from '@/components/ui/theme-toggle'
import { Mention, MessageRow } from './app-chrome'
import { VeilLogo } from './veil-logo'
import '@/styles/veil-landing.css'

const NAV = [
  ['#why', 'Why Veil'],
  ['#spaces', 'Spaces'],
  ['#attention', 'Attention'],
  ['#privacy', 'Privacy'],
] as const

const CAPABILITIES = [
  { label: 'Chat', icon: MessageCircle },
  { label: 'Threads', icon: Hash },
  { label: 'Announcement', icon: Bell },
  { label: 'Q&A', icon: MessageCircleQuestion },
  { label: 'Todo', icon: CheckSquare },
  { label: 'Whiteboard', icon: Palette },
  { label: 'Meeting', icon: Video },
] as const

const FAQS = [
  {
    q: 'What is a Space?',
    a: 'A Space is the context where people and work meet. It can stay as simple as a conversation, or grow with channels for chat, announcements, Q&A, Todo, whiteboard, and meetings.',
  },
  {
    q: 'How is Veil different from traditional team chat?',
    a: 'Veil does not make every kind of work behave like chat. A question can become Q&A, durable information can become an announcement, and actionable work can become a Todo without losing its Space context.',
  },
  {
    q: 'Can a Space be used by only a few people?',
    a: 'Yes. A Space can be personal or shared, and a small Space can remain deliberately small. You add only the structures the people inside it need.',
  },
  {
    q: 'What can I add to a Space?',
    a: 'The current product supports chat, threads, announcements, Q&A, Todo, whiteboards, and calls or meetings. Keep is personal and deliberately sits outside Spaces.',
  },
  {
    q: 'What is People?',
    a: 'People is a global directory of everyone you can reach through your Spaces. It deduplicates people, shows shared-Space context, supports favorites, and is not a friend graph or another inbox.',
  },
  {
    q: 'What is Keep?',
    a: 'Keep is your personal place for saved files and content. Items retain their source context, but Keep belongs to you—not to a Space and not to a team dashboard.',
  },
  {
    q: 'How does Inbox decide what needs attention?',
    a: 'Inbox distinguishes general activity from events with direct relevance, such as a mention, a reply, an assignment, or a due Todo. Attention priority and notification delivery are separate decisions.',
  },
  {
    q: 'How do notification preferences work?',
    a: 'Space policies can be normal, quiet, important-only, or all activity. Push, sound, and quiet hours are delivery controls, so an item can remain visible in Inbox without interrupting you.',
  },
  {
    q: 'How does Veil protect private communication?',
    a: 'Private-conversation messages are encrypted on the sender’s device into an envelope for each recipient device. The service stores and routes ciphertext rather than a readable message body.',
  },
  {
    q: 'What does end-to-end encryption cover?',
    a: 'Private messages use per-device encrypted envelopes. Their attachments use generated keys delivered through those envelopes. Space channels use shared channel keys and are not described as the same per-device E2EE model. Calls are encrypted in transit.',
  },
  {
    q: 'Can I use Veil across multiple devices?',
    a: 'Yes. Each device has its own private-message cryptographic state. Encrypted history recovery on a new device depends on the optional PIN-protected archive backup; operational metadata still exists so Veil can route and synchronize the service.',
  },
] as const

function Eyebrow({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="v-eyebrow">
      <span>{index}</span>
      {children}
    </p>
  )
}

function Wordmark() {
  return (
    <span className="v-wordmark">
      <VeilLogo />
      <span>veil</span>
    </span>
  )
}

function PageHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="v-header">
      <a className="v-logo" href="#top" aria-label="Veil home">
        <Wordmark />
      </a>
      <nav className={open ? 'v-nav is-open' : 'v-nav'} aria-label="Main navigation">
        {NAV.map(([href, label]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="v-header-actions">
        <ThemeToggle />
        <a className="v-button v-button-compact" href={APP_URL}>
          Open Veil <ArrowUpRight size={15} />
        </a>
        <button
          className="v-menu"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="v-hero" aria-labelledby="v-hero-title">
      <div className="v-hero-copy">
        <Eyebrow index="00">Work, on your terms</Eyebrow>
        <h1 id="v-hero-title">
          A place where you define <em>how you work.</em>
        </h1>
        <p>
          Veil brings the conversation, the decision, and the work that follows into one context—without making every
          new thing compete for your attention.
        </p>
        <div className="v-hero-actions">
          <a href={APP_URL} className="v-button">
            Open Veil <ArrowUpRight size={17} />
          </a>
          <a href="#why" className="v-text-link">
            See why it exists <ArrowDown size={16} />
          </a>
        </div>
      </div>
      <div className="v-hero-product" aria-label="Veil Space product preview">
        <div className="v-app-rail" aria-hidden="true">
          <span className="is-home">
            <VeilLogo />
          </span>
          <span>VD</span>
          <span>DS</span>
          <span>+3</span>
          <i />
          <span>
            <Users />
          </span>
          <span>
            <Search />
          </span>
        </div>
        <div className="v-app-nav">
          <p>VEIL DEVELOPMENT</p>
          <strong>Build the next release</strong>
          <small>12 people · Shared Space</small>
          <div className="v-channel-list">
            <span className="is-current">
              <Hash /> general <i>3</i>
            </span>
            <span>
              <Hash /> backend
            </span>
            <span>
              <Bell /> announcements
            </span>
            <span>
              <MessageCircleQuestion /> questions
            </span>
            <span>
              <CheckSquare /> todo <i>4</i>
            </span>
            <span>
              <Palette /> whiteboard
            </span>
          </div>
        </div>
        <div className="v-app-main">
          <div className="v-app-titlebar">
            <span>
              <Hash /> general
            </span>
            <span>
              <Phone />
              <Video />
              <Users />
            </span>
          </div>
          <div className="v-hero-messages">
            <MessageRow
              initials="AK"
              name="Alice Kim"
              time="10:24"
              reactions={[{ emoji: '✓', count: 3, reacted: true }]}
            >
              The handoff is ready. <Mention>you</Mention>, can you take the API review?
            </MessageRow>
            <MessageRow initials="BO" name="Bob Ortiz" time="10:27">
              I pulled the open question into a thread so the decision stays with the work.
            </MessageRow>
            <div className="v-thread-peek">
              <span>AK</span>
              <span>BO</span>
              <span>+2</span>
              <strong>4 replies</strong>
              <small>Last reply just now</small>
              <ArrowRight />
            </div>
          </div>
          <div className="v-composer">
            <Plus />
            <span>Message #general</span>
            <Send />
          </div>
        </div>
        <aside className="v-hero-attention">
          <p>
            <Zap /> NEEDS YOUR ATTENTION
          </p>
          <strong>Alice mentioned you</strong>
          <span>#general · Veil Development</span>
          <div>
            <Clock3 /> Review API handoff <b>Today</b>
          </div>
        </aside>
      </div>
      <div className="v-hero-footnote">
        <span>Spaces, not silos.</span>
        <span>Dense information, deliberate attention.</span>
        <span>Private where it matters.</span>
      </div>
    </section>
  )
}

const fragments = [
  ['184', 'Messages', MessageCircle],
  ['27', 'Tasks', CheckSquare],
  ['12', 'Conversations', Hash],
  ['08', 'Announcements', Bell],
  ['14', 'Questions', CircleHelp],
  ['03', 'Meetings', Video],
  ['62', 'Files', File],
] as const

function Fragmentation() {
  return (
    <section className="v-fragment" id="why" aria-labelledby="v-fragment-title">
      <div className="v-fragment-sticky">
        <div className="v-fragment-copy">
          <Eyebrow index="01">Why Veil exists</Eyebrow>
          <h2 id="v-fragment-title">The problem is no longer finding information.</h2>
          <p>It is too much information competing for attention.</p>
        </div>
        <div className="v-fragment-field" aria-label="Fragmented work resolving into Veil">
          <div className="v-fragment-core">
            <Wordmark />
            <small>Your work, connected</small>
          </div>
          {fragments.map(([value, label, Icon], index) => (
            <div className={`v-fragment-card v-fragment-${index + 1}`} key={label}>
              <span>
                <Icon /> {label}
              </span>
              <strong>{value}</strong>
              <i>{index % 2 === 0 ? 'new' : 'open'}</i>
            </div>
          ))}
        </div>
        <div className="v-resolution">
          <span>Activity</span>
          <ArrowRight />
          <span>Relevance</span>
          <ArrowRight />
          <span>Attention</span>
          <ArrowRight />
          <strong>Interruption</strong>
        </div>
      </div>
    </section>
  )
}

function Manifesto() {
  return (
    <section className="v-manifesto">
      <p>WORK SHOULD NOT HAVE TO FIT THE TOOL.</p>
      <h2>
        The tool should fit <em>how you work.</em>
      </h2>
      <div>
        <Wordmark />
        <span>A place where you define how you work.</span>
      </div>
    </section>
  )
}

function Spaces() {
  const [mode, setMode] = useState<'quiet' | 'team'>('quiet')
  const quiet = mode === 'quiet'
  const active = quiet ? ['Chat', 'Todo'] : CAPABILITIES.map((item) => item.label)
  return (
    <section className="v-spaces" id="spaces" aria-labelledby="v-spaces-title">
      <div className="v-section-copy">
        <Eyebrow index="02">Everything happens in a Space</Eyebrow>
        <h2 id="v-spaces-title">
          Start with context.
          <br />
          <em>Add only what it needs.</em>
        </h2>
        <p>
          A Space is not forced to be a friend, group, project, team, or community. It becomes what the people inside it
          need.
        </p>
        <div className="v-mode-switch" aria-label="Space example">
          <button className={quiet ? 'is-active' : ''} onClick={() => setMode('quiet')}>
            Small Space
          </button>
          <button className={mode === 'team' ? 'is-active' : ''} onClick={() => setMode('team')}>
            Team Space
          </button>
        </div>
      </div>
      <div className="v-space-builder">
        <div className="v-space-builder-top">
          <span>SPACE / {quiet ? 'WEEKEND PLANS' : 'PRODUCT STUDIO'}</span>
          <span>{quiet ? '3' : '18'} people</span>
        </div>
        <div className="v-space-profile">
          <span>{quiet ? 'WP' : 'PS'}</span>
          <div>
            <strong>{quiet ? 'Weekend plans' : 'Product studio'}</strong>
            <small>
              {quiet
                ? 'A conversation and two things to remember.'
                : 'A layered working context for a cross-functional team.'}
            </small>
          </div>
        </div>
        <div className="v-capability-grid">
          {CAPABILITIES.map(({ label, icon: Icon }) => {
            const enabled = active.includes(label)
            return (
              <div className={enabled ? 'is-on' : ''} key={label}>
                <Icon />
                <span>{label}</span>
                {enabled ? <Check /> : <Plus />}
              </div>
            )
          })}
        </div>
        <p className="v-space-equation">
          <strong>Start with a Space.</strong>
          <span>Add what you need.</span>
          <span>Leave out what you don’t.</span>
        </p>
      </div>
    </section>
  )
}

function Communication() {
  return (
    <section className="v-communication" id="communication" aria-labelledby="v-communication-title">
      <div className="v-comm-product">
        <div className="v-comm-channel">
          <div className="v-panel-header">
            <span>
              <Hash /> backend
            </span>
            <span>
              <Video />
              <Users />
            </span>
          </div>
          <MessageRow initials="MI" name="Mina" time="14:08">
            The retry behavior should live at the boundary, not in every caller.
          </MessageRow>
          <MessageRow initials="KA" name="Kai" time="14:10" reactions={[{ emoji: '💡', count: 4 }]}>
            I’ll sketch the sequence. <Mention>Alice</Mention>, can you check the failure case?
          </MessageRow>
          <button className="v-reply-row">
            <span>MI</span>
            <span>KA</span>
            <strong>6 replies</strong>
            <small>Decision captured in thread</small>
            <ArrowRight />
          </button>
          <div className="v-composer">
            <Plus />
            <span>Message #backend</span>
            <Send />
          </div>
        </div>
        <div className="v-comm-thread">
          <div className="v-panel-header">
            <span>Thread</span>
            <X />
          </div>
          <p className="v-thread-origin">The retry behavior should live at the boundary…</p>
          <div className="v-thread-answer">
            <span>AK</span>
            <p>
              <strong>Alice</strong>The client can stay simple if the boundary owns backoff and preserves the original
              error.
            </p>
          </div>
          <div className="v-thread-answer">
            <span>MI</span>
            <p>
              <strong>Mina</strong>Agreed. I’ve turned that into a Todo for the API pass.
            </p>
          </div>
          <div className="v-thread-state">
            <CheckCircle2 /> Decision captured · Todo created
          </div>
        </div>
      </div>
      <div className="v-section-copy v-comm-copy">
        <Eyebrow index="03">Communication, with structure</Eyebrow>
        <h2 id="v-communication-title">
          Dense conversation.
          <br />
          <em>Not constant demand.</em>
        </h2>
        <p>
          Replies and threads keep side paths attached to their source. Mentions identify relevance. Calls begin in the
          same working context.
        </p>
        <ul>
          <li>
            <MessageCircle /> Conversation when the work is moving
          </li>
          <li>
            <Hash /> Threads when a branch needs room
          </li>
          <li>
            <Video /> A meeting when words are not enough
          </li>
          <li>
            <LockKeyhole /> Private conversations remain Space-scoped today
          </li>
        </ul>
      </div>
    </section>
  )
}

function Workflow() {
  const steps = [
    ['Discuss', MessageCircle],
    ['Sketch', Palette],
    ['Decide', CheckCircle2],
    ['Create Todo', CheckSquare],
    ['Assign', Users],
    ['Due later', Clock3],
  ] as const
  return (
    <section className="v-workflow" aria-labelledby="v-workflow-title">
      <Eyebrow index="04">One connected workflow</Eyebrow>
      <div className="v-workflow-heading">
        <h2 id="v-workflow-title">
          The work changes shape.
          <br />
          <em>The context stays.</em>
        </h2>
        <p>
          A conversation reveals action. The action becomes a Todo. Veil can surface it later—without severing where it
          came from.
        </p>
      </div>
      <ol className="v-workflow-line">
        {steps.map(([label, Icon], index) => (
          <li key={label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <Icon />
            <strong>{label}</strong>
            {index < steps.length - 1 && <ArrowRight />}
          </li>
        ))}
      </ol>
      <div className="v-workflow-cards">
        <article>
          <p>
            <MessageCircle /> FROM #BACKEND
          </p>
          <blockquote>“The retry behavior should live at the boundary.”</blockquote>
          <span>Mina · 14:08</span>
        </article>
        <ArrowRight />
        <article>
          <p>
            <CheckSquare /> TODO / PRODUCT STUDIO
          </p>
          <strong>Move retry behavior to API boundary</strong>
          <span>Assigned to Alice · Due Friday</span>
        </article>
        <ArrowRight />
        <article className="is-attention">
          <p>
            <Zap /> NEEDS YOUR ATTENTION
          </p>
          <strong>A Todo assigned to you is due</strong>
          <span>Today · Product Studio</span>
        </article>
      </div>
    </section>
  )
}

function Attention() {
  const items = [
    ['AK', 'Alice mentioned you', '#general · Veil Development', '2m'],
    ['BO', 'Bob replied to your question', 'Q&A · Product Studio', '8m'],
    ['TD', 'A Todo assigned to you is due', 'API review · Today', '1h'],
    ['DV', 'You were mentioned in Development', '#backend · 4 replies', '2h'],
  ]
  return (
    <section className="v-attention" id="attention" aria-labelledby="v-attention-title">
      <div className="v-attention-copy">
        <Eyebrow index="05">Inbox / Attention Engine</Eyebrow>
        <h2 id="v-attention-title">
          High information density.
          <br />
          <em>Low attention density.</em>
        </h2>
        <p>
          Veil separates what happened from what is relevant—and what is relevant from what deserves to interrupt you.
        </p>
        <div className="v-volume">
          <span>
            <strong>184</strong> messages
          </span>
          <span>
            <strong>12</strong> conversations
          </span>
          <span>
            <strong>9</strong> Todo updates
          </span>
          <span>
            <strong>6</strong> questions + threads
          </span>
        </div>
      </div>
      <div className="v-attention-machine">
        <div className="v-noise">
          <span>Activity</span>
          {Array.from({ length: 28 }).map((_, i) => (
            <i key={i} style={{ '--i': i } as CSSProperties} />
          ))}
        </div>
        <ArrowRight className="v-machine-arrow" />
        <div className="v-inbox">
          <div className="v-inbox-head">
            <span>
              <Zap /> Needs your attention
            </span>
            <small>4 items</small>
          </div>
          {items.map(([initials, title, meta, time]) => (
            <div className="v-inbox-row" key={title}>
              <span>{initials}</span>
              <div>
                <strong>{title}</strong>
                <small>{meta}</small>
              </div>
              <time>{time}</time>
            </div>
          ))}
          <div className="v-inbox-foot">
            <span>Activity stays available</span>
            <strong>Interruption stays deliberate</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function Discovery() {
  return (
    <section className="v-discovery" id="discover" aria-labelledby="v-discovery-title">
      <div className="v-discovery-head">
        <Eyebrow index="06">People + Global Search</Eyebrow>
        <h2 id="v-discovery-title">
          Reach the person.
          <br />
          <em>Find the context.</em>
        </h2>
      </div>
      <div className="v-discovery-grid">
        <article className="v-people">
          <div className="v-card-copy">
            <Users />
            <div>
              <strong>Who can I reach?</strong>
              <p>One directory, aggregated across your Spaces.</p>
            </div>
          </div>
          <div className="v-people-tools">
            <span>
              <Search /> Search people
            </span>
            <button>
              <Star /> Favorites
            </button>
            <button>
              All Spaces <ChevronDown />
            </button>
          </div>
          {[
            ['AK', 'Alice Kim', 'Veil Development · Product Studio', true],
            ['BO', 'Bob Ortiz', 'Product Studio', true],
            ['MI', 'Mina Ito', 'Veil Development · Design Systems', false],
          ].map(([initials, name, spaces, favorite]) => (
            <div className="v-person" key={String(name)}>
              <span>{initials}</span>
              <div>
                <strong>{name}</strong>
                <small>{spaces}</small>
              </div>
              <Star className={favorite ? 'is-starred' : ''} />
            </div>
          ))}
          <small className="v-people-note">Alice appears once—even when you share more than one Space.</small>
        </article>
        <article className="v-search" id="search">
          <div className="v-card-copy">
            <Search />
            <div>
              <strong>Who, what, or where?</strong>
              <p>Results preserve Veil’s hierarchy.</p>
            </div>
          </div>
          <div className="v-searchbox">
            <Search />
            <span>backend</span>
            <kbd>⌘ K</kbd>
          </div>
          <div className="v-breadcrumb">
            <span>All Veil</span>
            <ArrowRight />
            <span>Veil Development</span>
            <ArrowRight />
            <strong>#backend</strong>
          </div>
          <div className="v-search-results">
            <span>
              <Hash />
              <div>
                <strong>#backend</strong>
                <small>Veil Development · Channel</small>
              </div>
            </span>
            <span>
              <CheckSquare />
              <div>
                <strong>API retry boundary</strong>
                <small>Product Studio · Todo</small>
              </div>
            </span>
            <span>
              <Folder />
              <div>
                <strong>backend-handoff.pdf</strong>
                <small>Keep · from Veil Development</small>
              </div>
            </span>
          </div>
          <small className="v-search-note">
            People, Spaces, channels, Todo, and Keep. No server-side full-text index of private messages, Q&A, or
            announcements.
          </small>
        </article>
      </div>
    </section>
  )
}

function Keep() {
  return (
    <section className="v-keep" id="keep" aria-labelledby="v-keep-title">
      <div className="v-keep-copy">
        <Eyebrow index="07">Personal, by design</Eyebrow>
        <h2 id="v-keep-title">
          Spaces are shared.
          <br />
          <em>Keep is yours.</em>
        </h2>
        <p>Keep gives saved files and content a personal home while preserving the Space and channel they came from.</p>
        <div className="v-context-pair">
          <span>
            <Users />
            <strong>Spaces</strong>
            <small>Collaboration context</small>
          </span>
          <i>≠</i>
          <span>
            <Folder />
            <strong>Keep</strong>
            <small>Personal collection</small>
          </span>
        </div>
      </div>
      <div className="v-keep-product">
        <div className="v-panel-header">
          <span>
            <Folder /> Keep
          </span>
          <span>Personal</span>
        </div>
        <div className="v-keep-folders">
          <span>
            <i>VD</i>
            <strong>Veil Development</strong>
            <small>8 items</small>
          </span>
          <span>
            <i>PS</i>
            <strong>Product Studio</strong>
            <small>5 items</small>
          </span>
        </div>
        <div className="v-keep-file">
          <FileText />
          <div>
            <strong>backend-handoff.pdf</strong>
            <small>Veil Development → #backend</small>
          </div>
          <time>Today</time>
        </div>
        <div className="v-keep-file">
          <Palette />
          <div>
            <strong>Retry sequence</strong>
            <small>Product Studio → Whiteboard</small>
          </div>
          <time>Fri</time>
        </div>
        <div className="v-keep-file">
          <BookOpen />
          <div>
            <strong>Release notes</strong>
            <small>Veil Development → Announcements</small>
          </div>
          <time>12 Sep</time>
        </div>
      </div>
    </section>
  )
}

function Privacy() {
  return (
    <section className="v-privacy" id="privacy" aria-labelledby="v-privacy-title">
      <div className="v-privacy-copy">
        <Eyebrow index="08">Private communication</Eyebrow>
        <h2 id="v-privacy-title">
          Privacy is an architecture.
          <br />
          <em>Not a footer badge.</em>
        </h2>
        <p>
          Private-conversation messages are sealed for recipient devices before they leave the sender. Veil routes the
          envelopes without storing a readable message body.
        </p>
        <a href={PRIVACY_POLICY_PATH} className="v-text-link">
          Read the privacy notice <ArrowUpRight />
        </a>
      </div>
      <div className="v-crypto">
        <div className="v-crypto-flow">
          <span>
            <MonitorSmartphone />
            <strong>Sender</strong>
            <small>Encrypts on device</small>
          </span>
          <div>
            <KeyRound />
            <code>8c4f…a91e</code>
            <small>Envelope per device</small>
          </div>
          <span>
            <ShieldCheck />
            <strong>Veil infrastructure</strong>
            <small>Routes ciphertext</small>
          </span>
          <div>
            <KeyRound />
            <code>e27a…43bc</code>
            <small>Device envelope</small>
          </div>
          <span>
            <MonitorSmartphone />
            <strong>Recipient</strong>
            <small>Decrypts on device</small>
          </span>
        </div>
        <div className="v-crypto-scope">
          <span>
            <LockKeyhole />
            <strong>Private messages</strong>
            <small>Per-device encrypted envelopes.</small>
          </span>
          <span>
            <File />
            <strong>Attachments + history</strong>
            <small>Keys travel inside encrypted envelopes; optional PIN-protected archive recovery.</small>
          </span>
          <span>
            <Video />
            <strong>Calls</strong>
            <small>Encrypted in transit and routed through the media server.</small>
          </span>
        </div>
        <p>
          <strong>The boundary matters.</strong> Space content uses shared channel keys and is not the same per-device
          envelope model. Veil also retains operational metadata needed to route and synchronize the service.
        </p>
      </div>
    </section>
  )
}

function Bento() {
  const cells = [
    ['b-space', 'Spaces', 'Compose the working context.', Users],
    ['b-inbox', 'Inbox', 'Relevance before interruption.', Zap],
    ['b-people', 'People', 'Know who you can reach.', Users],
    ['b-chat', 'Chat + Threads', 'Conversation with structure.', MessageCircle],
    ['b-calls', 'Calls', 'Meet in the same context.', Video],
    ['b-todo', 'Todo', 'Action stays attached.', CheckSquare],
    ['b-keep', 'Keep', 'Personal, source-aware storage.', Folder],
    ['b-qa', 'Q&A', 'Questions deserve durable answers.', MessageCircleQuestion],
    ['b-announce', 'Announcements', 'Visibility without another noisy thread.', Bell],
    ['b-board', 'Whiteboard', 'Think spatially together.', Palette],
    ['b-find', 'Global Search', 'All Veil → context → content.', Search],
    ['b-lock', 'Private messaging', 'Per-device encrypted envelopes.', LockKeyhole],
  ] as const
  return (
    <section className="v-overview" aria-labelledby="v-overview-title">
      <div className="v-overview-head">
        <Eyebrow index="09">The product, at a glance</Eyebrow>
        <h2 id="v-overview-title">
          One system.
          <br />
          <em>Many shapes of work.</em>
        </h2>
      </div>
      <div className="v-bento">
        {cells.map(([className, title, copy, Icon]) => (
          <article className={className} key={title}>
            <Icon />
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
            {title === 'Inbox' && <strong>04</strong>}
            {title === 'Spaces' && (
              <div className="v-mini-stack">
                <span>Weekend plans</span>
                <span>Product studio</span>
                <span>Veil Development</span>
              </div>
            )}
            {title === 'Global Search' && (
              <div className="v-mini-search">
                <Search /> backend <kbd>⌘K</kbd>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const schemaId = useId()
  return (
    <section className="v-faq" aria-labelledby="v-faq-title">
      <script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />
      <div className="v-faq-intro">
        <Eyebrow index="10">Questions, answered plainly</Eyebrow>
        <h2 id="v-faq-title">Before you step inside.</h2>
        <p>Product behavior and privacy boundaries, without the marketing fog.</p>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="v-text-link">
          Ask a person <ArrowUpRight />
        </a>
      </div>
      <div className="v-faq-list">
        {FAQS.map(({ q, a }, index) => (
          <details key={q}>
            <summary>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {q}
              <ChevronDown />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Closing() {
  return (
    <section className="v-closing" id="begin">
      <span className="v-closing-mark">
        <VeilLogo />
      </span>
      <p>THE SHAPE IS YOURS</p>
      <h2>
        Your work doesn’t need to fit the tool.
        <br />
        <em>The tool should fit how you work.</em>
      </h2>
      <span>A place where you define how you work.</span>
      <a href={APP_URL} className="v-button">
        Open Veil <ArrowUpRight />
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="v-footer">
      <Wordmark />
      <p>© {new Date().getFullYear()} Veil</p>
      <nav aria-label="Footer">
        <Link to={PRIVACY_POLICY_PATH}>Privacy</Link>
        <Link to={TERM_OF_SERVICE_PATH}>Terms</Link>
        <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
        <a href="#top">Back to top ↑</a>
      </nav>
    </footer>
  )
}

export default function VeilLanding() {
  return (
    <div className="v-site" id="top">
      <a className="v-skip" href="#main-content">
        Skip to content
      </a>
      <PageHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Fragmentation />
        <Manifesto />
        <Spaces />
        <Communication />
        <Workflow />
        <Attention />
        <Discovery />
        <Keep />
        <Privacy />
        <Bento />
        <FAQ />
        <Closing />
      </main>
      <Footer />
    </div>
  )
}
