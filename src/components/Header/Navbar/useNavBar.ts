import { useEffect, useState } from "react"

export default function useNavBar() {
  const [isVisible, setIsVisible] = useState(false)

  function handleHamburguerMenu() {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    function handleUrlHashChange() {
      setIsVisible(false)
    }

    window.addEventListener('hashchange', handleUrlHashChange)

    return () => {
      window.removeEventListener('hashchange', handleUrlHashChange)

    }
  }, [])

  return {
    isVisible,
    handleHamburguerMenu,
  }
}
