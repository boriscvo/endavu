import { AssetList, AssetSearch } from "@/components/sections"
import { PageContainer } from "@/components/ui"
import { useAssets } from "./use-assets"

export function Assets() {
  const { assets } = useAssets()
  return (
    <PageContainer>
      <AssetSearch />
      <AssetList />
      <div>{assets?.length}</div>
    </PageContainer>
  )
}
