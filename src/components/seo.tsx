type Props = {
  title: string
  description: string
  /** Path only, e.g. "/privacy-policy". Joined onto the production origin. */
  path: string
  noIndex?: boolean
}

const ORIGIN = 'https://veil.in.th'

/**
 * Per-route document metadata. React 19 hoists title/meta/link rendered
 * anywhere in the tree into <head>, so no helmet library is needed.
 */
export default function Seo({ title, description, path, noIndex = false }: Props) {
  const url = ORIGIN + path

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
