import axios from "axios";
import { PRODUCTS_URL } from "../../utils/Constants";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const ORDER_AZ = "ORDER_AZ";
export const ORDER_ZA = "ORDER_ZA";
export const ORDER_CHEAP = "ORDER_CHEAP";
export const ORDER_EXPENSIVE = "ORDER_EXPENSIVE";

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
export function orderAZ() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/products").then((product) => {
      const orderAZ = product.data.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      dispatch({
        type: "ORDER_AZ",
        payload: orderAZ,
      });
    });
  };
}
export function orderZA() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/products").then((product) => {
      const orderZA = product.data.sort((b, a) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      dispatch({
        type: "ORDER_ZA",
        payload: orderZA,
      });
    });
  };
}
export function priceLower() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/products").then((product) => {
      const orderLow = product.data.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
      dispatch({
        type: "ORDER_CHEAP",
        payload: orderLow,
      });
    });
  };
}
export function priceHigh() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/products").then((product) => {
      const orderHigh = product.data.sort((b, a) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
      dispatch({
        type: "ORDER_EXPENSIVE",
        payload: orderHigh,
      });
    });
  };
}