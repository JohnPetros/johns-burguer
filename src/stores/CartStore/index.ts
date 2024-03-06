import { persistentMap } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'

import type { CartItem } from '../../@types/CartItem'

import { STORAGE } from '../../utils/constants/storage'

import { INITIAL_CART_STORE_STATE } from './constants/initial-cart-store-state'

import type { CartStore } from './types/CartStore'
import type { CartStoreState } from './types/CartStoreState'

const cartStoreState = persistentMap<CartStoreState>(STORAGE.keys.cart, INITIAL_CART_STORE_STATE, {
  listen: true,
  encode(value) {
    return JSON.stringify(value)
  },
  decode(encoded) {
    return JSON.parse(encoded)
  }
})

export const cartStore = cartStoreState

export function useCartStore(): CartStore {
  const state = useStore(cartStoreState)

  return {
    state: { items: state.items, orderId: state.orderId, checkoutToken: state.checkoutToken },
    actions: {
      addItem(item: CartItem) {
        const { items } = cartStoreState.get()

        cartStoreState.setKey('items', [...items, item])
      },

      removeItem(itemId: string) {
        const { items } = cartStoreState.get()

        cartStoreState.setKey('items', items.filter(item => item.id !== itemId))
      },

      setOrderId(OrderId) {
        cartStoreState.setKey('orderId', OrderId)
      },

      setCheckoutToken(checkoutToken) {
        cartStoreState.setKey('checkoutToken', checkoutToken)
      },

      setItemQuantity(itemId, newQuantity: number) {
        const item = cartStoreState.get().items.find((item) => item.id === itemId)

        if (item) {
          this.removeItem(itemId)
          this.addItem({ ...item, quantity: newQuantity })
        }
      },
    }
  }
}