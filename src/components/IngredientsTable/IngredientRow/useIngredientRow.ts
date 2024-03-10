import type { Ingredient } from '../../../@types/Ingredient'
import { useCustomBurguerStore } from '../../../stores/CustomBurguerStore'

export function useIngredientRow(ingredient: Ingredient) {
  const { state, actions } = useCustomBurguerStore()

  function handleIngredientCheck() {
    const isAdded = state.ingredients.find(({ name }) => name === ingredient.name)

    if (isAdded) {
      actions.removeIngreditent(ingredient.name)
    }

    actions.addIngreditent(ingredient)
  }

  return {
    handleIngredientCheck,
  }
}
