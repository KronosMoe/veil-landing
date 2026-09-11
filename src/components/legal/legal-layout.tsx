import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, FileText, ShieldCheck } from 'lucide-react'
import Seo from '@/components/seo'
import EditorialShell from '@/components/layout/editorial-shell'
import { PRIVACY_POLICY_PATH, TERM_OF_SERVICE_PATH } from '@/constants/routes'
import { SUPPORT_EMAIL } from '@/content/site'
import { renderLegalMarkdown } from '@/lib/legal-markdown'

type Props = {
  title: string
  description: string
  path: string
  lastUpdated: string
  summary: ReactNode
  content: string
}

/** Presentation only: the original legal copy and effective dates remain the source of truth. */
export default function LegalLayout({ title, description, path, lastUpdated, summary, content }: Props) {
  const privacy = path === PRIVACY_POLICY_PATH
  const Icon = privacy ? ShieldCheck : FileText
  const blocks = content.trim().split(/(?=^### )/m)
  const introduction = blocks.filter((block) => !block.startsWith('### ')).join('\n')
  const sections = blocks
    .filter((block) => block.startsWith('### '))
    .map((block, index) => {
      const newline = block.indexOf('\n')
      return { id: `section-${index + 1}`, title: block.slice(4, newline), body: block.slice(newline + 1) }
    })
  const [active, setActive] = useState('section-1')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-10% 0px -65% 0px' },
    )
    document.querySelectorAll('.legal-document-section').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [content])

  return (
    <>
      <Seo title={`${title} — Veil`} description={description} path={path} />
      <EditorialShell className="legal-site">
        <main tabIndex={-1} id="main-content">
          <motion.header
            className="legal-hero editorial-section"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-marker">
              <span>{privacy ? '01 / YOUR PRIVACY' : '02 / OUR AGREEMENT'}</span>
              <span>TRUST STARTS WITH THE DETAILS.</span>
            </div>
            <div className="legal-hero-grid">
              <div>
                <span className="eyebrow">
                  {privacy ? 'YOUR DATA. YOUR CONFIDENCE.' : 'A SHARED SPACE. A SHARED UNDERSTANDING.'}
                </span>
                <h1>
                  {title}
                  <span>{privacy ? 'Nothing left in the dark.' : 'On the same page.'}</span>
                </h1>
              </div>
              <div className="legal-document-stamp">
                <Icon size={32} strokeWidth={1.2} />
                <span>VEIL / {privacy ? 'PRIVACY' : 'TERMS'}</span>
                <strong>Last updated</strong>
                <time>{lastUpdated}</time>
              </div>
            </div>
            <div className="legal-hero-bottom">
              <a href="#legal-summary" className="text-link">
                Start with the short version <ArrowDown size={15} />
              </a>
              <Link to={privacy ? TERM_OF_SERVICE_PATH : PRIVACY_POLICY_PATH} className="text-link">
                {privacy ? 'Terms of Service' : 'Privacy Notice'} <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.header>
          <div className="legal-reading-layout editorial-section">
            <aside className="legal-contents">
              <span className="eyebrow">IN THIS DOCUMENT</span>
              <nav aria-label={`${title} contents`}>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    aria-current={active === section.id ? 'location' : undefined}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
              <a className="text-link" href={`mailto:${SUPPORT_EMAIL}`}>
                Talk to a person <ArrowUpRight size={14} />
              </a>
            </aside>
            <div className="legal-reading-main">
              <motion.section
                className="legal-summary"
                id="legal-summary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <span className="eyebrow">A MOMENT FOR THE ESSENTIALS</span>
                <h2>The short version.</h2>
                <div>{summary}</div>
                <p className="legal-summary-note">
                  This summary is here to be readable. The full text below is what actually applies.
                </p>
              </motion.section>
              <article className="legal-document" aria-label={`Full ${title}`}>
                {introduction && <div className="legal-introduction">{renderLegalMarkdown(introduction)}</div>}
                {sections.map((section) => (
                  <section className="legal-document-section" key={section.id} id={section.id}>
                    <h2>{section.title}</h2>
                    {renderLegalMarkdown(section.body)}
                  </section>
                ))}
              </article>
              <div className="legal-endnote">
                <Icon size={22} />
                <div>
                  <h2>{privacy ? 'Your trust is personal.' : 'Good work starts with understanding.'}</h2>
                  <p>Questions about this document? A person reads your email.</p>
                  <a className="text-link" href={`mailto:${SUPPORT_EMAIL}`}>
                    {SUPPORT_EMAIL} <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </EditorialShell>
    </>
  )
}
