type Props = {
  isOpen: boolean
  children: React.ReactNode
}

export function Container({ isOpen, children }: Props) {
  return (
    <div
      className={`absolute top-0 z-20 h-full py-4 bg-white overflow-auto transition-all duration-500 ${
        isOpen ? "right-0" : "md:-right-[32rem]"
      } w-screen md:w-[32rem] ${
        isOpen ? "" : "-translate-x-full md:translate-x-0"
      }`}
    >
      {children}
    </div>
  )
}
