import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { APP_URL, SUPPORT_EMAIL } from '@/content/site'
import { PRIVACY_POLICY_PATH, TERM_OF_SERVICE_PATH } from '@/constants/routes'
import ThemeToggle from '../ui/theme-toggle'
import { VeilLogo } from '../landing/veil-logo'

export default function EditorialShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!menuOpen) return
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return (
    <div className={`editorial-site ${className}`} id="top">
      <div className="reading-progress" aria-hidden="true" />
      <a href="#main-content" className="skip-content">
        Skip to content
      </a>
      <header className="editorial-header">
        <Link to="/" className="editorial-logo" aria-label="Veil home">
          <VeilLogo />
          <span>veil</span>
        </Link>
        <nav
          className={menuOpen ? 'editorial-nav is-open' : 'editorial-nav'}
          aria-label="Main navigation"
          id="main-navigation"
        >
          {[
            ['#space', 'Space'],
            ['#experience', 'Workflow'],
            ['#attention', 'Inbox'],
            ['#discover', 'Discover'],
            ['#privacy', 'Privacy'],
          ].map(([href, label]) => (
            <Link key={href} to={`/${href}`} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a href={APP_URL} className="editorial-button">
            Open Veil <ArrowUpRight size={17} />
          </a>
          <button
            ref={menuButton}
            className="mobile-menu"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      {children}
      <footer className="editorial-footer">
        <Link to="/" className="editorial-logo" aria-label="Veil home">
          <VeilLogo />
          <span>veil</span>
        </Link>
        <p>© {new Date().getFullYear()} Veil. A place where you define how you work.</p>
        <div>
          <Link to={PRIVACY_POLICY_PATH}>Privacy</Link>
          <Link to={TERM_OF_SERVICE_PATH}>Terms</Link>
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            Contact <ArrowUpRight size={13} />
          </a>
          <a href="#top" aria-label="Back to top">
            <ArrowRight className="back-top-icon" size={18} />
          </a>
        </div>
      </footer>
    </div>
  )
}
