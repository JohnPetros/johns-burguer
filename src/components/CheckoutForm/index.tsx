import { Elements } from '@stripe/react-stripe-js'
import { type StripeElementsOptions, loadStripe } from '@stripe/stripe-js'

import { useCartStore } from '../../stores/CartStore'

import { StripeForm } from './StripeForm'
import { useCheckoutForm } from './useCheckoutForm'

type CheckoutFormProps = {
  publicKey: string
}

export function CheckoutForm({ publicKey }: CheckoutFormProps) {
  const stripePromise = loadStripe(String(publicKey))

  const { onConfirmPayment, hasPaymentConfirmation } = useCheckoutForm()

  const cartStore = useCartStore()

  if (!cartStore.state.checkoutToken) {
    return null
  }

  const options: StripeElementsOptions = {
    clientSecret: cartStore.state.checkoutToken,
    appearance: {
      theme: 'flat',
      labels: 'above',
      variables: {
        colorPrimary: '#F97316',
        colorTextPlaceholder: '#A3A3A3',
        colorSuccess: '#84CC16',
        fontFamily: 'Poppins, sans-serif',
      },
    },
    locale: 'en',
  }

  if (hasPaymentConfirmation) {
    return null
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <StripeForm onConfirmPayment={onConfirmPayment} />
    </Elements>
  )
}
