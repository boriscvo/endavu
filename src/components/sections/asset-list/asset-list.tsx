import { AssetSelected } from "@/shared/types"
import { Container, NoResults, AssetCard } from "./elements"

type Props = {
  list: AssetSelected[] | null
}

export function AssetList({ list }: Props) {
  if (!list?.length) return <NoResults />
  return (
    <Container>
      {list?.map((asset, index) => (
        <AssetCard key={index} {...asset} />
      ))}
    </Container>
  )
}
