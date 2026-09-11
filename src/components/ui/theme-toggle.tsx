import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/use-theme'
import { setTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'

const options = [
  { value: 'light' as const, label: 'Light theme', Icon: Sun },
  { value: 'dark' as const, label: 'Dark theme', Icon: Moon },
]

export default function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme()

  return (
    <div role="group" aria-label="Colour theme" className={cn('theme-toggle-group', className)}>
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          aria-pressed={theme === value}
          title={label}
          onClick={() => setTheme(value)}
          className="theme-toggle-option"
        >
          <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}
