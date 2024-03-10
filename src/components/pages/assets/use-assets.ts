import { Asset, AssetsRequest } from "@/shared/types"
import { getQueryParams } from "@/shared/utils/get-query-params"
import { useCallback, useEffect, useState } from "react"

export function useAssets() {
  const [assets, setAssets] = useState<Asset[] | null>(null)

  const getAssets = useCallback(async ({ search, pageSize }: AssetsRequest) => {
    const queryParams = getQueryParams({ search, pageSize })

    try {
      const assetsResponse = await fetch(
        `http://endavutest.com/assets/${queryParams}`
      )
      const jsonAssetsResponse = await assetsResponse.json()
      setAssets(jsonAssetsResponse.assets)
    } catch {
      console.log("error")
    }
  }, [])

  useEffect(() => {
    getAssets({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    assets,
  }
}
