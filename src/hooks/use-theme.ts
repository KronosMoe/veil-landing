import { useSyncExternalStore } from 'react'
import { getTheme, subscribeToTheme, type Theme } from '@/lib/theme'

/** Reads the live theme. The document class is the source of truth, so the
 *  inline boot script in index.html has already decided it before React runs. */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribeToTheme, getTheme, () => 'dark')
}
