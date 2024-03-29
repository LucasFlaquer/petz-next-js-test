import { useEffect, useState } from 'react'
import { HomeContainer } from '../../styles/pages/Home'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'

export default function Home() {
  const [isActive, setIsActive] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [])
  
  return (
    <HomeContainer>
      <Header homeActive={isActive} />
      <HomeBanner />
      <Footer />
    </HomeContainer>
  )
}
