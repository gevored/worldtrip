import {NextApiRequest, NextApiResponse} from 'next'
import path from 'path'
import fs from 'fs'

interface Continents{

}

var continents = {
    'europa':[
        {
            name:'Reino Unido',
            SrcFlagCountry: '/GB',
            citys:[
                {
                    nameCity:'Londres',
                    SrcIMGCity:'/londres'
                }
            ]
        },
        {
            name:'França',
            SrcFlagCountry: '/fr',
            citys:[
                {
                    nameCity:'Paris',
                    SrcIMGCity:'/paris'
                }
            ]
        },
        {
            name:'Itália',
            SrcFlagCountry: '/it',
            citys:[
                {
                    nameCity:'Roma',
                    SrcIMGCity:'/roma'
                }
            ]
        },
        {
            name:'Holanda',
            SrcFlagCountry: '/GB',
            citys:[
                {
                    nameCity:'Amsterdã',
                    SrcIMGCity:'/amsterda'
                }
            ]
        },
        {
            name:'República Tcheca',
            SrcFlagCountry: '/cz',
            citys:[
                {
                    nameCity:'Praga',
                    SrcIMGCity:'/praga'
                }
            ]
        },
    ],
}

export default function  handle(req: NextApiRequest,res : NextApiResponse){
    
    if(req.method == 'GET'){
        
        const {continent} = req.query 
        
        const objContinent = continents[continent as keyof typeof continents] 

        const infoContinent = objContinent.map(country =>(
            {
                nameCountry : country.name,
                nameCity:country.citys[0].nameCity,
                SrcIMGCity: fs.readFileSync(path.resolve('.', `image_folder/${country.citys[0].SrcIMGCity}.jpg`)),
                SrcFlagCountry:fs.readFileSync(path.resolve('.', `image_folder/${country.SrcFlagCountry}.png`))
            }
        ))

        const continentIMG =  fs.readFileSync(path.resolve('.', `image_folder/${continent}.jpg`))
        
        res.status(200).setHeader('content-type', 'application/json').send({infoContinent})
    }
}


