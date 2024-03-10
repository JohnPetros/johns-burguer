import { formatPrice } from '../../../utils/helpers/formatPrice'
import { Button } from '../../Button'
import { Separator } from '../../Separator'
import { useSummary } from './useSummary'

export function Summary() {
  const { handleFinishOrder } = useSummary()

  return (
    <div className='space-y-3 w-full'>
      <h2>Summary</h2>
      <Separator className='bg-gray-200' />
      <div className='flex items-center justify-between'>
        <strong className='text-xl text-orange-500 font-semibold'>
          {formatPrice(12)}
        </strong>
        <Button onClick={handleFinishOrder}>Finish order</Button>
      </div>
    </div>
  )
}
