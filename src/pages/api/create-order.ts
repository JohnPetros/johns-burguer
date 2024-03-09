import type { APIRoute } from 'astro'
import type { CartItem } from '../../@types/CartItem'

import { Api } from '../../services/api'

import { calculateTotalCartItemsCost } from '../../utils/helpers/calculateTotalCartItemsCost'

export const POST: APIRoute = async ({ request }) => {
  const cartItems: CartItem[] = await request.json()

  if (!cartItems || !cartItems.length) return new Response('Cart items are not provided')

  const totalCost = calculateTotalCartItemsCost(cartItems)

  const { checkoutToken, orderId } = await Api().createOrder(totalCost)

  return new Response(JSON.stringify({ checkoutToken, orderId }))
}
