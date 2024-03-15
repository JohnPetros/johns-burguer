import { RadioGroup as Group } from '@headlessui/react'
import type { ReactNode } from 'react'

type RadioGroupProps = {
  children: ReactNode
  defaultValue: string
  name: string
  label: string
  onChange?: (name: string, value: string) => void
}

export function RadioGroup({
  children,
  defaultValue,
  label,
  name,
  onChange,
}: RadioGroupProps) {
  return (
    <Group
      onChange={(newValue) => (onChange ? onChange(name, newValue) : null)}
      defaultValue={defaultValue}
      name={name}
    >
      <Group.Label className='text-orange-700 font-semibold text-lg'>{label}</Group.Label>
      <div className='space-y-3 mt-3'>{children}</div>
    </Group>
  )
}
