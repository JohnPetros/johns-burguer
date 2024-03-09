import { useCartStore } from '../../stores/CartStore'
import { CartSummary } from '../CartSummary'
import { Skeleton } from '../Skeleton'
import { Item } from './Item'

export function CheckoutItems() {
  const { state } = useCartStore()

  return (
    <>
      {!state.items.length ? (
        <Skeleton className='space-y-6' height={16} bonesCount={3} />
      ) : (
        <>
          <ul className='space-y-3'>
            {state.items.map((item) => (
              <li key={item.id} className='space-y-3'>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  quantity={item.quantity}
                  price={item.price}
                />
                <span className='block w-full h-px bg-gray-200 rounded-md' />
              </li>
            ))}
          </ul>
          <div className='mt-6'>
            <CartSummary items={state.items} />
          </div>
        </>
      )}
    </>
  )
}
