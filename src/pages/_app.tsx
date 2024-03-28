import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { GlobalStyles } from '../../styles/Global'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/themes/DefaultTheme'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={inter.className}>
        <Component {...pageProps}  />
        <GlobalStyles />   
      </div>
    </ThemeProvider>
  )
}
