import {
  Flex,
  Image
} from '@chakra-ui/react'

import imageHeroMobile from '../../assets/images/mobile/image-header.jpg'
import imageHeroDesktop from '../../assets/images/desktop/image-header.jpg'
import iconArrow from '../../assets/images/icon-arrow-down.svg'

import { Subtitle } from '../../components/subtitle'

export const Hero = () => (
  <Flex
    as="main"
    h="85vh"
    pos="relative"
    display="flex"
    justifyContent="center"
    alignItems="top"
    pt="100px"
    textAlign="center"
    bgImage={ imageHeroMobile }
    bgRepeat="no-repeat"
    bgPos="bottom"
    bgSize="cover"
    sx={ {
      '@media screen and (min-width: 700px)': {
        pt: '40px',
        bgImage: imageHeroDesktop
      }
    } }
  >
    <Subtitle />
    <Image src={ iconArrow } alt="Icon Arrow"
      pos="absolute"
      top="48%"
      right="50%"
      left="50%"
      sx={ {
        transform: 'translateX(-50%)',
        '@media screen and (min-width: 700px)': {
          h: 'auto',
          top: '30%'
        }
      } }
      objectFit="cover"
    />
  </Flex>
)
