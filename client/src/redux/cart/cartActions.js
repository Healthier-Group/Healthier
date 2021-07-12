import axios from "axios"
//import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants'
export const CART_ADD_ITEM='CART_ADD_ITEM'
export const CART_REMOVE_ITEM='CART_REMOVE_ITEM'

export const addToCart=(productId,qty)=>async(dispatch, getState)=>{
    
    const{data}=await axios.get(`http://localhost:3001/products/${productId}`)
    dispatch({
        type:'CART_ADD_ITEM',
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            product:data._id,
            qty, 
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart =(productId)=>(dispatch,getState)=>{
    dispatch({type:'CART_REMOVE_ITEM', payload:productId})
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}