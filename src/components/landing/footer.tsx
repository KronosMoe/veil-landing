import { Link } from 'react-router-dom'
import { APP_URL, SUPPORT_EMAIL } from '@/content/site'
import { BASE_PATH, PRIVACY_POLICY_PATH, TERM_OF_SERVICE_PATH } from '@/constants/routes'
import ThemeToggle from '../ui/theme-toggle'
import { VeilLogo } from './veil-logo'

const linkStyles = 'text-xs text-gray-500 transition-colors hover:text-primary-500'

export function Footer() {
  return (
    <footer className="veil-well mx-4 mb-4 rounded-2xl px-6 py-8 sm:mx-6 lg:mx-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link to={BASE_PATH} className="flex items-center gap-2">
            <VeilLogo className="h-5 w-5 text-gray-900 dark:text-white" color="currentColor" />
            <span className="text-sm font-bold text-gray-900 dark:text-white">Veil</span>
          </Link>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Veil. Private communication, free for everyone.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link to={TERM_OF_SERVICE_PATH} className={linkStyles}>
            Terms of Service
          </Link>
          <Link to={PRIVACY_POLICY_PATH} className={linkStyles}>
            Privacy Policy
          </Link>
          <a href={`mailto:${SUPPORT_EMAIL}`} className={linkStyles}>
            {SUPPORT_EMAIL}
          </a>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={linkStyles}>
            Open Veil
          </a>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
