import React from 'react'

import '@fontsource/barlow/600.css'
import '@fontsource/fraunces/700.css'
import '@fontsource/fraunces/900.css'

import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './assets/tools/theme'

import { Home } from './pages/home'

export const App = () => (
  <ChakraProvider theme={ theme }>
    <Home />
  </ChakraProvider>
)
