import { StripeApi } from "./stripe"

export const Api = () => {
  const stripeApi = StripeApi()

  return {
    ...stripeApi
  }
}