type Props = {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  isDisabled?: boolean
  isTrail?: boolean
}

export function Link({ onClick, children, isDisabled, isTrail }: Props) {
  return (
    <button
      onClick={onClick}
      className={`text-blue-500 ${isTrail ? "" : "mr-2"} ${
        isDisabled ? "cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  )
}
