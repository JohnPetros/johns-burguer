import { Icon } from '../Icon'

type FoodInfoProps = {
  kcal: number
  oz: number
  preparationTime: number
}

export function FoodInfo({ preparationTime, oz, kcal }: FoodInfoProps) {
  return (
    <dl className='flex items-center justify-between p-4 bg-gray-200 rounded-lg'>
      <div className='flex items-center gap-2'>
        <div className='rounded-full w-8 h-8 grid place-content-center bg-blue-600'>
          <Icon className='text-gray-100' size={18} value='clock' />
        </div>
        <div>
          <dt className='sr-only'>Preparation time</dt>
          <dd>{preparationTime.toFixed(1)} min</dd>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <div className='rounded-full w-8 h-8 grid place-content-center bg-green-600'>
          <Icon className='text-gray-100' size={18} value='balance' />
        </div>
        <dt className='sr-only'>Onces</dt>
        <dd>{oz.toFixed(1)} oz</dd>
      </div>

      <div className='flex items-center gap-2'>
        <div className='rounded-full w-8 h-8 grid place-content-center bg-red-600'>
          <Icon className='text-gray-100' size={18} value='fire' />
        </div>
        <div>
          <dt className='sr-only'>Kilocalories</dt>
          <dd>{kcal.toFixed(1)} kcal</dd>
        </div>
      </div>
    </dl>
  )
}
