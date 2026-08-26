import { cn } from '@/lib/utils'
import React from 'react'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'
export type ButtonColor = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info'
export type ButtonVariant = 'solid' | 'outline' | 'surface' | 'ghost' | 'link'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize
  color?: ButtonColor
  variant?: ButtonVariant
  disabled?: boolean
  className?: string
}

// Mirrors the app's skeuomorphic system (veil/docs/SKEUOMORPHISM.md):
// solid = forward raised, outline/surface = backward recessed,
// ghost = blended (presses in on hover), link = plain text link.
// Every variant styles both themes; the skeuo-* utilities carry the shadows.
const baseStyles = `
  inline-flex cursor-pointer items-center justify-center whitespace-nowrap select-none
  font-semibold transition-all duration-150
`

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'rounded-lg px-3 py-1.5 text-sm',
  md: 'rounded-lg px-4 py-2 text-sm',
  lg: 'rounded-xl px-5 py-2.5 text-base',
  xl: 'rounded-xl px-6 py-3 text-base sm:text-lg',
}

const raisedBase = `
  skeuo-raised border border-black/20 bg-gradient-to-b dark:border-black/60
  active:skeuo-pressed active:translate-y-px
`

const insetBase = `
  skeuo-inset border border-black/15 bg-gray-100 hover:bg-gray-50
  dark:border-black/60 dark:bg-gray-950/70 dark:hover:bg-gray-900
  active:skeuo-tray active:bg-gray-200 dark:active:bg-gray-800
`

const blendBase = `
  border border-transparent bg-transparent
  hover:skeuo-inset hover:border-black/15 hover:bg-gray-200/70
  dark:hover:border-black/60 dark:hover:bg-gray-900/70
  active:skeuo-tray active:bg-gray-300/70 dark:active:bg-gray-800/70
`

const raisedColors: Record<ButtonColor, string> = {
  primary:
    'from-primary-400 to-primary-600 text-white hover:from-primary-300 hover:to-primary-500 active:from-primary-600 active:to-primary-500',
  secondary:
    'from-gray-50 to-gray-200 text-gray-800 hover:from-white hover:to-gray-100 dark:from-gray-800 dark:to-gray-950 dark:text-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-900',
  error: 'from-[#e0555a] to-[#b03a3e] text-white hover:from-[#ec6a6e] hover:to-[#c4474b]',
  warning: 'from-[#e5ab52] to-[#b3792a] text-white hover:from-[#f2ba62] hover:to-[#c48735]',
  success: 'from-[#5dbb7e] to-[#3a8a58] text-white hover:from-[#6dcb8e] hover:to-[#459863]',
  info: 'from-[#6c8cdb] to-[#4463b0] text-white hover:from-[#7e9be5] hover:to-[#5070c0]',
}

const mutedColors: Record<ButtonColor, string> = {
  primary: 'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300',
  secondary: 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100',
  error: 'text-[#b03a3e] hover:text-[#c4474b] dark:text-[#e0555a] dark:hover:text-[#ec6a6e]',
  warning: 'text-[#b3792a] hover:text-[#c48735] dark:text-[#e5ab52] dark:hover:text-[#f2ba62]',
  success: 'text-[#3a8a58] hover:text-[#459863] dark:text-[#5dbb7e] dark:hover:text-[#6dcb8e]',
  info: 'text-[#4463b0] hover:text-[#5070c0] dark:text-[#6c8cdb] dark:hover:text-[#7e9be5]',
}

const linkColors: Record<ButtonColor, string> = {
  primary: 'bg-transparent text-primary-600 hover:underline dark:text-primary-400',
  secondary: 'bg-transparent text-gray-700 hover:underline dark:text-gray-300',
  error: 'bg-transparent text-error hover:underline',
  warning: 'bg-transparent text-warning hover:underline',
  success: 'bg-transparent text-success hover:underline',
  info: 'bg-transparent text-info hover:underline',
}

export default function Button({
  size = 'sm',
  color = 'primary',
  variant = 'solid',
  disabled,
  className,
  children,
  ...props
}: Props) {
  const variantClasses = (() => {
    switch (variant) {
      case 'solid':
        return cn(raisedBase, raisedColors[color])
      case 'outline':
      case 'surface':
        return cn(insetBase, mutedColors[color])
      case 'ghost':
        return cn(blendBase, mutedColors[color])
      case 'link':
        return linkColors[color]
    }
  })()

  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantClasses,
        disabled && 'cursor-not-allowed opacity-50 active:translate-y-0',
        className,
      )}
    >
      <span className="flex flex-row items-center gap-2">{children}</span>
    </button>
  )
}
