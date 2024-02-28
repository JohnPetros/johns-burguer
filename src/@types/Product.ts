import type { Category } from './Category'

export type Product = {
  id: string
  name: string
  image: string
  description: string
  price: number
  category: Category
}