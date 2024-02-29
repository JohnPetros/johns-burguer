import type { ReactNode } from 'react'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

type DataProps = {
  children: ReactNode
  className?: ClassNameValue
}

export function Data({ children, className }: DataProps) {
  return (
    <td>
      <div
        className={twMerge(
          'bg-transparent text-center p-3 text-gray-800 font-medium',
          className
        )}
      >
        {children}
      </div>
    </td>
  )
}
