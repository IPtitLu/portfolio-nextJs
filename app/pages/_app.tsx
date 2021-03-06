import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { Fragment } from 'react'
import Navigation  from '../components/navigation/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
