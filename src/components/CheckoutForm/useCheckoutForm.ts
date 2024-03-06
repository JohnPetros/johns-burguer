import type { FormEvent } from "react";

export default function useCheckoutForm() {

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return {
    handleSubmit
  }
}
