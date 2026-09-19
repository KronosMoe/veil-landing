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
  sm: 'rounded-sm px-3 py-1.5 text-sm',
  md: 'rounded-sm px-4 py-2 text-sm',
  lg: 'rounded-sm px-5 py-2.5 text-base',
  xl: 'rounded-sm px-6 py-3 text-base sm:text-lg',
}

const raisedBase = `
  skeuo-raised border border-black/15 dark:border-black/40
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
    'bg-primary-600 text-white hover:bg-primary-500 active:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 dark:active:bg-primary-800',
  secondary:
    'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-800',
  error: 'bg-error text-white hover:brightness-110 active:brightness-95',
  warning: 'bg-warning text-white hover:brightness-110 active:brightness-95',
  success: 'bg-success text-white hover:brightness-110 active:brightness-95',
  info: 'bg-info text-white hover:brightness-110 active:brightness-95',
}

const mutedColors: Record<ButtonColor, string> = {
  primary: 'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300',
  secondary: 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100',
  error: 'text-error hover:text-error',
  warning: 'text-warning hover:text-warning',
  success: 'text-success hover:text-success',
  info: 'text-info hover:text-info',
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
