import axios from "axios"

export const WISH_LIST_ADD_ITEM='WISH_LIST_ADD_ITEM'
export const WISH_LIST_REMOVE_ITEM='WISH_LIST_REMOVE_ITEM'

export const addToWishList=(id)=>async(dispatch, getState)=>{
    console.log("1.info hacia wl",id)
    const {data}=await axios.get("http://localhost:3001/products/" + id)
    console.log("2.info hacia wl",data)
       dispatch({
        type:'WISH_LIST_ADD_ITEM',
        payload:{

            name:data[0].name,
            image:data[0].image,
            price:data[0].price,
            countInStock:10,
            product:data[0].id,
             
        }
    })
     localStorage.setItem('wishListItems',JSON.stringify(getState().wishList.wishListItems))
    console.log("2.5 jajaja",JSON.stringify(getState().wishList.wishListItems))
     console.log("3.get WL_LS",localStorage.getItem('wishListItems'))
}
export const removeFromWishList =(productId)=>(dispatch,getState)=>{
    dispatch({type:'WISH_LIST_REMOVE_ITEM', payload:productId})
    localStorage.setItem('wishListItems',JSON.stringify(getState().wishList.wishListItems))
}