import { Button } from '../Button'
import { Icon } from '../Icon'
import { useNumberInput } from './useNumberInput'

type NumberInputProps = {
  id: string
  label: string
  defualtNumber: number
  onChange: (newNumber: number) => void
}

export function NumberInput({ id, label, defualtNumber, onChange }: NumberInputProps) {
  const { number, handleNextNumberChange } = useNumberInput(defualtNumber, onChange)
  return (
    <div>
      <label className='text-orange-500 font-semibold' id={id}>
        {label}
      </label>

      <div className='py-2 px-3 shadow-md rounded-md' data-hs-input-number>
        <div className='w-full flex justify-between items-center gap-x-5'>
          <div className='grow'>
            <input
              className='w-full p-0 bg-transparent border-0 text-gray-800'
              value={number}
              onChange={() => null}
              id={id}
              type='text'
            />
          </div>
          <div className='flex justify-end items-center gap-x-1.5'>
            <Button onClick={() => handleNextNumberChange('next')}>
              <Icon value='plus' size={16} className='text-gray-100' />
            </Button>
            <Button onClick={() => handleNextNumberChange('previous')}>
              <Icon value='minus' size={16} className='text-gray-100' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
