import { useLayoutEffect } from 'react'

export default function useLockBodyScroll(isLocked) {
  useLayoutEffect(() => {
    if (!isLocked) return undefined
    const originalStyle = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isLocked])
}
