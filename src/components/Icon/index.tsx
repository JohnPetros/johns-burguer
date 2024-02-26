import { House, Info, Notebook, Phone, WhatsappLogo, Hamburger, X } from "@phosphor-icons/react/dist/ssr"
import type { ClassNameValue } from "tailwind-merge"
import type { IconValue } from "./types/IconValue"

type IconProps = {
  value: IconValue
  className?: ClassNameValue
  weight?: 'normal' | 'bold'
}

export function Icon({ value, className, weight = 'bold' }: IconProps) {
  const phosphorClassName = String(className)
  const  phosphorWeight = weight === 'normal' ? 'regular' : 'bold'

  switch (value) {
    case 'home':
      return <House className={phosphorClassName} weight={phosphorWeight} />
    case 'close':
        return <X className={phosphorClassName} weight={phosphorWeight} />
    case 'notebook':
        return <Notebook className={phosphorClassName} weight={phosphorWeight} />
    case 'about':
          return <Info className={phosphorClassName} weight={phosphorWeight} />
    case 'burguer':
            return <Hamburger className={phosphorClassName} weight={phosphorWeight} />
    case 'whatsapp':
          return <WhatsappLogo className={phosphorClassName} weight={phosphorWeight} />
    case 'whatsapp':
            return <Phone className={phosphorClassName} weight={phosphorWeight} />
    default:
      return <House className={phosphorClassName} weight={phosphorWeight} />
  }
}
