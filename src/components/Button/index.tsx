import type { ReactNode } from 'react'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit'
  className?: ClassNameValue
  onClick?: VoidFunction
  label?: string
}

export function Button({
  children,
  type = 'button',
  label = '',
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={twMerge(
        'flex items-center justify-center gap-2 rounded-md bg-orange-500 px-3 py-2 text-sm text-white hover:ring-2 focus-visible:ring-yellow-400 hover:ring-yellow-400 transition-shadow font-semibold',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

/**
 * 
<li class='link-card'>
  <a href={href}>
    <h2>
      {title}
      <span>&rarr;</span>
    </h2>
    <p>
      {body}
    </p>
  </a>
</li>

<style>
  .link-card {
    list-style: none;
    display: flex;
    padding: 1px;
    background-color: #23262d;
    background-image: none;
    background-size: 400%;
    border-radius: 7px;
    background-position: 100%;
    transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
  .link-card > a {
    width: 100%;
    text-decoration: none;
    line-height: 1.4;
    padding: calc(1.5rem - 1px);
    border-radius: 8px;
    color: white;
    background-color: #23262d;
    opacity: 0.8;
  }
  h2 {
    margin: 0;
    font-size: 1.25rem;
    transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  p {
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
  .link-card:is(:hover, :focus-within) {
    background-position: 0;
    background-image: var(--accent-gradient);
  }
  .link-card:is(:hover, :focus-within) h2 {
    color: rgb(var(--accent-light));
  }
</style>
 */
