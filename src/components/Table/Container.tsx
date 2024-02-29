import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <table className='w-full rounded-md'>{children}</table>
}
