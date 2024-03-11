import { Button } from "../button/button"
import { Icon } from "../icon/icon"

type Props = {
  placeholder?: string
}

export function Search({
  placeholder = "Type at least 3 characters...",
}: Props) {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder={placeholder}
        className="border border-blackVariant py-1 pl-2 pr-3 text-l rounded-s-lg w-[100%] sm:w-[60%]"
      />
      <Button variant="search-addon" onClick={() => {}}>
        <Icon variant="magnifier" />
      </Button>
    </div>
  )
}
