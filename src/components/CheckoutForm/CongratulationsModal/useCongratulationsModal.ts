import { useCartStore } from '../../../stores/CartStore'
import { ROUTES } from '../../../utils/constants/routes'

export function useCongratulationsModal() {
  const cartStore = useCartStore()

  function handleModalClose() {
    cartStore.actions.resetState()
    location.href = ROUTES.home
  }

  return {
    handleModalClose,
  }
}
