
import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'

import {theme} from '../styles/theme'


import '../styles/global.css'
import { Header } from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {

  return (
  <ChakraProvider theme={theme}>
    <Header/>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
