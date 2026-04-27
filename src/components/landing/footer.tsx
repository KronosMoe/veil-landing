import { motion } from 'framer-motion'
import { VeilLogo } from './veil-logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0d0d0d] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <motion.a href="#" className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
            <VeilLogo className="h-5 w-5" color="#f3701e" />
            <span className="text-sm font-semibold text-white">Veil</span>
          </motion.a>

          <p className="text-xs text-gray-600">&copy; {currentYear} Veil. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a
              href="https://app.veil.in.th"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 transition-colors hover:text-[#f3701e]"
            >
              Launch App
            </a>
            <a
              href="mailto:support@veil.in.th"
              className="text-xs text-gray-500 transition-colors hover:text-[#f3701e]"
            >
              support@veil.in.th
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
