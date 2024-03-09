import { useElements, useStripe } from '@stripe/react-stripe-js'
import { type FormEvent, useState } from 'react'

export function useStripeForm(onConfirmPayment: VoidFunction) {
  const stripe = useStripe()
  const elements = useElements()

  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent) {
    if (!stripe || !elements) return

    event.preventDefault()

    setIsLoading(true)

    try {
      const paymentResult = await stripe?.confirmPayment({
        elements,
        redirect: 'if_required',
      })

      if (!paymentResult?.error) {
        onConfirmPayment()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    handleSubmit,
    isLoading,
  }
}
