type Props = {
  children: React.ReactNode
}

export function AssetsContainer({ children }: Props) {
  return <div className="w-full md:w-3/5 md:mr-2">{children}</div>
}
