import { useState } from "react"

export function useModal(onAction: VoidFunction | undefined, onClose: VoidFunction | undefined) {
  const [isOpen, setIsOpen] = useState(false)

  function close() {
    setIsOpen(false)
    if (onClose) onClose()
  }

  function open() {
    setIsOpen(true)
  }

  function handleActionClick() {
    close()
    if (onAction) onAction()
  }

  return {
    isOpen,
    open,
    close,
    handleActionClick,
  }
}
