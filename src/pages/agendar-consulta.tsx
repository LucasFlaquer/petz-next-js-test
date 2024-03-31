import { Container } from '../../styles/pages/Schedule'
import { DetailBanner } from '../components/DetailBanner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ScheduleForm } from '../components/ScheduleForm'

export default function ScheduleConsult() {
  return (
    <>
      <Header homeActive={false} />
      <DetailBanner
        title="Agendar Consulta"
        description="Recupere seus pokémons em 5 segundos"
      />
      <Container>
        <ScheduleForm />
      </Container>
      <Footer />
    </>
  )
}
