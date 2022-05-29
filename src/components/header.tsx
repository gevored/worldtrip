
import Banner from '../../public/images/Banner.svg'

import { Box, Img } from '@chakra-ui/react'

export function Header(){
    return(
        <Box 
        >
            <Box 
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Img src='/WorldTrip.svg' alt='worldtrip'/>
            </Box>
            <Img 
                maxW='1440px'
                src='/Banner.svg' alt='Dan Abramov' 
            />
        </Box>
    )
}