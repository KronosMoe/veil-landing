import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/use-theme'
import { setTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'

const options = [
  { value: 'light' as const, label: 'Light', Icon: Sun },
  { value: 'dark' as const, label: 'Dark', Icon: Moon },
]

/** Recessed tray with a raised knob that slides — the switch you want to flip. */
export default function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme()

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={cn('veil-well flex items-center gap-0.5 rounded-full p-0.5', className)}
    >
      {options.map(({ value, label, Icon }) => {
        const isActive = theme === value

        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={`${label} theme`}
            onClick={() => setTheme(value)}
            className="relative cursor-pointer rounded-full p-1.5"
          >
            {isActive && (
              <motion.span
                layoutId="theme-toggle-knob"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                className="veil-card absolute inset-0 rounded-full"
              />
            )}
            <Icon
              className={cn(
                'relative h-4 w-4 transition-colors',
                isActive ? 'text-primary-500' : 'text-gray-500 dark:text-gray-500',
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
