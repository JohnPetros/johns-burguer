import { type FormEvent, useEffect, useState } from "react"

import type { Product } from "../../../@types/Product"

import type { CartItem } from "../../../@types/CartItem"
import { useCartStore } from "../../../stores/CartStore"

import { CATEGORIES_RADIO_GROUPS } from "./constants/categories-radio-groups"

type Condiment = Record<string, string>

export function useProductPanel(
  product: Product,
  changeToCartPanel: VoidFunction
) {
  const [condiment, setCondiment] = useState<Condiment>({})
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(product.price)

  const { state, actions } = useCartStore()

  const hasCartItem = state.items.some(({ id }) => id === product.id)

  function calculateCartItemPrice(condiment: Condiment) {
    let price = product.price

    for (const { value, radioGroup } of CATEGORIES_RADIO_GROUPS[product.category]) {

      const selectedValue = condiment[value]

      const radio = radioGroup.find(({ value }) => value === selectedValue)

      if (!radio || !radio.description) continue

      const radioPrice = Number(radio.description.replace(/[^0-9.]/g, ''))

      price += radioPrice
    }

    return price
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    if (!hasCartItem) {
      actions.addItem({
        ...product,
        price,
        condiment,
        quantity,
      })

      changeToCartPanel()
      return
    }

    setCartItem({
      price,
      condiment,
      quantity,
    })

    changeToCartPanel()
  }

  function setCartItem(item: Pick<CartItem, 'price' | 'condiment' | 'quantity'>) {
    if (!hasCartItem) return

    const cartItem: CartItem = {
      ...product,
      price: item.price,
      condiment: item.condiment,
      quantity: item.quantity,
    }


    if (hasCartItem) {
      actions.removeItem(cartItem.id)
    }

    actions.addItem(cartItem)
  }

  function handleQuantityChange(newQuantity: number) {
    setQuantity(newQuantity)
    setCartItem({ price, condiment, quantity: newQuantity })
  }

  function handleRadioGroupValueChange(radioGroupName: string, radioGroupValue: string) {
    condiment[radioGroupName] = radioGroupValue

    setCondiment(condiment)

    const price = calculateCartItemPrice(condiment)

    setPrice(price)
    setCartItem({ price, condiment, quantity })
  }

  useEffect(() => {
    function getDefaultCondiment() {
      let condiment = {}

      for (const { value, radioGroup } of CATEGORIES_RADIO_GROUPS[product.category]) {
        condiment = ({ ...condiment, [value]: radioGroup[0].value })
      }

      return condiment
    }

    const currentItem = state.items.find(({ id }) => id === product.id)

    if (!currentItem) {
      const condiment = getDefaultCondiment()
      setCondiment(condiment)
      setQuantity(1)
      setPrice(product.price)
      return
    }

    const price = calculateCartItemPrice(currentItem.condiment)
    setPrice(price)
    setQuantity(currentItem.quantity)
    setCondiment(currentItem.condiment)
  }, [product.id, product.price, CATEGORIES_RADIO_GROUPS[product.category]])

  return {
    condiment: state.items.find(({ id }) => id === product.id)?.condiment,
    price,
    quantity,
    handleFormSubmit,
    handleQuantityChange,
    handleRadioGroupValueChange
  }
}
