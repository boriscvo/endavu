import { Link, Logo, Pill } from "@/components/ui"
import { AssetSelected } from "@/shared/types"
import { getSectorMark } from "../utils/get-sector-mark"

type Props = {
  handleAssetSelection: (id: string) => void
  asset: AssetSelected
}

export function AssetCard({ asset, handleAssetSelection }: Props) {
  const {
    name,
    ticker,
    sector,
    shortDescription,
    lastClosePrice,
    logoUrl,
    id,
  } = asset

  return (
    <div className="border border-black2 shadow-custom flex rounded-lg flex-col mb-8">
      <div className="pr-6">
        <div className="pt-4 pl-2 flex">
          <div className="flex-shrink-0">
            <Logo url={logoUrl} size="large" />
          </div>
          <div className="flex-grow pl-2">
            <div className="flex justify-between">
              <div>
                <div className="leading-4">
                  <p className="text-sm">{ticker}</p>
                </div>
                <div className="leading-5 mt-[0.125rem] mb-1 line-clamp-1 pr-1">
                  <p className="text-2xl font-bold">{name}</p>
                </div>
              </div>
              <div className="leading-5 flex flex-col">
                <span className="text-2xl font-semibold ml-auto">{`${lastClosePrice}$`}</span>
                <span className="text-sm ml-auto">Close Price</span>
              </div>
            </div>
            <div className="leading-4 mt-[0.125rem]">
              <Pill style={getSectorMark(sector)}>
                <span className="text-xs">{sector || "Other"}</span>
              </Pill>
            </div>
            <div className="pt-4 mb-4 line-clamp-3">
              <p className="text-base">{shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-2 px-5 border-t border-black2">
        <div className="flex">
          <Link onClick={() => handleAssetSelection(id)}>
            <span className="text-base">View More</span>
          </Link>
          <Link isDisabled>
            <span className="text-base">Check Analytics</span>
          </Link>
        </div>
        <div>
          <Link isDisabled isTrail>
            <span className="text-base">Trade Options</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
