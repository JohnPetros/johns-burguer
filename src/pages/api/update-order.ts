import type { APIRoute } from 'astro'
import type { CartItem } from '../../@types/CartItem'

import { Api } from '../../services/api'

import { calculateTotalCartItemsCost } from '../../utils/helpers/calculateTotalCartItemsCost'

type Request = {
  cartItems: CartItem[]
  orderId: string
}

export const POST: APIRoute = async ({ request }) => {
  const { orderId, cartItems } = (await request.json()) as Request

  if (!orderId) return new Response('Order id is not provided')

  const totalCost = calculateTotalCartItemsCost(cartItems)

  await Api().updateOrder(orderId, totalCost)

  return new Response(JSON.stringify({ message: 'ok' }))
}
