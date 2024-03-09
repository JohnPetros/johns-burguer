import Stripe from "stripe"

import type { IOrdersController } from "../../interfaces/IOrdersController"

export const StripeOrdersController = (stripe: Stripe): IOrdersController => {
  return {
    async createOrder(totalCost: number) {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: 'usd',
        amount: Math.ceil(totalCost) * 100,
        automatic_payment_methods: { enabled: true }
      })

      return {
        orderId: paymentIntent.id,
        checkoutToken: String(paymentIntent.client_secret)
      }
    },

    async updateOrder(orderId, totalCost) {
      const currentPaymentIntent = await stripe.paymentIntents.retrieve(orderId)

      await stripe.paymentIntents.update(
        currentPaymentIntent.id,
        {
          amount: Math.ceil(totalCost) * 100,
        }
      )
    },
  }
}