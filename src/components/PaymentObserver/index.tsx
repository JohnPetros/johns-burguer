import { useEffect } from "react"

export function PaymentObserver() {

  useEffect(() => {
    window.addEventListener('urlchangeevent', function (event) {
      console.log("oi")
    })
  }, [])

  return (
    <div>index</div>
  )
}
