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

// Base
const baseStyles = `
  font-bold transition-colors
  inline-flex items-center justify-center
  focus:outline-none focus:ring-1 focus:ring-offset-1
  cursor-pointer whitespace-nowrap
  focus:ring-0 focus:ring-offset-0
`

// Sizes
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5 rounded-sm',
  md: 'text-base px-4 py-2 rounded-sm',
  lg: 'text-lg px-5 py-2.5 rounded-sm',
  xl: 'text-xl px-6 py-3 rounded-sm',
}

// Variants × Colors
const variantStyles: Record<ButtonVariant, Record<ButtonColor, string>> = {
  solid: {
    primary: `
      relative
      bg-primary-600 text-white hover:bg-primary-600
      hover:bg-primary-700
      rounded-sm
      before:absolute before:inset-0 before:rounded-sm
      before:p-[1px] dark:before:bg-[linear-gradient(180deg,#FFFFFF35_0%,#00000010_50%,#52525275_100%)]
      hover:before:bg-[linear-gradient(180deg,#52525250_0%,#FFFFFF15_100%)]
      after:absolute after:inset-[1px] after:rounded-sm after:bg-primary-500 hover:after:bg-primary-700
      before:transition-all after:transition-all transition-all
      hover:after:inset-shadow-sm hover:after:inset-shadow-primary-800
      before:z-0 after:z-0
    `,
    secondary: `
      relative
      bg-gray-800 text-gray-200
      hover:bg-gray-900
      rounded-sm
      before:absolute before:inset-0 before:rounded-sm
      before:p-[1px] dark:before:bg-[linear-gradient(180deg,#FFFFFF35_0%,#00000010_50%,#52525275_100%)]
      hover:before:bg-[linear-gradient(180deg,#52525250_0%,#FFFFFF15_100%)]
      after:absolute after:inset-[1px] after:rounded-sm after:bg-gray-800 hover:after:bg-gray-900
      before:transition-all after:transition-all transition-all
      hover:after:inset-shadow-sm hover:after:inset-shadow-gray-950
      before:z-0 after:z-0
    `,
    error: `
      relative
      bg-error text-white
      hover:bg-error/50
      rounded-sm
      before:absolute before:inset-0 before:rounded-sm
      before:p-[1px] dark:before:bg-[linear-gradient(180deg,#FFFFFF35_0%,#00000010_50%,#52525275_100%)]
      hover:before:bg-[linear-gradient(180deg,#52525250_0%,#FFFFFF15_100%)]
      after:absolute after:inset-[1px] after:rounded-sm after:bg-error hover:after:bg-[#c94b4b]
      before:transition-all after:transition-all transition-all
      hover:after:inset-shadow-sm hover:after:inset-shadow-error
      before:z-0 after:z-0
    `,
    warning: `
      relative
      bg-warning text-white
      hover:bg-warning/50
      rounded-sm
      before:absolute before:inset-0 before:rounded-sm
      before:p-[1px] dark:before:bg-[linear-gradient(180deg,#FFFFFF35_0%,#00000010_50%,#52525275_100%)]
      hover:before:bg-[linear-gradient(180deg,#52525250_0%,#FFFFFF15_100%)]
      after:absolute after:inset-[1px] after:rounded-sm after:bg-warning hover:after:bg-[#dba04d]
      before:transition-all after:transition-all transition-all
      hover:after:inset-shadow-sm hover:after:inset-shadow-warning
      before:z-0 after:z-0
    `,
    success: `
      relative
      bg-success text-white
      hover:bg-success/50
      rounded-sm
      before:absolute before:inset-0 before:rounded-sm
      before:p-[1px] dark:before:bg-[linear-gradient(180deg,#FFFFFF35_0%,#00000010_50%,#52525275_100%)]
      hover:before:bg-[linear-gradient(180deg,#52525250_0%,#FFFFFF15_100%)]
      after:absolute after:inset-[1px] after:rounded-sm after:bg-success hover:after:bg-[#6ad693]
      before:transition-all after:transition-all transition-all
      hover:after:inset-shadow-sm hover:after:inset-shadow-success
      before:z-0 after:z-0
    `,
    info: `
      relative
      bg-infotext-white
      hover:bg-info/50
      rounded-sm
      before:absolute before:inset-0 before:rounded-sm
      before:p-[1px] dark:before:bg-[linear-gradient(180deg,#FFFFFF35_0%,#00000010_50%,#52525275_100%)]
      hover:before:bg-[linear-gradient(180deg,#52525250_0%,#FFFFFF15_100%)]
      after:absolute after:inset-[1px] after:rounded-sm after:bg-info hover:after:bg-[#5c80d1]
      before:transition-all after:transition-all transition-all
      hover:after:inset-shadow-sm hover:after:inset-shadow-info
      before:z-0 after:z-0
    `,
  },
  outline: {
    primary: 'border bg-primary-900/20 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-[#F2DCAD]',
    secondary: 'border bg-gray-950 border-gray-700 text-gray-300 hover:bg-gray-800',
    error: 'border bg-error/20 border-error text-white hover:bg-error hover:text-white',
    warning: 'border bg-warning/20 border-warning text-white hover:bg-warning hover:text-white',
    success: 'border bg-success/20 border-success text-white hover:bg-[#6ad693] hover:text-white',
    info: 'border bg-info/20 border-info text-white hover:bg-info hover:text-white',
  },
  surface: {
    primary: 'bg-primary-900 text-white hover:bg-primary-800',
    secondary: 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white',
    error: 'bg-[#A02828] text-white hover:bg-[#CD3636]',
    warning: 'bg-[#dba04d] text-white hover:bg-[#FFB956]',
    success: 'bg-[#51a672] text-white hover:bg-[#5AC181]',
    info: 'bg-[#5c80d1] text-white hover:bg-[#7da2ff]',
  },
  ghost: {
    primary: 'bg-transparent text-primary-500 hover:bg-primary-900/30',
    secondary: 'bg-transparent text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800',
    error: 'bg-transparent text-error hover:bg-error/20',
    warning: 'bg-transparent text-warning hover:bg-warning/20',
    success: 'bg-transparent text-success hover:bg-success/20',
    info: 'bg-transparent text-info hover:bg-info/20',
  },
  link: {
    primary: 'bg-transparent text-primary-500 hover:underline',
    secondary: 'bg-transparent text-gray-300 hover:underline',
    error: 'bg-transparent text-error hover:underline',
    warning: 'bg-transparent text-warning hover:underline',
    success: 'bg-transparent text-success hover:underline',
    info: 'bg-transparent text-info hover:underline',
  },
}

// Disabled
const disabledStyles: Record<ButtonColor, string> = {
  primary: 'opacity-50 cursor-not-allowed',
  secondary: 'opacity-50 cursor-not-allowed',
  error: 'opacity-50 cursor-not-allowed',
  warning: 'opacity-50 cursor-not-allowed',
  info: 'opacity-50 cursor-not-allowed',
  success: 'opacity-50 cursor-not-allowed',
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
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant][color],
        disabled && disabledStyles[color],
        className,
      )}
    >
      <span className="relative z-10 flex flex-row items-center gap-2">{children}</span>
    </button>
  )
}
