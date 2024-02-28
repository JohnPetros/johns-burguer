import { useState } from "react"

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)

  function close() {
    setIsOpen(false)
  }

  function open() {
    setIsOpen(true)
  }

  return {
    isOpen,
    open,
    close,
  }
}
