import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_NAME,
  ORDER_AZ,
  ORDER_ZA,
  ORDER_CHEAP,
  ORDER_EXPENSIVE,
  UPDATE_PRODUCT,
  GET_CATEGORIES,
  GET_CATEGORY_BY_NAME,
  GET_CATEGORY_BY_ID,
  UPDATE_CATEGORY,
} from "./productActions";

const initialState = {
  foundProducts: [],
  productDetail: {},
  foundCategories: [],
  categoryDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        foundProducts: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        productDetail: action.payload,
      };
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        foundProducts: action.payload,
      };
    case ORDER_AZ:
      return {
        ...state,
        foundProducts: action.payload,
      };
    case ORDER_ZA:
      return {
        ...state,
        foundProducts: action.payload,
      };
    case ORDER_CHEAP:
      return {
        ...state,
        foundProducts: action.payload,
      };
    case ORDER_EXPENSIVE:
      return {
        ...state,
        foundProducts: action.payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        productDetail: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        foundCategories: action.payload,
      };
    case GET_CATEGORY_BY_ID:
      return {
        ...state,
        categoryDetail: action.payload,
      };
    case GET_CATEGORY_BY_NAME:
      return {
        ...state,
        foundCategories: action.payload,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categoryDetail: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default reducer;
