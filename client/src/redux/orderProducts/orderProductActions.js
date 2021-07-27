import axios from "axios";

export const GET_ORDER_PRODUCTS = "GET_ORDER_PRODUCTS";
export const GET_ORDER_PRODUCT_BY_ID = "GET_ORDER_PRODUCT_BY_ID";
export const CREATE_ORDER_PRODUCT = "CREATE_ORDER_PRODUCT";
export const UPDATE_ORDER_PRODUCT = "UPDATE_ORDER_PRODUCT";
export const DELETE_ORDER_PRODUCT = "DELETE_ORDER_PRODUCT";
export const GET_ORDER_PRODUCTS_BY_ORDER = "GET_ORDER_PRODUCTS_BY_ORDER";

export function getOrderProducts() {
  return async function (dispatch) {
    return await axios
      .get("http://localhost:3001/orderProduct/getOrderProducts")
      .then((orderProduct) => {
        dispatch({
          type: GET_ORDER_PRODUCTS,
          payload: orderProduct.data,
        });
      });
  };
}

export function getOrderProductsByOrder(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/orderProduct/getOPbyOrder/${id}`)
      .then((orderProduct) => {
        dispatch({
          type: GET_ORDER_PRODUCTS_BY_ORDER,
          payload: orderProduct.data,
        });
      });
  };
}

export function getOrderProductById(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/orderProduct/getOrderProduct/${id}`)
      .then((orderProduct) => {
        dispatch({
          type: GET_ORDER_PRODUCT_BY_ID,
          payload: orderProduct.data,
        });
      });
  };
}

export function addOrderProduct(orderProduct) {
  return async function (dispatch) {
    const { data } = await axios.post(
      "http://localhost:3001/orderProduct/addOrderProduct",
      orderProduct
    );
    dispatch({
      type: CREATE_ORDER_PRODUCT,
      payload: data,
    });
  };
}

export function deleteOrderProduct(id) {
  return async function (dispatch) {
    const { data } = await axios.delete(
      `http://localhost:3001/orderProduct/deleteOrderProduct/${id}`
    );
    dispatch({
      type: DELETE_ORDER_PRODUCT,
      payload: data,
    });
  };
}

export function updateOrderProduct(id,orderProduct) {
  console.log("estamos en update id",id, orderProduct)
  return async function (dispatch) {
    const { data } = await axios.put(`http://localhost:3001/orderProduct/updateOrderProduct/${id}`,orderProduct);
    await console.log("estamos despues de put:", data)
    dispatch({
      type: UPDATE_ORDER_PRODUCT,
      payload: {data, id}
    });
  };
}

