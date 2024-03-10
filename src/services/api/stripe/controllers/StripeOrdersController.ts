import Stripe from 'stripe'

import type { IOrdersController } from '../../interfaces/IOrdersController'

const WEBHOOK_SECRET = import.meta.env.STRIPE_WEBHOOK_SECRET

export const StripeOrdersController = (stripe: Stripe): IOrdersController => {
  return {
    async createOrder(totalCost: number) {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: 'usd',
        amount: Math.ceil(totalCost) * 100,
        automatic_payment_methods: { enabled: true },
      })

      return {
        orderId: paymentIntent.id,
        checkoutToken: String(paymentIntent.client_secret),
      }
    },

    async updateOrder(orderId, totalCost) {
      const currentPaymentIntent = await stripe.paymentIntents.retrieve(orderId)

      await stripe.paymentIntents.update(currentPaymentIntent.id, {
        amount: Math.ceil(totalCost) * 100,
      })
    },

    async handleWebhook(request: Request) {
      const body = await request.text()
      const signature = request.headers.get('stripe-signature')

      if (!signature) {
        throw new Error('Stripe signature is not provided')
      }

      let event: Stripe.Event

      if (!WEBHOOK_SECRET) {
        throw new Error('Stripe webhook secret is not provided')
      }

      try {
        event = stripe.webhooks.constructEvent(body, signature, WEBHOOK_SECRET)

        switch (event.type) {
          case 'payment_intent.succeeded':
            console.log(event.data.object)
        }
      } catch (error) {
        throw new Error(String(error))
      }
    },
  }
}
