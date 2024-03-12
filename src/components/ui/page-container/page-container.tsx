type Props = {
  children: React.ReactNode
}
export function PageContainer({ children }: Props) {
  return (
    <div
      className={`p-4 sm:p-6 md:p-8 lg:p-10 overflow-x-hidden max-h-screen w-screen`}
    >
      <div className="xl:max-w-5xl xl:mx-auto flex flex-col md:flex-row">
        {children}
      </div>
    </div>
  )
}
