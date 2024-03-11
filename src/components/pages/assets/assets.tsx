import { AssetList, AssetSearch } from "@/components/sections"
import { PageContainer } from "@/components/ui"
import { useAssets } from "./use-assets"
import { ExtraContent, AssetsContainer } from "./elements"

export function Assets() {
  const { assets } = useAssets()
  return (
    <PageContainer>
      <AssetsContainer>
        <AssetSearch />
        <AssetList list={assets} />
      </AssetsContainer>
      <ExtraContent />
    </PageContainer>
  )
}
