let active: ViewTransition | undefined
let requestedTheme: boolean | undefined
let revision = 0

/** Reveal the new palette without moving the page or its scroll position. */
export function transitionTheme(dark: boolean, reducedMotion = false, onApplied = () => {}) {
  const root = document.documentElement
  if (requestedTheme === dark || (requestedTheme === undefined && root.classList.contains('dark') === dark)) return
  const current = ++revision
  active?.skipTransition()
  requestedTheme = dark
  const apply = () => {
    if (current !== revision) return
    root.classList.toggle('dark', dark)
    root.style.colorScheme = dark ? 'dark' : 'light'
    requestedTheme = undefined
    onApplied()
  }
  const cleanup = () => {
    if (current !== revision) return
    root.removeAttribute('data-theme-slide')
    active = undefined
  }
  const reduce =
    reducedMotion ||
    root.classList.contains('reduce-motion') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce || typeof document.startViewTransition !== 'function') {
    apply()
    cleanup()
    return
  }
  root.dataset.themeSlide = dark ? 'dark' : 'light'
  try {
    active = document.startViewTransition(apply)
    void active.ready.catch(() => {})
    void active.finished.then(cleanup, cleanup)
  } catch {
    apply()
    cleanup()
  }
}
