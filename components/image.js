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
      layout="fixed"
      width="270px"
      height="270px"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
