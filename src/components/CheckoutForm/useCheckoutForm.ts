import { useEffect, useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

import { useCartStore } from '../../stores/CartStore'
import { ROUTES } from '../../utils/constants/routes'
import type { ModalRef } from '../Modal/types/ModalRef'

export function useCheckoutForm() {
  const { state, actions } = useCartStore()

  const modalRef = useRef<ModalRef>(null)

  const [customerName, setCustomerName] = useState('')
  const [hasPaymentConfirmation, setHasPaymentConfirmation] = useState(false)

  function handlePaymentConfirm(customerName: string) {
    setCustomerName(customerName)
    setHasPaymentConfirmation(true)
    modalRef.current?.open()
  }

  async function handlePageRefresh(event: BeforeUnloadEvent) {
    event.preventDefault()

    if (hasPaymentConfirmation) actions.resetState()
  }

  useEventListener('beforeunload', handlePageRefresh)

  useEffect(() => {
    if (!state.checkoutToken) {
      location.href = ROUTES.home
    }
  }, [state.checkoutToken])

  useEffect(() => {
    history.pushState(null, '', location.href)
    window.onpopstate = () => {
      history.go(1)
    }
  }, [])

  return {
    modalRef,
    customerName,
    handlePaymentConfirm,
  }
}
