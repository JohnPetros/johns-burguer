import Stripe from "stripe"

import type { Order } from "../../../../@types/Order"
import type { IOrdersController } from "../../interfaces/IOrdersController"


export const StripeOrdersController = (stripe: Stripe): IOrdersController => {
  return {
    async createOrder(order: Order) {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: 'usd',
        amount: Math.ceil(order.totalCost),
        automatic_payment_methods: { enabled: true }
      })

      return {
        orderId: paymentIntent.id,
        checkoutToken: String(paymentIntent.client_secret)
      }
    },
  }
}