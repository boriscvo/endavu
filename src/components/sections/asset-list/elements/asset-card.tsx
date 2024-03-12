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
    <div className="border border-gray shadow-custom flex rounded-lg flex-col mb-8">
      <div className="pr-4">
        <div className="pt-4 md:pl-4 pl-2 flex">
          <div className="hidden md:block flex-shrink-0">
            <Logo url={logoUrl} size="large" />
          </div>
          <div className="flex-grow pl-2">
            <div className="flex justify-between">
              <div>
                <div className="leading-4">
                  <p className="text-sm">{ticker}</p>
                </div>
                <div className="leading-6 md:leading-5 mt-[0.125rem] mb-1 line-clamp-2 md:line-clamp-1 pr-1">
                  <h2 className="text-2xl font-bold">{name}</h2>
                </div>
              </div>
              <div className="leading-5 flex flex-col mt-1">
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
      <div className="flex justify-between py-2 px-4 border-t border-gray">
        <div className="flex">
          <Link onClick={() => handleAssetSelection(id)}>
            <span className="text-base">View More</span>
          </Link>
          <Link isDisabled>
            <span className="text-base">Analytics</span>
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
