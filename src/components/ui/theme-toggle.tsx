import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/use-theme'
import { toggleTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'

export default function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme()
  const dark = theme === 'dark'
  const label = dark ? 'Switch to light theme' : 'Switch to dark theme'
  const Icon = dark ? Sun : Moon
  return (
    <button
      type="button"
      className={cn('theme-toggle', className)}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
    </button>
  )
}
