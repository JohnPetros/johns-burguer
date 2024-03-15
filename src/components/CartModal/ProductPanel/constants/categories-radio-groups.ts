import type { Category } from '../../../../@types/Category'
import type { RadioProps } from '../../../RadioGroup/Radio/types/RadioProps'

type CategoriesRadioGroup = {
  [key in Category]: {
    title: string
    value: string
    radioGroup: RadioProps[]
  }[]
}

export const CATEGORIES_RADIO_GROUPS: CategoriesRadioGroup = {
  burguer: [
    {
      title: 'Sizes',
      value: 'size',
      radioGroup: [
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
          description: '+$7.00',
        },
        {
          label: 'Monster',
          value: 'monster',
          description: '+$10.00',
        },
      ],
    },
    {
      title: 'Sauce',
      value: 'sauce',
      radioGroup: [
        {
          label: 'No sauce',
          value: 'no',
        },
        {
          label: 'Barbacue Sauce',
          value: 'barbacue',
          description: '+$2.00',
        },
        {
          label: 'Garlic Sauce',
          value: 'garlic',
          description: '+$2.99',
        },
        {
          label: 'Special On the House Sauce',
          value: 'special',
          description: '+$3.99',
        },
      ],
    },
    {
      title: 'French fries',
      value: 'fries',
      radioGroup: [
        {
          label: 'No French Fries',
          value: 'no',
        },
        {
          label: 'Medium Portion',
          value: 'medium',
          description: '+$2.00',
        },
        {
          label: 'Large Portion',
          value: 'large',
          description: '+$2.99',
        },
      ],
    },
  ],
  desert: [],
  drink: [],
  'custom-burguer': [],
}
