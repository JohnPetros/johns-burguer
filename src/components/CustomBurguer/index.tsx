import { AnimatePresence } from 'framer-motion'

import TopBun from '../../assets/images/top-bun.svg'

import { INGREDIENTS } from '../../utils/constants/ingredients'

import { Ingredient } from './Ingredient'
import { Summary } from './Summary'
import { useCustomBurguer } from './useCustomBurguer'

import { type Variants, motion } from 'framer-motion'

export function CustomBurguer() {
  const { ingredients, isCompleted, totalCost } = useCustomBurguer()

  const addedIngredients = INGREDIENTS.filter(({ name }) => ingredients.includes(name))

  const topBunVariants: Variants = {
    up: {
      y: -800,
    },
    down: {
      y: 4 * addedIngredients.length,
      zIndex: 1000,
      transition: {
        duration: 1.5,
      },
    },
  }

  return (
    <div className='flex flex-col items-center gap-16 w-full'>
      <div className='w-full h-48 flex flex-col items-center justify-end'>
        {isCompleted && (
          <motion.div variants={topBunVariants} initial='up' animate='down'>
            <img
              src={TopBun.src}
              width={220}
              height={220}
              alt='Top ban'
              loading='eager'
            />
          </motion.div>
        )}
        <AnimatePresence initial={true}>
          {addedIngredients.map((ingredient, index) => {
            return (
              <Ingredient
                key={ingredient.name}
                position={ingredient.position}
                index={ingredients.length - index + 1}
                name={ingredient.name}
                image={ingredient.image}
              />
            )
          })}
        </AnimatePresence>
      </div>

      <Summary totalCost={totalCost} />
    </div>
  )
}
