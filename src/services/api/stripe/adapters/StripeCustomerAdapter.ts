import type Stripe from 'stripe'

import type { Customer } from '../../../../@types/Customer'

export const StripeCustomerAdapter = (stripeCustomer: Stripe.Customer) => {
  const customer: Customer = {
    id: stripeCustomer.id,
    name: stripeCustomer.name ?? '',
    email: stripeCustomer.email ?? '',
    address: {
      country: stripeCustomer.address?.country ?? '',
      city: stripeCustomer.address?.city ?? '',
      state: stripeCustomer.address?.state ?? '',
      zipcode: stripeCustomer.address?.postal_code ?? '',
      street: stripeCustomer.address?.line1 ?? '',
      number: stripeCustomer.address?.line2 ?? '',
    },
  }

  return customer
}
