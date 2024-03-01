import type { Product } from '../../@types/Product'
import { useCartStore } from '../../stores/CartStore'
import { Button } from '../Button'
import { CartModal } from '../CartModal'

type CartButtonProps = {
  product: Product
}

export function CartButton({ product }: CartButtonProps) {
  const { state } = useCartStore()

  const isInCart = state.items.find(({ id }) => id === product.id)

  return (
    <CartModal product={product}>
      <Button>{isInCart ? 'Edit item on cart' : 'Add to Cart'}</Button>
    </CartModal>
  )
}
