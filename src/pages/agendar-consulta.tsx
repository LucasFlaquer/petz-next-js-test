import Image from 'next/image'
import {
  ConfirmationCard,
  Container,
  Content,
} from '../../styles/pages/Schedule'
import { DetailBanner } from '../components/DetailBanner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ScheduleForm } from '../components/ScheduleForm'
import CheckIcon from '../../public/check.svg'
import WarnIcon from '../../public/warning.svg'
import { useState } from 'react'
import { MainButton } from '../components/MainButton'
import { AxiosError } from 'axios'

interface SchedulingData {
  firstName: string
  lastName: string
  pokemons: { name: string; generation: number }[]
  city: string
  region: string
  date: string
  time: string
}

export default function ScheduleConsult() {
  const [schedule, setSchedule] = useState<SchedulingData | null>(null)
  const [error, setError] = useState<string | null>(null)
  async function onSubmit(data: SchedulingData) {
    // api request to actualy schedule
    try {
      setSchedule(data)
    } catch (error) {
      const err = error as AxiosError
      setError(err.message)
    }
  }

  return (
    <Container>
      <Header homeActive={false} />
      <DetailBanner
        title="Agendar Consulta"
        description="Recupere seus pokémons em 5 segundos"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Agendar Consulta', url: '#' },
        ]}
      />
      <Content>
        {!schedule && <ScheduleForm onSubmit={onSubmit} />}

        {schedule && !error && (
          <ConfirmationCard>
            <h2>Consulta Agendada</h2>
            <Image src={CheckIcon} height={42} width={42} alt="Check icon" />
            <p>
              Seu agendamento para dia {schedule?.date}, às {schedule?.time},
              <br />
              para 0${schedule?.pokemons.length} pokémons foi realizado com
              sucesso!
            </p>
            <MainButton>Fazer Novo Agendamento</MainButton>
          </ConfirmationCard>
        )}
        {error && (
          <ConfirmationCard>
            <h2>Houve um problema no agendamento</h2>
            <Image src={WarnIcon} height={42} width={42} alt="Check icon" />
            <p>{error}</p>
            <MainButton>Fazer Novo Agendamento</MainButton>
          </ConfirmationCard>
        )}
      </Content>
      <Footer />
    </Container>
  )
}
