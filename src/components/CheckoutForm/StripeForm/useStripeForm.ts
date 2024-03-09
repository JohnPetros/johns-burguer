import { useElements, useStripe } from '@stripe/react-stripe-js'
import { type FormEvent, useState } from 'react'

export function useStripeForm(onConfirmPayment: (customer: Customer) => void) {
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

      console.log(paymentResult.paymentIntent)

      if (!paymentResult?.error) {
        onConfirmPayment({ name: 'John Petros' })
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
