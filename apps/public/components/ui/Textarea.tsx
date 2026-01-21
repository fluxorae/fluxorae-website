import React, { useId } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  error?: string
}

export function Textarea({ label, helperText, error, className, id, ...props }: TextareaProps) {
  const generatedId = useId()
  const textareaId = id || generatedId
  return (
    <div className="space-y-1">
      <div className="relative group">
        <textarea
          id={textareaId}
          className={cn(
            'peer w-full rounded-2xl border bg-white/5 px-4 pb-2 pt-5 text-white placeholder-transparent shadow-[0_1px_0_rgba(255,255,255,0.08)]',
            'focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-transparent',
            error ? 'border-red-500/70' : 'border-white/15 hover:border-white/25',
            className,
          )}
          placeholder={label || props.placeholder}
          {...props}
        />
        {label && (
          <label
            htmlFor={textareaId}
            className="pointer-events-none absolute left-4 top-3 text-sm text-gray-400 transition-all duration-150 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-focus:-translate-y-1 peer-focus:text-xs"
          >
            {label}
          </label>
        )}
      </div>
      {(helperText || error) && (
        <p className={cn('text-sm', error ? 'text-red-400' : 'text-gray-400')}>
          {error || helperText}
        </p>
      )}
    </div>
  )
}
