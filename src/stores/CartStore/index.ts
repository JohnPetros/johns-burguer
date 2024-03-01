import { persistentMap } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'

import type { CartItem } from './types/CartItem'

import { STORAGE } from '../../utils/constants/storage'
import { INITIAL_CART_STORE_STATE } from './constants/initial-cart-store-state'
import type { CartStore } from './types/CartStore'
import type { CartStoreState } from './types/CartStoreState'

const cartStoreState = persistentMap<CartStoreState>(STORAGE.keys.cart, INITIAL_CART_STORE_STATE, {
  listen: true,
  encode(value) {
    console.log({ value })
    return JSON.stringify(value)
  },
  decode(encoded) {
    return JSON.parse(encoded)
  }
})

export function useCartStore(): CartStore {
  const state = useStore(cartStoreState)

  console.log({ state })

  return {
    state: { items: state.items },
    actions: {
      addItem(item: CartItem) {
        const { items } = cartStoreState.get()

        cartStoreState.setKey('items', [...items, item])
      },

      removeItem(itemId: string) {
        const { items } = cartStoreState.get()

        cartStoreState.setKey('items', items.filter(item => item.id !== itemId))
      },
    }
  }
}