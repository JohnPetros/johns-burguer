import type Stripe from "stripe"
import type { Category } from "../../../../@types/Category"
import type { Product } from "../../../../@types/Product"

export const StripeProductAdapter = async (stripeProduct: Stripe.Product, stripe: Stripe) => {
  const price = await stripe.prices.list({ product: stripeProduct.id })

  const product: Product = {
    id: String(stripeProduct.id),
    name: stripeProduct.name,
    slug: stripeProduct.metadata.slug,
    image: stripeProduct.images[0],
    description: stripeProduct.description ?? '',
    price: (price.data[0]?.unit_amount ?? 0) / 100,
    category: stripeProduct.metadata.category as Category
  }

  return product
}