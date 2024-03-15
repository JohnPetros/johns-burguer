import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { useCartStore } from '../../stores/CartStore'
import { useCustomBurguerStore } from '../../stores/CustomBurguerStore'

import CustomBurguerImage from '../../assets/images/custom-burguer.png'

import { INGREDIENTS } from '../../utils/constants/ingredients'
import { useCart } from '../../utils/hooks/useCart'

export function useCustomBurguer() {
  const customBurguerStore = useCustomBurguerStore()
  const cartStore = useCartStore()

  const { handleOrder } = useCart()

  const [totalCost, setTotalCost] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [shouldCreateOrder, setShouldCreateOrder] = useState(false)

  const customBurguerIngredients = INGREDIENTS.filter(({ name }) =>
    customBurguerStore.state.ingredients.includes(name)
  )

  useEffect(() => {
    async function createCustomBurguerOrder() {
      try {
        await handleOrder()
        alert('Eita')
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
        setShouldCreateOrder(false)
      }
    }

    if (shouldCreateOrder) {
      createCustomBurguerOrder()
    }
  }, [shouldCreateOrder, handleOrder])

  useEffect(() => {
    if (!customBurguerStore.state.isCompleted || shouldCreateOrder) return

    const timeout = setTimeout(() => {
      cartStore.actions.addItem({
        id: uuid(),
        name: 'Custom Burguer',
        category: 'custom-burguer',
        price: totalCost,
        condiment: null,
        image: CustomBurguerImage.src,
        description: '',
        quantity: 1,
        slug: '',
      })

      setShouldCreateOrder(true)
    }, 2500)

    return () => {
      clearTimeout(timeout)
    }
  }, [
    totalCost,
    shouldCreateOrder,
    customBurguerStore.state.isCompleted,
    cartStore.actions.addItem,
  ])

  useEffect(() => {
    function calculateTotalCost() {
      return customBurguerIngredients.reduce((total, ingredient) => {
        return total + ingredient.price
      }, 0)
    }

    if (customBurguerStore.state.ingredients.length) {
      const totalCost = calculateTotalCost()
      setTotalCost(totalCost)
    }
  }, [customBurguerStore.state.ingredients, customBurguerIngredients.reduce])

  return {
    ingredients: customBurguerStore.state.ingredients,
    isCompleted: customBurguerStore.state.isCompleted,
    totalCost,
    isLoading,
  }
}
