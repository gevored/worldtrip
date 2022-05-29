
import {Header}from './header'
import { Box, Img } from '@chakra-ui/react'

export function Banner(){
    return(
        <Box 
        >
            
            <Img 
                maxW='1440px'
                src='/Banner.svg' alt='Dan Abramov' 
            />
        </Box>
    )
}