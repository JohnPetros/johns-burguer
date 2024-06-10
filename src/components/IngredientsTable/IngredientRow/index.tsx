import * as Checkbox from '@radix-ui/react-checkbox'
import { twMerge } from 'tailwind-merge'
import type { Ingredient } from '../../../@types/Ingredient'
import { Icon } from '../../Icon'
import { useIngredientRow } from './useIngredientRow'

type IngredientRowProps = {
  ingredient: Ingredient
  defaultChecked: boolean
}

export function IngredientRow({ ingredient, defaultChecked }: IngredientRowProps) {
  const { handleIngredientCheck } = useIngredientRow(ingredient)

  return (
    <div className='flex items-center'>
      <label
        htmlFor={ingredient.name}
        className='flex items-center justify-between cursor-pointer w-full'
      >
        <div className='flex items-center gap-3'>
          <img src={ingredient.image} alt={ingredient.name} width={32} height={32} />
          <span className='text-ellipsis overflow-hidden'>{ingredient.name}</span>
        </div>
      </label>
      <Checkbox.Root
        id={ingredient.name}
        className={twMerge(
          'grid place-content-center border-2 border-gray-800 w-6 h-6 rounded-md overflow-hidden data-state=checked:bg-orange-500',
          defaultChecked ? 'bg-orange-500' : 'bg-white'
        )}
        defaultChecked={defaultChecked}
        checked={defaultChecked}
        onCheckedChange={handleIngredientCheck}
      >
        <Checkbox.Indicator>
          <div className='grid place-content-center bg-transparent bg-orange-500 w-6 h-6 border-2 border-gray-100 transition duration-200'>
            <Icon value='check' className='text-gray-100' size={16} />
          </div>
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
