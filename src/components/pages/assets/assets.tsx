import { AssetList, AssetSearch } from "@/components/sections"
import { PageContainer } from "@/components/ui"

export function Assets() {
  return (
    <PageContainer>
      <AssetSearch />
      <AssetList />
    </PageContainer>
  )
}
