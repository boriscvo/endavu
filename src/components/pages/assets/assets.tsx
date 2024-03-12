import { AssetList, AssetSearch } from "@/components/sections"
import { PageContainer } from "@/components/ui"
import { useAssets } from "./use-assets"
import { ExtraContent, AssetsContainer } from "./elements"
import { AssetModal } from "@/components/sections/asset-modal/asset-modal"

export function Assets() {
  const {
    assets,
    selectedAsset,
    isAssetModalOpen,
    totalCount,
    typing,
    updateSearch,
    handleAssetSelection,
    handleSearch,
    handleReset,
  } = useAssets()
  return (
    <PageContainer>
      <AssetsContainer>
        <AssetSearch
          typing={typing}
          updateSearch={updateSearch}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
        <AssetList
          totalCount={totalCount}
          list={assets}
          handleAssetSelection={handleAssetSelection}
        />
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
