import type { CartItem } from '../../@types/CartItem'
import { calculateTotalCartItemsCost } from '../../utils/helpers/calculateTotalCartItemsCost'
import { formatPrice } from '../../utils/helpers/formatPrice'

type CheckoutSummaryProps = {
  items: CartItem[]
}

export function CartSummary({ items }: CheckoutSummaryProps) {
  const total = calculateTotalCartItemsCost(items)
  const subtotal = calculateTotalCartItemsCost(items, true)

  return (
    <dl className='space-y-3'>
      <div className='flex items-center justify-between'>
        <dt className='text-gray-500 font-semibold'>Subtotal</dt>
        <dd className='text-gray-800'>{formatPrice(subtotal)}</dd>
      </div>
      <span className='block w-full h-px bg-gray-200 rounded-md' />
      <div className='flex items-center justify-between'>
        <dt className='text-orange-500 text-lg font-semibold'>Total</dt>
        <dd className='text-gray-900 text-lg font-semibold'>{formatPrice(total)}</dd>
      </div>
    </dl>
  )
}
