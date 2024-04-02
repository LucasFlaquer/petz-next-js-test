import { render } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/themes/DefaultTheme'

export function renderWithThemeProvider(component: ReactElement) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}
