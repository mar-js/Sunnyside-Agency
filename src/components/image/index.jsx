import { Box } from '@chakra-ui/react'

export const Image = ({ imageMobile, imageDesktop }) => (
  <Box
    as="img"
    w="50%"
    h="250px"
    bgImage={ imageMobile }
    bgPos="center"
    bgSize="cover"
    sx={ {
      '@media screen and (min-width: 700px)': {
        w: '25%',
        h: '500px',
        bgImage: imageDesktop,
        bgPos: 'bottom'
      }
    } }
  />
)
