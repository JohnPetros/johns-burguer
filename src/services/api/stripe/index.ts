import Stripe from 'stripe'

import { StripeCustomersController } from './controllers/StripeCustomersController'
import { StripeOrdersController } from './controllers/StripeOrdersController'
import { StripeProductsController } from './controllers/StripeProductsController'

const SECRET_KEY = import.meta.env.STRIPE_SECRET_KEY

export const StripeApi = () => {
  if (!SECRET_KEY) throw new Error('Stripe env vars are not valid!')

  const stripe = new Stripe(SECRET_KEY, { apiVersion: '2023-10-16' })

  return {
    ...StripeProductsController(stripe),
    ...StripeOrdersController(stripe),
    ...StripeCustomersController(stripe),
  }
}
