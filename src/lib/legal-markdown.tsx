import type { ReactNode } from 'react'

const INLINE_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g

/** Inline pass: bold and links. Everything else is rendered as plain text. */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text
    .split(INLINE_PATTERN)
    .filter((part) => part.length > 0)
    .map((part, index) => {
      const key = `${keyPrefix}-${index}`

      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={key} className="font-semibold text-gray-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        )
      }

      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
      if (link) {
        return (
          <a key={key} href={link[2]} className="text-primary-500 underline underline-offset-2">
            {link[1]}
          </a>
        )
      }

      return <span key={key}>{part}</span>
    })
}

/**
 * A deliberately small Markdown subset — headings, bullet lists, bold and
 * links — so the legal copy stays editable as text without pulling in a parser.
 */
export function renderLegalMarkdown(source: string): ReactNode[] {
  const blocks: ReactNode[] = []
  let bullets: string[] = []

  const flushBullets = () => {
    if (bullets.length === 0) return

    blocks.push(
      <ul key={`ul-${blocks.length}`} className="mt-2 mb-4 space-y-1.5 pl-5">
        {bullets.map((bullet, index) => (
          <li key={bullet} className="list-disc text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {renderInline(bullet, `li-${blocks.length}-${index}`)}
          </li>
        ))}
      </ul>,
    )
    bullets = []
  }

  source
    .trim()
    .split('\n')
    .forEach((rawLine) => {
      const line = rawLine.trim()

      if (line.startsWith('- ')) {
        bullets.push(line.slice(2))
        return
      }

      flushBullets()

      if (line.length === 0) return

      if (line.startsWith('### ')) {
        blocks.push(
          <h3
            key={`h3-${blocks.length}`}
            className="mt-8 mb-2 text-base font-bold text-gray-900 first:mt-0 dark:text-white"
          >
            {line.slice(4)}
          </h3>,
        )
        return
      }

      if (line.startsWith('## ')) {
        blocks.push(
          <h2
            key={`h2-${blocks.length}`}
            className="mt-10 mb-3 text-xl font-bold text-gray-900 first:mt-0 dark:text-white"
          >
            {line.slice(3)}
          </h2>,
        )
        return
      }

      blocks.push(
        <p key={`p-${blocks.length}`} className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {renderInline(line, `p-${blocks.length}`)}
        </p>,
      )
    })

  flushBullets()

  return blocks
}
