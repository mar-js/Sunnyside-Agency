import {
  Center,
  Flex,
  Img,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'

import { Title } from '../title'

import logo from '../../assets/images/logo-2.svg'

import iconFacebook from '../../assets/images/icon-facebook.svg'
import iconInstagram from '../../assets/images/icon-instagram.svg'
import iconTwitter from '../../assets/images/icon-twitter.svg'
import iconPinterest from '../../assets/images/icon-pinterest.svg'

export const Socials = () => (
  <Center
    flexDir="column"
  >
    <Title
      icon={ logo }
    />
    <UnorderedList
      display="flex"
      m="40px 0 80px"
      listStyleType="none"
      color="green.200"
    >
      <ListItem
        cursor="pointer"
        mx="30px"
        fontFamily="heading"
        _hover={ { color: 'white.100' } }
      >About</ListItem>
      <ListItem
        cursor="pointer"
        mx="30px"
        fontFamily="heading"
        _hover={ { color: 'white.100' } }
      >Services</ListItem>
      <ListItem
        cursor="pointer"
        mx="30px"
        fontFamily="heading"
        _hover={ { color: 'white.100' } }
      >Projects</ListItem>
    </UnorderedList>
    <Flex
      w="40%"
      justifyContent="space-around"
      alignItems="center"
      sx={ {
        '@media screen and (min-width: 700px)': {
          w: '15%'
        }
      } }
    >
      <Img
        src={ iconFacebook }
        alt="Facebook"
        cursor="pointer"
      />
      <Img
        src={ iconInstagram }
        alt="Instagram"
        cursor="pointer"
      />
      <Img
        src={ iconTwitter }
        alt="Twitter"
        cursor="pointer"
      />
      <Img
        src={ iconPinterest }
        alt="Pinterest"
        cursor="pointer"
      />
    </Flex>
  </Center>
)
