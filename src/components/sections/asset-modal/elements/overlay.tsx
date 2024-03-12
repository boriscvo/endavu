type Props = {
  onClose?: () => void
}

export function Overlay({ onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
    ></div>
  )
}
