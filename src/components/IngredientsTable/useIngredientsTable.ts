import { useEffect, useState } from 'react'
import type { Ingredient, IngredientCategory } from '../../@types/Ingredient'

import { useCustomBurguerStore } from '../../stores/CustomBurguerStore'
import { INGREDIENTS } from '../../utils/constants/ingredients'

type IngredientsTable = Record<IngredientCategory, Ingredient[]>

export function useIngredientsTable() {
  const customBurguerStore = useCustomBurguerStore()

  const [ingredientsTable, setIngredientsTable] = useState<IngredientsTable | null>(null)

  useEffect(() => {
    const categories: IngredientCategory[] = [
      'bread',
      'cheese',
      'meat',
      'sauce',
      'vegetable',
    ]

    let ingredientsTable = {}

    for (const category of categories) {
      const ingredients = INGREDIENTS.filter(
        (ingredient) => ingredient.category === category
      )

      ingredientsTable = { ...ingredientsTable, [category]: ingredients }
    }

    setIngredientsTable(ingredientsTable as IngredientsTable)
  }, [])

  return {
    ingredientsTable,
  }
}
