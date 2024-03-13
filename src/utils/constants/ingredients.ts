import type { Ingredient } from '../../@types/Ingredient'

import Bacon from '../../assets/images/bacon.svg'
import BottomBun from '../../assets/images/bottom-bun.svg'
import Cheese from '../../assets/images/cheese.svg'
import Chicken from '../../assets/images/chicken.svg'
import GreenMayo from '../../assets/images/green-mayo.svg'
import Hamburguer from '../../assets/images/hamburguer.svg'
import Lettuce from '../../assets/images/lettuce.svg'
import Mayo from '../../assets/images/mayo.svg'
import Onion from '../../assets/images/onion.svg'
import Pickle from '../../assets/images/pickle.svg'
import Tomato from '../../assets/images/tomato.svg'
import TopBun from '../../assets/images/top-bun.svg'

export const INGREDIENTS: Ingredient[] = [
  {
    name: 'Top Bun',
    image: TopBun.src,
    category: 'bread',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 80,
    price: 0.5,
  },
  {
    name: 'Pickle',
    image: Pickle.src,
    category: 'vegetable',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 0,
    price: 0.2,
  },
  {
    name: 'Tomato',
    image: Tomato.src,
    category: 'vegetable',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 0,
    price: 0.2,
  },
  {
    name: 'Onion',
    image: Onion.src,
    category: 'vegetable',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 0,
    price: 0.2,
  },
  {
    name: 'Lettuce',
    image: Lettuce.src,
    category: 'vegetable',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 0,
    price: 0.2,
  },
  {
    name: 'Bacon',
    image: Bacon.src,
    category: 'meat',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 0,
    price: 1.5,
  },
  {
    name: 'Yellow Cheese',
    image: Cheese.src,
    category: 'cheese',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 45,
    price: 0.8,
  },
  {
    name: 'Chicken',
    image: Chicken.src,
    category: 'meat',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 25,
    price: 1.5,
  },
  {
    name: 'Hamburguer',
    image: Hamburguer.src,
    category: 'meat',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 24,
    price: 1.5,
  },
  {
    name: 'Green Mayo',
    image: GreenMayo.src,
    category: 'sauce',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 20,
    price: 0.3,
  },
  {
    name: 'Mayo',
    image: Mayo.src,
    category: 'sauce',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 16,
    price: 0.3, // Assuming a price of $0.3 for sauces
  },
  {
    name: 'Bottom Bun',
    image: BottomBun.src,
    category: 'bread',
    kcal: 249,
    oz: 0.2,
    preparationTime: 0.4,
    position: 0,
    price: 0.5, // Assuming a price of $0.5 for bread
  },
]
