import { HStack , Center,} from "@chakra-ui/react";
import { ItemMenu } from "./itemMenu";

export function Menu(){
    return(
        <>
            <HStack
                justifyContent='space-around'
                maxW='1440px'
                margin='0 6rem'
            >
                <ItemMenu pathName="Beach.svg"/>
                <ItemMenu pathName="Classic.svg"/>
                <ItemMenu pathName="Modern.svg"/>
                <ItemMenu pathName="Nightlife.svg"/>
                <ItemMenu pathName="More.svg" />
                
            </HStack>
            

            <Center>

            </Center>
        </>
    )
}