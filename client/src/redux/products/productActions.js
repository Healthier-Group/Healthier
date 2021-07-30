import axios from "axios";
import { API_URL, CATEGORY_URL } from "../../utils/Constants";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const ORDER_AZ = "ORDER_AZ";
export const ORDER_ZA = "ORDER_ZA";
export const ORDER_CHEAP = "ORDER_CHEAP";
export const ORDER_EXPENSIVE = "ORDER_EXPENSIVE";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const GET_CATEGORY_BY_ID = "GET_CATEGORY_BY_ID";
export const GET_CATEGORY_BY_NAME = "GET_CATEGORY_BY_NAME";
export const GET_FILTER_CATEGORY = "GET_FILTER_CATEGORY";
export const GET_REVIEWS = "GET_REVIEWS";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const GET_REVIEW_BY_ID = "GET_REVIEW_BY_ID";
export const FILTER = "FILTER";

export function getProducts() {
  return async function (dispatch) {
    return await axios
      .get(`/products/`) //some link from backend, check
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
    return axios.get("/products/" + id).then((product) => {
      dispatch({
        type: "GET_PRODUCT_BY_ID",
        payload: product.data,
      });
    });
  };
}

export function getProductByName(q) {
  return function (dispatch) {
    return axios.get("/products/?q=" + q).then((product) => {
      dispatch({
        type: "GET_PRODUCT_BY_NAME",
        payload: product.data,
      });
    });
  };
}

export function updateProduct(productId, product) {
  return async function (dispatch) {
    const { data } = await axios.put(`/products/${productId}`, product);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: data,
    });
  };
}

export function orderAZ() {
  return function (dispatch) {
    return axios.get("/products").then((product) => {
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
    return axios.get("/products").then((product) => {
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
    return axios.get("/products").then((product) => {
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
    return axios.get("/products").then((product) => {
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
export function getCategories() {
  return async function (dispatch) {
    return await axios
      .get(CATEGORY_URL) //some link from backend, check
      .then((categories) => {
        dispatch({
          type: "GET_CATEGORIES",
          payload: categories.data,
        });
      });
  };
}

export function getCategoryById(id) {
  return function (dispatch) {
    return axios
      .get("/category/" + id)
      .then((category) => {
        dispatch({
          type: "GET_CATEGORY_BY_ID",
          payload: category.data,
        });
      });
  };
}

export function getCategoryByName(q) {
  return function (dispatch) {
    return axios
      .get("/category/?q=" + q)
      .then((category) => {
        dispatch({
          type: "GET_CATEGORY_BY_NAME",
          payload: category.data,
        });
      });
  };
}

export function updateCategory(category) {
  return async function (dispatch) {
    const { data } = await axios.put(
      `${API_URL}category/${category.id}`,
      category
    );
    dispatch({
      type: UPDATE_CATEGORY,
      payload: data,
    });
  };
}

export function deleteCategory(category) {
  return async function (dispatch) {
    const { data } = await axios.delete(
      `${API_URL}category/${category.id}`,
      category
    );
    dispatch({
      type: DELETE_CATEGORY,
      payload: data,
    });
  };
}

export function filter(array) {
  return {
    type: "FILTER",
    payload: array,
  };
}

export function getReviews() {
  return async function (dispatch) {
    return await axios
      .get(`/review/`) //some link from backend, check
      .then((review) => {
        dispatch({
          type: "GET_REVIEWS",
          payload: review.data,
        });
      });
  };
}

export function updateReview(review) {
  return async function (dispatch) {
    const { data } = await axios.put(`${API_URL}review/${review.id}`, review);
    dispatch({
      type: "UPDATE_REVIEW",
      payload: data,
    });
  };
}

export function deleteReview(review) {
  return async function (dispatch) {
    const { data } = await axios.delete(
      `${API_URL}review/${review.id}`
    );
    dispatch({
      type: "DELETE_REVIEW",
      payload: data,
    });
  };
}

export function getReviewById(id) {
  return function (dispatch) {
    return axios.get("/review/" + id).then((review) => {
      dispatch({
        type: "GET_REVIEW_BY_ID",
        payload: review.data,
      });
    });
  };
}
