import { type Variants, motion } from 'framer-motion'

type Ingredient = {
  name: string
  image: string
  position: number
  index: number
}

export function Ingredient({ name, image, position, index }: Ingredient) {
  const ingredientVariants: Variants = {
    enter: {
      x: [-400, 0, 0],
      height: [0, 0, position],
      opacity: [0, 1, 1],
      transition: {
        duration: 1,
        times: [0, 0.5, 1],
      },
    },
    leave: {
      x: 800,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <motion.div
      key={name}
      variants={ingredientVariants}
      animate='enter'
      exit='leave'
      style={{ zIndex: index }}
    >
      <img src={image} width={220} height={220} alt={name} loading='eager' />
    </motion.div>
  )
}
