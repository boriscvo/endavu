import { Magnifier, Close } from "./variants"

type Props = {
  variant: "magnifier" | "close"
}

export function Icon({ variant }: Props) {
  switch (variant) {
    case "magnifier":
      return <Magnifier />
    case "close":
      return <Close />
  }
}
