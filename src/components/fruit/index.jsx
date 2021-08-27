import {
  GridItem,
  Heading,
  Text
} from '@chakra-ui/react'

export const Fruit = ({ imageMobile, imageDesktop, title, description, colorF }) => (
  <GridItem
    h="780px"
    display="flex"
    flexDir="column"
    justifyContent="flex-end"
    alignItems="center"
    p="0 30px 80px"
    textAlign="center"
    bgImage={ imageMobile }
    bgRepeat="no-repeat"
    bgPos="center"
    bgSize="cover"
    sx={ {
      '@media screen and (min-width: 700px)': {
        w: '100%',
        h: '600px',
        px: '100px',
        pb: '60px',
        bgImage: imageDesktop
      }
    } }
  >
    <Heading
      as="h3"
      mb="20px"
      fontSize="40px"
      fontFamily="body"
      color={ colorF ? 'green.100' : 'blue.500' }
    >{ title }</Heading>
    <Text
      lineHeight="30px"
      fontSize="20px"
      fontFamily="heading"
      color={ colorF ? 'green.100' : 'blue.500' }
    >{ description }</Text>
  </GridItem>
)
