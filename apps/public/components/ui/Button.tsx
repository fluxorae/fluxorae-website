import React from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-primary-dark hover:bg-accent-dark shadow-[0_12px_30px_-12px_rgba(245,158,11,0.45)]',
  secondary: 'bg-white/10 text-white border border-white/15 hover:bg-white/15',
  ghost: 'bg-transparent text-secondary hover:text-white hover:bg-white/5 border border-transparent',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-sm md:text-base',
  lg: 'px-5 py-3.5 text-base md:text-lg',
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-primary',
        variantClasses[variant],
        sizeClasses[size],
        isDisabled && 'opacity-60 cursor-not-allowed',
        className,
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-transparent" aria-hidden />}
      {icon && !loading && icon}
      {children}
    </button>
  )
}
