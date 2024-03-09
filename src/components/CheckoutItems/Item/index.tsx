import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { Modal } from '../../Modal'
import { NumberInput } from '../../NumberInput'

import { formatPrice } from '../../../utils/helpers/formatPrice'

import { useItem } from './useItem'

type ItemProps = {
  id: string
  name: string
  image: string
  quantity: number
  price: number
}

export function Item({ id, name, image, quantity, price }: ItemProps) {
  const { handleNumberInputChange, handleRemoveItemButtonPress } = useItem(id)

  return (
    <div className='flex items-center'>
      <div className='flex flex-1 items-center gap-3'>
        <img src={image} width={140} height={140} alt={name} className='rounded-md' />
        <div>
          <span className='text-gray-800 font-semibold'>{name}</span>
          <NumberInput
            id={`${name}-item-quantity`}
            label='Qty.'
            defualtNumber={quantity}
            onChange={handleNumberInputChange}
          />
        </div>
      </div>
      <span className='block text-gray-800 font-semibold'>{formatPrice(price)}</span>
      <Modal
        title='Attention!'
        description='Are sure to remove this item?'
        onAction={handleRemoveItemButtonPress}
        trigger={
          <Button className='top-1 right-1 ml-6 w-6 h-6 grid place-content-center'>
            <Icon value='trash' size={16} />
          </Button>
        }
      />
    </div>
  )
}
