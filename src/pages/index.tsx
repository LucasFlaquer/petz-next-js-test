import { HomeContainer } from '../../styles/pages/Home'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeBanner />
      <Footer />
    </HomeContainer>
  )
}
