import { Tab } from '@headlessui/react'
import type { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

import type { Product } from '../../@types/Product'

import { Icon } from '../Icon'
import { Modal } from '../Modal'
import { ProductPanel } from './ProductPanel'
import { useCartModal } from './useCartModal'

type CartModalProps = {
  children: ReactNode
  product: Omit<Product, 'description'>
}

export function CartModal({ children: trigger, product }: CartModalProps) {
  const { activeTab, handleTabsChange } = useCartModal()

  const tabClassName =
    'bg-transparent hover:opacity-75 transition-all duration-200 p-2 flex items-center gap-2 justify-center font-semibold rounded-md'

  if (product)
    return (
      <Modal trigger={trigger}>
        <Tab.Group onChange={handleTabsChange}>
          <Tab.List className='grid grid-cols-2 items-center gap-2 mt-3'>
            <Tab
              className={twMerge(
                tabClassName,
                activeTab === 'product' ? 'bg-orange-500 text-gray-100' : 'bg-transparent'
              )}
            >
              <Icon
                value='plate'
                className={activeTab === 'product' ? 'text-gray-100' : ''}
              />
              Product
            </Tab>
            <Tab
              className={twMerge(
                tabClassName,
                activeTab === 'cart' ? 'bg-orange-500 text-gray-100' : 'bg-transparent'
              )}
            >
              <Icon
                value='cart'
                className={activeTab === 'cart' ? 'text-gray-100' : ''}
              />
              Cart
            </Tab>
          </Tab.List>
          <Tab.Panels className='mt-6 pb-3'>
            <Tab.Panel>
              <ProductPanel
                productId={product.id}
                productName={product.name}
                productPrice={product.price}
                category={product.category}
              />
            </Tab.Panel>
            <Tab.Panel>Cart</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Modal>
    )
}
