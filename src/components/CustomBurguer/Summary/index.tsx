import { formatPrice } from '../../../utils/helpers/formatPrice'
import { Alert } from '../../Alert'
import { Button } from '../../Button'
import { FoodInfo } from '../../FoodInfo'
import { Separator } from '../../Separator'
import { useSummary } from './useSummary'

type SummaryProps = {
  totalCost: number
}

export function Summary({ totalCost }: SummaryProps) {
  const { foodInfo, handleFinishOrder } = useSummary()

  return (
    <div className='space-y-6 w-full max-w-[32rem] '>
      <h2 className='text-lg'>Summary</h2>
      <Separator className='bg-gray-200' />
      <div className='flex items-center justify-between'>
        <strong className='text-2xl text-orange-500 font-semibold'>
          {formatPrice(totalCost)}
        </strong>
        <Alert
          message='Are you sure this is how you like it?'
          onConfirm={handleFinishOrder}
        >
          <Button>Finish order</Button>
        </Alert>
      </div>

      <FoodInfo
        kcal={foodInfo.kcal}
        oz={foodInfo.oz}
        preparationTime={foodInfo.preparationTime}
      />
    </div>
  )
}
