import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_NAME,
  ORDER_AZ,
  ORDER_ZA
} from "./productActions";

const initialState = {
  foundProducts: [],
  productDetail: {},
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
        foundProducts: action.payload
      }
    default:
      return {
        state,
      };
  }
};

export default reducer;
