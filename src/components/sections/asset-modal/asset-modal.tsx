import { Asset } from "@/shared/types"
import { Container, Content, Overlay } from "./elements"

type Props = {
  asset?: Asset
  isOpen: boolean
  handleAssetSelection: (id?: string) => void
}

export function AssetModal({ asset, isOpen, handleAssetSelection }: Props) {
  return (
    <>
      <Container isOpen={isOpen}>
        {asset && (
          <Content asset={asset} handleAssetSelection={handleAssetSelection} />
        )}
      </Container>
      {isOpen && <Overlay onClose={() => handleAssetSelection()} />}
    </>
  )
}
