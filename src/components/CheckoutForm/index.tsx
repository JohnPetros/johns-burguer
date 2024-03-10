import { Elements } from '@stripe/react-stripe-js'
import { type StripeElementsOptions, loadStripe } from '@stripe/stripe-js'

import { useCartStore } from '../../stores/CartStore'

import { CongratulationsModal } from './CongratulationsModal'
import { StripeForm } from './StripeForm'
import { useCheckoutForm } from './useCheckoutForm'

type CheckoutFormProps = {
  publicKey: string
}

export function CheckoutForm({ publicKey }: CheckoutFormProps) {
  const stripePromise = loadStripe(String(publicKey))

  const { handlePaymentConfirm, modalRef, customerName } = useCheckoutForm()

  const cartStore = useCartStore()

  const options: StripeElementsOptions = {
    clientSecret: cartStore.state.checkoutToken ?? '',
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

  return (
    <>
      <CongratulationsModal modalRef={modalRef} customerName={customerName} />
      <Elements stripe={stripePromise} options={options}>
        <StripeForm onConfirmPayment={handlePaymentConfirm} />
      </Elements>
    </>
  )
}
