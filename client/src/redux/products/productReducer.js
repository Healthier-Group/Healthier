import { GET_PRODUCTS } from "./productActions";

const initialState = {
  foundProducts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        foundProducts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
