import { motion } from 'framer-motion'
import EditorialShell from '../layout/editorial-shell'
import StoryPassage from './story-passage'
import { Link } from 'react-router-dom'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  LockKeyhole,
  MessageCircle,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { APP_URL, SUPPORT_EMAIL } from '@/content/site'
import { PRIVACY_POLICY_PATH } from '@/constants/routes'
import { VeilLogo } from './veil-logo'
import EcosystemDirection from './ecosystem-direction'

const questions = [
  [
    'Who is Veil for?',
    'Small and medium-sized groups that communicate and coordinate regularly: project teams, studios, clubs, communities and volunteer groups. Organize the space around your people and the topics you share.',
  ],
  [
    'What does “chat leads to work” mean?',
    'Start with a conversation, work through an idea on a shared board or in a call, then add tasks with owners and due dates. These tools live in the same workspace. Veil does not automatically turn messages into tasks; your group decides what happens next.',
  ],
  [
    'What can we use today?',
    'Text chat, voice and video calls, whiteboards, task boards, announcements and Q&A are available today. The Free workspace includes unlimited members and message history. Paid billing is not live yet.',
  ],
  [
    'What is end-to-end encrypted?',
    'Message content, file attachments and whiteboard scenes are encrypted on your device before being sent. Account and workspace metadata are still needed to operate the service. Voice and video calls use encryption in transit through the media server, rather than the same end-to-end encryption as messages.',
  ],
  [
    'Can we attach files directly from a NAS or self-hosted app?',
    'Not yet. Connecting your own storage and self-hosted applications is a future direction for Veil. The aim is to bring those resources into your group’s workflow without requiring everyone to use one operating system’s ecosystem. NAS attachment sources and these application connectors are not available today.',
  ],
  [
    'Is self-hosting the same as those future connections?',
    'No. Self-hosting means running Veil on infrastructure you operate and maintain. Connecting a NAS or another self-hosted application to a workflow is a separate future capability. Contact us if you want to discuss running Veil yourself.',
  ],
]

function StartLink({ children = 'Open your workspace', className = '' }: { children?: string; className?: string }) {
  return (
    <a className={`editorial-button ${className}`} href={APP_URL}>
      {children}
      <ArrowUpRight size={17} />
    </a>
  )
}

export default function LandingExperience() {
  return (
    <>
      <EditorialShell className="story-entered">
        <main id="main-content" tabIndex={-1}>
          <section className="editorial-hero">
            <div className="hero-topline">
              <span>
                <span className="status-dot" /> FOR SMALL AND MEDIUM-SIZED GROUPS.
              </span>
              <span>COMMUNICATION THAT MOVES WORK FORWARD. ↙</span>
            </div>
            <div className="hero-heading">
              <h1>
                Talk together.
                <br />
                <span>Move work forward.</span>
              </h1>
              <div className="hero-aside">
                <div className="hero-stamp">
                  <VeilLogo />
                  <span>
                    ROOM TO
                    <br />
                    BE YOUR TEAM.
                  </span>
                </div>
                <p>
                  For small and medium-sized groups that need to stay in sync. Bring the conversation, the plan and the
                  people doing the work into one private workspace.
                </p>
                <div className="hero-actions">
                  <StartLink>Get started free</StartLink>
                  <a href="#showcase" className="text-link">
                    See chat lead to work <ArrowDown size={16} />
                  </a>
                </div>
                <span className="hero-note">FREE TO START. NO CREDIT CARD.</span>
              </div>
            </div>
            <div className="hero-manifesto">
              <span>BUILT AROUND YOUR GROUP</span>
              <p>
                A question becomes a conversation.
                <br />A conversation becomes a plan.
                <br />
                <strong>A plan becomes something you do together.</strong>
              </p>
              <a href="#features" aria-label="Discover who Veil is for">
                <ArrowDown size={20} />
              </a>
            </div>
          </section>
          <div className="value-strip positioning-strip">
            <a href="#features">
              <Users size={18} />
              Stay in sync
            </a>
            <a href="#showcase">
              <MessageCircle size={18} />
              Chat leads to work
            </a>
            <a href="#security">
              <LockKeyhole size={18} />
              Keep it private
            </a>
            <a href="#direction">
              <Network size={18} />
              Beyond ecosystems <small>OUR DIRECTION</small>
            </a>
          </div>
          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-section people-section"
            id="features"
          >
            <div className="section-marker">
              <span>01 / YOUR GROUP, IN SYNC</span>
              <span>CLOSE ENOUGH TO TALK. ROOM ENOUGH TO GROW.</span>
            </div>
            <div className="people-layout">
              <h2>
                Small enough to know.
                <br />
                <span>Ready to grow.</span>
              </h2>
              <div className="people-list">
                {[
                  [
                    '01',
                    'Keep a close-knit group connected.',
                    'A studio, a volunteer crew, a project team. Give everyday questions and quick decisions a shared home, so coordination does not depend on one person passing messages around.',
                  ],
                  [
                    '02',
                    'Keep the context as your group grows.',
                    'Organize conversations by topic or project. Use announcements for the updates everyone needs, and Q&A for answers the next person can find.',
                  ],
                  [
                    '03',
                    'Coordinate across schedules and places.',
                    'Leave an update for someone working later, or join a voice or video call to work things out now. Keep the group connected through the browser or desktop app.',
                  ],
                ].map(([number, title, body]) => (
                  <article key={number}>
                    <span>{number}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                    <ArrowUpRight size={21} />
                  </article>
                ))}
              </div>
            </div>
          </motion.section>
          <StoryPassage />
          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="privacy-section"
            id="security"
          >
            <div className="editorial-section">
              <div className="section-marker">
                <span>03 / PRIVATE BY DESIGN</span>
                <ShieldCheck size={19} />
              </div>
              <div className="privacy-layout">
                <div>
                  <span className="eyebrow">CONFIDENCE COMES STANDARD</span>
                  <h2>
                    Your conversations.
                    <br />
                    <span>Your circle.</span>
                  </h2>
                  <p>
                    Group conversations hold unfinished ideas, shared files and decisions. Veil encrypts message content
                    on your device before sending it, so privacy is part of everyday coordination.
                  </p>
                  <Link className="text-link" to={PRIVACY_POLICY_PATH}>
                    Read our privacy policy <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="privacy-diagram">
                  <div className="privacy-device">
                    <VeilLogo />
                    <span>Your device</span>
                    <strong>“Here’s an idea.”</strong>
                  </div>
                  <div className="encryption-line">
                    <span />
                    <LockKeyhole size={23} />
                    <span />
                  </div>
                  <div className="cipher-card">
                    <span>ENCRYPTED BEFORE SENDING</span>
                    <code>
                      8f a2 c9 04 7b e1
                      <br />
                      d3 6c 91 f0 2a 85
                    </code>
                    <span>
                      <Check size={14} /> MESSAGE CONTENT STAYS SEALED
                    </span>
                  </div>
                </div>
              </div>
              <div className="privacy-facts">
                <div>
                  <span>01</span>
                  <h3>Sealed on your device</h3>
                  <p>AES-256-GCM encryption for message content, attachments and whiteboard scenes.</p>
                </div>
                <div>
                  <span>02</span>
                  <h3>A stronger sign-in</h3>
                  <p>Add a second factor with an authenticator app or a passkey.</p>
                </div>
                <div>
                  <span>03</span>
                  <h3>Clear about the details</h3>
                  <p>Calls use encryption in transit. Account and workspace metadata help operate the service.</p>
                </div>
              </div>
            </div>
          </motion.section>
          <EcosystemDirection />
          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-section"
            id="pricing"
          >
            <div className="section-marker">
              <span>05 / START WITH YOUR GROUP</span>
              <span>START SMALL. MAKE ROOM.</span>
            </div>
            <div className="section-heading">
              <h2>
                Good company.
                <br />
                <span>Without the overhead.</span>
              </h2>
              <p>
                Start with everything you need to collaborate.
                <br />
                Talk to us when your organization needs more.
              </p>
            </div>
            <div className="editorial-plans">
              <article className="free-plan">
                <div className="plan-top">
                  <span className="eyebrow">FOR YOUR TEAM, TODAY</span>
                  <span className="plan-badge">AVAILABLE NOW</span>
                </div>
                <h3>
                  Free<span>$0</span>
                </h3>
                <p>Communication and coordination for your group, from day one.</p>
                <ul>
                  {[
                    'All six collaboration channel types',
                    'Encrypted messaging and file attachments',
                    'Voice, video and screen sharing',
                    'Unlimited members and message history',
                  ].map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <StartLink>Start your free workspace</StartLink>
              </article>
              <article>
                <div className="plan-top">
                  <span className="eyebrow">FOR YOUR NEXT CHAPTER</span>
                  <span className="plan-badge">PLANNED</span>
                </div>
                <h3>Team & Enterprise</h3>
                <p>Help shape what comes next for your organization.</p>
                <ul>
                  <li>
                    <Check size={16} />
                    Planned: single sign-on and audit exports
                  </li>
                  <li>
                    <Check size={16} />
                    Planned: branding and priority support
                  </li>
                  <li>
                    <Check size={16} />
                    Discuss enterprise requirements and terms
                  </li>
                </ul>
                <p className="plan-disclaimer">
                  Paid billing is not live. Pricing has not been announced. Registering interest costs nothing.
                </p>
                <a
                  className="editorial-button secondary-button"
                  href={`mailto:${SUPPORT_EMAIL}?subject=Team%20and%20Enterprise%20interest`}
                >
                  Let’s talk <ArrowUpRight size={17} />
                </a>
              </article>
            </div>
            <div className="self-hosted">
              <div>
                <strong>Your infrastructure. Your workspace.</strong>
                <span>Prefer to run Veil yourself? Let’s talk about self-hosting.</span>
              </div>
              <a className="text-link" href={`mailto:${SUPPORT_EMAIL}?subject=Self-hosted%20deployment`}>
                Explore self-hosting <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-section faq-section"
            id="faq"
          >
            <div>
              <span className="eyebrow">06 / A FEW MORE THINGS</span>
              <h2>
                Glad you
                <br />
                <span>asked.</span>
              </h2>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-link">
                Have another question? <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="editorial-faq">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <ChevronDown size={19} />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="closing-section"
          >
            <div className="closing-top">
              <span>LESS DISTANCE. MORE POSSIBILITY.</span>
              <VeilLogo />
            </div>
            <h2>
              Your people.
              <br />
              Your place.<span>Your Veil.</span>
            </h2>
            <div className="closing-bottom">
              <p>Start a conversation. Give the next step a home.</p>
              <StartLink>Bring your group together</StartLink>
            </div>
          </motion.section>
        </main>
      </EditorialShell>
    </>
  )
}
