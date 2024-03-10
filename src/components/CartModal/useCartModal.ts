import { useRef, useState } from 'react'
import type { ModalRef } from '../Modal/types/ModalRef'

export function useCartModal() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const modalRef = useRef<ModalRef>(null)

  function closeModal() {
    modalRef.current?.close()
  }

  return {
    modalRef,
    activeTabIndex,
    setActiveTabIndex,
    closeModal,
  }
}
