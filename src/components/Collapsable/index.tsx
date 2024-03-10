import { Disclosure, Transition } from '@headlessui/react'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '../Icon'

type CollapsableProps = {
  label: string
  children: ReactNode
}

export function Collapsable({ label, children }: CollapsableProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className='transition-[height] duration-200 h-auto'>
          <Disclosure.Button
            type='button'
            className='w-full py-3 px-4 flex items-center justify-between font-semibold bg-tranparent text-gray-800 uppercase'
          >
            {label}
            <Icon
              value='arrow-up'
              className={twMerge('transform duration-200  ', open ? 'rotate-180' : '')}
            />
          </Disclosure.Button>
          <Transition
            enter='transition duration-200 ease-in'
            enterFrom='transform -translate-y-3 opacity-0'
            enterTo='transform translate-y-0 opacity-100'
            leave='transition duration-200 ease-out'
            leaveFrom='transform translate-y-0 opacity-100'
            leaveTo='transform -translate-y-3 opacity-0'
          >
            <Disclosure.Panel className='w-full py-3 px-4'>{children}</Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  )
}
