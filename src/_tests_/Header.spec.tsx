import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Header } from '../components/Header'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/themes/DefaultTheme'
import userEvent from '@testing-library/user-event'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    return <img {...props} />
  },
}))

function renderWithTheme(component: JSX.Element) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('<Header />', () => {
  it('should be able to renders properly', () => {
    const { getByText } = renderWithTheme(<Header />)
    expect(getByText('Agendar Consulta')).toBeInTheDocument()
  })
  it('should be able to hover on main icon', async () => {
    const user = userEvent.setup()
    const { getByTestId, getByText } = renderWithTheme(<Header />)
    await user.hover(getByTestId('homeLink'))
    expect(getByText('Centro Pokémon')).toBeVisible()
  })
  it('should be able to show text due to prop active', () => {
    const isActive = true
    const { getByText } = renderWithTheme(<Header homeActive={isActive} />)
    expect(getByText('Centro Pokémon')).toBeVisible()
  })
})
