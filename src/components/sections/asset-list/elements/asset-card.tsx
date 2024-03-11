import { AssetSelected } from "@/shared/types"

export function AssetCard({
  name,
  ticker,
  industry,
  lastClosePrice,
}: AssetSelected) {
  return (
    <div className="rounded border-2 flex">
      <div>
        <div>{name}</div>
        <div>{ticker}</div>
        <div>{industry}</div>
        <div>{lastClosePrice}</div>
      </div>
    </div>
  )
}
