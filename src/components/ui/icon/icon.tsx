import { Magnifier, Close, IconX } from "./variants"

type Props = {
  variant: "magnifier" | "close" | "x"
}

export function Icon({ variant }: Props) {
  switch (variant) {
    case "magnifier":
      return <Magnifier />
    case "close":
      return <Close />
    case "x":
      return <IconX />
  }
}
