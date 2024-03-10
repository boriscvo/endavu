export type PriceTarget = {
  low: string
  high: string
  median: string
  average: string
}

export type Asset = {
  id: string
  name: string
  assetClass: string
  currency: string
  ticker: string
  logoUrl?: string
  country?: string
  lastClosePrice: number
  industry: string
  sector: string
  companyName: string
  ceo?: string
  shortDescription: string
  employeeCount: number
  marketCap?: number | null
  trailingPE?: number | null
  priceTarget?: PriceTarget | null
  priceToSalesRatio?: number | null
  priceToBookRatio?: number | null
  profitMargin?: number | null
  revenueTTM?: number | null
  revenuePerShareTTM?: number | null
  ebitda?: number | null
  average10DaysVolume: number | null
  average30DaysVolume: number | null
}

export type AssetsRequest = {
  pageSize?: string | null
  startIndex?: string | null
  search?: string | null
}

export type AssetsResponse = {
  assets: Asset[]
  total: number
}
