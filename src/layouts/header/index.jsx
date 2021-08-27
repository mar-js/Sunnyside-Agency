import { Flex } from '@chakra-ui/react'

import { Title } from '../../components/title'
import { Nav } from '../nav/'

import logo from '../../assets/images/logo.svg'

export const Header = () => (
  <Flex
    as="header"
    w="100%"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    pt="25px"
    px="20px"
    bgColor="#3ebfff"
  >
    <Title
      icon={ logo }
    />
    <Nav />
  </Flex>
)
