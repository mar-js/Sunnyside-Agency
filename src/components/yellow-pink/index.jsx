import {
  Box,
  GridItem,
  Text,
  Heading,
  Link
} from '@chakra-ui/react'

export const YellowPink = ({ imageMobile, imageDesktop, title, description, flexReverse }) => (
  <GridItem
    sx={ {
      '@media screen and (min-width: 700px)': {
        display: 'flex',
        flexDirection: flexReverse ? 'row-reverse' : 'row'
      }
    } }
  >
    <Box
      as="img"
      w="100%"
      h="400px"
      bgImage={ imageMobile }
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      sx={ {
        '@media screen and (min-width: 700px)': {
          w: '50%',
          h: '100%',
          bgImage: imageDesktop
        }
      } }
    />
    <Box
      p="60px"
      textAlign="center"
      sx={ {
        '@media screen and (min-width: 700px)': {
          width: '50%',
          alignSelf: 'center',
          px: '40px',
          textAlign: 'left'
        }
      } }
    >
      <Heading
        as="h3"
        mb="30px"
        px="30px"
        fontFamily="body"
        fontWeight="900"
        fontSize="36px"
        color="blue.100"
        sx={ {
          '@media screen and (min-width: 700px)': {
            pl: '0',
            pr: '150px'
          }
        } }
      >{ title }</Heading>
      <Text
        mb="30px"
        lineHeight="30px"
        letterSpacing="1px"
        fontSize="20px"
        fontFamily="heading"
        color="blue.300"
      >{ description }</Text>
      <Link href="#"
        pos="relative"
        fontSize="18px"
        fontWeight="900 "
        textTransform="uppercase"
        _after={ {
          content: '""',
          pos: 'absolute',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: '-1',
          w: '100%',
          h: '10px',
          opacity: '.5',
          borderRadius: '10px',
          bgColor: flexReverse ? 'yellow.100' : 'red.100'
        } }
      >Learn more</Link>
    </Box>
  </GridItem>
)
