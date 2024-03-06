import type { CartItem } from "../../@types/CartItem"

export function calculateTotalCartItemsCost(items: CartItem[], isSubtotal = false) {
  return items.reduce((total, currentItem) => {
    return total + currentItem.price * (isSubtotal ? 1 : currentItem.quantity)
  }, 0)
}