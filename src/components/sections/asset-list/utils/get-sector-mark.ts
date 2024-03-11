export function getSectorMark(sector?: string) {
  switch (sector) {
    case "Healthcare":
      return "bg-pink-200"
    case "Technology":
      return "bg-blue-200"
    case "Utilities":
      return "bg-yellow-200"
    case "Consumer Cyclical":
      return "bg-green-200"
    case "Communication Services":
      return "bg-purple-200"
    case "Financial Services":
      return "bg-red-200"
    case "Consumer Defensive":
      return "bg-orange-200"
    case "Basic Materials":
      return "bg-teal-200"
    default:
      return "bg-gray-200"
  }
}
