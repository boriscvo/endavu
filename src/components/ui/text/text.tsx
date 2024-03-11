type Props = {
  children: string | number
  variant:
    | "header2XL"
    | "headerXL"
    | "headerL"
    | "bodyL"
    | "bodyM"
    | "bodyXS"
    | "bodyXL"
}

export function Text({ children, variant }: Props) {
  switch (variant) {
    case "header2XL":
      return <h3 className="text-2xl font-semibold">{children}</h3>
    case "headerXL":
      return <h3 className="text-xl font-semibold">{children}</h3>
    case "bodyL":
      return <p className="text-lg">{children}</p>
    case "bodyM":
      return <p className="text-base">{children}</p>
    case "bodyXL":
      return <p className="text-xl">{children}</p>
    case "bodyXS":
      return <p className="text-xs">{children}</p>
    default:
      return <p>{children}</p>
  }
}
