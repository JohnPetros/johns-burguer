import { ROUTES } from '../../../utils/constants/routes'

export function useSummary() {
  function handleFinishOrder() {
    location.href = ROUTES.checkout
  }

  return {
    handleFinishOrder,
  }
}
