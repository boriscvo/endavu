type Props = {
  children: React.ReactNode
}
export function PageContainer({ children }: Props) {
  return (
    <div
      className={`p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row overflow-x-hidden max-h-screen w-screen`}
    >
      {children}
    </div>
  )
}
