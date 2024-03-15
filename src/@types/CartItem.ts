import type { Condiment } from './Condiment'
import type { Product } from './Product'

export type CartItem = Product & {
  quantity: number
  condiment: Condiment | null
}
