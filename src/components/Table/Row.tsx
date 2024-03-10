import type { ReactNode } from 'react'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

type RowProps = {
  children: ReactNode
  type?: 'head' | 'body' | 'footer'
  className?: ClassNameValue
}

export function Row({ children, type = 'body', className }: RowProps) {
  return (
    <>
      {type === 'head' && (
        <thead>
          <tr className={twMerge(className, 'rounded-md')}>{children}</tr>
        </thead>
      )
      }
      {type === 'body' && (
        <tr className={twMerge(className, 'rounded-md')}>{children}</tr>
      )
      }
      {type === 'footer' && (
        <tfoot>
          <tr className={twMerge(className, 'rounded-md')}>{children}</tr>
        </tfoot>
      )
      }
    </>
  )
}
