import { Asset, AssetSelected } from "@/shared/types"
import { useEffect, useState } from "react"
import { getAssets } from "@/shared/api"

export function useAssets() {
  const [assets, setAssets] = useState<AssetSelected[] | null>(null)

  const getAssetCards = (assets: Asset[] | null): AssetSelected[] | null => {
    if (!assets) return null
    return assets.map((asset) => ({
      name: asset.name,
      ticker: asset.ticker,
      industry: asset.industry,
      lastClosePrice: asset.lastClosePrice,
      logoUrl: asset.logoUrl,
      sector: asset.sector,
      shortDescription: asset.shortDescription,
    }))
  }

  useEffect(() => {
    const fetchAssets = async () => {
      const assetsResponse = await getAssets({})
      setAssets(getAssetCards(assetsResponse))
    }
    fetchAssets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    assets,
  }
}
