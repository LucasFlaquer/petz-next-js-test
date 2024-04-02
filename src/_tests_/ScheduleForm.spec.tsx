import '@testing-library/jest-dom'
import { ScheduleForm } from '../components/ScheduleForm'
import { renderWithThemeProvider } from './mocks/providerRender'
import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('../hooks/usePokemons.ts', () => ({
  usePokemons: jest.fn(() => ({
    fetchPokemons: jest.fn(),
    getPokemonDetail: jest.fn().mockResolvedValue({ generation: 1 }),
    pokemons: [{ label: 'charmander', value: 'charmander' }],
  })),
}))
jest.mock('../hooks/useRegions.ts', () => ({
  useRegions: jest.fn(() => ({
    regions: [
      { label: 'Primeira', value: 'first' },
      { label: 'outra', value: 'segunda' },
    ],
  })),
}))
jest.mock('../hooks/useCities.ts', () => ({
  useRegionCities: jest.fn(() => ({
    cities: [{ label: 'Viridian', value: 'city' }],
  })),
}))

jest.mock('../hooks/useScheduling.ts', () => ({
  useScheduling: jest.fn(() => ({
    dates: [{ label: '01/01/2024', value: '01/01/2024' }],
    times: [{ label: '10:00:00', value: '10:00:00' }],
    fetchTimesByDate: jest.fn(),
  })),
}))
describe('<ScheduleForm />', () => {
  const onSubmitMock = jest.fn()
  beforeEach(() => {
    onSubmitMock.mockClear()
  })
  it('shoudl be able to renders properly', () => {
    const { getByText } = renderWithThemeProvider(
      <ScheduleForm onSubmit={onSubmitMock} />,
    )
    waitFor(() => {
      expect(
        getByText('Preencha o formulário abaixo para agendar sua consulta'),
      ).toBeInTheDocument()
    })
  })
  it('should be able to submit a valid form', async () => {
    const user = userEvent.setup()
    const { getByText, getByLabelText, getByRole } = renderWithThemeProvider(
      <ScheduleForm onSubmit={onSubmitMock} />,
    )
    await user.type(getByLabelText('Nome'), 'Lucas')
    await user.type(getByLabelText('Sobrenome'), 'Flaquer')
    await user.click(getByText('Selecione uma região'))
    await user.click(getByText('Primeira'))
    await user.click(getByText('Selecione sua cidade'))
    await user.click(getByText('Viridian'))
    await user.click(getByText('Selecione seu pokémon'))
    await user.click(getByText('charmander'))
    await user.click(getByText('Selecione uma data'))
    await user.click(getByText('01/01/2024'))
    await user.click(getByText('Selecione um horário'))
    await user.click(getByText('10:00:00'))
    const submit = getByRole('button', { name: 'Confirmar Agendamento' })
    await user.click(submit)
    expect(onSubmitMock).toHaveBeenCalled()
  })
})
