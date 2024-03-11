type Props = {
  url?: string
  alt?: string
  size?: "small" | "medium" | "large"
}

export function Logo({ url, alt, size = "medium" }: Props) {
  const getSize = () => {
    switch (size) {
      case "small":
        return "w-8 h-8"
      case "medium":
        return "w-12 h-12"
      case "large":
        return "w-16 h-16"
    }
  }

  if (!url) {
    return <div className={`${getSize()} bg-zinc-800`}></div>
  }

  return <img className={`${getSize()}`} src={url} alt={alt || "logo"} />
}
