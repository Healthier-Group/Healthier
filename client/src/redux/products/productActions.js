import axios from 'axios'
import {PRODUCTS_URL} from '../../utils/Constants'
export const GET_PRODUCTS = 'GET_PRODUCTS'


export function getProducts () {
    return async function (dispatch) {
        return await axios.get(PRODUCTS_URL)//some link from backend, check
        .then((products)=>{
            dispatch ({
                type: 'GET_PRODUCTS',
                payload: products.data
            })
        })
    }
}
// Los quiero mucho!! por si me muero!!! jajajaja