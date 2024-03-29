import { DetailBanner } from '../components/DetailBanner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function ScheduleConsult() {
  return (
    <>
      <Header />
      <DetailBanner
        title="Agendar Consulta"
        description="Recupere seus pokémons em 5 segundos"
      />

      <Footer />
    </>
  )
}
