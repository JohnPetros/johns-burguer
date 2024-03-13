import type { Product } from './Product'

export type CartItem = Product & {
  quantity: number
  condiment: Record<string, string> | null
}
