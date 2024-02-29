import { type FormEvent, useEffect, useState } from "react"
import { useLocalStorage } from 'usehooks-ts'

import type { Category } from "../../../@types/Category"
import type { Product } from "../../../@types/Product"

import { useCartStore } from "../../../stores/CartStore"
import type { CartItem } from "../../../stores/CartStore/types/CartItem"
import { CATEGORIES_RADIO_GROUPS } from "./constants/categories-radio-groups"

import { STORAGE } from "../../../utils/constants/storage"

type Condiment = Record<string, string>

export function useProductPanel(product: Pick<Product, 'id' | 'name' | 'price'>, category: Category) {
  const [condiment, setCondiment] = useState<Condiment>({})
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(product.price)

  const [storagedCondiment, setStoragedCondiment] = useLocalStorage(STORAGE.keys.activeProductOnModal, JSON.stringify({ ...condiment, quantity }))

  const { state, actions } = useCartStore()

  function calculateCartItemPrice(condiment: Condiment) {
    let price = product.price

    for (const { value, radioGroup } of CATEGORIES_RADIO_GROUPS[category]) {

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

    const cartItem: CartItem = {
      ...product,
      quantity: 1
    }

    const isRepeatedItem = state.items.some(({ id }) => id === cartItem.id)

    if (isRepeatedItem) {
      actions.removeItem(cartItem.id)
    }

    actions.addItem(cartItem)
  }

  function storeProductData(condiment: Condiment, quantity: number) {
    setStoragedCondiment(JSON.stringify({ ...condiment, quantity }))
  }

  function handleQuantityChange(newQuantity: number) {
    setQuantity(newQuantity)
    storeProductData(condiment, newQuantity)
  }

  function handleRadioGroupValueChange(radioGroupName: string, radioGroupValue: string) {
    condiment[radioGroupName] = radioGroupValue

    setCondiment(condiment)
    storeProductData(condiment, quantity)

    const price = calculateCartItemPrice(condiment)
    console.log({ price })
    setPrice(price)
  }

  useEffect(() => {
    function getDefaultCondiment() {
      let condiment = {}

      for (const { value, radioGroup } of CATEGORIES_RADIO_GROUPS[category]) {
        condiment = ({ ...condiment, [value]: radioGroup[0].value })
      }

      return condiment
    }

    const condiment = getDefaultCondiment()
    setCondiment(condiment)
  }, [CATEGORIES_RADIO_GROUPS[category]])

  useEffect(() => {
    const condiment = JSON.parse(storagedCondiment) as Condiment
    console.log({ condiment })
    setCondiment(condiment)
    const price = calculateCartItemPrice(condiment)
    setPrice(price)
  }, [storagedCondiment])

  return {
    condiment: JSON.parse(storagedCondiment),
    price,
    quantity,
    handleFormSubmit,
    handleQuantityChange,
    handleRadioGroupValueChange
  }
}
