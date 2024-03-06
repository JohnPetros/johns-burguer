import type { IApi } from "./interfaces/IApi"
import { StripeApi } from "./stripe"

export const Api = (): IApi => {
  const stripeApi = StripeApi()

  return {
    ...stripeApi
  }
}