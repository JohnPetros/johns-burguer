import type { FoodInfo } from './FoodInfo'

export type IngredientCategory = 'sauce' | 'meat' | 'cheese' | 'vegetable' | 'bread'

export type Ingredient = {
  category: IngredientCategory
  name: string
  image: string
  position: number
  price: number
} & FoodInfo
