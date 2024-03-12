import { Asset } from "@/shared/types"
import { useCallback, useEffect, useState } from "react"
import { getAssets } from "@/shared/api"

export function useAssets() {
  const [assets, setAssets] = useState<Asset[] | null>(null)
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const [isAssetModalOpen, setIsAssetModalOpen] = useState<boolean>(false)
  const [totalCount, setTotalCount] = useState<number>(0)
  const [search, setSearch] = useState<string>("")
  const [typing, setTyping] = useState<string>("")

  useEffect(() => {
    if (search.length < 3 && search) {
      return
    }
    const fetchAssets = async () => {
      const assetsResponse = await getAssets({ search })
      setAssets(assetsResponse?.assets || null)
      setTotalCount(assetsResponse?.total || 0)
    }
    fetchAssets()
  }, [search])

  const updateSearch = (search: string) => {
    setTyping(search)
  }

  const handleSearch = () => {
    setSearch(typing)
  }

  const handleReset = () => {
    setSearch("")
    setTyping("")
  }

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
    typing,
    handleAssetSelection,
    updateSearch,
    handleSearch,
    handleReset,
  }
}
