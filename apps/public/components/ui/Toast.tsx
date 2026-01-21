import React from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle2, AlertTriangle, Info, XCircle } from 'lucide-react'

type ToastVariant = 'success' | 'error' | 'warning' | 'info'

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant
  title?: string
  description?: string
}

const variantConfig: Record<ToastVariant, { icon: React.ElementType; classes: string }> = {
  success: { icon: CheckCircle2, classes: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-100' },
  error: { icon: XCircle, classes: 'bg-red-500/15 border-red-400/30 text-red-100' },
  warning: { icon: AlertTriangle, classes: 'bg-amber-500/15 border-amber-400/30 text-amber-100' },
  info: { icon: Info, classes: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-100' },
}

export function Toast({ variant = 'info', title, description, className, children, ...props }: ToastProps) {
  const Icon = variantConfig[variant].icon
  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-2xl border px-4 py-3 shadow-lg',
        variantConfig[variant].classes,
        className,
      )}
      role="status"
      {...props}
    >
      <Icon size={18} className="mt-0.5" />
      <div className="space-y-1">
        {title && <p className="text-sm font-semibold">{title}</p>}
        {(description || children) && (
          <p className="text-sm leading-relaxed text-white/80">{description || children}</p>
        )}
      </div>
    </div>
  )
}
