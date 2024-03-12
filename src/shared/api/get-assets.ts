import { AssetsRequest, AssetsResponse } from "@/shared/types"
import { getQueryParams } from "./get-query-params"

export async function getAssets({
  search,
  pageSize,
}: AssetsRequest): Promise<AssetsResponse | undefined> {
  const queryParams = getQueryParams({ search, pageSize })

  try {
    const assetsResponse = await fetch(
      `http://endavutest.com/assets/${queryParams}`
    )
    const jsonAssetsResponse = await assetsResponse.json()
    return {
      assets: jsonAssetsResponse.assets,
      total: jsonAssetsResponse.total,
    }
  } catch {
    console.log("error")
  }
}
