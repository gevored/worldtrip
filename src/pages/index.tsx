import type { NextPage } from 'next'
import { Banner } from '../components/banner'
import { Menu } from '../components/menu'
import { Carrossel } from '../components/carrosel'
import {Text, VStack} from  '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Banner/>
      <Menu/>
      <VStack
      marginTop='3rem'
      >
        <Text lineHeight='3.3rem' color = '#47585B' fontFamily='Poppins' fontSize ='2rem'>Vamos Nessa?</Text>
        <Text lineHeight='3.3rem' color = '#47585B' fontFamily='Poppins' fontSize ='2rem'>Então escolha seu continente</Text>
      </VStack>
      <Carrossel/>
    </>
  )
}

export default Home
