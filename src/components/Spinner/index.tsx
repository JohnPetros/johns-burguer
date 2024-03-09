import { type ClassNameValue, twMerge } from 'tailwind-merge'

type SpinnerProps = {
  className?: ClassNameValue
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <div
      className={twMerge(
        'animate-spin inline-block size-4 border-[4px] border-current border-t-transparent text-gray-100 rounded-full dark:text-gray-100',
        className
      )}
      role='status'
      aria-label='loading'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
