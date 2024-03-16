import type { Ingredient } from '../../../@types/Ingredient'

import { useCustomBurguerStore } from '../../../stores/CustomBurguerStore'

export function useIngredientRow(ingredient: Ingredient) {
  const { state, actions } = useCustomBurguerStore()

  function handleIngredientCheck() {
    const isAdded = state.ingredients.find(
      (currentIngredient) => currentIngredient === ingredient.name
    )

    if (isAdded) {
      actions.removeIngredient(ingredient.name)
      return
    }

    actions.addIngreditent(ingredient.name)
  }

  return {
    handleIngredientCheck,
  }
}
