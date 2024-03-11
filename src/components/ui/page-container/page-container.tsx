type Props = {
  children: React.ReactNode
}
export function PageContainer({ children }: Props) {
  return (
    <div className="mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:max-w-5xl flex flex-col md:flex-row">
      {children}
    </div>
  )
}
