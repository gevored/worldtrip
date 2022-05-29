import { Img , ImgProps} from "@chakra-ui/react";


interface ItemMenuProps{
    pathName:string;
    props?: ImgProps;
}

export function ItemMenu({pathName,...props}:ItemMenuProps){
    return(
        <Img
            src={pathName}
            {...props}
        />
    )
}