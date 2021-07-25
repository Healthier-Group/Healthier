import axios from "axios";

export const GET_ORDERS = "GET_ORDERS";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";
export const CREATE_ORDER = "CREATE_ORDER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const GET_ORDER_BY_USER = "GET_ORDER_BY_USER";

export function getOrders() {
  return async function (dispatch) {
    return await axios
      .get("http://localhost:3001/order/getOrders")
      .then((order) => {
        dispatch({
          type: GET_ORDERS,
          payload: order.data,
        });
      });
  };
}

export function getOrderById(id) {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/order/getOrder/" + id)
      .then((order) => {
        dispatch({
          type: GET_ORDER_BY_ID,
          payload: order.data,
        });
      });
  };
}

export function getOrderByUser(id) {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/order/getOrderByUser/" + id)
      .then((order) => {
        dispatch({
          type: GET_ORDER_BY_USER,
          payload: order.data,
        });
      });
  };
}

export function createOrder(order) {
  return async function (dispatch) {
    const { data } = await axios.post(
      "http://localhost:3001/order/addOrder",
      order
    );
    dispatch({
      type: CREATE_ORDER,
      payload: data,
    });
  };
}

export function deleteOrder(id) {
  return async function (dispatch) {
    const { data } = await axios.delete(
      "http://localhost:3001/order/deleteOrder"
    );
    dispatch({
      type: DELETE_ORDER,
      payload: data,
    });
  };
}

export function updateOrder(order, orderId) {
  return async function (dispatch) {
    const { data } = await axios.put(
      `http://localhost:3001/order/updateOrder/${orderId}`,
      order
    );
    dispatch({
      type: UPDATE_ORDER,
      payload: data,
    });
  };
}
