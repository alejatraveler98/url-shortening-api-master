import { animationsOn } from '../ui.js';
import {api} from './variables.js'
const STATUS_OK =201;
const STATUS_NOT_FOUND = 404;
const getLink = (value) =>{
    let url = value;
    animationsOn();
    console.log(`${api}${url}`);
    return new Promise ((resolve,reject)=>{
        fetch(`${api}${url}`)
        .then ((rest) => {
            console.log(rest.status);
            switch(rest.status){
                case STATUS_OK:
                    return rest.json();
                
                case STATUS_NOT_FOUND:
                    console.log('Error');
                    break;
            }

        }
        )
        .then ((data) => {
            console.log(data)
            resolve (data); 
        })
        .catch(error => console.log(error))    

    })
}

export default getLink;