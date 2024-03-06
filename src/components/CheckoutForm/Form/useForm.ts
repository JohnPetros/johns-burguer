import type { FormEvent } from "react";

export function useForm() {

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return {
    handleSubmit
  }
}