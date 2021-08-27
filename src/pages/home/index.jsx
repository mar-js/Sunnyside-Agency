import { Header } from '../../layouts/header'
import { Hero } from '../../layouts/hero'
import {
  SectionYP,
  SectionFruit,
  SectionUsers,
  SectionImages
} from '../../layouts/section'
import { Footer } from '../../layouts/footer'

export const Home = () => (
  <>
    <Header />
    <Hero />
    <SectionYP />
    <SectionFruit />
    <SectionUsers />
    <SectionImages />
    <Footer />
  </>
)
