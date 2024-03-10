import { HttpResponse, http } from "msw"
import { resolver } from "./resolver"

export const handler = [
  http.get("http://endavutest.com/assets/*", ({ request }) => {
    const url = new URL(request.url)
    const pageSize = url.searchParams.get("pageSize")
    const search = url.searchParams.get("search")

    const data = resolver({
      pageSize,
      search,
    })

    return HttpResponse.json(data)
  }),
]
