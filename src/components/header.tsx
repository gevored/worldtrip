import { Box, Img } from '@chakra-ui/react'

export function Header() {
    return (
        <Box
            display='flex'
            w='100%'
            justifyContent='center'
            alignItems='center'
            margin='1rem 1rem'
        >
            <Img src='/WorldTrip.svg' alt='worldtrip' />
        </Box>
    )
}