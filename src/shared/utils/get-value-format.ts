export function getValueFormat(value: number) {
  return value.toLocaleString("", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
