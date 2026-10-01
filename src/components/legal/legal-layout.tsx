import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, FileText, ShieldCheck } from 'lucide-react'
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
          <header className="legal-hero">
            <div className="legal-heading-row">
              <div>
                <span className="section-label">Veil / Legal</span>
                <h1>{title}</h1>
              </div>
              <div className="legal-meta">
                <span>
                  Last updated <time>{lastUpdated}</time>
                </span>
                <Link to={privacy ? TERM_OF_SERVICE_PATH : PRIVACY_POLICY_PATH} className="text-link">
                  {privacy ? 'Terms of Service' : 'Privacy Notice'} <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </header>
          <div className="legal-reading-layout">
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
              <section className="legal-summary skeuo-raised" id="legal-summary">
                <h2>The short version.</h2>
                <div>{summary}</div>
                <p className="legal-summary-note">
                  This summary is here to be readable. The full text below is what actually applies.
                </p>
              </section>
              <article className="legal-document" aria-label={`Full ${title}`}>
                {introduction && <div className="legal-introduction">{renderLegalMarkdown(introduction)}</div>}
                {sections.map((section) => (
                  <section className="legal-document-section" key={section.id} id={section.id}>
                    <h2>{section.title}</h2>
                    {renderLegalMarkdown(section.body)}
                  </section>
                ))}
              </article>
              <div className="legal-endnote skeuo-inset">
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
