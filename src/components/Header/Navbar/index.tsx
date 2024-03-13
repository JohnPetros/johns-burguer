import { List, X } from '@phosphor-icons/react'
import { AnimatePresence, type Variants, motion } from 'framer-motion'
import { Nav } from './Nav'
import useNavBar from './useNavBar'

const navAnimations: Variants = {
  down: {
    y: '100vh',
  },
  up: {
    y: 0,
  },
}

export function NavBar() {
  const { isVisible, handleHamburguerMenu } = useNavBar()

  return (
    <>
      <button
        type='button'
        className='z-50 block md:hidden'
        onClick={handleHamburguerMenu}
      >
        {isVisible ? (
          <X size={32} className='text-white' weight='bold' />
        ) : (
          <List size={32} className='text-white' weight='bold' />
        )}
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={navAnimations}
            initial='down'
            animate={isVisible ? 'up' : 'down'}
            transition={{ type: 'tween' }}
            exit='down'
            className='absolute inset-0 z-40 h-screen w-screen md:hidden'
          >
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>
      <div className='hidden md:block'>
        <Nav />
      </div>
    </>
  )
}
