import { CartModal } from '..'
import { ROUTES } from '../../../utils/constants/routes'
import { formatPrice } from '../../../utils/helpers/formatPrice'
import { Button } from '../../Button'
import { CartSummary } from '../../CartSummary'
import { Icon } from '../../Icon'
import * as Table from '../../Table'

import { useCartPanel } from './useCartPanel'

type CartPanelProps = {
  closeModal: VoidFunction
  changeToProductPanel: VoidFunction
}

export function CartPanel({ closeModal, changeToProductPanel }: CartPanelProps) {
  const {
    items,
    total,
    handleCartCloseModal,
    handleRemoveItemButtonClick,
    handleSubmit
  } = useCartPanel(closeModal, changeToProductPanel)

  return (
    <div>
      <Table.Container>
        <Table.Row type='head'>
          <Table.Header>Qty.</Table.Header>
          <Table.Header>Item</Table.Header>
          <Table.Header>Price</Table.Header>
          <Table.Header>Actions</Table.Header>
        </Table.Row>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Data>{item.quantity}x</Table.Data>
            <Table.Data className='block truncate w-40'>{item.name}</Table.Data>
            <Table.Data>
              {formatPrice(item.price * item.quantity)} <br />
              {item.quantity > 1 && <span className='text-xs text-gray-400'>
                ({formatPrice(item.price)} each)
              </span>}
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
        ))}
      </Table.Container>

      <CartSummary items={items} />

      <form action="" method="post" className="mt-3" onSubmit={handleSubmit}>
        <input type="text" name="cart-items" value='Sim' disabled className='sr-only' />
        <Button type='submit' className="mx-auto">
          {formatPrice(total)} | Finish Order
        </Button>
      </form>
    </div>
  )
}
