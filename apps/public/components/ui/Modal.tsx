import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'md' | 'lg'
}

export function Modal({ open, onClose, title, children, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (typeof window === 'undefined') return null
  const portalRoot = document.body

  return open
    ? ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <div
            className={cn(
              'relative w-full max-w-3xl rounded-3xl border border-white/10 bg-primary-light/70 p-6 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.65)] backdrop-blur-xl',
              size === 'lg' ? 'max-w-4xl' : 'max-w-2xl',
            )}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
              <button
                onClick={onClose}
                className="rounded-full p-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
            {children}
          </div>
        </div>,
        portalRoot,
      )
    : null
}
