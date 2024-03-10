import { Collapsable } from '../Collapsable'
import { IngredientRow } from './IngredientRow'
import { useIngredientsTable } from './useIngredientsTable'

export function IngredientsTable() {
  const { ingredientsTable } = useIngredientsTable()

  return (
    <div className='rounded-lg bg-gray-200/75 p-2 w-64'>
      {ingredientsTable && (
        <>
          <Collapsable label='Sauces'>
            <div className='space-y-3'>
              {ingredientsTable.sauce.map((ingredient) => (
                <IngredientRow key={ingredient.name} ingredient={ingredient} />
              ))}
            </div>
          </Collapsable>
          <Collapsable label='Meat'>
            <div className='space-y-3'>
              {ingredientsTable.meat.map((ingredient) => (
                <IngredientRow key={ingredient.name} ingredient={ingredient} />
              ))}
            </div>
          </Collapsable>
          <Collapsable label='Cheese'>
            <div className='space-y-3'>
              {ingredientsTable.cheese.map((ingredient) => (
                <IngredientRow key={ingredient.name} ingredient={ingredient} />
              ))}
            </div>
          </Collapsable>
          <Collapsable label='Vegetables'>
            <div className='space-y-3'>
              {ingredientsTable.vegetable.map((ingredient) => (
                <IngredientRow key={ingredient.name} ingredient={ingredient} />
              ))}
            </div>
          </Collapsable>
        </>
      )}
    </div>
  )
}
