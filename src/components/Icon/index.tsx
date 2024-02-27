import { House, Info, Notebook, Phone, WhatsappLogo, Hamburger, X, Envelope, InstagramLogo, FacebookLogo, MappingPin, Clock } from "@phosphor-icons/react/dist/ssr"
import type { ClassNameValue } from "tailwind-merge"
import type { IconValue } from "./types/IconValue"

type IconProps = {
  value: IconValue
  className?: ClassNameValue
  weight?: 'normal' | 'bold'
  width?: number
  height?: number
}

export function Icon({ value, className, weight = 'bold', width = 24, height = 24 }: IconProps) {
  const phosphorClassName = String(className)
  const  phosphorWeight = weight === 'normal' ? 'regular' : 'bold'

  switch (value) {
    case 'home':
      return <House className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'close':
      return <X className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'notebook':
      return <Notebook className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'about':
      return <Info className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'burguer':
      return <Hamburger className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'whatsapp':
      return <WhatsappLogo className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'phone':
      return <Phone className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'mail':
      return <Envelope className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'instagram':
      return <InstagramLogo className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'facebook':
      return <FacebookLogo className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'pin':
      return <MappingPin className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    case 'clock':
      return <Clock className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
    default:
      return <House className={phosphorClassName} width={width} height={height} weight={phosphorWeight} />
  }
}
