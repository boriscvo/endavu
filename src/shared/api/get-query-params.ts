type Props = {
  [key: string]: unknown
}

export function getQueryParams(queries: Props) {
  const keyValues = Object.keys(queries)
    .map((key) => {
      if (queries[key]) {
        return `${key}=${queries[key]}`
      }
    })
    .filter(Boolean)
  return keyValues.length ? `?${keyValues.join("&")}` : ""
}
