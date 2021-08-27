import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'

export const User = ({ image, title, description, job }) => (
  <Box
    my="80px"
    sx={ {
      '@media screen and (min-width: 700px)': {
        w: '33.33%',
        px: '20px'
      }
    } }
  >
    <Avatar src={ image } name={ title }
      w="100px"
      h="100px"
      mb="40px"
      sx={ {
        '@media screen and (min-width: 700px)': {
          w: '60px',
          h: '60px'
        }
      } }
    />
    <Text
      mb="40px"
      lineHeight="35px"
      fontFamily="heading"
      fontSize="22px"
      color="blue.200"
      sx={ {
        '@media screen and (min-width: 700px)': {
          fontSize: '16px'
        }
      } }
    >{ description }</Text>
    <Flex
      flexDir="column"
    >
      <Heading
        as="h6"
        mb="10px"
        fontFamily="body"
        fontSize="25px"
        color="blue.100"
        sx={ {
          '@media screen and (min-width: 700px)': {
            fontSize: '20px'
          }
        } }
      >{ title }</Heading>
      <Text
        fontFamily="heading"
        fontSize="18px"
        color="blue.400"
        sx={ {
          '@media screen and (min-width: 700px)': {
            fontSize: '16px'
          }
        } }
      >{ job }</Text>
    </Flex>
  </Box>
)
