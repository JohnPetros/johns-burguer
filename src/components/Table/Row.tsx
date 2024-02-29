import type { ReactNode } from 'react'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

type RowProps = {
  children: ReactNode
  className?: ClassNameValue
}

export function Row({ children, className }: RowProps) {
  return <tr className={twMerge(className, 'rounded-md')}>{children}</tr>
}
