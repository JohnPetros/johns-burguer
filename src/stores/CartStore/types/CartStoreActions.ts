import type { CartItem } from "../../../@types/CartItem"

export type CartStoreActions = {
  addItem(item: CartItem): void
  setItemQuantity(itemId: string, newQuantity: number): void
  removeItem(itemId: string): void
  setOrderId(orderId: string): void
  setCheckoutToken(checkoutToken: string): void
} 