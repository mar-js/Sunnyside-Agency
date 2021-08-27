import {
  Box,
  Flex,
  Grid,
  Heading
} from '@chakra-ui/react'

import imageYellowMobile from '../../assets/images/mobile/image-transform.jpg'
import imageYellowDesktop from '../../assets/images/desktop/image-transform.jpg'
import imagePinkMobile from '../../assets/images/mobile/image-stand-out.jpg'
import imagePinkDesktop from '../../assets/images/desktop/image-stand-out.jpg'

import imageCherriesMobile from '../../assets/images/mobile/image-graphic-design.jpg'
import imageCherriesDesktop from '../../assets/images/desktop/image-graphic-design.jpg'
import imageOrangeMobile from '../../assets/images/mobile/image-photography.jpg'
import imageOrangeDesktop from '../../assets/images/desktop/image-photography.jpg'

import imageOne from '../../assets/images/image-emily.jpg'
import imageTwo from '../../assets/images/image-thomas.jpg'
import imageThree from '../../assets/images/image-jennie.jpg'

import imageGalleryMilkMobile from '../../assets/images/mobile/image-gallery-milkbottles.jpg'
import imageGalleryMilkDesktop from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import imageGalleryOrangeMobile from '../../assets/images/mobile/image-gallery-orange.jpg'
import imageGalleryOrangeDesktop from '../../assets/images/desktop/image-gallery-orange.jpg'
import imageGalleryConeMobile from '../../assets/images/mobile/image-gallery-cone.jpg'
import imageGalleryConeDesktop from '../../assets/images/desktop/image-gallery-cone.jpg'
import imageGallerySugarCubesMobile from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg'
import imageGallerySugarCubesDesktop from '../../assets/images/desktop/image-gallery-sugar-cubes.jpg'

import { YellowPink } from '../../components/yellow-pink'
import { Fruit } from '../../components/fruit'
import { User } from '../../components/user'
import { Image } from '../../components/image'

export const SectionYP = () => (
  <Grid
    as="section"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(1, 1fr)"
  >
    <YellowPink
      flexReverse
      imageMobile={ imageYellowMobile }
      imageDesktop={ imageYellowDesktop }
      title="Transform your brand"
      description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
    />
    <YellowPink
      imageMobile={ imagePinkMobile }
      imageDesktop={ imagePinkDesktop }
      title="Stand out to the right audience"
      description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
    />
  </Grid>
)

export const SectionFruit = () => (
  <Grid
    as="section"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(1, 1fr)"
    sx={ {
      '@media screen and (min-width: 700px)': {
        gridTemplateRows: 'repeat(1, 1fr)',
        gridTemplateColumns: 'repeat(2, 1fr)'
      }
    } }
  >
    <Fruit
      colorF
      imageMobile={ imageCherriesMobile }
      imageDesktop={ imageCherriesDesktop }
      title="Graphic design"
      description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
    />
    <Fruit
      imageMobile={ imageOrangeMobile }
      imageDesktop={ imageOrangeDesktop }
      title="Photography"
      description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
    />
  </Grid>
)

export const SectionUsers = () => (
  <Box
    as="section"
    textAlign="center"
    p="60px 40px"
    sx={ {
      '@media screen and (min-width: 700px)': {
        p: '100px 100px 0'
      }
    } }
  >
    <Heading
      as="h4"
      fontSize="18px"
      fontFamily="body"
      fontWeight="900"
      textTransform="uppercase"
      letterSpacing="8px"
      color="blue.400"
      sx={ {
        '@media screen and (min-width: 700px)': {
          fontSize: '20px'
        }
      } }
    >Client testimonials</Heading>
    <Flex
      flexWrap="wrap"
    >
      <User
        image={ imageOne }
        title="Emily R."
        description="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
        job="Marketing Director"
      />
      <User
        image={ imageTwo }
        title="Thomas S."
        description="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
        job="Chief Operating Officer"
      />
      <User
        image={ imageThree }
        title="Jennie F."
        description="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
        job="Business Owner"
      />
    </Flex>
  </Box>
)

export const SectionImages = () => (
  <Flex
    as="section"
    flexWrap="wrap"
  >
    <Image
      imageMobile={ imageGalleryMilkMobile }
      imageDesktop={ imageGalleryMilkDesktop }
    />
    <Image
      imageMobile={ imageGalleryOrangeMobile }
      imageDesktop={ imageGalleryOrangeDesktop }
    />
    <Image
      imageMobile={ imageGalleryConeMobile }
      imageDesktop={ imageGalleryConeDesktop }
    />
    <Image
      imageMobile={ imageGallerySugarCubesMobile }
      imageDesktop={ imageGallerySugarCubesDesktop }
    />
  </Flex>
)
