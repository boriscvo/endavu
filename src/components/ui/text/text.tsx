type Props = {
  children: string | number
  variant:
    | "header3XL"
    | "header2XL"
    | "headerXL"
    | "headerL"
    | "bodyL"
    | "bodyM"
    | "bodyXS"
    | "bodySM"
    | "bodyXL"
    | "body2XL"
    | "inlineXS"
}

export function Text({ children, variant }: Props) {
  switch (variant) {
    case "header3XL":
      return <h3 className="text-3xl font-bold">{children}</h3>
    case "header2XL":
      return <h3 className="text-2xl font-bold">{children}</h3>
    case "headerXL":
      return <h3 className="text-xl font-semibold">{children}</h3>
    case "bodyL":
      return <p className="text-lg">{children}</p>
    case "bodyM":
      return <p className="text-base">{children}</p>
    case "bodyXL":
      return <p className="text-xl font-semibold">{children}</p>
    case "body2XL":
      return <span className="text-2xl font-semibold">{children}</span>
    case "bodySM":
      return <p className="text-sm">{children}</p>
    case "bodyXS":
      return <p className="text-xs">{children}</p>
    case "inlineXS":
      return <span className="text-xs">{children}</span>
    default:
      return <p>{children}</p>
  }
}
