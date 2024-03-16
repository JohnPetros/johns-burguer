import { Disclosure } from '@headlessui/react'
import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon } from '../Icon'
import { useCollapsable } from './useCollapsable'

type CollapsableProps = {
  label: string
  value: string
  children: ReactNode
  isOpen: boolean
  onChange: (value: string, isOpen: boolean) => void
}

export function Collapsable({
  label,
  value,
  children,
  isOpen,
  onChange,
}: CollapsableProps) {
  const { handleClick, handleKeyDown } = useCollapsable(() => onChange(value, isOpen))

  return (
    <Disclosure>
      <div className='transition-[height] duration-200 h-auto'>
        <Disclosure.Button
          type='button'
          className='w-full py-3 px-4 flex items-center justify-between font-semibold bg-tranparent text-gray-800 uppercase'
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          {label}
          <Icon
            value='arrow-up'
            className={twMerge('transform duration-200  ', isOpen ? 'rotate-180' : '')}
          />
        </Disclosure.Button>

        {isOpen && (
          <Disclosure.Panel static className='w-full py-3 px-4' aria-live='polite'>
            {children}
          </Disclosure.Panel>
        )}
      </div>
    </Disclosure>
  )
}
