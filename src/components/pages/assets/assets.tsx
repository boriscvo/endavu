import { AssetList, AssetSearch } from "@/components/sections"
import { PageContainer } from "@/components/ui"
import { useAssets } from "./use-assets"
import { ExtraContent, AssetsContainer } from "./elements"
import { AssetModal } from "@/components/sections/asset-modal/asset-modal"

export function Assets() {
  const { assets, selectedAsset, isAssetModalOpen, handleAssetSelection } =
    useAssets()
  return (
    <PageContainer shouldDisableScroll={!!selectedAsset}>
      <AssetsContainer>
        <AssetSearch />
        <AssetList list={assets} handleAssetSelection={handleAssetSelection} />
      </AssetsContainer>
      <ExtraContent />
      <AssetModal
        asset={selectedAsset!}
        isOpen={isAssetModalOpen}
        handleAssetSelection={handleAssetSelection}
      />
    </PageContainer>
  )
}
