import { INGREDIENTS } from '../../../utils/constants/ingredients'
import type { CustomBurguerStoreState } from '../types/CustomBurguerStoreState'

export const INITIAL_CUSTOM_BURGUER_STORE_STATE: CustomBurguerStoreState = {
  ingredients: [INGREDIENTS[0]],
  isCompleted: false,
}
