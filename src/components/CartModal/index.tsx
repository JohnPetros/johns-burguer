import { Tab } from '@headlessui/react'
import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import type { Product } from '../../@types/Product'

import { useCartStore } from '../../stores/CartStore'

import { Icon } from '../Icon'
import { Modal } from '../Modal'
import { CartPanel } from './CartPanel'
import { ProductPanel } from './ProductPanel'
import { useCartModal } from './useCartModal'

type CartModalProps = {
  children: ReactNode
  product: Product
  onClose?: VoidFunction
}

export function CartModal({ children: trigger, product, onClose }: CartModalProps) {
  const { activeTabIndex, modalRef, closeModal, setActiveTabIndex } = useCartModal()

  const { state } = useCartStore()

  const isCartTabDisabled = state.items.length === 0

  const tabClassName =
    'bg-transparent hover:opacity-75 transition-all duration-200 p-2 flex items-center gap-2 justify-center font-semibold rounded-md'

  if (product)
    return (
      <Modal
        ref={modalRef}
        trigger={trigger}
        onClose={onClose}
        className='min-h-[90vh] max-h-[90vh]'
      >
        <Tab.Group selectedIndex={activeTabIndex} onChange={setActiveTabIndex}>
          <Tab.List className='grid grid-cols-2 items-center gap-2 mt-3'>
            <Tab
              className={twMerge(
                tabClassName,
                activeTabIndex === 0 ? 'bg-orange-700 text-gray-100' : 'bg-transparent'
              )}
            >
              <Icon
                value='plate'
                className={activeTabIndex === 0 ? 'text-gray-100' : ''}
              />
              Product
            </Tab>
            <Tab
              disabled={isCartTabDisabled}
              className={twMerge(
                tabClassName,
                activeTabIndex === 1 ? 'bg-orange-700 text-gray-100' : 'bg-transparent',
                isCartTabDisabled ? 'opacity-10 pointer-events-none' : ''
              )}
            >
              <Icon
                value='cart'
                className={activeTabIndex === 1 ? 'text-gray-100' : ''}
              />
              Cart
            </Tab>
          </Tab.List>
          <Tab.Panels className='mt-6 pb-3'>
            <Tab.Panel>
              <ProductPanel
                product={product}
                changeToCartPanel={() => setActiveTabIndex(1)}
              />
            </Tab.Panel>
            <Tab.Panel>
              <CartPanel
                closeModal={closeModal}
                changeToProductPanel={() => setActiveTabIndex(0)}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Modal>
    )
}
