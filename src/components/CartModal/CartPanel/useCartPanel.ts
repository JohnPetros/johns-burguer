import { type FormEvent, useEffect, useState } from 'react'

import { useCartStore } from '../../../stores/CartStore'

import { useCart } from '../../../utils/hooks/useCart'

export function useCartPanel(
  closeModal: VoidFunction,
  changeToProductPanel: VoidFunction
) {
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const { state, actions } = useCartStore()

  const { handleOrder } = useCart()

  function handleCartCloseModal() {
    closeModal()
  }

  function handleRemoveItemButtonClick(cartItemId: string) {
    actions.removeItem(cartItemId)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
      await handleOrder()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!state.items.length) {
      changeToProductPanel()
    }

    const totalToPay = state.items.reduce((total, item) => {
      return total + item.price
    }, 0)

    setTotal(totalToPay)
  }, [state.items, changeToProductPanel])

  return {
    items: state.items,
    total,
    isLoading,
    handleRemoveItemButtonClick,
    handleCartCloseModal,
    handleSubmit,
  }
}
