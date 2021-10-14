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
      layout="fill"
      width="300px"
      height="300px"
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
