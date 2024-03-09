import { useEffect, useState } from 'react'
import { useCartStore } from '../../../stores/CartStore'
import { ROUTES } from '../../../utils/constants/routes'
import { useHttp } from '../../../utils/hooks/useHttp'

export function useItem(itemId: string) {
  const updateOrder = useHttp(ROUTES.api.updateOrder, 'POST')

  const { state, actions } = useCartStore()

  async function editOrder() {
    alert('update')
    await updateOrder({ orderId: state.orderId, cartItems: state.items })
  }

  const item = state.items.find((item) => item.id === itemId)

  async function handleNumberInputChange(newQuantity: number) {
    actions.setItemQuantity(itemId, newQuantity)
  }

  function handleRemoveItemButtonPress() {
    actions.removeItem(itemId)
  }

  useEffect(() => {
    if (!state.orderId && state.items.length) editOrder()
  }, [state.items, state.orderId])

  return {
    item,
    handleNumberInputChange,
    handleRemoveItemButtonPress,
  }
}
