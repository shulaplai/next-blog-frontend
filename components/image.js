import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
  const { url, alternativeText } = image

  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <NextImage
      loader={loader}
      layout="intrinsic"
      width="350"
      height="420"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
