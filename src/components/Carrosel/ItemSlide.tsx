import {  Center, Img, Text ,TextProps } from "@chakra-ui/react";

import Link from  'next/link'

interface ItemSlideProps{
    subtitleIMG ?:string;
    pathName:string;
    color?: string;
    path: string;
}

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function ItemSlide({path,subtitleIMG,pathName,color}:ItemSlideProps){
    return(
     
        <Link href= {path}>
            <Center> 
                
                <Img 
                    h='360px'
                    w='1200px'
                    src = {pathName}
                />

                {subtitleIMG && 
                <Text
                    fontFamily='Poppins'
                    fontSize='4rem'
                    fontWeight='bold'
                    color={color}
                    bottom='2rem'
                    position='absolute'
                    
                > {subtitleIMG}</Text> 
                }
            </Center>
        </Link>
    )
}