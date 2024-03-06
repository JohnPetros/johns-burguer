import { AddressElement, PaymentElement, PaymentRequestButtonElement, useElements } from '@stripe/react-stripe-js'

import { useCartStore } from '../../../stores/CartStore'
import { calculateTotalCartItemsCost } from '../../../utils/helpers/calculateTotalCartItemsCost'
import { formatPrice } from '../../../utils/helpers/formatPrice'
import { Button } from '../../Button'

export function Form() {
  const elements = useElements()

  const cartStore = useCartStore()

  const totalToPay = calculateTotalCartItemsCost(cartStore.state.items)

  return (
    <form className='container mt-6 space-y-3'>
      <AddressElement options={{
        mode: 'shipping', allowedCountries: ['US'],
        blockPoBox: true,
      }}
      />
      <PaymentElement id='payment-element-id' />

      <Button type='submit' className="mx-auto mt-6 px-6">Pay {formatPrice(totalToPay)}</Button>
    </form>
  )
}
