import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '@/components/seo'
import { Footer } from '@/components/landing/footer'
import { VeilLogo } from '@/components/landing/veil-logo'
import ThemeToggle from '@/components/ui/theme-toggle'
import { BASE_PATH } from '@/constants/routes'
import { renderLegalMarkdown } from '@/lib/legal-markdown'

type Props = {
  title: string
  description: string
  path: string
  lastUpdated: string
  summary: ReactNode
  content: string
}

/** Shared shell for the two legal pages: same header, same typography, same
 *  plain-English summary card above the formal text. */
export default function LegalLayout({ title, description, path, lastUpdated, summary, content }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Seo title={`${title} — Veil`} description={description} path={path} />

      <div className="relative overflow-hidden">
        <div className="veil-aurora pointer-events-none absolute inset-x-0 top-0 h-96 opacity-70" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl px-4 pt-10 pb-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              to={BASE_PATH}
              className="veil-card veil-card-interactive inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-gray-700 transition-all dark:text-gray-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Veil
            </Link>
            <ThemeToggle />
          </div>

          <header className="mt-10 text-center">
            <VeilLogo className="text-primary-500 mx-auto h-9 w-9" color="currentColor" />
            <h1 className="mt-5 text-3xl font-bold text-balance text-gray-900 sm:text-4xl dark:text-white">{title}</h1>
            <p className="veil-chip mt-4 inline-block px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400">
              Last updated {lastUpdated}
            </p>
          </header>

          <div className="veil-well mt-10 rounded-2xl p-6">
            <h2 className="text-sm font-bold text-gray-900 dark:text-white">The short version</h2>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{summary}</div>
            <p className="mt-4 text-xs text-gray-500">
              This summary is here to be readable. The full text below is what actually applies.
            </p>
          </div>

          <article className="veil-card mt-4 p-6 sm:p-8">{renderLegalMarkdown(content)}</article>
        </div>
      </div>

      <Footer />
    </>
  )
}
