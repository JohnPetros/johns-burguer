import type { Ingredient } from '../../../@types/Ingredient'

export type CustomBurguerStoreActions = {
  addIngreditent(ingredient: Ingredient): void
  removeIngreditent(ingredientName: string): void
  setIsCompleted(isCompleted: boolean): void
  resetState(): void
}
