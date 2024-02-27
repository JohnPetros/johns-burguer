import { NavLink } from "../NavLink"
import { NAV_LINKS } from "../../../../constants/nav-links"

export function Nav() {
  return (
    <nav className="z-40 h-full w-full bg-orange-500 md:static md:h-auto md:w-auto">
      <ul className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-4">
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
            icon="burguer"
            title="Make your own burguer"
            href="/custom-burguer"
            isFilled={true}
          />
        </li>
      </ul>
    </nav>
  )
}
