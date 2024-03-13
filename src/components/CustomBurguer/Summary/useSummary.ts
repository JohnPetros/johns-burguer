import { useEffect, useState } from 'react'

import type { FoodInfo } from '../../../@types/FoodInfo'

import { useCustomBurguerStore } from '../../../stores/CustomBurguerStore'

import { INGREDIENTS } from '../../../utils/constants/ingredients'

export function useSummary() {
  const { state, actions } = useCustomBurguerStore()

  const [foodInfo, setFoodInfo] = useState<FoodInfo>({
    kcal: 0,
    oz: 0,
    preparationTime: 0,
  })

  function handleFinishOrder() {
    actions.setIsCompleted(true)
  }

  useEffect(() => {
    const ingredients = INGREDIENTS.filter(({ name }) => state.ingredients.includes(name))

    const customBurguerfoodInfo = ingredients.reduce(
      (foodInfo, ingredient) => {
        return {
          kcal: foodInfo.kcal + ingredient.kcal,
          oz: foodInfo.oz + ingredient.oz,
          preparationTime: foodInfo.preparationTime + ingredient.preparationTime,
        }
      },
      {
        kcal: 0,
        oz: 0,
        preparationTime: 0,
      }
    )

    setFoodInfo(customBurguerfoodInfo)
  }, [state.ingredients])

  return {
    foodInfo,
    handleFinishOrder,
  }
}
