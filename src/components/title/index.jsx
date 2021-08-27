import { Heading, Img } from '@chakra-ui/react'

export const Title = ({ icon }) => (
  <Heading
    as="h1"
  >
    <Img src={ icon } alt="Sunnyside"
      w="100%"
      h="100%"
      fill="red"
    />
  </Heading>
)
