import { Link } from 'react-router-dom'
import Seo from '@/components/seo'
import { Footer } from '@/components/landing/footer'
import { VeilLogo } from '@/components/landing/veil-logo'
import Button from '@/components/ui/button'
import { BASE_PATH } from '@/constants/routes'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found — Veil" description="That page does not exist on veil.in.th." path="/404" noIndex />
      <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4">
        <div className="veil-aurora pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative text-center">
          <VeilLogo className="text-primary-500 mx-auto h-10 w-10" color="currentColor" />
          <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            There is nothing behind this one
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            The page you were after does not exist. The rest of Veil is still where you left it.
          </p>
          <Link to={BASE_PATH} className="mt-8 inline-block">
            <Button color="primary" variant="solid" size="lg">
              Back to the homepage
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
