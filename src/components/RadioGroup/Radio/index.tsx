import { RadioGroup } from '@headlessui/react'

import { twMerge } from 'tailwind-merge'
import { Icon } from '../../Icon'
import type { RadioProps } from './types/RadioProps'

export function Radio({ value, label, description }: RadioProps) {
  return (
    <RadioGroup.Option value={value}>
      {({ checked }) => (
        <div
          className={twMerge(
            'flex items-center justify-between shadow-md rounded-md p-4 cursor-pointer min-h-16',
            checked ? 'bg-gray-800' : 'bg-tranparent'
          )}
        >
          <div className='space-y-1'>
            <RadioGroup.Label
              className={twMerge(
                'font-semibold text-md',
                checked ? 'text-orange-700' : 'text-gray-800'
              )}
            >
              {label}
            </RadioGroup.Label>
            {description && (
              <RadioGroup.Description
                className={twMerge(
                  'font-semibold text-sm',
                  checked ? 'text-gray-100' : 'text-gray-400'
                )}
              >
                {description}
              </RadioGroup.Description>
            )}
          </div>
          {checked && (
            <span className='rounded-full grid place-content-center bg-orange-700 w-6 h-6'>
              <Icon value='check' size={16} className='text-gray-100' />
            </span>
          )}
        </div>
      )}
    </RadioGroup.Option>
  )
}
