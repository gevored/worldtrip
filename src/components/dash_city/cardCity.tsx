import { Avatar, Box, HStack, Img, Text } from "@chakra-ui/react";

interface CardCityProps{
    IMGCity:string;
    URLflag:string;
    nameCountry:string;
    nameCity:String
}

export function CardCity(props:CardCityProps){
    return(
        <Box>
            <Img src={props.IMGCity}/>
            <Text>{props.nameCity}</Text>
            <HStack>
                <Text>{props.nameCountry}</Text>
                <Avatar src={props.URLflag} size = 'sm'/>
            </HStack>
        </Box>
    )
}