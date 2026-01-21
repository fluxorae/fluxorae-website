import React from 'react'
import { cn } from '@/lib/utils'

type BadgeVariant = 'neutral' | 'success' | 'warning' | 'danger' | 'info'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const badgeClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-white/10 text-white border-white/15',
  success: 'bg-emerald-500/15 text-emerald-200 border-emerald-400/30',
  warning: 'bg-amber-500/15 text-amber-200 border-amber-400/30',
  danger: 'bg-red-500/15 text-red-200 border-red-400/30',
  info: 'bg-cyan-500/15 text-cyan-200 border-cyan-400/30',
}

export function Badge({ variant = 'neutral', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]',
        badgeClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
