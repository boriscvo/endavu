type Props = {
  href: string
  children: React.ReactNode
  isTrail?: boolean
}

export function Link({ href, children, isTrail }: Props) {
  return (
    <a href={href} className={`text-blue-500 ${isTrail ? "" : "mr-2"}`}>
      {children}
    </a>
  )
}
