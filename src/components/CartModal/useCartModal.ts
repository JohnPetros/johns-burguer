import { useState } from "react"

export function useCartModal() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return {
    activeTabIndex,
    setActiveTabIndex,
  }
}
