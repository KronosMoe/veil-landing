import { motion } from 'framer-motion'
import { ArrowUpRight, FolderOpen, HardDrive, Network, Server } from 'lucide-react'
import { SUPPORT_EMAIL } from '@/content/site'
import { VeilLogo } from './veil-logo'

export default function EcosystemDirection() {
  return (
    <motion.section
      id="direction"
      className="editorial-section ecosystem-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-marker">
        <span>04 / BEYOND ONE ECOSYSTEM</span>
        <span className="direction-badge">FUTURE DIRECTION</span>
      </div>
      <div className="section-heading">
        <h2>
          Your tools.
          <br />
          <span>Your choice.</span>
        </h2>
        <p>
          Your group should be able to work with the resources
          <br className="desktop-break" /> it already owns, across operating systems.
        </p>
      </div>
      <div className="ecosystem-layout">
        <div className="ecosystem-copy">
          <span className="eyebrow">A WORKFLOW WITH ROOM FOR YOUR WORLD</span>
          <h3>
            Bring your resources
            <br />
            into the conversation.
          </h3>
          <p>
            Our direction for Veil is a workflow where your group can attach files from a NAS and connect self-hosted
            applications, without depending on one operating system’s ecosystem.
          </p>
          <p>The ambition is simple: let the conversation reach the files and tools your group chooses to use.</p>
          <div className="direction-status">
            <span className="direction-badge">PLANNED · NOT AVAILABLE YET</span>
            <p>
              NAS attachment sources and self-hosted application connectors are future capabilities. They are separate
              from running Veil itself on your own infrastructure.
            </p>
          </div>
          <a
            className="text-link"
            href={`mailto:${SUPPORT_EMAIL}?subject=Tools%20and%20storage%20we%20want%20to%20connect`}
          >
            Tell us what your group uses <ArrowUpRight size={15} />
          </a>
        </div>
        <figure className="ecosystem-map">
          <div className="ecosystem-map-label">
            <Network size={13} />
            <span>CONCEPT / WHERE WE WANT TO GO</span>
          </div>
          <div className="ecosystem-sources">
            <div className="ecosystem-node">
              <HardDrive size={23} strokeWidth={1.3} />
              <strong>Your NAS</strong>
              <span>Files you already own</span>
            </div>
            <div className="ecosystem-node">
              <Server size={23} strokeWidth={1.3} />
              <strong>Your applications</strong>
              <span>Services you host yourself</span>
            </div>
          </div>
          <div className="ecosystem-connectors" aria-hidden="true">
            <span />
            <span />
          </div>
          <div className="ecosystem-hub">
            <VeilLogo className="size-8" />
            <div>
              <strong>Your group in Veil</strong>
              <span>Conversation → coordination</span>
            </div>
            <FolderOpen size={22} strokeWidth={1.2} />
          </div>
          <div className="ecosystem-platforms">
            <span>Across operating systems</span>
            <span>With the tools your group chooses</span>
          </div>
          <figcaption>A future workflow concept, not a preview of available integrations.</figcaption>
        </figure>
      </div>
      <div className="ecosystem-today">
        <span className="eyebrow">TODAY</span>
        <p>
          Start in a browser or the desktop app. Coordinate with chat, calls, whiteboards and tasks in one workspace.
        </p>
        <span className="eyebrow">NEXT</span>
        <p>Connect more of your own storage and services to the conversation.</p>
      </div>
    </motion.section>
  )
}
