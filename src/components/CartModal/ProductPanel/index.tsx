import type { Category } from '../../../@types/Category'
import { Button } from '../../Button'
import { NumberInput } from '../../NumberInput'
import { RadioGroup } from '../../RadioGroup'
import { Radio } from '../../RadioGroup/Radio'
import { CATEGORIES_RADIO_GROUPS } from './constants/categories-radio-groups'
import { useProductPanel } from './useProductPanel'

type ProductPanelProps = {
  productId: string
  productName: string
  productImage: string
  productPrice: number
  category: Category
  changeToCartPanel: VoidFunction
}

export function ProductPanel({
  productId,
  productName,
  productPrice,
  productImage,
  category,
  changeToCartPanel,
}: ProductPanelProps) {
  const {
    condiment,
    price,
    quantity,
    handleFormSubmit,
    handleRadioGroupValueChange,
    handleQuantityChange,
  } = useProductPanel(
    {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
    },
    category,
    changeToCartPanel
  )

  return (
    <form className='space-y-12' onSubmit={handleFormSubmit}>
      {CATEGORIES_RADIO_GROUPS[category].map(({ value, title, radioGroup }) => {
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
        ${(price * quantity).toFixed(2)} | Add order
      </Button>
    </form>
  )
}
