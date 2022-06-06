
import { GetStaticProps } from 'next'
import { api } from '../services/axios'
import { Img, Box, Text, Center, HStack, VStack } from '@chakra-ui/react'
import { DashboardCity } from '../components/dashboardCity/index.';


interface CityProps {
    nameCity: string;
    nameCountry: string;
    SrcIMGCity: string;
    SrcFlagCountry: string;
}

interface PostProps {
    imgCountry?: string;
    citys: CityProps[];
}

export default function Post(props: PostProps) {

    return (
        <>
            <Img
                h='500px'
                w='1440px'
                src={props?.imgCountry}
            />
        <Box
            margin='5rem 5rem'
        >
            <Box
                as='div'
                display='flex'
            >
                <Box
                    maxW='900px'
                >
                    <Text
                        fontFamily='Poppins'
                        fontSize='24px'
                        lineHeight='36px'
                        color='#47585B'
                        padding='0 2rem'
                    >
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                </Box>
                <HStack
                    gap={10}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    
                >
                    <VStack>
                        <Text fontWeight='bold' fontFamily='Poppins' fontSize='3rem' color='#FFBA08'>50</Text>
                        <Text fontFamily='Poppins'>Países</Text>
                    </VStack>
                    <VStack>
                        <Text fontWeight='bold' fontFamily='Poppins' fontSize='3rem' color='#FFBA08'>60</Text>
                        <Text fontFamily='Poppins'>Línguas</Text>
                    </VStack>
                    <VStack>
                        <Text fontWeight='bold' fontFamily='Poppins' fontSize='3rem' color='#FFBA08'>27</Text>
                        <Text fontFamily='Poppins'>Cidades</Text>
                    </VStack>
                </HStack>
            </Box>

            <Box
                as = 'div'
                marginTop= '4rem'

            >
                <DashboardCity citys={props.citys} />
            </Box>
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

interface paramsProps {
    params: {
        slug: string;
    }
}

function BufferIMG(img: string) {
    let b64 = Buffer.from(img, 'binary').toString('base64')
    return `data:image/png;base64,${b64}`
}

export const getStaticProps: GetStaticProps = async function ({ params }) {

    const { slug } = params!

    try {
        const promiseALL = await Promise.all([
            api.get('/infoContinent', {
                params: {
                    continent: slug
                }
            }),
            api.get('/countryImages', {
                params: {
                    continent: slug
                },
                responseType: 'arraybuffer'
            })
        ])

        const imgCountry = BufferIMG(promiseALL[1].data);

        const infoContinent = promiseALL[0].data.infoContinent?.map(info => (
            {
                nameCity: info.nameCity,
                nameCountry: info.nameCountry,
                SrcIMGCity: BufferIMG(info.SrcIMGCity),
                SrcFlagCountry: BufferIMG(info.SrcFlagCountry),
            }
        ))

        return {
            props: {
                imgCountry: imgCountry,
                citys: infoContinent
            }
        }
    } catch (error) {
        console.log('Erro Request API: ' + error)
    }

    return {
        props: {
            imgCountry: null,
            citys: null
        }
    }
}