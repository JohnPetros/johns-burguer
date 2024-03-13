import { useStore } from '@nanostores/react'
import { map } from 'nanostores'

import type { Ingredient } from '../../@types/Ingredient'

import { INITIAL_CUSTOM_BURGUER_STORE_STATE } from './constants/initial-custom-burguer-state'

import type { CustomBurguerStore } from './types/CustomBurguerStore'
import type { CustomBurguerStoreState } from './types/CustomBurguerStoreState'

const customBurguerStoreState = map<CustomBurguerStoreState>(
  INITIAL_CUSTOM_BURGUER_STORE_STATE
)

export const cartStore = customBurguerStoreState

export function useCustomBurguerStore(): CustomBurguerStore {
  const state = useStore(customBurguerStoreState)

  return {
    state,
    actions: {
      addIngreditent(ingredient: string) {
        const { ingredients } = customBurguerStoreState.get()

        customBurguerStoreState.setKey('ingredients', [ingredient, ...ingredients])
      },

      removeIngreditent(ingredient: string) {
        const { ingredients } = customBurguerStoreState.get()

        customBurguerStoreState.setKey(
          'ingredients',
          ingredients.filter((curentIngredient) => curentIngredient !== ingredient)
        )
      },

      setIsCompleted(isCompleted: boolean) {
        customBurguerStoreState.setKey('isCompleted', isCompleted)
      },

      resetState() {
        customBurguerStoreState.setKey(
          'ingredients',
          INITIAL_CUSTOM_BURGUER_STORE_STATE.ingredients
        )
        customBurguerStoreState.setKey(
          'isCompleted',
          INITIAL_CUSTOM_BURGUER_STORE_STATE.isCompleted
        )
      },
    },
  }
}
