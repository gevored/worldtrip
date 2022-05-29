
import {GetStaticProps} from 'next'
import {api} from  '../services/axios'
import {Img} from '@chakra-ui/react'

interface PostProps{
    post :{
        image?:string;
    };
}
export default function Post({post}:PostProps){
  
  return (
      <Img src = {post.image}/>
  )
}

export async function getStaticPaths() {
    return {
      paths: ['/africa'],
      fallback: true
    }
  }

  interface paramsProps{
      params:{
          slug:string;
      }
  }

export const getStaticProps :GetStaticProps  =  async function ({params}){

    const {slug} = params!


    try {
        const response  = await api.get('/countryImages', {
            params:{
                country: slug,
            },
            responseType:'arraybuffer'
        })

        const b64 = Buffer.from(response.data , 'binary').toString('base64')
        const  mimeType = 'image/png'


        const imgElement = `data:${mimeType};base64,${b64}` ;
        
        return {
            props:{
                post: {
                    image: imgElement,
                }
            }
        }
    } catch (error) {
        console.log('Erro Request API: ' + error)
    }


    return {
        props:{
            post: {
                image: null,
            }
        }
    }
}