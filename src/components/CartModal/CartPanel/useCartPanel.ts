import { useEffect, useState } from "react"
import { useCartStore } from "../../../stores/CartStore"

export function useCartPanel(closeModal: VoidFunction) {
  const [total, setTotal] = useState(0)

  const { state, actions } = useCartStore()

  function handleCartCloseModal() {
    closeModal()
  }

  function handleRemoveItemButtonClick(cartItemId: string) {
    actions.removeItem(cartItemId)
  }

  useEffect(() => {
    const totalToPay = state.items.reduce((total, item) => {
      return total + item.price
    }, 0)

    setTotal(totalToPay)
  }, [state.items])

  return {
    items: state.items,
    total,
    handleRemoveItemButtonClick,
    handleCartCloseModal,
  }
}
