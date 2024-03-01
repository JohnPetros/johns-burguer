import Stripe from "stripe"

import type { Product } from "../../../../@types/Product"
import type { IProductsController } from "../../interfaces/IProductsController"
import { StripeProductAdapter } from "../adapters/StripeProductAdapter"

export const StripeProductsController = (stripe: Stripe): IProductsController => {
  return {
    async getAllProducts() {
      const stripeProducts = await stripe.products.list()

      const products: Product[] = []

      for (const stripeProduct of stripeProducts.data) {
        if (stripeProduct.name === 'Subscription') continue

        const product = await StripeProductAdapter(stripeProduct, stripe)
        products.push(product)
      }

      return products
    },

    async getProductBySlug(slug: string) {
      const product = await stripe.products.search({
        query: `metadata[\'slug\']:\'${slug}\'`,
      })

      return await StripeProductAdapter(product.data[0], stripe)
    },
  }
}