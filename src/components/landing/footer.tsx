import { Link } from 'react-router-dom'
import { VeilLogo } from './veil-logo'
import { BASE_PATH, PRIVACY_POLICY_PATH, TERM_OF_SERVICE_PATH } from '@/constants/routes'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0d0d0d] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link to={BASE_PATH} className="flex items-center gap-2">
            <VeilLogo className="h-5 w-5" color="#ffffff" />
            <span className="text-sm font-semibold text-white">Veil</span>
          </Link>

          <p className="text-xs text-gray-600">&copy; {currentYear} Veil. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link to={TERM_OF_SERVICE_PATH} className="text-xs text-gray-500 transition-colors hover:text-[#f3701e]">
              Terms of Service
            </Link>
            <Link to={PRIVACY_POLICY_PATH} className="text-xs text-gray-500 transition-colors hover:text-[#f3701e]">
              Privacy Policy
            </Link>
            <a
              href="mailto:support@veil.in.th"
              className="text-xs text-gray-500 transition-colors hover:text-[#f3701e]"
            >
              support@veil.in.th
            </a>
            <a
              href="https://app.veil.in.th"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 transition-colors hover:text-[#f3701e]"
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
