import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Seo from '@/components/seo'
import EditorialShell from '@/components/layout/editorial-shell'
import { VeilLogo } from '@/components/landing/veil-logo'
import { BASE_PATH } from '@/constants/routes'
import { SUPPORT_EMAIL } from '@/content/site'

export default function NotFound() {
  const reduced = useReducedMotion()
  return (
    <>
      <Seo
        title="Page not found — Veil"
        description="A little off the path. Find your way back to the Veil workspace."
        path="/404"
        noIndex
      />
      <EditorialShell className="not-found-site">
        <main tabIndex={-1} id="main-content" className="lost-page editorial-section">
          <div className="section-marker">
            <span>404 / A LITTLE OFF THE PATH</span>
            <span>THERE’S STILL A PLACE FOR YOU.</span>
          </div>
          <div className="lost-scene" aria-hidden="true">
            <motion.span
              className="lost-digit"
              initial={{ opacity: 0, y: 70, rotate: -12 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 1 }}
            >
              4
            </motion.span>
            <div className="lost-portal">
              <span className="lost-orbit" />
              <span className="lost-orbit second" />
              <motion.div
                className="lost-mascot"
                animate={reduced ? {} : { y: [0, -17, 0], rotate: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <VeilLogo />
              </motion.div>
              <span className="lost-coordinate">SOMEWHERE, TOGETHER.</span>
            </div>
            <motion.span
              className="lost-digit"
              initial={{ opacity: 0, y: 70, rotate: 12 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 1, delay: 0.12 }}
            >
              4
            </motion.span>
          </div>
          <motion.div
            className="lost-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduced ? 0 : 0.3 }}
          >
            <span className="eyebrow">THIS SPACE IS STILL A LITTLE EMPTY.</span>
            <h1>
              A little lost.
              <br />
              <span>Still in good company.</span>
            </h1>
            <p>
              The page you’re looking for isn’t here.
              <br />
              Let’s get you back to a space that is.
            </p>
            <div className="lost-actions">
              <Link to={BASE_PATH} className="editorial-button">
                <ArrowLeft size={16} />
                Back to Veil
              </Link>
              <a className="text-link" href={`mailto:${SUPPORT_EMAIL}`}>
                Let us know <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
          <div className="lost-bottom">
            <span>NO WRONG TURNS. JUST ANOTHER WAY HOME.</span>
            <Link to="/#showcase">
              Explore the workspace <ArrowUpRight size={14} />
            </Link>
          </div>
        </main>
      </EditorialShell>
    </>
  )
}
