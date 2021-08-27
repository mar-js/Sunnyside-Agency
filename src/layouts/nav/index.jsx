import {
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

export const Nav = () => (
  <>
    <Menu
      isLazy
      bgColor="blue"
    >
      <MenuButton
        as={ IconButton }
        icon={ <HamburgerIcon /> }
        fontSize="25px"
        bgColor="transparent"
        color="white"
        _hover={ { bgColor: 'transparent' } }
        _active={ { bgColor: 'transparent' } }
        _focus={ { border: 'none' } }
        sx={ {
          '@media screen and (min-width: 700px)': {
            display: 'none'
          }
        } }
      />
      <MenuList
        fontFamily="heading"
        color="blue.300"
        borderRadius="0"
        sx={ {
          '@media screen and (min-width: 700px)': {
            display: 'none'
          }
        } }
      >
        <MenuItem
          cursor="pointer"
          m="15px 0"
          justifyContent="center"
          _hover={ {
            bgColor: 'transparent',
            color: 'blue.100'
          } }
        >About</MenuItem>
        <MenuItem
          cursor="pointer"
          m="15px 0"
          justifyContent="center"
          _hover={ {
            bgColor: 'transparent',
            color: 'blue.100'
          } }
        >Services</MenuItem>
        <MenuItem
          cursor="pointer"
          m="15px 0"
          justifyContent="center"
          _hover={ {
            bgColor: 'transparent',
            color: 'blue.100'
          } }
        >Projects</MenuItem>
        <MenuItem
          m="15px 0"
          justifyContent="center"
          fontFamily="body"
          textTransform="uppercase"
          color="blue.100"
          _hover={ { bgColor: 'transparent' } }
        >
          <Link
            p="10px 20px"
            fontSize="12px"
            bg="yellow.100"
            borderRadius="50px"
          >Contact</Link>
        </MenuItem>
      </MenuList>
    </Menu>
    <Flex
      as="nav"
      display="none"
      alignContent="center"
      alignItems="center"
      sx={ {
        '@media screen and (min-width: 700px)': {
          display: 'flex'
        }
      } }
    >
      <HStack spacing="35px">
        <Link
          fontFamily="heading"
          color="white.100"
        >About</Link>
        <Link
          fontFamily="heading"
          color="white.100"
        >Services</Link>
        <Link
          fontFamily="heading"
          color="white.100"
        >Project</Link>
        <Link
          p="15px 30px"
          fontFamily="body"
          textTransform="uppercase"
          color="white.100"
          bgColor="rgba(255, 255, 255, .3)"
          borderRadius="50px"
          _hover={ {
            color: 'blue.100',
            bgColor: 'white.100'
          } }
        >Contact</Link>
      </HStack>
    </Flex>
  </>
)
