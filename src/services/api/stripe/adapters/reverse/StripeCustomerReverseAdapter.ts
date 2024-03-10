import type Stripe from 'stripe'

import type { Customer } from '../../../../../@types/Customer'

export const StripeCustomerReverseAdapter = (customer: Customer) => {
  const stripeCustomer: Partial<Stripe.Customer> = {
    name: customer.name,
    email: customer.email,
    address: {
      city: customer.address.city,
      country: customer.address.country,
      line1: customer.address.street,
      line2: customer.address.number,
      postal_code: customer.address.zipcode,
      state: customer.address.state,
    },
  }

  return stripeCustomer as Stripe.Customer
}
