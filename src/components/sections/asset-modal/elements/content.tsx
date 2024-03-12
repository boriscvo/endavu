import { Asset } from "@/shared/types"
import { Icon, Logo, Button } from "@/components/ui"

type Props = {
  asset: Asset
  handleAssetSelection: (id?: string) => void
}

export function Content({ asset, handleAssetSelection }: Props) {
  const {
    name,
    ticker,
    sector,
    ceo,
    logoUrl,
    country,
    industry,
    shortDescription,
    lastClosePrice,
    marketCap,
    trailingPE,
    priceToSalesRatio,
    priceToBookRatio,
    profitMargin,
  } = asset

  return (
    <>
      <div className="flex border-b border-gray pb-2 px-4 items-center">
        <div className="shrink-0">
          <Logo url={logoUrl} />
        </div>
        <h2 className="text-2xl font-bold pl-2 pr-2">{name}</h2>
        <div className="ml-auto">
          <Button variant="close" onClick={() => handleAssetSelection()}>
            <Icon variant="close" />
          </Button>
        </div>
      </div>
      <div className="border-b border-gray py-4 px-6">
        <h3 className="font-semibold text-xl mb-4">Overview</h3>
        <p className="mb-1">
          <span className="font-semibold">Ticker:</span> {ticker}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Sector:</span> {sector || "Unknown"}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Industry:</span>{" "}
          {industry || "Unknown"}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Country:</span> {country || "Unknown"}
        </p>
        <p className="mb-1">
          <span className="font-semibold">CEO:</span> {ceo || "Unknown"}
        </p>
      </div>
      <div className="border-b border-gray py-4 px-6">
        <h3 className="font-semibold text-xl mb-4">Company Description</h3>
        <p>{shortDescription}</p>
      </div>
      <div className="py-4 px-6">
        <h3 className="font-semibold text-xl mb-4">Financials</h3>
        <p className="mb-1">
          <span className="font-semibold">Close Price:</span>{" "}
          {lastClosePrice?.toLocaleString()}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Market Cap:</span>{" "}
          {marketCap?.toLocaleString() || "Unknown"}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Trailing PE:</span>{" "}
          {trailingPE?.toLocaleString() || "Unknown"}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Price to Sales:</span>{" "}
          {priceToSalesRatio?.toLocaleString() || "Unknown"}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Price to Book:</span>{" "}
          {priceToBookRatio?.toLocaleString() || "Unknown"}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Profit Margin:</span>{" "}
          {profitMargin?.toLocaleString() || "Unknown"}
        </p>
      </div>
    </>
  )
}
