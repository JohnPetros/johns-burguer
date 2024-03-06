import type { CartItem } from "./CartItem"

export type Order = {
  totalCost: number
  items: CartItem[]
}