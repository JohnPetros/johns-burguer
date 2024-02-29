import type { CartItem } from "./CartItem"

export type CartStoreActions = {
  addItem(item: CartItem): void
  removeItem(itemId: string): void
} 