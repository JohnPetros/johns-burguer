import { useCustomBurguerStore } from '../../stores/CustomBurguerStore'
import { Collapsable } from '../Collapsable'
import { IngredientRow } from './IngredientRow'
import { useIngredientsTable } from './useIngredientsTable'

export function IngredientsTable() {
  const { ingredientsTable, selectedCategory, handleCollapsableChange } =
    useIngredientsTable()

  const customBurguerStore = useCustomBurguerStore()

  return (
    <div className='rounded-lg bg-gray-200/75 p-2 w-80'>
      {ingredientsTable && (
        <>
          <Collapsable
            value='sauce'
            label='Sauces'
            isOpen={selectedCategory === 'sauce'}
            onChange={handleCollapsableChange}
          >
            <div className='space-y-3'>
              {ingredientsTable.sauce.map((ingredient) => (
                <IngredientRow
                  key={ingredient.name}
                  ingredient={ingredient}
                  defaultChecked={customBurguerStore.state.ingredients.includes(
                    ingredient.name
                  )}
                />
              ))}
            </div>
          </Collapsable>
          <Collapsable
            value='meat'
            label='Meat'
            isOpen={selectedCategory === 'meat'}
            onChange={handleCollapsableChange}
          >
            <div className='space-y-3'>
              {ingredientsTable.meat.map((ingredient) => (
                <IngredientRow
                  key={ingredient.name}
                  ingredient={ingredient}
                  defaultChecked={customBurguerStore.state.ingredients.includes(
                    ingredient.name
                  )}
                />
              ))}
            </div>
          </Collapsable>
          <Collapsable
            value='cheese'
            label='Cheese'
            isOpen={selectedCategory === 'cheese'}
            onChange={handleCollapsableChange}
          >
            <div className='space-y-3'>
              {ingredientsTable.cheese.map((ingredient) => (
                <IngredientRow
                  key={ingredient.name}
                  ingredient={ingredient}
                  defaultChecked={customBurguerStore.state.ingredients.includes(
                    ingredient.name
                  )}
                />
              ))}
            </div>
          </Collapsable>
          <Collapsable
            value='vegetable'
            label='Vegetables'
            isOpen={selectedCategory === 'vegetable'}
            onChange={handleCollapsableChange}
          >
            <div className='space-y-3'>
              {ingredientsTable.vegetable.map((ingredient) => (
                <IngredientRow
                  key={ingredient.name}
                  ingredient={ingredient}
                  defaultChecked={customBurguerStore.state.ingredients.includes(
                    ingredient.name
                  )}
                />
              ))}
            </div>
          </Collapsable>
        </>
      )}
    </div>
  )
}
