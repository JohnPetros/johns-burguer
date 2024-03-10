import {
  AddressElement,
  CardElement,
  LinkAuthenticationElement,
  PaymentElement,
} from '@stripe/react-stripe-js'

import { useCartStore } from '../../../stores/CartStore'

import { calculateTotalCartItemsCost } from '../../../utils/helpers/calculateTotalCartItemsCost'
import { formatPrice } from '../../../utils/helpers/formatPrice'

import { Button } from '../../Button'
import { Spinner } from '../../Spinner'

import { useStripeForm } from './useStripeForm'

type StripeFormProps = {
  onConfirmPayment: (customerName: string) => void
}

export function StripeForm({ onConfirmPayment }: StripeFormProps) {
  const { handleSubmit, handleEmailChange, isLoading } =
    useStripeForm(onConfirmPayment)

  const cartStore = useCartStore()

  const totalToPay = calculateTotalCartItemsCost(cartStore.state.items)

  return (
    <form className='container mt-6' onSubmit={handleSubmit}>
      <div className='space-y-3 min-h-[24rem]'>
        <LinkAuthenticationElement onChange={handleEmailChange} />

        <CardElement />

        <AddressElement
          options={{
            mode: 'shipping',
            allowedCountries: ['US'],
            blockPoBox: true,
          }}
        />

        <PaymentElement id='payment-element-id' />
      </div>

      <Button
        type='submit'
        className='mx-auto mt-6 h-10 w-48 text-lg grid place-content-center'
      >
        {isLoading ? <Spinner /> : `Pay ${formatPrice(totalToPay)}`}
      </Button>
    </form>
  )
}
