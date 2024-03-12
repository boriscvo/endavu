import { Button } from "../button/button"
import { Icon } from "../icon/icon"

type Props = {
  placeholder?: string
  typing: string
  updateSearch: (search: string) => void
  handleSearch: () => void
  handleReset: () => void
}

export function Search({
  placeholder = "Type at least 3 characters...",
  typing,
  updateSearch,
  handleSearch,
  handleReset,
}: Props) {
  return (
    <div className="flex relative">
      <input
        type="text"
        placeholder={placeholder}
        value={typing}
        onChange={(e) => updateSearch(e.target.value)}
        className="border border-blackVariant py-1 pl-2 pr-12 text-l rounded-s-lg w-[100%] sm:w-[22rem]"
      />
      <Button variant="search-addon" onClick={handleSearch}>
        <Icon variant="magnifier" />
      </Button>
      <div className="absolute top-3 left-auto right-[3.25rem] sm:left-[19.5rem] sm:right-auto">
        {typing && (
          <Button variant="minimal-close" onClick={handleReset}>
            <Icon variant="x" />
          </Button>
        )}
      </div>
    </div>
  )
}
