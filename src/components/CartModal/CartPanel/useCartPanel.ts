import { type FormEvent, useEffect, useState } from 'react'
import { useCartStore } from '../../../stores/CartStore'
import { ROUTES } from '../../../utils/constants/routes'
import { useHttp } from '../../../utils/hooks/useHttp'

export function useCartPanel(
  closeModal: VoidFunction,
  changeToProductPanel: VoidFunction
) {
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const { state, actions } = useCartStore()

  const createOrder = useHttp<{ orderId: string; checkoutToken: string }>(
    ROUTES.api.createOrder,
    'POST'
  )

  const updateOrder = useHttp(ROUTES.api.updateOrder, 'POST')

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
      if (state.orderId) {
        await updateOrder({ cartItems: state.items, orderId: state.orderId })
        location.href = ROUTES.checkout
        return
      }

      const data = await createOrder(state.items)

      if (!data.orderId || !data.checkoutToken) {
        console.log()
      }

      actions.setOrderId(data.orderId)
      actions.setCheckoutToken(data.checkoutToken)

      location.href = ROUTES.checkout
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
