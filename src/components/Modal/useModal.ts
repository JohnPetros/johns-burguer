import { useState } from "react"

export function useModal(onClose: VoidFunction | undefined) {
  const [isOpen, setIsOpen] = useState(false)

  function close() {
    setIsOpen(false)
    if (onClose) onClose()
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
