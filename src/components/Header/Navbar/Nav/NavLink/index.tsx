import { twMerge } from 'tailwind-merge'
import { Icon } from '../../../../Icon'
import type { IconValue } from '../../../../Icon/types/IconValue'

type NavLinkProps = {
  title: string
  href: string
  icon: string
  isFilled: boolean
}

export function NavLink({ title, icon, href, isFilled = false }: NavLinkProps) {
  return (
    <a
      href={href}
      className={twMerge(
        'flex items-center justify-center gap-2 rounded-md px-3 py-3 font-bold text-white text-md lg:text-base duration-200',
        isFilled
          ? 'bg-zinc-900 transition-shadow hover:shadow-md hover:shadow-yellow-400'
          : 'bg-orange-700 transition-colors hover:bg-zinc-900'
      )}
    >
      <Icon value={icon as IconValue} />
      {title}
    </a>
  )
}
