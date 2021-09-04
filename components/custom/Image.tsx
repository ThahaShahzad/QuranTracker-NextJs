import { chakra } from '@chakra-ui/system'
import NImage, { ImageProps } from 'next/image'

const Img = chakra(NImage, {
  shouldForwardProp: (prop) => {
    return ['width', 'hieght', 'src', 'alt'].includes(prop)
  }
})
export const Image = (props: ImageProps) => {
  return <Img {...props} />
}
