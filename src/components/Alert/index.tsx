import type { ReactNode } from "react"
import { Modal } from "../Modal"

type AlertProps = {
  message: string
  children: ReactNode
  onConfirm: VoidFunction
}

export function Alert({ children, message, onConfirm }: AlertProps) {
  return (
    <Modal title="Attention!" trigger={children} description="" />
  )
}
