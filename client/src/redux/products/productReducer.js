import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "./productActions";

const initialState = {
  foundProducts: [],
  productDetail: {}
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
    default:
      return {
        state
      };
  }
};

export default reducer;
