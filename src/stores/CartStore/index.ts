import { useStore } from '@nanostores/react'
import { map } from 'nanostores'

import type { CartItem } from './types/CartItem'

import { INITIAL_CART_STORE_STATE } from './constants/initial-cart-store-state'
import type { CartStore } from './types/CartStore'

const cartStoreState = map(INITIAL_CART_STORE_STATE)

export function useCartStore(): CartStore {
  const cartStore = useStore(cartStoreState)

  return {
    state: cartStore,
    actions: {
      addItem(item: CartItem) {
        const { items } = cartStoreState.get()

        cartStoreState.setKey('items', [...items, item])
      },

      removeItem(itemId) {
        const { items } = cartStoreState.get()

        cartStoreState.setKey('items', items.filter(item => item.id !== itemId))
      },
    }
  }
}