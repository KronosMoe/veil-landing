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
const baseStyles = `
  inline-flex cursor-pointer items-center justify-center whitespace-nowrap select-none
  font-bold transition-all duration-150 focus:outline-none
`

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'rounded-lg px-3 py-1.5 text-sm',
  md: 'rounded-lg px-4 py-2 text-base',
  lg: 'rounded-lg px-5 py-2.5 text-lg',
  xl: 'rounded-lg px-6 py-3 text-xl',
}

const raisedBase = `
  skeuo-raised border border-black/60 bg-gradient-to-b
  active:skeuo-pressed active:translate-y-px
`

const insetBase = `
  skeuo-inset border border-black/60 bg-gray-950/70
  hover:bg-gray-900 active:skeuo-tray active:bg-gray-800
`

const blendBase = `
  border border-transparent bg-transparent
  hover:skeuo-inset hover:border-black/60 hover:bg-gray-900/70
  active:skeuo-tray active:bg-gray-800/70
`

const raisedColors: Record<ButtonColor, string> = {
  primary:
    'from-primary-400 to-primary-600 text-white hover:from-primary-300 hover:to-primary-500 active:from-primary-600 active:to-primary-500',
  secondary:
    'from-gray-800 to-gray-950 text-gray-200 hover:from-gray-700 hover:to-gray-900 active:from-gray-950 active:to-gray-900',
  error: 'from-[#e0555a] to-[#b03a3e] text-white hover:from-[#ec6a6e] hover:to-[#c4474b]',
  warning: 'from-[#e5ab52] to-[#b3792a] text-white hover:from-[#f2ba62] hover:to-[#c48735]',
  success: 'from-[#5dbb7e] to-[#3a8a58] text-white hover:from-[#6dcb8e] hover:to-[#459863]',
  info: 'from-[#6c8cdb] to-[#4463b0] text-white hover:from-[#7e9be5] hover:to-[#5070c0]',
}

const mutedColors: Record<ButtonColor, string> = {
  primary: 'text-primary-400 hover:text-primary-300',
  secondary: 'text-gray-400 hover:text-gray-300',
  error: 'text-[#e0555a] hover:text-[#ec6a6e]',
  warning: 'text-[#e5ab52] hover:text-[#f2ba62]',
  success: 'text-[#5dbb7e] hover:text-[#6dcb8e]',
  info: 'text-[#6c8cdb] hover:text-[#7e9be5]',
}

const linkColors: Record<ButtonColor, string> = {
  primary: 'bg-transparent text-primary-500 hover:underline',
  secondary: 'bg-transparent text-gray-300 hover:underline',
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
