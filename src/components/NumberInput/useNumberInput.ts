import { useEffect, useState } from "react"

export function useNumberInput(defualtNumber: number, onChange: (newNumber: number) => void) {
  const [number, setNumber] = useState(defualtNumber)

  function handleNextNumberChange(direction: 'previous' | 'next') {
    let newNumber = number

    if (direction === 'previous' && number > 1) {
      newNumber = number - 1
    } else if (direction === 'next') {
      newNumber = number + 1
    }

    setNumber(newNumber)
    onChange(newNumber)
  }

  useEffect(() => {
    setNumber(defualtNumber)
  }, [defualtNumber])

  return {
    number,
    handleNextNumberChange,
  }
}
