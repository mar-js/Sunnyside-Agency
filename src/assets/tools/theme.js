import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Barlow',
    body: 'Fraunces'
  },
  colors: {
    white: {
      100: '#ffffff'
    },
    yellow: {
      100: 'hsl(51, 100%, 49%)'
    },
    red: {
      100: 'hsl(7, 99%, 70%)'
    },
    green: {
      100: 'hsl(167, 40%, 24%)',
      200: 'hsl(168, 34%, 41%)',
      300: 'hsl(167, 50%, 71%)'
    },
    blue: {
      100: 'hsl(212, 27%, 19%)',
      200: 'hsl(213, 9%, 39%)',
      300: 'hsl(232, 10%, 55%)',
      400: 'hsl(210, 4%, 67%)',
      500: 'hsl(198, 62%, 26%)'
    }
  }
})
