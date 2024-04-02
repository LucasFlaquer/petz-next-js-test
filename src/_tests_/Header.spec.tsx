import '@testing-library/jest-dom'
import { Header } from '../components/Header'
import userEvent from '@testing-library/user-event'
import { renderWithThemeProvider } from './mocks/providerRender'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    return <img {...props} />
  },
}))

describe('<Header />', () => {
  it('should be able to renders properly', () => {
    const { getByText } = renderWithThemeProvider(<Header />)
    expect(getByText('Agendar Consulta')).toBeInTheDocument()
  })
  it('should be able to hover on main icon', async () => {
    const user = userEvent.setup()
    const { getByTestId, getByText } = renderWithThemeProvider(<Header />)
    await user.hover(getByTestId('homeLink'))
    expect(getByText('Centro Pokémon')).toBeVisible()
  })
  it('should be able to show text due to prop active', () => {
    const isActive = true
    const { getByText } = renderWithThemeProvider(
      <Header homeActive={isActive} />,
    )
    expect(getByText('Centro Pokémon')).toBeVisible()
  })
})
