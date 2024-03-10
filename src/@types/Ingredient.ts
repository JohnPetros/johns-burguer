export type IngredientCategory = 'sauce' | 'meat' | 'cheese' | 'vegetable' | 'bread'

export type Ingredient = {
  category: IngredientCategory
  name: string
  image: string
  kcal: number
  oz: number
  preparationTime: number
}
