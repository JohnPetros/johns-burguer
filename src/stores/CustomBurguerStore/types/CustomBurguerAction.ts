export type CustomBurguerStoreActions = {
  addIngreditent(ingredient: string): void
  removeIngreditent(ingredientName: string): void
  setIsCompleted(isCompleted: boolean): void
  resetState(): void
}
