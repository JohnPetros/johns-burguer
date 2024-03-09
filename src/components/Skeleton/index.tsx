import { type ClassNameValue, twMerge } from 'tailwind-merge'

export type SkeletonProps = {
  bonesCount: number
  height?: number
  className?: ClassNameValue
}

export function Skeleton({ bonesCount = 1, height = 16, className }: SkeletonProps) {
  return (
    <ul className={twMerge('space-y-3', className)}>
      {Array.from({ length: bonesCount }).map((_, index) => (
        <li
          key={`bone-${index}`}
          style={{ height: `${height / 4}rem` }}
          className='w-full h-4 bg-gray-200 rounded-lg dark:bg-gray-700 animate-pulse'
        />
      ))}
    </ul>
  )
}
