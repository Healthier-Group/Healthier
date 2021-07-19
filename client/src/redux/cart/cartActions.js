
import axios from "axios";
export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS";
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";
export const CART_EMPTY = "CART_EMPTY";
export const USER_SIGNIN_FAIL='USER_SIGNIN_FAIL'
export const USER_SIGNIN_SUCCESS='USER_SIGNIN_SUCCESS'
export const USER_SIGNIN_REQUEST='USER_SIGNIN_REQUEST'
export const USER_SIGNOUT='USER_SIGNOUT'


export const addToCart=(id,qty)=>async(dispatch, getState)=>{
    const {data}=await axios.get("/products/" + id)
       dispatch({
        type:'CART_ADD_ITEM',
        payload:{

            name:data[0].name,
            image:data[0].image,
            price:data[0].price,
            //countInStock seria la posible cantidad en stock
            countInStock:10,
            product:data[0].id,
            qty, 
        }
    })
     localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart =(productId)=>(dispatch,getState)=>{
    dispatch({type:'CART_REMOVE_ITEM', payload:productId})
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: "USER_SIGNIN_REQUEST", payload: { email, password } });
    try {
      const { data } = await axios.post("/api/users/signin", { email, password });
      dispatch({ type: "USER_SIGNIN_SUCCESS", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "USER_SIGNIN_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const signout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    dispatch({ type: "USER_SIGNOUT" });
  };

  export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: "CART_SAVE_SHIPPING_ADDRESS", payload: data });
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  };
  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: "CART_SAVE_PAYMENT_METHOD", payload: data });
  };
  

