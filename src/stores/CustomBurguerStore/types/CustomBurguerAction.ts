export type CustomBurguerStoreActions = {
  addIngreditent(ingredient: string): void
  removeIngredient(ingredientName: string): void
  setIsCompleted(isCompleted: boolean): void
  resetState(): void
}
