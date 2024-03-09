import { useEffect, useRef, useState } from 'react'

import { useCartStore } from '../../stores/CartStore'
import { ROUTES } from '../../utils/constants/routes'
import type { ModalRef } from '../Modal/types/ModalRef'

export function useCheckoutForm() {
  const cartStore = useCartStore()

  const modalRef = useRef<ModalRef>(null)

  const [customerName, setCustomerName] = useState('')

  function handlePaymentConfirm(customer: Customer) {
    setCustomerName(customer.name)
    modalRef.current?.open()
  }

  useEffect(() => {
    if (!cartStore.state.checkoutToken) {
      location.href = ROUTES.home
    }
  }, [cartStore.state.checkoutToken])

  return {
    modalRef,
    customerName,
    handlePaymentConfirm,
  }
}
