import { useEffect, useState } from 'react'
import { useCartStore } from '../../stores/CartStore'
import { useCustomBurguerStore } from '../../stores/CustomBurguerStore'
import { INGREDIENTS } from '../../utils/constants/ingredients'

import CustomBurguer from '../../assets/images/custom-burguer.png'

export function useCustomBurguer() {
  const { state } = useCustomBurguerStore()
  const { actions } = useCartStore()

  const [totalCost, setTotalCost] = useState(0)

  const customBurguerIngredients = INGREDIENTS.filter(({ name }) =>
    state.ingredients.includes(name)
  )

  useEffect(() => {
    if (!state.isCompleted) return

    // setTimeout(() => {
    //   actions.addItem({
    //     id: 'custom-burguer',
    //     category: 'custom-burguer',
    //     price: totalCost,
    //     condiment: null,
    //     name: 'Custom Burguer',
    //     image: CustomBurguer.src,
    //     quantity: 1,
    //     description: '',
    //     slug: '',
    //   })
    // }, 3500)
  }, [totalCost, state.isCompleted, actions.addItem])

  useEffect(() => {
    function calculateTotalCost() {
      return customBurguerIngredients.reduce((total, ingredient) => {
        return total + ingredient.price
      }, 0)
    }

    if (state.ingredients.length) {
      const totalCost = calculateTotalCost()
      setTotalCost(totalCost)
    }
  }, [state.ingredients, customBurguerIngredients.reduce])

  return {
    ingredients: state.ingredients,
    isCompleted: state.isCompleted,
    totalCost,
  }
}
