type Props = {
  totalCount: number
}

export function Overview({ totalCount }: Props) {
  return (
    <div className="flex mb-4 text-2xl">
      <span className="font-semibold">Total Available: </span>
      {totalCount}
    </div>
  )
}
