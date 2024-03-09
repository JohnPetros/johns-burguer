import { useEffect, useState } from 'react'

import { useCartStore } from '../../stores/CartStore'
import { ROUTES } from '../../utils/constants/routes'

export function useCheckoutForm() {
  const [hasPaymentConfirmation, setHasPaymentConfirmation] = useState(false)

  const cartStore = useCartStore()

  function onConfirmPayment() {
    setHasPaymentConfirmation(true)
    cartStore.actions.setOrderId(null)
    cartStore.actions.setCheckoutToken(null)
  }

  useEffect(() => {
    if (!cartStore.state.checkoutToken) {
      location.href = ROUTES.home
    }
  }, [cartStore.state.checkoutToken])

  return {
    hasPaymentConfirmation,
    onConfirmPayment,
  }
}
