import { CartModal } from '..'
import { ROUTES } from '../../../utils/constants/routes'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import * as Table from '../../Table'
import { useCartPanel } from './useCartPanel'

type CartPanelProps = {
  closeModal: VoidFunction
  changeToProductPanel: VoidFunction
}

export function CartPanel({ closeModal, changeToProductPanel }: CartPanelProps) {
  const { items, total, handleCartCloseModal, handleRemoveItemButtonClick } =
    useCartPanel(closeModal, changeToProductPanel)

  return (
    <div>
      <Table.Container>
        <Table.Row>
          <Table.Header>Qty.</Table.Header>
          <Table.Header>Item</Table.Header>
          <Table.Header>Price</Table.Header>
          <Table.Header>Actions</Table.Header>
        </Table.Row>
        {items.map((item) => (
          <>
            <Table.Row>
              <Table.Data>{item.quantity}x</Table.Data>
              <Table.Data className='block truncate w-40'>{item.name}</Table.Data>
              <Table.Data>
                ${(item.price * item.quantity).toFixed(2)} <br />
                <span className='text-xs text-gray-400'>
                  (${item.price.toFixed(2)} each)
                </span>
              </Table.Data>
              <Table.Data className='flex items-center justify-center gap-3'>
                <Button
                  type='button'
                  className='p-2 bg-orange-500 text-gray-100 grid place-content-center rounded-md w-6 h-6'
                  onClick={() => handleRemoveItemButtonClick(item.id)}
                >
                  <Icon size={16} value='close' />
                </Button>
                <CartModal onClose={handleCartCloseModal} product={item}>
                  <Button
                    type='button'
                    className='p-2 bg-orange-500 text-gray-100 grid place-content-center rounded-md w-6 h-6'
                  >
                    <Icon size={16} value='edit' />
                  </Button>
                </CartModal>
              </Table.Data>
            </Table.Row>
          </>
        ))}
      </Table.Container>
      <a
        href={ROUTES.checkout}
        className='block w-max mx-auto mt-6 bg-orange-500 py-2 px-3 rounded-md text-gray-100 font-semibold'
      >
        ${total.toFixed(2)} | Finish Order
      </a>
    </div>
  )
}
