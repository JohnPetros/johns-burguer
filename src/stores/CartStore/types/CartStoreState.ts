import type { CartItem } from "../../../@types/CartItem"

export type CartStoreState = {
  items: CartItem[]
  orderId: string | null
  checkoutToken: string | null
}
