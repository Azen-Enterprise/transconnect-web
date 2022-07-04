import '../styles/globals.scss'
import '../styles/variables.module.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from '../components'
import NavBar from '../components/Navigation/Nav'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
