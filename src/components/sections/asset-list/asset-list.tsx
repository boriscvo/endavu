import { AssetSelected } from "@/shared/types"
import { Container, NoResults, AssetCard, Overview } from "./elements"

type Props = {
  list: AssetSelected[] | null
  totalCount: number
  handleAssetSelection: (id: string) => void
}

export function AssetList({ totalCount, list, handleAssetSelection }: Props) {
  if (!list?.length) return <NoResults />
  return (
    <Container>
      <Overview totalCount={totalCount} />
      {list?.map((asset, index) => (
        <AssetCard
          key={index}
          asset={asset}
          handleAssetSelection={handleAssetSelection}
        />
      ))}
    </Container>
  )
}
