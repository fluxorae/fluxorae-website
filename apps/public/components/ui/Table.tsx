import React from 'react'
import { cn } from '@/lib/utils'

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  stickyHeader?: boolean
}

export function Table({ stickyHeader = true, className, children, ...props }: TableProps) {
  return (
    <div className={cn('overflow-hidden rounded-3xl border border-white/10 bg-white/5', className)} {...props}>
      <div className="overflow-auto">
        <table className="w-full text-left">
          {stickyHeader ? (
            <thead className="bg-white/5 text-xs uppercase tracking-[0.15em] text-gray-400 sticky top-0 z-10">
              {React.Children.toArray(children)[0]}
            </thead>
          ) : null}
          {React.Children.toArray(children).slice(stickyHeader ? 1 : 0)}
        </table>
      </div>
    </div>
  )
}

export function Th({ className, children, ...props }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) {
  return (
    <th className={cn('px-4 py-3 font-semibold text-white whitespace-nowrap', className)} {...props}>
      {children}
    </th>
  )
}

export function Tr({ className, children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={cn('border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors', className)} {...props}>
      {children}
    </tr>
  )
}

export function Td({ className, children, ...props }: React.TdHTMLAttributes<HTMLTableDataCellElement>) {
  return (
    <td className={cn('px-4 py-3 text-sm text-gray-200 align-middle', className)} {...props}>
      {children}
    </td>
  )
}
