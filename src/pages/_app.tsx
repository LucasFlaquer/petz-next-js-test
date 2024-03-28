import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { GlobalStyles } from '../../styles/Global'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps}  />
      <GlobalStyles />   
    </div>
  )
}
