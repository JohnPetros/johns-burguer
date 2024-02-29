import { useState } from "react"

type Tab = 'product' | 'cart'

export function useCartModal() {
  const [activeTab, setActiveTab] = useState<Tab>('product')

  function handleTabsChange(index: number) {
    setActiveTab(index === 0 ? 'product' : 'cart')
  }

  return {
    activeTab,
    handleTabsChange,
  }
}
