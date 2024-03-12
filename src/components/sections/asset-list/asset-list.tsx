import { AssetSelected } from "@/shared/types"
import { Container, NoResults, AssetCard } from "./elements"

type Props = {
  list: AssetSelected[] | null
  handleAssetSelection: (id: string) => void
}

export function AssetList({ list, handleAssetSelection }: Props) {
  if (!list?.length) return <NoResults />
  return (
    <Container>
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
