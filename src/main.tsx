import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import './styles/landing.css'
import { MotionConfig } from 'framer-motion'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
)
