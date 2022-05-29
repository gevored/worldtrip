
import {GetStaticProps} from 'next'
import {api} from  '../services/axios'
import {Img , Box, Text, Center, HStack, VStack} from '@chakra-ui/react'

interface PostProps{
    post :{
        image?:string;
    };
}
export default function Post({post}:PostProps){
  
  return (


    <>
    <Img 
    h='500px'
    w='1440px'
      src = {post?.image}
    />
    
    <Box
        as='div'
        display = 'flex'
    >
        <Box
            maxW='900px'
        >
            <Text
                margin='3rem'

                fontFamily='Poppins'
                fontSize = '24px'
                lineHeight= '36px'
                color='#47585B'
                
            >
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
        </Box>
        <HStack
            gap={10}
            display='flex'
            justifyContent='center'
            alignItems='center' 
            width= '100%'
         >
            <VStack>
                <Text fontWeight='bold' fontFamily = 'Poppins' fontSize = '3rem' color='#FFBA08'>50</Text>
                <Text fontFamily = 'Poppins'>Países</Text>
            </VStack>
            <VStack>
                <Text fontWeight='bold' fontFamily = 'Poppins' fontSize = '3rem' color='#FFBA08'>60</Text>
                <Text fontFamily = 'Poppins'>Línguas</Text>
            </VStack>
            <VStack>
                <Text fontWeight='bold' fontFamily = 'Poppins' fontSize = '3rem' color='#FFBA08'>27</Text>
                <Text fontFamily = 'Poppins'>Cidades</Text>
            </VStack>
            

        </HStack>
    </Box>
    </>
  )
}

export async function getStaticPaths() {
    return {
      paths: ['/africa'],
      fallback: true
    }
  }

  interface paramsProps{
      params:{
          slug:string;
      }
  }

export const getStaticProps :GetStaticProps  =  async function ({params}){

    const {slug} = params!


    try {
        const response  = await api.get('/countryImages', {
            params:{
                country: slug,
            },
            responseType:'arraybuffer'
        })

        const b64 = Buffer.from(response.data , 'binary').toString('base64')
        const  mimeType = 'image/png'


        const imgElement = `data:${mimeType};base64,${b64}` ;
        
        return {
            props:{
                post: {
                    image: imgElement,
                }
            }
        }
    } catch (error) {
        console.log('Erro Request API: ' + error)
    }


    return {
        props:{
            post: {
                image: null,
            }
        }
    }
}