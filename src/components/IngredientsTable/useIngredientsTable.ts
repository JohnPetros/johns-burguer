import { useEffect, useState } from 'react'
import type { Ingredient, IngredientCategory } from '../../@types/Ingredient'

import { useCustomBurguerStore } from '../../stores/CustomBurguerStore'
import { INGREDIENTS } from '../../utils/constants/ingredients'

type IngredientsTable = Record<IngredientCategory, Ingredient[]>

export function useIngredientsTable() {
  const [ingredientsTable, setIngredientsTable] = useState<IngredientsTable | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<IngredientCategory | null>(
    null
  )
  function handleCollapsableChange(category: string, isOpen: boolean) {
    if (selectedCategory === category && isOpen) {
      setSelectedCategory(null)
      return
    }

    setSelectedCategory(category as IngredientCategory)
  }

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
    selectedCategory,
    handleCollapsableChange,
  }
}
