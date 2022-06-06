import { Box, HStack, Text } from "@chakra-ui/react";
import { wrap } from "module";
import { CardCity } from "./cardCity";

interface InfoProps{
    nameCity: string;
    nameCountry: string;
    SrcIMGCity: string;
    SrcFlagCountry: string;
}

interface DashboardCity {
    citys: Array<InfoProps>
}


export function DashboardCity(props : DashboardCity){

    //console.log(props)
    return(

        <>
        <Box
           as = 'div'
        >
            <Text
                fontFamily='Poppins'
                fontWeight='500'
                fontSize='36px'
                lineHeight='36px'
                color='#47585B'
            >
                Cidades +100
            </Text>
        </Box>
            <HStack
                marginTop='2rem'
                gap= '4rem 2rem'
                flexWrap='wrap'
            >
                {props.citys?.map(info =>(
                    <CardCity  key = {info.nameCity} infoCity = {info}/>
                ))}
            
            </HStack>
        </>
    )
}