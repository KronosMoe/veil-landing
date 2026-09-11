import { useEffect, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { APP_URL, SUPPORT_EMAIL } from '@/content/site'
import { PRIVACY_POLICY_PATH, TERM_OF_SERVICE_PATH } from '@/constants/routes'
import ThemeToggle from '../ui/theme-toggle'
import { VeilLogo } from '../landing/veil-logo'

export default function EditorialShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const { scrollYProgress } = useScroll()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return (
    <div className={`editorial-site ${className}`} id="top">
      <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <a href="#main-content" className="skip-content">
        Skip to content
      </a>
      <header className="editorial-header">
        <Link to="/" className="editorial-logo" aria-label="Veil home">
          <VeilLogo />
          <span>veil</span>
          <span className="logo-divider" />
          <small>A SPACE FOR YOUR PEOPLE</small>
        </Link>
        <nav
          className={menuOpen ? 'editorial-nav is-open' : 'editorial-nav'}
          aria-label="Main navigation"
          id="main-navigation"
        >
          {[
            ['#features', 'Your group'],
            ['#showcase', 'Chat to work'],
            ['#security', 'Privacy'],
            ['#pricing', 'Plans'],
            ['#direction', 'What’s next'],
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
        <p>© {new Date().getFullYear()} Veil. A space for your people.</p>
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
