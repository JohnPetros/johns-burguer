import type { CartStoreState } from "../types/CartStoreState"

export const INITIAL_CART_STORE_STATE: CartStoreState = {
  items: [],
  orderId: null,
  checkoutToken: null,
}