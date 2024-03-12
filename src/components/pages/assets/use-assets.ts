import { Asset } from "@/shared/types"
import { useCallback, useEffect, useState } from "react"
import { getAssets } from "@/shared/api"

export function useAssets() {
  const [assets, setAssets] = useState<Asset[] | null>(null)
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const [isAssetModalOpen, setIsAssetModalOpen] = useState<boolean>(false)
  const [totalCount, setTotalCount] = useState<number>(0)

  useEffect(() => {
    const fetchAssets = async () => {
      const assetsResponse = await getAssets({})
      setAssets(assetsResponse?.assets || null)
      setTotalCount(assetsResponse?.total || 0)
    }
    fetchAssets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAssetSelection = useCallback(
    (id?: string) => {
      if (!id) {
        setIsAssetModalOpen(false)
        setTimeout(() => setSelectedAsset(null), 400)
        return
      }
      const assetId = assets?.find((asset) => asset.id === id)
      if (assetId) {
        setSelectedAsset(assetId)
        setIsAssetModalOpen(true)
      }
    },
    [assets]
  )

  return {
    assets,
    totalCount,
    selectedAsset,
    isAssetModalOpen,
    handleAssetSelection,
  }
}
