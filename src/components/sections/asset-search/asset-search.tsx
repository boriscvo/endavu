import { Search } from "@/components/ui/search/search"
import { Container } from "./elements"

type Props = {
  typing: string
  updateSearch: (search: string) => void
  handleSearch: () => void
  handleReset: () => void
}

export function AssetSearch({
  typing,
  updateSearch,
  handleSearch,
  handleReset,
}: Props) {
  return (
    <Container>
      <Search
        typing={typing}
        updateSearch={updateSearch}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
    </Container>
  )
}
