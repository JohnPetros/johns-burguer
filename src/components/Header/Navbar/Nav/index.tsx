import { NAV_LINKS } from '../../../../utils/constants/nav-links'
import { NavLink } from './NavLink'

export function Nav() {
  return (
    <nav
      role='menu'
      className='z-40 h-full w-full bg-orange-700 md:static md:h-auto md:w-auto pt-24 md:pt-0'
    >
      <ul className='flex flex-col items-center justify-center gap-4 lg:gap-12 md:flex-row'>
        {NAV_LINKS.map((navLink) => (
          <li key={navLink.title}>
            <NavLink
              icon={navLink.icon}
              title={navLink.title}
              href={navLink.href}
              isFilled={false}
            />
          </li>
        ))}
        <li>
          <NavLink
            icon='burguer'
            title='Make your own burguer'
            href='/burguer-maker'
            isFilled={true}
          />
        </li>
      </ul>
    </nav>
  )
}
