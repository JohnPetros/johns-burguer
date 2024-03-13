import { useCartStore } from '../../stores/CartStore'

import { ROUTES } from '../constants/routes'

import { useHttp } from './useHttp'

export function useCart() {
  const cartStore = useCartStore()

  const createOrder = useHttp<{ orderId: string; checkoutToken: string }>(
    ROUTES.api.createOrder,
    'POST'
  )

  const updateOrder = useHttp(ROUTES.api.updateOrder, 'POST')

  async function handleOrder() {
    if (!cartStore.state.items.length) return

    if (cartStore.state.orderId) {
      await updateOrder({
        cartItems: cartStore.state.items,
        orderId: cartStore.state.orderId,
      })
      location.href = ROUTES.checkout
      return
    }

    const data = await createOrder({ cartItems: cartStore.state.items })

    console.log({ data })

    if (!data.orderId || !data.checkoutToken) {
      throw new Error('Failed to order')
    }

    cartStore.actions.setOrderId(data.orderId)
    cartStore.actions.setCheckoutToken(data.checkoutToken)

    location.href = ROUTES.checkout
  }

  return {
    handleOrder,
  }
}
