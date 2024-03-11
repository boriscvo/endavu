import { Logo, Text } from "@/components/ui"
import { AssetSelected } from "@/shared/types"

export function AssetCard({
  name,
  ticker,
  industry,
  lastClosePrice,
  logoUrl,
}: AssetSelected) {
  return (
    <div className="rounded border-2 flex">
      <div>
        <Logo url={logoUrl} size="small" />
      </div>
      <div>
        <Text variant="headerXL">{name}</Text>
        <Text variant="bodyM">{ticker}</Text>
        <Text variant="bodyM">{industry}</Text>
        <Text variant="bodyM">{lastClosePrice}</Text>
      </div>
    </div>
  )
}
