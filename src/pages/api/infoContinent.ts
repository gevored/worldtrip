import {NextApiRequest, NextApiResponse} from 'next'



var continents = {
    'europa':{
        gb:{
            name:'Reino Unido',
            SrcFlagCountry: '/GB',
            citys:[
                {
                    nameCity:'Londres',
                    SrcIMGCity:'/londres'
                }
            ]
        },
        fr:{
            name:'França',
            SrcFlagCountry: '/fr',
            citys:[
                {
                    nameCity:'Paris',
                    SrcIMGCity:'/paris'
                }
            ]
        },
        it:{
            name:'Itália',
            SrcFlagCountry: '/it',
            citys:[
                {
                    nameCity:'Roma',
                    SrcIMGCity:'/roma'
                }
            ]
        },
        nl:{
            name:'Holanda',
            SrcFlagCountry: '/GB',
            citys:[
                {
                    nameCity:'Amsterdã',
                    SrcIMGCity:'/amsterda'
                }
            ]
        },
        cz:{
            name:'República Tcheca',
            SrcFlagCountry: '/cz',
            citys:[
                {
                    nameCity:'Praga',
                    SrcIMGCity:'/praga'
                }
            ]
        },
    },
}

export default function  handle(req: NextApiRequest,res : NextApiResponse){
    
    if(req.method == 'GET'){
        
        let {continent} = req.query 

        console.log(continent)
        res.status(200)

    }
}


