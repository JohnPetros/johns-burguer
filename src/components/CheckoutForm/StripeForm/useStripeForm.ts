import { useElements, useStripe } from '@stripe/react-stripe-js'
import type { StripeLinkAuthenticationElementChangeEvent } from '@stripe/stripe-js'
import { type FormEvent, useState, useRef } from 'react'

export function useStripeForm(onConfirmPayment: (customer: Customer) => void) {
  const stripe = useStripe()
  const elements = useElements()

  const [isLoading, setIsLoading] = useState(false)

  const emailRef = useRef('')

  async function handleSubmit(event: FormEvent) {
    if (!stripe || !elements) return

    event.preventDefault()

    setIsLoading(true)

    console.log(emailRef.current)

    try {
      const paymentResult = await stripe?.confirmPayment({
        elements,
        redirect: 'if_required',
        confirmParams: {
          receipt_email: emailRef.current,
        },
      })

      console.log(paymentResult.paymentIntent)

      if (!paymentResult?.error) {
        onConfirmPayment({ email: '', name: 'John Petros' })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleEmailChange(event: StripeLinkAuthenticationElementChangeEvent) {
    if (event.complete) {
      emailRef.current = event.value.email
    }
  }

  return {
    handleSubmit,
    handleEmailChange,
    isLoading,
  }
}
