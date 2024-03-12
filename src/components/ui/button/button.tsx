type Props = {
  children: React.ReactNode
  variant: "primary" | "secondary" | "search-addon" | "close" | "minimal-close"
  onClick: () => void
}

export function Button({ children, variant, onClick }: Props) {
  switch (variant) {
    case "search-addon":
      return (
        <button
          onClick={onClick}
          className="bg-primary text-white p-2 rounded-e-lg border border-blackVariant -ml-[0.5rem]"
        >
          {children}
        </button>
      )
    case "secondary":
      return (
        <button
          onClick={onClick}
          className="bg-secondary p-2 rounded-lg border"
        >
          {children}
        </button>
      )
    case "close": {
      return (
        <button
          onClick={onClick}
          className="bg-white p-2 rounded-lg border-2 border-blackVariant"
        >
          {children}
        </button>
      )
    }
    case "minimal-close": {
      return <button onClick={onClick}>{children}</button>
    }
    case "primary":
    default:
      return (
        <button
          onClick={onClick}
          className="bg-primary text-white p-2 rounded-lg border"
        >
          {children}
        </button>
      )
  }
}
