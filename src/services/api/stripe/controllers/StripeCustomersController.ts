import Stripe from 'stripe'

import type { Customer } from '../../../../@types/Customer'

import type { ICustomersController } from '../../interfaces/ICustomersController'

import { StripeCustomerAdapter } from '../adapters/StripeCustomerAdapter'

export const StripeCustomersController = (stripe: Stripe): ICustomersController => {
  return {
    async getCustomerById(id: string) {
      const customer = await stripe.customers.retrieve(id)

      if (!customer || customer.deleted) return null

      return StripeCustomerAdapter(customer)
    },

    async getCustomerByEmail(email: string) {
      const customer = await stripe.customers.list({ email })

      if (!customer.data.length) return null

      return StripeCustomerAdapter(customer.data[0])
    },

    async updateCustomer(customer: Customer) {
      await stripe.customers.update(customer.id, {
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
      })
    },

    async createCustomer(customer: Omit<Customer, 'id'>) {
      const createdCustomer = await stripe.customers.create({
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
      })

      return createdCustomer.id
    },
  }
}
