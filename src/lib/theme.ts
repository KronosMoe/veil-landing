import { transitionTheme } from './theme-transition'

export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'veil-theme'

const listeners = new Set<() => void>()

function prefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    // Private mode or blocked storage — fall back to the system preference.
    return null
  }
}

/** The theme the document is actually showing right now. */
export function getTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/** Resolve the theme to boot with: explicit choice first, then the OS. */
export function resolveInitialTheme(): Theme {
  const stored = readStoredTheme()
  if (stored) return stored
  return prefersDark() ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

export function setTheme(theme: Theme) {
  transitionTheme(theme === 'dark', false, () => listeners.forEach((listener) => listener()))
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Persisting is best-effort; the toggle still works for this visit.
  }
  listeners.forEach((listener) => listener())
}

export function toggleTheme() {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark')
}

/** For useSyncExternalStore — also tracks the OS switching themes. */
export function subscribeToTheme(listener: () => void) {
  listeners.add(listener)

  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const onSystemChange = () => {
    if (readStoredTheme()) return
    transitionTheme(prefersDark(), false, listener)
    listener()
  }
  media.addEventListener('change', onSystemChange)

  return () => {
    listeners.delete(listener)
    media.removeEventListener('change', onSystemChange)
  }
}
