import type { Product } from '../../../@types/Product'

import { formatPrice } from '../../../utils/helpers/formatPrice'

import { Button } from '../../Button'
import { NumberInput } from '../../NumberInput'
import { RadioGroup } from '../../RadioGroup'
import { Radio } from '../../RadioGroup/Radio'
import { Separator } from '../../Separator'

import { CATEGORIES_RADIO_GROUPS } from './constants/categories-radio-groups'
import { useProductPanel } from './useProductPanel'

type ProductPanelProps = {
  product: Product
  changeToCartPanel: VoidFunction
}

export function ProductPanel({ product, changeToCartPanel }: ProductPanelProps) {
  const {
    condiment,
    price,
    quantity,
    isOnCartItem,
    handleFormSubmit,
    handleRadioGroupValueChange,
    handleQuantityChange,
  } = useProductPanel(product, changeToCartPanel)

  return (
    <div className='space-y-6'>
      <h3 className='block text-2xl text-gray-800 font-semibold text-center'>
        {product.name}
      </h3>

      <Separator />

      <img
        src={product.image}
        width={500}
        height={300}
        className='bg-gray-500 w-full h-[300px]'
        alt={product.name}
      />

      <p className='text-gray-800 font-medium tracking-wide'>{product.description}</p>
      <form className='space-y-12' onSubmit={handleFormSubmit}>
        {CATEGORIES_RADIO_GROUPS[product.category].map(({ value, title, radioGroup }) => {
          const defaultValue = condiment ? condiment[value] : radioGroup[0].value
          return (
            <RadioGroup
              key={value}
              defaultValue={defaultValue}
              label={title}
              name={value}
              onChange={handleRadioGroupValueChange}
            >
              {radioGroup.map((radio) => (
                <Radio
                  key={radio.value}
                  label={radio.label}
                  value={radio.value}
                  description={radio.description}
                />
              ))}
            </RadioGroup>
          )
        })}

        <NumberInput
          id='quantity'
          label='quantity'
          defualtNumber={quantity}
          onChange={handleQuantityChange}
        />

        <Button type='submit' className='mt-4 mx-auto'>
          {formatPrice(price * quantity)} | {isOnCartItem ? 'Edit' : 'Add'} order
        </Button>
      </form>
    </div>
  )
}
