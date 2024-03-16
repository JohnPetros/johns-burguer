import { useState } from 'react'
import { useEventListener } from 'usehooks-ts'
import { ROUTES } from '../../../utils/constants/routes'

export default function useNavBar() {
  const [isVisible, setIsVisible] = useState(false)

  function handleHamburguerMenu() {
    setIsVisible(!isVisible)
  }

  function handleUrlHashChange() {
    setIsVisible(false)

    setTimeout(() => {
      history.pushState({}, '', ROUTES.home)
    }, 1000)
  }

  useEventListener('hashchange', handleUrlHashChange)

  return {
    isVisible,
    handleHamburguerMenu,
  }
}
