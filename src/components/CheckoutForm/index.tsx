import { Elements } from '@stripe/react-stripe-js'
import { type StripeElementsOptions, loadStripe } from '@stripe/stripe-js'
import { useEffect } from 'react'
import { useCartStore } from '../../stores/CartStore'
import { ROUTES } from '../../utils/constants/routes'
import { Form } from './Form'

type CheckoutFormProps = {
  publicKey: string
}

export function CheckoutForm({ publicKey }: CheckoutFormProps) {
  const stripePromise = loadStripe(
    String(publicKey)
  )

  const { state } = useCartStore()

  useEffect(() => {
    if (!state.checkoutToken) {
      location.href = ROUTES.home
    }
  }, [state.checkoutToken])

  if (!state.checkoutToken) {
    return null
  }

  const options: StripeElementsOptions = {
    clientSecret: state.checkoutToken,
    appearance: {
      theme: 'flat',
      labels: 'above',
      variables: {
        colorPrimary: '#F97316',
        colorTextPlaceholder: '#A3A3A3',
        colorSuccess: '#84CC16',
        fontFamily: 'Poppins, sans-serif',

      }
    },
    locale: 'en',
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <Form />
    </Elements>
  )
}
