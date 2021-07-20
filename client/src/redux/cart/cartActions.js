import axios from "axios";

export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";

export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS";
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";

export const CART_EMPTY = "CART_EMPTY";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  console.log("antes de axios", id);
  const { data } = await axios.get("http://localhost:3001/products/" + id);
  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      name: data[0].name,
      image: data[0].image,
      price: data[0].price,
      //countInStock seria la posible cantidad en stock
      countInStock: 10,
      product: data[0].id,
      qty:qty?qty:1,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: "CART_REMOVE_ITEM", payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: "CART_SAVE_SHIPPING_ADDRESS", payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: "CART_SAVE_PAYMENT_METHOD", payload: data });
};
