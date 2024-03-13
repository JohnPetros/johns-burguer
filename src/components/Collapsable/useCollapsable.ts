import type { KeyboardEvent } from 'react'

export function useCollapsable(onChange: VoidFunction) {
  function handleClick() {
    onChange()
  }

  function handleKeyDown({ key }: KeyboardEvent) {
    if (key === 'Enter' || key === ' ') onChange()
  }

  return {
    handleClick,
    handleKeyDown,
  }
}
