import { Asset, AssetsRequest } from "@/shared/types"
import ASSETS from "./assets.json"

const DEFAULT_PAGE_SIZE = 1

export function resolver({ pageSize, startIndex, search }: AssetsRequest) {
  const pageSizeAdj = Number(pageSize || DEFAULT_PAGE_SIZE)
  const startIndexAdj = Number(startIndex || 0)
  const data: Asset[] = ASSETS
  const searchAdj = search?.toLowerCase().replace(" ", "")

  if (!searchAdj) {
    return {
      assets: data.slice(startIndexAdj, startIndexAdj + pageSizeAdj),
      total: data.length,
    }
  }

  const dataSearchFiltered = data.filter((asset) =>
    asset.name.toLowerCase().includes(searchAdj)
  )

  return {
    assets: dataSearchFiltered.slice(
      startIndexAdj,
      startIndexAdj + pageSizeAdj
    ),
    total: dataSearchFiltered.length,
  }
}
