import type { Product } from '../../@types/Product'
import { Button } from '../Button'
import { CartModal } from '../CartModal'

type CartButtonProps = {
  product: Product
}

export function CartButton({ product }: CartButtonProps) {
  return (
    <CartModal product={product}>
      <Button>Add to Cart</Button>
    </CartModal>
  )
}
