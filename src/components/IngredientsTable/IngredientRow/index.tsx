import type { Ingredient } from '../../../@types/Ingredient'
import { Icon } from '../../Icon'
import { useIngredientRow } from './useIngredientRow'

type IngredientRowProps = {
  ingredient: Ingredient
}

export function IngredientRow({ ingredient }: IngredientRowProps) {
  const { handleIngredientCheck } = useIngredientRow(ingredient)

  return (
    <label
      htmlFor={ingredient.name}
      className='flex items-center justify-between cursor-pointer'
    >
      {ingredient.name}
      <div className='grid place-content-center rounded-md border-2 border-gray-800 w-6 h-6 bg-transparent has-[:checked]:bg-orange-500 has-[:checked]:border-gray-50 transition duration-200'>
        <input
          type='checkbox'
          id={ingredient.name}
          className='peer hidden'
          onChange={handleIngredientCheck}
        />
        <Icon
          value='check'
          className='hidden peer-checked:block text-gray-100'
          size={16}
        />
      </div>
    </label>
  )
}