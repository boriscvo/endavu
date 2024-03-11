type Props = {
  children: React.ReactNode
  style?: string
}

export function Pill({ children, style }: Props) {
  return (
    <div
      className={`inline-block uppercase px-1 py-0.5 leading-3 rounded-md border border-blackVariant mr-[0.25rem] ${
        style ? style : "bg-red-300 opacity-0.9"
      }`}
    >
      {children}
    </div>
  )
}
