import type { CartStoreActions } from "./CartStoreActions"
import type { CartStoreState } from "./CartStoreState"

export type CartStore = {
  state: CartStoreState
  actions: CartStoreActions
}