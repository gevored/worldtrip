import { Avatar, Box, HStack, Img, Text, VStack } from "@chakra-ui/react";

interface CardCityProps {
    infoCity: {
        nameCity: string;
        nameCountry: string;
        SrcIMGCity: string;
        SrcFlagCountry: string;
    }
}

export function CardCity(props: CardCityProps) {
    return (
        <Box
            as='div'
            h='279px'
            w='255px'
            margin='0px !important'
            border='#FFBA08 1px solid'
        >
            <Box>
                <Img h= '173px' src={props.infoCity.SrcIMGCity}></Img>
            </Box>
            <HStack
                
            >
                <VStack
                
                    flexGrow='5'
                    alignItems='flex-start'
                    paddingLeft='1rem'
                    paddingTop='1rem'
                    justifyContent='baseline'
                >
                    <Text fontFamily='Barlow'
                        fontWeight='600'
                        fontSize='20px'
                        lineHeight='25px'
                        color='#47585B'>
                        {props.infoCity.nameCity}
                    </Text>

                    <Text fontFamily='Barlow'
                        fontWeight='500'
                        fontSize='16px'
                        lineHeight='26px'
                        color='#999999'>
                        {props.infoCity.nameCountry}
                    </Text>
                </VStack>
                <Box
                    flexGrow='1'
                    display='flex'
                
                    justifyContent='center'
                >
                    <Avatar src={props.infoCity.SrcFlagCountry} />
                </Box>
            </HStack>
        </Box>
    )
}