
import {Header}from './header'
import { Box, Img } from '@chakra-ui/react'

export function Banner(){
    return(
        <Box 
        w='100%'
        display='flex'
        
        justifyContent='center'
        alignItems='center'
        >
            
            <Img 
                maxW='1440px'
                src='/Banner.svg' alt='Dan Abramov' 
            />
        </Box>
    )
}