import axios from "axios";
import { PRODUCTS_URL } from "../../utils/Constants";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";

export function getProducts() {
  return async function (dispatch) {
    return await axios
      .get(PRODUCTS_URL) //some link from backend, check
      .then((products) => {
        dispatch({
          type: "GET_PRODUCTS",
          payload: products.data,
        });
      });
  };
}

export function getProductById(id) {
  return function (dispatch) {
    return axios.get("http://localhost:3001/products/" + id).then((product) => {
      dispatch({
        type: "GET_PRODUCT_BY_ID",
        payload: product.data,
      });
    });
  };
}

export function getProductByName(q) {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/products/?q=" + q)
      .then((product) => {
        dispatch({
          type: "GET_PRODUCT_BY_NAME",
          payload: product.data,
        });
      });
  };
}
