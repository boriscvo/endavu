import { AssetsRequest } from "@/shared/types"
import { getQueryParams } from "./get-query-params"

export async function getAssets({ search, pageSize }: AssetsRequest) {
  const queryParams = getQueryParams({ search, pageSize })

  try {
    const assetsResponse = await fetch(
      `http://endavutest.com/assets/${queryParams}`
    )
    const jsonAssetsResponse = await assetsResponse.json()
    return jsonAssetsResponse.assets
  } catch {
    console.log("error")
  }
}
