import { Magnifier } from "./variants/magnifier"

type Props = {
  variant: "magnifier"
}

export function Icon({ variant }: Props) {
  switch (variant) {
    case "magnifier":
      return <Magnifier />
  }
}
