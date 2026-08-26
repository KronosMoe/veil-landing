import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { APP_URL, navLinks } from '@/content/site'
import Button from '../ui/button'
import ThemeToggle from '../ui/theme-toggle'
import { VeilLogo } from './veil-logo'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'veil-bar' : 'bg-transparent'}`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Veil, back to top">
          <span className="veil-card flex h-9 w-9 items-center justify-center rounded-xl">
            <VeilLogo className="h-5 w-5 text-gray-900 dark:text-white" color="currentColor" />
          </span>
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Veil</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <Button color="primary" variant="solid" size="md">
              Open Veil
            </Button>
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="veil-card veil-card-interactive flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl text-gray-700 md:hidden dark:text-gray-300"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="veil-bar overflow-hidden md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {link.label}
                </a>
              ))}
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="block pt-2">
                <Button color="primary" variant="solid" size="md" className="w-full">
                  Open Veil
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
