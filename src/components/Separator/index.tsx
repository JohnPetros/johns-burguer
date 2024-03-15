import { type ClassNameValue, twMerge } from 'tailwind-merge'

type SeparatorProps = {
  className?: ClassNameValue
}

export function Separator({ className }: SeparatorProps) {
  return (
    <span
      className={twMerge('block bg-orange-700 w-full h-[2px] rounded-md', className)}
    />
  )
}
