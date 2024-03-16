type HeaderProps = {
  children: string
}

export function Header({ children }: HeaderProps) {
  return (
    <th className='bg-gray-900 text-orange-500 font-semibold uppercase text-center p-2'>
      {children}
    </th>
  )
}
