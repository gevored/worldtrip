import {NextApiRequest, NextApiResponse} from 'next'
import fs from 'fs'
import path from 'path'


export default function handler(req: NextApiRequest,res : NextApiResponse){
    
    if(req.method === 'GET'){
        try {
         
        const {continent} = req.query
        const filePath = path.resolve('.', `image_folder/${continent}.jpg`)
        const imageBuffer = fs.readFileSync(filePath)

        res.status(200).setHeader('Content-Type', 'image/jpg').send(imageBuffer)

        } catch (error) {
            console.log('Error API countryIMG:' +  error)
        }
    }
}